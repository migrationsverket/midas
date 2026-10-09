"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["6747"], {
10969(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_dev_dark_mode_mdx_861_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-dark-mode-mdx-861.json
var site_docs_dev_dark_mode_mdx_861_namespaceObject = JSON.parse('{"id":"dev/dark-mode","title":"Mörkt läge","description":"Hantera mörkt läge i designsystemet","source":"@site/docs/dev/dark-mode.mdx","sourceDirName":"dev","slug":"/dev/dark-mode","permalink":"/dev/dark-mode","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Mörkt läge","description":"Hantera mörkt läge i designsystemet"},"sidebar":"sideBar","previous":{"title":"Vanliga problem","permalink":"/dev/common-issues"},"next":{"title":"Formulär","permalink":"/dev/forms"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/components/src/color-scheme-switch/ColorSchemeSwitch.tsx + 1 modules
var ColorSchemeSwitch = __webpack_require__(74620);
;// CONCATENATED MODULE: ./apps/docs/docs/dev/dark-mode.mdx


const frontMatter = {
	title: 'Mörkt läge',
	description: 'Hantera mörkt läge i designsystemet'
};
const contentTitle = 'Dark Mode / Mörkt läge';

const assets = {

};




const toc = [{
  "value": "Styr val av tema",
  "id": "styr-val-av-tema",
  "level": 2
}, {
  "value": "ColorSchemeSwitch",
  "id": "colorschemeswitch",
  "level": 3
}, {
  "value": "Tokens",
  "id": "tokens",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "dark-mode--mörkt-läge",
        children: "Dark Mode / Mörkt läge"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas komponenter går att använda i både ljust och mörkt tema. Det innebär att designsystemets komponenter\nkan anpassa sig till användarens inställningar för mörkt läge i operativsystemet eller webbläsaren. Detta sker\nautomatiskt om du använder vår globala stylesheet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "default.css"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{1} title=\"App.tsx (rootfilen i din app)\"",
        children: "import '@midas-ds/components/default.css'\n\nexport default function App({ children }) {\n  return <main>{children}</main>\n}\n\nexport default App\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "styr-val-av-tema",
      children: "Styr val av tema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om projektet har uppdaterat ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), " och använder vår globala stylesheet så följer komponenterna\nautomatiskt användarens inställningar. Om du manuellt vill styra temat, t.ex. om ert projekt inte är redo att stödja\nmörkt läge, kan du stänga av mörkt läge genom att ändra färgschemat i CSS på vilken nivå som passar projektet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        metastring: "{2,4,5}",
        children: ":root {\n  color-scheme: light;\n\n  --lightningcss-light: initial;\n  --lightningcss-dark: ;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använder du inte vår globala stylesheet kan du aktivera mörkt läge genom att definiera bägge färgscheman."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        metastring: "{2}",
        children: ":root {\n  color-scheme: light dark;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Inkludera meta-taggen ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<meta name=\"color-scheme\">"
        }), " i dokumentets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<head>"
        }), " före all CSS för att meddela webbläsaren\nvilket färgschema som sidan stödjer. Detta förhindrar att applikationen blinkar till i vitt innan rätt färgschema\nhar applicerats."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "colorschemeswitch",
      children: "ColorSchemeSwitch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi erbjuder även en komponent för att låta användaren kontrollera val av tema i applikationen."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ColorSchemeSwitch } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ColorSchemeSwitch />\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      className: "card",
      children: [(0,jsx_runtime.jsx)(ColorSchemeSwitch/* .ColorSchemeSwitch */.v, {
        selector: "#dark-mode-target"
      }), (0,jsx_runtime.jsx)("div", {
        id: "dark-mode-target"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ColorSchemeSwitch justerar ", (0,jsx_runtime.jsx)(_components.code, {
        children: "color-scheme"
      }), " på ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":root"
      }), " som standard. Du kan justera vilken selector som ska användas\nom color-scheme i din applikation är definierad på en annan DOM-nod. Detta kan du göra genom att skicka in en egen\nselector i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "selector"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ColorSchemeSwitch selector='main' />\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponenten accepterar tre värden: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "light"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dark"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "light dark"
      }), " — enbart ljust läge, enbart mörkt läge eller\natt följa systemets inställningar. Default är ", (0,jsx_runtime.jsx)(_components.code, {
        children: "light dark"
      }), ". Om du vill att ett specifikt tema är förvalt\nkan du skicka in standardvärdet direkt i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultScheme"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ColorSchemeSwitch defaultScheme='dark' />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tokens",
      children: "Tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Du kan fortfarande använda tokens för att importera färger på egen hand. Observera dock att vissa tokens har\nfasta värden och inte är dynamiska för ljust/mörkt läge. För att få en färg som anpassar sig behöver du importera\nen semantisk token."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { variables } from '@midas-ds/theme'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{1,2,5}",
        children: "<div style={{ backgroundColor: variables.backgroundBase }}>\n  <p style={{ color: variables.textPrimary }}>\n    En text som är mörk i ljust läge men ljus i mörkt läge på en bakgrund som gör tvärt om!\n  </p>\n  <p style={{ color: variables.colorBlackBase }}>En text som alltid är svart</p>\n</div>\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
79101(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"group":"group_RECg","toggleButton":"toggleButton_vLWl"});

},
74620(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ ColorSchemeSwitch)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/sun.mjs
var sun = __webpack_require__(42535);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/moon.mjs
var moon = __webpack_require__(93224);
// EXTERNAL MODULE: ./packages/components/src/icons/ContrastFilled.tsx
var ContrastFilled = __webpack_require__(87253);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(81013);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/SelectionIndicator.mjs
var SelectionIndicator = __webpack_require__(17863);
// EXTERNAL MODULE: ./packages/components/src/toggle-button/ToggleButtonGroup.tsx
var ToggleButtonGroup = __webpack_require__(70433);
// EXTERNAL MODULE: ./packages/components/src/toggle-button/ToggleButton.tsx
var ToggleButton = __webpack_require__(51078);
;// CONCATENATED MODULE: ./packages/components/src/color-scheme-switch/ColorSchemeSwitch.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const ColorSchemeSwitch_module = ({"button":"button_XTm0","selectionIndicator":"selectionIndicator_zTl_"});
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
// EXTERNAL MODULE: ./packages/components/src/color-scheme-switch/intl/translations.json
var translations = __webpack_require__(10621);
// EXTERNAL MODULE: ./packages/components/src/color-scheme-switch/useColorScheme.ts
var useColorScheme = __webpack_require__(60338);
;// CONCATENATED MODULE: ./packages/components/src/color-scheme-switch/ColorSchemeSwitch.tsx
'use client';











const ColorSchemeSwitch = (param)=>{
    let { selector = ':root', defaultScheme = 'light dark', scheme, onSchemeChange, defaultValue, className } = param;
    const { resolved, onChange } = (0,useColorScheme/* .useColorScheme */.U)({
        selector,
        defaultScheme: defaultValue ? Array.from(defaultValue)[0] : defaultScheme,
        scheme,
        onSchemeChange
    });
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations);
    const handleSelectionChange = (keys)=>{
        onChange(Array.from(keys)[0]);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ToggleButtonGroup/* .ToggleButtonGroup */.W, {
        selectionMode: "single",
        selectedKeys: new Set([
            resolved
        ]),
        onSelectionChange: handleSelectionChange,
        disallowEmptySelection: true,
        "aria-label": strings.format('colorScheme'),
        className: className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ToggleButton/* .ToggleButton */.f, {
                id: "light",
                className: ColorSchemeSwitch_module.button,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(sun/* ["default"] */.A, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(VisuallyHidden/* .VisuallyHidden */.s, {
                        children: strings.format('lightMode')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectionIndicator/* .SelectionIndicator */.i, {
                        className: ColorSchemeSwitch_module.selectionIndicator
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ToggleButton/* .ToggleButton */.f, {
                id: "dark",
                className: ColorSchemeSwitch_module.button,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(moon/* ["default"] */.A, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(VisuallyHidden/* .VisuallyHidden */.s, {
                        children: strings.format('darkMode')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectionIndicator/* .SelectionIndicator */.i, {
                        className: ColorSchemeSwitch_module.selectionIndicator
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ToggleButton/* .ToggleButton */.f, {
                id: "light dark",
                className: ColorSchemeSwitch_module.button,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ContrastFilled/* .ContrastFilled */.J, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(VisuallyHidden/* .VisuallyHidden */.s, {
                        children: strings.format('system')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectionIndicator/* .SelectionIndicator */.i, {
                        className: ColorSchemeSwitch_module.selectionIndicator
                    })
                ]
            })
        ]
    });
};


},
60338(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  U: () => (useColorScheme)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
'use client';

const useColorScheme = (param)=>{
    let { selector = ':root', defaultScheme = 'light dark', scheme, onSchemeChange } = param;
    const [internal, setInternal] = (0,react__rspack_import_0.useState)(scheme ?? defaultScheme);
    const resolved = scheme ?? internal;
    (0,react__rspack_import_0.useEffect)(()=>{
        const target = document.querySelector(selector);
        if (!target) {
            console.warn(`No element found for selector: "${selector}"`);
            return;
        }
        if (resolved === 'light dark') {
            delete target.dataset.colorScheme;
        } else {
            target.dataset.colorScheme = resolved;
        }
    }, [
        resolved,
        selector
    ]);
    const onChange = (next)=>{
        setInternal(next);
        onSchemeChange?.(next);
    };
    return {
        resolved,
        onChange
    };
};


},
87253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  J: () => (ContrastFilled)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
'use client';


const ContrastFilled = /*#__PURE__*/ (0,react__rspack_import_1.forwardRef)((param, ref)=>{
    let { size = 24, color = 'currentColor', strokeWidth = 2, className, ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M12 2a10 10 0 0 1 0 20Z",
                fill: color,
                stroke: "none"
            })
        ]
    });
});
ContrastFilled.displayName = 'ContrastFilled';


},
51078(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  f: () => (ToggleButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react_aria_components__rspack_import_3 = __webpack_require__(54158);
/* import */ var _button_Button_module_css__rspack_import_1 = __webpack_require__(35092);
/* import */ var _ToggleButton_module_css__rspack_import_2 = __webpack_require__(79101);
/* import */ var _utils_clsx__rspack_import_4 = __webpack_require__(18496);





const ToggleButton = (param)=>{
    let { ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_3/* .ToggleButton */.f, {
        ...rest,
        className: (0,_utils_clsx__rspack_import_4/* ["default"] */.A)(_button_Button_module_css__rspack_import_1/* ["default"].button */.A.button, _button_Button_module_css__rspack_import_1/* ["default"].iconBtn */.A.iconBtn, _ToggleButton_module_css__rspack_import_2/* ["default"].toggleButton */.A.toggleButton, rest.className)
    });
};


},
70433(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  W: () => (ToggleButtonGroup)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react_aria_components__rspack_import_3 = __webpack_require__(71056);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _ToggleButton_module_css__rspack_import_2 = __webpack_require__(79101);
/* import */ var _utils_clsx__rspack_import_4 = __webpack_require__(18496);





const ToggleButtonGroup = (param)=>{
    let { ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_3/* .ToggleButtonGroup */.WK, {
        ...rest,
        className: (0,_utils_clsx__rspack_import_4/* ["default"] */.A)(_ToggleButton_module_css__rspack_import_2/* ["default"].group */.A.group, rest.className)
    });
};


},
10621(module) {
module.exports = JSON.parse('{"en":{"colorScheme":"Color scheme","darkMode":"Dark mode","lightMode":"Light mode","system":"Follows system","triggerDarkMode":"Color scheme: Dark mode","triggerLightMode":"Color scheme: Light mode","triggerSystem":"Color scheme: Follows system"},"sv":{"colorScheme":"Färgschema","darkMode":"Mörkt läge","lightMode":"Ljust läge","system":"Följer systemet","triggerDarkMode":"Färgschema: Mörkt läge","triggerLightMode":"Färgschema: Ljust läge","triggerSystem":"Färgschema: Följer systemet"}}')

},

}]);