// One tab's terminal: a ref'd div that a TerminalPump owns.
//
// Every open tab stays mounted so its xterm buffer and scroll position survive
// tab switches; inactive tabs are display:none and poll slowly (or not at all
// while the window is hidden), so a tab you are not looking at costs little.
import { useEffect, useRef } from "react";
import type { PluginRpcClient } from "@bb/plugin-sdk/app";
import { TerminalPump, type PumpMode } from "@/lib/pump";
import type { TabStatus } from "@/lib/tabs";
import type { rpcContract } from "../server";
import { cn } from "@/lib/utils";

export interface TerminalViewProps {
  rpc: PluginRpcClient<typeof rpcContract>;
  terminalId: string;
  /**
   * `active`: window open and this tab selected — fast polling, sizing, focus.
   * `background`: window open, another tab selected. `paused`: window hidden.
   */
  mode: PumpMode;
  fontSize: number;
  /** Bumped when the host theme changes; pumps re-derive their palette. */
  themeVersion: number;
  /** Bumped on window drag/resize commits; the visible pump refits. */
  fitVersion: number;
  onStatus: (terminalId: string, status: TabStatus, detail: string | null) => void;
  /** A normalised OSC title from the shell, or null when it has none. */
  onTitle: (terminalId: string, title: string | null) => void;
  /** The on-screen bar's Ctrl latch changed inside this tab's terminal. */
  onCtrlArmed: (armed: boolean) => void;
  /** Cmd/Ctrl+F landed inside this terminal. */
  onFindRequested: () => void;
  /** This tab's viewport reached, or left, the newest output. */
  onScrollState: (terminalId: string, atBottom: boolean, newOutput: boolean) => void;
  /** Live match counts for a search in this tab; null once cleared. */
  onSearchResults: (
    terminalId: string,
    results: { index: number; count: number } | null,
  ) => void;
  onActivity: (terminalId: string, activity: "output" | "bell") => void;
  onSelection: (terminalId: string, text: string) => void;
  onContextMenu: (terminalId: string, x: number, y: number) => boolean;
  onRequestRestart: (terminalId: string) => void;
  onToggleRequested: () => void;
  onNewHereRequested: () => void;
  copyText: (text: string) => void;
  onPumpReady: (terminalId: string, pump: TerminalPump) => void;
  onPumpGone: (terminalId: string) => void;
}

export function TerminalView({
  rpc,
  terminalId,
  mode,
  fontSize,
  themeVersion,
  fitVersion,
  onPumpReady,
  onPumpGone,
  ...handlers
}: TerminalViewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pumpRef = useRef<TerminalPump | null>(null);

  // Callbacks live in a ref so the pump effect depends only on terminalId and
  // never tears down a live terminal because a parent re-rendered.
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;

  useEffect(() => {
    const container = containerRef.current;
    if (container === null) return;
    const h = () => handlersRef.current;

    const pump = new TerminalPump({
      container,
      rpc,
      terminalId,
      fontSize,
      onStatus: (status, detail) => h().onStatus(terminalId, status, detail),
      onTitle: (title) => h().onTitle(terminalId, title),
      onCtrlArmed: (armed) => h().onCtrlArmed(armed),
      onFindRequested: () => h().onFindRequested(),
      onScrollState: (bottom, newOutput) =>
        h().onScrollState(terminalId, bottom, newOutput),
      onSearchResults: (results) => h().onSearchResults(terminalId, results),
      onActivity: (activity) => h().onActivity(terminalId, activity),
      onSelection: (text) => h().onSelection(terminalId, text),
      onContextMenu: (x, y) => h().onContextMenu(terminalId, x, y),
      onRequestRestart: () => h().onRequestRestart(terminalId),
      onToggleRequested: () => h().onToggleRequested(),
      onNewHereRequested: () => h().onNewHereRequested(),
      copyText: (text) => h().copyText(text),
    });
    pumpRef.current = pump;
    onPumpReady(terminalId, pump);

    // Let layout settle before the first fit so cols/rows are real, then
    // replay scrollback and start polling.
    const raf = window.requestAnimationFrame(() => {
      pump.fit();
      pump.start();
    });

    return () => {
      window.cancelAnimationFrame(raf);
      onPumpGone(terminalId);
      pumpRef.current = null;
      pump.dispose();
    };
    // rpc and fontSize are stable at mount; later font changes apply below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terminalId]);

  useEffect(() => {
    pumpRef.current?.setMode(mode);
    if (mode === "active") pumpRef.current?.focus();
  }, [mode]);

  useEffect(() => {
    pumpRef.current?.setFontSize(fontSize);
  }, [fontSize]);

  useEffect(() => {
    pumpRef.current?.refreshTheme();
  }, [themeVersion]);

  useEffect(() => {
    if (mode === "active") pumpRef.current?.fit();
  }, [fitVersion, mode]);

  return (
    <div
      ref={containerRef}
      className={cn("size-full", mode === "active" ? "block" : "hidden")}
    />
  );
}
