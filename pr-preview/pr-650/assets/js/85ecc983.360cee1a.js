"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9949],{

/***/ 98832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_contribute_tests_mdx_85e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-contribute-tests-mdx-85e.json
const site_docs_get_started_contribute_tests_mdx_85e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/contribute/tests","title":"Tester","description":"Automatiska tester i Midas utgörs främst av komponenttester. Komponenttester testar interaktionen av renderade komponenter i en riktig eller emulerad webbläsare.","source":"@site/docs/get-started/contribute/tests.mdx","sourceDirName":"get-started/contribute","slug":"/get-started/contribute/tests","permalink":"/pr-preview/pr-650/get-started/contribute/tests","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tester","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/get-started/contribute/tests.mdx


const frontMatter = {
	sidebar_label: 'Tester',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Tester';

const assets = {

};



const toc = [{
  "value": "Webbläsartester",
  "id": "webbläsartester",
  "level": 2
}, {
  "value": "Kör webbläsartester",
  "id": "kör-webbläsartester",
  "level": 3
}, {
  "value": "Kör tester i light mode",
  "id": "kör-tester-i-light-mode",
  "level": 4
}, {
  "value": "Kör tester i dark mode",
  "id": "kör-tester-i-dark-mode",
  "level": 4
}, {
  "value": "Kör tester kontinuerligt",
  "id": "kör-tester-kontinuerligt",
  "level": 4
}, {
  "value": "Skriva webbläsartester",
  "id": "skriva-webbläsartester",
  "level": 3
}, {
  "value": "Interaktioner och förväntade tillstånd",
  "id": "interaktioner-och-förväntade-tillstånd",
  "level": 4
}, {
  "value": "Tillgänglighetstester",
  "id": "tillgänglighetstester",
  "level": 4
}, {
  "value": "Buggrättning med TDD",
  "id": "buggrättning-med-tdd",
  "level": 4
}, {
  "value": "Visuella tester",
  "id": "visuella-tester",
  "level": 4
}, {
  "value": "toHaveStyle",
  "id": "tohavestyle",
  "level": 5
}, {
  "value": "Enhetstester",
  "id": "enhetstester",
  "level": 2
}, {
  "value": "Kör enhetstester",
  "id": "kör-enhetstester",
  "level": 3
}, {
  "value": "Kör enhetstester kontinuerligt när du sparar en fil",
  "id": "kör-enhetstester-kontinuerligt-när-du-sparar-en-fil",
  "level": 4
}, {
  "value": "Skriva enhetstester",
  "id": "skriva-enhetstester",
  "level": 3
}, {
  "value": "Emulerad webbläsare",
  "id": "emulerad-webbläsare",
  "level": 4
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
    h4: "h4",
    h5: "h5",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "tester",
        children: "Tester"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Automatiska tester i Midas utgörs främst av ", (0,jsx_runtime.jsx)(_components.em, {
        children: "komponenttester"
      }), ". Komponenttester testar interaktionen av renderade komponenter i en riktig eller emulerad webbläsare.\nI de riktiga webbläsarna utförs automatiserade ", (0,jsx_runtime.jsx)(_components.em, {
        children: "tillgänglighetstester"
      }), " och på sikt även ", (0,jsx_runtime.jsx)(_components.em, {
        children: "visuella tester"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vi har också möjlighet att skriva ", (0,jsx_runtime.jsx)(_components.em, {
        children: "enhetstester"
      }), " som testar delar ur JavaScript-moduler."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "webbläsartester",
      children: "Webbläsartester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas använder ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/docs/writing-tests",
        children: "Storybook som primär testplattform"
      }), ", med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/docs/writing-stories/play-function",
        children: "Storybooks playfunktion"
      }), "\nfår vi tillgång till ett flertal riktiga webbläsare som kan köra våra tester lokalt och i våra CI/CD pipelines.\nSkriv ditt test här i första hand, det hjälper oss att säkerställa att vi har stories för en komponents samtliga tillstånd."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kör-webbläsartester",
      children: "Kör webbläsartester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tester som använder Storybooks play-funktion kan köras via terminalen med hjälp av ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/docs/writing-tests/test-runner",
        children: "Storybook test runner"
      }), ".\nUnder huven används ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jestjs.io/",
        children: "Jest"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://playwright.dev/",
        children: "Playwright"
      }), " och ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://testing-library.com/",
        children: "Testing library"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Se till att ha din lokala Storybook igång innan du kör några tester:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx run components:storybook\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kör-tester-i-light-mode",
      children: "Kör tester i light mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Per default använder webbläsaren ljust läge för komponenterna."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx run components:test-storybook\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kör-tester-i-dark-mode",
      children: "Kör tester i dark mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi behöver testa att våra komponenter uppfyller tillgänglighetskrav i mörkt läge, vi testar detta med följande kommando:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx run components:test-storybook:dark-mode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kör-tester-kontinuerligt",
      children: "Kör tester kontinuerligt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Oavsett val av färgtema kan du låta ett testkommando vänta på att du sparar ändringar i en fil, för att sedan köra berörda tester igen:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx run components:test-storybook --watch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "skriva-webbläsartester",
      children: "Skriva webbläsartester"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mycket kan testas på våra komponenter, och mycket kanske redan testas av de bibliotek vi utgår ifrån.\nFörsök skriva ett test som kompletterar redan skrivna tester, kom ihåg att ditt test kommer behöva underhållas i framtiden."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "interaktioner-och-förväntade-tillstånd",
      children: "Interaktioner och förväntade tillstånd"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Erbjuder din komponent interaktion kan du skriva tester där en simulerad användare använder musen eller tangentbordet för att framkalla ett visst tillstånd.\nAnvänd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "userEvent"
      }), " från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@storybook/test"
      }), " när du simulerar din användare."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tillgänglighetstester",
      children: "Tillgänglighetstester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/docs/writing-tests/accessibility-testing",
        children: "@storybook/addon-a11y"
      }), " utförs tillgänglighetstester med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.deque.com/axe/",
        children: "axe"
      }), " på varje komponent,\ndessa testas även av Storybook test runner i samtliga play tester, se ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/components/.storybook/test-runner.ts"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Automatiserade tillgänglighetstester fångar upp en stor del av brister gentemot ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
        children: "WCAG"
      }), "-standarden men kan självklart kompletteras."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Med hjälp av tangentbords-interaktion i dina interaktionstester testar du att din komponent kan användas med enbart tangentbordet. Du kan också välja att använda queries för att säkerställa att du använder DOM-element som säger något åt en skärmläsare, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getByRole"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getByLabelText"
        }), " osv."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "buggrättning-med-tdd",
      children: "Buggrättning med TDD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Om du rättar en bugg erbjuds du ett unikt tillfälle att skriva ett test som återskapar din bug, förhoppningsvis kommer vi då inte att återinföra buggen."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Börja med att sätta upp berörd komponent i en separat story, skriv sedan ett test som återskapar din bug, ditt mål är att få ett test som \"failar\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// Ett bra tillfälle att notera ärendenumret som beskriver felet\nexport const DS123: Story = {\n  // Dölj gärna storyn från Storybooks UI om den inte ger något direkt värde åt andra intressenter\n  tags: ['!dev', '!autodocs'],\n  args: {\n    label: 'Select a value',\n    options: [{ id: 'banana', name: 'Banana' }],\n  },\n  play: async ({ args, step, canvas }) => {\n    // Använd gärna den inbyggda step-funktionen för att beskriva vad ditt test gör\n    await step('It should be possible to select a value with the keyboard', async () => {\n      // Interagera med userEvent\n      await userEvent.tab()\n      await userEvent.keyboard('[Space]')\n      await userEvent.keyboard('[Space]')\n      // Skriv minst en förväntning med expect\n      expect(canvas.getByLabelText(args.label as string)).toHaveDisplayValue('banana')\n    })\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nu kan du åtgärda din bug, när du är klar bör ditt test passera."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "visuella-tester",
      children: "Visuella tester"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För närvarande utför vi inga visuella tester där screenshots används för att jämföra komponenters utseende."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "tohavestyle",
      children: "toHaveStyle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "expect"
      }), " från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@storybook/test"
      }), " erbjuder dig att skriva förväntningar på hur en komponent ser ut med hjälp av ", (0,jsx_runtime.jsx)(_components.code, {
        children: "toHaveStyle"
      }), "-metoden.\nDå ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/testing-library/jest-dom/issues/350",
        children: "metoden inte är helt pålitlig"
      }), " bör den användas som en sista utväg tillsammans med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lightDark"
      }), "-utility från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/components/src/utils/test.ts"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enhetstester",
      children: "Enhetstester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Behöver du skriva enhetstester av rena JavaScript-moduler eller använda en emulerad webbläsare (jsdom) för att testa dina komponenter kan du använda filnamn enligt mönstret ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**/?(*.)+(spec|test).[jt]s?(x)"
      }), ".\nExempelvis: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/components/src/badge/badge.spec.ts"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enhetstesterna körs också av Jest och accepterar samma argument som när webbläsartesterna körs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kör-enhetstester",
      children: "Kör enhetstester"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx test components\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kör-enhetstester-kontinuerligt-när-du-sparar-en-fil",
      children: "Kör enhetstester kontinuerligt när du sparar en fil"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx test components --watch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "skriva-enhetstester",
      children: "Skriva enhetstester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["I våra ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".spec|.test"
      }), "-filer är ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jestjs.io/docs/api",
        children: "Jest definerat globalt"
      }), ", det krävs därför inga importer av ", (0,jsx_runtime.jsx)(_components.code, {
        children: "describe"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "beforeEach"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test/it"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expect"
      }), ", etc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Om du har en separerad kod kan du importera delar av en JavaScript-modul och kontrollera att den fungerar som du vill med hjälp av ett test.\nGör något i stil med:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        metastring: "title=\"sum.spec.ts\"",
        children: "import sum from './sum'\n\ntest('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3)\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "emulerad-webbläsare",
      children: "Emulerad webbläsare"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om du av någon anledning behöver skriva ett komponenttest med en emulerad webbläsare behöver du använda ", (0,jsx_runtime.jsx)(_components.code, {
        children: "screen"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expect"
      }), " från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@testing-library/react"
      }), ".\nHämta även en uppsatt simulerad användare från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/components/tests/utils/user"
      }), " om du behöver interagera med din komponent."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sätt gärna upp en komponent i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "beforeEach"
      }), "-hooken så att det är lätt att skriva flera tester på samma tillstånd."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"Button.spec.tsx\"",
        children: "import { render, screen } from '@testing-library/react'\nimport { Button } from './Button'\nimport user from 'tests/utils/user'\n\ndescribe('given a default Button', () => {\n  const label = 'my button'\n  const handleClick = jest.fn()\n\n  beforeEach(() => {\n    render(<Button onPress={handleClick}>{label}</Button>)\n  })\n\n  it('should be clickable and visible', async () => {\n    const button = screen.getByRole('button', { name: label })\n    await user.click(button)\n    expect(handleClick).toHaveBeenCalledTimes(1)\n    expect(button).toBeVisible()\n  })\n})\n"
      })
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