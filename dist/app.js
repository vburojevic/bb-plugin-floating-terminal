var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// bb-plugin-runtime-shim:react
var react_exports = {};
__export(react_exports, {
  Activity: () => Activity,
  Children: () => Children,
  Component: () => Component,
  Fragment: () => Fragment,
  Profiler: () => Profiler,
  PureComponent: () => PureComponent,
  StrictMode: () => StrictMode,
  Suspense: () => Suspense,
  act: () => act,
  cache: () => cache,
  cacheSignal: () => cacheSignal,
  captureOwnerStack: () => captureOwnerStack,
  cloneElement: () => cloneElement,
  createContext: () => createContext,
  createElement: () => createElement,
  createRef: () => createRef,
  default: () => react_default,
  forwardRef: () => forwardRef,
  isValidElement: () => isValidElement,
  lazy: () => lazy,
  memo: () => memo,
  startTransition: () => startTransition,
  unstable_useCacheRefresh: () => unstable_useCacheRefresh,
  use: () => use,
  useActionState: () => useActionState,
  useCallback: () => useCallback,
  useContext: () => useContext,
  useDebugValue: () => useDebugValue,
  useDeferredValue: () => useDeferredValue,
  useEffect: () => useEffect,
  useEffectEvent: () => useEffectEvent,
  useId: () => useId,
  useImperativeHandle: () => useImperativeHandle,
  useInsertionEffect: () => useInsertionEffect,
  useLayoutEffect: () => useLayoutEffect,
  useMemo: () => useMemo,
  useOptimistic: () => useOptimistic,
  useReducer: () => useReducer,
  useRef: () => useRef,
  useState: () => useState,
  useSyncExternalStore: () => useSyncExternalStore,
  useTransition: () => useTransition,
  version: () => version
});
var runtime = globalThis.__bbPluginRuntime;
if (runtime == null || runtime.react == null) {
  throw new Error('Cannot load "react": this bundle must be loaded by the BB app, which provides the shared plugin runtime (globalThis.__bbPluginRuntime).');
}
var mod = runtime.react;
var react_default = mod;
var {
  Activity,
  Children,
  Component,
  Fragment,
  Profiler,
  PureComponent,
  StrictMode,
  Suspense,
  act,
  cache,
  cacheSignal,
  captureOwnerStack,
  cloneElement,
  createContext,
  createElement,
  createRef,
  forwardRef,
  isValidElement,
  lazy,
  memo,
  startTransition,
  unstable_useCacheRefresh,
  use,
  useActionState,
  useCallback,
  useContext,
  useDebugValue,
  useDeferredValue,
  useEffect,
  useEffectEvent,
  useId,
  useImperativeHandle,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useOptimistic,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  useTransition,
  version
} = mod;

// bb-plugin-runtime-shim:react-dom/client
var runtime2 = globalThis.__bbPluginRuntime;
if (runtime2 == null || runtime2.reactDomClient == null) {
  throw new Error('Cannot load "react-dom/client": this bundle must be loaded by the BB app, which provides the shared plugin runtime (globalThis.__bbPluginRuntime).');
}
var mod2 = runtime2.reactDomClient;
var {
  createRoot,
  hydrateRoot,
  version: version2
} = mod2;

// bb-plugin-runtime-shim:@bb/plugin-sdk/app
var runtime3 = globalThis.__bbPluginRuntime;
if (runtime3 == null || runtime3.pluginSdkApp == null) {
  throw new Error('Cannot load "@bb/plugin-sdk/app": this bundle must be loaded by the BB app, which provides the shared plugin runtime (globalThis.__bbPluginRuntime).');
}
var mod3 = runtime3.pluginSdkApp;
var {
  Markdown,
  ThreadChat,
  definePluginApp,
  experimental_NewThreadComposer,
  experimental_useSidebarThreadActions,
  experimental_useSidebarThreadPullRequest,
  experimental_useSidebarThreadSplit,
  experimental_useSidebarThreads,
  useBbContext,
  useBbNavigate,
  useComposer,
  useComposerView,
  useRealtime,
  useRealtimeConnectionState,
  useRpc,
  useSettings
} = mod3;

// bb-plugin-runtime-shim:sonner
var runtime4 = globalThis.__bbPluginRuntime;
if (runtime4 == null || runtime4.sonner == null) {
  throw new Error('Cannot load "sonner": this bundle must be loaded by the BB app, which provides the shared plugin runtime (globalThis.__bbPluginRuntime).');
}
var mod4 = runtime4.sonner;
var {
  Toaster,
  toast,
  useSonner
} = mod4;

// bb-plugin-runtime-shim:@radix-ui/react-tooltip
var runtime5 = globalThis.__bbPluginRuntime;
if (runtime5 == null || runtime5.radixTooltip == null) {
  throw new Error('Cannot load "@radix-ui/react-tooltip": this bundle must be loaded by the BB app, which provides the shared plugin runtime (globalThis.__bbPluginRuntime).');
}
var mod5 = runtime5.radixTooltip;
var {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
  Trigger,
  createTooltipScope
} = mod5;

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o2 = e.length;
    for (t = 0; t < o2; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o2 = arguments.length; f < o2; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// node_modules/tailwind-merge/dist/bundle-mjs.mjs
var concatArrays = (array1, array2) => {
  const combinedArray = new Array(array1.length + array2.length);
  for (let i8 = 0; i8 < array1.length; i8++) {
    combinedArray[i8] = array1[i8];
  }
  for (let i8 = 0; i8 < array2.length; i8++) {
    combinedArray[array1.length + i8] = array2[i8];
  }
  return combinedArray;
};
var createClassValidatorObject = (classGroupId, validator) => ({
  classGroupId,
  validator
});
var createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
  nextPart,
  validators,
  classGroupId
});
var CLASS_PART_SEPARATOR = "-";
var EMPTY_CONFLICTS = [];
var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
var createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    if (className.startsWith("[") && className.endsWith("]")) {
      return getGroupIdForArbitraryProperty(className);
    }
    const classParts = className.split(CLASS_PART_SEPARATOR);
    const startIndex = classParts[0] === "" && classParts.length > 1 ? 1 : 0;
    return getGroupRecursive(classParts, startIndex, classMap);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    if (hasPostfixModifier) {
      const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
      const baseConflicts = conflictingClassGroups[classGroupId];
      if (modifierConflicts) {
        if (baseConflicts) {
          return concatArrays(baseConflicts, modifierConflicts);
        }
        return modifierConflicts;
      }
      return baseConflicts || EMPTY_CONFLICTS;
    }
    return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
var getGroupRecursive = (classParts, startIndex, classPartObject) => {
  const classPathsLength = classParts.length - startIndex;
  if (classPathsLength === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[startIndex];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  if (nextClassPartObject) {
    const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
    if (result) return result;
  }
  const validators = classPartObject.validators;
  if (validators === null) {
    return void 0;
  }
  const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
  const validatorsLength = validators.length;
  for (let i8 = 0; i8 < validatorsLength; i8++) {
    const validatorObj = validators[i8];
    if (validatorObj.validator(classRest)) {
      return validatorObj.classGroupId;
    }
  }
  return void 0;
};
var getGroupIdForArbitraryProperty = (className) => className.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const content = className.slice(1, -1);
  const colonIndex = content.indexOf(":");
  const property = content.slice(0, colonIndex);
  return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
})();
var createClassMap = (config) => {
  const {
    theme,
    classGroups
  } = config;
  return processClassGroups(classGroups, theme);
};
var processClassGroups = (classGroups, theme) => {
  const classMap = createClassPartObject();
  for (const classGroupId in classGroups) {
    const group = classGroups[classGroupId];
    processClassesRecursively(group, classMap, classGroupId, theme);
  }
  return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  const len = classGroup.length;
  for (let i8 = 0; i8 < len; i8++) {
    const classDefinition = classGroup[i8];
    processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
  }
};
var processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (typeof classDefinition === "string") {
    processStringDefinition(classDefinition, classPartObject, classGroupId);
    return;
  }
  if (typeof classDefinition === "function") {
    processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
    return;
  }
  processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
var processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
  const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
  classPartObjectToEdit.classGroupId = classGroupId;
};
var processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (isThemeGetter(classDefinition)) {
    processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
    return;
  }
  if (classPartObject.validators === null) {
    classPartObject.validators = [];
  }
  classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
var processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  const entries = Object.entries(classDefinition);
  const len = entries.length;
  for (let i8 = 0; i8 < len; i8++) {
    const [key, value] = entries[i8];
    processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
  }
};
var getPart = (classPartObject, path) => {
  let current = classPartObject;
  const parts = path.split(CLASS_PART_SEPARATOR);
  const len = parts.length;
  for (let i8 = 0; i8 < len; i8++) {
    const part = parts[i8];
    let next = current.nextPart.get(part);
    if (!next) {
      next = createClassPartObject();
      current.nextPart.set(part, next);
    }
    current = next;
  }
  return current;
};
var isThemeGetter = (func) => "isThemeGetter" in func && func.isThemeGetter === true;
var createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache2 = /* @__PURE__ */ Object.create(null);
  let previousCache = /* @__PURE__ */ Object.create(null);
  const update = (key, value) => {
    cache2[key] = value;
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache2;
      cache2 = /* @__PURE__ */ Object.create(null);
    }
  };
  return {
    get(key) {
      let value = cache2[key];
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache[key]) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (key in cache2) {
        cache2[key] = value;
      } else {
        update(key, value);
      }
    }
  };
};
var IMPORTANT_MODIFIER = "!";
var MODIFIER_SEPARATOR = ":";
var EMPTY_MODIFIERS = [];
var createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
  modifiers,
  hasImportantModifier,
  baseClassName,
  maybePostfixModifierPosition,
  isExternal
});
var createParseClassName = (config) => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    const len = className.length;
    for (let index = 0; index < len; index++) {
      const currentCharacter = className[index];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + 1;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") bracketDepth++;
      else if (currentCharacter === "]") bracketDepth--;
      else if (currentCharacter === "(") parenDepth++;
      else if (currentCharacter === ")") parenDepth--;
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
    let baseClassName = baseClassNameWithImportantModifier;
    let hasImportantModifier = false;
    if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
      baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
      hasImportantModifier = true;
    } else if (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)
    ) {
      baseClassName = baseClassNameWithImportantModifier.slice(1);
      hasImportantModifier = true;
    }
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR;
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
};
var createSortModifiers = (config) => {
  const modifierWeights = /* @__PURE__ */ new Map();
  config.orderSensitiveModifiers.forEach((mod11, index) => {
    modifierWeights.set(mod11, 1e6 + index);
  });
  return (modifiers) => {
    const result = [];
    let currentSegment = [];
    for (let i8 = 0; i8 < modifiers.length; i8++) {
      const modifier = modifiers[i8];
      const isArbitrary = modifier[0] === "[";
      const isOrderSensitive = modifierWeights.has(modifier);
      if (isArbitrary || isOrderSensitive) {
        if (currentSegment.length > 0) {
          currentSegment.sort();
          result.push(...currentSegment);
          currentSegment = [];
        }
        result.push(modifier);
      } else {
        currentSegment.push(modifier);
      }
    }
    if (currentSegment.length > 0) {
      currentSegment.sort();
      result.push(...currentSegment);
    }
    return result;
  };
};
var createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  postfixLookupClassGroupIds: createPostfixLookupClassGroupIds(config),
  ...createClassGroupUtils(config)
});
var createPostfixLookupClassGroupIds = (config) => {
  const lookup = /* @__PURE__ */ Object.create(null);
  const classGroupIds = config.postfixLookupClassGroups;
  if (classGroupIds) {
    for (let i8 = 0; i8 < classGroupIds.length; i8++) {
      lookup[classGroupIds[i8]] = true;
    }
  }
  return lookup;
};
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers,
    postfixLookupClassGroupIds
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId;
    if (hasPostfixModifier) {
      const baseClassNameWithoutPostfix = baseClassName.substring(0, maybePostfixModifierPosition);
      classGroupId = getClassGroupId(baseClassNameWithoutPostfix);
      const classGroupIdWithPostfix = classGroupId && postfixLookupClassGroupIds[classGroupId] ? getClassGroupId(baseClassName) : void 0;
      if (classGroupIdWithPostfix && classGroupIdWithPostfix !== classGroupId) {
        classGroupId = classGroupIdWithPostfix;
        hasPostfixModifier = false;
      }
    } else {
      classGroupId = getClassGroupId(baseClassName);
    }
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.indexOf(classId) > -1) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i8 = 0; i8 < conflictGroups.length; ++i8) {
      const group = conflictGroups[i8];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
var twJoin = (...classLists) => {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < classLists.length) {
    if (argument = classLists[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
var toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k5 = 0; k5 < mix.length; k5++) {
    if (mix[k5]) {
      if (resolvedValue = toValue(mix[k5])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
var createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall;
  const initTailwindMerge = (classList) => {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  };
  const tailwindMerge = (classList) => {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  };
  functionToCall = initTailwindMerge;
  return (...args) => functionToCall(twJoin(...args));
};
var fallbackThemeArr = [];
var fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || fallbackThemeArr;
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = (value) => fractionRegex.test(value);
var isNumber = (value) => !!value && !Number.isNaN(Number(value));
var isInteger = (value) => !!value && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var isAny = () => true;
var isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
var isNamedContainerQuery = (value) => value.startsWith("@container") && (value[10] === "/" && value[11] !== void 0 || value[11] === "s" && value[16] !== void 0 && value.startsWith("-size/", 10) || value[11] === "n" && value[18] !== void 0 && value.startsWith("-normal/", 10));
var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
var isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
var isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
var getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
var isLabelPosition = (label) => label === "position" || label === "percentage";
var isLabelImage = (label) => label === "image" || label === "url";
var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label) => label === "length";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelWeight = (label) => label === "number" || label === "weight";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig = () => {
  const themeColor = fromTheme("color");
  const themeFont = fromTheme("font");
  const themeText = fromTheme("text");
  const themeFontWeight = fromTheme("font-weight");
  const themeTracking = fromTheme("tracking");
  const themeLeading = fromTheme("leading");
  const themeBreakpoint = fromTheme("breakpoint");
  const themeContainer = fromTheme("container");
  const themeSpacing = fromTheme("spacing");
  const themeRadius = fromTheme("radius");
  const themeShadow = fromTheme("shadow");
  const themeInsetShadow = fromTheme("inset-shadow");
  const themeTextShadow = fromTheme("text-shadow");
  const themeDropShadow = fromTheme("drop-shadow");
  const themeBlur = fromTheme("blur");
  const themePerspective = fromTheme("perspective");
  const themeAspect = fromTheme("aspect");
  const themeEase = fromTheme("ease");
  const themeAnimate = fromTheme("animate");
  const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const scalePosition = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ];
  const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
  const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const scaleOverscroll = () => ["auto", "contain", "none"];
  const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
  const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
  const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
  }, isInteger, isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
  const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
  const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
  const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
  const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleSizingInline = () => [isFraction, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleSizingBlock = () => [isFraction, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
  const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
    position: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleBgRepeat = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }];
  const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
    size: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
  const scaleRadius = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength];
  const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
  const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
  const scaleBlur = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      "drop-shadow": [isTshirtSize],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ["px", isNumber],
      text: [isTshirtSize],
      "text-shadow": [isTshirtSize],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [isNamedContainerQuery],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: scalePositionWithArbitrary()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": scaleInset(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: scaleInset()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": scaleInset(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: scaleInset()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": scaleInset()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: scaleMargin()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...scaleSizingInline()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...scaleSizingInline()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...scaleSizingInline()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...scaleSizingBlock()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...scaleSizingBlock()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...scaleSizingBlock()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...scaleSizing()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariableWeight, isArbitraryWeight]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isArbitraryVariableFamilyName, isArbitraryFamilyName, themeFont]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [isArbitraryValue]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          themeLeading,
          ...scaleUnambiguousSpacing()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [isInteger, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: scaleBgPosition()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: scaleBgRepeat()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: scaleBgSize()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ["", isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": scaleBorderWidth()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: scaleColor()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": scaleColor()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: scaleColor()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [isNumber, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [isNumber]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": scaleMaskImagePosition()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": scaleMaskImagePosition()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": scaleColor()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": scaleColor()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": scaleMaskImagePosition()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": scaleMaskImagePosition()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": scaleColor()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": scaleColor()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": scaleMaskImagePosition()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": scaleMaskImagePosition()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": scaleColor()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": scaleColor()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": scaleMaskImagePosition()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": scaleMaskImagePosition()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": scaleColor()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": scaleColor()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": scaleMaskImagePosition()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": scaleMaskImagePosition()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": scaleColor()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": scaleColor()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": scaleMaskImagePosition()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": scaleMaskImagePosition()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": scaleColor()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": scaleColor()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": scaleMaskImagePosition()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": scaleMaskImagePosition()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": scaleColor()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": scaleColor()
      }],
      "mask-image-radial": [{
        "mask-radial": [isArbitraryVariable, isArbitraryValue]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": scaleMaskImagePosition()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": scaleMaskImagePosition()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": scaleColor()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": scaleColor()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": scalePosition()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [isNumber]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": scaleMaskImagePosition()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": scaleMaskImagePosition()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": scaleColor()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": scaleColor()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: scaleBgPosition()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: scaleBgRepeat()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: scaleBgSize()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeDropShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": scaleColor()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": scalePositionWithArbitrary()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: scalePositionWithArbitrary()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [isInteger, isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": scaleColor()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": scaleColor()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
};
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);

// lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// lib/portal-scope.ts
function usePortalScopeProps() {
  const pluginId = true ? "floating-terminal" : void 0;
  return {
    "data-bb-portaled-overlay": "",
    "data-bb-plugin-root": "",
    ...pluginId !== void 0 ? { "data-bb-plugin": pluginId } : {}
  };
}

// bb-plugin-runtime-shim:react/jsx-runtime
var runtime6 = globalThis.__bbPluginRuntime;
if (runtime6 == null || runtime6.jsxRuntime == null) {
  throw new Error('Cannot load "react/jsx-runtime": this bundle must be loaded by the BB app, which provides the shared plugin runtime (globalThis.__bbPluginRuntime).');
}
var mod6 = runtime6.jsxRuntime;
var {
  Fragment: Fragment2,
  jsx,
  jsxs
} = mod6;

// components/ui/tooltip.tsx
var TooltipProvider2 = Provider;
var Tooltip2 = Root;
var TooltipTrigger2 = Trigger;
var TooltipContent2 = forwardRef(function TooltipContentComponent({
  avoidCollisions = true,
  className,
  collisionPadding = 8,
  sideOffset = 4,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsx(
    Content,
    {
      ref,
      ...usePortalScopeProps(),
      avoidCollisions,
      collisionPadding,
      sideOffset,
      className: cn(
        "z-50 max-w-[min(20rem,var(--radix-tooltip-content-available-width))] overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground break-words animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      ),
      ...props
    }
  ) });
});
TooltipContent2.displayName = Content.displayName;

// components/ui/hooks/use-media-query.ts
var mediaQueryCache = /* @__PURE__ */ new Map();
function createMediaQueryRef(query) {
  if (typeof window === "undefined") return null;
  let ref = mediaQueryCache.get(query);
  if (ref) return ref;
  const mql = window.matchMedia(query);
  const listeners2 = /* @__PURE__ */ new Set();
  const onChange = () => {
    for (const listener of listeners2) listener();
  };
  ref = {
    mql,
    subscribe(notify) {
      const wasEmpty = listeners2.size === 0;
      listeners2.add(notify);
      if (wasEmpty) {
        mql.addEventListener("change", onChange);
      }
      return () => {
        listeners2.delete(notify);
        if (listeners2.size === 0) {
          mql.removeEventListener("change", onChange);
          mediaQueryCache.delete(query);
        }
      };
    }
  };
  mediaQueryCache.set(query, ref);
  return ref;
}
function subscribeMediaQuery(query, notify) {
  return createMediaQueryRef(query)?.subscribe(notify) ?? (() => {
  });
}
function getMediaQuerySnapshot(query) {
  if (typeof window === "undefined") return false;
  return mediaQueryCache.get(query)?.mql.matches ?? window.matchMedia(query).matches;
}
function useMediaQuery(query) {
  return useSyncExternalStore(
    (notify) => subscribeMediaQuery(query, notify),
    () => getMediaQuerySnapshot(query),
    () => false
  );
}

// components/ui/hooks/use-compact-viewport.tsx
var COMPACT_VIEWPORT_QUERY = "(max-width: 767px)";
var CompactViewportOverrideContext = createContext(null);
function useIsCompactViewport() {
  const override = useContext(CompactViewportOverrideContext);
  const isCompactViewport = useMediaQuery(COMPACT_VIEWPORT_QUERY);
  if (override !== null) {
    return override;
  }
  return isCompactViewport;
}

// node_modules/cmdk/dist/chunk-NZJY6EH4.mjs
var U = 1;
var Y = 0.9;
var H = 0.8;
var J = 0.17;
var p = 0.1;
var u = 0.999;
var $ = 0.9999;
var k = 0.99;
var m = /[\\\/_+.#"@\[\(\{&]/;
var B = /[\\\/_+.#"@\[\(\{&]/g;
var K = /[\s-]/;
var X = /[\s-]/g;
function G(_4, C4, h2, P4, A2, f, O3) {
  if (f === C4.length) return A2 === _4.length ? U : k;
  var T2 = `${A2},${f}`;
  if (O3[T2] !== void 0) return O3[T2];
  for (var L4 = P4.charAt(f), c = h2.indexOf(L4, A2), S2 = 0, E, N3, R3, M4; c >= 0; ) E = G(_4, C4, h2, P4, c + 1, f + 1, O3), E > S2 && (c === A2 ? E *= U : m.test(_4.charAt(c - 1)) ? (E *= H, R3 = _4.slice(A2, c - 1).match(B), R3 && A2 > 0 && (E *= Math.pow(u, R3.length))) : K.test(_4.charAt(c - 1)) ? (E *= Y, M4 = _4.slice(A2, c - 1).match(X), M4 && A2 > 0 && (E *= Math.pow(u, M4.length))) : (E *= J, A2 > 0 && (E *= Math.pow(u, c - A2))), _4.charAt(c) !== C4.charAt(f) && (E *= $)), (E < p && h2.charAt(c - 1) === P4.charAt(f + 1) || P4.charAt(f + 1) === P4.charAt(f) && h2.charAt(c - 1) !== P4.charAt(f)) && (N3 = G(_4, C4, h2, P4, c + 1, f + 2, O3), N3 * p > E && (E = N3 * p)), E > S2 && (S2 = E), c = h2.indexOf(L4, c + 1);
  return O3[T2] = S2, S2;
}
function D(_4) {
  return _4.toLowerCase().replace(X, " ");
}
function W(_4, C4, h2) {
  return _4 = h2 && h2.length > 0 ? `${_4 + " " + h2.join(" ")}` : _4, G(_4, C4, D(_4), D(C4), 0, 0, {});
}

// bb-plugin-runtime-shim:@radix-ui/react-dialog
var runtime7 = globalThis.__bbPluginRuntime;
if (runtime7 == null || runtime7.radixDialog == null) {
  throw new Error('Cannot load "@radix-ui/react-dialog": this bundle must be loaded by the BB app, which provides the shared plugin runtime (globalThis.__bbPluginRuntime).');
}
var mod7 = runtime7.radixDialog;
var {
  Close,
  Content: Content2,
  Description,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Overlay,
  Portal: Portal2,
  Root: Root2,
  Title,
  Trigger: Trigger2,
  WarningProvider,
  createDialogScope
} = mod7;

// bb-plugin-runtime-shim:react-dom
var runtime8 = globalThis.__bbPluginRuntime;
if (runtime8 == null || runtime8.reactDom == null) {
  throw new Error('Cannot load "react-dom": this bundle must be loaded by the BB app, which provides the shared plugin runtime (globalThis.__bbPluginRuntime).');
}
var mod8 = runtime8.reactDom;
var {
  createPortal,
  flushSync,
  preconnect,
  prefetchDNS,
  preinit,
  preinitModule,
  preload,
  preloadModule,
  requestFormReset,
  unstable_batchedUpdates,
  useFormState,
  useFormStatus,
  version: version3
} = mod8;

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp2 = Object.defineProperty;
var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
__name(setRef, "setRef");
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i8 = 0; i8 < cleanups.length; i8++) {
          const cleanup = cleanups[i8];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i8], null);
          }
        }
      };
    }
  };
}
__name(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
  return useCallback(composeRefs(...refs), refs);
}
__name(useComposedRefs, "useComposedRefs");

// node_modules/@radix-ui/react-slot/dist/index.mjs
var __defProp3 = Object.defineProperty;
var __name2 = (target, value) => __defProp3(target, "name", { value, configurable: true });
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const Slot2 = forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    let slottableElement = null;
    let hasSlottable = false;
    const newChildren = [];
    if (isLazyComponent(children) && typeof use2 === "function") {
      children = use2(children._payload);
    }
    Children.forEach(children, (maybeSlottable) => {
      if (isSlottable(maybeSlottable)) {
        hasSlottable = true;
        const slottable = maybeSlottable;
        let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
        if (isLazyComponent(child) && typeof use2 === "function") {
          child = use2(child._payload);
        }
        slottableElement = getSlottableElementFromSlottable(slottable, child);
        newChildren.push(slottableElement?.props?.children);
      } else {
        newChildren.push(maybeSlottable);
      }
    });
    if (slottableElement) {
      slottableElement = cloneElement(slottableElement, void 0, newChildren);
    } else if (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !hasSlottable && Children.count(children) === 1 && isValidElement(children)
    ) {
      slottableElement = children;
    }
    const slottableElementRef = slottableElement ? getElementRef(slottableElement) : void 0;
    const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
    if (!slottableElement) {
      if (children || children === 0) {
        throw new Error(
          hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName)
        );
      }
      return children;
    }
    const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
    if (slottableElement.type !== Fragment) {
      mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
    }
    return cloneElement(slottableElement, mergedProps);
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
__name2(createSlot, "createSlot");
var Slot = /* @__PURE__ */ createSlot("Slot");
var SLOTTABLE_IDENTIFIER = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
  const Slottable2 = /* @__PURE__ */ __name2((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
__name2(createSlottable, "createSlottable");
var getSlottableElementFromSlottable = /* @__PURE__ */ __name2((slottable, child) => {
  if ("child" in slottable.props) {
    const child2 = slottable.props.child;
    if (!isValidElement(child2)) return null;
    return cloneElement(child2, void 0, slottable.props.children(child2.props.children));
  }
  return isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
__name2(mergeProps, "mergeProps");
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
__name2(getElementRef, "getElementRef");
function isSlottable(child) {
  return isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
__name2(isSlottable, "isSlottable");
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
__name2(isLazyComponent, "isLazyComponent");
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
__name2(isPromiseLike, "isPromiseLike");
var createSlotError = /* @__PURE__ */ __name2((ownerName) => {
  return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError = /* @__PURE__ */ __name2((ownerName) => {
  return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use2 = react_exports[" use ".trim().toString()];

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var __defProp4 = Object.defineProperty;
var __name3 = (target, value) => __defProp4(target, "name", { value, configurable: true });
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot2 = createSlot(`Primitive.${node}`);
  const Node2 = forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) flushSync(() => target.dispatchEvent(event));
}
__name3(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var useLayoutEffect2 = globalThis?.document ? useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-id/dist/index.mjs
var __defProp5 = Object.defineProperty;
var __name4 = (target, value) => __defProp5(target, "name", { value, configurable: true });
var useReactId = react_exports[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId2(deterministicId) {
  const [id, setId] = useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}
__name4(useId2, "useId");

// node_modules/cmdk/dist/index.mjs
var N = '[cmdk-group=""]';
var Y2 = '[cmdk-group-items=""]';
var be = '[cmdk-group-heading=""]';
var le = '[cmdk-item=""]';
var ce = `${le}:not([aria-disabled="true"])`;
var Z = "cmdk-item-select";
var T = "data-value";
var Re = (r6, o2, n) => W(r6, o2, n);
var ue = createContext(void 0);
var K2 = () => useContext(ue);
var de = createContext(void 0);
var ee = () => useContext(de);
var fe = createContext(void 0);
var me = forwardRef((r6, o2) => {
  let n = L(() => {
    var e, a;
    return { search: "", value: (a = (e = r6.value) != null ? e : r6.defaultValue) != null ? a : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), u2 = L(() => /* @__PURE__ */ new Set()), c = L(() => /* @__PURE__ */ new Map()), d = L(() => /* @__PURE__ */ new Map()), f = L(() => /* @__PURE__ */ new Set()), p2 = pe(r6), { label: b2, children: m2, value: R3, onValueChange: x, filter: C4, shouldFilter: S2, loop: A2, disablePointerSelection: ge4 = false, vimBindings: j3 = true, ...O3 } = r6, $3 = useId2(), q2 = useId2(), _4 = useId2(), I2 = useRef(null), v3 = ke();
  k2(() => {
    if (R3 !== void 0) {
      let e = R3.trim();
      n.current.value = e, E.emit();
    }
  }, [R3]), k2(() => {
    v3(6, ne3);
  }, []);
  let E = useMemo(() => ({ subscribe: (e) => (f.current.add(e), () => f.current.delete(e)), snapshot: () => n.current, setState: (e, a, s15) => {
    var i8, l2, g2, y;
    if (!Object.is(n.current[e], a)) {
      if (n.current[e] = a, e === "search") J5(), z3(), v3(1, W2);
      else if (e === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let h2 = document.getElementById(_4);
          h2 ? h2.focus() : (i8 = document.getElementById($3)) == null || i8.focus();
        }
        if (v3(7, () => {
          var h2;
          n.current.selectedItemId = (h2 = M4()) == null ? void 0 : h2.id, E.emit();
        }), s15 || v3(5, ne3), ((l2 = p2.current) == null ? void 0 : l2.value) !== void 0) {
          let h2 = a != null ? a : "";
          (y = (g2 = p2.current).onValueChange) == null || y.call(g2, h2);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    f.current.forEach((e) => e());
  } }), []), U5 = useMemo(() => ({ value: (e, a, s15) => {
    var i8;
    a !== ((i8 = d.current.get(e)) == null ? void 0 : i8.value) && (d.current.set(e, { value: a, keywords: s15 }), n.current.filtered.items.set(e, te4(a, s15)), v3(2, () => {
      z3(), E.emit();
    }));
  }, item: (e, a) => (u2.current.add(e), a && (c.current.has(a) ? c.current.get(a).add(e) : c.current.set(a, /* @__PURE__ */ new Set([e]))), v3(3, () => {
    J5(), z3(), n.current.value || W2(), E.emit();
  }), () => {
    d.current.delete(e), u2.current.delete(e), n.current.filtered.items.delete(e);
    let s15 = M4();
    v3(4, () => {
      J5(), (s15 == null ? void 0 : s15.getAttribute("id")) === e && W2(), E.emit();
    });
  }), group: (e) => (c.current.has(e) || c.current.set(e, /* @__PURE__ */ new Set()), () => {
    d.current.delete(e), c.current.delete(e);
  }), filter: () => p2.current.shouldFilter, label: b2 || r6["aria-label"], getDisablePointerSelection: () => p2.current.disablePointerSelection, listId: $3, inputId: _4, labelId: q2, listInnerRef: I2 }), []);
  function te4(e, a) {
    var i8, l2;
    let s15 = (l2 = (i8 = p2.current) == null ? void 0 : i8.filter) != null ? l2 : Re;
    return e ? s15(e, n.current.search, a) : 0;
  }
  function z3() {
    if (!n.current.search || p2.current.shouldFilter === false) return;
    let e = n.current.filtered.items, a = [];
    n.current.filtered.groups.forEach((i8) => {
      let l2 = c.current.get(i8), g2 = 0;
      l2.forEach((y) => {
        let h2 = e.get(y);
        g2 = Math.max(h2, g2);
      }), a.push([i8, g2]);
    });
    let s15 = I2.current;
    V2().sort((i8, l2) => {
      var h2, F3;
      let g2 = i8.getAttribute("id"), y = l2.getAttribute("id");
      return ((h2 = e.get(y)) != null ? h2 : 0) - ((F3 = e.get(g2)) != null ? F3 : 0);
    }).forEach((i8) => {
      let l2 = i8.closest(Y2);
      l2 ? l2.appendChild(i8.parentElement === l2 ? i8 : i8.closest(`${Y2} > *`)) : s15.appendChild(i8.parentElement === s15 ? i8 : i8.closest(`${Y2} > *`));
    }), a.sort((i8, l2) => l2[1] - i8[1]).forEach((i8) => {
      var g2;
      let l2 = (g2 = I2.current) == null ? void 0 : g2.querySelector(`${N}[${T}="${encodeURIComponent(i8[0])}"]`);
      l2 == null || l2.parentElement.appendChild(l2);
    });
  }
  function W2() {
    let e = V2().find((s15) => s15.getAttribute("aria-disabled") !== "true"), a = e == null ? void 0 : e.getAttribute(T);
    E.setState("value", a || void 0);
  }
  function J5() {
    var a, s15, i8, l2;
    if (!n.current.search || p2.current.shouldFilter === false) {
      n.current.filtered.count = u2.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let e = 0;
    for (let g2 of u2.current) {
      let y = (s15 = (a = d.current.get(g2)) == null ? void 0 : a.value) != null ? s15 : "", h2 = (l2 = (i8 = d.current.get(g2)) == null ? void 0 : i8.keywords) != null ? l2 : [], F3 = te4(y, h2);
      n.current.filtered.items.set(g2, F3), F3 > 0 && e++;
    }
    for (let [g2, y] of c.current) for (let h2 of y) if (n.current.filtered.items.get(h2) > 0) {
      n.current.filtered.groups.add(g2);
      break;
    }
    n.current.filtered.count = e;
  }
  function ne3() {
    var a, s15, i8;
    let e = M4();
    e && (((a = e.parentElement) == null ? void 0 : a.firstChild) === e && ((i8 = (s15 = e.closest(N)) == null ? void 0 : s15.querySelector(be)) == null || i8.scrollIntoView({ block: "nearest" })), e.scrollIntoView({ block: "nearest" }));
  }
  function M4() {
    var e;
    return (e = I2.current) == null ? void 0 : e.querySelector(`${le}[aria-selected="true"]`);
  }
  function V2() {
    var e;
    return Array.from(((e = I2.current) == null ? void 0 : e.querySelectorAll(ce)) || []);
  }
  function X6(e) {
    let s15 = V2()[e];
    s15 && E.setState("value", s15.getAttribute(T));
  }
  function Q5(e) {
    var g2;
    let a = M4(), s15 = V2(), i8 = s15.findIndex((y) => y === a), l2 = s15[i8 + e];
    (g2 = p2.current) != null && g2.loop && (l2 = i8 + e < 0 ? s15[s15.length - 1] : i8 + e === s15.length ? s15[0] : s15[i8 + e]), l2 && E.setState("value", l2.getAttribute(T));
  }
  function re4(e) {
    let a = M4(), s15 = a == null ? void 0 : a.closest(N), i8;
    for (; s15 && !i8; ) s15 = e > 0 ? we(s15, N) : De(s15, N), i8 = s15 == null ? void 0 : s15.querySelector(ce);
    i8 ? E.setState("value", i8.getAttribute(T)) : Q5(e);
  }
  let oe = () => X6(V2().length - 1), ie4 = (e) => {
    e.preventDefault(), e.metaKey ? oe() : e.altKey ? re4(1) : Q5(1);
  }, se3 = (e) => {
    e.preventDefault(), e.metaKey ? X6(0) : e.altKey ? re4(-1) : Q5(-1);
  };
  return createElement(Primitive.div, { ref: o2, tabIndex: -1, ...O3, "cmdk-root": "", onKeyDown: (e) => {
    var s15;
    (s15 = O3.onKeyDown) == null || s15.call(O3, e);
    let a = e.nativeEvent.isComposing || e.keyCode === 229;
    if (!(e.defaultPrevented || a)) switch (e.key) {
      case "n":
      case "j": {
        j3 && e.ctrlKey && ie4(e);
        break;
      }
      case "ArrowDown": {
        ie4(e);
        break;
      }
      case "p":
      case "k": {
        j3 && e.ctrlKey && se3(e);
        break;
      }
      case "ArrowUp": {
        se3(e);
        break;
      }
      case "Home": {
        e.preventDefault(), X6(0);
        break;
      }
      case "End": {
        e.preventDefault(), oe();
        break;
      }
      case "Enter": {
        e.preventDefault();
        let i8 = M4();
        if (i8) {
          let l2 = new Event(Z);
          i8.dispatchEvent(l2);
        }
      }
    }
  } }, createElement("label", { "cmdk-label": "", htmlFor: U5.inputId, id: U5.labelId, style: Te }, b2), B2(r6, (e) => createElement(de.Provider, { value: E }, createElement(ue.Provider, { value: U5 }, e))));
});
var he = forwardRef((r6, o2) => {
  var _4, I2;
  let n = useId2(), u2 = useRef(null), c = useContext(fe), d = K2(), f = pe(r6), p2 = (I2 = (_4 = f.current) == null ? void 0 : _4.forceMount) != null ? I2 : c == null ? void 0 : c.forceMount;
  k2(() => {
    if (!p2) return d.item(n, c == null ? void 0 : c.id);
  }, [p2]);
  let b2 = ve(n, u2, [r6.value, r6.children, u2], r6.keywords), m2 = ee(), R3 = P((v3) => v3.value && v3.value === b2.current), x = P((v3) => p2 || d.filter() === false ? true : v3.search ? v3.filtered.items.get(n) > 0 : true);
  useEffect(() => {
    let v3 = u2.current;
    if (!(!v3 || r6.disabled)) return v3.addEventListener(Z, C4), () => v3.removeEventListener(Z, C4);
  }, [x, r6.onSelect, r6.disabled]);
  function C4() {
    var v3, E;
    S2(), (E = (v3 = f.current).onSelect) == null || E.call(v3, b2.current);
  }
  function S2() {
    m2.setState("value", b2.current, true);
  }
  if (!x) return null;
  let { disabled: A2, value: ge4, onSelect: j3, forceMount: O3, keywords: $3, ...q2 } = r6;
  return createElement(Primitive.div, { ref: composeRefs(u2, o2), ...q2, id: n, "cmdk-item": "", role: "option", "aria-disabled": !!A2, "aria-selected": !!R3, "data-disabled": !!A2, "data-selected": !!R3, onPointerMove: A2 || d.getDisablePointerSelection() ? void 0 : S2, onClick: A2 ? void 0 : C4 }, r6.children);
});
var Ee = forwardRef((r6, o2) => {
  let { heading: n, children: u2, forceMount: c, ...d } = r6, f = useId2(), p2 = useRef(null), b2 = useRef(null), m2 = useId2(), R3 = K2(), x = P((S2) => c || R3.filter() === false ? true : S2.search ? S2.filtered.groups.has(f) : true);
  k2(() => R3.group(f), []), ve(f, p2, [r6.value, r6.heading, b2]);
  let C4 = useMemo(() => ({ id: f, forceMount: c }), [c]);
  return createElement(Primitive.div, { ref: composeRefs(p2, o2), ...d, "cmdk-group": "", role: "presentation", hidden: x ? void 0 : true }, n && createElement("div", { ref: b2, "cmdk-group-heading": "", "aria-hidden": true, id: m2 }, n), B2(r6, (S2) => createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? m2 : void 0 }, createElement(fe.Provider, { value: C4 }, S2))));
});
var ye = forwardRef((r6, o2) => {
  let { alwaysRender: n, ...u2 } = r6, c = useRef(null), d = P((f) => !f.search);
  return !n && !d ? null : createElement(Primitive.div, { ref: composeRefs(c, o2), ...u2, "cmdk-separator": "", role: "separator" });
});
var Se = forwardRef((r6, o2) => {
  let { onValueChange: n, ...u2 } = r6, c = r6.value != null, d = ee(), f = P((m2) => m2.search), p2 = P((m2) => m2.selectedItemId), b2 = K2();
  return useEffect(() => {
    r6.value != null && d.setState("search", r6.value);
  }, [r6.value]), createElement(Primitive.input, { ref: o2, ...u2, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": b2.listId, "aria-labelledby": b2.labelId, "aria-activedescendant": p2, id: b2.inputId, type: "text", value: c ? r6.value : f, onChange: (m2) => {
    c || d.setState("search", m2.target.value), n == null || n(m2.target.value);
  } });
});
var Ce = forwardRef((r6, o2) => {
  let { children: n, label: u2 = "Suggestions", ...c } = r6, d = useRef(null), f = useRef(null), p2 = P((m2) => m2.selectedItemId), b2 = K2();
  return useEffect(() => {
    if (f.current && d.current) {
      let m2 = f.current, R3 = d.current, x, C4 = new ResizeObserver(() => {
        x = requestAnimationFrame(() => {
          let S2 = m2.offsetHeight;
          R3.style.setProperty("--cmdk-list-height", S2.toFixed(1) + "px");
        });
      });
      return C4.observe(m2), () => {
        cancelAnimationFrame(x), C4.unobserve(m2);
      };
    }
  }, []), createElement(Primitive.div, { ref: composeRefs(d, o2), ...c, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": p2, "aria-label": u2, id: b2.listId }, B2(r6, (m2) => createElement("div", { ref: composeRefs(f, b2.listInnerRef), "cmdk-list-sizer": "" }, m2)));
});
var xe = forwardRef((r6, o2) => {
  let { open: n, onOpenChange: u2, overlayClassName: c, contentClassName: d, container: f, ...p2 } = r6;
  return createElement(Root2, { open: n, onOpenChange: u2 }, createElement(Portal2, { container: f }, createElement(Overlay, { "cmdk-overlay": "", className: c }), createElement(Content2, { "aria-label": r6.label, "cmdk-dialog": "", className: d }, createElement(me, { ref: o2, ...p2 }))));
});
var Ie = forwardRef((r6, o2) => P((u2) => u2.filtered.count === 0) ? createElement(Primitive.div, { ref: o2, ...r6, "cmdk-empty": "", role: "presentation" }) : null);
var Pe = forwardRef((r6, o2) => {
  let { progress: n, children: u2, label: c = "Loading...", ...d } = r6;
  return createElement(Primitive.div, { ref: o2, ...d, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": c }, B2(r6, (f) => createElement("div", { "aria-hidden": true }, f)));
});
var _e = Object.assign(me, { List: Ce, Item: he, Input: Se, Group: Ee, Separator: ye, Dialog: xe, Empty: Ie, Loading: Pe });
function we(r6, o2) {
  let n = r6.nextElementSibling;
  for (; n; ) {
    if (n.matches(o2)) return n;
    n = n.nextElementSibling;
  }
}
function De(r6, o2) {
  let n = r6.previousElementSibling;
  for (; n; ) {
    if (n.matches(o2)) return n;
    n = n.previousElementSibling;
  }
}
function pe(r6) {
  let o2 = useRef(r6);
  return k2(() => {
    o2.current = r6;
  }), o2;
}
var k2 = typeof window == "undefined" ? useEffect : useLayoutEffect;
function L(r6) {
  let o2 = useRef();
  return o2.current === void 0 && (o2.current = r6()), o2;
}
function P(r6) {
  let o2 = ee(), n = () => r6(o2.snapshot());
  return useSyncExternalStore(o2.subscribe, n, n);
}
function ve(r6, o2, n, u2 = []) {
  let c = useRef(), d = K2();
  return k2(() => {
    var b2;
    let f = (() => {
      var m2;
      for (let R3 of n) {
        if (typeof R3 == "string") return R3.trim();
        if (typeof R3 == "object" && "current" in R3) return R3.current ? (m2 = R3.current.textContent) == null ? void 0 : m2.trim() : c.current;
      }
    })(), p2 = u2.map((m2) => m2.trim());
    d.value(r6, f, p2), (b2 = o2.current) == null || b2.setAttribute(T, f), c.current = f;
  }), c;
}
var ke = () => {
  let [r6, o2] = useState(), n = L(() => /* @__PURE__ */ new Map());
  return k2(() => {
    n.current.forEach((u2) => u2()), n.current = /* @__PURE__ */ new Map();
  }, [r6]), (u2, c) => {
    n.current.set(u2, c), o2({});
  };
};
function Me(r6) {
  let o2 = r6.type;
  return typeof o2 == "function" ? o2(r6.props) : "render" in o2 ? o2.render(r6.props) : r6;
}
function B2({ asChild: r6, children: o2 }, n) {
  return r6 && isValidElement(o2) ? cloneElement(Me(o2), { ref: o2.ref }, n(o2.props.children)) : n(o2);
}
var Te = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };

// node_modules/@hugeicons/react/dist/esm/HugeiconsIcon.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
};
var HugeiconsIcon = forwardRef(({ color = "currentColor", size = 24, strokeWidth, absoluteStrokeWidth = false, className = "", altIcon, showAlt = false, icon, primaryColor, secondaryColor, disableSecondaryOpacity = false, ...rest }, ref) => {
  const calculatedStrokeWidth = strokeWidth !== void 0 ? absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth : void 0;
  const strokeProps = calculatedStrokeWidth !== void 0 ? {
    strokeWidth: calculatedStrokeWidth,
    stroke: "currentColor"
  } : {};
  const elementProps = {
    ref,
    ...defaultAttributes,
    width: size,
    height: size,
    color: primaryColor || color,
    className,
    ...strokeProps,
    ...rest
  };
  const currentIcon = showAlt && altIcon ? altIcon : icon;
  const svgChildren = [...currentIcon].sort(([, a], [, b2]) => {
    const hasOpacityA = a.opacity !== void 0;
    const hasOpacityB = b2.opacity !== void 0;
    return hasOpacityB ? 1 : hasOpacityA ? -1 : 0;
  }).map(([tag, attrs]) => {
    const isSecondaryPath = attrs.opacity !== void 0;
    const pathOpacity = isSecondaryPath && !disableSecondaryOpacity ? attrs.opacity : void 0;
    const fillProps = secondaryColor ? {
      ...attrs.stroke !== void 0 ? {
        stroke: isSecondaryPath ? secondaryColor : primaryColor || color
      } : {
        fill: isSecondaryPath ? secondaryColor : primaryColor || color
      }
    } : {};
    return createElement(tag, {
      ...attrs,
      ...strokeProps,
      ...fillProps,
      opacity: pathOpacity,
      key: attrs.key
    });
  });
  return createElement("svg", elementProps, svgChildren);
});
HugeiconsIcon.displayName = "HugeiconsIcon";

// node_modules/@hugeicons/core-free-icons/dist/esm/index.js
var AiContentGenerator01Icon = [
  ["path", { d: "M11 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H12C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V10.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17.4069 14.4036C17.6192 13.8655 18.3808 13.8655 18.5931 14.4036L18.6298 14.4969C19.1482 15.8113 20.1887 16.8518 21.5031 17.3702L21.5964 17.4069C22.1345 17.6192 22.1345 18.3808 21.5964 18.5931L21.5031 18.6298C20.1887 19.1482 19.1482 20.1887 18.6298 21.5031L18.5931 21.5964C18.3808 22.1345 17.6192 22.1345 17.4069 21.5964L17.3702 21.5031C16.8518 20.1887 15.8113 19.1482 14.4969 18.6298L14.4036 18.5931C13.8655 18.3808 13.8655 17.6192 14.4036 17.4069L14.4969 17.3702C15.8113 16.8518 16.8518 15.8113 17.3702 14.4969L17.4069 14.4036Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M7 7H15M7 11.5H15M7 16H11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var Alert02Icon = [
  ["path", { d: "M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 9V13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var AlertCircleIcon = [
  ["circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 8V12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12.125 15.75H12M12.25 15.75C12.25 15.8881 12.1381 16 12 16C11.8619 16 11.75 15.8881 11.75 15.75C11.75 15.6119 11.8619 15.5 12 15.5C12.1381 15.5 12.25 15.6119 12.25 15.75Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var Archive03Icon = [
  ["path", { d: "M21 7H3V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V7Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M21 7H3L4.2 5.4C5.08328 4.22229 5.52492 3.63344 6.15836 3.31672C6.7918 3 7.52786 3 9 3H15C16.4721 3 17.2082 3 17.8416 3.31672C18.4751 3.63344 18.9167 4.22229 19.8 5.4L21 7Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12 17L12 10.5M9 14.5C9.58984 15.1068 11.1597 17.5 12 17.5C12.8403 17.5 14.4102 15.1068 15 14.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var ArrowDown01Icon = [
  ["path", { d: "M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var ArrowDown02Icon = [
  ["path", { d: "M12 18.502V5.00195", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M18 13.002C18 13.002 13.5811 19.0019 12 19.002C10.4188 19.002 6 13.002 6 13.002", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var ArrowDownDoubleIcon = [
  ["path", { d: "M17.9997 12.5C17.9997 12.5 13.5807 18.5 11.9996 18.5C10.4185 18.5 5.99966 12.5 5.99966 12.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17.9997 5.50005C17.9997 5.50005 13.5807 11.5 11.9996 11.5C10.4185 11.5 5.99966 5.5 5.99966 5.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var ArrowLeft01Icon = [
  ["path", { d: "M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var ArrowMoveDownLeftIcon = [
  ["path", { d: "M20 3V5.07692C20 7.07786 20 8.07833 19.8547 8.91545C19.0547 13.5235 15.0934 17.1376 10.0426 17.8674C9.12509 18 7.19318 18 5 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M7 21C6.39316 20.4102 4 18.8403 4 18C4 17.1597 6.39316 15.5898 7 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var ArrowMoveDownRightIcon = [
  ["path", { d: "M4 3V5.07692C4 7.07786 4 8.07833 4.14533 8.91545C4.94529 13.5235 8.90656 17.1376 13.9574 17.8674C14.8749 18 16.8068 18 19 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17 21C17.6068 20.4102 20 18.8403 20 18C20 17.1597 17.6068 15.5898 17 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var ArrowReloadHorizontalIcon = [
  ["path", { d: "M20.5 5.5H9.5C5.78672 5.5 3 8.18503 3 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M3.5 18.5H14.5C18.2133 18.5 21 15.815 21 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M18.5 3C18.5 3 21 4.84122 21 5.50002C21 6.15882 18.5 8 18.5 8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M5.49998 16C5.49998 16 3.00001 17.8412 3 18.5C2.99999 19.1588 5.5 21 5.5 21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]
];
var ArrowRight01Icon = [
  ["path", { d: "M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var ArrowRight02Icon = [
  ["path", { d: "M18.5 12L4.99997 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var ArrowTurnBackwardIcon = [
  ["path", { d: "M11 6H15.5C17.9853 6 20 8.01472 20 10.5C20 12.9853 17.9853 15 15.5 15H4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M6.99998 12C6.99998 12 4.00001 14.2095 4 15C3.99999 15.7906 7 18 7 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var ArrowTurnForwardIcon = [
  ["path", { d: "M13 6H8.5C6.01472 6 4 8.01472 4 10.5C4 12.9853 6.01472 15 8.5 15H20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17 12C17 12 20 14.2095 20 15C20 15.7906 17 18 17 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var ArrowUp01Icon = [
  ["path", { d: "M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var ArrowUp02Icon = [
  ["path", { d: "M12 5.5V19", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M18 11C18 11 13.5811 5.00001 12 5C10.4188 4.99999 6 11 6 11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var ArrowUpDoubleIcon = [
  ["path", { d: "M18 11.5C18 11.5 13.5811 5.50001 12 5.5C10.4188 5.49999 6 11.5 6 11.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M18 18.5C18 18.5 13.5811 12.5 12 12.5C10.4188 12.5 6 18.5 6 18.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var ArrowUpDownIcon = [
  ["path", { d: "M7 4V20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17 19L17 4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M10 6.99998C10 6.99998 7.79053 4.00001 6.99998 4C6.20942 3.99999 4 7 4 7", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M20 17C20 17 17.7905 20 17 20C16.2094 20 14 17 14 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]
];
var ArrowUpRight01Icon = [
  ["path", { d: "M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var AttachmentIcon = [
  ["path", { d: "M19.5 12.0001V13.5001C19.5 17.6422 16.1421 21.0001 12 21.0001C7.85786 21.0001 4.5 17.6422 4.5 13.5001V8C4.5 5.23858 6.73858 3 9.5 3C12.2614 3 14.5 5.23858 14.5 8V13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5V9.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var AudioWave01Icon = [
  ["path", { d: "M9 3V21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M6 7V17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12 6V18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M15 9L15 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M18 7L18 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M21 11L21 13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "5" }],
  ["path", { d: "M3 11L3 13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "6" }]
];
var Book02Icon = [
  ["path", { d: "M15.5 7H8.5M12.499 11H8.49902", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M20 22H6C4.89543 22 4 21.1046 4 20M4 20C4 18.8954 4.89543 18 6 18H20V6C20 4.11438 20 3.17157 19.4142 2.58579C18.8284 2 17.8856 2 16 2H10C7.17157 2 5.75736 2 4.87868 2.87868C4 3.75736 4 5.17157 4 8V20Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M19.5 18C19.5 18 18.5 18.7628 18.5 20C18.5 21.2372 19.5 22 19.5 22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var BrainIcon = [
  ["path", { d: "M16.998 7.12652C17.3182 7.04393 17.654 7 18 7C20.2091 7 22 8.79086 22 11C22 13.2091 20.2091 15 18 15C17.6451 15 17.3009 14.9538 16.9733 14.867M16.998 7.12652C16.9993 7.08451 17 7.04233 17 7C17 4.79086 15.2091 3 13 3C11.0824 3 9.47994 4.34939 9.09041 6.15043M16.998 7.12652C16.9769 7.80763 16.7854 8.44584 16.4649 9M16.9733 14.867C16.9909 14.7472 17 14.6247 17 14.5C17 13.2905 16.1411 12.2816 15 12.05M16.9733 14.867C16.7957 16.0737 15.756 17 14.5 17H14C11.7909 17 10 18.7909 10 21M9.09041 6.15043C8.74377 6.05243 8.37801 6 8 6C5.79086 6 4 7.79086 4 10C4 10.3886 4.05542 10.7643 4.15878 11.1195M9.09041 6.15043C10.1015 6.43625 10.9498 7.10965 11.4649 8M4.15878 11.1195C2.9114 11.4832 2 12.6352 2 14C2 15.6569 3.34315 17 5 17C6.30622 17 7.41746 16.1652 7.82929 15M4.15878 11.1195C4.24921 11.4303 4.37632 11.7255 4.53513 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M11.8361 11.7435C11.3257 12.2353 10.453 12.3202 9.70713 11.9008C8.9612 11.4814 8.58031 10.6917 8.73535 10", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }]
];
var BrowserIcon = [
  ["path", { d: "M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M3 9H21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var BubbleChatAddIcon = [
  ["path", { d: "M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C10.3719 21.5 8.8394 21.0904 7.5 20.3687C5.63177 19.362 4.37462 20.2979 3.26592 20.4658C3.09774 20.4913 2.93024 20.4302 2.80997 20.31C2.62741 20.1274 2.59266 19.8451 2.6935 19.6074C3.12865 18.5818 3.5282 16.6382 2.98341 15C2.6698 14.057 2.5 13.0483 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15.5 12H8.5M12 8.5V15.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var BubbleChatQuestionIcon = [
  ["path", { d: "M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C10.3719 21.5 8.8394 21.0904 7.5 20.3687C5.63177 19.362 4.37462 20.2979 3.26592 20.4658C3.09774 20.4913 2.93024 20.4302 2.80997 20.31C2.62741 20.1274 2.59266 19.8451 2.6935 19.6074C3.12865 18.5818 3.5282 16.6382 2.98341 15C2.6698 14.057 2.5 13.0483 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5C14.5 10.3569 14.0689 11.1131 13.4117 11.5636C12.7283 12.0319 12 12.6716 12 13.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var BubbleChatIcon = [
  ["path", { d: "M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C10.3719 21.5 8.8394 21.0904 7.5 20.3687C5.63177 19.362 4.37462 20.2979 3.26592 20.4658C3.09774 20.4913 2.93024 20.4302 2.80997 20.31C2.62741 20.1274 2.59266 19.8451 2.6935 19.6074C3.12865 18.5818 3.5282 16.6382 2.98341 15C2.6698 14.057 2.5 13.0483 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12.1257 12H12.0007M8.125 12H8M16.125 12H16M12.2507 12C12.2507 12.1381 12.1388 12.25 12.0007 12.25C11.8627 12.25 11.7507 12.1381 11.7507 12C11.7507 11.8619 11.8627 11.75 12.0007 11.75C12.1388 11.75 12.2507 11.8619 12.2507 12ZM8.25 12C8.25 12.1381 8.13807 12.25 8 12.25C7.86193 12.25 7.75 12.1381 7.75 12C7.75 11.8619 7.86193 11.75 8 11.75C8.13807 11.75 8.25 11.8619 8.25 12ZM16.25 12C16.25 12.1381 16.1381 12.25 16 12.25C15.8619 12.25 15.75 12.1381 15.75 12C15.75 11.8619 15.8619 11.75 16 11.75C16.1381 11.75 16.25 11.8619 16.25 12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var Bug01Icon = [
  ["path", { d: "M3.01309 4.99084C2.89323 6.05084 3.55249 8.42285 6.48923 8.42285", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17.5951 8.38081C18.8357 8.57881 21.1132 7.49881 20.9957 5.00281", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M20.9928 20.9989C21.0528 19.9429 20.1777 17.5549 17.599 17.4229", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M6.45163 17.4708C5.65013 17.2308 3.01306 18.3348 3.01306 20.9988", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M9.3299 6.11884C9.35388 5.09884 9.84533 2.99884 12.0029 2.99884C13.9208 2.99884 14.5861 4.61884 14.676 6.11884M6.26131 9.41884C6.38118 8.63884 7.29216 6.81484 9.36586 6.63484C11.4635 6.55564 14.3403 6.58684 14.8797 6.67084C15.5869 6.73377 17.2951 7.43884 17.7506 9.41884C17.9124 10.4388 17.8285 11.8788 17.8524 12.7188C17.8165 13.5588 17.9207 15.2623 17.7565 16.1388C17.6367 17.0988 16.9894 18.4668 16.1024 19.3068C14.7838 20.7228 11.1639 22.2108 8.03534 19.4508C6.41713 17.8908 6.30925 16.3788 6.18939 15.7788C6.15725 15.4571 6.15875 13.8763 6.16541 12.3588C6.14144 11.046 6.17235 9.78063 6.26131 9.41884Z", stroke: "currentColor", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M3.01306 12.8988H5.9498", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "5" }],
  ["path", { d: "M20.9929 12.8988L18.1161 12.8988", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "6" }],
  ["path", { d: "M12.0033 16.4988L12.0033 20.2788", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "7" }]
];
var Calendar03Icon = [
  ["path", { d: "M16 2V6M8 2V6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M3 10H21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M12.1258 14H12.0008M12.1258 18H12.0008M7.625 14H7.5M7.625 18H7.5M16.625 14H16.5M12.2508 14C12.2508 14.1381 12.1389 14.25 12.0008 14.25C11.8628 14.25 11.7508 14.1381 11.7508 14C11.7508 13.8619 11.8628 13.75 12.0008 13.75C12.1389 13.75 12.2508 13.8619 12.2508 14ZM12.2508 18C12.2508 18.1381 12.1389 18.25 12.0008 18.25C11.8628 18.25 11.7508 18.1381 11.7508 18C11.7508 17.8619 11.8628 17.75 12.0008 17.75C12.1389 17.75 12.2508 17.8619 12.2508 18ZM7.75 14C7.75 14.1381 7.63807 14.25 7.5 14.25C7.36193 14.25 7.25 14.1381 7.25 14C7.25 13.8619 7.36193 13.75 7.5 13.75C7.63807 13.75 7.75 13.8619 7.75 14ZM7.75 18C7.75 18.1381 7.63807 18.25 7.5 18.25C7.36193 18.25 7.25 18.1381 7.25 18C7.25 17.8619 7.36193 17.75 7.5 17.75C7.63807 17.75 7.75 17.8619 7.75 18ZM16.75 14C16.75 14.1381 16.6381 14.25 16.5 14.25C16.3619 14.25 16.25 14.1381 16.25 14C16.25 13.8619 16.3619 13.75 16.5 13.75C16.6381 13.75 16.75 13.8619 16.75 14Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]
];
var CalendarCheckOut02Icon = [
  ["path", { d: "M16 2V6M8 2V6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M3 10H21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M13.5 18.5C14.0057 18.0085 16 16.7002 16 16C16 15.2998 14.0057 13.9915 13.5 13.5M15.5 16L9 16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]
];
var CalendarSyncIcon = [
  ["path", { d: "M16 2V6M8 2V6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4H13C16.7712 4 18.6569 4 19.8284 5.17157C20.8915 6.23467 20.99 7.8857 20.9991 11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M3 10H21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M14.385 15.7855C15.0271 14.4342 16.4044 13.5 18 13.5C19.4806 13.5 20.7733 14.3044 21.4649 15.5M14.385 15.7855C14.6833 16 15.1502 16 16 16H17M14.385 15.7855C14.3524 15.762 14.3218 15.736 14.2929 15.7071C14 15.4142 14 14.9428 14 14V13M21.615 19.2145C20.9729 20.5658 19.5956 21.5 18 21.5C16.5194 21.5 15.2267 20.6956 14.5351 19.5M21.615 19.2145C21.3166 19 20.8498 19 20 19H19M21.615 19.2145C21.6476 19.238 21.6782 19.264 21.7071 19.2929C22 19.5858 22 20.0572 22 21V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]
];
var Cancel01Icon = [
  ["path", { d: "M18 6L6.00081 17.9992M17.9992 18L6 6.00085", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var CancelCircleIcon = [
  ["path", { d: "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M14.9994 15L9 9M9.00064 15L15 9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var ChartColumnIcon = [
  ["path", { d: "M8 9V17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13 5V17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M18 13V17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M3 3V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]
];
var ChatFeedback01Icon = [
  ["path", { d: "M7.5 8.5H16.5M7.5 12.5H13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M22 10.5C22 9.72921 21.9865 8.97679 21.9609 8.2503C21.8772 5.87683 21.8353 4.69009 20.8699 3.71745C19.9046 2.74481 18.6843 2.6926 16.2438 2.58819C14.9048 2.5309 13.4791 2.5 12 2.5C10.5209 2.5 9.09517 2.5309 7.7562 2.58819C5.3157 2.6926 4.09545 2.74481 3.13007 3.71745C2.16469 4.69009 2.12282 5.87683 2.03909 8.2503C2.01346 8.97679 2 9.72921 2 10.5C2 11.2708 2.01346 12.0232 2.03909 12.7497C2.12282 15.1232 2.16469 16.3099 3.13007 17.2826C4.09545 18.2552 5.31573 18.3074 7.7563 18.4118C8.4902 18.4432 9.25016 18.4667 10.0307 18.4815C10.7718 18.4955 11.1424 18.5026 11.468 18.6266C11.7936 18.7506 12.0675 18.9855 12.6155 19.4553L14.795 21.3242C14.9273 21.4376 15.0958 21.5 15.2701 21.5C15.6732 21.5 16 21.1732 16 20.7701V18.4219C16.0816 18.4186 16.1629 18.4153 16.2438 18.4118C18.6843 18.3074 19.9046 18.2552 20.8699 17.2825C21.8353 16.3099 21.8772 15.1232 21.9609 12.7497C21.9865 12.0232 22 11.2708 22 10.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var CheckListIcon = [
  ["path", { d: "M11 6L21 6", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M11 12L21 12", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M11 18L21 18", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M3 7.39286C3 7.39286 4 8.04466 4.5 9C4.5 9 6 5.25 8 4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M3 18.3929C3 18.3929 4 19.0447 4.5 20C4.5 20 6 16.25 8 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]
];
var CheckmarkCircle02Icon = [
  ["path", { d: "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M8 12.5L10.5 15L16 9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var CircleArrowShrink01Icon = [
  ["circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M11.115 11.1151C11.6324 10.5977 11.5463 8.4 11.5463 8.4M11.115 11.1151C10.5977 11.6324 8.4 11.5462 8.4 11.5462M11.115 11.1151L7.5 7.5M12.8882 12.8882C13.4055 12.3708 15.6032 12.4569 15.6032 12.4569M12.8882 12.8882C12.3709 13.4055 12.457 15.6032 12.457 15.6032M12.8882 12.8882L16.5 16.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var CircleIcon = [
  ["circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var Clock01Icon = [
  ["circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 8V12L14 14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var CloudIcon = [
  ["path", { d: "M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var CollapseIcon = [
  ["path", { d: "M13 4L13 7.00002C13 8.88563 13.0001 9.82843 13.5858 10.4142C14.1716 11 15.1144 11 17 11L20 11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M11.0001 20L11 17C11 15.1144 11 14.1715 10.4142 13.5858C9.82843 13 8.88563 13 7.00002 13L4.00006 13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var ComputerTerminal01Icon = [
  ["path", { d: "M7.5 7.5L8.72654 8.55719C9.24218 9.00163 9.5 9.22386 9.5 9.5C9.5 9.77614 9.24218 9.99836 8.72654 10.4428L7.5 11.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M11.5 12.5H15.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12 21C15.7497 21 17.6246 21 18.9389 20.0451C19.3634 19.7367 19.7367 19.3634 20.0451 18.9389C21 17.6246 21 15.7497 21 12C21 8.25027 21 6.3754 20.0451 5.06107C19.7367 4.6366 19.3634 4.26331 18.9389 3.95491C17.6246 3 15.7497 3 12 3C8.25027 3 6.3754 3 5.06107 3.95491C4.6366 4.26331 4.26331 4.6366 3.95491 5.06107C3 6.3754 3 8.25027 3 12C3 15.7497 3 17.6246 3.95491 18.9389C4.26331 19.3634 4.6366 19.7367 5.06107 20.0451C6.3754 21 8.25027 21 12 21Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var Copy01Icon = [
  ["path", { d: "M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var DashedLine02Icon = [
  ["path", { d: "M6.3 2.75143C5.26076 2.94471 4.49591 3.28657 3.89124 3.89124C3.28657 4.49591 2.94471 5.26076 2.75143 6.3M17.7 2.75143C18.7392 2.94471 19.5041 3.28657 20.1088 3.89124C20.7134 4.49591 21.0553 5.26076 21.2486 6.3M13.9 2.50495C13.3156 2.5 12.6839 2.5 12 2.5C11.3161 2.5 10.6844 2.5 10.1 2.50495M21.495 10.1C21.5 10.6844 21.5 11.3161 21.5 12C21.5 12.6839 21.5 13.3156 21.495 13.9001M2.50495 10.1C2.5 10.6844 2.5 11.3161 2.5 12C2.5 12.6839 2.5 13.3156 2.50496 13.9001M2.75143 17.7C2.94471 18.7392 3.28657 19.5041 3.89124 20.1088C4.49591 20.7134 5.26076 21.0553 6.3 21.2486M21.2486 17.7C21.0553 18.7392 20.7134 19.5041 20.1088 20.1088C19.5041 20.7134 18.7392 21.0553 17.7 21.2486M13.9 21.495C13.3156 21.5 12.6839 21.5 12 21.5C11.3162 21.5 10.6845 21.5 10.1002 21.495", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var DashedLineCircleIcon = [
  ["path", { d: "M14 2.20004C13.3538 2.06886 12.6849 2 12 2C11.3151 2 10.6462 2.06886 10 2.20004M21.8 10C21.9311 10.6462 22 11.3151 22 12C22 12.6849 21.9311 13.3538 21.8 14M14 21.8C13.3538 21.9311 12.6849 22 12 22C11.3151 22 10.6462 21.9311 10 21.8M2.20004 14C2.06886 13.3538 2 12.6849 2 12C2 11.3151 2.06886 10.6462 2.20004 10M17.5 3.64702C18.6332 4.39469 19.6053 5.36678 20.353 6.5M20.353 17.5C19.6053 18.6332 18.6332 19.6053 17.5 20.353M6.5 20.353C5.36678 19.6053 4.39469 18.6332 3.64702 17.5M3.64702 6.5C4.39469 5.36678 5.36678 4.39469 6.5 3.64702", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var DateTimeIcon = [
  ["path", { d: "M16 2V6M8 2V6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M21 12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M3 10H21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M18.2671 18.7011L17 18V16.2668M21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 15.7909 14.7909 14 17 14C19.2091 14 21 15.7909 21 18Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]
];
var Delete02Icon = [
  ["path", { d: "M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M9.5 16.5L9.5 10.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M14.5 16.5L14.5 10.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "3" }]
];
var DiscordIcon = [
  ["path", { d: "M15.5 17.5C16.5 19 17.3333 19.6667 18 20C19.3333 19.6667 22 18.2 22 15C22 11.8 20.6667 7.33333 20 5.5C18 4.3 15.8333 4 15 4L14.198 5.60393C13.4135 5.28708 12.4058 5.25438 12 5.27763C11.5942 5.25438 10.5865 5.28708 9.80197 5.60393L9 4C8.16667 4 6 4.3 4 5.5C3.33333 7.33333 2 11.8 2 15C2 18.2 4.66667 19.6667 6 20C6.66667 19.6667 7.5 19 8.5 17.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17.3652 11.5C17.3652 12.6046 16.5817 13.5 15.6152 13.5C14.6487 13.5 13.8652 12.6046 13.8652 11.5C13.8652 10.3954 14.6487 9.5 15.6152 9.5C16.5817 9.5 17.3652 10.3954 17.3652 11.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M10 11.5C10 12.6046 9.2165 13.5 8.25 13.5C7.2835 13.5 6.5 12.6046 6.5 11.5C6.5 10.3954 7.2835 9.5 8.25 9.5C9.2165 9.5 10 10.3954 10 11.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M17.5 16.5C16.4022 17.3967 14.3502 18 12 18C9.64981 18 7.59785 17.3967 6.5 16.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]
];
var Download01Icon = [
  ["path", { d: "M2.99969 17.0002C2.99969 17.9302 2.99969 18.3952 3.10192 18.7767C3.37932 19.8119 4.18796 20.6206 5.22324 20.898C5.60474 21.0002 6.06972 21.0002 6.99969 21.0002L16.9997 21.0002C17.9297 21.0002 18.3947 21.0002 18.7762 20.898C19.8114 20.6206 20.6201 19.8119 20.8975 18.7767C20.9997 18.3952 20.9997 17.9302 20.9997 17.0002", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M16.4998 11.5002C16.4998 11.5002 13.1856 16.0002 11.9997 16.0002C10.8139 16.0002 7.49976 11.5002 7.49976 11.5002M11.9997 15.0002V3.00016", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var DragDropHorizontalIcon = [
  ["path", { d: "M6 8C6.55228 8 7 8.44772 7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M6 14C6.55228 14 7 14.4477 7 15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M18 8C18.5523 8 19 8.44772 19 9C19 9.55228 18.5523 10 18 10C17.4477 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M18 14C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15C17 14.4477 17.4477 14 18 14Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M12 14C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "5" }]
];
var DragDropVerticalIcon = [
  ["path", { d: "M16 6C16 6.55228 15.5523 7 15 7C14.4477 7 14 6.55228 14 6C14 5.44772 14.4477 5 15 5C15.5523 5 16 5.44772 16 6Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M10 6C10 6.55228 9.55228 7 9 7C8.44772 7 8 6.55228 8 6C8 5.44772 8.44772 5 9 5C9.55228 5 10 5.44772 10 6Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M16 18C16 18.5523 15.5523 19 15 19C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M10 18C10 18.5523 9.55228 19 9 19C8.44772 19 8 18.5523 8 18C8 17.4477 8.44772 17 9 17C9.55228 17 10 17.4477 10 18Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "5" }]
];
var Edit02Icon = [
  ["path", { d: "M14.0737 3.88545C14.8189 3.07808 15.1915 2.6744 15.5874 2.43893C16.5427 1.87076 17.7191 1.85309 18.6904 2.39232C19.0929 2.6158 19.4769 3.00812 20.245 3.79276C21.0131 4.5774 21.3972 4.96972 21.6159 5.38093C22.1438 6.37312 22.1265 7.57479 21.5703 8.5507C21.3398 8.95516 20.9446 9.33578 20.1543 10.097L10.7506 19.1543C9.25288 20.5969 8.504 21.3182 7.56806 21.6837C6.63212 22.0493 5.6032 22.0224 3.54536 21.9686L3.26538 21.9613C2.63891 21.9449 2.32567 21.9367 2.14359 21.73C1.9615 21.5234 1.98636 21.2043 2.03608 20.5662L2.06308 20.2197C2.20301 18.4235 2.27297 17.5255 2.62371 16.7182C2.97444 15.9109 3.57944 15.2555 4.78943 13.9445L14.0737 3.88545Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13 4L20 11", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M14 22L22 22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var Edit04Icon = [
  ["path", { d: "M8.17151 19.8284L19.8284 8.17157C20.3736 7.62632 20.6462 7.3537 20.792 7.0596C21.0693 6.50005 21.0693 5.8431 20.792 5.28354C20.6462 4.98945 20.3736 4.71682 19.8284 4.17157C19.2831 3.62632 19.0105 3.3537 18.7164 3.20796C18.1568 2.93068 17.4999 2.93068 16.9403 3.20796C16.6462 3.3537 16.3736 3.62632 15.8284 4.17157L4.17151 15.8284C3.59345 16.4064 3.30442 16.6955 3.15218 17.063C2.99994 17.4305 2.99994 17.8393 2.99994 18.6568V20.9999H5.34308C6.16059 20.9999 6.56934 20.9999 6.93688 20.8477C7.30442 20.6955 7.59345 20.4064 8.17151 19.8284Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 21H18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M14.5 5.5L18.5 9.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var ElectricPlugsIcon = [
  ["path", { d: "M9 2L9 5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15 2L15 5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12 18L12 22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M12.6939 8.5L10.6029 10.6749C10.3788 10.9079 10.5394 11.2433 10.9048 11.3053L13.0952 11.6773C13.4848 11.7434 13.6334 12.1147 13.361 12.3413L10.7666 14.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M14.3066 5L9.69342 5C7.5551 5 6.48594 5 5.89527 5.69774C5.3046 6.39548 5.46717 7.46639 5.79232 9.60823L6.31604 13.0581C6.83606 16.4836 8.28588 18 12 18C15.7141 18 17.1639 16.4836 17.684 13.0581L18.2077 9.60823C18.5328 7.46639 18.6954 6.39548 18.1047 5.69774C17.5141 5 16.4449 5 14.3066 5Z", stroke: "currentColor", strokeWidth: "1.5", key: "4" }]
];
var ExpandIcon = [
  ["path", { d: "M19 12L19 8.99996C19 7.11435 18.9999 6.17155 18.4142 5.58577C17.8284 4.99999 16.8856 4.99999 15 5L12 5.00001", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M5 12L5.00003 15C5.00004 16.8856 5.00005 17.8284 5.58584 18.4142C6.17163 19 7.11443 19 9.00004 19L12 19", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var File01Icon = [
  ["path", { d: "M8 7L16 7", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M8 11L12 11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M13 21.5V21C13 18.1716 13 16.7574 13.8787 15.8787C14.7574 15 16.1716 15 19 15H19.5M20 13.3431V10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2C8.22877 2 6.34315 2 5.17157 3.17157C4 4.34314 4 6.22876 4 10L4 14.5442C4 17.7892 4 19.4117 4.88607 20.5107C5.06508 20.7327 5.26731 20.9349 5.48933 21.1139C6.58831 22 8.21082 22 11.4558 22C12.1614 22 12.5141 22 12.8372 21.886C12.9044 21.8623 12.9702 21.835 13.0345 21.8043C13.3436 21.6564 13.593 21.407 14.0919 20.9081L18.8284 16.1716C19.4065 15.5935 19.6955 15.3045 19.8478 14.9369C20 14.5694 20 14.1606 20 13.3431Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var FileAttachmentIcon = [
  ["path", { d: "M4 12.0004L4 14.5446C4 17.7896 4 19.4121 4.88607 20.5111C5.06508 20.7331 5.26731 20.9354 5.48933 21.1144C6.58831 22.0004 8.21082 22.0004 11.4558 22.0004C12.1614 22.0004 12.5141 22.0004 12.8372 21.8864C12.9044 21.8627 12.9702 21.8354 13.0345 21.8047C13.3436 21.6569 13.593 21.4074 14.0919 20.9085L18.8284 16.172C19.4065 15.5939 19.6955 15.3049 19.8478 14.9374C20 14.5698 20 14.1611 20 13.3436V10.0004C20 6.22919 20 4.34358 18.8284 3.172C17.7693 2.11284 16.1265 2.01122 13.0345 2.00146M13 21.5004V21.0004C13 18.172 13 16.7578 13.8787 15.8791C14.7574 15.0004 16.1716 15.0004 19 15.0004H19.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M4 8.23028V5.46105C4 3.54929 5.567 1.99951 7.5 1.99951C9.433 1.99951 11 3.54929 11 5.46105V9.26874C11 10.2246 10.2165 10.9995 9.25 10.9995C8.2835 10.9995 7.5 10.2246 7.5 9.26874V5.46105", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var FileEmpty02Icon = [
  ["path", { d: "M13 2.5V3C13 5.82843 13 7.24264 13.8787 8.12132C14.7574 9 16.1716 9 19 9H19.5M20 10.6569V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V9.45584C4 6.21082 4 4.58831 4.88607 3.48933C5.06508 3.26731 5.26731 3.06508 5.48933 2.88607C6.58831 2 8.21082 2 11.4558 2C12.1614 2 12.5141 2 12.8372 2.11401C12.9044 2.13772 12.9702 2.165 13.0345 2.19575C13.3436 2.34355 13.593 2.593 14.0919 3.09188L18.8284 7.82843C19.4065 8.40649 19.6955 8.69552 19.8478 9.06306C20 9.4306 20 9.83935 20 10.6569Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var FileQuestionMarkIcon = [
  ["path", { d: "M3.5 14.5C3.5 13.1193 4.6193 12 6 12C7.3807 12 8.5 13.1193 8.5 14.5C8.5 15.3569 8.06886 16.1131 7.41166 16.5636C6.72833 17.0319 6 17.6716 6 18.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M6.125 21.75H6M6.25 21.75C6.25 21.8881 6.13807 22 6 22C5.86193 22 5.75 21.8881 5.75 21.75C5.75 21.6119 5.86193 21.5 6 21.5C6.13807 21.5 6.25 21.6119 6.25 21.75Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M13.5 2.5V3C13.5 5.82843 13.5 7.24264 14.3787 8.12132C15.2574 9 16.6716 9 19.5 9H20M4.50394 7.98123C4.52397 5.69117 4.64575 4.40752 5.38607 3.48933C5.56507 3.26731 5.76731 3.06508 5.98932 2.88607C7.0883 2 8.71081 2 11.9558 2C12.6614 2 13.0141 2 13.3372 2.11401C13.4044 2.13772 13.4702 2.165 13.5345 2.19575C13.8435 2.34355 14.093 2.593 14.5919 3.09188L19.3284 7.82843C19.9065 8.40649 20.1955 8.69552 20.3478 9.06306C20.5 9.4306 20.5 9.83935 20.5 10.6569V14C20.5 17.7712 20.5 19.6569 19.3284 20.8284C18.1568 22 16.2712 22 12.5 22C11.7645 22 11.1007 22 10.5 21.9913", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var FileXIcon = [
  ["path", { d: "M14.4834 13L11.9917 15.4958M11.9917 15.4958L9.49168 18M11.9917 15.4958L14.4917 18M11.9917 15.4958L9.5 13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13 2.5V3C13 5.82843 13 7.24264 13.8787 8.12132C14.7574 9 16.1716 9 19 9H19.5M20 10.6569V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V9.45584C4 6.21082 4 4.58831 4.88607 3.48933C5.06508 3.26731 5.26731 3.06508 5.48933 2.88607C6.58831 2 8.21082 2 11.4558 2C12.1614 2 12.5141 2 12.8372 2.11401C12.9044 2.13772 12.9702 2.165 13.0345 2.19575C13.3436 2.34355 13.593 2.593 14.0919 3.09188L18.8284 7.82843C19.4065 8.40649 19.6955 8.69552 19.8478 9.06306C20 9.4306 20 9.83935 20 10.6569Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var Folder01Icon = [
  ["path", { d: "M8 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 15.7612 22 17.5167 21.1573 18.7779C20.7926 19.3238 20.3238 19.7926 19.7779 20.1573C18.5167 21 16.7612 21 13.25 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }]
];
var Folder02Icon = [
  ["path", { d: "M2 19V7.54902C2 6.10516 2 5.38322 2.24332 4.81647C2.5467 4.10985 3.10985 3.5467 3.81647 3.24332C4.38322 3 5.09805 3 6.54902 3H7.04311C7.64819 3 8.22075 3.27394 8.60041 3.74509L10.4175 6M10.4175 6H16C17.4001 6 18.1002 6 18.635 6.27248C19.1054 6.51217 19.4878 6.89462 19.7275 7.36502C20 7.8998 20 8.59987 20 10V11M10.4175 6H7", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M3.15802 15.5144L3.45643 14.7717C4.19029 12.9449 4.55723 12.0316 5.3224 11.5158C6.08757 11 7.07557 11 9.05157 11H17.1119C19.8004 11 21.1446 11 21.7422 11.8787C22.3397 12.7575 21.8405 14.0002 20.842 16.4856L20.5436 17.2283C19.8097 19.0551 19.4428 19.9684 18.6776 20.4842C17.9124 21 16.9244 21 14.9484 21H6.88812C4.19961 21 2.85535 21 2.25782 20.1213C1.66029 19.2425 2.15953 17.9998 3.15802 15.5144Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var FolderAddIcon = [
  ["path", { d: "M13 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7M8 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C21.9796 9.05942 21.9992 10.0588 22 12", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M18 13V21M22 17H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var FolderGitTwoIcon = [
  ["path", { d: "M8 6.50116H16.75C18.8567 6.50116 19.91 6.50116 20.6667 7.0069C20.9943 7.22584 21.2755 7.50717 21.4944 7.83484C22 8.59173 22 9.64538 22 11.7527C22 12.0122 22 12.2621 21.9997 12.5029M12 6.50116L11.3666 5.23392C10.8418 4.18406 10.3622 3.1273 9.19926 2.69106C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88043C3.05227 3.15161 2.65142 3.55257 2.38032 4.03851C2 4.72021 2 5.62871 2 7.44571V10.5023C2 15.2177 2 17.5754 3.46447 19.0403C4.70529 20.2815 6.58687 20.4711 10 20.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["circle", { cx: "14", cy: "12.5", r: "2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["circle", { cx: "20", cy: "18.5", r: "2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M18 18.5C15.7909 18.5 14 16.7091 14 14.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M14 14.5V21.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]
];
var FolderRemoveIcon = [
  ["path", { d: "M13 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7M8 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C21.9796 9.05942 21.9992 10.0588 22 12", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M22 15L16 21M22 21L16 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var GitBranchIcon = [
  ["path", { d: "M7 19H13C15.8284 19 17.2426 19 18.1213 18.1213C19 17.2426 19 15.8284 19 13V10M19 10C19.7002 10 21.0085 11.9943 21.5 12.5M19 10C18.2998 10 16.9915 11.9943 16.5 12.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M5 7L5 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["circle", { cx: "5", cy: "5", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["circle", { cx: "19", cy: "5", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "3" }],
  ["circle", { cx: "5", cy: "19", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "4" }]
];
var GitForkIcon = [
  ["path", { d: "M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M6.01734 8.74067C6.01734 10.4142 5.77537 12.1995 9.22051 11.9855H12.0053M17.9929 8.57617C18.1259 11.9855 16.9199 11.7648 15.7861 11.9855H12.0053M12.0053 15.7001V11.9855", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]
];
var GitMergeIcon = [
  ["path", { d: "M7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M7 8C8.10457 8 9 7.10457 9 6C9 4.89543 8.10457 4 7 4C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M7.02116 8.2793V15.4073M14.4113 12.0047L10.0193 12.0048C8.92158 12.0048 6.86182 11.1254 7.01818 8.78001", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]
];
var GitPullRequestClosedIcon = [
  ["path", { d: "M6 8L6 16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M18 11L18 16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["circle", { cx: "6", cy: "18", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["circle", { cx: "6", cy: "6", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "3" }],
  ["circle", { cx: "18", cy: "18", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M20 4L18 6M18 6L16 8M18 6L20 8M18 6L16 4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "5" }]
];
var GitPullRequestDraftIcon = [
  ["path", { d: "M6 8L6 16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["circle", { cx: "6", cy: "18", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["circle", { cx: "6", cy: "6", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["circle", { cx: "18", cy: "18", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M18.125 11H18M18.25 11C18.25 11.1381 18.1381 11.25 18 11.25C17.8619 11.25 17.75 11.1381 17.75 11C17.75 10.8619 17.8619 10.75 18 10.75C18.1381 10.75 18.25 10.8619 18.25 11Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M18.125 6H18M18.25 6C18.25 6.13807 18.1381 6.25 18 6.25C17.8619 6.25 17.75 6.13807 17.75 6C17.75 5.86193 17.8619 5.75 18 5.75C18.1381 5.75 18.25 5.86193 18.25 6Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "5" }]
];
var GitPullRequestIcon = [
  ["path", { d: "M6 8L6 16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M18 16V12C18 9.17156 18 7.75735 17.1213 6.87867C16.2426 5.99999 14.8284 5.99999 12 5.99999L11 5.99999M11 5.99999C11 5.29976 12.9943 3.99152 13.5 3.49999M11 5.99999C11 6.70022 12.9943 8.00846 13.5 8.49999", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["circle", { cx: "6", cy: "18", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["circle", { cx: "6", cy: "6", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "3" }],
  ["circle", { cx: "18", cy: "18", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "4" }]
];
var GithubIcon = [
  ["path", { d: "M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var GridViewIcon = [
  ["path", { d: "M3.88884 9.66294C4.39329 10 5.09552 10 6.49998 10C7.90445 10 8.60668 10 9.11113 9.66294C9.32951 9.51702 9.51701 9.32952 9.66292 9.11114C9.99998 8.60669 9.99998 7.90446 9.99998 6.5C9.99998 5.09554 9.99998 4.39331 9.66292 3.88886C9.51701 3.67048 9.32951 3.48298 9.11113 3.33706C8.60668 3 7.90445 3 6.49998 3C5.09552 3 4.39329 3 3.88884 3.33706C3.67046 3.48298 3.48296 3.67048 3.33705 3.88886C2.99998 4.39331 2.99998 5.09554 2.99998 6.5C2.99998 7.90446 2.99998 8.60669 3.33705 9.11114C3.48296 9.32952 3.67046 9.51702 3.88884 9.66294Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M14.8888 9.66294C15.3933 10 16.0955 10 17.5 10C18.9044 10 19.6067 10 20.1111 9.66294C20.3295 9.51702 20.517 9.32952 20.6629 9.11114C21 8.60669 21 7.90446 21 6.5C21 5.09554 21 4.39331 20.6629 3.88886C20.517 3.67048 20.3295 3.48298 20.1111 3.33706C19.6067 3 18.9044 3 17.5 3C16.0955 3 15.3933 3 14.8888 3.33706C14.6705 3.48298 14.483 3.67048 14.337 3.88886C14 4.39331 14 5.09554 14 6.5C14 7.90446 14 8.60669 14.337 9.11114C14.483 9.32952 14.6705 9.51702 14.8888 9.66294Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M3.88884 20.6629C4.39329 21 5.09552 21 6.49998 21C7.90445 21 8.60668 21 9.11113 20.6629C9.32951 20.517 9.51701 20.3295 9.66292 20.1111C9.99998 19.6067 9.99998 18.9045 9.99998 17.5C9.99998 16.0955 9.99998 15.3933 9.66292 14.8889C9.51701 14.6705 9.32951 14.483 9.11113 14.3371C8.60668 14 7.90445 14 6.49998 14C5.09552 14 4.39329 14 3.88884 14.3371C3.67046 14.483 3.48296 14.6705 3.33705 14.8889C2.99998 15.3933 2.99998 16.0955 2.99998 17.5C2.99998 18.9045 2.99998 19.6067 3.33705 20.1111C3.48296 20.3295 3.67046 20.517 3.88884 20.6629Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M14.8888 20.6629C15.3933 21 16.0955 21 17.5 21C18.9044 21 19.6067 21 20.1111 20.6629C20.3295 20.517 20.517 20.3295 20.6629 20.1111C21 19.6067 21 18.9045 21 17.5C21 16.0955 21 15.3933 20.6629 14.8889C20.517 14.6705 20.3295 14.483 20.1111 14.3371C19.6067 14 18.9044 14 17.5 14C16.0955 14 15.3933 14 14.8888 14.3371C14.6705 14.483 14.483 14.6705 14.337 14.8889C14 15.3933 14 16.0955 14 17.5C14 18.9045 14 19.6067 14.337 20.1111C14.483 20.3295 14.6705 20.517 14.8888 20.6629Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]
];
var HelpCircleIcon = [
  ["circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5C14.5 10.3569 14.0689 11.1131 13.4117 11.5636C12.7283 12.0319 12 12.6716 12 13.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var InformationCircleIcon = [
  ["circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 16V12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12.125 8.25H12M12.25 8.25C12.25 8.11193 12.1381 8 12 8C11.8619 8 11.75 8.11193 11.75 8.25C11.75 8.38807 11.8619 8.5 12 8.5C12.1381 8.5 12.25 8.38807 12.25 8.25Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var InternetIcon = [
  ["circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["ellipse", { cx: "12", cy: "12", rx: "4", ry: "10", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M2 12H22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var LaptopIcon = [
  ["path", { d: "M20.4999 16.5V8.5C20.4999 6.14298 20.4999 4.96447 19.7676 4.23223C19.0354 3.5 17.8569 3.5 15.4999 3.5H8.49988C6.14286 3.5 4.96434 3.5 4.23211 4.23223C3.49988 4.96447 3.49988 6.14298 3.49988 8.5V16.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M21.9841 20.5H2.01567C1.63273 20.5 1.38367 20.1088 1.55493 19.7764L3.49988 16.5H20.4999L22.4448 19.7764C22.6161 20.1088 22.367 20.5 21.9841 20.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var Layers01Icon = [
  ["path", { d: "M8.64298 3.14559L6.93816 3.93362C4.31272 5.14719 3 5.75397 3 6.75C3 7.74603 4.31272 8.35281 6.93817 9.56638L8.64298 10.3544C10.2952 11.1181 11.1214 11.5 12 11.5C12.8786 11.5 13.7048 11.1181 15.357 10.3544L17.0618 9.56638C19.6873 8.35281 21 7.74603 21 6.75C21 5.75397 19.6873 5.14719 17.0618 3.93362L15.357 3.14559C13.7048 2.38186 12.8786 2 12 2C11.1214 2 10.2952 2.38186 8.64298 3.14559Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M20.788 11.0972C20.9293 11.2959 21 11.5031 21 11.7309C21 12.7127 19.6873 13.3109 17.0618 14.5072L15.357 15.284C13.7048 16.0368 12.8786 16.4133 12 16.4133C11.1214 16.4133 10.2952 16.0368 8.64298 15.284L6.93817 14.5072C4.31272 13.3109 3 12.7127 3 11.7309C3 11.5031 3.07067 11.2959 3.212 11.0972", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M20.3767 16.2661C20.7922 16.5971 21 16.927 21 17.3176C21 18.2995 19.6873 18.8976 17.0618 20.0939L15.357 20.8707C13.7048 21.6236 12.8786 22 12 22C11.1214 22 10.2952 21.6236 8.64298 20.8707L6.93817 20.0939C4.31272 18.8976 3 18.2995 3 17.3176C3 16.927 3.20778 16.5971 3.62334 16.2661", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var LayoutTwoColumnIcon = [
  ["path", { d: "M3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 2.5V21.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }]
];
var LayoutTwoRowIcon = [
  ["path", { d: "M20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M21.5 12L2.50078 12", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }]
];
var LayoutThreeRowIcon = [
  ["path", { d: "M20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28248 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28248 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M21.5 8.5L2.5 8.5", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M21.5 15.5L2.5 15.5", stroke: "currentColor", strokeWidth: "1.5", key: "2" }]
];
var LinkSquare02Icon = [
  ["path", { d: "M11.0991 3.00012C7.45013 3.00669 5.53932 3.09629 4.31817 4.31764C3.00034 5.63568 3.00034 7.75704 3.00034 11.9997C3.00034 16.2424 3.00034 18.3638 4.31817 19.6818C5.63599 20.9999 7.75701 20.9999 11.9991 20.9999C16.241 20.9999 18.3621 20.9999 19.6799 19.6818C20.901 18.4605 20.9906 16.5493 20.9972 12.8998", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M20.556 3.49612L11.0487 13.0586M20.556 3.49612C20.062 3.00151 16.7343 3.04761 16.0308 3.05762M20.556 3.49612C21.05 3.99074 21.0039 7.32273 20.9939 8.02714", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var ListViewIcon = [
  ["path", { d: "M2 11.4C2 10.2417 2.24173 10 3.4 10H20.6C21.7583 10 22 10.2417 22 11.4V12.6C22 13.7583 21.7583 14 20.6 14H3.4C2.24173 14 2 13.7583 2 12.6V11.4Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M2 3.4C2 2.24173 2.24173 2 3.4 2H20.6C21.7583 2 22 2.24173 22 3.4V4.6C22 5.75827 21.7583 6 20.6 6H3.4C2.24173 6 2 5.75827 2 4.6V3.4Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M2 19.4C2 18.2417 2.24173 18 3.4 18H20.6C21.7583 18 22 18.2417 22 19.4V20.6C22 21.7583 21.7583 22 20.6 22H3.4C2.24173 22 2 21.7583 2 20.6V19.4Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }]
];
var Loading03Icon = [
  ["path", { d: "M12 3V6", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 18V21", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M21 12L18 12", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M6 12L3 12", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M18.3635 5.63672L16.2422 7.75804", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M7.75804 16.2422L5.63672 18.3635", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "5" }],
  ["path", { d: "M18.3635 18.3635L16.2422 16.2422", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "6" }],
  ["path", { d: "M7.75804 7.75804L5.63672 5.63672", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "7" }]
];
var LockIcon = [
  ["path", { d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 13L12 16", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }]
];
var Mail02Icon = [
  ["path", { d: "M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var MailOpen01Icon = [
  ["path", { d: "M2 19L8.91302 14.2905C11.4387 12.5698 12.5613 12.5698 15.087 14.2905L22 19", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M2.01592 14.551C2.08186 17.5843 2.11484 19.1009 3.24611 20.2241C4.37738 21.3473 5.95183 21.3862 9.10072 21.4641C11.0393 21.512 12.9607 21.512 14.8993 21.4641C18.0482 21.3862 19.6226 21.3473 20.7539 20.2241C21.8852 19.1009 21.9181 17.5843 21.9841 14.551C22.0164 13.0649 21.9995 11.5934 21.9334 10.0921C21.8924 9.15964 21.8719 8.69341 21.6354 8.27984C21.3989 7.86628 20.9913 7.59935 20.176 7.0655L16.4152 4.60286C14.2742 3.20096 13.2038 2.5 12 2.5C10.7962 2.5 9.72577 3.20095 7.58483 4.60286L3.82397 7.0655C3.00869 7.59935 2.60106 7.86628 2.36459 8.27984C2.12812 8.69341 2.1076 9.15965 2.06656 10.0921C2.00049 11.5934 1.98361 13.0649 2.01592 14.551Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M22 9.5L17.7346 12.6072C16.7004 13.3606 15.8504 14 14.5 14M2 9.5L6.26538 12.6072C7.29955 13.3606 8.14961 14 9.5 14", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var Menu02Icon = [
  ["path", { d: "M4 5L16 5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M4 12L20 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M4 19L12 19", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var MessageAdd02Icon = [
  ["path", { d: "M13 3.02144C12.6777 3.00721 12.3445 2.99998 12 2.99998C4.13281 2.99998 2 7.02942 2 12C2 14.0712 2.37034 15.979 3.37161 17.5C4.63281 19.5 3.99253 21.3333 3 22C4.61547 22 5.70211 21.4858 6.39239 20.9766C6.88252 20.615 7.50688 20.4364 8.0984 20.5814C9.20689 20.8533 10.4991 21 12 21C19.1328 21 22 16.9705 22 12C22 11.3126 21.9643 10.6432 21.8812 9.99998", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12.1248 12H11.9998M16.125 12H16M8.125 12H8M12.2498 12C12.2498 12.1381 12.1379 12.25 11.9998 12.25C11.8618 12.25 11.7498 12.1381 11.7498 12C11.7498 11.8619 11.8618 11.75 11.9998 11.75C12.1379 11.75 12.2498 11.8619 12.2498 12ZM16.25 12C16.25 12.1381 16.1381 12.25 16 12.25C15.8619 12.25 15.75 12.1381 15.75 12C15.75 11.8619 15.8619 11.75 16 11.75C16.1381 11.75 16.25 11.8619 16.25 12ZM8.25 12C8.25 12.1381 8.13807 12.25 8 12.25C7.86193 12.25 7.75 12.1381 7.75 12C7.75 11.8619 7.86193 11.75 8 11.75C8.13807 11.75 8.25 11.8619 8.25 12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M16 4.99998H22M19 1.99998L19 7.99998", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var MessageQuestionIcon = [
  ["path", { d: "M12 20.5C19.1328 20.5 22 16.4706 22 11.5C22 6.52944 20.1328 2.5 12 2.5C4.13281 2.5 2 6.52944 2 11.5C2 13.5712 2.37034 15.4791 3.37161 17C4.63281 19 3.99253 20.8333 3 21.5C4.61547 21.5 5.70211 20.9858 6.39239 20.4766C6.88252 20.115 7.50688 19.9364 8.0984 20.0815C9.20689 20.3533 10.4991 20.5 12 20.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.57777 13.755 10.0983 13.3632 10.4634C12.7572 11.0282 12 11.6716 12 12.5M12.125 15.75H12M12.25 15.75C12.25 15.8881 12.1381 16 12 16C11.8619 16 11.75 15.8881 11.75 15.75C11.75 15.6119 11.8619 15.5 12 15.5C12.1381 15.5 12.25 15.6119 12.25 15.75Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var Mic02Icon = [
  ["path", { d: "M17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22M12 22H15M12 22H9", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }]
];
var MoreHorizontalIcon = [
  ["path", { d: "M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var PackageReceiveIcon = [
  ["path", { d: "M12 22C11.1818 22 10.4002 21.6754 8.83693 21.0262C4.94564 19.4101 3 18.6021 3 17.2429V7.74463M12 22C12.8182 22 13.5998 21.6754 15.1631 21.0262C19.0544 19.4101 21 18.6021 21 17.2429V7.74463M12 22V12.1687M3 7.74463C3 8.3485 3.80157 8.72983 5.40472 9.49248L8.32592 10.8822C10.1288 11.7399 11.0303 12.1687 12 12.1687M3 7.74463C3 7.14076 3.80157 6.75944 5.40472 5.99678L7.5 5M21 7.74463C21 8.3485 20.1984 8.72983 18.5953 9.49248L15.6741 10.8822C13.8712 11.7399 12.9697 12.1687 12 12.1687M21 7.74463C21 7.14076 20.1984 6.75944 18.5953 5.99678L16.5 5M6 13.1518L8 14.135", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12.0037 2L12.0037 8.99995M12.0037 8.99995C12.2668 9.00351 12.5263 8.81972 12.7178 8.59534L14 7.06174M12.0037 8.99995C11.7499 8.99652 11.4929 8.81368 11.2897 8.59534L10 7.06174", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }]
];
var PauseIcon = [
  ["path", { d: "M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }]
];
var PinOffIcon = [
  ["path", { d: "M7.5 8C6.95863 8.1281 6.49932 8.14239 5.99268 8.45891C5.07234 9.03388 4.85108 9.71674 5.08821 10.7612C5.94028 14.5139 9.48599 18.0596 13.2388 18.9117C14.2834 19.1489 14.9661 18.928 15.5416 18.0077C15.8411 17.5288 15.8716 17.0081 16 16.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 7.79915C12.1776 7.77794 12.3182 7.74034 12.4295 7.68235C13.3997 7.17686 13.9291 5.53361 14.4498 4.60009C14.9311 3.73715 15.1718 3.30567 15.7379 3.10227C16.3041 2.89888 16.6448 3.02205 17.3262 3.26839C18.9197 3.8445 20.1555 5.08032 20.7316 6.6738C20.9779 7.35521 21.1011 7.69591 20.8977 8.26204C20.6943 8.82817 20.2628 9.06884 19.3999 9.55018C18.4608 10.074 16.7954 10.6108 16.2905 11.5898C16.2345 11.6983 16.1978 11.8327 16.1769 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M3 21L8 16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M3 3L21 21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]
];
var PinIcon = [
  ["path", { d: "M3 21L8 16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13.2585 18.8714C9.51516 18.0215 5.97844 14.4848 5.12853 10.7415C4.99399 10.1489 4.92672 9.85266 5.12161 9.37197C5.3165 8.89129 5.55457 8.74255 6.03071 8.44509C7.10705 7.77265 8.27254 7.55888 9.48209 7.66586C11.1793 7.81598 12.0279 7.89104 12.4512 7.67048C12.8746 7.44991 13.1622 6.93417 13.7376 5.90269L14.4664 4.59604C14.9465 3.73528 15.1866 3.3049 15.7513 3.10202C16.316 2.89913 16.6558 3.02199 17.3355 3.26771C18.9249 3.84236 20.1576 5.07505 20.7323 6.66449C20.978 7.34417 21.1009 7.68401 20.898 8.2487C20.6951 8.8134 20.2647 9.05346 19.4039 9.53358L18.0672 10.2792C17.0376 10.8534 16.5229 11.1406 16.3024 11.568C16.0819 11.9955 16.162 12.8256 16.3221 14.4859C16.4399 15.7068 16.2369 16.88 15.5555 17.9697C15.2577 18.4458 15.1088 18.6839 14.6283 18.8786C14.1477 19.0733 13.8513 19.006 13.2585 18.8714Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var PlayIcon = [
  ["path", { d: "M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var PlusMinusSquare01Icon = [
  ["path", { d: "M12 7.5V13.8636M15.5 10.6818H8.5M15.5 16.5H8.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var PlusSignIcon = [
  ["path", { d: "M12 4V20M20 12H4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var PuzzleIcon = [
  ["path", { d: "M12.828 6.00096C12.9388 5.68791 12.999 5.35099 12.999 5C12.999 3.34315 11.6559 2 9.99904 2C8.34219 2 6.99904 3.34315 6.99904 5C6.99904 5.35099 7.05932 5.68791 7.17008 6.00096C4.88532 6.0093 3.66601 6.09039 2.87772 6.87868C2.08951 7.66689 2.00836 8.88603 2 11.1704C2.31251 11.06 2.64876 11 2.99904 11C4.6559 11 5.99904 12.3431 5.99904 14C5.99904 15.6569 4.6559 17 2.99904 17C2.64876 17 2.31251 16.94 2 16.8296C2.00836 19.114 2.08951 20.3331 2.87772 21.1213C3.66593 21.9095 4.88508 21.9907 7.16941 21.999C7.05908 21.6865 6.99904 21.3503 6.99904 21C6.99904 19.3431 8.34219 18 9.99904 18C11.6559 18 12.999 19.3431 12.999 21C12.999 21.3503 12.939 21.6865 12.8287 21.999C15.113 21.9907 16.3322 21.9095 17.1204 21.1213C17.9086 20.333 17.9897 19.1137 17.9981 16.829C18.3111 16.9397 18.648 17 18.999 17C20.6559 17 21.999 15.6569 21.999 14C21.999 12.3431 20.6559 11 18.999 11C18.648 11 18.3111 11.0603 17.9981 11.171C17.9897 8.88627 17.9086 7.66697 17.1204 6.87868C16.3321 6.09039 15.1128 6.0093 12.828 6.00096Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var Refresh01Icon = [
  ["path", { d: "M20.4879 15C19.2524 18.4956 15.9187 21 12 21C7.02943 21 3 16.9706 3 12C3 7.02943 7.02943 3 12 3C15.7292 3 18.9286 5.26806 20.2941 8.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15 9H18C19.4142 9 20.1213 9 20.5607 8.56066C21 8.12132 21 7.41421 21 6V3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var RepeatIcon = [
  ["path", { d: "M16.3884 3L17.3913 3.97574C17.8393 4.41165 18.0633 4.62961 17.9844 4.81481C17.9056 5 17.5888 5 16.9552 5H9.19422C5.22096 5 2 8.13401 2 12C2 13.4872 2.47668 14.8662 3.2895 16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M7.61156 21L6.60875 20.0243C6.16074 19.5883 5.93673 19.3704 6.01557 19.1852C6.09441 19 6.4112 19 7.04478 19H14.8058C18.779 19 22 15.866 22 12C22 10.5128 21.5233 9.13383 20.7105 8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var Search01Icon = [
  ["path", { d: "M17 17L21 21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var SentIcon = [
  ["path", { d: "M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M11.4999 12.5L14.9999 9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var Settings01Icon = [
  ["path", { d: "M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15.5195 12C15.5195 13.933 13.9525 15.5 12.0195 15.5C10.0865 15.5 8.51953 13.933 8.51953 12C8.51953 10.067 10.0865 8.5 12.0195 8.5C13.9525 8.5 15.5195 10.067 15.5195 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }]
];
var SidebarBottomIcon = [
  ["path", { d: "M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91555C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91555C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M2 14.5L22 14.5", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M6 18H7M10 18H11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var SidebarLeftIcon = [
  ["path", { d: "M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M9.5 3L9.5 21", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M5 7H6M5 10H6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var SidebarRightIcon = [
  ["path", { d: "M2 12C2 8.3109 2 6.46633 2.81382 5.1588C3.1149 4.67505 3.48891 4.2543 3.91891 3.91557C5.08116 3.00003 6.72077 3.00003 10 3.00003H14C17.2792 3.00003 18.9188 3.00003 20.0811 3.91557C20.5111 4.2543 20.8851 4.67505 21.1862 5.1588C22 6.46633 22 8.3109 22 12C22 15.6892 22 17.5337 21.1862 18.8413C20.8851 19.325 20.5111 19.7458 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7458 3.1149 19.325 2.81382 18.8413C2 17.5337 2 15.6892 2 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M14.5 3.00003L14.5 21", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M18 7.00006H19M18 10.0001H19", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var SlidersHorizontalIcon = [
  ["path", { d: "M3.99963 5.00055L9.99963 5.00031", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12.9996 5.00031L19.9996 5.00031", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M15.9996 9.00031L15.9996 15.0003", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M9.99963 2.00031L9.99963 8.00031", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M11.9996 16.0003L11.9996 22.0003", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M15.9996 12.0001L19.9996 12.0003", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "5" }],
  ["path", { d: "M3.99963 12.0005L12.9996 12.0003", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "6" }],
  ["path", { d: "M11.9996 19.0003L19.9996 19.0003", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "7" }],
  ["path", { d: "M3.99963 19.0005L8.99963 19.0003", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "8" }]
];
var SmartPhone01Icon = [
  ["path", { d: "M13.5 2H10.5C8.14298 2 6.96447 2 6.23223 2.73223C5.5 3.46447 5.5 4.64298 5.5 7V17C5.5 19.357 5.5 20.5355 6.23223 21.2678C6.96447 22 8.14298 22 10.5 22H13.5C15.857 22 17.0355 22 17.7678 21.2678C18.5 20.5355 18.5 19.357 18.5 17V7C18.5 4.64298 18.5 3.46447 17.7678 2.73223C17.0355 2 15.857 2 13.5 2Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12.125 19H12M12.25 19C12.25 19.1381 12.1381 19.25 12 19.25C11.8619 19.25 11.75 19.1381 11.75 19C11.75 18.8619 11.8619 18.75 12 18.75C12.1381 18.75 12.25 18.8619 12.25 19Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var Sorting01Icon = [
  ["path", { d: "M11.0001 8L19.0001 8.00006", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M11.0001 12H16.0001", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M11.0001 16H14.0001", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M11.0001 4H21.0001", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M5.5 21V3M5.5 21C4.79977 21 3.49153 19.0057 3 18.5M5.5 21C6.20023 21 7.50847 19.0057 8 18.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]
];
var SourceCodeIcon = [
  ["path", { d: "M17 8L18.8398 9.85008C19.6133 10.6279 20 11.0168 20 11.5C20 11.9832 19.6133 12.3721 18.8398 13.1499L17 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M7 8L5.16019 9.85008C4.38673 10.6279 4 11.0168 4 11.5C4 11.9832 4.38673 12.3721 5.16019 13.1499L7 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M14.5 4L9.5 20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var SquareIcon = [
  ["path", { d: "M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }]
];
var StarIcon = [
  ["path", { d: "M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var Target02Icon = [
  ["path", { d: "M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12.0303 11.9625L16.5832 7.4096M19.7404 4.34462L19.1872 2.35748C19.0853 2.03011 18.6914 1.89965 18.4259 2.11662C16.9898 3.29018 15.4254 4.87091 16.703 7.36419C19.2771 8.56455 20.7466 6.94584 21.8733 5.5853C22.0975 5.3146 21.9623 4.90767 21.6247 4.81005L19.7404 4.34462Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var TestTube01Icon = [
  ["path", { d: "M8 2H16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M16.2187 13.0044L15.9921 13.6151C15.5219 14.65 14.1115 15.7439 11.7609 14.3182C10.2471 13.4001 8.93663 12.6631 7.9997 13.16L7.21891 13.5412", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M14.5323 2V8.56602C14.5323 9.27829 14.5323 9.63442 14.6304 9.97222C14.7285 10.31 14.9197 10.612 15.3021 11.216L17.2861 14.35C19.4275 17.7326 20.4982 19.4238 19.7751 20.7119C19.0519 22 17.0317 22 12.9914 22H11.0086C6.96825 22 4.94807 22 4.22495 20.7119C3.50182 19.4238 4.57251 17.7326 6.71389 14.35L8.69792 11.216C9.08029 10.612 9.27148 10.31 9.36961 9.97222C9.46773 9.63442 9.46773 9.27829 9.46773 8.56602V2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M15.125 19H15M15.25 19C15.25 19.1381 15.1381 19.25 15 19.25C14.8619 19.25 14.75 19.1381 14.75 19C14.75 18.8619 14.8619 18.75 15 18.75C15.1381 18.75 15.25 18.8619 15.25 19Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M10.125 17H10M10.25 17C10.25 17.1381 10.1381 17.25 10 17.25C9.86193 17.25 9.75 17.1381 9.75 17C9.75 16.8619 9.86193 16.75 10 16.75C10.1381 16.75 10.25 16.8619 10.25 17Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]
];
var TextWrapIcon = [
  ["path", { d: "M3 3H21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M3 15H9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M3 21H9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12M12 18C12 17.1597 14.3932 15.5898 15 15M12 18C12 18.8403 14.3932 20.4102 15 21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]
];
var Tick02Icon = [
  ["path", { d: "M5 14L8.5 17.5L19 6.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var TimeScheduleIcon = [
  ["path", { d: "M12 8V12L13.5 13.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M19.5454 16.4534C21.1818 17.337 22 17.7789 22 18.5C22 19.2211 21.1818 19.663 19.5454 20.5466L18.4311 21.1484C17.1744 21.827 16.5461 22.1663 16.2439 21.9196C15.504 21.3154 16.6567 19.7561 16.9403 19.2037C17.2277 18.644 17.2225 18.3459 16.9403 17.7963C16.6567 17.2439 15.504 15.6846 16.2439 15.0804C16.5461 14.8337 17.1744 15.173 18.4311 15.8516L19.5454 16.4534Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M13.0261 21.948C12.6888 21.9824 12.3464 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.6849 21.9311 13.3538 21.8 14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }]
];
var ToolboxIcon = [
  ["path", { d: "M3 15V14H21V15C21 17.8284 21 19.2426 20.1213 20.1213C19.2426 21 17.8284 21 15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M3 14L3.00001 12.9999C3.00003 11.5278 3.00004 10.7918 3.31675 10.1584C3.63347 9.52493 4.22231 9.08329 5.39999 8.20002C6.19297 7.60528 6.58946 7.30791 7.05132 7.15395C7.51317 7 8.00879 7 9.00002 7H15C15.9912 7 16.4868 7 16.9487 7.15395C17.4105 7.3079 17.807 7.60527 18.6 8.2C19.7777 9.08328 20.3666 9.52492 20.6833 10.1584C21 10.7918 21 11.5279 21 13V14H3Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M16 12V16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M8 12V16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M8.49997 7.00006V6.50006C8.49997 5.0956 8.49997 4.39337 8.83703 3.88892C8.98295 3.67054 9.17045 3.48304 9.38883 3.33712C9.89328 3.00006 10.5955 3.00006 12 3.00006C13.4044 3.00006 14.1067 3.00006 14.6111 3.33712C14.8295 3.48304 15.017 3.67054 15.1629 3.88892C15.5 4.39337 15.5 5.0956 15.5 6.50006V7.00006", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]
];
var Unarchive03Icon = [
  ["path", { d: "M21 7H3V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V7Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M21 7H3L4.2 5.4C5.08328 4.22229 5.52492 3.63344 6.15836 3.31672C6.7918 3 7.52786 3 9 3H15C16.4721 3 17.2082 3 17.8416 3.31672C18.4751 3.63344 18.9167 4.22229 19.8 5.4L21 7Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12 11L12 17.5M9 13.5C9.58984 12.8932 11.1597 10.5 12 10.5C12.8403 10.5 14.4102 12.8932 15 13.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var UserAdd01Icon = [
  ["path", { d: "M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17.5 21L17.5 14M14 17.5H21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M3 20C3 16.134 6.13401 13 10 13C11.4872 13 12.8662 13.4638 14 14.2547", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var UserIcon = [
  ["path", { d: "M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]
];
var ViewOffIcon = [
  ["path", { d: "M22 8C22 8 18 14 12 14C6 14 2 8 2 8", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15 13.5L16.5 16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M20 11L22 13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M2 13L4 11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M9 13.5L7.5 16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]
];
var ViewIcon = [
  ["path", { d: "M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }]
];
var WorkflowCircle03Icon = [
  ["path", { d: "M15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 8V9M12 9C12 9.93188 12 10.3978 12.1776 10.7654C12.4144 11.2554 12.8687 11.6448 13.4404 11.8478C13.8692 12 14.4128 12 15.5 12C16.5872 12 17.1308 12 17.5596 12.1522C18.1313 12.3552 18.5856 12.7446 18.8224 13.2346C19 13.6022 19 14.0681 19 15V16M12 9C12 9.93188 12 10.3978 11.8224 10.7654C11.5856 11.2554 11.1313 11.6448 10.5596 11.8478C10.1308 12 9.5872 12 8.5 12C7.4128 12 6.8692 12 6.44041 12.1522C5.86867 12.3552 5.41443 12.7446 5.17761 13.2346C5 13.6022 5 14.0681 5 15V16", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19Z", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z", stroke: "currentColor", strokeWidth: "1.5", key: "3" }]
];
var ZapIcon = [
  ["path", { d: "M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]
];
var ZoomInAreaIcon = [
  ["path", { d: "M18.5016 19.1217L21 21.6217M20 15.1217C20 12.0842 17.5376 9.62173 14.5 9.62173C11.4624 9.62173 9 12.0842 9 15.1217C9 18.1593 11.4624 20.6217 14.5 20.6217C17.5376 20.6217 20 18.1593 20 15.1217Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M14.5 13.1217V17.1217M16.5 15.1217H12.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M10 3.62173H14M3 10.6217V14.6217M6.5 21.6217C4.567 21.6217 3 20.0547 3 18.1217M17.5 3.62173C19.433 3.62173 21 5.18873 21 7.12173M3 7.12173C3 5.18873 4.567 3.62173 6.5 3.62173", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];
var ZoomOutAreaIcon = [
  ["path", { d: "M18.5016 18.5L21 21M20 14.5C20 11.4624 17.5376 9 14.5 9C11.4624 9 9 11.4624 9 14.5C9 17.5376 11.4624 20 14.5 20C17.5376 20 20 17.5376 20 14.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M16.5 14.5H12.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M10 3H14M3 10V14M6.5 21C4.567 21 3 19.433 3 17.5M17.5 3C19.433 3 21 4.567 21 6.5M3 6.5C3 4.567 4.567 3 6.5 3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]
];

// components/ui/icon.tsx
var PaletteStrokeRoundedIcon = [
  [
    "path",
    {
      d: "M21.8205 10.4127C22.062 11.8519 22.1827 12.5715 21.2423 13.9326C21.1459 14.0722 20.8966 14.3713 20.777 14.4911C19.6103 15.6586 18.4308 15.6586 16.0716 15.6586H14.1392C13.5085 15.6586 13.1931 15.6586 12.9639 15.7142C11.9586 15.9581 11.3031 16.9391 11.453 17.9755C11.4872 18.2118 11.6043 18.5085 11.8386 19.102C11.9345 19.3449 11.9824 19.4664 12.0136 19.7304C12.1292 20.7084 11.0869 21.9508 10.1158 21.9926C9.85358 22.0039 9.83681 22.0002 9.80326 21.9926C7.66174 21.51 5.66204 20.3123 4.18389 18.4421C0.736789 14.0808 1.43146 7.71364 5.73548 4.22064C10.0395 0.727643 16.323 1.43156 19.7701 5.79289C20.868 7.1819 21.5457 8.77438 21.8205 10.4127Z",
      fill: "none",
      fillRule: "evenodd",
      clipRule: "evenodd",
      stroke: "currentColor",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      key: "0"
    }
  ],
  [
    "path",
    {
      d: "M7.36719 7.74976H7.24219M7.49219 7.74976C7.49219 7.88783 7.38026 7.99976 7.24219 7.99976C7.10412 7.99976 6.99219 7.88783 6.99219 7.74976C6.99219 7.61169 7.10412 7.49976 7.24219 7.49976C7.38026 7.49976 7.49219 7.61169 7.49219 7.74976Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      key: "1"
    }
  ],
  [
    "path",
    {
      d: "M7.36719 15.7498H7.24219M7.49219 15.7498C7.49219 15.8878 7.38026 15.9998 7.24219 15.9998C7.10412 15.9998 6.99219 15.8878 6.99219 15.7498C6.99219 15.6117 7.10412 15.4998 7.24219 15.4998C7.38026 15.4998 7.49219 15.6117 7.49219 15.7498Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      key: "2"
    }
  ],
  [
    "path",
    {
      d: "M11.8672 5.74976H11.7422M11.9922 5.74976C11.9922 5.88783 11.8803 5.99976 11.7422 5.99976C11.6041 5.99976 11.4922 5.88783 11.4922 5.74976C11.4922 5.61169 11.6041 5.49976 11.7422 5.49976C11.8803 5.49976 11.9922 5.61169 11.9922 5.74976Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      key: "3"
    }
  ],
  [
    "path",
    {
      d: "M16.3672 7.74976H16.2422M16.4922 7.74976C16.4922 7.88783 16.3803 7.99976 16.2422 7.99976C16.1041 7.99976 15.9922 7.88783 15.9922 7.74976C15.9922 7.61169 16.1041 7.49976 16.2422 7.49976C16.3803 7.49976 16.4922 7.61169 16.4922 7.74976Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      key: "4"
    }
  ],
  [
    "path",
    {
      d: "M18.3672 11.7498H18.2422M18.4922 11.7498C18.4922 11.8878 18.3803 11.9998 18.2422 11.9998C18.1041 11.9998 17.9922 11.8878 17.9922 11.7498C17.9922 11.6117 18.1041 11.4998 18.2422 11.4998C18.3803 11.4998 18.4922 11.6117 18.4922 11.7498Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      key: "5"
    }
  ],
  [
    "path",
    {
      d: "M5.86719 11.7498H5.74219M5.99219 11.7498C5.99219 11.8878 5.88026 11.9998 5.74219 11.9998C5.60412 11.9998 5.49219 11.8878 5.49219 11.7498C5.49219 11.6117 5.60412 11.4998 5.74219 11.4998C5.88026 11.4998 5.99219 11.6117 5.99219 11.7498Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      key: "6"
    }
  ]
];
var SectionAddStrokeRoundedIcon = [
  [
    "path",
    {
      d: "M2 3.4C2 2.24173 2.24173 2 3.4 2H20.6C21.7583 2 22 2.24173 22 3.4V4.6C22 5.75827 21.7583 6 20.6 6H3.4C2.24173 6 2 5.75827 2 4.6V3.4Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "1.5",
      key: "0"
    }
  ],
  [
    "path",
    {
      d: "M2 11.4C2 10.2417 2.24173 10 3.4 10H10.6C11.7583 10 12 10.2417 12 11.4V12.6C12 13.7583 11.7583 14 10.6 14H3.4C2.24173 14 2 13.7583 2 12.6V11.4Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "1.5",
      key: "1"
    }
  ],
  [
    "path",
    {
      d: "M2 19.4C2 18.2417 2.24173 18 3.4 18H10.6C11.7583 18 12 18.2417 12 19.4V20.6C12 21.7583 11.7583 22 10.6 22H3.4C2.24173 22 2 21.7583 2 20.6V19.4Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "1.5",
      key: "2"
    }
  ],
  [
    "path",
    {
      d: "M18 13V21M22 17H14",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "1.5",
      key: "3"
    }
  ]
];
var ICON_MAP = {
  AiContentGenerator01: AiContentGenerator01Icon,
  AlertCircle: AlertCircleIcon,
  AlertTriangle: Alert02Icon,
  AlignLeft: Menu02Icon,
  AppWindow: BrowserIcon,
  Archive: Archive03Icon,
  ArchiveRestore: Unarchive03Icon,
  ArrowDown: ArrowDown02Icon,
  ArrowRight: ArrowRight02Icon,
  ArrowReloadHorizontal: ArrowReloadHorizontalIcon,
  ArrowUp: ArrowUp02Icon,
  ArrowUpDown: ArrowUpDownIcon,
  ArrowTurnBackward: ArrowTurnBackwardIcon,
  ArrowTurnForward: ArrowTurnForwardIcon,
  ArrowUpRight: ArrowUpRight01Icon,
  AudioLines: AudioWave01Icon,
  Beaker: TestTube01Icon,
  BubbleChatQuestion: BubbleChatQuestionIcon,
  Browser: BrowserIcon,
  Brain: BrainIcon,
  Bug: Bug01Icon,
  Calendar: Calendar03Icon,
  CalendarCheckOut02: CalendarCheckOut02Icon,
  CalendarSync: CalendarSyncIcon,
  ChatFeedback: ChatFeedback01Icon,
  ChartColumn: ChartColumnIcon,
  Check: Tick02Icon,
  ChevronDown: ArrowDown01Icon,
  ChevronLeft: ArrowLeft01Icon,
  ChevronRight: ArrowRight01Icon,
  ChevronUp: ArrowUp01Icon,
  ChevronsDown: ArrowDownDoubleIcon,
  ChevronsUp: ArrowUpDoubleIcon,
  Circle: CircleIcon,
  CircleArrowShrink: CircleArrowShrink01Icon,
  CircleCheck: CheckmarkCircle02Icon,
  CircleDashed: DashedLineCircleIcon,
  CircleQuestion: HelpCircleIcon,
  CircleX: CancelCircleIcon,
  Clock: Clock01Icon,
  Code: SourceCodeIcon,
  ComputerTerminal01: ComputerTerminal01Icon,
  Columns2: LayoutTwoColumnIcon,
  Container: CloudIcon,
  Copy: Copy01Icon,
  CornerDownLeft: ArrowMoveDownLeftIcon,
  CornerDownRight: ArrowMoveDownRightIcon,
  Discord: DiscordIcon,
  DateTime: DateTimeIcon,
  Github: GithubIcon,
  DragDropHorizontal: DragDropHorizontalIcon,
  DragDropVertical: DragDropVerticalIcon,
  Download: Download01Icon,
  Edit: Edit02Icon,
  EditFile: Edit04Icon,
  ElectricPlugs: ElectricPlugsIcon,
  Eye: ViewIcon,
  EyeOff: ViewOffIcon,
  Explore: Book02Icon,
  ExternalLink: LinkSquare02Icon,
  FileDiff: PlusMinusSquare01Icon,
  File: FileEmpty02Icon,
  FileAttachment: FileAttachmentIcon,
  FileQuestion: FileQuestionMarkIcon,
  FileText: File01Icon,
  FileX2: FileXIcon,
  Folder: Folder01Icon,
  FolderGit: FolderGitTwoIcon,
  FolderOpen: Folder02Icon,
  FolderMinus: FolderRemoveIcon,
  FolderPlus: FolderAddIcon,
  Fork: GitForkIcon,
  GitBranch: GitBranchIcon,
  GitMerge: GitMergeIcon,
  GitPullRequest: GitPullRequestIcon,
  GitPullRequestArrow: GitPullRequestIcon,
  GitPullRequestClosed: GitPullRequestClosedIcon,
  GitPullRequestDraft: GitPullRequestDraftIcon,
  Globe: InternetIcon,
  GridView: GridViewIcon,
  Info: InformationCircleIcon,
  Laptop: LaptopIcon,
  Layers: Layers01Icon,
  ListView: ListViewIcon,
  SectionAdd: SectionAddStrokeRoundedIcon,
  ListTodo: CheckListIcon,
  Loading: Loading03Icon,
  Lock: LockIcon,
  Mail: Mail02Icon,
  MailOpen: MailOpen01Icon,
  Maximize2: ExpandIcon,
  MessageQuestion: MessageQuestionIcon,
  MessageCirclePlus: BubbleChatAddIcon,
  MessageSquarePlus: BubbleChatAddIcon,
  MessageSquare: BubbleChatIcon,
  Mic: Mic02Icon,
  Minimize2: CollapseIcon,
  MoreHorizontal: MoreHorizontalIcon,
  NewTab: DashedLine02Icon,
  PackageReceive: PackageReceiveIcon,
  Palette: PaletteStrokeRoundedIcon,
  PanelBottom: SidebarBottomIcon,
  PanelLeft: SidebarLeftIcon,
  PanelRight: SidebarRightIcon,
  Paperclip: AttachmentIcon,
  Pause: PauseIcon,
  Pin: PinIcon,
  PinOff: PinOffIcon,
  Play: PlayIcon,
  Plus: PlusSignIcon,
  Puzzle: PuzzleIcon,
  Repeat: RepeatIcon,
  RotateCcw: Refresh01Icon,
  Rows2: LayoutTwoRowIcon,
  Rows3: LayoutThreeRowIcon,
  Search: Search01Icon,
  Sent: SentIcon,
  Settings: Settings01Icon,
  SideChat: MessageAdd02Icon,
  ClosePluginPane: Cancel01Icon,
  CloseThreadPane: Cancel01Icon,
  SlidersHorizontal: SlidersHorizontalIcon,
  Smartphone: SmartPhone01Icon,
  Sort: Sorting01Icon,
  Spinner: DashedLineCircleIcon,
  Square: SquareIcon,
  Star: StarIcon,
  Target: Target02Icon,
  Terminal: ComputerTerminal01Icon,
  TextWrap: TextWrapIcon,
  TimeSchedule: TimeScheduleIcon,
  Toolbox: ToolboxIcon,
  Trash2: Delete02Icon,
  UserRound: UserIcon,
  UserRoundPlus: UserAdd01Icon,
  Workflow: WorkflowCircle03Icon,
  X: Cancel01Icon,
  Zap: ZapIcon,
  ZoomIn: ZoomInAreaIcon,
  ZoomOut: ZoomOutAreaIcon
};
var ICON_NAMES = Object.keys(ICON_MAP);
function Icon({
  name,
  className,
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel
}) {
  return /* @__PURE__ */ jsx(
    HugeiconsIcon,
    {
      icon: ICON_MAP[name],
      className: cn(className),
      "aria-hidden": ariaHidden,
      "aria-label": ariaLabel,
      "data-icon": name
    }
  );
}

// hooks/useBrowserDimmingModal.ts
function useBrowserDimmingModal(_active) {
}

// bb-plugin-runtime-shim:vaul
var runtime9 = globalThis.__bbPluginRuntime;
if (runtime9 == null || runtime9.vaul == null) {
  throw new Error('Cannot load "vaul": this bundle must be loaded by the BB app, which provides the shared plugin runtime (globalThis.__bbPluginRuntime).');
}
var mod9 = runtime9.vaul;
var {
  Content: Content3,
  Drawer,
  Handle,
  NestedRoot,
  Overlay: Overlay2,
  Portal: Portal3,
  Root: Root3
} = mod9;

// components/ui/overlay-trigger.ts
var OVERLAY_TRIGGER_CLASS_NAME = "select-none";
var NON_TEXT_INPUT_TYPES = /* @__PURE__ */ new Set([
  "button",
  "checkbox",
  "file",
  "hidden",
  "image",
  "radio",
  "range",
  "reset",
  "submit"
]);
var getOverlayTriggerClassName = (className) => cn(OVERLAY_TRIGGER_CLASS_NAME, className);
function isKeyboardInputElement(element) {
  if (element instanceof HTMLTextAreaElement) return true;
  if (element instanceof HTMLInputElement) {
    return !element.disabled && !element.readOnly && !NON_TEXT_INPUT_TYPES.has(element.type);
  }
  if (!(element instanceof HTMLElement)) return false;
  return element.isContentEditable || element.closest("[contenteditable='true']") !== null;
}
function blurActiveKeyboardInputWithin(container) {
  if (typeof document === "undefined") return;
  const activeElement = document.activeElement;
  if (!activeElement || !isKeyboardInputElement(activeElement)) return;
  if (container !== null && !container.contains(activeElement)) return;
  activeElement.blur();
}
function blurActiveKeyboardInputBeforeOverlayOpen() {
  blurActiveKeyboardInputWithin(null);
}
function blurActiveKeyboardInputBeforeOverlayClose() {
  blurActiveKeyboardInputWithin(null);
}
function preventOverlayTriggerSelection(event) {
  event.preventDefault();
}
var MODALITY_KEY = "__bbPluginInputModality";
if (typeof document !== "undefined") {
  const shared = globalThis;
  if (shared[MODALITY_KEY] === void 0) {
    shared[MODALITY_KEY] = "pointer";
    document.addEventListener(
      "keydown",
      () => {
        shared[MODALITY_KEY] = "keyboard";
      },
      { capture: true }
    );
    document.addEventListener(
      "pointerdown",
      () => {
        shared[MODALITY_KEY] = "pointer";
      },
      { capture: true }
    );
  }
}
function isLastInputKeyboard() {
  return globalThis[MODALITY_KEY] === "keyboard";
}

// components/ui/drawer.tsx
var Drawer2 = ({
  shouldScaleBackground = false,
  ...props
}) => /* @__PURE__ */ jsx(
  Drawer.Root,
  {
    shouldScaleBackground,
    ...props
  }
);
Drawer2.displayName = "Drawer";
var DrawerTrigger = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer.Trigger,
  {
    ref,
    className: getOverlayTriggerClassName(className),
    onMouseDown: preventOverlayTriggerSelection,
    ...props
  }
));
DrawerTrigger.displayName = Drawer.Trigger.displayName;
var DrawerPortal = Drawer.Portal;
var DrawerClose = Drawer.Close;
var DrawerOverlay = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer.Overlay,
  {
    ref,
    ...usePortalScopeProps(),
    className: cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-[1px]",
      className
    ),
    ...props
  }
));
DrawerOverlay.displayName = Drawer.Overlay.displayName;
var DrawerContent = forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DrawerPortal, { children: [
  /* @__PURE__ */ jsx(DrawerOverlay, {}),
  /* @__PURE__ */ jsxs(
    Drawer.Content,
    {
      ref,
      ...usePortalScopeProps(),
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex max-h-[85dvh] flex-col rounded-t-xl border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          Drawer.Handle,
          {
            className: "mx-auto mt-3 mb-1 h-1 w-10 shrink-0 rounded-full bg-muted-foreground/20"
          }
        ),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
var DrawerTitle = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DrawerTitle.displayName = Drawer.Title.displayName;
var DrawerDescription = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = Drawer.Description.displayName;

// components/ui/hooks/use-pointer-coarse.ts
var POINTER_COARSE_QUERY = "(pointer: coarse)";
function usePointerCoarse() {
  return useMediaQuery(POINTER_COARSE_QUERY);
}

// components/ui/responsive-overlay.tsx
var ResponsiveDrawerDepthContext = createContext(0);
var SONNER_TOASTER_SELECTOR = "[data-sonner-toaster]";
function resetDrawerKeyboardStyles(drawerElement) {
  if (drawerElement === null) return;
  drawerElement.style.height = "";
  drawerElement.style.bottom = "";
}
function isSonnerToasterPointerTarget(target) {
  return target instanceof Element && target.closest(SONNER_TOASTER_SELECTOR) !== null;
}
function useResponsiveRoot(controlledOpen, controlledOnChange, defaultOpen = false) {
  const isCompactViewport = useIsCompactViewport();
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== void 0;
  const open2 = isControlled ? controlledOpen : internalOpen;
  const onOpenChange = useCallback(
    (next) => {
      if (open2 && !next && isCompactViewport) {
        blurActiveKeyboardInputBeforeOverlayClose();
      }
      if (!isControlled) {
        setInternalOpen(next);
      }
      controlledOnChange?.(next);
    },
    [isCompactViewport, isControlled, controlledOnChange, open2]
  );
  return useMemo(
    () => ({ isCompactViewport, open: open2, onOpenChange }),
    [isCompactViewport, open2, onOpenChange]
  );
}
var MobileTrigger = forwardRef(
  ({
    asChild,
    open: open2,
    onOpenChange,
    haspopup,
    onClick,
    children,
    className,
    ...domProps
  }, ref) => {
    const triggerClassName = getOverlayTriggerClassName(className);
    const handleClick = (e) => {
      onClick?.(e);
      if (!e.defaultPrevented) {
        if (!open2) {
          blurActiveKeyboardInputBeforeOverlayOpen();
        }
        onOpenChange(!open2);
      }
    };
    const ariaProps = {
      "aria-expanded": open2,
      "aria-haspopup": haspopup,
      "data-state": open2 ? "open" : "closed"
    };
    if (asChild) {
      return /* @__PURE__ */ jsx(
        Slot,
        {
          ref,
          onClick: handleClick,
          onMouseDown: preventOverlayTriggerSelection,
          className: triggerClassName,
          ...ariaProps,
          ...domProps,
          children
        }
      );
    }
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        type: "button",
        onClick: handleClick,
        onMouseDown: preventOverlayTriggerSelection,
        className: triggerClassName,
        ...ariaProps,
        ...domProps,
        children
      }
    );
  }
);
MobileTrigger.displayName = "MobileTrigger";
var RADIX_CONTENT_PROP_NAMES = [
  "side",
  "sideOffset",
  "align",
  "alignOffset",
  "collisionPadding",
  "collisionBoundary",
  "arrowPadding",
  "sticky",
  "hideWhenDetached",
  "avoidCollisions",
  "onOpenAutoFocus",
  "onCloseAutoFocus",
  "onEscapeKeyDown",
  "onPointerDownOutside",
  "onFocusOutside",
  "onInteractOutside"
];
var RADIX_CONTENT_KEYS = new Set(
  RADIX_CONTENT_PROP_NAMES
);
function stripRadixContentProps(props) {
  const result = {};
  for (const key of Object.keys(props)) {
    if (!RADIX_CONTENT_KEYS.has(key)) {
      result[key] = props[key];
    }
  }
  return result;
}
function ResponsiveDrawerShell({
  open: open2,
  onOpenChange,
  srLabel,
  contentClassName,
  handleOnly,
  repositionInputs,
  onContentAnimationEnd,
  children
}) {
  const parentDrawerDepth = useContext(ResponsiveDrawerDepthContext);
  const drawerContentRef = useRef(null);
  const isPointerCoarse = usePointerCoarse();
  const isNestedDrawer = parentDrawerDepth > 0;
  const shouldRepositionInputs = repositionInputs ?? !isNestedDrawer;
  const resetClosingKeyboardState = useCallback(() => {
    blurActiveKeyboardInputWithin(drawerContentRef.current);
    resetDrawerKeyboardStyles(drawerContentRef.current);
  }, []);
  const handleOpenChange = useCallback(
    (nextOpen) => {
      if (!nextOpen) {
        resetClosingKeyboardState();
      }
      onOpenChange(nextOpen);
    },
    [onOpenChange, resetClosingKeyboardState]
  );
  const handleContentAnimationEnd = useCallback(
    (event) => {
      if (event.currentTarget !== event.target) {
        return;
      }
      onContentAnimationEnd?.(open2);
    },
    [onContentAnimationEnd, open2]
  );
  const handleOpenAutoFocus = useCallback(
    (event) => {
      if (isPointerCoarse) {
        event.preventDefault();
      }
    },
    [isPointerCoarse]
  );
  const handlePointerDownOutside = useCallback(
    (event) => {
      if (isSonnerToasterPointerTarget(event.detail.originalEvent.target)) {
        event.preventDefault();
      }
    },
    []
  );
  const previousOpenRef = useRef(open2);
  useLayoutEffect(() => {
    if (previousOpenRef.current && !open2) {
      resetClosingKeyboardState();
    }
    previousOpenRef.current = open2;
  }, [open2, resetClosingKeyboardState]);
  return /* @__PURE__ */ jsx(
    Drawer2,
    {
      open: open2,
      onOpenChange: handleOpenChange,
      handleOnly,
      nested: isNestedDrawer,
      repositionInputs: shouldRepositionInputs,
      children: /* @__PURE__ */ jsx(
        DrawerContent,
        {
          ref: drawerContentRef,
          className: contentClassName,
          onAnimationEnd: handleContentAnimationEnd,
          onOpenAutoFocus: handleOpenAutoFocus,
          onPointerDownOutside: handlePointerDownOutside,
          children: /* @__PURE__ */ jsxs(ResponsiveDrawerDepthContext.Provider, { value: parentDrawerDepth + 1, children: [
            srLabel !== void 0 ? /* @__PURE__ */ jsx(DrawerTitle, { className: "sr-only", children: srLabel }) : null,
            children
          ] })
        }
      )
    }
  );
}

// components/ui/dialog.tsx
var ResponsiveDialogContext = createContext({
  isCompactViewport: false,
  open: false,
  onOpenChange: () => {
  }
});
function useResponsiveDialog() {
  return useContext(ResponsiveDialogContext);
}
var DialogTrigger2 = forwardRef(({ asChild, children, className, ...props }, ref) => {
  const { isCompactViewport, open: open2, onOpenChange } = useResponsiveDialog();
  if (isCompactViewport) {
    return /* @__PURE__ */ jsx(
      MobileTrigger,
      {
        ref,
        asChild,
        open: open2,
        onOpenChange,
        haspopup: "dialog",
        className,
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(
    Trigger2,
    {
      ref,
      asChild,
      className: getOverlayTriggerClassName(className),
      onMouseDown: (event) => {
        if (!open2) {
          blurActiveKeyboardInputBeforeOverlayOpen();
        }
        preventOverlayTriggerSelection(event);
      },
      ...props,
      children
    }
  );
});
DialogTrigger2.displayName = "DialogTrigger";
var DialogClose2 = forwardRef(
  ({ asChild, onClick, children, ...props }, ref) => {
    const { isCompactViewport, onOpenChange } = useResponsiveDialog();
    if (isCompactViewport) {
      const Comp = asChild ? Slot : "button";
      const handleClick = (event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          onOpenChange(false);
        }
      };
      return /* @__PURE__ */ jsx(Comp, { ref, onClick: handleClick, ...props, children });
    }
    return /* @__PURE__ */ jsx(
      Close,
      {
        ref,
        asChild,
        onClick,
        ...props,
        children
      }
    );
  }
);
DialogClose2.displayName = "DialogClose";
var DialogOverlay2 = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Overlay,
  {
    ref,
    ...usePortalScopeProps(),
    className: cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay2.displayName = Overlay.displayName;
var DialogContent2 = forwardRef(
  ({ className, children, ...props }, ref) => {
    const { isCompactViewport, open: open2, onOpenChange } = useResponsiveDialog();
    useBrowserDimmingModal(open2);
    const scopeProps = usePortalScopeProps();
    if (isCompactViewport) {
      const domProps = stripRadixContentProps(props);
      return /* @__PURE__ */ jsx(ResponsiveDrawerShell, { open: open2, onOpenChange, children: /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          className: cn(
            "grid gap-4 overflow-y-auto px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))]",
            className,
            // The drawer spans the full viewport width; ignore any desktop
            // max-width override a caller passes so content fills the drawer.
            "max-w-none"
          ),
          ...domProps,
          children
        }
      ) });
    }
    return /* @__PURE__ */ jsxs(Portal2, { children: [
      /* @__PURE__ */ jsx(DialogOverlay2, {}),
      /* @__PURE__ */ jsxs(
        Content2,
        {
          ref,
          ...scopeProps,
          className: cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-sm duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
            className
          ),
          ...props,
          children: [
            children,
            /* @__PURE__ */ jsxs(Close, { className: "absolute right-4 top-4 cursor-pointer rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-state-active data-[state=open]:text-foreground", children: [
              /* @__PURE__ */ jsx(Icon, { name: "X", className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
            ] })
          ]
        }
      )
    ] });
  }
);
DialogContent2.displayName = "DialogContent";
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col space-y-1.5 text-left", className),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle2 = forwardRef(({ className, ...props }, ref) => {
  const { isCompactViewport } = useResponsiveDialog();
  const Comp = isCompactViewport ? DrawerTitle : Title;
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn(
        "text-base font-semibold leading-none tracking-tight",
        className
      ),
      ...props
    }
  );
});
DialogTitle2.displayName = "DialogTitle";
var DialogDescription2 = forwardRef(({ className, ...props }, ref) => {
  const { isCompactViewport } = useResponsiveDialog();
  const Comp = isCompactViewport ? DrawerDescription : Description;
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
});
DialogDescription2.displayName = Description.displayName;

// components/ui/command.tsx
var Command = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  _e,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = _e.displayName;
var CommandInput = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(Icon, { name: "Search", className: "mr-2 size-4 shrink-0 opacity-50", "aria-hidden": "true" }),
  /* @__PURE__ */ jsx(
    _e.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = _e.Input.displayName;
var CommandList = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  _e.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = _e.List.displayName;
var CommandEmpty = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  _e.Empty,
  {
    ref,
    className: cn("py-6 text-center text-sm", className),
    ...props
  }
));
CommandEmpty.displayName = _e.Empty.displayName;
var CommandGroup = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  _e.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = _e.Group.displayName;
var CommandSeparator = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  _e.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = _e.Separator.displayName;
var CommandItem = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  _e.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
CommandItem.displayName = _e.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
CommandShortcut.displayName = "CommandShortcut";

// lib/scopes.ts
var PATH_BUDGET = 30;
var PATH_TAIL_SEGMENTS = 2;
function shortenPath(path) {
  if (path.length <= PATH_BUDGET) return path;
  const segments = path.split("/").filter((part) => part !== "");
  if (segments.length <= PATH_TAIL_SEGMENTS) return path;
  return `\u2026/${segments.slice(-PATH_TAIL_SEGMENTS).join("/")}`;
}
function buildSections(scopes, recentScopeKeys) {
  const byKey = new Map(scopes.map((scope) => [scope.key, scope]));
  const recent = recentScopeKeys.map((key) => byKey.get(key)).filter((scope) => scope !== void 0);
  const recentKeys = new Set(recent.map((scope) => scope.key));
  const rest = scopes.filter((scope) => !recentKeys.has(scope.key));
  const sections = [
    { id: "recent", heading: "Recent", icon: "Clock", scopes: recent },
    {
      id: "projects",
      heading: "Projects",
      icon: "FolderGit",
      scopes: rest.filter((scope) => scope.kind === "project")
    },
    {
      id: "machines",
      heading: "Machines",
      icon: "Laptop",
      scopes: rest.filter((scope) => scope.kind === "home")
    }
  ];
  return sections.filter((section) => section.scopes.length > 0);
}

// components/shell-picker.tsx
var SEARCHABLE_FROM = 7;
function ShellPicker({
  scopes,
  recentScopeKeys,
  showHosts,
  onPick,
  fill = false,
  className
}) {
  const sections = buildSections(scopes, recentScopeKeys);
  const searchable = scopes.length >= SEARCHABLE_FROM;
  return /* @__PURE__ */ jsxs(
    Command,
    {
      className: cn("flex min-h-0 flex-col bg-transparent", className),
      children: [
        searchable ? /* @__PURE__ */ jsx(CommandInput, { placeholder: "Find a directory" }) : null,
        /* @__PURE__ */ jsxs(CommandList, { "data-bb-ft-fill": fill ? "" : void 0, className: cn(fill && "min-h-0 flex-1"), children: [
          /* @__PURE__ */ jsx(CommandEmpty, { className: "py-6 text-center text-sm text-muted-foreground", children: "No directory matches that." }),
          sections.map((section) => /* @__PURE__ */ jsx(CommandGroup, { heading: section.heading, children: section.scopes.map((scope) => /* @__PURE__ */ jsxs(
            CommandItem,
            {
              value: `${scope.label} ${scope.detail} ${scope.hostName}`,
              disabled: !scope.online,
              onSelect: () => onPick(scope.key),
              className: "gap-2.5",
              children: [
                /* @__PURE__ */ jsx(
                  Icon,
                  {
                    name: section.icon,
                    className: "size-4 shrink-0 text-muted-foreground",
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "flex min-w-0 flex-1 flex-col", children: [
                  /* @__PURE__ */ jsx("span", { className: "truncate", children: scope.label }),
                  /* @__PURE__ */ jsx("span", { className: "truncate font-mono text-xs text-muted-foreground", children: shortenPath(scope.detail) })
                ] }),
                showHosts || !scope.online ? (
                  // The width cap lives in styles.css for the same reason as
                  // the list cap above. At sheet width a long machine name took
                  // half the row and truncated every project to
                  // "bb-plugin-co…"; the row never overflows, so the label just
                  // got whatever was left and flex shrinking never kicked in.
                  /* @__PURE__ */ jsxs(
                    "span",
                    {
                      "data-bb-ft-host": "",
                      className: "shrink-0 self-center truncate text-xs text-muted-foreground",
                      children: [
                        showHosts ? scope.hostName : null,
                        !scope.online ? showHosts ? " \xB7 offline" : "offline" : null
                      ]
                    }
                  )
                ) : null
              ]
            },
            scope.key
          )) }, section.id))
        ] })
      ]
    }
  );
}

// lib/keys.ts
function controlCode(key) {
  if (key.length !== 1) return null;
  if (key === "?") return "\x7F";
  if (key === " ") return "\0";
  const code = key.toUpperCase().charCodeAt(0);
  if (code >= 64 && code <= 95) return String.fromCharCode(code - 64);
  return null;
}
var ARROW_FINAL = {
  up: "A",
  down: "B",
  right: "C",
  left: "D"
};
function arrowSequence(direction, applicationCursorKeys) {
  return `\x1B${applicationCursorKeys ? "O" : "["}${ARROW_FINAL[direction]}`;
}
var TOOLBAR_KEYS = [
  { id: "esc", label: "esc", title: "Escape", kind: "send", send: "\x1B", emphasis: true },
  { id: "tab", label: "tab", title: "Tab", kind: "send", send: "	", emphasis: true },
  { id: "ctrl", label: "ctrl", title: "Control", kind: "modifier", emphasis: true },
  { id: "left", label: "\u2190", title: "Left", kind: "arrow", direction: "left" },
  { id: "up", label: "\u2191", title: "Up", kind: "arrow", direction: "up" },
  { id: "down", label: "\u2193", title: "Down", kind: "arrow", direction: "down" },
  { id: "right", label: "\u2192", title: "Right", kind: "arrow", direction: "right" },
  { id: "ctrl-c", label: "^C", title: "Interrupt (Ctrl+C)", kind: "send", send: "", emphasis: true },
  { id: "ctrl-d", label: "^D", title: "End of file (Ctrl+D)", kind: "send", send: "" },
  { id: "ctrl-z", label: "^Z", title: "Suspend (Ctrl+Z)", kind: "send", send: "" },
  { id: "home", label: "home", title: "Start of line", kind: "send", send: "" },
  { id: "end", label: "end", title: "End of line", kind: "send", send: "" },
  { id: "pipe", label: "|", title: "Pipe", kind: "send", send: "|" },
  { id: "tilde", label: "~", title: "Tilde", kind: "send", send: "~" },
  { id: "slash", label: "/", title: "Slash", kind: "send", send: "/" },
  { id: "dash", label: "-", title: "Dash", kind: "send", send: "-" },
  { id: "underscore", label: "_", title: "Underscore", kind: "send", send: "_" },
  { id: "paste", label: "paste", title: "Paste from clipboard", kind: "action" },
  { id: "dismiss", label: "\u2304", title: "Hide keyboard", kind: "action", emphasis: true }
];

// components/key-toolbar.tsx
function KeyToolbar({ ctrlArmed, onKey }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "bb-ft-keybar flex shrink-0 items-center gap-1 border-t border-border bg-muted/40",
      role: "toolbar",
      "aria-label": "Terminal keys",
      "data-no-drag": "",
      children: TOOLBAR_KEYS.map((key) => {
        const armed = key.id === "ctrl" && ctrlArmed;
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            title: key.title,
            "aria-label": key.title,
            "aria-pressed": key.kind === "modifier" ? armed : void 0,
            onPointerDown: (event) => {
              event.preventDefault();
              onKey(key);
            },
            className: cn(
              "bb-ft-key",
              key.emphasis ? "bb-ft-key-strong" : null,
              armed ? "bb-ft-key-armed" : null
            ),
            children: key.label
          },
          key.id
        );
      })
    }
  );
}

// node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};

// components/ui/motion.ts
var CONTROL_HOVER_TRANSITION = "transition-colors duration-150 hover:duration-0";
var LIST_HOVER_TRANSITION = "transition-none";

// components/ui/button.tsx
var buttonVariants = cva(
  `inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ${CONTROL_HOVER_TRANSITION} focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-transparent hover:bg-state-hover hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-state-hover hover:text-foreground aria-pressed:bg-state-active aria-pressed:text-foreground aria-pressed:hover:bg-state-active data-[state=open]:bg-state-active data-[state=open]:text-foreground data-[state=open]:hover:bg-state-active",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// bb-plugin-runtime-shim:@radix-ui/react-dropdown-menu
var runtime10 = globalThis.__bbPluginRuntime;
if (runtime10 == null || runtime10.radixDropdownMenu == null) {
  throw new Error('Cannot load "@radix-ui/react-dropdown-menu": this bundle must be loaded by the BB app, which provides the shared plugin runtime (globalThis.__bbPluginRuntime).');
}
var mod10 = runtime10.radixDropdownMenu;
var {
  Arrow: Arrow2,
  CheckboxItem,
  Content: Content4,
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Group,
  Item,
  ItemIndicator,
  Label,
  Portal: Portal4,
  RadioGroup,
  RadioItem,
  Root: Root4,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger: Trigger3,
  createDropdownMenuScope
} = mod10;

// components/ui/coarse-pointer-sizing.ts
var COARSE_POINTER_CHECK_SLOT_CLASS = "h-3.5 w-3.5 max-md:pointer-coarse:h-5 max-md:pointer-coarse:w-5";
var HEADER_ICON_BUTTON_BOX_CLASS = "h-[28px] w-[28px] rounded-md p-0 max-md:pointer-coarse:h-[36px] max-md:pointer-coarse:w-[36px]";
var COARSE_POINTER_HEADER_ICON_BUTTON_CLASS = `${HEADER_ICON_BUTTON_BOX_CLASS} [&_svg]:size-[16px] max-md:pointer-coarse:[&_svg]:size-[20px]`;
var COARSE_POINTER_HEADER_REDUCED_GLYPH_ICON_BUTTON_CLASS = `${HEADER_ICON_BUTTON_BOX_CLASS} [&_svg]:size-[13px] max-md:pointer-coarse:[&_svg]:size-[16px]`;

// components/ui/menu-item-hover.tsx
var MENU_NAV_KEYS = /* @__PURE__ */ new Set([
  "ArrowDown",
  "ArrowUp",
  "Home",
  "End",
  "PageDown",
  "PageUp"
]);
var MENU_ITEM_LAST_HOVERED_CLASS = "data-[last-hovered]:bg-state-hover data-[last-hovered]:text-foreground";
var MenuHoverContext = createContext({
  lastHoveredId: null,
  setLastHovered: () => {
  },
  clearLastHovered: () => {
  }
});
function MenuHoverProvider({ children }) {
  const [lastHoveredId, setLastHoveredId] = useState(null);
  const value = useMemo(
    () => ({
      lastHoveredId,
      setLastHovered: setLastHoveredId,
      clearLastHovered: () => setLastHoveredId(null)
    }),
    [lastHoveredId]
  );
  return /* @__PURE__ */ jsx(MenuHoverContext.Provider, { value, children });
}
function useMenuItemHover(handlers) {
  const id = useId();
  const { lastHoveredId, setLastHovered, clearLastHovered } = useContext(MenuHoverContext);
  const isLastHovered = lastHoveredId === id;
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;
  const onPointerEnter = useCallback(
    (event) => {
      handlersRef.current?.onPointerEnter?.(event);
      setLastHovered(id);
    },
    [id, setLastHovered]
  );
  const onKeyDown = useCallback(
    (event) => {
      handlersRef.current?.onKeyDown?.(event);
      if (MENU_NAV_KEYS.has(event.key)) {
        clearLastHovered();
      }
    },
    [clearLastHovered]
  );
  return {
    isLastHovered,
    hoverProps: {
      "data-last-hovered": isLastHovered ? "" : void 0,
      onPointerEnter,
      onKeyDown
    }
  };
}

// components/ui/dropdown-menu.tsx
var MENU_ITEM_NEUTRAL_STATE_CLASS = "focus:bg-state-hover focus:text-foreground data-[last-hovered]:bg-state-hover data-[last-hovered]:text-foreground";
var MENU_ITEM_DESTRUCTIVE_STATE_CLASS = "text-destructive focus:bg-destructive/15 focus:text-destructive data-[last-hovered]:bg-destructive/15";
var MENU_ITEM_DESTRUCTIVE_TOUCH_CLASS = "text-destructive focus:bg-destructive/15 focus:text-destructive active:bg-destructive/20 active:text-destructive";
var ResponsiveMenuContext = createContext({
  isCompactViewport: false,
  open: false,
  onOpenChange: () => {
  }
});
function useResponsiveMenu() {
  return useContext(ResponsiveMenuContext);
}
function DropdownMenu2({
  children,
  open: controlledOpen,
  onOpenChange: controlledOnChange,
  defaultOpen,
  ...props
}) {
  const ctx = useResponsiveRoot(
    controlledOpen,
    controlledOnChange,
    defaultOpen
  );
  if (ctx.isCompactViewport) {
    return /* @__PURE__ */ jsx(ResponsiveMenuContext.Provider, { value: ctx, children });
  }
  return /* @__PURE__ */ jsx(
    Root4,
    {
      open: ctx.open,
      onOpenChange: ctx.onOpenChange,
      ...props,
      children: /* @__PURE__ */ jsx(ResponsiveMenuContext.Provider, { value: ctx, children })
    }
  );
}
var DropdownMenuTrigger2 = forwardRef(({ asChild, children, className, ...props }, ref) => {
  const { isCompactViewport, open: open2, onOpenChange } = useResponsiveMenu();
  if (isCompactViewport) {
    return /* @__PURE__ */ jsx(
      MobileTrigger,
      {
        ref,
        asChild,
        open: open2,
        onOpenChange,
        haspopup: "menu",
        className,
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(
    Trigger3,
    {
      ref,
      asChild,
      className: getOverlayTriggerClassName(className),
      onMouseDown: (event) => {
        if (!open2) {
          blurActiveKeyboardInputBeforeOverlayOpen();
        }
        preventOverlayTriggerSelection(event);
      },
      ...props,
      children
    }
  );
});
DropdownMenuTrigger2.displayName = "DropdownMenuTrigger";
var DropdownMenuContent2 = forwardRef(
  ({
    className,
    sideOffset = 4,
    children,
    mobileTitle,
    onCloseAutoFocus,
    ...props
  }, ref) => {
    const { isCompactViewport, open: open2, onOpenChange } = useResponsiveMenu();
    const scopeProps = usePortalScopeProps();
    if (isCompactViewport) {
      const domProps = stripRadixContentProps(props);
      return /* @__PURE__ */ jsx(
        ResponsiveDrawerShell,
        {
          open: open2,
          onOpenChange,
          srLabel: mobileTitle ?? "Menu",
          repositionInputs: false,
          children: /* @__PURE__ */ jsx(
            "div",
            {
              ref,
              className: cn(
                "flex flex-col gap-0.5 overflow-y-auto p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]",
                className
              ),
              style: { minWidth: "auto", maxWidth: "none", width: "auto" },
              ...domProps,
              children
            }
          )
        }
      );
    }
    return /* @__PURE__ */ jsx(Portal4, { children: /* @__PURE__ */ jsx(
      Content4,
      {
        ref,
        ...scopeProps,
        sideOffset,
        onCloseAutoFocus: (event) => {
          if (!isLastInputKeyboard()) {
            event.preventDefault();
          }
          onCloseAutoFocus?.(event);
        },
        className: cn(
          "z-50 min-w-28 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsx(MenuHoverProvider, { children })
      }
    ) });
  }
);
DropdownMenuContent2.displayName = "DropdownMenuContent";
function createSelectEvent() {
  return new Event("select", { cancelable: true });
}
var DropdownMenuItem2 = forwardRef(
  ({
    className,
    inset,
    variant = "default",
    onSelect,
    disabled,
    textValue: _textValue,
    children,
    onPointerEnter: callerPointerEnter,
    onKeyDown: callerKeyDown,
    ...domProps
  }, ref) => {
    const { isCompactViewport, onOpenChange } = useResponsiveMenu();
    const { hoverProps } = useMenuItemHover({
      onPointerEnter: callerPointerEnter,
      onKeyDown: callerKeyDown
    });
    if (isCompactViewport) {
      return /* @__PURE__ */ jsx(
        "button",
        {
          ref,
          type: "button",
          role: "menuitem",
          disabled,
          "aria-disabled": disabled || void 0,
          className: cn(
            "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-2 text-left text-xs outline-none transition-colors focus:bg-state-hover focus:text-foreground active:bg-state-active active:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
            inset && "pl-8",
            variant === "destructive" && MENU_ITEM_DESTRUCTIVE_TOUCH_CLASS,
            className
          ),
          "data-disabled": disabled ? "" : void 0,
          onClick: () => {
            if (disabled) return;
            const event = createSelectEvent();
            onSelect?.(event);
            if (!event.defaultPrevented) {
              onOpenChange(false);
            }
          },
          children
        }
      );
    }
    return /* @__PURE__ */ jsx(
      Item,
      {
        ref,
        className: cn(
          "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-[0.3125rem] text-xs outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
          LIST_HOVER_TRANSITION,
          variant === "destructive" ? MENU_ITEM_DESTRUCTIVE_STATE_CLASS : MENU_ITEM_NEUTRAL_STATE_CLASS,
          inset && "pl-8",
          className
        ),
        disabled,
        onSelect,
        textValue: _textValue,
        ...domProps,
        ...hoverProps,
        children
      }
    );
  }
);
DropdownMenuItem2.displayName = "DropdownMenuItem";
var DropdownMenuCheckboxItem2 = forwardRef(
  ({
    className,
    children,
    checked,
    onSelect,
    onCheckedChange,
    disabled,
    textValue: _textValue,
    onPointerEnter: callerPointerEnter,
    onKeyDown: callerKeyDown,
    ...domProps
  }, ref) => {
    const { isCompactViewport, onOpenChange } = useResponsiveMenu();
    const { hoverProps } = useMenuItemHover({
      onPointerEnter: callerPointerEnter,
      onKeyDown: callerKeyDown
    });
    if (isCompactViewport) {
      return /* @__PURE__ */ jsxs(
        "button",
        {
          ref,
          type: "button",
          role: "menuitemcheckbox",
          "aria-checked": checked === "indeterminate" ? "mixed" : checked === true,
          disabled,
          "aria-disabled": disabled || void 0,
          className: cn(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-2 pl-2 pr-8 text-left text-xs outline-none transition-colors focus:bg-state-hover focus:text-foreground active:bg-state-active active:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
          ),
          "data-disabled": disabled ? "" : void 0,
          onClick: () => {
            if (disabled) return;
            const event = createSelectEvent();
            onSelect?.(event);
            onCheckedChange?.(checked === "indeterminate" ? true : !checked);
            if (!event.defaultPrevented) {
              onOpenChange(false);
            }
          },
          children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: cn(
                  "absolute right-2 flex items-center justify-center",
                  COARSE_POINTER_CHECK_SLOT_CLASS
                ),
                children: (checked === true || checked === "indeterminate") && /* @__PURE__ */ jsx(Icon, { name: "Check", className: COARSE_POINTER_CHECK_SLOT_CLASS })
              }
            ),
            children
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxs(
      CheckboxItem,
      {
        ref,
        className: cn(
          "relative flex cursor-default select-none items-center rounded-sm py-[0.3125rem] pl-2 pr-8 text-xs outline-none focus:bg-state-hover focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          LIST_HOVER_TRANSITION,
          MENU_ITEM_LAST_HOVERED_CLASS,
          className
        ),
        checked,
        onSelect,
        onCheckedChange,
        disabled,
        textValue: _textValue,
        ...domProps,
        ...hoverProps,
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "absolute right-2 flex items-center justify-center",
                COARSE_POINTER_CHECK_SLOT_CLASS
              ),
              children: /* @__PURE__ */ jsx(ItemIndicator, { children: /* @__PURE__ */ jsx(Icon, { name: "Check", className: COARSE_POINTER_CHECK_SLOT_CLASS }) })
            }
          ),
          children
        ]
      }
    );
  }
);
DropdownMenuCheckboxItem2.displayName = "DropdownMenuCheckboxItem";
var DropdownMenuRadioItem2 = forwardRef(
  ({
    className,
    children,
    onPointerEnter: callerPointerEnter,
    onKeyDown: callerKeyDown,
    ...props
  }, ref) => {
    const { isCompactViewport } = useResponsiveMenu();
    const { hoverProps } = useMenuItemHover({
      onPointerEnter: callerPointerEnter,
      onKeyDown: callerKeyDown
    });
    if (isCompactViewport) {
      return null;
    }
    return /* @__PURE__ */ jsxs(
      RadioItem,
      {
        ref,
        className: cn(
          "relative flex cursor-default select-none items-center rounded-sm py-[0.3125rem] pl-8 pr-2 text-xs outline-none focus:bg-state-hover focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          LIST_HOVER_TRANSITION,
          MENU_ITEM_LAST_HOVERED_CLASS,
          className
        ),
        ...props,
        ...hoverProps,
        children: [
          /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(ItemIndicator, { children: /* @__PURE__ */ jsx(Icon, { name: "Circle", className: "h-2 w-2 fill-current" }) }) }),
          children
        ]
      }
    );
  }
);
DropdownMenuRadioItem2.displayName = RadioItem.displayName;
var DropdownMenuLabel2 = forwardRef(({ className, inset, children, ...props }, ref) => {
  const { isCompactViewport } = useResponsiveMenu();
  if (isCompactViewport) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "px-2 py-1.5 text-xs font-medium text-muted-foreground",
          inset && "pl-8",
          className
        ),
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(
    Label,
    {
      ref,
      className: cn(
        "px-2 py-[0.3125rem] text-xs font-medium text-muted-foreground",
        inset && "pl-8",
        className
      ),
      ...props,
      children
    }
  );
});
DropdownMenuLabel2.displayName = "DropdownMenuLabel";
var DropdownMenuSeparator2 = forwardRef(({ className, ...props }, ref) => {
  const { isCompactViewport } = useResponsiveMenu();
  if (isCompactViewport) {
    return /* @__PURE__ */ jsx(
      "hr",
      {
        ref,
        className: cn("-mx-1 my-1 h-px border-0 bg-muted", className)
      }
    );
  }
  return /* @__PURE__ */ jsx(
    Separator,
    {
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className),
      ...props
    }
  );
});
DropdownMenuSeparator2.displayName = "DropdownMenuSeparator";
var DropdownMenuGroup2 = forwardRef(({ children, ...props }, ref) => {
  const { isCompactViewport } = useResponsiveMenu();
  if (isCompactViewport) {
    return /* @__PURE__ */ jsx("div", { ref, role: "group", ...props, children });
  }
  return /* @__PURE__ */ jsx(Group, { ref, ...props, children });
});
DropdownMenuGroup2.displayName = "DropdownMenuGroup";
var DropdownMenuSubTrigger2 = forwardRef(
  ({
    className,
    inset,
    children,
    onPointerEnter: callerPointerEnter,
    onKeyDown: callerKeyDown,
    ...props
  }, ref) => {
    const { hoverProps } = useMenuItemHover({
      onPointerEnter: callerPointerEnter,
      onKeyDown: callerKeyDown
    });
    return /* @__PURE__ */ jsxs(
      SubTrigger,
      {
        ref,
        className: cn(
          "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-[0.3125rem] text-xs outline-none focus:bg-state-hover focus:text-foreground data-[state=open]:bg-state-active data-[state=open]:text-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          LIST_HOVER_TRANSITION,
          MENU_ITEM_LAST_HOVERED_CLASS,
          inset && "pl-8",
          className
        ),
        ...props,
        ...hoverProps,
        children: [
          children,
          /* @__PURE__ */ jsx(Icon, { name: "ChevronRight", className: "ml-auto" })
        ]
      }
    );
  }
);
DropdownMenuSubTrigger2.displayName = SubTrigger.displayName;
var DropdownMenuSubContent2 = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SubContent,
  {
    ref,
    ...usePortalScopeProps(),
    className: cn(
      "z-50 min-w-28 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent2.displayName = SubContent.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// lib/tabs.ts
function tabName(tab) {
  return tab.shellTitle ?? tab.label;
}
function fromServer(tab) {
  return {
    terminalId: tab.terminalId,
    scopeKey: tab.scopeKey,
    label: tab.label,
    hostName: tab.hostName,
    cwd: tab.cwd,
    status: tab.status === "running" || tab.status === "starting" ? "connecting" : "exited",
    statusDetail: null,
    shellTitle: tab.shellTitle
  };
}
var emptyTabs = { tabs: [], activeId: null, revision: 0 };
function tabsReducer(state, action) {
  switch (action.type) {
    case "synced": {
      if (action.snapshot.revision <= state.revision) return state;
      const previous = new Map(
        state.tabs.map((tab) => [tab.terminalId, tab])
      );
      const tabs = action.snapshot.tabs.map((tab) => {
        const existing = previous.get(tab.terminalId);
        if (existing === void 0) return fromServer(tab);
        if (existing.shellTitle === tab.shellTitle && existing.label === tab.label) {
          return existing;
        }
        return { ...existing, label: tab.label, shellTitle: tab.shellTitle };
      });
      const has = (id) => id != null && tabs.some((tab) => tab.terminalId === id);
      const activeId = has(action.focusId) ? action.focusId : has(state.activeId) ? state.activeId : has(action.snapshot.activeTabId) ? action.snapshot.activeTabId : tabs[0]?.terminalId ?? null;
      return { tabs, activeId, revision: action.snapshot.revision };
    }
    case "activated":
      if (!state.tabs.some((tab) => tab.terminalId === action.terminalId)) {
        return state;
      }
      return { ...state, activeId: action.terminalId };
    case "status": {
      const tab = state.tabs.find((entry) => entry.terminalId === action.terminalId);
      if (!tab || tab.status === action.status && tab.statusDetail === action.detail) {
        return state;
      }
      return {
        ...state,
        tabs: state.tabs.map(
          (entry) => entry.terminalId === action.terminalId ? { ...entry, status: action.status, statusDetail: action.detail } : entry
        )
      };
    }
  }
}

// components/tab-bar.tsx
function statusDotClass(tab) {
  switch (tab.status) {
    case "connecting":
      return "bg-muted-foreground/70 animate-pulse";
    case "exited":
      return "bg-muted-foreground/50";
    case "error":
      return "bg-destructive";
    default:
      return null;
  }
}
function NewTabMenu({
  scopes,
  recentScopeKeys,
  showHosts,
  onNewTab,
  children
}) {
  const [open2, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(DropdownMenu2, { open: open2, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger2, { asChild: true, children }),
    /* @__PURE__ */ jsx(DropdownMenuContent2, { align: "start", className: "w-72 p-0", children: /* @__PURE__ */ jsx(
      ShellPicker,
      {
        scopes,
        recentScopeKeys,
        showHosts,
        onPick: (scopeKey) => {
          setOpen(false);
          onNewTab(scopeKey);
        }
      }
    ) })
  ] });
}
function TabItem({
  tab,
  active,
  onSelect,
  onClose
}) {
  const dot = statusDotClass(tab);
  const name = tabName(tab);
  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect();
    }
  }
  return /* @__PURE__ */ jsxs(Tooltip2, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger2, { asChild: true, children: /* @__PURE__ */ jsxs(
      "div",
      {
        role: "tab",
        tabIndex: 0,
        "aria-selected": active,
        "aria-label": name,
        "data-no-drag": "",
        onClick: onSelect,
        onKeyDown: handleKeyDown,
        className: cn(
          "group flex h-6 max-w-40 shrink-0 cursor-default select-none items-center gap-1.5 rounded-md px-2 text-xs transition-colors",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          active ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:bg-state-hover hover:text-foreground"
        ),
        children: [
          dot === null ? null : /* @__PURE__ */ jsx(
            "span",
            {
              className: cn("size-1.5 shrink-0 rounded-full", dot),
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "min-w-0 truncate", children: name }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": `Close ${name}`,
              onClick: (event) => {
                event.stopPropagation();
                onClose();
              },
              className: cn(
                "grid size-3.5 shrink-0 place-items-center rounded-sm text-muted-foreground transition-opacity",
                "hover:bg-state-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                active ? "opacity-100" : "opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
              ),
              children: /* @__PURE__ */ jsx(Icon, { name: "X", className: "size-3", "aria-hidden": "true" })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(TooltipContent2, { children: [
      tab.shellTitle === null ? null : /* @__PURE__ */ jsx("span", { className: "block text-xs", children: tab.label }),
      /* @__PURE__ */ jsx("span", { className: "font-mono text-xs", children: tab.hostName === "" ? tab.cwd : `${tab.hostName}:${tab.cwd}` }),
      tab.statusDetail === null ? null : /* @__PURE__ */ jsx("span", { className: "block text-xs text-muted-foreground", children: tab.statusDetail })
    ] })
  ] });
}
function TabBar({
  tabs,
  activeId,
  scopes,
  recentScopeKeys,
  showHosts,
  onSelect,
  onClose,
  onNewTab,
  onRestart,
  onHide
}) {
  const activeTab = tabs.find((tab) => tab.terminalId === activeId) ?? null;
  return /* @__PURE__ */ jsxs("div", { className: "flex h-9 shrink-0 cursor-grab select-none items-center gap-1 border-b border-border bg-muted/40 pl-2 pr-1 active:cursor-grabbing", children: [
    /* @__PURE__ */ jsx("span", { "data-bb-ft-grip": "", className: "flex shrink-0 items-center", children: /* @__PURE__ */ jsx(
      Icon,
      {
        name: "DragDropVertical",
        className: "size-3.5 shrink-0 text-muted-foreground/50",
        "aria-hidden": "true"
      }
    ) }),
    tabs.length === 0 ? null : /* @__PURE__ */ jsx(
      "div",
      {
        role: "tablist",
        "aria-label": "Open shells",
        className: "flex min-w-0 items-center gap-0.5 overflow-x-auto",
        children: tabs.map((tab) => /* @__PURE__ */ jsx(
          TabItem,
          {
            tab,
            active: tab.terminalId === activeId,
            onSelect: () => onSelect(tab.terminalId),
            onClose: () => onClose(tab.terminalId)
          },
          tab.terminalId
        ))
      }
    ),
    /* @__PURE__ */ jsx(
      NewTabMenu,
      {
        scopes,
        recentScopeKeys,
        showHosts,
        onNewTab,
        children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            "data-no-drag": "",
            className: "size-6 shrink-0 text-muted-foreground",
            "aria-label": "New shell",
            children: /* @__PURE__ */ jsx(Icon, { name: "Plus", "aria-hidden": "true" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "h-full min-w-4 flex-1" }),
    activeTab === null ? null : /* @__PURE__ */ jsxs(Tooltip2, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger2, { asChild: true, children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          "data-no-drag": "",
          className: "size-6 shrink-0 text-muted-foreground",
          onClick: onRestart,
          "aria-label": "Restart shell",
          children: /* @__PURE__ */ jsx(Icon, { name: "ArrowReloadHorizontal", "aria-hidden": "true" })
        }
      ) }),
      /* @__PURE__ */ jsx(TooltipContent2, { children: "Restart shell" })
    ] }),
    /* @__PURE__ */ jsxs(Tooltip2, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger2, { asChild: true, children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          "data-no-drag": "",
          className: "size-6 shrink-0 text-muted-foreground",
          onClick: onHide,
          "aria-label": "Hide terminal",
          children: /* @__PURE__ */ jsx(Icon, { name: "X", "aria-hidden": "true" })
        }
      ) }),
      /* @__PURE__ */ jsxs(TooltipContent2, { children: [
        "Hide terminal",
        " ",
        /* @__PURE__ */ jsx("kbd", { className: "ml-1 font-mono text-[10px] text-muted-foreground", children: "Ctrl+`" })
      ] })
    ] })
  ] });
}

// node_modules/@xterm/addon-fit/lib/addon-fit.mjs
var h = 2;
var _ = 1;
var o = class {
  activate(e) {
    this._terminal = e;
  }
  dispose() {
  }
  fit() {
    let e = this.proposeDimensions();
    if (!e || !this._terminal || isNaN(e.cols) || isNaN(e.rows)) return;
    let t = this._terminal._core;
    (this._terminal.rows !== e.rows || this._terminal.cols !== e.cols) && (t._renderService.clear(), this._terminal.resize(e.cols, e.rows));
  }
  proposeDimensions() {
    if (!this._terminal || !this._terminal.element || !this._terminal.element.parentElement) return;
    let t = this._terminal._core._renderService.dimensions;
    if (t.css.cell.width === 0 || t.css.cell.height === 0) return;
    let s15 = this._terminal.options.scrollback === 0 ? 0 : this._terminal.options.overviewRuler?.width || 14, r6 = window.getComputedStyle(this._terminal.element.parentElement), l2 = parseInt(r6.getPropertyValue("height")), a = Math.max(0, parseInt(r6.getPropertyValue("width"))), i8 = window.getComputedStyle(this._terminal.element), n = { top: parseInt(i8.getPropertyValue("padding-top")), bottom: parseInt(i8.getPropertyValue("padding-bottom")), right: parseInt(i8.getPropertyValue("padding-right")), left: parseInt(i8.getPropertyValue("padding-left")) }, m2 = n.top + n.bottom, d = n.right + n.left, c = l2 - m2, p2 = a - d - s15;
    return { cols: Math.max(h, Math.floor(p2 / t.css.cell.width)), rows: Math.max(_, Math.floor(c / t.css.cell.height)) };
  }
};

// node_modules/@xterm/addon-unicode11/lib/addon-unicode11.mjs
var ue2 = [[768, 879], [1155, 1158], [1160, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1539], [1552, 1557], [1611, 1630], [1648, 1648], [1750, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2305, 2306], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2388], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2883], [2893, 2893], [2902, 2902], [2946, 2946], [3008, 3008], [3021, 3021], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3393, 3395], [3405, 3405], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3769], [3771, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3984, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4146], [4150, 4151], [4153, 4153], [4184, 4185], [4448, 4607], [4959, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6157], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7616, 7626], [7678, 7679], [8203, 8207], [8234, 8238], [8288, 8291], [8298, 8303], [8400, 8431], [12330, 12335], [12441, 12442], [43014, 43014], [43019, 43019], [43045, 43046], [64286, 64286], [65024, 65039], [65056, 65059], [65279, 65279], [65529, 65531]];
var qe = [[68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [917505, 917505], [917536, 917631], [917760, 917999]];
var A;
function He(r6, e) {
  let t = 0, n = e.length - 1, o2;
  if (r6 < e[0][0] || r6 > e[n][1]) return false;
  for (; n >= t; ) if (o2 = t + n >> 1, r6 > e[o2][1]) t = o2 + 1;
  else if (r6 < e[o2][0]) n = o2 - 1;
  else return true;
  return false;
}
var H2 = class {
  constructor() {
    this.version = "6";
    if (!A) {
      A = new Uint8Array(65536), A.fill(1), A[0] = 0, A.fill(0, 1, 32), A.fill(0, 127, 160), A.fill(2, 4352, 4448), A[9001] = 2, A[9002] = 2, A.fill(2, 11904, 42192), A[12351] = 1, A.fill(2, 44032, 55204), A.fill(2, 63744, 64256), A.fill(2, 65040, 65050), A.fill(2, 65072, 65136), A.fill(2, 65280, 65377), A.fill(2, 65504, 65511);
      for (let e = 0; e < ue2.length; ++e) A.fill(0, ue2[e][0], ue2[e][1] + 1);
    }
  }
  wcwidth(e) {
    return e < 32 ? 0 : e < 127 ? 1 : e < 65536 ? A[e] : He(e, qe) ? 0 : e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141 ? 2 : 1;
  }
  charProperties(e, t) {
    let n = this.wcwidth(e), o2 = n === 0 && t !== 0;
    if (o2) {
      let d = w.extractWidth(t);
      d === 0 ? o2 = false : d > n && (n = d);
    }
    return w.createPropertyValue(0, n, o2);
  }
};
var de2 = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(e) {
      setTimeout(() => {
        throw e.stack ? J2.isErrorNoTelemetry(e) ? new J2(e.message + `

` + e.stack) : new Error(e.message + `

` + e.stack) : e;
      }, 0);
    };
  }
  addListener(e) {
    return this.listeners.push(e), () => {
      this._removeListener(e);
    };
  }
  emit(e) {
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  _removeListener(e) {
    this.listeners.splice(this.listeners.indexOf(e), 1);
  }
  setUnexpectedErrorHandler(e) {
    this.unexpectedErrorHandler = e;
  }
  getUnexpectedErrorHandler() {
    return this.unexpectedErrorHandler;
  }
  onUnexpectedError(e) {
    this.unexpectedErrorHandler(e), this.emit(e);
  }
  onUnexpectedExternalError(e) {
    this.unexpectedErrorHandler(e);
  }
};
var Ge = new de2();
function Y3(r6) {
  Je(r6) || Ge.onUnexpectedError(r6);
}
var ce2 = "Canceled";
function Je(r6) {
  return r6 instanceof G2 ? true : r6 instanceof Error && r6.name === ce2 && r6.message === ce2;
}
var G2 = class extends Error {
  constructor() {
    super(ce2), this.name = this.message;
  }
};
var J2 = class r2 extends Error {
  constructor(e) {
    super(e), this.name = "CodeExpectedError";
  }
  static fromError(e) {
    if (e instanceof r2) return e;
    let t = new r2();
    return t.message = e.message, t.stack = e.stack, t;
  }
  static isErrorNoTelemetry(e) {
    return e.name === "CodeExpectedError";
  }
};
function pe2(r6, e) {
  let t = this, n = false, o2;
  return function() {
    if (n) return o2;
    if (n = true, e) try {
      o2 = r6.apply(t, arguments);
    } finally {
      e();
    }
    else o2 = r6.apply(t, arguments);
    return o2;
  };
}
function Ye(r6, e, t = 0, n = r6.length) {
  let o2 = t, d = n;
  for (; o2 < d; ) {
    let v3 = Math.floor((o2 + d) / 2);
    e(r6[v3]) ? o2 = v3 + 1 : d = v3;
  }
  return o2 - 1;
}
var X2 = class X3 {
  constructor(e) {
    this._array = e;
    this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(e) {
    if (X3.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (let n of this._array) if (this._prevFindLastPredicate(n) && !e(n)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = e;
    }
    let t = Ye(this._array, e, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = t + 1, t === -1 ? void 0 : this._array[t];
  }
};
X2.assertInvariants = false;
var Be;
((E) => {
  function r6(p2) {
    return p2 < 0;
  }
  E.isLessThan = r6;
  function e(p2) {
    return p2 <= 0;
  }
  E.isLessThanOrEqual = e;
  function t(p2) {
    return p2 > 0;
  }
  E.isGreaterThan = t;
  function n(p2) {
    return p2 === 0;
  }
  E.isNeitherLessOrGreaterThan = n, E.greaterThan = 1, E.lessThan = -1, E.neitherLessOrGreaterThan = 0;
})(Be ||= {});
function we2(r6, e) {
  return (t, n) => e(r6(t), r6(n));
}
var ke2 = (r6, e) => r6 - e;
var R = class R2 {
  constructor(e) {
    this.iterate = e;
  }
  forEach(e) {
    this.iterate((t) => (e(t), true));
  }
  toArray() {
    let e = [];
    return this.iterate((t) => (e.push(t), true)), e;
  }
  filter(e) {
    return new R2((t) => this.iterate((n) => e(n) ? t(n) : true));
  }
  map(e) {
    return new R2((t) => this.iterate((n) => t(e(n))));
  }
  some(e) {
    let t = false;
    return this.iterate((n) => (t = e(n), !t)), t;
  }
  findFirst(e) {
    let t;
    return this.iterate((n) => e(n) ? (t = n, false) : true), t;
  }
  findLast(e) {
    let t;
    return this.iterate((n) => (e(n) && (t = n), true)), t;
  }
  findLastMaxBy(e) {
    let t, n = true;
    return this.iterate((o2) => ((n || Be.isGreaterThan(e(o2, t))) && (n = false, t = o2), true)), t;
  }
};
R.empty = new R((e) => {
});
function Oe(r6, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let n of r6) {
    let o2 = e(n), d = t[o2];
    d || (d = t[o2] = []), d.push(n);
  }
  return t;
}
var Se2;
var Re2;
var Le = class {
  constructor(e, t) {
    this.toKey = t;
    this._map = /* @__PURE__ */ new Map();
    this[Se2] = "SetWithKey";
    for (let n of e) this.add(n);
  }
  get size() {
    return this._map.size;
  }
  add(e) {
    let t = this.toKey(e);
    return this._map.set(t, e), this;
  }
  delete(e) {
    return this._map.delete(this.toKey(e));
  }
  has(e) {
    return this._map.has(this.toKey(e));
  }
  *entries() {
    for (let e of this._map.values()) yield [e, e];
  }
  keys() {
    return this.values();
  }
  *values() {
    for (let e of this._map.values()) yield e;
  }
  clear() {
    this._map.clear();
  }
  forEach(e, t) {
    this._map.forEach((n) => e.call(t, n, n, this));
  }
  [(Re2 = Symbol.iterator, Se2 = Symbol.toStringTag, Re2)]() {
    return this.values();
  }
};
var Z2 = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    let n = this.map.get(e);
    n || (n = /* @__PURE__ */ new Set(), this.map.set(e, n)), n.add(t);
  }
  delete(e, t) {
    let n = this.map.get(e);
    n && (n.delete(t), n.size === 0 && this.map.delete(e));
  }
  forEach(e, t) {
    let n = this.map.get(e);
    n && n.forEach(t);
  }
  get(e) {
    let t = this.map.get(e);
    return t || /* @__PURE__ */ new Set();
  }
};
var fe2;
((le3) => {
  function r6(u2) {
    return u2 && typeof u2 == "object" && typeof u2[Symbol.iterator] == "function";
  }
  le3.is = r6;
  let e = Object.freeze([]);
  function t() {
    return e;
  }
  le3.empty = t;
  function* n(u2) {
    yield u2;
  }
  le3.single = n;
  function o2(u2) {
    return r6(u2) ? u2 : n(u2);
  }
  le3.wrap = o2;
  function d(u2) {
    return u2 || e;
  }
  le3.from = d;
  function* v3(u2) {
    for (let f = u2.length - 1; f >= 0; f--) yield u2[f];
  }
  le3.reverse = v3;
  function E(u2) {
    return !u2 || u2[Symbol.iterator]().next().done === true;
  }
  le3.isEmpty = E;
  function p2(u2) {
    return u2[Symbol.iterator]().next().value;
  }
  le3.first = p2;
  function b2(u2, f) {
    let m2 = 0;
    for (let g2 of u2) if (f(g2, m2++)) return true;
    return false;
  }
  le3.some = b2;
  function D4(u2, f) {
    for (let m2 of u2) if (f(m2)) return m2;
  }
  le3.find = D4;
  function* T2(u2, f) {
    for (let m2 of u2) f(m2) && (yield m2);
  }
  le3.filter = T2;
  function* B5(u2, f) {
    let m2 = 0;
    for (let g2 of u2) yield f(g2, m2++);
  }
  le3.map = B5;
  function* L4(u2, f) {
    let m2 = 0;
    for (let g2 of u2) yield* f(g2, m2++);
  }
  le3.flatMap = L4;
  function* oe(...u2) {
    for (let f of u2) yield* f;
  }
  le3.concat = oe;
  function z3(u2, f, m2) {
    let g2 = m2;
    for (let W2 of u2) g2 = f(g2, W2);
    return g2;
  }
  le3.reduce = z3;
  function* k5(u2, f, m2 = u2.length) {
    for (f < 0 && (f += u2.length), m2 < 0 ? m2 += u2.length : m2 > u2.length && (m2 = u2.length); f < m2; f++) yield u2[f];
  }
  le3.slice = k5;
  function ae3(u2, f = Number.POSITIVE_INFINITY) {
    let m2 = [];
    if (f === 0) return [m2, u2];
    let g2 = u2[Symbol.iterator]();
    for (let W2 = 0; W2 < f; W2++) {
      let xe4 = g2.next();
      if (xe4.done) return [m2, le3.empty()];
      m2.push(xe4.value);
    }
    return [m2, { [Symbol.iterator]() {
      return g2;
    } }];
  }
  le3.consume = ae3;
  async function V2(u2) {
    let f = [];
    for await (let m2 of u2) f.push(m2);
    return Promise.resolve(f);
  }
  le3.asyncToArray = V2;
})(fe2 ||= {});
var Xe = false;
var O = null;
var ee2 = class ee3 {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(e) {
    let t = this.livingDisposables.get(e);
    return t || (t = { parent: null, source: null, isSingleton: false, value: e, idx: ee3.idx++ }, this.livingDisposables.set(e, t)), t;
  }
  trackDisposable(e) {
    let t = this.getDisposableData(e);
    t.source || (t.source = new Error().stack);
  }
  setParent(e, t) {
    let n = this.getDisposableData(e);
    n.parent = t;
  }
  markAsDisposed(e) {
    this.livingDisposables.delete(e);
  }
  markAsSingleton(e) {
    this.getDisposableData(e).isSingleton = true;
  }
  getRootParent(e, t) {
    let n = t.get(e);
    if (n) return n;
    let o2 = e.parent ? this.getRootParent(this.getDisposableData(e.parent), t) : e;
    return t.set(e, o2), o2;
  }
  getTrackedDisposables() {
    let e = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, n]) => n.source !== null && !this.getRootParent(n, e).isSingleton).flatMap(([n]) => n);
  }
  computeLeakingDisposables(e = 10, t) {
    let n;
    if (t) n = t;
    else {
      let p2 = /* @__PURE__ */ new Map(), b2 = [...this.livingDisposables.values()].filter((T2) => T2.source !== null && !this.getRootParent(T2, p2).isSingleton);
      if (b2.length === 0) return;
      let D4 = new Set(b2.map((T2) => T2.value));
      if (n = b2.filter((T2) => !(T2.parent && D4.has(T2.parent))), n.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!n) return;
    function o2(p2) {
      function b2(T2, B5) {
        for (; T2.length > 0 && B5.some((L4) => typeof L4 == "string" ? L4 === T2[0] : T2[0].match(L4)); ) T2.shift();
      }
      let D4 = p2.source.split(`
`).map((T2) => T2.trim().replace("at ", "")).filter((T2) => T2 !== "");
      return b2(D4, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), D4.reverse();
    }
    let d = new Z2();
    for (let p2 of n) {
      let b2 = o2(p2);
      for (let D4 = 0; D4 <= b2.length; D4++) d.add(b2.slice(0, D4).join(`
`), p2);
    }
    n.sort(we2((p2) => p2.idx, ke2));
    let v3 = "", E = 0;
    for (let p2 of n.slice(0, e)) {
      E++;
      let b2 = o2(p2), D4 = [];
      for (let T2 = 0; T2 < b2.length; T2++) {
        let B5 = b2[T2];
        B5 = `(shared with ${d.get(b2.slice(0, T2 + 1).join(`
`)).size}/${n.length} leaks) at ${B5}`;
        let oe = d.get(b2.slice(0, T2).join(`
`)), z3 = Oe([...oe].map((k5) => o2(k5)[T2]), (k5) => k5);
        delete z3[b2[T2]];
        for (let [k5, ae3] of Object.entries(z3)) D4.unshift(`    - stacktraces of ${ae3.length} other leaks continue with ${k5}`);
        D4.unshift(B5);
      }
      v3 += `


==================== Leaking disposable ${E}/${n.length}: ${p2.value.constructor.name} ====================
${D4.join(`
`)}
============================================================

`;
    }
    return n.length > e && (v3 += `


... and ${n.length - e} more leaking disposables

`), { leaks: n, details: v3 };
  }
};
ee2.idx = 0;
function Ze(r6) {
  O = r6;
}
if (Xe) {
  let r6 = "__is_disposable_tracked__";
  Ze(new class {
    trackDisposable(e) {
      let t = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        e[r6] || console.log(t);
      }, 3e3);
    }
    setParent(e, t) {
      if (e && e !== _2.None) try {
        e[r6] = true;
      } catch {
      }
    }
    markAsDisposed(e) {
      if (e && e !== _2.None) try {
        e[r6] = true;
      } catch {
      }
    }
    markAsSingleton(e) {
    }
  }());
}
function Te2(r6) {
  return O?.trackDisposable(r6), r6;
}
function ve2(r6) {
  O?.markAsDisposed(r6);
}
function he2(r6, e) {
  O?.setParent(r6, e);
}
function et(r6, e) {
  if (O) for (let t of r6) O.setParent(t, e);
}
function Pe2(r6) {
  if (fe2.is(r6)) {
    let e = [];
    for (let t of r6) if (t) try {
      t.dispose();
    } catch (n) {
      e.push(n);
    }
    if (e.length === 1) throw e[0];
    if (e.length > 1) throw new AggregateError(e, "Encountered errors while disposing of store");
    return Array.isArray(r6) ? [] : r6;
  } else if (r6) return r6.dispose(), r6;
}
function Me2(...r6) {
  let e = me2(() => Pe2(r6));
  return et(r6, e), e;
}
function me2(r6) {
  let e = Te2({ dispose: pe2(() => {
    ve2(e), r6();
  }) });
  return e;
}
var te = class te2 {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set();
    this._isDisposed = false;
    Te2(this);
  }
  dispose() {
    this._isDisposed || (ve2(this), this._isDisposed = true, this.clear());
  }
  get isDisposed() {
    return this._isDisposed;
  }
  clear() {
    if (this._toDispose.size !== 0) try {
      Pe2(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  add(e) {
    if (!e) return e;
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    return he2(e, this), this._isDisposed ? te2.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(e), e;
  }
  delete(e) {
    if (e) {
      if (e === this) throw new Error("Cannot dispose a disposable on itself!");
      this._toDispose.delete(e), e.dispose();
    }
  }
  deleteAndLeak(e) {
    e && this._toDispose.has(e) && (this._toDispose.delete(e), he2(e, null));
  }
};
te.DISABLE_DISPOSED_WARNING = false;
var U2 = te;
var _2 = class {
  constructor() {
    this._store = new U2();
    Te2(this), he2(this._store, this);
  }
  dispose() {
    ve2(this), this._store.dispose();
  }
  _register(e) {
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(e);
  }
};
_2.None = Object.freeze({ dispose() {
} });
var P2 = class P3 {
  constructor(e) {
    this.element = e, this.next = P3.Undefined, this.prev = P3.Undefined;
  }
};
P2.Undefined = new P2(void 0);
var tt = globalThis.performance && typeof globalThis.performance.now == "function";
var ne = class r3 {
  static create(e) {
    return new r3(e);
  }
  constructor(e) {
    this._now = tt && e === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
  }
  stop() {
    this._stopTime = this._now();
  }
  reset() {
    this._startTime = this._now(), this._stopTime = -1;
  }
  elapsed() {
    return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime;
  }
};
var nt = false;
var Ve = false;
var rt = false;
var it;
((Q5) => {
  Q5.None = () => _2.None;
  function e(l2) {
    if (rt) {
      let { onDidAddListener: i8 } = l2, a = K3.create(), s15 = 0;
      l2.onDidAddListener = () => {
        ++s15 === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), a.print()), i8?.();
      };
    }
  }
  function t(l2, i8) {
    return B5(l2, () => {
    }, 0, void 0, true, void 0, i8);
  }
  Q5.defer = t;
  function n(l2) {
    return (i8, a = null, s15) => {
      let x = false, c;
      return c = l2((h2) => {
        if (!x) return c ? c.dispose() : x = true, i8.call(a, h2);
      }, null, s15), x && c.dispose(), c;
    };
  }
  Q5.once = n;
  function o2(l2, i8, a) {
    return D4((s15, x = null, c) => l2((h2) => s15.call(x, i8(h2)), null, c), a);
  }
  Q5.map = o2;
  function d(l2, i8, a) {
    return D4((s15, x = null, c) => l2((h2) => {
      i8(h2), s15.call(x, h2);
    }, null, c), a);
  }
  Q5.forEach = d;
  function v3(l2, i8, a) {
    return D4((s15, x = null, c) => l2((h2) => i8(h2) && s15.call(x, h2), null, c), a);
  }
  Q5.filter = v3;
  function E(l2) {
    return l2;
  }
  Q5.signal = E;
  function p2(...l2) {
    return (i8, a = null, s15) => {
      let x = Me2(...l2.map((c) => c((h2) => i8.call(a, h2))));
      return T2(x, s15);
    };
  }
  Q5.any = p2;
  function b2(l2, i8, a, s15) {
    let x = a;
    return o2(l2, (c) => (x = i8(x, c), x), s15);
  }
  Q5.reduce = b2;
  function D4(l2, i8) {
    let a, s15 = { onWillAddFirstListener() {
      a = l2(x.fire, x);
    }, onDidRemoveLastListener() {
      a?.dispose();
    } };
    i8 || e(s15);
    let x = new C(s15);
    return i8?.add(x), x.event;
  }
  function T2(l2, i8) {
    return i8 instanceof Array ? i8.push(l2) : i8 && i8.add(l2), l2;
  }
  function B5(l2, i8, a = 100, s15 = false, x = false, c, h2) {
    let F3, y, S2, $3 = 0, j3, Ce4 = { leakWarningThreshold: c, onWillAddFirstListener() {
      F3 = l2((Qe2) => {
        $3++, y = i8(y, Qe2), s15 && !S2 && (q2.fire(y), y = void 0), j3 = () => {
          let $e2 = y;
          y = void 0, S2 = void 0, (!s15 || $3 > 1) && q2.fire($e2), $3 = 0;
        }, typeof a == "number" ? (clearTimeout(S2), S2 = setTimeout(j3, a)) : S2 === void 0 && (S2 = 0, queueMicrotask(j3));
      });
    }, onWillRemoveListener() {
      x && $3 > 0 && j3?.();
    }, onDidRemoveLastListener() {
      j3 = void 0, F3.dispose();
    } };
    h2 || e(Ce4);
    let q2 = new C(Ce4);
    return h2?.add(q2), q2.event;
  }
  Q5.debounce = B5;
  function L4(l2, i8 = 0, a) {
    return Q5.debounce(l2, (s15, x) => s15 ? (s15.push(x), s15) : [x], i8, void 0, true, void 0, a);
  }
  Q5.accumulate = L4;
  function oe(l2, i8 = (s15, x) => s15 === x, a) {
    let s15 = true, x;
    return v3(l2, (c) => {
      let h2 = s15 || !i8(c, x);
      return s15 = false, x = c, h2;
    }, a);
  }
  Q5.latch = oe;
  function z3(l2, i8, a) {
    return [Q5.filter(l2, i8, a), Q5.filter(l2, (s15) => !i8(s15), a)];
  }
  Q5.split = z3;
  function k5(l2, i8 = false, a = [], s15) {
    let x = a.slice(), c = l2((y) => {
      x ? x.push(y) : F3.fire(y);
    });
    s15 && s15.add(c);
    let h2 = () => {
      x?.forEach((y) => F3.fire(y)), x = null;
    }, F3 = new C({ onWillAddFirstListener() {
      c || (c = l2((y) => F3.fire(y)), s15 && s15.add(c));
    }, onDidAddFirstListener() {
      x && (i8 ? setTimeout(h2) : h2());
    }, onDidRemoveLastListener() {
      c && c.dispose(), c = null;
    } });
    return s15 && s15.add(F3), F3.event;
  }
  Q5.buffer = k5;
  function ae3(l2, i8) {
    return (s15, x, c) => {
      let h2 = i8(new le3());
      return l2(function(F3) {
        let y = h2.evaluate(F3);
        y !== V2 && s15.call(x, y);
      }, void 0, c);
    };
  }
  Q5.chain = ae3;
  let V2 = /* @__PURE__ */ Symbol("HaltChainable");
  class le3 {
    constructor() {
      this.steps = [];
    }
    map(i8) {
      return this.steps.push(i8), this;
    }
    forEach(i8) {
      return this.steps.push((a) => (i8(a), a)), this;
    }
    filter(i8) {
      return this.steps.push((a) => i8(a) ? a : V2), this;
    }
    reduce(i8, a) {
      let s15 = a;
      return this.steps.push((x) => (s15 = i8(s15, x), s15)), this;
    }
    latch(i8 = (a, s15) => a === s15) {
      let a = true, s15;
      return this.steps.push((x) => {
        let c = a || !i8(x, s15);
        return a = false, s15 = x, c ? x : V2;
      }), this;
    }
    evaluate(i8) {
      for (let a of this.steps) if (i8 = a(i8), i8 === V2) break;
      return i8;
    }
  }
  function u2(l2, i8, a = (s15) => s15) {
    let s15 = (...F3) => h2.fire(a(...F3)), x = () => l2.on(i8, s15), c = () => l2.removeListener(i8, s15), h2 = new C({ onWillAddFirstListener: x, onDidRemoveLastListener: c });
    return h2.event;
  }
  Q5.fromNodeEventEmitter = u2;
  function f(l2, i8, a = (s15) => s15) {
    let s15 = (...F3) => h2.fire(a(...F3)), x = () => l2.addEventListener(i8, s15), c = () => l2.removeEventListener(i8, s15), h2 = new C({ onWillAddFirstListener: x, onDidRemoveLastListener: c });
    return h2.event;
  }
  Q5.fromDOMEventEmitter = f;
  function m2(l2) {
    return new Promise((i8) => n(l2)(i8));
  }
  Q5.toPromise = m2;
  function g2(l2) {
    let i8 = new C();
    return l2.then((a) => {
      i8.fire(a);
    }, () => {
      i8.fire(void 0);
    }).finally(() => {
      i8.dispose();
    }), i8.event;
  }
  Q5.fromPromise = g2;
  function W2(l2, i8) {
    return l2((a) => i8.fire(a));
  }
  Q5.forward = W2;
  function xe4(l2, i8, a) {
    return i8(a), l2((s15) => i8(s15));
  }
  Q5.runAndSubscribe = xe4;
  class ze2 {
    constructor(i8, a) {
      this._observable = i8;
      this._counter = 0;
      this._hasChanged = false;
      let s15 = { onWillAddFirstListener: () => {
        i8.addObserver(this);
      }, onDidRemoveLastListener: () => {
        i8.removeObserver(this);
      } };
      a || e(s15), this.emitter = new C(s15), a && a.add(this.emitter);
    }
    beginUpdate(i8) {
      this._counter++;
    }
    handlePossibleChange(i8) {
    }
    handleChange(i8, a) {
      this._hasChanged = true;
    }
    endUpdate(i8) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function ut3(l2, i8) {
    return new ze2(l2, i8).emitter.event;
  }
  Q5.fromObservable = ut3;
  function dt3(l2) {
    return (i8, a, s15) => {
      let x = 0, c = false, h2 = { beginUpdate() {
        x++;
      }, endUpdate() {
        x--, x === 0 && (l2.reportChanges(), c && (c = false, i8.call(a)));
      }, handlePossibleChange() {
      }, handleChange() {
        c = true;
      } };
      l2.addObserver(h2), l2.reportChanges();
      let F3 = { dispose() {
        l2.removeObserver(h2);
      } };
      return s15 instanceof U2 ? s15.add(F3) : Array.isArray(s15) && s15.push(F3), F3;
    };
  }
  Q5.fromObservableLight = dt3;
})(it ||= {});
var M = class M2 {
  constructor(e) {
    this.listenerCount = 0;
    this.invocationCount = 0;
    this.elapsedOverall = 0;
    this.durations = [];
    this.name = `${e}_${M2._idPool++}`, M2.all.add(this);
  }
  start(e) {
    this._stopWatch = new ne(), this.listenerCount = e;
  }
  stop() {
    if (this._stopWatch) {
      let e = this._stopWatch.elapsed();
      this.durations.push(e), this.elapsedOverall += e, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
M.all = /* @__PURE__ */ new Set(), M._idPool = 0;
var be2 = M;
var We = -1;
var ie = class ie2 {
  constructor(e, t, n = (ie2._idPool++).toString(16).padStart(3, "0")) {
    this._errorHandler = e;
    this.threshold = t;
    this.name = n;
    this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(e, t) {
    let n = this.threshold;
    if (n <= 0 || t < n) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    let o2 = this._stacks.get(e.value) || 0;
    if (this._stacks.set(e.value, o2 + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = n * 0.5;
      let [d, v3] = this.getMostFrequentStack(), E = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${v3}):`;
      console.warn(E), console.warn(d);
      let p2 = new De2(E, d);
      this._errorHandler(p2);
    }
    return () => {
      let d = this._stacks.get(e.value) || 0;
      this._stacks.set(e.value, d - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let e, t = 0;
    for (let [n, o2] of this._stacks) (!e || t < o2) && (e = [n, o2], t = o2);
    return e;
  }
};
ie._idPool = 1;
var Ee2 = ie;
var K3 = class r4 {
  constructor(e) {
    this.value = e;
  }
  static create() {
    let e = new Error();
    return new r4(e.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
};
var De2 = class extends Error {
  constructor(e, t) {
    super(e), this.name = "ListenerLeakError", this.stack = t;
  }
};
var Ae = class extends Error {
  constructor(e, t) {
    super(e), this.name = "ListenerRefusalError", this.stack = t;
  }
};
var st = 0;
var N2 = class {
  constructor(e) {
    this.value = e;
    this.id = st++;
  }
};
var ot = 2;
var at = (r6, e) => {
  if (r6 instanceof N2) e(r6);
  else for (let t = 0; t < r6.length; t++) {
    let n = r6[t];
    n && e(n);
  }
};
var re;
if (nt) {
  let r6 = [];
  setInterval(() => {
    r6.length !== 0 && (console.warn("[LEAKING LISTENERS] GC'ed these listeners that were NOT yet disposed:"), console.warn(r6.join(`
`)), r6.length = 0);
  }, 3e3), re = new FinalizationRegistry((e) => {
    typeof e == "string" && r6.push(e);
  });
}
var C = class {
  constructor(e) {
    this._size = 0;
    this._options = e, this._leakageMon = We > 0 || this._options?.leakWarningThreshold ? new Ee2(e?.onListenerError ?? Y3, this._options?.leakWarningThreshold ?? We) : void 0, this._perfMon = this._options?._profName ? new be2(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (Ve) {
          let e = this._listeners;
          queueMicrotask(() => {
            at(e, (t) => t.stack?.print());
          });
        }
        this._listeners = void 0, this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
    }
  }
  get event() {
    return this._event ??= (e, t, n) => {
      if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
        let p2 = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
        console.warn(p2);
        let b2 = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], D4 = new Ae(`${p2}. HINT: Stack shows most frequent listener (${b2[1]}-times)`, b2[0]);
        return (this._options?.onListenerError || Y3)(D4), _2.None;
      }
      if (this._disposed) return _2.None;
      t && (e = e.bind(t));
      let o2 = new N2(e), d, v3;
      this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (o2.stack = K3.create(), d = this._leakageMon.check(o2.stack, this._size + 1)), Ve && (o2.stack = v3 ?? K3.create()), this._listeners ? this._listeners instanceof N2 ? (this._deliveryQueue ??= new Fe(), this._listeners = [this._listeners, o2]) : this._listeners.push(o2) : (this._options?.onWillAddFirstListener?.(this), this._listeners = o2, this._options?.onDidAddFirstListener?.(this)), this._size++;
      let E = me2(() => {
        re?.unregister(E), d?.(), this._removeListener(o2);
      });
      if (n instanceof U2 ? n.add(E) : Array.isArray(n) && n.push(E), re) {
        let p2 = new Error().stack.split(`
`).slice(2, 3).join(`
`).trim(), b2 = /(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(p2);
        re.register(E, b2?.[2] ?? p2, E);
      }
      return E;
    }, this._event;
  }
  _removeListener(e) {
    if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
    if (this._size === 1) {
      this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
      return;
    }
    let t = this._listeners, n = t.indexOf(e);
    if (n === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, t[n] = void 0;
    let o2 = this._deliveryQueue.current === this;
    if (this._size * ot <= t.length) {
      let d = 0;
      for (let v3 = 0; v3 < t.length; v3++) t[v3] ? t[d++] = t[v3] : o2 && (this._deliveryQueue.end--, d < this._deliveryQueue.i && this._deliveryQueue.i--);
      t.length = d;
    }
  }
  _deliver(e, t) {
    if (!e) return;
    let n = this._options?.onListenerError || Y3;
    if (!n) {
      e.value(t);
      return;
    }
    try {
      e.value(t);
    } catch (o2) {
      n(o2);
    }
  }
  _deliverQueue(e) {
    let t = e.current._listeners;
    for (; e.i < e.end; ) this._deliver(t[e.i++], e.value);
    e.reset();
  }
  fire(e) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof N2) this._deliver(this._listeners, e);
    else {
      let t = this._deliveryQueue;
      t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
};
var Fe = class {
  constructor() {
    this.i = -1;
    this.end = 0;
  }
  enqueue(e, t, n) {
    this.i = 0, this.end = n, this.current = e, this.value = t;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
};
var w = class r5 {
  constructor() {
    this._providers = /* @__PURE__ */ Object.create(null);
    this._active = "";
    this._onChange = new C();
    this.onChange = this._onChange.event;
    let e = new H2();
    this.register(e), this._active = e.version, this._activeProvider = e;
  }
  static extractShouldJoin(e) {
    return (e & 1) !== 0;
  }
  static extractWidth(e) {
    return e >> 1 & 3;
  }
  static extractCharKind(e) {
    return e >> 3;
  }
  static createPropertyValue(e, t, n = false) {
    return (e & 16777215) << 3 | (t & 3) << 1 | (n ? 1 : 0);
  }
  dispose() {
    this._onChange.dispose();
  }
  get versions() {
    return Object.keys(this._providers);
  }
  get activeVersion() {
    return this._active;
  }
  set activeVersion(e) {
    if (!this._providers[e]) throw new Error(`unknown Unicode version "${e}"`);
    this._active = e, this._activeProvider = this._providers[e], this._onChange.fire(e);
  }
  register(e) {
    this._providers[e.version] = e;
  }
  wcwidth(e) {
    return this._activeProvider.wcwidth(e);
  }
  getStringCellWidth(e) {
    let t = 0, n = 0, o2 = e.length;
    for (let d = 0; d < o2; ++d) {
      let v3 = e.charCodeAt(d);
      if (55296 <= v3 && v3 <= 56319) {
        if (++d >= o2) return t + this.wcwidth(v3);
        let b2 = e.charCodeAt(d);
        56320 <= b2 && b2 <= 57343 ? v3 = (v3 - 55296) * 1024 + b2 - 56320 + 65536 : t += this.wcwidth(b2);
      }
      let E = this.charProperties(v3, n), p2 = r5.extractWidth(E);
      r5.extractShouldJoin(E) && (p2 -= r5.extractWidth(n)), t += p2, n = E;
    }
    return t;
  }
  charProperties(e, t) {
    return this._activeProvider.charProperties(e, t);
  }
};
var ye2 = [[768, 879], [1155, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1541], [1552, 1562], [1564, 1564], [1611, 1631], [1648, 1648], [1750, 1757], [1759, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2045, 2045], [2070, 2073], [2075, 2083], [2085, 2087], [2089, 2093], [2137, 2139], [2259, 2306], [2362, 2362], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2391], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2558, 2558], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2641, 2641], [2672, 2673], [2677, 2677], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2810, 2815], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2884], [2893, 2893], [2902, 2902], [2914, 2915], [2946, 2946], [3008, 3008], [3021, 3021], [3072, 3072], [3076, 3076], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3170, 3171], [3201, 3201], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3328, 3329], [3387, 3388], [3393, 3396], [3405, 3405], [3426, 3427], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3981, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4151], [4153, 4154], [4157, 4158], [4184, 4185], [4190, 4192], [4209, 4212], [4226, 4226], [4229, 4230], [4237, 4237], [4253, 4253], [4448, 4607], [4957, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6158], [6277, 6278], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6683, 6683], [6742, 6742], [6744, 6750], [6752, 6752], [6754, 6754], [6757, 6764], [6771, 6780], [6783, 6783], [6832, 6846], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7040, 7041], [7074, 7077], [7080, 7081], [7083, 7085], [7142, 7142], [7144, 7145], [7149, 7149], [7151, 7153], [7212, 7219], [7222, 7223], [7376, 7378], [7380, 7392], [7394, 7400], [7405, 7405], [7412, 7412], [7416, 7417], [7616, 7673], [7675, 7679], [8203, 8207], [8234, 8238], [8288, 8292], [8294, 8303], [8400, 8432], [11503, 11505], [11647, 11647], [11744, 11775], [12330, 12333], [12441, 12442], [42607, 42610], [42612, 42621], [42654, 42655], [42736, 42737], [43010, 43010], [43014, 43014], [43019, 43019], [43045, 43046], [43204, 43205], [43232, 43249], [43263, 43263], [43302, 43309], [43335, 43345], [43392, 43394], [43443, 43443], [43446, 43449], [43452, 43453], [43493, 43493], [43561, 43566], [43569, 43570], [43573, 43574], [43587, 43587], [43596, 43596], [43644, 43644], [43696, 43696], [43698, 43700], [43703, 43704], [43710, 43711], [43713, 43713], [43756, 43757], [43766, 43766], [44005, 44005], [44008, 44008], [44013, 44013], [64286, 64286], [65024, 65039], [65056, 65071], [65279, 65279], [65529, 65531]];
var lt = [[66045, 66045], [66272, 66272], [66422, 66426], [68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [68325, 68326], [68900, 68903], [69446, 69456], [69633, 69633], [69688, 69702], [69759, 69761], [69811, 69814], [69817, 69818], [69821, 69821], [69837, 69837], [69888, 69890], [69927, 69931], [69933, 69940], [70003, 70003], [70016, 70017], [70070, 70078], [70089, 70092], [70191, 70193], [70196, 70196], [70198, 70199], [70206, 70206], [70367, 70367], [70371, 70378], [70400, 70401], [70459, 70460], [70464, 70464], [70502, 70508], [70512, 70516], [70712, 70719], [70722, 70724], [70726, 70726], [70750, 70750], [70835, 70840], [70842, 70842], [70847, 70848], [70850, 70851], [71090, 71093], [71100, 71101], [71103, 71104], [71132, 71133], [71219, 71226], [71229, 71229], [71231, 71232], [71339, 71339], [71341, 71341], [71344, 71349], [71351, 71351], [71453, 71455], [71458, 71461], [71463, 71467], [71727, 71735], [71737, 71738], [72148, 72151], [72154, 72155], [72160, 72160], [72193, 72202], [72243, 72248], [72251, 72254], [72263, 72263], [72273, 72278], [72281, 72283], [72330, 72342], [72344, 72345], [72752, 72758], [72760, 72765], [72767, 72767], [72850, 72871], [72874, 72880], [72882, 72883], [72885, 72886], [73009, 73014], [73018, 73018], [73020, 73021], [73023, 73029], [73031, 73031], [73104, 73105], [73109, 73109], [73111, 73111], [73459, 73460], [78896, 78904], [92912, 92916], [92976, 92982], [94031, 94031], [94095, 94098], [113821, 113822], [113824, 113827], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [121344, 121398], [121403, 121452], [121461, 121461], [121476, 121476], [121499, 121503], [121505, 121519], [122880, 122886], [122888, 122904], [122907, 122913], [122915, 122916], [122918, 122922], [123184, 123190], [123628, 123631], [125136, 125142], [125252, 125258], [917505, 917505], [917536, 917631], [917760, 917999]];
var ge = [[4352, 4447], [8986, 8987], [9001, 9002], [9193, 9196], [9200, 9200], [9203, 9203], [9725, 9726], [9748, 9749], [9800, 9811], [9855, 9855], [9875, 9875], [9889, 9889], [9898, 9899], [9917, 9918], [9924, 9925], [9934, 9934], [9940, 9940], [9962, 9962], [9970, 9971], [9973, 9973], [9978, 9978], [9981, 9981], [9989, 9989], [9994, 9995], [10024, 10024], [10060, 10060], [10062, 10062], [10067, 10069], [10071, 10071], [10133, 10135], [10160, 10160], [10175, 10175], [11035, 11036], [11088, 11088], [11093, 11093], [11904, 11929], [11931, 12019], [12032, 12245], [12272, 12283], [12288, 12329], [12334, 12350], [12353, 12438], [12443, 12543], [12549, 12591], [12593, 12686], [12688, 12730], [12736, 12771], [12784, 12830], [12832, 12871], [12880, 19903], [19968, 42124], [42128, 42182], [43360, 43388], [44032, 55203], [63744, 64255], [65040, 65049], [65072, 65106], [65108, 65126], [65128, 65131], [65281, 65376], [65504, 65510]];
var xt = [[94176, 94179], [94208, 100343], [100352, 101106], [110592, 110878], [110928, 110930], [110948, 110951], [110960, 111355], [126980, 126980], [127183, 127183], [127374, 127374], [127377, 127386], [127488, 127490], [127504, 127547], [127552, 127560], [127568, 127569], [127584, 127589], [127744, 127776], [127789, 127797], [127799, 127868], [127870, 127891], [127904, 127946], [127951, 127955], [127968, 127984], [127988, 127988], [127992, 128062], [128064, 128064], [128066, 128252], [128255, 128317], [128331, 128334], [128336, 128359], [128378, 128378], [128405, 128406], [128420, 128420], [128507, 128591], [128640, 128709], [128716, 128716], [128720, 128722], [128725, 128725], [128747, 128748], [128756, 128762], [128992, 129003], [129293, 129393], [129395, 129398], [129402, 129442], [129445, 129450], [129454, 129482], [129485, 129535], [129648, 129651], [129656, 129658], [129664, 129666], [129680, 129685], [131072, 196605], [196608, 262141]];
var I;
function je(r6, e) {
  let t = 0, n = e.length - 1, o2;
  if (r6 < e[0][0] || r6 > e[n][1]) return false;
  for (; n >= t; ) if (o2 = t + n >> 1, r6 > e[o2][1]) t = o2 + 1;
  else if (r6 < e[o2][0]) n = o2 - 1;
  else return true;
  return false;
}
var se = class {
  constructor() {
    this.version = "11";
    if (!I) {
      I = new Uint8Array(65536), I.fill(1), I[0] = 0, I.fill(0, 1, 32), I.fill(0, 127, 160);
      for (let e = 0; e < ye2.length; ++e) I.fill(0, ye2[e][0], ye2[e][1] + 1);
      for (let e = 0; e < ge.length; ++e) I.fill(2, ge[e][0], ge[e][1] + 1);
    }
  }
  wcwidth(e) {
    return e < 32 ? 0 : e < 127 ? 1 : e < 65536 ? I[e] : je(e, lt) ? 0 : je(e, xt) ? 2 : 1;
  }
  charProperties(e, t) {
    let n = this.wcwidth(e), o2 = n === 0 && t !== 0;
    if (o2) {
      let d = w.extractWidth(t);
      d === 0 ? o2 = false : d > n && (n = d);
    }
    return w.createPropertyValue(0, n, o2);
  }
};
var Ke = class {
  activate(e) {
    e.unicode.register(new se());
  }
  dispose() {
  }
};

// node_modules/@xterm/addon-web-links/lib/addon-web-links.mjs
var v = class {
  constructor(e, t, n, o2 = {}) {
    this._terminal = e;
    this._regex = t;
    this._handler = n;
    this._options = o2;
  }
  provideLinks(e, t) {
    let n = g.computeLink(e, this._regex, this._terminal, this._handler);
    t(this._addCallbacks(n));
  }
  _addCallbacks(e) {
    return e.map((t) => (t.leave = this._options.leave, t.hover = (n, o2) => {
      if (this._options.hover) {
        let { range: p2 } = t;
        this._options.hover(n, o2, p2);
      }
    }, t));
  }
};
function k3(l2) {
  try {
    let e = new URL(l2), t = e.password && e.username ? `${e.protocol}//${e.username}:${e.password}@${e.host}` : e.username ? `${e.protocol}//${e.username}@${e.host}` : `${e.protocol}//${e.host}`;
    return l2.toLocaleLowerCase().startsWith(t.toLocaleLowerCase());
  } catch {
    return false;
  }
}
var g = class l {
  static computeLink(e, t, n, o2) {
    let p2 = new RegExp(t.source, (t.flags || "") + "g"), [i8, r6] = l._getWindowedLineStrings(e - 1, n), s15 = i8.join(""), a, d = [];
    for (; a = p2.exec(s15); ) {
      let u2 = a[0];
      if (!k3(u2)) continue;
      let [c, h2] = l._mapStrIdx(n, r6, 0, a.index), [m2, f] = l._mapStrIdx(n, c, h2, u2.length);
      if (c === -1 || h2 === -1 || m2 === -1 || f === -1) continue;
      let b2 = { start: { x: h2 + 1, y: c + 1 }, end: { x: f, y: m2 + 1 } };
      d.push({ range: b2, text: u2, activate: o2 });
    }
    return d;
  }
  static _getWindowedLineStrings(e, t) {
    let n, o2 = e, p2 = e, i8 = 0, r6 = "", s15 = [];
    if (n = t.buffer.active.getLine(e)) {
      let a = n.translateToString(true);
      if (n.isWrapped && a[0] !== " ") {
        for (i8 = 0; (n = t.buffer.active.getLine(--o2)) && i8 < 2048 && (r6 = n.translateToString(true), i8 += r6.length, s15.push(r6), !(!n.isWrapped || r6.indexOf(" ") !== -1)); ) ;
        s15.reverse();
      }
      for (s15.push(a), i8 = 0; (n = t.buffer.active.getLine(++p2)) && n.isWrapped && i8 < 2048 && (r6 = n.translateToString(true), i8 += r6.length, s15.push(r6), r6.indexOf(" ") === -1); ) ;
    }
    return [s15, o2];
  }
  static _mapStrIdx(e, t, n, o2) {
    let p2 = e.buffer.active, i8 = p2.getNullCell(), r6 = n;
    for (; o2; ) {
      let s15 = p2.getLine(t);
      if (!s15) return [-1, -1];
      for (let a = r6; a < s15.length; ++a) {
        s15.getCell(a, i8);
        let d = i8.getChars();
        if (i8.getWidth() && (o2 -= d.length || 1, a === s15.length - 1 && d === "")) {
          let c = p2.getLine(t + 1);
          c && c.isWrapped && (c.getCell(0, i8), i8.getWidth() === 2 && (o2 += 1));
        }
        if (o2 < 0) return [t, a];
      }
      t++, r6 = 0;
    }
    return [t, r6];
  }
};
var _3 = /(https?|HTTPS?):[/]{2}[^\s"'!*(){}|\\\^<>`]*[^\s"':,.!?{}|\\\^~\[\]`()<>]/;
function w2(l2, e) {
  let t = window.open();
  if (t) {
    try {
      t.opener = null;
    } catch {
    }
    t.location.href = e;
  } else console.warn("Opening link blocked as opener could not be cleared");
}
var L2 = class {
  constructor(e = w2, t = {}) {
    this._handler = e;
    this._options = t;
  }
  activate(e) {
    this._terminal = e;
    let t = this._options, n = t.urlRegex || _3;
    this._linkProvider = this._terminal.registerLinkProvider(new v(this._terminal, n, this._handler, t));
  }
  dispose() {
    this._linkProvider?.dispose();
  }
};

// node_modules/@xterm/addon-webgl/lib/addon-webgl.mjs
var Lr = Object.defineProperty;
var wr = Object.getOwnPropertyDescriptor;
var Yi = (i8, e, t, n) => {
  for (var s15 = n > 1 ? void 0 : n ? wr(e, t) : e, o2 = i8.length - 1, r6; o2 >= 0; o2--) (r6 = i8[o2]) && (s15 = (n ? r6(e, t, s15) : r6(s15)) || s15);
  return n && s15 && Lr(e, t, s15), s15;
};
var Qi = (i8, e) => (t, n) => e(t, n, i8);
var pi = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(e) {
      setTimeout(() => {
        throw e.stack ? bt.isErrorNoTelemetry(e) ? new bt(e.message + `

` + e.stack) : new Error(e.message + `

` + e.stack) : e;
      }, 0);
    };
  }
  addListener(e) {
    return this.listeners.push(e), () => {
      this._removeListener(e);
    };
  }
  emit(e) {
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  _removeListener(e) {
    this.listeners.splice(this.listeners.indexOf(e), 1);
  }
  setUnexpectedErrorHandler(e) {
    this.unexpectedErrorHandler = e;
  }
  getUnexpectedErrorHandler() {
    return this.unexpectedErrorHandler;
  }
  onUnexpectedError(e) {
    this.unexpectedErrorHandler(e), this.emit(e);
  }
  onUnexpectedExternalError(e) {
    this.unexpectedErrorHandler(e);
  }
};
var Rr = new pi();
function Pe3(i8) {
  Dr(i8) || Rr.onUnexpectedError(i8);
}
var fi = "Canceled";
function Dr(i8) {
  return i8 instanceof Ye2 ? true : i8 instanceof Error && i8.name === fi && i8.message === fi;
}
var Ye2 = class extends Error {
  constructor() {
    super(fi), this.name = this.message;
  }
};
var bt = class i extends Error {
  constructor(e) {
    super(e), this.name = "CodeExpectedError";
  }
  static fromError(e) {
    if (e instanceof i) return e;
    let t = new i();
    return t.message = e.message, t.stack = e.stack, t;
  }
  static isErrorNoTelemetry(e) {
    return e.name === "CodeExpectedError";
  }
};
function Mr(i8, e, t = 0, n = i8.length) {
  let s15 = t, o2 = n;
  for (; s15 < o2; ) {
    let r6 = Math.floor((s15 + o2) / 2);
    e(i8[r6]) ? s15 = r6 + 1 : o2 = r6;
  }
  return s15 - 1;
}
var vt = class vt2 {
  constructor(e) {
    this._array = e;
    this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(e) {
    if (vt2.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (let n of this._array) if (this._prevFindLastPredicate(n) && !e(n)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = e;
    }
    let t = Mr(this._array, e, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = t + 1, t === -1 ? void 0 : this._array[t];
  }
};
vt.assertInvariants = false;
var en;
((a) => {
  function i8(l2) {
    return l2 < 0;
  }
  a.isLessThan = i8;
  function e(l2) {
    return l2 <= 0;
  }
  a.isLessThanOrEqual = e;
  function t(l2) {
    return l2 > 0;
  }
  a.isGreaterThan = t;
  function n(l2) {
    return l2 === 0;
  }
  a.isNeitherLessOrGreaterThan = n, a.greaterThan = 1, a.lessThan = -1, a.neitherLessOrGreaterThan = 0;
})(en ||= {});
function tn(i8, e) {
  return (t, n) => e(i8(t), i8(n));
}
var nn = (i8, e) => i8 - e;
var Be2 = class Be3 {
  constructor(e) {
    this.iterate = e;
  }
  forEach(e) {
    this.iterate((t) => (e(t), true));
  }
  toArray() {
    let e = [];
    return this.iterate((t) => (e.push(t), true)), e;
  }
  filter(e) {
    return new Be3((t) => this.iterate((n) => e(n) ? t(n) : true));
  }
  map(e) {
    return new Be3((t) => this.iterate((n) => t(e(n))));
  }
  some(e) {
    let t = false;
    return this.iterate((n) => (t = e(n), !t)), t;
  }
  findFirst(e) {
    let t;
    return this.iterate((n) => e(n) ? (t = n, false) : true), t;
  }
  findLast(e) {
    let t;
    return this.iterate((n) => (e(n) && (t = n), true)), t;
  }
  findLastMaxBy(e) {
    let t, n = true;
    return this.iterate((s15) => ((n || en.isGreaterThan(e(s15, t))) && (n = false, t = s15), true)), t;
  }
};
Be2.empty = new Be2((e) => {
});
function an(i8, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let n of i8) {
    let s15 = e(n), o2 = t[s15];
    o2 || (o2 = t[s15] = []), o2.push(n);
  }
  return t;
}
var sn;
var on;
var rn = class {
  constructor(e, t) {
    this.toKey = t;
    this._map = /* @__PURE__ */ new Map();
    this[sn] = "SetWithKey";
    for (let n of e) this.add(n);
  }
  get size() {
    return this._map.size;
  }
  add(e) {
    let t = this.toKey(e);
    return this._map.set(t, e), this;
  }
  delete(e) {
    return this._map.delete(this.toKey(e));
  }
  has(e) {
    return this._map.has(this.toKey(e));
  }
  *entries() {
    for (let e of this._map.values()) yield [e, e];
  }
  keys() {
    return this.values();
  }
  *values() {
    for (let e of this._map.values()) yield e;
  }
  clear() {
    this._map.clear();
  }
  forEach(e, t) {
    this._map.forEach((n) => e.call(t, n, n, this));
  }
  [(on = Symbol.iterator, sn = Symbol.toStringTag, on)]() {
    return this.values();
  }
};
var Tt = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    let n = this.map.get(e);
    n || (n = /* @__PURE__ */ new Set(), this.map.set(e, n)), n.add(t);
  }
  delete(e, t) {
    let n = this.map.get(e);
    n && (n.delete(t), n.size === 0 && this.map.delete(e));
  }
  forEach(e, t) {
    let n = this.map.get(e);
    n && n.forEach(t);
  }
  get(e) {
    let t = this.map.get(e);
    return t || /* @__PURE__ */ new Set();
  }
};
function mi(i8, e) {
  let t = this, n = false, s15;
  return function() {
    if (n) return s15;
    if (n = true, e) try {
      s15 = i8.apply(t, arguments);
    } finally {
      e();
    }
    else s15 = i8.apply(t, arguments);
    return s15;
  };
}
var _i;
((W2) => {
  function i8(E) {
    return E && typeof E == "object" && typeof E[Symbol.iterator] == "function";
  }
  W2.is = i8;
  let e = Object.freeze([]);
  function t() {
    return e;
  }
  W2.empty = t;
  function* n(E) {
    yield E;
  }
  W2.single = n;
  function s15(E) {
    return i8(E) ? E : n(E);
  }
  W2.wrap = s15;
  function o2(E) {
    return E || e;
  }
  W2.from = o2;
  function* r6(E) {
    for (let y = E.length - 1; y >= 0; y--) yield E[y];
  }
  W2.reverse = r6;
  function a(E) {
    return !E || E[Symbol.iterator]().next().done === true;
  }
  W2.isEmpty = a;
  function l2(E) {
    return E[Symbol.iterator]().next().value;
  }
  W2.first = l2;
  function u2(E, y) {
    let w3 = 0;
    for (let G4 of E) if (y(G4, w3++)) return true;
    return false;
  }
  W2.some = u2;
  function c(E, y) {
    for (let w3 of E) if (y(w3)) return w3;
  }
  W2.find = c;
  function* d(E, y) {
    for (let w3 of E) y(w3) && (yield w3);
  }
  W2.filter = d;
  function* h2(E, y) {
    let w3 = 0;
    for (let G4 of E) yield y(G4, w3++);
  }
  W2.map = h2;
  function* f(E, y) {
    let w3 = 0;
    for (let G4 of E) yield* y(G4, w3++);
  }
  W2.flatMap = f;
  function* I2(...E) {
    for (let y of E) yield* y;
  }
  W2.concat = I2;
  function L4(E, y, w3) {
    let G4 = w3;
    for (let ue4 of E) G4 = y(G4, ue4);
    return G4;
  }
  W2.reduce = L4;
  function* M4(E, y, w3 = E.length) {
    for (y < 0 && (y += E.length), w3 < 0 ? w3 += E.length : w3 > E.length && (w3 = E.length); y < w3; y++) yield E[y];
  }
  W2.slice = M4;
  function q2(E, y = Number.POSITIVE_INFINITY) {
    let w3 = [];
    if (y === 0) return [w3, E];
    let G4 = E[Symbol.iterator]();
    for (let ue4 = 0; ue4 < y; ue4++) {
      let Se4 = G4.next();
      if (Se4.done) return [w3, W2.empty()];
      w3.push(Se4.value);
    }
    return [w3, { [Symbol.iterator]() {
      return G4;
    } }];
  }
  W2.consume = q2;
  async function S2(E) {
    let y = [];
    for await (let w3 of E) y.push(w3);
    return Promise.resolve(y);
  }
  W2.asyncToArray = S2;
})(_i ||= {});
var Ar = false;
var Ne = null;
var gt = class gt2 {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(e) {
    let t = this.livingDisposables.get(e);
    return t || (t = { parent: null, source: null, isSingleton: false, value: e, idx: gt2.idx++ }, this.livingDisposables.set(e, t)), t;
  }
  trackDisposable(e) {
    let t = this.getDisposableData(e);
    t.source || (t.source = new Error().stack);
  }
  setParent(e, t) {
    let n = this.getDisposableData(e);
    n.parent = t;
  }
  markAsDisposed(e) {
    this.livingDisposables.delete(e);
  }
  markAsSingleton(e) {
    this.getDisposableData(e).isSingleton = true;
  }
  getRootParent(e, t) {
    let n = t.get(e);
    if (n) return n;
    let s15 = e.parent ? this.getRootParent(this.getDisposableData(e.parent), t) : e;
    return t.set(e, s15), s15;
  }
  getTrackedDisposables() {
    let e = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, n]) => n.source !== null && !this.getRootParent(n, e).isSingleton).flatMap(([n]) => n);
  }
  computeLeakingDisposables(e = 10, t) {
    let n;
    if (t) n = t;
    else {
      let l2 = /* @__PURE__ */ new Map(), u2 = [...this.livingDisposables.values()].filter((d) => d.source !== null && !this.getRootParent(d, l2).isSingleton);
      if (u2.length === 0) return;
      let c = new Set(u2.map((d) => d.value));
      if (n = u2.filter((d) => !(d.parent && c.has(d.parent))), n.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!n) return;
    function s15(l2) {
      function u2(d, h2) {
        for (; d.length > 0 && h2.some((f) => typeof f == "string" ? f === d[0] : d[0].match(f)); ) d.shift();
      }
      let c = l2.source.split(`
`).map((d) => d.trim().replace("at ", "")).filter((d) => d !== "");
      return u2(c, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), c.reverse();
    }
    let o2 = new Tt();
    for (let l2 of n) {
      let u2 = s15(l2);
      for (let c = 0; c <= u2.length; c++) o2.add(u2.slice(0, c).join(`
`), l2);
    }
    n.sort(tn((l2) => l2.idx, nn));
    let r6 = "", a = 0;
    for (let l2 of n.slice(0, e)) {
      a++;
      let u2 = s15(l2), c = [];
      for (let d = 0; d < u2.length; d++) {
        let h2 = u2[d];
        h2 = `(shared with ${o2.get(u2.slice(0, d + 1).join(`
`)).size}/${n.length} leaks) at ${h2}`;
        let I2 = o2.get(u2.slice(0, d).join(`
`)), L4 = an([...I2].map((M4) => s15(M4)[d]), (M4) => M4);
        delete L4[u2[d]];
        for (let [M4, q2] of Object.entries(L4)) c.unshift(`    - stacktraces of ${q2.length} other leaks continue with ${M4}`);
        c.unshift(h2);
      }
      r6 += `


==================== Leaking disposable ${a}/${n.length}: ${l2.value.constructor.name} ====================
${c.join(`
`)}
============================================================

`;
    }
    return n.length > e && (r6 += `


... and ${n.length - e} more leaking disposables

`), { leaks: n, details: r6 };
  }
};
gt.idx = 0;
function Sr(i8) {
  Ne = i8;
}
if (Ar) {
  let i8 = "__is_disposable_tracked__";
  Sr(new class {
    trackDisposable(e) {
      let t = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        e[i8] || console.log(t);
      }, 3e3);
    }
    setParent(e, t) {
      if (e && e !== B3.None) try {
        e[i8] = true;
      } catch {
      }
    }
    markAsDisposed(e) {
      if (e && e !== B3.None) try {
        e[i8] = true;
      } catch {
      }
    }
    markAsSingleton(e) {
    }
  }());
}
function Et(i8) {
  return Ne?.trackDisposable(i8), i8;
}
function yt(i8) {
  Ne?.markAsDisposed(i8);
}
function Qe(i8, e) {
  Ne?.setParent(i8, e);
}
function Or(i8, e) {
  if (Ne) for (let t of i8) Ne.setParent(t, e);
}
function un(i8) {
  if (_i.is(i8)) {
    let e = [];
    for (let t of i8) if (t) try {
      t.dispose();
    } catch (n) {
      e.push(n);
    }
    if (e.length === 1) throw e[0];
    if (e.length > 1) throw new AggregateError(e, "Encountered errors while disposing of store");
    return Array.isArray(i8) ? [] : i8;
  } else if (i8) return i8.dispose(), i8;
}
function It(...i8) {
  let e = O2(() => un(i8));
  return Or(i8, e), e;
}
function O2(i8) {
  let e = Et({ dispose: mi(() => {
    yt(e), i8();
  }) });
  return e;
}
var xt2 = class xt3 {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set();
    this._isDisposed = false;
    Et(this);
  }
  dispose() {
    this._isDisposed || (yt(this), this._isDisposed = true, this.clear());
  }
  get isDisposed() {
    return this._isDisposed;
  }
  clear() {
    if (this._toDispose.size !== 0) try {
      un(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  add(e) {
    if (!e) return e;
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    return Qe(e, this), this._isDisposed ? xt3.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(e), e;
  }
  delete(e) {
    if (e) {
      if (e === this) throw new Error("Cannot dispose a disposable on itself!");
      this._toDispose.delete(e), e.dispose();
    }
  }
  deleteAndLeak(e) {
    e && this._toDispose.has(e) && (this._toDispose.delete(e), Qe(e, null));
  }
};
xt2.DISABLE_DISPOSED_WARNING = false;
var fe3 = xt2;
var B3 = class {
  constructor() {
    this._store = new fe3();
    Et(this), Qe(this._store, this);
  }
  dispose() {
    yt(this), this._store.dispose();
  }
  _register(e) {
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(e);
  }
};
B3.None = Object.freeze({ dispose() {
} });
var be3 = class {
  constructor() {
    this._isDisposed = false;
    Et(this);
  }
  get value() {
    return this._isDisposed ? void 0 : this._value;
  }
  set value(e) {
    this._isDisposed || e === this._value || (this._value?.dispose(), e && Qe(e, this), this._value = e);
  }
  clear() {
    this.value = void 0;
  }
  dispose() {
    this._isDisposed = true, yt(this), this._value?.dispose(), this._value = void 0;
  }
  clearAndLeak() {
    let e = this._value;
    return this._value = void 0, e && Qe(e, null), e;
  }
};
var Lt = typeof process < "u" && "title" in process;
var Ze2 = Lt ? "node" : navigator.userAgent;
var bi = Lt ? "node" : navigator.platform;
var cn2 = Ze2.includes("Firefox");
var dn = Ze2.includes("Edge");
var vi = /^((?!chrome|android).)*safari/i.test(Ze2);
function hn() {
  if (!vi) return 0;
  let i8 = Ze2.match(/Version\/(\d+)/);
  return i8 === null || i8.length < 2 ? 0 : parseInt(i8[1]);
}
var oo = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(bi);
var ao = ["Windows", "Win16", "Win32", "WinCE"].includes(bi);
var lo = bi.indexOf("Linux") >= 0;
var uo = /\bCrOS\b/.test(Ze2);
var pn = "";
var K4 = 0;
var V = 0;
var C2 = 0;
var U3 = 0;
var Z3 = { css: "#00000000", rgba: 0 };
var X4;
((n) => {
  function i8(s15, o2, r6, a) {
    return a !== void 0 ? `#${Oe2(s15)}${Oe2(o2)}${Oe2(r6)}${Oe2(a)}` : `#${Oe2(s15)}${Oe2(o2)}${Oe2(r6)}`;
  }
  n.toCss = i8;
  function e(s15, o2, r6, a = 255) {
    return (s15 << 24 | o2 << 16 | r6 << 8 | a) >>> 0;
  }
  n.toRgba = e;
  function t(s15, o2, r6, a) {
    return { css: n.toCss(s15, o2, r6, a), rgba: n.toRgba(s15, o2, r6, a) };
  }
  n.toColor = t;
})(X4 ||= {});
var Ue;
((a) => {
  function i8(l2, u2) {
    if (U3 = (u2.rgba & 255) / 255, U3 === 1) return { css: u2.css, rgba: u2.rgba };
    let c = u2.rgba >> 24 & 255, d = u2.rgba >> 16 & 255, h2 = u2.rgba >> 8 & 255, f = l2.rgba >> 24 & 255, I2 = l2.rgba >> 16 & 255, L4 = l2.rgba >> 8 & 255;
    K4 = f + Math.round((c - f) * U3), V = I2 + Math.round((d - I2) * U3), C2 = L4 + Math.round((h2 - L4) * U3);
    let M4 = X4.toCss(K4, V, C2), q2 = X4.toRgba(K4, V, C2);
    return { css: M4, rgba: q2 };
  }
  a.blend = i8;
  function e(l2) {
    return (l2.rgba & 255) === 255;
  }
  a.isOpaque = e;
  function t(l2, u2, c) {
    let d = Te3.ensureContrastRatio(l2.rgba, u2.rgba, c);
    if (d) return X4.toColor(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255);
  }
  a.ensureContrastRatio = t;
  function n(l2) {
    let u2 = (l2.rgba | 255) >>> 0;
    return [K4, V, C2] = Te3.toChannels(u2), { css: X4.toCss(K4, V, C2), rgba: u2 };
  }
  a.opaque = n;
  function s15(l2, u2) {
    return U3 = Math.round(u2 * 255), [K4, V, C2] = Te3.toChannels(l2.rgba), { css: X4.toCss(K4, V, C2, U3), rgba: X4.toRgba(K4, V, C2, U3) };
  }
  a.opacity = s15;
  function o2(l2, u2) {
    return U3 = l2.rgba & 255, s15(l2, U3 * u2 / 255);
  }
  a.multiplyOpacity = o2;
  function r6(l2) {
    return [l2.rgba >> 24 & 255, l2.rgba >> 16 & 255, l2.rgba >> 8 & 255];
  }
  a.toColorRGB = r6;
})(Ue ||= {});
var Fr;
((n) => {
  let i8, e;
  try {
    let s15 = document.createElement("canvas");
    s15.width = 1, s15.height = 1;
    let o2 = s15.getContext("2d", { willReadFrequently: true });
    o2 && (i8 = o2, i8.globalCompositeOperation = "copy", e = i8.createLinearGradient(0, 0, 1, 1));
  } catch {
  }
  function t(s15) {
    if (s15.match(/#[\da-f]{3,8}/i)) switch (s15.length) {
      case 4:
        return K4 = parseInt(s15.slice(1, 2).repeat(2), 16), V = parseInt(s15.slice(2, 3).repeat(2), 16), C2 = parseInt(s15.slice(3, 4).repeat(2), 16), X4.toColor(K4, V, C2);
      case 5:
        return K4 = parseInt(s15.slice(1, 2).repeat(2), 16), V = parseInt(s15.slice(2, 3).repeat(2), 16), C2 = parseInt(s15.slice(3, 4).repeat(2), 16), U3 = parseInt(s15.slice(4, 5).repeat(2), 16), X4.toColor(K4, V, C2, U3);
      case 7:
        return { css: s15, rgba: (parseInt(s15.slice(1), 16) << 8 | 255) >>> 0 };
      case 9:
        return { css: s15, rgba: parseInt(s15.slice(1), 16) >>> 0 };
    }
    let o2 = s15.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
    if (o2) return K4 = parseInt(o2[1]), V = parseInt(o2[2]), C2 = parseInt(o2[3]), U3 = Math.round((o2[5] === void 0 ? 1 : parseFloat(o2[5])) * 255), X4.toColor(K4, V, C2, U3);
    if (!i8 || !e) throw new Error("css.toColor: Unsupported css format");
    if (i8.fillStyle = e, i8.fillStyle = s15, typeof i8.fillStyle != "string") throw new Error("css.toColor: Unsupported css format");
    if (i8.fillRect(0, 0, 1, 1), [K4, V, C2, U3] = i8.getImageData(0, 0, 1, 1).data, U3 !== 255) throw new Error("css.toColor: Unsupported css format");
    return { rgba: X4.toRgba(K4, V, C2, U3), css: s15 };
  }
  n.toColor = t;
})(Fr ||= {});
var Y4;
((t) => {
  function i8(n) {
    return e(n >> 16 & 255, n >> 8 & 255, n & 255);
  }
  t.relativeLuminance = i8;
  function e(n, s15, o2) {
    let r6 = n / 255, a = s15 / 255, l2 = o2 / 255, u2 = r6 <= 0.03928 ? r6 / 12.92 : Math.pow((r6 + 0.055) / 1.055, 2.4), c = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4), d = l2 <= 0.03928 ? l2 / 12.92 : Math.pow((l2 + 0.055) / 1.055, 2.4);
    return u2 * 0.2126 + c * 0.7152 + d * 0.0722;
  }
  t.relativeLuminance2 = e;
})(Y4 ||= {});
var Te3;
((o2) => {
  function i8(r6, a) {
    if (U3 = (a & 255) / 255, U3 === 1) return a;
    let l2 = a >> 24 & 255, u2 = a >> 16 & 255, c = a >> 8 & 255, d = r6 >> 24 & 255, h2 = r6 >> 16 & 255, f = r6 >> 8 & 255;
    return K4 = d + Math.round((l2 - d) * U3), V = h2 + Math.round((u2 - h2) * U3), C2 = f + Math.round((c - f) * U3), X4.toRgba(K4, V, C2);
  }
  o2.blend = i8;
  function e(r6, a, l2) {
    let u2 = Y4.relativeLuminance(r6 >> 8), c = Y4.relativeLuminance(a >> 8);
    if (ve3(u2, c) < l2) {
      if (c < u2) {
        let I2 = t(r6, a, l2), L4 = ve3(u2, Y4.relativeLuminance(I2 >> 8));
        if (L4 < l2) {
          let M4 = n(r6, a, l2), q2 = ve3(u2, Y4.relativeLuminance(M4 >> 8));
          return L4 > q2 ? I2 : M4;
        }
        return I2;
      }
      let h2 = n(r6, a, l2), f = ve3(u2, Y4.relativeLuminance(h2 >> 8));
      if (f < l2) {
        let I2 = t(r6, a, l2), L4 = ve3(u2, Y4.relativeLuminance(I2 >> 8));
        return f > L4 ? h2 : I2;
      }
      return h2;
    }
  }
  o2.ensureContrastRatio = e;
  function t(r6, a, l2) {
    let u2 = r6 >> 24 & 255, c = r6 >> 16 & 255, d = r6 >> 8 & 255, h2 = a >> 24 & 255, f = a >> 16 & 255, I2 = a >> 8 & 255, L4 = ve3(Y4.relativeLuminance2(h2, f, I2), Y4.relativeLuminance2(u2, c, d));
    for (; L4 < l2 && (h2 > 0 || f > 0 || I2 > 0); ) h2 -= Math.max(0, Math.ceil(h2 * 0.1)), f -= Math.max(0, Math.ceil(f * 0.1)), I2 -= Math.max(0, Math.ceil(I2 * 0.1)), L4 = ve3(Y4.relativeLuminance2(h2, f, I2), Y4.relativeLuminance2(u2, c, d));
    return (h2 << 24 | f << 16 | I2 << 8 | 255) >>> 0;
  }
  o2.reduceLuminance = t;
  function n(r6, a, l2) {
    let u2 = r6 >> 24 & 255, c = r6 >> 16 & 255, d = r6 >> 8 & 255, h2 = a >> 24 & 255, f = a >> 16 & 255, I2 = a >> 8 & 255, L4 = ve3(Y4.relativeLuminance2(h2, f, I2), Y4.relativeLuminance2(u2, c, d));
    for (; L4 < l2 && (h2 < 255 || f < 255 || I2 < 255); ) h2 = Math.min(255, h2 + Math.ceil((255 - h2) * 0.1)), f = Math.min(255, f + Math.ceil((255 - f) * 0.1)), I2 = Math.min(255, I2 + Math.ceil((255 - I2) * 0.1)), L4 = ve3(Y4.relativeLuminance2(h2, f, I2), Y4.relativeLuminance2(u2, c, d));
    return (h2 << 24 | f << 16 | I2 << 8 | 255) >>> 0;
  }
  o2.increaseLuminance = n;
  function s15(r6) {
    return [r6 >> 24 & 255, r6 >> 16 & 255, r6 >> 8 & 255, r6 & 255];
  }
  o2.toChannels = s15;
})(Te3 ||= {});
function Oe2(i8) {
  let e = i8.toString(16);
  return e.length < 2 ? "0" + e : e;
}
function ve3(i8, e) {
  return i8 < e ? (e + 0.05) / (i8 + 0.05) : (i8 + 0.05) / (e + 0.05);
}
function F(i8) {
  if (!i8) throw new Error("value must not be falsy");
  return i8;
}
function Rt(i8) {
  return 57508 <= i8 && i8 <= 57558;
}
function fn(i8) {
  return 57520 <= i8 && i8 <= 57527;
}
function kr(i8) {
  return 57344 <= i8 && i8 <= 63743;
}
function Pr(i8) {
  return 9472 <= i8 && i8 <= 9631;
}
function Br(i8) {
  return i8 >= 128512 && i8 <= 128591 || i8 >= 127744 && i8 <= 128511 || i8 >= 128640 && i8 <= 128767 || i8 >= 9728 && i8 <= 9983 || i8 >= 9984 && i8 <= 10175 || i8 >= 65024 && i8 <= 65039 || i8 >= 129280 && i8 <= 129535 || i8 >= 127462 && i8 <= 127487;
}
function mn(i8, e, t, n) {
  return e === 1 && t > Math.ceil(n * 1.5) && i8 !== void 0 && i8 > 255 && !Br(i8) && !Rt(i8) && !kr(i8);
}
function Dt(i8) {
  return Rt(i8) || Pr(i8);
}
function _n() {
  return { css: { canvas: wt(), cell: wt() }, device: { canvas: wt(), cell: wt(), char: { width: 0, height: 0, left: 0, top: 0 } } };
}
function wt() {
  return { width: 0, height: 0 };
}
function bn(i8, e, t = 0) {
  return (i8 - (Math.round(e) * 2 - t)) % (Math.round(e) * 2);
}
var j = 0;
var z = 0;
var me3 = false;
var ge2 = false;
var Mt = false;
var J3;
var Ti = 0;
var At = class {
  constructor(e, t, n, s15, o2, r6) {
    this._terminal = e;
    this._optionService = t;
    this._selectionRenderModel = n;
    this._decorationService = s15;
    this._coreBrowserService = o2;
    this._themeService = r6;
    this.result = { fg: 0, bg: 0, ext: 0 };
  }
  resolve(e, t, n, s15) {
    if (this.result.bg = e.bg, this.result.fg = e.fg, this.result.ext = e.bg & 268435456 ? e.extended.ext : 0, z = 0, j = 0, ge2 = false, me3 = false, Mt = false, J3 = this._themeService.colors, Ti = 0, e.getCode() !== 0 && e.extended.underlineStyle === 4) {
      let r6 = Math.max(1, Math.floor(this._optionService.rawOptions.fontSize * this._coreBrowserService.dpr / 15));
      Ti = t * s15 % (Math.round(r6) * 2);
    }
    if (this._decorationService.forEachDecorationAtCell(t, n, "bottom", (r6) => {
      r6.backgroundColorRGB && (z = r6.backgroundColorRGB.rgba >> 8 & 16777215, ge2 = true), r6.foregroundColorRGB && (j = r6.foregroundColorRGB.rgba >> 8 & 16777215, me3 = true);
    }), Mt = this._selectionRenderModel.isCellSelected(this._terminal, t, n), Mt) {
      if (this.result.fg & 67108864 || (this.result.bg & 50331648) !== 0) {
        if (this.result.fg & 67108864) switch (this.result.fg & 50331648) {
          case 16777216:
          case 33554432:
            z = this._themeService.colors.ansi[this.result.fg & 255].rgba;
            break;
          case 50331648:
            z = (this.result.fg & 16777215) << 8 | 255;
            break;
          case 0:
          default:
            z = this._themeService.colors.foreground.rgba;
        }
        else switch (this.result.bg & 50331648) {
          case 16777216:
          case 33554432:
            z = this._themeService.colors.ansi[this.result.bg & 255].rgba;
            break;
          case 50331648:
            z = (this.result.bg & 16777215) << 8 | 255;
            break;
        }
        z = Te3.blend(z, (this._coreBrowserService.isFocused ? J3.selectionBackgroundOpaque : J3.selectionInactiveBackgroundOpaque).rgba & 4294967040 | 128) >> 8 & 16777215;
      } else z = (this._coreBrowserService.isFocused ? J3.selectionBackgroundOpaque : J3.selectionInactiveBackgroundOpaque).rgba >> 8 & 16777215;
      if (ge2 = true, J3.selectionForeground && (j = J3.selectionForeground.rgba >> 8 & 16777215, me3 = true), Dt(e.getCode())) {
        if (this.result.fg & 67108864 && (this.result.bg & 50331648) === 0) j = (this._coreBrowserService.isFocused ? J3.selectionBackgroundOpaque : J3.selectionInactiveBackgroundOpaque).rgba >> 8 & 16777215;
        else {
          if (this.result.fg & 67108864) switch (this.result.bg & 50331648) {
            case 16777216:
            case 33554432:
              j = this._themeService.colors.ansi[this.result.bg & 255].rgba;
              break;
            case 50331648:
              j = (this.result.bg & 16777215) << 8 | 255;
              break;
          }
          else switch (this.result.fg & 50331648) {
            case 16777216:
            case 33554432:
              j = this._themeService.colors.ansi[this.result.fg & 255].rgba;
              break;
            case 50331648:
              j = (this.result.fg & 16777215) << 8 | 255;
              break;
            case 0:
            default:
              j = this._themeService.colors.foreground.rgba;
          }
          j = Te3.blend(j, (this._coreBrowserService.isFocused ? J3.selectionBackgroundOpaque : J3.selectionInactiveBackgroundOpaque).rgba & 4294967040 | 128) >> 8 & 16777215;
        }
        me3 = true;
      }
    }
    this._decorationService.forEachDecorationAtCell(t, n, "top", (r6) => {
      r6.backgroundColorRGB && (z = r6.backgroundColorRGB.rgba >> 8 & 16777215, ge2 = true), r6.foregroundColorRGB && (j = r6.foregroundColorRGB.rgba >> 8 & 16777215, me3 = true);
    }), ge2 && (Mt ? z = e.bg & -16777216 & -134217729 | z | 50331648 : z = e.bg & -16777216 | z | 50331648), me3 && (j = e.fg & -16777216 & -67108865 | j | 50331648), this.result.fg & 67108864 && (ge2 && !me3 && ((this.result.bg & 50331648) === 0 ? j = this.result.fg & -134217728 | J3.background.rgba >> 8 & 16777215 & 16777215 | 50331648 : j = this.result.fg & -134217728 | this.result.bg & 67108863, me3 = true), !ge2 && me3 && ((this.result.fg & 50331648) === 0 ? z = this.result.bg & -67108864 | J3.foreground.rgba >> 8 & 16777215 & 16777215 | 50331648 : z = this.result.bg & -67108864 | this.result.fg & 67108863, ge2 = true)), J3 = void 0, this.result.bg = ge2 ? z : this.result.bg, this.result.fg = me3 ? j : this.result.fg, this.result.ext &= 536870911, this.result.ext |= Ti << 29 & 3758096384;
  }
};
var gn = 0.5;
var St = cn2 || dn ? "bottom" : "ideographic";
var Hr = { "\u2580": [{ x: 0, y: 0, w: 8, h: 4 }], "\u2581": [{ x: 0, y: 7, w: 8, h: 1 }], "\u2582": [{ x: 0, y: 6, w: 8, h: 2 }], "\u2583": [{ x: 0, y: 5, w: 8, h: 3 }], "\u2584": [{ x: 0, y: 4, w: 8, h: 4 }], "\u2585": [{ x: 0, y: 3, w: 8, h: 5 }], "\u2586": [{ x: 0, y: 2, w: 8, h: 6 }], "\u2587": [{ x: 0, y: 1, w: 8, h: 7 }], "\u2588": [{ x: 0, y: 0, w: 8, h: 8 }], "\u2589": [{ x: 0, y: 0, w: 7, h: 8 }], "\u258A": [{ x: 0, y: 0, w: 6, h: 8 }], "\u258B": [{ x: 0, y: 0, w: 5, h: 8 }], "\u258C": [{ x: 0, y: 0, w: 4, h: 8 }], "\u258D": [{ x: 0, y: 0, w: 3, h: 8 }], "\u258E": [{ x: 0, y: 0, w: 2, h: 8 }], "\u258F": [{ x: 0, y: 0, w: 1, h: 8 }], "\u2590": [{ x: 4, y: 0, w: 4, h: 8 }], "\u2594": [{ x: 0, y: 0, w: 8, h: 1 }], "\u2595": [{ x: 7, y: 0, w: 1, h: 8 }], "\u2596": [{ x: 0, y: 4, w: 4, h: 4 }], "\u2597": [{ x: 4, y: 4, w: 4, h: 4 }], "\u2598": [{ x: 0, y: 0, w: 4, h: 4 }], "\u2599": [{ x: 0, y: 0, w: 4, h: 8 }, { x: 0, y: 4, w: 8, h: 4 }], "\u259A": [{ x: 0, y: 0, w: 4, h: 4 }, { x: 4, y: 4, w: 4, h: 4 }], "\u259B": [{ x: 0, y: 0, w: 4, h: 8 }, { x: 4, y: 0, w: 4, h: 4 }], "\u259C": [{ x: 0, y: 0, w: 8, h: 4 }, { x: 4, y: 0, w: 4, h: 8 }], "\u259D": [{ x: 4, y: 0, w: 4, h: 4 }], "\u259E": [{ x: 4, y: 0, w: 4, h: 4 }, { x: 0, y: 4, w: 4, h: 4 }], "\u259F": [{ x: 4, y: 0, w: 4, h: 8 }, { x: 0, y: 4, w: 8, h: 4 }], "\u{1FB70}": [{ x: 1, y: 0, w: 1, h: 8 }], "\u{1FB71}": [{ x: 2, y: 0, w: 1, h: 8 }], "\u{1FB72}": [{ x: 3, y: 0, w: 1, h: 8 }], "\u{1FB73}": [{ x: 4, y: 0, w: 1, h: 8 }], "\u{1FB74}": [{ x: 5, y: 0, w: 1, h: 8 }], "\u{1FB75}": [{ x: 6, y: 0, w: 1, h: 8 }], "\u{1FB76}": [{ x: 0, y: 1, w: 8, h: 1 }], "\u{1FB77}": [{ x: 0, y: 2, w: 8, h: 1 }], "\u{1FB78}": [{ x: 0, y: 3, w: 8, h: 1 }], "\u{1FB79}": [{ x: 0, y: 4, w: 8, h: 1 }], "\u{1FB7A}": [{ x: 0, y: 5, w: 8, h: 1 }], "\u{1FB7B}": [{ x: 0, y: 6, w: 8, h: 1 }], "\u{1FB7C}": [{ x: 0, y: 0, w: 1, h: 8 }, { x: 0, y: 7, w: 8, h: 1 }], "\u{1FB7D}": [{ x: 0, y: 0, w: 1, h: 8 }, { x: 0, y: 0, w: 8, h: 1 }], "\u{1FB7E}": [{ x: 7, y: 0, w: 1, h: 8 }, { x: 0, y: 0, w: 8, h: 1 }], "\u{1FB7F}": [{ x: 7, y: 0, w: 1, h: 8 }, { x: 0, y: 7, w: 8, h: 1 }], "\u{1FB80}": [{ x: 0, y: 0, w: 8, h: 1 }, { x: 0, y: 7, w: 8, h: 1 }], "\u{1FB81}": [{ x: 0, y: 0, w: 8, h: 1 }, { x: 0, y: 2, w: 8, h: 1 }, { x: 0, y: 4, w: 8, h: 1 }, { x: 0, y: 7, w: 8, h: 1 }], "\u{1FB82}": [{ x: 0, y: 0, w: 8, h: 2 }], "\u{1FB83}": [{ x: 0, y: 0, w: 8, h: 3 }], "\u{1FB84}": [{ x: 0, y: 0, w: 8, h: 5 }], "\u{1FB85}": [{ x: 0, y: 0, w: 8, h: 6 }], "\u{1FB86}": [{ x: 0, y: 0, w: 8, h: 7 }], "\u{1FB87}": [{ x: 6, y: 0, w: 2, h: 8 }], "\u{1FB88}": [{ x: 5, y: 0, w: 3, h: 8 }], "\u{1FB89}": [{ x: 3, y: 0, w: 5, h: 8 }], "\u{1FB8A}": [{ x: 2, y: 0, w: 6, h: 8 }], "\u{1FB8B}": [{ x: 1, y: 0, w: 7, h: 8 }], "\u{1FB95}": [{ x: 0, y: 0, w: 2, h: 2 }, { x: 4, y: 0, w: 2, h: 2 }, { x: 2, y: 2, w: 2, h: 2 }, { x: 6, y: 2, w: 2, h: 2 }, { x: 0, y: 4, w: 2, h: 2 }, { x: 4, y: 4, w: 2, h: 2 }, { x: 2, y: 6, w: 2, h: 2 }, { x: 6, y: 6, w: 2, h: 2 }], "\u{1FB96}": [{ x: 2, y: 0, w: 2, h: 2 }, { x: 6, y: 0, w: 2, h: 2 }, { x: 0, y: 2, w: 2, h: 2 }, { x: 4, y: 2, w: 2, h: 2 }, { x: 2, y: 4, w: 2, h: 2 }, { x: 6, y: 4, w: 2, h: 2 }, { x: 0, y: 6, w: 2, h: 2 }, { x: 4, y: 6, w: 2, h: 2 }], "\u{1FB97}": [{ x: 0, y: 2, w: 8, h: 2 }, { x: 0, y: 6, w: 8, h: 2 }] };
var Wr = { "\u2591": [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]], "\u2592": [[1, 0], [0, 0], [0, 1], [0, 0]], "\u2593": [[0, 1], [1, 1], [1, 0], [1, 1]] };
var Gr = { "\u2500": { 1: "M0,.5 L1,.5" }, "\u2501": { 3: "M0,.5 L1,.5" }, "\u2502": { 1: "M.5,0 L.5,1" }, "\u2503": { 3: "M.5,0 L.5,1" }, "\u250C": { 1: "M0.5,1 L.5,.5 L1,.5" }, "\u250F": { 3: "M0.5,1 L.5,.5 L1,.5" }, "\u2510": { 1: "M0,.5 L.5,.5 L.5,1" }, "\u2513": { 3: "M0,.5 L.5,.5 L.5,1" }, "\u2514": { 1: "M.5,0 L.5,.5 L1,.5" }, "\u2517": { 3: "M.5,0 L.5,.5 L1,.5" }, "\u2518": { 1: "M.5,0 L.5,.5 L0,.5" }, "\u251B": { 3: "M.5,0 L.5,.5 L0,.5" }, "\u251C": { 1: "M.5,0 L.5,1 M.5,.5 L1,.5" }, "\u2523": { 3: "M.5,0 L.5,1 M.5,.5 L1,.5" }, "\u2524": { 1: "M.5,0 L.5,1 M.5,.5 L0,.5" }, "\u252B": { 3: "M.5,0 L.5,1 M.5,.5 L0,.5" }, "\u252C": { 1: "M0,.5 L1,.5 M.5,.5 L.5,1" }, "\u2533": { 3: "M0,.5 L1,.5 M.5,.5 L.5,1" }, "\u2534": { 1: "M0,.5 L1,.5 M.5,.5 L.5,0" }, "\u253B": { 3: "M0,.5 L1,.5 M.5,.5 L.5,0" }, "\u253C": { 1: "M0,.5 L1,.5 M.5,0 L.5,1" }, "\u254B": { 3: "M0,.5 L1,.5 M.5,0 L.5,1" }, "\u2574": { 1: "M.5,.5 L0,.5" }, "\u2578": { 3: "M.5,.5 L0,.5" }, "\u2575": { 1: "M.5,.5 L.5,0" }, "\u2579": { 3: "M.5,.5 L.5,0" }, "\u2576": { 1: "M.5,.5 L1,.5" }, "\u257A": { 3: "M.5,.5 L1,.5" }, "\u2577": { 1: "M.5,.5 L.5,1" }, "\u257B": { 3: "M.5,.5 L.5,1" }, "\u2550": { 1: (i8, e) => `M0,${0.5 - e} L1,${0.5 - e} M0,${0.5 + e} L1,${0.5 + e}` }, "\u2551": { 1: (i8, e) => `M${0.5 - i8},0 L${0.5 - i8},1 M${0.5 + i8},0 L${0.5 + i8},1` }, "\u2552": { 1: (i8, e) => `M.5,1 L.5,${0.5 - e} L1,${0.5 - e} M.5,${0.5 + e} L1,${0.5 + e}` }, "\u2553": { 1: (i8, e) => `M${0.5 - i8},1 L${0.5 - i8},.5 L1,.5 M${0.5 + i8},.5 L${0.5 + i8},1` }, "\u2554": { 1: (i8, e) => `M1,${0.5 - e} L${0.5 - i8},${0.5 - e} L${0.5 - i8},1 M1,${0.5 + e} L${0.5 + i8},${0.5 + e} L${0.5 + i8},1` }, "\u2555": { 1: (i8, e) => `M0,${0.5 - e} L.5,${0.5 - e} L.5,1 M0,${0.5 + e} L.5,${0.5 + e}` }, "\u2556": { 1: (i8, e) => `M${0.5 + i8},1 L${0.5 + i8},.5 L0,.5 M${0.5 - i8},.5 L${0.5 - i8},1` }, "\u2557": { 1: (i8, e) => `M0,${0.5 + e} L${0.5 - i8},${0.5 + e} L${0.5 - i8},1 M0,${0.5 - e} L${0.5 + i8},${0.5 - e} L${0.5 + i8},1` }, "\u2558": { 1: (i8, e) => `M.5,0 L.5,${0.5 + e} L1,${0.5 + e} M.5,${0.5 - e} L1,${0.5 - e}` }, "\u2559": { 1: (i8, e) => `M1,.5 L${0.5 - i8},.5 L${0.5 - i8},0 M${0.5 + i8},.5 L${0.5 + i8},0` }, "\u255A": { 1: (i8, e) => `M1,${0.5 - e} L${0.5 + i8},${0.5 - e} L${0.5 + i8},0 M1,${0.5 + e} L${0.5 - i8},${0.5 + e} L${0.5 - i8},0` }, "\u255B": { 1: (i8, e) => `M0,${0.5 + e} L.5,${0.5 + e} L.5,0 M0,${0.5 - e} L.5,${0.5 - e}` }, "\u255C": { 1: (i8, e) => `M0,.5 L${0.5 + i8},.5 L${0.5 + i8},0 M${0.5 - i8},.5 L${0.5 - i8},0` }, "\u255D": { 1: (i8, e) => `M0,${0.5 - e} L${0.5 - i8},${0.5 - e} L${0.5 - i8},0 M0,${0.5 + e} L${0.5 + i8},${0.5 + e} L${0.5 + i8},0` }, "\u255E": { 1: (i8, e) => `M.5,0 L.5,1 M.5,${0.5 - e} L1,${0.5 - e} M.5,${0.5 + e} L1,${0.5 + e}` }, "\u255F": { 1: (i8, e) => `M${0.5 - i8},0 L${0.5 - i8},1 M${0.5 + i8},0 L${0.5 + i8},1 M${0.5 + i8},.5 L1,.5` }, "\u2560": { 1: (i8, e) => `M${0.5 - i8},0 L${0.5 - i8},1 M1,${0.5 + e} L${0.5 + i8},${0.5 + e} L${0.5 + i8},1 M1,${0.5 - e} L${0.5 + i8},${0.5 - e} L${0.5 + i8},0` }, "\u2561": { 1: (i8, e) => `M.5,0 L.5,1 M0,${0.5 - e} L.5,${0.5 - e} M0,${0.5 + e} L.5,${0.5 + e}` }, "\u2562": { 1: (i8, e) => `M0,.5 L${0.5 - i8},.5 M${0.5 - i8},0 L${0.5 - i8},1 M${0.5 + i8},0 L${0.5 + i8},1` }, "\u2563": { 1: (i8, e) => `M${0.5 + i8},0 L${0.5 + i8},1 M0,${0.5 + e} L${0.5 - i8},${0.5 + e} L${0.5 - i8},1 M0,${0.5 - e} L${0.5 - i8},${0.5 - e} L${0.5 - i8},0` }, "\u2564": { 1: (i8, e) => `M0,${0.5 - e} L1,${0.5 - e} M0,${0.5 + e} L1,${0.5 + e} M.5,${0.5 + e} L.5,1` }, "\u2565": { 1: (i8, e) => `M0,.5 L1,.5 M${0.5 - i8},.5 L${0.5 - i8},1 M${0.5 + i8},.5 L${0.5 + i8},1` }, "\u2566": { 1: (i8, e) => `M0,${0.5 - e} L1,${0.5 - e} M0,${0.5 + e} L${0.5 - i8},${0.5 + e} L${0.5 - i8},1 M1,${0.5 + e} L${0.5 + i8},${0.5 + e} L${0.5 + i8},1` }, "\u2567": { 1: (i8, e) => `M.5,0 L.5,${0.5 - e} M0,${0.5 - e} L1,${0.5 - e} M0,${0.5 + e} L1,${0.5 + e}` }, "\u2568": { 1: (i8, e) => `M0,.5 L1,.5 M${0.5 - i8},.5 L${0.5 - i8},0 M${0.5 + i8},.5 L${0.5 + i8},0` }, "\u2569": { 1: (i8, e) => `M0,${0.5 + e} L1,${0.5 + e} M0,${0.5 - e} L${0.5 - i8},${0.5 - e} L${0.5 - i8},0 M1,${0.5 - e} L${0.5 + i8},${0.5 - e} L${0.5 + i8},0` }, "\u256A": { 1: (i8, e) => `M.5,0 L.5,1 M0,${0.5 - e} L1,${0.5 - e} M0,${0.5 + e} L1,${0.5 + e}` }, "\u256B": { 1: (i8, e) => `M0,.5 L1,.5 M${0.5 - i8},0 L${0.5 - i8},1 M${0.5 + i8},0 L${0.5 + i8},1` }, "\u256C": { 1: (i8, e) => `M0,${0.5 + e} L${0.5 - i8},${0.5 + e} L${0.5 - i8},1 M1,${0.5 + e} L${0.5 + i8},${0.5 + e} L${0.5 + i8},1 M0,${0.5 - e} L${0.5 - i8},${0.5 - e} L${0.5 - i8},0 M1,${0.5 - e} L${0.5 + i8},${0.5 - e} L${0.5 + i8},0` }, "\u2571": { 1: "M1,0 L0,1" }, "\u2572": { 1: "M0,0 L1,1" }, "\u2573": { 1: "M1,0 L0,1 M0,0 L1,1" }, "\u257C": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L1,.5" }, "\u257D": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L.5,1" }, "\u257E": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "\u257F": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L.5,0" }, "\u250D": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L1,.5" }, "\u250E": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "\u2511": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L0,.5" }, "\u2512": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L.5,1" }, "\u2515": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L1,.5" }, "\u2516": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L.5,0" }, "\u2519": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L0,.5" }, "\u251A": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L.5,0" }, "\u251D": { 1: "M.5,0 L.5,1", 3: "M.5,.5 L1,.5" }, "\u251E": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,.5 L.5,0" }, "\u251F": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "\u2520": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,1" }, "\u2521": { 1: "M.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L1,.5" }, "\u2522": { 1: "M.5,.5 L.5,0", 3: "M0.5,1 L.5,.5 L1,.5" }, "\u2525": { 1: "M.5,0 L.5,1", 3: "M.5,.5 L0,.5" }, "\u2526": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,.5 L.5,0" }, "\u2527": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M.5,.5 L.5,1" }, "\u2528": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,1" }, "\u2529": { 1: "M.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L0,.5" }, "\u252A": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L.5,.5 L.5,1" }, "\u252D": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "\u252E": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,.5 L1,.5" }, "\u252F": { 1: "M.5,.5 L.5,1", 3: "M0,.5 L1,.5" }, "\u2530": { 1: "M0,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "\u2531": { 1: "M.5,.5 L1,.5", 3: "M0,.5 L.5,.5 L.5,1" }, "\u2532": { 1: "M.5,.5 L0,.5", 3: "M0.5,1 L.5,.5 L1,.5" }, "\u2535": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "\u2536": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M.5,.5 L1,.5" }, "\u2537": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L1,.5" }, "\u2538": { 1: "M0,.5 L1,.5", 3: "M.5,.5 L.5,0" }, "\u2539": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,.5 L0,.5" }, "\u253A": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,.5 L1,.5" }, "\u253D": { 1: "M.5,0 L.5,1 M.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "\u253E": { 1: "M.5,0 L.5,1 M.5,.5 L0,.5", 3: "M.5,.5 L1,.5" }, "\u253F": { 1: "M.5,0 L.5,1", 3: "M0,.5 L1,.5" }, "\u2540": { 1: "M0,.5 L1,.5 M.5,.5 L.5,1", 3: "M.5,.5 L.5,0" }, "\u2541": { 1: "M.5,.5 L.5,0 M0,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "\u2542": { 1: "M0,.5 L1,.5", 3: "M.5,0 L.5,1" }, "\u2543": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,0 L.5,.5 L0,.5" }, "\u2544": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L1,.5" }, "\u2545": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M0,.5 L.5,.5 L.5,1" }, "\u2546": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M0.5,1 L.5,.5 L1,.5" }, "\u2547": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L.5,0 M0,.5 L1,.5" }, "\u2548": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L1,.5 M.5,.5 L.5,1" }, "\u2549": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,1 M.5,.5 L0,.5" }, "\u254A": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,1 M.5,.5 L1,.5" }, "\u254C": { 1: "M.1,.5 L.4,.5 M.6,.5 L.9,.5" }, "\u254D": { 3: "M.1,.5 L.4,.5 M.6,.5 L.9,.5" }, "\u2504": { 1: "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5" }, "\u2505": { 3: "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5" }, "\u2508": { 1: "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5" }, "\u2509": { 3: "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5" }, "\u254E": { 1: "M.5,.1 L.5,.4 M.5,.6 L.5,.9" }, "\u254F": { 3: "M.5,.1 L.5,.4 M.5,.6 L.5,.9" }, "\u2506": { 1: "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333" }, "\u2507": { 3: "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333" }, "\u250A": { 1: "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95" }, "\u250B": { 3: "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95" }, "\u256D": { 1: (i8, e) => `M.5,1 L.5,${0.5 + e / 0.15 * 0.5} C.5,${0.5 + e / 0.15 * 0.5},.5,.5,1,.5` }, "\u256E": { 1: (i8, e) => `M.5,1 L.5,${0.5 + e / 0.15 * 0.5} C.5,${0.5 + e / 0.15 * 0.5},.5,.5,0,.5` }, "\u256F": { 1: (i8, e) => `M.5,0 L.5,${0.5 - e / 0.15 * 0.5} C.5,${0.5 - e / 0.15 * 0.5},.5,.5,0,.5` }, "\u2570": { 1: (i8, e) => `M.5,0 L.5,${0.5 - e / 0.15 * 0.5} C.5,${0.5 - e / 0.15 * 0.5},.5,.5,1,.5` } };
var et2 = { "\uE0A0": { d: "M.3,1 L.03,1 L.03,.88 C.03,.82,.06,.78,.11,.73 C.15,.7,.2,.68,.28,.65 L.43,.6 C.49,.58,.53,.56,.56,.53 C.59,.5,.6,.47,.6,.43 L.6,.27 L.4,.27 L.69,.1 L.98,.27 L.78,.27 L.78,.46 C.78,.52,.76,.56,.72,.61 C.68,.66,.63,.67,.56,.7 L.48,.72 C.42,.74,.38,.76,.35,.78 C.32,.8,.31,.84,.31,.88 L.31,1 M.3,.5 L.03,.59 L.03,.09 L.3,.09 L.3,.655", type: 0 }, "\uE0A1": { d: "M.7,.4 L.7,.47 L.2,.47 L.2,.03 L.355,.03 L.355,.4 L.705,.4 M.7,.5 L.86,.5 L.86,.95 L.69,.95 L.44,.66 L.46,.86 L.46,.95 L.3,.95 L.3,.49 L.46,.49 L.71,.78 L.69,.565 L.69,.5", type: 0 }, "\uE0A2": { d: "M.25,.94 C.16,.94,.11,.92,.11,.87 L.11,.53 C.11,.48,.15,.455,.23,.45 L.23,.3 C.23,.25,.26,.22,.31,.19 C.36,.16,.43,.15,.51,.15 C.59,.15,.66,.16,.71,.19 C.77,.22,.79,.26,.79,.3 L.79,.45 C.87,.45,.91,.48,.91,.53 L.91,.87 C.91,.92,.86,.94,.77,.94 L.24,.94 M.53,.2 C.49,.2,.45,.21,.42,.23 C.39,.25,.38,.27,.38,.3 L.38,.45 L.68,.45 L.68,.3 C.68,.27,.67,.25,.64,.23 C.61,.21,.58,.2,.53,.2 M.58,.82 L.58,.66 C.63,.65,.65,.63,.65,.6 C.65,.58,.64,.57,.61,.56 C.58,.55,.56,.54,.52,.54 C.48,.54,.46,.55,.43,.56 C.4,.57,.39,.59,.39,.6 C.39,.63,.41,.64,.46,.66 L.46,.82 L.57,.82", type: 0 }, "\uE0B0": { d: "M0,0 L1,.5 L0,1", type: 0, rightPadding: 2 }, "\uE0B1": { d: "M-1,-.5 L1,.5 L-1,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "\uE0B2": { d: "M1,0 L0,.5 L1,1", type: 0, leftPadding: 2 }, "\uE0B3": { d: "M2,-.5 L0,.5 L2,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "\uE0B4": { d: "M0,0 L0,1 C0.552,1,1,0.776,1,.5 C1,0.224,0.552,0,0,0", type: 0, rightPadding: 1 }, "\uE0B5": { d: "M.2,1 C.422,1,.8,.826,.78,.5 C.8,.174,0.422,0,.2,0", type: 1, rightPadding: 1 }, "\uE0B6": { d: "M1,0 L1,1 C0.448,1,0,0.776,0,.5 C0,0.224,0.448,0,1,0", type: 0, leftPadding: 1 }, "\uE0B7": { d: "M.8,1 C0.578,1,0.2,.826,.22,.5 C0.2,0.174,0.578,0,0.8,0", type: 1, leftPadding: 1 }, "\uE0B8": { d: "M-.5,-.5 L1.5,1.5 L-.5,1.5", type: 0 }, "\uE0B9": { d: "M-.5,-.5 L1.5,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "\uE0BA": { d: "M1.5,-.5 L-.5,1.5 L1.5,1.5", type: 0 }, "\uE0BC": { d: "M1.5,-.5 L-.5,1.5 L-.5,-.5", type: 0 }, "\uE0BD": { d: "M1.5,-.5 L-.5,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "\uE0BE": { d: "M-.5,-.5 L1.5,1.5 L1.5,-.5", type: 0 } };
et2["\uE0BB"] = et2["\uE0BD"];
et2["\uE0BF"] = et2["\uE0B9"];
function yn(i8, e, t, n, s15, o2, r6, a) {
  let l2 = Hr[e];
  if (l2) return $r(i8, l2, t, n, s15, o2), true;
  let u2 = Wr[e];
  if (u2) return Kr(i8, u2, t, n, s15, o2), true;
  let c = Gr[e];
  if (c) return Vr(i8, c, t, n, s15, o2, a), true;
  let d = et2[e];
  return d ? (Cr(i8, d, t, n, s15, o2, r6, a), true) : false;
}
function $r(i8, e, t, n, s15, o2) {
  for (let r6 = 0; r6 < e.length; r6++) {
    let a = e[r6], l2 = s15 / 8, u2 = o2 / 8;
    i8.fillRect(t + a.x * l2, n + a.y * u2, a.w * l2, a.h * u2);
  }
}
var xn = /* @__PURE__ */ new Map();
function Kr(i8, e, t, n, s15, o2) {
  let r6 = xn.get(e);
  r6 || (r6 = /* @__PURE__ */ new Map(), xn.set(e, r6));
  let a = i8.fillStyle;
  if (typeof a != "string") throw new Error(`Unexpected fillStyle type "${a}"`);
  let l2 = r6.get(a);
  if (!l2) {
    let u2 = e[0].length, c = e.length, d = i8.canvas.ownerDocument.createElement("canvas");
    d.width = u2, d.height = c;
    let h2 = F(d.getContext("2d")), f = new ImageData(u2, c), I2, L4, M4, q2;
    if (a.startsWith("#")) I2 = parseInt(a.slice(1, 3), 16), L4 = parseInt(a.slice(3, 5), 16), M4 = parseInt(a.slice(5, 7), 16), q2 = a.length > 7 && parseInt(a.slice(7, 9), 16) || 1;
    else if (a.startsWith("rgba")) [I2, L4, M4, q2] = a.substring(5, a.length - 1).split(",").map((S2) => parseFloat(S2));
    else throw new Error(`Unexpected fillStyle color format "${a}" when drawing pattern glyph`);
    for (let S2 = 0; S2 < c; S2++) for (let W2 = 0; W2 < u2; W2++) f.data[(S2 * u2 + W2) * 4] = I2, f.data[(S2 * u2 + W2) * 4 + 1] = L4, f.data[(S2 * u2 + W2) * 4 + 2] = M4, f.data[(S2 * u2 + W2) * 4 + 3] = e[S2][W2] * (q2 * 255);
    h2.putImageData(f, 0, 0), l2 = F(i8.createPattern(d, null)), r6.set(a, l2);
  }
  i8.fillStyle = l2, i8.fillRect(t, n, s15, o2);
}
function Vr(i8, e, t, n, s15, o2, r6) {
  i8.strokeStyle = i8.fillStyle;
  for (let [a, l2] of Object.entries(e)) {
    i8.beginPath(), i8.lineWidth = r6 * Number.parseInt(a);
    let u2;
    if (typeof l2 == "function") {
      let d = 0.15 / o2 * s15;
      u2 = l2(0.15, d);
    } else u2 = l2;
    for (let c of u2.split(" ")) {
      let d = c[0], h2 = In[d];
      if (!h2) {
        console.error(`Could not find drawing instructions for "${d}"`);
        continue;
      }
      let f = c.substring(1).split(",");
      !f[0] || !f[1] || h2(i8, Ln(f, s15, o2, t, n, true, r6));
    }
    i8.stroke(), i8.closePath();
  }
}
function Cr(i8, e, t, n, s15, o2, r6, a) {
  let l2 = new Path2D();
  l2.rect(t, n, s15, o2), i8.clip(l2), i8.beginPath();
  let u2 = r6 / 12;
  i8.lineWidth = a * u2;
  for (let c of e.d.split(" ")) {
    let d = c[0], h2 = In[d];
    if (!h2) {
      console.error(`Could not find drawing instructions for "${d}"`);
      continue;
    }
    let f = c.substring(1).split(",");
    !f[0] || !f[1] || h2(i8, Ln(f, s15, o2, t, n, false, a, (e.leftPadding ?? 0) * (u2 / 2), (e.rightPadding ?? 0) * (u2 / 2)));
  }
  e.type === 1 ? (i8.strokeStyle = i8.fillStyle, i8.stroke()) : i8.fill(), i8.closePath();
}
function En(i8, e, t = 0) {
  return Math.max(Math.min(i8, e), t);
}
var In = { C: (i8, e) => i8.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5]), L: (i8, e) => i8.lineTo(e[0], e[1]), M: (i8, e) => i8.moveTo(e[0], e[1]) };
function Ln(i8, e, t, n, s15, o2, r6, a = 0, l2 = 0) {
  let u2 = i8.map((c) => parseFloat(c) || parseInt(c));
  if (u2.length < 2) throw new Error("Too few arguments for instruction");
  for (let c = 0; c < u2.length; c += 2) u2[c] *= e - a * r6 - l2 * r6, o2 && u2[c] !== 0 && (u2[c] = En(Math.round(u2[c] + 0.5) - 0.5, e, 0)), u2[c] += n + a * r6;
  for (let c = 1; c < u2.length; c += 2) u2[c] *= t, o2 && u2[c] !== 0 && (u2[c] = En(Math.round(u2[c] + 0.5) - 0.5, t, 0)), u2[c] += s15;
  return u2;
}
var Ot = class {
  constructor() {
    this._data = {};
  }
  set(e, t, n) {
    this._data[e] || (this._data[e] = {}), this._data[e][t] = n;
  }
  get(e, t) {
    return this._data[e] ? this._data[e][t] : void 0;
  }
  clear() {
    this._data = {};
  }
};
var tt2 = class {
  constructor() {
    this._data = new Ot();
  }
  set(e, t, n, s15, o2) {
    this._data.get(e, t) || this._data.set(e, t, new Ot()), this._data.get(e, t).set(n, s15, o2);
  }
  get(e, t, n, s15) {
    return this._data.get(e, t)?.get(n, s15);
  }
  clear() {
    this._data.clear();
  }
};
var Ft = class {
  constructor() {
    this._tasks = [];
    this._i = 0;
  }
  enqueue(e) {
    this._tasks.push(e), this._start();
  }
  flush() {
    for (; this._i < this._tasks.length; ) this._tasks[this._i]() || this._i++;
    this.clear();
  }
  clear() {
    this._idleCallback && (this._cancelCallback(this._idleCallback), this._idleCallback = void 0), this._i = 0, this._tasks.length = 0;
  }
  _start() {
    this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
  }
  _process(e) {
    this._idleCallback = void 0;
    let t = 0, n = 0, s15 = e.timeRemaining(), o2 = 0;
    for (; this._i < this._tasks.length; ) {
      if (t = performance.now(), this._tasks[this._i]() || this._i++, t = Math.max(1, performance.now() - t), n = Math.max(t, n), o2 = e.timeRemaining(), n * 1.5 > o2) {
        s15 - t < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(s15 - t))}ms`), this._start();
        return;
      }
      s15 = o2;
    }
    this.clear();
  }
};
var gi = class extends Ft {
  _requestCallback(e) {
    return setTimeout(() => e(this._createDeadline(16)));
  }
  _cancelCallback(e) {
    clearTimeout(e);
  }
  _createDeadline(e) {
    let t = performance.now() + e;
    return { timeRemaining: () => Math.max(0, t - performance.now()) };
  }
};
var xi = class extends Ft {
  _requestCallback(e) {
    return requestIdleCallback(e);
  }
  _cancelCallback(e) {
    cancelIdleCallback(e);
  }
};
var wn = !Lt && "requestIdleCallback" in window ? xi : gi;
var he3 = class i2 {
  constructor() {
    this.fg = 0;
    this.bg = 0;
    this.extended = new it2();
  }
  static toColorRGB(e) {
    return [e >>> 16 & 255, e >>> 8 & 255, e & 255];
  }
  static fromColorRGB(e) {
    return (e[0] & 255) << 16 | (e[1] & 255) << 8 | e[2] & 255;
  }
  clone() {
    let e = new i2();
    return e.fg = this.fg, e.bg = this.bg, e.extended = this.extended.clone(), e;
  }
  isInverse() {
    return this.fg & 67108864;
  }
  isBold() {
    return this.fg & 134217728;
  }
  isUnderline() {
    return this.hasExtendedAttrs() && this.extended.underlineStyle !== 0 ? 1 : this.fg & 268435456;
  }
  isBlink() {
    return this.fg & 536870912;
  }
  isInvisible() {
    return this.fg & 1073741824;
  }
  isItalic() {
    return this.bg & 67108864;
  }
  isDim() {
    return this.bg & 134217728;
  }
  isStrikethrough() {
    return this.fg & 2147483648;
  }
  isProtected() {
    return this.bg & 536870912;
  }
  isOverline() {
    return this.bg & 1073741824;
  }
  getFgColorMode() {
    return this.fg & 50331648;
  }
  getBgColorMode() {
    return this.bg & 50331648;
  }
  isFgRGB() {
    return (this.fg & 50331648) === 50331648;
  }
  isBgRGB() {
    return (this.bg & 50331648) === 50331648;
  }
  isFgPalette() {
    return (this.fg & 50331648) === 16777216 || (this.fg & 50331648) === 33554432;
  }
  isBgPalette() {
    return (this.bg & 50331648) === 16777216 || (this.bg & 50331648) === 33554432;
  }
  isFgDefault() {
    return (this.fg & 50331648) === 0;
  }
  isBgDefault() {
    return (this.bg & 50331648) === 0;
  }
  isAttributeDefault() {
    return this.fg === 0 && this.bg === 0;
  }
  getFgColor() {
    switch (this.fg & 50331648) {
      case 16777216:
      case 33554432:
        return this.fg & 255;
      case 50331648:
        return this.fg & 16777215;
      default:
        return -1;
    }
  }
  getBgColor() {
    switch (this.bg & 50331648) {
      case 16777216:
      case 33554432:
        return this.bg & 255;
      case 50331648:
        return this.bg & 16777215;
      default:
        return -1;
    }
  }
  hasExtendedAttrs() {
    return this.bg & 268435456;
  }
  updateExtended() {
    this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
  }
  getUnderlineColor() {
    if (this.bg & 268435456 && ~this.extended.underlineColor) switch (this.extended.underlineColor & 50331648) {
      case 16777216:
      case 33554432:
        return this.extended.underlineColor & 255;
      case 50331648:
        return this.extended.underlineColor & 16777215;
      default:
        return this.getFgColor();
    }
    return this.getFgColor();
  }
  getUnderlineColorMode() {
    return this.bg & 268435456 && ~this.extended.underlineColor ? this.extended.underlineColor & 50331648 : this.getFgColorMode();
  }
  isUnderlineColorRGB() {
    return this.bg & 268435456 && ~this.extended.underlineColor ? (this.extended.underlineColor & 50331648) === 50331648 : this.isFgRGB();
  }
  isUnderlineColorPalette() {
    return this.bg & 268435456 && ~this.extended.underlineColor ? (this.extended.underlineColor & 50331648) === 16777216 || (this.extended.underlineColor & 50331648) === 33554432 : this.isFgPalette();
  }
  isUnderlineColorDefault() {
    return this.bg & 268435456 && ~this.extended.underlineColor ? (this.extended.underlineColor & 50331648) === 0 : this.isFgDefault();
  }
  getUnderlineStyle() {
    return this.fg & 268435456 ? this.bg & 268435456 ? this.extended.underlineStyle : 1 : 0;
  }
  getUnderlineVariantOffset() {
    return this.extended.underlineVariantOffset;
  }
};
var it2 = class i3 {
  constructor(e = 0, t = 0) {
    this._ext = 0;
    this._urlId = 0;
    this._ext = e, this._urlId = t;
  }
  get ext() {
    return this._urlId ? this._ext & -469762049 | this.underlineStyle << 26 : this._ext;
  }
  set ext(e) {
    this._ext = e;
  }
  get underlineStyle() {
    return this._urlId ? 5 : (this._ext & 469762048) >> 26;
  }
  set underlineStyle(e) {
    this._ext &= -469762049, this._ext |= e << 26 & 469762048;
  }
  get underlineColor() {
    return this._ext & 67108863;
  }
  set underlineColor(e) {
    this._ext &= -67108864, this._ext |= e & 67108863;
  }
  get urlId() {
    return this._urlId;
  }
  set urlId(e) {
    this._urlId = e;
  }
  get underlineVariantOffset() {
    let e = (this._ext & 3758096384) >> 29;
    return e < 0 ? e ^ 4294967288 : e;
  }
  set underlineVariantOffset(e) {
    this._ext &= 536870911, this._ext |= e << 29 & 3758096384;
  }
  clone() {
    return new i3(this._ext, this._urlId);
  }
  isEmpty() {
    return this.underlineStyle === 0 && this._urlId === 0;
  }
};
var He2 = class He3 {
  constructor(e) {
    this.element = e, this.next = He3.Undefined, this.prev = He3.Undefined;
  }
};
He2.Undefined = new He2(void 0);
var zr = globalThis.performance && typeof globalThis.performance.now == "function";
var kt = class i4 {
  static create(e) {
    return new i4(e);
  }
  constructor(e) {
    this._now = zr && e === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
  }
  stop() {
    this._stopTime = this._now();
  }
  reset() {
    this._startTime = this._now(), this._stopTime = -1;
  }
  elapsed() {
    return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime;
  }
};
var qr = false;
var Dn = false;
var jr = false;
var ee4;
((se3) => {
  se3.None = () => B3.None;
  function e(v3) {
    if (jr) {
      let { onDidAddListener: p2 } = v3, g2 = nt2.create(), b2 = 0;
      v3.onDidAddListener = () => {
        ++b2 === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), g2.print()), p2?.();
      };
    }
  }
  function t(v3, p2) {
    return h2(v3, () => {
    }, 0, void 0, true, void 0, p2);
  }
  se3.defer = t;
  function n(v3) {
    return (p2, g2 = null, b2) => {
      let m2 = false, _4;
      return _4 = v3((T2) => {
        if (!m2) return _4 ? _4.dispose() : m2 = true, p2.call(g2, T2);
      }, null, b2), m2 && _4.dispose(), _4;
    };
  }
  se3.once = n;
  function s15(v3, p2, g2) {
    return c((b2, m2 = null, _4) => v3((T2) => b2.call(m2, p2(T2)), null, _4), g2);
  }
  se3.map = s15;
  function o2(v3, p2, g2) {
    return c((b2, m2 = null, _4) => v3((T2) => {
      p2(T2), b2.call(m2, T2);
    }, null, _4), g2);
  }
  se3.forEach = o2;
  function r6(v3, p2, g2) {
    return c((b2, m2 = null, _4) => v3((T2) => p2(T2) && b2.call(m2, T2), null, _4), g2);
  }
  se3.filter = r6;
  function a(v3) {
    return v3;
  }
  se3.signal = a;
  function l2(...v3) {
    return (p2, g2 = null, b2) => {
      let m2 = It(...v3.map((_4) => _4((T2) => p2.call(g2, T2))));
      return d(m2, b2);
    };
  }
  se3.any = l2;
  function u2(v3, p2, g2, b2) {
    let m2 = g2;
    return s15(v3, (_4) => (m2 = p2(m2, _4), m2), b2);
  }
  se3.reduce = u2;
  function c(v3, p2) {
    let g2, b2 = { onWillAddFirstListener() {
      g2 = v3(m2.fire, m2);
    }, onDidRemoveLastListener() {
      g2?.dispose();
    } };
    p2 || e(b2);
    let m2 = new D2(b2);
    return p2?.add(m2), m2.event;
  }
  function d(v3, p2) {
    return p2 instanceof Array ? p2.push(v3) : p2 && p2.add(v3), v3;
  }
  function h2(v3, p2, g2 = 100, b2 = false, m2 = false, _4, T2) {
    let x, R3, $3, P4 = 0, de4, Re4 = { leakWarningThreshold: _4, onWillAddFirstListener() {
      x = v3((ie4) => {
        P4++, R3 = p2(R3, ie4), b2 && !$3 && (oe.fire(R3), R3 = void 0), de4 = () => {
          let N3 = R3;
          R3 = void 0, $3 = void 0, (!b2 || P4 > 1) && oe.fire(N3), P4 = 0;
        }, typeof g2 == "number" ? (clearTimeout($3), $3 = setTimeout(de4, g2)) : $3 === void 0 && ($3 = 0, queueMicrotask(de4));
      });
    }, onWillRemoveListener() {
      m2 && P4 > 0 && de4?.();
    }, onDidRemoveLastListener() {
      de4 = void 0, x.dispose();
    } };
    T2 || e(Re4);
    let oe = new D2(Re4);
    return T2?.add(oe), oe.event;
  }
  se3.debounce = h2;
  function f(v3, p2 = 0, g2) {
    return se3.debounce(v3, (b2, m2) => b2 ? (b2.push(m2), b2) : [m2], p2, void 0, true, void 0, g2);
  }
  se3.accumulate = f;
  function I2(v3, p2 = (b2, m2) => b2 === m2, g2) {
    let b2 = true, m2;
    return r6(v3, (_4) => {
      let T2 = b2 || !p2(_4, m2);
      return b2 = false, m2 = _4, T2;
    }, g2);
  }
  se3.latch = I2;
  function L4(v3, p2, g2) {
    return [se3.filter(v3, p2, g2), se3.filter(v3, (b2) => !p2(b2), g2)];
  }
  se3.split = L4;
  function M4(v3, p2 = false, g2 = [], b2) {
    let m2 = g2.slice(), _4 = v3((R3) => {
      m2 ? m2.push(R3) : x.fire(R3);
    });
    b2 && b2.add(_4);
    let T2 = () => {
      m2?.forEach((R3) => x.fire(R3)), m2 = null;
    }, x = new D2({ onWillAddFirstListener() {
      _4 || (_4 = v3((R3) => x.fire(R3)), b2 && b2.add(_4));
    }, onDidAddFirstListener() {
      m2 && (p2 ? setTimeout(T2) : T2());
    }, onDidRemoveLastListener() {
      _4 && _4.dispose(), _4 = null;
    } });
    return b2 && b2.add(x), x.event;
  }
  se3.buffer = M4;
  function q2(v3, p2) {
    return (b2, m2, _4) => {
      let T2 = p2(new W2());
      return v3(function(x) {
        let R3 = T2.evaluate(x);
        R3 !== S2 && b2.call(m2, R3);
      }, void 0, _4);
    };
  }
  se3.chain = q2;
  let S2 = /* @__PURE__ */ Symbol("HaltChainable");
  class W2 {
    constructor() {
      this.steps = [];
    }
    map(p2) {
      return this.steps.push(p2), this;
    }
    forEach(p2) {
      return this.steps.push((g2) => (p2(g2), g2)), this;
    }
    filter(p2) {
      return this.steps.push((g2) => p2(g2) ? g2 : S2), this;
    }
    reduce(p2, g2) {
      let b2 = g2;
      return this.steps.push((m2) => (b2 = p2(b2, m2), b2)), this;
    }
    latch(p2 = (g2, b2) => g2 === b2) {
      let g2 = true, b2;
      return this.steps.push((m2) => {
        let _4 = g2 || !p2(m2, b2);
        return g2 = false, b2 = m2, _4 ? m2 : S2;
      }), this;
    }
    evaluate(p2) {
      for (let g2 of this.steps) if (p2 = g2(p2), p2 === S2) break;
      return p2;
    }
  }
  function E(v3, p2, g2 = (b2) => b2) {
    let b2 = (...x) => T2.fire(g2(...x)), m2 = () => v3.on(p2, b2), _4 = () => v3.removeListener(p2, b2), T2 = new D2({ onWillAddFirstListener: m2, onDidRemoveLastListener: _4 });
    return T2.event;
  }
  se3.fromNodeEventEmitter = E;
  function y(v3, p2, g2 = (b2) => b2) {
    let b2 = (...x) => T2.fire(g2(...x)), m2 = () => v3.addEventListener(p2, b2), _4 = () => v3.removeEventListener(p2, b2), T2 = new D2({ onWillAddFirstListener: m2, onDidRemoveLastListener: _4 });
    return T2.event;
  }
  se3.fromDOMEventEmitter = y;
  function w3(v3) {
    return new Promise((p2) => n(v3)(p2));
  }
  se3.toPromise = w3;
  function G4(v3) {
    let p2 = new D2();
    return v3.then((g2) => {
      p2.fire(g2);
    }, () => {
      p2.fire(void 0);
    }).finally(() => {
      p2.dispose();
    }), p2.event;
  }
  se3.fromPromise = G4;
  function ue4(v3, p2) {
    return v3((g2) => p2.fire(g2));
  }
  se3.forward = ue4;
  function Se4(v3, p2, g2) {
    return p2(g2), v3((b2) => p2(b2));
  }
  se3.runAndSubscribe = Se4;
  class ce4 {
    constructor(p2, g2) {
      this._observable = p2;
      this._counter = 0;
      this._hasChanged = false;
      let b2 = { onWillAddFirstListener: () => {
        p2.addObserver(this);
      }, onDidRemoveLastListener: () => {
        p2.removeObserver(this);
      } };
      g2 || e(b2), this.emitter = new D2(b2), g2 && g2.add(this.emitter);
    }
    beginUpdate(p2) {
      this._counter++;
    }
    handlePossibleChange(p2) {
    }
    handleChange(p2, g2) {
      this._hasChanged = true;
    }
    endUpdate(p2) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function we4(v3, p2) {
    return new ce4(v3, p2).emitter.event;
  }
  se3.fromObservable = we4;
  function A2(v3) {
    return (p2, g2, b2) => {
      let m2 = 0, _4 = false, T2 = { beginUpdate() {
        m2++;
      }, endUpdate() {
        m2--, m2 === 0 && (v3.reportChanges(), _4 && (_4 = false, p2.call(g2)));
      }, handlePossibleChange() {
      }, handleChange() {
        _4 = true;
      } };
      v3.addObserver(T2), v3.reportChanges();
      let x = { dispose() {
        v3.removeObserver(T2);
      } };
      return b2 instanceof fe3 ? b2.add(x) : Array.isArray(b2) && b2.push(x), x;
    };
  }
  se3.fromObservableLight = A2;
})(ee4 ||= {});
var We2 = class We3 {
  constructor(e) {
    this.listenerCount = 0;
    this.invocationCount = 0;
    this.elapsedOverall = 0;
    this.durations = [];
    this.name = `${e}_${We3._idPool++}`, We3.all.add(this);
  }
  start(e) {
    this._stopWatch = new kt(), this.listenerCount = e;
  }
  stop() {
    if (this._stopWatch) {
      let e = this._stopWatch.elapsed();
      this.durations.push(e), this.elapsedOverall += e, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
We2.all = /* @__PURE__ */ new Set(), We2._idPool = 0;
var Ei = We2;
var Mn = -1;
var Bt = class Bt2 {
  constructor(e, t, n = (Bt2._idPool++).toString(16).padStart(3, "0")) {
    this._errorHandler = e;
    this.threshold = t;
    this.name = n;
    this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(e, t) {
    let n = this.threshold;
    if (n <= 0 || t < n) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    let s15 = this._stacks.get(e.value) || 0;
    if (this._stacks.set(e.value, s15 + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = n * 0.5;
      let [o2, r6] = this.getMostFrequentStack(), a = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${r6}):`;
      console.warn(a), console.warn(o2);
      let l2 = new Ii(a, o2);
      this._errorHandler(l2);
    }
    return () => {
      let o2 = this._stacks.get(e.value) || 0;
      this._stacks.set(e.value, o2 - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let e, t = 0;
    for (let [n, s15] of this._stacks) (!e || t < s15) && (e = [n, s15], t = s15);
    return e;
  }
};
Bt._idPool = 1;
var yi = Bt;
var nt2 = class i5 {
  constructor(e) {
    this.value = e;
  }
  static create() {
    let e = new Error();
    return new i5(e.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
};
var Ii = class extends Error {
  constructor(e, t) {
    super(e), this.name = "ListenerLeakError", this.stack = t;
  }
};
var Li = class extends Error {
  constructor(e, t) {
    super(e), this.name = "ListenerRefusalError", this.stack = t;
  }
};
var Xr = 0;
var Ge2 = class {
  constructor(e) {
    this.value = e;
    this.id = Xr++;
  }
};
var Yr = 2;
var Qr = (i8, e) => {
  if (i8 instanceof Ge2) e(i8);
  else for (let t = 0; t < i8.length; t++) {
    let n = i8[t];
    n && e(n);
  }
};
var Pt;
if (qr) {
  let i8 = [];
  setInterval(() => {
    i8.length !== 0 && (console.warn("[LEAKING LISTENERS] GC'ed these listeners that were NOT yet disposed:"), console.warn(i8.join(`
`)), i8.length = 0);
  }, 3e3), Pt = new FinalizationRegistry((e) => {
    typeof e == "string" && i8.push(e);
  });
}
var D2 = class {
  constructor(e) {
    this._size = 0;
    this._options = e, this._leakageMon = Mn > 0 || this._options?.leakWarningThreshold ? new yi(e?.onListenerError ?? Pe3, this._options?.leakWarningThreshold ?? Mn) : void 0, this._perfMon = this._options?._profName ? new Ei(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (Dn) {
          let e = this._listeners;
          queueMicrotask(() => {
            Qr(e, (t) => t.stack?.print());
          });
        }
        this._listeners = void 0, this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
    }
  }
  get event() {
    return this._event ??= (e, t, n) => {
      if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
        let l2 = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
        console.warn(l2);
        let u2 = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], c = new Li(`${l2}. HINT: Stack shows most frequent listener (${u2[1]}-times)`, u2[0]);
        return (this._options?.onListenerError || Pe3)(c), B3.None;
      }
      if (this._disposed) return B3.None;
      t && (e = e.bind(t));
      let s15 = new Ge2(e), o2, r6;
      this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (s15.stack = nt2.create(), o2 = this._leakageMon.check(s15.stack, this._size + 1)), Dn && (s15.stack = r6 ?? nt2.create()), this._listeners ? this._listeners instanceof Ge2 ? (this._deliveryQueue ??= new wi(), this._listeners = [this._listeners, s15]) : this._listeners.push(s15) : (this._options?.onWillAddFirstListener?.(this), this._listeners = s15, this._options?.onDidAddFirstListener?.(this)), this._size++;
      let a = O2(() => {
        Pt?.unregister(a), o2?.(), this._removeListener(s15);
      });
      if (n instanceof fe3 ? n.add(a) : Array.isArray(n) && n.push(a), Pt) {
        let l2 = new Error().stack.split(`
`).slice(2, 3).join(`
`).trim(), u2 = /(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(l2);
        Pt.register(a, u2?.[2] ?? l2, a);
      }
      return a;
    }, this._event;
  }
  _removeListener(e) {
    if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
    if (this._size === 1) {
      this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
      return;
    }
    let t = this._listeners, n = t.indexOf(e);
    if (n === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, t[n] = void 0;
    let s15 = this._deliveryQueue.current === this;
    if (this._size * Yr <= t.length) {
      let o2 = 0;
      for (let r6 = 0; r6 < t.length; r6++) t[r6] ? t[o2++] = t[r6] : s15 && (this._deliveryQueue.end--, o2 < this._deliveryQueue.i && this._deliveryQueue.i--);
      t.length = o2;
    }
  }
  _deliver(e, t) {
    if (!e) return;
    let n = this._options?.onListenerError || Pe3;
    if (!n) {
      e.value(t);
      return;
    }
    try {
      e.value(t);
    } catch (s15) {
      n(s15);
    }
  }
  _deliverQueue(e) {
    let t = e.current._listeners;
    for (; e.i < e.end; ) this._deliver(t[e.i++], e.value);
    e.reset();
  }
  fire(e) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof Ge2) this._deliver(this._listeners, e);
    else {
      let t = this._deliveryQueue;
      t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
};
var wi = class {
  constructor() {
    this.i = -1;
    this.end = 0;
  }
  enqueue(e, t, n) {
    this.i = 0, this.end = n, this.current = e, this.value = t;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
};
var An = { texturePage: 0, texturePosition: { x: 0, y: 0 }, texturePositionClipSpace: { x: 0, y: 0 }, offset: { x: 0, y: 0 }, size: { x: 0, y: 0 }, sizeClipSpace: { x: 0, y: 0 } };
var rt2 = 2;
var st2;
var ae = class i6 {
  constructor(e, t, n) {
    this._document = e;
    this._config = t;
    this._unicodeService = n;
    this._didWarmUp = false;
    this._cacheMap = new tt2();
    this._cacheMapCombined = new tt2();
    this._pages = [];
    this._activePages = [];
    this._workBoundingBox = { top: 0, left: 0, bottom: 0, right: 0 };
    this._workAttributeData = new he3();
    this._textureSize = 512;
    this._onAddTextureAtlasCanvas = new D2();
    this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event;
    this._onRemoveTextureAtlasCanvas = new D2();
    this.onRemoveTextureAtlasCanvas = this._onRemoveTextureAtlasCanvas.event;
    this._requestClearModel = false;
    this._createNewPage(), this._tmpCanvas = Sn(e, this._config.deviceCellWidth * 4 + rt2 * 2, this._config.deviceCellHeight + rt2 * 2), this._tmpCtx = F(this._tmpCanvas.getContext("2d", { alpha: this._config.allowTransparency, willReadFrequently: true }));
  }
  get pages() {
    return this._pages;
  }
  dispose() {
    this._tmpCanvas.remove();
    for (let e of this.pages) e.canvas.remove();
    this._onAddTextureAtlasCanvas.dispose();
  }
  warmUp() {
    this._didWarmUp || (this._doWarmUp(), this._didWarmUp = true);
  }
  _doWarmUp() {
    let e = new wn();
    for (let t = 33; t < 126; t++) e.enqueue(() => {
      if (!this._cacheMap.get(t, 0, 0, 0)) {
        let n = this._drawToCache(t, 0, 0, 0, false, void 0);
        this._cacheMap.set(t, 0, 0, 0, n);
      }
    });
  }
  beginFrame() {
    return this._requestClearModel;
  }
  clearTexture() {
    if (!(this._pages[0].currentRow.x === 0 && this._pages[0].currentRow.y === 0)) {
      for (let e of this._pages) e.clear();
      this._cacheMap.clear(), this._cacheMapCombined.clear(), this._didWarmUp = false;
    }
  }
  _createNewPage() {
    if (i6.maxAtlasPages && this._pages.length >= Math.max(4, i6.maxAtlasPages)) {
      let t = this._pages.filter((u2) => u2.canvas.width * 2 <= (i6.maxTextureSize || 4096)).sort((u2, c) => c.canvas.width !== u2.canvas.width ? c.canvas.width - u2.canvas.width : c.percentageUsed - u2.percentageUsed), n = -1, s15 = 0;
      for (let u2 = 0; u2 < t.length; u2++) if (t[u2].canvas.width !== s15) n = u2, s15 = t[u2].canvas.width;
      else if (u2 - n === 3) break;
      let o2 = t.slice(n, n + 4), r6 = o2.map((u2) => u2.glyphs[0].texturePage).sort((u2, c) => u2 > c ? 1 : -1), a = this.pages.length - o2.length, l2 = this._mergePages(o2, a);
      l2.version++;
      for (let u2 = r6.length - 1; u2 >= 0; u2--) this._deletePage(r6[u2]);
      this.pages.push(l2), this._requestClearModel = true, this._onAddTextureAtlasCanvas.fire(l2.canvas);
    }
    let e = new ot2(this._document, this._textureSize);
    return this._pages.push(e), this._activePages.push(e), this._onAddTextureAtlasCanvas.fire(e.canvas), e;
  }
  _mergePages(e, t) {
    let n = e[0].canvas.width * 2, s15 = new ot2(this._document, n, e);
    for (let [o2, r6] of e.entries()) {
      let a = o2 * r6.canvas.width % n, l2 = Math.floor(o2 / 2) * r6.canvas.height;
      s15.ctx.drawImage(r6.canvas, a, l2);
      for (let c of r6.glyphs) c.texturePage = t, c.sizeClipSpace.x = c.size.x / n, c.sizeClipSpace.y = c.size.y / n, c.texturePosition.x += a, c.texturePosition.y += l2, c.texturePositionClipSpace.x = c.texturePosition.x / n, c.texturePositionClipSpace.y = c.texturePosition.y / n;
      this._onRemoveTextureAtlasCanvas.fire(r6.canvas);
      let u2 = this._activePages.indexOf(r6);
      u2 !== -1 && this._activePages.splice(u2, 1);
    }
    return s15;
  }
  _deletePage(e) {
    this._pages.splice(e, 1);
    for (let t = e; t < this._pages.length; t++) {
      let n = this._pages[t];
      for (let s15 of n.glyphs) s15.texturePage--;
      n.version++;
    }
  }
  getRasterizedGlyphCombinedChar(e, t, n, s15, o2, r6) {
    return this._getFromCacheMap(this._cacheMapCombined, e, t, n, s15, o2, r6);
  }
  getRasterizedGlyph(e, t, n, s15, o2, r6) {
    return this._getFromCacheMap(this._cacheMap, e, t, n, s15, o2, r6);
  }
  _getFromCacheMap(e, t, n, s15, o2, r6, a) {
    return st2 = e.get(t, n, s15, o2), st2 || (st2 = this._drawToCache(t, n, s15, o2, r6, a), e.set(t, n, s15, o2, st2)), st2;
  }
  _getColorFromAnsiIndex(e) {
    if (e >= this._config.colors.ansi.length) throw new Error("No color found for idx " + e);
    return this._config.colors.ansi[e];
  }
  _getBackgroundColor(e, t, n, s15) {
    if (this._config.allowTransparency) return Z3;
    let o2;
    switch (e) {
      case 16777216:
      case 33554432:
        o2 = this._getColorFromAnsiIndex(t);
        break;
      case 50331648:
        let r6 = he3.toColorRGB(t);
        o2 = X4.toColor(r6[0], r6[1], r6[2]);
        break;
      case 0:
      default:
        n ? o2 = Ue.opaque(this._config.colors.foreground) : o2 = this._config.colors.background;
        break;
    }
    return this._config.allowTransparency || (o2 = Ue.opaque(o2)), o2;
  }
  _getForegroundColor(e, t, n, s15, o2, r6, a, l2, u2, c) {
    let d = this._getMinimumContrastColor(e, t, n, s15, o2, r6, a, u2, l2, c);
    if (d) return d;
    let h2;
    switch (o2) {
      case 16777216:
      case 33554432:
        this._config.drawBoldTextInBrightColors && u2 && r6 < 8 && (r6 += 8), h2 = this._getColorFromAnsiIndex(r6);
        break;
      case 50331648:
        let f = he3.toColorRGB(r6);
        h2 = X4.toColor(f[0], f[1], f[2]);
        break;
      case 0:
      default:
        a ? h2 = this._config.colors.background : h2 = this._config.colors.foreground;
    }
    return this._config.allowTransparency && (h2 = Ue.opaque(h2)), l2 && (h2 = Ue.multiplyOpacity(h2, gn)), h2;
  }
  _resolveBackgroundRgba(e, t, n) {
    switch (e) {
      case 16777216:
      case 33554432:
        return this._getColorFromAnsiIndex(t).rgba;
      case 50331648:
        return t << 8;
      case 0:
      default:
        return n ? this._config.colors.foreground.rgba : this._config.colors.background.rgba;
    }
  }
  _resolveForegroundRgba(e, t, n, s15) {
    switch (e) {
      case 16777216:
      case 33554432:
        return this._config.drawBoldTextInBrightColors && s15 && t < 8 && (t += 8), this._getColorFromAnsiIndex(t).rgba;
      case 50331648:
        return t << 8;
      case 0:
      default:
        return n ? this._config.colors.background.rgba : this._config.colors.foreground.rgba;
    }
  }
  _getMinimumContrastColor(e, t, n, s15, o2, r6, a, l2, u2, c) {
    if (this._config.minimumContrastRatio === 1 || c) return;
    let d = this._getContrastCache(u2), h2 = d.getColor(e, s15);
    if (h2 !== void 0) return h2 || void 0;
    let f = this._resolveBackgroundRgba(t, n, a), I2 = this._resolveForegroundRgba(o2, r6, a, l2), L4 = Te3.ensureContrastRatio(f, I2, this._config.minimumContrastRatio / (u2 ? 2 : 1));
    if (!L4) {
      d.setColor(e, s15, null);
      return;
    }
    let M4 = X4.toColor(L4 >> 24 & 255, L4 >> 16 & 255, L4 >> 8 & 255);
    return d.setColor(e, s15, M4), M4;
  }
  _getContrastCache(e) {
    return e ? this._config.colors.halfContrastCache : this._config.colors.contrastCache;
  }
  _drawToCache(e, t, n, s15, o2, r6) {
    let a = typeof e == "number" ? String.fromCharCode(e) : e;
    r6 && this._tmpCanvas.parentElement !== r6 && (this._tmpCanvas.style.display = "none", r6.append(this._tmpCanvas));
    let l2 = Math.min(this._config.deviceCellWidth * Math.max(a.length, 2) + rt2 * 2, this._config.deviceMaxTextureSize);
    this._tmpCanvas.width < l2 && (this._tmpCanvas.width = l2);
    let u2 = Math.min(this._config.deviceCellHeight + rt2 * 4, this._textureSize);
    if (this._tmpCanvas.height < u2 && (this._tmpCanvas.height = u2), this._tmpCtx.save(), this._workAttributeData.fg = n, this._workAttributeData.bg = t, this._workAttributeData.extended.ext = s15, !!this._workAttributeData.isInvisible()) return An;
    let d = !!this._workAttributeData.isBold(), h2 = !!this._workAttributeData.isInverse(), f = !!this._workAttributeData.isDim(), I2 = !!this._workAttributeData.isItalic(), L4 = !!this._workAttributeData.isUnderline(), M4 = !!this._workAttributeData.isStrikethrough(), q2 = !!this._workAttributeData.isOverline(), S2 = this._workAttributeData.getFgColor(), W2 = this._workAttributeData.getFgColorMode(), E = this._workAttributeData.getBgColor(), y = this._workAttributeData.getBgColorMode();
    if (h2) {
      let x = S2;
      S2 = E, E = x;
      let R3 = W2;
      W2 = y, y = R3;
    }
    let w3 = this._getBackgroundColor(y, E, h2, f);
    this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = w3.css, this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), this._tmpCtx.globalCompositeOperation = "source-over";
    let G4 = d ? this._config.fontWeightBold : this._config.fontWeight, ue4 = I2 ? "italic" : "";
    this._tmpCtx.font = `${ue4} ${G4} ${this._config.fontSize * this._config.devicePixelRatio}px ${this._config.fontFamily}`, this._tmpCtx.textBaseline = St;
    let Se4 = a.length === 1 && Rt(a.charCodeAt(0)), ce4 = a.length === 1 && fn(a.charCodeAt(0)), we4 = this._getForegroundColor(t, y, E, n, W2, S2, h2, f, d, Dt(a.charCodeAt(0)));
    this._tmpCtx.fillStyle = we4.css;
    let A2 = ce4 ? 0 : rt2 * 2, se3 = false;
    this._config.customGlyphs !== false && (se3 = yn(this._tmpCtx, a, A2, A2, this._config.deviceCellWidth, this._config.deviceCellHeight, this._config.fontSize, this._config.devicePixelRatio));
    let v3 = !Se4, p2;
    if (typeof e == "number" ? p2 = this._unicodeService.wcwidth(e) : p2 = this._unicodeService.getStringCellWidth(e), L4) {
      this._tmpCtx.save();
      let x = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 15)), R3 = x % 2 === 1 ? 0.5 : 0;
      if (this._tmpCtx.lineWidth = x, this._workAttributeData.isUnderlineColorDefault()) this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle;
      else if (this._workAttributeData.isUnderlineColorRGB()) v3 = false, this._tmpCtx.strokeStyle = `rgb(${he3.toColorRGB(this._workAttributeData.getUnderlineColor()).join(",")})`;
      else {
        v3 = false;
        let ie4 = this._workAttributeData.getUnderlineColor();
        this._config.drawBoldTextInBrightColors && this._workAttributeData.isBold() && ie4 < 8 && (ie4 += 8), this._tmpCtx.strokeStyle = this._getColorFromAnsiIndex(ie4).css;
      }
      this._tmpCtx.beginPath();
      let $3 = A2, P4 = Math.ceil(A2 + this._config.deviceCharHeight) - R3 - (o2 ? x * 2 : 0), de4 = P4 + x, Re4 = P4 + x * 2, oe = this._workAttributeData.getUnderlineVariantOffset();
      for (let ie4 = 0; ie4 < p2; ie4++) {
        this._tmpCtx.save();
        let N3 = $3 + ie4 * this._config.deviceCellWidth, ne3 = $3 + (ie4 + 1) * this._config.deviceCellWidth, di = N3 + this._config.deviceCellWidth / 2;
        switch (this._workAttributeData.extended.underlineStyle) {
          case 2:
            this._tmpCtx.moveTo(N3, P4), this._tmpCtx.lineTo(ne3, P4), this._tmpCtx.moveTo(N3, Re4), this._tmpCtx.lineTo(ne3, Re4);
            break;
          case 3:
            let ft2 = x <= 1 ? Re4 : Math.ceil(A2 + this._config.deviceCharHeight - x / 2) - R3, mt2 = x <= 1 ? P4 : Math.ceil(A2 + this._config.deviceCharHeight + x / 2) - R3, qi2 = new Path2D();
            qi2.rect(N3, P4, this._config.deviceCellWidth, Re4 - P4), this._tmpCtx.clip(qi2), this._tmpCtx.moveTo(N3 - this._config.deviceCellWidth / 2, de4), this._tmpCtx.bezierCurveTo(N3 - this._config.deviceCellWidth / 2, mt2, N3, mt2, N3, de4), this._tmpCtx.bezierCurveTo(N3, ft2, di, ft2, di, de4), this._tmpCtx.bezierCurveTo(di, mt2, ne3, mt2, ne3, de4), this._tmpCtx.bezierCurveTo(ne3, ft2, ne3 + this._config.deviceCellWidth / 2, ft2, ne3 + this._config.deviceCellWidth / 2, de4);
            break;
          case 4:
            let _t2 = oe === 0 ? 0 : oe >= x ? x * 2 - oe : x - oe;
            !(oe >= x) === false || _t2 === 0 ? (this._tmpCtx.setLineDash([Math.round(x), Math.round(x)]), this._tmpCtx.moveTo(N3 + _t2, P4), this._tmpCtx.lineTo(ne3, P4)) : (this._tmpCtx.setLineDash([Math.round(x), Math.round(x)]), this._tmpCtx.moveTo(N3, P4), this._tmpCtx.lineTo(N3 + _t2, P4), this._tmpCtx.moveTo(N3 + _t2 + x, P4), this._tmpCtx.lineTo(ne3, P4)), oe = bn(ne3 - N3, x, oe);
            break;
          case 5:
            let Er = 0.6, yr2 = 0.3, hi2 = ne3 - N3, ji2 = Math.floor(Er * hi2), Xi2 = Math.floor(yr2 * hi2), Ir2 = hi2 - ji2 - Xi2;
            this._tmpCtx.setLineDash([ji2, Xi2, Ir2]), this._tmpCtx.moveTo(N3, P4), this._tmpCtx.lineTo(ne3, P4);
            break;
          case 1:
          default:
            this._tmpCtx.moveTo(N3, P4), this._tmpCtx.lineTo(ne3, P4);
            break;
        }
        this._tmpCtx.stroke(), this._tmpCtx.restore();
      }
      if (this._tmpCtx.restore(), !se3 && this._config.fontSize >= 12 && !this._config.allowTransparency && a !== " ") {
        this._tmpCtx.save(), this._tmpCtx.textBaseline = "alphabetic";
        let ie4 = this._tmpCtx.measureText(a);
        if (this._tmpCtx.restore(), "actualBoundingBoxDescent" in ie4 && ie4.actualBoundingBoxDescent > 0) {
          this._tmpCtx.save();
          let N3 = new Path2D();
          N3.rect($3, P4 - Math.ceil(x / 2), this._config.deviceCellWidth * p2, Re4 - P4 + Math.ceil(x / 2)), this._tmpCtx.clip(N3), this._tmpCtx.lineWidth = this._config.devicePixelRatio * 3, this._tmpCtx.strokeStyle = w3.css, this._tmpCtx.strokeText(a, A2, A2 + this._config.deviceCharHeight), this._tmpCtx.restore();
        }
      }
    }
    if (q2) {
      let x = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 15)), R3 = x % 2 === 1 ? 0.5 : 0;
      this._tmpCtx.lineWidth = x, this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle, this._tmpCtx.beginPath(), this._tmpCtx.moveTo(A2, A2 + R3), this._tmpCtx.lineTo(A2 + this._config.deviceCharWidth * p2, A2 + R3), this._tmpCtx.stroke();
    }
    if (se3 || this._tmpCtx.fillText(a, A2, A2 + this._config.deviceCharHeight), a === "_" && !this._config.allowTransparency) {
      let x = Di(this._tmpCtx.getImageData(A2, A2, this._config.deviceCellWidth, this._config.deviceCellHeight), w3, we4, v3);
      if (x) for (let R3 = 1; R3 <= 5 && (this._tmpCtx.save(), this._tmpCtx.fillStyle = w3.css, this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), this._tmpCtx.restore(), this._tmpCtx.fillText(a, A2, A2 + this._config.deviceCharHeight - R3), x = Di(this._tmpCtx.getImageData(A2, A2, this._config.deviceCellWidth, this._config.deviceCellHeight), w3, we4, v3), !!x); R3++) ;
    }
    if (M4) {
      let x = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 10)), R3 = this._tmpCtx.lineWidth % 2 === 1 ? 0.5 : 0;
      this._tmpCtx.lineWidth = x, this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle, this._tmpCtx.beginPath(), this._tmpCtx.moveTo(A2, A2 + Math.floor(this._config.deviceCharHeight / 2) - R3), this._tmpCtx.lineTo(A2 + this._config.deviceCharWidth * p2, A2 + Math.floor(this._config.deviceCharHeight / 2) - R3), this._tmpCtx.stroke();
    }
    this._tmpCtx.restore();
    let g2 = this._tmpCtx.getImageData(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), b2;
    if (this._config.allowTransparency ? b2 = Jr(g2) : b2 = Di(g2, w3, we4, v3), b2) return An;
    let m2 = this._findGlyphBoundingBox(g2, this._workBoundingBox, l2, ce4, se3, A2), _4, T2;
    for (; ; ) {
      if (this._activePages.length === 0) {
        let x = this._createNewPage();
        _4 = x, T2 = x.currentRow, T2.height = m2.size.y;
        break;
      }
      _4 = this._activePages[this._activePages.length - 1], T2 = _4.currentRow;
      for (let x of this._activePages) m2.size.y <= x.currentRow.height && (_4 = x, T2 = x.currentRow);
      for (let x = this._activePages.length - 1; x >= 0; x--) for (let R3 of this._activePages[x].fixedRows) R3.height <= T2.height && m2.size.y <= R3.height && (_4 = this._activePages[x], T2 = R3);
      if (m2.size.x > this._textureSize) {
        this._overflowSizePage || (this._overflowSizePage = new ot2(this._document, this._config.deviceMaxTextureSize), this.pages.push(this._overflowSizePage), this._requestClearModel = true, this._onAddTextureAtlasCanvas.fire(this._overflowSizePage.canvas)), _4 = this._overflowSizePage, T2 = this._overflowSizePage.currentRow, T2.x + m2.size.x >= _4.canvas.width && (T2.x = 0, T2.y += T2.height, T2.height = 0);
        break;
      }
      if (T2.y + m2.size.y >= _4.canvas.height || T2.height > m2.size.y + 2) {
        let x = false;
        if (_4.currentRow.y + _4.currentRow.height + m2.size.y >= _4.canvas.height) {
          let R3;
          for (let $3 of this._activePages) if ($3.currentRow.y + $3.currentRow.height + m2.size.y < $3.canvas.height) {
            R3 = $3;
            break;
          }
          if (R3) _4 = R3;
          else if (i6.maxAtlasPages && this._pages.length >= i6.maxAtlasPages && T2.y + m2.size.y <= _4.canvas.height && T2.height >= m2.size.y && T2.x + m2.size.x <= _4.canvas.width) x = true;
          else {
            let $3 = this._createNewPage();
            _4 = $3, T2 = $3.currentRow, T2.height = m2.size.y, x = true;
          }
        }
        x || (_4.currentRow.height > 0 && _4.fixedRows.push(_4.currentRow), T2 = { x: 0, y: _4.currentRow.y + _4.currentRow.height, height: m2.size.y }, _4.fixedRows.push(T2), _4.currentRow = { x: 0, y: T2.y + T2.height, height: 0 });
      }
      if (T2.x + m2.size.x <= _4.canvas.width) break;
      T2 === _4.currentRow ? (T2.x = 0, T2.y += T2.height, T2.height = 0) : _4.fixedRows.splice(_4.fixedRows.indexOf(T2), 1);
    }
    return m2.texturePage = this._pages.indexOf(_4), m2.texturePosition.x = T2.x, m2.texturePosition.y = T2.y, m2.texturePositionClipSpace.x = T2.x / _4.canvas.width, m2.texturePositionClipSpace.y = T2.y / _4.canvas.height, m2.sizeClipSpace.x /= _4.canvas.width, m2.sizeClipSpace.y /= _4.canvas.height, T2.height = Math.max(T2.height, m2.size.y), T2.x += m2.size.x, _4.ctx.putImageData(g2, m2.texturePosition.x - this._workBoundingBox.left, m2.texturePosition.y - this._workBoundingBox.top, this._workBoundingBox.left, this._workBoundingBox.top, m2.size.x, m2.size.y), _4.addGlyph(m2), _4.version++, m2;
  }
  _findGlyphBoundingBox(e, t, n, s15, o2, r6) {
    t.top = 0;
    let a = s15 ? this._config.deviceCellHeight : this._tmpCanvas.height, l2 = s15 ? this._config.deviceCellWidth : n, u2 = false;
    for (let c = 0; c < a; c++) {
      for (let d = 0; d < l2; d++) {
        let h2 = c * this._tmpCanvas.width * 4 + d * 4 + 3;
        if (e.data[h2] !== 0) {
          t.top = c, u2 = true;
          break;
        }
      }
      if (u2) break;
    }
    t.left = 0, u2 = false;
    for (let c = 0; c < r6 + l2; c++) {
      for (let d = 0; d < a; d++) {
        let h2 = d * this._tmpCanvas.width * 4 + c * 4 + 3;
        if (e.data[h2] !== 0) {
          t.left = c, u2 = true;
          break;
        }
      }
      if (u2) break;
    }
    t.right = l2, u2 = false;
    for (let c = r6 + l2 - 1; c >= r6; c--) {
      for (let d = 0; d < a; d++) {
        let h2 = d * this._tmpCanvas.width * 4 + c * 4 + 3;
        if (e.data[h2] !== 0) {
          t.right = c, u2 = true;
          break;
        }
      }
      if (u2) break;
    }
    t.bottom = a, u2 = false;
    for (let c = a - 1; c >= 0; c--) {
      for (let d = 0; d < l2; d++) {
        let h2 = c * this._tmpCanvas.width * 4 + d * 4 + 3;
        if (e.data[h2] !== 0) {
          t.bottom = c, u2 = true;
          break;
        }
      }
      if (u2) break;
    }
    return { texturePage: 0, texturePosition: { x: 0, y: 0 }, texturePositionClipSpace: { x: 0, y: 0 }, size: { x: t.right - t.left + 1, y: t.bottom - t.top + 1 }, sizeClipSpace: { x: t.right - t.left + 1, y: t.bottom - t.top + 1 }, offset: { x: -t.left + r6 + (s15 || o2 ? Math.floor((this._config.deviceCellWidth - this._config.deviceCharWidth) / 2) : 0), y: -t.top + r6 + (s15 || o2 ? this._config.lineHeight === 1 ? 0 : Math.round((this._config.deviceCellHeight - this._config.deviceCharHeight) / 2) : 0) } };
  }
};
var ot2 = class {
  constructor(e, t, n) {
    this._usedPixels = 0;
    this._glyphs = [];
    this.version = 0;
    this.currentRow = { x: 0, y: 0, height: 0 };
    this.fixedRows = [];
    if (n) for (let s15 of n) this._glyphs.push(...s15.glyphs), this._usedPixels += s15._usedPixels;
    this.canvas = Sn(e, t, t), this.ctx = F(this.canvas.getContext("2d", { alpha: true }));
  }
  get percentageUsed() {
    return this._usedPixels / (this.canvas.width * this.canvas.height);
  }
  get glyphs() {
    return this._glyphs;
  }
  addGlyph(e) {
    this._glyphs.push(e), this._usedPixels += e.size.x * e.size.y;
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.currentRow.x = 0, this.currentRow.y = 0, this.currentRow.height = 0, this.fixedRows.length = 0, this.version++;
  }
};
function Di(i8, e, t, n) {
  let s15 = e.rgba >>> 24, o2 = e.rgba >>> 16 & 255, r6 = e.rgba >>> 8 & 255, a = t.rgba >>> 24, l2 = t.rgba >>> 16 & 255, u2 = t.rgba >>> 8 & 255, c = Math.floor((Math.abs(s15 - a) + Math.abs(o2 - l2) + Math.abs(r6 - u2)) / 12), d = true;
  for (let h2 = 0; h2 < i8.data.length; h2 += 4) i8.data[h2] === s15 && i8.data[h2 + 1] === o2 && i8.data[h2 + 2] === r6 || n && Math.abs(i8.data[h2] - s15) + Math.abs(i8.data[h2 + 1] - o2) + Math.abs(i8.data[h2 + 2] - r6) < c ? i8.data[h2 + 3] = 0 : d = false;
  return d;
}
function Jr(i8) {
  for (let e = 0; e < i8.data.length; e += 4) if (i8.data[e + 3] > 0) return false;
  return true;
}
function Sn(i8, e, t) {
  let n = i8.createElement("canvas");
  return n.width = e, n.height = t, n;
}
function On(i8, e, t, n, s15, o2, r6, a) {
  let l2 = { foreground: o2.foreground, background: o2.background, cursor: Z3, cursorAccent: Z3, selectionForeground: Z3, selectionBackgroundTransparent: Z3, selectionBackgroundOpaque: Z3, selectionInactiveBackgroundTransparent: Z3, selectionInactiveBackgroundOpaque: Z3, overviewRulerBorder: Z3, scrollbarSliderBackground: Z3, scrollbarSliderHoverBackground: Z3, scrollbarSliderActiveBackground: Z3, ansi: o2.ansi.slice(), contrastCache: o2.contrastCache, halfContrastCache: o2.halfContrastCache };
  return { customGlyphs: s15.customGlyphs, devicePixelRatio: r6, deviceMaxTextureSize: a, letterSpacing: s15.letterSpacing, lineHeight: s15.lineHeight, deviceCellWidth: i8, deviceCellHeight: e, deviceCharWidth: t, deviceCharHeight: n, fontFamily: s15.fontFamily, fontSize: s15.fontSize, fontWeight: s15.fontWeight, fontWeightBold: s15.fontWeightBold, allowTransparency: s15.allowTransparency, drawBoldTextInBrightColors: s15.drawBoldTextInBrightColors, minimumContrastRatio: s15.minimumContrastRatio, colors: l2 };
}
function Mi(i8, e) {
  for (let t = 0; t < i8.colors.ansi.length; t++) if (i8.colors.ansi[t].rgba !== e.colors.ansi[t].rgba) return false;
  return i8.devicePixelRatio === e.devicePixelRatio && i8.customGlyphs === e.customGlyphs && i8.lineHeight === e.lineHeight && i8.letterSpacing === e.letterSpacing && i8.fontFamily === e.fontFamily && i8.fontSize === e.fontSize && i8.fontWeight === e.fontWeight && i8.fontWeightBold === e.fontWeightBold && i8.allowTransparency === e.allowTransparency && i8.deviceCharWidth === e.deviceCharWidth && i8.deviceCharHeight === e.deviceCharHeight && i8.drawBoldTextInBrightColors === e.drawBoldTextInBrightColors && i8.minimumContrastRatio === e.minimumContrastRatio && i8.colors.foreground.rgba === e.colors.foreground.rgba && i8.colors.background.rgba === e.colors.background.rgba;
}
function Fn(i8) {
  return (i8 & 50331648) === 16777216 || (i8 & 50331648) === 33554432;
}
var le2 = [];
function Nt(i8, e, t, n, s15, o2, r6, a, l2) {
  let u2 = On(n, s15, o2, r6, e, t, a, l2);
  for (let h2 = 0; h2 < le2.length; h2++) {
    let f = le2[h2], I2 = f.ownedBy.indexOf(i8);
    if (I2 >= 0) {
      if (Mi(f.config, u2)) return f.atlas;
      f.ownedBy.length === 1 ? (f.atlas.dispose(), le2.splice(h2, 1)) : f.ownedBy.splice(I2, 1);
      break;
    }
  }
  for (let h2 = 0; h2 < le2.length; h2++) {
    let f = le2[h2];
    if (Mi(f.config, u2)) return f.ownedBy.push(i8), f.atlas;
  }
  let c = i8._core, d = { atlas: new ae(document, u2, c.unicodeService), config: u2, ownedBy: [i8] };
  return le2.push(d), d.atlas;
}
function Ai(i8) {
  for (let e = 0; e < le2.length; e++) {
    let t = le2[e].ownedBy.indexOf(i8);
    if (t !== -1) {
      le2[e].ownedBy.length === 1 ? (le2[e].atlas.dispose(), le2.splice(e, 1)) : le2[e].ownedBy.splice(t, 1);
      break;
    }
  }
}
var Ut = 600;
var Ht = class {
  constructor(e, t) {
    this._renderCallback = e;
    this._coreBrowserService = t;
    this.isCursorVisible = true, this._coreBrowserService.isFocused && this._restartInterval();
  }
  get isPaused() {
    return !(this._blinkStartTimeout || this._blinkInterval);
  }
  dispose() {
    this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (this._coreBrowserService.window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
  }
  restartBlinkAnimation() {
    this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = true, this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
      this._renderCallback(), this._animationFrame = void 0;
    })));
  }
  _restartInterval(e = Ut) {
    this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout = this._coreBrowserService.window.setTimeout(() => {
      if (this._animationTimeRestarted) {
        let t = Ut - (Date.now() - this._animationTimeRestarted);
        if (this._animationTimeRestarted = void 0, t > 0) {
          this._restartInterval(t);
          return;
        }
      }
      this.isCursorVisible = false, this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
        this._renderCallback(), this._animationFrame = void 0;
      }), this._blinkInterval = this._coreBrowserService.window.setInterval(() => {
        if (this._animationTimeRestarted) {
          let t = Ut - (Date.now() - this._animationTimeRestarted);
          this._animationTimeRestarted = void 0, this._restartInterval(t);
          return;
        }
        this.isCursorVisible = !this.isCursorVisible, this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
          this._renderCallback(), this._animationFrame = void 0;
        });
      }, Ut);
    }, e);
  }
  pause() {
    this.isCursorVisible = true, this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (this._coreBrowserService.window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
  }
  resume() {
    this.pause(), this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation();
  }
};
function Si(i8, e, t) {
  let n = new e.ResizeObserver((s15) => {
    let o2 = s15.find((l2) => l2.target === i8);
    if (!o2) return;
    if (!("devicePixelContentBoxSize" in o2)) {
      n?.disconnect(), n = void 0;
      return;
    }
    let r6 = o2.devicePixelContentBoxSize[0].inlineSize, a = o2.devicePixelContentBoxSize[0].blockSize;
    r6 > 0 && a > 0 && t(r6, a);
  });
  try {
    n.observe(i8, { box: ["device-pixel-content-box"] });
  } catch {
    n.disconnect(), n = void 0;
  }
  return O2(() => n?.disconnect());
}
function kn(i8) {
  return i8 > 65535 ? (i8 -= 65536, String.fromCharCode((i8 >> 10) + 55296) + String.fromCharCode(i8 % 1024 + 56320)) : String.fromCharCode(i8);
}
var at2 = class i7 extends he3 {
  constructor() {
    super(...arguments);
    this.content = 0;
    this.fg = 0;
    this.bg = 0;
    this.extended = new it2();
    this.combinedData = "";
  }
  static fromCharData(t) {
    let n = new i7();
    return n.setFromCharData(t), n;
  }
  isCombined() {
    return this.content & 2097152;
  }
  getWidth() {
    return this.content >> 22;
  }
  getChars() {
    return this.content & 2097152 ? this.combinedData : this.content & 2097151 ? kn(this.content & 2097151) : "";
  }
  getCode() {
    return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : this.content & 2097151;
  }
  setFromCharData(t) {
    this.fg = t[0], this.bg = 0;
    let n = false;
    if (t[1].length > 2) n = true;
    else if (t[1].length === 2) {
      let s15 = t[1].charCodeAt(0);
      if (55296 <= s15 && s15 <= 56319) {
        let o2 = t[1].charCodeAt(1);
        56320 <= o2 && o2 <= 57343 ? this.content = (s15 - 55296) * 1024 + o2 - 56320 + 65536 | t[2] << 22 : n = true;
      } else n = true;
    } else this.content = t[1].charCodeAt(0) | t[2] << 22;
    n && (this.combinedData = t[1], this.content = 2097152 | t[2] << 22);
  }
  getAsCharData() {
    return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
  }
};
var Gt = new Float32Array([2, 0, 0, 0, 0, -2, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1]);
function $t(i8, e, t) {
  let n = F(i8.createProgram());
  if (i8.attachShader(n, F(Pn(i8, i8.VERTEX_SHADER, e))), i8.attachShader(n, F(Pn(i8, i8.FRAGMENT_SHADER, t))), i8.linkProgram(n), i8.getProgramParameter(n, i8.LINK_STATUS)) return n;
  console.error(i8.getProgramInfoLog(n)), i8.deleteProgram(n);
}
function Pn(i8, e, t) {
  let n = F(i8.createShader(e));
  if (i8.shaderSource(n, t), i8.compileShader(n), i8.getShaderParameter(n, i8.COMPILE_STATUS)) return n;
  console.error(i8.getShaderInfoLog(n)), i8.deleteShader(n);
}
function Bn(i8, e) {
  let t = Math.min(i8.length * 2, e), n = new Float32Array(t);
  for (let s15 = 0; s15 < i8.length; s15++) n[s15] = i8[s15];
  return n;
}
var Wt = class {
  constructor(e) {
    this.texture = e, this.version = -1;
  }
};
var is = `#version 300 es
layout (location = 0) in vec2 a_unitquad;
layout (location = 1) in vec2 a_cellpos;
layout (location = 2) in vec2 a_offset;
layout (location = 3) in vec2 a_size;
layout (location = 4) in float a_texpage;
layout (location = 5) in vec2 a_texcoord;
layout (location = 6) in vec2 a_texsize;

uniform mat4 u_projection;
uniform vec2 u_resolution;

out vec2 v_texcoord;
flat out int v_texpage;

void main() {
  vec2 zeroToOne = (a_offset / u_resolution) + a_cellpos + (a_unitquad * a_size);
  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);
  v_texpage = int(a_texpage);
  v_texcoord = a_texcoord + a_unitquad * a_texsize;
}`;
function ns(i8) {
  let e = "";
  for (let t = 1; t < i8; t++) e += ` else if (v_texpage == ${t}) { outColor = texture(u_texture[${t}], v_texcoord); }`;
  return `#version 300 es
precision lowp float;

in vec2 v_texcoord;
flat in int v_texpage;

uniform sampler2D u_texture[${i8}];

out vec4 outColor;

void main() {
  if (v_texpage == 0) {
    outColor = texture(u_texture[0], v_texcoord);
  } ${e}
}`;
}
var De3 = 11;
var Ve2 = De3 * Float32Array.BYTES_PER_ELEMENT;
var rs = 2;
var H3 = 0;
var k4;
var Fi = 0;
var lt2 = 0;
var Kt = class extends B3 {
  constructor(t, n, s15, o2) {
    super();
    this._terminal = t;
    this._gl = n;
    this._dimensions = s15;
    this._optionsService = o2;
    this._activeBuffer = 0;
    this._vertices = { count: 0, attributes: new Float32Array(0), attributesBuffers: [new Float32Array(0), new Float32Array(0)] };
    let r6 = this._gl;
    ae.maxAtlasPages === void 0 && (ae.maxAtlasPages = Math.min(32, F(r6.getParameter(r6.MAX_TEXTURE_IMAGE_UNITS))), ae.maxTextureSize = F(r6.getParameter(r6.MAX_TEXTURE_SIZE))), this._program = F($t(r6, is, ns(ae.maxAtlasPages))), this._register(O2(() => r6.deleteProgram(this._program))), this._projectionLocation = F(r6.getUniformLocation(this._program, "u_projection")), this._resolutionLocation = F(r6.getUniformLocation(this._program, "u_resolution")), this._textureLocation = F(r6.getUniformLocation(this._program, "u_texture")), this._vertexArrayObject = r6.createVertexArray(), r6.bindVertexArray(this._vertexArrayObject);
    let a = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), l2 = r6.createBuffer();
    this._register(O2(() => r6.deleteBuffer(l2))), r6.bindBuffer(r6.ARRAY_BUFFER, l2), r6.bufferData(r6.ARRAY_BUFFER, a, r6.STATIC_DRAW), r6.enableVertexAttribArray(0), r6.vertexAttribPointer(0, 2, this._gl.FLOAT, false, 0, 0);
    let u2 = new Uint8Array([0, 1, 2, 3]), c = r6.createBuffer();
    this._register(O2(() => r6.deleteBuffer(c))), r6.bindBuffer(r6.ELEMENT_ARRAY_BUFFER, c), r6.bufferData(r6.ELEMENT_ARRAY_BUFFER, u2, r6.STATIC_DRAW), this._attributesBuffer = F(r6.createBuffer()), this._register(O2(() => r6.deleteBuffer(this._attributesBuffer))), r6.bindBuffer(r6.ARRAY_BUFFER, this._attributesBuffer), r6.enableVertexAttribArray(2), r6.vertexAttribPointer(2, 2, r6.FLOAT, false, Ve2, 0), r6.vertexAttribDivisor(2, 1), r6.enableVertexAttribArray(3), r6.vertexAttribPointer(3, 2, r6.FLOAT, false, Ve2, 2 * Float32Array.BYTES_PER_ELEMENT), r6.vertexAttribDivisor(3, 1), r6.enableVertexAttribArray(4), r6.vertexAttribPointer(4, 1, r6.FLOAT, false, Ve2, 4 * Float32Array.BYTES_PER_ELEMENT), r6.vertexAttribDivisor(4, 1), r6.enableVertexAttribArray(5), r6.vertexAttribPointer(5, 2, r6.FLOAT, false, Ve2, 5 * Float32Array.BYTES_PER_ELEMENT), r6.vertexAttribDivisor(5, 1), r6.enableVertexAttribArray(6), r6.vertexAttribPointer(6, 2, r6.FLOAT, false, Ve2, 7 * Float32Array.BYTES_PER_ELEMENT), r6.vertexAttribDivisor(6, 1), r6.enableVertexAttribArray(1), r6.vertexAttribPointer(1, 2, r6.FLOAT, false, Ve2, 9 * Float32Array.BYTES_PER_ELEMENT), r6.vertexAttribDivisor(1, 1), r6.useProgram(this._program);
    let d = new Int32Array(ae.maxAtlasPages);
    for (let h2 = 0; h2 < ae.maxAtlasPages; h2++) d[h2] = h2;
    r6.uniform1iv(this._textureLocation, d), r6.uniformMatrix4fv(this._projectionLocation, false, Gt), this._atlasTextures = [];
    for (let h2 = 0; h2 < ae.maxAtlasPages; h2++) {
      let f = new Wt(F(r6.createTexture()));
      this._register(O2(() => r6.deleteTexture(f.texture))), r6.activeTexture(r6.TEXTURE0 + h2), r6.bindTexture(r6.TEXTURE_2D, f.texture), r6.texParameteri(r6.TEXTURE_2D, r6.TEXTURE_WRAP_S, r6.CLAMP_TO_EDGE), r6.texParameteri(r6.TEXTURE_2D, r6.TEXTURE_WRAP_T, r6.CLAMP_TO_EDGE), r6.texImage2D(r6.TEXTURE_2D, 0, r6.RGBA, 1, 1, 0, r6.RGBA, r6.UNSIGNED_BYTE, new Uint8Array([255, 0, 0, 255])), this._atlasTextures[h2] = f;
    }
    r6.enable(r6.BLEND), r6.blendFunc(r6.SRC_ALPHA, r6.ONE_MINUS_SRC_ALPHA), this.handleResize();
  }
  beginFrame() {
    return this._atlas ? this._atlas.beginFrame() : true;
  }
  updateCell(t, n, s15, o2, r6, a, l2, u2, c) {
    this._updateCell(this._vertices.attributes, t, n, s15, o2, r6, a, l2, u2, c);
  }
  _updateCell(t, n, s15, o2, r6, a, l2, u2, c, d) {
    if (H3 = (s15 * this._terminal.cols + n) * De3, o2 === 0 || o2 === void 0) {
      t.fill(0, H3, H3 + De3 - 1 - rs);
      return;
    }
    this._atlas && (u2 && u2.length > 1 ? k4 = this._atlas.getRasterizedGlyphCombinedChar(u2, r6, a, l2, false, this._terminal.element) : k4 = this._atlas.getRasterizedGlyph(o2, r6, a, l2, false, this._terminal.element), Fi = Math.floor((this._dimensions.device.cell.width - this._dimensions.device.char.width) / 2), r6 !== d && k4.offset.x > Fi ? (lt2 = k4.offset.x - Fi, t[H3] = -(k4.offset.x - lt2) + this._dimensions.device.char.left, t[H3 + 1] = -k4.offset.y + this._dimensions.device.char.top, t[H3 + 2] = (k4.size.x - lt2) / this._dimensions.device.canvas.width, t[H3 + 3] = k4.size.y / this._dimensions.device.canvas.height, t[H3 + 4] = k4.texturePage, t[H3 + 5] = k4.texturePositionClipSpace.x + lt2 / this._atlas.pages[k4.texturePage].canvas.width, t[H3 + 6] = k4.texturePositionClipSpace.y, t[H3 + 7] = k4.sizeClipSpace.x - lt2 / this._atlas.pages[k4.texturePage].canvas.width, t[H3 + 8] = k4.sizeClipSpace.y) : (t[H3] = -k4.offset.x + this._dimensions.device.char.left, t[H3 + 1] = -k4.offset.y + this._dimensions.device.char.top, t[H3 + 2] = k4.size.x / this._dimensions.device.canvas.width, t[H3 + 3] = k4.size.y / this._dimensions.device.canvas.height, t[H3 + 4] = k4.texturePage, t[H3 + 5] = k4.texturePositionClipSpace.x, t[H3 + 6] = k4.texturePositionClipSpace.y, t[H3 + 7] = k4.sizeClipSpace.x, t[H3 + 8] = k4.sizeClipSpace.y), this._optionsService.rawOptions.rescaleOverlappingGlyphs && mn(o2, c, k4.size.x, this._dimensions.device.cell.width) && (t[H3 + 2] = (this._dimensions.device.cell.width - 1) / this._dimensions.device.canvas.width));
  }
  clear() {
    let t = this._terminal, n = t.cols * t.rows * De3;
    this._vertices.count !== n ? this._vertices.attributes = new Float32Array(n) : this._vertices.attributes.fill(0);
    let s15 = 0;
    for (; s15 < this._vertices.attributesBuffers.length; s15++) this._vertices.count !== n ? this._vertices.attributesBuffers[s15] = new Float32Array(n) : this._vertices.attributesBuffers[s15].fill(0);
    this._vertices.count = n, s15 = 0;
    for (let o2 = 0; o2 < t.rows; o2++) for (let r6 = 0; r6 < t.cols; r6++) this._vertices.attributes[s15 + 9] = r6 / t.cols, this._vertices.attributes[s15 + 10] = o2 / t.rows, s15 += De3;
  }
  handleResize() {
    let t = this._gl;
    t.useProgram(this._program), t.viewport(0, 0, t.canvas.width, t.canvas.height), t.uniform2f(this._resolutionLocation, t.canvas.width, t.canvas.height), this.clear();
  }
  render(t) {
    if (!this._atlas) return;
    let n = this._gl;
    n.useProgram(this._program), n.bindVertexArray(this._vertexArrayObject), this._activeBuffer = (this._activeBuffer + 1) % 2;
    let s15 = this._vertices.attributesBuffers[this._activeBuffer], o2 = 0;
    for (let r6 = 0; r6 < t.lineLengths.length; r6++) {
      let a = r6 * this._terminal.cols * De3, l2 = this._vertices.attributes.subarray(a, a + t.lineLengths[r6] * De3);
      s15.set(l2, o2), o2 += l2.length;
    }
    n.bindBuffer(n.ARRAY_BUFFER, this._attributesBuffer), n.bufferData(n.ARRAY_BUFFER, s15.subarray(0, o2), n.STREAM_DRAW);
    for (let r6 = 0; r6 < this._atlas.pages.length; r6++) this._atlas.pages[r6].version !== this._atlasTextures[r6].version && this._bindAtlasPageTexture(n, this._atlas, r6);
    n.drawElementsInstanced(n.TRIANGLE_STRIP, 4, n.UNSIGNED_BYTE, 0, o2 / De3);
  }
  setAtlas(t) {
    this._atlas = t;
    for (let n of this._atlasTextures) n.version = -1;
  }
  _bindAtlasPageTexture(t, n, s15) {
    t.activeTexture(t.TEXTURE0 + s15), t.bindTexture(t.TEXTURE_2D, this._atlasTextures[s15].texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, n.pages[s15].canvas), t.generateMipmap(t.TEXTURE_2D), this._atlasTextures[s15].version = n.pages[s15].version;
  }
  setDimensions(t) {
    this._dimensions = t;
  }
};
var ki = class {
  constructor() {
    this.clear();
  }
  clear() {
    this.hasSelection = false, this.columnSelectMode = false, this.viewportStartRow = 0, this.viewportEndRow = 0, this.viewportCappedStartRow = 0, this.viewportCappedEndRow = 0, this.startCol = 0, this.endCol = 0, this.selectionStart = void 0, this.selectionEnd = void 0;
  }
  update(e, t, n, s15 = false) {
    if (this.selectionStart = t, this.selectionEnd = n, !t || !n || t[0] === n[0] && t[1] === n[1]) {
      this.clear();
      return;
    }
    let o2 = e.buffers.active.ydisp, r6 = t[1] - o2, a = n[1] - o2, l2 = Math.max(r6, 0), u2 = Math.min(a, e.rows - 1);
    if (l2 >= e.rows || u2 < 0) {
      this.clear();
      return;
    }
    this.hasSelection = true, this.columnSelectMode = s15, this.viewportStartRow = r6, this.viewportEndRow = a, this.viewportCappedStartRow = l2, this.viewportCappedEndRow = u2, this.startCol = t[0], this.endCol = n[0];
  }
  isCellSelected(e, t, n) {
    return this.hasSelection ? (n -= e.buffer.active.viewportY, this.columnSelectMode ? this.startCol <= this.endCol ? t >= this.startCol && n >= this.viewportCappedStartRow && t < this.endCol && n <= this.viewportCappedEndRow : t < this.startCol && n >= this.viewportCappedStartRow && t >= this.endCol && n <= this.viewportCappedEndRow : n > this.viewportStartRow && n < this.viewportEndRow || this.viewportStartRow === this.viewportEndRow && n === this.viewportStartRow && t >= this.startCol && t < this.endCol || this.viewportStartRow < this.viewportEndRow && n === this.viewportEndRow && t < this.endCol || this.viewportStartRow < this.viewportEndRow && n === this.viewportStartRow && t >= this.startCol) : false;
  }
};
function Nn() {
  return new ki();
}
var Ce2 = 4;
var ze = 1;
var qe2 = 2;
var Ct = 3;
var Un = 2147483648;
var Vt = class {
  constructor() {
    this.cells = new Uint32Array(0), this.lineLengths = new Uint32Array(0), this.selection = Nn();
  }
  resize(e, t) {
    let n = e * t * Ce2;
    n !== this.cells.length && (this.cells = new Uint32Array(n), this.lineLengths = new Uint32Array(t));
  }
  clear() {
    this.cells.fill(0, 0), this.lineLengths.fill(0, 0);
  }
};
var ss = `#version 300 es
layout (location = 0) in vec2 a_position;
layout (location = 1) in vec2 a_size;
layout (location = 2) in vec4 a_color;
layout (location = 3) in vec2 a_unitquad;

uniform mat4 u_projection;

out vec4 v_color;

void main() {
  vec2 zeroToOne = a_position + (a_unitquad * a_size);
  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);
  v_color = a_color;
}`;
var os = `#version 300 es
precision lowp float;

in vec4 v_color;

out vec4 outColor;

void main() {
  outColor = v_color;
}`;
var Ee3 = 8;
var Pi = Ee3 * Float32Array.BYTES_PER_ELEMENT;
var as = 20 * Ee3;
var zt = class {
  constructor() {
    this.attributes = new Float32Array(as), this.count = 0;
  }
};
var xe2 = 0;
var Hn = 0;
var Wn = 0;
var Gn = 0;
var $n = 0;
var Kn = 0;
var Vn = 0;
var qt = class extends B3 {
  constructor(t, n, s15, o2) {
    super();
    this._terminal = t;
    this._gl = n;
    this._dimensions = s15;
    this._themeService = o2;
    this._vertices = new zt();
    this._verticesCursor = new zt();
    let r6 = this._gl;
    this._program = F($t(r6, ss, os)), this._register(O2(() => r6.deleteProgram(this._program))), this._projectionLocation = F(r6.getUniformLocation(this._program, "u_projection")), this._vertexArrayObject = r6.createVertexArray(), r6.bindVertexArray(this._vertexArrayObject);
    let a = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), l2 = r6.createBuffer();
    this._register(O2(() => r6.deleteBuffer(l2))), r6.bindBuffer(r6.ARRAY_BUFFER, l2), r6.bufferData(r6.ARRAY_BUFFER, a, r6.STATIC_DRAW), r6.enableVertexAttribArray(3), r6.vertexAttribPointer(3, 2, this._gl.FLOAT, false, 0, 0);
    let u2 = new Uint8Array([0, 1, 2, 3]), c = r6.createBuffer();
    this._register(O2(() => r6.deleteBuffer(c))), r6.bindBuffer(r6.ELEMENT_ARRAY_BUFFER, c), r6.bufferData(r6.ELEMENT_ARRAY_BUFFER, u2, r6.STATIC_DRAW), this._attributesBuffer = F(r6.createBuffer()), this._register(O2(() => r6.deleteBuffer(this._attributesBuffer))), r6.bindBuffer(r6.ARRAY_BUFFER, this._attributesBuffer), r6.enableVertexAttribArray(0), r6.vertexAttribPointer(0, 2, r6.FLOAT, false, Pi, 0), r6.vertexAttribDivisor(0, 1), r6.enableVertexAttribArray(1), r6.vertexAttribPointer(1, 2, r6.FLOAT, false, Pi, 2 * Float32Array.BYTES_PER_ELEMENT), r6.vertexAttribDivisor(1, 1), r6.enableVertexAttribArray(2), r6.vertexAttribPointer(2, 4, r6.FLOAT, false, Pi, 4 * Float32Array.BYTES_PER_ELEMENT), r6.vertexAttribDivisor(2, 1), this._updateCachedColors(o2.colors), this._register(this._themeService.onChangeColors((d) => {
      this._updateCachedColors(d), this._updateViewportRectangle();
    }));
  }
  renderBackgrounds() {
    this._renderVertices(this._vertices);
  }
  renderCursor() {
    this._renderVertices(this._verticesCursor);
  }
  _renderVertices(t) {
    let n = this._gl;
    n.useProgram(this._program), n.bindVertexArray(this._vertexArrayObject), n.uniformMatrix4fv(this._projectionLocation, false, Gt), n.bindBuffer(n.ARRAY_BUFFER, this._attributesBuffer), n.bufferData(n.ARRAY_BUFFER, t.attributes, n.DYNAMIC_DRAW), n.drawElementsInstanced(this._gl.TRIANGLE_STRIP, 4, n.UNSIGNED_BYTE, 0, t.count);
  }
  handleResize() {
    this._updateViewportRectangle();
  }
  setDimensions(t) {
    this._dimensions = t;
  }
  _updateCachedColors(t) {
    this._bgFloat = this._colorToFloat32Array(t.background), this._cursorFloat = this._colorToFloat32Array(t.cursor);
  }
  _updateViewportRectangle() {
    this._addRectangleFloat(this._vertices.attributes, 0, 0, 0, this._terminal.cols * this._dimensions.device.cell.width, this._terminal.rows * this._dimensions.device.cell.height, this._bgFloat);
  }
  updateBackgrounds(t) {
    let n = this._terminal, s15 = this._vertices, o2 = 1, r6, a, l2, u2, c, d, h2, f, I2, L4, M4;
    for (r6 = 0; r6 < n.rows; r6++) {
      for (l2 = -1, u2 = 0, c = 0, d = false, a = 0; a < n.cols; a++) h2 = (r6 * n.cols + a) * Ce2, f = t.cells[h2 + ze], I2 = t.cells[h2 + qe2], L4 = !!(I2 & 67108864), (f !== u2 || I2 !== c && (d || L4)) && ((u2 !== 0 || d && c !== 0) && (M4 = o2++ * Ee3, this._updateRectangle(s15, M4, c, u2, l2, a, r6)), l2 = a, u2 = f, c = I2, d = L4);
      (u2 !== 0 || d && c !== 0) && (M4 = o2++ * Ee3, this._updateRectangle(s15, M4, c, u2, l2, n.cols, r6));
    }
    s15.count = o2;
  }
  updateCursor(t) {
    let n = this._verticesCursor, s15 = t.cursor;
    if (!s15 || s15.style === "block") {
      n.count = 0;
      return;
    }
    let o2, r6 = 0;
    (s15.style === "bar" || s15.style === "outline") && (o2 = r6++ * Ee3, this._addRectangleFloat(n.attributes, o2, s15.x * this._dimensions.device.cell.width, s15.y * this._dimensions.device.cell.height, s15.style === "bar" ? s15.dpr * s15.cursorWidth : s15.dpr, this._dimensions.device.cell.height, this._cursorFloat)), (s15.style === "underline" || s15.style === "outline") && (o2 = r6++ * Ee3, this._addRectangleFloat(n.attributes, o2, s15.x * this._dimensions.device.cell.width, (s15.y + 1) * this._dimensions.device.cell.height - s15.dpr, s15.width * this._dimensions.device.cell.width, s15.dpr, this._cursorFloat)), s15.style === "outline" && (o2 = r6++ * Ee3, this._addRectangleFloat(n.attributes, o2, s15.x * this._dimensions.device.cell.width, s15.y * this._dimensions.device.cell.height, s15.width * this._dimensions.device.cell.width, s15.dpr, this._cursorFloat), o2 = r6++ * Ee3, this._addRectangleFloat(n.attributes, o2, (s15.x + s15.width) * this._dimensions.device.cell.width - s15.dpr, s15.y * this._dimensions.device.cell.height, s15.dpr, this._dimensions.device.cell.height, this._cursorFloat)), n.count = r6;
  }
  _updateRectangle(t, n, s15, o2, r6, a, l2) {
    if (s15 & 67108864) switch (s15 & 50331648) {
      case 16777216:
      case 33554432:
        xe2 = this._themeService.colors.ansi[s15 & 255].rgba;
        break;
      case 50331648:
        xe2 = (s15 & 16777215) << 8;
        break;
      case 0:
      default:
        xe2 = this._themeService.colors.foreground.rgba;
    }
    else switch (o2 & 50331648) {
      case 16777216:
      case 33554432:
        xe2 = this._themeService.colors.ansi[o2 & 255].rgba;
        break;
      case 50331648:
        xe2 = (o2 & 16777215) << 8;
        break;
      case 0:
      default:
        xe2 = this._themeService.colors.background.rgba;
    }
    t.attributes.length < n + 4 && (t.attributes = Bn(t.attributes, this._terminal.rows * this._terminal.cols * Ee3)), Hn = r6 * this._dimensions.device.cell.width, Wn = l2 * this._dimensions.device.cell.height, Gn = (xe2 >> 24 & 255) / 255, $n = (xe2 >> 16 & 255) / 255, Kn = (xe2 >> 8 & 255) / 255, Vn = 1, this._addRectangle(t.attributes, n, Hn, Wn, (a - r6) * this._dimensions.device.cell.width, this._dimensions.device.cell.height, Gn, $n, Kn, Vn);
  }
  _addRectangle(t, n, s15, o2, r6, a, l2, u2, c, d) {
    t[n] = s15 / this._dimensions.device.canvas.width, t[n + 1] = o2 / this._dimensions.device.canvas.height, t[n + 2] = r6 / this._dimensions.device.canvas.width, t[n + 3] = a / this._dimensions.device.canvas.height, t[n + 4] = l2, t[n + 5] = u2, t[n + 6] = c, t[n + 7] = d;
  }
  _addRectangleFloat(t, n, s15, o2, r6, a, l2) {
    t[n] = s15 / this._dimensions.device.canvas.width, t[n + 1] = o2 / this._dimensions.device.canvas.height, t[n + 2] = r6 / this._dimensions.device.canvas.width, t[n + 3] = a / this._dimensions.device.canvas.height, t[n + 4] = l2[0], t[n + 5] = l2[1], t[n + 6] = l2[2], t[n + 7] = l2[3];
  }
  _colorToFloat32Array(t) {
    return new Float32Array([(t.rgba >> 24 & 255) / 255, (t.rgba >> 16 & 255) / 255, (t.rgba >> 8 & 255) / 255, (t.rgba & 255) / 255]);
  }
};
var jt = class extends B3 {
  constructor(t, n, s15, o2, r6, a, l2, u2) {
    super();
    this._container = n;
    this._alpha = r6;
    this._coreBrowserService = a;
    this._optionsService = l2;
    this._themeService = u2;
    this._deviceCharWidth = 0;
    this._deviceCharHeight = 0;
    this._deviceCellWidth = 0;
    this._deviceCellHeight = 0;
    this._deviceCharLeft = 0;
    this._deviceCharTop = 0;
    this._canvas = this._coreBrowserService.mainDocument.createElement("canvas"), this._canvas.classList.add(`xterm-${s15}-layer`), this._canvas.style.zIndex = o2.toString(), this._initCanvas(), this._container.appendChild(this._canvas), this._register(this._themeService.onChangeColors((c) => {
      this._refreshCharAtlas(t, c), this.reset(t);
    })), this._register(O2(() => {
      this._canvas.remove();
    }));
  }
  _initCanvas() {
    this._ctx = F(this._canvas.getContext("2d", { alpha: this._alpha })), this._alpha || this._clearAll();
  }
  handleBlur(t) {
  }
  handleFocus(t) {
  }
  handleCursorMove(t) {
  }
  handleGridChanged(t, n, s15) {
  }
  handleSelectionChanged(t, n, s15, o2 = false) {
  }
  _setTransparency(t, n) {
    if (n === this._alpha) return;
    let s15 = this._canvas;
    this._alpha = n, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, s15), this._refreshCharAtlas(t, this._themeService.colors), this.handleGridChanged(t, 0, t.rows - 1);
  }
  _refreshCharAtlas(t, n) {
    this._deviceCharWidth <= 0 && this._deviceCharHeight <= 0 || (this._charAtlas = Nt(t, this._optionsService.rawOptions, n, this._deviceCellWidth, this._deviceCellHeight, this._deviceCharWidth, this._deviceCharHeight, this._coreBrowserService.dpr, 2048), this._charAtlas.warmUp());
  }
  resize(t, n) {
    this._deviceCellWidth = n.device.cell.width, this._deviceCellHeight = n.device.cell.height, this._deviceCharWidth = n.device.char.width, this._deviceCharHeight = n.device.char.height, this._deviceCharLeft = n.device.char.left, this._deviceCharTop = n.device.char.top, this._canvas.width = n.device.canvas.width, this._canvas.height = n.device.canvas.height, this._canvas.style.width = `${n.css.canvas.width}px`, this._canvas.style.height = `${n.css.canvas.height}px`, this._alpha || this._clearAll(), this._refreshCharAtlas(t, this._themeService.colors);
  }
  _fillBottomLineAtCells(t, n, s15 = 1) {
    this._ctx.fillRect(t * this._deviceCellWidth, (n + 1) * this._deviceCellHeight - this._coreBrowserService.dpr - 1, s15 * this._deviceCellWidth, this._coreBrowserService.dpr);
  }
  _clearAll() {
    this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._themeService.colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height));
  }
  _clearCells(t, n, s15, o2) {
    this._alpha ? this._ctx.clearRect(t * this._deviceCellWidth, n * this._deviceCellHeight, s15 * this._deviceCellWidth, o2 * this._deviceCellHeight) : (this._ctx.fillStyle = this._themeService.colors.background.css, this._ctx.fillRect(t * this._deviceCellWidth, n * this._deviceCellHeight, s15 * this._deviceCellWidth, o2 * this._deviceCellHeight));
  }
  _fillCharTrueColor(t, n, s15, o2) {
    this._ctx.font = this._getFont(t, false, false), this._ctx.textBaseline = St, this._clipCell(s15, o2, n.getWidth()), this._ctx.fillText(n.getChars(), s15 * this._deviceCellWidth + this._deviceCharLeft, o2 * this._deviceCellHeight + this._deviceCharTop + this._deviceCharHeight);
  }
  _clipCell(t, n, s15) {
    this._ctx.beginPath(), this._ctx.rect(t * this._deviceCellWidth, n * this._deviceCellHeight, s15 * this._deviceCellWidth, this._deviceCellHeight), this._ctx.clip();
  }
  _getFont(t, n, s15) {
    let o2 = n ? t.options.fontWeightBold : t.options.fontWeight;
    return `${s15 ? "italic" : ""} ${o2} ${t.options.fontSize * this._coreBrowserService.dpr}px ${t.options.fontFamily}`;
  }
};
var Xt = class extends jt {
  constructor(e, t, n, s15, o2, r6, a) {
    super(n, e, "link", t, true, o2, r6, a), this._register(s15.onShowLinkUnderline((l2) => this._handleShowLinkUnderline(l2))), this._register(s15.onHideLinkUnderline((l2) => this._handleHideLinkUnderline(l2)));
  }
  resize(e, t) {
    super.resize(e, t), this._state = void 0;
  }
  reset(e) {
    this._clearCurrentLink();
  }
  _clearCurrentLink() {
    if (this._state) {
      this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
      let e = this._state.y2 - this._state.y1 - 1;
      e > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, e), this._clearCells(0, this._state.y2, this._state.x2, 1), this._state = void 0;
    }
  }
  _handleShowLinkUnderline(e) {
    if (e.fg === 257 ? this._ctx.fillStyle = this._themeService.colors.background.css : e.fg !== void 0 && Fn(e.fg) ? this._ctx.fillStyle = this._themeService.colors.ansi[e.fg].css : this._ctx.fillStyle = this._themeService.colors.foreground.css, e.y1 === e.y2) this._fillBottomLineAtCells(e.x1, e.y1, e.x2 - e.x1);
    else {
      this._fillBottomLineAtCells(e.x1, e.y1, e.cols - e.x1);
      for (let t = e.y1 + 1; t < e.y2; t++) this._fillBottomLineAtCells(0, t, e.cols);
      this._fillBottomLineAtCells(0, e.y2, e.x2);
    }
    this._state = e;
  }
  _handleHideLinkUnderline(e) {
    this._clearCurrentLink();
  }
};
var te3 = typeof window == "object" ? window : globalThis;
var Zt = class Zt2 {
  constructor() {
    this.mapWindowIdToZoomLevel = /* @__PURE__ */ new Map();
    this._onDidChangeZoomLevel = new D2();
    this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event;
    this.mapWindowIdToZoomFactor = /* @__PURE__ */ new Map();
    this._onDidChangeFullscreen = new D2();
    this.onDidChangeFullscreen = this._onDidChangeFullscreen.event;
    this.mapWindowIdToFullScreen = /* @__PURE__ */ new Map();
  }
  getZoomLevel(e) {
    return this.mapWindowIdToZoomLevel.get(this.getWindowId(e)) ?? 0;
  }
  setZoomLevel(e, t) {
    if (this.getZoomLevel(t) === e) return;
    let n = this.getWindowId(t);
    this.mapWindowIdToZoomLevel.set(n, e), this._onDidChangeZoomLevel.fire(n);
  }
  getZoomFactor(e) {
    return this.mapWindowIdToZoomFactor.get(this.getWindowId(e)) ?? 1;
  }
  setZoomFactor(e, t) {
    this.mapWindowIdToZoomFactor.set(this.getWindowId(t), e);
  }
  setFullscreen(e, t) {
    if (this.isFullscreen(t) === e) return;
    let n = this.getWindowId(t);
    this.mapWindowIdToFullScreen.set(n, e), this._onDidChangeFullscreen.fire(n);
  }
  isFullscreen(e) {
    return !!this.mapWindowIdToFullScreen.get(this.getWindowId(e));
  }
  getWindowId(e) {
    return e.vscodeWindowId;
  }
};
Zt.INSTANCE = new Zt();
var Qt = Zt;
function us(i8, e, t) {
  typeof e == "string" && (e = i8.matchMedia(e)), e.addEventListener("change", t);
}
var Wa = Qt.INSTANCE.onDidChangeZoomLevel;
var Ga = Qt.INSTANCE.onDidChangeFullscreen;
var je2 = typeof navigator == "object" ? navigator.userAgent : "";
var Cn = je2.indexOf("Firefox") >= 0;
var ut = je2.indexOf("AppleWebKit") >= 0;
var zn = je2.indexOf("Chrome") >= 0;
var Bi = !zn && je2.indexOf("Safari") >= 0;
var $a = je2.indexOf("Electron/") >= 0;
var Ka = je2.indexOf("Android") >= 0;
var Yt = false;
if (typeof te3.matchMedia == "function") {
  let i8 = te3.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)"), e = te3.matchMedia("(display-mode: fullscreen)");
  Yt = i8.matches, us(te3, i8, ({ matches: t }) => {
    Yt && e.matches || (Yt = t);
  });
}
function qn() {
  return Yt;
}
var Xe2 = "en";
var Ui = false;
var ni = false;
var ti = false;
var cs = false;
var Xn = false;
var Yn = false;
var ds = false;
var hs = false;
var ps = false;
var fs = false;
var ei;
var ii = Xe2;
var jn = Xe2;
var ms;
var ye3;
var Ie2 = globalThis;
var re2;
typeof Ie2.vscode < "u" && typeof Ie2.vscode.process < "u" ? re2 = Ie2.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (re2 = process);
var Qn = typeof re2?.versions?.electron == "string";
var _s = Qn && re2?.type === "renderer";
if (typeof re2 == "object") {
  Ui = re2.platform === "win32", ni = re2.platform === "darwin", ti = re2.platform === "linux", cs = ti && !!re2.env.SNAP && !!re2.env.SNAP_REVISION, ds = Qn, ps = !!re2.env.CI || !!re2.env.BUILD_ARTIFACTSTAGINGDIRECTORY, ei = Xe2, ii = Xe2;
  let i8 = re2.env.VSCODE_NLS_CONFIG;
  if (i8) try {
    let e = JSON.parse(i8);
    ei = e.userLocale, jn = e.osLocale, ii = e.resolvedLanguage || Xe2, ms = e.languagePack?.translationsConfigFile;
  } catch {
  }
  Xn = true;
} else typeof navigator == "object" && !_s ? (ye3 = navigator.userAgent, Ui = ye3.indexOf("Windows") >= 0, ni = ye3.indexOf("Macintosh") >= 0, hs = (ye3.indexOf("Macintosh") >= 0 || ye3.indexOf("iPad") >= 0 || ye3.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, ti = ye3.indexOf("Linux") >= 0, fs = ye3?.indexOf("Mobi") >= 0, Yn = true, ii = globalThis._VSCODE_NLS_LANGUAGE || Xe2, ei = navigator.language.toLowerCase(), jn = ei) : console.error("Unable to resolve platform.");
var Ni = 0;
ni ? Ni = 1 : Ui ? Ni = 3 : ti && (Ni = 2);
var ri = Xn;
var bs = Yn && typeof Ie2.importScripts == "function";
var Va = bs ? Ie2.origin : void 0;
var _e2 = ye3;
var Me3 = ii;
var vs;
((n) => {
  function i8() {
    return Me3;
  }
  n.value = i8;
  function e() {
    return Me3.length === 2 ? Me3 === "en" : Me3.length >= 3 ? Me3[0] === "e" && Me3[1] === "n" && Me3[2] === "-" : false;
  }
  n.isDefaultVariant = e;
  function t() {
    return Me3 === "en";
  }
  n.isDefault = t;
})(vs ||= {});
var Ts = typeof Ie2.postMessage == "function" && !Ie2.importScripts;
var Zn = (() => {
  if (Ts) {
    let i8 = [];
    Ie2.addEventListener("message", (t) => {
      if (t.data && t.data.vscodeScheduleAsyncWork) for (let n = 0, s15 = i8.length; n < s15; n++) {
        let o2 = i8[n];
        if (o2.id === t.data.vscodeScheduleAsyncWork) {
          i8.splice(n, 1), o2.callback();
          return;
        }
      }
    });
    let e = 0;
    return (t) => {
      let n = ++e;
      i8.push({ id: n, callback: t }), Ie2.postMessage({ vscodeScheduleAsyncWork: n }, "*");
    };
  }
  return (i8) => setTimeout(i8);
})();
var gs = !!(_e2 && _e2.indexOf("Chrome") >= 0);
var Ca = !!(_e2 && _e2.indexOf("Firefox") >= 0);
var za = !!(!gs && _e2 && _e2.indexOf("Safari") >= 0);
var qa = !!(_e2 && _e2.indexOf("Edg/") >= 0);
var ja = !!(_e2 && _e2.indexOf("Android") >= 0);
var Ae2 = typeof navigator == "object" ? navigator : {};
var xs = { clipboard: { writeText: ri || document.queryCommandSupported && document.queryCommandSupported("copy") || !!(Ae2 && Ae2.clipboard && Ae2.clipboard.writeText), readText: ri || !!(Ae2 && Ae2.clipboard && Ae2.clipboard.readText) }, keyboard: ri || qn() ? 0 : Ae2.keyboard || Bi ? 1 : 2, touch: "ontouchstart" in te3 || Ae2.maxTouchPoints > 0, pointerEvents: te3.PointerEvent && ("ontouchstart" in te3 || navigator.maxTouchPoints > 0) };
var dt = class {
  constructor() {
    this._keyCodeToStr = [], this._strToKeyCode = /* @__PURE__ */ Object.create(null);
  }
  define(e, t) {
    this._keyCodeToStr[e] = t, this._strToKeyCode[t.toLowerCase()] = e;
  }
  keyCodeToStr(e) {
    return this._keyCodeToStr[e];
  }
  strToKeyCode(e) {
    return this._strToKeyCode[e.toLowerCase()] || 0;
  }
};
var Hi = new dt();
var Jn = new dt();
var er = new dt();
var Es = new Array(230);
var tr;
((r6) => {
  function i8(a) {
    return Hi.keyCodeToStr(a);
  }
  r6.toString = i8;
  function e(a) {
    return Hi.strToKeyCode(a);
  }
  r6.fromString = e;
  function t(a) {
    return Jn.keyCodeToStr(a);
  }
  r6.toUserSettingsUS = t;
  function n(a) {
    return er.keyCodeToStr(a);
  }
  r6.toUserSettingsGeneral = n;
  function s15(a) {
    return Jn.strToKeyCode(a) || er.strToKeyCode(a);
  }
  r6.fromUserSettings = s15;
  function o2(a) {
    if (a >= 98 && a <= 113) return null;
    switch (a) {
      case 16:
        return "Up";
      case 18:
        return "Down";
      case 15:
        return "Left";
      case 17:
        return "Right";
    }
    return Hi.keyCodeToStr(a);
  }
  r6.toElectronAccelerator = o2;
})(tr ||= {});
var nr = Object.freeze(function(i8, e) {
  let t = setTimeout(i8.bind(e), 0);
  return { dispose() {
    clearTimeout(t);
  } };
});
var Is;
((n) => {
  function i8(s15) {
    return s15 === n.None || s15 === n.Cancelled || s15 instanceof Wi ? true : !s15 || typeof s15 != "object" ? false : typeof s15.isCancellationRequested == "boolean" && typeof s15.onCancellationRequested == "function";
  }
  n.isCancellationToken = i8, n.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: ee4.None }), n.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: nr });
})(Is ||= {});
var Wi = class {
  constructor() {
    this._isCancelled = false;
    this._emitter = null;
  }
  cancel() {
    this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
  }
  get isCancellationRequested() {
    return this._isCancelled;
  }
  get onCancellationRequested() {
    return this._isCancelled ? nr : (this._emitter || (this._emitter = new D2()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
};
var ws;
var oi;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? oi = (i8, e) => {
    Zn(() => {
      if (t) return;
      let n = Date.now() + 15;
      e(Object.freeze({ didTimeout: true, timeRemaining() {
        return Math.max(0, n - Date.now());
      } }));
    });
    let t = false;
    return { dispose() {
      t || (t = true);
    } };
  } : oi = (i8, e, t) => {
    let n = i8.requestIdleCallback(e, typeof t == "number" ? { timeout: t } : void 0), s15 = false;
    return { dispose() {
      s15 || (s15 = true, i8.cancelIdleCallback(n));
    } };
  }, ws = (i8) => oi(globalThis, i8);
})();
var Rs;
((t) => {
  async function i8(n) {
    let s15, o2 = await Promise.all(n.map((r6) => r6.then((a) => a, (a) => {
      s15 || (s15 = a);
    })));
    if (typeof s15 < "u") throw s15;
    return o2;
  }
  t.settled = i8;
  function e(n) {
    return new Promise(async (s15, o2) => {
      try {
        await n(s15, o2);
      } catch (r6) {
        o2(r6);
      }
    });
  }
  t.withAsyncBody = e;
})(Rs ||= {});
var Q = class Q2 {
  static fromArray(e) {
    return new Q2((t) => {
      t.emitMany(e);
    });
  }
  static fromPromise(e) {
    return new Q2(async (t) => {
      t.emitMany(await e);
    });
  }
  static fromPromises(e) {
    return new Q2(async (t) => {
      await Promise.all(e.map(async (n) => t.emitOne(await n)));
    });
  }
  static merge(e) {
    return new Q2(async (t) => {
      await Promise.all(e.map(async (n) => {
        for await (let s15 of n) t.emitOne(s15);
      }));
    });
  }
  constructor(e, t) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = t, this._onStateChanged = new D2(), queueMicrotask(async () => {
      let n = { emitOne: (s15) => this.emitOne(s15), emitMany: (s15) => this.emitMany(s15), reject: (s15) => this.reject(s15) };
      try {
        await Promise.resolve(e(n)), this.resolve();
      } catch (s15) {
        this.reject(s15);
      } finally {
        n.emitOne = void 0, n.emitMany = void 0, n.reject = void 0;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let e = 0;
    return { next: async () => {
      do {
        if (this._state === 2) throw this._error;
        if (e < this._results.length) return { done: false, value: this._results[e++] };
        if (this._state === 1) return { done: true, value: void 0 };
        await ee4.toPromise(this._onStateChanged.event);
      } while (true);
    }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
  }
  static map(e, t) {
    return new Q2(async (n) => {
      for await (let s15 of e) n.emitOne(t(s15));
    });
  }
  map(e) {
    return Q2.map(this, e);
  }
  static filter(e, t) {
    return new Q2(async (n) => {
      for await (let s15 of e) t(s15) && n.emitOne(s15);
    });
  }
  filter(e) {
    return Q2.filter(this, e);
  }
  static coalesce(e) {
    return Q2.filter(e, (t) => !!t);
  }
  coalesce() {
    return Q2.coalesce(this);
  }
  static async toPromise(e) {
    let t = [];
    for await (let n of e) t.push(n);
    return t;
  }
  toPromise() {
    return Q2.toPromise(this);
  }
  emitOne(e) {
    this._state === 0 && (this._results.push(e), this._onStateChanged.fire());
  }
  emitMany(e) {
    this._state === 0 && (this._results = this._results.concat(e), this._onStateChanged.fire());
  }
  resolve() {
    this._state === 0 && (this._state = 1, this._onStateChanged.fire());
  }
  reject(e) {
    this._state === 0 && (this._state = 2, this._error = e, this._onStateChanged.fire());
  }
};
Q.EMPTY = Q.fromArray([]);
function sr(i8) {
  return 55296 <= i8 && i8 <= 56319;
}
function Gi(i8) {
  return 56320 <= i8 && i8 <= 57343;
}
function or(i8, e) {
  return (i8 - 55296 << 10) + (e - 56320) + 65536;
}
function ur(i8) {
  return Ki(i8, 0);
}
function Ki(i8, e) {
  switch (typeof i8) {
    case "object":
      return i8 === null ? Le2(349, e) : Array.isArray(i8) ? As(i8, e) : Ss(i8, e);
    case "string":
      return cr(i8, e);
    case "boolean":
      return Ms(i8, e);
    case "number":
      return Le2(i8, e);
    case "undefined":
      return Le2(937, e);
    default:
      return Le2(617, e);
  }
}
function Le2(i8, e) {
  return (e << 5) - e + i8 | 0;
}
function Ms(i8, e) {
  return Le2(i8 ? 433 : 863, e);
}
function cr(i8, e) {
  e = Le2(149417, e);
  for (let t = 0, n = i8.length; t < n; t++) e = Le2(i8.charCodeAt(t), e);
  return e;
}
function As(i8, e) {
  return e = Le2(104579, e), i8.reduce((t, n) => Ki(n, t), e);
}
function Ss(i8, e) {
  return e = Le2(181387, e), Object.keys(i8).sort().reduce((t, n) => (t = cr(n, t), Ki(i8[n], t)), e);
}
function $i(i8, e, t = 32) {
  let n = t - e, s15 = ~((1 << n) - 1);
  return (i8 << e | (s15 & i8) >>> n) >>> 0;
}
function ar(i8, e = 0, t = i8.byteLength, n = 0) {
  for (let s15 = 0; s15 < t; s15++) i8[e + s15] = n;
}
function Os(i8, e, t = "0") {
  for (; i8.length < e; ) i8 = t + i8;
  return i8;
}
function ht(i8, e = 32) {
  return i8 instanceof ArrayBuffer ? Array.from(new Uint8Array(i8)).map((t) => t.toString(16).padStart(2, "0")).join("") : Os((i8 >>> 0).toString(16), e / 4);
}
var ai = class ai2 {
  constructor() {
    this._h0 = 1732584193;
    this._h1 = 4023233417;
    this._h2 = 2562383102;
    this._h3 = 271733878;
    this._h4 = 3285377520;
    this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = false;
  }
  update(e) {
    let t = e.length;
    if (t === 0) return;
    let n = this._buff, s15 = this._buffLen, o2 = this._leftoverHighSurrogate, r6, a;
    for (o2 !== 0 ? (r6 = o2, a = -1, o2 = 0) : (r6 = e.charCodeAt(0), a = 0); ; ) {
      let l2 = r6;
      if (sr(r6)) if (a + 1 < t) {
        let u2 = e.charCodeAt(a + 1);
        Gi(u2) ? (a++, l2 = or(r6, u2)) : l2 = 65533;
      } else {
        o2 = r6;
        break;
      }
      else Gi(r6) && (l2 = 65533);
      if (s15 = this._push(n, s15, l2), a++, a < t) r6 = e.charCodeAt(a);
      else break;
    }
    this._buffLen = s15, this._leftoverHighSurrogate = o2;
  }
  _push(e, t, n) {
    return n < 128 ? e[t++] = n : n < 2048 ? (e[t++] = 192 | (n & 1984) >>> 6, e[t++] = 128 | (n & 63) >>> 0) : n < 65536 ? (e[t++] = 224 | (n & 61440) >>> 12, e[t++] = 128 | (n & 4032) >>> 6, e[t++] = 128 | (n & 63) >>> 0) : (e[t++] = 240 | (n & 1835008) >>> 18, e[t++] = 128 | (n & 258048) >>> 12, e[t++] = 128 | (n & 4032) >>> 6, e[t++] = 128 | (n & 63) >>> 0), t >= 64 && (this._step(), t -= 64, this._totalLen += 64, e[0] = e[64], e[1] = e[65], e[2] = e[66]), t;
  }
  digest() {
    return this._finished || (this._finished = true, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), ht(this._h0) + ht(this._h1) + ht(this._h2) + ht(this._h3) + ht(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, ar(this._buff, this._buffLen), this._buffLen > 56 && (this._step(), ar(this._buff));
    let e = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(e / 4294967296), false), this._buffDV.setUint32(60, e % 4294967296, false), this._step();
  }
  _step() {
    let e = ai2._bigBlock32, t = this._buffDV;
    for (let d = 0; d < 64; d += 4) e.setUint32(d, t.getUint32(d, false), false);
    for (let d = 64; d < 320; d += 4) e.setUint32(d, $i(e.getUint32(d - 12, false) ^ e.getUint32(d - 32, false) ^ e.getUint32(d - 56, false) ^ e.getUint32(d - 64, false), 1), false);
    let n = this._h0, s15 = this._h1, o2 = this._h2, r6 = this._h3, a = this._h4, l2, u2, c;
    for (let d = 0; d < 80; d++) d < 20 ? (l2 = s15 & o2 | ~s15 & r6, u2 = 1518500249) : d < 40 ? (l2 = s15 ^ o2 ^ r6, u2 = 1859775393) : d < 60 ? (l2 = s15 & o2 | s15 & r6 | o2 & r6, u2 = 2400959708) : (l2 = s15 ^ o2 ^ r6, u2 = 3395469782), c = $i(n, 5) + l2 + a + u2 + e.getUint32(d * 4, false) & 4294967295, a = r6, r6 = o2, o2 = $i(s15, 30), s15 = n, n = c;
    this._h0 = this._h0 + n & 4294967295, this._h1 = this._h1 + s15 & 4294967295, this._h2 = this._h2 + o2 & 4294967295, this._h3 = this._h3 + r6 & 4294967295, this._h4 = this._h4 + a & 4294967295;
  }
};
ai._bigBlock32 = new DataView(new ArrayBuffer(320));
var { registerWindow: fu, getWindow: Fs, getDocument: mu, getWindows: _u, getWindowsCount: bu, getWindowId: dr, getWindowById: vu, hasWindow: Tu, onDidRegisterWindow: gu, onWillUnregisterWindow: xu, onDidUnregisterWindow: Eu } = (function() {
  let i8 = /* @__PURE__ */ new Map();
  te3;
  let e = { window: te3, disposables: new fe3() };
  i8.set(te3.vscodeWindowId, e);
  let t = new D2(), n = new D2(), s15 = new D2();
  function o2(r6, a) {
    return (typeof r6 == "number" ? i8.get(r6) : void 0) ?? (a ? e : void 0);
  }
  return { onDidRegisterWindow: t.event, onWillUnregisterWindow: s15.event, onDidUnregisterWindow: n.event, registerWindow(r6) {
    if (i8.has(r6.vscodeWindowId)) return B3.None;
    let a = new fe3(), l2 = { window: r6, disposables: a.add(new fe3()) };
    return i8.set(r6.vscodeWindowId, l2), a.add(O2(() => {
      i8.delete(r6.vscodeWindowId), n.fire(r6);
    })), a.add(li(r6, Ps.BEFORE_UNLOAD, () => {
      s15.fire(r6);
    })), t.fire(l2), a;
  }, getWindows() {
    return i8.values();
  }, getWindowsCount() {
    return i8.size;
  }, getWindowId(r6) {
    return r6.vscodeWindowId;
  }, hasWindow(r6) {
    return i8.has(r6);
  }, getWindowById: o2, getWindow(r6) {
    let a = r6;
    if (a?.ownerDocument?.defaultView) return a.ownerDocument.defaultView.window;
    let l2 = r6;
    return l2?.view ? l2.view.window : te3;
  }, getDocument(r6) {
    return Fs(r6).document;
  } };
})();
var Vi = class {
  constructor(e, t, n, s15) {
    this._node = e, this._type = t, this._handler = n, this._options = s15 || false, this._node.addEventListener(this._type, this._handler, this._options);
  }
  dispose() {
    this._handler && (this._node.removeEventListener(this._type, this._handler, this._options), this._node = null, this._handler = null);
  }
};
function li(i8, e, t, n) {
  return new Vi(i8, e, t, n);
}
var ks;
var hr;
var pt = class {
  constructor(e, t = 0) {
    this._runner = e, this.priority = t, this._canceled = false;
  }
  dispose() {
    this._canceled = true;
  }
  execute() {
    if (!this._canceled) try {
      this._runner();
    } catch (e) {
      Pe3(e);
    }
  }
  static sort(e, t) {
    return t.priority - e.priority;
  }
};
(function() {
  let i8 = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s15 = (o2) => {
    t.set(o2, false);
    let r6 = i8.get(o2) ?? [];
    for (e.set(o2, r6), i8.set(o2, []), n.set(o2, true); r6.length > 0; ) r6.sort(pt.sort), r6.shift().execute();
    n.set(o2, false);
  };
  hr = (o2, r6, a = 0) => {
    let l2 = dr(o2), u2 = new pt(r6, a), c = i8.get(l2);
    return c || (c = [], i8.set(l2, c)), c.push(u2), t.get(l2) || (t.set(l2, true), o2.requestAnimationFrame(() => s15(l2))), u2;
  }, ks = (o2, r6, a) => {
    let l2 = dr(o2);
    if (n.get(l2)) {
      let u2 = new pt(r6, a), c = e.get(l2);
      return c || (c = [], e.set(l2, c)), c.push(u2), u2;
    } else return hr(o2, r6, a);
  };
})();
var ke3 = class ke4 {
  constructor(e, t) {
    this.width = e;
    this.height = t;
  }
  with(e = this.width, t = this.height) {
    return e !== this.width || t !== this.height ? new ke4(e, t) : this;
  }
  static is(e) {
    return typeof e == "object" && typeof e.height == "number" && typeof e.width == "number";
  }
  static lift(e) {
    return e instanceof ke4 ? e : new ke4(e.width, e.height);
  }
  static equals(e, t) {
    return e === t ? true : !e || !t ? false : e.width === t.width && e.height === t.height;
  }
};
ke3.None = new ke3(0, 0);
var yu = new class {
  constructor() {
    this.mutationObservers = /* @__PURE__ */ new Map();
  }
  observe(i8, e, t) {
    let n = this.mutationObservers.get(i8);
    n || (n = /* @__PURE__ */ new Map(), this.mutationObservers.set(i8, n));
    let s15 = ur(t), o2 = n.get(s15);
    if (o2) o2.users += 1;
    else {
      let r6 = new D2(), a = new MutationObserver((u2) => r6.fire(u2));
      a.observe(i8, t);
      let l2 = o2 = { users: 1, observer: a, onDidMutate: r6.event };
      e.add(O2(() => {
        l2.users -= 1, l2.users === 0 && (r6.dispose(), a.disconnect(), n?.delete(s15), n?.size === 0 && this.mutationObservers.delete(i8));
      })), n.set(s15, o2);
    }
    return o2.onDidMutate;
  }
}();
var Ps = { CLICK: "click", AUXCLICK: "auxclick", DBLCLICK: "dblclick", MOUSE_UP: "mouseup", MOUSE_DOWN: "mousedown", MOUSE_OVER: "mouseover", MOUSE_MOVE: "mousemove", MOUSE_OUT: "mouseout", MOUSE_ENTER: "mouseenter", MOUSE_LEAVE: "mouseleave", MOUSE_WHEEL: "wheel", POINTER_UP: "pointerup", POINTER_DOWN: "pointerdown", POINTER_MOVE: "pointermove", POINTER_LEAVE: "pointerleave", CONTEXT_MENU: "contextmenu", WHEEL: "wheel", KEY_DOWN: "keydown", KEY_PRESS: "keypress", KEY_UP: "keyup", LOAD: "load", BEFORE_UNLOAD: "beforeunload", UNLOAD: "unload", PAGE_SHOW: "pageshow", PAGE_HIDE: "pagehide", PASTE: "paste", ABORT: "abort", ERROR: "error", RESIZE: "resize", SCROLL: "scroll", FULLSCREEN_CHANGE: "fullscreenchange", WK_FULLSCREEN_CHANGE: "webkitfullscreenchange", SELECT: "select", CHANGE: "change", SUBMIT: "submit", RESET: "reset", FOCUS: "focus", FOCUS_IN: "focusin", FOCUS_OUT: "focusout", BLUR: "blur", INPUT: "input", STORAGE: "storage", DRAG_START: "dragstart", DRAG: "drag", DRAG_ENTER: "dragenter", DRAG_LEAVE: "dragleave", DRAG_OVER: "dragover", DROP: "drop", DRAG_END: "dragend", ANIMATION_START: ut ? "webkitAnimationStart" : "animationstart", ANIMATION_END: ut ? "webkitAnimationEnd" : "animationend", ANIMATION_ITERATION: ut ? "webkitAnimationIteration" : "animationiteration" };
var Bs = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;
function fr(i8, e, t, ...n) {
  let s15 = Bs.exec(e);
  if (!s15) throw new Error("Bad use of emmet");
  let o2 = s15[1] || "div", r6;
  return i8 !== "http://www.w3.org/1999/xhtml" ? r6 = document.createElementNS(i8, o2) : r6 = document.createElement(o2), s15[3] && (r6.id = s15[3]), s15[4] && (r6.className = s15[4].replace(/\./g, " ").trim()), t && Object.entries(t).forEach(([a, l2]) => {
    typeof l2 > "u" || (/^on\w+$/.test(a) ? r6[a] = l2 : a === "selected" ? l2 && r6.setAttribute(a, "true") : r6.setAttribute(a, l2));
  }), r6.append(...n), r6;
}
function Ns(i8, e, ...t) {
  return fr("http://www.w3.org/1999/xhtml", i8, e, ...t);
}
Ns.SVG = function(i8, e, ...t) {
  return fr("http://www.w3.org/2000/svg", i8, e, ...t);
};
var ui = class extends B3 {
  constructor(t, n, s15, o2, r6, a, l2, u2, c) {
    super();
    this._terminal = t;
    this._characterJoinerService = n;
    this._charSizeService = s15;
    this._coreBrowserService = o2;
    this._coreService = r6;
    this._decorationService = a;
    this._optionsService = l2;
    this._themeService = u2;
    this._cursorBlinkStateManager = new be3();
    this._charAtlasDisposable = this._register(new be3());
    this._observerDisposable = this._register(new be3());
    this._model = new Vt();
    this._workCell = new at2();
    this._workCell2 = new at2();
    this._rectangleRenderer = this._register(new be3());
    this._glyphRenderer = this._register(new be3());
    this._onChangeTextureAtlas = this._register(new D2());
    this.onChangeTextureAtlas = this._onChangeTextureAtlas.event;
    this._onAddTextureAtlasCanvas = this._register(new D2());
    this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event;
    this._onRemoveTextureAtlasCanvas = this._register(new D2());
    this.onRemoveTextureAtlasCanvas = this._onRemoveTextureAtlasCanvas.event;
    this._onRequestRedraw = this._register(new D2());
    this.onRequestRedraw = this._onRequestRedraw.event;
    this._onContextLoss = this._register(new D2());
    this.onContextLoss = this._onContextLoss.event;
    this._canvas = this._coreBrowserService.mainDocument.createElement("canvas");
    let d = { antialias: false, depth: false, preserveDrawingBuffer: c };
    if (this._gl = this._canvas.getContext("webgl2", d), !this._gl) throw new Error("WebGL2 not supported " + this._gl);
    this._register(this._themeService.onChangeColors(() => this._handleColorChange())), this._cellColorResolver = new At(this._terminal, this._optionsService, this._model.selection, this._decorationService, this._coreBrowserService, this._themeService), this._core = this._terminal._core, this._renderLayers = [new Xt(this._core.screenElement, 2, this._terminal, this._core.linkifier, this._coreBrowserService, l2, this._themeService)], this.dimensions = _n(), this._devicePixelRatio = this._coreBrowserService.dpr, this._updateDimensions(), this._updateCursorBlink(), this._register(l2.onOptionChange(() => this._handleOptionsChanged())), this._deviceMaxTextureSize = this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE), this._register(li(this._canvas, "webglcontextlost", (h2) => {
      console.log("webglcontextlost event received"), h2.preventDefault(), this._contextRestorationTimeout = setTimeout(() => {
        this._contextRestorationTimeout = void 0, console.warn("webgl context not restored; firing onContextLoss"), this._onContextLoss.fire(h2);
      }, 3e3);
    })), this._register(li(this._canvas, "webglcontextrestored", (h2) => {
      console.warn("webglcontextrestored event received"), clearTimeout(this._contextRestorationTimeout), this._contextRestorationTimeout = void 0, Ai(this._terminal), this._initializeWebGLState(), this._requestRedrawViewport();
    })), this._observerDisposable.value = Si(this._canvas, this._coreBrowserService.window, (h2, f) => this._setCanvasDevicePixelDimensions(h2, f)), this._register(this._coreBrowserService.onWindowChange((h2) => {
      this._observerDisposable.value = Si(this._canvas, h2, (f, I2) => this._setCanvasDevicePixelDimensions(f, I2));
    })), this._core.screenElement.appendChild(this._canvas), [this._rectangleRenderer.value, this._glyphRenderer.value] = this._initializeWebGLState(), this._isAttached = this._core.screenElement.isConnected, this._register(O2(() => {
      for (let h2 of this._renderLayers) h2.dispose();
      this._canvas.parentElement?.removeChild(this._canvas), Ai(this._terminal);
    }));
  }
  get textureAtlas() {
    return this._charAtlas?.pages[0].canvas;
  }
  _handleColorChange() {
    this._refreshCharAtlas(), this._clearModel(true);
  }
  handleDevicePixelRatioChange() {
    this._devicePixelRatio !== this._coreBrowserService.dpr && (this._devicePixelRatio = this._coreBrowserService.dpr, this.handleResize(this._terminal.cols, this._terminal.rows));
  }
  handleResize(t, n) {
    this._updateDimensions(), this._model.resize(this._terminal.cols, this._terminal.rows);
    for (let s15 of this._renderLayers) s15.resize(this._terminal, this.dimensions);
    this._canvas.width = this.dimensions.device.canvas.width, this._canvas.height = this.dimensions.device.canvas.height, this._canvas.style.width = `${this.dimensions.css.canvas.width}px`, this._canvas.style.height = `${this.dimensions.css.canvas.height}px`, this._core.screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._core.screenElement.style.height = `${this.dimensions.css.canvas.height}px`, this._rectangleRenderer.value?.setDimensions(this.dimensions), this._rectangleRenderer.value?.handleResize(), this._glyphRenderer.value?.setDimensions(this.dimensions), this._glyphRenderer.value?.handleResize(), this._refreshCharAtlas(), this._clearModel(false);
  }
  handleCharSizeChanged() {
    this.handleResize(this._terminal.cols, this._terminal.rows);
  }
  handleBlur() {
    for (let t of this._renderLayers) t.handleBlur(this._terminal);
    this._cursorBlinkStateManager.value?.pause(), this._requestRedrawViewport();
  }
  handleFocus() {
    for (let t of this._renderLayers) t.handleFocus(this._terminal);
    this._cursorBlinkStateManager.value?.resume(), this._requestRedrawViewport();
  }
  handleSelectionChanged(t, n, s15) {
    for (let o2 of this._renderLayers) o2.handleSelectionChanged(this._terminal, t, n, s15);
    this._model.selection.update(this._core, t, n, s15), this._requestRedrawViewport();
  }
  handleCursorMove() {
    for (let t of this._renderLayers) t.handleCursorMove(this._terminal);
    this._cursorBlinkStateManager.value?.restartBlinkAnimation();
  }
  _handleOptionsChanged() {
    this._updateDimensions(), this._refreshCharAtlas(), this._updateCursorBlink();
  }
  _initializeWebGLState() {
    return this._rectangleRenderer.value = new qt(this._terminal, this._gl, this.dimensions, this._themeService), this._glyphRenderer.value = new Kt(this._terminal, this._gl, this.dimensions, this._optionsService), this.handleCharSizeChanged(), [this._rectangleRenderer.value, this._glyphRenderer.value];
  }
  _refreshCharAtlas() {
    if (this.dimensions.device.char.width <= 0 && this.dimensions.device.char.height <= 0) {
      this._isAttached = false;
      return;
    }
    let t = Nt(this._terminal, this._optionsService.rawOptions, this._themeService.colors, this.dimensions.device.cell.width, this.dimensions.device.cell.height, this.dimensions.device.char.width, this.dimensions.device.char.height, this._coreBrowserService.dpr, this._deviceMaxTextureSize);
    this._charAtlas !== t && (this._onChangeTextureAtlas.fire(t.pages[0].canvas), this._charAtlasDisposable.value = It(ee4.forward(t.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas), ee4.forward(t.onRemoveTextureAtlasCanvas, this._onRemoveTextureAtlasCanvas))), this._charAtlas = t, this._charAtlas.warmUp(), this._glyphRenderer.value?.setAtlas(this._charAtlas);
  }
  _clearModel(t) {
    this._model.clear(), t && this._glyphRenderer.value?.clear();
  }
  clearTextureAtlas() {
    this._charAtlas?.clearTexture(), this._clearModel(true), this._requestRedrawViewport();
  }
  clear() {
    this._clearModel(true);
    for (let t of this._renderLayers) t.reset(this._terminal);
    this._cursorBlinkStateManager.value?.restartBlinkAnimation(), this._updateCursorBlink();
  }
  renderRows(t, n) {
    if (!this._isAttached) if (this._core.screenElement?.isConnected && this._charSizeService.width && this._charSizeService.height) this._updateDimensions(), this._refreshCharAtlas(), this._isAttached = true;
    else return;
    for (let s15 of this._renderLayers) s15.handleGridChanged(this._terminal, t, n);
    !this._glyphRenderer.value || !this._rectangleRenderer.value || (this._glyphRenderer.value.beginFrame() ? (this._clearModel(true), this._updateModel(0, this._terminal.rows - 1)) : this._updateModel(t, n), this._rectangleRenderer.value.renderBackgrounds(), this._glyphRenderer.value.render(this._model), (!this._cursorBlinkStateManager.value || this._cursorBlinkStateManager.value.isCursorVisible) && this._rectangleRenderer.value.renderCursor());
  }
  _updateCursorBlink() {
    this._coreService.decPrivateModes.cursorBlink ?? this._terminal.options.cursorBlink ? this._cursorBlinkStateManager.value = new Ht(() => {
      this._requestRedrawCursor();
    }, this._coreBrowserService) : this._cursorBlinkStateManager.clear(), this._requestRedrawCursor();
  }
  _updateModel(t, n) {
    let s15 = this._core, o2 = this._workCell, r6, a, l2, u2, c, d, h2 = 0, f = true, I2, L4, M4, q2, S2, W2, E, y, w3;
    t = mr(t, s15.rows - 1, 0), n = mr(n, s15.rows - 1, 0);
    let G4 = this._coreService.decPrivateModes.cursorStyle ?? s15.options.cursorStyle ?? "block", ue4 = this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY, Se4 = ue4 - s15.buffer.ydisp, ce4 = Math.min(this._terminal.buffer.active.cursorX, s15.cols - 1), we4 = -1, A2 = this._coreService.isCursorInitialized && !this._coreService.isCursorHidden && (!this._cursorBlinkStateManager.value || this._cursorBlinkStateManager.value.isCursorVisible);
    this._model.cursor = void 0;
    let se3 = false;
    for (a = t; a <= n; a++) for (l2 = a + s15.buffer.ydisp, u2 = s15.buffer.lines.get(l2), this._model.lineLengths[a] = 0, M4 = ue4 === l2, h2 = 0, c = this._characterJoinerService.getJoinedCharacters(l2), y = 0; y < s15.cols; y++) {
      if (r6 = this._cellColorResolver.result.bg, u2.loadCell(y, o2), y === 0 && (r6 = this._cellColorResolver.result.bg), d = false, f = y >= h2, I2 = y, c.length > 0 && y === c[0][0] && f) {
        L4 = c.shift();
        let v3 = this._model.selection.isCellSelected(this._terminal, L4[0], l2);
        for (E = L4[0] + 1; E < L4[1]; E++) f &&= v3 === this._model.selection.isCellSelected(this._terminal, E, l2);
        f &&= !M4 || ce4 < L4[0] || ce4 >= L4[1], f ? (d = true, o2 = new Ci(o2, u2.translateToString(true, L4[0], L4[1]), L4[1] - L4[0]), I2 = L4[1] - 1) : h2 = L4[1];
      }
      if (q2 = o2.getChars(), S2 = o2.getCode(), E = (a * s15.cols + y) * Ce2, this._cellColorResolver.resolve(o2, y, l2, this.dimensions.device.cell.width), A2 && l2 === ue4 && (y === ce4 && (this._model.cursor = { x: ce4, y: Se4, width: o2.getWidth(), style: this._coreBrowserService.isFocused ? G4 : s15.options.cursorInactiveStyle, cursorWidth: s15.options.cursorWidth, dpr: this._devicePixelRatio }, we4 = ce4 + o2.getWidth() - 1), y >= ce4 && y <= we4 && (this._coreBrowserService.isFocused && G4 === "block" || this._coreBrowserService.isFocused === false && s15.options.cursorInactiveStyle === "block") && (this._cellColorResolver.result.fg = 50331648 | this._themeService.colors.cursorAccent.rgba >> 8 & 16777215, this._cellColorResolver.result.bg = 50331648 | this._themeService.colors.cursor.rgba >> 8 & 16777215)), S2 !== 0 && (this._model.lineLengths[a] = y + 1), !(this._model.cells[E] === S2 && this._model.cells[E + ze] === this._cellColorResolver.result.bg && this._model.cells[E + qe2] === this._cellColorResolver.result.fg && this._model.cells[E + Ct] === this._cellColorResolver.result.ext) && (se3 = true, q2.length > 1 && (S2 |= Un), this._model.cells[E] = S2, this._model.cells[E + ze] = this._cellColorResolver.result.bg, this._model.cells[E + qe2] = this._cellColorResolver.result.fg, this._model.cells[E + Ct] = this._cellColorResolver.result.ext, W2 = o2.getWidth(), this._glyphRenderer.value.updateCell(y, a, S2, this._cellColorResolver.result.bg, this._cellColorResolver.result.fg, this._cellColorResolver.result.ext, q2, W2, r6), d)) {
        for (o2 = this._workCell, y++; y <= I2; y++) w3 = (a * s15.cols + y) * Ce2, this._glyphRenderer.value.updateCell(y, a, 0, 0, 0, 0, pn, 0, 0), this._model.cells[w3] = 0, this._model.cells[w3 + ze] = this._cellColorResolver.result.bg, this._model.cells[w3 + qe2] = this._cellColorResolver.result.fg, this._model.cells[w3 + Ct] = this._cellColorResolver.result.ext;
        y--;
      }
    }
    se3 && this._rectangleRenderer.value.updateBackgrounds(this._model), this._rectangleRenderer.value.updateCursor(this._model);
  }
  _updateDimensions() {
    !this._charSizeService.width || !this._charSizeService.height || (this.dimensions.device.char.width = Math.floor(this._charSizeService.width * this._devicePixelRatio), this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * this._devicePixelRatio), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.top = this._optionsService.rawOptions.lineHeight === 1 ? 0 : Math.round((this.dimensions.device.cell.height - this.dimensions.device.char.height) / 2), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.char.left = Math.floor(this._optionsService.rawOptions.letterSpacing / 2), this.dimensions.device.canvas.height = this._terminal.rows * this.dimensions.device.cell.height, this.dimensions.device.canvas.width = this._terminal.cols * this.dimensions.device.cell.width, this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / this._devicePixelRatio), this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / this._devicePixelRatio), this.dimensions.css.cell.height = this.dimensions.device.cell.height / this._devicePixelRatio, this.dimensions.css.cell.width = this.dimensions.device.cell.width / this._devicePixelRatio);
  }
  _setCanvasDevicePixelDimensions(t, n) {
    this._canvas.width === t && this._canvas.height === n || (this._canvas.width = t, this._canvas.height = n, this._requestRedrawViewport());
  }
  _requestRedrawViewport() {
    this._onRequestRedraw.fire({ start: 0, end: this._terminal.rows - 1 });
  }
  _requestRedrawCursor() {
    let t = this._terminal.buffer.active.cursorY;
    this._onRequestRedraw.fire({ start: t, end: t });
  }
};
var Ci = class extends he3 {
  constructor(t, n, s15) {
    super();
    this.content = 0;
    this.combinedData = "";
    this.fg = t.fg, this.bg = t.bg, this.combinedData = n, this._width = s15;
  }
  isCombined() {
    return 2097152;
  }
  getWidth() {
    return this._width;
  }
  getChars() {
    return this.combinedData;
  }
  getCode() {
    return 2097151;
  }
  setFromCharData(t) {
    throw new Error("not implemented");
  }
  getAsCharData() {
    return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
  }
};
function mr(i8, e, t = 0) {
  return Math.max(Math.min(i8, e), t);
}
var _r = "di$target";
var br = "di$dependencies";
var zi = /* @__PURE__ */ new Map();
function pe3(i8) {
  if (zi.has(i8)) return zi.get(i8);
  let e = function(t, n, s15) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    Us(e, t, s15);
  };
  return e._id = i8, zi.set(i8, e), e;
}
function Us(i8, e, t) {
  e[_r] === e ? e[br].push({ id: i8, index: t }) : (e[br] = [{ id: i8, index: t }], e[_r] = e);
}
var Vu = pe3("BufferService");
var Cu = pe3("CoreMouseService");
var zu = pe3("CoreService");
var qu = pe3("CharsetService");
var ju = pe3("InstantiationService");
var Xu = pe3("LogService");
var vr = pe3("OptionsService");
var Yu = pe3("OscLinkService");
var Qu = pe3("UnicodeService");
var Zu = pe3("DecorationService");
var Hs = { trace: 0, debug: 1, info: 2, warn: 3, error: 4, off: 5 };
var Ws = "xterm.js: ";
var ci = class extends B3 {
  constructor(t) {
    super();
    this._optionsService = t;
    this._logLevel = 5;
    this._updateLogLevel(), this._register(this._optionsService.onSpecificOptionChange("logLevel", () => this._updateLogLevel())), Tr = this;
  }
  get logLevel() {
    return this._logLevel;
  }
  _updateLogLevel() {
    this._logLevel = Hs[this._optionsService.rawOptions.logLevel];
  }
  _evalLazyOptionalParams(t) {
    for (let n = 0; n < t.length; n++) typeof t[n] == "function" && (t[n] = t[n]());
  }
  _log(t, n, s15) {
    this._evalLazyOptionalParams(s15), t.call(console, (this._optionsService.options.logger ? "" : Ws) + n, ...s15);
  }
  trace(t, ...n) {
    this._logLevel <= 0 && this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger) ?? console.log, t, n);
  }
  debug(t, ...n) {
    this._logLevel <= 1 && this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger) ?? console.log, t, n);
  }
  info(t, ...n) {
    this._logLevel <= 2 && this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger) ?? console.info, t, n);
  }
  warn(t, ...n) {
    this._logLevel <= 3 && this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger) ?? console.warn, t, n);
  }
  error(t, ...n) {
    this._logLevel <= 4 && this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger) ?? console.error, t, n);
  }
};
ci = Yi([Qi(0, vr)], ci);
var Tr;
function gr(i8) {
  Tr = i8;
}
var xr = class extends B3 {
  constructor(t) {
    if (vi && hn() < 16) {
      let n = { antialias: false, depth: false, preserveDrawingBuffer: true };
      if (!document.createElement("canvas").getContext("webgl2", n)) throw new Error("Webgl2 is only supported on Safari 16 and above");
    }
    super();
    this._preserveDrawingBuffer = t;
    this._onChangeTextureAtlas = this._register(new D2());
    this.onChangeTextureAtlas = this._onChangeTextureAtlas.event;
    this._onAddTextureAtlasCanvas = this._register(new D2());
    this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event;
    this._onRemoveTextureAtlasCanvas = this._register(new D2());
    this.onRemoveTextureAtlasCanvas = this._onRemoveTextureAtlasCanvas.event;
    this._onContextLoss = this._register(new D2());
    this.onContextLoss = this._onContextLoss.event;
  }
  activate(t) {
    let n = t._core;
    if (!t.element) {
      this._register(n.onWillOpen(() => this.activate(t)));
      return;
    }
    this._terminal = t;
    let s15 = n.coreService, o2 = n.optionsService, r6 = n, a = r6._renderService, l2 = r6._characterJoinerService, u2 = r6._charSizeService, c = r6._coreBrowserService, d = r6._decorationService, h2 = r6._logService, f = r6._themeService;
    gr(h2), this._renderer = this._register(new ui(t, l2, u2, c, s15, d, o2, f, this._preserveDrawingBuffer)), this._register(ee4.forward(this._renderer.onContextLoss, this._onContextLoss)), this._register(ee4.forward(this._renderer.onChangeTextureAtlas, this._onChangeTextureAtlas)), this._register(ee4.forward(this._renderer.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas)), this._register(ee4.forward(this._renderer.onRemoveTextureAtlasCanvas, this._onRemoveTextureAtlasCanvas)), a.setRenderer(this._renderer), this._register(O2(() => {
      if (this._terminal._core._store._isDisposed) return;
      let I2 = this._terminal._core._renderService;
      I2.setRenderer(this._terminal._core._createRenderer()), I2.handleResize(t.cols, t.rows);
    }));
  }
  get textureAtlas() {
    return this._renderer?.textureAtlas;
  }
  clearTextureAtlas() {
    this._renderer?.clearTextureAtlas();
  }
};

// node_modules/@xterm/xterm/lib/xterm.mjs
var zs = Object.defineProperty;
var Rl = Object.getOwnPropertyDescriptor;
var Ll = (s15, t) => {
  for (var e in t) zs(s15, e, { get: t[e], enumerable: true });
};
var M3 = (s15, t, e, i8) => {
  for (var r6 = i8 > 1 ? void 0 : i8 ? Rl(t, e) : t, n = s15.length - 1, o2; n >= 0; n--) (o2 = s15[n]) && (r6 = (i8 ? o2(t, e, r6) : o2(r6)) || r6);
  return i8 && r6 && zs(t, e, r6), r6;
};
var S = (s15, t) => (e, i8) => t(e, i8, s15);
var Gs = "Terminal input";
var mi2 = { get: () => Gs, set: (s15) => Gs = s15 };
var $s = "Too much output to announce, navigate to rows manually to read";
var _i2 = { get: () => $s, set: (s15) => $s = s15 };
function Al(s15) {
  return s15.replace(/\r?\n/g, "\r");
}
function kl(s15, t) {
  return t ? "\x1B[200~" + s15 + "\x1B[201~" : s15;
}
function Vs(s15, t) {
  s15.clipboardData && s15.clipboardData.setData("text/plain", t.selectionText), s15.preventDefault();
}
function qs(s15, t, e, i8) {
  if (s15.stopPropagation(), s15.clipboardData) {
    let r6 = s15.clipboardData.getData("text/plain");
    Cn2(r6, t, e, i8);
  }
}
function Cn2(s15, t, e, i8) {
  s15 = Al(s15), s15 = kl(s15, e.decPrivateModes.bracketedPasteMode && i8.rawOptions.ignoreBracketedPasteMode !== true), e.triggerDataEvent(s15, true), t.value = "";
}
function Mn2(s15, t, e) {
  let i8 = e.getBoundingClientRect(), r6 = s15.clientX - i8.left - 10, n = s15.clientY - i8.top - 10;
  t.style.width = "20px", t.style.height = "20px", t.style.left = `${r6}px`, t.style.top = `${n}px`, t.style.zIndex = "1000", t.focus();
}
function Pn2(s15, t, e, i8, r6) {
  Mn2(s15, t, e), r6 && i8.rightClickSelect(s15), t.value = i8.selectionText, t.select();
}
function Ce3(s15) {
  return s15 > 65535 ? (s15 -= 65536, String.fromCharCode((s15 >> 10) + 55296) + String.fromCharCode(s15 % 1024 + 56320)) : String.fromCharCode(s15);
}
function It2(s15, t = 0, e = s15.length) {
  let i8 = "";
  for (let r6 = t; r6 < e; ++r6) {
    let n = s15[r6];
    n > 65535 ? (n -= 65536, i8 += String.fromCharCode((n >> 10) + 55296) + String.fromCharCode(n % 1024 + 56320)) : i8 += String.fromCharCode(n);
  }
  return i8;
}
var er2 = class {
  constructor() {
    this._interim = 0;
  }
  clear() {
    this._interim = 0;
  }
  decode(t, e) {
    let i8 = t.length;
    if (!i8) return 0;
    let r6 = 0, n = 0;
    if (this._interim) {
      let o2 = t.charCodeAt(n++);
      56320 <= o2 && o2 <= 57343 ? e[r6++] = (this._interim - 55296) * 1024 + o2 - 56320 + 65536 : (e[r6++] = this._interim, e[r6++] = o2), this._interim = 0;
    }
    for (let o2 = n; o2 < i8; ++o2) {
      let l2 = t.charCodeAt(o2);
      if (55296 <= l2 && l2 <= 56319) {
        if (++o2 >= i8) return this._interim = l2, r6;
        let a = t.charCodeAt(o2);
        56320 <= a && a <= 57343 ? e[r6++] = (l2 - 55296) * 1024 + a - 56320 + 65536 : (e[r6++] = l2, e[r6++] = a);
        continue;
      }
      l2 !== 65279 && (e[r6++] = l2);
    }
    return r6;
  }
};
var tr2 = class {
  constructor() {
    this.interim = new Uint8Array(3);
  }
  clear() {
    this.interim.fill(0);
  }
  decode(t, e) {
    let i8 = t.length;
    if (!i8) return 0;
    let r6 = 0, n, o2, l2, a, u2 = 0, h2 = 0;
    if (this.interim[0]) {
      let _4 = false, p2 = this.interim[0];
      p2 &= (p2 & 224) === 192 ? 31 : (p2 & 240) === 224 ? 15 : 7;
      let m2 = 0, f;
      for (; (f = this.interim[++m2] & 63) && m2 < 4; ) p2 <<= 6, p2 |= f;
      let A2 = (this.interim[0] & 224) === 192 ? 2 : (this.interim[0] & 240) === 224 ? 3 : 4, R3 = A2 - m2;
      for (; h2 < R3; ) {
        if (h2 >= i8) return 0;
        if (f = t[h2++], (f & 192) !== 128) {
          h2--, _4 = true;
          break;
        } else this.interim[m2++] = f, p2 <<= 6, p2 |= f & 63;
      }
      _4 || (A2 === 2 ? p2 < 128 ? h2-- : e[r6++] = p2 : A2 === 3 ? p2 < 2048 || p2 >= 55296 && p2 <= 57343 || p2 === 65279 || (e[r6++] = p2) : p2 < 65536 || p2 > 1114111 || (e[r6++] = p2)), this.interim.fill(0);
    }
    let c = i8 - 4, d = h2;
    for (; d < i8; ) {
      for (; d < c && !((n = t[d]) & 128) && !((o2 = t[d + 1]) & 128) && !((l2 = t[d + 2]) & 128) && !((a = t[d + 3]) & 128); ) e[r6++] = n, e[r6++] = o2, e[r6++] = l2, e[r6++] = a, d += 4;
      if (n = t[d++], n < 128) e[r6++] = n;
      else if ((n & 224) === 192) {
        if (d >= i8) return this.interim[0] = n, r6;
        if (o2 = t[d++], (o2 & 192) !== 128) {
          d--;
          continue;
        }
        if (u2 = (n & 31) << 6 | o2 & 63, u2 < 128) {
          d--;
          continue;
        }
        e[r6++] = u2;
      } else if ((n & 240) === 224) {
        if (d >= i8) return this.interim[0] = n, r6;
        if (o2 = t[d++], (o2 & 192) !== 128) {
          d--;
          continue;
        }
        if (d >= i8) return this.interim[0] = n, this.interim[1] = o2, r6;
        if (l2 = t[d++], (l2 & 192) !== 128) {
          d--;
          continue;
        }
        if (u2 = (n & 15) << 12 | (o2 & 63) << 6 | l2 & 63, u2 < 2048 || u2 >= 55296 && u2 <= 57343 || u2 === 65279) continue;
        e[r6++] = u2;
      } else if ((n & 248) === 240) {
        if (d >= i8) return this.interim[0] = n, r6;
        if (o2 = t[d++], (o2 & 192) !== 128) {
          d--;
          continue;
        }
        if (d >= i8) return this.interim[0] = n, this.interim[1] = o2, r6;
        if (l2 = t[d++], (l2 & 192) !== 128) {
          d--;
          continue;
        }
        if (d >= i8) return this.interim[0] = n, this.interim[1] = o2, this.interim[2] = l2, r6;
        if (a = t[d++], (a & 192) !== 128) {
          d--;
          continue;
        }
        if (u2 = (n & 7) << 18 | (o2 & 63) << 12 | (l2 & 63) << 6 | a & 63, u2 < 65536 || u2 > 1114111) continue;
        e[r6++] = u2;
      }
    }
    return r6;
  }
};
var ir = "";
var we3 = " ";
var De4 = class s {
  constructor() {
    this.fg = 0;
    this.bg = 0;
    this.extended = new rt3();
  }
  static toColorRGB(t) {
    return [t >>> 16 & 255, t >>> 8 & 255, t & 255];
  }
  static fromColorRGB(t) {
    return (t[0] & 255) << 16 | (t[1] & 255) << 8 | t[2] & 255;
  }
  clone() {
    let t = new s();
    return t.fg = this.fg, t.bg = this.bg, t.extended = this.extended.clone(), t;
  }
  isInverse() {
    return this.fg & 67108864;
  }
  isBold() {
    return this.fg & 134217728;
  }
  isUnderline() {
    return this.hasExtendedAttrs() && this.extended.underlineStyle !== 0 ? 1 : this.fg & 268435456;
  }
  isBlink() {
    return this.fg & 536870912;
  }
  isInvisible() {
    return this.fg & 1073741824;
  }
  isItalic() {
    return this.bg & 67108864;
  }
  isDim() {
    return this.bg & 134217728;
  }
  isStrikethrough() {
    return this.fg & 2147483648;
  }
  isProtected() {
    return this.bg & 536870912;
  }
  isOverline() {
    return this.bg & 1073741824;
  }
  getFgColorMode() {
    return this.fg & 50331648;
  }
  getBgColorMode() {
    return this.bg & 50331648;
  }
  isFgRGB() {
    return (this.fg & 50331648) === 50331648;
  }
  isBgRGB() {
    return (this.bg & 50331648) === 50331648;
  }
  isFgPalette() {
    return (this.fg & 50331648) === 16777216 || (this.fg & 50331648) === 33554432;
  }
  isBgPalette() {
    return (this.bg & 50331648) === 16777216 || (this.bg & 50331648) === 33554432;
  }
  isFgDefault() {
    return (this.fg & 50331648) === 0;
  }
  isBgDefault() {
    return (this.bg & 50331648) === 0;
  }
  isAttributeDefault() {
    return this.fg === 0 && this.bg === 0;
  }
  getFgColor() {
    switch (this.fg & 50331648) {
      case 16777216:
      case 33554432:
        return this.fg & 255;
      case 50331648:
        return this.fg & 16777215;
      default:
        return -1;
    }
  }
  getBgColor() {
    switch (this.bg & 50331648) {
      case 16777216:
      case 33554432:
        return this.bg & 255;
      case 50331648:
        return this.bg & 16777215;
      default:
        return -1;
    }
  }
  hasExtendedAttrs() {
    return this.bg & 268435456;
  }
  updateExtended() {
    this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
  }
  getUnderlineColor() {
    if (this.bg & 268435456 && ~this.extended.underlineColor) switch (this.extended.underlineColor & 50331648) {
      case 16777216:
      case 33554432:
        return this.extended.underlineColor & 255;
      case 50331648:
        return this.extended.underlineColor & 16777215;
      default:
        return this.getFgColor();
    }
    return this.getFgColor();
  }
  getUnderlineColorMode() {
    return this.bg & 268435456 && ~this.extended.underlineColor ? this.extended.underlineColor & 50331648 : this.getFgColorMode();
  }
  isUnderlineColorRGB() {
    return this.bg & 268435456 && ~this.extended.underlineColor ? (this.extended.underlineColor & 50331648) === 50331648 : this.isFgRGB();
  }
  isUnderlineColorPalette() {
    return this.bg & 268435456 && ~this.extended.underlineColor ? (this.extended.underlineColor & 50331648) === 16777216 || (this.extended.underlineColor & 50331648) === 33554432 : this.isFgPalette();
  }
  isUnderlineColorDefault() {
    return this.bg & 268435456 && ~this.extended.underlineColor ? (this.extended.underlineColor & 50331648) === 0 : this.isFgDefault();
  }
  getUnderlineStyle() {
    return this.fg & 268435456 ? this.bg & 268435456 ? this.extended.underlineStyle : 1 : 0;
  }
  getUnderlineVariantOffset() {
    return this.extended.underlineVariantOffset;
  }
};
var rt3 = class s2 {
  constructor(t = 0, e = 0) {
    this._ext = 0;
    this._urlId = 0;
    this._ext = t, this._urlId = e;
  }
  get ext() {
    return this._urlId ? this._ext & -469762049 | this.underlineStyle << 26 : this._ext;
  }
  set ext(t) {
    this._ext = t;
  }
  get underlineStyle() {
    return this._urlId ? 5 : (this._ext & 469762048) >> 26;
  }
  set underlineStyle(t) {
    this._ext &= -469762049, this._ext |= t << 26 & 469762048;
  }
  get underlineColor() {
    return this._ext & 67108863;
  }
  set underlineColor(t) {
    this._ext &= -67108864, this._ext |= t & 67108863;
  }
  get urlId() {
    return this._urlId;
  }
  set urlId(t) {
    this._urlId = t;
  }
  get underlineVariantOffset() {
    let t = (this._ext & 3758096384) >> 29;
    return t < 0 ? t ^ 4294967288 : t;
  }
  set underlineVariantOffset(t) {
    this._ext &= 536870911, this._ext |= t << 29 & 3758096384;
  }
  clone() {
    return new s2(this._ext, this._urlId);
  }
  isEmpty() {
    return this.underlineStyle === 0 && this._urlId === 0;
  }
};
var q = class s3 extends De4 {
  constructor() {
    super(...arguments);
    this.content = 0;
    this.fg = 0;
    this.bg = 0;
    this.extended = new rt3();
    this.combinedData = "";
  }
  static fromCharData(e) {
    let i8 = new s3();
    return i8.setFromCharData(e), i8;
  }
  isCombined() {
    return this.content & 2097152;
  }
  getWidth() {
    return this.content >> 22;
  }
  getChars() {
    return this.content & 2097152 ? this.combinedData : this.content & 2097151 ? Ce3(this.content & 2097151) : "";
  }
  getCode() {
    return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : this.content & 2097151;
  }
  setFromCharData(e) {
    this.fg = e[0], this.bg = 0;
    let i8 = false;
    if (e[1].length > 2) i8 = true;
    else if (e[1].length === 2) {
      let r6 = e[1].charCodeAt(0);
      if (55296 <= r6 && r6 <= 56319) {
        let n = e[1].charCodeAt(1);
        56320 <= n && n <= 57343 ? this.content = (r6 - 55296) * 1024 + n - 56320 + 65536 | e[2] << 22 : i8 = true;
      } else i8 = true;
    } else this.content = e[1].charCodeAt(0) | e[2] << 22;
    i8 && (this.combinedData = e[1], this.content = 2097152 | e[2] << 22);
  }
  getAsCharData() {
    return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
  }
};
var js = "di$target";
var Hn2 = "di$dependencies";
var Fn2 = /* @__PURE__ */ new Map();
function Xs(s15) {
  return s15[Hn2] || [];
}
function ie3(s15) {
  if (Fn2.has(s15)) return Fn2.get(s15);
  let t = function(e, i8, r6) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    Pl(t, e, r6);
  };
  return t._id = s15, Fn2.set(s15, t), t;
}
function Pl(s15, t, e) {
  t[js] === t ? t[Hn2].push({ id: s15, index: e }) : (t[Hn2] = [{ id: s15, index: e }], t[js] = t);
}
var F2 = ie3("BufferService");
var rr = ie3("CoreMouseService");
var ge3 = ie3("CoreService");
var Zs = ie3("CharsetService");
var xt4 = ie3("InstantiationService");
var nr2 = ie3("LogService");
var H4 = ie3("OptionsService");
var sr2 = ie3("OscLinkService");
var Js = ie3("UnicodeService");
var Be4 = ie3("DecorationService");
var wt2 = class {
  constructor(t, e, i8) {
    this._bufferService = t;
    this._optionsService = e;
    this._oscLinkService = i8;
  }
  provideLinks(t, e) {
    let i8 = this._bufferService.buffer.lines.get(t - 1);
    if (!i8) {
      e(void 0);
      return;
    }
    let r6 = [], n = this._optionsService.rawOptions.linkHandler, o2 = new q(), l2 = i8.getTrimmedLength(), a = -1, u2 = -1, h2 = false;
    for (let c = 0; c < l2; c++) if (!(u2 === -1 && !i8.hasContent(c))) {
      if (i8.loadCell(c, o2), o2.hasExtendedAttrs() && o2.extended.urlId) if (u2 === -1) {
        u2 = c, a = o2.extended.urlId;
        continue;
      } else h2 = o2.extended.urlId !== a;
      else u2 !== -1 && (h2 = true);
      if (h2 || u2 !== -1 && c === l2 - 1) {
        let d = this._oscLinkService.getLinkData(a)?.uri;
        if (d) {
          let _4 = { start: { x: u2 + 1, y: t }, end: { x: c + (!h2 && c === l2 - 1 ? 1 : 0), y: t } }, p2 = false;
          if (!n?.allowNonHttpProtocols) try {
            let m2 = new URL(d);
            ["http:", "https:"].includes(m2.protocol) || (p2 = true);
          } catch {
            p2 = true;
          }
          p2 || r6.push({ text: d, range: _4, activate: (m2, f) => n ? n.activate(m2, f, _4) : Ol(m2, f), hover: (m2, f) => n?.hover?.(m2, f, _4), leave: (m2, f) => n?.leave?.(m2, f, _4) });
        }
        h2 = false, o2.hasExtendedAttrs() && o2.extended.urlId ? (u2 = c, a = o2.extended.urlId) : (u2 = -1, a = -1);
      }
    }
    e(r6);
  }
};
wt2 = M3([S(0, F2), S(1, H4), S(2, sr2)], wt2);
function Ol(s15, t) {
  if (confirm(`Do you want to navigate to ${t}?

WARNING: This link could potentially be dangerous`)) {
    let i8 = window.open();
    if (i8) {
      try {
        i8.opener = null;
      } catch {
      }
      i8.location.href = t;
    } else console.warn("Opening link blocked as opener could not be cleared");
  }
}
var nt3 = ie3("CharSizeService");
var ae2 = ie3("CoreBrowserService");
var Dt2 = ie3("MouseService");
var ce3 = ie3("RenderService");
var Qs = ie3("SelectionService");
var or2 = ie3("CharacterJoinerService");
var Re3 = ie3("ThemeService");
var lr = ie3("LinkProviderService");
var Wn2 = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(t) {
      setTimeout(() => {
        throw t.stack ? ar2.isErrorNoTelemetry(t) ? new ar2(t.message + `

` + t.stack) : new Error(t.message + `

` + t.stack) : t;
      }, 0);
    };
  }
  addListener(t) {
    return this.listeners.push(t), () => {
      this._removeListener(t);
    };
  }
  emit(t) {
    this.listeners.forEach((e) => {
      e(t);
    });
  }
  _removeListener(t) {
    this.listeners.splice(this.listeners.indexOf(t), 1);
  }
  setUnexpectedErrorHandler(t) {
    this.unexpectedErrorHandler = t;
  }
  getUnexpectedErrorHandler() {
    return this.unexpectedErrorHandler;
  }
  onUnexpectedError(t) {
    this.unexpectedErrorHandler(t), this.emit(t);
  }
  onUnexpectedExternalError(t) {
    this.unexpectedErrorHandler(t);
  }
};
var Bl = new Wn2();
function Lt2(s15) {
  Nl(s15) || Bl.onUnexpectedError(s15);
}
var Un2 = "Canceled";
function Nl(s15) {
  return s15 instanceof bi2 ? true : s15 instanceof Error && s15.name === Un2 && s15.message === Un2;
}
var bi2 = class extends Error {
  constructor() {
    super(Un2), this.name = this.message;
  }
};
function eo(s15) {
  return s15 ? new Error(`Illegal argument: ${s15}`) : new Error("Illegal argument");
}
var ar2 = class s4 extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof s4) return t;
    let e = new s4();
    return e.message = t.message, e.stack = t.stack, e;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
};
var Rt2 = class s5 extends Error {
  constructor(t) {
    super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, s5.prototype);
  }
};
function Fl(s15, t, e = 0, i8 = s15.length) {
  let r6 = e, n = i8;
  for (; r6 < n; ) {
    let o2 = Math.floor((r6 + n) / 2);
    t(s15[o2]) ? r6 = o2 + 1 : n = o2;
  }
  return r6 - 1;
}
var cr2 = class cr3 {
  constructor(t) {
    this._array = t;
    this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (cr3.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (let i8 of this._array) if (this._prevFindLastPredicate(i8) && !t(i8)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = t;
    }
    let e = Fl(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = e + 1, e === -1 ? void 0 : this._array[e];
  }
};
cr2.assertInvariants = false;
function Se3(s15, t = 0) {
  return s15[s15.length - (1 + t)];
}
var ro;
((l2) => {
  function s15(a) {
    return a < 0;
  }
  l2.isLessThan = s15;
  function t(a) {
    return a <= 0;
  }
  l2.isLessThanOrEqual = t;
  function e(a) {
    return a > 0;
  }
  l2.isGreaterThan = e;
  function i8(a) {
    return a === 0;
  }
  l2.isNeitherLessOrGreaterThan = i8, l2.greaterThan = 1, l2.lessThan = -1, l2.neitherLessOrGreaterThan = 0;
})(ro ||= {});
function no(s15, t) {
  return (e, i8) => t(s15(e), s15(i8));
}
var so = (s15, t) => s15 - t;
var At2 = class At3 {
  constructor(t) {
    this.iterate = t;
  }
  forEach(t) {
    this.iterate((e) => (t(e), true));
  }
  toArray() {
    let t = [];
    return this.iterate((e) => (t.push(e), true)), t;
  }
  filter(t) {
    return new At3((e) => this.iterate((i8) => t(i8) ? e(i8) : true));
  }
  map(t) {
    return new At3((e) => this.iterate((i8) => e(t(i8))));
  }
  some(t) {
    let e = false;
    return this.iterate((i8) => (e = t(i8), !e)), e;
  }
  findFirst(t) {
    let e;
    return this.iterate((i8) => t(i8) ? (e = i8, false) : true), e;
  }
  findLast(t) {
    let e;
    return this.iterate((i8) => (t(i8) && (e = i8), true)), e;
  }
  findLastMaxBy(t) {
    let e, i8 = true;
    return this.iterate((r6) => ((i8 || ro.isGreaterThan(t(r6, e))) && (i8 = false, e = r6), true)), e;
  }
};
At2.empty = new At2((t) => {
});
function co(s15, t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let i8 of s15) {
    let r6 = t(i8), n = e[r6];
    n || (n = e[r6] = []), n.push(i8);
  }
  return e;
}
var lo2;
var ao2;
var oo2 = class {
  constructor(t, e) {
    this.toKey = e;
    this._map = /* @__PURE__ */ new Map();
    this[lo2] = "SetWithKey";
    for (let i8 of t) this.add(i8);
  }
  get size() {
    return this._map.size;
  }
  add(t) {
    let e = this.toKey(t);
    return this._map.set(e, t), this;
  }
  delete(t) {
    return this._map.delete(this.toKey(t));
  }
  has(t) {
    return this._map.has(this.toKey(t));
  }
  *entries() {
    for (let t of this._map.values()) yield [t, t];
  }
  keys() {
    return this.values();
  }
  *values() {
    for (let t of this._map.values()) yield t;
  }
  clear() {
    this._map.clear();
  }
  forEach(t, e) {
    this._map.forEach((i8) => t.call(e, i8, i8, this));
  }
  [(ao2 = Symbol.iterator, lo2 = Symbol.toStringTag, ao2)]() {
    return this.values();
  }
};
var ur2 = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(t, e) {
    let i8 = this.map.get(t);
    i8 || (i8 = /* @__PURE__ */ new Set(), this.map.set(t, i8)), i8.add(e);
  }
  delete(t, e) {
    let i8 = this.map.get(t);
    i8 && (i8.delete(e), i8.size === 0 && this.map.delete(t));
  }
  forEach(t, e) {
    let i8 = this.map.get(t);
    i8 && i8.forEach(e);
  }
  get(t) {
    let e = this.map.get(t);
    return e || /* @__PURE__ */ new Set();
  }
};
function Kn2(s15, t) {
  let e = this, i8 = false, r6;
  return function() {
    if (i8) return r6;
    if (i8 = true, t) try {
      r6 = s15.apply(e, arguments);
    } finally {
      t();
    }
    else r6 = s15.apply(e, arguments);
    return r6;
  };
}
var zn2;
((O3) => {
  function s15(I2) {
    return I2 && typeof I2 == "object" && typeof I2[Symbol.iterator] == "function";
  }
  O3.is = s15;
  let t = Object.freeze([]);
  function e() {
    return t;
  }
  O3.empty = e;
  function* i8(I2) {
    yield I2;
  }
  O3.single = i8;
  function r6(I2) {
    return s15(I2) ? I2 : i8(I2);
  }
  O3.wrap = r6;
  function n(I2) {
    return I2 || t;
  }
  O3.from = n;
  function* o2(I2) {
    for (let k5 = I2.length - 1; k5 >= 0; k5--) yield I2[k5];
  }
  O3.reverse = o2;
  function l2(I2) {
    return !I2 || I2[Symbol.iterator]().next().done === true;
  }
  O3.isEmpty = l2;
  function a(I2) {
    return I2[Symbol.iterator]().next().value;
  }
  O3.first = a;
  function u2(I2, k5) {
    let P4 = 0;
    for (let oe of I2) if (k5(oe, P4++)) return true;
    return false;
  }
  O3.some = u2;
  function h2(I2, k5) {
    for (let P4 of I2) if (k5(P4)) return P4;
  }
  O3.find = h2;
  function* c(I2, k5) {
    for (let P4 of I2) k5(P4) && (yield P4);
  }
  O3.filter = c;
  function* d(I2, k5) {
    let P4 = 0;
    for (let oe of I2) yield k5(oe, P4++);
  }
  O3.map = d;
  function* _4(I2, k5) {
    let P4 = 0;
    for (let oe of I2) yield* k5(oe, P4++);
  }
  O3.flatMap = _4;
  function* p2(...I2) {
    for (let k5 of I2) yield* k5;
  }
  O3.concat = p2;
  function m2(I2, k5, P4) {
    let oe = P4;
    for (let Me4 of I2) oe = k5(oe, Me4);
    return oe;
  }
  O3.reduce = m2;
  function* f(I2, k5, P4 = I2.length) {
    for (k5 < 0 && (k5 += I2.length), P4 < 0 ? P4 += I2.length : P4 > I2.length && (P4 = I2.length); k5 < P4; k5++) yield I2[k5];
  }
  O3.slice = f;
  function A2(I2, k5 = Number.POSITIVE_INFINITY) {
    let P4 = [];
    if (k5 === 0) return [P4, I2];
    let oe = I2[Symbol.iterator]();
    for (let Me4 = 0; Me4 < k5; Me4++) {
      let Pe4 = oe.next();
      if (Pe4.done) return [P4, O3.empty()];
      P4.push(Pe4.value);
    }
    return [P4, { [Symbol.iterator]() {
      return oe;
    } }];
  }
  O3.consume = A2;
  async function R3(I2) {
    let k5 = [];
    for await (let P4 of I2) k5.push(P4);
    return Promise.resolve(k5);
  }
  O3.asyncToArray = R3;
})(zn2 ||= {});
var Wl = false;
var dt2 = null;
var hr2 = class hr3 {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let e = this.livingDisposables.get(t);
    return e || (e = { parent: null, source: null, isSingleton: false, value: t, idx: hr3.idx++ }, this.livingDisposables.set(t, e)), e;
  }
  trackDisposable(t) {
    let e = this.getDisposableData(t);
    e.source || (e.source = new Error().stack);
  }
  setParent(t, e) {
    let i8 = this.getDisposableData(t);
    i8.parent = e;
  }
  markAsDisposed(t) {
    this.livingDisposables.delete(t);
  }
  markAsSingleton(t) {
    this.getDisposableData(t).isSingleton = true;
  }
  getRootParent(t, e) {
    let i8 = e.get(t);
    if (i8) return i8;
    let r6 = t.parent ? this.getRootParent(this.getDisposableData(t.parent), e) : t;
    return e.set(t, r6), r6;
  }
  getTrackedDisposables() {
    let t = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, i8]) => i8.source !== null && !this.getRootParent(i8, t).isSingleton).flatMap(([i8]) => i8);
  }
  computeLeakingDisposables(t = 10, e) {
    let i8;
    if (e) i8 = e;
    else {
      let a = /* @__PURE__ */ new Map(), u2 = [...this.livingDisposables.values()].filter((c) => c.source !== null && !this.getRootParent(c, a).isSingleton);
      if (u2.length === 0) return;
      let h2 = new Set(u2.map((c) => c.value));
      if (i8 = u2.filter((c) => !(c.parent && h2.has(c.parent))), i8.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!i8) return;
    function r6(a) {
      function u2(c, d) {
        for (; c.length > 0 && d.some((_4) => typeof _4 == "string" ? _4 === c[0] : c[0].match(_4)); ) c.shift();
      }
      let h2 = a.source.split(`
`).map((c) => c.trim().replace("at ", "")).filter((c) => c !== "");
      return u2(h2, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), h2.reverse();
    }
    let n = new ur2();
    for (let a of i8) {
      let u2 = r6(a);
      for (let h2 = 0; h2 <= u2.length; h2++) n.add(u2.slice(0, h2).join(`
`), a);
    }
    i8.sort(no((a) => a.idx, so));
    let o2 = "", l2 = 0;
    for (let a of i8.slice(0, t)) {
      l2++;
      let u2 = r6(a), h2 = [];
      for (let c = 0; c < u2.length; c++) {
        let d = u2[c];
        d = `(shared with ${n.get(u2.slice(0, c + 1).join(`
`)).size}/${i8.length} leaks) at ${d}`;
        let p2 = n.get(u2.slice(0, c).join(`
`)), m2 = co([...p2].map((f) => r6(f)[c]), (f) => f);
        delete m2[u2[c]];
        for (let [f, A2] of Object.entries(m2)) h2.unshift(`    - stacktraces of ${A2.length} other leaks continue with ${f}`);
        h2.unshift(d);
      }
      o2 += `


==================== Leaking disposable ${l2}/${i8.length}: ${a.value.constructor.name} ====================
${h2.join(`
`)}
============================================================

`;
    }
    return i8.length > t && (o2 += `


... and ${i8.length - t} more leaking disposables

`), { leaks: i8, details: o2 };
  }
};
hr2.idx = 0;
function Ul(s15) {
  dt2 = s15;
}
if (Wl) {
  let s15 = "__is_disposable_tracked__";
  Ul(new class {
    trackDisposable(t) {
      let e = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        t[s15] || console.log(e);
      }, 3e3);
    }
    setParent(t, e) {
      if (t && t !== D3.None) try {
        t[s15] = true;
      } catch {
      }
    }
    markAsDisposed(t) {
      if (t && t !== D3.None) try {
        t[s15] = true;
      } catch {
      }
    }
    markAsSingleton(t) {
    }
  }());
}
function fr2(s15) {
  return dt2?.trackDisposable(s15), s15;
}
function pr(s15) {
  dt2?.markAsDisposed(s15);
}
function vi2(s15, t) {
  dt2?.setParent(s15, t);
}
function Kl(s15, t) {
  if (dt2) for (let e of s15) dt2.setParent(e, t);
}
function Gn2(s15) {
  return dt2?.markAsSingleton(s15), s15;
}
function Ne2(s15) {
  if (zn2.is(s15)) {
    let t = [];
    for (let e of s15) if (e) try {
      e.dispose();
    } catch (i8) {
      t.push(i8);
    }
    if (t.length === 1) throw t[0];
    if (t.length > 1) throw new AggregateError(t, "Encountered errors while disposing of store");
    return Array.isArray(s15) ? [] : s15;
  } else if (s15) return s15.dispose(), s15;
}
function ho(...s15) {
  let t = C3(() => Ne2(s15));
  return Kl(s15, t), t;
}
function C3(s15) {
  let t = fr2({ dispose: Kn2(() => {
    pr(t), s15();
  }) });
  return t;
}
var dr2 = class dr3 {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set();
    this._isDisposed = false;
    fr2(this);
  }
  dispose() {
    this._isDisposed || (pr(this), this._isDisposed = true, this.clear());
  }
  get isDisposed() {
    return this._isDisposed;
  }
  clear() {
    if (this._toDispose.size !== 0) try {
      Ne2(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  add(t) {
    if (!t) return t;
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    return vi2(t, this), this._isDisposed ? dr3.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(t), t;
  }
  delete(t) {
    if (t) {
      if (t === this) throw new Error("Cannot dispose a disposable on itself!");
      this._toDispose.delete(t), t.dispose();
    }
  }
  deleteAndLeak(t) {
    t && this._toDispose.has(t) && (this._toDispose.delete(t), vi2(t, null));
  }
};
dr2.DISABLE_DISPOSED_WARNING = false;
var Ee4 = dr2;
var D3 = class {
  constructor() {
    this._store = new Ee4();
    fr2(this), vi2(this._store, this);
  }
  dispose() {
    pr(this), this._store.dispose();
  }
  _register(t) {
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(t);
  }
};
D3.None = Object.freeze({ dispose() {
} });
var ye4 = class {
  constructor() {
    this._isDisposed = false;
    fr2(this);
  }
  get value() {
    return this._isDisposed ? void 0 : this._value;
  }
  set value(t) {
    this._isDisposed || t === this._value || (this._value?.dispose(), t && vi2(t, this), this._value = t);
  }
  clear() {
    this.value = void 0;
  }
  dispose() {
    this._isDisposed = true, pr(this), this._value?.dispose(), this._value = void 0;
  }
  clearAndLeak() {
    let t = this._value;
    return this._value = void 0, t && vi2(t, null), t;
  }
};
var fe4 = typeof window == "object" ? window : globalThis;
var kt2 = class kt3 {
  constructor(t) {
    this.element = t, this.next = kt3.Undefined, this.prev = kt3.Undefined;
  }
};
kt2.Undefined = new kt2(void 0);
var G3 = kt2;
var Ct2 = class {
  constructor() {
    this._first = G3.Undefined;
    this._last = G3.Undefined;
    this._size = 0;
  }
  get size() {
    return this._size;
  }
  isEmpty() {
    return this._first === G3.Undefined;
  }
  clear() {
    let t = this._first;
    for (; t !== G3.Undefined; ) {
      let e = t.next;
      t.prev = G3.Undefined, t.next = G3.Undefined, t = e;
    }
    this._first = G3.Undefined, this._last = G3.Undefined, this._size = 0;
  }
  unshift(t) {
    return this._insert(t, false);
  }
  push(t) {
    return this._insert(t, true);
  }
  _insert(t, e) {
    let i8 = new G3(t);
    if (this._first === G3.Undefined) this._first = i8, this._last = i8;
    else if (e) {
      let n = this._last;
      this._last = i8, i8.prev = n, n.next = i8;
    } else {
      let n = this._first;
      this._first = i8, i8.next = n, n.prev = i8;
    }
    this._size += 1;
    let r6 = false;
    return () => {
      r6 || (r6 = true, this._remove(i8));
    };
  }
  shift() {
    if (this._first !== G3.Undefined) {
      let t = this._first.element;
      return this._remove(this._first), t;
    }
  }
  pop() {
    if (this._last !== G3.Undefined) {
      let t = this._last.element;
      return this._remove(this._last), t;
    }
  }
  _remove(t) {
    if (t.prev !== G3.Undefined && t.next !== G3.Undefined) {
      let e = t.prev;
      e.next = t.next, t.next.prev = e;
    } else t.prev === G3.Undefined && t.next === G3.Undefined ? (this._first = G3.Undefined, this._last = G3.Undefined) : t.next === G3.Undefined ? (this._last = this._last.prev, this._last.next = G3.Undefined) : t.prev === G3.Undefined && (this._first = this._first.next, this._first.prev = G3.Undefined);
    this._size -= 1;
  }
  *[Symbol.iterator]() {
    let t = this._first;
    for (; t !== G3.Undefined; ) yield t.element, t = t.next;
  }
};
var zl = globalThis.performance && typeof globalThis.performance.now == "function";
var mr2 = class s6 {
  static create(t) {
    return new s6(t);
  }
  constructor(t) {
    this._now = zl && t === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
  }
  stop() {
    this._stopTime = this._now();
  }
  reset() {
    this._startTime = this._now(), this._stopTime = -1;
  }
  elapsed() {
    return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime;
  }
};
var Gl = false;
var fo = false;
var $l = false;
var $2;
((Qe2) => {
  Qe2.None = () => D3.None;
  function t(y) {
    if ($l) {
      let { onDidAddListener: T2 } = y, g2 = gi2.create(), w3 = 0;
      y.onDidAddListener = () => {
        ++w3 === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), g2.print()), T2?.();
      };
    }
  }
  function e(y, T2) {
    return d(y, () => {
    }, 0, void 0, true, void 0, T2);
  }
  Qe2.defer = e;
  function i8(y) {
    return (T2, g2 = null, w3) => {
      let E = false, x;
      return x = y((N3) => {
        if (!E) return x ? x.dispose() : E = true, T2.call(g2, N3);
      }, null, w3), E && x.dispose(), x;
    };
  }
  Qe2.once = i8;
  function r6(y, T2, g2) {
    return h2((w3, E = null, x) => y((N3) => w3.call(E, T2(N3)), null, x), g2);
  }
  Qe2.map = r6;
  function n(y, T2, g2) {
    return h2((w3, E = null, x) => y((N3) => {
      T2(N3), w3.call(E, N3);
    }, null, x), g2);
  }
  Qe2.forEach = n;
  function o2(y, T2, g2) {
    return h2((w3, E = null, x) => y((N3) => T2(N3) && w3.call(E, N3), null, x), g2);
  }
  Qe2.filter = o2;
  function l2(y) {
    return y;
  }
  Qe2.signal = l2;
  function a(...y) {
    return (T2, g2 = null, w3) => {
      let E = ho(...y.map((x) => x((N3) => T2.call(g2, N3))));
      return c(E, w3);
    };
  }
  Qe2.any = a;
  function u2(y, T2, g2, w3) {
    let E = g2;
    return r6(y, (x) => (E = T2(E, x), E), w3);
  }
  Qe2.reduce = u2;
  function h2(y, T2) {
    let g2, w3 = { onWillAddFirstListener() {
      g2 = y(E.fire, E);
    }, onDidRemoveLastListener() {
      g2?.dispose();
    } };
    T2 || t(w3);
    let E = new v2(w3);
    return T2?.add(E), E.event;
  }
  function c(y, T2) {
    return T2 instanceof Array ? T2.push(y) : T2 && T2.add(y), y;
  }
  function d(y, T2, g2 = 100, w3 = false, E = false, x, N3) {
    let Z4, te4, Oe3, ze2 = 0, le3, et3 = { leakWarningThreshold: x, onWillAddFirstListener() {
      Z4 = y((ht2) => {
        ze2++, te4 = T2(te4, ht2), w3 && !Oe3 && (me4.fire(te4), te4 = void 0), le3 = () => {
          let fi2 = te4;
          te4 = void 0, Oe3 = void 0, (!w3 || ze2 > 1) && me4.fire(fi2), ze2 = 0;
        }, typeof g2 == "number" ? (clearTimeout(Oe3), Oe3 = setTimeout(le3, g2)) : Oe3 === void 0 && (Oe3 = 0, queueMicrotask(le3));
      });
    }, onWillRemoveListener() {
      E && ze2 > 0 && le3?.();
    }, onDidRemoveLastListener() {
      le3 = void 0, Z4.dispose();
    } };
    N3 || t(et3);
    let me4 = new v2(et3);
    return N3?.add(me4), me4.event;
  }
  Qe2.debounce = d;
  function _4(y, T2 = 0, g2) {
    return Qe2.debounce(y, (w3, E) => w3 ? (w3.push(E), w3) : [E], T2, void 0, true, void 0, g2);
  }
  Qe2.accumulate = _4;
  function p2(y, T2 = (w3, E) => w3 === E, g2) {
    let w3 = true, E;
    return o2(y, (x) => {
      let N3 = w3 || !T2(x, E);
      return w3 = false, E = x, N3;
    }, g2);
  }
  Qe2.latch = p2;
  function m2(y, T2, g2) {
    return [Qe2.filter(y, T2, g2), Qe2.filter(y, (w3) => !T2(w3), g2)];
  }
  Qe2.split = m2;
  function f(y, T2 = false, g2 = [], w3) {
    let E = g2.slice(), x = y((te4) => {
      E ? E.push(te4) : Z4.fire(te4);
    });
    w3 && w3.add(x);
    let N3 = () => {
      E?.forEach((te4) => Z4.fire(te4)), E = null;
    }, Z4 = new v2({ onWillAddFirstListener() {
      x || (x = y((te4) => Z4.fire(te4)), w3 && w3.add(x));
    }, onDidAddFirstListener() {
      E && (T2 ? setTimeout(N3) : N3());
    }, onDidRemoveLastListener() {
      x && x.dispose(), x = null;
    } });
    return w3 && w3.add(Z4), Z4.event;
  }
  Qe2.buffer = f;
  function A2(y, T2) {
    return (w3, E, x) => {
      let N3 = T2(new O3());
      return y(function(Z4) {
        let te4 = N3.evaluate(Z4);
        te4 !== R3 && w3.call(E, te4);
      }, void 0, x);
    };
  }
  Qe2.chain = A2;
  let R3 = /* @__PURE__ */ Symbol("HaltChainable");
  class O3 {
    constructor() {
      this.steps = [];
    }
    map(T2) {
      return this.steps.push(T2), this;
    }
    forEach(T2) {
      return this.steps.push((g2) => (T2(g2), g2)), this;
    }
    filter(T2) {
      return this.steps.push((g2) => T2(g2) ? g2 : R3), this;
    }
    reduce(T2, g2) {
      let w3 = g2;
      return this.steps.push((E) => (w3 = T2(w3, E), w3)), this;
    }
    latch(T2 = (g2, w3) => g2 === w3) {
      let g2 = true, w3;
      return this.steps.push((E) => {
        let x = g2 || !T2(E, w3);
        return g2 = false, w3 = E, x ? E : R3;
      }), this;
    }
    evaluate(T2) {
      for (let g2 of this.steps) if (T2 = g2(T2), T2 === R3) break;
      return T2;
    }
  }
  function I2(y, T2, g2 = (w3) => w3) {
    let w3 = (...Z4) => N3.fire(g2(...Z4)), E = () => y.on(T2, w3), x = () => y.removeListener(T2, w3), N3 = new v2({ onWillAddFirstListener: E, onDidRemoveLastListener: x });
    return N3.event;
  }
  Qe2.fromNodeEventEmitter = I2;
  function k5(y, T2, g2 = (w3) => w3) {
    let w3 = (...Z4) => N3.fire(g2(...Z4)), E = () => y.addEventListener(T2, w3), x = () => y.removeEventListener(T2, w3), N3 = new v2({ onWillAddFirstListener: E, onDidRemoveLastListener: x });
    return N3.event;
  }
  Qe2.fromDOMEventEmitter = k5;
  function P4(y) {
    return new Promise((T2) => i8(y)(T2));
  }
  Qe2.toPromise = P4;
  function oe(y) {
    let T2 = new v2();
    return y.then((g2) => {
      T2.fire(g2);
    }, () => {
      T2.fire(void 0);
    }).finally(() => {
      T2.dispose();
    }), T2.event;
  }
  Qe2.fromPromise = oe;
  function Me4(y, T2) {
    return y((g2) => T2.fire(g2));
  }
  Qe2.forward = Me4;
  function Pe4(y, T2, g2) {
    return T2(g2), y((w3) => T2(w3));
  }
  Qe2.runAndSubscribe = Pe4;
  class Ke2 {
    constructor(T2, g2) {
      this._observable = T2;
      this._counter = 0;
      this._hasChanged = false;
      let w3 = { onWillAddFirstListener: () => {
        T2.addObserver(this);
      }, onDidRemoveLastListener: () => {
        T2.removeObserver(this);
      } };
      g2 || t(w3), this.emitter = new v2(w3), g2 && g2.add(this.emitter);
    }
    beginUpdate(T2) {
      this._counter++;
    }
    handlePossibleChange(T2) {
    }
    handleChange(T2, g2) {
      this._hasChanged = true;
    }
    endUpdate(T2) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function di(y, T2) {
    return new Ke2(y, T2).emitter.event;
  }
  Qe2.fromObservable = di;
  function V2(y) {
    return (T2, g2, w3) => {
      let E = 0, x = false, N3 = { beginUpdate() {
        E++;
      }, endUpdate() {
        E--, E === 0 && (y.reportChanges(), x && (x = false, T2.call(g2)));
      }, handlePossibleChange() {
      }, handleChange() {
        x = true;
      } };
      y.addObserver(N3), y.reportChanges();
      let Z4 = { dispose() {
        y.removeObserver(N3);
      } };
      return w3 instanceof Ee4 ? w3.add(Z4) : Array.isArray(w3) && w3.push(Z4), Z4;
    };
  }
  Qe2.fromObservableLight = V2;
})($2 ||= {});
var Mt2 = class Mt3 {
  constructor(t) {
    this.listenerCount = 0;
    this.invocationCount = 0;
    this.elapsedOverall = 0;
    this.durations = [];
    this.name = `${t}_${Mt3._idPool++}`, Mt3.all.add(this);
  }
  start(t) {
    this._stopWatch = new mr2(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      let t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
Mt2.all = /* @__PURE__ */ new Set(), Mt2._idPool = 0;
var $n2 = Mt2;
var po = -1;
var br2 = class br3 {
  constructor(t, e, i8 = (br3._idPool++).toString(16).padStart(3, "0")) {
    this._errorHandler = t;
    this.threshold = e;
    this.name = i8;
    this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(t, e) {
    let i8 = this.threshold;
    if (i8 <= 0 || e < i8) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    let r6 = this._stacks.get(t.value) || 0;
    if (this._stacks.set(t.value, r6 + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = i8 * 0.5;
      let [n, o2] = this.getMostFrequentStack(), l2 = `[${this.name}] potential listener LEAK detected, having ${e} listeners already. MOST frequent listener (${o2}):`;
      console.warn(l2), console.warn(n);
      let a = new qn2(l2, n);
      this._errorHandler(a);
    }
    return () => {
      let n = this._stacks.get(t.value) || 0;
      this._stacks.set(t.value, n - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let t, e = 0;
    for (let [i8, r6] of this._stacks) (!t || e < r6) && (t = [i8, r6], e = r6);
    return t;
  }
};
br2._idPool = 1;
var Vn2 = br2;
var gi2 = class s7 {
  constructor(t) {
    this.value = t;
  }
  static create() {
    let t = new Error();
    return new s7(t.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
};
var qn2 = class extends Error {
  constructor(t, e) {
    super(t), this.name = "ListenerLeakError", this.stack = e;
  }
};
var Yn2 = class extends Error {
  constructor(t, e) {
    super(t), this.name = "ListenerRefusalError", this.stack = e;
  }
};
var Vl = 0;
var Pt2 = class {
  constructor(t) {
    this.value = t;
    this.id = Vl++;
  }
};
var ql = 2;
var Yl = (s15, t) => {
  if (s15 instanceof Pt2) t(s15);
  else for (let e = 0; e < s15.length; e++) {
    let i8 = s15[e];
    i8 && t(i8);
  }
};
var _r2;
if (Gl) {
  let s15 = [];
  setInterval(() => {
    s15.length !== 0 && (console.warn("[LEAKING LISTENERS] GC'ed these listeners that were NOT yet disposed:"), console.warn(s15.join(`
`)), s15.length = 0);
  }, 3e3), _r2 = new FinalizationRegistry((t) => {
    typeof t == "string" && s15.push(t);
  });
}
var v2 = class {
  constructor(t) {
    this._size = 0;
    this._options = t, this._leakageMon = po > 0 || this._options?.leakWarningThreshold ? new Vn2(t?.onListenerError ?? Lt2, this._options?.leakWarningThreshold ?? po) : void 0, this._perfMon = this._options?._profName ? new $n2(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (fo) {
          let t = this._listeners;
          queueMicrotask(() => {
            Yl(t, (e) => e.stack?.print());
          });
        }
        this._listeners = void 0, this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
    }
  }
  get event() {
    return this._event ??= (t, e, i8) => {
      if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
        let a = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
        console.warn(a);
        let u2 = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], h2 = new Yn2(`${a}. HINT: Stack shows most frequent listener (${u2[1]}-times)`, u2[0]);
        return (this._options?.onListenerError || Lt2)(h2), D3.None;
      }
      if (this._disposed) return D3.None;
      e && (t = t.bind(e));
      let r6 = new Pt2(t), n, o2;
      this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (r6.stack = gi2.create(), n = this._leakageMon.check(r6.stack, this._size + 1)), fo && (r6.stack = o2 ?? gi2.create()), this._listeners ? this._listeners instanceof Pt2 ? (this._deliveryQueue ??= new jn2(), this._listeners = [this._listeners, r6]) : this._listeners.push(r6) : (this._options?.onWillAddFirstListener?.(this), this._listeners = r6, this._options?.onDidAddFirstListener?.(this)), this._size++;
      let l2 = C3(() => {
        _r2?.unregister(l2), n?.(), this._removeListener(r6);
      });
      if (i8 instanceof Ee4 ? i8.add(l2) : Array.isArray(i8) && i8.push(l2), _r2) {
        let a = new Error().stack.split(`
`).slice(2, 3).join(`
`).trim(), u2 = /(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(a);
        _r2.register(l2, u2?.[2] ?? a, l2);
      }
      return l2;
    }, this._event;
  }
  _removeListener(t) {
    if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
    if (this._size === 1) {
      this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
      return;
    }
    let e = this._listeners, i8 = e.indexOf(t);
    if (i8 === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, e[i8] = void 0;
    let r6 = this._deliveryQueue.current === this;
    if (this._size * ql <= e.length) {
      let n = 0;
      for (let o2 = 0; o2 < e.length; o2++) e[o2] ? e[n++] = e[o2] : r6 && (this._deliveryQueue.end--, n < this._deliveryQueue.i && this._deliveryQueue.i--);
      e.length = n;
    }
  }
  _deliver(t, e) {
    if (!t) return;
    let i8 = this._options?.onListenerError || Lt2;
    if (!i8) {
      t.value(e);
      return;
    }
    try {
      t.value(e);
    } catch (r6) {
      i8(r6);
    }
  }
  _deliverQueue(t) {
    let e = t.current._listeners;
    for (; t.i < t.end; ) this._deliver(e[t.i++], t.value);
    t.reset();
  }
  fire(t) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof Pt2) this._deliver(this._listeners, t);
    else {
      let e = this._deliveryQueue;
      e.enqueue(this, t, this._listeners.length), this._deliverQueue(e);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
};
var jn2 = class {
  constructor() {
    this.i = -1;
    this.end = 0;
  }
  enqueue(t, e, i8) {
    this.i = 0, this.end = i8, this.current = t, this.value = e;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
};
var gr2 = class gr3 {
  constructor() {
    this.mapWindowIdToZoomLevel = /* @__PURE__ */ new Map();
    this._onDidChangeZoomLevel = new v2();
    this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event;
    this.mapWindowIdToZoomFactor = /* @__PURE__ */ new Map();
    this._onDidChangeFullscreen = new v2();
    this.onDidChangeFullscreen = this._onDidChangeFullscreen.event;
    this.mapWindowIdToFullScreen = /* @__PURE__ */ new Map();
  }
  getZoomLevel(t) {
    return this.mapWindowIdToZoomLevel.get(this.getWindowId(t)) ?? 0;
  }
  setZoomLevel(t, e) {
    if (this.getZoomLevel(e) === t) return;
    let i8 = this.getWindowId(e);
    this.mapWindowIdToZoomLevel.set(i8, t), this._onDidChangeZoomLevel.fire(i8);
  }
  getZoomFactor(t) {
    return this.mapWindowIdToZoomFactor.get(this.getWindowId(t)) ?? 1;
  }
  setZoomFactor(t, e) {
    this.mapWindowIdToZoomFactor.set(this.getWindowId(e), t);
  }
  setFullscreen(t, e) {
    if (this.isFullscreen(e) === t) return;
    let i8 = this.getWindowId(e);
    this.mapWindowIdToFullScreen.set(i8, t), this._onDidChangeFullscreen.fire(i8);
  }
  isFullscreen(t) {
    return !!this.mapWindowIdToFullScreen.get(this.getWindowId(t));
  }
  getWindowId(t) {
    return t.vscodeWindowId;
  }
};
gr2.INSTANCE = new gr2();
var Si2 = gr2;
function Xl(s15, t, e) {
  typeof t == "string" && (t = s15.matchMedia(t)), t.addEventListener("change", e);
}
var Eu2 = Si2.INSTANCE.onDidChangeZoomLevel;
function mo(s15) {
  return Si2.INSTANCE.getZoomFactor(s15);
}
var Tu2 = Si2.INSTANCE.onDidChangeFullscreen;
var Ot2 = typeof navigator == "object" ? navigator.userAgent : "";
var Ei2 = Ot2.indexOf("Firefox") >= 0;
var Bt3 = Ot2.indexOf("AppleWebKit") >= 0;
var Ti2 = Ot2.indexOf("Chrome") >= 0;
var Sr2 = !Ti2 && Ot2.indexOf("Safari") >= 0;
var Iu = Ot2.indexOf("Electron/") >= 0;
var yu2 = Ot2.indexOf("Android") >= 0;
var vr2 = false;
if (typeof fe4.matchMedia == "function") {
  let s15 = fe4.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)"), t = fe4.matchMedia("(display-mode: fullscreen)");
  vr2 = s15.matches, Xl(fe4, s15, ({ matches: e }) => {
    vr2 && t.matches || (vr2 = e);
  });
}
function _o() {
  return vr2;
}
var Nt2 = "en";
var yr = false;
var xr2 = false;
var Ii2 = false;
var Zl = false;
var vo = false;
var go = false;
var Jl = false;
var Ql = false;
var ea = false;
var ta = false;
var Tr2;
var Ir = Nt2;
var bo = Nt2;
var ia;
var $e;
var Ve3 = globalThis;
var xe3;
typeof Ve3.vscode < "u" && typeof Ve3.vscode.process < "u" ? xe3 = Ve3.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (xe3 = process);
var So = typeof xe3?.versions?.electron == "string";
var ra = So && xe3?.type === "renderer";
if (typeof xe3 == "object") {
  yr = xe3.platform === "win32", xr2 = xe3.platform === "darwin", Ii2 = xe3.platform === "linux", Zl = Ii2 && !!xe3.env.SNAP && !!xe3.env.SNAP_REVISION, Jl = So, ea = !!xe3.env.CI || !!xe3.env.BUILD_ARTIFACTSTAGINGDIRECTORY, Tr2 = Nt2, Ir = Nt2;
  let s15 = xe3.env.VSCODE_NLS_CONFIG;
  if (s15) try {
    let t = JSON.parse(s15);
    Tr2 = t.userLocale, bo = t.osLocale, Ir = t.resolvedLanguage || Nt2, ia = t.languagePack?.translationsConfigFile;
  } catch {
  }
  vo = true;
} else typeof navigator == "object" && !ra ? ($e = navigator.userAgent, yr = $e.indexOf("Windows") >= 0, xr2 = $e.indexOf("Macintosh") >= 0, Ql = ($e.indexOf("Macintosh") >= 0 || $e.indexOf("iPad") >= 0 || $e.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Ii2 = $e.indexOf("Linux") >= 0, ta = $e?.indexOf("Mobi") >= 0, go = true, Ir = globalThis._VSCODE_NLS_LANGUAGE || Nt2, Tr2 = navigator.language.toLowerCase(), bo = Tr2) : console.error("Unable to resolve platform.");
var Xn2 = 0;
xr2 ? Xn2 = 1 : yr ? Xn2 = 3 : Ii2 && (Xn2 = 2);
var wr2 = yr;
var Te4 = xr2;
var Zn2 = Ii2;
var Dr2 = vo;
var na = go && typeof Ve3.importScripts == "function";
var xu2 = na ? Ve3.origin : void 0;
var Fe2 = $e;
var st3 = Ir;
var sa;
((i8) => {
  function s15() {
    return st3;
  }
  i8.value = s15;
  function t() {
    return st3.length === 2 ? st3 === "en" : st3.length >= 3 ? st3[0] === "e" && st3[1] === "n" && st3[2] === "-" : false;
  }
  i8.isDefaultVariant = t;
  function e() {
    return st3 === "en";
  }
  i8.isDefault = e;
})(sa ||= {});
var oa = typeof Ve3.postMessage == "function" && !Ve3.importScripts;
var Eo = (() => {
  if (oa) {
    let s15 = [];
    Ve3.addEventListener("message", (e) => {
      if (e.data && e.data.vscodeScheduleAsyncWork) for (let i8 = 0, r6 = s15.length; i8 < r6; i8++) {
        let n = s15[i8];
        if (n.id === e.data.vscodeScheduleAsyncWork) {
          s15.splice(i8, 1), n.callback();
          return;
        }
      }
    });
    let t = 0;
    return (e) => {
      let i8 = ++t;
      s15.push({ id: i8, callback: e }), Ve3.postMessage({ vscodeScheduleAsyncWork: i8 }, "*");
    };
  }
  return (s15) => setTimeout(s15);
})();
var la = !!(Fe2 && Fe2.indexOf("Chrome") >= 0);
var wu = !!(Fe2 && Fe2.indexOf("Firefox") >= 0);
var Du = !!(!la && Fe2 && Fe2.indexOf("Safari") >= 0);
var Ru = !!(Fe2 && Fe2.indexOf("Edg/") >= 0);
var Lu = !!(Fe2 && Fe2.indexOf("Android") >= 0);
var ot3 = typeof navigator == "object" ? navigator : {};
var aa = { clipboard: { writeText: Dr2 || document.queryCommandSupported && document.queryCommandSupported("copy") || !!(ot3 && ot3.clipboard && ot3.clipboard.writeText), readText: Dr2 || !!(ot3 && ot3.clipboard && ot3.clipboard.readText) }, keyboard: Dr2 || _o() ? 0 : ot3.keyboard || Sr2 ? 1 : 2, touch: "ontouchstart" in fe4 || ot3.maxTouchPoints > 0, pointerEvents: fe4.PointerEvent && ("ontouchstart" in fe4 || navigator.maxTouchPoints > 0) };
var yi2 = class {
  constructor() {
    this._keyCodeToStr = [], this._strToKeyCode = /* @__PURE__ */ Object.create(null);
  }
  define(t, e) {
    this._keyCodeToStr[t] = e, this._strToKeyCode[e.toLowerCase()] = t;
  }
  keyCodeToStr(t) {
    return this._keyCodeToStr[t];
  }
  strToKeyCode(t) {
    return this._strToKeyCode[t.toLowerCase()] || 0;
  }
};
var Jn2 = new yi2();
var To = new yi2();
var Io = new yi2();
var yo = new Array(230);
var Qn2;
((o2) => {
  function s15(l2) {
    return Jn2.keyCodeToStr(l2);
  }
  o2.toString = s15;
  function t(l2) {
    return Jn2.strToKeyCode(l2);
  }
  o2.fromString = t;
  function e(l2) {
    return To.keyCodeToStr(l2);
  }
  o2.toUserSettingsUS = e;
  function i8(l2) {
    return Io.keyCodeToStr(l2);
  }
  o2.toUserSettingsGeneral = i8;
  function r6(l2) {
    return To.strToKeyCode(l2) || Io.strToKeyCode(l2);
  }
  o2.fromUserSettings = r6;
  function n(l2) {
    if (l2 >= 98 && l2 <= 113) return null;
    switch (l2) {
      case 16:
        return "Up";
      case 18:
        return "Down";
      case 15:
        return "Left";
      case 17:
        return "Right";
    }
    return Jn2.keyCodeToStr(l2);
  }
  o2.toElectronAccelerator = n;
})(Qn2 ||= {});
var Rr2 = class s8 {
  constructor(t, e, i8, r6, n) {
    this.ctrlKey = t;
    this.shiftKey = e;
    this.altKey = i8;
    this.metaKey = r6;
    this.keyCode = n;
  }
  equals(t) {
    return t instanceof s8 && this.ctrlKey === t.ctrlKey && this.shiftKey === t.shiftKey && this.altKey === t.altKey && this.metaKey === t.metaKey && this.keyCode === t.keyCode;
  }
  getHashCode() {
    let t = this.ctrlKey ? "1" : "0", e = this.shiftKey ? "1" : "0", i8 = this.altKey ? "1" : "0", r6 = this.metaKey ? "1" : "0";
    return `K${t}${e}${i8}${r6}${this.keyCode}`;
  }
  isModifierKey() {
    return this.keyCode === 0 || this.keyCode === 5 || this.keyCode === 57 || this.keyCode === 6 || this.keyCode === 4;
  }
  toKeybinding() {
    return new es([this]);
  }
  isDuplicateModifierCase() {
    return this.ctrlKey && this.keyCode === 5 || this.shiftKey && this.keyCode === 4 || this.altKey && this.keyCode === 6 || this.metaKey && this.keyCode === 57;
  }
};
var es = class {
  constructor(t) {
    if (t.length === 0) throw eo("chords");
    this.chords = t;
  }
  getHashCode() {
    let t = "";
    for (let e = 0, i8 = this.chords.length; e < i8; e++) e !== 0 && (t += ";"), t += this.chords[e].getHashCode();
    return t;
  }
  equals(t) {
    if (t === null || this.chords.length !== t.chords.length) return false;
    for (let e = 0; e < this.chords.length; e++) if (!this.chords[e].equals(t.chords[e])) return false;
    return true;
  }
};
function ca(s15) {
  if (s15.charCode) {
    let e = String.fromCharCode(s15.charCode).toUpperCase();
    return Qn2.fromString(e);
  }
  let t = s15.keyCode;
  if (t === 3) return 7;
  if (Ei2) switch (t) {
    case 59:
      return 85;
    case 60:
      if (Zn2) return 97;
      break;
    case 61:
      return 86;
    case 107:
      return 109;
    case 109:
      return 111;
    case 173:
      return 88;
    case 224:
      if (Te4) return 57;
      break;
  }
  else if (Bt3) {
    if (Te4 && t === 93) return 57;
    if (!Te4 && t === 92) return 57;
  }
  return yo[t] || 0;
}
var ua = Te4 ? 256 : 2048;
var ha = 512;
var da = 1024;
var fa = Te4 ? 2048 : 256;
var ft = class {
  constructor(t) {
    this._standardKeyboardEventBrand = true;
    let e = t;
    this.browserEvent = e, this.target = e.target, this.ctrlKey = e.ctrlKey, this.shiftKey = e.shiftKey, this.altKey = e.altKey, this.metaKey = e.metaKey, this.altGraphKey = e.getModifierState?.("AltGraph"), this.keyCode = ca(e), this.code = e.code, this.ctrlKey = this.ctrlKey || this.keyCode === 5, this.altKey = this.altKey || this.keyCode === 6, this.shiftKey = this.shiftKey || this.keyCode === 4, this.metaKey = this.metaKey || this.keyCode === 57, this._asKeybinding = this._computeKeybinding(), this._asKeyCodeChord = this._computeKeyCodeChord();
  }
  preventDefault() {
    this.browserEvent && this.browserEvent.preventDefault && this.browserEvent.preventDefault();
  }
  stopPropagation() {
    this.browserEvent && this.browserEvent.stopPropagation && this.browserEvent.stopPropagation();
  }
  toKeyCodeChord() {
    return this._asKeyCodeChord;
  }
  equals(t) {
    return this._asKeybinding === t;
  }
  _computeKeybinding() {
    let t = 0;
    this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (t = this.keyCode);
    let e = 0;
    return this.ctrlKey && (e |= ua), this.altKey && (e |= ha), this.shiftKey && (e |= da), this.metaKey && (e |= fa), e |= t, e;
  }
  _computeKeyCodeChord() {
    let t = 0;
    return this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (t = this.keyCode), new Rr2(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, t);
  }
};
var wo = /* @__PURE__ */ new WeakMap();
function pa(s15) {
  if (!s15.parent || s15.parent === s15) return null;
  try {
    let t = s15.location, e = s15.parent.location;
    if (t.origin !== "null" && e.origin !== "null" && t.origin !== e.origin) return null;
  } catch {
    return null;
  }
  return s15.parent;
}
var Lr2 = class {
  static getSameOriginWindowChain(t) {
    let e = wo.get(t);
    if (!e) {
      e = [], wo.set(t, e);
      let i8 = t, r6;
      do
        r6 = pa(i8), r6 ? e.push({ window: new WeakRef(i8), iframeElement: i8.frameElement || null }) : e.push({ window: new WeakRef(i8), iframeElement: null }), i8 = r6;
      while (i8);
    }
    return e.slice(0);
  }
  static getPositionOfChildWindowRelativeToAncestorWindow(t, e) {
    if (!e || t === e) return { top: 0, left: 0 };
    let i8 = 0, r6 = 0, n = this.getSameOriginWindowChain(t);
    for (let o2 of n) {
      let l2 = o2.window.deref();
      if (i8 += l2?.scrollY ?? 0, r6 += l2?.scrollX ?? 0, l2 === e || !o2.iframeElement) break;
      let a = o2.iframeElement.getBoundingClientRect();
      i8 += a.top, r6 += a.left;
    }
    return { top: i8, left: r6 };
  }
};
var qe3 = class {
  constructor(t, e) {
    this.timestamp = Date.now(), this.browserEvent = e, this.leftButton = e.button === 0, this.middleButton = e.button === 1, this.rightButton = e.button === 2, this.buttons = e.buttons, this.target = e.target, this.detail = e.detail || 1, e.type === "dblclick" && (this.detail = 2), this.ctrlKey = e.ctrlKey, this.shiftKey = e.shiftKey, this.altKey = e.altKey, this.metaKey = e.metaKey, typeof e.pageX == "number" ? (this.posx = e.pageX, this.posy = e.pageY) : (this.posx = e.clientX + this.target.ownerDocument.body.scrollLeft + this.target.ownerDocument.documentElement.scrollLeft, this.posy = e.clientY + this.target.ownerDocument.body.scrollTop + this.target.ownerDocument.documentElement.scrollTop);
    let i8 = Lr2.getPositionOfChildWindowRelativeToAncestorWindow(t, e.view);
    this.posx -= i8.left, this.posy -= i8.top;
  }
  preventDefault() {
    this.browserEvent.preventDefault();
  }
  stopPropagation() {
    this.browserEvent.stopPropagation();
  }
};
var xi2 = class {
  constructor(t, e = 0, i8 = 0) {
    this.browserEvent = t || null, this.target = t ? t.target || t.targetNode || t.srcElement : null, this.deltaY = i8, this.deltaX = e;
    let r6 = false;
    if (Ti2) {
      let n = navigator.userAgent.match(/Chrome\/(\d+)/);
      r6 = (n ? parseInt(n[1]) : 123) <= 122;
    }
    if (t) {
      let n = t, o2 = t, l2 = t.view?.devicePixelRatio || 1;
      if (typeof n.wheelDeltaY < "u") r6 ? this.deltaY = n.wheelDeltaY / (120 * l2) : this.deltaY = n.wheelDeltaY / 120;
      else if (typeof o2.VERTICAL_AXIS < "u" && o2.axis === o2.VERTICAL_AXIS) this.deltaY = -o2.detail / 3;
      else if (t.type === "wheel") {
        let a = t;
        a.deltaMode === a.DOM_DELTA_LINE ? Ei2 && !Te4 ? this.deltaY = -t.deltaY / 3 : this.deltaY = -t.deltaY : this.deltaY = -t.deltaY / 40;
      }
      if (typeof n.wheelDeltaX < "u") Sr2 && wr2 ? this.deltaX = -(n.wheelDeltaX / 120) : r6 ? this.deltaX = n.wheelDeltaX / (120 * l2) : this.deltaX = n.wheelDeltaX / 120;
      else if (typeof o2.HORIZONTAL_AXIS < "u" && o2.axis === o2.HORIZONTAL_AXIS) this.deltaX = -t.detail / 3;
      else if (t.type === "wheel") {
        let a = t;
        a.deltaMode === a.DOM_DELTA_LINE ? Ei2 && !Te4 ? this.deltaX = -t.deltaX / 3 : this.deltaX = -t.deltaX : this.deltaX = -t.deltaX / 40;
      }
      this.deltaY === 0 && this.deltaX === 0 && t.wheelDelta && (r6 ? this.deltaY = t.wheelDelta / (120 * l2) : this.deltaY = t.wheelDelta / 120);
    }
  }
  preventDefault() {
    this.browserEvent?.preventDefault();
  }
  stopPropagation() {
    this.browserEvent?.stopPropagation();
  }
};
var Do = Object.freeze(function(s15, t) {
  let e = setTimeout(s15.bind(t), 0);
  return { dispose() {
    clearTimeout(e);
  } };
});
var ma;
((i8) => {
  function s15(r6) {
    return r6 === i8.None || r6 === i8.Cancelled || r6 instanceof ts ? true : !r6 || typeof r6 != "object" ? false : typeof r6.isCancellationRequested == "boolean" && typeof r6.onCancellationRequested == "function";
  }
  i8.isCancellationToken = s15, i8.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: $2.None }), i8.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: Do });
})(ma ||= {});
var ts = class {
  constructor() {
    this._isCancelled = false;
    this._emitter = null;
  }
  cancel() {
    this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
  }
  get isCancellationRequested() {
    return this._isCancelled;
  }
  get onCancellationRequested() {
    return this._isCancelled ? Do : (this._emitter || (this._emitter = new v2()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
};
var Ye3 = class {
  constructor(t, e) {
    this._isDisposed = false;
    this._token = -1, typeof t == "function" && typeof e == "number" && this.setIfNotSet(t, e);
  }
  dispose() {
    this.cancel(), this._isDisposed = true;
  }
  cancel() {
    this._token !== -1 && (clearTimeout(this._token), this._token = -1);
  }
  cancelAndSet(t, e) {
    if (this._isDisposed) throw new Rt2("Calling 'cancelAndSet' on a disposed TimeoutTimer");
    this.cancel(), this._token = setTimeout(() => {
      this._token = -1, t();
    }, e);
  }
  setIfNotSet(t, e) {
    if (this._isDisposed) throw new Rt2("Calling 'setIfNotSet' on a disposed TimeoutTimer");
    this._token === -1 && (this._token = setTimeout(() => {
      this._token = -1, t();
    }, e));
  }
};
var kr2 = class {
  constructor() {
    this.disposable = void 0;
    this.isDisposed = false;
  }
  cancel() {
    this.disposable?.dispose(), this.disposable = void 0;
  }
  cancelAndSet(t, e, i8 = globalThis) {
    if (this.isDisposed) throw new Rt2("Calling 'cancelAndSet' on a disposed IntervalTimer");
    this.cancel();
    let r6 = i8.setInterval(() => {
      t();
    }, e);
    this.disposable = C3(() => {
      i8.clearInterval(r6), this.disposable = void 0;
    });
  }
  dispose() {
    this.cancel(), this.isDisposed = true;
  }
};
var ba;
var Ar2;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? Ar2 = (s15, t) => {
    Eo(() => {
      if (e) return;
      let i8 = Date.now() + 15;
      t(Object.freeze({ didTimeout: true, timeRemaining() {
        return Math.max(0, i8 - Date.now());
      } }));
    });
    let e = false;
    return { dispose() {
      e || (e = true);
    } };
  } : Ar2 = (s15, t, e) => {
    let i8 = s15.requestIdleCallback(t, typeof e == "number" ? { timeout: e } : void 0), r6 = false;
    return { dispose() {
      r6 || (r6 = true, s15.cancelIdleCallback(i8));
    } };
  }, ba = (s15) => Ar2(globalThis, s15);
})();
var va;
((e) => {
  async function s15(i8) {
    let r6, n = await Promise.all(i8.map((o2) => o2.then((l2) => l2, (l2) => {
      r6 || (r6 = l2);
    })));
    if (typeof r6 < "u") throw r6;
    return n;
  }
  e.settled = s15;
  function t(i8) {
    return new Promise(async (r6, n) => {
      try {
        await i8(r6, n);
      } catch (o2) {
        n(o2);
      }
    });
  }
  e.withAsyncBody = t;
})(va ||= {});
var _e3 = class _e4 {
  static fromArray(t) {
    return new _e4((e) => {
      e.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new _e4(async (e) => {
      e.emitMany(await t);
    });
  }
  static fromPromises(t) {
    return new _e4(async (e) => {
      await Promise.all(t.map(async (i8) => e.emitOne(await i8)));
    });
  }
  static merge(t) {
    return new _e4(async (e) => {
      await Promise.all(t.map(async (i8) => {
        for await (let r6 of i8) e.emitOne(r6);
      }));
    });
  }
  constructor(t, e) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = e, this._onStateChanged = new v2(), queueMicrotask(async () => {
      let i8 = { emitOne: (r6) => this.emitOne(r6), emitMany: (r6) => this.emitMany(r6), reject: (r6) => this.reject(r6) };
      try {
        await Promise.resolve(t(i8)), this.resolve();
      } catch (r6) {
        this.reject(r6);
      } finally {
        i8.emitOne = void 0, i8.emitMany = void 0, i8.reject = void 0;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let t = 0;
    return { next: async () => {
      do {
        if (this._state === 2) throw this._error;
        if (t < this._results.length) return { done: false, value: this._results[t++] };
        if (this._state === 1) return { done: true, value: void 0 };
        await $2.toPromise(this._onStateChanged.event);
      } while (true);
    }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
  }
  static map(t, e) {
    return new _e4(async (i8) => {
      for await (let r6 of t) i8.emitOne(e(r6));
    });
  }
  map(t) {
    return _e4.map(this, t);
  }
  static filter(t, e) {
    return new _e4(async (i8) => {
      for await (let r6 of t) e(r6) && i8.emitOne(r6);
    });
  }
  filter(t) {
    return _e4.filter(this, t);
  }
  static coalesce(t) {
    return _e4.filter(t, (e) => !!e);
  }
  coalesce() {
    return _e4.coalesce(this);
  }
  static async toPromise(t) {
    let e = [];
    for await (let i8 of t) e.push(i8);
    return e;
  }
  toPromise() {
    return _e4.toPromise(this);
  }
  emitOne(t) {
    this._state === 0 && (this._results.push(t), this._onStateChanged.fire());
  }
  emitMany(t) {
    this._state === 0 && (this._results = this._results.concat(t), this._onStateChanged.fire());
  }
  resolve() {
    this._state === 0 && (this._state = 1, this._onStateChanged.fire());
  }
  reject(t) {
    this._state === 0 && (this._state = 2, this._error = t, this._onStateChanged.fire());
  }
};
_e3.EMPTY = _e3.fromArray([]);
function Lo(s15) {
  return 55296 <= s15 && s15 <= 56319;
}
function is2(s15) {
  return 56320 <= s15 && s15 <= 57343;
}
function Ao(s15, t) {
  return (s15 - 55296 << 10) + (t - 56320) + 65536;
}
function Mo(s15) {
  return ns2(s15, 0);
}
function ns2(s15, t) {
  switch (typeof s15) {
    case "object":
      return s15 === null ? je3(349, t) : Array.isArray(s15) ? Ea(s15, t) : Ta(s15, t);
    case "string":
      return Po(s15, t);
    case "boolean":
      return Sa(s15, t);
    case "number":
      return je3(s15, t);
    case "undefined":
      return je3(937, t);
    default:
      return je3(617, t);
  }
}
function je3(s15, t) {
  return (t << 5) - t + s15 | 0;
}
function Sa(s15, t) {
  return je3(s15 ? 433 : 863, t);
}
function Po(s15, t) {
  t = je3(149417, t);
  for (let e = 0, i8 = s15.length; e < i8; e++) t = je3(s15.charCodeAt(e), t);
  return t;
}
function Ea(s15, t) {
  return t = je3(104579, t), s15.reduce((e, i8) => ns2(i8, e), t);
}
function Ta(s15, t) {
  return t = je3(181387, t), Object.keys(s15).sort().reduce((e, i8) => (e = Po(i8, e), ns2(s15[i8], e)), t);
}
function rs2(s15, t, e = 32) {
  let i8 = e - t, r6 = ~((1 << i8) - 1);
  return (s15 << t | (r6 & s15) >>> i8) >>> 0;
}
function ko(s15, t = 0, e = s15.byteLength, i8 = 0) {
  for (let r6 = 0; r6 < e; r6++) s15[t + r6] = i8;
}
function Ia(s15, t, e = "0") {
  for (; s15.length < t; ) s15 = e + s15;
  return s15;
}
function wi2(s15, t = 32) {
  return s15 instanceof ArrayBuffer ? Array.from(new Uint8Array(s15)).map((e) => e.toString(16).padStart(2, "0")).join("") : Ia((s15 >>> 0).toString(16), t / 4);
}
var Cr2 = class Cr3 {
  constructor() {
    this._h0 = 1732584193;
    this._h1 = 4023233417;
    this._h2 = 2562383102;
    this._h3 = 271733878;
    this._h4 = 3285377520;
    this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = false;
  }
  update(t) {
    let e = t.length;
    if (e === 0) return;
    let i8 = this._buff, r6 = this._buffLen, n = this._leftoverHighSurrogate, o2, l2;
    for (n !== 0 ? (o2 = n, l2 = -1, n = 0) : (o2 = t.charCodeAt(0), l2 = 0); ; ) {
      let a = o2;
      if (Lo(o2)) if (l2 + 1 < e) {
        let u2 = t.charCodeAt(l2 + 1);
        is2(u2) ? (l2++, a = Ao(o2, u2)) : a = 65533;
      } else {
        n = o2;
        break;
      }
      else is2(o2) && (a = 65533);
      if (r6 = this._push(i8, r6, a), l2++, l2 < e) o2 = t.charCodeAt(l2);
      else break;
    }
    this._buffLen = r6, this._leftoverHighSurrogate = n;
  }
  _push(t, e, i8) {
    return i8 < 128 ? t[e++] = i8 : i8 < 2048 ? (t[e++] = 192 | (i8 & 1984) >>> 6, t[e++] = 128 | (i8 & 63) >>> 0) : i8 < 65536 ? (t[e++] = 224 | (i8 & 61440) >>> 12, t[e++] = 128 | (i8 & 4032) >>> 6, t[e++] = 128 | (i8 & 63) >>> 0) : (t[e++] = 240 | (i8 & 1835008) >>> 18, t[e++] = 128 | (i8 & 258048) >>> 12, t[e++] = 128 | (i8 & 4032) >>> 6, t[e++] = 128 | (i8 & 63) >>> 0), e >= 64 && (this._step(), e -= 64, this._totalLen += 64, t[0] = t[64], t[1] = t[65], t[2] = t[66]), e;
  }
  digest() {
    return this._finished || (this._finished = true, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), wi2(this._h0) + wi2(this._h1) + wi2(this._h2) + wi2(this._h3) + wi2(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, ko(this._buff, this._buffLen), this._buffLen > 56 && (this._step(), ko(this._buff));
    let t = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(t / 4294967296), false), this._buffDV.setUint32(60, t % 4294967296, false), this._step();
  }
  _step() {
    let t = Cr3._bigBlock32, e = this._buffDV;
    for (let c = 0; c < 64; c += 4) t.setUint32(c, e.getUint32(c, false), false);
    for (let c = 64; c < 320; c += 4) t.setUint32(c, rs2(t.getUint32(c - 12, false) ^ t.getUint32(c - 32, false) ^ t.getUint32(c - 56, false) ^ t.getUint32(c - 64, false), 1), false);
    let i8 = this._h0, r6 = this._h1, n = this._h2, o2 = this._h3, l2 = this._h4, a, u2, h2;
    for (let c = 0; c < 80; c++) c < 20 ? (a = r6 & n | ~r6 & o2, u2 = 1518500249) : c < 40 ? (a = r6 ^ n ^ o2, u2 = 1859775393) : c < 60 ? (a = r6 & n | r6 & o2 | n & o2, u2 = 2400959708) : (a = r6 ^ n ^ o2, u2 = 3395469782), h2 = rs2(i8, 5) + a + l2 + u2 + t.getUint32(c * 4, false) & 4294967295, l2 = o2, o2 = n, n = rs2(r6, 30), r6 = i8, i8 = h2;
    this._h0 = this._h0 + i8 & 4294967295, this._h1 = this._h1 + r6 & 4294967295, this._h2 = this._h2 + n & 4294967295, this._h3 = this._h3 + o2 & 4294967295, this._h4 = this._h4 + l2 & 4294967295;
  }
};
Cr2._bigBlock32 = new DataView(new ArrayBuffer(320));
var { registerWindow: Bh, getWindow: be4, getDocument: Nh, getWindows: Fh, getWindowsCount: Hh, getWindowId: Oo, getWindowById: Wh, hasWindow: Uh, onDidRegisterWindow: No, onWillUnregisterWindow: Kh, onDidUnregisterWindow: zh } = (function() {
  let s15 = /* @__PURE__ */ new Map();
  fe4;
  let t = { window: fe4, disposables: new Ee4() };
  s15.set(fe4.vscodeWindowId, t);
  let e = new v2(), i8 = new v2(), r6 = new v2();
  function n(o2, l2) {
    return (typeof o2 == "number" ? s15.get(o2) : void 0) ?? (l2 ? t : void 0);
  }
  return { onDidRegisterWindow: e.event, onWillUnregisterWindow: r6.event, onDidUnregisterWindow: i8.event, registerWindow(o2) {
    if (s15.has(o2.vscodeWindowId)) return D3.None;
    let l2 = new Ee4(), a = { window: o2, disposables: l2.add(new Ee4()) };
    return s15.set(o2.vscodeWindowId, a), l2.add(C3(() => {
      s15.delete(o2.vscodeWindowId), i8.fire(o2);
    })), l2.add(L3(o2, Y5.BEFORE_UNLOAD, () => {
      r6.fire(o2);
    })), e.fire(a), l2;
  }, getWindows() {
    return s15.values();
  }, getWindowsCount() {
    return s15.size;
  }, getWindowId(o2) {
    return o2.vscodeWindowId;
  }, hasWindow(o2) {
    return s15.has(o2);
  }, getWindowById: n, getWindow(o2) {
    let l2 = o2;
    if (l2?.ownerDocument?.defaultView) return l2.ownerDocument.defaultView.window;
    let a = o2;
    return a?.view ? a.view.window : fe4;
  }, getDocument(o2) {
    return be4(o2).document;
  } };
})();
var ss2 = class {
  constructor(t, e, i8, r6) {
    this._node = t, this._type = e, this._handler = i8, this._options = r6 || false, this._node.addEventListener(this._type, this._handler, this._options);
  }
  dispose() {
    this._handler && (this._node.removeEventListener(this._type, this._handler, this._options), this._node = null, this._handler = null);
  }
};
function L3(s15, t, e, i8) {
  return new ss2(s15, t, e, i8);
}
function ya(s15, t) {
  return function(e) {
    return t(new qe3(s15, e));
  };
}
function xa(s15) {
  return function(t) {
    return s15(new ft(t));
  };
}
var os2 = function(t, e, i8, r6) {
  let n = i8;
  return e === "click" || e === "mousedown" || e === "contextmenu" ? n = ya(be4(t), i8) : (e === "keydown" || e === "keypress" || e === "keyup") && (n = xa(i8)), L3(t, e, n, r6);
};
var wa;
var mt;
var Mr2 = class extends kr2 {
  constructor(t) {
    super(), this.defaultTarget = t && be4(t);
  }
  cancelAndSet(t, e, i8) {
    return super.cancelAndSet(t, e, i8 ?? this.defaultTarget);
  }
};
var Di2 = class {
  constructor(t, e = 0) {
    this._runner = t, this.priority = e, this._canceled = false;
  }
  dispose() {
    this._canceled = true;
  }
  execute() {
    if (!this._canceled) try {
      this._runner();
    } catch (t) {
      Lt2(t);
    }
  }
  static sort(t, e) {
    return e.priority - t.priority;
  }
};
(function() {
  let s15 = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), i8 = /* @__PURE__ */ new Map(), r6 = (n) => {
    e.set(n, false);
    let o2 = s15.get(n) ?? [];
    for (t.set(n, o2), s15.set(n, []), i8.set(n, true); o2.length > 0; ) o2.sort(Di2.sort), o2.shift().execute();
    i8.set(n, false);
  };
  mt = (n, o2, l2 = 0) => {
    let a = Oo(n), u2 = new Di2(o2, l2), h2 = s15.get(a);
    return h2 || (h2 = [], s15.set(a, h2)), h2.push(u2), e.get(a) || (e.set(a, true), n.requestAnimationFrame(() => r6(a))), u2;
  }, wa = (n, o2, l2) => {
    let a = Oo(n);
    if (i8.get(a)) {
      let u2 = new Di2(o2, l2), h2 = t.get(a);
      return h2 || (h2 = [], t.set(a, h2)), h2.push(u2), u2;
    } else return mt(n, o2, l2);
  };
})();
var pt2 = class pt3 {
  constructor(t, e) {
    this.width = t;
    this.height = e;
  }
  with(t = this.width, e = this.height) {
    return t !== this.width || e !== this.height ? new pt3(t, e) : this;
  }
  static is(t) {
    return typeof t == "object" && typeof t.height == "number" && typeof t.width == "number";
  }
  static lift(t) {
    return t instanceof pt3 ? t : new pt3(t.width, t.height);
  }
  static equals(t, e) {
    return t === e ? true : !t || !e ? false : t.width === e.width && t.height === e.height;
  }
};
pt2.None = new pt2(0, 0);
function Fo(s15) {
  let t = s15.getBoundingClientRect(), e = be4(s15);
  return { left: t.left + e.scrollX, top: t.top + e.scrollY, width: t.width, height: t.height };
}
var Gh = new class {
  constructor() {
    this.mutationObservers = /* @__PURE__ */ new Map();
  }
  observe(s15, t, e) {
    let i8 = this.mutationObservers.get(s15);
    i8 || (i8 = /* @__PURE__ */ new Map(), this.mutationObservers.set(s15, i8));
    let r6 = Mo(e), n = i8.get(r6);
    if (n) n.users += 1;
    else {
      let o2 = new v2(), l2 = new MutationObserver((u2) => o2.fire(u2));
      l2.observe(s15, e);
      let a = n = { users: 1, observer: l2, onDidMutate: o2.event };
      t.add(C3(() => {
        a.users -= 1, a.users === 0 && (o2.dispose(), l2.disconnect(), i8?.delete(r6), i8?.size === 0 && this.mutationObservers.delete(s15));
      })), i8.set(r6, n);
    }
    return n.onDidMutate;
  }
}();
var Y5 = { CLICK: "click", AUXCLICK: "auxclick", DBLCLICK: "dblclick", MOUSE_UP: "mouseup", MOUSE_DOWN: "mousedown", MOUSE_OVER: "mouseover", MOUSE_MOVE: "mousemove", MOUSE_OUT: "mouseout", MOUSE_ENTER: "mouseenter", MOUSE_LEAVE: "mouseleave", MOUSE_WHEEL: "wheel", POINTER_UP: "pointerup", POINTER_DOWN: "pointerdown", POINTER_MOVE: "pointermove", POINTER_LEAVE: "pointerleave", CONTEXT_MENU: "contextmenu", WHEEL: "wheel", KEY_DOWN: "keydown", KEY_PRESS: "keypress", KEY_UP: "keyup", LOAD: "load", BEFORE_UNLOAD: "beforeunload", UNLOAD: "unload", PAGE_SHOW: "pageshow", PAGE_HIDE: "pagehide", PASTE: "paste", ABORT: "abort", ERROR: "error", RESIZE: "resize", SCROLL: "scroll", FULLSCREEN_CHANGE: "fullscreenchange", WK_FULLSCREEN_CHANGE: "webkitfullscreenchange", SELECT: "select", CHANGE: "change", SUBMIT: "submit", RESET: "reset", FOCUS: "focus", FOCUS_IN: "focusin", FOCUS_OUT: "focusout", BLUR: "blur", INPUT: "input", STORAGE: "storage", DRAG_START: "dragstart", DRAG: "drag", DRAG_ENTER: "dragenter", DRAG_LEAVE: "dragleave", DRAG_OVER: "dragover", DROP: "drop", DRAG_END: "dragend", ANIMATION_START: Bt3 ? "webkitAnimationStart" : "animationstart", ANIMATION_END: Bt3 ? "webkitAnimationEnd" : "animationend", ANIMATION_ITERATION: Bt3 ? "webkitAnimationIteration" : "animationiteration" };
var Da = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;
function Ho(s15, t, e, ...i8) {
  let r6 = Da.exec(t);
  if (!r6) throw new Error("Bad use of emmet");
  let n = r6[1] || "div", o2;
  return s15 !== "http://www.w3.org/1999/xhtml" ? o2 = document.createElementNS(s15, n) : o2 = document.createElement(n), r6[3] && (o2.id = r6[3]), r6[4] && (o2.className = r6[4].replace(/\./g, " ").trim()), e && Object.entries(e).forEach(([l2, a]) => {
    typeof a > "u" || (/^on\w+$/.test(l2) ? o2[l2] = a : l2 === "selected" ? a && o2.setAttribute(l2, "true") : o2.setAttribute(l2, a));
  }), o2.append(...i8), o2;
}
function Ra(s15, t, ...e) {
  return Ho("http://www.w3.org/1999/xhtml", s15, t, ...e);
}
Ra.SVG = function(s15, t, ...e) {
  return Ho("http://www.w3.org/2000/svg", s15, t, ...e);
};
var ls = class {
  constructor(t) {
    this.domNode = t;
    this._maxWidth = "";
    this._width = "";
    this._height = "";
    this._top = "";
    this._left = "";
    this._bottom = "";
    this._right = "";
    this._paddingTop = "";
    this._paddingLeft = "";
    this._paddingBottom = "";
    this._paddingRight = "";
    this._fontFamily = "";
    this._fontWeight = "";
    this._fontSize = "";
    this._fontStyle = "";
    this._fontFeatureSettings = "";
    this._fontVariationSettings = "";
    this._textDecoration = "";
    this._lineHeight = "";
    this._letterSpacing = "";
    this._className = "";
    this._display = "";
    this._position = "";
    this._visibility = "";
    this._color = "";
    this._backgroundColor = "";
    this._layerHint = false;
    this._contain = "none";
    this._boxShadow = "";
  }
  setMaxWidth(t) {
    let e = Ie3(t);
    this._maxWidth !== e && (this._maxWidth = e, this.domNode.style.maxWidth = this._maxWidth);
  }
  setWidth(t) {
    let e = Ie3(t);
    this._width !== e && (this._width = e, this.domNode.style.width = this._width);
  }
  setHeight(t) {
    let e = Ie3(t);
    this._height !== e && (this._height = e, this.domNode.style.height = this._height);
  }
  setTop(t) {
    let e = Ie3(t);
    this._top !== e && (this._top = e, this.domNode.style.top = this._top);
  }
  setLeft(t) {
    let e = Ie3(t);
    this._left !== e && (this._left = e, this.domNode.style.left = this._left);
  }
  setBottom(t) {
    let e = Ie3(t);
    this._bottom !== e && (this._bottom = e, this.domNode.style.bottom = this._bottom);
  }
  setRight(t) {
    let e = Ie3(t);
    this._right !== e && (this._right = e, this.domNode.style.right = this._right);
  }
  setPaddingTop(t) {
    let e = Ie3(t);
    this._paddingTop !== e && (this._paddingTop = e, this.domNode.style.paddingTop = this._paddingTop);
  }
  setPaddingLeft(t) {
    let e = Ie3(t);
    this._paddingLeft !== e && (this._paddingLeft = e, this.domNode.style.paddingLeft = this._paddingLeft);
  }
  setPaddingBottom(t) {
    let e = Ie3(t);
    this._paddingBottom !== e && (this._paddingBottom = e, this.domNode.style.paddingBottom = this._paddingBottom);
  }
  setPaddingRight(t) {
    let e = Ie3(t);
    this._paddingRight !== e && (this._paddingRight = e, this.domNode.style.paddingRight = this._paddingRight);
  }
  setFontFamily(t) {
    this._fontFamily !== t && (this._fontFamily = t, this.domNode.style.fontFamily = this._fontFamily);
  }
  setFontWeight(t) {
    this._fontWeight !== t && (this._fontWeight = t, this.domNode.style.fontWeight = this._fontWeight);
  }
  setFontSize(t) {
    let e = Ie3(t);
    this._fontSize !== e && (this._fontSize = e, this.domNode.style.fontSize = this._fontSize);
  }
  setFontStyle(t) {
    this._fontStyle !== t && (this._fontStyle = t, this.domNode.style.fontStyle = this._fontStyle);
  }
  setFontFeatureSettings(t) {
    this._fontFeatureSettings !== t && (this._fontFeatureSettings = t, this.domNode.style.fontFeatureSettings = this._fontFeatureSettings);
  }
  setFontVariationSettings(t) {
    this._fontVariationSettings !== t && (this._fontVariationSettings = t, this.domNode.style.fontVariationSettings = this._fontVariationSettings);
  }
  setTextDecoration(t) {
    this._textDecoration !== t && (this._textDecoration = t, this.domNode.style.textDecoration = this._textDecoration);
  }
  setLineHeight(t) {
    let e = Ie3(t);
    this._lineHeight !== e && (this._lineHeight = e, this.domNode.style.lineHeight = this._lineHeight);
  }
  setLetterSpacing(t) {
    let e = Ie3(t);
    this._letterSpacing !== e && (this._letterSpacing = e, this.domNode.style.letterSpacing = this._letterSpacing);
  }
  setClassName(t) {
    this._className !== t && (this._className = t, this.domNode.className = this._className);
  }
  toggleClassName(t, e) {
    this.domNode.classList.toggle(t, e), this._className = this.domNode.className;
  }
  setDisplay(t) {
    this._display !== t && (this._display = t, this.domNode.style.display = this._display);
  }
  setPosition(t) {
    this._position !== t && (this._position = t, this.domNode.style.position = this._position);
  }
  setVisibility(t) {
    this._visibility !== t && (this._visibility = t, this.domNode.style.visibility = this._visibility);
  }
  setColor(t) {
    this._color !== t && (this._color = t, this.domNode.style.color = this._color);
  }
  setBackgroundColor(t) {
    this._backgroundColor !== t && (this._backgroundColor = t, this.domNode.style.backgroundColor = this._backgroundColor);
  }
  setLayerHinting(t) {
    this._layerHint !== t && (this._layerHint = t, this.domNode.style.transform = this._layerHint ? "translate3d(0px, 0px, 0px)" : "");
  }
  setBoxShadow(t) {
    this._boxShadow !== t && (this._boxShadow = t, this.domNode.style.boxShadow = t);
  }
  setContain(t) {
    this._contain !== t && (this._contain = t, this.domNode.style.contain = this._contain);
  }
  setAttribute(t, e) {
    this.domNode.setAttribute(t, e);
  }
  removeAttribute(t) {
    this.domNode.removeAttribute(t);
  }
  appendChild(t) {
    this.domNode.appendChild(t.domNode);
  }
  removeChild(t) {
    this.domNode.removeChild(t.domNode);
  }
};
function Ie3(s15) {
  return typeof s15 == "number" ? `${s15}px` : s15;
}
function _t(s15) {
  return new ls(s15);
}
var Wt2 = class {
  constructor() {
    this._hooks = new Ee4();
    this._pointerMoveCallback = null;
    this._onStopCallback = null;
  }
  dispose() {
    this.stopMonitoring(false), this._hooks.dispose();
  }
  stopMonitoring(t, e) {
    if (!this.isMonitoring()) return;
    this._hooks.clear(), this._pointerMoveCallback = null;
    let i8 = this._onStopCallback;
    this._onStopCallback = null, t && i8 && i8(e);
  }
  isMonitoring() {
    return !!this._pointerMoveCallback;
  }
  startMonitoring(t, e, i8, r6, n) {
    this.isMonitoring() && this.stopMonitoring(false), this._pointerMoveCallback = r6, this._onStopCallback = n;
    let o2 = t;
    try {
      t.setPointerCapture(e), this._hooks.add(C3(() => {
        try {
          t.releasePointerCapture(e);
        } catch {
        }
      }));
    } catch {
      o2 = be4(t);
    }
    this._hooks.add(L3(o2, Y5.POINTER_MOVE, (l2) => {
      if (l2.buttons !== i8) {
        this.stopMonitoring(true);
        return;
      }
      l2.preventDefault(), this._pointerMoveCallback(l2);
    })), this._hooks.add(L3(o2, Y5.POINTER_UP, (l2) => this.stopMonitoring(true)));
  }
};
function Wo(s15, t, e) {
  let i8 = null, r6 = null;
  if (typeof e.value == "function" ? (i8 = "value", r6 = e.value, r6.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof e.get == "function" && (i8 = "get", r6 = e.get), !r6) throw new Error("not supported");
  let n = `$memoize$${t}`;
  e[i8] = function(...o2) {
    return this.hasOwnProperty(n) || Object.defineProperty(this, n, { configurable: false, enumerable: false, writable: false, value: r6.apply(this, o2) }), this[n];
  };
}
var He4;
((n) => (n.Tap = "-xterm-gesturetap", n.Change = "-xterm-gesturechange", n.Start = "-xterm-gesturestart", n.End = "-xterm-gesturesend", n.Contextmenu = "-xterm-gesturecontextmenu"))(He4 ||= {});
var Q3 = class Q4 extends D3 {
  constructor() {
    super();
    this.dispatched = false;
    this.targets = new Ct2();
    this.ignoreTargets = new Ct2();
    this.activeTouches = {}, this.handle = null, this._lastSetTapCountTime = 0, this._register($2.runAndSubscribe(No, ({ window: e, disposables: i8 }) => {
      i8.add(L3(e.document, "touchstart", (r6) => this.onTouchStart(r6), { passive: false })), i8.add(L3(e.document, "touchend", (r6) => this.onTouchEnd(e, r6))), i8.add(L3(e.document, "touchmove", (r6) => this.onTouchMove(r6), { passive: false }));
    }, { window: fe4, disposables: this._store }));
  }
  static addTarget(e) {
    if (!Q4.isTouchDevice()) return D3.None;
    Q4.INSTANCE || (Q4.INSTANCE = Gn2(new Q4()));
    let i8 = Q4.INSTANCE.targets.push(e);
    return C3(i8);
  }
  static ignoreTarget(e) {
    if (!Q4.isTouchDevice()) return D3.None;
    Q4.INSTANCE || (Q4.INSTANCE = Gn2(new Q4()));
    let i8 = Q4.INSTANCE.ignoreTargets.push(e);
    return C3(i8);
  }
  static isTouchDevice() {
    return "ontouchstart" in fe4 || navigator.maxTouchPoints > 0;
  }
  dispose() {
    this.handle && (this.handle.dispose(), this.handle = null), super.dispose();
  }
  onTouchStart(e) {
    let i8 = Date.now();
    this.handle && (this.handle.dispose(), this.handle = null);
    for (let r6 = 0, n = e.targetTouches.length; r6 < n; r6++) {
      let o2 = e.targetTouches.item(r6);
      this.activeTouches[o2.identifier] = { id: o2.identifier, initialTarget: o2.target, initialTimeStamp: i8, initialPageX: o2.pageX, initialPageY: o2.pageY, rollingTimestamps: [i8], rollingPageX: [o2.pageX], rollingPageY: [o2.pageY] };
      let l2 = this.newGestureEvent(He4.Start, o2.target);
      l2.pageX = o2.pageX, l2.pageY = o2.pageY, this.dispatchEvent(l2);
    }
    this.dispatched && (e.preventDefault(), e.stopPropagation(), this.dispatched = false);
  }
  onTouchEnd(e, i8) {
    let r6 = Date.now(), n = Object.keys(this.activeTouches).length;
    for (let o2 = 0, l2 = i8.changedTouches.length; o2 < l2; o2++) {
      let a = i8.changedTouches.item(o2);
      if (!this.activeTouches.hasOwnProperty(String(a.identifier))) {
        console.warn("move of an UNKNOWN touch", a);
        continue;
      }
      let u2 = this.activeTouches[a.identifier], h2 = Date.now() - u2.initialTimeStamp;
      if (h2 < Q4.HOLD_DELAY && Math.abs(u2.initialPageX - Se3(u2.rollingPageX)) < 30 && Math.abs(u2.initialPageY - Se3(u2.rollingPageY)) < 30) {
        let c = this.newGestureEvent(He4.Tap, u2.initialTarget);
        c.pageX = Se3(u2.rollingPageX), c.pageY = Se3(u2.rollingPageY), this.dispatchEvent(c);
      } else if (h2 >= Q4.HOLD_DELAY && Math.abs(u2.initialPageX - Se3(u2.rollingPageX)) < 30 && Math.abs(u2.initialPageY - Se3(u2.rollingPageY)) < 30) {
        let c = this.newGestureEvent(He4.Contextmenu, u2.initialTarget);
        c.pageX = Se3(u2.rollingPageX), c.pageY = Se3(u2.rollingPageY), this.dispatchEvent(c);
      } else if (n === 1) {
        let c = Se3(u2.rollingPageX), d = Se3(u2.rollingPageY), _4 = Se3(u2.rollingTimestamps) - u2.rollingTimestamps[0], p2 = c - u2.rollingPageX[0], m2 = d - u2.rollingPageY[0], f = [...this.targets].filter((A2) => u2.initialTarget instanceof Node && A2.contains(u2.initialTarget));
        this.inertia(e, f, r6, Math.abs(p2) / _4, p2 > 0 ? 1 : -1, c, Math.abs(m2) / _4, m2 > 0 ? 1 : -1, d);
      }
      this.dispatchEvent(this.newGestureEvent(He4.End, u2.initialTarget)), delete this.activeTouches[a.identifier];
    }
    this.dispatched && (i8.preventDefault(), i8.stopPropagation(), this.dispatched = false);
  }
  newGestureEvent(e, i8) {
    let r6 = document.createEvent("CustomEvent");
    return r6.initEvent(e, false, true), r6.initialTarget = i8, r6.tapCount = 0, r6;
  }
  dispatchEvent(e) {
    if (e.type === He4.Tap) {
      let i8 = (/* @__PURE__ */ new Date()).getTime(), r6 = 0;
      i8 - this._lastSetTapCountTime > Q4.CLEAR_TAP_COUNT_TIME ? r6 = 1 : r6 = 2, this._lastSetTapCountTime = i8, e.tapCount = r6;
    } else (e.type === He4.Change || e.type === He4.Contextmenu) && (this._lastSetTapCountTime = 0);
    if (e.initialTarget instanceof Node) {
      for (let r6 of this.ignoreTargets) if (r6.contains(e.initialTarget)) return;
      let i8 = [];
      for (let r6 of this.targets) if (r6.contains(e.initialTarget)) {
        let n = 0, o2 = e.initialTarget;
        for (; o2 && o2 !== r6; ) n++, o2 = o2.parentElement;
        i8.push([n, r6]);
      }
      i8.sort((r6, n) => r6[0] - n[0]);
      for (let [r6, n] of i8) n.dispatchEvent(e), this.dispatched = true;
    }
  }
  inertia(e, i8, r6, n, o2, l2, a, u2, h2) {
    this.handle = mt(e, () => {
      let c = Date.now(), d = c - r6, _4 = 0, p2 = 0, m2 = true;
      n += Q4.SCROLL_FRICTION * d, a += Q4.SCROLL_FRICTION * d, n > 0 && (m2 = false, _4 = o2 * n * d), a > 0 && (m2 = false, p2 = u2 * a * d);
      let f = this.newGestureEvent(He4.Change);
      f.translationX = _4, f.translationY = p2, i8.forEach((A2) => A2.dispatchEvent(f)), m2 || this.inertia(e, i8, c, n, o2, l2 + _4, a, u2, h2 + p2);
    });
  }
  onTouchMove(e) {
    let i8 = Date.now();
    for (let r6 = 0, n = e.changedTouches.length; r6 < n; r6++) {
      let o2 = e.changedTouches.item(r6);
      if (!this.activeTouches.hasOwnProperty(String(o2.identifier))) {
        console.warn("end of an UNKNOWN touch", o2);
        continue;
      }
      let l2 = this.activeTouches[o2.identifier], a = this.newGestureEvent(He4.Change, l2.initialTarget);
      a.translationX = o2.pageX - Se3(l2.rollingPageX), a.translationY = o2.pageY - Se3(l2.rollingPageY), a.pageX = o2.pageX, a.pageY = o2.pageY, this.dispatchEvent(a), l2.rollingPageX.length > 3 && (l2.rollingPageX.shift(), l2.rollingPageY.shift(), l2.rollingTimestamps.shift()), l2.rollingPageX.push(o2.pageX), l2.rollingPageY.push(o2.pageY), l2.rollingTimestamps.push(i8);
    }
    this.dispatched && (e.preventDefault(), e.stopPropagation(), this.dispatched = false);
  }
};
Q3.SCROLL_FRICTION = -5e-3, Q3.HOLD_DELAY = 700, Q3.CLEAR_TAP_COUNT_TIME = 400, M3([Wo], Q3, "isTouchDevice", 1);
var Pr2 = Q3;
var lt3 = class extends D3 {
  onclick(t, e) {
    this._register(L3(t, Y5.CLICK, (i8) => e(new qe3(be4(t), i8))));
  }
  onmousedown(t, e) {
    this._register(L3(t, Y5.MOUSE_DOWN, (i8) => e(new qe3(be4(t), i8))));
  }
  onmouseover(t, e) {
    this._register(L3(t, Y5.MOUSE_OVER, (i8) => e(new qe3(be4(t), i8))));
  }
  onmouseleave(t, e) {
    this._register(L3(t, Y5.MOUSE_LEAVE, (i8) => e(new qe3(be4(t), i8))));
  }
  onkeydown(t, e) {
    this._register(L3(t, Y5.KEY_DOWN, (i8) => e(new ft(i8))));
  }
  onkeyup(t, e) {
    this._register(L3(t, Y5.KEY_UP, (i8) => e(new ft(i8))));
  }
  oninput(t, e) {
    this._register(L3(t, Y5.INPUT, e));
  }
  onblur(t, e) {
    this._register(L3(t, Y5.BLUR, e));
  }
  onfocus(t, e) {
    this._register(L3(t, Y5.FOCUS, e));
  }
  onchange(t, e) {
    this._register(L3(t, Y5.CHANGE, e));
  }
  ignoreGesture(t) {
    return Pr2.ignoreTarget(t);
  }
};
var Uo = 11;
var Or2 = class extends lt3 {
  constructor(t) {
    super(), this._onActivate = t.onActivate, this.bgDomNode = document.createElement("div"), this.bgDomNode.className = "arrow-background", this.bgDomNode.style.position = "absolute", this.bgDomNode.style.width = t.bgWidth + "px", this.bgDomNode.style.height = t.bgHeight + "px", typeof t.top < "u" && (this.bgDomNode.style.top = "0px"), typeof t.left < "u" && (this.bgDomNode.style.left = "0px"), typeof t.bottom < "u" && (this.bgDomNode.style.bottom = "0px"), typeof t.right < "u" && (this.bgDomNode.style.right = "0px"), this.domNode = document.createElement("div"), this.domNode.className = t.className, this.domNode.style.position = "absolute", this.domNode.style.width = Uo + "px", this.domNode.style.height = Uo + "px", typeof t.top < "u" && (this.domNode.style.top = t.top + "px"), typeof t.left < "u" && (this.domNode.style.left = t.left + "px"), typeof t.bottom < "u" && (this.domNode.style.bottom = t.bottom + "px"), typeof t.right < "u" && (this.domNode.style.right = t.right + "px"), this._pointerMoveMonitor = this._register(new Wt2()), this._register(os2(this.bgDomNode, Y5.POINTER_DOWN, (e) => this._arrowPointerDown(e))), this._register(os2(this.domNode, Y5.POINTER_DOWN, (e) => this._arrowPointerDown(e))), this._pointerdownRepeatTimer = this._register(new Mr2()), this._pointerdownScheduleRepeatTimer = this._register(new Ye3());
  }
  _arrowPointerDown(t) {
    if (!t.target || !(t.target instanceof Element)) return;
    let e = () => {
      this._pointerdownRepeatTimer.cancelAndSet(() => this._onActivate(), 1e3 / 24, be4(t));
    };
    this._onActivate(), this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancelAndSet(e, 200), this._pointerMoveMonitor.startMonitoring(t.target, t.pointerId, t.buttons, (i8) => {
    }, () => {
      this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancel();
    }), t.preventDefault();
  }
};
var cs2 = class s9 {
  constructor(t, e, i8, r6, n, o2, l2) {
    this._forceIntegerValues = t;
    this._scrollStateBrand = void 0;
    this._forceIntegerValues && (e = e | 0, i8 = i8 | 0, r6 = r6 | 0, n = n | 0, o2 = o2 | 0, l2 = l2 | 0), this.rawScrollLeft = r6, this.rawScrollTop = l2, e < 0 && (e = 0), r6 + e > i8 && (r6 = i8 - e), r6 < 0 && (r6 = 0), n < 0 && (n = 0), l2 + n > o2 && (l2 = o2 - n), l2 < 0 && (l2 = 0), this.width = e, this.scrollWidth = i8, this.scrollLeft = r6, this.height = n, this.scrollHeight = o2, this.scrollTop = l2;
  }
  equals(t) {
    return this.rawScrollLeft === t.rawScrollLeft && this.rawScrollTop === t.rawScrollTop && this.width === t.width && this.scrollWidth === t.scrollWidth && this.scrollLeft === t.scrollLeft && this.height === t.height && this.scrollHeight === t.scrollHeight && this.scrollTop === t.scrollTop;
  }
  withScrollDimensions(t, e) {
    return new s9(this._forceIntegerValues, typeof t.width < "u" ? t.width : this.width, typeof t.scrollWidth < "u" ? t.scrollWidth : this.scrollWidth, e ? this.rawScrollLeft : this.scrollLeft, typeof t.height < "u" ? t.height : this.height, typeof t.scrollHeight < "u" ? t.scrollHeight : this.scrollHeight, e ? this.rawScrollTop : this.scrollTop);
  }
  withScrollPosition(t) {
    return new s9(this._forceIntegerValues, this.width, this.scrollWidth, typeof t.scrollLeft < "u" ? t.scrollLeft : this.rawScrollLeft, this.height, this.scrollHeight, typeof t.scrollTop < "u" ? t.scrollTop : this.rawScrollTop);
  }
  createScrollEvent(t, e) {
    let i8 = this.width !== t.width, r6 = this.scrollWidth !== t.scrollWidth, n = this.scrollLeft !== t.scrollLeft, o2 = this.height !== t.height, l2 = this.scrollHeight !== t.scrollHeight, a = this.scrollTop !== t.scrollTop;
    return { inSmoothScrolling: e, oldWidth: t.width, oldScrollWidth: t.scrollWidth, oldScrollLeft: t.scrollLeft, width: this.width, scrollWidth: this.scrollWidth, scrollLeft: this.scrollLeft, oldHeight: t.height, oldScrollHeight: t.scrollHeight, oldScrollTop: t.scrollTop, height: this.height, scrollHeight: this.scrollHeight, scrollTop: this.scrollTop, widthChanged: i8, scrollWidthChanged: r6, scrollLeftChanged: n, heightChanged: o2, scrollHeightChanged: l2, scrollTopChanged: a };
  }
};
var Ri = class extends D3 {
  constructor(e) {
    super();
    this._scrollableBrand = void 0;
    this._onScroll = this._register(new v2());
    this.onScroll = this._onScroll.event;
    this._smoothScrollDuration = e.smoothScrollDuration, this._scheduleAtNextAnimationFrame = e.scheduleAtNextAnimationFrame, this._state = new cs2(e.forceIntegerValues, 0, 0, 0, 0, 0, 0), this._smoothScrolling = null;
  }
  dispose() {
    this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), super.dispose();
  }
  setSmoothScrollDuration(e) {
    this._smoothScrollDuration = e;
  }
  validateScrollPosition(e) {
    return this._state.withScrollPosition(e);
  }
  getScrollDimensions() {
    return this._state;
  }
  setScrollDimensions(e, i8) {
    let r6 = this._state.withScrollDimensions(e, i8);
    this._setState(r6, !!this._smoothScrolling), this._smoothScrolling?.acceptScrollDimensions(this._state);
  }
  getFutureScrollPosition() {
    return this._smoothScrolling ? this._smoothScrolling.to : this._state;
  }
  getCurrentScrollPosition() {
    return this._state;
  }
  setScrollPositionNow(e) {
    let i8 = this._state.withScrollPosition(e);
    this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), this._setState(i8, false);
  }
  setScrollPositionSmooth(e, i8) {
    if (this._smoothScrollDuration === 0) return this.setScrollPositionNow(e);
    if (this._smoothScrolling) {
      e = { scrollLeft: typeof e.scrollLeft > "u" ? this._smoothScrolling.to.scrollLeft : e.scrollLeft, scrollTop: typeof e.scrollTop > "u" ? this._smoothScrolling.to.scrollTop : e.scrollTop };
      let r6 = this._state.withScrollPosition(e);
      if (this._smoothScrolling.to.scrollLeft === r6.scrollLeft && this._smoothScrolling.to.scrollTop === r6.scrollTop) return;
      let n;
      i8 ? n = new Nr(this._smoothScrolling.from, r6, this._smoothScrolling.startTime, this._smoothScrolling.duration) : n = this._smoothScrolling.combine(this._state, r6, this._smoothScrollDuration), this._smoothScrolling.dispose(), this._smoothScrolling = n;
    } else {
      let r6 = this._state.withScrollPosition(e);
      this._smoothScrolling = Nr.start(this._state, r6, this._smoothScrollDuration);
    }
    this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(() => {
      this._smoothScrolling && (this._smoothScrolling.animationFrameDisposable = null, this._performSmoothScrolling());
    });
  }
  hasPendingScrollAnimation() {
    return !!this._smoothScrolling;
  }
  _performSmoothScrolling() {
    if (!this._smoothScrolling) return;
    let e = this._smoothScrolling.tick(), i8 = this._state.withScrollPosition(e);
    if (this._setState(i8, true), !!this._smoothScrolling) {
      if (e.isDone) {
        this._smoothScrolling.dispose(), this._smoothScrolling = null;
        return;
      }
      this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(() => {
        this._smoothScrolling && (this._smoothScrolling.animationFrameDisposable = null, this._performSmoothScrolling());
      });
    }
  }
  _setState(e, i8) {
    let r6 = this._state;
    r6.equals(e) || (this._state = e, this._onScroll.fire(this._state.createScrollEvent(r6, i8)));
  }
};
var Br2 = class {
  constructor(t, e, i8) {
    this.scrollLeft = t, this.scrollTop = e, this.isDone = i8;
  }
};
function as2(s15, t) {
  let e = t - s15;
  return function(i8) {
    return s15 + e * ka(i8);
  };
}
function La(s15, t, e) {
  return function(i8) {
    return i8 < e ? s15(i8 / e) : t((i8 - e) / (1 - e));
  };
}
var Nr = class s10 {
  constructor(t, e, i8, r6) {
    this.from = t, this.to = e, this.duration = r6, this.startTime = i8, this.animationFrameDisposable = null, this._initAnimations();
  }
  _initAnimations() {
    this.scrollLeft = this._initAnimation(this.from.scrollLeft, this.to.scrollLeft, this.to.width), this.scrollTop = this._initAnimation(this.from.scrollTop, this.to.scrollTop, this.to.height);
  }
  _initAnimation(t, e, i8) {
    if (Math.abs(t - e) > 2.5 * i8) {
      let n, o2;
      return t < e ? (n = t + 0.75 * i8, o2 = e - 0.75 * i8) : (n = t - 0.75 * i8, o2 = e + 0.75 * i8), La(as2(t, n), as2(o2, e), 0.33);
    }
    return as2(t, e);
  }
  dispose() {
    this.animationFrameDisposable !== null && (this.animationFrameDisposable.dispose(), this.animationFrameDisposable = null);
  }
  acceptScrollDimensions(t) {
    this.to = t.withScrollPosition(this.to), this._initAnimations();
  }
  tick() {
    return this._tick(Date.now());
  }
  _tick(t) {
    let e = (t - this.startTime) / this.duration;
    if (e < 1) {
      let i8 = this.scrollLeft(e), r6 = this.scrollTop(e);
      return new Br2(i8, r6, false);
    }
    return new Br2(this.to.scrollLeft, this.to.scrollTop, true);
  }
  combine(t, e, i8) {
    return s10.start(t, e, i8);
  }
  static start(t, e, i8) {
    i8 = i8 + 10;
    let r6 = Date.now() - 10;
    return new s10(t, e, r6, i8);
  }
};
function Aa(s15) {
  return Math.pow(s15, 3);
}
function ka(s15) {
  return 1 - Aa(1 - s15);
}
var Fr2 = class extends D3 {
  constructor(t, e, i8) {
    super(), this._visibility = t, this._visibleClassName = e, this._invisibleClassName = i8, this._domNode = null, this._isVisible = false, this._isNeeded = false, this._rawShouldBeVisible = false, this._shouldBeVisible = false, this._revealTimer = this._register(new Ye3());
  }
  setVisibility(t) {
    this._visibility !== t && (this._visibility = t, this._updateShouldBeVisible());
  }
  setShouldBeVisible(t) {
    this._rawShouldBeVisible = t, this._updateShouldBeVisible();
  }
  _applyVisibilitySetting() {
    return this._visibility === 2 ? false : this._visibility === 3 ? true : this._rawShouldBeVisible;
  }
  _updateShouldBeVisible() {
    let t = this._applyVisibilitySetting();
    this._shouldBeVisible !== t && (this._shouldBeVisible = t, this.ensureVisibility());
  }
  setIsNeeded(t) {
    this._isNeeded !== t && (this._isNeeded = t, this.ensureVisibility());
  }
  setDomNode(t) {
    this._domNode = t, this._domNode.setClassName(this._invisibleClassName), this.setShouldBeVisible(false);
  }
  ensureVisibility() {
    if (!this._isNeeded) {
      this._hide(false);
      return;
    }
    this._shouldBeVisible ? this._reveal() : this._hide(true);
  }
  _reveal() {
    this._isVisible || (this._isVisible = true, this._revealTimer.setIfNotSet(() => {
      this._domNode?.setClassName(this._visibleClassName);
    }, 0));
  }
  _hide(t) {
    this._revealTimer.cancel(), this._isVisible && (this._isVisible = false, this._domNode?.setClassName(this._invisibleClassName + (t ? " fade" : "")));
  }
};
var Ca2 = 140;
var Ut2 = class extends lt3 {
  constructor(t) {
    super(), this._lazyRender = t.lazyRender, this._host = t.host, this._scrollable = t.scrollable, this._scrollByPage = t.scrollByPage, this._scrollbarState = t.scrollbarState, this._visibilityController = this._register(new Fr2(t.visibility, "visible scrollbar " + t.extraScrollbarClassName, "invisible scrollbar " + t.extraScrollbarClassName)), this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._pointerMoveMonitor = this._register(new Wt2()), this._shouldRender = true, this.domNode = _t(document.createElement("div")), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this._visibilityController.setDomNode(this.domNode), this.domNode.setPosition("absolute"), this._register(L3(this.domNode.domNode, Y5.POINTER_DOWN, (e) => this._domNodePointerDown(e)));
  }
  _createArrow(t) {
    let e = this._register(new Or2(t));
    this.domNode.domNode.appendChild(e.bgDomNode), this.domNode.domNode.appendChild(e.domNode);
  }
  _createSlider(t, e, i8, r6) {
    this.slider = _t(document.createElement("div")), this.slider.setClassName("slider"), this.slider.setPosition("absolute"), this.slider.setTop(t), this.slider.setLeft(e), typeof i8 == "number" && this.slider.setWidth(i8), typeof r6 == "number" && this.slider.setHeight(r6), this.slider.setLayerHinting(true), this.slider.setContain("strict"), this.domNode.domNode.appendChild(this.slider.domNode), this._register(L3(this.slider.domNode, Y5.POINTER_DOWN, (n) => {
      n.button === 0 && (n.preventDefault(), this._sliderPointerDown(n));
    })), this.onclick(this.slider.domNode, (n) => {
      n.leftButton && n.stopPropagation();
    });
  }
  _onElementSize(t) {
    return this._scrollbarState.setVisibleSize(t) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = true, this._lazyRender || this.render()), this._shouldRender;
  }
  _onElementScrollSize(t) {
    return this._scrollbarState.setScrollSize(t) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = true, this._lazyRender || this.render()), this._shouldRender;
  }
  _onElementScrollPosition(t) {
    return this._scrollbarState.setScrollPosition(t) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = true, this._lazyRender || this.render()), this._shouldRender;
  }
  beginReveal() {
    this._visibilityController.setShouldBeVisible(true);
  }
  beginHide() {
    this._visibilityController.setShouldBeVisible(false);
  }
  render() {
    this._shouldRender && (this._shouldRender = false, this._renderDomNode(this._scrollbarState.getRectangleLargeSize(), this._scrollbarState.getRectangleSmallSize()), this._updateSlider(this._scrollbarState.getSliderSize(), this._scrollbarState.getArrowSize() + this._scrollbarState.getSliderPosition()));
  }
  _domNodePointerDown(t) {
    t.target === this.domNode.domNode && this._onPointerDown(t);
  }
  delegatePointerDown(t) {
    let e = this.domNode.domNode.getClientRects()[0].top, i8 = e + this._scrollbarState.getSliderPosition(), r6 = e + this._scrollbarState.getSliderPosition() + this._scrollbarState.getSliderSize(), n = this._sliderPointerPosition(t);
    i8 <= n && n <= r6 ? t.button === 0 && (t.preventDefault(), this._sliderPointerDown(t)) : this._onPointerDown(t);
  }
  _onPointerDown(t) {
    let e, i8;
    if (t.target === this.domNode.domNode && typeof t.offsetX == "number" && typeof t.offsetY == "number") e = t.offsetX, i8 = t.offsetY;
    else {
      let n = Fo(this.domNode.domNode);
      e = t.pageX - n.left, i8 = t.pageY - n.top;
    }
    let r6 = this._pointerDownRelativePosition(e, i8);
    this._setDesiredScrollPositionNow(this._scrollByPage ? this._scrollbarState.getDesiredScrollPositionFromOffsetPaged(r6) : this._scrollbarState.getDesiredScrollPositionFromOffset(r6)), t.button === 0 && (t.preventDefault(), this._sliderPointerDown(t));
  }
  _sliderPointerDown(t) {
    if (!t.target || !(t.target instanceof Element)) return;
    let e = this._sliderPointerPosition(t), i8 = this._sliderOrthogonalPointerPosition(t), r6 = this._scrollbarState.clone();
    this.slider.toggleClassName("active", true), this._pointerMoveMonitor.startMonitoring(t.target, t.pointerId, t.buttons, (n) => {
      let o2 = this._sliderOrthogonalPointerPosition(n), l2 = Math.abs(o2 - i8);
      if (wr2 && l2 > Ca2) {
        this._setDesiredScrollPositionNow(r6.getScrollPosition());
        return;
      }
      let u2 = this._sliderPointerPosition(n) - e;
      this._setDesiredScrollPositionNow(r6.getDesiredScrollPositionFromDelta(u2));
    }, () => {
      this.slider.toggleClassName("active", false), this._host.onDragEnd();
    }), this._host.onDragStart();
  }
  _setDesiredScrollPositionNow(t) {
    let e = {};
    this.writeScrollPosition(e, t), this._scrollable.setScrollPositionNow(e);
  }
  updateScrollbarSize(t) {
    this._updateScrollbarSize(t), this._scrollbarState.setScrollbarSize(t), this._shouldRender = true, this._lazyRender || this.render();
  }
  isNeeded() {
    return this._scrollbarState.isNeeded();
  }
};
var Kt2 = class s11 {
  constructor(t, e, i8, r6, n, o2) {
    this._scrollbarSize = Math.round(e), this._oppositeScrollbarSize = Math.round(i8), this._arrowSize = Math.round(t), this._visibleSize = r6, this._scrollSize = n, this._scrollPosition = o2, this._computedAvailableSize = 0, this._computedIsNeeded = false, this._computedSliderSize = 0, this._computedSliderRatio = 0, this._computedSliderPosition = 0, this._refreshComputedValues();
  }
  clone() {
    return new s11(this._arrowSize, this._scrollbarSize, this._oppositeScrollbarSize, this._visibleSize, this._scrollSize, this._scrollPosition);
  }
  setVisibleSize(t) {
    let e = Math.round(t);
    return this._visibleSize !== e ? (this._visibleSize = e, this._refreshComputedValues(), true) : false;
  }
  setScrollSize(t) {
    let e = Math.round(t);
    return this._scrollSize !== e ? (this._scrollSize = e, this._refreshComputedValues(), true) : false;
  }
  setScrollPosition(t) {
    let e = Math.round(t);
    return this._scrollPosition !== e ? (this._scrollPosition = e, this._refreshComputedValues(), true) : false;
  }
  setScrollbarSize(t) {
    this._scrollbarSize = Math.round(t);
  }
  setOppositeScrollbarSize(t) {
    this._oppositeScrollbarSize = Math.round(t);
  }
  static _computeValues(t, e, i8, r6, n) {
    let o2 = Math.max(0, i8 - t), l2 = Math.max(0, o2 - 2 * e), a = r6 > 0 && r6 > i8;
    if (!a) return { computedAvailableSize: Math.round(o2), computedIsNeeded: a, computedSliderSize: Math.round(l2), computedSliderRatio: 0, computedSliderPosition: 0 };
    let u2 = Math.round(Math.max(20, Math.floor(i8 * l2 / r6))), h2 = (l2 - u2) / (r6 - i8), c = n * h2;
    return { computedAvailableSize: Math.round(o2), computedIsNeeded: a, computedSliderSize: Math.round(u2), computedSliderRatio: h2, computedSliderPosition: Math.round(c) };
  }
  _refreshComputedValues() {
    let t = s11._computeValues(this._oppositeScrollbarSize, this._arrowSize, this._visibleSize, this._scrollSize, this._scrollPosition);
    this._computedAvailableSize = t.computedAvailableSize, this._computedIsNeeded = t.computedIsNeeded, this._computedSliderSize = t.computedSliderSize, this._computedSliderRatio = t.computedSliderRatio, this._computedSliderPosition = t.computedSliderPosition;
  }
  getArrowSize() {
    return this._arrowSize;
  }
  getScrollPosition() {
    return this._scrollPosition;
  }
  getRectangleLargeSize() {
    return this._computedAvailableSize;
  }
  getRectangleSmallSize() {
    return this._scrollbarSize;
  }
  isNeeded() {
    return this._computedIsNeeded;
  }
  getSliderSize() {
    return this._computedSliderSize;
  }
  getSliderPosition() {
    return this._computedSliderPosition;
  }
  getDesiredScrollPositionFromOffset(t) {
    if (!this._computedIsNeeded) return 0;
    let e = t - this._arrowSize - this._computedSliderSize / 2;
    return Math.round(e / this._computedSliderRatio);
  }
  getDesiredScrollPositionFromOffsetPaged(t) {
    if (!this._computedIsNeeded) return 0;
    let e = t - this._arrowSize, i8 = this._scrollPosition;
    return e < this._computedSliderPosition ? i8 -= this._visibleSize : i8 += this._visibleSize, i8;
  }
  getDesiredScrollPositionFromDelta(t) {
    if (!this._computedIsNeeded) return 0;
    let e = this._computedSliderPosition + t;
    return Math.round(e / this._computedSliderRatio);
  }
};
var Wr2 = class extends Ut2 {
  constructor(t, e, i8) {
    let r6 = t.getScrollDimensions(), n = t.getCurrentScrollPosition();
    if (super({ lazyRender: e.lazyRender, host: i8, scrollbarState: new Kt2(e.horizontalHasArrows ? e.arrowSize : 0, e.horizontal === 2 ? 0 : e.horizontalScrollbarSize, e.vertical === 2 ? 0 : e.verticalScrollbarSize, r6.width, r6.scrollWidth, n.scrollLeft), visibility: e.horizontal, extraScrollbarClassName: "horizontal", scrollable: t, scrollByPage: e.scrollByPage }), e.horizontalHasArrows) throw new Error("horizontalHasArrows is not supported in xterm.js");
    this._createSlider(Math.floor((e.horizontalScrollbarSize - e.horizontalSliderSize) / 2), 0, void 0, e.horizontalSliderSize);
  }
  _updateSlider(t, e) {
    this.slider.setWidth(t), this.slider.setLeft(e);
  }
  _renderDomNode(t, e) {
    this.domNode.setWidth(t), this.domNode.setHeight(e), this.domNode.setLeft(0), this.domNode.setBottom(0);
  }
  onDidScroll(t) {
    return this._shouldRender = this._onElementScrollSize(t.scrollWidth) || this._shouldRender, this._shouldRender = this._onElementScrollPosition(t.scrollLeft) || this._shouldRender, this._shouldRender = this._onElementSize(t.width) || this._shouldRender, this._shouldRender;
  }
  _pointerDownRelativePosition(t, e) {
    return t;
  }
  _sliderPointerPosition(t) {
    return t.pageX;
  }
  _sliderOrthogonalPointerPosition(t) {
    return t.pageY;
  }
  _updateScrollbarSize(t) {
    this.slider.setHeight(t);
  }
  writeScrollPosition(t, e) {
    t.scrollLeft = e;
  }
  updateOptions(t) {
    this.updateScrollbarSize(t.horizontal === 2 ? 0 : t.horizontalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(t.vertical === 2 ? 0 : t.verticalScrollbarSize), this._visibilityController.setVisibility(t.horizontal), this._scrollByPage = t.scrollByPage;
  }
};
var Ur = class extends Ut2 {
  constructor(t, e, i8) {
    let r6 = t.getScrollDimensions(), n = t.getCurrentScrollPosition();
    if (super({ lazyRender: e.lazyRender, host: i8, scrollbarState: new Kt2(e.verticalHasArrows ? e.arrowSize : 0, e.vertical === 2 ? 0 : e.verticalScrollbarSize, 0, r6.height, r6.scrollHeight, n.scrollTop), visibility: e.vertical, extraScrollbarClassName: "vertical", scrollable: t, scrollByPage: e.scrollByPage }), e.verticalHasArrows) throw new Error("horizontalHasArrows is not supported in xterm.js");
    this._createSlider(0, Math.floor((e.verticalScrollbarSize - e.verticalSliderSize) / 2), e.verticalSliderSize, void 0);
  }
  _updateSlider(t, e) {
    this.slider.setHeight(t), this.slider.setTop(e);
  }
  _renderDomNode(t, e) {
    this.domNode.setWidth(e), this.domNode.setHeight(t), this.domNode.setRight(0), this.domNode.setTop(0);
  }
  onDidScroll(t) {
    return this._shouldRender = this._onElementScrollSize(t.scrollHeight) || this._shouldRender, this._shouldRender = this._onElementScrollPosition(t.scrollTop) || this._shouldRender, this._shouldRender = this._onElementSize(t.height) || this._shouldRender, this._shouldRender;
  }
  _pointerDownRelativePosition(t, e) {
    return e;
  }
  _sliderPointerPosition(t) {
    return t.pageY;
  }
  _sliderOrthogonalPointerPosition(t) {
    return t.pageX;
  }
  _updateScrollbarSize(t) {
    this.slider.setWidth(t);
  }
  writeScrollPosition(t, e) {
    t.scrollTop = e;
  }
  updateOptions(t) {
    this.updateScrollbarSize(t.vertical === 2 ? 0 : t.verticalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(0), this._visibilityController.setVisibility(t.vertical), this._scrollByPage = t.scrollByPage;
  }
};
var Ma = 500;
var Ko = 50;
var zo = true;
var us2 = class {
  constructor(t, e, i8) {
    this.timestamp = t, this.deltaX = e, this.deltaY = i8, this.score = 0;
  }
};
var zr2 = class zr3 {
  constructor() {
    this._capacity = 5, this._memory = [], this._front = -1, this._rear = -1;
  }
  isPhysicalMouseWheel() {
    if (this._front === -1 && this._rear === -1) return false;
    let t = 1, e = 0, i8 = 1, r6 = this._rear;
    do {
      let n = r6 === this._front ? t : Math.pow(2, -i8);
      if (t -= n, e += this._memory[r6].score * n, r6 === this._front) break;
      r6 = (this._capacity + r6 - 1) % this._capacity, i8++;
    } while (true);
    return e <= 0.5;
  }
  acceptStandardWheelEvent(t) {
    if (Ti2) {
      let e = be4(t.browserEvent), i8 = mo(e);
      this.accept(Date.now(), t.deltaX * i8, t.deltaY * i8);
    } else this.accept(Date.now(), t.deltaX, t.deltaY);
  }
  accept(t, e, i8) {
    let r6 = null, n = new us2(t, e, i8);
    this._front === -1 && this._rear === -1 ? (this._memory[0] = n, this._front = 0, this._rear = 0) : (r6 = this._memory[this._rear], this._rear = (this._rear + 1) % this._capacity, this._rear === this._front && (this._front = (this._front + 1) % this._capacity), this._memory[this._rear] = n), n.score = this._computeScore(n, r6);
  }
  _computeScore(t, e) {
    if (Math.abs(t.deltaX) > 0 && Math.abs(t.deltaY) > 0) return 1;
    let i8 = 0.5;
    if ((!this._isAlmostInt(t.deltaX) || !this._isAlmostInt(t.deltaY)) && (i8 += 0.25), e) {
      let r6 = Math.abs(t.deltaX), n = Math.abs(t.deltaY), o2 = Math.abs(e.deltaX), l2 = Math.abs(e.deltaY), a = Math.max(Math.min(r6, o2), 1), u2 = Math.max(Math.min(n, l2), 1), h2 = Math.max(r6, o2), c = Math.max(n, l2);
      h2 % a === 0 && c % u2 === 0 && (i8 -= 0.5);
    }
    return Math.min(Math.max(i8, 0), 1);
  }
  _isAlmostInt(t) {
    return Math.abs(Math.round(t) - t) < 0.01;
  }
};
zr2.INSTANCE = new zr2();
var hs2 = zr2;
var ds2 = class extends lt3 {
  constructor(e, i8, r6) {
    super();
    this._onScroll = this._register(new v2());
    this.onScroll = this._onScroll.event;
    this._onWillScroll = this._register(new v2());
    this.onWillScroll = this._onWillScroll.event;
    this._options = Pa(i8), this._scrollable = r6, this._register(this._scrollable.onScroll((o2) => {
      this._onWillScroll.fire(o2), this._onDidScroll(o2), this._onScroll.fire(o2);
    }));
    let n = { onMouseWheel: (o2) => this._onMouseWheel(o2), onDragStart: () => this._onDragStart(), onDragEnd: () => this._onDragEnd() };
    this._verticalScrollbar = this._register(new Ur(this._scrollable, this._options, n)), this._horizontalScrollbar = this._register(new Wr2(this._scrollable, this._options, n)), this._domNode = document.createElement("div"), this._domNode.className = "xterm-scrollable-element " + this._options.className, this._domNode.setAttribute("role", "presentation"), this._domNode.style.position = "relative", this._domNode.appendChild(e), this._domNode.appendChild(this._horizontalScrollbar.domNode.domNode), this._domNode.appendChild(this._verticalScrollbar.domNode.domNode), this._options.useShadows ? (this._leftShadowDomNode = _t(document.createElement("div")), this._leftShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._leftShadowDomNode.domNode), this._topShadowDomNode = _t(document.createElement("div")), this._topShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._topShadowDomNode.domNode), this._topLeftShadowDomNode = _t(document.createElement("div")), this._topLeftShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._topLeftShadowDomNode.domNode)) : (this._leftShadowDomNode = null, this._topShadowDomNode = null, this._topLeftShadowDomNode = null), this._listenOnDomNode = this._options.listenOnDomNode || this._domNode, this._mouseWheelToDispose = [], this._setListeningToMouseWheel(this._options.handleMouseWheel), this.onmouseover(this._listenOnDomNode, (o2) => this._onMouseOver(o2)), this.onmouseleave(this._listenOnDomNode, (o2) => this._onMouseLeave(o2)), this._hideTimeout = this._register(new Ye3()), this._isDragging = false, this._mouseIsOver = false, this._shouldRender = true, this._revealOnScroll = true;
  }
  get options() {
    return this._options;
  }
  dispose() {
    this._mouseWheelToDispose = Ne2(this._mouseWheelToDispose), super.dispose();
  }
  getDomNode() {
    return this._domNode;
  }
  getOverviewRulerLayoutInfo() {
    return { parent: this._domNode, insertBefore: this._verticalScrollbar.domNode.domNode };
  }
  delegateVerticalScrollbarPointerDown(e) {
    this._verticalScrollbar.delegatePointerDown(e);
  }
  getScrollDimensions() {
    return this._scrollable.getScrollDimensions();
  }
  setScrollDimensions(e) {
    this._scrollable.setScrollDimensions(e, false);
  }
  updateClassName(e) {
    this._options.className = e, Te4 && (this._options.className += " mac"), this._domNode.className = "xterm-scrollable-element " + this._options.className;
  }
  updateOptions(e) {
    typeof e.handleMouseWheel < "u" && (this._options.handleMouseWheel = e.handleMouseWheel, this._setListeningToMouseWheel(this._options.handleMouseWheel)), typeof e.mouseWheelScrollSensitivity < "u" && (this._options.mouseWheelScrollSensitivity = e.mouseWheelScrollSensitivity), typeof e.fastScrollSensitivity < "u" && (this._options.fastScrollSensitivity = e.fastScrollSensitivity), typeof e.scrollPredominantAxis < "u" && (this._options.scrollPredominantAxis = e.scrollPredominantAxis), typeof e.horizontal < "u" && (this._options.horizontal = e.horizontal), typeof e.vertical < "u" && (this._options.vertical = e.vertical), typeof e.horizontalScrollbarSize < "u" && (this._options.horizontalScrollbarSize = e.horizontalScrollbarSize), typeof e.verticalScrollbarSize < "u" && (this._options.verticalScrollbarSize = e.verticalScrollbarSize), typeof e.scrollByPage < "u" && (this._options.scrollByPage = e.scrollByPage), this._horizontalScrollbar.updateOptions(this._options), this._verticalScrollbar.updateOptions(this._options), this._options.lazyRender || this._render();
  }
  setRevealOnScroll(e) {
    this._revealOnScroll = e;
  }
  delegateScrollFromMouseWheelEvent(e) {
    this._onMouseWheel(new xi2(e));
  }
  _setListeningToMouseWheel(e) {
    if (this._mouseWheelToDispose.length > 0 !== e && (this._mouseWheelToDispose = Ne2(this._mouseWheelToDispose), e)) {
      let r6 = (n) => {
        this._onMouseWheel(new xi2(n));
      };
      this._mouseWheelToDispose.push(L3(this._listenOnDomNode, Y5.MOUSE_WHEEL, r6, { passive: false }));
    }
  }
  _onMouseWheel(e) {
    if (e.browserEvent?.defaultPrevented) return;
    let i8 = hs2.INSTANCE;
    zo && i8.acceptStandardWheelEvent(e);
    let r6 = false;
    if (e.deltaY || e.deltaX) {
      let o2 = e.deltaY * this._options.mouseWheelScrollSensitivity, l2 = e.deltaX * this._options.mouseWheelScrollSensitivity;
      this._options.scrollPredominantAxis && (this._options.scrollYToX && l2 + o2 === 0 ? l2 = o2 = 0 : Math.abs(o2) >= Math.abs(l2) ? l2 = 0 : o2 = 0), this._options.flipAxes && ([o2, l2] = [l2, o2]);
      let a = !Te4 && e.browserEvent && e.browserEvent.shiftKey;
      (this._options.scrollYToX || a) && !l2 && (l2 = o2, o2 = 0), e.browserEvent && e.browserEvent.altKey && (l2 = l2 * this._options.fastScrollSensitivity, o2 = o2 * this._options.fastScrollSensitivity);
      let u2 = this._scrollable.getFutureScrollPosition(), h2 = {};
      if (o2) {
        let c = Ko * o2, d = u2.scrollTop - (c < 0 ? Math.floor(c) : Math.ceil(c));
        this._verticalScrollbar.writeScrollPosition(h2, d);
      }
      if (l2) {
        let c = Ko * l2, d = u2.scrollLeft - (c < 0 ? Math.floor(c) : Math.ceil(c));
        this._horizontalScrollbar.writeScrollPosition(h2, d);
      }
      h2 = this._scrollable.validateScrollPosition(h2), (u2.scrollLeft !== h2.scrollLeft || u2.scrollTop !== h2.scrollTop) && (zo && this._options.mouseWheelSmoothScroll && i8.isPhysicalMouseWheel() ? this._scrollable.setScrollPositionSmooth(h2) : this._scrollable.setScrollPositionNow(h2), r6 = true);
    }
    let n = r6;
    !n && this._options.alwaysConsumeMouseWheel && (n = true), !n && this._options.consumeMouseWheelIfScrollbarIsNeeded && (this._verticalScrollbar.isNeeded() || this._horizontalScrollbar.isNeeded()) && (n = true), n && (e.preventDefault(), e.stopPropagation());
  }
  _onDidScroll(e) {
    this._shouldRender = this._horizontalScrollbar.onDidScroll(e) || this._shouldRender, this._shouldRender = this._verticalScrollbar.onDidScroll(e) || this._shouldRender, this._options.useShadows && (this._shouldRender = true), this._revealOnScroll && this._reveal(), this._options.lazyRender || this._render();
  }
  renderNow() {
    if (!this._options.lazyRender) throw new Error("Please use `lazyRender` together with `renderNow`!");
    this._render();
  }
  _render() {
    if (this._shouldRender && (this._shouldRender = false, this._horizontalScrollbar.render(), this._verticalScrollbar.render(), this._options.useShadows)) {
      let e = this._scrollable.getCurrentScrollPosition(), i8 = e.scrollTop > 0, r6 = e.scrollLeft > 0, n = r6 ? " left" : "", o2 = i8 ? " top" : "", l2 = r6 || i8 ? " top-left-corner" : "";
      this._leftShadowDomNode.setClassName(`shadow${n}`), this._topShadowDomNode.setClassName(`shadow${o2}`), this._topLeftShadowDomNode.setClassName(`shadow${l2}${o2}${n}`);
    }
  }
  _onDragStart() {
    this._isDragging = true, this._reveal();
  }
  _onDragEnd() {
    this._isDragging = false, this._hide();
  }
  _onMouseLeave(e) {
    this._mouseIsOver = false, this._hide();
  }
  _onMouseOver(e) {
    this._mouseIsOver = true, this._reveal();
  }
  _reveal() {
    this._verticalScrollbar.beginReveal(), this._horizontalScrollbar.beginReveal(), this._scheduleHide();
  }
  _hide() {
    !this._mouseIsOver && !this._isDragging && (this._verticalScrollbar.beginHide(), this._horizontalScrollbar.beginHide());
  }
  _scheduleHide() {
    !this._mouseIsOver && !this._isDragging && this._hideTimeout.cancelAndSet(() => this._hide(), Ma);
  }
};
var Kr2 = class extends ds2 {
  constructor(t, e, i8) {
    super(t, e, i8);
  }
  setScrollPosition(t) {
    t.reuseAnimation ? this._scrollable.setScrollPositionSmooth(t, t.reuseAnimation) : this._scrollable.setScrollPositionNow(t);
  }
  getScrollPosition() {
    return this._scrollable.getCurrentScrollPosition();
  }
};
function Pa(s15) {
  let t = { lazyRender: typeof s15.lazyRender < "u" ? s15.lazyRender : false, className: typeof s15.className < "u" ? s15.className : "", useShadows: typeof s15.useShadows < "u" ? s15.useShadows : true, handleMouseWheel: typeof s15.handleMouseWheel < "u" ? s15.handleMouseWheel : true, flipAxes: typeof s15.flipAxes < "u" ? s15.flipAxes : false, consumeMouseWheelIfScrollbarIsNeeded: typeof s15.consumeMouseWheelIfScrollbarIsNeeded < "u" ? s15.consumeMouseWheelIfScrollbarIsNeeded : false, alwaysConsumeMouseWheel: typeof s15.alwaysConsumeMouseWheel < "u" ? s15.alwaysConsumeMouseWheel : false, scrollYToX: typeof s15.scrollYToX < "u" ? s15.scrollYToX : false, mouseWheelScrollSensitivity: typeof s15.mouseWheelScrollSensitivity < "u" ? s15.mouseWheelScrollSensitivity : 1, fastScrollSensitivity: typeof s15.fastScrollSensitivity < "u" ? s15.fastScrollSensitivity : 5, scrollPredominantAxis: typeof s15.scrollPredominantAxis < "u" ? s15.scrollPredominantAxis : true, mouseWheelSmoothScroll: typeof s15.mouseWheelSmoothScroll < "u" ? s15.mouseWheelSmoothScroll : true, arrowSize: typeof s15.arrowSize < "u" ? s15.arrowSize : 11, listenOnDomNode: typeof s15.listenOnDomNode < "u" ? s15.listenOnDomNode : null, horizontal: typeof s15.horizontal < "u" ? s15.horizontal : 1, horizontalScrollbarSize: typeof s15.horizontalScrollbarSize < "u" ? s15.horizontalScrollbarSize : 10, horizontalSliderSize: typeof s15.horizontalSliderSize < "u" ? s15.horizontalSliderSize : 0, horizontalHasArrows: typeof s15.horizontalHasArrows < "u" ? s15.horizontalHasArrows : false, vertical: typeof s15.vertical < "u" ? s15.vertical : 1, verticalScrollbarSize: typeof s15.verticalScrollbarSize < "u" ? s15.verticalScrollbarSize : 10, verticalHasArrows: typeof s15.verticalHasArrows < "u" ? s15.verticalHasArrows : false, verticalSliderSize: typeof s15.verticalSliderSize < "u" ? s15.verticalSliderSize : 0, scrollByPage: typeof s15.scrollByPage < "u" ? s15.scrollByPage : false };
  return t.horizontalSliderSize = typeof s15.horizontalSliderSize < "u" ? s15.horizontalSliderSize : t.horizontalScrollbarSize, t.verticalSliderSize = typeof s15.verticalSliderSize < "u" ? s15.verticalSliderSize : t.verticalScrollbarSize, Te4 && (t.className += " mac"), t;
}
var zt2 = class extends D3 {
  constructor(e, i8, r6, n, o2, l2, a, u2) {
    super();
    this._bufferService = r6;
    this._optionsService = a;
    this._renderService = u2;
    this._onRequestScrollLines = this._register(new v2());
    this.onRequestScrollLines = this._onRequestScrollLines.event;
    this._isSyncing = false;
    this._isHandlingScroll = false;
    this._suppressOnScrollHandler = false;
    let h2 = this._register(new Ri({ forceIntegerValues: false, smoothScrollDuration: this._optionsService.rawOptions.smoothScrollDuration, scheduleAtNextAnimationFrame: (c) => mt(n.window, c) }));
    this._register(this._optionsService.onSpecificOptionChange("smoothScrollDuration", () => {
      h2.setSmoothScrollDuration(this._optionsService.rawOptions.smoothScrollDuration);
    })), this._scrollableElement = this._register(new Kr2(i8, { vertical: 1, horizontal: 2, useShadows: false, mouseWheelSmoothScroll: true, ...this._getChangeOptions() }, h2)), this._register(this._optionsService.onMultipleOptionChange(["scrollSensitivity", "fastScrollSensitivity", "overviewRuler"], () => this._scrollableElement.updateOptions(this._getChangeOptions()))), this._register(o2.onProtocolChange((c) => {
      this._scrollableElement.updateOptions({ handleMouseWheel: !(c & 16) });
    })), this._scrollableElement.setScrollDimensions({ height: 0, scrollHeight: 0 }), this._register($2.runAndSubscribe(l2.onChangeColors, () => {
      this._scrollableElement.getDomNode().style.backgroundColor = l2.colors.background.css;
    })), e.appendChild(this._scrollableElement.getDomNode()), this._register(C3(() => this._scrollableElement.getDomNode().remove())), this._styleElement = n.mainDocument.createElement("style"), i8.appendChild(this._styleElement), this._register(C3(() => this._styleElement.remove())), this._register($2.runAndSubscribe(l2.onChangeColors, () => {
      this._styleElement.textContent = [".xterm .xterm-scrollable-element > .scrollbar > .slider {", `  background: ${l2.colors.scrollbarSliderBackground.css};`, "}", ".xterm .xterm-scrollable-element > .scrollbar > .slider:hover {", `  background: ${l2.colors.scrollbarSliderHoverBackground.css};`, "}", ".xterm .xterm-scrollable-element > .scrollbar > .slider.active {", `  background: ${l2.colors.scrollbarSliderActiveBackground.css};`, "}"].join(`
`);
    })), this._register(this._bufferService.onResize(() => this.queueSync())), this._register(this._bufferService.buffers.onBufferActivate(() => {
      this._latestYDisp = void 0, this.queueSync();
    })), this._register(this._bufferService.onScroll(() => this._sync())), this._register(this._scrollableElement.onScroll((c) => this._handleScroll(c)));
  }
  scrollLines(e) {
    let i8 = this._scrollableElement.getScrollPosition();
    this._scrollableElement.setScrollPosition({ reuseAnimation: true, scrollTop: i8.scrollTop + e * this._renderService.dimensions.css.cell.height });
  }
  scrollToLine(e, i8) {
    i8 && (this._latestYDisp = e), this._scrollableElement.setScrollPosition({ reuseAnimation: !i8, scrollTop: e * this._renderService.dimensions.css.cell.height });
  }
  _getChangeOptions() {
    return { mouseWheelScrollSensitivity: this._optionsService.rawOptions.scrollSensitivity, fastScrollSensitivity: this._optionsService.rawOptions.fastScrollSensitivity, verticalScrollbarSize: this._optionsService.rawOptions.overviewRuler?.width || 14 };
  }
  queueSync(e) {
    e !== void 0 && (this._latestYDisp = e), this._queuedAnimationFrame === void 0 && (this._queuedAnimationFrame = this._renderService.addRefreshCallback(() => {
      this._queuedAnimationFrame = void 0, this._sync(this._latestYDisp);
    }));
  }
  _sync(e = this._bufferService.buffer.ydisp) {
    !this._renderService || this._isSyncing || (this._isSyncing = true, this._suppressOnScrollHandler = true, this._scrollableElement.setScrollDimensions({ height: this._renderService.dimensions.css.canvas.height, scrollHeight: this._renderService.dimensions.css.cell.height * this._bufferService.buffer.lines.length }), this._suppressOnScrollHandler = false, e !== this._latestYDisp && this._scrollableElement.setScrollPosition({ scrollTop: e * this._renderService.dimensions.css.cell.height }), this._isSyncing = false);
  }
  _handleScroll(e) {
    if (!this._renderService || this._isHandlingScroll || this._suppressOnScrollHandler) return;
    this._isHandlingScroll = true;
    let i8 = Math.round(e.scrollTop / this._renderService.dimensions.css.cell.height), r6 = i8 - this._bufferService.buffer.ydisp;
    r6 !== 0 && (this._latestYDisp = i8, this._onRequestScrollLines.fire(r6)), this._isHandlingScroll = false;
  }
};
zt2 = M3([S(2, F2), S(3, ae2), S(4, rr), S(5, Re3), S(6, H4), S(7, ce3)], zt2);
var Gt2 = class extends D3 {
  constructor(e, i8, r6, n, o2) {
    super();
    this._screenElement = e;
    this._bufferService = i8;
    this._coreBrowserService = r6;
    this._decorationService = n;
    this._renderService = o2;
    this._decorationElements = /* @__PURE__ */ new Map();
    this._altBufferIsActive = false;
    this._dimensionsChanged = false;
    this._container = document.createElement("div"), this._container.classList.add("xterm-decoration-container"), this._screenElement.appendChild(this._container), this._register(this._renderService.onRenderedViewportChange(() => this._doRefreshDecorations())), this._register(this._renderService.onDimensionsChange(() => {
      this._dimensionsChanged = true, this._queueRefresh();
    })), this._register(this._coreBrowserService.onDprChange(() => this._queueRefresh())), this._register(this._bufferService.buffers.onBufferActivate(() => {
      this._altBufferIsActive = this._bufferService.buffer === this._bufferService.buffers.alt;
    })), this._register(this._decorationService.onDecorationRegistered(() => this._queueRefresh())), this._register(this._decorationService.onDecorationRemoved((l2) => this._removeDecoration(l2))), this._register(C3(() => {
      this._container.remove(), this._decorationElements.clear();
    }));
  }
  _queueRefresh() {
    this._animationFrame === void 0 && (this._animationFrame = this._renderService.addRefreshCallback(() => {
      this._doRefreshDecorations(), this._animationFrame = void 0;
    }));
  }
  _doRefreshDecorations() {
    for (let e of this._decorationService.decorations) this._renderDecoration(e);
    this._dimensionsChanged = false;
  }
  _renderDecoration(e) {
    this._refreshStyle(e), this._dimensionsChanged && this._refreshXPosition(e);
  }
  _createElement(e) {
    let i8 = this._coreBrowserService.mainDocument.createElement("div");
    i8.classList.add("xterm-decoration"), i8.classList.toggle("xterm-decoration-top-layer", e?.options?.layer === "top"), i8.style.width = `${Math.round((e.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`, i8.style.height = `${(e.options.height || 1) * this._renderService.dimensions.css.cell.height}px`, i8.style.top = `${(e.marker.line - this._bufferService.buffers.active.ydisp) * this._renderService.dimensions.css.cell.height}px`, i8.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`;
    let r6 = e.options.x ?? 0;
    return r6 && r6 > this._bufferService.cols && (i8.style.display = "none"), this._refreshXPosition(e, i8), i8;
  }
  _refreshStyle(e) {
    let i8 = e.marker.line - this._bufferService.buffers.active.ydisp;
    if (i8 < 0 || i8 >= this._bufferService.rows) e.element && (e.element.style.display = "none", e.onRenderEmitter.fire(e.element));
    else {
      let r6 = this._decorationElements.get(e);
      r6 || (r6 = this._createElement(e), e.element = r6, this._decorationElements.set(e, r6), this._container.appendChild(r6), e.onDispose(() => {
        this._decorationElements.delete(e), r6.remove();
      })), r6.style.display = this._altBufferIsActive ? "none" : "block", this._altBufferIsActive || (r6.style.width = `${Math.round((e.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`, r6.style.height = `${(e.options.height || 1) * this._renderService.dimensions.css.cell.height}px`, r6.style.top = `${i8 * this._renderService.dimensions.css.cell.height}px`, r6.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`), e.onRenderEmitter.fire(r6);
    }
  }
  _refreshXPosition(e, i8 = e.element) {
    if (!i8) return;
    let r6 = e.options.x ?? 0;
    (e.options.anchor || "left") === "right" ? i8.style.right = r6 ? `${r6 * this._renderService.dimensions.css.cell.width}px` : "" : i8.style.left = r6 ? `${r6 * this._renderService.dimensions.css.cell.width}px` : "";
  }
  _removeDecoration(e) {
    this._decorationElements.get(e)?.remove(), this._decorationElements.delete(e), e.dispose();
  }
};
Gt2 = M3([S(1, F2), S(2, ae2), S(3, Be4), S(4, ce3)], Gt2);
var Gr2 = class {
  constructor() {
    this._zones = [];
    this._zonePool = [];
    this._zonePoolIndex = 0;
    this._linePadding = { full: 0, left: 0, center: 0, right: 0 };
  }
  get zones() {
    return this._zonePool.length = Math.min(this._zonePool.length, this._zones.length), this._zones;
  }
  clear() {
    this._zones.length = 0, this._zonePoolIndex = 0;
  }
  addDecoration(t) {
    if (t.options.overviewRulerOptions) {
      for (let e of this._zones) if (e.color === t.options.overviewRulerOptions.color && e.position === t.options.overviewRulerOptions.position) {
        if (this._lineIntersectsZone(e, t.marker.line)) return;
        if (this._lineAdjacentToZone(e, t.marker.line, t.options.overviewRulerOptions.position)) {
          this._addLineToZone(e, t.marker.line);
          return;
        }
      }
      if (this._zonePoolIndex < this._zonePool.length) {
        this._zonePool[this._zonePoolIndex].color = t.options.overviewRulerOptions.color, this._zonePool[this._zonePoolIndex].position = t.options.overviewRulerOptions.position, this._zonePool[this._zonePoolIndex].startBufferLine = t.marker.line, this._zonePool[this._zonePoolIndex].endBufferLine = t.marker.line, this._zones.push(this._zonePool[this._zonePoolIndex++]);
        return;
      }
      this._zones.push({ color: t.options.overviewRulerOptions.color, position: t.options.overviewRulerOptions.position, startBufferLine: t.marker.line, endBufferLine: t.marker.line }), this._zonePool.push(this._zones[this._zones.length - 1]), this._zonePoolIndex++;
    }
  }
  setPadding(t) {
    this._linePadding = t;
  }
  _lineIntersectsZone(t, e) {
    return e >= t.startBufferLine && e <= t.endBufferLine;
  }
  _lineAdjacentToZone(t, e, i8) {
    return e >= t.startBufferLine - this._linePadding[i8 || "full"] && e <= t.endBufferLine + this._linePadding[i8 || "full"];
  }
  _addLineToZone(t, e) {
    t.startBufferLine = Math.min(t.startBufferLine, e), t.endBufferLine = Math.max(t.endBufferLine, e);
  }
};
var We4 = { full: 0, left: 0, center: 0, right: 0 };
var at3 = { full: 0, left: 0, center: 0, right: 0 };
var Li2 = { full: 0, left: 0, center: 0, right: 0 };
var bt2 = class extends D3 {
  constructor(e, i8, r6, n, o2, l2, a, u2) {
    super();
    this._viewportElement = e;
    this._screenElement = i8;
    this._bufferService = r6;
    this._decorationService = n;
    this._renderService = o2;
    this._optionsService = l2;
    this._themeService = a;
    this._coreBrowserService = u2;
    this._colorZoneStore = new Gr2();
    this._shouldUpdateDimensions = true;
    this._shouldUpdateAnchor = true;
    this._lastKnownBufferLength = 0;
    this._canvas = this._coreBrowserService.mainDocument.createElement("canvas"), this._canvas.classList.add("xterm-decoration-overview-ruler"), this._refreshCanvasDimensions(), this._viewportElement.parentElement?.insertBefore(this._canvas, this._viewportElement), this._register(C3(() => this._canvas?.remove()));
    let h2 = this._canvas.getContext("2d");
    if (h2) this._ctx = h2;
    else throw new Error("Ctx cannot be null");
    this._register(this._decorationService.onDecorationRegistered(() => this._queueRefresh(void 0, true))), this._register(this._decorationService.onDecorationRemoved(() => this._queueRefresh(void 0, true))), this._register(this._renderService.onRenderedViewportChange(() => this._queueRefresh())), this._register(this._bufferService.buffers.onBufferActivate(() => {
      this._canvas.style.display = this._bufferService.buffer === this._bufferService.buffers.alt ? "none" : "block";
    })), this._register(this._bufferService.onScroll(() => {
      this._lastKnownBufferLength !== this._bufferService.buffers.normal.lines.length && (this._refreshDrawHeightConstants(), this._refreshColorZonePadding());
    })), this._register(this._renderService.onRender(() => {
      (!this._containerHeight || this._containerHeight !== this._screenElement.clientHeight) && (this._queueRefresh(true), this._containerHeight = this._screenElement.clientHeight);
    })), this._register(this._coreBrowserService.onDprChange(() => this._queueRefresh(true))), this._register(this._optionsService.onSpecificOptionChange("overviewRuler", () => this._queueRefresh(true))), this._register(this._themeService.onChangeColors(() => this._queueRefresh())), this._queueRefresh(true);
  }
  get _width() {
    return this._optionsService.options.overviewRuler?.width || 0;
  }
  _refreshDrawConstants() {
    let e = Math.floor((this._canvas.width - 1) / 3), i8 = Math.ceil((this._canvas.width - 1) / 3);
    at3.full = this._canvas.width, at3.left = e, at3.center = i8, at3.right = e, this._refreshDrawHeightConstants(), Li2.full = 1, Li2.left = 1, Li2.center = 1 + at3.left, Li2.right = 1 + at3.left + at3.center;
  }
  _refreshDrawHeightConstants() {
    We4.full = Math.round(2 * this._coreBrowserService.dpr);
    let e = this._canvas.height / this._bufferService.buffer.lines.length, i8 = Math.round(Math.max(Math.min(e, 12), 6) * this._coreBrowserService.dpr);
    We4.left = i8, We4.center = i8, We4.right = i8;
  }
  _refreshColorZonePadding() {
    this._colorZoneStore.setPadding({ full: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * We4.full), left: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * We4.left), center: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * We4.center), right: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * We4.right) }), this._lastKnownBufferLength = this._bufferService.buffers.normal.lines.length;
  }
  _refreshCanvasDimensions() {
    this._canvas.style.width = `${this._width}px`, this._canvas.width = Math.round(this._width * this._coreBrowserService.dpr), this._canvas.style.height = `${this._screenElement.clientHeight}px`, this._canvas.height = Math.round(this._screenElement.clientHeight * this._coreBrowserService.dpr), this._refreshDrawConstants(), this._refreshColorZonePadding();
  }
  _refreshDecorations() {
    this._shouldUpdateDimensions && this._refreshCanvasDimensions(), this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height), this._colorZoneStore.clear();
    for (let i8 of this._decorationService.decorations) this._colorZoneStore.addDecoration(i8);
    this._ctx.lineWidth = 1, this._renderRulerOutline();
    let e = this._colorZoneStore.zones;
    for (let i8 of e) i8.position !== "full" && this._renderColorZone(i8);
    for (let i8 of e) i8.position === "full" && this._renderColorZone(i8);
    this._shouldUpdateDimensions = false, this._shouldUpdateAnchor = false;
  }
  _renderRulerOutline() {
    this._ctx.fillStyle = this._themeService.colors.overviewRulerBorder.css, this._ctx.fillRect(0, 0, 1, this._canvas.height), this._optionsService.rawOptions.overviewRuler.showTopBorder && this._ctx.fillRect(1, 0, this._canvas.width - 1, 1), this._optionsService.rawOptions.overviewRuler.showBottomBorder && this._ctx.fillRect(1, this._canvas.height - 1, this._canvas.width - 1, this._canvas.height);
  }
  _renderColorZone(e) {
    this._ctx.fillStyle = e.color, this._ctx.fillRect(Li2[e.position || "full"], Math.round((this._canvas.height - 1) * (e.startBufferLine / this._bufferService.buffers.active.lines.length) - We4[e.position || "full"] / 2), at3[e.position || "full"], Math.round((this._canvas.height - 1) * ((e.endBufferLine - e.startBufferLine) / this._bufferService.buffers.active.lines.length) + We4[e.position || "full"]));
  }
  _queueRefresh(e, i8) {
    this._shouldUpdateDimensions = e || this._shouldUpdateDimensions, this._shouldUpdateAnchor = i8 || this._shouldUpdateAnchor, this._animationFrame === void 0 && (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
      this._refreshDecorations(), this._animationFrame = void 0;
    }));
  }
};
bt2 = M3([S(2, F2), S(3, Be4), S(4, ce3), S(5, H4), S(6, Re3), S(7, ae2)], bt2);
var b;
((E) => (E.NUL = "\0", E.SOH = "", E.STX = "", E.ETX = "", E.EOT = "", E.ENQ = "", E.ACK = "", E.BEL = "\x07", E.BS = "\b", E.HT = "	", E.LF = `
`, E.VT = "\v", E.FF = "\f", E.CR = "\r", E.SO = "", E.SI = "", E.DLE = "", E.DC1 = "", E.DC2 = "", E.DC3 = "", E.DC4 = "", E.NAK = "", E.SYN = "", E.ETB = "", E.CAN = "", E.EM = "", E.SUB = "", E.ESC = "\x1B", E.FS = "", E.GS = "", E.RS = "", E.US = "", E.SP = " ", E.DEL = "\x7F"))(b ||= {});
var Ai2;
((g2) => (g2.PAD = "\x80", g2.HOP = "\x81", g2.BPH = "\x82", g2.NBH = "\x83", g2.IND = "\x84", g2.NEL = "\x85", g2.SSA = "\x86", g2.ESA = "\x87", g2.HTS = "\x88", g2.HTJ = "\x89", g2.VTS = "\x8A", g2.PLD = "\x8B", g2.PLU = "\x8C", g2.RI = "\x8D", g2.SS2 = "\x8E", g2.SS3 = "\x8F", g2.DCS = "\x90", g2.PU1 = "\x91", g2.PU2 = "\x92", g2.STS = "\x93", g2.CCH = "\x94", g2.MW = "\x95", g2.SPA = "\x96", g2.EPA = "\x97", g2.SOS = "\x98", g2.SGCI = "\x99", g2.SCI = "\x9A", g2.CSI = "\x9B", g2.ST = "\x9C", g2.OSC = "\x9D", g2.PM = "\x9E", g2.APC = "\x9F"))(Ai2 ||= {});
var fs2;
((t) => t.ST = `${b.ESC}\\`)(fs2 ||= {});
var $t2 = class {
  constructor(t, e, i8, r6, n, o2) {
    this._textarea = t;
    this._compositionView = e;
    this._bufferService = i8;
    this._optionsService = r6;
    this._coreService = n;
    this._renderService = o2;
    this._isComposing = false, this._isSendingComposition = false, this._compositionPosition = { start: 0, end: 0 }, this._dataAlreadySent = "";
  }
  get isComposing() {
    return this._isComposing;
  }
  compositionstart() {
    this._isComposing = true, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._dataAlreadySent = "", this._compositionView.classList.add("active");
  }
  compositionupdate(t) {
    this._compositionView.textContent = t.data, this.updateCompositionElements(), setTimeout(() => {
      this._compositionPosition.end = this._textarea.value.length;
    }, 0);
  }
  compositionend() {
    this._finalizeComposition(true);
  }
  keydown(t) {
    if (this._isComposing || this._isSendingComposition) {
      if (t.keyCode === 20 || t.keyCode === 229 || t.keyCode === 16 || t.keyCode === 17 || t.keyCode === 18) return false;
      this._finalizeComposition(false);
    }
    return t.keyCode === 229 ? (this._handleAnyTextareaChanges(), false) : true;
  }
  _finalizeComposition(t) {
    if (this._compositionView.classList.remove("active"), this._isComposing = false, t) {
      let e = { start: this._compositionPosition.start, end: this._compositionPosition.end };
      this._isSendingComposition = true, setTimeout(() => {
        if (this._isSendingComposition) {
          this._isSendingComposition = false;
          let i8;
          e.start += this._dataAlreadySent.length, this._isComposing ? i8 = this._textarea.value.substring(e.start, this._compositionPosition.start) : i8 = this._textarea.value.substring(e.start), i8.length > 0 && this._coreService.triggerDataEvent(i8, true);
        }
      }, 0);
    } else {
      this._isSendingComposition = false;
      let e = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
      this._coreService.triggerDataEvent(e, true);
    }
  }
  _handleAnyTextareaChanges() {
    let t = this._textarea.value;
    setTimeout(() => {
      if (!this._isComposing) {
        let e = this._textarea.value, i8 = e.replace(t, "");
        this._dataAlreadySent = i8, e.length > t.length ? this._coreService.triggerDataEvent(i8, true) : e.length < t.length ? this._coreService.triggerDataEvent(`${b.DEL}`, true) : e.length === t.length && e !== t && this._coreService.triggerDataEvent(e, true);
      }
    }, 0);
  }
  updateCompositionElements(t) {
    if (this._isComposing) {
      if (this._bufferService.buffer.isCursorInViewport) {
        let e = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), i8 = this._renderService.dimensions.css.cell.height, r6 = this._bufferService.buffer.y * this._renderService.dimensions.css.cell.height, n = e * this._renderService.dimensions.css.cell.width;
        this._compositionView.style.left = n + "px", this._compositionView.style.top = r6 + "px", this._compositionView.style.height = i8 + "px", this._compositionView.style.lineHeight = i8 + "px", this._compositionView.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._compositionView.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
        let o2 = this._compositionView.getBoundingClientRect();
        this._textarea.style.left = n + "px", this._textarea.style.top = r6 + "px", this._textarea.style.width = Math.max(o2.width, 1) + "px", this._textarea.style.height = Math.max(o2.height, 1) + "px", this._textarea.style.lineHeight = o2.height + "px";
      }
      t || setTimeout(() => this.updateCompositionElements(true), 0);
    }
  }
};
$t2 = M3([S(2, F2), S(3, H4), S(4, ge3), S(5, ce3)], $t2);
var ue3 = 0;
var he4 = 0;
var de3 = 0;
var J4 = 0;
var ps2 = { css: "#00000000", rgba: 0 };
var j2;
((i8) => {
  function s15(r6, n, o2, l2) {
    return l2 !== void 0 ? `#${vt3(r6)}${vt3(n)}${vt3(o2)}${vt3(l2)}` : `#${vt3(r6)}${vt3(n)}${vt3(o2)}`;
  }
  i8.toCss = s15;
  function t(r6, n, o2, l2 = 255) {
    return (r6 << 24 | n << 16 | o2 << 8 | l2) >>> 0;
  }
  i8.toRgba = t;
  function e(r6, n, o2, l2) {
    return { css: i8.toCss(r6, n, o2, l2), rgba: i8.toRgba(r6, n, o2, l2) };
  }
  i8.toColor = e;
})(j2 ||= {});
var U4;
((l2) => {
  function s15(a, u2) {
    if (J4 = (u2.rgba & 255) / 255, J4 === 1) return { css: u2.css, rgba: u2.rgba };
    let h2 = u2.rgba >> 24 & 255, c = u2.rgba >> 16 & 255, d = u2.rgba >> 8 & 255, _4 = a.rgba >> 24 & 255, p2 = a.rgba >> 16 & 255, m2 = a.rgba >> 8 & 255;
    ue3 = _4 + Math.round((h2 - _4) * J4), he4 = p2 + Math.round((c - p2) * J4), de3 = m2 + Math.round((d - m2) * J4);
    let f = j2.toCss(ue3, he4, de3), A2 = j2.toRgba(ue3, he4, de3);
    return { css: f, rgba: A2 };
  }
  l2.blend = s15;
  function t(a) {
    return (a.rgba & 255) === 255;
  }
  l2.isOpaque = t;
  function e(a, u2, h2) {
    let c = $r2.ensureContrastRatio(a.rgba, u2.rgba, h2);
    if (c) return j2.toColor(c >> 24 & 255, c >> 16 & 255, c >> 8 & 255);
  }
  l2.ensureContrastRatio = e;
  function i8(a) {
    let u2 = (a.rgba | 255) >>> 0;
    return [ue3, he4, de3] = $r2.toChannels(u2), { css: j2.toCss(ue3, he4, de3), rgba: u2 };
  }
  l2.opaque = i8;
  function r6(a, u2) {
    return J4 = Math.round(u2 * 255), [ue3, he4, de3] = $r2.toChannels(a.rgba), { css: j2.toCss(ue3, he4, de3, J4), rgba: j2.toRgba(ue3, he4, de3, J4) };
  }
  l2.opacity = r6;
  function n(a, u2) {
    return J4 = a.rgba & 255, r6(a, J4 * u2 / 255);
  }
  l2.multiplyOpacity = n;
  function o2(a) {
    return [a.rgba >> 24 & 255, a.rgba >> 16 & 255, a.rgba >> 8 & 255];
  }
  l2.toColorRGB = o2;
})(U4 ||= {});
var z2;
((i8) => {
  let s15, t;
  try {
    let r6 = document.createElement("canvas");
    r6.width = 1, r6.height = 1;
    let n = r6.getContext("2d", { willReadFrequently: true });
    n && (s15 = n, s15.globalCompositeOperation = "copy", t = s15.createLinearGradient(0, 0, 1, 1));
  } catch {
  }
  function e(r6) {
    if (r6.match(/#[\da-f]{3,8}/i)) switch (r6.length) {
      case 4:
        return ue3 = parseInt(r6.slice(1, 2).repeat(2), 16), he4 = parseInt(r6.slice(2, 3).repeat(2), 16), de3 = parseInt(r6.slice(3, 4).repeat(2), 16), j2.toColor(ue3, he4, de3);
      case 5:
        return ue3 = parseInt(r6.slice(1, 2).repeat(2), 16), he4 = parseInt(r6.slice(2, 3).repeat(2), 16), de3 = parseInt(r6.slice(3, 4).repeat(2), 16), J4 = parseInt(r6.slice(4, 5).repeat(2), 16), j2.toColor(ue3, he4, de3, J4);
      case 7:
        return { css: r6, rgba: (parseInt(r6.slice(1), 16) << 8 | 255) >>> 0 };
      case 9:
        return { css: r6, rgba: parseInt(r6.slice(1), 16) >>> 0 };
    }
    let n = r6.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
    if (n) return ue3 = parseInt(n[1]), he4 = parseInt(n[2]), de3 = parseInt(n[3]), J4 = Math.round((n[5] === void 0 ? 1 : parseFloat(n[5])) * 255), j2.toColor(ue3, he4, de3, J4);
    if (!s15 || !t) throw new Error("css.toColor: Unsupported css format");
    if (s15.fillStyle = t, s15.fillStyle = r6, typeof s15.fillStyle != "string") throw new Error("css.toColor: Unsupported css format");
    if (s15.fillRect(0, 0, 1, 1), [ue3, he4, de3, J4] = s15.getImageData(0, 0, 1, 1).data, J4 !== 255) throw new Error("css.toColor: Unsupported css format");
    return { rgba: j2.toRgba(ue3, he4, de3, J4), css: r6 };
  }
  i8.toColor = e;
})(z2 ||= {});
var ve4;
((e) => {
  function s15(i8) {
    return t(i8 >> 16 & 255, i8 >> 8 & 255, i8 & 255);
  }
  e.relativeLuminance = s15;
  function t(i8, r6, n) {
    let o2 = i8 / 255, l2 = r6 / 255, a = n / 255, u2 = o2 <= 0.03928 ? o2 / 12.92 : Math.pow((o2 + 0.055) / 1.055, 2.4), h2 = l2 <= 0.03928 ? l2 / 12.92 : Math.pow((l2 + 0.055) / 1.055, 2.4), c = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
    return u2 * 0.2126 + h2 * 0.7152 + c * 0.0722;
  }
  e.relativeLuminance2 = t;
})(ve4 ||= {});
var $r2;
((n) => {
  function s15(o2, l2) {
    if (J4 = (l2 & 255) / 255, J4 === 1) return l2;
    let a = l2 >> 24 & 255, u2 = l2 >> 16 & 255, h2 = l2 >> 8 & 255, c = o2 >> 24 & 255, d = o2 >> 16 & 255, _4 = o2 >> 8 & 255;
    return ue3 = c + Math.round((a - c) * J4), he4 = d + Math.round((u2 - d) * J4), de3 = _4 + Math.round((h2 - _4) * J4), j2.toRgba(ue3, he4, de3);
  }
  n.blend = s15;
  function t(o2, l2, a) {
    let u2 = ve4.relativeLuminance(o2 >> 8), h2 = ve4.relativeLuminance(l2 >> 8);
    if (Xe3(u2, h2) < a) {
      if (h2 < u2) {
        let p2 = e(o2, l2, a), m2 = Xe3(u2, ve4.relativeLuminance(p2 >> 8));
        if (m2 < a) {
          let f = i8(o2, l2, a), A2 = Xe3(u2, ve4.relativeLuminance(f >> 8));
          return m2 > A2 ? p2 : f;
        }
        return p2;
      }
      let d = i8(o2, l2, a), _4 = Xe3(u2, ve4.relativeLuminance(d >> 8));
      if (_4 < a) {
        let p2 = e(o2, l2, a), m2 = Xe3(u2, ve4.relativeLuminance(p2 >> 8));
        return _4 > m2 ? d : p2;
      }
      return d;
    }
  }
  n.ensureContrastRatio = t;
  function e(o2, l2, a) {
    let u2 = o2 >> 24 & 255, h2 = o2 >> 16 & 255, c = o2 >> 8 & 255, d = l2 >> 24 & 255, _4 = l2 >> 16 & 255, p2 = l2 >> 8 & 255, m2 = Xe3(ve4.relativeLuminance2(d, _4, p2), ve4.relativeLuminance2(u2, h2, c));
    for (; m2 < a && (d > 0 || _4 > 0 || p2 > 0); ) d -= Math.max(0, Math.ceil(d * 0.1)), _4 -= Math.max(0, Math.ceil(_4 * 0.1)), p2 -= Math.max(0, Math.ceil(p2 * 0.1)), m2 = Xe3(ve4.relativeLuminance2(d, _4, p2), ve4.relativeLuminance2(u2, h2, c));
    return (d << 24 | _4 << 16 | p2 << 8 | 255) >>> 0;
  }
  n.reduceLuminance = e;
  function i8(o2, l2, a) {
    let u2 = o2 >> 24 & 255, h2 = o2 >> 16 & 255, c = o2 >> 8 & 255, d = l2 >> 24 & 255, _4 = l2 >> 16 & 255, p2 = l2 >> 8 & 255, m2 = Xe3(ve4.relativeLuminance2(d, _4, p2), ve4.relativeLuminance2(u2, h2, c));
    for (; m2 < a && (d < 255 || _4 < 255 || p2 < 255); ) d = Math.min(255, d + Math.ceil((255 - d) * 0.1)), _4 = Math.min(255, _4 + Math.ceil((255 - _4) * 0.1)), p2 = Math.min(255, p2 + Math.ceil((255 - p2) * 0.1)), m2 = Xe3(ve4.relativeLuminance2(d, _4, p2), ve4.relativeLuminance2(u2, h2, c));
    return (d << 24 | _4 << 16 | p2 << 8 | 255) >>> 0;
  }
  n.increaseLuminance = i8;
  function r6(o2) {
    return [o2 >> 24 & 255, o2 >> 16 & 255, o2 >> 8 & 255, o2 & 255];
  }
  n.toChannels = r6;
})($r2 ||= {});
function vt3(s15) {
  let t = s15.toString(16);
  return t.length < 2 ? "0" + t : t;
}
function Xe3(s15, t) {
  return s15 < t ? (t + 0.05) / (s15 + 0.05) : (s15 + 0.05) / (t + 0.05);
}
var Vr2 = class extends De4 {
  constructor(e, i8, r6) {
    super();
    this.content = 0;
    this.combinedData = "";
    this.fg = e.fg, this.bg = e.bg, this.combinedData = i8, this._width = r6;
  }
  isCombined() {
    return 2097152;
  }
  getWidth() {
    return this._width;
  }
  getChars() {
    return this.combinedData;
  }
  getCode() {
    return 2097151;
  }
  setFromCharData(e) {
    throw new Error("not implemented");
  }
  getAsCharData() {
    return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
  }
};
var ct = class {
  constructor(t) {
    this._bufferService = t;
    this._characterJoiners = [];
    this._nextCharacterJoinerId = 0;
    this._workCell = new q();
  }
  register(t) {
    let e = { id: this._nextCharacterJoinerId++, handler: t };
    return this._characterJoiners.push(e), e.id;
  }
  deregister(t) {
    for (let e = 0; e < this._characterJoiners.length; e++) if (this._characterJoiners[e].id === t) return this._characterJoiners.splice(e, 1), true;
    return false;
  }
  getJoinedCharacters(t) {
    if (this._characterJoiners.length === 0) return [];
    let e = this._bufferService.buffer.lines.get(t);
    if (!e || e.length === 0) return [];
    let i8 = [], r6 = e.translateToString(true), n = 0, o2 = 0, l2 = 0, a = e.getFg(0), u2 = e.getBg(0);
    for (let h2 = 0; h2 < e.getTrimmedLength(); h2++) if (e.loadCell(h2, this._workCell), this._workCell.getWidth() !== 0) {
      if (this._workCell.fg !== a || this._workCell.bg !== u2) {
        if (h2 - n > 1) {
          let c = this._getJoinedRanges(r6, l2, o2, e, n);
          for (let d = 0; d < c.length; d++) i8.push(c[d]);
        }
        n = h2, l2 = o2, a = this._workCell.fg, u2 = this._workCell.bg;
      }
      o2 += this._workCell.getChars().length || we3.length;
    }
    if (this._bufferService.cols - n > 1) {
      let h2 = this._getJoinedRanges(r6, l2, o2, e, n);
      for (let c = 0; c < h2.length; c++) i8.push(h2[c]);
    }
    return i8;
  }
  _getJoinedRanges(t, e, i8, r6, n) {
    let o2 = t.substring(e, i8), l2 = [];
    try {
      l2 = this._characterJoiners[0].handler(o2);
    } catch (a) {
      console.error(a);
    }
    for (let a = 1; a < this._characterJoiners.length; a++) try {
      let u2 = this._characterJoiners[a].handler(o2);
      for (let h2 = 0; h2 < u2.length; h2++) ct._mergeRanges(l2, u2[h2]);
    } catch (u2) {
      console.error(u2);
    }
    return this._stringRangesToCellRanges(l2, r6, n), l2;
  }
  _stringRangesToCellRanges(t, e, i8) {
    let r6 = 0, n = false, o2 = 0, l2 = t[r6];
    if (l2) {
      for (let a = i8; a < this._bufferService.cols; a++) {
        let u2 = e.getWidth(a), h2 = e.getString(a).length || we3.length;
        if (u2 !== 0) {
          if (!n && l2[0] <= o2 && (l2[0] = a, n = true), l2[1] <= o2) {
            if (l2[1] = a, l2 = t[++r6], !l2) break;
            l2[0] <= o2 ? (l2[0] = a, n = true) : n = false;
          }
          o2 += h2;
        }
      }
      l2 && (l2[1] = this._bufferService.cols);
    }
  }
  static _mergeRanges(t, e) {
    let i8 = false;
    for (let r6 = 0; r6 < t.length; r6++) {
      let n = t[r6];
      if (i8) {
        if (e[1] <= n[0]) return t[r6 - 1][1] = e[1], t;
        if (e[1] <= n[1]) return t[r6 - 1][1] = Math.max(e[1], n[1]), t.splice(r6, 1), t;
        t.splice(r6, 1), r6--;
      } else {
        if (e[1] <= n[0]) return t.splice(r6, 0, e), t;
        if (e[1] <= n[1]) return n[0] = Math.min(e[0], n[0]), t;
        e[0] < n[1] && (n[0] = Math.min(e[0], n[0]), i8 = true);
        continue;
      }
    }
    return i8 ? t[t.length - 1][1] = e[1] : t.push(e), t;
  }
};
ct = M3([S(0, F2)], ct);
function Oa(s15) {
  return 57508 <= s15 && s15 <= 57558;
}
function Ba(s15) {
  return 9472 <= s15 && s15 <= 9631;
}
function $o(s15) {
  return Oa(s15) || Ba(s15);
}
function Vo() {
  return { css: { canvas: qr2(), cell: qr2() }, device: { canvas: qr2(), cell: qr2(), char: { width: 0, height: 0, left: 0, top: 0 } } };
}
function qr2() {
  return { width: 0, height: 0 };
}
var Vt2 = class {
  constructor(t, e, i8, r6, n, o2, l2) {
    this._document = t;
    this._characterJoinerService = e;
    this._optionsService = i8;
    this._coreBrowserService = r6;
    this._coreService = n;
    this._decorationService = o2;
    this._themeService = l2;
    this._workCell = new q();
    this._columnSelectMode = false;
    this.defaultSpacing = 0;
  }
  handleSelectionChanged(t, e, i8) {
    this._selectionStart = t, this._selectionEnd = e, this._columnSelectMode = i8;
  }
  createRow(t, e, i8, r6, n, o2, l2, a, u2, h2, c) {
    let d = [], _4 = this._characterJoinerService.getJoinedCharacters(e), p2 = this._themeService.colors, m2 = t.getNoBgTrimmedLength();
    i8 && m2 < o2 + 1 && (m2 = o2 + 1);
    let f, A2 = 0, R3 = "", O3 = 0, I2 = 0, k5 = 0, P4 = 0, oe = false, Me4 = 0, Pe4 = false, Ke2 = 0, di = 0, V2 = [], Qe2 = h2 !== -1 && c !== -1;
    for (let y = 0; y < m2; y++) {
      t.loadCell(y, this._workCell);
      let T2 = this._workCell.getWidth();
      if (T2 === 0) continue;
      let g2 = false, w3 = y >= di, E = y, x = this._workCell;
      if (_4.length > 0 && y === _4[0][0] && w3) {
        let W2 = _4.shift(), An2 = this._isCellInSelection(W2[0], e);
        for (O3 = W2[0] + 1; O3 < W2[1]; O3++) w3 &&= An2 === this._isCellInSelection(O3, e);
        w3 &&= !i8 || o2 < W2[0] || o2 >= W2[1], w3 ? (g2 = true, x = new Vr2(this._workCell, t.translateToString(true, W2[0], W2[1]), W2[1] - W2[0]), E = W2[1] - 1, T2 = x.getWidth()) : di = W2[1];
      }
      let N3 = this._isCellInSelection(y, e), Z4 = i8 && y === o2, te4 = Qe2 && y >= h2 && y <= c, Oe3 = false;
      this._decorationService.forEachDecorationAtCell(y, e, void 0, (W2) => {
        Oe3 = true;
      });
      let ze2 = x.getChars() || we3;
      if (ze2 === " " && (x.isUnderline() || x.isOverline()) && (ze2 = "\xA0"), Ke2 = T2 * a - u2.get(ze2, x.isBold(), x.isItalic()), !f) f = this._document.createElement("span");
      else if (A2 && (N3 && Pe4 || !N3 && !Pe4 && x.bg === I2) && (N3 && Pe4 && p2.selectionForeground || x.fg === k5) && x.extended.ext === P4 && te4 === oe && Ke2 === Me4 && !Z4 && !g2 && !Oe3 && w3) {
        x.isInvisible() ? R3 += we3 : R3 += ze2, A2++;
        continue;
      } else A2 && (f.textContent = R3), f = this._document.createElement("span"), A2 = 0, R3 = "";
      if (I2 = x.bg, k5 = x.fg, P4 = x.extended.ext, oe = te4, Me4 = Ke2, Pe4 = N3, g2 && o2 >= y && o2 <= E && (o2 = y), !this._coreService.isCursorHidden && Z4 && this._coreService.isCursorInitialized) {
        if (V2.push("xterm-cursor"), this._coreBrowserService.isFocused) l2 && V2.push("xterm-cursor-blink"), V2.push(r6 === "bar" ? "xterm-cursor-bar" : r6 === "underline" ? "xterm-cursor-underline" : "xterm-cursor-block");
        else if (n) switch (n) {
          case "outline":
            V2.push("xterm-cursor-outline");
            break;
          case "block":
            V2.push("xterm-cursor-block");
            break;
          case "bar":
            V2.push("xterm-cursor-bar");
            break;
          case "underline":
            V2.push("xterm-cursor-underline");
            break;
          default:
            break;
        }
      }
      if (x.isBold() && V2.push("xterm-bold"), x.isItalic() && V2.push("xterm-italic"), x.isDim() && V2.push("xterm-dim"), x.isInvisible() ? R3 = we3 : R3 = x.getChars() || we3, x.isUnderline() && (V2.push(`xterm-underline-${x.extended.underlineStyle}`), R3 === " " && (R3 = "\xA0"), !x.isUnderlineColorDefault())) if (x.isUnderlineColorRGB()) f.style.textDecorationColor = `rgb(${De4.toColorRGB(x.getUnderlineColor()).join(",")})`;
      else {
        let W2 = x.getUnderlineColor();
        this._optionsService.rawOptions.drawBoldTextInBrightColors && x.isBold() && W2 < 8 && (W2 += 8), f.style.textDecorationColor = p2.ansi[W2].css;
      }
      x.isOverline() && (V2.push("xterm-overline"), R3 === " " && (R3 = "\xA0")), x.isStrikethrough() && V2.push("xterm-strikethrough"), te4 && (f.style.textDecoration = "underline");
      let le3 = x.getFgColor(), et3 = x.getFgColorMode(), me4 = x.getBgColor(), ht2 = x.getBgColorMode(), fi2 = !!x.isInverse();
      if (fi2) {
        let W2 = le3;
        le3 = me4, me4 = W2;
        let An2 = et3;
        et3 = ht2, ht2 = An2;
      }
      let tt3, Qi2, pi2 = false;
      this._decorationService.forEachDecorationAtCell(y, e, void 0, (W2) => {
        W2.options.layer !== "top" && pi2 || (W2.backgroundColorRGB && (ht2 = 50331648, me4 = W2.backgroundColorRGB.rgba >> 8 & 16777215, tt3 = W2.backgroundColorRGB), W2.foregroundColorRGB && (et3 = 50331648, le3 = W2.foregroundColorRGB.rgba >> 8 & 16777215, Qi2 = W2.foregroundColorRGB), pi2 = W2.options.layer === "top");
      }), !pi2 && N3 && (tt3 = this._coreBrowserService.isFocused ? p2.selectionBackgroundOpaque : p2.selectionInactiveBackgroundOpaque, me4 = tt3.rgba >> 8 & 16777215, ht2 = 50331648, pi2 = true, p2.selectionForeground && (et3 = 50331648, le3 = p2.selectionForeground.rgba >> 8 & 16777215, Qi2 = p2.selectionForeground)), pi2 && V2.push("xterm-decoration-top");
      let it3;
      switch (ht2) {
        case 16777216:
        case 33554432:
          it3 = p2.ansi[me4], V2.push(`xterm-bg-${me4}`);
          break;
        case 50331648:
          it3 = j2.toColor(me4 >> 16, me4 >> 8 & 255, me4 & 255), this._addStyle(f, `background-color:#${qo((me4 >>> 0).toString(16), "0", 6)}`);
          break;
        case 0:
        default:
          fi2 ? (it3 = p2.foreground, V2.push(`xterm-bg-${257}`)) : it3 = p2.background;
      }
      switch (tt3 || x.isDim() && (tt3 = U4.multiplyOpacity(it3, 0.5)), et3) {
        case 16777216:
        case 33554432:
          x.isBold() && le3 < 8 && this._optionsService.rawOptions.drawBoldTextInBrightColors && (le3 += 8), this._applyMinimumContrast(f, it3, p2.ansi[le3], x, tt3, void 0) || V2.push(`xterm-fg-${le3}`);
          break;
        case 50331648:
          let W2 = j2.toColor(le3 >> 16 & 255, le3 >> 8 & 255, le3 & 255);
          this._applyMinimumContrast(f, it3, W2, x, tt3, Qi2) || this._addStyle(f, `color:#${qo(le3.toString(16), "0", 6)}`);
          break;
        case 0:
        default:
          this._applyMinimumContrast(f, it3, p2.foreground, x, tt3, Qi2) || fi2 && V2.push(`xterm-fg-${257}`);
      }
      V2.length && (f.className = V2.join(" "), V2.length = 0), !Z4 && !g2 && !Oe3 && w3 ? A2++ : f.textContent = R3, Ke2 !== this.defaultSpacing && (f.style.letterSpacing = `${Ke2}px`), d.push(f), y = E;
    }
    return f && A2 && (f.textContent = R3), d;
  }
  _applyMinimumContrast(t, e, i8, r6, n, o2) {
    if (this._optionsService.rawOptions.minimumContrastRatio === 1 || $o(r6.getCode())) return false;
    let l2 = this._getContrastCache(r6), a;
    if (!n && !o2 && (a = l2.getColor(e.rgba, i8.rgba)), a === void 0) {
      let u2 = this._optionsService.rawOptions.minimumContrastRatio / (r6.isDim() ? 2 : 1);
      a = U4.ensureContrastRatio(n || e, o2 || i8, u2), l2.setColor((n || e).rgba, (o2 || i8).rgba, a ?? null);
    }
    return a ? (this._addStyle(t, `color:${a.css}`), true) : false;
  }
  _getContrastCache(t) {
    return t.isDim() ? this._themeService.colors.halfContrastCache : this._themeService.colors.contrastCache;
  }
  _addStyle(t, e) {
    t.setAttribute("style", `${t.getAttribute("style") || ""}${e};`);
  }
  _isCellInSelection(t, e) {
    let i8 = this._selectionStart, r6 = this._selectionEnd;
    return !i8 || !r6 ? false : this._columnSelectMode ? i8[0] <= r6[0] ? t >= i8[0] && e >= i8[1] && t < r6[0] && e <= r6[1] : t < i8[0] && e >= i8[1] && t >= r6[0] && e <= r6[1] : e > i8[1] && e < r6[1] || i8[1] === r6[1] && e === i8[1] && t >= i8[0] && t < r6[0] || i8[1] < r6[1] && e === r6[1] && t < r6[0] || i8[1] < r6[1] && e === i8[1] && t >= i8[0];
  }
};
Vt2 = M3([S(1, or2), S(2, H4), S(3, ae2), S(4, ge3), S(5, Be4), S(6, Re3)], Vt2);
function qo(s15, t, e) {
  for (; s15.length < e; ) s15 = t + s15;
  return s15;
}
var Yr2 = class {
  constructor(t, e) {
    this._flat = new Float32Array(256);
    this._font = "";
    this._fontSize = 0;
    this._weight = "normal";
    this._weightBold = "bold";
    this._measureElements = [];
    this._container = t.createElement("div"), this._container.classList.add("xterm-width-cache-measure-container"), this._container.setAttribute("aria-hidden", "true"), this._container.style.whiteSpace = "pre", this._container.style.fontKerning = "none";
    let i8 = t.createElement("span");
    i8.classList.add("xterm-char-measure-element");
    let r6 = t.createElement("span");
    r6.classList.add("xterm-char-measure-element"), r6.style.fontWeight = "bold";
    let n = t.createElement("span");
    n.classList.add("xterm-char-measure-element"), n.style.fontStyle = "italic";
    let o2 = t.createElement("span");
    o2.classList.add("xterm-char-measure-element"), o2.style.fontWeight = "bold", o2.style.fontStyle = "italic", this._measureElements = [i8, r6, n, o2], this._container.appendChild(i8), this._container.appendChild(r6), this._container.appendChild(n), this._container.appendChild(o2), e.appendChild(this._container), this.clear();
  }
  dispose() {
    this._container.remove(), this._measureElements.length = 0, this._holey = void 0;
  }
  clear() {
    this._flat.fill(-9999), this._holey = /* @__PURE__ */ new Map();
  }
  setFont(t, e, i8, r6) {
    t === this._font && e === this._fontSize && i8 === this._weight && r6 === this._weightBold || (this._font = t, this._fontSize = e, this._weight = i8, this._weightBold = r6, this._container.style.fontFamily = this._font, this._container.style.fontSize = `${this._fontSize}px`, this._measureElements[0].style.fontWeight = `${i8}`, this._measureElements[1].style.fontWeight = `${r6}`, this._measureElements[2].style.fontWeight = `${i8}`, this._measureElements[3].style.fontWeight = `${r6}`, this.clear());
  }
  get(t, e, i8) {
    let r6 = 0;
    if (!e && !i8 && t.length === 1 && (r6 = t.charCodeAt(0)) < 256) {
      if (this._flat[r6] !== -9999) return this._flat[r6];
      let l2 = this._measure(t, 0);
      return l2 > 0 && (this._flat[r6] = l2), l2;
    }
    let n = t;
    e && (n += "B"), i8 && (n += "I");
    let o2 = this._holey.get(n);
    if (o2 === void 0) {
      let l2 = 0;
      e && (l2 |= 1), i8 && (l2 |= 2), o2 = this._measure(t, l2), o2 > 0 && this._holey.set(n, o2);
    }
    return o2;
  }
  _measure(t, e) {
    let i8 = this._measureElements[e];
    return i8.textContent = t.repeat(32), i8.offsetWidth / 32;
  }
};
var ms2 = class {
  constructor() {
    this.clear();
  }
  clear() {
    this.hasSelection = false, this.columnSelectMode = false, this.viewportStartRow = 0, this.viewportEndRow = 0, this.viewportCappedStartRow = 0, this.viewportCappedEndRow = 0, this.startCol = 0, this.endCol = 0, this.selectionStart = void 0, this.selectionEnd = void 0;
  }
  update(t, e, i8, r6 = false) {
    if (this.selectionStart = e, this.selectionEnd = i8, !e || !i8 || e[0] === i8[0] && e[1] === i8[1]) {
      this.clear();
      return;
    }
    let n = t.buffers.active.ydisp, o2 = e[1] - n, l2 = i8[1] - n, a = Math.max(o2, 0), u2 = Math.min(l2, t.rows - 1);
    if (a >= t.rows || u2 < 0) {
      this.clear();
      return;
    }
    this.hasSelection = true, this.columnSelectMode = r6, this.viewportStartRow = o2, this.viewportEndRow = l2, this.viewportCappedStartRow = a, this.viewportCappedEndRow = u2, this.startCol = e[0], this.endCol = i8[0];
  }
  isCellSelected(t, e, i8) {
    return this.hasSelection ? (i8 -= t.buffer.active.viewportY, this.columnSelectMode ? this.startCol <= this.endCol ? e >= this.startCol && i8 >= this.viewportCappedStartRow && e < this.endCol && i8 <= this.viewportCappedEndRow : e < this.startCol && i8 >= this.viewportCappedStartRow && e >= this.endCol && i8 <= this.viewportCappedEndRow : i8 > this.viewportStartRow && i8 < this.viewportEndRow || this.viewportStartRow === this.viewportEndRow && i8 === this.viewportStartRow && e >= this.startCol && e < this.endCol || this.viewportStartRow < this.viewportEndRow && i8 === this.viewportEndRow && e < this.endCol || this.viewportStartRow < this.viewportEndRow && i8 === this.viewportStartRow && e >= this.startCol) : false;
  }
};
function Yo() {
  return new ms2();
}
var _s2 = "xterm-dom-renderer-owner-";
var Le3 = "xterm-rows";
var jr2 = "xterm-fg-";
var jo = "xterm-bg-";
var ki2 = "xterm-focus";
var Xr2 = "xterm-selection";
var Na = 1;
var Yt2 = class extends D3 {
  constructor(e, i8, r6, n, o2, l2, a, u2, h2, c, d, _4, p2, m2) {
    super();
    this._terminal = e;
    this._document = i8;
    this._element = r6;
    this._screenElement = n;
    this._viewportElement = o2;
    this._helperContainer = l2;
    this._linkifier2 = a;
    this._charSizeService = h2;
    this._optionsService = c;
    this._bufferService = d;
    this._coreService = _4;
    this._coreBrowserService = p2;
    this._themeService = m2;
    this._terminalClass = Na++;
    this._rowElements = [];
    this._selectionRenderModel = Yo();
    this.onRequestRedraw = this._register(new v2()).event;
    this._rowContainer = this._document.createElement("div"), this._rowContainer.classList.add(Le3), this._rowContainer.style.lineHeight = "normal", this._rowContainer.setAttribute("aria-hidden", "true"), this._refreshRowElements(this._bufferService.cols, this._bufferService.rows), this._selectionContainer = this._document.createElement("div"), this._selectionContainer.classList.add(Xr2), this._selectionContainer.setAttribute("aria-hidden", "true"), this.dimensions = Vo(), this._updateDimensions(), this._register(this._optionsService.onOptionChange(() => this._handleOptionsChanged())), this._register(this._themeService.onChangeColors((f) => this._injectCss(f))), this._injectCss(this._themeService.colors), this._rowFactory = u2.createInstance(Vt2, document), this._element.classList.add(_s2 + this._terminalClass), this._screenElement.appendChild(this._rowContainer), this._screenElement.appendChild(this._selectionContainer), this._register(this._linkifier2.onShowLinkUnderline((f) => this._handleLinkHover(f))), this._register(this._linkifier2.onHideLinkUnderline((f) => this._handleLinkLeave(f))), this._register(C3(() => {
      this._element.classList.remove(_s2 + this._terminalClass), this._rowContainer.remove(), this._selectionContainer.remove(), this._widthCache.dispose(), this._themeStyleElement.remove(), this._dimensionsStyleElement.remove();
    })), this._widthCache = new Yr2(this._document, this._helperContainer), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
  }
  _updateDimensions() {
    let e = this._coreBrowserService.dpr;
    this.dimensions.device.char.width = this._charSizeService.width * e, this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * e), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.left = 0, this.dimensions.device.char.top = 0, this.dimensions.device.canvas.width = this.dimensions.device.cell.width * this._bufferService.cols, this.dimensions.device.canvas.height = this.dimensions.device.cell.height * this._bufferService.rows, this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / e), this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / e), this.dimensions.css.cell.width = this.dimensions.css.canvas.width / this._bufferService.cols, this.dimensions.css.cell.height = this.dimensions.css.canvas.height / this._bufferService.rows;
    for (let r6 of this._rowElements) r6.style.width = `${this.dimensions.css.canvas.width}px`, r6.style.height = `${this.dimensions.css.cell.height}px`, r6.style.lineHeight = `${this.dimensions.css.cell.height}px`, r6.style.overflow = "hidden";
    this._dimensionsStyleElement || (this._dimensionsStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
    let i8 = `${this._terminalSelector} .${Le3} span { display: inline-block; height: 100%; vertical-align: top;}`;
    this._dimensionsStyleElement.textContent = i8, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._screenElement.style.height = `${this.dimensions.css.canvas.height}px`;
  }
  _injectCss(e) {
    this._themeStyleElement || (this._themeStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
    let i8 = `${this._terminalSelector} .${Le3} { pointer-events: none; color: ${e.foreground.css}; font-family: ${this._optionsService.rawOptions.fontFamily}; font-size: ${this._optionsService.rawOptions.fontSize}px; font-kerning: none; white-space: pre}`;
    i8 += `${this._terminalSelector} .${Le3} .xterm-dim { color: ${U4.multiplyOpacity(e.foreground, 0.5).css};}`, i8 += `${this._terminalSelector} span:not(.xterm-bold) { font-weight: ${this._optionsService.rawOptions.fontWeight};}${this._terminalSelector} span.xterm-bold { font-weight: ${this._optionsService.rawOptions.fontWeightBold};}${this._terminalSelector} span.xterm-italic { font-style: italic;}`;
    let r6 = `blink_underline_${this._terminalClass}`, n = `blink_bar_${this._terminalClass}`, o2 = `blink_block_${this._terminalClass}`;
    i8 += `@keyframes ${r6} { 50% {  border-bottom-style: hidden; }}`, i8 += `@keyframes ${n} { 50% {  box-shadow: none; }}`, i8 += `@keyframes ${o2} { 0% {  background-color: ${e.cursor.css};  color: ${e.cursorAccent.css}; } 50% {  background-color: inherit;  color: ${e.cursor.css}; }}`, i8 += `${this._terminalSelector} .${Le3}.${ki2} .xterm-cursor.xterm-cursor-blink.xterm-cursor-underline { animation: ${r6} 1s step-end infinite;}${this._terminalSelector} .${Le3}.${ki2} .xterm-cursor.xterm-cursor-blink.xterm-cursor-bar { animation: ${n} 1s step-end infinite;}${this._terminalSelector} .${Le3}.${ki2} .xterm-cursor.xterm-cursor-blink.xterm-cursor-block { animation: ${o2} 1s step-end infinite;}${this._terminalSelector} .${Le3} .xterm-cursor.xterm-cursor-block { background-color: ${e.cursor.css}; color: ${e.cursorAccent.css};}${this._terminalSelector} .${Le3} .xterm-cursor.xterm-cursor-block:not(.xterm-cursor-blink) { background-color: ${e.cursor.css} !important; color: ${e.cursorAccent.css} !important;}${this._terminalSelector} .${Le3} .xterm-cursor.xterm-cursor-outline { outline: 1px solid ${e.cursor.css}; outline-offset: -1px;}${this._terminalSelector} .${Le3} .xterm-cursor.xterm-cursor-bar { box-shadow: ${this._optionsService.rawOptions.cursorWidth}px 0 0 ${e.cursor.css} inset;}${this._terminalSelector} .${Le3} .xterm-cursor.xterm-cursor-underline { border-bottom: 1px ${e.cursor.css}; border-bottom-style: solid; height: calc(100% - 1px);}`, i8 += `${this._terminalSelector} .${Xr2} { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}${this._terminalSelector}.focus .${Xr2} div { position: absolute; background-color: ${e.selectionBackgroundOpaque.css};}${this._terminalSelector} .${Xr2} div { position: absolute; background-color: ${e.selectionInactiveBackgroundOpaque.css};}`;
    for (let [l2, a] of e.ansi.entries()) i8 += `${this._terminalSelector} .${jr2}${l2} { color: ${a.css}; }${this._terminalSelector} .${jr2}${l2}.xterm-dim { color: ${U4.multiplyOpacity(a, 0.5).css}; }${this._terminalSelector} .${jo}${l2} { background-color: ${a.css}; }`;
    i8 += `${this._terminalSelector} .${jr2}${257} { color: ${U4.opaque(e.background).css}; }${this._terminalSelector} .${jr2}${257}.xterm-dim { color: ${U4.multiplyOpacity(U4.opaque(e.background), 0.5).css}; }${this._terminalSelector} .${jo}${257} { background-color: ${e.foreground.css}; }`, this._themeStyleElement.textContent = i8;
  }
  _setDefaultSpacing() {
    let e = this.dimensions.css.cell.width - this._widthCache.get("W", false, false);
    this._rowContainer.style.letterSpacing = `${e}px`, this._rowFactory.defaultSpacing = e;
  }
  handleDevicePixelRatioChange() {
    this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
  }
  _refreshRowElements(e, i8) {
    for (let r6 = this._rowElements.length; r6 <= i8; r6++) {
      let n = this._document.createElement("div");
      this._rowContainer.appendChild(n), this._rowElements.push(n);
    }
    for (; this._rowElements.length > i8; ) this._rowContainer.removeChild(this._rowElements.pop());
  }
  handleResize(e, i8) {
    this._refreshRowElements(e, i8), this._updateDimensions(), this.handleSelectionChanged(this._selectionRenderModel.selectionStart, this._selectionRenderModel.selectionEnd, this._selectionRenderModel.columnSelectMode);
  }
  handleCharSizeChanged() {
    this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
  }
  handleBlur() {
    this._rowContainer.classList.remove(ki2), this.renderRows(0, this._bufferService.rows - 1);
  }
  handleFocus() {
    this._rowContainer.classList.add(ki2), this.renderRows(this._bufferService.buffer.y, this._bufferService.buffer.y);
  }
  handleSelectionChanged(e, i8, r6) {
    if (this._selectionContainer.replaceChildren(), this._rowFactory.handleSelectionChanged(e, i8, r6), this.renderRows(0, this._bufferService.rows - 1), !e || !i8 || (this._selectionRenderModel.update(this._terminal, e, i8, r6), !this._selectionRenderModel.hasSelection)) return;
    let n = this._selectionRenderModel.viewportStartRow, o2 = this._selectionRenderModel.viewportEndRow, l2 = this._selectionRenderModel.viewportCappedStartRow, a = this._selectionRenderModel.viewportCappedEndRow, u2 = this._document.createDocumentFragment();
    if (r6) {
      let h2 = e[0] > i8[0];
      u2.appendChild(this._createSelectionElement(l2, h2 ? i8[0] : e[0], h2 ? e[0] : i8[0], a - l2 + 1));
    } else {
      let h2 = n === l2 ? e[0] : 0, c = l2 === o2 ? i8[0] : this._bufferService.cols;
      u2.appendChild(this._createSelectionElement(l2, h2, c));
      let d = a - l2 - 1;
      if (u2.appendChild(this._createSelectionElement(l2 + 1, 0, this._bufferService.cols, d)), l2 !== a) {
        let _4 = o2 === a ? i8[0] : this._bufferService.cols;
        u2.appendChild(this._createSelectionElement(a, 0, _4));
      }
    }
    this._selectionContainer.appendChild(u2);
  }
  _createSelectionElement(e, i8, r6, n = 1) {
    let o2 = this._document.createElement("div"), l2 = i8 * this.dimensions.css.cell.width, a = this.dimensions.css.cell.width * (r6 - i8);
    return l2 + a > this.dimensions.css.canvas.width && (a = this.dimensions.css.canvas.width - l2), o2.style.height = `${n * this.dimensions.css.cell.height}px`, o2.style.top = `${e * this.dimensions.css.cell.height}px`, o2.style.left = `${l2}px`, o2.style.width = `${a}px`, o2;
  }
  handleCursorMove() {
  }
  _handleOptionsChanged() {
    this._updateDimensions(), this._injectCss(this._themeService.colors), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
  }
  clear() {
    for (let e of this._rowElements) e.replaceChildren();
  }
  renderRows(e, i8) {
    let r6 = this._bufferService.buffer, n = r6.ybase + r6.y, o2 = Math.min(r6.x, this._bufferService.cols - 1), l2 = this._coreService.decPrivateModes.cursorBlink ?? this._optionsService.rawOptions.cursorBlink, a = this._coreService.decPrivateModes.cursorStyle ?? this._optionsService.rawOptions.cursorStyle, u2 = this._optionsService.rawOptions.cursorInactiveStyle;
    for (let h2 = e; h2 <= i8; h2++) {
      let c = h2 + r6.ydisp, d = this._rowElements[h2], _4 = r6.lines.get(c);
      if (!d || !_4) break;
      d.replaceChildren(...this._rowFactory.createRow(_4, c, c === n, a, u2, o2, l2, this.dimensions.css.cell.width, this._widthCache, -1, -1));
    }
  }
  get _terminalSelector() {
    return `.${_s2}${this._terminalClass}`;
  }
  _handleLinkHover(e) {
    this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, true);
  }
  _handleLinkLeave(e) {
    this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, false);
  }
  _setCellUnderline(e, i8, r6, n, o2, l2) {
    r6 < 0 && (e = 0), n < 0 && (i8 = 0);
    let a = this._bufferService.rows - 1;
    r6 = Math.max(Math.min(r6, a), 0), n = Math.max(Math.min(n, a), 0), o2 = Math.min(o2, this._bufferService.cols);
    let u2 = this._bufferService.buffer, h2 = u2.ybase + u2.y, c = Math.min(u2.x, o2 - 1), d = this._optionsService.rawOptions.cursorBlink, _4 = this._optionsService.rawOptions.cursorStyle, p2 = this._optionsService.rawOptions.cursorInactiveStyle;
    for (let m2 = r6; m2 <= n; ++m2) {
      let f = m2 + u2.ydisp, A2 = this._rowElements[m2], R3 = u2.lines.get(f);
      if (!A2 || !R3) break;
      A2.replaceChildren(...this._rowFactory.createRow(R3, f, f === h2, _4, p2, c, d, this.dimensions.css.cell.width, this._widthCache, l2 ? m2 === r6 ? e : 0 : -1, l2 ? (m2 === n ? i8 : o2) - 1 : -1));
    }
  }
};
Yt2 = M3([S(7, xt4), S(8, nt3), S(9, H4), S(10, F2), S(11, ge3), S(12, ae2), S(13, Re3)], Yt2);
var jt2 = class extends D3 {
  constructor(e, i8, r6) {
    super();
    this._optionsService = r6;
    this.width = 0;
    this.height = 0;
    this._onCharSizeChange = this._register(new v2());
    this.onCharSizeChange = this._onCharSizeChange.event;
    try {
      this._measureStrategy = this._register(new vs2(this._optionsService));
    } catch {
      this._measureStrategy = this._register(new bs2(e, i8, this._optionsService));
    }
    this._register(this._optionsService.onMultipleOptionChange(["fontFamily", "fontSize"], () => this.measure()));
  }
  get hasValidSize() {
    return this.width > 0 && this.height > 0;
  }
  measure() {
    let e = this._measureStrategy.measure();
    (e.width !== this.width || e.height !== this.height) && (this.width = e.width, this.height = e.height, this._onCharSizeChange.fire());
  }
};
jt2 = M3([S(2, H4)], jt2);
var Zr = class extends D3 {
  constructor() {
    super(...arguments);
    this._result = { width: 0, height: 0 };
  }
  _validateAndSet(e, i8) {
    e !== void 0 && e > 0 && i8 !== void 0 && i8 > 0 && (this._result.width = e, this._result.height = i8);
  }
};
var bs2 = class extends Zr {
  constructor(e, i8, r6) {
    super();
    this._document = e;
    this._parentElement = i8;
    this._optionsService = r6;
    this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W".repeat(32), this._measureElement.setAttribute("aria-hidden", "true"), this._measureElement.style.whiteSpace = "pre", this._measureElement.style.fontKerning = "none", this._parentElement.appendChild(this._measureElement);
  }
  measure() {
    return this._measureElement.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._measureElement.style.fontSize = `${this._optionsService.rawOptions.fontSize}px`, this._validateAndSet(Number(this._measureElement.offsetWidth) / 32, Number(this._measureElement.offsetHeight)), this._result;
  }
};
var vs2 = class extends Zr {
  constructor(e) {
    super();
    this._optionsService = e;
    this._canvas = new OffscreenCanvas(100, 100), this._ctx = this._canvas.getContext("2d");
    let i8 = this._ctx.measureText("W");
    if (!("width" in i8 && "fontBoundingBoxAscent" in i8 && "fontBoundingBoxDescent" in i8)) throw new Error("Required font metrics not supported");
  }
  measure() {
    this._ctx.font = `${this._optionsService.rawOptions.fontSize}px ${this._optionsService.rawOptions.fontFamily}`;
    let e = this._ctx.measureText("W");
    return this._validateAndSet(e.width, e.fontBoundingBoxAscent + e.fontBoundingBoxDescent), this._result;
  }
};
var Jr2 = class extends D3 {
  constructor(e, i8, r6) {
    super();
    this._textarea = e;
    this._window = i8;
    this.mainDocument = r6;
    this._isFocused = false;
    this._cachedIsFocused = void 0;
    this._screenDprMonitor = this._register(new gs2(this._window));
    this._onDprChange = this._register(new v2());
    this.onDprChange = this._onDprChange.event;
    this._onWindowChange = this._register(new v2());
    this.onWindowChange = this._onWindowChange.event;
    this._register(this.onWindowChange((n) => this._screenDprMonitor.setWindow(n))), this._register($2.forward(this._screenDprMonitor.onDprChange, this._onDprChange)), this._register(L3(this._textarea, "focus", () => this._isFocused = true)), this._register(L3(this._textarea, "blur", () => this._isFocused = false));
  }
  get window() {
    return this._window;
  }
  set window(e) {
    this._window !== e && (this._window = e, this._onWindowChange.fire(this._window));
  }
  get dpr() {
    return this.window.devicePixelRatio;
  }
  get isFocused() {
    return this._cachedIsFocused === void 0 && (this._cachedIsFocused = this._isFocused && this._textarea.ownerDocument.hasFocus(), queueMicrotask(() => this._cachedIsFocused = void 0)), this._cachedIsFocused;
  }
};
var gs2 = class extends D3 {
  constructor(e) {
    super();
    this._parentWindow = e;
    this._windowResizeListener = this._register(new ye4());
    this._onDprChange = this._register(new v2());
    this.onDprChange = this._onDprChange.event;
    this._outerListener = () => this._setDprAndFireIfDiffers(), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._updateDpr(), this._setWindowResizeListener(), this._register(C3(() => this.clearListener()));
  }
  setWindow(e) {
    this._parentWindow = e, this._setWindowResizeListener(), this._setDprAndFireIfDiffers();
  }
  _setWindowResizeListener() {
    this._windowResizeListener.value = L3(this._parentWindow, "resize", () => this._setDprAndFireIfDiffers());
  }
  _setDprAndFireIfDiffers() {
    this._parentWindow.devicePixelRatio !== this._currentDevicePixelRatio && this._onDprChange.fire(this._parentWindow.devicePixelRatio), this._updateDpr();
  }
  _updateDpr() {
    this._outerListener && (this._resolutionMediaMatchList?.removeListener(this._outerListener), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._resolutionMediaMatchList = this._parentWindow.matchMedia(`screen and (resolution: ${this._parentWindow.devicePixelRatio}dppx)`), this._resolutionMediaMatchList.addListener(this._outerListener));
  }
  clearListener() {
    !this._resolutionMediaMatchList || !this._outerListener || (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._outerListener = void 0);
  }
};
var Qr2 = class extends D3 {
  constructor() {
    super();
    this.linkProviders = [];
    this._register(C3(() => this.linkProviders.length = 0));
  }
  registerLinkProvider(e) {
    return this.linkProviders.push(e), { dispose: () => {
      let i8 = this.linkProviders.indexOf(e);
      i8 !== -1 && this.linkProviders.splice(i8, 1);
    } };
  }
};
function Ci2(s15, t, e) {
  let i8 = e.getBoundingClientRect(), r6 = s15.getComputedStyle(e), n = parseInt(r6.getPropertyValue("padding-left")), o2 = parseInt(r6.getPropertyValue("padding-top"));
  return [t.clientX - i8.left - n, t.clientY - i8.top - o2];
}
function Xo(s15, t, e, i8, r6, n, o2, l2, a) {
  if (!n) return;
  let u2 = Ci2(s15, t, e);
  if (u2) return u2[0] = Math.ceil((u2[0] + (a ? o2 / 2 : 0)) / o2), u2[1] = Math.ceil(u2[1] / l2), u2[0] = Math.min(Math.max(u2[0], 1), i8 + (a ? 1 : 0)), u2[1] = Math.min(Math.max(u2[1], 1), r6), u2;
}
var Xt2 = class {
  constructor(t, e) {
    this._renderService = t;
    this._charSizeService = e;
  }
  getCoords(t, e, i8, r6, n) {
    return Xo(window, t, e, i8, r6, this._charSizeService.hasValidSize, this._renderService.dimensions.css.cell.width, this._renderService.dimensions.css.cell.height, n);
  }
  getMouseReportCoords(t, e) {
    let i8 = Ci2(window, t, e);
    if (this._charSizeService.hasValidSize) return i8[0] = Math.min(Math.max(i8[0], 0), this._renderService.dimensions.css.canvas.width - 1), i8[1] = Math.min(Math.max(i8[1], 0), this._renderService.dimensions.css.canvas.height - 1), { col: Math.floor(i8[0] / this._renderService.dimensions.css.cell.width), row: Math.floor(i8[1] / this._renderService.dimensions.css.cell.height), x: Math.floor(i8[0]), y: Math.floor(i8[1]) };
  }
};
Xt2 = M3([S(0, ce3), S(1, nt3)], Xt2);
var en2 = class {
  constructor(t, e) {
    this._renderCallback = t;
    this._coreBrowserService = e;
    this._refreshCallbacks = [];
  }
  dispose() {
    this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
  }
  addRefreshCallback(t) {
    return this._refreshCallbacks.push(t), this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh())), this._animationFrame;
  }
  refresh(t, e, i8) {
    this._rowCount = i8, t = t !== void 0 ? t : 0, e = e !== void 0 ? e : this._rowCount - 1, this._rowStart = this._rowStart !== void 0 ? Math.min(this._rowStart, t) : t, this._rowEnd = this._rowEnd !== void 0 ? Math.max(this._rowEnd, e) : e, !this._animationFrame && (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh()));
  }
  _innerRefresh() {
    if (this._animationFrame = void 0, this._rowStart === void 0 || this._rowEnd === void 0 || this._rowCount === void 0) {
      this._runRefreshCallbacks();
      return;
    }
    let t = Math.max(this._rowStart, 0), e = Math.min(this._rowEnd, this._rowCount - 1);
    this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(t, e), this._runRefreshCallbacks();
  }
  _runRefreshCallbacks() {
    for (let t of this._refreshCallbacks) t(0);
    this._refreshCallbacks = [];
  }
};
var tn2 = {};
Ll(tn2, { getSafariVersion: () => Ha, isChromeOS: () => Ts2, isFirefox: () => Ss2, isIpad: () => Wa2, isIphone: () => Ua, isLegacyEdge: () => Fa, isLinux: () => Bi2, isMac: () => Zt3, isNode: () => Mi2, isSafari: () => Zo, isWindows: () => Es2 });
var Mi2 = typeof process < "u" && "title" in process;
var Pi2 = Mi2 ? "node" : navigator.userAgent;
var Oi = Mi2 ? "node" : navigator.platform;
var Ss2 = Pi2.includes("Firefox");
var Fa = Pi2.includes("Edge");
var Zo = /^((?!chrome|android).)*safari/i.test(Pi2);
function Ha() {
  if (!Zo) return 0;
  let s15 = Pi2.match(/Version\/(\d+)/);
  return s15 === null || s15.length < 2 ? 0 : parseInt(s15[1]);
}
var Zt3 = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(Oi);
var Wa2 = Oi === "iPad";
var Ua = Oi === "iPhone";
var Es2 = ["Windows", "Win16", "Win32", "WinCE"].includes(Oi);
var Bi2 = Oi.indexOf("Linux") >= 0;
var Ts2 = /\bCrOS\b/.test(Pi2);
var rn2 = class {
  constructor() {
    this._tasks = [];
    this._i = 0;
  }
  enqueue(t) {
    this._tasks.push(t), this._start();
  }
  flush() {
    for (; this._i < this._tasks.length; ) this._tasks[this._i]() || this._i++;
    this.clear();
  }
  clear() {
    this._idleCallback && (this._cancelCallback(this._idleCallback), this._idleCallback = void 0), this._i = 0, this._tasks.length = 0;
  }
  _start() {
    this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
  }
  _process(t) {
    this._idleCallback = void 0;
    let e = 0, i8 = 0, r6 = t.timeRemaining(), n = 0;
    for (; this._i < this._tasks.length; ) {
      if (e = performance.now(), this._tasks[this._i]() || this._i++, e = Math.max(1, performance.now() - e), i8 = Math.max(e, i8), n = t.timeRemaining(), i8 * 1.5 > n) {
        r6 - e < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(r6 - e))}ms`), this._start();
        return;
      }
      r6 = n;
    }
    this.clear();
  }
};
var Is2 = class extends rn2 {
  _requestCallback(t) {
    return setTimeout(() => t(this._createDeadline(16)));
  }
  _cancelCallback(t) {
    clearTimeout(t);
  }
  _createDeadline(t) {
    let e = performance.now() + t;
    return { timeRemaining: () => Math.max(0, e - performance.now()) };
  }
};
var ys = class extends rn2 {
  _requestCallback(t) {
    return requestIdleCallback(t);
  }
  _cancelCallback(t) {
    cancelIdleCallback(t);
  }
};
var Jt = !Mi2 && "requestIdleCallback" in window ? ys : Is2;
var nn2 = class {
  constructor() {
    this._queue = new Jt();
  }
  set(t) {
    this._queue.clear(), this._queue.enqueue(t);
  }
  flush() {
    this._queue.flush();
  }
};
var Qt2 = class extends D3 {
  constructor(e, i8, r6, n, o2, l2, a, u2, h2) {
    super();
    this._rowCount = e;
    this._optionsService = r6;
    this._charSizeService = n;
    this._coreService = o2;
    this._coreBrowserService = u2;
    this._renderer = this._register(new ye4());
    this._pausedResizeTask = new nn2();
    this._observerDisposable = this._register(new ye4());
    this._isPaused = false;
    this._needsFullRefresh = false;
    this._isNextRenderRedrawOnly = true;
    this._needsSelectionRefresh = false;
    this._canvasWidth = 0;
    this._canvasHeight = 0;
    this._selectionState = { start: void 0, end: void 0, columnSelectMode: false };
    this._onDimensionsChange = this._register(new v2());
    this.onDimensionsChange = this._onDimensionsChange.event;
    this._onRenderedViewportChange = this._register(new v2());
    this.onRenderedViewportChange = this._onRenderedViewportChange.event;
    this._onRender = this._register(new v2());
    this.onRender = this._onRender.event;
    this._onRefreshRequest = this._register(new v2());
    this.onRefreshRequest = this._onRefreshRequest.event;
    this._renderDebouncer = new en2((c, d) => this._renderRows(c, d), this._coreBrowserService), this._register(this._renderDebouncer), this._syncOutputHandler = new xs2(this._coreBrowserService, this._coreService, () => this._fullRefresh()), this._register(C3(() => this._syncOutputHandler.dispose())), this._register(this._coreBrowserService.onDprChange(() => this.handleDevicePixelRatioChange())), this._register(a.onResize(() => this._fullRefresh())), this._register(a.buffers.onBufferActivate(() => this._renderer.value?.clear())), this._register(this._optionsService.onOptionChange(() => this._handleOptionsChanged())), this._register(this._charSizeService.onCharSizeChange(() => this.handleCharSizeChanged())), this._register(l2.onDecorationRegistered(() => this._fullRefresh())), this._register(l2.onDecorationRemoved(() => this._fullRefresh())), this._register(this._optionsService.onMultipleOptionChange(["customGlyphs", "drawBoldTextInBrightColors", "letterSpacing", "lineHeight", "fontFamily", "fontSize", "fontWeight", "fontWeightBold", "minimumContrastRatio", "rescaleOverlappingGlyphs"], () => {
      this.clear(), this.handleResize(a.cols, a.rows), this._fullRefresh();
    })), this._register(this._optionsService.onMultipleOptionChange(["cursorBlink", "cursorStyle"], () => this.refreshRows(a.buffer.y, a.buffer.y, true))), this._register(h2.onChangeColors(() => this._fullRefresh())), this._registerIntersectionObserver(this._coreBrowserService.window, i8), this._register(this._coreBrowserService.onWindowChange((c) => this._registerIntersectionObserver(c, i8)));
  }
  get dimensions() {
    return this._renderer.value.dimensions;
  }
  _registerIntersectionObserver(e, i8) {
    if ("IntersectionObserver" in e) {
      let r6 = new e.IntersectionObserver((n) => this._handleIntersectionChange(n[n.length - 1]), { threshold: 0 });
      r6.observe(i8), this._observerDisposable.value = C3(() => r6.disconnect());
    }
  }
  _handleIntersectionChange(e) {
    this._isPaused = e.isIntersecting === void 0 ? e.intersectionRatio === 0 : !e.isIntersecting, !this._isPaused && !this._charSizeService.hasValidSize && this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this._pausedResizeTask.flush(), this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = false);
  }
  refreshRows(e, i8, r6 = false) {
    if (this._isPaused) {
      this._needsFullRefresh = true;
      return;
    }
    if (this._coreService.decPrivateModes.synchronizedOutput) {
      this._syncOutputHandler.bufferRows(e, i8);
      return;
    }
    let n = this._syncOutputHandler.flush();
    n && (e = Math.min(e, n.start), i8 = Math.max(i8, n.end)), r6 || (this._isNextRenderRedrawOnly = false), this._renderDebouncer.refresh(e, i8, this._rowCount);
  }
  _renderRows(e, i8) {
    if (this._renderer.value) {
      if (this._coreService.decPrivateModes.synchronizedOutput) {
        this._syncOutputHandler.bufferRows(e, i8);
        return;
      }
      e = Math.min(e, this._rowCount - 1), i8 = Math.min(i8, this._rowCount - 1), this._renderer.value.renderRows(e, i8), this._needsSelectionRefresh && (this._renderer.value.handleSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), this._needsSelectionRefresh = false), this._isNextRenderRedrawOnly || this._onRenderedViewportChange.fire({ start: e, end: i8 }), this._onRender.fire({ start: e, end: i8 }), this._isNextRenderRedrawOnly = true;
    }
  }
  resize(e, i8) {
    this._rowCount = i8, this._fireOnCanvasResize();
  }
  _handleOptionsChanged() {
    this._renderer.value && (this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize());
  }
  _fireOnCanvasResize() {
    this._renderer.value && (this._renderer.value.dimensions.css.canvas.width === this._canvasWidth && this._renderer.value.dimensions.css.canvas.height === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.value.dimensions));
  }
  hasRenderer() {
    return !!this._renderer.value;
  }
  setRenderer(e) {
    this._renderer.value = e, this._renderer.value && (this._renderer.value.onRequestRedraw((i8) => this.refreshRows(i8.start, i8.end, true)), this._needsSelectionRefresh = true, this._fullRefresh());
  }
  addRefreshCallback(e) {
    return this._renderDebouncer.addRefreshCallback(e);
  }
  _fullRefresh() {
    this._isPaused ? this._needsFullRefresh = true : this.refreshRows(0, this._rowCount - 1);
  }
  clearTextureAtlas() {
    this._renderer.value && (this._renderer.value.clearTextureAtlas?.(), this._fullRefresh());
  }
  handleDevicePixelRatioChange() {
    this._charSizeService.measure(), this._renderer.value && (this._renderer.value.handleDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1));
  }
  handleResize(e, i8) {
    this._renderer.value && (this._isPaused ? this._pausedResizeTask.set(() => this._renderer.value?.handleResize(e, i8)) : this._renderer.value.handleResize(e, i8), this._fullRefresh());
  }
  handleCharSizeChanged() {
    this._renderer.value?.handleCharSizeChanged();
  }
  handleBlur() {
    this._renderer.value?.handleBlur();
  }
  handleFocus() {
    this._renderer.value?.handleFocus();
  }
  handleSelectionChanged(e, i8, r6) {
    this._selectionState.start = e, this._selectionState.end = i8, this._selectionState.columnSelectMode = r6, this._renderer.value?.handleSelectionChanged(e, i8, r6);
  }
  handleCursorMove() {
    this._renderer.value?.handleCursorMove();
  }
  clear() {
    this._renderer.value?.clear();
  }
};
Qt2 = M3([S(2, H4), S(3, nt3), S(4, ge3), S(5, Be4), S(6, F2), S(7, ae2), S(8, Re3)], Qt2);
var xs2 = class {
  constructor(t, e, i8) {
    this._coreBrowserService = t;
    this._coreService = e;
    this._onTimeout = i8;
    this._start = 0;
    this._end = 0;
    this._isBuffering = false;
  }
  bufferRows(t, e) {
    this._isBuffering ? (this._start = Math.min(this._start, t), this._end = Math.max(this._end, e)) : (this._start = t, this._end = e, this._isBuffering = true), this._timeout === void 0 && (this._timeout = this._coreBrowserService.window.setTimeout(() => {
      this._timeout = void 0, this._coreService.decPrivateModes.synchronizedOutput = false, this._onTimeout();
    }, 1e3));
  }
  flush() {
    if (this._timeout !== void 0 && (this._coreBrowserService.window.clearTimeout(this._timeout), this._timeout = void 0), !this._isBuffering) return;
    let t = { start: this._start, end: this._end };
    return this._isBuffering = false, t;
  }
  dispose() {
    this._timeout !== void 0 && (this._coreBrowserService.window.clearTimeout(this._timeout), this._timeout = void 0);
  }
};
function Jo(s15, t, e, i8) {
  let r6 = e.buffer.x, n = e.buffer.y;
  if (!e.buffer.hasScrollback) return Ga2(r6, n, s15, t, e, i8) + sn2(n, t, e, i8) + $a2(r6, n, s15, t, e, i8);
  let o2;
  if (n === t) return o2 = r6 > s15 ? "D" : "C", Fi2(Math.abs(r6 - s15), Ni2(o2, i8));
  o2 = n > t ? "D" : "C";
  let l2 = Math.abs(n - t), a = za2(n > t ? s15 : r6, e) + (l2 - 1) * e.cols + 1 + Ka2(n > t ? r6 : s15, e);
  return Fi2(a, Ni2(o2, i8));
}
function Ka2(s15, t) {
  return s15 - 1;
}
function za2(s15, t) {
  return t.cols - s15;
}
function Ga2(s15, t, e, i8, r6, n) {
  return sn2(t, i8, r6, n).length === 0 ? "" : Fi2(el(s15, t, s15, t - gt3(t, r6), false, r6).length, Ni2("D", n));
}
function sn2(s15, t, e, i8) {
  let r6 = s15 - gt3(s15, e), n = t - gt3(t, e), o2 = Math.abs(r6 - n) - Va2(s15, t, e);
  return Fi2(o2, Ni2(Qo(s15, t), i8));
}
function $a2(s15, t, e, i8, r6, n) {
  let o2;
  sn2(t, i8, r6, n).length > 0 ? o2 = i8 - gt3(i8, r6) : o2 = t;
  let l2 = i8, a = qa2(s15, t, e, i8, r6, n);
  return Fi2(el(s15, o2, e, l2, a === "C", r6).length, Ni2(a, n));
}
function Va2(s15, t, e) {
  let i8 = 0, r6 = s15 - gt3(s15, e), n = t - gt3(t, e);
  for (let o2 = 0; o2 < Math.abs(r6 - n); o2++) {
    let l2 = Qo(s15, t) === "A" ? -1 : 1;
    e.buffer.lines.get(r6 + l2 * o2)?.isWrapped && i8++;
  }
  return i8;
}
function gt3(s15, t) {
  let e = 0, i8 = t.buffer.lines.get(s15), r6 = i8?.isWrapped;
  for (; r6 && s15 >= 0 && s15 < t.rows; ) e++, i8 = t.buffer.lines.get(--s15), r6 = i8?.isWrapped;
  return e;
}
function qa2(s15, t, e, i8, r6, n) {
  let o2;
  return sn2(e, i8, r6, n).length > 0 ? o2 = i8 - gt3(i8, r6) : o2 = t, s15 < e && o2 <= i8 || s15 >= e && o2 < i8 ? "C" : "D";
}
function Qo(s15, t) {
  return s15 > t ? "A" : "B";
}
function el(s15, t, e, i8, r6, n) {
  let o2 = s15, l2 = t, a = "";
  for (; (o2 !== e || l2 !== i8) && l2 >= 0 && l2 < n.buffer.lines.length; ) o2 += r6 ? 1 : -1, r6 && o2 > n.cols - 1 ? (a += n.buffer.translateBufferLineToString(l2, false, s15, o2), o2 = 0, s15 = 0, l2++) : !r6 && o2 < 0 && (a += n.buffer.translateBufferLineToString(l2, false, 0, s15 + 1), o2 = n.cols - 1, s15 = o2, l2--);
  return a + n.buffer.translateBufferLineToString(l2, false, s15, o2);
}
function Ni2(s15, t) {
  let e = t ? "O" : "[";
  return b.ESC + e + s15;
}
function Fi2(s15, t) {
  s15 = Math.floor(s15);
  let e = "";
  for (let i8 = 0; i8 < s15; i8++) e += t;
  return e;
}
var on2 = class {
  constructor(t) {
    this._bufferService = t;
    this.isSelectAllActive = false;
    this.selectionStartLength = 0;
  }
  clearSelection() {
    this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = false, this.selectionStartLength = 0;
  }
  get finalSelectionStart() {
    return this.isSelectAllActive ? [0, 0] : !this.selectionEnd || !this.selectionStart ? this.selectionStart : this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
  }
  get finalSelectionEnd() {
    if (this.isSelectAllActive) return [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1];
    if (this.selectionStart) {
      if (!this.selectionEnd || this.areSelectionValuesReversed()) {
        let t = this.selectionStart[0] + this.selectionStartLength;
        return t > this._bufferService.cols ? t % this._bufferService.cols === 0 ? [this._bufferService.cols, this.selectionStart[1] + Math.floor(t / this._bufferService.cols) - 1] : [t % this._bufferService.cols, this.selectionStart[1] + Math.floor(t / this._bufferService.cols)] : [t, this.selectionStart[1]];
      }
      if (this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1]) {
        let t = this.selectionStart[0] + this.selectionStartLength;
        return t > this._bufferService.cols ? [t % this._bufferService.cols, this.selectionStart[1] + Math.floor(t / this._bufferService.cols)] : [Math.max(t, this.selectionEnd[0]), this.selectionEnd[1]];
      }
      return this.selectionEnd;
    }
  }
  areSelectionValuesReversed() {
    let t = this.selectionStart, e = this.selectionEnd;
    return !t || !e ? false : t[1] > e[1] || t[1] === e[1] && t[0] > e[0];
  }
  handleTrim(t) {
    return this.selectionStart && (this.selectionStart[1] -= t), this.selectionEnd && (this.selectionEnd[1] -= t), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), true) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), false);
  }
};
function ws2(s15, t) {
  if (s15.start.y > s15.end.y) throw new Error(`Buffer range end (${s15.end.x}, ${s15.end.y}) cannot be before start (${s15.start.x}, ${s15.start.y})`);
  return t * (s15.end.y - s15.start.y) + (s15.end.x - s15.start.x + 1);
}
var Ds = 50;
var Ya = 15;
var ja2 = 50;
var Xa = 500;
var Za = "\xA0";
var Ja = new RegExp(Za, "g");
var ei2 = class extends D3 {
  constructor(e, i8, r6, n, o2, l2, a, u2, h2) {
    super();
    this._element = e;
    this._screenElement = i8;
    this._linkifier = r6;
    this._bufferService = n;
    this._coreService = o2;
    this._mouseService = l2;
    this._optionsService = a;
    this._renderService = u2;
    this._coreBrowserService = h2;
    this._dragScrollAmount = 0;
    this._enabled = true;
    this._workCell = new q();
    this._mouseDownTimeStamp = 0;
    this._oldHasSelection = false;
    this._oldSelectionStart = void 0;
    this._oldSelectionEnd = void 0;
    this._onLinuxMouseSelection = this._register(new v2());
    this.onLinuxMouseSelection = this._onLinuxMouseSelection.event;
    this._onRedrawRequest = this._register(new v2());
    this.onRequestRedraw = this._onRedrawRequest.event;
    this._onSelectionChange = this._register(new v2());
    this.onSelectionChange = this._onSelectionChange.event;
    this._onRequestScrollLines = this._register(new v2());
    this.onRequestScrollLines = this._onRequestScrollLines.event;
    this._mouseMoveListener = (c) => this._handleMouseMove(c), this._mouseUpListener = (c) => this._handleMouseUp(c), this._coreService.onUserInput(() => {
      this.hasSelection && this.clearSelection();
    }), this._trimListener = this._bufferService.buffer.lines.onTrim((c) => this._handleTrim(c)), this._register(this._bufferService.buffers.onBufferActivate((c) => this._handleBufferActivate(c))), this.enable(), this._model = new on2(this._bufferService), this._activeSelectionMode = 0, this._register(C3(() => {
      this._removeMouseDownListeners();
    })), this._register(this._bufferService.onResize((c) => {
      c.rowsChanged && this.clearSelection();
    }));
  }
  reset() {
    this.clearSelection();
  }
  disable() {
    this.clearSelection(), this._enabled = false;
  }
  enable() {
    this._enabled = true;
  }
  get selectionStart() {
    return this._model.finalSelectionStart;
  }
  get selectionEnd() {
    return this._model.finalSelectionEnd;
  }
  get hasSelection() {
    let e = this._model.finalSelectionStart, i8 = this._model.finalSelectionEnd;
    return !e || !i8 ? false : e[0] !== i8[0] || e[1] !== i8[1];
  }
  get selectionText() {
    let e = this._model.finalSelectionStart, i8 = this._model.finalSelectionEnd;
    if (!e || !i8) return "";
    let r6 = this._bufferService.buffer, n = [];
    if (this._activeSelectionMode === 3) {
      if (e[0] === i8[0]) return "";
      let l2 = e[0] < i8[0] ? e[0] : i8[0], a = e[0] < i8[0] ? i8[0] : e[0];
      for (let u2 = e[1]; u2 <= i8[1]; u2++) {
        let h2 = r6.translateBufferLineToString(u2, true, l2, a);
        n.push(h2);
      }
    } else {
      let l2 = e[1] === i8[1] ? i8[0] : void 0;
      n.push(r6.translateBufferLineToString(e[1], true, e[0], l2));
      for (let a = e[1] + 1; a <= i8[1] - 1; a++) {
        let u2 = r6.lines.get(a), h2 = r6.translateBufferLineToString(a, true);
        u2?.isWrapped ? n[n.length - 1] += h2 : n.push(h2);
      }
      if (e[1] !== i8[1]) {
        let a = r6.lines.get(i8[1]), u2 = r6.translateBufferLineToString(i8[1], true, 0, i8[0]);
        a && a.isWrapped ? n[n.length - 1] += u2 : n.push(u2);
      }
    }
    return n.map((l2) => l2.replace(Ja, " ")).join(Es2 ? `\r
` : `
`);
  }
  clearSelection() {
    this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire();
  }
  refresh(e) {
    this._refreshAnimationFrame || (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._refresh())), Bi2 && e && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
  }
  _refresh() {
    this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({ start: this._model.finalSelectionStart, end: this._model.finalSelectionEnd, columnSelectMode: this._activeSelectionMode === 3 });
  }
  _isClickInSelection(e) {
    let i8 = this._getMouseBufferCoords(e), r6 = this._model.finalSelectionStart, n = this._model.finalSelectionEnd;
    return !r6 || !n || !i8 ? false : this._areCoordsInSelection(i8, r6, n);
  }
  isCellInSelection(e, i8) {
    let r6 = this._model.finalSelectionStart, n = this._model.finalSelectionEnd;
    return !r6 || !n ? false : this._areCoordsInSelection([e, i8], r6, n);
  }
  _areCoordsInSelection(e, i8, r6) {
    return e[1] > i8[1] && e[1] < r6[1] || i8[1] === r6[1] && e[1] === i8[1] && e[0] >= i8[0] && e[0] < r6[0] || i8[1] < r6[1] && e[1] === r6[1] && e[0] < r6[0] || i8[1] < r6[1] && e[1] === i8[1] && e[0] >= i8[0];
  }
  _selectWordAtCursor(e, i8) {
    let r6 = this._linkifier.currentLink?.link?.range;
    if (r6) return this._model.selectionStart = [r6.start.x - 1, r6.start.y - 1], this._model.selectionStartLength = ws2(r6, this._bufferService.cols), this._model.selectionEnd = void 0, true;
    let n = this._getMouseBufferCoords(e);
    return n ? (this._selectWordAt(n, i8), this._model.selectionEnd = void 0, true) : false;
  }
  selectAll() {
    this._model.isSelectAllActive = true, this.refresh(), this._onSelectionChange.fire();
  }
  selectLines(e, i8) {
    this._model.clearSelection(), e = Math.max(e, 0), i8 = Math.min(i8, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [0, e], this._model.selectionEnd = [this._bufferService.cols, i8], this.refresh(), this._onSelectionChange.fire();
  }
  _handleTrim(e) {
    this._model.handleTrim(e) && this.refresh();
  }
  _getMouseBufferCoords(e) {
    let i8 = this._mouseService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows, true);
    if (i8) return i8[0]--, i8[1]--, i8[1] += this._bufferService.buffer.ydisp, i8;
  }
  _getMouseEventScrollAmount(e) {
    let i8 = Ci2(this._coreBrowserService.window, e, this._screenElement)[1], r6 = this._renderService.dimensions.css.canvas.height;
    return i8 >= 0 && i8 <= r6 ? 0 : (i8 > r6 && (i8 -= r6), i8 = Math.min(Math.max(i8, -Ds), Ds), i8 /= Ds, i8 / Math.abs(i8) + Math.round(i8 * (Ya - 1)));
  }
  shouldForceSelection(e) {
    return Zt3 ? e.altKey && this._optionsService.rawOptions.macOptionClickForcesSelection : e.shiftKey;
  }
  handleMouseDown(e) {
    if (this._mouseDownTimeStamp = e.timeStamp, !(e.button === 2 && this.hasSelection) && e.button === 0) {
      if (!this._enabled) {
        if (!this.shouldForceSelection(e)) return;
        e.stopPropagation();
      }
      e.preventDefault(), this._dragScrollAmount = 0, this._enabled && e.shiftKey ? this._handleIncrementalClick(e) : e.detail === 1 ? this._handleSingleClick(e) : e.detail === 2 ? this._handleDoubleClick(e) : e.detail === 3 && this._handleTripleClick(e), this._addMouseDownListeners(), this.refresh(true);
    }
  }
  _addMouseDownListeners() {
    this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = this._coreBrowserService.window.setInterval(() => this._dragScroll(), ja2);
  }
  _removeMouseDownListeners() {
    this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), this._coreBrowserService.window.clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0;
  }
  _handleIncrementalClick(e) {
    this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e));
  }
  _handleSingleClick(e) {
    if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = false, this._activeSelectionMode = this.shouldColumnSelect(e) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e), !this._model.selectionStart) return;
    this._model.selectionEnd = void 0;
    let i8 = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
    i8 && i8.length !== this._model.selectionStart[0] && i8.hasWidth(this._model.selectionStart[0]) === 0 && this._model.selectionStart[0]++;
  }
  _handleDoubleClick(e) {
    this._selectWordAtCursor(e, true) && (this._activeSelectionMode = 1);
  }
  _handleTripleClick(e) {
    let i8 = this._getMouseBufferCoords(e);
    i8 && (this._activeSelectionMode = 2, this._selectLineAt(i8[1]));
  }
  shouldColumnSelect(e) {
    return e.altKey && !(Zt3 && this._optionsService.rawOptions.macOptionClickForcesSelection);
  }
  _handleMouseMove(e) {
    if (e.stopImmediatePropagation(), !this._model.selectionStart) return;
    let i8 = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
    if (this._model.selectionEnd = this._getMouseBufferCoords(e), !this._model.selectionEnd) {
      this.refresh(true);
      return;
    }
    this._activeSelectionMode === 2 ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : this._activeSelectionMode === 1 && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e), this._activeSelectionMode !== 3 && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
    let r6 = this._bufferService.buffer;
    if (this._model.selectionEnd[1] < r6.lines.length) {
      let n = r6.lines.get(this._model.selectionEnd[1]);
      n && n.hasWidth(this._model.selectionEnd[0]) === 0 && this._model.selectionEnd[0] < this._bufferService.cols && this._model.selectionEnd[0]++;
    }
    (!i8 || i8[0] !== this._model.selectionEnd[0] || i8[1] !== this._model.selectionEnd[1]) && this.refresh(true);
  }
  _dragScroll() {
    if (!(!this._model.selectionEnd || !this._model.selectionStart) && this._dragScrollAmount) {
      this._onRequestScrollLines.fire({ amount: this._dragScrollAmount, suppressScrollEvent: false });
      let e = this._bufferService.buffer;
      this._dragScrollAmount > 0 ? (this._activeSelectionMode !== 3 && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e.ydisp + this._bufferService.rows, e.lines.length - 1)) : (this._activeSelectionMode !== 3 && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e.ydisp), this.refresh();
    }
  }
  _handleMouseUp(e) {
    let i8 = e.timeStamp - this._mouseDownTimeStamp;
    if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && i8 < Xa && e.altKey && this._optionsService.rawOptions.altClickMovesCursor) {
      if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
        let r6 = this._mouseService.getCoords(e, this._element, this._bufferService.cols, this._bufferService.rows, false);
        if (r6 && r6[0] !== void 0 && r6[1] !== void 0) {
          let n = Jo(r6[0] - 1, r6[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
          this._coreService.triggerDataEvent(n, true);
        }
      }
    } else this._fireEventIfSelectionChanged();
  }
  _fireEventIfSelectionChanged() {
    let e = this._model.finalSelectionStart, i8 = this._model.finalSelectionEnd, r6 = !!e && !!i8 && (e[0] !== i8[0] || e[1] !== i8[1]);
    if (!r6) {
      this._oldHasSelection && this._fireOnSelectionChange(e, i8, r6);
      return;
    }
    !e || !i8 || (!this._oldSelectionStart || !this._oldSelectionEnd || e[0] !== this._oldSelectionStart[0] || e[1] !== this._oldSelectionStart[1] || i8[0] !== this._oldSelectionEnd[0] || i8[1] !== this._oldSelectionEnd[1]) && this._fireOnSelectionChange(e, i8, r6);
  }
  _fireOnSelectionChange(e, i8, r6) {
    this._oldSelectionStart = e, this._oldSelectionEnd = i8, this._oldHasSelection = r6, this._onSelectionChange.fire();
  }
  _handleBufferActivate(e) {
    this.clearSelection(), this._trimListener.dispose(), this._trimListener = e.activeBuffer.lines.onTrim((i8) => this._handleTrim(i8));
  }
  _convertViewportColToCharacterIndex(e, i8) {
    let r6 = i8;
    for (let n = 0; i8 >= n; n++) {
      let o2 = e.loadCell(n, this._workCell).getChars().length;
      this._workCell.getWidth() === 0 ? r6-- : o2 > 1 && i8 !== n && (r6 += o2 - 1);
    }
    return r6;
  }
  setSelection(e, i8, r6) {
    this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [e, i8], this._model.selectionStartLength = r6, this.refresh(), this._fireEventIfSelectionChanged();
  }
  rightClickSelect(e) {
    this._isClickInSelection(e) || (this._selectWordAtCursor(e, false) && this.refresh(true), this._fireEventIfSelectionChanged());
  }
  _getWordAt(e, i8, r6 = true, n = true) {
    if (e[0] >= this._bufferService.cols) return;
    let o2 = this._bufferService.buffer, l2 = o2.lines.get(e[1]);
    if (!l2) return;
    let a = o2.translateBufferLineToString(e[1], false), u2 = this._convertViewportColToCharacterIndex(l2, e[0]), h2 = u2, c = e[0] - u2, d = 0, _4 = 0, p2 = 0, m2 = 0;
    if (a.charAt(u2) === " ") {
      for (; u2 > 0 && a.charAt(u2 - 1) === " "; ) u2--;
      for (; h2 < a.length && a.charAt(h2 + 1) === " "; ) h2++;
    } else {
      let R3 = e[0], O3 = e[0];
      l2.getWidth(R3) === 0 && (d++, R3--), l2.getWidth(O3) === 2 && (_4++, O3++);
      let I2 = l2.getString(O3).length;
      for (I2 > 1 && (m2 += I2 - 1, h2 += I2 - 1); R3 > 0 && u2 > 0 && !this._isCharWordSeparator(l2.loadCell(R3 - 1, this._workCell)); ) {
        l2.loadCell(R3 - 1, this._workCell);
        let k5 = this._workCell.getChars().length;
        this._workCell.getWidth() === 0 ? (d++, R3--) : k5 > 1 && (p2 += k5 - 1, u2 -= k5 - 1), u2--, R3--;
      }
      for (; O3 < l2.length && h2 + 1 < a.length && !this._isCharWordSeparator(l2.loadCell(O3 + 1, this._workCell)); ) {
        l2.loadCell(O3 + 1, this._workCell);
        let k5 = this._workCell.getChars().length;
        this._workCell.getWidth() === 2 ? (_4++, O3++) : k5 > 1 && (m2 += k5 - 1, h2 += k5 - 1), h2++, O3++;
      }
    }
    h2++;
    let f = u2 + c - d + p2, A2 = Math.min(this._bufferService.cols, h2 - u2 + d + _4 - p2 - m2);
    if (!(!i8 && a.slice(u2, h2).trim() === "")) {
      if (r6 && f === 0 && l2.getCodePoint(0) !== 32) {
        let R3 = o2.lines.get(e[1] - 1);
        if (R3 && l2.isWrapped && R3.getCodePoint(this._bufferService.cols - 1) !== 32) {
          let O3 = this._getWordAt([this._bufferService.cols - 1, e[1] - 1], false, true, false);
          if (O3) {
            let I2 = this._bufferService.cols - O3.start;
            f -= I2, A2 += I2;
          }
        }
      }
      if (n && f + A2 === this._bufferService.cols && l2.getCodePoint(this._bufferService.cols - 1) !== 32) {
        let R3 = o2.lines.get(e[1] + 1);
        if (R3?.isWrapped && R3.getCodePoint(0) !== 32) {
          let O3 = this._getWordAt([0, e[1] + 1], false, false, true);
          O3 && (A2 += O3.length);
        }
      }
      return { start: f, length: A2 };
    }
  }
  _selectWordAt(e, i8) {
    let r6 = this._getWordAt(e, i8);
    if (r6) {
      for (; r6.start < 0; ) r6.start += this._bufferService.cols, e[1]--;
      this._model.selectionStart = [r6.start, e[1]], this._model.selectionStartLength = r6.length;
    }
  }
  _selectToWordAt(e) {
    let i8 = this._getWordAt(e, true);
    if (i8) {
      let r6 = e[1];
      for (; i8.start < 0; ) i8.start += this._bufferService.cols, r6--;
      if (!this._model.areSelectionValuesReversed()) for (; i8.start + i8.length > this._bufferService.cols; ) i8.length -= this._bufferService.cols, r6++;
      this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? i8.start : i8.start + i8.length, r6];
    }
  }
  _isCharWordSeparator(e) {
    return e.getWidth() === 0 ? false : this._optionsService.rawOptions.wordSeparator.indexOf(e.getChars()) >= 0;
  }
  _selectLineAt(e) {
    let i8 = this._bufferService.buffer.getWrappedRangeForLine(e), r6 = { start: { x: 0, y: i8.first }, end: { x: this._bufferService.cols - 1, y: i8.last } };
    this._model.selectionStart = [0, i8.first], this._model.selectionEnd = void 0, this._model.selectionStartLength = ws2(r6, this._bufferService.cols);
  }
};
ei2 = M3([S(3, F2), S(4, ge3), S(5, Dt2), S(6, H4), S(7, ce3), S(8, ae2)], ei2);
var Hi2 = class {
  constructor() {
    this._data = {};
  }
  set(t, e, i8) {
    this._data[t] || (this._data[t] = {}), this._data[t][e] = i8;
  }
  get(t, e) {
    return this._data[t] ? this._data[t][e] : void 0;
  }
  clear() {
    this._data = {};
  }
};
var Wi2 = class {
  constructor() {
    this._color = new Hi2();
    this._css = new Hi2();
  }
  setCss(t, e, i8) {
    this._css.set(t, e, i8);
  }
  getCss(t, e) {
    return this._css.get(t, e);
  }
  setColor(t, e, i8) {
    this._color.set(t, e, i8);
  }
  getColor(t, e) {
    return this._color.get(t, e);
  }
  clear() {
    this._color.clear(), this._css.clear();
  }
};
var re3 = Object.freeze((() => {
  let s15 = [z2.toColor("#2e3436"), z2.toColor("#cc0000"), z2.toColor("#4e9a06"), z2.toColor("#c4a000"), z2.toColor("#3465a4"), z2.toColor("#75507b"), z2.toColor("#06989a"), z2.toColor("#d3d7cf"), z2.toColor("#555753"), z2.toColor("#ef2929"), z2.toColor("#8ae234"), z2.toColor("#fce94f"), z2.toColor("#729fcf"), z2.toColor("#ad7fa8"), z2.toColor("#34e2e2"), z2.toColor("#eeeeec")], t = [0, 95, 135, 175, 215, 255];
  for (let e = 0; e < 216; e++) {
    let i8 = t[e / 36 % 6 | 0], r6 = t[e / 6 % 6 | 0], n = t[e % 6];
    s15.push({ css: j2.toCss(i8, r6, n), rgba: j2.toRgba(i8, r6, n) });
  }
  for (let e = 0; e < 24; e++) {
    let i8 = 8 + e * 10;
    s15.push({ css: j2.toCss(i8, i8, i8), rgba: j2.toRgba(i8, i8, i8) });
  }
  return s15;
})());
var St2 = z2.toColor("#ffffff");
var Ki2 = z2.toColor("#000000");
var tl = z2.toColor("#ffffff");
var il = Ki2;
var Ui2 = { css: "rgba(255, 255, 255, 0.3)", rgba: 4294967117 };
var Qa = St2;
var ti2 = class extends D3 {
  constructor(e) {
    super();
    this._optionsService = e;
    this._contrastCache = new Wi2();
    this._halfContrastCache = new Wi2();
    this._onChangeColors = this._register(new v2());
    this.onChangeColors = this._onChangeColors.event;
    this._colors = { foreground: St2, background: Ki2, cursor: tl, cursorAccent: il, selectionForeground: void 0, selectionBackgroundTransparent: Ui2, selectionBackgroundOpaque: U4.blend(Ki2, Ui2), selectionInactiveBackgroundTransparent: Ui2, selectionInactiveBackgroundOpaque: U4.blend(Ki2, Ui2), scrollbarSliderBackground: U4.opacity(St2, 0.2), scrollbarSliderHoverBackground: U4.opacity(St2, 0.4), scrollbarSliderActiveBackground: U4.opacity(St2, 0.5), overviewRulerBorder: St2, ansi: re3.slice(), contrastCache: this._contrastCache, halfContrastCache: this._halfContrastCache }, this._updateRestoreColors(), this._setTheme(this._optionsService.rawOptions.theme), this._register(this._optionsService.onSpecificOptionChange("minimumContrastRatio", () => this._contrastCache.clear())), this._register(this._optionsService.onSpecificOptionChange("theme", () => this._setTheme(this._optionsService.rawOptions.theme)));
  }
  get colors() {
    return this._colors;
  }
  _setTheme(e = {}) {
    let i8 = this._colors;
    if (i8.foreground = K5(e.foreground, St2), i8.background = K5(e.background, Ki2), i8.cursor = U4.blend(i8.background, K5(e.cursor, tl)), i8.cursorAccent = U4.blend(i8.background, K5(e.cursorAccent, il)), i8.selectionBackgroundTransparent = K5(e.selectionBackground, Ui2), i8.selectionBackgroundOpaque = U4.blend(i8.background, i8.selectionBackgroundTransparent), i8.selectionInactiveBackgroundTransparent = K5(e.selectionInactiveBackground, i8.selectionBackgroundTransparent), i8.selectionInactiveBackgroundOpaque = U4.blend(i8.background, i8.selectionInactiveBackgroundTransparent), i8.selectionForeground = e.selectionForeground ? K5(e.selectionForeground, ps2) : void 0, i8.selectionForeground === ps2 && (i8.selectionForeground = void 0), U4.isOpaque(i8.selectionBackgroundTransparent) && (i8.selectionBackgroundTransparent = U4.opacity(i8.selectionBackgroundTransparent, 0.3)), U4.isOpaque(i8.selectionInactiveBackgroundTransparent) && (i8.selectionInactiveBackgroundTransparent = U4.opacity(i8.selectionInactiveBackgroundTransparent, 0.3)), i8.scrollbarSliderBackground = K5(e.scrollbarSliderBackground, U4.opacity(i8.foreground, 0.2)), i8.scrollbarSliderHoverBackground = K5(e.scrollbarSliderHoverBackground, U4.opacity(i8.foreground, 0.4)), i8.scrollbarSliderActiveBackground = K5(e.scrollbarSliderActiveBackground, U4.opacity(i8.foreground, 0.5)), i8.overviewRulerBorder = K5(e.overviewRulerBorder, Qa), i8.ansi = re3.slice(), i8.ansi[0] = K5(e.black, re3[0]), i8.ansi[1] = K5(e.red, re3[1]), i8.ansi[2] = K5(e.green, re3[2]), i8.ansi[3] = K5(e.yellow, re3[3]), i8.ansi[4] = K5(e.blue, re3[4]), i8.ansi[5] = K5(e.magenta, re3[5]), i8.ansi[6] = K5(e.cyan, re3[6]), i8.ansi[7] = K5(e.white, re3[7]), i8.ansi[8] = K5(e.brightBlack, re3[8]), i8.ansi[9] = K5(e.brightRed, re3[9]), i8.ansi[10] = K5(e.brightGreen, re3[10]), i8.ansi[11] = K5(e.brightYellow, re3[11]), i8.ansi[12] = K5(e.brightBlue, re3[12]), i8.ansi[13] = K5(e.brightMagenta, re3[13]), i8.ansi[14] = K5(e.brightCyan, re3[14]), i8.ansi[15] = K5(e.brightWhite, re3[15]), e.extendedAnsi) {
      let r6 = Math.min(i8.ansi.length - 16, e.extendedAnsi.length);
      for (let n = 0; n < r6; n++) i8.ansi[n + 16] = K5(e.extendedAnsi[n], re3[n + 16]);
    }
    this._contrastCache.clear(), this._halfContrastCache.clear(), this._updateRestoreColors(), this._onChangeColors.fire(this.colors);
  }
  restoreColor(e) {
    this._restoreColor(e), this._onChangeColors.fire(this.colors);
  }
  _restoreColor(e) {
    if (e === void 0) {
      for (let i8 = 0; i8 < this._restoreColors.ansi.length; ++i8) this._colors.ansi[i8] = this._restoreColors.ansi[i8];
      return;
    }
    switch (e) {
      case 256:
        this._colors.foreground = this._restoreColors.foreground;
        break;
      case 257:
        this._colors.background = this._restoreColors.background;
        break;
      case 258:
        this._colors.cursor = this._restoreColors.cursor;
        break;
      default:
        this._colors.ansi[e] = this._restoreColors.ansi[e];
    }
  }
  modifyColors(e) {
    e(this._colors), this._onChangeColors.fire(this.colors);
  }
  _updateRestoreColors() {
    this._restoreColors = { foreground: this._colors.foreground, background: this._colors.background, cursor: this._colors.cursor, ansi: this._colors.ansi.slice() };
  }
};
ti2 = M3([S(0, H4)], ti2);
function K5(s15, t) {
  if (s15 !== void 0) try {
    return z2.toColor(s15);
  } catch {
  }
  return t;
}
var Rs2 = class {
  constructor(...t) {
    this._entries = /* @__PURE__ */ new Map();
    for (let [e, i8] of t) this.set(e, i8);
  }
  set(t, e) {
    let i8 = this._entries.get(t);
    return this._entries.set(t, e), i8;
  }
  forEach(t) {
    for (let [e, i8] of this._entries.entries()) t(e, i8);
  }
  has(t) {
    return this._entries.has(t);
  }
  get(t) {
    return this._entries.get(t);
  }
};
var ln = class {
  constructor() {
    this._services = new Rs2();
    this._services.set(xt4, this);
  }
  setService(t, e) {
    this._services.set(t, e);
  }
  getService(t) {
    return this._services.get(t);
  }
  createInstance(t, ...e) {
    let i8 = Xs(t).sort((o2, l2) => o2.index - l2.index), r6 = [];
    for (let o2 of i8) {
      let l2 = this._services.get(o2.id);
      if (!l2) throw new Error(`[createInstance] ${t.name} depends on UNKNOWN service ${o2.id._id}.`);
      r6.push(l2);
    }
    let n = i8.length > 0 ? i8[0].index : e.length;
    if (e.length !== n) throw new Error(`[createInstance] First service dependency of ${t.name} at position ${n + 1} conflicts with ${e.length} static arguments`);
    return new t(...e, ...r6);
  }
};
var ec = { trace: 0, debug: 1, info: 2, warn: 3, error: 4, off: 5 };
var tc = "xterm.js: ";
var ii2 = class extends D3 {
  constructor(e) {
    super();
    this._optionsService = e;
    this._logLevel = 5;
    this._updateLogLevel(), this._register(this._optionsService.onSpecificOptionChange("logLevel", () => this._updateLogLevel())), ic = this;
  }
  get logLevel() {
    return this._logLevel;
  }
  _updateLogLevel() {
    this._logLevel = ec[this._optionsService.rawOptions.logLevel];
  }
  _evalLazyOptionalParams(e) {
    for (let i8 = 0; i8 < e.length; i8++) typeof e[i8] == "function" && (e[i8] = e[i8]());
  }
  _log(e, i8, r6) {
    this._evalLazyOptionalParams(r6), e.call(console, (this._optionsService.options.logger ? "" : tc) + i8, ...r6);
  }
  trace(e, ...i8) {
    this._logLevel <= 0 && this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger) ?? console.log, e, i8);
  }
  debug(e, ...i8) {
    this._logLevel <= 1 && this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger) ?? console.log, e, i8);
  }
  info(e, ...i8) {
    this._logLevel <= 2 && this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger) ?? console.info, e, i8);
  }
  warn(e, ...i8) {
    this._logLevel <= 3 && this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger) ?? console.warn, e, i8);
  }
  error(e, ...i8) {
    this._logLevel <= 4 && this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger) ?? console.error, e, i8);
  }
};
ii2 = M3([S(0, H4)], ii2);
var ic;
var zi2 = class extends D3 {
  constructor(e) {
    super();
    this._maxLength = e;
    this.onDeleteEmitter = this._register(new v2());
    this.onDelete = this.onDeleteEmitter.event;
    this.onInsertEmitter = this._register(new v2());
    this.onInsert = this.onInsertEmitter.event;
    this.onTrimEmitter = this._register(new v2());
    this.onTrim = this.onTrimEmitter.event;
    this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
  }
  get maxLength() {
    return this._maxLength;
  }
  set maxLength(e) {
    if (this._maxLength === e) return;
    let i8 = new Array(e);
    for (let r6 = 0; r6 < Math.min(e, this.length); r6++) i8[r6] = this._array[this._getCyclicIndex(r6)];
    this._array = i8, this._maxLength = e, this._startIndex = 0;
  }
  get length() {
    return this._length;
  }
  set length(e) {
    if (e > this._length) for (let i8 = this._length; i8 < e; i8++) this._array[i8] = void 0;
    this._length = e;
  }
  get(e) {
    return this._array[this._getCyclicIndex(e)];
  }
  set(e, i8) {
    this._array[this._getCyclicIndex(e)] = i8;
  }
  push(e) {
    this._array[this._getCyclicIndex(this._length)] = e, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
  }
  recycle() {
    if (this._length !== this._maxLength) throw new Error("Can only recycle when the buffer is full");
    return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
  }
  get isFull() {
    return this._length === this._maxLength;
  }
  pop() {
    return this._array[this._getCyclicIndex(this._length-- - 1)];
  }
  splice(e, i8, ...r6) {
    if (i8) {
      for (let n = e; n < this._length - i8; n++) this._array[this._getCyclicIndex(n)] = this._array[this._getCyclicIndex(n + i8)];
      this._length -= i8, this.onDeleteEmitter.fire({ index: e, amount: i8 });
    }
    for (let n = this._length - 1; n >= e; n--) this._array[this._getCyclicIndex(n + r6.length)] = this._array[this._getCyclicIndex(n)];
    for (let n = 0; n < r6.length; n++) this._array[this._getCyclicIndex(e + n)] = r6[n];
    if (r6.length && this.onInsertEmitter.fire({ index: e, amount: r6.length }), this._length + r6.length > this._maxLength) {
      let n = this._length + r6.length - this._maxLength;
      this._startIndex += n, this._length = this._maxLength, this.onTrimEmitter.fire(n);
    } else this._length += r6.length;
  }
  trimStart(e) {
    e > this._length && (e = this._length), this._startIndex += e, this._length -= e, this.onTrimEmitter.fire(e);
  }
  shiftElements(e, i8, r6) {
    if (!(i8 <= 0)) {
      if (e < 0 || e >= this._length) throw new Error("start argument out of range");
      if (e + r6 < 0) throw new Error("Cannot shift elements in list beyond index 0");
      if (r6 > 0) {
        for (let o2 = i8 - 1; o2 >= 0; o2--) this.set(e + o2 + r6, this.get(e + o2));
        let n = e + i8 + r6 - this._length;
        if (n > 0) for (this._length += n; this._length > this._maxLength; ) this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
      } else for (let n = 0; n < i8; n++) this.set(e + n + r6, this.get(e + n));
    }
  }
  _getCyclicIndex(e) {
    return (this._startIndex + e) % this._maxLength;
  }
};
var B4 = 3;
var X5 = Object.freeze(new De4());
var an2 = 0;
var Ls = 2;
var Ze3 = class s12 {
  constructor(t, e, i8 = false) {
    this.isWrapped = i8;
    this._combined = {};
    this._extendedAttrs = {};
    this._data = new Uint32Array(t * B4);
    let r6 = e || q.fromCharData([0, ir, 1, 0]);
    for (let n = 0; n < t; ++n) this.setCell(n, r6);
    this.length = t;
  }
  get(t) {
    let e = this._data[t * B4 + 0], i8 = e & 2097151;
    return [this._data[t * B4 + 1], e & 2097152 ? this._combined[t] : i8 ? Ce3(i8) : "", e >> 22, e & 2097152 ? this._combined[t].charCodeAt(this._combined[t].length - 1) : i8];
  }
  set(t, e) {
    this._data[t * B4 + 1] = e[0], e[1].length > 1 ? (this._combined[t] = e[1], this._data[t * B4 + 0] = t | 2097152 | e[2] << 22) : this._data[t * B4 + 0] = e[1].charCodeAt(0) | e[2] << 22;
  }
  getWidth(t) {
    return this._data[t * B4 + 0] >> 22;
  }
  hasWidth(t) {
    return this._data[t * B4 + 0] & 12582912;
  }
  getFg(t) {
    return this._data[t * B4 + 1];
  }
  getBg(t) {
    return this._data[t * B4 + 2];
  }
  hasContent(t) {
    return this._data[t * B4 + 0] & 4194303;
  }
  getCodePoint(t) {
    let e = this._data[t * B4 + 0];
    return e & 2097152 ? this._combined[t].charCodeAt(this._combined[t].length - 1) : e & 2097151;
  }
  isCombined(t) {
    return this._data[t * B4 + 0] & 2097152;
  }
  getString(t) {
    let e = this._data[t * B4 + 0];
    return e & 2097152 ? this._combined[t] : e & 2097151 ? Ce3(e & 2097151) : "";
  }
  isProtected(t) {
    return this._data[t * B4 + 2] & 536870912;
  }
  loadCell(t, e) {
    return an2 = t * B4, e.content = this._data[an2 + 0], e.fg = this._data[an2 + 1], e.bg = this._data[an2 + 2], e.content & 2097152 && (e.combinedData = this._combined[t]), e.bg & 268435456 && (e.extended = this._extendedAttrs[t]), e;
  }
  setCell(t, e) {
    e.content & 2097152 && (this._combined[t] = e.combinedData), e.bg & 268435456 && (this._extendedAttrs[t] = e.extended), this._data[t * B4 + 0] = e.content, this._data[t * B4 + 1] = e.fg, this._data[t * B4 + 2] = e.bg;
  }
  setCellFromCodepoint(t, e, i8, r6) {
    r6.bg & 268435456 && (this._extendedAttrs[t] = r6.extended), this._data[t * B4 + 0] = e | i8 << 22, this._data[t * B4 + 1] = r6.fg, this._data[t * B4 + 2] = r6.bg;
  }
  addCodepointToCell(t, e, i8) {
    let r6 = this._data[t * B4 + 0];
    r6 & 2097152 ? this._combined[t] += Ce3(e) : r6 & 2097151 ? (this._combined[t] = Ce3(r6 & 2097151) + Ce3(e), r6 &= -2097152, r6 |= 2097152) : r6 = e | 1 << 22, i8 && (r6 &= -12582913, r6 |= i8 << 22), this._data[t * B4 + 0] = r6;
  }
  insertCells(t, e, i8) {
    if (t %= this.length, t && this.getWidth(t - 1) === 2 && this.setCellFromCodepoint(t - 1, 0, 1, i8), e < this.length - t) {
      let r6 = new q();
      for (let n = this.length - t - e - 1; n >= 0; --n) this.setCell(t + e + n, this.loadCell(t + n, r6));
      for (let n = 0; n < e; ++n) this.setCell(t + n, i8);
    } else for (let r6 = t; r6 < this.length; ++r6) this.setCell(r6, i8);
    this.getWidth(this.length - 1) === 2 && this.setCellFromCodepoint(this.length - 1, 0, 1, i8);
  }
  deleteCells(t, e, i8) {
    if (t %= this.length, e < this.length - t) {
      let r6 = new q();
      for (let n = 0; n < this.length - t - e; ++n) this.setCell(t + n, this.loadCell(t + e + n, r6));
      for (let n = this.length - e; n < this.length; ++n) this.setCell(n, i8);
    } else for (let r6 = t; r6 < this.length; ++r6) this.setCell(r6, i8);
    t && this.getWidth(t - 1) === 2 && this.setCellFromCodepoint(t - 1, 0, 1, i8), this.getWidth(t) === 0 && !this.hasContent(t) && this.setCellFromCodepoint(t, 0, 1, i8);
  }
  replaceCells(t, e, i8, r6 = false) {
    if (r6) {
      for (t && this.getWidth(t - 1) === 2 && !this.isProtected(t - 1) && this.setCellFromCodepoint(t - 1, 0, 1, i8), e < this.length && this.getWidth(e - 1) === 2 && !this.isProtected(e) && this.setCellFromCodepoint(e, 0, 1, i8); t < e && t < this.length; ) this.isProtected(t) || this.setCell(t, i8), t++;
      return;
    }
    for (t && this.getWidth(t - 1) === 2 && this.setCellFromCodepoint(t - 1, 0, 1, i8), e < this.length && this.getWidth(e - 1) === 2 && this.setCellFromCodepoint(e, 0, 1, i8); t < e && t < this.length; ) this.setCell(t++, i8);
  }
  resize(t, e) {
    if (t === this.length) return this._data.length * 4 * Ls < this._data.buffer.byteLength;
    let i8 = t * B4;
    if (t > this.length) {
      if (this._data.buffer.byteLength >= i8 * 4) this._data = new Uint32Array(this._data.buffer, 0, i8);
      else {
        let r6 = new Uint32Array(i8);
        r6.set(this._data), this._data = r6;
      }
      for (let r6 = this.length; r6 < t; ++r6) this.setCell(r6, e);
    } else {
      this._data = this._data.subarray(0, i8);
      let r6 = Object.keys(this._combined);
      for (let o2 = 0; o2 < r6.length; o2++) {
        let l2 = parseInt(r6[o2], 10);
        l2 >= t && delete this._combined[l2];
      }
      let n = Object.keys(this._extendedAttrs);
      for (let o2 = 0; o2 < n.length; o2++) {
        let l2 = parseInt(n[o2], 10);
        l2 >= t && delete this._extendedAttrs[l2];
      }
    }
    return this.length = t, i8 * 4 * Ls < this._data.buffer.byteLength;
  }
  cleanupMemory() {
    if (this._data.length * 4 * Ls < this._data.buffer.byteLength) {
      let t = new Uint32Array(this._data.length);
      return t.set(this._data), this._data = t, 1;
    }
    return 0;
  }
  fill(t, e = false) {
    if (e) {
      for (let i8 = 0; i8 < this.length; ++i8) this.isProtected(i8) || this.setCell(i8, t);
      return;
    }
    this._combined = {}, this._extendedAttrs = {};
    for (let i8 = 0; i8 < this.length; ++i8) this.setCell(i8, t);
  }
  copyFrom(t) {
    this.length !== t.length ? this._data = new Uint32Array(t._data) : this._data.set(t._data), this.length = t.length, this._combined = {};
    for (let e in t._combined) this._combined[e] = t._combined[e];
    this._extendedAttrs = {};
    for (let e in t._extendedAttrs) this._extendedAttrs[e] = t._extendedAttrs[e];
    this.isWrapped = t.isWrapped;
  }
  clone() {
    let t = new s12(0);
    t._data = new Uint32Array(this._data), t.length = this.length;
    for (let e in this._combined) t._combined[e] = this._combined[e];
    for (let e in this._extendedAttrs) t._extendedAttrs[e] = this._extendedAttrs[e];
    return t.isWrapped = this.isWrapped, t;
  }
  getTrimmedLength() {
    for (let t = this.length - 1; t >= 0; --t) if (this._data[t * B4 + 0] & 4194303) return t + (this._data[t * B4 + 0] >> 22);
    return 0;
  }
  getNoBgTrimmedLength() {
    for (let t = this.length - 1; t >= 0; --t) if (this._data[t * B4 + 0] & 4194303 || this._data[t * B4 + 2] & 50331648) return t + (this._data[t * B4 + 0] >> 22);
    return 0;
  }
  copyCellsFrom(t, e, i8, r6, n) {
    let o2 = t._data;
    if (n) for (let a = r6 - 1; a >= 0; a--) {
      for (let u2 = 0; u2 < B4; u2++) this._data[(i8 + a) * B4 + u2] = o2[(e + a) * B4 + u2];
      o2[(e + a) * B4 + 2] & 268435456 && (this._extendedAttrs[i8 + a] = t._extendedAttrs[e + a]);
    }
    else for (let a = 0; a < r6; a++) {
      for (let u2 = 0; u2 < B4; u2++) this._data[(i8 + a) * B4 + u2] = o2[(e + a) * B4 + u2];
      o2[(e + a) * B4 + 2] & 268435456 && (this._extendedAttrs[i8 + a] = t._extendedAttrs[e + a]);
    }
    let l2 = Object.keys(t._combined);
    for (let a = 0; a < l2.length; a++) {
      let u2 = parseInt(l2[a], 10);
      u2 >= e && (this._combined[u2 - e + i8] = t._combined[u2]);
    }
  }
  translateToString(t, e, i8, r6) {
    e = e ?? 0, i8 = i8 ?? this.length, t && (i8 = Math.min(i8, this.getTrimmedLength())), r6 && (r6.length = 0);
    let n = "";
    for (; e < i8; ) {
      let o2 = this._data[e * B4 + 0], l2 = o2 & 2097151, a = o2 & 2097152 ? this._combined[e] : l2 ? Ce3(l2) : we3;
      if (n += a, r6) for (let u2 = 0; u2 < a.length; ++u2) r6.push(e);
      e += o2 >> 22 || 1;
    }
    return r6 && r6.push(e), n;
  }
};
function sl(s15, t, e, i8, r6, n) {
  let o2 = [];
  for (let l2 = 0; l2 < s15.length - 1; l2++) {
    let a = l2, u2 = s15.get(++a);
    if (!u2.isWrapped) continue;
    let h2 = [s15.get(l2)];
    for (; a < s15.length && u2.isWrapped; ) h2.push(u2), u2 = s15.get(++a);
    if (!n && i8 >= l2 && i8 < a) {
      l2 += h2.length - 1;
      continue;
    }
    let c = 0, d = ri2(h2, c, t), _4 = 1, p2 = 0;
    for (; _4 < h2.length; ) {
      let f = ri2(h2, _4, t), A2 = f - p2, R3 = e - d, O3 = Math.min(A2, R3);
      h2[c].copyCellsFrom(h2[_4], p2, d, O3, false), d += O3, d === e && (c++, d = 0), p2 += O3, p2 === f && (_4++, p2 = 0), d === 0 && c !== 0 && h2[c - 1].getWidth(e - 1) === 2 && (h2[c].copyCellsFrom(h2[c - 1], e - 1, d++, 1, false), h2[c - 1].setCell(e - 1, r6));
    }
    h2[c].replaceCells(d, e, r6);
    let m2 = 0;
    for (let f = h2.length - 1; f > 0 && (f > c || h2[f].getTrimmedLength() === 0); f--) m2++;
    m2 > 0 && (o2.push(l2 + h2.length - m2), o2.push(m2)), l2 += h2.length - 1;
  }
  return o2;
}
function ol(s15, t) {
  let e = [], i8 = 0, r6 = t[i8], n = 0;
  for (let o2 = 0; o2 < s15.length; o2++) if (r6 === o2) {
    let l2 = t[++i8];
    s15.onDeleteEmitter.fire({ index: o2 - n, amount: l2 }), o2 += l2 - 1, n += l2, r6 = t[++i8];
  } else e.push(o2);
  return { layout: e, countRemoved: n };
}
function ll(s15, t) {
  let e = [];
  for (let i8 = 0; i8 < t.length; i8++) e.push(s15.get(t[i8]));
  for (let i8 = 0; i8 < e.length; i8++) s15.set(i8, e[i8]);
  s15.length = t.length;
}
function al(s15, t, e) {
  let i8 = [], r6 = s15.map((a, u2) => ri2(s15, u2, t)).reduce((a, u2) => a + u2), n = 0, o2 = 0, l2 = 0;
  for (; l2 < r6; ) {
    if (r6 - l2 < e) {
      i8.push(r6 - l2);
      break;
    }
    n += e;
    let a = ri2(s15, o2, t);
    n > a && (n -= a, o2++);
    let u2 = s15[o2].getWidth(n - 1) === 2;
    u2 && n--;
    let h2 = u2 ? e - 1 : e;
    i8.push(h2), l2 += h2;
  }
  return i8;
}
function ri2(s15, t, e) {
  if (t === s15.length - 1) return s15[t].getTrimmedLength();
  let i8 = !s15[t].hasContent(e - 1) && s15[t].getWidth(e - 1) === 1, r6 = s15[t + 1].getWidth(0) === 2;
  return i8 && r6 ? e - 1 : e;
}
var un2 = class un3 {
  constructor(t) {
    this.line = t;
    this.isDisposed = false;
    this._disposables = [];
    this._id = un3._nextId++;
    this._onDispose = this.register(new v2());
    this.onDispose = this._onDispose.event;
  }
  get id() {
    return this._id;
  }
  dispose() {
    this.isDisposed || (this.isDisposed = true, this.line = -1, this._onDispose.fire(), Ne2(this._disposables), this._disposables.length = 0);
  }
  register(t) {
    return this._disposables.push(t), t;
  }
};
un2._nextId = 1;
var cn3 = un2;
var ne2 = {};
var Je2 = ne2.B;
ne2[0] = { "`": "\u25C6", a: "\u2592", b: "\u2409", c: "\u240C", d: "\u240D", e: "\u240A", f: "\xB0", g: "\xB1", h: "\u2424", i: "\u240B", j: "\u2518", k: "\u2510", l: "\u250C", m: "\u2514", n: "\u253C", o: "\u23BA", p: "\u23BB", q: "\u2500", r: "\u23BC", s: "\u23BD", t: "\u251C", u: "\u2524", v: "\u2534", w: "\u252C", x: "\u2502", y: "\u2264", z: "\u2265", "{": "\u03C0", "|": "\u2260", "}": "\xA3", "~": "\xB7" };
ne2.A = { "#": "\xA3" };
ne2.B = void 0;
ne2[4] = { "#": "\xA3", "@": "\xBE", "[": "ij", "\\": "\xBD", "]": "|", "{": "\xA8", "|": "f", "}": "\xBC", "~": "\xB4" };
ne2.C = ne2[5] = { "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" };
ne2.R = { "#": "\xA3", "@": "\xE0", "[": "\xB0", "\\": "\xE7", "]": "\xA7", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xA8" };
ne2.Q = { "@": "\xE0", "[": "\xE2", "\\": "\xE7", "]": "\xEA", "^": "\xEE", "`": "\xF4", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xFB" };
ne2.K = { "@": "\xA7", "[": "\xC4", "\\": "\xD6", "]": "\xDC", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xDF" };
ne2.Y = { "#": "\xA3", "@": "\xA7", "[": "\xB0", "\\": "\xE7", "]": "\xE9", "`": "\xF9", "{": "\xE0", "|": "\xF2", "}": "\xE8", "~": "\xEC" };
ne2.E = ne2[6] = { "@": "\xC4", "[": "\xC6", "\\": "\xD8", "]": "\xC5", "^": "\xDC", "`": "\xE4", "{": "\xE6", "|": "\xF8", "}": "\xE5", "~": "\xFC" };
ne2.Z = { "#": "\xA3", "@": "\xA7", "[": "\xA1", "\\": "\xD1", "]": "\xBF", "{": "\xB0", "|": "\xF1", "}": "\xE7" };
ne2.H = ne2[7] = { "@": "\xC9", "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" };
ne2["="] = { "#": "\xF9", "@": "\xE0", "[": "\xE9", "\\": "\xE7", "]": "\xEA", "^": "\xEE", _: "\xE8", "`": "\xF4", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xFB" };
var cl = 4294967295;
var $i2 = class {
  constructor(t, e, i8) {
    this._hasScrollback = t;
    this._optionsService = e;
    this._bufferService = i8;
    this.ydisp = 0;
    this.ybase = 0;
    this.y = 0;
    this.x = 0;
    this.tabs = {};
    this.savedY = 0;
    this.savedX = 0;
    this.savedCurAttrData = X5.clone();
    this.savedCharset = Je2;
    this.markers = [];
    this._nullCell = q.fromCharData([0, ir, 1, 0]);
    this._whitespaceCell = q.fromCharData([0, we3, 1, 32]);
    this._isClearing = false;
    this._memoryCleanupQueue = new Jt();
    this._memoryCleanupPosition = 0;
    this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new zi2(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
  }
  getNullCell(t) {
    return t ? (this._nullCell.fg = t.fg, this._nullCell.bg = t.bg, this._nullCell.extended = t.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new rt3()), this._nullCell;
  }
  getWhitespaceCell(t) {
    return t ? (this._whitespaceCell.fg = t.fg, this._whitespaceCell.bg = t.bg, this._whitespaceCell.extended = t.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new rt3()), this._whitespaceCell;
  }
  getBlankLine(t, e) {
    return new Ze3(this._bufferService.cols, this.getNullCell(t), e);
  }
  get hasScrollback() {
    return this._hasScrollback && this.lines.maxLength > this._rows;
  }
  get isCursorInViewport() {
    let e = this.ybase + this.y - this.ydisp;
    return e >= 0 && e < this._rows;
  }
  _getCorrectBufferLength(t) {
    if (!this._hasScrollback) return t;
    let e = t + this._optionsService.rawOptions.scrollback;
    return e > cl ? cl : e;
  }
  fillViewportRows(t) {
    if (this.lines.length === 0) {
      t === void 0 && (t = X5);
      let e = this._rows;
      for (; e--; ) this.lines.push(this.getBlankLine(t));
    }
  }
  clear() {
    this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new zi2(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
  }
  resize(t, e) {
    let i8 = this.getNullCell(X5), r6 = 0, n = this._getCorrectBufferLength(e);
    if (n > this.lines.maxLength && (this.lines.maxLength = n), this.lines.length > 0) {
      if (this._cols < t) for (let l2 = 0; l2 < this.lines.length; l2++) r6 += +this.lines.get(l2).resize(t, i8);
      let o2 = 0;
      if (this._rows < e) for (let l2 = this._rows; l2 < e; l2++) this.lines.length < e + this.ybase && (this._optionsService.rawOptions.windowsMode || this._optionsService.rawOptions.windowsPty.backend !== void 0 || this._optionsService.rawOptions.windowsPty.buildNumber !== void 0 ? this.lines.push(new Ze3(t, i8)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + o2 + 1 ? (this.ybase--, o2++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new Ze3(t, i8)));
      else for (let l2 = this._rows; l2 > e; l2--) this.lines.length > e + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
      if (n < this.lines.maxLength) {
        let l2 = this.lines.length - n;
        l2 > 0 && (this.lines.trimStart(l2), this.ybase = Math.max(this.ybase - l2, 0), this.ydisp = Math.max(this.ydisp - l2, 0), this.savedY = Math.max(this.savedY - l2, 0)), this.lines.maxLength = n;
      }
      this.x = Math.min(this.x, t - 1), this.y = Math.min(this.y, e - 1), o2 && (this.y += o2), this.savedX = Math.min(this.savedX, t - 1), this.scrollTop = 0;
    }
    if (this.scrollBottom = e - 1, this._isReflowEnabled && (this._reflow(t, e), this._cols > t)) for (let o2 = 0; o2 < this.lines.length; o2++) r6 += +this.lines.get(o2).resize(t, i8);
    this._cols = t, this._rows = e, this._memoryCleanupQueue.clear(), r6 > 0.1 * this.lines.length && (this._memoryCleanupPosition = 0, this._memoryCleanupQueue.enqueue(() => this._batchedMemoryCleanup()));
  }
  _batchedMemoryCleanup() {
    let t = true;
    this._memoryCleanupPosition >= this.lines.length && (this._memoryCleanupPosition = 0, t = false);
    let e = 0;
    for (; this._memoryCleanupPosition < this.lines.length; ) if (e += this.lines.get(this._memoryCleanupPosition++).cleanupMemory(), e > 100) return true;
    return t;
  }
  get _isReflowEnabled() {
    let t = this._optionsService.rawOptions.windowsPty;
    return t && t.buildNumber ? this._hasScrollback && t.backend === "conpty" && t.buildNumber >= 21376 : this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
  }
  _reflow(t, e) {
    this._cols !== t && (t > this._cols ? this._reflowLarger(t, e) : this._reflowSmaller(t, e));
  }
  _reflowLarger(t, e) {
    let i8 = this._optionsService.rawOptions.reflowCursorLine, r6 = sl(this.lines, this._cols, t, this.ybase + this.y, this.getNullCell(X5), i8);
    if (r6.length > 0) {
      let n = ol(this.lines, r6);
      ll(this.lines, n.layout), this._reflowLargerAdjustViewport(t, e, n.countRemoved);
    }
  }
  _reflowLargerAdjustViewport(t, e, i8) {
    let r6 = this.getNullCell(X5), n = i8;
    for (; n-- > 0; ) this.ybase === 0 ? (this.y > 0 && this.y--, this.lines.length < e && this.lines.push(new Ze3(t, r6))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
    this.savedY = Math.max(this.savedY - i8, 0);
  }
  _reflowSmaller(t, e) {
    let i8 = this._optionsService.rawOptions.reflowCursorLine, r6 = this.getNullCell(X5), n = [], o2 = 0;
    for (let l2 = this.lines.length - 1; l2 >= 0; l2--) {
      let a = this.lines.get(l2);
      if (!a || !a.isWrapped && a.getTrimmedLength() <= t) continue;
      let u2 = [a];
      for (; a.isWrapped && l2 > 0; ) a = this.lines.get(--l2), u2.unshift(a);
      if (!i8) {
        let I2 = this.ybase + this.y;
        if (I2 >= l2 && I2 < l2 + u2.length) continue;
      }
      let h2 = u2[u2.length - 1].getTrimmedLength(), c = al(u2, this._cols, t), d = c.length - u2.length, _4;
      this.ybase === 0 && this.y !== this.lines.length - 1 ? _4 = Math.max(0, this.y - this.lines.maxLength + d) : _4 = Math.max(0, this.lines.length - this.lines.maxLength + d);
      let p2 = [];
      for (let I2 = 0; I2 < d; I2++) {
        let k5 = this.getBlankLine(X5, true);
        p2.push(k5);
      }
      p2.length > 0 && (n.push({ start: l2 + u2.length + o2, newLines: p2 }), o2 += p2.length), u2.push(...p2);
      let m2 = c.length - 1, f = c[m2];
      f === 0 && (m2--, f = c[m2]);
      let A2 = u2.length - d - 1, R3 = h2;
      for (; A2 >= 0; ) {
        let I2 = Math.min(R3, f);
        if (u2[m2] === void 0) break;
        if (u2[m2].copyCellsFrom(u2[A2], R3 - I2, f - I2, I2, true), f -= I2, f === 0 && (m2--, f = c[m2]), R3 -= I2, R3 === 0) {
          A2--;
          let k5 = Math.max(A2, 0);
          R3 = ri2(u2, k5, this._cols);
        }
      }
      for (let I2 = 0; I2 < u2.length; I2++) c[I2] < t && u2[I2].setCell(c[I2], r6);
      let O3 = d - _4;
      for (; O3-- > 0; ) this.ybase === 0 ? this.y < e - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + o2) - e && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
      this.savedY = Math.min(this.savedY + d, this.ybase + e - 1);
    }
    if (n.length > 0) {
      let l2 = [], a = [];
      for (let f = 0; f < this.lines.length; f++) a.push(this.lines.get(f));
      let u2 = this.lines.length, h2 = u2 - 1, c = 0, d = n[c];
      this.lines.length = Math.min(this.lines.maxLength, this.lines.length + o2);
      let _4 = 0;
      for (let f = Math.min(this.lines.maxLength - 1, u2 + o2 - 1); f >= 0; f--) if (d && d.start > h2 + _4) {
        for (let A2 = d.newLines.length - 1; A2 >= 0; A2--) this.lines.set(f--, d.newLines[A2]);
        f++, l2.push({ index: h2 + 1, amount: d.newLines.length }), _4 += d.newLines.length, d = n[++c];
      } else this.lines.set(f, a[h2--]);
      let p2 = 0;
      for (let f = l2.length - 1; f >= 0; f--) l2[f].index += p2, this.lines.onInsertEmitter.fire(l2[f]), p2 += l2[f].amount;
      let m2 = Math.max(0, u2 + o2 - this.lines.maxLength);
      m2 > 0 && this.lines.onTrimEmitter.fire(m2);
    }
  }
  translateBufferLineToString(t, e, i8 = 0, r6) {
    let n = this.lines.get(t);
    return n ? n.translateToString(e, i8, r6) : "";
  }
  getWrappedRangeForLine(t) {
    let e = t, i8 = t;
    for (; e > 0 && this.lines.get(e).isWrapped; ) e--;
    for (; i8 + 1 < this.lines.length && this.lines.get(i8 + 1).isWrapped; ) i8++;
    return { first: e, last: i8 };
  }
  setupTabStops(t) {
    for (t != null ? this.tabs[t] || (t = this.prevStop(t)) : (this.tabs = {}, t = 0); t < this._cols; t += this._optionsService.rawOptions.tabStopWidth) this.tabs[t] = true;
  }
  prevStop(t) {
    for (t == null && (t = this.x); !this.tabs[--t] && t > 0; ) ;
    return t >= this._cols ? this._cols - 1 : t < 0 ? 0 : t;
  }
  nextStop(t) {
    for (t == null && (t = this.x); !this.tabs[++t] && t < this._cols; ) ;
    return t >= this._cols ? this._cols - 1 : t < 0 ? 0 : t;
  }
  clearMarkers(t) {
    this._isClearing = true;
    for (let e = 0; e < this.markers.length; e++) this.markers[e].line === t && (this.markers[e].dispose(), this.markers.splice(e--, 1));
    this._isClearing = false;
  }
  clearAllMarkers() {
    this._isClearing = true;
    for (let t = 0; t < this.markers.length; t++) this.markers[t].dispose();
    this.markers.length = 0, this._isClearing = false;
  }
  addMarker(t) {
    let e = new cn3(t);
    return this.markers.push(e), e.register(this.lines.onTrim((i8) => {
      e.line -= i8, e.line < 0 && e.dispose();
    })), e.register(this.lines.onInsert((i8) => {
      e.line >= i8.index && (e.line += i8.amount);
    })), e.register(this.lines.onDelete((i8) => {
      e.line >= i8.index && e.line < i8.index + i8.amount && e.dispose(), e.line > i8.index && (e.line -= i8.amount);
    })), e.register(e.onDispose(() => this._removeMarker(e))), e;
  }
  _removeMarker(t) {
    this._isClearing || this.markers.splice(this.markers.indexOf(t), 1);
  }
};
var hn2 = class extends D3 {
  constructor(e, i8) {
    super();
    this._optionsService = e;
    this._bufferService = i8;
    this._onBufferActivate = this._register(new v2());
    this.onBufferActivate = this._onBufferActivate.event;
    this.reset(), this._register(this._optionsService.onSpecificOptionChange("scrollback", () => this.resize(this._bufferService.cols, this._bufferService.rows))), this._register(this._optionsService.onSpecificOptionChange("tabStopWidth", () => this.setupTabStops()));
  }
  reset() {
    this._normal = new $i2(true, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new $i2(false, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }), this.setupTabStops();
  }
  get alt() {
    return this._alt;
  }
  get active() {
    return this._activeBuffer;
  }
  get normal() {
    return this._normal;
  }
  activateNormalBuffer() {
    this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clearAllMarkers(), this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }));
  }
  activateAltBuffer(e) {
    this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({ activeBuffer: this._alt, inactiveBuffer: this._normal }));
  }
  resize(e, i8) {
    this._normal.resize(e, i8), this._alt.resize(e, i8), this.setupTabStops(e);
  }
  setupTabStops(e) {
    this._normal.setupTabStops(e), this._alt.setupTabStops(e);
  }
};
var ks2 = 2;
var Cs = 1;
var ni2 = class extends D3 {
  constructor(e) {
    super();
    this.isUserScrolling = false;
    this._onResize = this._register(new v2());
    this.onResize = this._onResize.event;
    this._onScroll = this._register(new v2());
    this.onScroll = this._onScroll.event;
    this.cols = Math.max(e.rawOptions.cols || 0, ks2), this.rows = Math.max(e.rawOptions.rows || 0, Cs), this.buffers = this._register(new hn2(e, this)), this._register(this.buffers.onBufferActivate((i8) => {
      this._onScroll.fire(i8.activeBuffer.ydisp);
    }));
  }
  get buffer() {
    return this.buffers.active;
  }
  resize(e, i8) {
    let r6 = this.cols !== e, n = this.rows !== i8;
    this.cols = e, this.rows = i8, this.buffers.resize(e, i8), this._onResize.fire({ cols: e, rows: i8, colsChanged: r6, rowsChanged: n });
  }
  reset() {
    this.buffers.reset(), this.isUserScrolling = false;
  }
  scroll(e, i8 = false) {
    let r6 = this.buffer, n;
    n = this._cachedBlankLine, (!n || n.length !== this.cols || n.getFg(0) !== e.fg || n.getBg(0) !== e.bg) && (n = r6.getBlankLine(e, i8), this._cachedBlankLine = n), n.isWrapped = i8;
    let o2 = r6.ybase + r6.scrollTop, l2 = r6.ybase + r6.scrollBottom;
    if (r6.scrollTop === 0) {
      let a = r6.lines.isFull;
      l2 === r6.lines.length - 1 ? a ? r6.lines.recycle().copyFrom(n) : r6.lines.push(n.clone()) : r6.lines.splice(l2 + 1, 0, n.clone()), a ? this.isUserScrolling && (r6.ydisp = Math.max(r6.ydisp - 1, 0)) : (r6.ybase++, this.isUserScrolling || r6.ydisp++);
    } else {
      let a = l2 - o2 + 1;
      r6.lines.shiftElements(o2 + 1, a - 1, -1), r6.lines.set(l2, n.clone());
    }
    this.isUserScrolling || (r6.ydisp = r6.ybase), this._onScroll.fire(r6.ydisp);
  }
  scrollLines(e, i8) {
    let r6 = this.buffer;
    if (e < 0) {
      if (r6.ydisp === 0) return;
      this.isUserScrolling = true;
    } else e + r6.ydisp >= r6.ybase && (this.isUserScrolling = false);
    let n = r6.ydisp;
    r6.ydisp = Math.max(Math.min(r6.ydisp + e, r6.ybase), 0), n !== r6.ydisp && (i8 || this._onScroll.fire(r6.ydisp));
  }
};
ni2 = M3([S(0, H4)], ni2);
var si = { cols: 80, rows: 24, cursorBlink: false, cursorStyle: "block", cursorWidth: 1, cursorInactiveStyle: "outline", customGlyphs: true, drawBoldTextInBrightColors: true, documentOverride: null, fastScrollModifier: "alt", fastScrollSensitivity: 5, fontFamily: "monospace", fontSize: 15, fontWeight: "normal", fontWeightBold: "bold", ignoreBracketedPasteMode: false, lineHeight: 1, letterSpacing: 0, linkHandler: null, logLevel: "info", logger: null, scrollback: 1e3, scrollOnEraseInDisplay: false, scrollOnUserInput: true, scrollSensitivity: 1, screenReaderMode: false, smoothScrollDuration: 0, macOptionIsMeta: false, macOptionClickForcesSelection: false, minimumContrastRatio: 1, disableStdin: false, allowProposedApi: false, allowTransparency: false, tabStopWidth: 8, theme: {}, reflowCursorLine: false, rescaleOverlappingGlyphs: false, rightClickSelectsWord: Zt3, windowOptions: {}, windowsMode: false, windowsPty: {}, wordSeparator: " ()[]{}',\"`", altClickMovesCursor: true, convertEol: false, termName: "xterm", cancelEvents: false, overviewRuler: {} };
var nc = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
var dn2 = class extends D3 {
  constructor(e) {
    super();
    this._onOptionChange = this._register(new v2());
    this.onOptionChange = this._onOptionChange.event;
    let i8 = { ...si };
    for (let r6 in e) if (r6 in i8) try {
      let n = e[r6];
      i8[r6] = this._sanitizeAndValidateOption(r6, n);
    } catch (n) {
      console.error(n);
    }
    this.rawOptions = i8, this.options = { ...i8 }, this._setupOptions(), this._register(C3(() => {
      this.rawOptions.linkHandler = null, this.rawOptions.documentOverride = null;
    }));
  }
  onSpecificOptionChange(e, i8) {
    return this.onOptionChange((r6) => {
      r6 === e && i8(this.rawOptions[e]);
    });
  }
  onMultipleOptionChange(e, i8) {
    return this.onOptionChange((r6) => {
      e.indexOf(r6) !== -1 && i8();
    });
  }
  _setupOptions() {
    let e = (r6) => {
      if (!(r6 in si)) throw new Error(`No option with key "${r6}"`);
      return this.rawOptions[r6];
    }, i8 = (r6, n) => {
      if (!(r6 in si)) throw new Error(`No option with key "${r6}"`);
      n = this._sanitizeAndValidateOption(r6, n), this.rawOptions[r6] !== n && (this.rawOptions[r6] = n, this._onOptionChange.fire(r6));
    };
    for (let r6 in this.rawOptions) {
      let n = { get: e.bind(this, r6), set: i8.bind(this, r6) };
      Object.defineProperty(this.options, r6, n);
    }
  }
  _sanitizeAndValidateOption(e, i8) {
    switch (e) {
      case "cursorStyle":
        if (i8 || (i8 = si[e]), !sc(i8)) throw new Error(`"${i8}" is not a valid value for ${e}`);
        break;
      case "wordSeparator":
        i8 || (i8 = si[e]);
        break;
      case "fontWeight":
      case "fontWeightBold":
        if (typeof i8 == "number" && 1 <= i8 && i8 <= 1e3) break;
        i8 = nc.includes(i8) ? i8 : si[e];
        break;
      case "cursorWidth":
        i8 = Math.floor(i8);
      case "lineHeight":
      case "tabStopWidth":
        if (i8 < 1) throw new Error(`${e} cannot be less than 1, value: ${i8}`);
        break;
      case "minimumContrastRatio":
        i8 = Math.max(1, Math.min(21, Math.round(i8 * 10) / 10));
        break;
      case "scrollback":
        if (i8 = Math.min(i8, 4294967295), i8 < 0) throw new Error(`${e} cannot be less than 0, value: ${i8}`);
        break;
      case "fastScrollSensitivity":
      case "scrollSensitivity":
        if (i8 <= 0) throw new Error(`${e} cannot be less than or equal to 0, value: ${i8}`);
        break;
      case "rows":
      case "cols":
        if (!i8 && i8 !== 0) throw new Error(`${e} must be numeric, value: ${i8}`);
        break;
      case "windowsPty":
        i8 = i8 ?? {};
        break;
    }
    return i8;
  }
};
function sc(s15) {
  return s15 === "block" || s15 === "underline" || s15 === "bar";
}
function oi2(s15, t = 5) {
  if (typeof s15 != "object") return s15;
  let e = Array.isArray(s15) ? [] : {};
  for (let i8 in s15) e[i8] = t <= 1 ? s15[i8] : s15[i8] && oi2(s15[i8], t - 1);
  return e;
}
var ul = Object.freeze({ insertMode: false });
var hl = Object.freeze({ applicationCursorKeys: false, applicationKeypad: false, bracketedPasteMode: false, cursorBlink: void 0, cursorStyle: void 0, origin: false, reverseWraparound: false, sendFocus: false, synchronizedOutput: false, wraparound: true });
var li2 = class extends D3 {
  constructor(e, i8, r6) {
    super();
    this._bufferService = e;
    this._logService = i8;
    this._optionsService = r6;
    this.isCursorInitialized = false;
    this.isCursorHidden = false;
    this._onData = this._register(new v2());
    this.onData = this._onData.event;
    this._onUserInput = this._register(new v2());
    this.onUserInput = this._onUserInput.event;
    this._onBinary = this._register(new v2());
    this.onBinary = this._onBinary.event;
    this._onRequestScrollToBottom = this._register(new v2());
    this.onRequestScrollToBottom = this._onRequestScrollToBottom.event;
    this.modes = oi2(ul), this.decPrivateModes = oi2(hl);
  }
  reset() {
    this.modes = oi2(ul), this.decPrivateModes = oi2(hl);
  }
  triggerDataEvent(e, i8 = false) {
    if (this._optionsService.rawOptions.disableStdin) return;
    let r6 = this._bufferService.buffer;
    i8 && this._optionsService.rawOptions.scrollOnUserInput && r6.ybase !== r6.ydisp && this._onRequestScrollToBottom.fire(), i8 && this._onUserInput.fire(), this._logService.debug(`sending data "${e}"`), this._logService.trace("sending data (codes)", () => e.split("").map((n) => n.charCodeAt(0))), this._onData.fire(e);
  }
  triggerBinaryEvent(e) {
    this._optionsService.rawOptions.disableStdin || (this._logService.debug(`sending binary "${e}"`), this._logService.trace("sending binary (codes)", () => e.split("").map((i8) => i8.charCodeAt(0))), this._onBinary.fire(e));
  }
};
li2 = M3([S(0, F2), S(1, nr2), S(2, H4)], li2);
var dl = { NONE: { events: 0, restrict: () => false }, X10: { events: 1, restrict: (s15) => s15.button === 4 || s15.action !== 1 ? false : (s15.ctrl = false, s15.alt = false, s15.shift = false, true) }, VT200: { events: 19, restrict: (s15) => s15.action !== 32 }, DRAG: { events: 23, restrict: (s15) => !(s15.action === 32 && s15.button === 3) }, ANY: { events: 31, restrict: (s15) => true } };
function Ms2(s15, t) {
  let e = (s15.ctrl ? 16 : 0) | (s15.shift ? 4 : 0) | (s15.alt ? 8 : 0);
  return s15.button === 4 ? (e |= 64, e |= s15.action) : (e |= s15.button & 3, s15.button & 4 && (e |= 64), s15.button & 8 && (e |= 128), s15.action === 32 ? e |= 32 : s15.action === 0 && !t && (e |= 3)), e;
}
var Ps2 = String.fromCharCode;
var fl = { DEFAULT: (s15) => {
  let t = [Ms2(s15, false) + 32, s15.col + 32, s15.row + 32];
  return t[0] > 255 || t[1] > 255 || t[2] > 255 ? "" : `\x1B[M${Ps2(t[0])}${Ps2(t[1])}${Ps2(t[2])}`;
}, SGR: (s15) => {
  let t = s15.action === 0 && s15.button !== 4 ? "m" : "M";
  return `\x1B[<${Ms2(s15, true)};${s15.col};${s15.row}${t}`;
}, SGR_PIXELS: (s15) => {
  let t = s15.action === 0 && s15.button !== 4 ? "m" : "M";
  return `\x1B[<${Ms2(s15, true)};${s15.x};${s15.y}${t}`;
} };
var ai3 = class extends D3 {
  constructor(e, i8, r6) {
    super();
    this._bufferService = e;
    this._coreService = i8;
    this._optionsService = r6;
    this._protocols = {};
    this._encodings = {};
    this._activeProtocol = "";
    this._activeEncoding = "";
    this._lastEvent = null;
    this._wheelPartialScroll = 0;
    this._onProtocolChange = this._register(new v2());
    this.onProtocolChange = this._onProtocolChange.event;
    for (let n of Object.keys(dl)) this.addProtocol(n, dl[n]);
    for (let n of Object.keys(fl)) this.addEncoding(n, fl[n]);
    this.reset();
  }
  addProtocol(e, i8) {
    this._protocols[e] = i8;
  }
  addEncoding(e, i8) {
    this._encodings[e] = i8;
  }
  get activeProtocol() {
    return this._activeProtocol;
  }
  get areMouseEventsActive() {
    return this._protocols[this._activeProtocol].events !== 0;
  }
  set activeProtocol(e) {
    if (!this._protocols[e]) throw new Error(`unknown protocol "${e}"`);
    this._activeProtocol = e, this._onProtocolChange.fire(this._protocols[e].events);
  }
  get activeEncoding() {
    return this._activeEncoding;
  }
  set activeEncoding(e) {
    if (!this._encodings[e]) throw new Error(`unknown encoding "${e}"`);
    this._activeEncoding = e;
  }
  reset() {
    this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null, this._wheelPartialScroll = 0;
  }
  consumeWheelEvent(e, i8, r6) {
    if (e.deltaY === 0 || e.shiftKey || i8 === void 0 || r6 === void 0) return 0;
    let n = i8 / r6, o2 = this._applyScrollModifier(e.deltaY, e);
    return e.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (o2 /= n + 0, Math.abs(e.deltaY) < 50 && (o2 *= 0.3), this._wheelPartialScroll += o2, o2 = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (o2 *= this._bufferService.rows), o2;
  }
  _applyScrollModifier(e, i8) {
    return i8.altKey || i8.ctrlKey || i8.shiftKey ? e * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity : e * this._optionsService.rawOptions.scrollSensitivity;
  }
  triggerMouseEvent(e) {
    if (e.col < 0 || e.col >= this._bufferService.cols || e.row < 0 || e.row >= this._bufferService.rows || e.button === 4 && e.action === 32 || e.button === 3 && e.action !== 32 || e.button !== 4 && (e.action === 2 || e.action === 3) || (e.col++, e.row++, e.action === 32 && this._lastEvent && this._equalEvents(this._lastEvent, e, this._activeEncoding === "SGR_PIXELS")) || !this._protocols[this._activeProtocol].restrict(e)) return false;
    let i8 = this._encodings[this._activeEncoding](e);
    return i8 && (this._activeEncoding === "DEFAULT" ? this._coreService.triggerBinaryEvent(i8) : this._coreService.triggerDataEvent(i8, true)), this._lastEvent = e, true;
  }
  explainEvents(e) {
    return { down: !!(e & 1), up: !!(e & 2), drag: !!(e & 4), move: !!(e & 8), wheel: !!(e & 16) };
  }
  _equalEvents(e, i8, r6) {
    if (r6) {
      if (e.x !== i8.x || e.y !== i8.y) return false;
    } else if (e.col !== i8.col || e.row !== i8.row) return false;
    return !(e.button !== i8.button || e.action !== i8.action || e.ctrl !== i8.ctrl || e.alt !== i8.alt || e.shift !== i8.shift);
  }
};
ai3 = M3([S(0, F2), S(1, ge3), S(2, H4)], ai3);
var Os2 = [[768, 879], [1155, 1158], [1160, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1539], [1552, 1557], [1611, 1630], [1648, 1648], [1750, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2305, 2306], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2388], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2883], [2893, 2893], [2902, 2902], [2946, 2946], [3008, 3008], [3021, 3021], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3393, 3395], [3405, 3405], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3769], [3771, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3984, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4146], [4150, 4151], [4153, 4153], [4184, 4185], [4448, 4607], [4959, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6157], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7616, 7626], [7678, 7679], [8203, 8207], [8234, 8238], [8288, 8291], [8298, 8303], [8400, 8431], [12330, 12335], [12441, 12442], [43014, 43014], [43019, 43019], [43045, 43046], [64286, 64286], [65024, 65039], [65056, 65059], [65279, 65279], [65529, 65531]];
var ac = [[68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [917505, 917505], [917536, 917631], [917760, 917999]];
var se2;
function cc(s15, t) {
  let e = 0, i8 = t.length - 1, r6;
  if (s15 < t[0][0] || s15 > t[i8][1]) return false;
  for (; i8 >= e; ) if (r6 = e + i8 >> 1, s15 > t[r6][1]) e = r6 + 1;
  else if (s15 < t[r6][0]) i8 = r6 - 1;
  else return true;
  return false;
}
var fn2 = class {
  constructor() {
    this.version = "6";
    if (!se2) {
      se2 = new Uint8Array(65536), se2.fill(1), se2[0] = 0, se2.fill(0, 1, 32), se2.fill(0, 127, 160), se2.fill(2, 4352, 4448), se2[9001] = 2, se2[9002] = 2, se2.fill(2, 11904, 42192), se2[12351] = 1, se2.fill(2, 44032, 55204), se2.fill(2, 63744, 64256), se2.fill(2, 65040, 65050), se2.fill(2, 65072, 65136), se2.fill(2, 65280, 65377), se2.fill(2, 65504, 65511);
      for (let t = 0; t < Os2.length; ++t) se2.fill(0, Os2[t][0], Os2[t][1] + 1);
    }
  }
  wcwidth(t) {
    return t < 32 ? 0 : t < 127 ? 1 : t < 65536 ? se2[t] : cc(t, ac) ? 0 : t >= 131072 && t <= 196605 || t >= 196608 && t <= 262141 ? 2 : 1;
  }
  charProperties(t, e) {
    let i8 = this.wcwidth(t), r6 = i8 === 0 && e !== 0;
    if (r6) {
      let n = Ae3.extractWidth(e);
      n === 0 ? r6 = false : n > i8 && (i8 = n);
    }
    return Ae3.createPropertyValue(0, i8, r6);
  }
};
var Ae3 = class s13 {
  constructor() {
    this._providers = /* @__PURE__ */ Object.create(null);
    this._active = "";
    this._onChange = new v2();
    this.onChange = this._onChange.event;
    let t = new fn2();
    this.register(t), this._active = t.version, this._activeProvider = t;
  }
  static extractShouldJoin(t) {
    return (t & 1) !== 0;
  }
  static extractWidth(t) {
    return t >> 1 & 3;
  }
  static extractCharKind(t) {
    return t >> 3;
  }
  static createPropertyValue(t, e, i8 = false) {
    return (t & 16777215) << 3 | (e & 3) << 1 | (i8 ? 1 : 0);
  }
  dispose() {
    this._onChange.dispose();
  }
  get versions() {
    return Object.keys(this._providers);
  }
  get activeVersion() {
    return this._active;
  }
  set activeVersion(t) {
    if (!this._providers[t]) throw new Error(`unknown Unicode version "${t}"`);
    this._active = t, this._activeProvider = this._providers[t], this._onChange.fire(t);
  }
  register(t) {
    this._providers[t.version] = t;
  }
  wcwidth(t) {
    return this._activeProvider.wcwidth(t);
  }
  getStringCellWidth(t) {
    let e = 0, i8 = 0, r6 = t.length;
    for (let n = 0; n < r6; ++n) {
      let o2 = t.charCodeAt(n);
      if (55296 <= o2 && o2 <= 56319) {
        if (++n >= r6) return e + this.wcwidth(o2);
        let u2 = t.charCodeAt(n);
        56320 <= u2 && u2 <= 57343 ? o2 = (o2 - 55296) * 1024 + u2 - 56320 + 65536 : e += this.wcwidth(u2);
      }
      let l2 = this.charProperties(o2, i8), a = s13.extractWidth(l2);
      s13.extractShouldJoin(l2) && (a -= s13.extractWidth(i8)), e += a, i8 = l2;
    }
    return e;
  }
  charProperties(t, e) {
    return this._activeProvider.charProperties(t, e);
  }
};
var pn2 = class {
  constructor() {
    this.glevel = 0;
    this._charsets = [];
  }
  reset() {
    this.charset = void 0, this._charsets = [], this.glevel = 0;
  }
  setgLevel(t) {
    this.glevel = t, this.charset = this._charsets[t];
  }
  setgCharset(t, e) {
    this._charsets[t] = e, this.glevel === t && (this.charset = e);
  }
};
function Bs2(s15) {
  let e = s15.buffer.lines.get(s15.buffer.ybase + s15.buffer.y - 1)?.get(s15.cols - 1), i8 = s15.buffer.lines.get(s15.buffer.ybase + s15.buffer.y);
  i8 && e && (i8.isWrapped = e[3] !== 0 && e[3] !== 32);
}
var Vi2 = 2147483647;
var uc = 256;
var ci2 = class s14 {
  constructor(t = 32, e = 32) {
    this.maxLength = t;
    this.maxSubParamsLength = e;
    if (e > uc) throw new Error("maxSubParamsLength must not be greater than 256");
    this.params = new Int32Array(t), this.length = 0, this._subParams = new Int32Array(e), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(t), this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
  }
  static fromArray(t) {
    let e = new s14();
    if (!t.length) return e;
    for (let i8 = Array.isArray(t[0]) ? 1 : 0; i8 < t.length; ++i8) {
      let r6 = t[i8];
      if (Array.isArray(r6)) for (let n = 0; n < r6.length; ++n) e.addSubParam(r6[n]);
      else e.addParam(r6);
    }
    return e;
  }
  clone() {
    let t = new s14(this.maxLength, this.maxSubParamsLength);
    return t.params.set(this.params), t.length = this.length, t._subParams.set(this._subParams), t._subParamsLength = this._subParamsLength, t._subParamsIdx.set(this._subParamsIdx), t._rejectDigits = this._rejectDigits, t._rejectSubDigits = this._rejectSubDigits, t._digitIsSub = this._digitIsSub, t;
  }
  toArray() {
    let t = [];
    for (let e = 0; e < this.length; ++e) {
      t.push(this.params[e]);
      let i8 = this._subParamsIdx[e] >> 8, r6 = this._subParamsIdx[e] & 255;
      r6 - i8 > 0 && t.push(Array.prototype.slice.call(this._subParams, i8, r6));
    }
    return t;
  }
  reset() {
    this.length = 0, this._subParamsLength = 0, this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
  }
  addParam(t) {
    if (this._digitIsSub = false, this.length >= this.maxLength) {
      this._rejectDigits = true;
      return;
    }
    if (t < -1) throw new Error("values lesser than -1 are not allowed");
    this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = t > Vi2 ? Vi2 : t;
  }
  addSubParam(t) {
    if (this._digitIsSub = true, !!this.length) {
      if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength) {
        this._rejectSubDigits = true;
        return;
      }
      if (t < -1) throw new Error("values lesser than -1 are not allowed");
      this._subParams[this._subParamsLength++] = t > Vi2 ? Vi2 : t, this._subParamsIdx[this.length - 1]++;
    }
  }
  hasSubParams(t) {
    return (this._subParamsIdx[t] & 255) - (this._subParamsIdx[t] >> 8) > 0;
  }
  getSubParams(t) {
    let e = this._subParamsIdx[t] >> 8, i8 = this._subParamsIdx[t] & 255;
    return i8 - e > 0 ? this._subParams.subarray(e, i8) : null;
  }
  getSubParamsAll() {
    let t = {};
    for (let e = 0; e < this.length; ++e) {
      let i8 = this._subParamsIdx[e] >> 8, r6 = this._subParamsIdx[e] & 255;
      r6 - i8 > 0 && (t[e] = this._subParams.slice(i8, r6));
    }
    return t;
  }
  addDigit(t) {
    let e;
    if (this._rejectDigits || !(e = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits) return;
    let i8 = this._digitIsSub ? this._subParams : this.params, r6 = i8[e - 1];
    i8[e - 1] = ~r6 ? Math.min(r6 * 10 + t, Vi2) : t;
  }
};
var qi = [];
var mn2 = class {
  constructor() {
    this._state = 0;
    this._active = qi;
    this._id = -1;
    this._handlers = /* @__PURE__ */ Object.create(null);
    this._handlerFb = () => {
    };
    this._stack = { paused: false, loopPosition: 0, fallThrough: false };
  }
  registerHandler(t, e) {
    this._handlers[t] === void 0 && (this._handlers[t] = []);
    let i8 = this._handlers[t];
    return i8.push(e), { dispose: () => {
      let r6 = i8.indexOf(e);
      r6 !== -1 && i8.splice(r6, 1);
    } };
  }
  clearHandler(t) {
    this._handlers[t] && delete this._handlers[t];
  }
  setHandlerFallback(t) {
    this._handlerFb = t;
  }
  dispose() {
    this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
    }, this._active = qi;
  }
  reset() {
    if (this._state === 2) for (let t = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; t >= 0; --t) this._active[t].end(false);
    this._stack.paused = false, this._active = qi, this._id = -1, this._state = 0;
  }
  _start() {
    if (this._active = this._handlers[this._id] || qi, !this._active.length) this._handlerFb(this._id, "START");
    else for (let t = this._active.length - 1; t >= 0; t--) this._active[t].start();
  }
  _put(t, e, i8) {
    if (!this._active.length) this._handlerFb(this._id, "PUT", It2(t, e, i8));
    else for (let r6 = this._active.length - 1; r6 >= 0; r6--) this._active[r6].put(t, e, i8);
  }
  start() {
    this.reset(), this._state = 1;
  }
  put(t, e, i8) {
    if (this._state !== 3) {
      if (this._state === 1) for (; e < i8; ) {
        let r6 = t[e++];
        if (r6 === 59) {
          this._state = 2, this._start();
          break;
        }
        if (r6 < 48 || 57 < r6) {
          this._state = 3;
          return;
        }
        this._id === -1 && (this._id = 0), this._id = this._id * 10 + r6 - 48;
      }
      this._state === 2 && i8 - e > 0 && this._put(t, e, i8);
    }
  }
  end(t, e = true) {
    if (this._state !== 0) {
      if (this._state !== 3) if (this._state === 1 && this._start(), !this._active.length) this._handlerFb(this._id, "END", t);
      else {
        let i8 = false, r6 = this._active.length - 1, n = false;
        if (this._stack.paused && (r6 = this._stack.loopPosition - 1, i8 = e, n = this._stack.fallThrough, this._stack.paused = false), !n && i8 === false) {
          for (; r6 >= 0 && (i8 = this._active[r6].end(t), i8 !== true); r6--) if (i8 instanceof Promise) return this._stack.paused = true, this._stack.loopPosition = r6, this._stack.fallThrough = false, i8;
          r6--;
        }
        for (; r6 >= 0; r6--) if (i8 = this._active[r6].end(false), i8 instanceof Promise) return this._stack.paused = true, this._stack.loopPosition = r6, this._stack.fallThrough = true, i8;
      }
      this._active = qi, this._id = -1, this._state = 0;
    }
  }
};
var pe4 = class {
  constructor(t) {
    this._handler = t;
    this._data = "";
    this._hitLimit = false;
  }
  start() {
    this._data = "", this._hitLimit = false;
  }
  put(t, e, i8) {
    this._hitLimit || (this._data += It2(t, e, i8), this._data.length > 1e7 && (this._data = "", this._hitLimit = true));
  }
  end(t) {
    let e = false;
    if (this._hitLimit) e = false;
    else if (t && (e = this._handler(this._data), e instanceof Promise)) return e.then((i8) => (this._data = "", this._hitLimit = false, i8));
    return this._data = "", this._hitLimit = false, e;
  }
};
var Yi2 = [];
var _n2 = class {
  constructor() {
    this._handlers = /* @__PURE__ */ Object.create(null);
    this._active = Yi2;
    this._ident = 0;
    this._handlerFb = () => {
    };
    this._stack = { paused: false, loopPosition: 0, fallThrough: false };
  }
  dispose() {
    this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
    }, this._active = Yi2;
  }
  registerHandler(t, e) {
    this._handlers[t] === void 0 && (this._handlers[t] = []);
    let i8 = this._handlers[t];
    return i8.push(e), { dispose: () => {
      let r6 = i8.indexOf(e);
      r6 !== -1 && i8.splice(r6, 1);
    } };
  }
  clearHandler(t) {
    this._handlers[t] && delete this._handlers[t];
  }
  setHandlerFallback(t) {
    this._handlerFb = t;
  }
  reset() {
    if (this._active.length) for (let t = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; t >= 0; --t) this._active[t].unhook(false);
    this._stack.paused = false, this._active = Yi2, this._ident = 0;
  }
  hook(t, e) {
    if (this.reset(), this._ident = t, this._active = this._handlers[t] || Yi2, !this._active.length) this._handlerFb(this._ident, "HOOK", e);
    else for (let i8 = this._active.length - 1; i8 >= 0; i8--) this._active[i8].hook(e);
  }
  put(t, e, i8) {
    if (!this._active.length) this._handlerFb(this._ident, "PUT", It2(t, e, i8));
    else for (let r6 = this._active.length - 1; r6 >= 0; r6--) this._active[r6].put(t, e, i8);
  }
  unhook(t, e = true) {
    if (!this._active.length) this._handlerFb(this._ident, "UNHOOK", t);
    else {
      let i8 = false, r6 = this._active.length - 1, n = false;
      if (this._stack.paused && (r6 = this._stack.loopPosition - 1, i8 = e, n = this._stack.fallThrough, this._stack.paused = false), !n && i8 === false) {
        for (; r6 >= 0 && (i8 = this._active[r6].unhook(t), i8 !== true); r6--) if (i8 instanceof Promise) return this._stack.paused = true, this._stack.loopPosition = r6, this._stack.fallThrough = false, i8;
        r6--;
      }
      for (; r6 >= 0; r6--) if (i8 = this._active[r6].unhook(false), i8 instanceof Promise) return this._stack.paused = true, this._stack.loopPosition = r6, this._stack.fallThrough = true, i8;
    }
    this._active = Yi2, this._ident = 0;
  }
};
var ji = new ci2();
ji.addParam(0);
var Xi = class {
  constructor(t) {
    this._handler = t;
    this._data = "";
    this._params = ji;
    this._hitLimit = false;
  }
  hook(t) {
    this._params = t.length > 1 || t.params[0] ? t.clone() : ji, this._data = "", this._hitLimit = false;
  }
  put(t, e, i8) {
    this._hitLimit || (this._data += It2(t, e, i8), this._data.length > 1e7 && (this._data = "", this._hitLimit = true));
  }
  unhook(t) {
    let e = false;
    if (this._hitLimit) e = false;
    else if (t && (e = this._handler(this._data, this._params), e instanceof Promise)) return e.then((i8) => (this._params = ji, this._data = "", this._hitLimit = false, i8));
    return this._params = ji, this._data = "", this._hitLimit = false, e;
  }
};
var Fs2 = class {
  constructor(t) {
    this.table = new Uint8Array(t);
  }
  setDefault(t, e) {
    this.table.fill(t << 4 | e);
  }
  add(t, e, i8, r6) {
    this.table[e << 8 | t] = i8 << 4 | r6;
  }
  addMany(t, e, i8, r6) {
    for (let n = 0; n < t.length; n++) this.table[e << 8 | t[n]] = i8 << 4 | r6;
  }
};
var ke5 = 160;
var hc = (function() {
  let s15 = new Fs2(4095), e = Array.apply(null, Array(256)).map((a, u2) => u2), i8 = (a, u2) => e.slice(a, u2), r6 = i8(32, 127), n = i8(0, 24);
  n.push(25), n.push.apply(n, i8(28, 32));
  let o2 = i8(0, 14), l2;
  s15.setDefault(1, 0), s15.addMany(r6, 0, 2, 0);
  for (l2 in o2) s15.addMany([24, 26, 153, 154], l2, 3, 0), s15.addMany(i8(128, 144), l2, 3, 0), s15.addMany(i8(144, 152), l2, 3, 0), s15.add(156, l2, 0, 0), s15.add(27, l2, 11, 1), s15.add(157, l2, 4, 8), s15.addMany([152, 158, 159], l2, 0, 7), s15.add(155, l2, 11, 3), s15.add(144, l2, 11, 9);
  return s15.addMany(n, 0, 3, 0), s15.addMany(n, 1, 3, 1), s15.add(127, 1, 0, 1), s15.addMany(n, 8, 0, 8), s15.addMany(n, 3, 3, 3), s15.add(127, 3, 0, 3), s15.addMany(n, 4, 3, 4), s15.add(127, 4, 0, 4), s15.addMany(n, 6, 3, 6), s15.addMany(n, 5, 3, 5), s15.add(127, 5, 0, 5), s15.addMany(n, 2, 3, 2), s15.add(127, 2, 0, 2), s15.add(93, 1, 4, 8), s15.addMany(r6, 8, 5, 8), s15.add(127, 8, 5, 8), s15.addMany([156, 27, 24, 26, 7], 8, 6, 0), s15.addMany(i8(28, 32), 8, 0, 8), s15.addMany([88, 94, 95], 1, 0, 7), s15.addMany(r6, 7, 0, 7), s15.addMany(n, 7, 0, 7), s15.add(156, 7, 0, 0), s15.add(127, 7, 0, 7), s15.add(91, 1, 11, 3), s15.addMany(i8(64, 127), 3, 7, 0), s15.addMany(i8(48, 60), 3, 8, 4), s15.addMany([60, 61, 62, 63], 3, 9, 4), s15.addMany(i8(48, 60), 4, 8, 4), s15.addMany(i8(64, 127), 4, 7, 0), s15.addMany([60, 61, 62, 63], 4, 0, 6), s15.addMany(i8(32, 64), 6, 0, 6), s15.add(127, 6, 0, 6), s15.addMany(i8(64, 127), 6, 0, 0), s15.addMany(i8(32, 48), 3, 9, 5), s15.addMany(i8(32, 48), 5, 9, 5), s15.addMany(i8(48, 64), 5, 0, 6), s15.addMany(i8(64, 127), 5, 7, 0), s15.addMany(i8(32, 48), 4, 9, 5), s15.addMany(i8(32, 48), 1, 9, 2), s15.addMany(i8(32, 48), 2, 9, 2), s15.addMany(i8(48, 127), 2, 10, 0), s15.addMany(i8(48, 80), 1, 10, 0), s15.addMany(i8(81, 88), 1, 10, 0), s15.addMany([89, 90, 92], 1, 10, 0), s15.addMany(i8(96, 127), 1, 10, 0), s15.add(80, 1, 11, 9), s15.addMany(n, 9, 0, 9), s15.add(127, 9, 0, 9), s15.addMany(i8(28, 32), 9, 0, 9), s15.addMany(i8(32, 48), 9, 9, 12), s15.addMany(i8(48, 60), 9, 8, 10), s15.addMany([60, 61, 62, 63], 9, 9, 10), s15.addMany(n, 11, 0, 11), s15.addMany(i8(32, 128), 11, 0, 11), s15.addMany(i8(28, 32), 11, 0, 11), s15.addMany(n, 10, 0, 10), s15.add(127, 10, 0, 10), s15.addMany(i8(28, 32), 10, 0, 10), s15.addMany(i8(48, 60), 10, 8, 10), s15.addMany([60, 61, 62, 63], 10, 0, 11), s15.addMany(i8(32, 48), 10, 9, 12), s15.addMany(n, 12, 0, 12), s15.add(127, 12, 0, 12), s15.addMany(i8(28, 32), 12, 0, 12), s15.addMany(i8(32, 48), 12, 9, 12), s15.addMany(i8(48, 64), 12, 0, 11), s15.addMany(i8(64, 127), 12, 12, 13), s15.addMany(i8(64, 127), 10, 12, 13), s15.addMany(i8(64, 127), 9, 12, 13), s15.addMany(n, 13, 13, 13), s15.addMany(r6, 13, 13, 13), s15.add(127, 13, 0, 13), s15.addMany([27, 156, 24, 26], 13, 14, 0), s15.add(ke5, 0, 2, 0), s15.add(ke5, 8, 5, 8), s15.add(ke5, 6, 0, 6), s15.add(ke5, 11, 0, 11), s15.add(ke5, 13, 13, 13), s15;
})();
var bn2 = class extends D3 {
  constructor(e = hc) {
    super();
    this._transitions = e;
    this._parseStack = { state: 0, handlers: [], handlerPos: 0, transition: 0, chunkPos: 0 };
    this.initialState = 0, this.currentState = this.initialState, this._params = new ci2(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, this._printHandlerFb = (i8, r6, n) => {
    }, this._executeHandlerFb = (i8) => {
    }, this._csiHandlerFb = (i8, r6) => {
    }, this._escHandlerFb = (i8) => {
    }, this._errorHandlerFb = (i8) => i8, this._printHandler = this._printHandlerFb, this._executeHandlers = /* @__PURE__ */ Object.create(null), this._csiHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null), this._register(C3(() => {
      this._csiHandlers = /* @__PURE__ */ Object.create(null), this._executeHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null);
    })), this._oscParser = this._register(new mn2()), this._dcsParser = this._register(new _n2()), this._errorHandler = this._errorHandlerFb, this.registerEscHandler({ final: "\\" }, () => true);
  }
  _identifier(e, i8 = [64, 126]) {
    let r6 = 0;
    if (e.prefix) {
      if (e.prefix.length > 1) throw new Error("only one byte as prefix supported");
      if (r6 = e.prefix.charCodeAt(0), r6 && 60 > r6 || r6 > 63) throw new Error("prefix must be in range 0x3c .. 0x3f");
    }
    if (e.intermediates) {
      if (e.intermediates.length > 2) throw new Error("only two bytes as intermediates are supported");
      for (let o2 = 0; o2 < e.intermediates.length; ++o2) {
        let l2 = e.intermediates.charCodeAt(o2);
        if (32 > l2 || l2 > 47) throw new Error("intermediate must be in range 0x20 .. 0x2f");
        r6 <<= 8, r6 |= l2;
      }
    }
    if (e.final.length !== 1) throw new Error("final must be a single byte");
    let n = e.final.charCodeAt(0);
    if (i8[0] > n || n > i8[1]) throw new Error(`final must be in range ${i8[0]} .. ${i8[1]}`);
    return r6 <<= 8, r6 |= n, r6;
  }
  identToString(e) {
    let i8 = [];
    for (; e; ) i8.push(String.fromCharCode(e & 255)), e >>= 8;
    return i8.reverse().join("");
  }
  setPrintHandler(e) {
    this._printHandler = e;
  }
  clearPrintHandler() {
    this._printHandler = this._printHandlerFb;
  }
  registerEscHandler(e, i8) {
    let r6 = this._identifier(e, [48, 126]);
    this._escHandlers[r6] === void 0 && (this._escHandlers[r6] = []);
    let n = this._escHandlers[r6];
    return n.push(i8), { dispose: () => {
      let o2 = n.indexOf(i8);
      o2 !== -1 && n.splice(o2, 1);
    } };
  }
  clearEscHandler(e) {
    this._escHandlers[this._identifier(e, [48, 126])] && delete this._escHandlers[this._identifier(e, [48, 126])];
  }
  setEscHandlerFallback(e) {
    this._escHandlerFb = e;
  }
  setExecuteHandler(e, i8) {
    this._executeHandlers[e.charCodeAt(0)] = i8;
  }
  clearExecuteHandler(e) {
    this._executeHandlers[e.charCodeAt(0)] && delete this._executeHandlers[e.charCodeAt(0)];
  }
  setExecuteHandlerFallback(e) {
    this._executeHandlerFb = e;
  }
  registerCsiHandler(e, i8) {
    let r6 = this._identifier(e);
    this._csiHandlers[r6] === void 0 && (this._csiHandlers[r6] = []);
    let n = this._csiHandlers[r6];
    return n.push(i8), { dispose: () => {
      let o2 = n.indexOf(i8);
      o2 !== -1 && n.splice(o2, 1);
    } };
  }
  clearCsiHandler(e) {
    this._csiHandlers[this._identifier(e)] && delete this._csiHandlers[this._identifier(e)];
  }
  setCsiHandlerFallback(e) {
    this._csiHandlerFb = e;
  }
  registerDcsHandler(e, i8) {
    return this._dcsParser.registerHandler(this._identifier(e), i8);
  }
  clearDcsHandler(e) {
    this._dcsParser.clearHandler(this._identifier(e));
  }
  setDcsHandlerFallback(e) {
    this._dcsParser.setHandlerFallback(e);
  }
  registerOscHandler(e, i8) {
    return this._oscParser.registerHandler(e, i8);
  }
  clearOscHandler(e) {
    this._oscParser.clearHandler(e);
  }
  setOscHandlerFallback(e) {
    this._oscParser.setHandlerFallback(e);
  }
  setErrorHandler(e) {
    this._errorHandler = e;
  }
  clearErrorHandler() {
    this._errorHandler = this._errorHandlerFb;
  }
  reset() {
    this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, this._parseStack.state !== 0 && (this._parseStack.state = 2, this._parseStack.handlers = []);
  }
  _preserveStack(e, i8, r6, n, o2) {
    this._parseStack.state = e, this._parseStack.handlers = i8, this._parseStack.handlerPos = r6, this._parseStack.transition = n, this._parseStack.chunkPos = o2;
  }
  parse(e, i8, r6) {
    let n = 0, o2 = 0, l2 = 0, a;
    if (this._parseStack.state) if (this._parseStack.state === 2) this._parseStack.state = 0, l2 = this._parseStack.chunkPos + 1;
    else {
      if (r6 === void 0 || this._parseStack.state === 1) throw this._parseStack.state = 1, new Error("improper continuation due to previous async handler, giving up parsing");
      let u2 = this._parseStack.handlers, h2 = this._parseStack.handlerPos - 1;
      switch (this._parseStack.state) {
        case 3:
          if (r6 === false && h2 > -1) {
            for (; h2 >= 0 && (a = u2[h2](this._params), a !== true); h2--) if (a instanceof Promise) return this._parseStack.handlerPos = h2, a;
          }
          this._parseStack.handlers = [];
          break;
        case 4:
          if (r6 === false && h2 > -1) {
            for (; h2 >= 0 && (a = u2[h2](), a !== true); h2--) if (a instanceof Promise) return this._parseStack.handlerPos = h2, a;
          }
          this._parseStack.handlers = [];
          break;
        case 6:
          if (n = e[this._parseStack.chunkPos], a = this._dcsParser.unhook(n !== 24 && n !== 26, r6), a) return a;
          n === 27 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
          break;
        case 5:
          if (n = e[this._parseStack.chunkPos], a = this._oscParser.end(n !== 24 && n !== 26, r6), a) return a;
          n === 27 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
          break;
      }
      this._parseStack.state = 0, l2 = this._parseStack.chunkPos + 1, this.precedingJoinState = 0, this.currentState = this._parseStack.transition & 15;
    }
    for (let u2 = l2; u2 < i8; ++u2) {
      switch (n = e[u2], o2 = this._transitions.table[this.currentState << 8 | (n < 160 ? n : ke5)], o2 >> 4) {
        case 2:
          for (let m2 = u2 + 1; ; ++m2) {
            if (m2 >= i8 || (n = e[m2]) < 32 || n > 126 && n < ke5) {
              this._printHandler(e, u2, m2), u2 = m2 - 1;
              break;
            }
            if (++m2 >= i8 || (n = e[m2]) < 32 || n > 126 && n < ke5) {
              this._printHandler(e, u2, m2), u2 = m2 - 1;
              break;
            }
            if (++m2 >= i8 || (n = e[m2]) < 32 || n > 126 && n < ke5) {
              this._printHandler(e, u2, m2), u2 = m2 - 1;
              break;
            }
            if (++m2 >= i8 || (n = e[m2]) < 32 || n > 126 && n < ke5) {
              this._printHandler(e, u2, m2), u2 = m2 - 1;
              break;
            }
          }
          break;
        case 3:
          this._executeHandlers[n] ? this._executeHandlers[n]() : this._executeHandlerFb(n), this.precedingJoinState = 0;
          break;
        case 0:
          break;
        case 1:
          if (this._errorHandler({ position: u2, code: n, currentState: this.currentState, collect: this._collect, params: this._params, abort: false }).abort) return;
          break;
        case 7:
          let c = this._csiHandlers[this._collect << 8 | n], d = c ? c.length - 1 : -1;
          for (; d >= 0 && (a = c[d](this._params), a !== true); d--) if (a instanceof Promise) return this._preserveStack(3, c, d, o2, u2), a;
          d < 0 && this._csiHandlerFb(this._collect << 8 | n, this._params), this.precedingJoinState = 0;
          break;
        case 8:
          do
            switch (n) {
              case 59:
                this._params.addParam(0);
                break;
              case 58:
                this._params.addSubParam(-1);
                break;
              default:
                this._params.addDigit(n - 48);
            }
          while (++u2 < i8 && (n = e[u2]) > 47 && n < 60);
          u2--;
          break;
        case 9:
          this._collect <<= 8, this._collect |= n;
          break;
        case 10:
          let _4 = this._escHandlers[this._collect << 8 | n], p2 = _4 ? _4.length - 1 : -1;
          for (; p2 >= 0 && (a = _4[p2](), a !== true); p2--) if (a instanceof Promise) return this._preserveStack(4, _4, p2, o2, u2), a;
          p2 < 0 && this._escHandlerFb(this._collect << 8 | n), this.precedingJoinState = 0;
          break;
        case 11:
          this._params.reset(), this._params.addParam(0), this._collect = 0;
          break;
        case 12:
          this._dcsParser.hook(this._collect << 8 | n, this._params);
          break;
        case 13:
          for (let m2 = u2 + 1; ; ++m2) if (m2 >= i8 || (n = e[m2]) === 24 || n === 26 || n === 27 || n > 127 && n < ke5) {
            this._dcsParser.put(e, u2, m2), u2 = m2 - 1;
            break;
          }
          break;
        case 14:
          if (a = this._dcsParser.unhook(n !== 24 && n !== 26), a) return this._preserveStack(6, [], 0, o2, u2), a;
          n === 27 && (o2 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
          break;
        case 4:
          this._oscParser.start();
          break;
        case 5:
          for (let m2 = u2 + 1; ; m2++) if (m2 >= i8 || (n = e[m2]) < 32 || n > 127 && n < ke5) {
            this._oscParser.put(e, u2, m2), u2 = m2 - 1;
            break;
          }
          break;
        case 6:
          if (a = this._oscParser.end(n !== 24 && n !== 26), a) return this._preserveStack(5, [], 0, o2, u2), a;
          n === 27 && (o2 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
          break;
      }
      this.currentState = o2 & 15;
    }
  }
};
var dc = /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/;
var fc = /^[\da-f]+$/;
function Ws2(s15) {
  if (!s15) return;
  let t = s15.toLowerCase();
  if (t.indexOf("rgb:") === 0) {
    t = t.slice(4);
    let e = dc.exec(t);
    if (e) {
      let i8 = e[1] ? 15 : e[4] ? 255 : e[7] ? 4095 : 65535;
      return [Math.round(parseInt(e[1] || e[4] || e[7] || e[10], 16) / i8 * 255), Math.round(parseInt(e[2] || e[5] || e[8] || e[11], 16) / i8 * 255), Math.round(parseInt(e[3] || e[6] || e[9] || e[12], 16) / i8 * 255)];
    }
  } else if (t.indexOf("#") === 0 && (t = t.slice(1), fc.exec(t) && [3, 6, 9, 12].includes(t.length))) {
    let e = t.length / 3, i8 = [0, 0, 0];
    for (let r6 = 0; r6 < 3; ++r6) {
      let n = parseInt(t.slice(e * r6, e * r6 + e), 16);
      i8[r6] = e === 1 ? n << 4 : e === 2 ? n : e === 3 ? n >> 4 : n >> 8;
    }
    return i8;
  }
}
function Hs2(s15, t) {
  let e = s15.toString(16), i8 = e.length < 2 ? "0" + e : e;
  switch (t) {
    case 4:
      return e[0];
    case 8:
      return i8;
    case 12:
      return (i8 + i8).slice(0, 3);
    default:
      return i8 + i8;
  }
}
function ml(s15, t = 16) {
  let [e, i8, r6] = s15;
  return `rgb:${Hs2(e, t)}/${Hs2(i8, t)}/${Hs2(r6, t)}`;
}
var mc = { "(": 0, ")": 1, "*": 2, "+": 3, "-": 1, ".": 2 };
var ut2 = 131072;
var _l = 10;
function bl(s15, t) {
  if (s15 > 24) return t.setWinLines || false;
  switch (s15) {
    case 1:
      return !!t.restoreWin;
    case 2:
      return !!t.minimizeWin;
    case 3:
      return !!t.setWinPosition;
    case 4:
      return !!t.setWinSizePixels;
    case 5:
      return !!t.raiseWin;
    case 6:
      return !!t.lowerWin;
    case 7:
      return !!t.refreshWin;
    case 8:
      return !!t.setWinSizeChars;
    case 9:
      return !!t.maximizeWin;
    case 10:
      return !!t.fullscreenWin;
    case 11:
      return !!t.getWinState;
    case 13:
      return !!t.getWinPosition;
    case 14:
      return !!t.getWinSizePixels;
    case 15:
      return !!t.getScreenSizePixels;
    case 16:
      return !!t.getCellSizePixels;
    case 18:
      return !!t.getWinSizeChars;
    case 19:
      return !!t.getScreenSizeChars;
    case 20:
      return !!t.getIconTitle;
    case 21:
      return !!t.getWinTitle;
    case 22:
      return !!t.pushTitle;
    case 23:
      return !!t.popTitle;
    case 24:
      return !!t.setWinLines;
  }
  return false;
}
var vl = 5e3;
var gl = 0;
var vn = class extends D3 {
  constructor(e, i8, r6, n, o2, l2, a, u2, h2 = new bn2()) {
    super();
    this._bufferService = e;
    this._charsetService = i8;
    this._coreService = r6;
    this._logService = n;
    this._optionsService = o2;
    this._oscLinkService = l2;
    this._coreMouseService = a;
    this._unicodeService = u2;
    this._parser = h2;
    this._parseBuffer = new Uint32Array(4096);
    this._stringDecoder = new er2();
    this._utf8Decoder = new tr2();
    this._windowTitle = "";
    this._iconName = "";
    this._windowTitleStack = [];
    this._iconNameStack = [];
    this._curAttrData = X5.clone();
    this._eraseAttrDataInternal = X5.clone();
    this._onRequestBell = this._register(new v2());
    this.onRequestBell = this._onRequestBell.event;
    this._onRequestRefreshRows = this._register(new v2());
    this.onRequestRefreshRows = this._onRequestRefreshRows.event;
    this._onRequestReset = this._register(new v2());
    this.onRequestReset = this._onRequestReset.event;
    this._onRequestSendFocus = this._register(new v2());
    this.onRequestSendFocus = this._onRequestSendFocus.event;
    this._onRequestSyncScrollBar = this._register(new v2());
    this.onRequestSyncScrollBar = this._onRequestSyncScrollBar.event;
    this._onRequestWindowsOptionsReport = this._register(new v2());
    this.onRequestWindowsOptionsReport = this._onRequestWindowsOptionsReport.event;
    this._onA11yChar = this._register(new v2());
    this.onA11yChar = this._onA11yChar.event;
    this._onA11yTab = this._register(new v2());
    this.onA11yTab = this._onA11yTab.event;
    this._onCursorMove = this._register(new v2());
    this.onCursorMove = this._onCursorMove.event;
    this._onLineFeed = this._register(new v2());
    this.onLineFeed = this._onLineFeed.event;
    this._onScroll = this._register(new v2());
    this.onScroll = this._onScroll.event;
    this._onTitleChange = this._register(new v2());
    this.onTitleChange = this._onTitleChange.event;
    this._onColor = this._register(new v2());
    this.onColor = this._onColor.event;
    this._parseStack = { paused: false, cursorStartX: 0, cursorStartY: 0, decodedLength: 0, position: 0 };
    this._specialColors = [256, 257, 258];
    this._register(this._parser), this._dirtyRowTracker = new Zi(this._bufferService), this._activeBuffer = this._bufferService.buffer, this._register(this._bufferService.buffers.onBufferActivate((c) => this._activeBuffer = c.activeBuffer)), this._parser.setCsiHandlerFallback((c, d) => {
      this._logService.debug("Unknown CSI code: ", { identifier: this._parser.identToString(c), params: d.toArray() });
    }), this._parser.setEscHandlerFallback((c) => {
      this._logService.debug("Unknown ESC code: ", { identifier: this._parser.identToString(c) });
    }), this._parser.setExecuteHandlerFallback((c) => {
      this._logService.debug("Unknown EXECUTE code: ", { code: c });
    }), this._parser.setOscHandlerFallback((c, d, _4) => {
      this._logService.debug("Unknown OSC code: ", { identifier: c, action: d, data: _4 });
    }), this._parser.setDcsHandlerFallback((c, d, _4) => {
      d === "HOOK" && (_4 = _4.toArray()), this._logService.debug("Unknown DCS code: ", { identifier: this._parser.identToString(c), action: d, payload: _4 });
    }), this._parser.setPrintHandler((c, d, _4) => this.print(c, d, _4)), this._parser.registerCsiHandler({ final: "@" }, (c) => this.insertChars(c)), this._parser.registerCsiHandler({ intermediates: " ", final: "@" }, (c) => this.scrollLeft(c)), this._parser.registerCsiHandler({ final: "A" }, (c) => this.cursorUp(c)), this._parser.registerCsiHandler({ intermediates: " ", final: "A" }, (c) => this.scrollRight(c)), this._parser.registerCsiHandler({ final: "B" }, (c) => this.cursorDown(c)), this._parser.registerCsiHandler({ final: "C" }, (c) => this.cursorForward(c)), this._parser.registerCsiHandler({ final: "D" }, (c) => this.cursorBackward(c)), this._parser.registerCsiHandler({ final: "E" }, (c) => this.cursorNextLine(c)), this._parser.registerCsiHandler({ final: "F" }, (c) => this.cursorPrecedingLine(c)), this._parser.registerCsiHandler({ final: "G" }, (c) => this.cursorCharAbsolute(c)), this._parser.registerCsiHandler({ final: "H" }, (c) => this.cursorPosition(c)), this._parser.registerCsiHandler({ final: "I" }, (c) => this.cursorForwardTab(c)), this._parser.registerCsiHandler({ final: "J" }, (c) => this.eraseInDisplay(c, false)), this._parser.registerCsiHandler({ prefix: "?", final: "J" }, (c) => this.eraseInDisplay(c, true)), this._parser.registerCsiHandler({ final: "K" }, (c) => this.eraseInLine(c, false)), this._parser.registerCsiHandler({ prefix: "?", final: "K" }, (c) => this.eraseInLine(c, true)), this._parser.registerCsiHandler({ final: "L" }, (c) => this.insertLines(c)), this._parser.registerCsiHandler({ final: "M" }, (c) => this.deleteLines(c)), this._parser.registerCsiHandler({ final: "P" }, (c) => this.deleteChars(c)), this._parser.registerCsiHandler({ final: "S" }, (c) => this.scrollUp(c)), this._parser.registerCsiHandler({ final: "T" }, (c) => this.scrollDown(c)), this._parser.registerCsiHandler({ final: "X" }, (c) => this.eraseChars(c)), this._parser.registerCsiHandler({ final: "Z" }, (c) => this.cursorBackwardTab(c)), this._parser.registerCsiHandler({ final: "`" }, (c) => this.charPosAbsolute(c)), this._parser.registerCsiHandler({ final: "a" }, (c) => this.hPositionRelative(c)), this._parser.registerCsiHandler({ final: "b" }, (c) => this.repeatPrecedingCharacter(c)), this._parser.registerCsiHandler({ final: "c" }, (c) => this.sendDeviceAttributesPrimary(c)), this._parser.registerCsiHandler({ prefix: ">", final: "c" }, (c) => this.sendDeviceAttributesSecondary(c)), this._parser.registerCsiHandler({ final: "d" }, (c) => this.linePosAbsolute(c)), this._parser.registerCsiHandler({ final: "e" }, (c) => this.vPositionRelative(c)), this._parser.registerCsiHandler({ final: "f" }, (c) => this.hVPosition(c)), this._parser.registerCsiHandler({ final: "g" }, (c) => this.tabClear(c)), this._parser.registerCsiHandler({ final: "h" }, (c) => this.setMode(c)), this._parser.registerCsiHandler({ prefix: "?", final: "h" }, (c) => this.setModePrivate(c)), this._parser.registerCsiHandler({ final: "l" }, (c) => this.resetMode(c)), this._parser.registerCsiHandler({ prefix: "?", final: "l" }, (c) => this.resetModePrivate(c)), this._parser.registerCsiHandler({ final: "m" }, (c) => this.charAttributes(c)), this._parser.registerCsiHandler({ final: "n" }, (c) => this.deviceStatus(c)), this._parser.registerCsiHandler({ prefix: "?", final: "n" }, (c) => this.deviceStatusPrivate(c)), this._parser.registerCsiHandler({ intermediates: "!", final: "p" }, (c) => this.softReset(c)), this._parser.registerCsiHandler({ intermediates: " ", final: "q" }, (c) => this.setCursorStyle(c)), this._parser.registerCsiHandler({ final: "r" }, (c) => this.setScrollRegion(c)), this._parser.registerCsiHandler({ final: "s" }, (c) => this.saveCursor(c)), this._parser.registerCsiHandler({ final: "t" }, (c) => this.windowOptions(c)), this._parser.registerCsiHandler({ final: "u" }, (c) => this.restoreCursor(c)), this._parser.registerCsiHandler({ intermediates: "'", final: "}" }, (c) => this.insertColumns(c)), this._parser.registerCsiHandler({ intermediates: "'", final: "~" }, (c) => this.deleteColumns(c)), this._parser.registerCsiHandler({ intermediates: '"', final: "q" }, (c) => this.selectProtected(c)), this._parser.registerCsiHandler({ intermediates: "$", final: "p" }, (c) => this.requestMode(c, true)), this._parser.registerCsiHandler({ prefix: "?", intermediates: "$", final: "p" }, (c) => this.requestMode(c, false)), this._parser.setExecuteHandler(b.BEL, () => this.bell()), this._parser.setExecuteHandler(b.LF, () => this.lineFeed()), this._parser.setExecuteHandler(b.VT, () => this.lineFeed()), this._parser.setExecuteHandler(b.FF, () => this.lineFeed()), this._parser.setExecuteHandler(b.CR, () => this.carriageReturn()), this._parser.setExecuteHandler(b.BS, () => this.backspace()), this._parser.setExecuteHandler(b.HT, () => this.tab()), this._parser.setExecuteHandler(b.SO, () => this.shiftOut()), this._parser.setExecuteHandler(b.SI, () => this.shiftIn()), this._parser.setExecuteHandler(Ai2.IND, () => this.index()), this._parser.setExecuteHandler(Ai2.NEL, () => this.nextLine()), this._parser.setExecuteHandler(Ai2.HTS, () => this.tabSet()), this._parser.registerOscHandler(0, new pe4((c) => (this.setTitle(c), this.setIconName(c), true))), this._parser.registerOscHandler(1, new pe4((c) => this.setIconName(c))), this._parser.registerOscHandler(2, new pe4((c) => this.setTitle(c))), this._parser.registerOscHandler(4, new pe4((c) => this.setOrReportIndexedColor(c))), this._parser.registerOscHandler(8, new pe4((c) => this.setHyperlink(c))), this._parser.registerOscHandler(10, new pe4((c) => this.setOrReportFgColor(c))), this._parser.registerOscHandler(11, new pe4((c) => this.setOrReportBgColor(c))), this._parser.registerOscHandler(12, new pe4((c) => this.setOrReportCursorColor(c))), this._parser.registerOscHandler(104, new pe4((c) => this.restoreIndexedColor(c))), this._parser.registerOscHandler(110, new pe4((c) => this.restoreFgColor(c))), this._parser.registerOscHandler(111, new pe4((c) => this.restoreBgColor(c))), this._parser.registerOscHandler(112, new pe4((c) => this.restoreCursorColor(c))), this._parser.registerEscHandler({ final: "7" }, () => this.saveCursor()), this._parser.registerEscHandler({ final: "8" }, () => this.restoreCursor()), this._parser.registerEscHandler({ final: "D" }, () => this.index()), this._parser.registerEscHandler({ final: "E" }, () => this.nextLine()), this._parser.registerEscHandler({ final: "H" }, () => this.tabSet()), this._parser.registerEscHandler({ final: "M" }, () => this.reverseIndex()), this._parser.registerEscHandler({ final: "=" }, () => this.keypadApplicationMode()), this._parser.registerEscHandler({ final: ">" }, () => this.keypadNumericMode()), this._parser.registerEscHandler({ final: "c" }, () => this.fullReset()), this._parser.registerEscHandler({ final: "n" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "o" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "|" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "}" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "~" }, () => this.setgLevel(1)), this._parser.registerEscHandler({ intermediates: "%", final: "@" }, () => this.selectDefaultCharset()), this._parser.registerEscHandler({ intermediates: "%", final: "G" }, () => this.selectDefaultCharset());
    for (let c in ne2) this._parser.registerEscHandler({ intermediates: "(", final: c }, () => this.selectCharset("(" + c)), this._parser.registerEscHandler({ intermediates: ")", final: c }, () => this.selectCharset(")" + c)), this._parser.registerEscHandler({ intermediates: "*", final: c }, () => this.selectCharset("*" + c)), this._parser.registerEscHandler({ intermediates: "+", final: c }, () => this.selectCharset("+" + c)), this._parser.registerEscHandler({ intermediates: "-", final: c }, () => this.selectCharset("-" + c)), this._parser.registerEscHandler({ intermediates: ".", final: c }, () => this.selectCharset("." + c)), this._parser.registerEscHandler({ intermediates: "/", final: c }, () => this.selectCharset("/" + c));
    this._parser.registerEscHandler({ intermediates: "#", final: "8" }, () => this.screenAlignmentPattern()), this._parser.setErrorHandler((c) => (this._logService.error("Parsing error: ", c), c)), this._parser.registerDcsHandler({ intermediates: "$", final: "q" }, new Xi((c, d) => this.requestStatusString(c, d)));
  }
  getAttrData() {
    return this._curAttrData;
  }
  _preserveStack(e, i8, r6, n) {
    this._parseStack.paused = true, this._parseStack.cursorStartX = e, this._parseStack.cursorStartY = i8, this._parseStack.decodedLength = r6, this._parseStack.position = n;
  }
  _logSlowResolvingAsync(e) {
    this._logService.logLevel <= 3 && Promise.race([e, new Promise((i8, r6) => setTimeout(() => r6("#SLOW_TIMEOUT"), vl))]).catch((i8) => {
      if (i8 !== "#SLOW_TIMEOUT") throw i8;
      console.warn(`async parser handler taking longer than ${vl} ms`);
    });
  }
  _getCurrentLinkId() {
    return this._curAttrData.extended.urlId;
  }
  parse(e, i8) {
    let r6, n = this._activeBuffer.x, o2 = this._activeBuffer.y, l2 = 0, a = this._parseStack.paused;
    if (a) {
      if (r6 = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, i8)) return this._logSlowResolvingAsync(r6), r6;
      n = this._parseStack.cursorStartX, o2 = this._parseStack.cursorStartY, this._parseStack.paused = false, e.length > ut2 && (l2 = this._parseStack.position + ut2);
    }
    if (this._logService.logLevel <= 1 && this._logService.debug(`parsing data ${typeof e == "string" ? ` "${e}"` : ` "${Array.prototype.map.call(e, (c) => String.fromCharCode(c)).join("")}"`}`), this._logService.logLevel === 0 && this._logService.trace("parsing data (codes)", typeof e == "string" ? e.split("").map((c) => c.charCodeAt(0)) : e), this._parseBuffer.length < e.length && this._parseBuffer.length < ut2 && (this._parseBuffer = new Uint32Array(Math.min(e.length, ut2))), a || this._dirtyRowTracker.clearRange(), e.length > ut2) for (let c = l2; c < e.length; c += ut2) {
      let d = c + ut2 < e.length ? c + ut2 : e.length, _4 = typeof e == "string" ? this._stringDecoder.decode(e.substring(c, d), this._parseBuffer) : this._utf8Decoder.decode(e.subarray(c, d), this._parseBuffer);
      if (r6 = this._parser.parse(this._parseBuffer, _4)) return this._preserveStack(n, o2, _4, c), this._logSlowResolvingAsync(r6), r6;
    }
    else if (!a) {
      let c = typeof e == "string" ? this._stringDecoder.decode(e, this._parseBuffer) : this._utf8Decoder.decode(e, this._parseBuffer);
      if (r6 = this._parser.parse(this._parseBuffer, c)) return this._preserveStack(n, o2, c, 0), this._logSlowResolvingAsync(r6), r6;
    }
    (this._activeBuffer.x !== n || this._activeBuffer.y !== o2) && this._onCursorMove.fire();
    let u2 = this._dirtyRowTracker.end + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp), h2 = this._dirtyRowTracker.start + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
    h2 < this._bufferService.rows && this._onRequestRefreshRows.fire({ start: Math.min(h2, this._bufferService.rows - 1), end: Math.min(u2, this._bufferService.rows - 1) });
  }
  print(e, i8, r6) {
    let n, o2, l2 = this._charsetService.charset, a = this._optionsService.rawOptions.screenReaderMode, u2 = this._bufferService.cols, h2 = this._coreService.decPrivateModes.wraparound, c = this._coreService.modes.insertMode, d = this._curAttrData, _4 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
    this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._activeBuffer.x && r6 - i8 > 0 && _4.getWidth(this._activeBuffer.x - 1) === 2 && _4.setCellFromCodepoint(this._activeBuffer.x - 1, 0, 1, d);
    let p2 = this._parser.precedingJoinState;
    for (let m2 = i8; m2 < r6; ++m2) {
      if (n = e[m2], n < 127 && l2) {
        let O3 = l2[String.fromCharCode(n)];
        O3 && (n = O3.charCodeAt(0));
      }
      let f = this._unicodeService.charProperties(n, p2);
      o2 = Ae3.extractWidth(f);
      let A2 = Ae3.extractShouldJoin(f), R3 = A2 ? Ae3.extractWidth(p2) : 0;
      if (p2 = f, a && this._onA11yChar.fire(Ce3(n)), this._getCurrentLinkId() && this._oscLinkService.addLineToLink(this._getCurrentLinkId(), this._activeBuffer.ybase + this._activeBuffer.y), this._activeBuffer.x + o2 - R3 > u2) {
        if (h2) {
          let O3 = _4, I2 = this._activeBuffer.x - R3;
          for (this._activeBuffer.x = R3, this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), true)) : (this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = true), _4 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y), R3 > 0 && _4 instanceof Ze3 && _4.copyCellsFrom(O3, I2, 0, R3, false); I2 < u2; ) O3.setCellFromCodepoint(I2++, 0, 1, d);
        } else if (this._activeBuffer.x = u2 - 1, o2 === 2) continue;
      }
      if (A2 && this._activeBuffer.x) {
        let O3 = _4.getWidth(this._activeBuffer.x - 1) ? 1 : 2;
        _4.addCodepointToCell(this._activeBuffer.x - O3, n, o2);
        for (let I2 = o2 - R3; --I2 >= 0; ) _4.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, d);
        continue;
      }
      if (c && (_4.insertCells(this._activeBuffer.x, o2 - R3, this._activeBuffer.getNullCell(d)), _4.getWidth(u2 - 1) === 2 && _4.setCellFromCodepoint(u2 - 1, 0, 1, d)), _4.setCellFromCodepoint(this._activeBuffer.x++, n, o2, d), o2 > 0) for (; --o2; ) _4.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, d);
    }
    this._parser.precedingJoinState = p2, this._activeBuffer.x < u2 && r6 - i8 > 0 && _4.getWidth(this._activeBuffer.x) === 0 && !_4.hasContent(this._activeBuffer.x) && _4.setCellFromCodepoint(this._activeBuffer.x, 0, 1, d), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
  }
  registerCsiHandler(e, i8) {
    return e.final === "t" && !e.prefix && !e.intermediates ? this._parser.registerCsiHandler(e, (r6) => bl(r6.params[0], this._optionsService.rawOptions.windowOptions) ? i8(r6) : true) : this._parser.registerCsiHandler(e, i8);
  }
  registerDcsHandler(e, i8) {
    return this._parser.registerDcsHandler(e, new Xi(i8));
  }
  registerEscHandler(e, i8) {
    return this._parser.registerEscHandler(e, i8);
  }
  registerOscHandler(e, i8) {
    return this._parser.registerOscHandler(e, new pe4(i8));
  }
  bell() {
    return this._onRequestBell.fire(), true;
  }
  lineFeed() {
    return this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._optionsService.rawOptions.convertEol && (this._activeBuffer.x = 0), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows ? this._activeBuffer.y = this._bufferService.rows - 1 : this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--, this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._onLineFeed.fire(), true;
  }
  carriageReturn() {
    return this._activeBuffer.x = 0, true;
  }
  backspace() {
    if (!this._coreService.decPrivateModes.reverseWraparound) return this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, true;
    if (this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0) this._activeBuffer.x--;
    else if (this._activeBuffer.x === 0 && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)?.isWrapped) {
      this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.y--, this._activeBuffer.x = this._bufferService.cols - 1;
      let e = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
      e.hasWidth(this._activeBuffer.x) && !e.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
    }
    return this._restrictCursor(), true;
  }
  tab() {
    if (this._activeBuffer.x >= this._bufferService.cols) return true;
    let e = this._activeBuffer.x;
    return this._activeBuffer.x = this._activeBuffer.nextStop(), this._optionsService.rawOptions.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - e), true;
  }
  shiftOut() {
    return this._charsetService.setgLevel(1), true;
  }
  shiftIn() {
    return this._charsetService.setgLevel(0), true;
  }
  _restrictCursor(e = this._bufferService.cols - 1) {
    this._activeBuffer.x = Math.min(e, Math.max(0, this._activeBuffer.x)), this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y)), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
  }
  _setCursor(e, i8) {
    this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._coreService.decPrivateModes.origin ? (this._activeBuffer.x = e, this._activeBuffer.y = this._activeBuffer.scrollTop + i8) : (this._activeBuffer.x = e, this._activeBuffer.y = i8), this._restrictCursor(), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
  }
  _moveCursor(e, i8) {
    this._restrictCursor(), this._setCursor(this._activeBuffer.x + e, this._activeBuffer.y + i8);
  }
  cursorUp(e) {
    let i8 = this._activeBuffer.y - this._activeBuffer.scrollTop;
    return i8 >= 0 ? this._moveCursor(0, -Math.min(i8, e.params[0] || 1)) : this._moveCursor(0, -(e.params[0] || 1)), true;
  }
  cursorDown(e) {
    let i8 = this._activeBuffer.scrollBottom - this._activeBuffer.y;
    return i8 >= 0 ? this._moveCursor(0, Math.min(i8, e.params[0] || 1)) : this._moveCursor(0, e.params[0] || 1), true;
  }
  cursorForward(e) {
    return this._moveCursor(e.params[0] || 1, 0), true;
  }
  cursorBackward(e) {
    return this._moveCursor(-(e.params[0] || 1), 0), true;
  }
  cursorNextLine(e) {
    return this.cursorDown(e), this._activeBuffer.x = 0, true;
  }
  cursorPrecedingLine(e) {
    return this.cursorUp(e), this._activeBuffer.x = 0, true;
  }
  cursorCharAbsolute(e) {
    return this._setCursor((e.params[0] || 1) - 1, this._activeBuffer.y), true;
  }
  cursorPosition(e) {
    return this._setCursor(e.length >= 2 ? (e.params[1] || 1) - 1 : 0, (e.params[0] || 1) - 1), true;
  }
  charPosAbsolute(e) {
    return this._setCursor((e.params[0] || 1) - 1, this._activeBuffer.y), true;
  }
  hPositionRelative(e) {
    return this._moveCursor(e.params[0] || 1, 0), true;
  }
  linePosAbsolute(e) {
    return this._setCursor(this._activeBuffer.x, (e.params[0] || 1) - 1), true;
  }
  vPositionRelative(e) {
    return this._moveCursor(0, e.params[0] || 1), true;
  }
  hVPosition(e) {
    return this.cursorPosition(e), true;
  }
  tabClear(e) {
    let i8 = e.params[0];
    return i8 === 0 ? delete this._activeBuffer.tabs[this._activeBuffer.x] : i8 === 3 && (this._activeBuffer.tabs = {}), true;
  }
  cursorForwardTab(e) {
    if (this._activeBuffer.x >= this._bufferService.cols) return true;
    let i8 = e.params[0] || 1;
    for (; i8--; ) this._activeBuffer.x = this._activeBuffer.nextStop();
    return true;
  }
  cursorBackwardTab(e) {
    if (this._activeBuffer.x >= this._bufferService.cols) return true;
    let i8 = e.params[0] || 1;
    for (; i8--; ) this._activeBuffer.x = this._activeBuffer.prevStop();
    return true;
  }
  selectProtected(e) {
    let i8 = e.params[0];
    return i8 === 1 && (this._curAttrData.bg |= 536870912), (i8 === 2 || i8 === 0) && (this._curAttrData.bg &= -536870913), true;
  }
  _eraseInBufferLine(e, i8, r6, n = false, o2 = false) {
    let l2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
    l2.replaceCells(i8, r6, this._activeBuffer.getNullCell(this._eraseAttrData()), o2), n && (l2.isWrapped = false);
  }
  _resetBufferLine(e, i8 = false) {
    let r6 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
    r6 && (r6.fill(this._activeBuffer.getNullCell(this._eraseAttrData()), i8), this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + e), r6.isWrapped = false);
  }
  eraseInDisplay(e, i8 = false) {
    this._restrictCursor(this._bufferService.cols);
    let r6;
    switch (e.params[0]) {
      case 0:
        for (r6 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(r6), this._eraseInBufferLine(r6++, this._activeBuffer.x, this._bufferService.cols, this._activeBuffer.x === 0, i8); r6 < this._bufferService.rows; r6++) this._resetBufferLine(r6, i8);
        this._dirtyRowTracker.markDirty(r6);
        break;
      case 1:
        for (r6 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(r6), this._eraseInBufferLine(r6, 0, this._activeBuffer.x + 1, true, i8), this._activeBuffer.x + 1 >= this._bufferService.cols && (this._activeBuffer.lines.get(r6 + 1).isWrapped = false); r6--; ) this._resetBufferLine(r6, i8);
        this._dirtyRowTracker.markDirty(0);
        break;
      case 2:
        if (this._optionsService.rawOptions.scrollOnEraseInDisplay) {
          for (r6 = this._bufferService.rows, this._dirtyRowTracker.markRangeDirty(0, r6 - 1); r6-- && !this._activeBuffer.lines.get(this._activeBuffer.ybase + r6)?.getTrimmedLength(); ) ;
          for (; r6 >= 0; r6--) this._bufferService.scroll(this._eraseAttrData());
        } else {
          for (r6 = this._bufferService.rows, this._dirtyRowTracker.markDirty(r6 - 1); r6--; ) this._resetBufferLine(r6, i8);
          this._dirtyRowTracker.markDirty(0);
        }
        break;
      case 3:
        let n = this._activeBuffer.lines.length - this._bufferService.rows;
        n > 0 && (this._activeBuffer.lines.trimStart(n), this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - n, 0), this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - n, 0), this._onScroll.fire(0));
        break;
    }
    return true;
  }
  eraseInLine(e, i8 = false) {
    switch (this._restrictCursor(this._bufferService.cols), e.params[0]) {
      case 0:
        this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, this._activeBuffer.x === 0, i8);
        break;
      case 1:
        this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, false, i8);
        break;
      case 2:
        this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, true, i8);
        break;
    }
    return this._dirtyRowTracker.markDirty(this._activeBuffer.y), true;
  }
  insertLines(e) {
    this._restrictCursor();
    let i8 = e.params[0] || 1;
    if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return true;
    let r6 = this._activeBuffer.ybase + this._activeBuffer.y, n = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, o2 = this._bufferService.rows - 1 + this._activeBuffer.ybase - n + 1;
    for (; i8--; ) this._activeBuffer.lines.splice(o2 - 1, 1), this._activeBuffer.lines.splice(r6, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
  }
  deleteLines(e) {
    this._restrictCursor();
    let i8 = e.params[0] || 1;
    if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return true;
    let r6 = this._activeBuffer.ybase + this._activeBuffer.y, n;
    for (n = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, n = this._bufferService.rows - 1 + this._activeBuffer.ybase - n; i8--; ) this._activeBuffer.lines.splice(r6, 1), this._activeBuffer.lines.splice(n, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
  }
  insertChars(e) {
    this._restrictCursor();
    let i8 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
    return i8 && (i8.insertCells(this._activeBuffer.x, e.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
  }
  deleteChars(e) {
    this._restrictCursor();
    let i8 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
    return i8 && (i8.deleteCells(this._activeBuffer.x, e.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
  }
  scrollUp(e) {
    let i8 = e.params[0] || 1;
    for (; i8--; ) this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
  }
  scrollDown(e) {
    let i8 = e.params[0] || 1;
    for (; i8--; ) this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(X5));
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
  }
  scrollLeft(e) {
    if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return true;
    let i8 = e.params[0] || 1;
    for (let r6 = this._activeBuffer.scrollTop; r6 <= this._activeBuffer.scrollBottom; ++r6) {
      let n = this._activeBuffer.lines.get(this._activeBuffer.ybase + r6);
      n.deleteCells(0, i8, this._activeBuffer.getNullCell(this._eraseAttrData())), n.isWrapped = false;
    }
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
  }
  scrollRight(e) {
    if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return true;
    let i8 = e.params[0] || 1;
    for (let r6 = this._activeBuffer.scrollTop; r6 <= this._activeBuffer.scrollBottom; ++r6) {
      let n = this._activeBuffer.lines.get(this._activeBuffer.ybase + r6);
      n.insertCells(0, i8, this._activeBuffer.getNullCell(this._eraseAttrData())), n.isWrapped = false;
    }
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
  }
  insertColumns(e) {
    if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return true;
    let i8 = e.params[0] || 1;
    for (let r6 = this._activeBuffer.scrollTop; r6 <= this._activeBuffer.scrollBottom; ++r6) {
      let n = this._activeBuffer.lines.get(this._activeBuffer.ybase + r6);
      n.insertCells(this._activeBuffer.x, i8, this._activeBuffer.getNullCell(this._eraseAttrData())), n.isWrapped = false;
    }
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
  }
  deleteColumns(e) {
    if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return true;
    let i8 = e.params[0] || 1;
    for (let r6 = this._activeBuffer.scrollTop; r6 <= this._activeBuffer.scrollBottom; ++r6) {
      let n = this._activeBuffer.lines.get(this._activeBuffer.ybase + r6);
      n.deleteCells(this._activeBuffer.x, i8, this._activeBuffer.getNullCell(this._eraseAttrData())), n.isWrapped = false;
    }
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
  }
  eraseChars(e) {
    this._restrictCursor();
    let i8 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
    return i8 && (i8.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (e.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
  }
  repeatPrecedingCharacter(e) {
    let i8 = this._parser.precedingJoinState;
    if (!i8) return true;
    let r6 = e.params[0] || 1, n = Ae3.extractWidth(i8), o2 = this._activeBuffer.x - n, a = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).getString(o2), u2 = new Uint32Array(a.length * r6), h2 = 0;
    for (let d = 0; d < a.length; ) {
      let _4 = a.codePointAt(d) || 0;
      u2[h2++] = _4, d += _4 > 65535 ? 2 : 1;
    }
    let c = h2;
    for (let d = 1; d < r6; ++d) u2.copyWithin(c, 0, h2), c += h2;
    return this.print(u2, 0, c), true;
  }
  sendDeviceAttributesPrimary(e) {
    return e.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(b.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(b.ESC + "[?6c")), true;
  }
  sendDeviceAttributesSecondary(e) {
    return e.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(b.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(b.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(b.ESC + "[>83;40003;0c")), true;
  }
  _is(e) {
    return (this._optionsService.rawOptions.termName + "").indexOf(e) === 0;
  }
  setMode(e) {
    for (let i8 = 0; i8 < e.length; i8++) switch (e.params[i8]) {
      case 4:
        this._coreService.modes.insertMode = true;
        break;
      case 20:
        this._optionsService.options.convertEol = true;
        break;
    }
    return true;
  }
  setModePrivate(e) {
    for (let i8 = 0; i8 < e.length; i8++) switch (e.params[i8]) {
      case 1:
        this._coreService.decPrivateModes.applicationCursorKeys = true;
        break;
      case 2:
        this._charsetService.setgCharset(0, Je2), this._charsetService.setgCharset(1, Je2), this._charsetService.setgCharset(2, Je2), this._charsetService.setgCharset(3, Je2);
        break;
      case 3:
        this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
        break;
      case 6:
        this._coreService.decPrivateModes.origin = true, this._setCursor(0, 0);
        break;
      case 7:
        this._coreService.decPrivateModes.wraparound = true;
        break;
      case 12:
        this._optionsService.options.cursorBlink = true;
        break;
      case 45:
        this._coreService.decPrivateModes.reverseWraparound = true;
        break;
      case 66:
        this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire();
        break;
      case 9:
        this._coreMouseService.activeProtocol = "X10";
        break;
      case 1e3:
        this._coreMouseService.activeProtocol = "VT200";
        break;
      case 1002:
        this._coreMouseService.activeProtocol = "DRAG";
        break;
      case 1003:
        this._coreMouseService.activeProtocol = "ANY";
        break;
      case 1004:
        this._coreService.decPrivateModes.sendFocus = true, this._onRequestSendFocus.fire();
        break;
      case 1005:
        this._logService.debug("DECSET 1005 not supported (see #2507)");
        break;
      case 1006:
        this._coreMouseService.activeEncoding = "SGR";
        break;
      case 1015:
        this._logService.debug("DECSET 1015 not supported (see #2507)");
        break;
      case 1016:
        this._coreMouseService.activeEncoding = "SGR_PIXELS";
        break;
      case 25:
        this._coreService.isCursorHidden = false;
        break;
      case 1048:
        this.saveCursor();
        break;
      case 1049:
        this.saveCursor();
      case 47:
      case 1047:
        this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(void 0), this._onRequestSyncScrollBar.fire();
        break;
      case 2004:
        this._coreService.decPrivateModes.bracketedPasteMode = true;
        break;
      case 2026:
        this._coreService.decPrivateModes.synchronizedOutput = true;
        break;
    }
    return true;
  }
  resetMode(e) {
    for (let i8 = 0; i8 < e.length; i8++) switch (e.params[i8]) {
      case 4:
        this._coreService.modes.insertMode = false;
        break;
      case 20:
        this._optionsService.options.convertEol = false;
        break;
    }
    return true;
  }
  resetModePrivate(e) {
    for (let i8 = 0; i8 < e.length; i8++) switch (e.params[i8]) {
      case 1:
        this._coreService.decPrivateModes.applicationCursorKeys = false;
        break;
      case 3:
        this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
        break;
      case 6:
        this._coreService.decPrivateModes.origin = false, this._setCursor(0, 0);
        break;
      case 7:
        this._coreService.decPrivateModes.wraparound = false;
        break;
      case 12:
        this._optionsService.options.cursorBlink = false;
        break;
      case 45:
        this._coreService.decPrivateModes.reverseWraparound = false;
        break;
      case 66:
        this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire();
        break;
      case 9:
      case 1e3:
      case 1002:
      case 1003:
        this._coreMouseService.activeProtocol = "NONE";
        break;
      case 1004:
        this._coreService.decPrivateModes.sendFocus = false;
        break;
      case 1005:
        this._logService.debug("DECRST 1005 not supported (see #2507)");
        break;
      case 1006:
        this._coreMouseService.activeEncoding = "DEFAULT";
        break;
      case 1015:
        this._logService.debug("DECRST 1015 not supported (see #2507)");
        break;
      case 1016:
        this._coreMouseService.activeEncoding = "DEFAULT";
        break;
      case 25:
        this._coreService.isCursorHidden = true;
        break;
      case 1048:
        this.restoreCursor();
        break;
      case 1049:
      case 47:
      case 1047:
        this._bufferService.buffers.activateNormalBuffer(), e.params[i8] === 1049 && this.restoreCursor(), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(void 0), this._onRequestSyncScrollBar.fire();
        break;
      case 2004:
        this._coreService.decPrivateModes.bracketedPasteMode = false;
        break;
      case 2026:
        this._coreService.decPrivateModes.synchronizedOutput = false, this._onRequestRefreshRows.fire(void 0);
        break;
    }
    return true;
  }
  requestMode(e, i8) {
    let r6;
    ((P4) => (P4[P4.NOT_RECOGNIZED = 0] = "NOT_RECOGNIZED", P4[P4.SET = 1] = "SET", P4[P4.RESET = 2] = "RESET", P4[P4.PERMANENTLY_SET = 3] = "PERMANENTLY_SET", P4[P4.PERMANENTLY_RESET = 4] = "PERMANENTLY_RESET"))(r6 ||= {});
    let n = this._coreService.decPrivateModes, { activeProtocol: o2, activeEncoding: l2 } = this._coreMouseService, a = this._coreService, { buffers: u2, cols: h2 } = this._bufferService, { active: c, alt: d } = u2, _4 = this._optionsService.rawOptions, p2 = (A2, R3) => (a.triggerDataEvent(`${b.ESC}[${i8 ? "" : "?"}${A2};${R3}$y`), true), m2 = (A2) => A2 ? 1 : 2, f = e.params[0];
    return i8 ? f === 2 ? p2(f, 4) : f === 4 ? p2(f, m2(a.modes.insertMode)) : f === 12 ? p2(f, 3) : f === 20 ? p2(f, m2(_4.convertEol)) : p2(f, 0) : f === 1 ? p2(f, m2(n.applicationCursorKeys)) : f === 3 ? p2(f, _4.windowOptions.setWinLines ? h2 === 80 ? 2 : h2 === 132 ? 1 : 0 : 0) : f === 6 ? p2(f, m2(n.origin)) : f === 7 ? p2(f, m2(n.wraparound)) : f === 8 ? p2(f, 3) : f === 9 ? p2(f, m2(o2 === "X10")) : f === 12 ? p2(f, m2(_4.cursorBlink)) : f === 25 ? p2(f, m2(!a.isCursorHidden)) : f === 45 ? p2(f, m2(n.reverseWraparound)) : f === 66 ? p2(f, m2(n.applicationKeypad)) : f === 67 ? p2(f, 4) : f === 1e3 ? p2(f, m2(o2 === "VT200")) : f === 1002 ? p2(f, m2(o2 === "DRAG")) : f === 1003 ? p2(f, m2(o2 === "ANY")) : f === 1004 ? p2(f, m2(n.sendFocus)) : f === 1005 ? p2(f, 4) : f === 1006 ? p2(f, m2(l2 === "SGR")) : f === 1015 ? p2(f, 4) : f === 1016 ? p2(f, m2(l2 === "SGR_PIXELS")) : f === 1048 ? p2(f, 1) : f === 47 || f === 1047 || f === 1049 ? p2(f, m2(c === d)) : f === 2004 ? p2(f, m2(n.bracketedPasteMode)) : f === 2026 ? p2(f, m2(n.synchronizedOutput)) : p2(f, 0);
  }
  _updateAttrColor(e, i8, r6, n, o2) {
    return i8 === 2 ? (e |= 50331648, e &= -16777216, e |= De4.fromColorRGB([r6, n, o2])) : i8 === 5 && (e &= -50331904, e |= 33554432 | r6 & 255), e;
  }
  _extractColor(e, i8, r6) {
    let n = [0, 0, -1, 0, 0, 0], o2 = 0, l2 = 0;
    do {
      if (n[l2 + o2] = e.params[i8 + l2], e.hasSubParams(i8 + l2)) {
        let a = e.getSubParams(i8 + l2), u2 = 0;
        do
          n[1] === 5 && (o2 = 1), n[l2 + u2 + 1 + o2] = a[u2];
        while (++u2 < a.length && u2 + l2 + 1 + o2 < n.length);
        break;
      }
      if (n[1] === 5 && l2 + o2 >= 2 || n[1] === 2 && l2 + o2 >= 5) break;
      n[1] && (o2 = 1);
    } while (++l2 + i8 < e.length && l2 + o2 < n.length);
    for (let a = 2; a < n.length; ++a) n[a] === -1 && (n[a] = 0);
    switch (n[0]) {
      case 38:
        r6.fg = this._updateAttrColor(r6.fg, n[1], n[3], n[4], n[5]);
        break;
      case 48:
        r6.bg = this._updateAttrColor(r6.bg, n[1], n[3], n[4], n[5]);
        break;
      case 58:
        r6.extended = r6.extended.clone(), r6.extended.underlineColor = this._updateAttrColor(r6.extended.underlineColor, n[1], n[3], n[4], n[5]);
    }
    return l2;
  }
  _processUnderline(e, i8) {
    i8.extended = i8.extended.clone(), (!~e || e > 5) && (e = 1), i8.extended.underlineStyle = e, i8.fg |= 268435456, e === 0 && (i8.fg &= -268435457), i8.updateExtended();
  }
  _processSGR0(e) {
    e.fg = X5.fg, e.bg = X5.bg, e.extended = e.extended.clone(), e.extended.underlineStyle = 0, e.extended.underlineColor &= -67108864, e.updateExtended();
  }
  charAttributes(e) {
    if (e.length === 1 && e.params[0] === 0) return this._processSGR0(this._curAttrData), true;
    let i8 = e.length, r6, n = this._curAttrData;
    for (let o2 = 0; o2 < i8; o2++) r6 = e.params[o2], r6 >= 30 && r6 <= 37 ? (n.fg &= -50331904, n.fg |= 16777216 | r6 - 30) : r6 >= 40 && r6 <= 47 ? (n.bg &= -50331904, n.bg |= 16777216 | r6 - 40) : r6 >= 90 && r6 <= 97 ? (n.fg &= -50331904, n.fg |= 16777216 | r6 - 90 | 8) : r6 >= 100 && r6 <= 107 ? (n.bg &= -50331904, n.bg |= 16777216 | r6 - 100 | 8) : r6 === 0 ? this._processSGR0(n) : r6 === 1 ? n.fg |= 134217728 : r6 === 3 ? n.bg |= 67108864 : r6 === 4 ? (n.fg |= 268435456, this._processUnderline(e.hasSubParams(o2) ? e.getSubParams(o2)[0] : 1, n)) : r6 === 5 ? n.fg |= 536870912 : r6 === 7 ? n.fg |= 67108864 : r6 === 8 ? n.fg |= 1073741824 : r6 === 9 ? n.fg |= 2147483648 : r6 === 2 ? n.bg |= 134217728 : r6 === 21 ? this._processUnderline(2, n) : r6 === 22 ? (n.fg &= -134217729, n.bg &= -134217729) : r6 === 23 ? n.bg &= -67108865 : r6 === 24 ? (n.fg &= -268435457, this._processUnderline(0, n)) : r6 === 25 ? n.fg &= -536870913 : r6 === 27 ? n.fg &= -67108865 : r6 === 28 ? n.fg &= -1073741825 : r6 === 29 ? n.fg &= 2147483647 : r6 === 39 ? (n.fg &= -67108864, n.fg |= X5.fg & 16777215) : r6 === 49 ? (n.bg &= -67108864, n.bg |= X5.bg & 16777215) : r6 === 38 || r6 === 48 || r6 === 58 ? o2 += this._extractColor(e, o2, n) : r6 === 53 ? n.bg |= 1073741824 : r6 === 55 ? n.bg &= -1073741825 : r6 === 59 ? (n.extended = n.extended.clone(), n.extended.underlineColor = -1, n.updateExtended()) : r6 === 100 ? (n.fg &= -67108864, n.fg |= X5.fg & 16777215, n.bg &= -67108864, n.bg |= X5.bg & 16777215) : this._logService.debug("Unknown SGR attribute: %d.", r6);
    return true;
  }
  deviceStatus(e) {
    switch (e.params[0]) {
      case 5:
        this._coreService.triggerDataEvent(`${b.ESC}[0n`);
        break;
      case 6:
        let i8 = this._activeBuffer.y + 1, r6 = this._activeBuffer.x + 1;
        this._coreService.triggerDataEvent(`${b.ESC}[${i8};${r6}R`);
        break;
    }
    return true;
  }
  deviceStatusPrivate(e) {
    switch (e.params[0]) {
      case 6:
        let i8 = this._activeBuffer.y + 1, r6 = this._activeBuffer.x + 1;
        this._coreService.triggerDataEvent(`${b.ESC}[?${i8};${r6}R`);
        break;
      case 15:
        break;
      case 25:
        break;
      case 26:
        break;
      case 53:
        break;
    }
    return true;
  }
  softReset(e) {
    return this._coreService.isCursorHidden = false, this._onRequestSyncScrollBar.fire(), this._activeBuffer.scrollTop = 0, this._activeBuffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = X5.clone(), this._coreService.reset(), this._charsetService.reset(), this._activeBuffer.savedX = 0, this._activeBuffer.savedY = this._activeBuffer.ybase, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = false, true;
  }
  setCursorStyle(e) {
    let i8 = e.length === 0 ? 1 : e.params[0];
    if (i8 === 0) this._coreService.decPrivateModes.cursorStyle = void 0, this._coreService.decPrivateModes.cursorBlink = void 0;
    else {
      switch (i8) {
        case 1:
        case 2:
          this._coreService.decPrivateModes.cursorStyle = "block";
          break;
        case 3:
        case 4:
          this._coreService.decPrivateModes.cursorStyle = "underline";
          break;
        case 5:
        case 6:
          this._coreService.decPrivateModes.cursorStyle = "bar";
          break;
      }
      let r6 = i8 % 2 === 1;
      this._coreService.decPrivateModes.cursorBlink = r6;
    }
    return true;
  }
  setScrollRegion(e) {
    let i8 = e.params[0] || 1, r6;
    return (e.length < 2 || (r6 = e.params[1]) > this._bufferService.rows || r6 === 0) && (r6 = this._bufferService.rows), r6 > i8 && (this._activeBuffer.scrollTop = i8 - 1, this._activeBuffer.scrollBottom = r6 - 1, this._setCursor(0, 0)), true;
  }
  windowOptions(e) {
    if (!bl(e.params[0], this._optionsService.rawOptions.windowOptions)) return true;
    let i8 = e.length > 1 ? e.params[1] : 0;
    switch (e.params[0]) {
      case 14:
        i8 !== 2 && this._onRequestWindowsOptionsReport.fire(0);
        break;
      case 16:
        this._onRequestWindowsOptionsReport.fire(1);
        break;
      case 18:
        this._bufferService && this._coreService.triggerDataEvent(`${b.ESC}[8;${this._bufferService.rows};${this._bufferService.cols}t`);
        break;
      case 22:
        (i8 === 0 || i8 === 2) && (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > _l && this._windowTitleStack.shift()), (i8 === 0 || i8 === 1) && (this._iconNameStack.push(this._iconName), this._iconNameStack.length > _l && this._iconNameStack.shift());
        break;
      case 23:
        (i8 === 0 || i8 === 2) && this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), (i8 === 0 || i8 === 1) && this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
        break;
    }
    return true;
  }
  saveCursor(e) {
    return this._activeBuffer.savedX = this._activeBuffer.x, this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, true;
  }
  restoreCursor(e) {
    return this._activeBuffer.x = this._activeBuffer.savedX || 0, this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0), this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg, this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._activeBuffer.savedCharset && (this._charsetService.charset = this._activeBuffer.savedCharset), this._restrictCursor(), true;
  }
  setTitle(e) {
    return this._windowTitle = e, this._onTitleChange.fire(e), true;
  }
  setIconName(e) {
    return this._iconName = e, true;
  }
  setOrReportIndexedColor(e) {
    let i8 = [], r6 = e.split(";");
    for (; r6.length > 1; ) {
      let n = r6.shift(), o2 = r6.shift();
      if (/^\d+$/.exec(n)) {
        let l2 = parseInt(n);
        if (Sl(l2)) if (o2 === "?") i8.push({ type: 0, index: l2 });
        else {
          let a = Ws2(o2);
          a && i8.push({ type: 1, index: l2, color: a });
        }
      }
    }
    return i8.length && this._onColor.fire(i8), true;
  }
  setHyperlink(e) {
    let i8 = e.indexOf(";");
    if (i8 === -1) return true;
    let r6 = e.slice(0, i8).trim(), n = e.slice(i8 + 1);
    return n ? this._createHyperlink(r6, n) : r6.trim() ? false : this._finishHyperlink();
  }
  _createHyperlink(e, i8) {
    this._getCurrentLinkId() && this._finishHyperlink();
    let r6 = e.split(":"), n, o2 = r6.findIndex((l2) => l2.startsWith("id="));
    return o2 !== -1 && (n = r6[o2].slice(3) || void 0), this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = this._oscLinkService.registerLink({ id: n, uri: i8 }), this._curAttrData.updateExtended(), true;
  }
  _finishHyperlink() {
    return this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = 0, this._curAttrData.updateExtended(), true;
  }
  _setOrReportSpecialColor(e, i8) {
    let r6 = e.split(";");
    for (let n = 0; n < r6.length && !(i8 >= this._specialColors.length); ++n, ++i8) if (r6[n] === "?") this._onColor.fire([{ type: 0, index: this._specialColors[i8] }]);
    else {
      let o2 = Ws2(r6[n]);
      o2 && this._onColor.fire([{ type: 1, index: this._specialColors[i8], color: o2 }]);
    }
    return true;
  }
  setOrReportFgColor(e) {
    return this._setOrReportSpecialColor(e, 0);
  }
  setOrReportBgColor(e) {
    return this._setOrReportSpecialColor(e, 1);
  }
  setOrReportCursorColor(e) {
    return this._setOrReportSpecialColor(e, 2);
  }
  restoreIndexedColor(e) {
    if (!e) return this._onColor.fire([{ type: 2 }]), true;
    let i8 = [], r6 = e.split(";");
    for (let n = 0; n < r6.length; ++n) if (/^\d+$/.exec(r6[n])) {
      let o2 = parseInt(r6[n]);
      Sl(o2) && i8.push({ type: 2, index: o2 });
    }
    return i8.length && this._onColor.fire(i8), true;
  }
  restoreFgColor(e) {
    return this._onColor.fire([{ type: 2, index: 256 }]), true;
  }
  restoreBgColor(e) {
    return this._onColor.fire([{ type: 2, index: 257 }]), true;
  }
  restoreCursorColor(e) {
    return this._onColor.fire([{ type: 2, index: 258 }]), true;
  }
  nextLine() {
    return this._activeBuffer.x = 0, this.index(), true;
  }
  keypadApplicationMode() {
    return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire(), true;
  }
  keypadNumericMode() {
    return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire(), true;
  }
  selectDefaultCharset() {
    return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, Je2), true;
  }
  selectCharset(e) {
    return e.length !== 2 ? (this.selectDefaultCharset(), true) : (e[0] === "/" || this._charsetService.setgCharset(mc[e[0]], ne2[e[1]] || Je2), true);
  }
  index() {
    return this._restrictCursor(), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._restrictCursor(), true;
  }
  tabSet() {
    return this._activeBuffer.tabs[this._activeBuffer.x] = true, true;
  }
  reverseIndex() {
    if (this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop) {
      let e = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
      this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, e, 1), this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData())), this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
    } else this._activeBuffer.y--, this._restrictCursor();
    return true;
  }
  fullReset() {
    return this._parser.reset(), this._onRequestReset.fire(), true;
  }
  reset() {
    this._curAttrData = X5.clone(), this._eraseAttrDataInternal = X5.clone();
  }
  _eraseAttrData() {
    return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= this._curAttrData.bg & 67108863, this._eraseAttrDataInternal;
  }
  setgLevel(e) {
    return this._charsetService.setgLevel(e), true;
  }
  screenAlignmentPattern() {
    let e = new q();
    e.content = 1 << 22 | 69, e.fg = this._curAttrData.fg, e.bg = this._curAttrData.bg, this._setCursor(0, 0);
    for (let i8 = 0; i8 < this._bufferService.rows; ++i8) {
      let r6 = this._activeBuffer.ybase + this._activeBuffer.y + i8, n = this._activeBuffer.lines.get(r6);
      n && (n.fill(e), n.isWrapped = false);
    }
    return this._dirtyRowTracker.markAllDirty(), this._setCursor(0, 0), true;
  }
  requestStatusString(e, i8) {
    let r6 = (a) => (this._coreService.triggerDataEvent(`${b.ESC}${a}${b.ESC}\\`), true), n = this._bufferService.buffer, o2 = this._optionsService.rawOptions, l2 = { block: 2, underline: 4, bar: 6 };
    return r6(e === '"q' ? `P1$r${this._curAttrData.isProtected() ? 1 : 0}"q` : e === '"p' ? 'P1$r61;1"p' : e === "r" ? `P1$r${n.scrollTop + 1};${n.scrollBottom + 1}r` : e === "m" ? "P1$r0m" : e === " q" ? `P1$r${l2[o2.cursorStyle] - (o2.cursorBlink ? 1 : 0)} q` : "P0$r");
  }
  markRangeDirty(e, i8) {
    this._dirtyRowTracker.markRangeDirty(e, i8);
  }
};
var Zi = class {
  constructor(t) {
    this._bufferService = t;
    this.clearRange();
  }
  clearRange() {
    this.start = this._bufferService.buffer.y, this.end = this._bufferService.buffer.y;
  }
  markDirty(t) {
    t < this.start ? this.start = t : t > this.end && (this.end = t);
  }
  markRangeDirty(t, e) {
    t > e && (gl = t, t = e, e = gl), t < this.start && (this.start = t), e > this.end && (this.end = e);
  }
  markAllDirty() {
    this.markRangeDirty(0, this._bufferService.rows - 1);
  }
};
Zi = M3([S(0, F2)], Zi);
function Sl(s15) {
  return 0 <= s15 && s15 < 256;
}
var _c = 5e7;
var El = 12;
var bc = 50;
var gn2 = class extends D3 {
  constructor(e) {
    super();
    this._action = e;
    this._writeBuffer = [];
    this._callbacks = [];
    this._pendingData = 0;
    this._bufferOffset = 0;
    this._isSyncWriting = false;
    this._syncCalls = 0;
    this._didUserInput = false;
    this._onWriteParsed = this._register(new v2());
    this.onWriteParsed = this._onWriteParsed.event;
  }
  handleUserInput() {
    this._didUserInput = true;
  }
  writeSync(e, i8) {
    if (i8 !== void 0 && this._syncCalls > i8) {
      this._syncCalls = 0;
      return;
    }
    if (this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(void 0), this._syncCalls++, this._isSyncWriting) return;
    this._isSyncWriting = true;
    let r6;
    for (; r6 = this._writeBuffer.shift(); ) {
      this._action(r6);
      let n = this._callbacks.shift();
      n && n();
    }
    this._pendingData = 0, this._bufferOffset = 2147483647, this._isSyncWriting = false, this._syncCalls = 0;
  }
  write(e, i8) {
    if (this._pendingData > _c) throw new Error("write data discarded, use flow control to avoid losing data");
    if (!this._writeBuffer.length) {
      if (this._bufferOffset = 0, this._didUserInput) {
        this._didUserInput = false, this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(i8), this._innerWrite();
        return;
      }
      setTimeout(() => this._innerWrite());
    }
    this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(i8);
  }
  _innerWrite(e = 0, i8 = true) {
    let r6 = e || performance.now();
    for (; this._writeBuffer.length > this._bufferOffset; ) {
      let n = this._writeBuffer[this._bufferOffset], o2 = this._action(n, i8);
      if (o2) {
        let a = (u2) => performance.now() - r6 >= El ? setTimeout(() => this._innerWrite(0, u2)) : this._innerWrite(r6, u2);
        o2.catch((u2) => (queueMicrotask(() => {
          throw u2;
        }), Promise.resolve(false))).then(a);
        return;
      }
      let l2 = this._callbacks[this._bufferOffset];
      if (l2 && l2(), this._bufferOffset++, this._pendingData -= n.length, performance.now() - r6 >= El) break;
    }
    this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > bc && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(() => this._innerWrite())) : (this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0), this._onWriteParsed.fire();
  }
};
var ui2 = class {
  constructor(t) {
    this._bufferService = t;
    this._nextId = 1;
    this._entriesWithId = /* @__PURE__ */ new Map();
    this._dataByLinkId = /* @__PURE__ */ new Map();
  }
  registerLink(t) {
    let e = this._bufferService.buffer;
    if (t.id === void 0) {
      let a = e.addMarker(e.ybase + e.y), u2 = { data: t, id: this._nextId++, lines: [a] };
      return a.onDispose(() => this._removeMarkerFromLink(u2, a)), this._dataByLinkId.set(u2.id, u2), u2.id;
    }
    let i8 = t, r6 = this._getEntryIdKey(i8), n = this._entriesWithId.get(r6);
    if (n) return this.addLineToLink(n.id, e.ybase + e.y), n.id;
    let o2 = e.addMarker(e.ybase + e.y), l2 = { id: this._nextId++, key: this._getEntryIdKey(i8), data: i8, lines: [o2] };
    return o2.onDispose(() => this._removeMarkerFromLink(l2, o2)), this._entriesWithId.set(l2.key, l2), this._dataByLinkId.set(l2.id, l2), l2.id;
  }
  addLineToLink(t, e) {
    let i8 = this._dataByLinkId.get(t);
    if (i8 && i8.lines.every((r6) => r6.line !== e)) {
      let r6 = this._bufferService.buffer.addMarker(e);
      i8.lines.push(r6), r6.onDispose(() => this._removeMarkerFromLink(i8, r6));
    }
  }
  getLinkData(t) {
    return this._dataByLinkId.get(t)?.data;
  }
  _getEntryIdKey(t) {
    return `${t.id};;${t.uri}`;
  }
  _removeMarkerFromLink(t, e) {
    let i8 = t.lines.indexOf(e);
    i8 !== -1 && (t.lines.splice(i8, 1), t.lines.length === 0 && (t.data.id !== void 0 && this._entriesWithId.delete(t.key), this._dataByLinkId.delete(t.id)));
  }
};
ui2 = M3([S(0, F2)], ui2);
var Tl = false;
var Sn2 = class extends D3 {
  constructor(e) {
    super();
    this._windowsWrappingHeuristics = this._register(new ye4());
    this._onBinary = this._register(new v2());
    this.onBinary = this._onBinary.event;
    this._onData = this._register(new v2());
    this.onData = this._onData.event;
    this._onLineFeed = this._register(new v2());
    this.onLineFeed = this._onLineFeed.event;
    this._onResize = this._register(new v2());
    this.onResize = this._onResize.event;
    this._onWriteParsed = this._register(new v2());
    this.onWriteParsed = this._onWriteParsed.event;
    this._onScroll = this._register(new v2());
    this._instantiationService = new ln(), this.optionsService = this._register(new dn2(e)), this._instantiationService.setService(H4, this.optionsService), this._bufferService = this._register(this._instantiationService.createInstance(ni2)), this._instantiationService.setService(F2, this._bufferService), this._logService = this._register(this._instantiationService.createInstance(ii2)), this._instantiationService.setService(nr2, this._logService), this.coreService = this._register(this._instantiationService.createInstance(li2)), this._instantiationService.setService(ge3, this.coreService), this.coreMouseService = this._register(this._instantiationService.createInstance(ai3)), this._instantiationService.setService(rr, this.coreMouseService), this.unicodeService = this._register(this._instantiationService.createInstance(Ae3)), this._instantiationService.setService(Js, this.unicodeService), this._charsetService = this._instantiationService.createInstance(pn2), this._instantiationService.setService(Zs, this._charsetService), this._oscLinkService = this._instantiationService.createInstance(ui2), this._instantiationService.setService(sr2, this._oscLinkService), this._inputHandler = this._register(new vn(this._bufferService, this._charsetService, this.coreService, this._logService, this.optionsService, this._oscLinkService, this.coreMouseService, this.unicodeService)), this._register($2.forward(this._inputHandler.onLineFeed, this._onLineFeed)), this._register(this._inputHandler), this._register($2.forward(this._bufferService.onResize, this._onResize)), this._register($2.forward(this.coreService.onData, this._onData)), this._register($2.forward(this.coreService.onBinary, this._onBinary)), this._register(this.coreService.onRequestScrollToBottom(() => this.scrollToBottom(true))), this._register(this.coreService.onUserInput(() => this._writeBuffer.handleUserInput())), this._register(this.optionsService.onMultipleOptionChange(["windowsMode", "windowsPty"], () => this._handleWindowsPtyOptionChange())), this._register(this._bufferService.onScroll(() => {
      this._onScroll.fire({ position: this._bufferService.buffer.ydisp }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
    })), this._writeBuffer = this._register(new gn2((i8, r6) => this._inputHandler.parse(i8, r6))), this._register($2.forward(this._writeBuffer.onWriteParsed, this._onWriteParsed));
  }
  get onScroll() {
    return this._onScrollApi || (this._onScrollApi = this._register(new v2()), this._onScroll.event((e) => {
      this._onScrollApi?.fire(e.position);
    })), this._onScrollApi.event;
  }
  get cols() {
    return this._bufferService.cols;
  }
  get rows() {
    return this._bufferService.rows;
  }
  get buffers() {
    return this._bufferService.buffers;
  }
  get options() {
    return this.optionsService.options;
  }
  set options(e) {
    for (let i8 in e) this.optionsService.options[i8] = e[i8];
  }
  write(e, i8) {
    this._writeBuffer.write(e, i8);
  }
  writeSync(e, i8) {
    this._logService.logLevel <= 3 && !Tl && (this._logService.warn("writeSync is unreliable and will be removed soon."), Tl = true), this._writeBuffer.writeSync(e, i8);
  }
  input(e, i8 = true) {
    this.coreService.triggerDataEvent(e, i8);
  }
  resize(e, i8) {
    isNaN(e) || isNaN(i8) || (e = Math.max(e, ks2), i8 = Math.max(i8, Cs), this._bufferService.resize(e, i8));
  }
  scroll(e, i8 = false) {
    this._bufferService.scroll(e, i8);
  }
  scrollLines(e, i8) {
    this._bufferService.scrollLines(e, i8);
  }
  scrollPages(e) {
    this.scrollLines(e * (this.rows - 1));
  }
  scrollToTop() {
    this.scrollLines(-this._bufferService.buffer.ydisp);
  }
  scrollToBottom(e) {
    this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
  }
  scrollToLine(e) {
    let i8 = e - this._bufferService.buffer.ydisp;
    i8 !== 0 && this.scrollLines(i8);
  }
  registerEscHandler(e, i8) {
    return this._inputHandler.registerEscHandler(e, i8);
  }
  registerDcsHandler(e, i8) {
    return this._inputHandler.registerDcsHandler(e, i8);
  }
  registerCsiHandler(e, i8) {
    return this._inputHandler.registerCsiHandler(e, i8);
  }
  registerOscHandler(e, i8) {
    return this._inputHandler.registerOscHandler(e, i8);
  }
  _setup() {
    this._handleWindowsPtyOptionChange();
  }
  reset() {
    this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this.coreService.reset(), this.coreMouseService.reset();
  }
  _handleWindowsPtyOptionChange() {
    let e = false, i8 = this.optionsService.rawOptions.windowsPty;
    i8 && i8.buildNumber !== void 0 && i8.buildNumber !== void 0 ? e = i8.backend === "conpty" && i8.buildNumber < 21376 : this.optionsService.rawOptions.windowsMode && (e = true), e ? this._enableWindowsWrappingHeuristics() : this._windowsWrappingHeuristics.clear();
  }
  _enableWindowsWrappingHeuristics() {
    if (!this._windowsWrappingHeuristics.value) {
      let e = [];
      e.push(this.onLineFeed(Bs2.bind(null, this._bufferService))), e.push(this.registerCsiHandler({ final: "H" }, () => (Bs2(this._bufferService), false))), this._windowsWrappingHeuristics.value = C3(() => {
        for (let i8 of e) i8.dispose();
      });
    }
  }
};
var gc = { 48: ["0", ")"], 49: ["1", "!"], 50: ["2", "@"], 51: ["3", "#"], 52: ["4", "$"], 53: ["5", "%"], 54: ["6", "^"], 55: ["7", "&"], 56: ["8", "*"], 57: ["9", "("], 186: [";", ":"], 187: ["=", "+"], 188: [",", "<"], 189: ["-", "_"], 190: [".", ">"], 191: ["/", "?"], 192: ["`", "~"], 219: ["[", "{"], 220: ["\\", "|"], 221: ["]", "}"], 222: ["'", '"'] };
function Il(s15, t, e, i8) {
  let r6 = { type: 0, cancel: false, key: void 0 }, n = (s15.shiftKey ? 1 : 0) | (s15.altKey ? 2 : 0) | (s15.ctrlKey ? 4 : 0) | (s15.metaKey ? 8 : 0);
  switch (s15.keyCode) {
    case 0:
      s15.key === "UIKeyInputUpArrow" ? t ? r6.key = b.ESC + "OA" : r6.key = b.ESC + "[A" : s15.key === "UIKeyInputLeftArrow" ? t ? r6.key = b.ESC + "OD" : r6.key = b.ESC + "[D" : s15.key === "UIKeyInputRightArrow" ? t ? r6.key = b.ESC + "OC" : r6.key = b.ESC + "[C" : s15.key === "UIKeyInputDownArrow" && (t ? r6.key = b.ESC + "OB" : r6.key = b.ESC + "[B");
      break;
    case 8:
      r6.key = s15.ctrlKey ? "\b" : b.DEL, s15.altKey && (r6.key = b.ESC + r6.key);
      break;
    case 9:
      if (s15.shiftKey) {
        r6.key = b.ESC + "[Z";
        break;
      }
      r6.key = b.HT, r6.cancel = true;
      break;
    case 13:
      r6.key = s15.altKey ? b.ESC + b.CR : b.CR, r6.cancel = true;
      break;
    case 27:
      r6.key = b.ESC, s15.altKey && (r6.key = b.ESC + b.ESC), r6.cancel = true;
      break;
    case 37:
      if (s15.metaKey) break;
      n ? r6.key = b.ESC + "[1;" + (n + 1) + "D" : t ? r6.key = b.ESC + "OD" : r6.key = b.ESC + "[D";
      break;
    case 39:
      if (s15.metaKey) break;
      n ? r6.key = b.ESC + "[1;" + (n + 1) + "C" : t ? r6.key = b.ESC + "OC" : r6.key = b.ESC + "[C";
      break;
    case 38:
      if (s15.metaKey) break;
      n ? r6.key = b.ESC + "[1;" + (n + 1) + "A" : t ? r6.key = b.ESC + "OA" : r6.key = b.ESC + "[A";
      break;
    case 40:
      if (s15.metaKey) break;
      n ? r6.key = b.ESC + "[1;" + (n + 1) + "B" : t ? r6.key = b.ESC + "OB" : r6.key = b.ESC + "[B";
      break;
    case 45:
      !s15.shiftKey && !s15.ctrlKey && (r6.key = b.ESC + "[2~");
      break;
    case 46:
      n ? r6.key = b.ESC + "[3;" + (n + 1) + "~" : r6.key = b.ESC + "[3~";
      break;
    case 36:
      n ? r6.key = b.ESC + "[1;" + (n + 1) + "H" : t ? r6.key = b.ESC + "OH" : r6.key = b.ESC + "[H";
      break;
    case 35:
      n ? r6.key = b.ESC + "[1;" + (n + 1) + "F" : t ? r6.key = b.ESC + "OF" : r6.key = b.ESC + "[F";
      break;
    case 33:
      s15.shiftKey ? r6.type = 2 : s15.ctrlKey ? r6.key = b.ESC + "[5;" + (n + 1) + "~" : r6.key = b.ESC + "[5~";
      break;
    case 34:
      s15.shiftKey ? r6.type = 3 : s15.ctrlKey ? r6.key = b.ESC + "[6;" + (n + 1) + "~" : r6.key = b.ESC + "[6~";
      break;
    case 112:
      n ? r6.key = b.ESC + "[1;" + (n + 1) + "P" : r6.key = b.ESC + "OP";
      break;
    case 113:
      n ? r6.key = b.ESC + "[1;" + (n + 1) + "Q" : r6.key = b.ESC + "OQ";
      break;
    case 114:
      n ? r6.key = b.ESC + "[1;" + (n + 1) + "R" : r6.key = b.ESC + "OR";
      break;
    case 115:
      n ? r6.key = b.ESC + "[1;" + (n + 1) + "S" : r6.key = b.ESC + "OS";
      break;
    case 116:
      n ? r6.key = b.ESC + "[15;" + (n + 1) + "~" : r6.key = b.ESC + "[15~";
      break;
    case 117:
      n ? r6.key = b.ESC + "[17;" + (n + 1) + "~" : r6.key = b.ESC + "[17~";
      break;
    case 118:
      n ? r6.key = b.ESC + "[18;" + (n + 1) + "~" : r6.key = b.ESC + "[18~";
      break;
    case 119:
      n ? r6.key = b.ESC + "[19;" + (n + 1) + "~" : r6.key = b.ESC + "[19~";
      break;
    case 120:
      n ? r6.key = b.ESC + "[20;" + (n + 1) + "~" : r6.key = b.ESC + "[20~";
      break;
    case 121:
      n ? r6.key = b.ESC + "[21;" + (n + 1) + "~" : r6.key = b.ESC + "[21~";
      break;
    case 122:
      n ? r6.key = b.ESC + "[23;" + (n + 1) + "~" : r6.key = b.ESC + "[23~";
      break;
    case 123:
      n ? r6.key = b.ESC + "[24;" + (n + 1) + "~" : r6.key = b.ESC + "[24~";
      break;
    default:
      if (s15.ctrlKey && !s15.shiftKey && !s15.altKey && !s15.metaKey) s15.keyCode >= 65 && s15.keyCode <= 90 ? r6.key = String.fromCharCode(s15.keyCode - 64) : s15.keyCode === 32 ? r6.key = b.NUL : s15.keyCode >= 51 && s15.keyCode <= 55 ? r6.key = String.fromCharCode(s15.keyCode - 51 + 27) : s15.keyCode === 56 ? r6.key = b.DEL : s15.keyCode === 219 ? r6.key = b.ESC : s15.keyCode === 220 ? r6.key = b.FS : s15.keyCode === 221 && (r6.key = b.GS);
      else if ((!e || i8) && s15.altKey && !s15.metaKey) {
        let l2 = gc[s15.keyCode]?.[s15.shiftKey ? 1 : 0];
        if (l2) r6.key = b.ESC + l2;
        else if (s15.keyCode >= 65 && s15.keyCode <= 90) {
          let a = s15.ctrlKey ? s15.keyCode - 64 : s15.keyCode + 32, u2 = String.fromCharCode(a);
          s15.shiftKey && (u2 = u2.toUpperCase()), r6.key = b.ESC + u2;
        } else if (s15.keyCode === 32) r6.key = b.ESC + (s15.ctrlKey ? b.NUL : " ");
        else if (s15.key === "Dead" && s15.code.startsWith("Key")) {
          let a = s15.code.slice(3, 4);
          s15.shiftKey || (a = a.toLowerCase()), r6.key = b.ESC + a, r6.cancel = true;
        }
      } else e && !s15.altKey && !s15.ctrlKey && !s15.shiftKey && s15.metaKey ? s15.keyCode === 65 && (r6.type = 1) : s15.key && !s15.ctrlKey && !s15.altKey && !s15.metaKey && s15.keyCode >= 48 && s15.key.length === 1 ? r6.key = s15.key : s15.key && s15.ctrlKey && (s15.key === "_" && (r6.key = b.US), s15.key === "@" && (r6.key = b.NUL));
      break;
  }
  return r6;
}
var ee5 = 0;
var En2 = class {
  constructor(t) {
    this._getKey = t;
    this._array = [];
    this._insertedValues = [];
    this._flushInsertedTask = new Jt();
    this._isFlushingInserted = false;
    this._deletedIndices = [];
    this._flushDeletedTask = new Jt();
    this._isFlushingDeleted = false;
  }
  clear() {
    this._array.length = 0, this._insertedValues.length = 0, this._flushInsertedTask.clear(), this._isFlushingInserted = false, this._deletedIndices.length = 0, this._flushDeletedTask.clear(), this._isFlushingDeleted = false;
  }
  insert(t) {
    this._flushCleanupDeleted(), this._insertedValues.length === 0 && this._flushInsertedTask.enqueue(() => this._flushInserted()), this._insertedValues.push(t);
  }
  _flushInserted() {
    let t = this._insertedValues.sort((n, o2) => this._getKey(n) - this._getKey(o2)), e = 0, i8 = 0, r6 = new Array(this._array.length + this._insertedValues.length);
    for (let n = 0; n < r6.length; n++) i8 >= this._array.length || this._getKey(t[e]) <= this._getKey(this._array[i8]) ? (r6[n] = t[e], e++) : r6[n] = this._array[i8++];
    this._array = r6, this._insertedValues.length = 0;
  }
  _flushCleanupInserted() {
    !this._isFlushingInserted && this._insertedValues.length > 0 && this._flushInsertedTask.flush();
  }
  delete(t) {
    if (this._flushCleanupInserted(), this._array.length === 0) return false;
    let e = this._getKey(t);
    if (e === void 0 || (ee5 = this._search(e), ee5 === -1) || this._getKey(this._array[ee5]) !== e) return false;
    do
      if (this._array[ee5] === t) return this._deletedIndices.length === 0 && this._flushDeletedTask.enqueue(() => this._flushDeleted()), this._deletedIndices.push(ee5), true;
    while (++ee5 < this._array.length && this._getKey(this._array[ee5]) === e);
    return false;
  }
  _flushDeleted() {
    this._isFlushingDeleted = true;
    let t = this._deletedIndices.sort((n, o2) => n - o2), e = 0, i8 = new Array(this._array.length - t.length), r6 = 0;
    for (let n = 0; n < this._array.length; n++) t[e] === n ? e++ : i8[r6++] = this._array[n];
    this._array = i8, this._deletedIndices.length = 0, this._isFlushingDeleted = false;
  }
  _flushCleanupDeleted() {
    !this._isFlushingDeleted && this._deletedIndices.length > 0 && this._flushDeletedTask.flush();
  }
  *getKeyIterator(t) {
    if (this._flushCleanupInserted(), this._flushCleanupDeleted(), this._array.length !== 0 && (ee5 = this._search(t), !(ee5 < 0 || ee5 >= this._array.length) && this._getKey(this._array[ee5]) === t)) do
      yield this._array[ee5];
    while (++ee5 < this._array.length && this._getKey(this._array[ee5]) === t);
  }
  forEachByKey(t, e) {
    if (this._flushCleanupInserted(), this._flushCleanupDeleted(), this._array.length !== 0 && (ee5 = this._search(t), !(ee5 < 0 || ee5 >= this._array.length) && this._getKey(this._array[ee5]) === t)) do
      e(this._array[ee5]);
    while (++ee5 < this._array.length && this._getKey(this._array[ee5]) === t);
  }
  values() {
    return this._flushCleanupInserted(), this._flushCleanupDeleted(), [...this._array].values();
  }
  _search(t) {
    let e = 0, i8 = this._array.length - 1;
    for (; i8 >= e; ) {
      let r6 = e + i8 >> 1, n = this._getKey(this._array[r6]);
      if (n > t) i8 = r6 - 1;
      else if (n < t) e = r6 + 1;
      else {
        for (; r6 > 0 && this._getKey(this._array[r6 - 1]) === t; ) r6--;
        return r6;
      }
    }
    return e;
  }
};
var Us2 = 0;
var yl = 0;
var Tn = class extends D3 {
  constructor() {
    super();
    this._decorations = new En2((e) => e?.marker.line);
    this._onDecorationRegistered = this._register(new v2());
    this.onDecorationRegistered = this._onDecorationRegistered.event;
    this._onDecorationRemoved = this._register(new v2());
    this.onDecorationRemoved = this._onDecorationRemoved.event;
    this._register(C3(() => this.reset()));
  }
  get decorations() {
    return this._decorations.values();
  }
  registerDecoration(e) {
    if (e.marker.isDisposed) return;
    let i8 = new Ks(e);
    if (i8) {
      let r6 = i8.marker.onDispose(() => i8.dispose()), n = i8.onDispose(() => {
        n.dispose(), i8 && (this._decorations.delete(i8) && this._onDecorationRemoved.fire(i8), r6.dispose());
      });
      this._decorations.insert(i8), this._onDecorationRegistered.fire(i8);
    }
    return i8;
  }
  reset() {
    for (let e of this._decorations.values()) e.dispose();
    this._decorations.clear();
  }
  *getDecorationsAtCell(e, i8, r6) {
    let n = 0, o2 = 0;
    for (let l2 of this._decorations.getKeyIterator(i8)) n = l2.options.x ?? 0, o2 = n + (l2.options.width ?? 1), e >= n && e < o2 && (!r6 || (l2.options.layer ?? "bottom") === r6) && (yield l2);
  }
  forEachDecorationAtCell(e, i8, r6, n) {
    this._decorations.forEachByKey(i8, (o2) => {
      Us2 = o2.options.x ?? 0, yl = Us2 + (o2.options.width ?? 1), e >= Us2 && e < yl && (!r6 || (o2.options.layer ?? "bottom") === r6) && n(o2);
    });
  }
};
var Ks = class extends Ee4 {
  constructor(e) {
    super();
    this.options = e;
    this.onRenderEmitter = this.add(new v2());
    this.onRender = this.onRenderEmitter.event;
    this._onDispose = this.add(new v2());
    this.onDispose = this._onDispose.event;
    this._cachedBg = null;
    this._cachedFg = null;
    this.marker = e.marker, this.options.overviewRulerOptions && !this.options.overviewRulerOptions.position && (this.options.overviewRulerOptions.position = "full");
  }
  get backgroundColorRGB() {
    return this._cachedBg === null && (this.options.backgroundColor ? this._cachedBg = z2.toColor(this.options.backgroundColor) : this._cachedBg = void 0), this._cachedBg;
  }
  get foregroundColorRGB() {
    return this._cachedFg === null && (this.options.foregroundColor ? this._cachedFg = z2.toColor(this.options.foregroundColor) : this._cachedFg = void 0), this._cachedFg;
  }
  dispose() {
    this._onDispose.fire(), super.dispose();
  }
};
var Sc = 1e3;
var In2 = class {
  constructor(t, e = Sc) {
    this._renderCallback = t;
    this._debounceThresholdMS = e;
    this._lastRefreshMs = 0;
    this._additionalRefreshRequested = false;
  }
  dispose() {
    this._refreshTimeoutID && clearTimeout(this._refreshTimeoutID);
  }
  refresh(t, e, i8) {
    this._rowCount = i8, t = t !== void 0 ? t : 0, e = e !== void 0 ? e : this._rowCount - 1, this._rowStart = this._rowStart !== void 0 ? Math.min(this._rowStart, t) : t, this._rowEnd = this._rowEnd !== void 0 ? Math.max(this._rowEnd, e) : e;
    let r6 = performance.now();
    if (r6 - this._lastRefreshMs >= this._debounceThresholdMS) this._lastRefreshMs = r6, this._innerRefresh();
    else if (!this._additionalRefreshRequested) {
      let n = r6 - this._lastRefreshMs, o2 = this._debounceThresholdMS - n;
      this._additionalRefreshRequested = true, this._refreshTimeoutID = window.setTimeout(() => {
        this._lastRefreshMs = performance.now(), this._innerRefresh(), this._additionalRefreshRequested = false, this._refreshTimeoutID = void 0;
      }, o2);
    }
  }
  _innerRefresh() {
    if (this._rowStart === void 0 || this._rowEnd === void 0 || this._rowCount === void 0) return;
    let t = Math.max(this._rowStart, 0), e = Math.min(this._rowEnd, this._rowCount - 1);
    this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(t, e);
  }
};
var xl = 20;
var wl = false;
var Tt2 = class extends D3 {
  constructor(e, i8, r6, n) {
    super();
    this._terminal = e;
    this._coreBrowserService = r6;
    this._renderService = n;
    this._rowColumns = /* @__PURE__ */ new WeakMap();
    this._liveRegionLineCount = 0;
    this._charsToConsume = [];
    this._charsToAnnounce = "";
    let o2 = this._coreBrowserService.mainDocument;
    this._accessibilityContainer = o2.createElement("div"), this._accessibilityContainer.classList.add("xterm-accessibility"), this._rowContainer = o2.createElement("div"), this._rowContainer.setAttribute("role", "list"), this._rowContainer.classList.add("xterm-accessibility-tree"), this._rowElements = [];
    for (let l2 = 0; l2 < this._terminal.rows; l2++) this._rowElements[l2] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[l2]);
    if (this._topBoundaryFocusListener = (l2) => this._handleBoundaryFocus(l2, 0), this._bottomBoundaryFocusListener = (l2) => this._handleBoundaryFocus(l2, 1), this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._accessibilityContainer.appendChild(this._rowContainer), this._liveRegion = o2.createElement("div"), this._liveRegion.classList.add("live-region"), this._liveRegion.setAttribute("aria-live", "assertive"), this._accessibilityContainer.appendChild(this._liveRegion), this._liveRegionDebouncer = this._register(new In2(this._renderRows.bind(this))), !this._terminal.element) throw new Error("Cannot enable accessibility before Terminal.open");
    wl ? (this._accessibilityContainer.classList.add("debug"), this._rowContainer.classList.add("debug"), this._debugRootContainer = o2.createElement("div"), this._debugRootContainer.classList.add("xterm"), this._debugRootContainer.appendChild(o2.createTextNode("------start a11y------")), this._debugRootContainer.appendChild(this._accessibilityContainer), this._debugRootContainer.appendChild(o2.createTextNode("------end a11y------")), this._terminal.element.insertAdjacentElement("afterend", this._debugRootContainer)) : this._terminal.element.insertAdjacentElement("afterbegin", this._accessibilityContainer), this._register(this._terminal.onResize((l2) => this._handleResize(l2.rows))), this._register(this._terminal.onRender((l2) => this._refreshRows(l2.start, l2.end))), this._register(this._terminal.onScroll(() => this._refreshRows())), this._register(this._terminal.onA11yChar((l2) => this._handleChar(l2))), this._register(this._terminal.onLineFeed(() => this._handleChar(`
`))), this._register(this._terminal.onA11yTab((l2) => this._handleTab(l2))), this._register(this._terminal.onKey((l2) => this._handleKey(l2.key))), this._register(this._terminal.onBlur(() => this._clearLiveRegion())), this._register(this._renderService.onDimensionsChange(() => this._refreshRowsDimensions())), this._register(L3(o2, "selectionchange", () => this._handleSelectionChange())), this._register(this._coreBrowserService.onDprChange(() => this._refreshRowsDimensions())), this._refreshRowsDimensions(), this._refreshRows(), this._register(C3(() => {
      wl ? this._debugRootContainer.remove() : this._accessibilityContainer.remove(), this._rowElements.length = 0;
    }));
  }
  _handleTab(e) {
    for (let i8 = 0; i8 < e; i8++) this._handleChar(" ");
  }
  _handleChar(e) {
    this._liveRegionLineCount < xl + 1 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e && (this._charsToAnnounce += e) : this._charsToAnnounce += e, e === `
` && (this._liveRegionLineCount++, this._liveRegionLineCount === xl + 1 && (this._liveRegion.textContent += _i2.get())));
  }
  _clearLiveRegion() {
    this._liveRegion.textContent = "", this._liveRegionLineCount = 0;
  }
  _handleKey(e) {
    this._clearLiveRegion(), /\p{Control}/u.test(e) || this._charsToConsume.push(e);
  }
  _refreshRows(e, i8) {
    this._liveRegionDebouncer.refresh(e, i8, this._terminal.rows);
  }
  _renderRows(e, i8) {
    let r6 = this._terminal.buffer, n = r6.lines.length.toString();
    for (let o2 = e; o2 <= i8; o2++) {
      let l2 = r6.lines.get(r6.ydisp + o2), a = [], u2 = l2?.translateToString(true, void 0, void 0, a) || "", h2 = (r6.ydisp + o2 + 1).toString(), c = this._rowElements[o2];
      c && (u2.length === 0 ? (c.textContent = "\xA0", this._rowColumns.set(c, [0, 1])) : (c.textContent = u2, this._rowColumns.set(c, a)), c.setAttribute("aria-posinset", h2), c.setAttribute("aria-setsize", n), this._alignRowWidth(c));
    }
    this._announceCharacters();
  }
  _announceCharacters() {
    this._charsToAnnounce.length !== 0 && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "");
  }
  _handleBoundaryFocus(e, i8) {
    let r6 = e.target, n = this._rowElements[i8 === 0 ? 1 : this._rowElements.length - 2], o2 = r6.getAttribute("aria-posinset"), l2 = i8 === 0 ? "1" : `${this._terminal.buffer.lines.length}`;
    if (o2 === l2 || e.relatedTarget !== n) return;
    let a, u2;
    if (i8 === 0 ? (a = r6, u2 = this._rowElements.pop(), this._rowContainer.removeChild(u2)) : (a = this._rowElements.shift(), u2 = r6, this._rowContainer.removeChild(a)), a.removeEventListener("focus", this._topBoundaryFocusListener), u2.removeEventListener("focus", this._bottomBoundaryFocusListener), i8 === 0) {
      let h2 = this._createAccessibilityTreeNode();
      this._rowElements.unshift(h2), this._rowContainer.insertAdjacentElement("afterbegin", h2);
    } else {
      let h2 = this._createAccessibilityTreeNode();
      this._rowElements.push(h2), this._rowContainer.appendChild(h2);
    }
    this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(i8 === 0 ? -1 : 1), this._rowElements[i8 === 0 ? 1 : this._rowElements.length - 2].focus(), e.preventDefault(), e.stopImmediatePropagation();
  }
  _handleSelectionChange() {
    if (this._rowElements.length === 0) return;
    let e = this._coreBrowserService.mainDocument.getSelection();
    if (!e) return;
    if (e.isCollapsed) {
      this._rowContainer.contains(e.anchorNode) && this._terminal.clearSelection();
      return;
    }
    if (!e.anchorNode || !e.focusNode) {
      console.error("anchorNode and/or focusNode are null");
      return;
    }
    let i8 = { node: e.anchorNode, offset: e.anchorOffset }, r6 = { node: e.focusNode, offset: e.focusOffset };
    if ((i8.node.compareDocumentPosition(r6.node) & Node.DOCUMENT_POSITION_PRECEDING || i8.node === r6.node && i8.offset > r6.offset) && ([i8, r6] = [r6, i8]), i8.node.compareDocumentPosition(this._rowElements[0]) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING) && (i8 = { node: this._rowElements[0].childNodes[0], offset: 0 }), !this._rowContainer.contains(i8.node)) return;
    let n = this._rowElements.slice(-1)[0];
    if (r6.node.compareDocumentPosition(n) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_PRECEDING) && (r6 = { node: n, offset: n.textContent?.length ?? 0 }), !this._rowContainer.contains(r6.node)) return;
    let o2 = ({ node: u2, offset: h2 }) => {
      let c = u2 instanceof Text ? u2.parentNode : u2, d = parseInt(c?.getAttribute("aria-posinset"), 10) - 1;
      if (isNaN(d)) return console.warn("row is invalid. Race condition?"), null;
      let _4 = this._rowColumns.get(c);
      if (!_4) return console.warn("columns is null. Race condition?"), null;
      let p2 = h2 < _4.length ? _4[h2] : _4.slice(-1)[0] + 1;
      return p2 >= this._terminal.cols && (++d, p2 = 0), { row: d, column: p2 };
    }, l2 = o2(i8), a = o2(r6);
    if (!(!l2 || !a)) {
      if (l2.row > a.row || l2.row === a.row && l2.column >= a.column) throw new Error("invalid range");
      this._terminal.select(l2.column, l2.row, (a.row - l2.row) * this._terminal.cols - l2.column + a.column);
    }
  }
  _handleResize(e) {
    this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
    for (let i8 = this._rowContainer.children.length; i8 < this._terminal.rows; i8++) this._rowElements[i8] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[i8]);
    for (; this._rowElements.length > e; ) this._rowContainer.removeChild(this._rowElements.pop());
    this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions();
  }
  _createAccessibilityTreeNode() {
    let e = this._coreBrowserService.mainDocument.createElement("div");
    return e.setAttribute("role", "listitem"), e.tabIndex = -1, this._refreshRowDimensions(e), e;
  }
  _refreshRowsDimensions() {
    if (this._renderService.dimensions.css.cell.height) {
      Object.assign(this._accessibilityContainer.style, { width: `${this._renderService.dimensions.css.canvas.width}px`, fontSize: `${this._terminal.options.fontSize}px` }), this._rowElements.length !== this._terminal.rows && this._handleResize(this._terminal.rows);
      for (let e = 0; e < this._terminal.rows; e++) this._refreshRowDimensions(this._rowElements[e]), this._alignRowWidth(this._rowElements[e]);
    }
  }
  _refreshRowDimensions(e) {
    e.style.height = `${this._renderService.dimensions.css.cell.height}px`;
  }
  _alignRowWidth(e) {
    e.style.transform = "";
    let i8 = e.getBoundingClientRect().width, r6 = this._rowColumns.get(e)?.slice(-1)?.[0];
    if (!r6) return;
    let n = r6 * this._renderService.dimensions.css.cell.width;
    e.style.transform = `scaleX(${n / i8})`;
  }
};
Tt2 = M3([S(1, xt4), S(2, ae2), S(3, ce3)], Tt2);
var hi = class extends D3 {
  constructor(e, i8, r6, n, o2) {
    super();
    this._element = e;
    this._mouseService = i8;
    this._renderService = r6;
    this._bufferService = n;
    this._linkProviderService = o2;
    this._linkCacheDisposables = [];
    this._isMouseOut = true;
    this._wasResized = false;
    this._activeLine = -1;
    this._onShowLinkUnderline = this._register(new v2());
    this.onShowLinkUnderline = this._onShowLinkUnderline.event;
    this._onHideLinkUnderline = this._register(new v2());
    this.onHideLinkUnderline = this._onHideLinkUnderline.event;
    this._register(C3(() => {
      Ne2(this._linkCacheDisposables), this._linkCacheDisposables.length = 0, this._lastMouseEvent = void 0, this._activeProviderReplies?.clear();
    })), this._register(this._bufferService.onResize(() => {
      this._clearCurrentLink(), this._wasResized = true;
    })), this._register(L3(this._element, "mouseleave", () => {
      this._isMouseOut = true, this._clearCurrentLink();
    })), this._register(L3(this._element, "mousemove", this._handleMouseMove.bind(this))), this._register(L3(this._element, "mousedown", this._handleMouseDown.bind(this))), this._register(L3(this._element, "mouseup", this._handleMouseUp.bind(this)));
  }
  get currentLink() {
    return this._currentLink;
  }
  _handleMouseMove(e) {
    this._lastMouseEvent = e;
    let i8 = this._positionFromMouseEvent(e, this._element, this._mouseService);
    if (!i8) return;
    this._isMouseOut = false;
    let r6 = e.composedPath();
    for (let n = 0; n < r6.length; n++) {
      let o2 = r6[n];
      if (o2.classList.contains("xterm")) break;
      if (o2.classList.contains("xterm-hover")) return;
    }
    (!this._lastBufferCell || i8.x !== this._lastBufferCell.x || i8.y !== this._lastBufferCell.y) && (this._handleHover(i8), this._lastBufferCell = i8);
  }
  _handleHover(e) {
    if (this._activeLine !== e.y || this._wasResized) {
      this._clearCurrentLink(), this._askForLink(e, false), this._wasResized = false;
      return;
    }
    this._currentLink && this._linkAtPosition(this._currentLink.link, e) || (this._clearCurrentLink(), this._askForLink(e, true));
  }
  _askForLink(e, i8) {
    (!this._activeProviderReplies || !i8) && (this._activeProviderReplies?.forEach((n) => {
      n?.forEach((o2) => {
        o2.link.dispose && o2.link.dispose();
      });
    }), this._activeProviderReplies = /* @__PURE__ */ new Map(), this._activeLine = e.y);
    let r6 = false;
    for (let [n, o2] of this._linkProviderService.linkProviders.entries()) i8 ? this._activeProviderReplies?.get(n) && (r6 = this._checkLinkProviderResult(n, e, r6)) : o2.provideLinks(e.y, (l2) => {
      if (this._isMouseOut) return;
      let a = l2?.map((u2) => ({ link: u2 }));
      this._activeProviderReplies?.set(n, a), r6 = this._checkLinkProviderResult(n, e, r6), this._activeProviderReplies?.size === this._linkProviderService.linkProviders.length && this._removeIntersectingLinks(e.y, this._activeProviderReplies);
    });
  }
  _removeIntersectingLinks(e, i8) {
    let r6 = /* @__PURE__ */ new Set();
    for (let n = 0; n < i8.size; n++) {
      let o2 = i8.get(n);
      if (o2) for (let l2 = 0; l2 < o2.length; l2++) {
        let a = o2[l2], u2 = a.link.range.start.y < e ? 0 : a.link.range.start.x, h2 = a.link.range.end.y > e ? this._bufferService.cols : a.link.range.end.x;
        for (let c = u2; c <= h2; c++) {
          if (r6.has(c)) {
            o2.splice(l2--, 1);
            break;
          }
          r6.add(c);
        }
      }
    }
  }
  _checkLinkProviderResult(e, i8, r6) {
    if (!this._activeProviderReplies) return r6;
    let n = this._activeProviderReplies.get(e), o2 = false;
    for (let l2 = 0; l2 < e; l2++) (!this._activeProviderReplies.has(l2) || this._activeProviderReplies.get(l2)) && (o2 = true);
    if (!o2 && n) {
      let l2 = n.find((a) => this._linkAtPosition(a.link, i8));
      l2 && (r6 = true, this._handleNewLink(l2));
    }
    if (this._activeProviderReplies.size === this._linkProviderService.linkProviders.length && !r6) for (let l2 = 0; l2 < this._activeProviderReplies.size; l2++) {
      let a = this._activeProviderReplies.get(l2)?.find((u2) => this._linkAtPosition(u2.link, i8));
      if (a) {
        r6 = true, this._handleNewLink(a);
        break;
      }
    }
    return r6;
  }
  _handleMouseDown() {
    this._mouseDownLink = this._currentLink;
  }
  _handleMouseUp(e) {
    if (!this._currentLink) return;
    let i8 = this._positionFromMouseEvent(e, this._element, this._mouseService);
    i8 && this._mouseDownLink && Ec(this._mouseDownLink.link, this._currentLink.link) && this._linkAtPosition(this._currentLink.link, i8) && this._currentLink.link.activate(e, this._currentLink.link.text);
  }
  _clearCurrentLink(e, i8) {
    !this._currentLink || !this._lastMouseEvent || (!e || !i8 || this._currentLink.link.range.start.y >= e && this._currentLink.link.range.end.y <= i8) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, Ne2(this._linkCacheDisposables), this._linkCacheDisposables.length = 0);
  }
  _handleNewLink(e) {
    if (!this._lastMouseEvent) return;
    let i8 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
    i8 && this._linkAtPosition(e.link, i8) && (this._currentLink = e, this._currentLink.state = { decorations: { underline: e.link.decorations === void 0 ? true : e.link.decorations.underline, pointerCursor: e.link.decorations === void 0 ? true : e.link.decorations.pointerCursor }, isHovered: true }, this._linkHover(this._element, e.link, this._lastMouseEvent), e.link.decorations = {}, Object.defineProperties(e.link.decorations, { pointerCursor: { get: () => this._currentLink?.state?.decorations.pointerCursor, set: (r6) => {
      this._currentLink?.state && this._currentLink.state.decorations.pointerCursor !== r6 && (this._currentLink.state.decorations.pointerCursor = r6, this._currentLink.state.isHovered && this._element.classList.toggle("xterm-cursor-pointer", r6));
    } }, underline: { get: () => this._currentLink?.state?.decorations.underline, set: (r6) => {
      this._currentLink?.state && this._currentLink?.state?.decorations.underline !== r6 && (this._currentLink.state.decorations.underline = r6, this._currentLink.state.isHovered && this._fireUnderlineEvent(e.link, r6));
    } } }), this._linkCacheDisposables.push(this._renderService.onRenderedViewportChange((r6) => {
      if (!this._currentLink) return;
      let n = r6.start === 0 ? 0 : r6.start + 1 + this._bufferService.buffer.ydisp, o2 = this._bufferService.buffer.ydisp + 1 + r6.end;
      if (this._currentLink.link.range.start.y >= n && this._currentLink.link.range.end.y <= o2 && (this._clearCurrentLink(n, o2), this._lastMouseEvent)) {
        let l2 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
        l2 && this._askForLink(l2, false);
      }
    })));
  }
  _linkHover(e, i8, r6) {
    this._currentLink?.state && (this._currentLink.state.isHovered = true, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(i8, true), this._currentLink.state.decorations.pointerCursor && e.classList.add("xterm-cursor-pointer")), i8.hover && i8.hover(r6, i8.text);
  }
  _fireUnderlineEvent(e, i8) {
    let r6 = e.range, n = this._bufferService.buffer.ydisp, o2 = this._createLinkUnderlineEvent(r6.start.x - 1, r6.start.y - n - 1, r6.end.x, r6.end.y - n - 1, void 0);
    (i8 ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(o2);
  }
  _linkLeave(e, i8, r6) {
    this._currentLink?.state && (this._currentLink.state.isHovered = false, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(i8, false), this._currentLink.state.decorations.pointerCursor && e.classList.remove("xterm-cursor-pointer")), i8.leave && i8.leave(r6, i8.text);
  }
  _linkAtPosition(e, i8) {
    let r6 = e.range.start.y * this._bufferService.cols + e.range.start.x, n = e.range.end.y * this._bufferService.cols + e.range.end.x, o2 = i8.y * this._bufferService.cols + i8.x;
    return r6 <= o2 && o2 <= n;
  }
  _positionFromMouseEvent(e, i8, r6) {
    let n = r6.getCoords(e, i8, this._bufferService.cols, this._bufferService.rows);
    if (n) return { x: n[0], y: n[1] + this._bufferService.buffer.ydisp };
  }
  _createLinkUnderlineEvent(e, i8, r6, n, o2) {
    return { x1: e, y1: i8, x2: r6, y2: n, cols: this._bufferService.cols, fg: o2 };
  }
};
hi = M3([S(1, Dt2), S(2, ce3), S(3, F2), S(4, lr)], hi);
function Ec(s15, t) {
  return s15.text === t.text && s15.range.start.x === t.range.start.x && s15.range.start.y === t.range.start.y && s15.range.end.x === t.range.end.x && s15.range.end.y === t.range.end.y;
}
var yn2 = class extends Sn2 {
  constructor(e = {}) {
    super(e);
    this._linkifier = this._register(new ye4());
    this.browser = tn2;
    this._keyDownHandled = false;
    this._keyDownSeen = false;
    this._keyPressHandled = false;
    this._unprocessedDeadKey = false;
    this._accessibilityManager = this._register(new ye4());
    this._onCursorMove = this._register(new v2());
    this.onCursorMove = this._onCursorMove.event;
    this._onKey = this._register(new v2());
    this.onKey = this._onKey.event;
    this._onRender = this._register(new v2());
    this.onRender = this._onRender.event;
    this._onSelectionChange = this._register(new v2());
    this.onSelectionChange = this._onSelectionChange.event;
    this._onTitleChange = this._register(new v2());
    this.onTitleChange = this._onTitleChange.event;
    this._onBell = this._register(new v2());
    this.onBell = this._onBell.event;
    this._onFocus = this._register(new v2());
    this._onBlur = this._register(new v2());
    this._onA11yCharEmitter = this._register(new v2());
    this._onA11yTabEmitter = this._register(new v2());
    this._onWillOpen = this._register(new v2());
    this._setup(), this._decorationService = this._instantiationService.createInstance(Tn), this._instantiationService.setService(Be4, this._decorationService), this._linkProviderService = this._instantiationService.createInstance(Qr2), this._instantiationService.setService(lr, this._linkProviderService), this._linkProviderService.registerLinkProvider(this._instantiationService.createInstance(wt2)), this._register(this._inputHandler.onRequestBell(() => this._onBell.fire())), this._register(this._inputHandler.onRequestRefreshRows((i8) => this.refresh(i8?.start ?? 0, i8?.end ?? this.rows - 1))), this._register(this._inputHandler.onRequestSendFocus(() => this._reportFocus())), this._register(this._inputHandler.onRequestReset(() => this.reset())), this._register(this._inputHandler.onRequestWindowsOptionsReport((i8) => this._reportWindowsOptions(i8))), this._register(this._inputHandler.onColor((i8) => this._handleColorEvent(i8))), this._register($2.forward(this._inputHandler.onCursorMove, this._onCursorMove)), this._register($2.forward(this._inputHandler.onTitleChange, this._onTitleChange)), this._register($2.forward(this._inputHandler.onA11yChar, this._onA11yCharEmitter)), this._register($2.forward(this._inputHandler.onA11yTab, this._onA11yTabEmitter)), this._register(this._bufferService.onResize((i8) => this._afterResize(i8.cols, i8.rows))), this._register(C3(() => {
      this._customKeyEventHandler = void 0, this.element?.parentNode?.removeChild(this.element);
    }));
  }
  get linkifier() {
    return this._linkifier.value;
  }
  get onFocus() {
    return this._onFocus.event;
  }
  get onBlur() {
    return this._onBlur.event;
  }
  get onA11yChar() {
    return this._onA11yCharEmitter.event;
  }
  get onA11yTab() {
    return this._onA11yTabEmitter.event;
  }
  get onWillOpen() {
    return this._onWillOpen.event;
  }
  _handleColorEvent(e) {
    if (this._themeService) for (let i8 of e) {
      let r6, n = "";
      switch (i8.index) {
        case 256:
          r6 = "foreground", n = "10";
          break;
        case 257:
          r6 = "background", n = "11";
          break;
        case 258:
          r6 = "cursor", n = "12";
          break;
        default:
          r6 = "ansi", n = "4;" + i8.index;
      }
      switch (i8.type) {
        case 0:
          let o2 = U4.toColorRGB(r6 === "ansi" ? this._themeService.colors.ansi[i8.index] : this._themeService.colors[r6]);
          this.coreService.triggerDataEvent(`${b.ESC}]${n};${ml(o2)}${fs2.ST}`);
          break;
        case 1:
          if (r6 === "ansi") this._themeService.modifyColors((l2) => l2.ansi[i8.index] = j2.toColor(...i8.color));
          else {
            let l2 = r6;
            this._themeService.modifyColors((a) => a[l2] = j2.toColor(...i8.color));
          }
          break;
        case 2:
          this._themeService.restoreColor(i8.index);
          break;
      }
    }
  }
  _setup() {
    super._setup(), this._customKeyEventHandler = void 0;
  }
  get buffer() {
    return this.buffers.active;
  }
  focus() {
    this.textarea && this.textarea.focus({ preventScroll: true });
  }
  _handleScreenReaderModeOptionChange(e) {
    e ? !this._accessibilityManager.value && this._renderService && (this._accessibilityManager.value = this._instantiationService.createInstance(Tt2, this)) : this._accessibilityManager.clear();
  }
  _handleTextAreaFocus(e) {
    this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(b.ESC + "[I"), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire();
  }
  blur() {
    return this.textarea?.blur();
  }
  _handleTextAreaBlur() {
    this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(b.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire();
  }
  _syncTextArea() {
    if (!this.textarea || !this.buffer.isCursorInViewport || this._compositionHelper.isComposing || !this._renderService) return;
    let e = this.buffer.ybase + this.buffer.y, i8 = this.buffer.lines.get(e);
    if (!i8) return;
    let r6 = Math.min(this.buffer.x, this.cols - 1), n = this._renderService.dimensions.css.cell.height, o2 = i8.getWidth(r6), l2 = this._renderService.dimensions.css.cell.width * o2, a = this.buffer.y * this._renderService.dimensions.css.cell.height, u2 = r6 * this._renderService.dimensions.css.cell.width;
    this.textarea.style.left = u2 + "px", this.textarea.style.top = a + "px", this.textarea.style.width = l2 + "px", this.textarea.style.height = n + "px", this.textarea.style.lineHeight = n + "px", this.textarea.style.zIndex = "-5";
  }
  _initGlobal() {
    this._bindKeys(), this._register(L3(this.element, "copy", (i8) => {
      this.hasSelection() && Vs(i8, this._selectionService);
    }));
    let e = (i8) => qs(i8, this.textarea, this.coreService, this.optionsService);
    this._register(L3(this.textarea, "paste", e)), this._register(L3(this.element, "paste", e)), Ss2 ? this._register(L3(this.element, "mousedown", (i8) => {
      i8.button === 2 && Pn2(i8, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
    })) : this._register(L3(this.element, "contextmenu", (i8) => {
      Pn2(i8, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
    })), Bi2 && this._register(L3(this.element, "auxclick", (i8) => {
      i8.button === 1 && Mn2(i8, this.textarea, this.screenElement);
    }));
  }
  _bindKeys() {
    this._register(L3(this.textarea, "keyup", (e) => this._keyUp(e), true)), this._register(L3(this.textarea, "keydown", (e) => this._keyDown(e), true)), this._register(L3(this.textarea, "keypress", (e) => this._keyPress(e), true)), this._register(L3(this.textarea, "compositionstart", () => this._compositionHelper.compositionstart())), this._register(L3(this.textarea, "compositionupdate", (e) => this._compositionHelper.compositionupdate(e))), this._register(L3(this.textarea, "compositionend", () => this._compositionHelper.compositionend())), this._register(L3(this.textarea, "input", (e) => this._inputEvent(e), true)), this._register(this.onRender(() => this._compositionHelper.updateCompositionElements()));
  }
  open(e) {
    if (!e) throw new Error("Terminal requires a parent element.");
    if (e.isConnected || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), this.element?.ownerDocument.defaultView && this._coreBrowserService) {
      this.element.ownerDocument.defaultView !== this._coreBrowserService.window && (this._coreBrowserService.window = this.element.ownerDocument.defaultView);
      return;
    }
    this._document = e.ownerDocument, this.options.documentOverride && this.options.documentOverride instanceof Document && (this._document = this.optionsService.rawOptions.documentOverride), this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), e.appendChild(this.element);
    let i8 = this._document.createDocumentFragment();
    this._viewportElement = this._document.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), i8.appendChild(this._viewportElement), this.screenElement = this._document.createElement("div"), this.screenElement.classList.add("xterm-screen"), this._register(L3(this.screenElement, "mousemove", (o2) => this.updateCursorStyle(o2))), this._helperContainer = this._document.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), i8.appendChild(this.screenElement);
    let r6 = this.textarea = this._document.createElement("textarea");
    this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", mi2.get()), Ts2 || this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this._register(this.optionsService.onSpecificOptionChange("disableStdin", () => r6.readOnly = this.optionsService.rawOptions.disableStdin)), this.textarea.readOnly = this.optionsService.rawOptions.disableStdin, this._coreBrowserService = this._register(this._instantiationService.createInstance(Jr2, this.textarea, e.ownerDocument.defaultView ?? window, this._document ?? typeof window < "u" ? window.document : null)), this._instantiationService.setService(ae2, this._coreBrowserService), this._register(L3(this.textarea, "focus", (o2) => this._handleTextAreaFocus(o2))), this._register(L3(this.textarea, "blur", () => this._handleTextAreaBlur())), this._helperContainer.appendChild(this.textarea), this._charSizeService = this._instantiationService.createInstance(jt2, this._document, this._helperContainer), this._instantiationService.setService(nt3, this._charSizeService), this._themeService = this._instantiationService.createInstance(ti2), this._instantiationService.setService(Re3, this._themeService), this._characterJoinerService = this._instantiationService.createInstance(ct), this._instantiationService.setService(or2, this._characterJoinerService), this._renderService = this._register(this._instantiationService.createInstance(Qt2, this.rows, this.screenElement)), this._instantiationService.setService(ce3, this._renderService), this._register(this._renderService.onRenderedViewportChange((o2) => this._onRender.fire(o2))), this.onResize((o2) => this._renderService.resize(o2.cols, o2.rows)), this._compositionView = this._document.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance($t2, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this._mouseService = this._instantiationService.createInstance(Xt2), this._instantiationService.setService(Dt2, this._mouseService);
    let n = this._linkifier.value = this._register(this._instantiationService.createInstance(hi, this.screenElement));
    this.element.appendChild(i8);
    try {
      this._onWillOpen.fire(this.element);
    } catch {
    }
    this._renderService.hasRenderer() || this._renderService.setRenderer(this._createRenderer()), this._register(this.onCursorMove(() => {
      this._renderService.handleCursorMove(), this._syncTextArea();
    })), this._register(this.onResize(() => this._renderService.handleResize(this.cols, this.rows))), this._register(this.onBlur(() => this._renderService.handleBlur())), this._register(this.onFocus(() => this._renderService.handleFocus())), this._viewport = this._register(this._instantiationService.createInstance(zt2, this.element, this.screenElement)), this._register(this._viewport.onRequestScrollLines((o2) => {
      super.scrollLines(o2, false), this.refresh(0, this.rows - 1);
    })), this._selectionService = this._register(this._instantiationService.createInstance(ei2, this.element, this.screenElement, n)), this._instantiationService.setService(Qs, this._selectionService), this._register(this._selectionService.onRequestScrollLines((o2) => this.scrollLines(o2.amount, o2.suppressScrollEvent))), this._register(this._selectionService.onSelectionChange(() => this._onSelectionChange.fire())), this._register(this._selectionService.onRequestRedraw((o2) => this._renderService.handleSelectionChanged(o2.start, o2.end, o2.columnSelectMode))), this._register(this._selectionService.onLinuxMouseSelection((o2) => {
      this.textarea.value = o2, this.textarea.focus(), this.textarea.select();
    })), this._register($2.any(this._onScroll.event, this._inputHandler.onScroll)(() => {
      this._selectionService.refresh(), this._viewport?.queueSync();
    })), this._register(this._instantiationService.createInstance(Gt2, this.screenElement)), this._register(L3(this.element, "mousedown", (o2) => this._selectionService.handleMouseDown(o2))), this.coreMouseService.areMouseEventsActive ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager.value = this._instantiationService.createInstance(Tt2, this)), this._register(this.optionsService.onSpecificOptionChange("screenReaderMode", (o2) => this._handleScreenReaderModeOptionChange(o2))), this.options.overviewRuler.width && (this._overviewRulerRenderer = this._register(this._instantiationService.createInstance(bt2, this._viewportElement, this.screenElement))), this.optionsService.onSpecificOptionChange("overviewRuler", (o2) => {
      !this._overviewRulerRenderer && o2 && this._viewportElement && this.screenElement && (this._overviewRulerRenderer = this._register(this._instantiationService.createInstance(bt2, this._viewportElement, this.screenElement)));
    }), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse();
  }
  _createRenderer() {
    return this._instantiationService.createInstance(Yt2, this, this._document, this.element, this.screenElement, this._viewportElement, this._helperContainer, this.linkifier);
  }
  bindMouse() {
    let e = this, i8 = this.element;
    function r6(l2) {
      let a = e._mouseService.getMouseReportCoords(l2, e.screenElement);
      if (!a) return false;
      let u2, h2;
      switch (l2.overrideType || l2.type) {
        case "mousemove":
          h2 = 32, l2.buttons === void 0 ? (u2 = 3, l2.button !== void 0 && (u2 = l2.button < 3 ? l2.button : 3)) : u2 = l2.buttons & 1 ? 0 : l2.buttons & 4 ? 1 : l2.buttons & 2 ? 2 : 3;
          break;
        case "mouseup":
          h2 = 0, u2 = l2.button < 3 ? l2.button : 3;
          break;
        case "mousedown":
          h2 = 1, u2 = l2.button < 3 ? l2.button : 3;
          break;
        case "wheel":
          if (e._customWheelEventHandler && e._customWheelEventHandler(l2) === false) return false;
          let c = l2.deltaY;
          if (c === 0 || e.coreMouseService.consumeWheelEvent(l2, e._renderService?.dimensions?.device?.cell?.height, e._coreBrowserService?.dpr) === 0) return false;
          h2 = c < 0 ? 0 : 1, u2 = 4;
          break;
        default:
          return false;
      }
      return h2 === void 0 || u2 === void 0 || u2 > 4 ? false : e.coreMouseService.triggerMouseEvent({ col: a.col, row: a.row, x: a.x, y: a.y, button: u2, action: h2, ctrl: l2.ctrlKey, alt: l2.altKey, shift: l2.shiftKey });
    }
    let n = { mouseup: null, wheel: null, mousedrag: null, mousemove: null }, o2 = { mouseup: (l2) => (r6(l2), l2.buttons || (this._document.removeEventListener("mouseup", n.mouseup), n.mousedrag && this._document.removeEventListener("mousemove", n.mousedrag)), this.cancel(l2)), wheel: (l2) => (r6(l2), this.cancel(l2, true)), mousedrag: (l2) => {
      l2.buttons && r6(l2);
    }, mousemove: (l2) => {
      l2.buttons || r6(l2);
    } };
    this._register(this.coreMouseService.onProtocolChange((l2) => {
      l2 ? (this.optionsService.rawOptions.logLevel === "debug" && this._logService.debug("Binding to mouse events:", this.coreMouseService.explainEvents(l2)), this.element.classList.add("enable-mouse-events"), this._selectionService.disable()) : (this._logService.debug("Unbinding from mouse events."), this.element.classList.remove("enable-mouse-events"), this._selectionService.enable()), l2 & 8 ? n.mousemove || (i8.addEventListener("mousemove", o2.mousemove), n.mousemove = o2.mousemove) : (i8.removeEventListener("mousemove", n.mousemove), n.mousemove = null), l2 & 16 ? n.wheel || (i8.addEventListener("wheel", o2.wheel, { passive: false }), n.wheel = o2.wheel) : (i8.removeEventListener("wheel", n.wheel), n.wheel = null), l2 & 2 ? n.mouseup || (n.mouseup = o2.mouseup) : (this._document.removeEventListener("mouseup", n.mouseup), n.mouseup = null), l2 & 4 ? n.mousedrag || (n.mousedrag = o2.mousedrag) : (this._document.removeEventListener("mousemove", n.mousedrag), n.mousedrag = null);
    })), this.coreMouseService.activeProtocol = this.coreMouseService.activeProtocol, this._register(L3(i8, "mousedown", (l2) => {
      if (l2.preventDefault(), this.focus(), !(!this.coreMouseService.areMouseEventsActive || this._selectionService.shouldForceSelection(l2))) return r6(l2), n.mouseup && this._document.addEventListener("mouseup", n.mouseup), n.mousedrag && this._document.addEventListener("mousemove", n.mousedrag), this.cancel(l2);
    })), this._register(L3(i8, "wheel", (l2) => {
      if (!n.wheel) {
        if (this._customWheelEventHandler && this._customWheelEventHandler(l2) === false) return false;
        if (!this.buffer.hasScrollback) {
          if (l2.deltaY === 0) return false;
          if (e.coreMouseService.consumeWheelEvent(l2, e._renderService?.dimensions?.device?.cell?.height, e._coreBrowserService?.dpr) === 0) return this.cancel(l2, true);
          let h2 = b.ESC + (this.coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (l2.deltaY < 0 ? "A" : "B");
          return this.coreService.triggerDataEvent(h2, true), this.cancel(l2, true);
        }
      }
    }, { passive: false }));
  }
  refresh(e, i8) {
    this._renderService?.refreshRows(e, i8);
  }
  updateCursorStyle(e) {
    this._selectionService?.shouldColumnSelect(e) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
  }
  _showCursor() {
    this.coreService.isCursorInitialized || (this.coreService.isCursorInitialized = true, this.refresh(this.buffer.y, this.buffer.y));
  }
  scrollLines(e, i8) {
    this._viewport ? this._viewport.scrollLines(e) : super.scrollLines(e, i8), this.refresh(0, this.rows - 1);
  }
  scrollPages(e) {
    this.scrollLines(e * (this.rows - 1));
  }
  scrollToTop() {
    this.scrollLines(-this._bufferService.buffer.ydisp);
  }
  scrollToBottom(e) {
    e && this._viewport ? this._viewport.scrollToLine(this.buffer.ybase, true) : this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
  }
  scrollToLine(e) {
    let i8 = e - this._bufferService.buffer.ydisp;
    i8 !== 0 && this.scrollLines(i8);
  }
  paste(e) {
    Cn2(e, this.textarea, this.coreService, this.optionsService);
  }
  attachCustomKeyEventHandler(e) {
    this._customKeyEventHandler = e;
  }
  attachCustomWheelEventHandler(e) {
    this._customWheelEventHandler = e;
  }
  registerLinkProvider(e) {
    return this._linkProviderService.registerLinkProvider(e);
  }
  registerCharacterJoiner(e) {
    if (!this._characterJoinerService) throw new Error("Terminal must be opened first");
    let i8 = this._characterJoinerService.register(e);
    return this.refresh(0, this.rows - 1), i8;
  }
  deregisterCharacterJoiner(e) {
    if (!this._characterJoinerService) throw new Error("Terminal must be opened first");
    this._characterJoinerService.deregister(e) && this.refresh(0, this.rows - 1);
  }
  get markers() {
    return this.buffer.markers;
  }
  registerMarker(e) {
    return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e);
  }
  registerDecoration(e) {
    return this._decorationService.registerDecoration(e);
  }
  hasSelection() {
    return this._selectionService ? this._selectionService.hasSelection : false;
  }
  select(e, i8, r6) {
    this._selectionService.setSelection(e, i8, r6);
  }
  getSelection() {
    return this._selectionService ? this._selectionService.selectionText : "";
  }
  getSelectionPosition() {
    if (!(!this._selectionService || !this._selectionService.hasSelection)) return { start: { x: this._selectionService.selectionStart[0], y: this._selectionService.selectionStart[1] }, end: { x: this._selectionService.selectionEnd[0], y: this._selectionService.selectionEnd[1] } };
  }
  clearSelection() {
    this._selectionService?.clearSelection();
  }
  selectAll() {
    this._selectionService?.selectAll();
  }
  selectLines(e, i8) {
    this._selectionService?.selectLines(e, i8);
  }
  _keyDown(e) {
    if (this._keyDownHandled = false, this._keyDownSeen = true, this._customKeyEventHandler && this._customKeyEventHandler(e) === false) return false;
    let i8 = this.browser.isMac && this.options.macOptionIsMeta && e.altKey;
    if (!i8 && !this._compositionHelper.keydown(e)) return this.options.scrollOnUserInput && this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(true), false;
    !i8 && (e.key === "Dead" || e.key === "AltGraph") && (this._unprocessedDeadKey = true);
    let r6 = Il(e, this.coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
    if (this.updateCursorStyle(e), r6.type === 3 || r6.type === 2) {
      let n = this.rows - 1;
      return this.scrollLines(r6.type === 2 ? -n : n), this.cancel(e, true);
    }
    if (r6.type === 1 && this.selectAll(), this._isThirdLevelShift(this.browser, e) || (r6.cancel && this.cancel(e, true), !r6.key) || e.key && !e.ctrlKey && !e.altKey && !e.metaKey && e.key.length === 1 && e.key.charCodeAt(0) >= 65 && e.key.charCodeAt(0) <= 90) return true;
    if (this._unprocessedDeadKey) return this._unprocessedDeadKey = false, true;
    if ((r6.key === b.ETX || r6.key === b.CR) && (this.textarea.value = ""), this._onKey.fire({ key: r6.key, domEvent: e }), this._showCursor(), this.coreService.triggerDataEvent(r6.key, true), !this.optionsService.rawOptions.screenReaderMode || e.altKey || e.ctrlKey) return this.cancel(e, true);
    this._keyDownHandled = true;
  }
  _isThirdLevelShift(e, i8) {
    let r6 = e.isMac && !this.options.macOptionIsMeta && i8.altKey && !i8.ctrlKey && !i8.metaKey || e.isWindows && i8.altKey && i8.ctrlKey && !i8.metaKey || e.isWindows && i8.getModifierState("AltGraph");
    return i8.type === "keypress" ? r6 : r6 && (!i8.keyCode || i8.keyCode > 47);
  }
  _keyUp(e) {
    this._keyDownSeen = false, !(this._customKeyEventHandler && this._customKeyEventHandler(e) === false) && (Tc(e) || this.focus(), this.updateCursorStyle(e), this._keyPressHandled = false);
  }
  _keyPress(e) {
    let i8;
    if (this._keyPressHandled = false, this._keyDownHandled || this._customKeyEventHandler && this._customKeyEventHandler(e) === false) return false;
    if (this.cancel(e), e.charCode) i8 = e.charCode;
    else if (e.which === null || e.which === void 0) i8 = e.keyCode;
    else if (e.which !== 0 && e.charCode !== 0) i8 = e.which;
    else return false;
    return !i8 || (e.altKey || e.ctrlKey || e.metaKey) && !this._isThirdLevelShift(this.browser, e) ? false : (i8 = String.fromCharCode(i8), this._onKey.fire({ key: i8, domEvent: e }), this._showCursor(), this.coreService.triggerDataEvent(i8, true), this._keyPressHandled = true, this._unprocessedDeadKey = false, true);
  }
  _inputEvent(e) {
    if (e.data && e.inputType === "insertText" && (!e.composed || !this._keyDownSeen) && !this.optionsService.rawOptions.screenReaderMode) {
      if (this._keyPressHandled) return false;
      this._unprocessedDeadKey = false;
      let i8 = e.data;
      return this.coreService.triggerDataEvent(i8, true), this.cancel(e), true;
    }
    return false;
  }
  resize(e, i8) {
    if (e === this.cols && i8 === this.rows) {
      this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure();
      return;
    }
    super.resize(e, i8);
  }
  _afterResize(e, i8) {
    this._charSizeService?.measure();
  }
  clear() {
    if (!(this.buffer.ybase === 0 && this.buffer.y === 0)) {
      this.buffer.clearAllMarkers(), this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
      for (let e = 1; e < this.rows; e++) this.buffer.lines.push(this.buffer.getBlankLine(X5));
      this._onScroll.fire({ position: this.buffer.ydisp }), this.refresh(0, this.rows - 1);
    }
  }
  reset() {
    this.options.rows = this.rows, this.options.cols = this.cols;
    let e = this._customKeyEventHandler;
    this._setup(), super.reset(), this._selectionService?.reset(), this._decorationService.reset(), this._customKeyEventHandler = e, this.refresh(0, this.rows - 1);
  }
  clearTextureAtlas() {
    this._renderService?.clearTextureAtlas();
  }
  _reportFocus() {
    this.element?.classList.contains("focus") ? this.coreService.triggerDataEvent(b.ESC + "[I") : this.coreService.triggerDataEvent(b.ESC + "[O");
  }
  _reportWindowsOptions(e) {
    if (this._renderService) switch (e) {
      case 0:
        let i8 = this._renderService.dimensions.css.canvas.width.toFixed(0), r6 = this._renderService.dimensions.css.canvas.height.toFixed(0);
        this.coreService.triggerDataEvent(`${b.ESC}[4;${r6};${i8}t`);
        break;
      case 1:
        let n = this._renderService.dimensions.css.cell.width.toFixed(0), o2 = this._renderService.dimensions.css.cell.height.toFixed(0);
        this.coreService.triggerDataEvent(`${b.ESC}[6;${o2};${n}t`);
        break;
    }
  }
  cancel(e, i8) {
    if (!(!this.options.cancelEvents && !i8)) return e.preventDefault(), e.stopPropagation(), false;
  }
};
function Tc(s15) {
  return s15.keyCode === 16 || s15.keyCode === 17 || s15.keyCode === 18;
}
var xn2 = class {
  constructor() {
    this._addons = [];
  }
  dispose() {
    for (let t = this._addons.length - 1; t >= 0; t--) this._addons[t].instance.dispose();
  }
  loadAddon(t, e) {
    let i8 = { instance: e, dispose: e.dispose, isDisposed: false };
    this._addons.push(i8), e.dispose = () => this._wrappedAddonDispose(i8), e.activate(t);
  }
  _wrappedAddonDispose(t) {
    if (t.isDisposed) return;
    let e = -1;
    for (let i8 = 0; i8 < this._addons.length; i8++) if (this._addons[i8] === t) {
      e = i8;
      break;
    }
    if (e === -1) throw new Error("Could not dispose an addon that has not been loaded");
    t.isDisposed = true, t.dispose.apply(t.instance), this._addons.splice(e, 1);
  }
};
var wn2 = class {
  constructor(t) {
    this._line = t;
  }
  get isWrapped() {
    return this._line.isWrapped;
  }
  get length() {
    return this._line.length;
  }
  getCell(t, e) {
    if (!(t < 0 || t >= this._line.length)) return e ? (this._line.loadCell(t, e), e) : this._line.loadCell(t, new q());
  }
  translateToString(t, e, i8) {
    return this._line.translateToString(t, e, i8);
  }
};
var Ji = class {
  constructor(t, e) {
    this._buffer = t;
    this.type = e;
  }
  init(t) {
    return this._buffer = t, this;
  }
  get cursorY() {
    return this._buffer.y;
  }
  get cursorX() {
    return this._buffer.x;
  }
  get viewportY() {
    return this._buffer.ydisp;
  }
  get baseY() {
    return this._buffer.ybase;
  }
  get length() {
    return this._buffer.lines.length;
  }
  getLine(t) {
    let e = this._buffer.lines.get(t);
    if (e) return new wn2(e);
  }
  getNullCell() {
    return new q();
  }
};
var Dn2 = class extends D3 {
  constructor(e) {
    super();
    this._core = e;
    this._onBufferChange = this._register(new v2());
    this.onBufferChange = this._onBufferChange.event;
    this._normal = new Ji(this._core.buffers.normal, "normal"), this._alternate = new Ji(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate(() => this._onBufferChange.fire(this.active));
  }
  get active() {
    if (this._core.buffers.active === this._core.buffers.normal) return this.normal;
    if (this._core.buffers.active === this._core.buffers.alt) return this.alternate;
    throw new Error("Active buffer is neither normal nor alternate");
  }
  get normal() {
    return this._normal.init(this._core.buffers.normal);
  }
  get alternate() {
    return this._alternate.init(this._core.buffers.alt);
  }
};
var Rn = class {
  constructor(t) {
    this._core = t;
  }
  registerCsiHandler(t, e) {
    return this._core.registerCsiHandler(t, (i8) => e(i8.toArray()));
  }
  addCsiHandler(t, e) {
    return this.registerCsiHandler(t, e);
  }
  registerDcsHandler(t, e) {
    return this._core.registerDcsHandler(t, (i8, r6) => e(i8, r6.toArray()));
  }
  addDcsHandler(t, e) {
    return this.registerDcsHandler(t, e);
  }
  registerEscHandler(t, e) {
    return this._core.registerEscHandler(t, e);
  }
  addEscHandler(t, e) {
    return this.registerEscHandler(t, e);
  }
  registerOscHandler(t, e) {
    return this._core.registerOscHandler(t, e);
  }
  addOscHandler(t, e) {
    return this.registerOscHandler(t, e);
  }
};
var Ln2 = class {
  constructor(t) {
    this._core = t;
  }
  register(t) {
    this._core.unicodeService.register(t);
  }
  get versions() {
    return this._core.unicodeService.versions;
  }
  get activeVersion() {
    return this._core.unicodeService.activeVersion;
  }
  set activeVersion(t) {
    this._core.unicodeService.activeVersion = t;
  }
};
var Ic = ["cols", "rows"];
var Ue2 = 0;
var Dl = class extends D3 {
  constructor(t) {
    super(), this._core = this._register(new yn2(t)), this._addonManager = this._register(new xn2()), this._publicOptions = { ...this._core.options };
    let e = (r6) => this._core.options[r6], i8 = (r6, n) => {
      this._checkReadonlyOptions(r6), this._core.options[r6] = n;
    };
    for (let r6 in this._core.options) {
      let n = { get: e.bind(this, r6), set: i8.bind(this, r6) };
      Object.defineProperty(this._publicOptions, r6, n);
    }
  }
  _checkReadonlyOptions(t) {
    if (Ic.includes(t)) throw new Error(`Option "${t}" can only be set in the constructor`);
  }
  _checkProposedApi() {
    if (!this._core.optionsService.rawOptions.allowProposedApi) throw new Error("You must set the allowProposedApi option to true to use proposed API");
  }
  get onBell() {
    return this._core.onBell;
  }
  get onBinary() {
    return this._core.onBinary;
  }
  get onCursorMove() {
    return this._core.onCursorMove;
  }
  get onData() {
    return this._core.onData;
  }
  get onKey() {
    return this._core.onKey;
  }
  get onLineFeed() {
    return this._core.onLineFeed;
  }
  get onRender() {
    return this._core.onRender;
  }
  get onResize() {
    return this._core.onResize;
  }
  get onScroll() {
    return this._core.onScroll;
  }
  get onSelectionChange() {
    return this._core.onSelectionChange;
  }
  get onTitleChange() {
    return this._core.onTitleChange;
  }
  get onWriteParsed() {
    return this._core.onWriteParsed;
  }
  get element() {
    return this._core.element;
  }
  get parser() {
    return this._parser || (this._parser = new Rn(this._core)), this._parser;
  }
  get unicode() {
    return this._checkProposedApi(), new Ln2(this._core);
  }
  get textarea() {
    return this._core.textarea;
  }
  get rows() {
    return this._core.rows;
  }
  get cols() {
    return this._core.cols;
  }
  get buffer() {
    return this._buffer || (this._buffer = this._register(new Dn2(this._core))), this._buffer;
  }
  get markers() {
    return this._checkProposedApi(), this._core.markers;
  }
  get modes() {
    let t = this._core.coreService.decPrivateModes, e = "none";
    switch (this._core.coreMouseService.activeProtocol) {
      case "X10":
        e = "x10";
        break;
      case "VT200":
        e = "vt200";
        break;
      case "DRAG":
        e = "drag";
        break;
      case "ANY":
        e = "any";
        break;
    }
    return { applicationCursorKeysMode: t.applicationCursorKeys, applicationKeypadMode: t.applicationKeypad, bracketedPasteMode: t.bracketedPasteMode, insertMode: this._core.coreService.modes.insertMode, mouseTrackingMode: e, originMode: t.origin, reverseWraparoundMode: t.reverseWraparound, sendFocusMode: t.sendFocus, synchronizedOutputMode: t.synchronizedOutput, wraparoundMode: t.wraparound };
  }
  get options() {
    return this._publicOptions;
  }
  set options(t) {
    for (let e in t) this._publicOptions[e] = t[e];
  }
  blur() {
    this._core.blur();
  }
  focus() {
    this._core.focus();
  }
  input(t, e = true) {
    this._core.input(t, e);
  }
  resize(t, e) {
    this._verifyIntegers(t, e), this._core.resize(t, e);
  }
  open(t) {
    this._core.open(t);
  }
  attachCustomKeyEventHandler(t) {
    this._core.attachCustomKeyEventHandler(t);
  }
  attachCustomWheelEventHandler(t) {
    this._core.attachCustomWheelEventHandler(t);
  }
  registerLinkProvider(t) {
    return this._core.registerLinkProvider(t);
  }
  registerCharacterJoiner(t) {
    return this._checkProposedApi(), this._core.registerCharacterJoiner(t);
  }
  deregisterCharacterJoiner(t) {
    this._checkProposedApi(), this._core.deregisterCharacterJoiner(t);
  }
  registerMarker(t = 0) {
    return this._verifyIntegers(t), this._core.registerMarker(t);
  }
  registerDecoration(t) {
    return this._checkProposedApi(), this._verifyPositiveIntegers(t.x ?? 0, t.width ?? 0, t.height ?? 0), this._core.registerDecoration(t);
  }
  hasSelection() {
    return this._core.hasSelection();
  }
  select(t, e, i8) {
    this._verifyIntegers(t, e, i8), this._core.select(t, e, i8);
  }
  getSelection() {
    return this._core.getSelection();
  }
  getSelectionPosition() {
    return this._core.getSelectionPosition();
  }
  clearSelection() {
    this._core.clearSelection();
  }
  selectAll() {
    this._core.selectAll();
  }
  selectLines(t, e) {
    this._verifyIntegers(t, e), this._core.selectLines(t, e);
  }
  dispose() {
    super.dispose();
  }
  scrollLines(t) {
    this._verifyIntegers(t), this._core.scrollLines(t);
  }
  scrollPages(t) {
    this._verifyIntegers(t), this._core.scrollPages(t);
  }
  scrollToTop() {
    this._core.scrollToTop();
  }
  scrollToBottom() {
    this._core.scrollToBottom();
  }
  scrollToLine(t) {
    this._verifyIntegers(t), this._core.scrollToLine(t);
  }
  clear() {
    this._core.clear();
  }
  write(t, e) {
    this._core.write(t, e);
  }
  writeln(t, e) {
    this._core.write(t), this._core.write(`\r
`, e);
  }
  paste(t) {
    this._core.paste(t);
  }
  refresh(t, e) {
    this._verifyIntegers(t, e), this._core.refresh(t, e);
  }
  reset() {
    this._core.reset();
  }
  clearTextureAtlas() {
    this._core.clearTextureAtlas();
  }
  loadAddon(t) {
    this._addonManager.loadAddon(this, t);
  }
  static get strings() {
    return { get promptLabel() {
      return mi2.get();
    }, set promptLabel(t) {
      mi2.set(t);
    }, get tooMuchOutput() {
      return _i2.get();
    }, set tooMuchOutput(t) {
      _i2.set(t);
    } };
  }
  _verifyIntegers(...t) {
    for (Ue2 of t) if (Ue2 === 1 / 0 || isNaN(Ue2) || Ue2 % 1 !== 0) throw new Error("This API only accepts integers");
  }
  _verifyPositiveIntegers(...t) {
    for (Ue2 of t) if (Ue2 && (Ue2 === 1 / 0 || isNaN(Ue2) || Ue2 % 1 !== 0 || Ue2 < 0)) throw new Error("This API only accepts positive integers");
  }
};

// lib/terminal-io.ts
var INPUT_MAX_BYTES = 64 * 1024;
function base64ToBytes(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}
function bytesToBase64(bytes) {
  let binary = "";
  const step = 8192;
  for (let index = 0; index < bytes.length; index += step) {
    binary += String.fromCharCode(...bytes.subarray(index, index + step));
  }
  return btoa(binary);
}
function encodeInputChunks(value) {
  const bytes = new TextEncoder().encode(value);
  const chunks = [];
  for (let offset = 0; offset < bytes.byteLength; offset += INPUT_MAX_BYTES) {
    chunks.push(
      bytesToBase64(
        bytes.subarray(
          offset,
          Math.min(offset + INPUT_MAX_BYTES, bytes.byteLength)
        )
      )
    );
  }
  return chunks;
}
var TITLE_MAX_LENGTH = 200;
var SHELL_PATH_TITLE = /^[^@\s:]+@[^:\s]+:(.+)$/u;
function isPathLike(path) {
  return path === "~" || path === "." || path.startsWith("~/") || path.startsWith("/") || path.startsWith("./");
}
function normalizeTerminalTitle(title) {
  const trimmed = title.trim();
  if (trimmed === "") return null;
  const path = SHELL_PATH_TITLE.exec(trimmed)?.[1]?.trimStart();
  if (path !== void 0 && path !== "" && isPathLike(path)) return null;
  return trimmed.slice(0, TITLE_MAX_LENGTH);
}

// lib/theme.ts
var probeCanvas = null;
function toHex(cssColor, fallback) {
  if (cssColor.trim() === "") return fallback;
  if (probeCanvas === null) {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    probeCanvas = canvas.getContext("2d", { willReadFrequently: true });
  }
  if (probeCanvas === null) return fallback;
  try {
    probeCanvas.clearRect(0, 0, 1, 1);
    probeCanvas.fillStyle = "#000000";
    probeCanvas.fillStyle = cssColor;
    if (probeCanvas.fillStyle === "#000000" && cssColor !== "#000000") {
      return fallback;
    }
    probeCanvas.fillRect(0, 0, 1, 1);
    const [r6, g2, b2] = probeCanvas.getImageData(0, 0, 1, 1).data;
    return `#${[r6, g2, b2].map((v3) => v3.toString(16).padStart(2, "0")).join("")}`;
  } catch {
    return fallback;
  }
}
function luminance(hex) {
  const r6 = Number.parseInt(hex.slice(1, 3), 16) / 255;
  const g2 = Number.parseInt(hex.slice(3, 5), 16) / 255;
  const b2 = Number.parseInt(hex.slice(5, 7), 16) / 255;
  return 0.2126 * r6 + 0.7152 * g2 + 0.0722 * b2;
}
var ANSI_TOKEN_NAMES = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "brightBlack",
  "brightRed",
  "brightGreen",
  "brightYellow",
  "brightBlue",
  "brightMagenta",
  "brightCyan",
  "brightWhite"
];
var DARK_ANSI = {
  black: "#3b4048",
  red: "#e06c75",
  green: "#98c379",
  yellow: "#e5c07b",
  blue: "#61afef",
  magenta: "#c678dd",
  cyan: "#56b6c2",
  white: "#abb2bf",
  brightBlack: "#5c6370",
  brightRed: "#ef7a85",
  brightGreen: "#a9d47f",
  brightYellow: "#f0ca8e",
  brightBlue: "#7fbdf5",
  brightMagenta: "#d391e6",
  brightCyan: "#68c4cf",
  brightWhite: "#e6e9ef"
};
var LIGHT_ANSI = {
  black: "#3b4252",
  red: "#c9184a",
  green: "#3f7d20",
  yellow: "#9a6700",
  blue: "#1f6feb",
  magenta: "#8250df",
  cyan: "#137a7f",
  white: "#5c6370",
  brightBlack: "#7a828e",
  brightRed: "#e5484d",
  brightGreen: "#4f9a2b",
  brightYellow: "#b8860b",
  brightBlue: "#3b82f6",
  brightMagenta: "#a371f7",
  brightCyan: "#199aa1",
  brightWhite: "#2e3440"
};
function token(scope, name, fallback) {
  const raw = getComputedStyle(scope).getPropertyValue(name);
  return toHex(raw.trim(), fallback);
}
function resolveAnsi(scope, fallback) {
  const palette = {};
  ANSI_TOKEN_NAMES.forEach((name, index) => {
    palette[name] = token(scope, `--ansi-${index}`, fallback[name]);
  });
  return palette;
}
function resolveTerminalTheme(scope) {
  const background = token(scope, "--card", "#16181d");
  const foreground = token(scope, "--card-foreground", "#e6e9ef");
  const isDark = luminance(background) < 0.5;
  const ansi = resolveAnsi(scope, isDark ? DARK_ANSI : LIGHT_ANSI);
  return {
    isDark,
    xterm: {
      background,
      foreground,
      cursor: token(scope, "--primary", foreground),
      cursorAccent: background,
      // 45% alpha keeps the glyphs readable through the selection in both modes.
      selectionBackground: `${token(scope, "--primary", "#5b8cff")}73`,
      ...ansi
    }
  };
}
var NERD_FONTS = '"JetBrainsMono Nerd Font Mono", "MesloLGS NF", "Symbols Nerd Font Mono"';
var GENERIC_MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace';
var BUNDLED_SYMBOLS = '"BB FT Nerd Symbols"';
function resolveMonoFont(scope) {
  const declared = getComputedStyle(scope).getPropertyValue("--font-mono").trim();
  const host = declared === "" || declared.includes("var(") ? null : declared;
  return [NERD_FONTS, host, GENERIC_MONO, BUNDLED_SYMBOLS].filter((part) => part !== null).join(", ");
}

// lib/pump.ts
var FAST_INTERVAL = 40;
var SLOW_INTERVAL = 320;
var INPUT_FLUSH_MS = 4;
var RESIZE_DEBOUNCE_MS = 90;
var SCROLLBACK_LINES = 1e4;
var UNICODE_VERSION = "11";
var TerminalPump = class {
  terminal;
  fitAddon = new o();
  options;
  nextSeq = 0;
  interval = FAST_INTERVAL;
  pollTimer = null;
  /**
   * True from the moment a read leaves until its reply is applied. Without it,
   * a keystroke or a tab switch arriving mid-request would arm a second poll
   * carrying the same `sinceSeq`, and both replies would write the same bytes
   * into xterm — invisible on localhost, constant on a remote host.
   */
  reading = false;
  restartRequested = false;
  flushTimer = null;
  resizeTimer = null;
  outbox = [];
  writeChain = Promise.resolve();
  status = "connecting";
  visible = false;
  started = false;
  disposed = false;
  resizeObserver = null;
  /**
   * Non-zero while replayed scrollback is still being parsed. xterm answers
   * some sequences (cursor-position reports, device attributes) through onData,
   * and replaying historical output makes it answer them all over again — so
   * without this the shell receives a burst of synthetic input on every attach.
   */
  replayWrites = 0;
  /** Ctrl held by the on-screen bar, consumed by the next character typed. */
  ctrlArmed = false;
  constructor(options) {
    this.options = options;
    const theme = resolveTerminalTheme(options.container);
    this.terminal = new Dl({
      fontSize: options.fontSize,
      fontFamily: resolveMonoFont(options.container),
      theme: theme.xterm,
      cursorBlink: true,
      convertEol: true,
      scrollback: SCROLLBACK_LINES,
      // Unicode 11 widths need the proposed API surface, same as bb's terminal.
      allowProposedApi: true,
      // Trim the default row gap; the window is small and vertical space is
      // the scarcest thing in it.
      lineHeight: 1.15
    });
    this.terminal.loadAddon(this.fitAddon);
    this.terminal.loadAddon(new Ke());
    this.terminal.unicode.activeVersion = UNICODE_VERSION;
    this.terminal.loadAddon(
      new L2((event, uri) => {
        event.preventDefault();
        window.open(uri, "_blank", "noopener,noreferrer");
      })
    );
    this.loadWebglRenderer();
    this.terminal.open(options.container);
    this.observeContainer();
    this.terminal.onTitleChange((title) => {
      if (this.replayWrites > 0 || this.disposed) return;
      this.options.onTitle?.(normalizeTerminalTitle(title));
    });
    this.terminal.onData((data) => {
      if (this.replayWrites > 0) return;
      this.handleInput(data);
    });
    this.terminal.onResize(({ cols, rows }) => {
      this.scheduleResize(cols, rows);
    });
    this.terminal.attachCustomKeyEventHandler((event) => {
      if (event.type !== "keydown") return true;
      if (this.ctrlArmed && !event.ctrlKey && !event.metaKey && !event.altKey) {
        const code = controlCode(event.key);
        if (code !== null) {
          this.setCtrlArmed(false);
          this.handleInput(code);
          return false;
        }
      }
      if (event.ctrlKey && event.key === "`") {
        this.options.onToggleRequested();
        return false;
      }
      if ((event.metaKey || event.ctrlKey) && event.key === "c" && this.terminal.hasSelection()) {
        void navigator.clipboard?.writeText(this.terminal.getSelection());
        return false;
      }
      if (event.metaKey && event.key === "k") {
        this.terminal.clear();
        return false;
      }
      return true;
    });
  }
  /**
   * Refit whenever the box actually changes, not only when the window commits a
   * drag. A font-size change, the tab strip wrapping, or the bb window itself
   * resizing all move this container without any gesture the window hears about,
   * and an unfitted xterm reports stale cols/rows to the pty.
   */
  observeContainer() {
    if (typeof ResizeObserver === "undefined") return;
    let frame = null;
    this.resizeObserver = new ResizeObserver(() => {
      if (frame !== null || this.disposed) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        if (!this.disposed) this.fit();
      });
    });
    this.resizeObserver.observe(this.options.container);
  }
  /**
   * WebGL is best-effort: a failed construction, a refused context, or a driver
   * that later drops the context all fall back to the DOM renderer rather than
   * leaving a dead canvas. Mirrors what bb's own terminal does.
   */
  loadWebglRenderer() {
    let addon = null;
    let contextLoss = null;
    try {
      addon = new xr();
      contextLoss = addon.onContextLoss(() => {
        contextLoss?.dispose();
        addon?.dispose();
      });
      this.terminal.loadAddon(addon);
    } catch {
      contextLoss?.dispose();
      addon?.dispose();
    }
  }
  /** Track replay writes so onData/onTitleChange stay muted until they land. */
  writeOutput(bytes, isReplay) {
    if (!isReplay) {
      this.terminal.write(bytes);
      return;
    }
    this.replayWrites += 1;
    this.terminal.write(bytes, () => {
      this.replayWrites -= 1;
    });
  }
  /**
   * Everything the shell receives goes through here — real keystrokes and the
   * on-screen bar alike — so the dead-prompt restart works from both.
   */
  handleInput(data) {
    if (this.disposed) return;
    if (this.status === "exited" && data.includes("\r")) {
      if (this.restartRequested) return;
      this.restartRequested = true;
      this.options.onRequestRestart();
      return;
    }
    this.queueInput(data);
  }
  /** Write bytes as if they had been typed. Used by the on-screen key bar. */
  send(data) {
    this.handleInput(data);
  }
  /** True when the program asked for SS3 arrows (vim, less, anything full-screen). */
  applicationCursorKeys() {
    return this.terminal.modes.applicationCursorKeysMode;
  }
  setCtrlArmed(armed) {
    if (this.ctrlArmed === armed) return;
    this.ctrlArmed = armed;
    this.options.onCtrlArmed?.(armed);
  }
  blur() {
    this.terminal.blur();
  }
  setStatus(status, detail = null) {
    if (this.status === status && detail === null) return;
    this.status = status;
    this.options.onStatus(status, detail);
  }
  queueInput(data) {
    this.outbox.push(data);
    if (this.flushTimer !== null) return;
    this.flushTimer = window.setTimeout(() => {
      this.flushTimer = null;
      this.flushInput();
    }, INPUT_FLUSH_MS);
  }
  flushInput() {
    const pending = this.outbox.join("");
    this.outbox = [];
    if (pending === "" || this.disposed) return;
    for (const dataBase64 of encodeInputChunks(pending)) {
      this.writeChain = this.writeChain.then(
        () => this.options.rpc.call("write", {
          terminalId: this.options.terminalId,
          dataBase64
        })
      ).catch((error) => {
        this.setStatus(
          "error",
          error instanceof Error ? error.message : "Write failed"
        );
      });
    }
    this.interval = FAST_INTERVAL;
    if (this.pollTimer !== null) this.schedule(FAST_INTERVAL);
  }
  scheduleResize(cols, rows) {
    if (this.resizeTimer !== null) window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => {
      this.resizeTimer = null;
      if (this.disposed) return;
      void this.options.rpc.call("resize", { terminalId: this.options.terminalId, cols, rows }).catch(() => {
      });
    }, RESIZE_DEBOUNCE_MS);
  }
  stopPolling() {
    if (this.pollTimer !== null) {
      window.clearTimeout(this.pollTimer);
      this.pollTimer = null;
    }
  }
  schedule(delay) {
    this.stopPolling();
    if (this.disposed || !this.visible || !this.started) return;
    if (this.reading) return;
    this.pollTimer = window.setTimeout(() => void this.poll(), delay);
  }
  // What to do once the read settles. Decided inside the try, acted on after
  // the finally has cleared `reading` — an early return would run the finally
  // and skip the follow-up, leaving the loop dead.
  async poll() {
    this.pollTimer = null;
    if (this.disposed || !this.visible || this.reading) return;
    this.reading = true;
    let next = "schedule";
    try {
      const result = await this.options.rpc.call("read", {
        terminalId: this.options.terminalId,
        sinceSeq: this.nextSeq
      });
      if (this.disposed) {
        next = "stop";
      } else if (result.truncated && this.nextSeq > 0) {
        next = "replay";
      } else {
        for (const chunk of result.chunks) {
          this.writeOutput(base64ToBytes(chunk.dataBase64), false);
        }
        this.nextSeq = result.nextSeq;
        if (result.chunks.length > 0) {
          this.interval = FAST_INTERVAL;
          if (this.status !== "live") this.setStatus("live");
        } else if (result.status !== null && result.status !== "running" && result.status !== "starting") {
          this.reportExit(result.status, result.exitCode);
          next = "stop";
        } else {
          this.interval = Math.min(this.interval * 2, SLOW_INTERVAL);
          if (this.status !== "live") this.setStatus("live");
        }
      }
    } catch (error) {
      if (this.disposed) {
        next = "stop";
      } else {
        this.setStatus(
          "error",
          error instanceof Error ? error.message : "Read failed"
        );
        this.interval = SLOW_INTERVAL;
      }
    } finally {
      this.reading = false;
    }
    if (next === "replay") await this.replay();
    else if (next === "schedule") this.schedule(this.interval);
  }
  reportExit(status, exitCode) {
    this.stopPolling();
    const label = status === "gone" ? "Session closed" : exitCode === null ? "Shell exited" : `Shell exited with code ${exitCode}`;
    this.terminal.write(
      `\r
\x1B[2m[${label} \u2014 press Enter to start a new one]\x1B[0m\r
`
    );
    this.setStatus("exited", label);
  }
  /** Redraw the whole terminal from the session's retained scrollback. */
  async replay() {
    if (this.disposed || this.reading) return;
    this.reading = true;
    let ok = false;
    try {
      const result = await this.options.rpc.call("read", {
        terminalId: this.options.terminalId,
        sinceSeq: 0,
        replay: true
      });
      if (!this.disposed) {
        this.terminal.reset();
        for (const chunk of result.chunks) {
          this.writeOutput(base64ToBytes(chunk.dataBase64), true);
        }
        this.nextSeq = result.nextSeq;
        this.interval = FAST_INTERVAL;
        this.setStatus("live");
        ok = true;
      }
    } catch (error) {
      if (!this.disposed) {
        this.setStatus(
          "error",
          error instanceof Error ? error.message : "Could not attach"
        );
        this.interval = SLOW_INTERVAL;
        ok = true;
      }
    } finally {
      this.reading = false;
    }
    if (ok) this.schedule(this.interval);
  }
  /** Replay existing scrollback and begin polling. Call once, after fit(). */
  start() {
    if (this.started || this.disposed) return;
    this.started = true;
    void this.replay();
  }
  /** Visible drives polling: hidden tabs cost nothing. */
  setVisible(visible) {
    if (this.visible === visible) return;
    this.visible = visible;
    if (visible) {
      this.fit();
      this.interval = FAST_INTERVAL;
      this.schedule(0);
    } else {
      this.stopPolling();
    }
  }
  fit() {
    if (this.disposed) return;
    const { clientWidth, clientHeight } = this.options.container;
    if (clientWidth === 0 || clientHeight === 0) return;
    try {
      this.fitAddon.fit();
    } catch {
    }
  }
  focus() {
    this.terminal.focus();
  }
  cols() {
    return Math.max(this.terminal.cols, 2);
  }
  rows() {
    return Math.max(this.terminal.rows, 2);
  }
  setFontSize(fontSize) {
    if (this.terminal.options.fontSize === fontSize) return;
    this.terminal.options.fontSize = fontSize;
    this.fit();
  }
  refreshTheme() {
    this.terminal.options.theme = resolveTerminalTheme(
      this.options.container
    ).xterm;
  }
  dispose() {
    this.disposed = true;
    this.stopPolling();
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
    if (this.flushTimer !== null) window.clearTimeout(this.flushTimer);
    if (this.resizeTimer !== null) window.clearTimeout(this.resizeTimer);
    this.terminal.dispose();
  }
};

// components/terminal-view.tsx
function TerminalView({
  rpc,
  terminalId,
  visible,
  fontSize,
  themeVersion,
  fitVersion,
  onStatus,
  onTitle,
  onCtrlArmed,
  onRequestRestart,
  onToggleRequested,
  onPumpReady,
  onPumpGone
}) {
  const containerRef = useRef(null);
  const pumpRef = useRef(null);
  const handlersRef = useRef({
    onStatus,
    onTitle,
    onCtrlArmed,
    onRequestRestart,
    onToggleRequested
  });
  handlersRef.current = {
    onStatus,
    onTitle,
    onCtrlArmed,
    onRequestRestart,
    onToggleRequested
  };
  useEffect(() => {
    const container = containerRef.current;
    if (container === null) return;
    const pump = new TerminalPump({
      container,
      rpc,
      terminalId,
      fontSize,
      onStatus: (status, detail) => handlersRef.current.onStatus(terminalId, status, detail),
      onTitle: (title) => handlersRef.current.onTitle(terminalId, title),
      onCtrlArmed: (armed) => handlersRef.current.onCtrlArmed(armed),
      onRequestRestart: () => handlersRef.current.onRequestRestart(terminalId),
      onToggleRequested: () => handlersRef.current.onToggleRequested()
    });
    pumpRef.current = pump;
    onPumpReady(terminalId, pump);
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
  }, [terminalId]);
  useEffect(() => {
    pumpRef.current?.setVisible(visible);
    if (visible) pumpRef.current?.focus();
  }, [visible]);
  useEffect(() => {
    pumpRef.current?.setFontSize(fontSize);
  }, [fontSize]);
  useEffect(() => {
    pumpRef.current?.refreshTheme();
  }, [themeVersion]);
  useEffect(() => {
    if (visible) pumpRef.current?.fit();
  }, [fitVersion, visible]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: cn("size-full", visible ? "block" : "hidden")
    }
  );
}

// lib/controller.ts
var open = false;
var listeners = /* @__PURE__ */ new Set();
function emit() {
  for (const listener of listeners) listener();
}
var windowController = {
  isOpen: () => open,
  show() {
    if (open) return;
    open = true;
    emit();
  },
  hide() {
    if (!open) return;
    open = false;
    emit();
  },
  toggle() {
    open = !open;
    emit();
  },
  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }
};

// lib/frame.ts
var STORAGE_KEY = "bb-plugin-floating-terminal:frame:v5";
var MIN_WIDTH = 360;
var MIN_HEIGHT = 180;
var KEEP_VISIBLE = 140;
var GUTTER = 40;
function defaultFrame() {
  const width = Math.min(760, Math.max(MIN_WIDTH, window.innerWidth - 2 * GUTTER));
  const height = Math.min(
    460,
    Math.max(MIN_HEIGHT, window.innerHeight - 2 * GUTTER)
  );
  return clampFrame({
    x: GUTTER,
    y: window.innerHeight - height - GUTTER,
    width,
    height
  });
}
function clampFrame(frame) {
  const width = Math.max(MIN_WIDTH, Math.min(frame.width, window.innerWidth));
  const height = Math.max(
    MIN_HEIGHT,
    Math.min(frame.height, window.innerHeight)
  );
  return {
    width,
    height,
    x: Math.round(
      Math.min(Math.max(frame.x, KEEP_VISIBLE - width), window.innerWidth - KEEP_VISIBLE)
    ),
    // Never let the header (the only drag handle) go above the viewport.
    y: Math.round(Math.min(Math.max(frame.y, 0), window.innerHeight - 40))
  };
}
function loadFrame() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) return defaultFrame();
    const parsed = JSON.parse(raw);
    const numbers = [parsed.x, parsed.y, parsed.width, parsed.height];
    if (numbers.some((value) => typeof value !== "number" || !Number.isFinite(value))) {
      return defaultFrame();
    }
    return clampFrame(parsed);
  } catch {
    return defaultFrame();
  }
}
function saveFrame(frame) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(frame));
  } catch {
  }
}
var RESIZE_EDGES = [
  "n",
  "s",
  "e",
  "w",
  "ne",
  "nw",
  "se",
  "sw"
];
function trackPointer(element, compute, { getFrame, onChange, onCommit }, signal) {
  element.addEventListener(
    "pointerdown",
    (event) => {
      if (event.button !== 0) return;
      if (event.target?.closest("[data-no-drag]") != null) {
        return;
      }
      event.preventDefault();
      const startX = event.clientX;
      const startY = event.clientY;
      const startFrame = getFrame();
      let latest = startFrame;
      element.setPointerCapture(event.pointerId);
      const move = (moveEvent) => {
        latest = clampFrame(
          compute(moveEvent.clientX - startX, moveEvent.clientY - startY, startFrame)
        );
        onChange(latest);
      };
      const done = () => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerup", done);
        element.removeEventListener("pointercancel", done);
        onCommit(latest);
      };
      element.addEventListener("pointermove", move, { signal });
      element.addEventListener("pointerup", done, { signal });
      element.addEventListener("pointercancel", done, { signal });
    },
    { signal }
  );
}
function installDrag(handle, options, signal) {
  trackPointer(
    handle,
    (dx, dy, start) => ({ ...start, x: start.x + dx, y: start.y + dy }),
    options,
    signal
  );
}
function installResize(handle, edge, options, signal) {
  trackPointer(
    handle,
    (dx, dy, start) => {
      const next = { ...start };
      if (edge.includes("e")) next.width = start.width + dx;
      if (edge.includes("s")) next.height = start.height + dy;
      if (edge.includes("w")) {
        next.width = Math.max(MIN_WIDTH, start.width - dx);
        next.x = start.x + (start.width - next.width);
      }
      if (edge.includes("n")) {
        next.height = Math.max(MIN_HEIGHT, start.height - dy);
        next.y = start.y + (start.height - next.height);
      }
      return next;
    },
    options,
    signal
  );
}

// lib/rpc.ts
var PluginRpcCallError = class extends Error {
  code;
  constructor(message, code) {
    super(message);
    this.name = "PluginRpcCallError";
    this.code = code;
  }
};
function createRpcClient(pluginId) {
  return {
    async call(method, ...args) {
      const response = await fetch(
        `/api/v1/plugins/${pluginId}/rpc/${encodeURIComponent(method)}`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args[0] ?? null)
        }
      );
      let envelope;
      try {
        envelope = await response.json();
      } catch {
        throw new PluginRpcCallError(
          `${method} failed (HTTP ${response.status})`,
          "non_json_result"
        );
      }
      if (envelope.ok !== true) {
        const message = typeof envelope.error?.message === "string" ? envelope.error.message : `${method} failed (HTTP ${response.status})`;
        const code = typeof envelope.error?.code === "string" ? envelope.error.code : "handler_error";
        throw new PluginRpcCallError(message, code);
      }
      return envelope.result;
    }
  };
}

// lib/viewport.ts
var HEIGHT_VAR = "--bb-ft-viewport-height";
var TOP_VAR = "--bb-ft-viewport-top";
var KEYBOARD_MIN_PX = 120;
function trackVisualViewport(element, onChange) {
  const viewport = window.visualViewport;
  if (viewport === void 0 || viewport === null) {
    return () => {
    };
  }
  let lastKeyboardOpen = null;
  const apply = () => {
    element.style.setProperty(HEIGHT_VAR, `${Math.round(viewport.height)}px`);
    element.style.setProperty(TOP_VAR, `${Math.round(viewport.offsetTop)}px`);
    const hidden = window.innerHeight - viewport.height - viewport.offsetTop;
    const keyboardOpen = hidden > KEYBOARD_MIN_PX;
    element.dataset.keyboard = keyboardOpen ? "open" : "closed";
    if (keyboardOpen !== lastKeyboardOpen) {
      lastKeyboardOpen = keyboardOpen;
      onChange?.({ keyboardOpen });
    }
  };
  apply();
  viewport.addEventListener("resize", apply);
  viewport.addEventListener("scroll", apply);
  return () => {
    viewport.removeEventListener("resize", apply);
    viewport.removeEventListener("scroll", apply);
    element.style.removeProperty(HEIGHT_VAR);
    element.style.removeProperty(TOP_VAR);
    delete element.dataset.keyboard;
  };
}

// components/floating-terminal.tsx
var PLUGIN_ID = "floating-terminal";
var EDGE_CLASS = {
  n: "absolute inset-x-3 top-0 h-1.5 cursor-ns-resize",
  s: "absolute inset-x-3 bottom-0 h-1.5 cursor-ns-resize",
  e: "absolute inset-y-3 right-0 w-1.5 cursor-ew-resize",
  w: "absolute inset-y-3 left-0 w-1.5 cursor-ew-resize",
  ne: "absolute right-0 top-0 size-3 cursor-nesw-resize",
  nw: "absolute left-0 top-0 size-3 cursor-nwse-resize",
  se: "absolute bottom-0 right-0 size-3 cursor-nwse-resize",
  sw: "absolute bottom-0 left-0 size-3 cursor-nesw-resize"
};
var TITLE_RENAME_DEBOUNCE_MS = 500;
var DEFAULT_COLS = 80;
var DEFAULT_ROWS = 24;
function EmptyState({
  scopes,
  recentScopeKeys,
  showHosts,
  onPick
}) {
  return (
    // A column, not a row: `items-center` on a row container sizes the child
    // from its content, so a long directory list grew past the window and got
    // centre-clipped — the heading scrolled off the top edge and the list could
    // not scroll. As a column with `min-h-0` the child shrinks to the available
    // height instead, and the list inside it scrolls.
    /* @__PURE__ */ jsx("div", { className: "flex size-full min-h-0 flex-col items-center justify-center overflow-hidden p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-0 w-full min-w-0 max-w-md flex-col gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 flex-col gap-1 px-1", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-medium text-foreground", children: "Start a shell" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs leading-relaxed text-muted-foreground", children: "Pick where it runs. Shells keep going while this window is hidden." })
      ] }),
      /* @__PURE__ */ jsx(
        ShellPicker,
        {
          scopes,
          recentScopeKeys,
          showHosts,
          onPick,
          fill: true,
          className: "min-h-0 flex-1 rounded-lg border border-border bg-background/40"
        }
      )
    ] }) })
  );
}
function FloatingTerminal() {
  const open2 = useSyncExternalStore(
    windowController.subscribe,
    windowController.isOpen
  );
  const rpcRef = useRef(createRpcClient(PLUGIN_ID));
  const rpc = rpcRef.current;
  const sheet = useIsCompactViewport();
  const sheetRef = useRef(sheet);
  sheetRef.current = sheet;
  const [state, dispatch] = useReducer(tabsReducer, emptyTabs);
  const [scopes, setScopes] = useState([]);
  const [recentScopeKeys, setRecentScopeKeys] = useState([]);
  const [fontSize, setFontSize] = useState(13);
  const [shortcutEnabled, setShortcutEnabled] = useState(true);
  const [themeVersion, setThemeVersion] = useState(0);
  const [fitVersion, setFitVersion] = useState(0);
  const [ctrlArmed, setCtrlArmed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [armed, setArmed] = useState(false);
  const rootRef = useRef(null);
  const headerRef = useRef(null);
  const edgeRefs = useRef(/* @__PURE__ */ new Map());
  const pumps = useRef(/* @__PURE__ */ new Map());
  const restarting = useRef(/* @__PURE__ */ new Set());
  const frameRef = useRef(loadFrame());
  const applyFrame = useCallback((next) => {
    const node = rootRef.current;
    if (sheetRef.current) {
      if (node !== null) {
        node.style.removeProperty("left");
        node.style.removeProperty("top");
        node.style.removeProperty("width");
        node.style.removeProperty("height");
      }
      return;
    }
    frameRef.current = next;
    if (node === null) return;
    node.style.left = `${next.x}px`;
    node.style.top = `${next.y}px`;
    node.style.width = `${next.width}px`;
    node.style.height = `${next.height}px`;
  }, []);
  const commitFrame = useCallback(
    (next) => {
      applyFrame(next);
      saveFrame(next);
      setFitVersion((version4) => version4 + 1);
    },
    [applyFrame]
  );
  const activeIdRef = useRef(null);
  activeIdRef.current = state.activeId;
  const geometry = useCallback(() => {
    const activeId = activeIdRef.current;
    const pump = activeId === null ? null : pumps.current.get(activeId);
    return pump === void 0 || pump === null ? { cols: DEFAULT_COLS, rows: DEFAULT_ROWS } : { cols: pump.cols(), rows: pump.rows() };
  }, []);
  const sync = useCallback(async () => {
    try {
      const result = await rpc.call("init");
      setScopes(result.scopes);
      setRecentScopeKeys(result.recentScopeKeys);
      setFontSize(result.prefs.fontSize);
      setShortcutEnabled(result.prefs.shortcutEnabled);
      dispatch({ type: "synced", snapshot: result.snapshot });
    } catch {
      toast.error("Floating Terminal could not reach its backend.");
    }
  }, [rpc]);
  const openTab = useCallback(
    async (scopeKey) => {
      try {
        const result = await rpc.call("openTab", { scopeKey, ...geometry() });
        dispatch({
          type: "synced",
          snapshot: result.snapshot,
          focusId: result.opened.terminalId
        });
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Could not start a shell"
        );
        void sync();
      }
    },
    [rpc, sync, geometry]
  );
  const closeTab = useCallback(
    async (terminalId) => {
      try {
        const result = await rpc.call("closeTab", { terminalId });
        dispatch({ type: "synced", snapshot: result.snapshot });
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Could not close the shell"
        );
        void sync();
      }
    },
    [rpc, sync]
  );
  const restartTab = useCallback(
    async (terminalId) => {
      if (restarting.current.has(terminalId)) return;
      restarting.current.add(terminalId);
      try {
        const result = await rpc.call("restartTab", {
          terminalId,
          ...geometry()
        });
        dispatch({
          type: "synced",
          snapshot: result.snapshot,
          focusId: result.restarted.terminalId
        });
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Could not restart the shell"
        );
        void sync();
      } finally {
        restarting.current.delete(terminalId);
      }
    },
    [rpc, sync, geometry]
  );
  useEffect(() => {
    setCtrlArmed(false);
  }, [state.activeId]);
  const selectTab = useCallback(
    (terminalId) => {
      dispatch({ type: "activated", terminalId });
      void rpc.call("setActiveTab", { terminalId }).catch(() => {
      });
    },
    [rpc]
  );
  useEffect(() => {
    if (open2) setMounted(true);
  }, [open2]);
  useEffect(() => {
    if (!mounted || armed) return;
    const raf = window.requestAnimationFrame(() => setArmed(true));
    return () => window.cancelAnimationFrame(raf);
  }, [mounted, armed]);
  useEffect(() => {
    if (!open2) return;
    void sync();
  }, [open2, sync]);
  useEffect(() => {
    const header = headerRef.current;
    if (header === null || sheet) return;
    const aborter = new AbortController();
    const options = {
      getFrame: () => frameRef.current,
      onChange: applyFrame,
      onCommit: commitFrame
    };
    installDrag(header, options, aborter.signal);
    for (const edge of RESIZE_EDGES) {
      const node = edgeRefs.current.get(edge);
      if (node !== void 0) {
        installResize(node, edge, options, aborter.signal);
      }
    }
    return () => aborter.abort();
  }, [applyFrame, commitFrame, mounted, sheet]);
  useEffect(() => {
    applyFrame(sheet ? frameRef.current : loadFrame());
    setFitVersion((version4) => version4 + 1);
  }, [applyFrame, mounted, sheet]);
  useEffect(() => {
    if (!open2) return;
    applyFrame(clampFrame(frameRef.current));
    setFitVersion((version4) => version4 + 1);
  }, [open2, applyFrame]);
  useEffect(() => {
    const onResize = () => applyFrame(clampFrame(frameRef.current));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [applyFrame]);
  useEffect(() => {
    const node = rootRef.current;
    if (!sheet || node === null) return;
    return trackVisualViewport(node, () => {
      setFitVersion((version4) => version4 + 1);
    });
  }, [sheet, mounted]);
  useEffect(() => {
    const observer = new MutationObserver(
      () => setThemeVersion((version4) => version4 + 1)
    );
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style", "data-theme"]
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!shortcutEnabled) return;
    const onKeyDown = (event) => {
      if (event.ctrlKey && !event.metaKey && !event.altKey && event.key === "`") {
        event.preventDefault();
        windowController.toggle();
      }
    };
    window.addEventListener("keydown", onKeyDown, { capture: true });
    return () => window.removeEventListener("keydown", onKeyDown, { capture: true });
  }, [shortcutEnabled]);
  const onStatus = useCallback(
    (terminalId, status, detail) => {
      dispatch({ type: "status", terminalId, status, detail });
    },
    []
  );
  const onPumpReady = useCallback((terminalId, pump) => {
    pumps.current.set(terminalId, pump);
  }, []);
  const onPumpGone = useCallback((terminalId) => {
    pumps.current.delete(terminalId);
  }, []);
  const onRequestRestart = useCallback(
    (terminalId) => void restartTab(terminalId),
    [restartTab]
  );
  const titleTimers = useRef(/* @__PURE__ */ new Map());
  const lastTitles = useRef(/* @__PURE__ */ new Map());
  const onTitle = useCallback(
    (terminalId, title) => {
      if (lastTitles.current.get(terminalId) === title) return;
      lastTitles.current.set(terminalId, title);
      const pending = titleTimers.current.get(terminalId);
      if (pending !== void 0) window.clearTimeout(pending);
      titleTimers.current.set(
        terminalId,
        window.setTimeout(() => {
          titleTimers.current.delete(terminalId);
          void rpc.call("renameTab", { terminalId, title }).then(
            (result) => dispatch({ type: "synced", snapshot: result.snapshot })
          ).catch(() => {
          });
        }, TITLE_RENAME_DEBOUNCE_MS)
      );
    },
    [rpc]
  );
  useEffect(
    () => () => {
      for (const timer of titleTimers.current.values()) {
        window.clearTimeout(timer);
      }
    },
    []
  );
  const hide = useCallback(() => windowController.hide(), []);
  const activePump = useCallback(() => {
    const activeId = activeIdRef.current;
    if (activeId === null) return null;
    return pumps.current.get(activeId) ?? null;
  }, []);
  const onToolbarKey = useCallback(
    (key) => {
      const pump = activePump();
      if (pump === null) return;
      switch (key.kind) {
        case "send":
          pump.send(key.send ?? "");
          return;
        case "arrow":
          pump.send(
            arrowSequence(key.direction ?? "up", pump.applicationCursorKeys())
          );
          return;
        case "modifier":
          pump.setCtrlArmed(!ctrlArmed);
          return;
        case "action":
          if (key.id === "dismiss") {
            pump.blur();
            return;
          }
          if (key.id === "paste") {
            void navigator.clipboard?.readText().then((text) => {
              if (text !== "") pump.send(text);
            }).catch(() => {
              toast.error("Clipboard is not available here.");
            });
          }
          return;
      }
    },
    [activePump, ctrlArmed]
  );
  const onCtrlArmed = useCallback((armed2) => setCtrlArmed(armed2), []);
  const showHosts = new Set(scopes.map((scope) => scope.hostName)).size > 1;
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs(TooltipProvider2, { delayDuration: 400, children: [
    sheet ? /* @__PURE__ */ jsx(
      "div",
      {
        className: "bb-ft-backdrop",
        "data-state": open2 && armed ? "open" : "closed",
        "aria-hidden": "true",
        onPointerDown: hide
      }
    ) : null,
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: rootRef,
        role: "dialog",
        "aria-modal": "false",
        "aria-label": "Floating terminal",
        "aria-hidden": !open2,
        "data-state": open2 && armed ? "open" : "closed",
        "data-layout": sheet ? "sheet" : "window",
        className: "bb-ft-window fixed z-40 flex flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-2xl",
        children: [
          /* @__PURE__ */ jsx("div", { ref: headerRef, "data-bb-ft-handle": "", children: /* @__PURE__ */ jsx(
            TabBar,
            {
              tabs: state.tabs,
              activeId: state.activeId,
              scopes,
              recentScopeKeys,
              showHosts,
              onSelect: selectTab,
              onClose: (terminalId) => void closeTab(terminalId),
              onNewTab: (scopeKey) => void openTab(scopeKey),
              onRestart: () => {
                if (state.activeId !== null) void restartTab(state.activeId);
              },
              onHide: hide
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "relative min-h-0 flex-1 bg-card px-2 py-1.5", children: [
            state.tabs.map((tab) => /* @__PURE__ */ jsx(
              TerminalView,
              {
                rpc,
                terminalId: tab.terminalId,
                visible: open2 && tab.terminalId === state.activeId,
                fontSize,
                themeVersion,
                fitVersion,
                onStatus,
                onTitle,
                onCtrlArmed,
                onRequestRestart,
                onToggleRequested: hide,
                onPumpReady,
                onPumpGone
              },
              tab.terminalId
            )),
            state.tabs.length === 0 ? /* @__PURE__ */ jsx(
              EmptyState,
              {
                scopes,
                recentScopeKeys,
                showHosts,
                onPick: (scopeKey) => void openTab(scopeKey)
              }
            ) : null
          ] }),
          sheet && state.tabs.length > 0 ? /* @__PURE__ */ jsx(KeyToolbar, { ctrlArmed, onKey: onToolbarKey }) : null,
          sheet ? null : RESIZE_EDGES.map((edge) => /* @__PURE__ */ jsx(
            "div",
            {
              ref: (node) => {
                if (node === null) edgeRefs.current.delete(edge);
                else edgeRefs.current.set(edge, node);
              },
              className: EDGE_CLASS[edge] ?? "",
              "aria-hidden": "true"
            },
            edge
          ))
        ]
      }
    )
  ] });
}

// app.tsx
var app_default = definePluginApp((app) => {
  app.contentScripts.register({
    id: "floating-window",
    mount({ signal }) {
      const container = document.createElement("div");
      document.body.append(container);
      const root = createRoot(container);
      root.render(createElement(FloatingTerminal));
      signal.addEventListener(
        "abort",
        () => {
          queueMicrotask(() => root.unmount());
          container.remove();
        },
        { once: true }
      );
    }
  });
  app.slots.sidebarFooterAction({
    id: "toggle",
    title: "Terminal (Ctrl+`)",
    icon: "Terminal",
    run() {
      windowController.toggle();
    }
  });
});
export {
  app_default as default
};
/*! Bundled license information:

@xterm/addon-fit/lib/addon-fit.mjs:
@xterm/addon-unicode11/lib/addon-unicode11.mjs:
@xterm/addon-web-links/lib/addon-web-links.mjs:
@xterm/addon-webgl/lib/addon-webgl.mjs:
@xterm/xterm/lib/xterm.mjs:
  (**
   * Copyright (c) 2014-2024 The xterm.js authors. All rights reserved.
   * @license MIT
   *
   * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
   * @license MIT
   *
   * Originally forked from (with the author's permission):
   *   Fabrice Bellard's javascript vt100 for jslinux:
   *   http://bellard.org/jslinux/
   *   Copyright (c) 2011 Fabrice Bellard
   *)
*/
