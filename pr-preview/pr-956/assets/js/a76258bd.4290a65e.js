"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9402],{

/***/ 66631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_tailwind_mdx_a76_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-tailwind-mdx-a76.json
const site_docs_dev_tailwind_mdx_a76_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/tailwind","title":"Tailwind CSS","description":"Använd Midas tema med Tailwind CSS","source":"@site/docs/dev/tailwind.mdx","sourceDirName":"dev","slug":"/dev/tailwind","permalink":"/pr-preview/pr-956/dev/tailwind","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Tailwind CSS","description":"Använd Midas tema med Tailwind CSS","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/dev/tailwind.mdx


const frontMatter = {
	title: 'Tailwind CSS',
	description: 'Använd Midas tema med Tailwind CSS',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Tailwind CSS';

const assets = {

};



const toc = [{
  "value": "Tailwind v4 (rekommenderat)",
  "id": "tailwind-v4-rekommenderat",
  "level": 2
}, {
  "value": "Installation",
  "id": "installation",
  "level": 3
}, {
  "value": "Setup",
  "id": "setup",
  "level": 3
}, {
  "value": "Användning",
  "id": "användning",
  "level": 3
}, {
  "value": "Anpassa med @theme (valfritt)",
  "id": "anpassa-med-theme-valfritt",
  "level": 3
}, {
  "value": "Tailwind v3",
  "id": "tailwind-v3",
  "level": 2
}, {
  "value": "Importera variabler",
  "id": "importera-variabler",
  "level": 3
}, {
  "value": "Användning med anpassade värden",
  "id": "användning-med-anpassade-värden",
  "level": 3
}, {
  "value": "Utöka Tailwind config (alternativ)",
  "id": "utöka-tailwind-config-alternativ",
  "level": 3
}, {
  "value": "Använd TypeScript/JavaScript tokens",
  "id": "använd-typescriptjavascript-tokens",
  "level": 2
}, {
  "value": "Importera tokens",
  "id": "importera-tokens",
  "level": 3
}, {
  "value": "Användning",
  "id": "användning-1",
  "level": 3
}, {
  "value": "Kombinera med Tailwind",
  "id": "kombinera-med-tailwind",
  "level": 3
}, {
  "value": "Mörkt läge",
  "id": "mörkt-läge",
  "level": 2
}, {
  "value": "Tillgängliga tokens",
  "id": "tillgängliga-tokens",
  "level": 2
}, {
  "value": "Resurser",
  "id": "resurser",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "tailwind-css",
        children: "Tailwind CSS"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Midas theme-paket kan integreras med Tailwind CSS för att använda designsystemets tokens direkt i dina utility classes.\nPaketet exporterar CSS-variabler som kan användas både i Tailwind v4 och v3."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tailwind-v4-rekommenderat",
      children: "Tailwind v4 (rekommenderat)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas designsystemets tokens används med Tailwind v4 genom CSS-variabler och Tailwinds ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values",
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "arbitrary values"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Installera Tailwind CSS v4:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install tailwindcss @tailwindcss/vite\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setup",
      children: "Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "VIKTIGT:"
      }), " Importera CSS-filerna i rätt ordning:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        metastring: "title=\"main.tsx\"",
        children: "import '@midas-ds/theme/color-scheme.css' // Krävs för light/dark mode\nimport '@midas-ds/theme/variables.css'\nimport '@midas-ds/theme/fonts.css'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Importera Midas Tailwind-tema och Tailwind i din CSS-fil:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        metastring: "title=\"index.css\"",
        children: "@import \"tailwindcss\";\n@import \"@midas-ds/theme/tailwind-theme.css\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "color-scheme.css"
          }), " innehåller ", (0,jsx_runtime.jsx)(_components.code, {
            children: "color-scheme: light dark"
          }), " som krävs för att Midas semantiska färger med ", (0,jsx_runtime.jsx)(_components.code, {
            children: "light-dark()"
          }), " ska fungera korrekt vid tema-växling."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "tailwind-theme.css"
          }), " innehåller färgpaletten (blue-100, gray-200, etc.) som Tailwind utilities. Detta gör att färgerna fungerar direkt utan arbitrary values."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "användning",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Semantiska tokens (huvudsaklig användning):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd Midas semantiska tokens med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values",
        children: "arbitrary values"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<div className=\"bg-[var(--midas-background-base)] text-[var(--midas-text-primary)] p-[var(--midas-spacing-50)]\">\n  <div className=\"text-[length:var(--midas-typography-font-size-80)] mb-[var(--midas-spacing-40)]\">\n    Stor text\n  </div>\n  <div className=\"text-[var(--midas-text-secondary)] mb-[var(--midas-spacing-30)]\">\n    Mindre text med semantiska tokens\n  </div>\n  <div className=\"bg-[var(--midas-layer-01-base)] p-[var(--midas-spacing-40)] border-[var(--midas-border-color-primary)]\">\n    Innehåll i en nested box\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Färgpalett (fungerar direkt):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tack vare ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tailwind-theme.css"
      }), " fungerar färger från Midas färgpalett direkt som Tailwind utilities:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<div className=\"bg-blue-100 text-gray-200 border-2 border-blue-130\">\n  <div className=\"text-signal-red-100\">Färgerna från paletten fungerar direkt</div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Sammanfattning",
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Semantiska tokens"
          }), " (background-base, text-primary, spacing-50, etc.): Använd ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[var(--midas-*)]"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Färgpalett"
          }), " (blue-100, gray-140, signal-red-100, etc.): Fungerar direkt som ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bg-blue-100"
          })]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anpassa-med-theme-valfritt",
      children: "Anpassa med @theme (valfritt)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om du vill skapa egna kortare utility-namn kan du definiera ett ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@theme"
      }), "-block:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        metastring: "title=\"app.css\"",
        children: "@import \"@midas-ds/theme/tailwind-theme.css\";\n\n@theme {\n  /* Egna namn för tokens */\n  --color-primary: var(--midas-color-blue-100);\n  --color-bg: var(--midas-background-base);\n  --spacing-sm: var(--midas-spacing-30);\n  --spacing-md: var(--midas-spacing-50);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<div className=\"bg-bg text-primary p-md\">\n  Element med kortare namn\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tailwind-v3",
      children: "Tailwind v3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För projekt som använder Tailwind v3 kan du importera variablerna och använda dem via arbitrary values."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "importera-variabler",
      children: "Importera variabler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Importera Midas CSS-variabler i din huvudsakliga CSS-fil:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        metastring: "title=\"app.css\"",
        children: "@import \"@midas-ds/theme/variables.css\";\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "användning-med-anpassade-värden",
      children: "Användning med anpassade värden"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd Tailwinds ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values",
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "arbitrary values"
        })
      }), " syntax med hakparenteser för att referera till Midas CSS-variabler:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<div className=\"bg-[var(--midas-background-base)] text-[var(--midas-text-primary)]\">\n  <div className=\"text-[length:var(--midas-typography-font-size-80)]\">Stor text</div>\n  <div className=\"mt-[var(--midas-spacing-50)]\">Text som använder Midas tokens</div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["För de flesta utilities räcker det med ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bg-[var(--variable)]"
        }), ". Om Tailwind inte kan avgöra vilken\ntyp av värde det är (t.ex. om ", (0,jsx_runtime.jsx)(_components.code, {
          children: "text-"
        }), " skulle kunna vara både font-size och color) kan du lägga till\nen typbeskrivning: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "text-[color:var(--variable)]"
        }), " eller ", (0,jsx_runtime.jsx)(_components.code, {
          children: "text-[length:var(--variable)]"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "utöka-tailwind-config-alternativ",
      children: "Utöka Tailwind config (alternativ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att slippa använda anpassade värden kan du utöka Tailwinds konfiguration med Midas tokens:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        metastring: "title=\"tailwind.config.js\"",
        children: "/** @type {import('tailwindcss').Config} */\nexport default {\n  content: ['./src/**/*.{js,jsx,ts,tsx}'],\n  theme: {\n    extend: {\n      colors: {\n        'midas-blue': 'var(--midas-color-blue-100)',\n        'midas-primary': 'var(--midas-text-primary)',\n        'midas-bg-base': 'var(--midas-background-base)',\n      },\n      spacing: {\n        'midas-20': 'var(--midas-spacing-20)',\n        'midas-30': 'var(--midas-spacing-30)',\n        'midas-50': 'var(--midas-spacing-50)',\n        'midas-70': 'var(--midas-spacing-70)',\n        'midas-100': 'var(--midas-spacing-100)',\n      },\n    },\n  },\n  plugins: [],\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<div className=\"bg-midas-bg-base text-midas-primary\">\n  <div className=\"mt-midas-50\">Text med förkonfigurerade Tailwind classes</div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "använd-typescriptjavascript-tokens",
      children: "Använd TypeScript/JavaScript tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Utöver CSS-variabler exporterar theme-paketet också tokens som TypeScript/JavaScript-objekt.\nDetta är användbart när du behöver tokens i din JavaScript-kod, till exempel för dynamisk styling\neller beräkningar."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "importera-tokens",
      children: "Importera tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { variables } from '@midas-ds/theme'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "användning-1",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "export function Card() {\n  return (\n    <div\n      style={{\n        backgroundColor: variables.backgroundBase,\n        color: variables.textPrimary,\n        padding: variables.spacing50,\n      }}\n    >\n      <p>Kort med Midas styling</p>\n    </div>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kombinera-med-tailwind",
      children: "Kombinera med Tailwind"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Du kan även kombinera JavaScript tokens med Tailwind classes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { variables } from '@midas-ds/theme'\n\nexport function Alert() {\n  return (\n    <div\n      className=\"p-[var(--midas-spacing-40)]\"\n      style={{\n        backgroundColor: variables.colorSignalRed10,\n        borderLeft: `4px solid ${variables.colorSignalRed100}`\n      }}\n    >\n      <div className=\"text-[color:var(--midas-color-signal-red-150)]\">\n        Detta är en varning\n      </div>\n    </div>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mörkt-läge",
      children: "Mörkt läge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas CSS-variabler stödjer automatiskt mörkt läge via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "light-dark()"
      }), " funktionen. För mer information\nom hur mörkt läge fungerar, se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/dark-mode",
        children: "Dark Mode dokumentationen"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// Denna komponent anpassar sig automatiskt till ljust/mörkt läge\n\n// Tailwind v4\n<div className=\"bg-(--midas-background-base) text-(--midas-text-primary)\">\n  Text som ändrar färg baserat på färgschema\n</div>\n\n// Tailwind v3\n<div className=\"bg-[var(--midas-background-base)] text-[var(--midas-text-primary)]\">\n  Text som ändrar färg baserat på färgschema\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tillgängliga-tokens",
      children: "Tillgängliga tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Midas theme-paketet innehåller tokens för:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Färger"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-color-*"
        }), " (blue, gray, signal-red, signal-green, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantiska färger"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-background-*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-text-*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-icon-*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-border-color-*"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spacing"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-spacing-10"
        }), " till ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-spacing-120"
        }), " (0.125rem till 6rem)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storlekar"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-size-10"
        }), " till ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-size-150"
        }), " (0.125rem till 3rem)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Typografi"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-typography-font-size-*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-typography-line-height-*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-typography-weight-*"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Z-index"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-z-index-base"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-z-index-modal"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-z-index-toast"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breakpoints"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-window-sizes-sm/md/lg/xl"
        }), " (480px, 768px, 1024px, 1280px)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transitions"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-transition-duration-*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--midas-transition-timing-*"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För en fullständig lista över tillgängliga tokens, se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.npmjs.com/package/@midas-ds/theme",
        children: "@midas-ds/theme på npm"
      }), "\neller utforska ", (0,jsx_runtime.jsx)(_components.code, {
        children: "variables.css"
      }), " filen i paketet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resurser",
      children: "Resurser"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://tailwindcss.com/docs",
          children: "Tailwind CSS v4 dokumentation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://tailwindcss.com/docs/theme",
          children: "Tailwind CSS @theme directive"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values",
          children: "Tailwind CSS - Using arbitrary values"
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);