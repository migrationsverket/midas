(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["3120"], {
18426(module, exports) {
/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


},
9526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BrowserOnly)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_useIsBrowser__rspack_import_2 = __webpack_require__(19863);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// Similar comp to the one described here:
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
function BrowserOnly(param) {
    let { children, fallback } = param;
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_2/* ["default"] */.A)();
    if (isBrowser) {
        if (typeof children !== 'function' && "production" === 'development') {}
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: children?.()
        });
    }
    return fallback ?? null;
}


},
9011(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ CodeBlock)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(19863);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(83941);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(61022);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

/**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */ function usePrismTheme() {
    const { prism } = (0,useThemeConfig/* .useThemeConfig */.p)();
    const { colorMode } = (0,contexts_colorMode/* .useColorMode */.G)();
    const lightModeTheme = prism.theme;
    const darkModeTheme = prism.darkTheme || lightModeTheme;
    const prismTheme = colorMode === 'dark' ? darkModeTheme : lightModeTheme;
    return prismTheme;
} //# sourceMappingURL=usePrismTheme.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(88287);
// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(18426);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(52260);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



const codeBlockTitleRegex = /title=(?<quote>["'])(?<title>.*?)\1/;
const metastringLinesRangeRegex = /\{(?<range>[\d,-]+)\}/;
// Supported types of highlight comments
const popularCommentPatterns = {
    js: {
        start: '\\/\\/',
        end: ''
    },
    jsBlock: {
        start: '\\/\\*',
        end: '\\*\\/'
    },
    jsx: {
        start: '\\{\\s*\\/\\*',
        end: '\\*\\/\\s*\\}'
    },
    bash: {
        start: '#',
        end: ''
    },
    html: {
        start: '<!--',
        end: '-->'
    }
};
const commentPatterns = {
    ...popularCommentPatterns,
    // minor comment styles
    lua: {
        start: '--',
        end: ''
    },
    wasm: {
        start: '\\;\\;',
        end: ''
    },
    tex: {
        start: '%',
        end: ''
    },
    vb: {
        start: "['‘’]",
        end: ''
    },
    vbnet: {
        start: "(?:_\\s*)?['‘’]",
        end: ''
    },
    rem: {
        start: '[Rr][Ee][Mm]\\b',
        end: ''
    },
    f90: {
        start: '!',
        end: ''
    },
    ml: {
        start: '\\(\\*',
        end: '\\*\\)'
    },
    cobol: {
        start: '\\*>',
        end: ''
    }
};
const popularCommentTypes = Object.keys(popularCommentPatterns);
function getCommentPattern(languages, magicCommentDirectives) {
    // To be more reliable, the opening and closing comment must match
    const commentPattern = languages.map((lang)=>{
        const { start, end } = commentPatterns[lang];
        return `(?:${start}\\s*(${magicCommentDirectives.flatMap((d)=>[
                d.line,
                d.block?.start,
                d.block?.end
            ].filter(Boolean)).join('|')})\\s*${end})`;
    }).join('|');
    // White space is allowed, but otherwise it should be on it's own line
    return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);
}
/**
 * Select comment styles based on language
 */ function getAllMagicCommentDirectiveStyles(lang, magicCommentDirectives) {
    switch(lang){
        case 'js':
        case 'javascript':
        case 'ts':
        case 'typescript':
            return getCommentPattern([
                'js',
                'jsBlock'
            ], magicCommentDirectives);
        case 'jsx':
        case 'tsx':
            return getCommentPattern([
                'js',
                'jsBlock',
                'jsx'
            ], magicCommentDirectives);
        case 'html':
            return getCommentPattern([
                'js',
                'jsBlock',
                'html'
            ], magicCommentDirectives);
        case 'python':
        case 'py':
        case 'bash':
            return getCommentPattern([
                'bash'
            ], magicCommentDirectives);
        case 'markdown':
        case 'md':
            // Text uses HTML, front matter uses bash
            return getCommentPattern([
                'html',
                'jsx',
                'bash'
            ], magicCommentDirectives);
        case 'tex':
        case 'latex':
        case 'matlab':
            return getCommentPattern([
                'tex'
            ], magicCommentDirectives);
        case 'lua':
        case 'haskell':
            return getCommentPattern([
                'lua'
            ], magicCommentDirectives);
        case 'sql':
            return getCommentPattern([
                'lua',
                'jsBlock'
            ], magicCommentDirectives);
        case 'wasm':
            return getCommentPattern([
                'wasm'
            ], magicCommentDirectives);
        case 'vb':
        case 'vba':
        case 'visual-basic':
            return getCommentPattern([
                'vb',
                'rem'
            ], magicCommentDirectives);
        case 'vbnet':
            return getCommentPattern([
                'vbnet',
                'rem'
            ], magicCommentDirectives);
        case 'batch':
            return getCommentPattern([
                'rem'
            ], magicCommentDirectives);
        case 'basic':
            return getCommentPattern([
                'rem',
                'f90'
            ], magicCommentDirectives);
        case 'fsharp':
            return getCommentPattern([
                'js',
                'ml'
            ], magicCommentDirectives);
        case 'ocaml':
        case 'sml':
            return getCommentPattern([
                'ml'
            ], magicCommentDirectives);
        case 'fortran':
            return getCommentPattern([
                'f90'
            ], magicCommentDirectives);
        case 'cobol':
            return getCommentPattern([
                'cobol'
            ], magicCommentDirectives);
        default:
            // All popular comment types
            return getCommentPattern(popularCommentTypes, magicCommentDirectives);
    }
}
function parseCodeBlockTitle(metastring) {
    return metastring?.match(codeBlockTitleRegex)?.groups.title ?? '';
}
function getMetaLineNumbersStart(metastring) {
    const showLineNumbersMeta = metastring?.split(' ').find((str)=>str.startsWith('showLineNumbers'));
    if (showLineNumbersMeta) {
        if (showLineNumbersMeta.startsWith('showLineNumbers=')) {
            const value = showLineNumbersMeta.replace('showLineNumbers=', '');
            return parseInt(value, 10);
        }
        return 1;
    }
    return undefined;
}
function getLineNumbersStart(param) {
    let { showLineNumbers, metastring } = param;
    const defaultStart = 1;
    if (typeof showLineNumbers === 'boolean') {
        return showLineNumbers ? defaultStart : undefined;
    }
    if (typeof showLineNumbers === 'number') {
        return showLineNumbers;
    }
    return getMetaLineNumbersStart(metastring);
}
// TODO Docusaurus v4: remove, only kept for internal retro-compatibility
//  See https://github.com/facebook/docusaurus/pull/11153
function containsLineNumbers(metastring) {
    return Boolean(metastring?.includes('showLineNumbers'));
}
function parseCodeLinesFromMetastring(code, param) {
    let { metastring, magicComments } = param;
    // Highlighted lines specified in props: don't parse the content
    if (metastring && metastringLinesRangeRegex.test(metastring)) {
        const linesRange = metastring.match(metastringLinesRangeRegex).groups.range;
        if (magicComments.length === 0) {
            throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${metastring}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);
        }
        const metastringRangeClassName = magicComments[0].className;
        const lines = parse_numeric_range_default()(linesRange).filter((n)=>n > 0).map((n)=>[
                n - 1,
                [
                    metastringRangeClassName
                ]
            ]);
        return {
            lineClassNames: Object.fromEntries(lines),
            code
        };
    }
    return null;
}
function parseCodeLinesFromContent(code, params) {
    const { language, magicComments } = params;
    if (language === undefined) {
        return {
            lineClassNames: {},
            code
        };
    }
    const directiveRegex = getAllMagicCommentDirectiveStyles(language, magicComments);
    // Go through line by line
    const lines = code.split(/\r?\n/);
    const blocks = Object.fromEntries(magicComments.map((d)=>[
            d.className,
            {
                start: 0,
                range: ''
            }
        ]));
    const lineToClassName = Object.fromEntries(magicComments.filter((d)=>d.line).map((param)=>{
        let { className, line } = param;
        return [
            line,
            className
        ];
    }));
    const blockStartToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map((param)=>{
        let { className, block } = param;
        return [
            block.start,
            className
        ];
    }));
    const blockEndToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map((param)=>{
        let { className, block } = param;
        return [
            block.end,
            className
        ];
    }));
    for(let lineNumber = 0; lineNumber < lines.length;){
        const line = lines[lineNumber];
        const match = line.match(directiveRegex);
        if (!match) {
            // Lines without directives are unchanged
            lineNumber += 1;
            continue;
        }
        const directive = match.slice(1).find((item)=>item !== undefined);
        if (lineToClassName[directive]) {
            blocks[lineToClassName[directive]].range += `${lineNumber},`;
        } else if (blockStartToClassName[directive]) {
            blocks[blockStartToClassName[directive]].start = lineNumber;
        } else if (blockEndToClassName[directive]) {
            blocks[blockEndToClassName[directive]].range += `${blocks[blockEndToClassName[directive]].start}-${lineNumber - 1},`;
        }
        lines.splice(lineNumber, 1);
    }
    const lineClassNames = {};
    Object.entries(blocks).forEach((param)=>{
        let [className, { range }] = param;
        parse_numeric_range_default()(range).forEach((l)=>{
            lineClassNames[l] ??= [];
            lineClassNames[l].push(className);
        });
    });
    return {
        code: lines.join('\n'),
        lineClassNames
    };
}
/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 */ function parseLines(code, params) {
    // Historical behavior: we remove last line break
    const newCode = code.replace(/\r?\n$/, '');
    // Historical behavior: we try one strategy after the other
    // we don't support mixing metastring ranges + magic comments
    return parseCodeLinesFromMetastring(newCode, {
        ...params
    }) ?? parseCodeLinesFromContent(newCode, {
        ...params
    });
}
/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */ function parseClassNameLanguage(className) {
    if (!className) {
        return undefined;
    }
    const languageClassName = className.split(' ').find((str)=>str.startsWith('language-'));
    return languageClassName?.replace(/language-/, '');
}
// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
    return language?.toLowerCase();
}
function getLanguage(params) {
    return normalizeLanguage(params.language ?? parseClassNameLanguage(params.className) ?? params.defaultLanguage) ?? 'text'; // There's always a language, required by Prism;
}
/**
 * This ensures that we always have the code block language as className
 * For MDX code blocks this is provided automatically by MDX
 * For JSX code blocks, the language gets added by this function
 * This ensures both cases lead to a consistent HTML output
 */ function ensureLanguageClassName(param) {
    let { className, language } = param;
    return (0,clsx/* ["default"] */.A)(className, language && !className?.includes(`language-${language}`) && `language-${language}`);
}
function createCodeBlockMetadata(params) {
    const language = getLanguage({
        language: params.language,
        defaultLanguage: params.defaultLanguage,
        className: params.className
    });
    const { lineClassNames, code } = parseLines(params.code, {
        metastring: params.metastring,
        magicComments: params.magicComments,
        language
    });
    const className = ensureLanguageClassName({
        className: params.className,
        language
    });
    const title = parseCodeBlockTitle(params.metastring) || params.title;
    const lineNumbersStart = getLineNumbersStart({
        showLineNumbers: params.showLineNumbers,
        metastring: params.metastring
    });
    return {
        codeInput: params.code,
        code,
        className,
        language,
        title,
        lineNumbersStart,
        lineClassNames
    };
}
function getPrismCssVariables(prismTheme) {
    const mapping = {
        color: '--prism-color',
        backgroundColor: '--prism-background-color'
    };
    const properties = {};
    Object.entries(prismTheme.plain).forEach((param)=>{
        let [key, value] = param;
        const varName = mapping[key];
        if (varName && typeof value === 'string') {
            properties[varName] = value;
        }
    });
    return properties;
}
const CodeBlockContext = /*#__PURE__*/ (0,react.createContext)(null);
function CodeBlockContextProvider(param) {
    let { metadata, wordWrap, children } = param;
    // Should we optimize this in 2 contexts?
    // Unlike metadata, wordWrap is stateful and likely to trigger re-renders
    const value = (0,react.useMemo)(()=>{
        return {
            metadata,
            wordWrap
        };
    }, [
        metadata,
        wordWrap
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockContext.Provider, {
        value: value,
        children: children
    });
}
function useCodeBlockContext() {
    const value = (0,react.useContext)(CodeBlockContext);
    if (value === null) {
        throw new reactUtils/* .ReactContextError */.dV('CodeBlockContextProvider');
    }
    return value;
} //# sourceMappingURL=codeBlockUtils.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const styles_module = ({"codeBlockContainer":"codeBlockContainer_Ckt0"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function CodeBlockContainer(param) {
    let { as: As, ...props } = param;
    const prismTheme = usePrismTheme();
    const prismCssVariables = getPrismCssVariables(prismTheme);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(As, {
        ...props,
        style: prismCssVariables,
        className: (0,clsx/* ["default"] */.A)(props.className, styles_module.codeBlockContainer, ThemeClassNames/* .ThemeClassNames.common.codeBlock */.G.common.codeBlock)
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Content_styles_module = ({"codeBlock":"codeBlock_bY9V","codeBlockStandalone":"codeBlockStandalone_MEMb","codeBlockLines":"codeBlockLines_e6Vv","codeBlockLinesWithNumbering":"codeBlockLinesWithNumbering_o6Pm"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/Element.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



// TODO Docusaurus v4: move this component at the root?
// This component only handles a rare edge-case: <pre><MyComp/></pre> in MDX
// <pre> tags in markdown map to CodeBlocks. They may contain JSX children.
// When children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockContainer, {
        as: "pre",
        tabIndex: 0,
        className: (0,clsx/* ["default"] */.A)(Content_styles_module.codeBlockStandalone, 'thin-scrollbar', className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
            className: Content_styles_module.codeBlockLines,
            children: children
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useMutationObserver.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

const DefaultOptions = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
function useMutationObserver(target, callback) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : DefaultOptions;
    const stableCallback = (0,reactUtils/* .useEvent */._q)(callback);
    // MutationObserver options are not nested much
    // so this should be to memo options in 99%
    // TODO handle options.attributeFilter array
    const stableOptions = (0,reactUtils/* .useShallowMemoObject */.Be)(options);
    (0,react.useEffect)(()=>{
        const observer = new MutationObserver(stableCallback);
        if (target) {
            observer.observe(target, stableOptions);
        }
        return ()=>observer.disconnect();
    }, [
        target,
        stableCallback,
        stableOptions
    ]);
} //# sourceMappingURL=useMutationObserver.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useCodeWordWrap.js


// Callback fires when the "hidden" attribute of a tabpanel changes
// See https://github.com/facebook/docusaurus/pull/7485
function useTabBecameVisibleCallback(codeBlockRef, callback) {
    const [hiddenTabElement, setHiddenTabElement] = (0,react.useState)();
    const updateHiddenTabElement = (0,react.useCallback)(()=>{
        // No need to observe non-hidden tabs
        // + we want to force a re-render when a tab becomes visible
        setHiddenTabElement(codeBlockRef.current?.closest('[role=tabpanel][hidden]'));
    }, [
        codeBlockRef,
        setHiddenTabElement
    ]);
    (0,react.useEffect)(()=>{
        updateHiddenTabElement();
    }, [
        updateHiddenTabElement
    ]);
    useMutationObserver(hiddenTabElement, (mutations)=>{
        mutations.forEach((mutation)=>{
            if (mutation.type === 'attributes' && mutation.attributeName === 'hidden') {
                callback();
                updateHiddenTabElement();
            }
        });
    }, {
        attributes: true,
        characterData: false,
        childList: false,
        subtree: false
    });
}
function useCodeWordWrap() {
    const [isEnabled, setIsEnabled] = (0,react.useState)(false);
    const [isCodeScrollable, setIsCodeScrollable] = (0,react.useState)(false);
    const codeBlockRef = (0,react.useRef)(null);
    const toggle = (0,react.useCallback)(()=>{
        const codeElement = codeBlockRef.current.querySelector('code');
        if (isEnabled) {
            codeElement.removeAttribute('style');
        } else {
            codeElement.style.whiteSpace = 'pre-wrap';
            // When code wrap is enabled, we want to avoid a scrollbar in any case
            // Ensure that very very long words/strings/tokens still wrap
            codeElement.style.overflowWrap = 'anywhere';
        }
        setIsEnabled((value)=>!value);
    }, [
        codeBlockRef,
        isEnabled
    ]);
    const updateCodeIsScrollable = (0,react.useCallback)(()=>{
        const { scrollWidth, clientWidth } = codeBlockRef.current;
        const isScrollable = scrollWidth > clientWidth || codeBlockRef.current.querySelector('code').hasAttribute('style');
        setIsCodeScrollable(isScrollable);
    }, [
        codeBlockRef
    ]);
    useTabBecameVisibleCallback(codeBlockRef, updateCodeIsScrollable);
    (0,react.useEffect)(()=>{
        updateCodeIsScrollable();
    }, [
        isEnabled,
        updateCodeIsScrollable
    ]);
    (0,react.useEffect)(()=>{
        window.addEventListener('resize', updateCodeIsScrollable, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('resize', updateCodeIsScrollable);
        };
    }, [
        updateCodeIsScrollable
    ]);
    return {
        codeBlockRef,
        isEnabled,
        isCodeScrollable,
        toggle
    };
} //# sourceMappingURL=useCodeWordWrap.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Title/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Just a pass-through component that users can swizzle and customize
function CodeBlockTitle(param) {
    let { children } = param;
    return children;
}

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs
var dist = __webpack_require__(71765);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/Token/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
// Pass-through components that users can swizzle and customize
function CodeBlockLineToken(param) {
    let { line, token, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        ...props
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Line_styles_module = ({"codeLine":"codeLine_lJS_","codeLineNumber":"codeLineNumber_Tfdd","codeLineContent":"codeLineContent_feaV"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



// This <br/ seems useful when the line has no content to prevent collapsing.
// For code blocks with "diff" languages, this makes the empty lines collapse to
// zero height lines, which is undesirable.
// See also https://github.com/facebook/docusaurus/pull/11565
function LineBreak() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {});
}
// Replaces single lines with '\n' by '' so that we don't end up with
// duplicate line breaks (the '\n' + the artificial <br/> above)
// see also https://github.com/facebook/docusaurus/pull/11565
function fixLineBreak(line) {
    const singleLineBreakToken = line.length === 1 && line[0].content === '\n' ? line[0] : undefined;
    if (singleLineBreakToken) {
        return [
            {
                ...singleLineBreakToken,
                content: ''
            }
        ];
    }
    return line;
}
function CodeBlockLine(param) {
    let { line: lineProp, classNames, showLineNumbers, getLineProps, getTokenProps } = param;
    const line = fixLineBreak(lineProp);
    const lineProps = getLineProps({
        line,
        className: (0,clsx/* ["default"] */.A)(classNames, showLineNumbers && Line_styles_module.codeLine)
    });
    const lineTokens = line.map((token, key)=>{
        const tokenProps = getTokenProps({
            token
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockLineToken, {
            ...tokenProps,
            line: line,
            token: token,
            children: tokenProps.children
        }, key);
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ...lineProps,
        children: [
            showLineNumbers ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: Line_styles_module.codeLineNumber
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: Line_styles_module.codeLineContent,
                        children: lineTokens
                    })
                ]
            }) : lineTokens,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LineBreak, {})
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






// TODO Docusaurus v4: remove useless forwardRef
const Pre = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
        ref: ref,
        /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */ tabIndex: 0,
        ...props,
        className: (0,clsx/* ["default"] */.A)(props.className, Content_styles_module.codeBlock, 'thin-scrollbar')
    });
});
function Code(props) {
    const { metadata } = useCodeBlockContext();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
        ...props,
        className: (0,clsx/* ["default"] */.A)(props.className, Content_styles_module.codeBlockLines, metadata.lineNumbersStart !== undefined && Content_styles_module.codeBlockLinesWithNumbering),
        style: {
            ...props.style,
            counterReset: metadata.lineNumbersStart === undefined ? undefined : `line-count ${metadata.lineNumbersStart - 1}`
        }
    });
}
function CodeBlockContent(param) {
    let { className: classNameProp } = param;
    const { metadata, wordWrap } = useCodeBlockContext();
    const prismTheme = usePrismTheme();
    const { code, language, lineNumbersStart, lineClassNames } = metadata;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .Highlight */.f4, {
        theme: prismTheme,
        code: code,
        language: language,
        children: (param)=>{
            let { className, style, tokens: lines, getLineProps, getTokenProps } = param;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Pre, {
                ref: wordWrap.codeBlockRef,
                className: (0,clsx/* ["default"] */.A)(classNameProp, className),
                style: style,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Code, {
                    children: lines.map((line, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockLine, {
                            line: line,
                            getLineProps: getLineProps,
                            getTokenProps: getTokenProps,
                            classNames: lineClassNames[i],
                            showLineNumbers: lineNumbersStart !== undefined
                        }, i))
                })
            });
        }
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/BrowserOnly.js
var BrowserOnly = __webpack_require__(9526);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(30568);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/Button/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function CodeBlockButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        ...props,
        className: (0,clsx/* ["default"] */.A)('clean-btn', className)
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Copy/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconCopy(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "currentColor",
            d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Success/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconSuccess(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "currentColor",
            d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/CopyButton/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const CopyButton_styles_module = ({"copyButtonCopied":"copyButtonCopied_Vdqa","copyButtonIcons":"copyButtonIcons_IEyt","copyButtonIcon":"copyButtonIcon_TrPX","copyButtonSuccessIcon":"copyButtonSuccessIcon_cVMy"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/CopyButton/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function CopyButton_title() {
    return (0,Translate/* .translate */.T)({
        id: 'theme.CodeBlock.copy',
        message: 'Copy',
        description: 'The copy button label on code blocks'
    });
}
function ariaLabel(isCopied) {
    return isCopied ? (0,Translate/* .translate */.T)({
        id: 'theme.CodeBlock.copied',
        message: 'Copied',
        description: 'The copied button label on code blocks'
    }) : (0,Translate/* .translate */.T)({
        id: 'theme.CodeBlock.copyButtonAriaLabel',
        message: 'Copy code to clipboard',
        description: 'The ARIA label for copy code blocks button'
    });
}
async function copyToClipboard(text) {
    // The clipboard API is only defined in secure contexts (HTTPS / localhost).
    // See https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(text);
    }
    // Fall back to copy-text-to-clipboard for non-secure contexts (e.g. HTTP
    // on a local network). The fallback is lazily loaded to avoid bundle
    // overhead for the common HTTPS case.
    const { default: copy } = await __webpack_require__.e(/* import() */ "3693").then(__webpack_require__.bind(__webpack_require__, 33436));
    return copy(text);
}
function useCopyButton() {
    const { metadata: { code } } = useCodeBlockContext();
    const [isCopied, setIsCopied] = (0,react.useState)(false);
    const copyTimeout = (0,react.useRef)(undefined);
    const copyCode = (0,react.useCallback)(()=>{
        copyToClipboard(code).then(()=>{
            setIsCopied(true);
            copyTimeout.current = window.setTimeout(()=>{
                setIsCopied(false);
            }, 1000);
        });
    // Errors are intentionally not caught so they remain unhandled and can
    // be captured by observability tools (e.g. Sentry, PostHog).
    }, [
        code
    ]);
    (0,react.useEffect)(()=>()=>window.clearTimeout(copyTimeout.current), []);
    return {
        copyCode,
        isCopied
    };
}
function CopyButton(param) {
    let { className } = param;
    const { copyCode, isCopied } = useCopyButton();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockButton, {
        "aria-label": ariaLabel(isCopied),
        title: CopyButton_title(),
        className: (0,clsx/* ["default"] */.A)(className, CopyButton_styles_module.copyButton, isCopied && CopyButton_styles_module.copyButtonCopied),
        onClick: copyCode,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
            className: CopyButton_styles_module.copyButtonIcons,
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconCopy, {
                    className: CopyButton_styles_module.copyButtonIcon
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconSuccess, {
                    className: CopyButton_styles_module.copyButtonSuccessIcon
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/WordWrap/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconWordWrap(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "currentColor",
            d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/WordWrapButton/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const WordWrapButton_styles_module = ({"wordWrapButtonIcon":"wordWrapButtonIcon_b1P5","wordWrapButtonEnabled":"wordWrapButtonEnabled_uzNF"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/WordWrapButton/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function WordWrapButton(param) {
    let { className } = param;
    const { wordWrap } = useCodeBlockContext();
    const canShowButton = wordWrap.isEnabled || wordWrap.isCodeScrollable;
    if (!canShowButton) {
        return false;
    }
    const title = (0,Translate/* .translate */.T)({
        id: 'theme.CodeBlock.wordWrapToggle',
        message: 'Toggle word wrap',
        description: 'The title attribute for toggle word wrapping button of code block lines'
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockButton, {
        onClick: ()=>wordWrap.toggle(),
        className: (0,clsx/* ["default"] */.A)(className, wordWrap.isEnabled && WordWrapButton_styles_module.wordWrapButtonEnabled),
        "aria-label": title,
        title: title,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconWordWrap, {
            className: WordWrapButton_styles_module.wordWrapButtonIcon,
            "aria-hidden": "true"
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Buttons_styles_module = ({"buttonGroup":"buttonGroup_M5ko"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





// Code block buttons are not server-rendered on purpose
// Adding them to the initial HTML is useless and expensive (due to JSX SVG)
// They are hidden by default and require React  to become interactive
function CodeBlockButtons(param) {
    let { className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BrowserOnly/* ["default"] */.A, {
        children: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,clsx/* ["default"] */.A)(className, Buttons_styles_module.buttonGroup),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WordWrapButton, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton, {})
                ]
            })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Layout/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Layout_styles_module = ({"codeBlockContent":"codeBlockContent_QJqH","codeBlockTitle":"codeBlockTitle_OeMC","codeBlock":"codeBlock_a8dz"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Layout/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function CodeBlockLayout(param) {
    let { className } = param;
    const { metadata } = useCodeBlockContext();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CodeBlockContainer, {
        as: "div",
        className: (0,clsx/* ["default"] */.A)(className, metadata.className),
        children: [
            metadata.title && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: Layout_styles_module.codeBlockTitle,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockTitle, {
                    children: metadata.title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: Layout_styles_module.codeBlockContent,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockContent, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockButtons, {})
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/String.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function useCodeBlockMetadata(props) {
    const { prism } = (0,useThemeConfig/* .useThemeConfig */.p)();
    return createCodeBlockMetadata({
        code: props.children,
        className: props.className,
        metastring: props.metastring,
        magicComments: prism.magicComments,
        defaultLanguage: prism.defaultLanguage,
        language: props.language,
        title: props.title,
        showLineNumbers: props.showLineNumbers
    });
}
// TODO Docusaurus v4: move this component at the root?
function CodeBlockString(props) {
    const metadata = useCodeBlockMetadata(props);
    const wordWrap = useCodeWordWrap();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockContextProvider, {
        metadata: metadata,
        wordWrap: wordWrap,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockLayout, {})
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */ function maybeStringifyChildren(children) {
    if (react.Children.toArray(children).some((el)=>/*#__PURE__*/ (0,react.isValidElement)(el))) {
        return children;
    }
    // The children is now guaranteed to be one/more plain strings
    return Array.isArray(children) ? children.join('') : children;
}
function CodeBlock(param) {
    let { children: rawChildren, ...props } = param;
    // The Prism theme on SSR is always the default theme but the site theme can
    // be in a different mode. React hydration doesn't update DOM styles that come
    // from SSR. Hence force a re-render after mounting to apply the current
    // relevant styles.
    const isBrowser = (0,useIsBrowser/* ["default"] */.A)();
    const children = maybeStringifyChildren(rawChildren);
    const CodeBlockComp = typeof children === 'string' ? CodeBlockString : CodeBlockJSX;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockComp, {
        ...props,
        children: children
    }, String(isBrowser));
}


},

}]);