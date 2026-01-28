"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[464],{

/***/ 18877
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_contribute_architecture_mdx_41e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-contribute-architecture-mdx-41e.json
const site_docs_get_started_contribute_architecture_mdx_41e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/contribute/architecture","title":"🏗️ Designfilosofi och arkitektur","description":"Midas designsystem följer principer från Clean Code och Clean Architecture för att säkerställa hög kvalitet, underhållbarhet och långsiktig stabilitet.","source":"@site/docs/get-started/contribute/architecture.mdx","sourceDirName":"get-started/contribute","slug":"/get-started/contribute/architecture","permalink":"/pr-preview/pr-1021/get-started/contribute/architecture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_label":"Arkitektur","sidebar_position":4},"sidebar":"sideBar","previous":{"title":"Tester","permalink":"/pr-preview/pr-1021/get-started/contribute/tests"},"next":{"title":"Arbetsflöde","permalink":"/pr-preview/pr-1021/get-started/contribute/conventions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/get-started/contribute/architecture.mdx


const frontMatter = {
	sidebar_label: 'Arkitektur',
	sidebar_position: 4
};
const contentTitle = '🏗️ Designfilosofi och arkitektur';

const assets = {

};



const toc = [{
  "value": "✨ Clean Code-principer",
  "id": "-clean-code-principer",
  "level": 2
}, {
  "value": "🏛️ Clean Architecture-principer",
  "id": "️-clean-architecture-principer",
  "level": 2
}, {
  "value": "📦 Beroendestrategi: Headless-bibliotek",
  "id": "-beroendestrategi-headless-bibliotek",
  "level": 2
}, {
  "value": "React Aria Components (RAC) - Förstahandsval",
  "id": "react-aria-components-rac---förstahandsval",
  "level": 3
}, {
  "value": "Alternativa headless-bibliotek",
  "id": "alternativa-headless-bibliotek",
  "level": 3
}, {
  "value": "Undvik egenutvecklade lösningar",
  "id": "undvik-egenutvecklade-lösningar",
  "level": 3
}, {
  "value": "📦 Publicerade paket",
  "id": "-publicerade-paket",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "️-designfilosofi-och-arkitektur",
        children: "🏗️ Designfilosofi och arkitektur"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Midas designsystem följer principer från Clean Code och Clean Architecture för att säkerställa hög kvalitet, underhållbarhet och långsiktig stabilitet."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-clean-code-principer",
      children: "✨ Clean Code-principer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi strävar efter ren, läsbar och underhållbar kod:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Små funktioner och komponenter"
        }), ": Varje komponent har ett tydligt, avgränsat ansvar (Single Responsibility Principle)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Beskrivande namn"
        }), ": Funktioner, variabler och komponenter har namn som tydligt beskriver vad de gör"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testbar kod"
        }), ": Kod struktureras för att vara enkel att testa"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DRY (Don't Repeat Yourself)"
        }), ": Undvik kodduplicering genom återanvändning och abstraktion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inkrementella förbättringar"
        }), ": Lämna koden bättre än du hittade den - fixa gärna problem du ser även om de inte är en del av din uppgift"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stateless komponenter"
        }), ": Komponenter är i möjlig mån stateless och stödjer designsystemet på ett generiskt sätt"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-clean-architecture-principer",
      children: "🏛️ Clean Architecture-principer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi tillämpar principer från clean architecture för att skapa ett underhållbart och stabilt komponentbibliotek:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Separera styling från beteende"
        }), ": Använd headless-bibliotek för logik och tillgänglighet, applicera endast visuell stil"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimera beroenden"
        }), ": Håll komponenter löst kopplade och undvik onödiga beroenden mellan dem"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testbarhet"
        }), ": Komponenter är enkla att testa isolerat utan omfattande setup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stabilitet över flexibilitet"
        }), ": Välj stabila, välunderhållna beroenden framför att bygga egen komplexitet"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-beroendestrategi-headless-bibliotek",
      children: "📦 Beroendestrategi: Headless-bibliotek"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "react-aria-components-rac---förstahandsval",
      children: "React Aria Components (RAC) - Förstahandsval"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponenter byggs ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "i första hand"
      }), " på ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/getting-started.html",
        children: "React Aria Components"
      }), ". React Aria tillhandahåller:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tillgänglighet"
        }), ": Fullständigt stöd för WCAG, skärmläsare och tangentbordsnavigation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plattformsstöd"
        }), ": Touch, mouse och keyboard fungerar sömlöst"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Produktionstestad"
        }), ": Vältestad kod från Adobe som används i stora produktionsmiljöer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internationalisering"
        }), ": Inbyggt stöd för olika språk och lokalisering"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Viktigt"
      }), ": Följ React Aria's API och mönster så nära som möjligt. Undvik att avvika för mycket från originalet då det:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Försvårar uppgraderingar när React Aria uppdaterar sitt API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ökar underhållsbördan för teamet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Riskerar att vi bygger egen komplexitet som redan är löst"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Om du behöver anpassa beteende, fråga dig först om React Aria redan har en lösning via props, composition eller hooks."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alternativa-headless-bibliotek",
      children: "Alternativa headless-bibliotek"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["När funktionalitet ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inte finns"
      }), " i React Aria Components, välj andra välunderhållna headless-bibliotek."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exempel på bibliotek vi redan använder:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://tanstack.com/table",
            children: "TanStack Table"
          })
        }), ": För avancerad tabellhantering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://react-select.com/",
            children: "React Select"
          })
        }), ": För komplexa select-komponenter"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kriterier för att välja ett bibliotek:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Välunderhållet och aktivt utvecklat"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Headless (ingen inbyggd styling)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stort community och bra dokumentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TypeScript-stöd"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stabilt API med tydlig versionshantering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Produktionstestat och används av många projekt"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tveka inte att föreslå andra välunderhållna headless-bibliotek om de passar användarfallet bättre!"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "undvik-egenutvecklade-lösningar",
      children: "Undvik egenutvecklade lösningar"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Bygg inte egen logik för tangentbordshantering, focus management, ARIA eller accessibility-funktionalitet. Egenutvecklade lösningar är svåra att få rätt, ökar underhållsbördan dramatiskt och riskerar att introducera tillgänglighetsbrister."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Innan du bygger något eget, fråga dig:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kan det komponeras av befintliga byggstenar?"
        }), " Ofta går det att kombinera existerande komponenter för att lösa behovet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Är det tillräckligt generiskt?"
        }), " Om lösningen är väldigt specifik för ett enskilt projekt kanske den inte hör hemma i det delade biblioteket - implementera den då projektspecifikt istället."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Finns det i ett headless-bibliotek?"
        }), " Kolla React Aria och andra bibliotek innan du bygger eget."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "När är egenutvecklat OK?"
      }), " Endast för ren visuell styling eller små, väldefinierade utilities som inte existerar i headless-bibliotek."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-publicerade-paket",
      children: "📦 Publicerade paket"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Midas är uppdelat i flera paket med tydliga ansvarsområden:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "components"
        }), " - Alla komponenter baserade på React Aria samlas i ett paket för enkel installation och uppdatering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "theme"
        }), " - Design tokens och CSS-variabler är separerade för flexibel beroendehantering (du kan använda tokens utan komponenter)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Styling för tredjepartsbibliotek"
        }), " - När vi stödjer externa bibliotek (react-datepicker, react-select, TanStack Table) publiceras styling som separata paket så du bara installerar det du behöver"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Paket"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Beskrivning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.npmjs.com/package/@midas-ds/components",
              children: "@midas-ds/components"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.npmjs.com/package/@midas-ds/components",
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: "https://img.shields.io/npm/v/@midas-ds/components",
                alt: "npm"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "React-komponenter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.npmjs.com/package/@midas-ds/theme",
              children: "@midas-ds/theme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.npmjs.com/package/@midas-ds/theme",
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: "https://img.shields.io/npm/v/@midas-ds/theme",
                alt: "npm"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design tokens och CSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.npmjs.com/package/@midas-ds/datepicker-styles",
              children: "@midas-ds/datepicker-styles"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.npmjs.com/package/@midas-ds/datepicker-styles",
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: "https://img.shields.io/npm/v/@midas-ds/datepicker-styles",
                alt: "npm"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Styling för ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/dev/react-datepicker",
              children: "react-datepicker"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.npmjs.com/package/@midas-ds/select-styles",
              children: "@midas-ds/select-styles"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.npmjs.com/package/@midas-ds/select-styles",
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: "https://img.shields.io/npm/v/@midas-ds/select-styles",
                alt: "npm"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Styling för ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/dev/react-select",
              children: "react-select"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.npmjs.com/package/@midas-ds/table-styles",
              children: "@midas-ds/table-styles"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.npmjs.com/package/@midas-ds/table-styles",
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: "https://img.shields.io/npm/v/@midas-ds/table-styles",
                alt: "npm"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Styling för ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/dev/tanstack-table",
              children: "TanStack Table"
            })]
          })]
        })]
      })]
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



/***/ }

}]);