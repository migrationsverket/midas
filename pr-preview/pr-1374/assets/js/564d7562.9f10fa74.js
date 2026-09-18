"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2666],{

/***/ 40516
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_releases_mdx_564_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-releases-mdx-564.json
const site_docs_get_started_releases_mdx_564_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/releases","title":"Releases","description":"Midas paket (@midas-ds/components, @midas-ds/theme, m.fl.) versionshanteras enligt Semantic Versioning — MAJOR.MINOR.PATCH, t.ex. 2.4.1:","source":"@site/docs/get-started/releases.mdx","sourceDirName":"get-started","slug":"/get-started/releases","permalink":"/pr-preview/pr-1374/get-started/releases","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2.5,"frontMatter":{"title":"Releases","sidebar_label":"Releases","sidebar_position":2.5},"sidebar":"sideBar","previous":{"title":"Installera","permalink":"/pr-preview/pr-1374/get-started/install"},"next":{"title":"Översikt","permalink":"/pr-preview/pr-1374/get-started/contribute/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/get-started/releases.mdx


const frontMatter = {
	title: 'Releases',
	sidebar_label: 'Releases',
	sidebar_position: 2.5
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Hur ofta släpper vi?",
  "id": "hur-ofta-släpper-vi",
  "level": 2
}, {
  "value": "Var ser jag vad som ändrats?",
  "id": "var-ser-jag-vad-som-ändrats",
  "level": 2
}, {
  "value": "Breaking changes",
  "id": "breaking-changes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
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
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas paket (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/theme"
      }), ", m.fl.) versionshanteras enligt ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://semver.org/",
        children: "Semantic Versioning"
      }), " — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      }), ", t.ex. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2.4.1"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Del"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Innebär"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MAJOR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breaking changes — du kan behöva ändra din kod"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MINOR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ny funktionalitet, bakåtkompatibel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PATCH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buggfix eller annan bakåtkompatibel ändring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hur-ofta-släpper-vi",
      children: "Hur ofta släpper vi?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Det finns inget releaseschema."
      }), " Vi kör kontinuerlig leverans (continuous deployment) — så fort en PR med en versionshöjande ändring mergas till ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " i Midas-repot, publiceras den till npm. Det kan bli flera releaser samma dag, eller inga alls under en period. Uppdatera i din egen takt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "var-ser-jag-vad-som-ändrats",
      children: "Var ser jag vad som ändrats?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/release-notes",
          children: "Release notes"
        }), " — sammanfattning per release"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases",
          children: "Changelog på GitHub"
        }), " — fullständig, per paket"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi strävar efter att regelbundet skriva release notes som beskriver nya features och hur du aktiverar dem, inte bara att de finns. Vi kommunicerar även detta via våra vanliga kanaler, så du behöver inte bevaka GitHub aktivt för att hänga med."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "breaking-changes",
      children: "Breaking changes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vi är restriktiva med breaking changes."
      }), " Merparten av vårt arbete är nya features och buggfixar — bakåtkompatibla PATCH- och MINOR-releaser du kan ta emot utan att behöva ändra något i din kod. En MAJOR-version är undantaget, inte det normala, och sker bara när det verkligen behövs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vi räknar \"brytande\" utifrån ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kontraktet"
      }), ": props, exporterade typer och funktionalitet — inte pixel-för-pixel-utseende. Rena visuella justeringar (färger, mellanrum, storlekar) landar normalt i en PATCH eller MINOR, även om de är synliga, eftersom de inte kräver att du ändrar din kod."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["När vi väl behöver göra en breaking change tar vi bort funktionalitet stegvis, aldrig direkt: den markeras ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@deprecated"
      }), " i minst en major-version innan den faktiskt tas bort, så du hinner migrera i din egen takt. Planerade breaking changes samlas dessutom i förväg i ett GitHub-ärende — se t.ex. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/migrationsverket/midas/issues/1109",
        children: "kommande ändringar i v18"
      }), ", som även listar ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "future flags"
      }), " (opt-in-props) du kan börja använda redan idag för att förbereda dig."]
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