(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["8076"], {
68949(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_dev_tanstack_table_mdx_86b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-tanstack-table-mdx-86b.json
var site_docs_dev_tanstack_table_mdx_86b_namespaceObject = JSON.parse('{"id":"dev/tanstack-table","title":"Tanstack Table","description":"Implementation av Tanstack Table","source":"@site/docs/dev/tanstack-table.mdx","sourceDirName":"dev","slug":"/dev/tanstack-table","permalink":"/pr-preview/pr-1398/dev/tanstack-table","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Tanstack Table","description":"Implementation av Tanstack Table"},"sidebar":"sideBar","previous":{"title":"Tailwind CSS","permalink":"/pr-preview/pr-1398/dev/tailwind"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/examples/index.ts + 13 modules
var examples = __webpack_require__(57213);
;// CONCATENATED MODULE: ./apps/docs/docs/dev/tanstack-table.mdx


const frontMatter = {
	title: 'Tanstack Table',
	description: 'Implementation av Tanstack Table'
};
const contentTitle = 'Tanstack Table';

const assets = {

};




const toc = [{
  "value": "Vilka versioner stöds",
  "id": "vilka-versioner-stöds",
  "level": 2
}, {
  "value": "När du ska använda Tanstack Table",
  "id": "när-du-ska-använda-tanstack-table",
  "level": 2
}, {
  "value": "Komma igång",
  "id": "komma-igång",
  "level": 2
}, {
  "value": "Är du på v8?",
  "id": "är-du-på-v8",
  "level": 3
}, {
  "value": "Användbara länkar",
  "id": "användbara-länkar",
  "level": 2
}, {
  "value": "Exempel",
  "id": "exempel",
  "level": 2
}, {
  "value": "Paginering",
  "id": "paginering",
  "level": 3
}, {
  "value": "Sortering",
  "id": "sortering",
  "level": 3
}, {
  "value": "Filtrering",
  "id": "filtrering",
  "level": 3
}, {
  "value": "Kolumnsynlighet",
  "id": "kolumnsynlighet",
  "level": 3
}, {
  "value": "Drag and Drop-kolumner",
  "id": "drag-and-drop-kolumner",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "tanstack-table",
        children: "Tanstack Table"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "När du behöver mer avancerade funktioner för tabeller rekommenderar vi att du använder Tanstack Table. Det är ett\nkraftfullt \"headless\"-verktyg, vilket innebär att det inte renderar någon markup eller stilar åt dig. Detta ger dig\nfull kontroll över tabellens utseende, och vi har tillhandahållit stilar för att säkerställa att den matchar Midas utseende och känsla."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Stilarna för Tanstack Table är just nu i en tidig version och är ett arbete som pågår. Tanstack Table är inte en del av kärnbiblioteket i Midas, vilket innebär att supporten är begränsad. Vi är öppna för kodbidrag till vårt ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas",
          children: "repo"
        }), " och tar gärna emot förslag på stilar som saknas när du implementerar Tanstack Table."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vilka-versioner-stöds",
      children: "Vilka versioner stöds"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/table-styles"
      }), " stödjer både TanStack Table v8 och v9 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "^8.21.3 || ^9.0.0"
      }), "). DOM-strukturen är oförändrad mellan de två versionerna, så samma CSS-klasser och stilar fungerar oavsett vilken major du kör, det som skiljer sig är TanStacks eget JS/TS-API."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Det här är relevant att veta direkt: npms ", (0,jsx_runtime.jsx)(_components.code, {
        children: "latest"
      }), "-tagg för ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@tanstack/react-table"
      }), " pekar just nu på v9, och det finns ingen separat v8-tagg. Det betyder att om du kör ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install @tanstack/react-table"
      }), " idag i ett nytt projekt får du v9, inte v8. Har du redan ett projekt med v8 installerat påverkas du inte, den versionen fortsätter fungera precis som förut."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ny installation idag → v9."
        }), " Använd ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useTable"
        }), "-syntaxen i ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#komma-ig%C3%A5ng",
          children: "Komma igång"
        }), " nedan."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Befintligt projekt på v8 → v8."
        }), " Använd ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useReactTable"
        }), "-syntaxen, som även är den som de färdiga exemplen längre ner på sidan är skrivna med."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vill du behålla din befintliga v8-kod men ändå köra på v9 internt finns TanStacks egen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@tanstack/react-table/legacy"
      }), "-export med en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useLegacyTable"
      }), "-hook som är API-kompatibel med v8. Se TanStacks ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://tanstack.com/table/latest/docs/framework/react/guide/migrating",
        children: "migreringsguide"
      }), " för fler detaljer kring vad som skiljer v8 och v9 åt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "när-du-ska-använda-tanstack-table",
      children: "När du ska använda Tanstack Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använd Tanstack Table när du behöver funktioner som:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Paginering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sortering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Filtrering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Radmarkering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kolumnordning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Och mycket mer!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För enklare tabeller som inte kräver denna funktionalitet kan du använda den ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/table",
        children: "grundläggande Midas-tabellkomponenten"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "komma-igång",
      children: "Komma igång"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att använda Tanstack Table med Midas-stilar måste du först installera de nödvändiga beroendena:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @tanstack/react-table @midas-ds/table-styles\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Importera sedan Midas-stilarna för tabellen:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "@import '@midas-ds/table-styles/tanstack-table.css';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "midas-tanstack-table"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<table className={'midas-tanstack-table'}>...</table>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Här är ett minimalt exempel för att komma igång. Detta är ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v9-syntaxen"
      }), ", den du får om du installerar ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@tanstack/react-table"
      }), " från scratch idag:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import {\n  useTable, // v8: useReactTable\n  tableFeatures, // v9-only: builds the feature set passed to useTable\n  coreTablesFeature, // v9-only: base feature that's always required\n  createCoreRowModel, // v8: getCoreRowModel, but not called directly on the table config here\n  flexRender,\n  type ColumnDef,\n} from '@tanstack/react-table'\nimport '@midas-ds/table-styles/tanstack-table.css'\n\n// v9-only: v8 instead passes getCoreRowModel: getCoreRowModel() directly to useReactTable\nconst features = tableFeatures({\n  coreTablesFeature,\n  coreRowModel: createCoreRowModel(),\n})\n\ntype Person = {\n  name: string\n  age: number\n}\n\n// v9: ColumnDef also takes features as its first type parameter, v8 only takes <Person>\nconst columns: ColumnDef<typeof features, Person>[] = [\n  { accessorKey: 'name', header: 'Namn' },\n  { accessorKey: 'age', header: 'Ålder' },\n]\n\nconst data: Person[] = [\n  { name: 'Anna', age: 28 },\n  { name: 'Erik', age: 35 },\n]\n\nfunction MyTable() {\n  const table = useTable({\n    features, // v9-only: see above\n    data,\n    columns,\n  })\n\n  return (\n    <table className='midas-tanstack-table'>\n      <thead>\n        {table.getHeaderGroups().map(headerGroup => (\n          <tr key={headerGroup.id}>\n            {headerGroup.headers.map(header => (\n              <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>\n            ))}\n          </tr>\n        ))}\n      </thead>\n      <tbody>\n        {table.getRowModel().rows.map(row => (\n          <tr key={row.id}>\n            {row.getVisibleCells().map(cell => (\n              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>\n            ))}\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "är-du-på-v8",
      children: "Är du på v8?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om ditt projekt redan har ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@tanstack/react-table@8"
      }), " installerat fungerar ", (0,jsx_runtime.jsx)(_components.code, {
        children: "table-styles"
      }), " precis likadant, bara med v8", ":s", " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useReactTable"
      }), "-syntax istället. Det är också den syntaxen som används i alla de färdiga exemplen längre ner på sidan."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// v9: useTable + tableFeatures/coreTablesFeature/createCoreRowModel (see the v9 example above)\nimport { useReactTable, getCoreRowModel, flexRender, ColumnDef } from '@tanstack/react-table'\nimport '@midas-ds/table-styles/tanstack-table.css'\n\ntype Person = {\n  name: string\n  age: number\n}\n\n// v9: ColumnDef<typeof features, Person>\nconst columns: ColumnDef<Person>[] = [\n  { accessorKey: 'name', header: 'Namn' },\n  { accessorKey: 'age', header: 'Ålder' },\n]\n\nconst data: Person[] = [\n  { name: 'Anna', age: 28 },\n  { name: 'Erik', age: 35 },\n]\n\nfunction MyTable() {\n  const table = useReactTable({\n    data,\n    columns,\n    // v9: the row model is registered separately via tableFeatures, not inline here\n    getCoreRowModel: getCoreRowModel(),\n  })\n\n  return (\n    <table className='midas-tanstack-table'>\n      <thead>\n        {table.getHeaderGroups().map(headerGroup => (\n          <tr key={headerGroup.id}>\n            {headerGroup.headers.map(header => (\n              <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>\n            ))}\n          </tr>\n        ))}\n      </thead>\n      <tbody>\n        {table.getRowModel().rows.map(row => (\n          <tr key={row.id}>\n            {row.getVisibleCells().map(cell => (\n              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>\n            ))}\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "användbara-länkar",
      children: "Användbara länkar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Här är några resurser som hjälper dig att komma igång med TanStack Table:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://tanstack.com/table/latest/docs/introduction",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "TanStack Table-dokumentation"
          })
        }), ": Den officiella dokumentationen för v9 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "latest"
        }), ") är den bästa platsen att lära sig om alla funktioner och hur man använder dem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://tanstack.com/table/latest/docs/framework/react/examples/basic",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Exempel"
          })
        }), ": En stor samling exempel som visar hur man implementerar olika funktioner."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sitter du kvar på v8? Ingen fara, ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://tanstack.com/table/v8/docs/introduction",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "v8-dokumentationen"
          })
        }), " finns kvar och underhålls separat av TanStack."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exempel",
      children: "Exempel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Exemplen nedan är skrivna med v8", ":s", " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useReactTable"
      }), "-syntax (se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%C3%A4r-du-p%C3%A5-v8",
        children: "Är du på v8?"
      }), " ovan). Är du på v9 gäller samma hook-anrop (", (0,jsx_runtime.jsx)(_components.code, {
        children: "getSortedRowModel"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getFilteredRowModel"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "column.getToggleSortingHandler()"
      }), " och så vidare), du byter bara ut ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useReactTable"
      }), " mot ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useTable"
      }), " och registrerar features via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tableFeatures"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "paginering",
      children: "Paginering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Midas erbjuder en färdig komponent som jackar in i Tanstack tables API för paginering."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Pagination } from '@midas-ds/table-styles'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "const table = useReactTable({\n  data,\n  columns,\n  getCoreRowModel: getCoreRowModel(),\n  getPaginationRowModel: getPaginationRowModel(),\n  initialState: {\n    pagination: {\n      pageIndex: 0,\n      pageSize: 10,\n    },\n  },\n})\n\nconst {\n  pagination: { pageIndex, pageSize },\n} = table.getState()\n\n\nreturn (\n  <table>\n  ...\n  </table>\n <Pagination\n    getCanNextPage={table.getCanNextPage}\n    getCanPreviousPage={table.getCanPreviousPage}\n    getPageCount={table.getPageCount}\n    getRowCount={table.getRowCount}\n    nextPage={table.nextPage}\n    pageIndex={pageIndex}\n    pageSize={pageSize}\n    previousPage={table.previousPage}\n    setPageIndex={table.setPageIndex}\n    setPageSize={table.setPageSize}\n  />\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(examples/* .PaginationExample */.F0, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Läs mer om paginering i ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://tanstack.com/table/v8/docs/guide/pagination",
        children: "Tanstack Table's dokumentation"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sortering",
      children: "Sortering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tanstack Table har inbyggt stöd för sortering med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getSortedRowModel"
      }), ". Klicka på kolumnrubrikerna för att sortera tabellen."]
    }), "\n", (0,jsx_runtime.jsx)(examples/* .SortingExample */.D8, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I detta exempel används:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sorting"
        }), " state för att hålla reda på vilka kolumner som är sorterade och i vilken riktning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "getSortedRowModel()"
        }), " för att hantera sorteringen"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "column.getToggleSortingHandler()"
        }), " för att växla sorteringsriktning vid klick"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "column.getIsSorted()"
        }), " för att visa rätt sorteringsikon"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ArrowUp"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ArrowDown"
        }), ", och ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ArrowUpDown"
        }), " från ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lucide-react"
        }), " som sorteringsindikatorer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Klasserna ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sortable-header"
        }), " och ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sort-icon-neutral"
        }), " för att få rätt hover-beteende"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Viktigt att notera:"
      }), " Sorteringsikonen (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ArrowUpDown"
      }), ") är dold som standard och visas automatiskt vid hover tack vare stilarna i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tanstack-table.css"
      }), ". När en kolumn är sorterad visas ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ArrowUp"
      }), " eller ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ArrowDown"
      }), " istället."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Läs mer om sortering i ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://tanstack.com/table/v8/docs/guide/sorting",
        children: "Tanstack Table's dokumentation"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filtrering",
      children: "Filtrering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tanstack Table har inbyggt stöd för filtrering med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getFilteredRowModel"
      }), ". Du kan använda alla standardformulärkomponenter från Midas för att skapa filterkontrollen."]
    }), "\n", (0,jsx_runtime.jsx)(examples/* .FilteringExample */.Bw, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I detta exempel används:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "globalFilter"
        }), " för textsökning över flera kolumner"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "columnFilters"
        }), " för att filtrera på specifika kolumner"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "getFilteredRowModel()"
        }), " för att hantera filtreringen"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Läs mer om filtrering i ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://tanstack.com/table/v8/docs/guide/filters",
        children: "Tanstack Table's dokumentation"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kolumnsynlighet",
      children: "Kolumnsynlighet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tanstack Table gör det enkelt att låta användare välja vilka kolumner som ska visas med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "columnVisibility"
      }), " state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "{\n  table.getAllLeafColumns().map(column => (\n    <Checkbox\n      key={column.id}\n      isSelected={column.getIsVisible()}\n      onChange={isSelected => column.toggleVisibility(isSelected)}\n    >\n      {typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id}\n    </Checkbox>\n  ))\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(examples/* .ColumnVisibilityExample */.dP, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I detta exempel används:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "columnVisibility"
        }), " state för att hålla reda på vilka kolumner som är synliga"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "column.getIsVisible()"
        }), " för att kontrollera om en kolumn är synlig"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "column.getToggleVisibilityHandler()"
        }), " för att växla synlighet"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Läs mer om kolumnsynlighet i ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://tanstack.com/table/v8/docs/guide/column-visibility",
        children: "Tanstack Table's dokumentation"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drag-and-drop-kolumner",
      children: "Drag and Drop-kolumner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Med hjälp av ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@dnd-kit"
      }), " kan du låta användare ordna om kolumner genom att dra och släppa dem. Detta ger en intuitiv och användarvänlig upplevelse för att anpassa tabellens layout."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Först, installera de nödvändiga beroendena:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities @dnd-kit/modifiers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(examples/* .ColumnDndExample */.tr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I detta exempel används:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "columnOrder"
        }), " state för att hålla reda på ordningen av kolumnerna"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "DndContext"
        }), " för att hantera drag and drop-funktionalitet"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SortableContext"
        }), " för att göra kolumner sorterbara"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "useSortable"
        }), " hook för att göra individuella kolumner draggbara"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "arrayMove"
        }), " från ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@dnd-kit/sortable"
        }), " för att ordna om kolumnerna"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "GripVertical"
        }), " från ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lucide-react"
        }), " som drag-ikon som visas vid hover"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Klassen ", (0,jsx_runtime.jsx)(_components.code, {
          children: "drag-handle"
        }), " för att få rätt hover-beteende"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Viktigt att notera:"
      }), " Drag-ikonen är dold som standard och visas automatiskt vid hover över kolumnrubriken tack vare stilarna i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tanstack-table.css"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Läs mer om column ordering i ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://tanstack.com/table/v8/docs/guide/column-ordering",
        children: "Tanstack Table's dokumentation"
      }), "."]
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
71382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"indicator":"indicator_51pB","checkboxButton":"checkboxButton_URXt","checkboxField":"checkboxField_Jg75","checkboxGroup":"checkboxGroup_iAq9","checkboxList":"checkboxList_R4Jt"});

},
79831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"listBox":"listBox_l3jg","listBoxItem":"listBoxItem_eA9_","textContent":"textContent_fXWz","listBoxPopover":"listBoxPopover_OG2Y dropdownAnimation_MaN2","listBoxSectionHeading":"listBoxSectionHeading_R5mH","listBoxButton":"listBoxButton_LfGK","listBoxLoadMoreItem":"listBoxLoadMoreItem_RWDs","item":"item_WGgT","option":"option_fjxj","inputCheckbox":"inputCheckbox_goBo"});

},
10092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"select":"select_Fsxg","triggerContainer":"triggerContainer_JBm2","trigger":"trigger_YoQG","medium":"medium_IF05","small":"small_aYtu","selectValue":"selectValue_pNd2","icon":"icon_roiA","placeholder":"placeholder_R_6a","multiSelectValue":"multiSelectValue_IicV","selectValueTag":"selectValueTag_Bx1C","clearButton":"clearButton_p8du","truncate":"truncate_J6cE","popover":"popover_Bl6D","selectAll":"selectAll_YD8u","tagGroup":"tagGroup_t6GX"});

},
52658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"textField":"textField_IarX","bottomError":"bottomError_XU77","textArea":"textArea_M6yF","input":"input_g6A6","wrap":"wrap_ljmz","medium":"medium_jalb","passwordText":"passwordText_gBIs","passwordButton":"passwordButton_kacG"});

},
54391(module) {
function webpackEmptyContext(req) {
  var e = new Error("Cannot find module '" + req + "'");
  e.code = 'MODULE_NOT_FOUND';
  throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 54391;
module.exports = webpackEmptyContext;


},
57213(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Bw: () => (/* reexport */ FilteringExample),
  N_: () => (/* reexport */ MonthSelectExample),
  tr: () => (/* reexport */ ColumnDndExample),
  dP: () => (/* reexport */ ColumnVisibilityExample),
  D8: () => (/* reexport */ SortingExample),
  JV: () => (/* reexport */ DefaultReactDatepickerExample),
  WV: () => (/* reexport */ InvalidExample),
  F0: () => (/* reexport */ PaginationExample)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-table/build/lib/index.mjs
var lib = __webpack_require__(1530);
// EXTERNAL MODULE: ./node_modules/@tanstack/table-core/build/lib/index.mjs
var build_lib = __webpack_require__(33888);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 3 modules
var TextField = __webpack_require__(48494);
// EXTERNAL MODULE: ./packages/components/src/select/Select.tsx + 4 modules
var Select = __webpack_require__(50423);
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBoxItem.tsx
var ListBoxItem = __webpack_require__(87533);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./tools/test-utils/src/index.ts + 4 modules
var src = __webpack_require__(398);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/tanstack-table/FilteringExample.tsx






const columns = [
    {
        accessorKey: 'id',
        header: 'ID'
    },
    {
        accessorKey: 'firstName',
        header: 'Förnamn'
    },
    {
        accessorKey: 'lastName',
        header: 'Efternamn'
    },
    {
        accessorKey: 'email',
        header: 'Mejladress'
    },
    {
        accessorKey: 'department',
        header: 'Avdelning'
    },
    {
        accessorKey: 'status',
        header: 'Status'
    }
];
const departments = [
    {
        id: 'all',
        name: 'Alla avdelningar'
    },
    {
        id: 'engineering',
        name: 'Teknik'
    },
    {
        id: 'marketing',
        name: 'Marknadsföring'
    },
    {
        id: 'hr',
        name: 'HR'
    },
    {
        id: 'sales',
        name: 'Försäljning'
    },
    {
        id: 'finance',
        name: 'Ekonomi'
    }
];
const statuses = [
    {
        id: 'all',
        name: 'Alla statusar'
    },
    {
        id: 'active',
        name: 'Aktiv'
    },
    {
        id: 'inactive',
        name: 'Inaktiv'
    },
    {
        id: 'pending',
        name: 'Väntande'
    }
];
function FilteringExample() {
    const [nameFilter, setNameFilter] = (0,react.useState)('');
    const [departmentFilter, setDepartmentFilter] = (0,react.useState)('all');
    const [statusFilter, setStatusFilter] = (0,react.useState)('all');
    const columnFilters = (0,react.useMemo)(()=>{
        const filters = [];
        if (departmentFilter !== 'all') {
            filters.push({
                id: 'department',
                value: departmentFilter
            });
        }
        if (statusFilter !== 'all') {
            filters.push({
                id: 'status',
                value: statusFilter
            });
        }
        return filters;
    }, [
        departmentFilter,
        statusFilter
    ]);
    const table = (0,lib/* .useReactTable */.N4)({
        data: src/* .employees */.K1,
        columns,
        getCoreRowModel: (0,build_lib/* .getCoreRowModel */.HT)(),
        getFilteredRowModel: (0,build_lib/* .getFilteredRowModel */.hM)(),
        state: {
            globalFilter: nameFilter,
            columnFilters
        },
        onGlobalFilterChange: setNameFilter,
        globalFilterFn: (row, columnId, filterValue)=>{
            const firstName = String(row.getValue('firstName')).toLowerCase();
            const lastName = String(row.getValue('lastName')).toLowerCase();
            const search = String(filterValue).toLowerCase();
            return firstName.includes(search) || lastName.includes(search);
        }
    });
    const handleClearFilters = ()=>{
        setNameFilter('');
        setDepartmentFilter('all');
        setStatusFilter('all');
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            flex: '1 1 300px',
                            minWidth: '200px'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* .TextField */.A, {
                            label: "S\xf6k p\xe5 namn",
                            value: nameFilter,
                            onChange: setNameFilter,
                            placeholder: "Ange f\xf6r- eller efternamn"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            flex: '1 1 200px',
                            minWidth: '150px'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* .Select */.l, {
                            label: "Avdelning",
                            value: departmentFilter,
                            onChange: (key)=>setDepartmentFilter(key),
                            items: departments,
                            children: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListBoxItem/* .ListBoxItem */.n, {
                                    id: item.id,
                                    children: item.name
                                })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            flex: '1 1 200px',
                            minWidth: '150px'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* .Select */.l, {
                            label: "Status",
                            value: statusFilter,
                            onChange: (key)=>setStatusFilter(key),
                            items: statuses,
                            children: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListBoxItem/* .ListBoxItem */.n, {
                                    id: item.id,
                                    children: item.name
                                })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'flex-end'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                            variant: "secondary",
                            onPress: handleClearFilters,
                            children: "Rensa filter"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                className: "midas-tanstack-table",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                        children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                                children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        children: header.isPlaceholder ? null : (0,lib/* .flexRender */.Kv)(header.column.columnDef.header, header.getContext())
                                    }, header.id))
                            }, headerGroup.id))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                        children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                                children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                        children: (0,lib/* .flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext())
                                    }, cell.id))
                            }, row.id))
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx + 2 modules
var Checkbox = __webpack_require__(78959);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(5245);
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(11728);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.js
var settings = __webpack_require__(80964);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/tanstack-table/ColumnVisibilityExample.tsx







const ColumnVisibilityExample_columns = [
    {
        accessorKey: 'id',
        header: 'ID'
    },
    {
        accessorKey: 'firstName',
        header: 'Förnamn'
    },
    {
        accessorKey: 'lastName',
        header: 'Efternamn'
    },
    {
        accessorKey: 'email',
        header: 'Mejladress'
    },
    {
        accessorKey: 'department',
        header: 'Avdelning'
    },
    {
        accessorKey: 'status',
        header: 'Status'
    }
];
function ColumnVisibilityExample() {
    const [columnVisibility, setColumnVisibility] = (0,react.useState)({});
    const table = (0,lib/* .useReactTable */.N4)({
        data: src/* .employees */.K1,
        columns: ColumnVisibilityExample_columns,
        getCoreRowModel: (0,build_lib/* .getCoreRowModel */.HT)(),
        state: {
            columnVisibility
        },
        onColumnVisibilityChange: setColumnVisibility
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap'
                },
                children: table.getAllLeafColumns().map((column)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* .Checkbox */.S, {
                        isSelected: column.getIsVisible(),
                        onChange: (isSelected)=>column.toggleVisibility(isSelected),
                        children: typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id
                    }, column.id))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    display: 'flex',
                    marginBottom: '1rem'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    width: '100%',
                    overflowX: 'auto'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                        className: "midas-tanstack-table",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                                children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                                        children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                children: header.isPlaceholder ? null : (0,lib/* .flexRender */.Kv)(header.column.columnDef.header, header.getContext())
                                            }, header.id))
                                    }, headerGroup.id))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                                children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                                        children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                children: (0,lib/* .flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext())
                                            }, cell.id))
                                    }, row.id))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: [
                            "Kolumnsynlighet kan ocks\xe5 l\xe4ggas i en popover:",
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* .DialogTrigger */.zM, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                                        variant: "icon",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(settings/* ["default"] */.A, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0.75rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                    children: "Visa kolumner:"
                                                }),
                                                table.getAllLeafColumns().map((column)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* .Checkbox */.S, {
                                                        isSelected: column.getIsVisible(),
                                                        onChange: (isSelected)=>column.toggleVisibility(isSelected),
                                                        children: typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id
                                                    }, column.id))
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@dnd-kit/core/dist/core.esm.js + 1 modules
var core_esm = __webpack_require__(98668);
// EXTERNAL MODULE: ./node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js
var modifiers_esm = __webpack_require__(18831);
// EXTERNAL MODULE: ./node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var sortable_esm = __webpack_require__(43627);
// EXTERNAL MODULE: ./node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var utilities_esm = __webpack_require__(74979);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/grip-vertical.js
var grip_vertical = __webpack_require__(21436);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/tanstack-table/ColumnDndExample.tsx










const ColumnDndExample_columns = [
    {
        accessorKey: 'id',
        header: 'ID',
        size: 60
    },
    {
        accessorKey: 'firstName',
        header: 'Förnamn'
    },
    {
        accessorKey: 'lastName',
        header: 'Efternamn'
    },
    {
        accessorKey: 'email',
        header: 'Mejladress'
    },
    {
        accessorKey: 'department',
        header: 'Avdelning'
    },
    {
        accessorKey: 'status',
        header: 'Status',
        size: 100
    }
];
function DraggableTableHeader(param) {
    let { header } = param;
    const { attributes, isDragging, listeners, setNodeRef, transform } = (0,sortable_esm/* .useSortable */.gl)({
        id: header.column.id
    });
    const style = {
        opacity: isDragging ? 0.8 : 1,
        position: 'relative',
        transform: utilities_esm/* .CSS.Translate.toString */.Ks.Translate.toString(transform),
        transition: 'width transform 0.2s ease-in-out',
        whiteSpace: 'nowrap',
        width: header.column.getSize(),
        zIndex: isDragging ? 1 : 0
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
        colSpan: header.colSpan,
        ref: setNodeRef,
        style: style,
        children: header.isPlaceholder ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            },
            children: [
                (0,lib/* .flexRender */.Kv)(header.column.columnDef.header, header.getContext()),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    ...attributes,
                    ...listeners,
                    className: "drag-handle",
                    style: {
                        cursor: 'grab',
                        touchAction: 'none',
                        border: 'none',
                        background: 'transparent',
                        padding: '0.25rem',
                        display: 'flex',
                        alignItems: 'center'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(grip_vertical/* ["default"] */.A, {
                        size: 16
                    })
                })
            ]
        })
    });
}
function DragAlongCell(param) {
    let { cell } = param;
    const { isDragging, setNodeRef, transform } = (0,sortable_esm/* .useSortable */.gl)({
        id: cell.column.id
    });
    const style = {
        opacity: isDragging ? 0.8 : 1,
        position: 'relative',
        transform: utilities_esm/* .CSS.Translate.toString */.Ks.Translate.toString(transform),
        transition: 'width transform 0.2s ease-in-out',
        width: cell.column.getSize(),
        zIndex: isDragging ? 1 : 0
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
        style: style,
        ref: setNodeRef,
        children: (0,lib/* .flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext())
    });
}
function ColumnDndExample() {
    const [data] = (0,react.useState)(()=>[
            ...src/* .employees */.K1
        ]);
    const [columnOrder, setColumnOrder] = (0,react.useState)(()=>ColumnDndExample_columns.map((c)=>c.id ?? c.accessorKey));
    const table = (0,lib/* .useReactTable */.N4)({
        data,
        columns: ColumnDndExample_columns,
        getCoreRowModel: (0,build_lib/* .getCoreRowModel */.HT)(),
        state: {
            columnOrder
        },
        onColumnOrderChange: setColumnOrder
    });
    function handleDragEnd(event) {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            setColumnOrder((columnOrder)=>{
                const oldIndex = columnOrder.indexOf(active.id);
                const newIndex = columnOrder.indexOf(over.id);
                return (0,sortable_esm/* .arrayMove */.be)(columnOrder, oldIndex, newIndex);
            });
        }
    }
    const sensors = (0,core_esm/* .useSensors */.FR)((0,core_esm/* .useSensor */.MS)(core_esm/* .MouseSensor */.cA, {}), (0,core_esm/* .useSensor */.MS)(core_esm/* .TouchSensor */.IG, {}), (0,core_esm/* .useSensor */.MS)(core_esm/* .KeyboardSensor */.uN, {}));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(core_esm/* .DndContext */.Mp, {
        collisionDetection: core_esm/* .closestCenter */.fp,
        modifiers: [
            modifiers_esm/* .restrictToHorizontalAxis */.dU
        ],
        onDragEnd: handleDragEnd,
        sensors: sensors,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            style: {
                width: '100%',
                overflowX: 'auto'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                className: "midas-tanstack-table",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                        children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(sortable_esm/* .SortableContext */.gB, {
                                    items: columnOrder,
                                    strategy: sortable_esm/* .horizontalListSortingStrategy */.m$,
                                    children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(DraggableTableHeader, {
                                            header: header
                                        }, header.id))
                                })
                            }, headerGroup.id))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                        children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(sortable_esm/* .SortableContext */.gB, {
                                    items: columnOrder,
                                    strategy: sortable_esm/* .horizontalListSortingStrategy */.m$,
                                    children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(DragAlongCell, {
                                            cell: cell
                                        }, cell.id))
                                })
                            }, row.id))
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up.js
var arrow_up = __webpack_require__(6632);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down.js
var arrow_down = __webpack_require__(43241);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up-down.js
var arrow_up_down = __webpack_require__(98645);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/tanstack-table/SortingExample.tsx






const SortingExample_columns = [
    {
        accessorKey: 'id',
        header: 'ID',
        size: 60
    },
    {
        accessorKey: 'firstName',
        header: 'Förnamn'
    },
    {
        accessorKey: 'lastName',
        header: 'Efternamn'
    },
    {
        accessorKey: 'email',
        header: 'Mejladress'
    },
    {
        accessorKey: 'department',
        header: 'Avdelning'
    },
    {
        accessorKey: 'status',
        header: 'Status',
        size: 100
    }
];
function SortingExample() {
    const [sorting, setSorting] = (0,react.useState)([]);
    const table = (0,lib/* .useReactTable */.N4)({
        data: src/* .employees */.K1,
        columns: SortingExample_columns,
        getCoreRowModel: (0,build_lib/* .getCoreRowModel */.HT)(),
        getSortedRowModel: (0,build_lib/* .getSortedRowModel */.h5)(),
        onSortingChange: setSorting,
        state: {
            sorting
        }
    });
    const getSortIcon = (isSorted)=>{
        if (isSorted === 'asc') {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up/* ["default"] */.A, {
                size: 14
            });
        }
        if (isSorted === 'desc') {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down/* ["default"] */.A, {
                size: 14
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_down/* ["default"] */.A, {
            size: 14,
            className: "sort-icon-neutral"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: {
            width: '100%',
            overflowX: 'auto'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
            className: "midas-tanstack-table",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                    children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                            children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                    children: header.isPlaceholder ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: header.column.getCanSort() ? 'sortable-header' : '',
                                        onClick: header.column.getToggleSortingHandler(),
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                header.column.getToggleSortingHandler()?.(e);
                                            }
                                        },
                                        role: header.column.getCanSort() ? 'button' : undefined,
                                        tabIndex: header.column.getCanSort() ? 0 : undefined,
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        },
                                        children: [
                                            (0,lib/* .flexRender */.Kv)(header.column.columnDef.header, header.getContext()),
                                            header.column.getCanSort() && getSortIcon(header.column.getIsSorted())
                                        ]
                                    })
                                }, header.id))
                        }, headerGroup.id))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                    children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                            children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: (0,lib/* .flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext())
                                }, cell.id))
                        }, row.id))
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(60250);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
;// CONCATENATED MODULE: ./packages/table-styles/src/lib/pagination/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"nextPage":"Next page","previousPage":"Previous page","rowsPerPage":"Rows per page:","of":"of","page":"page","pages":"pages","row":"row","rows":"rows","selectPage":"Select page"},"sv":{"nextPage":"Nästa sida","previousPage":"Föregående sida","rowsPerPage":"Rader per sida:","of":"av","page":"sida","pages":"sidor","row":"rad","rows":"rader","selectPage":"Välj sida"}}')
;// CONCATENATED MODULE: ./packages/table-styles/src/lib/pagination/Pagination.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Pagination_module = ({"pagination":"pagination_Y9Wt","separator":"separator__csT","select":"select__KlP","listBoxItem":"listBoxItem_sozo","pageSize":"pageSize_zIUw select__KlP","result":"result_q8j0 separator__csT","pageIndexContainer":"pageIndexContainer_lDUC separator__csT","label":"label_FSNQ","pageIndex":"pageIndex_EpBZ select__KlP","buttons":"buttons_qgFZ","button":"button_OU0C separator__csT"});
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/FocusScope.mjs
var FocusScope = __webpack_require__(46686);
;// CONCATENATED MODULE: ./packages/table-styles/src/lib/pagination/Pagination.tsx






const NavigationButtons = (param)=>{
    let { getCanNextPage, getCanPreviousPage, nextPage, previousPage } = param;
    const focusManager = (0,FocusScope/* .useFocusManager */.H8)();
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const onKeyDown = (e)=>{
        switch(e.key){
            case 'ArrowRight':
                focusManager?.focusNext({
                    wrap: true
                });
                break;
            case 'ArrowLeft':
                focusManager?.focusPrevious({
                    wrap: true
                });
                break;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                "aria-label": strings.format('previousPage'),
                className: Pagination_module.button,
                isDisabled: !getCanPreviousPage(),
                onKeyDown: onKeyDown,
                onPress: previousPage,
                variant: "icon",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_left/* ["default"] */.A, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                "aria-label": strings.format('nextPage'),
                className: Pagination_module.button,
                isDisabled: !getCanNextPage(),
                onKeyDown: onKeyDown,
                onPress: nextPage,
                variant: "icon",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* ["default"] */.A, {})
            })
        ]
    });
};
const Pagination = (props)=>{
    const { getPageCount, getRowCount, pageIndex, pageSize, pageSizeOptions = [
        10,
        20,
        30,
        40,
        50
    ], setPageIndex, setPageSize } = props;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const pageCount = getPageCount();
    const rowCount = getRowCount();
    const lastVisibleItem = (pageIndex + 1) * pageSize;
    const firstVisibleItem = lastVisibleItem - pageSize + 1;
    const handleChangePageIndex = (value)=>{
        setPageIndex(value !== null ? Number(value) : 0);
    };
    const handleChangePageSize = (value)=>{
        const newPageSize = value !== null ? Number(value) : pageSize;
        setPageSize(newPageSize);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: Pagination_module.pagination,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* .Select */.l, {
                className: Pagination_module.pageSize,
                items: pageSizeOptions.map((size)=>({
                        id: size.toString(),
                        name: size
                    })),
                label: strings.format('rowsPerPage'),
                onChange: handleChangePageSize,
                value: pageSize.toString(),
                children: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListBoxItem/* .ListBoxItem */.n, {
                        className: Pagination_module.listBoxItem,
                        id: item.id,
                        textValue: item.id,
                        children: item.name
                    })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Text/* .Text */.E, {
                className: Pagination_module.result,
                children: [
                    firstVisibleItem,
                    " -",
                    ' ',
                    lastVisibleItem > rowCount ? rowCount : lastVisibleItem,
                    ' ',
                    strings.format('of'),
                    " ",
                    rowCount.toLocaleString(),
                    ' ',
                    rowCount === 1 ? strings.format('row') : strings.format('rows')
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: Pagination_module.pageIndexContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* .Select */.l, {
                        "aria-label": strings.format('selectPage'),
                        className: Pagination_module.pageIndex,
                        items: Array.from({
                            length: pageCount
                        }, (_, i)=>({
                                id: i.toString(),
                                name: i
                            })),
                        onChange: handleChangePageIndex,
                        value: pageIndex.toString(),
                        children: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListBoxItem/* .ListBoxItem */.n, {
                                className: Pagination_module.listBoxItem,
                                id: item.id,
                                textValue: (Number(item.id) + 1).toString(),
                                children: item.name + 1
                            })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Text/* .Text */.E, {
                        className: Pagination_module.label,
                        children: [
                            strings.format('of'),
                            " ",
                            pageCount,
                            ' ',
                            pageCount === 1 ? strings.format('page') : strings.format('pages')
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: Pagination_module.buttons,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FocusScope/* .FocusScope */.n1, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationButtons, {
                        ...props
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./packages/table-styles/src/lib/pagination/index.ts


;// CONCATENATED MODULE: ./packages/table-styles/src/index.ts


;// CONCATENATED MODULE: ./apps/docs/src/components/examples/tanstack-table/PaginationExample.tsx




const PaginationExample_data = Array.from({
    length: 100
}, (_, i)=>({
        id: i + 1,
        name: `Person ${i + 1}`,
        email: `person${i + 1}@example.com`,
        age: 20 + i % 50
    }));
const PaginationExample_columns = [
    {
        accessorKey: 'id',
        header: 'ID'
    },
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'email',
        header: 'Email'
    },
    {
        accessorKey: 'age',
        header: 'Age'
    }
];
function PaginationExample() {
    const table = (0,lib/* .useReactTable */.N4)({
        data: PaginationExample_data,
        columns: PaginationExample_columns,
        getCoreRowModel: (0,build_lib/* .getCoreRowModel */.HT)(),
        getPaginationRowModel: (0,build_lib/* .getPaginationRowModel */.kW)(),
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 10
            }
        }
    });
    const { pagination: { pageIndex, pageSize } } = table.getState();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            marginBottom: '1rem'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                className: "midas-tanstack-table",
                style: {
                    marginBottom: 0
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                        children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                                children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "headerCell",
                                            children: header.isPlaceholder ? null : (0,lib/* .flexRender */.Kv)(header.column.columnDef.header, header.getContext())
                                        })
                                    }, header.id))
                            }, headerGroup.id))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                        children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
                                children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                        children: (0,lib/* .flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext())
                                    }, cell.id))
                            }, row.id))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Pagination, {
                getCanNextPage: table.getCanNextPage,
                getCanPreviousPage: table.getCanPreviousPage,
                getPageCount: table.getPageCount,
                getRowCount: table.getRowCount,
                nextPage: table.nextPage,
                pageIndex: pageIndex,
                pageSize: pageSize,
                previousPage: table.previousPage,
                setPageIndex: table.setPageIndex,
                setPageSize: table.setPageSize
            })
        ]
    });
}

;// CONCATENATED MODULE: ./apps/docs/src/components/examples/tanstack-table/index.ts






// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar-days.js
var calendar_days = __webpack_require__(93347);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/index.es.js + 130 modules
var index_es = __webpack_require__(27725);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(79440);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(47135);
// EXTERNAL MODULE: ./node_modules/date-fns/locale/sv.js + 5 modules
var sv = __webpack_require__(28112);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/react-datepicker/ReactDatepickerExamples.tsx








(0,index_es/* .registerLocale */.E)('sv', sv.sv);
(0,index_es/* .setDefaultLocale */.YC)('sv');
const DefaultReactDatepickerExample = ()=>{
    const [selectedDate, setSelectedDate] = (0,react.useState)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* ["default"] */.Ay, {
        showIcon: true,
        selected: selectedDate,
        onChange: (date)=>setSelectedDate(date),
        formatWeekDay: (date)=>date[0].toUpperCase(),
        toggleCalendarOnIconClick: true,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(calendar_days/* ["default"] */.A, {
            height: 20
        }),
        showPopperArrow: false,
        dateFormat: "dd-MM-yyyy",
        placeholderText: "Select a date"
    });
};
const MonthSelectExample = ()=>{
    const [selectedDate, setSelectedDate] = (0,react.useState)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* ["default"] */.Ay, {
        showPopperArrow: false,
        selected: selectedDate,
        showIcon: true,
        toggleCalendarOnIconClick: true,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(calendar_days/* ["default"] */.A, {
            height: 20
        }),
        showMonthYearPicker: true,
        onChange: (date)=>setSelectedDate(date),
        dateFormat: "MM-yyyy",
        placeholderText: "Select a date"
    });
};
const isBeforeToday = (date)=>{
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
};
const InvalidExample = ()=>{
    const [selectedDate, setSelectedDate] = (0,react.useState)(()=>{
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return yesterday;
    });
    const error = selectedDate && isBeforeToday(selectedDate) ? 'Datumet kan inte ligga bakåt i tiden' : undefined;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            display: 'flex',
            flexDirection: 'column'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Label/* .Label */.J, {
                htmlFor: "invalid-example-date",
                children: "Startdatum"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* ["default"] */.Ay, {
                id: "invalid-example-date",
                showPopperArrow: false,
                selected: selectedDate,
                showIcon: true,
                toggleCalendarOnIconClick: true,
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(calendar_days/* ["default"] */.A, {
                    height: 20
                }),
                onChange: (date)=>setSelectedDate(date),
                dateFormat: "yyyy-MM-dd",
                placeholderText: "\xc5\xc5\xc5\xc5-MM-DD",
                ariaInvalid: error ? 'true' : undefined,
                ariaDescribedBy: error ? 'invalid-example-error' : undefined
            }),
            error && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                id: "invalid-example-error",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                    isInvalid: true,
                    children: error
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./apps/docs/src/components/examples/react-datepicker/index.ts


;// CONCATENATED MODULE: ./apps/docs/src/components/examples/index.ts




},
78959(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ Checkbox_Checkbox)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/minus.js
var minus = __webpack_require__(86241);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./packages/theme/src/index.ts + 3 modules
var src = __webpack_require__(10734);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(47135);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.module.css
var Checkbox_module = __webpack_require__(71382);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Checkbox.mjs + 6 modules
var Checkbox = __webpack_require__(42657);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/checkbox/CheckboxField.tsx
'use client';




const CheckboxField = (param)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* .CheckboxField */.Yh, {
        className: (0,clsx/* ["default"] */.A)(Checkbox_module/* ["default"].checkboxField */.A.checkboxField, className),
        ...rest
    });
};

;// CONCATENATED MODULE: ./packages/components/src/checkbox/CheckboxButton.tsx
'use client';





const CheckboxButton = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* .CheckboxButton */.aE, {
        className: (0,clsx/* ["default"] */.A)(Checkbox_module/* ["default"].checkboxButton */.A.checkboxButton, className),
        ref: ref,
        ...rest
    });
});

;// CONCATENATED MODULE: ./packages/components/src/checkbox/Checkbox.tsx









const Checkbox_Checkbox = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { className, description, errorMessage, errorPosition = 'top', children, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CheckboxField, {
        ...props,
        children: [
            description && /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                slot: "description",
                children: description
            }),
            errorPosition === 'top' && /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                children: errorMessage
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxButton, {
                ref: ref,
                className: className,
                children: (param)=>{
                    let { isIndeterminate } = param;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: Checkbox_module/* ["default"].indicator */.A.indicator,
                                children: isIndeterminate ? /*#__PURE__*/ (0,jsx_runtime.jsx)(minus/* ["default"] */.A, {
                                    size: 14,
                                    color: src/* .variables.iconOnColor */.E.w1t
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* ["default"] */.A, {
                                    size: 14,
                                    color: src/* .variables.iconOnColor */.E.w1t
                                })
                            }),
                            children
                        ]
                    });
                }
            }),
            errorPosition === 'bottom' && /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                children: errorMessage
            })
        ]
    });
});
Checkbox_Checkbox.displayName = 'Checkbox';


},
47135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ FieldError_FieldError)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/FieldError.mjs
var FieldError = __webpack_require__(3728);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
;// CONCATENATED MODULE: ./packages/components/src/field-error/FieldError.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const FieldError_module = ({"fieldError":"fieldError_K9VX"});
;// CONCATENATED MODULE: ./packages/components/src/field-error/FieldError.tsx






const FieldError_FieldError = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { children, isInvalid } = props;
    const className = (0,clsx/* ["default"] */.A)(FieldError_module.fieldError, props.className);
    const context = (0,react.useContext)(FieldError/* .FieldErrorContext */.C);
    if (!context && isInvalid && typeof children !== 'function') {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
            className: className,
            children: children
        });
    }
    if (!context?.isInvalid) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
        ...props,
        ref: ref,
        className: className
    });
});
FieldError_FieldError.displayName = 'FieldError';


},
79440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label_Label)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Label.mjs
var Label = __webpack_require__(37820);
;// CONCATENATED MODULE: ./packages/components/src/label/Label.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Label_module = ({"labelBase":"labelBase_BRgo"});
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(81582);
;// CONCATENATED MODULE: ./packages/components/src/label/Label.tsx






const DEFAULT_ELEMENT = 'label';
const Label_Label = (param)=>{
    let { children, className, elementType = DEFAULT_ELEMENT, ...rest } = param;
    const labelProps = {
        className: (0,clsx/* ["default"] */.A)(Label_module.labelBase, className),
        elementType: elementType || DEFAULT_ELEMENT,
        ...rest
    };
    const ctx = react.useContext(LabelWrapper/* .LabelWrapperContext */.d$);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Label/* .Label */.J, {
        ...labelProps,
        "aria-describedby": ctx?.popoverId,
        children: children
    });
};


},
81582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d$: () => (/* binding */ LabelWrapperContext),
  cR: () => (/* binding */ LabelWrapper)
});

// UNUSED EXPORTS: useLabelWrapperContext

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./packages/components/src/label/LabelWrapper.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const LabelWrapper_module = ({"labelPopover":"labelPopover_QNhJ","labelPopoverTrigger":"labelPopoverTrigger_iTpE"});
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(11728);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(97213);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(5245);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/label/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"moreInfo":"More info"},"sv":{"moreInfo":"Mer information"}}')
;// CONCATENATED MODULE: ./packages/components/src/label/InfoPopover.tsx










const InfoPopover = (param)=>{
    let { children, 'aria-label': ariaLabel } = param;
    const ctx = (0,react.useContext)(LabelWrapperContext);
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* .DialogTrigger */.zM, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                "aria-label": ariaLabel || strings.format('moreInfo'),
                className: LabelWrapper_module.labelPopoverTrigger,
                id: ctx?.popoverId,
                size: "medium",
                slot: null,
                variant: "icon",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(info/* ["default"] */.A, {
                    size: 20
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
                children: children
            })
        ]
    });
};

;// CONCATENATED MODULE: ./packages/components/src/label/LabelWrapper.tsx




const LabelWrapperContext = /*#__PURE__*/ react.createContext(undefined);
const useLabelWrapperContext = ()=>React.useContext(LabelWrapperContext);
const LabelWrapper = (param)=>{
    let { children, popover } = param;
    const popoverId = react.useId();
    if (popover) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LabelWrapperContext.Provider, {
        value: {
            popoverId
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: LabelWrapper_module.labelPopover,
            children: [
                children,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoPopover, {
                    ...popover
                })
            ]
        })
    });
    return children;
};


},
63942(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ ListBox_ListBox)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/ListBox.mjs + 3 modules
var ListBox = __webpack_require__(5721);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Virtualizer.mjs + 10 modules
var Virtualizer = __webpack_require__(94319);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/layout/ListLayout.mjs + 2 modules
var ListLayout = __webpack_require__(4915);
;// CONCATENATED MODULE: ./packages/components/src/list-box/SectionedListLayout.ts

class SectionedListLayout extends ListLayout/* .ListLayout */.$ {
    /**
   * When using the ListLayout our scroll container height is not calculated properly when the content is partially sectioned.
   * ```ts
   * const partiallySectionedContent = [
   *  {
   *    name: 'fruit section',
   *    children: [{ id: 'kiwi', name: 'Kiwi' }]
   *  },
   *  // berries have no section, because it's optional
   *  { id: 'lingonberries', name: 'Lingonberries' }
   * ];
   * ```
   * If we load the layout info for each key in the collection the calculation is correct.
   *
   * This might not be optional for performance, FYI
   */ getContentSize() {
        const keys = this?.virtualizer?.collection.getKeys();
        Array.from(keys || []).forEach((key)=>{
            this.getLayoutInfo(key);
        });
        return this.contentSize;
    }
}

// EXTERNAL MODULE: ./packages/components/src/list-box/ListBox.module.css
var ListBox_module = __webpack_require__(79831);
;// CONCATENATED MODULE: ./packages/components/src/list-box/ListBox.tsx





const ListBox_ListBox = (param)=>{
    let { className, children, virtualized = true, size, ...rest } = param;
    const listBox = /*#__PURE__*/ (0,jsx_runtime.jsx)(ListBox/* .ListBox */.qF, {
        className: (0,clsx/* ["default"] */.A)(ListBox_module/* ["default"].listBox */.A.listBox, className),
        "data-size": size,
        ...rest,
        children: children
    });
    if (!virtualized) {
        return listBox;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Virtualizer/* .Virtualizer */.Y, {
        layout: SectionedListLayout,
        layoutOptions: {
            estimatedHeadingSize: 38
        },
        children: listBox
    });
};


},
87533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  n: () => (ListBoxItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react_aria_components__rspack_import_2 = __webpack_require__(5721);
/* import */ var react_aria_components__rspack_import_4 = __webpack_require__(95841);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);
/* import */ var _ListBox_module_css__rspack_import_1 = __webpack_require__(79831);




const ListBoxItem = (param)=>{
    let { children, className, textValue, ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_2/* .ListBoxItem */.nh, {
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(_ListBox_module_css__rspack_import_1/* ["default"].listBoxItem */.A.listBoxItem, className),
        textValue: textValue || (typeof children === 'string' ? children : undefined),
        ...rest,
        children: (0,react_aria_components__rspack_import_4/* .composeRenderProps */.HW)(children, (children)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: _ListBox_module_css__rspack_import_1/* ["default"].textContent */.A.textContent,
                children: children
            }))
    });
};


},
11728(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Popover.mjs + 1 modules
var Popover = __webpack_require__(30900);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(57653);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/popover/Popover.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Popover_module = ({"popover":"popover_qr_p","arrow":"arrow_bhQK"});
;// CONCATENATED MODULE: ./packages/components/src/popover/Popover.tsx





const Popover_Popover = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [mergedProps, mergedRef] = (0,utils/* .useContextProps */.JT)(props, ref, Popover/* .PopoverContext */.n);
    const { className, hideArrow = false, offset = 4, ...rest } = mergedProps;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
        className: (0,clsx/* ["default"] */.A)(Popover_module.popover, className),
        offset: offset,
        ref: mergedRef,
        ...rest,
        children: (0,utils/* .composeRenderProps */.HW)(mergedProps.children, (children)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    !hideArrow && /*#__PURE__*/ (0,jsx_runtime.jsx)(OverlayArrow/* .OverlayArrow */.k, {
                        className: Popover_module.arrow,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                            height: 16,
                            viewBox: "0 0 16 16",
                            width: 16,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M0 0 L8 8 L16 0"
                            })
                        })
                    }),
                    children
                ]
            }))
    });
});


},
50423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Select_Select)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Select.mjs + 4 modules
var Select = __webpack_require__(40258);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/FocusScope.mjs
var FocusScope = __webpack_require__(46686);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(79440);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(81582);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(47135);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx + 2 modules
var Checkbox = __webpack_require__(78959);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/select/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"clearAll":"Clear all","selectAll":"Select all","selectedItems":"Selected items","selected":"selected"},"sv":{"clearAll":"Rensa alla","selectAll":"Välj alla","selectedItems":"Valda objekt","selected":"valda"}}')
// EXTERNAL MODULE: ./packages/components/src/select/Select.module.css
var Select_module = __webpack_require__(10092);
;// CONCATENATED MODULE: ./packages/components/src/select/SelectAll.tsx







const SelectAll = ()=>{
    const state = react.useContext(Select/* .SelectStateContext */.nT);
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const handleChange = ()=>{
        if (!state) return;
        // `collection.getKeys()` returns every node (sections, headers, items),
        // so it's filtered down to selectable items — same rule react-stately's
        // own (private) getSelectAllKeys() uses internally.
        const selectableKeys = Array.from(state.collection.getKeys()).filter((key)=>state.collection.getItem(key)?.type === 'item' && state.selectionManager.canSelectItem(key));
        // A disabled item can't be toggled individually, so bulk select/clear
        // shouldn't be able to touch it either — whatever selection state it's
        // already in is preserved regardless of which way this toggles.
        const preservedDisabledKeys = Array.from(state.selectionManager.selectedKeys).filter((key)=>!state.selectionManager.canSelectItem(key));
        state.setValue(state.selectionManager.isSelectAll ? preservedDisabledKeys : [
            ...selectableKeys,
            ...preservedDisabledKeys
        ]);
        state.commitValidation();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* .Checkbox */.S, {
        className: Select_module/* ["default"].selectAll */.A.selectAll,
        isIndeterminate: !state?.selectionManager.isSelectAll && !state?.selectionManager.isEmpty,
        isSelected: state?.selectionManager.isSelectAll,
        onChange: handleChange,
        children: strings.format('selectAll')
    });
};

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Button.mjs
var Button = __webpack_require__(93426);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
;// CONCATENATED MODULE: ./packages/components/src/select/MultiSelectValue.tsx








const MultiSelectValue = (param)=>{
    let { isDisabled } = param;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const formatString = (selectedItems, selectedText)=>{
        if (selectedItems.length === 1) {
            return selectedText;
        }
        return `${selectedItems.length} ${strings.format('selected')}`;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* .SelectValue */.yv, {
        className: Select_module/* ["default"].multiSelectValue */.A.multiSelectValue,
        "data-disabled": isDisabled || undefined,
        children: (param)=>{
            let { isPlaceholder, selectedItems, selectedText } = param;
            return isPlaceholder ? // this empty fragment prevents rendering double placeholders for multiselect
            // we need a falsy value, null or undefined won't do the trick
            // eslint-disable-next-line
            /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: Select_module/* ["default"].selectValueTag */.A.selectValueTag,
                "data-disabled": isDisabled || undefined,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: Select_module/* ["default"].truncate */.A.truncate,
                        children: formatString(selectedItems, selectedText)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectClearButton, {
                        isDisabled: isDisabled
                    })
                ]
            });
        }
    });
};
const SelectClearButton = (param)=>{
    let { isDisabled } = param;
    const state = react.useContext(Select/* .SelectStateContext */.nT);
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const focusManager = (0,FocusScope/* .useFocusManager */.H8)();
    const handlePress = ()=>{
        focusManager?.focusFirst();
        state?.selectionManager.clearSelection();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
        "aria-label": strings.format('clearAll'),
        className: Select_module/* ["default"].clearButton */.A.clearButton,
        onPress: handlePress,
        slot: null,
        isDisabled: isDisabled,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {
            width: 20,
            height: 20
        })
    });
};

// EXTERNAL MODULE: ./packages/components/src/list-box/ListBox.tsx + 1 modules
var ListBox = __webpack_require__(63942);
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(11728);
// EXTERNAL MODULE: ./packages/components/src/tag/tag-group/TagGroup.tsx
var TagGroup = __webpack_require__(54473);
// EXTERNAL MODULE: ./packages/components/src/tag/tag-list/TagList.tsx + 1 modules
var TagList = __webpack_require__(50696);
// EXTERNAL MODULE: ./packages/components/src/tag/Tag.tsx + 1 modules
var Tag = __webpack_require__(80083);
;// CONCATENATED MODULE: ./packages/components/src/select/SelectTags.tsx







const SelectTags = (param)=>{
    let { showTags, isDisabled } = param;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const state = (0,react.useContext)(Select/* .SelectStateContext */.nT);
    const handleRemove = (keys)=>{
        state?.selectionManager.toggleSelection(Array.from(keys)[0]);
    };
    if (!state?.selectedItems.length || !showTags) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TagGroup/* .TagGroup */.C, {
        "aria-label": strings.format('selectedItems'),
        className: Select_module/* ["default"].tagGroup */.A.tagGroup,
        onRemove: handleRemove,
        selectionBehavior: "toggle",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TagList/* .TagList */.L, {
            items: state.selectedItems,
            children: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
                    isDismissable: true,
                    id: item.key,
                    isDisabled: isDisabled,
                    textValue: item.textValue,
                    children: item.textValue
                }, item.key)
        })
    });
};

// EXTERNAL MODULE: ./packages/components/src/select/SelectTrigger.tsx
var SelectTrigger = __webpack_require__(77863);
;// CONCATENATED MODULE: ./packages/components/src/select/Select.tsx
















function Select_Select(param) {
    let { children, description, errorMessage, errorPosition = 'top', items, label, popover, popoverProps, listBoxProps, size = 'large', ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FocusScope/* .FocusScope */.n1, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* .Select */.l6, {
            ...props,
            className: (0,clsx/* ["default"] */.A)(props.className, Select_module/* ["default"].select */.A.select),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(LabelWrapper/* .LabelWrapper */.cR, {
                    popover: popover,
                    children: label && /*#__PURE__*/ (0,jsx_runtime.jsx)(Label/* .Label */.J, {
                        "data-disabled": props.isDisabled || undefined,
                        children: label
                    })
                }),
                description && /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                    slot: "description",
                    children: description
                }),
                errorPosition === 'top' && /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                    children: errorMessage
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: Select_module/* ["default"].triggerContainer */.A.triggerContainer,
                    "data-disabled": props.isDisabled || undefined,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTrigger/* .SelectTrigger */.b, {
                            size: size,
                            ...props
                        }),
                        props.selectionMode === 'multiple' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MultiSelectValue, {
                            ...props
                        }) : null
                    ]
                }),
                errorPosition === 'bottom' && /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                    children: errorMessage
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Popover/* .Popover */.A, {
                    // offset={0} looks flush, but React Aria floors the popover's
                    // computed `top` to a whole pixel while leaving the trigger's own
                    // (often fractional) width/position unrounded. When the trigger's
                    // true bottom edge lands on a fractional pixel — common with
                    // flex/grid-distributed widths — the popover can end up rendered
                    // ~1px too high, covering the trigger's bottom border. offset={1}
                    // adds enough buffer to absorb that rounding error.
                    // See https://github.com/adobe/react-spectrum/issues/8857
                    offset: 1,
                    hideArrow: true,
                    ...popoverProps,
                    className: (0,clsx/* ["default"] */.A)(popoverProps?.className, Select_module/* ["default"].popover */.A.popover),
                    children: [
                        props.isSelectableAll && /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectAll, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListBox/* .ListBox */.q, {
                            escapeKeyBehavior: "none",
                            items: items,
                            ...listBoxProps,
                            children: children
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTags, {
                    ...props
                })
            ]
        })
    });
}


},
77863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  b: () => (SelectTrigger)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react_aria_components__rspack_import_3 = __webpack_require__(40258);
/* import */ var react_aria_components__rspack_import_4 = __webpack_require__(93426);
/* import */ var lucide_react__rspack_import_6 = __webpack_require__(75107);
/* import */ var _Select_module_css__rspack_import_2 = __webpack_require__(10092);






const SelectTrigger = (param)=>{
    let { isDisabled, selectionMode, size } = param;
    const state = (0,react__rspack_import_1.useContext)(react_aria_components__rspack_import_3/* .SelectStateContext */.nT);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_aria_components__rspack_import_4/* .Button */.$, {
        className: (0,clsx__rspack_import_5/* ["default"] */.A)({
            [_Select_module_css__rspack_import_2/* ["default"].medium */.A.medium]: size === 'medium',
            [_Select_module_css__rspack_import_2/* ["default"].small */.A.small]: size === 'small'
        }, _Select_module_css__rspack_import_2/* ["default"].trigger */.A.trigger),
        "data-invalid": !!state?.displayValidation.isInvalid || undefined,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_3/* .SelectValue */.yv, {
                className: _Select_module_css__rspack_import_2/* ["default"].selectValue */.A.selectValue,
                "data-disabled": isDisabled || undefined,
                children: (param)=>{
                    let { selectedText, defaultChildren } = param;
                    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: _Select_module_css__rspack_import_2/* ["default"].placeholder */.A.placeholder,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                            className: _Select_module_css__rspack_import_2/* ["default"].truncate */.A.truncate,
                            children: selectionMode === 'multiple' && selectedText ? null : selectedText || defaultChildren
                        })
                    });
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                "aria-hidden": "true",
                className: _Select_module_css__rspack_import_2/* ["default"].icon */.A.icon,
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_6/* ["default"] */.A, {
                    size: 20
                })
            })
        ]
    });
};


},
80083(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/TagGroup.mjs + 40 modules
var TagGroup = __webpack_require__(34309);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/tag/Tag.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Tag_module = ({"button":"button_Loby","tag":"tag_WAeO","sky":"sky_Fv7D","blue":"blue_rKeo","mint":"mint_BfGl","green":"green_ghV9","cream":"cream_Nthm","yellow":"yellow_rRIY","teal":"teal_vWkg","lagoon":"lagoon_zrBa","lagoonblue":"lagoonblue_AzAa","lavender":"lavender_ggmt","purple":"purple_zLjd","peach":"peach_oK0O","orange":"orange_w3br","pippin":"pippin_FnQ2","red":"red_orH2","tagText":"tagText_f_lx","dismissable":"dismissable_Tfml"});
;// CONCATENATED MODULE: ./packages/components/src/tag/Tag.tsx






const Tag = (param)=>{
    let { className, color, dismissable = false, isDismissable, type, ...props } = param;
    const isTagDismissable = isDismissable || typeof isDismissable === 'undefined' && dismissable;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TagGroup/* .Tag */.vw, {
        className: (0,clsx/* ["default"] */.A)(Tag_module.tag, isTagDismissable && Tag_module.dismissable, {
            [Tag_module.sky]: color === 'sky',
            [Tag_module.blue]: color === 'blue' || !color && type === 'info',
            [Tag_module.mint]: color === 'mint',
            [Tag_module.green]: color === 'green' || !color && type === 'success',
            [Tag_module.cream]: color === 'cream',
            [Tag_module.yellow]: color === 'yellow' || !color && type === 'important',
            [Tag_module.teal]: color === 'teal',
            [Tag_module.lagoon]: color === 'lagoon',
            [Tag_module.lagoonblue]: color === 'lagoonblue',
            [Tag_module.lavender]: color === 'lavender',
            [Tag_module.purple]: color === 'purple',
            [Tag_module.peach]: color === 'peach',
            [Tag_module.orange]: color === 'orange',
            [Tag_module.pippin]: color === 'pippin',
            [Tag_module.red]: color === 'red' || !color && type === 'warning'
        }, className),
        ...props,
        textValue: props.textValue || (typeof props.children === 'string' ? props.children : undefined),
        children: (0,utils/* .composeRenderProps */.HW)(props.children, (children)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: Tag_module.tagText,
                        children: children
                    }),
                    isTagDismissable && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                        variant: "icon",
                        size: "medium",
                        className: Tag_module.button,
                        slot: "remove",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {
                            size: 20
                        })
                    })
                ]
            }))
    });
};


},
54473(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  C: () => (TagGroup)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react_aria_components__rspack_import_2 = __webpack_require__(95841);
/* import */ var react_aria_components__rspack_import_3 = __webpack_require__(34309);
/* import */ var _utils_clsx__rspack_import_5 = __webpack_require__(18496);
/* import */ var _tag_list__rspack_import_4 = __webpack_require__(50696);





const TagGroup = /*#__PURE__*/ (0,react__rspack_import_1.forwardRef)((props, ref)=>{
    const [{ className, children, ...rest }, mergedRef] = (0,react_aria_components__rspack_import_2/* .useContextProps */.JT)(props, ref, react_aria_components__rspack_import_3/* .TagGroupContext */.TB);
    const providedTagList = react__rspack_import_1.Children.toArray(children).filter(react__rspack_import_1.isValidElement).find((child)=>child.type === _tag_list__rspack_import_4/* .TagList */.L);
    // @deprecated since v17.0.0
    if (!providedTagList && "production" === 'development') {}
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_3/* .TagGroup */.CR, {
        className: (0,_utils_clsx__rspack_import_5/* ["default"] */.A)(className),
        ref: mergedRef,
        ...rest,
        children: providedTagList ? children : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_tag_list__rspack_import_4/* .TagList */.L, {
            children: children
        })
    });
});
TagGroup.displayName = 'TagGroup';


},
50696(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ TagList)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/TagGroup.mjs + 40 modules
var TagGroup = __webpack_require__(34309);
;// CONCATENATED MODULE: ./packages/components/src/tag/tag-list/TagList.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const TagList_module = ({"tagList":"tagList_t7eZ"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./packages/components/src/tag/tag-list/TagList.tsx





const TagListInner = (props, ref)=>{
    const [{ className, ...rest }, mergedRef] = (0,utils/* .useContextProps */.JT)(props, ref, TagGroup/* .TagListContext */.sM);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TagGroup/* .TagList */.LY, {
        className: (0,clsx/* ["default"] */.A)(className, TagList_module.tagList),
        ref: mergedRef,
        ...rest
    });
};
const TagList = /*#__PURE__*/ (0,react.forwardRef)(TagListInner);


},
20883(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text_Text)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Text.mjs
var Text = __webpack_require__(20987);
;// CONCATENATED MODULE: ./packages/components/src/text/Text.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Text_module = ({"body":"body_Vxmv","body-small":"body-small_JwBE","description":"description_XYgX","description-small":"description-small_tno4","bold":"bold_YLmd","italic":"italic_CnUx"});
;// CONCATENATED MODULE: ./packages/components/src/text/Text.tsx





const DEFAULT_ELEMENT = 'span';
const Text_Text = (param)=>{
    let { children, className, size, isExpressive = false, elementType = DEFAULT_ELEMENT, ...rest } = param;
    const getClassName = ()=>{
        const isDescription = rest.slot === 'description';
        if (isDescription) {
            return size === 'small' ? Text_module["description-small"] : Text_module.description;
        }
        return size === 'small' ? Text_module["body-small"] : Text_module.body;
    };
    const textProps = {
        className: (0,clsx/* ["default"] */.A)(getClassName(), {
            [Text_module.bold]: [
                'b',
                'strong'
            ].includes(elementType),
            [Text_module.italic]: [
                'i',
                'em'
            ].includes(elementType)
        }, className),
        elementType: elementType || DEFAULT_ELEMENT,
        ...isExpressive && {
            'data-expressive': true
        },
        ...rest
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
        ...textProps,
        children: children
    });
};


},
48494(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TextField)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextFieldBase.tsx + 2 modules
var TextFieldBase = __webpack_require__(11287);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Input.mjs
var Input = __webpack_require__(36594);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(52658);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/textfield/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"hide":"Hide","show":"Show","showPassword":"Show password"},"sv":{"hide":"Dölj","show":"Visa","showPassword":"Visa lösenord"}}')
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
;// CONCATENATED MODULE: ./packages/components/src/textfield/PasswordToggle.tsx





const PasswordToggle = (param)=>{
    let { showPassword, onToggle } = param;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
        "aria-label": strings.format('showPassword'),
        "aria-pressed": showPassword,
        variant: "tertiary",
        onPress: onToggle,
        className: TextField_module/* ["default"].passwordButton */.A.passwordButton,
        children: showPassword ? strings.format('hide') : strings.format('show')
    });
};

;// CONCATENATED MODULE: ./packages/components/src/textfield/Input.tsx






const Input_Input = /*#__PURE__*/ (0,react.forwardRef)((param, localRef)=>{
    let { skipContext = false, ...localProps } = param;
    const [contextProps, contextRef] = (0,utils/* .useContextProps */.JT)(localProps, localRef, Input/* .InputContext */.E);
    const ref = skipContext ? localRef : contextRef;
    const props = skipContext ? localProps : contextProps;
    const isPassword = props.type === 'password';
    const [showPassword, setShowPassword] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: TextField_module/* ["default"].wrap */.A.wrap,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Input/* .Input */.p, {
                ...props,
                ref: ref,
                type: isPassword && showPassword ? 'text' : props.type,
                className: (0,clsx/* ["default"] */.A)(TextField_module/* ["default"].input */.A.input, props.className)
            }),
            isPassword && /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordToggle, {
                showPassword: showPassword,
                onToggle: ()=>setShowPassword((prev)=>!prev)
            })
        ]
    });
});
Input_Input.displayName = 'Input';

;// CONCATENATED MODULE: ./packages/components/src/textfield/TextField.tsx
'use client';





const TextField = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { className, list, type, min, max, form, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TextFieldBase/* .TextFieldBase */.J, {
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Input_Input, {
            className: (0,clsx/* ["default"] */.A)(className),
            form: form,
            list: list,
            min: min,
            max: max,
            ref: ref,
            type: type,
            skipContext: true
        })
    });
});
TextField.displayName = 'TextField';


},
11287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ TextFieldBase)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/TextField.mjs
var TextField = __webpack_require__(41493);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(52658);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(47135);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Input.mjs
var Input = __webpack_require__(36594);
;// CONCATENATED MODULE: ./packages/components/src/character-counter/CharacterCounter.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const CharacterCounter_module = ({"characterCounter":"characterCounter_Rd9H"});
;// CONCATENATED MODULE: ./packages/components/src/character-counter/CharacterCounter.tsx




const CharacterCounter = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    ;
    [props] = (0,utils/* .useContextProps */.JT)(props, ref, Input/* .InputContext */.E);
    const { maxLength, value, isLonely } = props;
    const { length } = value?.toString() ?? '';
    const isMaxLengthDefined = maxLength !== undefined;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: CharacterCounter_module.characterCounter,
        "data-exceeded": isMaxLengthDefined && length > maxLength || undefined,
        "data-lonely": isLonely || undefined,
        children: isMaxLengthDefined ? `${length} / ${maxLength}` : length
    });
});
CharacterCounter.displayName = 'CharacterCounter';

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(79440);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(81582);
;// CONCATENATED MODULE: ./packages/components/src/textfield/TextFieldBase.tsx










const TextFieldBase = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    ;
    [props] = (0,utils/* .useContextProps */.JT)(props, ref, TextField/* .TextFieldContext */.H);
    const { label, description, errorMessage, showCounter, errorPosition = 'top', size = 'large', popover, children } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TextField/* .TextField */.A, {
        ...props,
        className: (0,clsx/* .clsx */.$)(TextField_module/* ["default"].textField */.A.textField, {
            [TextField_module/* ["default"].medium */.A.medium]: size === 'medium'
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LabelWrapper/* .LabelWrapper */.cR, {
                popover: popover,
                children: label && /*#__PURE__*/ (0,jsx_runtime.jsx)(Label/* .Label */.J, {
                    children: label
                })
            }),
            description && /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                slot: "description",
                children: description
            }),
            showCounter && /*#__PURE__*/ (0,jsx_runtime.jsx)(CharacterCounter, {
                isLonely: !description
            }),
            errorPosition === 'top' && /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                "data-testid": "fieldError",
                children: errorMessage
            }),
            children,
            errorPosition === 'bottom' && /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                "data-testid": "fieldError",
                className: TextField_module/* ["default"].bottomError */.A.bottomError,
                children: errorMessage
            })
        ]
    });
});
TextFieldBase.displayName = 'TextFieldBase';


},
10734(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* reexport */ variables_namespaceObject),
  S: () => (/* reexport */ token_dictionary)
});
// NAMESPACE OBJECT: ./packages/theme/src/lib/style-dictionary-dist/variables.js
var variables_namespaceObject = {};
__webpack_require__.r(variables_namespaceObject);
__webpack_require__.d(variables_namespaceObject, { 
  w$9: () => (backgroundBase),
  _2e: () => (borderColorPrimary),
  l9i: () => (borderColorSubtle),
  A1M: () => (brandPrimary),
  Qni: () => (buttonBackgroundPrimaryBase),
  jc5: () => (colorGray200),
  tK4: () => (field01Base),
  w1t: () => (iconOnColor),
  ak9: () => (layer01Base),
  JI6: () => (layer02Base),
  EWd: () => (stateFocus),
  Q0Q: () => (textOnColor),
  eku: () => (textPrimary) });


;// CONCATENATED MODULE: ./packages/theme/src/lib/style-dictionary-dist/token-dictionary.js
/**
 * Do not edit directly, this file was auto-generated.
 */ /* export default */ const token_dictionary = ({
    base: {
        10: {
            key: "{base.10}",
            $value: "0.125rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.125,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.10}"
            },
            name: "base10",
            attributes: {},
            path: [
                "base",
                "10"
            ]
        },
        15: {
            key: "{base.15}",
            $value: "0.188rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.188,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.15}"
            },
            name: "base15",
            attributes: {},
            path: [
                "base",
                "15"
            ]
        },
        20: {
            key: "{base.20}",
            $value: "0.25rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.25,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.20}"
            },
            name: "base20",
            attributes: {},
            path: [
                "base",
                "20"
            ]
        },
        30: {
            key: "{base.30}",
            $value: "0.375rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.375,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.30}"
            },
            name: "base30",
            attributes: {},
            path: [
                "base",
                "30"
            ]
        },
        40: {
            key: "{base.40}",
            $value: "0.5rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.5,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.40}"
            },
            name: "base40",
            attributes: {},
            path: [
                "base",
                "40"
            ]
        },
        50: {
            key: "{base.50}",
            $value: "0.625rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.625,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.50}"
            },
            name: "base50",
            attributes: {},
            path: [
                "base",
                "50"
            ]
        },
        60: {
            key: "{base.60}",
            $value: "0.75rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.75,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.60}"
            },
            name: "base60",
            attributes: {},
            path: [
                "base",
                "60"
            ]
        },
        70: {
            key: "{base.70}",
            $value: "0.875rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.875,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.70}"
            },
            name: "base70",
            attributes: {},
            path: [
                "base",
                "70"
            ]
        },
        75: {
            key: "{base.75}",
            $value: "0.938rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.938,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.75}"
            },
            name: "base75",
            attributes: {},
            path: [
                "base",
                "75"
            ]
        },
        80: {
            key: "{base.80}",
            $value: "1rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 1,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.80}"
            },
            name: "base80",
            attributes: {},
            path: [
                "base",
                "80"
            ]
        },
        90: {
            key: "{base.90}",
            $value: "1.25rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 1.25,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.90}"
            },
            name: "base90",
            attributes: {},
            path: [
                "base",
                "90"
            ]
        },
        100: {
            key: "{base.100}",
            $value: "1.5rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 1.5,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.100}"
            },
            name: "base100",
            attributes: {},
            path: [
                "base",
                "100"
            ]
        },
        110: {
            key: "{base.110}",
            $value: "1.75rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 1.75,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.110}"
            },
            name: "base110",
            attributes: {},
            path: [
                "base",
                "110"
            ]
        },
        120: {
            key: "{base.120}",
            $value: "2rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 2,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.120}"
            },
            name: "base120",
            attributes: {},
            path: [
                "base",
                "120"
            ]
        },
        130: {
            key: "{base.130}",
            $value: "2.5rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 2.5,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.130}"
            },
            name: "base130",
            attributes: {},
            path: [
                "base",
                "130"
            ]
        },
        140: {
            key: "{base.140}",
            $value: "2.75rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 2.75,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.140}"
            },
            name: "base140",
            attributes: {},
            path: [
                "base",
                "140"
            ]
        },
        150: {
            key: "{base.150}",
            $value: "3rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 3,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.150}"
            },
            name: "base150",
            attributes: {},
            path: [
                "base",
                "150"
            ]
        },
        "00": {
            key: "{base.00}",
            $type: "dimension",
            $value: "0rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            original: {
                $type: "dimension",
                $value: {
                    value: 0,
                    unit: "rem"
                },
                key: "{base.00}"
            },
            name: "base00",
            attributes: {},
            path: [
                "base",
                "00"
            ]
        },
        "05": {
            key: "{base.05}",
            $value: "0.063rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.063,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.05}"
            },
            name: "base05",
            attributes: {},
            path: [
                "base",
                "05"
            ]
        }
    },
    windowSizes: {
        sm: {
            key: "{windowSizes.sm}",
            $value: "480px",
            $description: "Liten skärmstorlek. 480px.",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "480px",
                $description: "Liten skärmstorlek. 480px.",
                $type: "dimension",
                key: "{windowSizes.sm}"
            },
            name: "windowSizesSm",
            attributes: {},
            path: [
                "windowSizes",
                "sm"
            ]
        },
        md: {
            key: "{windowSizes.md}",
            $value: "768px",
            $description: "Mellanstor skärmstorlek. 768px.",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "768px",
                $description: "Mellanstor skärmstorlek. 768px.",
                $type: "dimension",
                key: "{windowSizes.md}"
            },
            name: "windowSizesMd",
            attributes: {},
            path: [
                "windowSizes",
                "md"
            ]
        },
        lg: {
            key: "{windowSizes.lg}",
            $value: "1024px",
            $description: "Stor skärmstorlek. 1024px.",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "1024px",
                $description: "Stor skärmstorlek. 1024px.",
                $type: "dimension",
                key: "{windowSizes.lg}"
            },
            name: "windowSizesLg",
            attributes: {},
            path: [
                "windowSizes",
                "lg"
            ]
        },
        xl: {
            key: "{windowSizes.xl}",
            $value: "1280px",
            $description: "Extra stor skärmstorlek. 1280px.",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "1280px",
                $description: "Extra stor skärmstorlek. 1280px.",
                $type: "dimension",
                key: "{windowSizes.xl}"
            },
            name: "windowSizesXl",
            attributes: {},
            path: [
                "windowSizes",
                "xl"
            ]
        }
    },
    breakpoints: {
        xs: {
            key: "{breakpoints.xs}",
            $value: "(max-width: calc(480px - 1px))",
            $description: "Extra liten skärm. Upp till 479px (max-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(max-width: calc({windowSizes.sm} - 1px))",
                $description: "Extra liten skärm. Upp till 479px (max-width).",
                $type: "string",
                key: "{breakpoints.xs}"
            },
            name: "breakpointsXs",
            attributes: {},
            path: [
                "breakpoints",
                "xs"
            ]
        },
        sm: {
            key: "{breakpoints.sm}",
            $value: "(min-width: 480px)",
            $description: "Liten skärm och uppåt. Från 480px (min-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(min-width: {windowSizes.sm})",
                $description: "Liten skärm och uppåt. Från 480px (min-width).",
                $type: "string",
                key: "{breakpoints.sm}"
            },
            name: "breakpointsSm",
            attributes: {},
            path: [
                "breakpoints",
                "sm"
            ]
        },
        md: {
            key: "{breakpoints.md}",
            $value: "(min-width: 768px)",
            $description: "Mellanstor skärm och uppåt. Från 768px (min-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(min-width: {windowSizes.md})",
                $description: "Mellanstor skärm och uppåt. Från 768px (min-width).",
                $type: "string",
                key: "{breakpoints.md}"
            },
            name: "breakpointsMd",
            attributes: {},
            path: [
                "breakpoints",
                "md"
            ]
        },
        lg: {
            key: "{breakpoints.lg}",
            $value: "(min-width: 1024px)",
            $description: "Stor skärm och uppåt. Från 1024px (min-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(min-width: {windowSizes.lg})",
                $description: "Stor skärm och uppåt. Från 1024px (min-width).",
                $type: "string",
                key: "{breakpoints.lg}"
            },
            name: "breakpointsLg",
            attributes: {},
            path: [
                "breakpoints",
                "lg"
            ]
        },
        xl: {
            key: "{breakpoints.xl}",
            $value: "(min-width: 1280px)",
            $description: "Extra stor skärm och uppåt. Från 1280px (min-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(min-width: {windowSizes.xl})",
                $description: "Extra stor skärm och uppåt. Från 1280px (min-width).",
                $type: "string",
                key: "{breakpoints.xl}"
            },
            name: "breakpointsXl",
            attributes: {},
            path: [
                "breakpoints",
                "xl"
            ]
        }
    },
    button: {
        background: {
            primary: {
                base: {
                    key: "{button.background.primary.base}",
                    $value: "light-dark(#143c50, #2e7ca5)",
                    $description: "Färg på primärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.150}, {color.blue.100})",
                        $description: "Färg på primärknapp",
                        $type: "string",
                        key: "{button.background.primary.base}"
                    },
                    name: "buttonBackgroundPrimaryBase",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "primary",
                        "base"
                    ]
                },
                hover: {
                    key: "{button.background.primary.hover}",
                    $value: "light-dark(#25607f, #25607f)",
                    $description: "Hover state på primärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.130}, {color.blue.130})",
                        $description: "Hover state på primärknapp",
                        $type: "string",
                        key: "{button.background.primary.hover}"
                    },
                    name: "buttonBackgroundPrimaryHover",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "primary",
                        "hover"
                    ]
                },
                active: {
                    key: "{button.background.primary.active}",
                    $value: "light-dark(#2e7ca5, #143c50)",
                    $description: "Active state för primärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.100}, {color.blue.150})",
                        $description: "Active state för primärknapp",
                        $type: "string",
                        key: "{button.background.primary.active}"
                    },
                    name: "buttonBackgroundPrimaryActive",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "primary",
                        "active"
                    ]
                }
            },
            secondary: {
                base: {
                    key: "{button.background.secondary.base}",
                    $value: "transparent",
                    $description: "Färg på sekundärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "transparent",
                        $description: "Färg på sekundärknapp",
                        $type: "string",
                        key: "{button.background.secondary.base}"
                    },
                    name: "buttonBackgroundSecondaryBase",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "secondary",
                        "base"
                    ]
                },
                hover: {
                    key: "{button.background.secondary.hover}",
                    $value: "light-dark(#0000000d, #ffffff21)",
                    $description: "Hover state på sekundärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.black.opacity5}, {color.white.opacity13})",
                        $description: "Hover state på sekundärknapp",
                        $type: "string",
                        key: "{button.background.secondary.hover}"
                    },
                    name: "buttonBackgroundSecondaryHover",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "secondary",
                        "hover"
                    ]
                },
                active: {
                    key: "{button.background.secondary.active}",
                    $value: "light-dark(#0000001a, #ffffff26)",
                    $description: "Active state för sekundärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.black.opacity10}, {color.white.opacity15})",
                        $description: "Active state för sekundärknapp",
                        $type: "string",
                        key: "{button.background.secondary.active}"
                    },
                    name: "buttonBackgroundSecondaryActive",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "secondary",
                        "active"
                    ]
                }
            },
            tertiary: {
                hover: {
                    key: "{button.background.tertiary.hover}",
                    $value: "light-dark(#0000000d, #ffffff21)",
                    $description: "Hover state för tertiär knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.black.opacity5}, {color.white.opacity13})",
                        $description: "Hover state för tertiär knapp",
                        $type: "string",
                        key: "{button.background.tertiary.hover}"
                    },
                    name: "buttonBackgroundTertiaryHover",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "tertiary",
                        "hover"
                    ]
                },
                active: {
                    key: "{button.background.tertiary.active}",
                    $value: "light-dark(#0000001a, #ffffff26)",
                    $description: "Active state för tertiär knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.black.opacity10}, {color.white.opacity15})",
                        $description: "Active state för tertiär knapp",
                        $type: "string",
                        key: "{button.background.tertiary.active}"
                    },
                    name: "buttonBackgroundTertiaryActive",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "tertiary",
                        "active"
                    ]
                }
            },
            danger: {
                base: {
                    key: "{button.background.danger.base}",
                    $value: "light-dark(#e62323, #e62323)",
                    $description: "Färg på danger knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.signalRed.100}, {color.signalRed.100})",
                        $description: "Färg på danger knapp",
                        $type: "string",
                        key: "{button.background.danger.base}"
                    },
                    name: "buttonBackgroundDangerBase",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "danger",
                        "base"
                    ]
                },
                hover: {
                    key: "{button.background.danger.hover}",
                    $value: "light-dark(#bc1d1d, #bc1d1d)",
                    $description: "Hover state för danger knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.signalRed.120}, {color.signalRed.120})",
                        $description: "Hover state för danger knapp",
                        $type: "string",
                        key: "{button.background.danger.hover}"
                    },
                    name: "buttonBackgroundDangerHover",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "danger",
                        "hover"
                    ]
                },
                active: {
                    key: "{button.background.danger.active}",
                    $value: "light-dark(#7d1313, #7d1313)",
                    $description: "Active state för danger knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.signalRed.150}, {color.signalRed.150})",
                        $description: "Active state för danger knapp",
                        $type: "string",
                        key: "{button.background.danger.active}"
                    },
                    name: "buttonBackgroundDangerActive",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "danger",
                        "active"
                    ]
                }
            },
            disabled: {
                key: "{button.background.disabled}",
                $value: "light-dark(#0000000d,#ffffff21)",
                $description: "Disabled state för knappar",
                filePath: "packages/theme/tokens/buttons.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.black.opacity5},{color.white.opacity13})",
                    $description: "Disabled state för knappar",
                    $type: "string",
                    key: "{button.background.disabled}"
                },
                name: "buttonBackgroundDisabled",
                attributes: {},
                path: [
                    "button",
                    "background",
                    "disabled"
                ]
            }
        },
        border: {
            secondary: {
                key: "{button.border.secondary}",
                $value: "light-dark(#143c50, #f2f2f2)",
                $description: "Kantfärg för sekundärknapp",
                filePath: "packages/theme/tokens/buttons.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.blue.150}, {color.gray.10})",
                    $description: "Kantfärg för sekundärknapp",
                    $type: "string",
                    key: "{button.border.secondary}"
                },
                name: "buttonBorderSecondary",
                attributes: {},
                path: [
                    "button",
                    "border",
                    "secondary"
                ]
            }
        },
        icon: {
            hover: {
                key: "{button.icon.hover}",
                $value: "light-dark(#0000000d, #ffffff21)",
                $description: "Hover state för ikonknappar",
                filePath: "packages/theme/tokens/buttons.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.black.opacity5}, {color.white.opacity13})",
                    $description: "Hover state för ikonknappar",
                    $type: "string",
                    key: "{button.icon.hover}"
                },
                name: "buttonIconHover",
                attributes: {},
                path: [
                    "button",
                    "icon",
                    "hover"
                ]
            },
            active: {
                key: "{button.icon.active}",
                $value: "light-dark(#00000033, #ffffff33)",
                $description: "Active state för ikoner",
                filePath: "packages/theme/tokens/buttons.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark(#00000033, #ffffff33)",
                    $description: "Active state för ikoner",
                    $type: "string",
                    key: "{button.icon.active}"
                },
                name: "buttonIconActive",
                attributes: {},
                path: [
                    "button",
                    "icon",
                    "active"
                ]
            }
        }
    },
    color: {
        black: {
            base: {
                key: "{color.black.base}",
                $value: "#000",
                $description: "Black",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#000",
                    $description: "Black",
                    $type: "color",
                    key: "{color.black.base}"
                },
                name: "colorBlackBase",
                attributes: {},
                path: [
                    "color",
                    "black",
                    "base"
                ]
            },
            hover: {
                key: "{color.black.hover}",
                $value: "#0d0d0d",
                $description: "Black hover",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0d0d0d",
                    $description: "Black hover",
                    $type: "color",
                    key: "{color.black.hover}"
                },
                name: "colorBlackHover",
                attributes: {},
                path: [
                    "color",
                    "black",
                    "hover"
                ]
            },
            opacity5: {
                key: "{color.black.opacity5}",
                $value: "#0000000d",
                $description: "Black with 5% opacity",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0000000d",
                    $description: "Black with 5% opacity",
                    $type: "color",
                    key: "{color.black.opacity5}"
                },
                name: "colorBlackOpacity5",
                attributes: {},
                path: [
                    "color",
                    "black",
                    "opacity5"
                ]
            },
            opacity10: {
                key: "{color.black.opacity10}",
                $value: "#0000001a",
                $description: "Black with 10% opacity",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0000001a",
                    $description: "Black with 10% opacity",
                    $type: "color",
                    key: "{color.black.opacity10}"
                },
                name: "colorBlackOpacity10",
                attributes: {},
                path: [
                    "color",
                    "black",
                    "opacity10"
                ]
            }
        },
        white: {
            base: {
                key: "{color.white.base}",
                $value: "#fff",
                $description: "White",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fff",
                    $description: "White",
                    $type: "color",
                    key: "{color.white.base}"
                },
                name: "colorWhiteBase",
                attributes: {},
                path: [
                    "color",
                    "white",
                    "base"
                ]
            },
            hover: {
                key: "{color.white.hover}",
                $value: "#e6e6e6",
                $description: "White hover",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e6e6e6",
                    $description: "White hover",
                    $type: "color",
                    key: "{color.white.hover}"
                },
                name: "colorWhiteHover",
                attributes: {},
                path: [
                    "color",
                    "white",
                    "hover"
                ]
            },
            opacity13: {
                key: "{color.white.opacity13}",
                $value: "#ffffff21",
                $description: "White with 13% opacity",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffffff21",
                    $description: "White with 13% opacity",
                    $type: "color",
                    key: "{color.white.opacity13}"
                },
                name: "colorWhiteOpacity13",
                attributes: {},
                path: [
                    "color",
                    "white",
                    "opacity13"
                ]
            },
            opacity15: {
                key: "{color.white.opacity15}",
                $value: "#ffffff26",
                $description: "White with 15% opacity",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffffff26",
                    $description: "White with 15% opacity",
                    $type: "color",
                    key: "{color.white.opacity15}"
                },
                name: "colorWhiteOpacity15",
                attributes: {},
                path: [
                    "color",
                    "white",
                    "opacity15"
                ]
            }
        },
        gray: {
            10: {
                key: "{color.gray.10}",
                $value: "#f2f2f2",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f2f2f2",
                    $type: "color",
                    key: "{color.gray.10}"
                },
                name: "colorGray10",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "10"
                ]
            },
            20: {
                key: "{color.gray.20}",
                $value: "#e6e6e6",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e6e6e6",
                    $type: "color",
                    key: "{color.gray.20}"
                },
                name: "colorGray20",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "20"
                ]
            },
            30: {
                key: "{color.gray.30}",
                $value: "#d9d9d9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d9d9d9",
                    $type: "color",
                    key: "{color.gray.30}"
                },
                name: "colorGray30",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "30"
                ]
            },
            40: {
                key: "{color.gray.40}",
                $value: "#ccc",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ccc",
                    $type: "color",
                    key: "{color.gray.40}"
                },
                name: "colorGray40",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "40"
                ]
            },
            50: {
                key: "{color.gray.50}",
                $value: "#bfbfbf",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#bfbfbf",
                    $type: "color",
                    key: "{color.gray.50}"
                },
                name: "colorGray50",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "50"
                ]
            },
            60: {
                key: "{color.gray.60}",
                $value: "#b3b3b3",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#b3b3b3",
                    $type: "color",
                    key: "{color.gray.60}"
                },
                name: "colorGray60",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "60"
                ]
            },
            70: {
                key: "{color.gray.70}",
                $value: "#a6a6a6",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#a6a6a6",
                    $type: "color",
                    key: "{color.gray.70}"
                },
                name: "colorGray70",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "70"
                ]
            },
            80: {
                key: "{color.gray.80}",
                $value: "#999",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#999",
                    $type: "color",
                    key: "{color.gray.80}"
                },
                name: "colorGray80",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "80"
                ]
            },
            90: {
                key: "{color.gray.90}",
                $value: "#8c8c8c",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#8c8c8c",
                    $type: "color",
                    key: "{color.gray.90}"
                },
                name: "colorGray90",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "90"
                ]
            },
            100: {
                key: "{color.gray.100}",
                $value: "#808080",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#808080",
                    $type: "color",
                    key: "{color.gray.100}"
                },
                name: "colorGray100",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "100"
                ]
            },
            110: {
                key: "{color.gray.110}",
                $value: "#737373",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#737373",
                    $type: "color",
                    key: "{color.gray.110}"
                },
                name: "colorGray110",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "110"
                ]
            },
            120: {
                key: "{color.gray.120}",
                $value: "#666",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#666",
                    $type: "color",
                    key: "{color.gray.120}"
                },
                name: "colorGray120",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "120"
                ]
            },
            130: {
                key: "{color.gray.130}",
                $value: "#5d5d5d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#5d5d5d",
                    $type: "color",
                    key: "{color.gray.130}"
                },
                name: "colorGray130",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "130"
                ]
            },
            140: {
                key: "{color.gray.140}",
                $value: "#525252",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#525252",
                    $type: "color",
                    key: "{color.gray.140}"
                },
                name: "colorGray140",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "140"
                ]
            },
            150: {
                key: "{color.gray.150}",
                $value: "#474747",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#474747",
                    $type: "color",
                    key: "{color.gray.150}"
                },
                name: "colorGray150",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "150"
                ]
            },
            160: {
                key: "{color.gray.160}",
                $value: "#383838",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#383838",
                    $type: "color",
                    key: "{color.gray.160}"
                },
                name: "colorGray160",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "160"
                ]
            },
            170: {
                key: "{color.gray.170}",
                $value: "#333",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#333",
                    $type: "color",
                    key: "{color.gray.170}"
                },
                name: "colorGray170",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "170"
                ]
            },
            180: {
                key: "{color.gray.180}",
                $value: "#262626",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#262626",
                    $type: "color",
                    key: "{color.gray.180}"
                },
                name: "colorGray180",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "180"
                ]
            },
            190: {
                key: "{color.gray.190}",
                $value: "#212121",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#212121",
                    $type: "color",
                    key: "{color.gray.190}"
                },
                name: "colorGray190",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "190"
                ]
            },
            200: {
                key: "{color.gray.200}",
                $value: "#171717",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#171717",
                    $type: "color",
                    key: "{color.gray.200}"
                },
                name: "colorGray200",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "200"
                ]
            }
        },
        blue: {
            10: {
                key: "{color.blue.10}",
                $value: "#eaf2f6",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#eaf2f6",
                    $type: "color",
                    key: "{color.blue.10}"
                },
                name: "colorBlue10",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "10"
                ]
            },
            20: {
                key: "{color.blue.20}",
                $value: "#d5e5ed",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d5e5ed",
                    $type: "color",
                    key: "{color.blue.20}"
                },
                name: "colorBlue20",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "20"
                ]
            },
            40: {
                key: "{color.blue.40}",
                $value: "#abcbdb",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#abcbdb",
                    $type: "color",
                    key: "{color.blue.40}"
                },
                name: "colorBlue40",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "40"
                ]
            },
            50: {
                key: "{color.blue.50}",
                $value: "#94BCD1",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#94BCD1",
                    $type: "color",
                    key: "{color.blue.50}"
                },
                name: "colorBlue50",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "50"
                ]
            },
            60: {
                key: "{color.blue.60}",
                $value: "#82b0c9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#82b0c9",
                    $type: "color",
                    key: "{color.blue.60}"
                },
                name: "colorBlue60",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "60"
                ]
            },
            70: {
                key: "{color.blue.70}",
                $value: "#6CA3C0",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#6CA3C0",
                    $type: "color",
                    key: "{color.blue.70}"
                },
                name: "colorBlue70",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "70"
                ]
            },
            80: {
                key: "{color.blue.80}",
                $value: "#5897b8",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#5897b8",
                    $type: "color",
                    key: "{color.blue.80}"
                },
                name: "colorBlue80",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "80"
                ]
            },
            90: {
                key: "{color.blue.90}",
                $value: "#4289ad",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#4289ad",
                    $type: "color",
                    key: "{color.blue.90}"
                },
                name: "colorBlue90",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "90"
                ]
            },
            100: {
                key: "{color.blue.100}",
                $value: "#2e7ca5",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#2e7ca5",
                    $type: "color",
                    key: "{color.blue.100}"
                },
                name: "colorBlue100",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "100"
                ]
            },
            110: {
                key: "{color.blue.110}",
                $value: "#2C7399",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#2C7399",
                    $type: "color",
                    key: "{color.blue.110}"
                },
                name: "colorBlue110",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "110"
                ]
            },
            120: {
                key: "{color.blue.120}",
                $value: "#29698C",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#29698C",
                    $type: "color",
                    key: "{color.blue.120}"
                },
                name: "colorBlue120",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "120"
                ]
            },
            130: {
                key: "{color.blue.130}",
                $value: "#25607f",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#25607f",
                    $type: "color",
                    key: "{color.blue.130}"
                },
                name: "colorBlue130",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "130"
                ]
            },
            150: {
                key: "{color.blue.150}",
                $value: "#143c50",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#143c50",
                    $type: "color",
                    key: "{color.blue.150}"
                },
                name: "colorBlue150",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "150"
                ]
            }
        },
        purple: {
            80: {
                key: "{color.purple.80}",
                $value: "#b46ab4",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#b46ab4",
                    $type: "color",
                    key: "{color.purple.80}"
                },
                name: "colorPurple80",
                attributes: {},
                path: [
                    "color",
                    "purple",
                    "80"
                ]
            },
            110: {
                key: "{color.purple.110}",
                $value: "#954b95",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#954b95",
                    $type: "color",
                    key: "{color.purple.110}"
                },
                name: "colorPurple110",
                attributes: {},
                path: [
                    "color",
                    "purple",
                    "110"
                ]
            }
        },
        red: {
            100: {
                key: "{color.red.100}",
                $value: "#b90835",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#b90835",
                    $type: "color",
                    key: "{color.red.100}"
                },
                name: "colorRed100",
                attributes: {},
                path: [
                    "color",
                    "red",
                    "100"
                ]
            }
        },
        orange: {
            100: {
                key: "{color.orange.100}",
                $value: "oklch(0.66 0.18 45)",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "oklch(0.66 0.18 45)",
                    $type: "color",
                    key: "{color.orange.100}"
                },
                name: "colorOrange100",
                attributes: {},
                path: [
                    "color",
                    "orange",
                    "100"
                ]
            }
        },
        signalBlue: {
            10: {
                key: "{color.signalBlue.10}",
                $value: "#eaf2f6",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#eaf2f6",
                    $type: "color",
                    key: "{color.signalBlue.10}"
                },
                name: "colorSignalBlue10",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "10"
                ]
            },
            20: {
                key: "{color.signalBlue.20}",
                $value: "#d5e5ed",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d5e5ed",
                    $type: "color",
                    key: "{color.signalBlue.20}"
                },
                name: "colorSignalBlue20",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "20"
                ]
            },
            100: {
                key: "{color.signalBlue.100}",
                $value: "#06c",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#06c",
                    $type: "color",
                    key: "{color.signalBlue.100}"
                },
                name: "colorSignalBlue100",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "100"
                ]
            },
            170: {
                key: "{color.signalBlue.170}",
                $value: "#162b33",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#162b33",
                    $type: "color",
                    key: "{color.signalBlue.170}"
                },
                name: "colorSignalBlue170",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "170"
                ]
            },
            180: {
                key: "{color.signalBlue.180}",
                $value: "#112127",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#112127",
                    $type: "color",
                    key: "{color.signalBlue.180}"
                },
                name: "colorSignalBlue180",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "180"
                ]
            }
        },
        signalGreen: {
            20: {
                key: "{color.signalGreen.20}",
                $value: "#d5f2d9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d5f2d9",
                    $type: "color",
                    key: "{color.signalGreen.20}"
                },
                name: "colorSignalGreen20",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "20"
                ]
            },
            30: {
                key: "{color.signalGreen.30}",
                $value: "#bae5c5",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#bae5c5",
                    $type: "color",
                    key: "{color.signalGreen.30}"
                },
                name: "colorSignalGreen30",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "30"
                ]
            },
            100: {
                key: "{color.signalGreen.100}",
                $value: "#008d3c",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#008d3c",
                    $type: "color",
                    key: "{color.signalGreen.100}"
                },
                name: "colorSignalGreen100",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "100"
                ]
            },
            150: {
                key: "{color.signalGreen.150}",
                $value: "#194B33",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#194B33",
                    $type: "color",
                    key: "{color.signalGreen.150}"
                },
                name: "colorSignalGreen150",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "150"
                ]
            },
            170: {
                key: "{color.signalGreen.170}",
                $value: "#163328",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#163328",
                    $type: "color",
                    key: "{color.signalGreen.170}"
                },
                name: "colorSignalGreen170",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "170"
                ]
            },
            180: {
                key: "{color.signalGreen.180}",
                $value: "#112722",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#112722",
                    $type: "color",
                    key: "{color.signalGreen.180}"
                },
                name: "colorSignalGreen180",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "180"
                ]
            }
        },
        signalYellow: {
            10: {
                key: "{color.signalYellow.10}",
                $value: "#fff8e2",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fff8e2",
                    $type: "color",
                    key: "{color.signalYellow.10}"
                },
                name: "colorSignalYellow10",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "10"
                ]
            },
            20: {
                key: "{color.signalYellow.20}",
                $value: "#fff1cd",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fff1cd",
                    $type: "color",
                    key: "{color.signalYellow.20}"
                },
                name: "colorSignalYellow20",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "20"
                ]
            },
            30: {
                key: "{color.signalYellow.30}",
                $value: "#ffeab8",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffeab8",
                    $type: "color",
                    key: "{color.signalYellow.30}"
                },
                name: "colorSignalYellow30",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "30"
                ]
            },
            40: {
                key: "{color.signalYellow.40}",
                $value: "#ffe3a3",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffe3a3",
                    $type: "color",
                    key: "{color.signalYellow.40}"
                },
                name: "colorSignalYellow40",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "40"
                ]
            },
            50: {
                key: "{color.signalYellow.50}",
                $value: "#ffdc8b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffdc8b",
                    $type: "color",
                    key: "{color.signalYellow.50}"
                },
                name: "colorSignalYellow50",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "50"
                ]
            },
            60: {
                key: "{color.signalYellow.60}",
                $value: "#ffd47b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffd47b",
                    $type: "color",
                    key: "{color.signalYellow.60}"
                },
                name: "colorSignalYellow60",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "60"
                ]
            },
            70: {
                key: "{color.signalYellow.70}",
                $value: "#fdcd5d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fdcd5d",
                    $type: "color",
                    key: "{color.signalYellow.70}"
                },
                name: "colorSignalYellow70",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "70"
                ]
            },
            80: {
                key: "{color.signalYellow.80}",
                $value: "#fbc640",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fbc640",
                    $type: "color",
                    key: "{color.signalYellow.80}"
                },
                name: "colorSignalYellow80",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "80"
                ]
            },
            90: {
                key: "{color.signalYellow.90}",
                $value: "#fabf1b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fabf1b",
                    $type: "color",
                    key: "{color.signalYellow.90}"
                },
                name: "colorSignalYellow90",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "90"
                ]
            },
            100: {
                key: "{color.signalYellow.100}",
                $value: "#fab900",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fab900",
                    $type: "color",
                    key: "{color.signalYellow.100}"
                },
                name: "colorSignalYellow100",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "100"
                ]
            },
            110: {
                key: "{color.signalYellow.110}",
                $value: "#daa105",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#daa105",
                    $type: "color",
                    key: "{color.signalYellow.110}"
                },
                name: "colorSignalYellow110",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "110"
                ]
            },
            120: {
                key: "{color.signalYellow.120}",
                $value: "#bd8c1e",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#bd8c1e",
                    $type: "color",
                    key: "{color.signalYellow.120}"
                },
                name: "colorSignalYellow120",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "120"
                ]
            },
            130: {
                key: "{color.signalYellow.130}",
                $value: "#a17927",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#a17927",
                    $type: "color",
                    key: "{color.signalYellow.130}"
                },
                name: "colorSignalYellow130",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "130"
                ]
            },
            140: {
                key: "{color.signalYellow.140}",
                $value: "#88672a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#88672a",
                    $type: "color",
                    key: "{color.signalYellow.140}"
                },
                name: "colorSignalYellow140",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "140"
                ]
            },
            150: {
                key: "{color.signalYellow.150}",
                $value: "#70562b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#70562b",
                    $type: "color",
                    key: "{color.signalYellow.150}"
                },
                name: "colorSignalYellow150",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "150"
                ]
            },
            160: {
                key: "{color.signalYellow.160}",
                $value: "#5a4629",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#5a4629",
                    $type: "color",
                    key: "{color.signalYellow.160}"
                },
                name: "colorSignalYellow160",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "160"
                ]
            },
            170: {
                key: "{color.signalYellow.170}",
                $value: "#453826",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#453826",
                    $type: "color",
                    key: "{color.signalYellow.170}"
                },
                name: "colorSignalYellow170",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "170"
                ]
            },
            180: {
                key: "{color.signalYellow.180}",
                $value: "#322a20",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#322a20",
                    $type: "color",
                    key: "{color.signalYellow.180}"
                },
                name: "colorSignalYellow180",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "180"
                ]
            },
            190: {
                key: "{color.signalYellow.190}",
                $value: "#201c18",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#201c18",
                    $type: "color",
                    key: "{color.signalYellow.190}"
                },
                name: "colorSignalYellow190",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "190"
                ]
            },
            200: {
                key: "{color.signalYellow.200}",
                $value: "#0f0e0e",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0f0e0e",
                    $type: "color",
                    key: "{color.signalYellow.200}"
                },
                name: "colorSignalYellow200",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "200"
                ]
            }
        },
        signalRed: {
            10: {
                key: "{color.signalRed.10}",
                $value: "#ffefef",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffefef",
                    $type: "color",
                    key: "{color.signalRed.10}"
                },
                name: "colorSignalRed10",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "10"
                ]
            },
            20: {
                key: "{color.signalRed.20}",
                $value: "#ffdfdf",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffdfdf",
                    $type: "color",
                    key: "{color.signalRed.20}"
                },
                name: "colorSignalRed20",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "20"
                ]
            },
            30: {
                key: "{color.signalRed.30}",
                $value: "#fcc8c8",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fcc8c8",
                    $type: "color",
                    key: "{color.signalRed.30}"
                },
                name: "colorSignalRed30",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "30"
                ]
            },
            40: {
                key: "{color.signalRed.40}",
                $value: "#f9b0b0",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f9b0b0",
                    $type: "color",
                    key: "{color.signalRed.40}"
                },
                name: "colorSignalRed40",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "40"
                ]
            },
            50: {
                key: "{color.signalRed.50}",
                $value: "#f69999",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f69999",
                    $type: "color",
                    key: "{color.signalRed.50}"
                },
                name: "colorSignalRed50",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "50"
                ]
            },
            60: {
                key: "{color.signalRed.60}",
                $value: "#f38181",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f38181",
                    $type: "color",
                    key: "{color.signalRed.60}"
                },
                name: "colorSignalRed60",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "60"
                ]
            },
            70: {
                key: "{color.signalRed.70}",
                $value: "#ef6a6a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ef6a6a",
                    $type: "color",
                    key: "{color.signalRed.70}"
                },
                name: "colorSignalRed70",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "70"
                ]
            },
            80: {
                key: "{color.signalRed.80}",
                $value: "#EC5252",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#EC5252",
                    $type: "color",
                    key: "{color.signalRed.80}"
                },
                name: "colorSignalRed80",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "80"
                ]
            },
            90: {
                key: "{color.signalRed.90}",
                $value: "#e93b3b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e93b3b",
                    $type: "color",
                    key: "{color.signalRed.90}"
                },
                name: "colorSignalRed90",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "90"
                ]
            },
            100: {
                key: "{color.signalRed.100}",
                $value: "#e62323",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e62323",
                    $type: "color",
                    key: "{color.signalRed.100}"
                },
                name: "colorSignalRed100",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "100"
                ]
            },
            110: {
                key: "{color.signalRed.110}",
                $value: "#d12020",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d12020",
                    $type: "color",
                    key: "{color.signalRed.110}"
                },
                name: "colorSignalRed110",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "110"
                ]
            },
            120: {
                key: "{color.signalRed.120}",
                $value: "#bc1d1d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#bc1d1d",
                    $type: "color",
                    key: "{color.signalRed.120}"
                },
                name: "colorSignalRed120",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "120"
                ]
            },
            130: {
                key: "{color.signalRed.130}",
                $value: "#a71919",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#a71919",
                    $type: "color",
                    key: "{color.signalRed.130}"
                },
                name: "colorSignalRed130",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "130"
                ]
            },
            140: {
                key: "{color.signalRed.140}",
                $value: "#921616",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#921616",
                    $type: "color",
                    key: "{color.signalRed.140}"
                },
                name: "colorSignalRed140",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "140"
                ]
            },
            150: {
                key: "{color.signalRed.150}",
                $value: "#7d1313",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#7d1313",
                    $type: "color",
                    key: "{color.signalRed.150}"
                },
                name: "colorSignalRed150",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "150"
                ]
            },
            160: {
                key: "{color.signalRed.160}",
                $value: "#691010",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#691010",
                    $type: "color",
                    key: "{color.signalRed.160}"
                },
                name: "colorSignalRed160",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "160"
                ]
            },
            170: {
                key: "{color.signalRed.170}",
                $value: "#540d0d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#540d0d",
                    $type: "color",
                    key: "{color.signalRed.170}"
                },
                name: "colorSignalRed170",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "170"
                ]
            },
            180: {
                key: "{color.signalRed.180}",
                $value: "#3f0a0a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#3f0a0a",
                    $type: "color",
                    key: "{color.signalRed.180}"
                },
                name: "colorSignalRed180",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "180"
                ]
            },
            190: {
                key: "{color.signalRed.190}",
                $value: "#2a0606",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#2a0606",
                    $type: "color",
                    key: "{color.signalRed.190}"
                },
                name: "colorSignalRed190",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "190"
                ]
            },
            200: {
                key: "{color.signalRed.200}",
                $value: "#150303",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#150303",
                    $type: "color",
                    key: "{color.signalRed.200}"
                },
                name: "colorSignalRed200",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "200"
                ]
            }
        },
        sky: {
            20: {
                key: "{color.sky.20}",
                $value: "#cde6f3",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#cde6f3",
                    $type: "color",
                    key: "{color.sky.20}"
                },
                name: "colorSky20",
                attributes: {},
                path: [
                    "color",
                    "sky",
                    "20"
                ]
            },
            60: {
                key: "{color.sky.60}",
                $value: "#4a95df",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#4a95df",
                    $type: "color",
                    key: "{color.sky.60}"
                },
                name: "colorSky60",
                attributes: {},
                path: [
                    "color",
                    "sky",
                    "60"
                ]
            },
            180: {
                key: "{color.sky.180}",
                $value: "#101037",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#101037",
                    $type: "color",
                    key: "{color.sky.180}"
                },
                name: "colorSky180",
                attributes: {},
                path: [
                    "color",
                    "sky",
                    "180"
                ]
            }
        },
        mint: {
            20: {
                key: "{color.mint.20}",
                $value: "#d5f2d9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d5f2d9",
                    $type: "color",
                    key: "{color.mint.20}"
                },
                name: "colorMint20",
                attributes: {},
                path: [
                    "color",
                    "mint",
                    "20"
                ]
            },
            60: {
                key: "{color.mint.60}",
                $value: "#75b47d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#75b47d",
                    $type: "color",
                    key: "{color.mint.60}"
                },
                name: "colorMint60",
                attributes: {},
                path: [
                    "color",
                    "mint",
                    "60"
                ]
            },
            180: {
                key: "{color.mint.180}",
                $value: "#07270b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#07270b",
                    $type: "color",
                    key: "{color.mint.180}"
                },
                name: "colorMint180",
                attributes: {},
                path: [
                    "color",
                    "mint",
                    "180"
                ]
            }
        },
        cream: {
            20: {
                key: "{color.cream.20}",
                $value: "#fff5db",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fff5db",
                    $type: "color",
                    key: "{color.cream.20}"
                },
                name: "colorCream20",
                attributes: {},
                path: [
                    "color",
                    "cream",
                    "20"
                ]
            },
            60: {
                key: "{color.cream.60}",
                $value: "#ecbe4a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ecbe4a",
                    $type: "color",
                    key: "{color.cream.60}"
                },
                name: "colorCream60",
                attributes: {},
                path: [
                    "color",
                    "cream",
                    "60"
                ]
            },
            180: {
                key: "{color.cream.180}",
                $value: "#2c2719",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#2c2719",
                    $type: "color",
                    key: "{color.cream.180}"
                },
                name: "colorCream180",
                attributes: {},
                path: [
                    "color",
                    "cream",
                    "180"
                ]
            }
        },
        teal: {
            20: {
                key: "{color.teal.20}",
                $value: "#cdf2f2",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#cdf2f2",
                    $type: "color",
                    key: "{color.teal.20}"
                },
                name: "colorTeal20",
                attributes: {},
                path: [
                    "color",
                    "teal",
                    "20"
                ]
            },
            60: {
                key: "{color.teal.60}",
                $value: "#43bcbc",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#43bcbc",
                    $type: "color",
                    key: "{color.teal.60}"
                },
                name: "colorTeal60",
                attributes: {},
                path: [
                    "color",
                    "teal",
                    "60"
                ]
            },
            180: {
                key: "{color.teal.180}",
                $value: "#0d2c2c",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0d2c2c",
                    $type: "color",
                    key: "{color.teal.180}"
                },
                name: "colorTeal180",
                attributes: {},
                path: [
                    "color",
                    "teal",
                    "180"
                ]
            }
        },
        lagoon: {
            20: {
                key: "{color.lagoon.20}",
                $value: "#d2daf9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d2daf9",
                    $type: "color",
                    key: "{color.lagoon.20}"
                },
                name: "colorLagoon20",
                attributes: {},
                path: [
                    "color",
                    "lagoon",
                    "20"
                ]
            },
            60: {
                key: "{color.lagoon.60}",
                $value: "#7088e0",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#7088e0",
                    $type: "color",
                    key: "{color.lagoon.60}"
                },
                name: "colorLagoon60",
                attributes: {},
                path: [
                    "color",
                    "lagoon",
                    "60"
                ]
            },
            180: {
                key: "{color.lagoon.180}",
                $value: "#0a1332",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0a1332",
                    $type: "color",
                    key: "{color.lagoon.180}"
                },
                name: "colorLagoon180",
                attributes: {},
                path: [
                    "color",
                    "lagoon",
                    "180"
                ]
            }
        },
        lavender: {
            20: {
                key: "{color.lavender.20}",
                $value: "#f6d0f9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f6d0f9",
                    $type: "color",
                    key: "{color.lavender.20}"
                },
                name: "colorLavender20",
                attributes: {},
                path: [
                    "color",
                    "lavender",
                    "20"
                ]
            },
            60: {
                key: "{color.lavender.60}",
                $value: "#b77dbc",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#b77dbc",
                    $type: "color",
                    key: "{color.lavender.60}"
                },
                name: "colorLavender60",
                attributes: {},
                path: [
                    "color",
                    "lavender",
                    "60"
                ]
            },
            180: {
                key: "{color.lavender.180}",
                $value: "#391c3b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#391c3b",
                    $type: "color",
                    key: "{color.lavender.180}"
                },
                name: "colorLavender180",
                attributes: {},
                path: [
                    "color",
                    "lavender",
                    "180"
                ]
            }
        },
        peach: {
            20: {
                key: "{color.peach.20}",
                $value: "#ffe6d9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffe6d9",
                    $type: "color",
                    key: "{color.peach.20}"
                },
                name: "colorPeach20",
                attributes: {},
                path: [
                    "color",
                    "peach",
                    "20"
                ]
            },
            60: {
                key: "{color.peach.60}",
                $value: "#e87031",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e87031",
                    $type: "color",
                    key: "{color.peach.60}"
                },
                name: "colorPeach60",
                attributes: {},
                path: [
                    "color",
                    "peach",
                    "60"
                ]
            },
            180: {
                key: "{color.peach.180}",
                $value: "#421d0a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#421d0a",
                    $type: "color",
                    key: "{color.peach.180}"
                },
                name: "colorPeach180",
                attributes: {},
                path: [
                    "color",
                    "peach",
                    "180"
                ]
            }
        },
        pippin: {
            20: {
                key: "{color.pippin.20}",
                $value: "#ffe0e0",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffe0e0",
                    $type: "color",
                    key: "{color.pippin.20}"
                },
                name: "colorPippin20",
                attributes: {},
                path: [
                    "color",
                    "pippin",
                    "20"
                ]
            },
            60: {
                key: "{color.pippin.60}",
                $value: "#f17575",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f17575",
                    $type: "color",
                    key: "{color.pippin.60}"
                },
                name: "colorPippin60",
                attributes: {},
                path: [
                    "color",
                    "pippin",
                    "60"
                ]
            },
            180: {
                key: "{color.pippin.180}",
                $value: "#431919",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#431919",
                    $type: "color",
                    key: "{color.pippin.180}"
                },
                name: "colorPippin180",
                attributes: {},
                path: [
                    "color",
                    "pippin",
                    "180"
                ]
            }
        }
    },
    spacing: {
        10: {
            key: "{spacing.10}",
            $value: "0.125rem",
            $description: "@deprecated Use space.10 (--midas-space-10) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.10}",
                $description: "@deprecated Use space.10 (--midas-space-10) instead",
                $type: "dimension",
                key: "{spacing.10}"
            },
            name: "spacing10",
            attributes: {},
            path: [
                "spacing",
                "10"
            ]
        },
        20: {
            key: "{spacing.20}",
            $value: "0.25rem",
            $description: "@deprecated Use space.xsmall (--midas-space-xsmall) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.xsmall}",
                $description: "@deprecated Use space.xsmall (--midas-space-xsmall) instead",
                $type: "dimension",
                key: "{spacing.20}"
            },
            name: "spacing20",
            attributes: {},
            path: [
                "spacing",
                "20"
            ]
        },
        30: {
            key: "{spacing.30}",
            $value: "0.5rem",
            $description: "@deprecated Use space.small (--midas-space-small) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.small}",
                $description: "@deprecated Use space.small (--midas-space-small) instead",
                $type: "dimension",
                key: "{spacing.30}"
            },
            name: "spacing30",
            attributes: {},
            path: [
                "spacing",
                "30"
            ]
        },
        40: {
            key: "{spacing.40}",
            $value: "0.75rem",
            $description: "@deprecated Use space.60 (--midas-space-60) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.60}",
                $description: "@deprecated Use space.60 (--midas-space-60) instead",
                $type: "dimension",
                key: "{spacing.40}"
            },
            name: "spacing40",
            attributes: {},
            path: [
                "spacing",
                "40"
            ]
        },
        50: {
            key: "{spacing.50}",
            $value: "1rem",
            $description: "@deprecated Use space.medium (--midas-space-medium) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.medium}",
                $description: "@deprecated Use space.medium (--midas-space-medium) instead",
                $type: "dimension",
                key: "{spacing.50}"
            },
            name: "spacing50",
            attributes: {},
            path: [
                "spacing",
                "50"
            ]
        },
        60: {
            key: "{spacing.60}",
            $value: "1.5rem",
            $description: "@deprecated Use space.large (--midas-space-large) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.large}",
                $description: "@deprecated Use space.large (--midas-space-large) instead",
                $type: "dimension",
                key: "{spacing.60}"
            },
            name: "spacing60",
            attributes: {},
            path: [
                "spacing",
                "60"
            ]
        },
        70: {
            key: "{spacing.70}",
            $value: "2rem",
            $description: "@deprecated Use space.xlarge (--midas-space-xlarge) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.xlarge}",
                $description: "@deprecated Use space.xlarge (--midas-space-xlarge) instead",
                $type: "dimension",
                key: "{spacing.70}"
            },
            name: "spacing70",
            attributes: {},
            path: [
                "spacing",
                "70"
            ]
        },
        80: {
            key: "{spacing.80}",
            $value: "2.5rem",
            $description: "@deprecated Use space.130 (--midas-space-130) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.130}",
                $description: "@deprecated Use space.130 (--midas-space-130) instead",
                $type: "dimension",
                key: "{spacing.80}"
            },
            name: "spacing80",
            attributes: {},
            path: [
                "spacing",
                "80"
            ]
        },
        90: {
            key: "{spacing.90}",
            $value: "3rem",
            $description: "@deprecated Use space.150 (--midas-space-150) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.150}",
                $description: "@deprecated Use space.150 (--midas-space-150) instead",
                $type: "dimension",
                key: "{spacing.90}"
            },
            name: "spacing90",
            attributes: {},
            path: [
                "spacing",
                "90"
            ]
        },
        xsmall: {
            key: "{spacing.xsmall}",
            $value: "0.25rem",
            $description: "@deprecated Use space.xsmall (--midas-space-xsmall) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.xsmall}",
                $description: "@deprecated Use space.xsmall (--midas-space-xsmall) instead",
                $type: "dimension",
                key: "{spacing.xsmall}"
            },
            name: "spacingXsmall",
            attributes: {},
            path: [
                "spacing",
                "xsmall"
            ]
        },
        small: {
            key: "{spacing.small}",
            $value: "0.5rem",
            $description: "@deprecated Use space.small (--midas-space-small) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.small}",
                $description: "@deprecated Use space.small (--midas-space-small) instead",
                $type: "dimension",
                key: "{spacing.small}"
            },
            name: "spacingSmall",
            attributes: {},
            path: [
                "spacing",
                "small"
            ]
        },
        medium: {
            key: "{spacing.medium}",
            $value: "1rem",
            $description: "@deprecated Use space.medium (--midas-space-medium) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.medium}",
                $description: "@deprecated Use space.medium (--midas-space-medium) instead",
                $type: "dimension",
                key: "{spacing.medium}"
            },
            name: "spacingMedium",
            attributes: {},
            path: [
                "spacing",
                "medium"
            ]
        },
        large: {
            key: "{spacing.large}",
            $value: "1.5rem",
            $description: "@deprecated Use space.large (--midas-space-large) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.large}",
                $description: "@deprecated Use space.large (--midas-space-large) instead",
                $type: "dimension",
                key: "{spacing.large}"
            },
            name: "spacingLarge",
            attributes: {},
            path: [
                "spacing",
                "large"
            ]
        },
        xlarge: {
            key: "{spacing.xlarge}",
            $value: "2rem",
            $description: "@deprecated Use space.xlarge (--midas-space-xlarge) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.xlarge}",
                $description: "@deprecated Use space.xlarge (--midas-space-xlarge) instead",
                $type: "dimension",
                key: "{spacing.xlarge}"
            },
            name: "spacingXlarge",
            attributes: {},
            path: [
                "spacing",
                "xlarge"
            ]
        }
    },
    size: {
        10: {
            key: "{size.10}",
            $value: "0.125rem",
            $description: "@deprecated Use base.10 (--midas-base-10) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.10}",
                $description: "@deprecated Use base.10 (--midas-base-10) instead",
                $type: "dimension",
                key: "{size.10}"
            },
            name: "size10",
            attributes: {},
            path: [
                "size",
                "10"
            ]
        },
        15: {
            key: "{size.15}",
            $value: "0.188rem",
            $description: "@deprecated Use base.15 (--midas-base-15) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.15}",
                $description: "@deprecated Use base.15 (--midas-base-15) instead",
                $type: "dimension",
                key: "{size.15}"
            },
            name: "size15",
            attributes: {},
            path: [
                "size",
                "15"
            ]
        },
        20: {
            key: "{size.20}",
            $value: "0.25rem",
            $description: "@deprecated Use base.20 (--midas-base-20) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.20}",
                $description: "@deprecated Use base.20 (--midas-base-20) instead",
                $type: "dimension",
                key: "{size.20}"
            },
            name: "size20",
            attributes: {},
            path: [
                "size",
                "20"
            ]
        },
        30: {
            key: "{size.30}",
            $value: "0.375rem",
            $description: "@deprecated Use base.30 (--midas-base-30) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.30}",
                $description: "@deprecated Use base.30 (--midas-base-30) instead",
                $type: "dimension",
                key: "{size.30}"
            },
            name: "size30",
            attributes: {},
            path: [
                "size",
                "30"
            ]
        },
        40: {
            key: "{size.40}",
            $value: "0.5rem",
            $description: "@deprecated Use base.40 (--midas-base-40) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.40}",
                $description: "@deprecated Use base.40 (--midas-base-40) instead",
                $type: "dimension",
                key: "{size.40}"
            },
            name: "size40",
            attributes: {},
            path: [
                "size",
                "40"
            ]
        },
        50: {
            key: "{size.50}",
            $value: "0.625rem",
            $description: "@deprecated Use base.50 (--midas-base-50) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.50}",
                $description: "@deprecated Use base.50 (--midas-base-50) instead",
                $type: "dimension",
                key: "{size.50}"
            },
            name: "size50",
            attributes: {},
            path: [
                "size",
                "50"
            ]
        },
        60: {
            key: "{size.60}",
            $value: "0.75rem",
            $description: "@deprecated Use base.60 (--midas-base-60) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.60}",
                $description: "@deprecated Use base.60 (--midas-base-60) instead",
                $type: "dimension",
                key: "{size.60}"
            },
            name: "size60",
            attributes: {},
            path: [
                "size",
                "60"
            ]
        },
        70: {
            key: "{size.70}",
            $value: "0.875rem",
            $description: "@deprecated Use base.70 (--midas-base-70) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.70}",
                $description: "@deprecated Use base.70 (--midas-base-70) instead",
                $type: "dimension",
                key: "{size.70}"
            },
            name: "size70",
            attributes: {},
            path: [
                "size",
                "70"
            ]
        },
        75: {
            key: "{size.75}",
            $value: "0.938rem",
            $description: "@deprecated Use base.75 (--midas-base-75) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.75}",
                $description: "@deprecated Use base.75 (--midas-base-75) instead",
                $type: "dimension",
                key: "{size.75}"
            },
            name: "size75",
            attributes: {},
            path: [
                "size",
                "75"
            ]
        },
        80: {
            key: "{size.80}",
            $value: "1rem",
            $description: "@deprecated Use base.80 (--midas-base-80) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.80}",
                $description: "@deprecated Use base.80 (--midas-base-80) instead",
                $type: "dimension",
                key: "{size.80}"
            },
            name: "size80",
            attributes: {},
            path: [
                "size",
                "80"
            ]
        },
        90: {
            key: "{size.90}",
            $value: "1.25rem",
            $description: "@deprecated Use base.90 (--midas-base-90) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.90}",
                $description: "@deprecated Use base.90 (--midas-base-90) instead",
                $type: "dimension",
                key: "{size.90}"
            },
            name: "size90",
            attributes: {},
            path: [
                "size",
                "90"
            ]
        },
        100: {
            key: "{size.100}",
            $value: "1.5rem",
            $description: "@deprecated Use base.100 (--midas-base-100) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.100}",
                $description: "@deprecated Use base.100 (--midas-base-100) instead",
                $type: "dimension",
                key: "{size.100}"
            },
            name: "size100",
            attributes: {},
            path: [
                "size",
                "100"
            ]
        },
        110: {
            key: "{size.110}",
            $value: "1.75rem",
            $description: "@deprecated Use base.110 (--midas-base-110) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.110}",
                $description: "@deprecated Use base.110 (--midas-base-110) instead",
                $type: "dimension",
                key: "{size.110}"
            },
            name: "size110",
            attributes: {},
            path: [
                "size",
                "110"
            ]
        },
        120: {
            key: "{size.120}",
            $value: "2rem",
            $description: "@deprecated Use base.120 (--midas-base-120) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.120}",
                $description: "@deprecated Use base.120 (--midas-base-120) instead",
                $type: "dimension",
                key: "{size.120}"
            },
            name: "size120",
            attributes: {},
            path: [
                "size",
                "120"
            ]
        },
        130: {
            key: "{size.130}",
            $value: "2.5rem",
            $description: "@deprecated Use base.130 (--midas-base-130) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.130}",
                $description: "@deprecated Use base.130 (--midas-base-130) instead",
                $type: "dimension",
                key: "{size.130}"
            },
            name: "size130",
            attributes: {},
            path: [
                "size",
                "130"
            ]
        },
        140: {
            key: "{size.140}",
            $value: "2.75rem",
            $description: "@deprecated Use base.140 (--midas-base-140) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.140}",
                $description: "@deprecated Use base.140 (--midas-base-140) instead",
                $type: "dimension",
                key: "{size.140}"
            },
            name: "size140",
            attributes: {},
            path: [
                "size",
                "140"
            ]
        },
        150: {
            key: "{size.150}",
            $value: "3rem",
            $description: "@deprecated Use base.150 (--midas-base-150) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.150}",
                $description: "@deprecated Use base.150 (--midas-base-150) instead",
                $type: "dimension",
                key: "{size.150}"
            },
            name: "size150",
            attributes: {},
            path: [
                "size",
                "150"
            ]
        },
        "00": {
            key: "{size.00}",
            $value: "0rem",
            $description: "@deprecated Use base.00 (--midas-base-00) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.00}",
                $description: "@deprecated Use base.00 (--midas-base-00) instead",
                $type: "dimension",
                key: "{size.00}"
            },
            name: "size00",
            attributes: {},
            path: [
                "size",
                "00"
            ]
        },
        "05": {
            key: "{size.05}",
            $value: "0.063rem",
            $description: "@deprecated Use base.05 (--midas-base-05) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.05}",
                $description: "@deprecated Use base.05 (--midas-base-05) instead",
                $type: "dimension",
                key: "{size.05}"
            },
            name: "size05",
            attributes: {},
            path: [
                "size",
                "05"
            ]
        },
        "control-sm": {
            key: "{size.control-sm}",
            $value: "2.5rem",
            $description: "@deprecated Use size.control-md (--midas-size-control-md) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{size.control-md}",
                $description: "@deprecated Use size.control-md (--midas-size-control-md) instead",
                $type: "dimension",
                key: "{size.control-sm}"
            },
            name: "sizeControlSm",
            attributes: {},
            path: [
                "size",
                "control-sm"
            ]
        },
        icon: {
            key: "{size.icon}",
            $value: "1.25rem",
            $description: "Standardstorlek för ikoner. 1.25rem / 20px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.90}",
                $description: "Standardstorlek för ikoner. 1.25rem / 20px.",
                $type: "dimension",
                key: "{size.icon}"
            },
            name: "sizeIcon",
            attributes: {},
            path: [
                "size",
                "icon"
            ]
        },
        "icon-sm": {
            key: "{size.icon-sm}",
            $value: "1rem",
            $description: "Liten ikonstorlek för kompakta kontexter. 1rem / 16px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.80}",
                $description: "Liten ikonstorlek för kompakta kontexter. 1rem / 16px.",
                $type: "dimension",
                key: "{size.icon-sm}"
            },
            name: "sizeIconSm",
            attributes: {},
            path: [
                "size",
                "icon-sm"
            ]
        },
        option: {
            key: "{size.option}",
            $value: "2rem",
            $description: "Höjd för alternativ i dropdown-listor, t.ex. Select och Combobox. 2rem / 32px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.120}",
                $description: "Höjd för alternativ i dropdown-listor, t.ex. Select och Combobox. 2rem / 32px.",
                $type: "dimension",
                key: "{size.option}"
            },
            name: "sizeOption",
            attributes: {},
            path: [
                "size",
                "option"
            ]
        },
        "control-md": {
            key: "{size.control-md}",
            $value: "2.5rem",
            $description: "Medelstor interaktiv kontrollhöjd. 2.5rem / 40px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.130}",
                $description: "Medelstor interaktiv kontrollhöjd. 2.5rem / 40px.",
                $type: "dimension",
                key: "{size.control-md}"
            },
            name: "sizeControlMd",
            attributes: {},
            path: [
                "size",
                "control-md"
            ]
        },
        control: {
            key: "{size.control}",
            $value: "3rem",
            $description: "Standardhöjd för interaktiva kontroller, t.ex. TextField och Button. 3rem / 48px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.150}",
                $description: "Standardhöjd för interaktiva kontroller, t.ex. TextField och Button. 3rem / 48px.",
                $type: "dimension",
                key: "{size.control}"
            },
            name: "sizeControl",
            attributes: {},
            path: [
                "size",
                "control"
            ]
        }
    },
    background: {
        base: {
            key: "{background.base}",
            $value: "light-dark(#fff, #171717)",
            $description: "Standardbakgrund för våra applikationer",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.base}, {color.gray.200})",
                $description: "Standardbakgrund för våra applikationer",
                $type: "string",
                key: "{background.base}"
            },
            name: "backgroundBase",
            attributes: {},
            path: [
                "background",
                "base"
            ]
        },
        hover: {
            key: "{background.hover}",
            $value: "light-dark(#e6e6e6, #212121)",
            $description: "Hoverfärg för bakgrund",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.hover}, {color.gray.190})",
                $description: "Hoverfärg för bakgrund",
                $type: "string",
                key: "{background.hover}"
            },
            name: "backgroundHover",
            attributes: {},
            path: [
                "background",
                "hover"
            ]
        },
        inverse: {
            key: "{background.inverse}",
            $value: "light-dark(#171717, #f2f2f2)",
            $description: "Bakgrund med inverterade färger",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.200}, {color.gray.10})",
                $description: "Bakgrund med inverterade färger",
                $type: "string",
                key: "{background.inverse}"
            },
            name: "backgroundInverse",
            attributes: {},
            path: [
                "background",
                "inverse"
            ]
        }
    },
    layer: {
        "01": {
            base: {
                key: "{layer.01.base}",
                $value: "light-dark(#f2f2f2, #262626)",
                $description: "Färg för lager som läggs på Background.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.10}, {color.gray.180})",
                    $description: "Färg för lager som läggs på Background.",
                    $type: "string",
                    key: "{layer.01.base}"
                },
                name: "layer01Base",
                attributes: {},
                path: [
                    "layer",
                    "01",
                    "base"
                ]
            },
            hover: {
                key: "{layer.01.hover}",
                $value: "light-dark(#e6e6e6, #333)",
                $description: "Hover state för layer01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.20}, {color.gray.170})",
                    $description: "Hover state för layer01",
                    $type: "string",
                    key: "{layer.01.hover}"
                },
                name: "layer01Hover",
                attributes: {},
                path: [
                    "layer",
                    "01",
                    "hover"
                ]
            },
            selected: {
                key: "{layer.01.selected}",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Selected state för layer01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Selected state för layer01",
                    $type: "string",
                    key: "{layer.01.selected}"
                },
                name: "layer01Selected",
                attributes: {},
                path: [
                    "layer",
                    "01",
                    "selected"
                ]
            },
            selectedHover: {
                key: "{layer.01.selectedHover}",
                $value: "light-dark(#ccc, #474747)",
                $description: "Hover state för layerSelected01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.40}, {color.gray.150})",
                    $description: "Hover state för layerSelected01",
                    $type: "string",
                    key: "{layer.01.selectedHover}"
                },
                name: "layer01SelectedHover",
                attributes: {},
                path: [
                    "layer",
                    "01",
                    "selectedHover"
                ]
            }
        },
        "02": {
            base: {
                key: "{layer.02.base}",
                $value: "light-dark(#fff, #383838)",
                $description: "Färg för lager som läggs på layer 01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.base}, {color.gray.160})",
                    $description: "Färg för lager som läggs på layer 01",
                    $type: "string",
                    key: "{layer.02.base}"
                },
                name: "layer02Base",
                attributes: {},
                path: [
                    "layer",
                    "02",
                    "base"
                ]
            },
            hover: {
                key: "{layer.02.hover}",
                $value: "light-dark(#e6e6e6, #474747)",
                $description: "Hover state för layer02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.hover}, {color.gray.150})",
                    $description: "Hover state för layer02",
                    $type: "string",
                    key: "{layer.02.hover}"
                },
                name: "layer02Hover",
                attributes: {},
                path: [
                    "layer",
                    "02",
                    "hover"
                ]
            },
            selected: {
                key: "{layer.02.selected}",
                $value: "light-dark(#d9d9d9, #525252)",
                $description: "Selected state för layer02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.140})",
                    $description: "Selected state för layer02",
                    $type: "string",
                    key: "{layer.02.selected}"
                },
                name: "layer02Selected",
                attributes: {},
                path: [
                    "layer",
                    "02",
                    "selected"
                ]
            },
            selectedHover: {
                key: "{layer.02.selectedHover}",
                $value: "light-dark(#ccc, #5d5d5d)",
                $description: "Hover state för layerSelected02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.40}, {color.gray.130})",
                    $description: "Hover state för layerSelected02",
                    $type: "string",
                    key: "{layer.02.selectedHover}"
                },
                name: "layer02SelectedHover",
                attributes: {},
                path: [
                    "layer",
                    "02",
                    "selectedHover"
                ]
            }
        }
    },
    layerAccent: {
        "01": {
            base: {
                key: "{layerAccent.01.base}",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Accentfärg som används tillsammans med layer 01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Accentfärg som används tillsammans med layer 01",
                    $type: "string",
                    key: "{layerAccent.01.base}"
                },
                name: "layerAccent01Base",
                attributes: {},
                path: [
                    "layerAccent",
                    "01",
                    "base"
                ]
            },
            hover: {
                key: "{layerAccent.01.hover}",
                $value: "light-dark(#ccc, #474747)",
                $description: "Hover state för layerAccent01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.40}, {color.gray.150})",
                    $description: "Hover state för layerAccent01",
                    $type: "string",
                    key: "{layerAccent.01.hover}"
                },
                name: "layerAccent01Hover",
                attributes: {},
                path: [
                    "layerAccent",
                    "01",
                    "hover"
                ]
            },
            selected: {
                key: "{layerAccent.01.selected}",
                $value: "light-dark(#bfbfbf, #525252)",
                $description: "Selected state för layerAccent01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.50}, {color.gray.140})",
                    $description: "Selected state för layerAccent01",
                    $type: "string",
                    key: "{layerAccent.01.selected}"
                },
                name: "layerAccent01Selected",
                attributes: {},
                path: [
                    "layerAccent",
                    "01",
                    "selected"
                ]
            }
        },
        "02": {
            base: {
                key: "{layerAccent.02.base}",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Accentfärg som används tillsammans med layer 02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Accentfärg som används tillsammans med layer 02",
                    $type: "string",
                    key: "{layerAccent.02.base}"
                },
                name: "layerAccent02Base",
                attributes: {},
                path: [
                    "layerAccent",
                    "02",
                    "base"
                ]
            },
            hover: {
                key: "{layerAccent.02.hover}",
                $value: "light-dark(#ccc, #474747)",
                $description: "Hover state för layerAccent02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.40}, {color.gray.150})",
                    $description: "Hover state för layerAccent02",
                    $type: "string",
                    key: "{layerAccent.02.hover}"
                },
                name: "layerAccent02Hover",
                attributes: {},
                path: [
                    "layerAccent",
                    "02",
                    "hover"
                ]
            },
            selected: {
                key: "{layerAccent.02.selected}",
                $value: "light-dark(#bfbfbf, #525252)",
                $description: "Selected state för layerAccent02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.50}, {color.gray.140})",
                    $description: "Selected state för layerAccent02",
                    $type: "string",
                    key: "{layerAccent.02.selected}"
                },
                name: "layerAccent02Selected",
                attributes: {},
                path: [
                    "layerAccent",
                    "02",
                    "selected"
                ]
            }
        }
    },
    brand: {
        primary: {
            key: "{brand.primary}",
            $value: "light-dark(#b90835, #b90835)",
            $description: "Migrationsverkets primära röda färg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.red.100}, {color.red.100})",
                $description: "Migrationsverkets primära röda färg",
                $type: "string",
                key: "{brand.primary}"
            },
            name: "brandPrimary",
            attributes: {},
            path: [
                "brand",
                "primary"
            ]
        }
    },
    border: {
        color: {
            primary: {
                key: "{border.color.primary}",
                $value: "light-dark(#171717, #f2f2f2)",
                $description: "Kantlinje med hög kontrast",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.200}, {color.gray.10})",
                    $description: "Kantlinje med hög kontrast",
                    $type: "string",
                    key: "{border.color.primary}"
                },
                name: "borderColorPrimary",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "primary"
                ]
            },
            secondary: {
                key: "{border.color.secondary}",
                $value: "light-dark(#737373, #8c8c8c)",
                $description: "Kantlinje med medelhög kontrast",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.110}, {color.gray.90})",
                    $description: "Kantlinje med medelhög kontrast",
                    $type: "string",
                    key: "{border.color.secondary}"
                },
                name: "borderColorSecondary",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "secondary"
                ]
            },
            subtle: {
                key: "{border.color.subtle}",
                $value: "light-dark(#bfbfbf, #525252)",
                $description: "Kantlinje med låg kontrast",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.50}, {color.gray.140})",
                    $description: "Kantlinje med låg kontrast",
                    $type: "string",
                    key: "{border.color.subtle}"
                },
                name: "borderColorSubtle",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "subtle"
                ]
            },
            tertiary: {
                key: "{border.color.tertiary}",
                $value: "light-dark(#143c50, #2e7ca5)",
                $description: "Primärblå kantlinje",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.blue.150}, {color.blue.100})",
                    $description: "Primärblå kantlinje",
                    $type: "string",
                    key: "{border.color.tertiary}"
                },
                name: "borderColorTertiary",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "tertiary"
                ]
            },
            disabled: {
                key: "{border.color.disabled}",
                $value: "light-dark(#bfbfbf, #525252)",
                $description: "Kantlinje för disabled state",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.50}, {color.gray.140})",
                    $description: "Kantlinje för disabled state",
                    $type: "string",
                    key: "{border.color.disabled}"
                },
                name: "borderColorDisabled",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "disabled"
                ]
            }
        },
        width: {
            key: "{border.width}",
            $value: "1px",
            $type: "dimension",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $value: {
                    value: 1,
                    unit: "px"
                },
                $type: "dimension",
                key: "{border.width}"
            },
            name: "borderWidth",
            attributes: {},
            path: [
                "border",
                "width"
            ]
        }
    },
    field: {
        "01": {
            base: {
                key: "{field.01.base}",
                $value: "light-dark(#f2f2f2, #262626)",
                $description: "färg för fält som ligger på Background",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.10}, {color.gray.180})",
                    $description: "färg för fält som ligger på Background",
                    $type: "string",
                    key: "{field.01.base}"
                },
                name: "field01Base",
                attributes: {},
                path: [
                    "field",
                    "01",
                    "base"
                ]
            },
            hover: {
                key: "{field.01.hover}",
                $value: "light-dark(#e6e6e6, #333)",
                $description: "Hover state för field01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.20}, {color.gray.170})",
                    $description: "Hover state för field01",
                    $type: "string",
                    key: "{field.01.hover}"
                },
                name: "field01Hover",
                attributes: {},
                path: [
                    "field",
                    "01",
                    "hover"
                ]
            },
            active: {
                key: "{field.01.active}",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Active state för field01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Active state för field01",
                    $type: "string",
                    key: "{field.01.active}"
                },
                name: "field01Active",
                attributes: {},
                path: [
                    "field",
                    "01",
                    "active"
                ]
            },
            disabled: {
                key: "{field.01.disabled}",
                $value: "light-dark(#f2f2f2, #262626)",
                $description: "Disabled state för fält som ligger på Background",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.10}, {color.gray.180})",
                    $description: "Disabled state för fält som ligger på Background",
                    $type: "string",
                    key: "{field.01.disabled}"
                },
                name: "field01Disabled",
                attributes: {},
                path: [
                    "field",
                    "01",
                    "disabled"
                ]
            }
        },
        "02": {
            base: {
                key: "{field.02.base}",
                $value: "light-dark(#fff, #383838)",
                $description: "Färg för fält som ligger på layer 01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.base}, {color.gray.160})",
                    $description: "Färg för fält som ligger på layer 01",
                    $type: "string",
                    key: "{field.02.base}"
                },
                name: "field02Base",
                attributes: {},
                path: [
                    "field",
                    "02",
                    "base"
                ]
            },
            hover: {
                key: "{field.02.hover}",
                $value: "light-dark(#e6e6e6, #474747)",
                $description: "Hover state för field02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.hover}, {color.gray.150})",
                    $description: "Hover state för field02",
                    $type: "string",
                    key: "{field.02.hover}"
                },
                name: "field02Hover",
                attributes: {},
                path: [
                    "field",
                    "02",
                    "hover"
                ]
            },
            active: {
                key: "{field.02.active}",
                $value: "light-dark(#d9d9d9, #525252)",
                $description: "Active state för field02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.140})",
                    $description: "Active state för field02",
                    $type: "string",
                    key: "{field.02.active}"
                },
                name: "field02Active",
                attributes: {},
                path: [
                    "field",
                    "02",
                    "active"
                ]
            },
            disabled: {
                key: "{field.02.disabled}",
                $value: "light-dark(#fff, #383838)",
                $description: "Disabled state för fält som ligger på layer 01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.base}, {color.gray.160})",
                    $description: "Disabled state för fält som ligger på layer 01",
                    $type: "string",
                    key: "{field.02.disabled}"
                },
                name: "field02Disabled",
                attributes: {},
                path: [
                    "field",
                    "02",
                    "disabled"
                ]
            }
        }
    },
    skeleton: {
        "01": {
            key: "{skeleton.01}",
            $value: "light-dark(#f2f2f2, #262626)",
            $description: "Färg som används när Skeleton ligger på Background",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.10}, {color.gray.180})",
                $description: "Färg som används när Skeleton ligger på Background",
                $type: "string",
                key: "{skeleton.01}"
            },
            name: "skeleton01",
            attributes: {},
            path: [
                "skeleton",
                "01"
            ]
        },
        "02": {
            key: "{skeleton.02}",
            $value: "light-dark(#d9d9d9, #383838)",
            $description: "Färg som används när Skeleton ligger på Layer 01",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.30}, {color.gray.160})",
                $description: "Färg som används när Skeleton ligger på Layer 01",
                $type: "string",
                key: "{skeleton.02}"
            },
            name: "skeleton02",
            attributes: {},
            path: [
                "skeleton",
                "02"
            ]
        }
    },
    icon: {
        primary: {
            key: "{icon.primary}",
            $value: "light-dark(#171717, #f2f2f2)",
            $description: "Primär ikonfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.200}, {color.gray.10})",
                $description: "Primär ikonfärg",
                $type: "string",
                key: "{icon.primary}"
            },
            name: "iconPrimary",
            attributes: {},
            path: [
                "icon",
                "primary"
            ]
        },
        secondary: {
            key: "{icon.secondary}",
            $value: "light-dark(#525252, #a6a6a6)",
            $description: "Sekundär ikonfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.140}, {color.gray.70})",
                $description: "Sekundär ikonfärg",
                $type: "string",
                key: "{icon.secondary}"
            },
            name: "iconSecondary",
            attributes: {},
            path: [
                "icon",
                "secondary"
            ]
        },
        tertiary: {
            key: "{icon.tertiary}",
            $value: "light-dark(#143c50, #f2f2f2)",
            $description: "Tertiär ikonfärg, används för ikoner i tertiary-knappar",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.blue.150}, {color.gray.10})",
                $description: "Tertiär ikonfärg, används för ikoner i tertiary-knappar",
                $type: "string",
                key: "{icon.tertiary}"
            },
            name: "iconTertiary",
            attributes: {},
            path: [
                "icon",
                "tertiary"
            ]
        },
        inverse: {
            key: "{icon.inverse}",
            $value: "light-dark(#fff, #171717)",
            $description: "Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.base}, {color.gray.200})",
                $description: "Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",
                $type: "string",
                key: "{icon.inverse}"
            },
            name: "iconInverse",
            attributes: {},
            path: [
                "icon",
                "inverse"
            ]
        },
        onColor: {
            key: "{icon.onColor}",
            $value: "light-dark(#fff, #fff)",
            $description: "Ikonfärg på färgade ytor som inte är lager",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.base}, {color.white.base})",
                $description: "Ikonfärg på färgade ytor som inte är lager",
                $type: "string",
                key: "{icon.onColor}"
            },
            name: "iconOnColor",
            attributes: {},
            path: [
                "icon",
                "onColor"
            ]
        },
        disabled: {
            key: "{icon.disabled}",
            $value: "light-dark(#bfbfbf, #525252)",
            $description: "Färg för ikoner som är disabled",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.50}, {color.gray.140})",
                $description: "Färg för ikoner som är disabled",
                $type: "string",
                key: "{icon.disabled}"
            },
            name: "iconDisabled",
            attributes: {},
            path: [
                "icon",
                "disabled"
            ]
        },
        success: {
            key: "{icon.success}",
            $value: "light-dark(#008d3c, #008d3c)",
            $description: "Ikonfärg för success state",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalGreen.100}, {color.signalGreen.100})",
                $description: "Ikonfärg för success state",
                $type: "string",
                key: "{icon.success}"
            },
            name: "iconSuccess",
            attributes: {},
            path: [
                "icon",
                "success"
            ]
        },
        info: {
            key: "{icon.info}",
            $value: "light-dark(#06c, #06c)",
            $description: "Ikonfärg för informationsikoner",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalBlue.100}, {color.signalBlue.100})",
                $description: "Ikonfärg för informationsikoner",
                $type: "string",
                key: "{icon.info}"
            },
            name: "iconInfo",
            attributes: {},
            path: [
                "icon",
                "info"
            ]
        },
        warning: {
            key: "{icon.warning}",
            $value: "light-dark(#e62323, #e62323)",
            $description: "Ikonfärg för varningsikoner och invalid state",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalRed.100}, {color.signalRed.100})",
                $description: "Ikonfärg för varningsikoner och invalid state",
                $type: "string",
                key: "{icon.warning}"
            },
            name: "iconWarning",
            attributes: {},
            path: [
                "icon",
                "warning"
            ]
        },
        important: {
            key: "{icon.important}",
            $type: "color",
            $value: "oklch(0.66 0.18 45)",
            $description: "Ikonfärg för viktig information",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "color",
                $value: "{color.orange.100}",
                $description: "Ikonfärg för viktig information",
                key: "{icon.important}"
            },
            name: "iconImportant",
            attributes: {},
            path: [
                "icon",
                "important"
            ]
        },
        readOnly: {
            key: "{icon.readOnly}",
            $value: "light-dark(#bfbfbf, #383838)",
            $description: "Färg för ikoner som är read-only",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.50}, {color.gray.160})",
                $description: "Färg för ikoner som är read-only",
                $type: "string",
                key: "{icon.readOnly}"
            },
            name: "iconReadOnly",
            attributes: {},
            path: [
                "icon",
                "readOnly"
            ]
        }
    },
    link: {
        enabled: {
            key: "{link.enabled}",
            $value: "light-dark(#29698C, #6CA3C0)",
            $description: "Primär länkfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.blue.120}, {color.blue.70})",
                $description: "Primär länkfärg",
                $type: "string",
                key: "{link.enabled}"
            },
            name: "linkEnabled",
            attributes: {},
            path: [
                "link",
                "enabled"
            ]
        },
        hover: {
            key: "{link.hover}",
            $value: "light-dark(#143c50, #94BCD1)",
            $description: "Hover state för länkar",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.blue.150}, {color.blue.50})",
                $description: "Hover state för länkar",
                $type: "string",
                key: "{link.hover}"
            },
            name: "linkHover",
            attributes: {},
            path: [
                "link",
                "hover"
            ]
        },
        pressed: {
            key: "{link.pressed}",
            $value: "light-dark(#171717, #abcbdb)",
            $description: "Active/pressed state för länkar",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.200}, {color.blue.40})",
                $description: "Active/pressed state för länkar",
                $type: "string",
                key: "{link.pressed}"
            },
            name: "linkPressed",
            attributes: {},
            path: [
                "link",
                "pressed"
            ]
        },
        visited: {
            key: "{link.visited}",
            $value: "light-dark(#954b95, #b46ab4)",
            $description: "Färg för besökta länkar",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.purple.110}, {color.purple.80})",
                $description: "Färg för besökta länkar",
                $type: "string",
                key: "{link.visited}"
            },
            name: "linkVisited",
            attributes: {},
            path: [
                "link",
                "visited"
            ]
        }
    },
    progressBar: {
        track: {
            background: {
                key: "{progressBar.track.background}",
                $type: "string",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Bakgrundsfärg för progress bar track",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "string",
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Bakgrundsfärg för progress bar track",
                    key: "{progressBar.track.background}"
                },
                name: "progressBarTrackBackground",
                attributes: {},
                path: [
                    "progressBar",
                    "track",
                    "background"
                ]
            }
        },
        indicator: {
            background: {
                key: "{progressBar.indicator.background}",
                $type: "color",
                $value: "#008d3c",
                $description: "Bakgrundsfärg för progress bar indicator",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.signalGreen.100}",
                    $description: "Bakgrundsfärg för progress bar indicator",
                    key: "{progressBar.indicator.background}"
                },
                name: "progressBarIndicatorBackground",
                attributes: {},
                path: [
                    "progressBar",
                    "indicator",
                    "background"
                ]
            }
        }
    },
    support: {
        border: {
            success: {
                key: "{support.border.success}",
                $value: "light-dark(#008d3c, #008d3c)",
                $description: "Kantlinje för success-notifikationer",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalGreen.100}, {color.signalGreen.100})",
                    $description: "Kantlinje för success-notifikationer",
                    $type: "string",
                    key: "{support.border.success}"
                },
                name: "supportBorderSuccess",
                attributes: {},
                path: [
                    "support",
                    "border",
                    "success"
                ]
            },
            info: {
                key: "{support.border.info}",
                $value: "light-dark(#06c, #06c)",
                $description: "Kantlinje för notifikationer med information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalBlue.100}, {color.signalBlue.100})",
                    $description: "Kantlinje för notifikationer med information",
                    $type: "string",
                    key: "{support.border.info}"
                },
                name: "supportBorderInfo",
                attributes: {},
                path: [
                    "support",
                    "border",
                    "info"
                ]
            },
            important: {
                key: "{support.border.important}",
                $type: "color",
                $value: "oklch(0.66 0.18 45)",
                $description: "Kantlinje för notifikationer med viktig information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.orange.100}",
                    $description: "Kantlinje för notifikationer med viktig information",
                    key: "{support.border.important}"
                },
                name: "supportBorderImportant",
                attributes: {},
                path: [
                    "support",
                    "border",
                    "important"
                ]
            },
            warning: {
                key: "{support.border.warning}",
                $value: "light-dark(#e62323, #e62323)",
                $description: "Kantlinje för notifikationer med varningar",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalRed.100}, {color.signalRed.100})",
                    $description: "Kantlinje för notifikationer med varningar",
                    $type: "string",
                    key: "{support.border.warning}"
                },
                name: "supportBorderWarning",
                attributes: {},
                path: [
                    "support",
                    "border",
                    "warning"
                ]
            }
        },
        background: {
            success: {
                key: "{support.background.success}",
                $value: "light-dark(#d5f2d9, #112722)",
                $description: "Bakgrund för success-notifikationer",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalGreen.20}, {color.signalGreen.180})",
                    $description: "Bakgrund för success-notifikationer",
                    $type: "string",
                    key: "{support.background.success}"
                },
                name: "supportBackgroundSuccess",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "success"
                ]
            },
            successHover: {
                key: "{support.background.successHover}",
                $value: "light-dark(#bae5c5, #163328)",
                $description: "Hoverbakgrund för success-notifikationer",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalGreen.30}, {color.signalGreen.170})",
                    $description: "Hoverbakgrund för success-notifikationer",
                    $type: "string",
                    key: "{support.background.successHover}"
                },
                name: "supportBackgroundSuccessHover",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "successHover"
                ]
            },
            info: {
                key: "{support.background.info}",
                $value: "light-dark(#eaf2f6, #112127)",
                $description: "Bakgrund för notifikationer med information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalBlue.10}, {color.signalBlue.180})",
                    $description: "Bakgrund för notifikationer med information",
                    $type: "string",
                    key: "{support.background.info}"
                },
                name: "supportBackgroundInfo",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "info"
                ]
            },
            infoHover: {
                key: "{support.background.infoHover}",
                $value: "light-dark(#d5e5ed, #162b33)",
                $description: "Hoverbakgrund för notifikationer med information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalBlue.20}, {color.signalBlue.170})",
                    $description: "Hoverbakgrund för notifikationer med information",
                    $type: "string",
                    key: "{support.background.infoHover}"
                },
                name: "supportBackgroundInfoHover",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "infoHover"
                ]
            },
            important: {
                key: "{support.background.important}",
                $value: "light-dark(#fff8e2, #322a20)",
                $description: "Bakgrund för notifikationer med viktig information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalYellow.10}, {color.signalYellow.180})",
                    $description: "Bakgrund för notifikationer med viktig information",
                    $type: "string",
                    key: "{support.background.important}"
                },
                name: "supportBackgroundImportant",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "important"
                ]
            },
            importantHover: {
                key: "{support.background.importantHover}",
                $value: "light-dark(#fff1cd, #453826)",
                $description: "Hoverbakgrund för notifikationer med viktig information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalYellow.20}, {color.signalYellow.170})",
                    $description: "Hoverbakgrund för notifikationer med viktig information",
                    $type: "string",
                    key: "{support.background.importantHover}"
                },
                name: "supportBackgroundImportantHover",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "importantHover"
                ]
            },
            warning: {
                key: "{support.background.warning}",
                $value: "light-dark(#ffdfdf, #3f0a0a)",
                $description: "Bakgrund för notifikationer med varningar",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalRed.20}, {color.signalRed.180})",
                    $description: "Bakgrund för notifikationer med varningar",
                    $type: "string",
                    key: "{support.background.warning}"
                },
                name: "supportBackgroundWarning",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "warning"
                ]
            },
            warningHover: {
                key: "{support.background.warningHover}",
                $value: "light-dark(#fcc8c8, #540d0d)",
                $description: "Hoverbakgrund för notifikationer med varningar",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalRed.30}, {color.signalRed.170})",
                    $description: "Hoverbakgrund för notifikationer med varningar",
                    $type: "string",
                    key: "{support.background.warningHover}"
                },
                name: "supportBackgroundWarningHover",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "warningHover"
                ]
            }
        }
    },
    tag: {
        sky: {
            background: {
                key: "{tag.sky.background}",
                $value: "light-dark(#cde6f3, #101037)",
                $description: "Tag bakgrund blå",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.sky.20}, {color.sky.180})",
                    $description: "Tag bakgrund blå",
                    $type: "string",
                    key: "{tag.sky.background}"
                },
                name: "tagSkyBackground",
                attributes: {},
                path: [
                    "tag",
                    "sky",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.sky.borderColor}",
                $type: "color",
                $value: "#4a95df",
                $description: "Tag kantlinje blå",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.sky.60}",
                    $description: "Tag kantlinje blå",
                    key: "{tag.sky.borderColor}"
                },
                name: "tagSkyBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "sky",
                    "borderColor"
                ]
            }
        },
        blue: {
            background: {
                key: "{tag.blue.background}",
                $value: "light-dark(#cde6f3, #101037)",
                $description: "@deprecated Använd tag.sky istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.sky.20}, {color.sky.180})",
                    $description: "@deprecated Använd tag.sky istället.",
                    $type: "string",
                    key: "{tag.blue.background}"
                },
                name: "tagBlueBackground",
                attributes: {},
                path: [
                    "tag",
                    "blue",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.blue.borderColor}",
                $type: "color",
                $value: "#4a95df",
                $description: "@deprecated Använd tag.sky istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.sky.60}",
                    $description: "@deprecated Använd tag.sky istället.",
                    key: "{tag.blue.borderColor}"
                },
                name: "tagBlueBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "blue",
                    "borderColor"
                ]
            }
        },
        mint: {
            background: {
                key: "{tag.mint.background}",
                $value: "light-dark(#d5f2d9, #07270b)",
                $description: "Tag bakgrund grön",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.mint.20}, {color.mint.180})",
                    $description: "Tag bakgrund grön",
                    $type: "string",
                    key: "{tag.mint.background}"
                },
                name: "tagMintBackground",
                attributes: {},
                path: [
                    "tag",
                    "mint",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.mint.borderColor}",
                $type: "color",
                $value: "#75b47d",
                $description: "Tag kantlinje grön",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.mint.60}",
                    $description: "Tag kantlinje grön",
                    key: "{tag.mint.borderColor}"
                },
                name: "tagMintBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "mint",
                    "borderColor"
                ]
            }
        },
        green: {
            background: {
                key: "{tag.green.background}",
                $value: "light-dark(#d5f2d9, #07270b)",
                $description: "@deprecated Använd tag.mint istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.mint.20}, {color.mint.180})",
                    $description: "@deprecated Använd tag.mint istället.",
                    $type: "string",
                    key: "{tag.green.background}"
                },
                name: "tagGreenBackground",
                attributes: {},
                path: [
                    "tag",
                    "green",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.green.borderColor}",
                $type: "color",
                $value: "#75b47d",
                $description: "@deprecated Använd tag.mint istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.mint.60}",
                    $description: "@deprecated Använd tag.mint istället.",
                    key: "{tag.green.borderColor}"
                },
                name: "tagGreenBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "green",
                    "borderColor"
                ]
            }
        },
        cream: {
            background: {
                key: "{tag.cream.background}",
                $value: "light-dark(#fff5db, #2c2719)",
                $description: "Tag bakgrund gul",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.cream.20}, {color.cream.180})",
                    $description: "Tag bakgrund gul",
                    $type: "string",
                    key: "{tag.cream.background}"
                },
                name: "tagCreamBackground",
                attributes: {},
                path: [
                    "tag",
                    "cream",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.cream.borderColor}",
                $type: "color",
                $value: "#ecbe4a",
                $description: "Tag kantlinje gul",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.cream.60}",
                    $description: "Tag kantlinje gul",
                    key: "{tag.cream.borderColor}"
                },
                name: "tagCreamBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "cream",
                    "borderColor"
                ]
            }
        },
        yellow: {
            background: {
                key: "{tag.yellow.background}",
                $value: "light-dark(#fff5db, #2c2719)",
                $description: "@deprecated Använd tag.cream istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.cream.20}, {color.cream.180})",
                    $description: "@deprecated Använd tag.cream istället.",
                    $type: "string",
                    key: "{tag.yellow.background}"
                },
                name: "tagYellowBackground",
                attributes: {},
                path: [
                    "tag",
                    "yellow",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.yellow.borderColor}",
                $type: "color",
                $value: "#ecbe4a",
                $description: "@deprecated Använd tag.cream istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.cream.60}",
                    $description: "@deprecated Använd tag.cream istället.",
                    key: "{tag.yellow.borderColor}"
                },
                name: "tagYellowBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "yellow",
                    "borderColor"
                ]
            }
        },
        teal: {
            background: {
                key: "{tag.teal.background}",
                $value: "light-dark(#cdf2f2, #0d2c2c)",
                $description: "Tag bakgrund blågrön",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.teal.20}, {color.teal.180})",
                    $description: "Tag bakgrund blågrön",
                    $type: "string",
                    key: "{tag.teal.background}"
                },
                name: "tagTealBackground",
                attributes: {},
                path: [
                    "tag",
                    "teal",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.teal.borderColor}",
                $type: "color",
                $value: "#43bcbc",
                $description: "Tag kantlinje blågrön",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.teal.60}",
                    $description: "Tag kantlinje blågrön",
                    key: "{tag.teal.borderColor}"
                },
                name: "tagTealBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "teal",
                    "borderColor"
                ]
            }
        },
        lagoon: {
            background: {
                key: "{tag.lagoon.background}",
                $value: "light-dark(#d2daf9, #0a1332)",
                $description: "Tag bakgrund lagunblå",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.lagoon.20}, {color.lagoon.180})",
                    $description: "Tag bakgrund lagunblå",
                    $type: "string",
                    key: "{tag.lagoon.background}"
                },
                name: "tagLagoonBackground",
                attributes: {},
                path: [
                    "tag",
                    "lagoon",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.lagoon.borderColor}",
                $type: "color",
                $value: "#7088e0",
                $description: "Tag kantlinje lagunblå",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.lagoon.60}",
                    $description: "Tag kantlinje lagunblå",
                    key: "{tag.lagoon.borderColor}"
                },
                name: "tagLagoonBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "lagoon",
                    "borderColor"
                ]
            }
        },
        lagoonblue: {
            background: {
                key: "{tag.lagoonblue.background}",
                $value: "light-dark(#d2daf9, #0a1332)",
                $description: "@deprecated Använd tag.lagoon istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.lagoon.20}, {color.lagoon.180})",
                    $description: "@deprecated Använd tag.lagoon istället.",
                    $type: "string",
                    key: "{tag.lagoonblue.background}"
                },
                name: "tagLagoonblueBackground",
                attributes: {},
                path: [
                    "tag",
                    "lagoonblue",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.lagoonblue.borderColor}",
                $type: "color",
                $value: "#7088e0",
                $description: "@deprecated Använd tag.lagoon istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.lagoon.60}",
                    $description: "@deprecated Använd tag.lagoon istället.",
                    key: "{tag.lagoonblue.borderColor}"
                },
                name: "tagLagoonblueBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "lagoonblue",
                    "borderColor"
                ]
            }
        },
        lavender: {
            background: {
                key: "{tag.lavender.background}",
                $value: "light-dark(#f6d0f9, #391c3b)",
                $description: "Tag bakgrund lila",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.lavender.20}, {color.lavender.180})",
                    $description: "Tag bakgrund lila",
                    $type: "string",
                    key: "{tag.lavender.background}"
                },
                name: "tagLavenderBackground",
                attributes: {},
                path: [
                    "tag",
                    "lavender",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.lavender.borderColor}",
                $type: "color",
                $value: "#b77dbc",
                $description: "Tag kantlinje lila",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.lavender.60}",
                    $description: "Tag kantlinje lila",
                    key: "{tag.lavender.borderColor}"
                },
                name: "tagLavenderBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "lavender",
                    "borderColor"
                ]
            }
        },
        purple: {
            background: {
                key: "{tag.purple.background}",
                $value: "light-dark(#f6d0f9, #391c3b)",
                $description: "@deprecated Använd tag.lavender istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.lavender.20}, {color.lavender.180})",
                    $description: "@deprecated Använd tag.lavender istället.",
                    $type: "string",
                    key: "{tag.purple.background}"
                },
                name: "tagPurpleBackground",
                attributes: {},
                path: [
                    "tag",
                    "purple",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.purple.borderColor}",
                $type: "color",
                $value: "#b77dbc",
                $description: "@deprecated Använd tag.lavender istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.lavender.60}",
                    $description: "@deprecated Använd tag.lavender istället.",
                    key: "{tag.purple.borderColor}"
                },
                name: "tagPurpleBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "purple",
                    "borderColor"
                ]
            }
        },
        peach: {
            background: {
                key: "{tag.peach.background}",
                $value: "light-dark(#ffe6d9, #421d0a)",
                $description: "Tag bakgrund orange",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.peach.20}, {color.peach.180})",
                    $description: "Tag bakgrund orange",
                    $type: "string",
                    key: "{tag.peach.background}"
                },
                name: "tagPeachBackground",
                attributes: {},
                path: [
                    "tag",
                    "peach",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.peach.borderColor}",
                $type: "color",
                $value: "#e87031",
                $description: "Tag kantlinje orange",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.peach.60}",
                    $description: "Tag kantlinje orange",
                    key: "{tag.peach.borderColor}"
                },
                name: "tagPeachBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "peach",
                    "borderColor"
                ]
            }
        },
        orange: {
            background: {
                key: "{tag.orange.background}",
                $value: "light-dark(#ffe6d9, #421d0a)",
                $description: "@deprecated Använd tag.peach istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.peach.20}, {color.peach.180})",
                    $description: "@deprecated Använd tag.peach istället.",
                    $type: "string",
                    key: "{tag.orange.background}"
                },
                name: "tagOrangeBackground",
                attributes: {},
                path: [
                    "tag",
                    "orange",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.orange.borderColor}",
                $type: "color",
                $value: "#e87031",
                $description: "@deprecated Använd tag.peach istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.peach.60}",
                    $description: "@deprecated Använd tag.peach istället.",
                    key: "{tag.orange.borderColor}"
                },
                name: "tagOrangeBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "orange",
                    "borderColor"
                ]
            }
        },
        pippin: {
            background: {
                key: "{tag.pippin.background}",
                $value: "light-dark(#ffe0e0, #431919)",
                $description: "Tag bakgrund röd",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.pippin.20}, {color.pippin.180})",
                    $description: "Tag bakgrund röd",
                    $type: "string",
                    key: "{tag.pippin.background}"
                },
                name: "tagPippinBackground",
                attributes: {},
                path: [
                    "tag",
                    "pippin",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.pippin.borderColor}",
                $type: "color",
                $value: "#f17575",
                $description: "Tag kantlinje röd",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.pippin.60}",
                    $description: "Tag kantlinje röd",
                    key: "{tag.pippin.borderColor}"
                },
                name: "tagPippinBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "pippin",
                    "borderColor"
                ]
            }
        },
        red: {
            background: {
                key: "{tag.red.background}",
                $value: "light-dark(#ffe0e0, #431919)",
                $description: "@deprecated Använd tag.pippin istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.pippin.20}, {color.pippin.180})",
                    $description: "@deprecated Använd tag.pippin istället.",
                    $type: "string",
                    key: "{tag.red.background}"
                },
                name: "tagRedBackground",
                attributes: {},
                path: [
                    "tag",
                    "red",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.red.borderColor}",
                $type: "color",
                $value: "#f17575",
                $description: "@deprecated Använd tag.pippin istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.pippin.60}",
                    $description: "@deprecated Använd tag.pippin istället.",
                    key: "{tag.red.borderColor}"
                },
                name: "tagRedBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "red",
                    "borderColor"
                ]
            }
        }
    },
    text: {
        primary: {
            key: "{text.primary}",
            $value: "light-dark(#171717, #f2f2f2)",
            $description: "Primär textfärg.",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.200}, {color.gray.10})",
                $description: "Primär textfärg.",
                $type: "string",
                key: "{text.primary}"
            },
            name: "textPrimary",
            attributes: {},
            path: [
                "text",
                "primary"
            ]
        },
        secondary: {
            key: "{text.secondary}",
            $value: "light-dark(#525252, #a6a6a6)",
            $description: "Sekundär textfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.140}, {color.gray.70})",
                $description: "Sekundär textfärg",
                $type: "string",
                key: "{text.secondary}"
            },
            name: "textSecondary",
            attributes: {},
            path: [
                "text",
                "secondary"
            ]
        },
        tertiary: {
            key: "{text.tertiary}",
            $value: "light-dark(#143c50, #f2f2f2)",
            $description: "Textfärg på tertiär knapp",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.blue.150}, {color.gray.10})",
                $description: "Textfärg på tertiär knapp",
                $type: "string",
                key: "{text.tertiary}"
            },
            name: "textTertiary",
            attributes: {},
            path: [
                "text",
                "tertiary"
            ]
        },
        onColor: {
            key: "{text.onColor}",
            $value: "light-dark(#fff, #fff)",
            $description: "Textfärg på färgade bakgrunder som inte är lager",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.base}, {color.white.base})",
                $description: "Textfärg på färgade bakgrunder som inte är lager",
                $type: "string",
                key: "{text.onColor}"
            },
            name: "textOnColor",
            attributes: {},
            path: [
                "text",
                "onColor"
            ]
        },
        inverse: {
            key: "{text.inverse}",
            $value: "light-dark(#f2f2f2, #171717)",
            $description: "Inverterad textfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.10}, {color.gray.200})",
                $description: "Inverterad textfärg",
                $type: "string",
                key: "{text.inverse}"
            },
            name: "textInverse",
            attributes: {},
            path: [
                "text",
                "inverse"
            ]
        },
        disabled: {
            key: "{text.disabled}",
            $value: "light-dark(#bfbfbf, #525252)",
            $description: "Färg för disabled text",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.50}, {color.gray.140})",
                $description: "Färg för disabled text",
                $type: "string",
                key: "{text.disabled}"
            },
            name: "textDisabled",
            attributes: {},
            path: [
                "text",
                "disabled"
            ]
        },
        warning: {
            key: "{text.warning}",
            $value: "light-dark(#e62323, #EC5252)",
            $description: "Färg för felmeddelanden",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalRed.100}, {color.signalRed.80})",
                $description: "Färg för felmeddelanden",
                $type: "string",
                key: "{text.warning}"
            },
            name: "textWarning",
            attributes: {},
            path: [
                "text",
                "warning"
            ]
        },
        placeholder: {
            key: "{text.placeholder}",
            $value: "light-dark(#a6a6a6, #525252)",
            $description: "Färg för platshållare",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.70}, {color.gray.140})",
                $description: "Färg för platshållare",
                $type: "string",
                key: "{text.placeholder}"
            },
            name: "textPlaceholder",
            attributes: {},
            path: [
                "text",
                "placeholder"
            ]
        },
        readOnly: {
            key: "{text.readOnly}",
            $value: "light-dark(#737373, #999)",
            $description: "Färg för read-only state",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.110}, {color.gray.80})",
                $description: "Färg för read-only state",
                $type: "string",
                key: "{text.readOnly}"
            },
            name: "textReadOnly",
            attributes: {},
            path: [
                "text",
                "readOnly"
            ]
        }
    },
    badge: {
        background: {
            key: "{badge.background}",
            $value: "light-dark(#e62323, #e62323)",
            $description: "Bakgrundsfärg för badge",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalRed.100}, {color.signalRed.100})",
                $description: "Bakgrundsfärg för badge",
                $type: "string",
                key: "{badge.background}"
            },
            name: "badgeBackground",
            attributes: {},
            path: [
                "badge",
                "background"
            ]
        }
    },
    calendar: {
        date: {
            background: {
                hover: {
                    key: "{calendar.date.background.hover}",
                    $value: "light-dark(#0000001a, #ffffff1a)",
                    $description: "Hover-bakgrund för datumcell",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark(#0000001a, #ffffff1a)",
                        $description: "Hover-bakgrund för datumcell",
                        $type: "string",
                        key: "{calendar.date.background.hover}"
                    },
                    name: "calendarDateBackgroundHover",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "hover"
                    ]
                },
                selected: {
                    key: "{calendar.date.background.selected}",
                    $value: "light-dark(#143c50, #5897b8)",
                    $description: "Bakgrund för ett valt datum",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.150}, {color.blue.80})",
                        $description: "Bakgrund för ett valt datum",
                        $type: "string",
                        key: "{calendar.date.background.selected}"
                    },
                    name: "calendarDateBackgroundSelected",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "selected"
                    ]
                },
                startRange: {
                    key: "{calendar.date.background.startRange}",
                    $value: "light-dark(#143c50, #5897b8)",
                    $description: "Bakgrund för det första datumet i ett intervallval",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.150}, {color.blue.80})",
                        $description: "Bakgrund för det första datumet i ett intervallval",
                        $type: "string",
                        key: "{calendar.date.background.startRange}"
                    },
                    name: "calendarDateBackgroundStartRange",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "startRange"
                    ]
                },
                inRange: {
                    key: "{calendar.date.background.inRange}",
                    $value: "light-dark(#d5e5ed, #143c50)",
                    $description: "Bakgrund för datum som ligger inom ett valt intervall",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.20}, {color.blue.150})",
                        $description: "Bakgrund för datum som ligger inom ett valt intervall",
                        $type: "string",
                        key: "{calendar.date.background.inRange}"
                    },
                    name: "calendarDateBackgroundInRange",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "inRange"
                    ]
                },
                endRange: {
                    key: "{calendar.date.background.endRange}",
                    $value: "light-dark(#143c50, #5897b8)",
                    $description: "Bakgrund för det sista datumet i ett intervallval",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.150}, {color.blue.80})",
                        $description: "Bakgrund för det sista datumet i ett intervallval",
                        $type: "string",
                        key: "{calendar.date.background.endRange}"
                    },
                    name: "calendarDateBackgroundEndRange",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "endRange"
                    ]
                }
            }
        }
    },
    logo: {
        primary: {
            key: "{logo.primary}",
            $value: "light-dark(#b90835, #fff)",
            $description: "Färg på logotypen",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.red.100}, {color.white.base})",
                $description: "Färg på logotypen",
                $type: "string",
                key: "{logo.primary}"
            },
            name: "logoPrimary",
            attributes: {},
            path: [
                "logo",
                "primary"
            ]
        }
    },
    menu: {
        item: {
            background: {
                hover: {
                    key: "{menu.item.background.hover}",
                    $value: "light-dark(#e6e6e6, #212121)",
                    $description: "Bakgrundsfärg för menu vid hover",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.gray.20}, {color.gray.190})",
                        $description: "Bakgrundsfärg för menu vid hover",
                        $type: "string",
                        key: "{menu.item.background.hover}"
                    },
                    name: "menuItemBackgroundHover",
                    attributes: {},
                    path: [
                        "menu",
                        "item",
                        "background",
                        "hover"
                    ]
                },
                selected: {
                    key: "{menu.item.background.selected}",
                    $value: "light-dark(#f2f2f2, #262626)",
                    $description: "Bakgrundsfärg för aktiv menu",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.gray.10}, {color.gray.180})",
                        $description: "Bakgrundsfärg för aktiv menu",
                        $type: "string",
                        key: "{menu.item.background.selected}"
                    },
                    name: "menuItemBackgroundSelected",
                    attributes: {},
                    path: [
                        "menu",
                        "item",
                        "background",
                        "selected"
                    ]
                }
            }
        },
        text: {
            sectionHeader: {
                key: "{menu.text.sectionHeader}",
                $value: "light-dark(#525252, #a6a6a6)",
                $description: "Textfärg för sektionsrubriker i navigationsmenyn",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.140}, {color.gray.70})",
                    $description: "Textfärg för sektionsrubriker i navigationsmenyn",
                    $type: "string",
                    key: "{menu.text.sectionHeader}"
                },
                name: "menuTextSectionHeader",
                attributes: {},
                path: [
                    "menu",
                    "text",
                    "sectionHeader"
                ]
            }
        }
    },
    navigationLink: {
        background: {
            hover: {
                key: "{navigationLink.background.hover}",
                $value: "light-dark(#e6e6e6, #212121)",
                $description: "Bakgrundsfärg vid hover",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.20}, {color.gray.190})",
                    $description: "Bakgrundsfärg vid hover",
                    $type: "string",
                    key: "{navigationLink.background.hover}"
                },
                name: "navigationLinkBackgroundHover",
                attributes: {},
                path: [
                    "navigationLink",
                    "background",
                    "hover"
                ]
            },
            selected: {
                key: "{navigationLink.background.selected}",
                $value: "light-dark(#f2f2f2, #262626)",
                $description: "Bakgrundsfärg för aktiv länk",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.10}, {color.gray.180})",
                    $description: "Bakgrundsfärg för aktiv länk",
                    $type: "string",
                    key: "{navigationLink.background.selected}"
                },
                name: "navigationLinkBackgroundSelected",
                attributes: {},
                path: [
                    "navigationLink",
                    "background",
                    "selected"
                ]
            },
            selectedHover: {
                key: "{navigationLink.background.selectedHover}",
                $value: "light-dark(#e6e6e6, #212121)",
                $description: "Bakgrundsfärg vid hover på aktiv länk",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.20}, {color.gray.190})",
                    $description: "Bakgrundsfärg vid hover på aktiv länk",
                    $type: "string",
                    key: "{navigationLink.background.selectedHover}"
                },
                name: "navigationLinkBackgroundSelectedHover",
                attributes: {},
                path: [
                    "navigationLink",
                    "background",
                    "selectedHover"
                ]
            }
        }
    },
    overlay: {
        background: {
            key: "{overlay.background}",
            $type: "color",
            $value: "rgba(0 0 0 / 30%)",
            $description: "Bakrundsfärg för overlays",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "color",
                $value: "rgba(0 0 0 / 30%)",
                $description: "Bakrundsfärg för overlays",
                key: "{overlay.background}"
            },
            name: "overlayBackground",
            attributes: {},
            path: [
                "overlay",
                "background"
            ]
        },
        blur: {
            key: "{overlay.blur}",
            $type: "string",
            $value: "blur(2px)",
            $description: "Blur för overlays",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "blur(2px)",
                $description: "Blur för overlays",
                key: "{overlay.blur}"
            },
            name: "overlayBlur",
            attributes: {},
            path: [
                "overlay",
                "blur"
            ]
        }
    },
    card: {
        background: {
            base: {
                key: "{card.background.base}",
                $value: "light-dark(#fff, #262626)",
                $description: "Bakrundsfärg för Card",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.base}, {color.gray.180})",
                    $description: "Bakrundsfärg för Card",
                    $type: "string",
                    key: "{card.background.base}"
                },
                name: "cardBackgroundBase",
                attributes: {},
                path: [
                    "card",
                    "background",
                    "base"
                ]
            }
        },
        shadow: {
            key: "{card.shadow}",
            $type: "string",
            $value: "0 3px 5px 0 rgba(0, 0, 0, 0.30)",
            $description: "Skugga för Card",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "0 3px 5px 0 rgba(0, 0, 0, 0.30)",
                $description: "Skugga för Card",
                key: "{card.shadow}"
            },
            name: "cardShadow",
            attributes: {},
            path: [
                "card",
                "shadow"
            ]
        }
    },
    panel: {
        shadow: {
            key: "{panel.shadow}",
            $type: "string",
            $value: "-2px 0px 12px -2px rgba(0, 0, 0, 0.10)",
            $description: "Skugga för Panel",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "-2px 0px 12px -2px rgba(0, 0, 0, 0.10)",
                $description: "Skugga för Panel",
                key: "{panel.shadow}"
            },
            name: "panelShadow",
            attributes: {},
            path: [
                "panel",
                "shadow"
            ]
        }
    },
    space: {
        10: {
            key: "{space.10}",
            $value: "0.125rem",
            $description: "0.125rem / 2px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.10}",
                $description: "0.125rem / 2px.",
                $type: "dimension",
                key: "{space.10}"
            },
            name: "space10",
            attributes: {},
            path: [
                "space",
                "10"
            ]
        },
        30: {
            key: "{space.30}",
            $value: "0.375rem",
            $description: "0.375rem / 6px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.30}",
                $description: "0.375rem / 6px.",
                $type: "dimension",
                key: "{space.30}"
            },
            name: "space30",
            attributes: {},
            path: [
                "space",
                "30"
            ]
        },
        50: {
            key: "{space.50}",
            $value: "0.625rem",
            $description: "0.625rem / 10px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.50}",
                $description: "0.625rem / 10px.",
                $type: "dimension",
                key: "{space.50}"
            },
            name: "space50",
            attributes: {},
            path: [
                "space",
                "50"
            ]
        },
        60: {
            key: "{space.60}",
            $value: "0.75rem",
            $description: "0.75rem / 12px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.60}",
                $description: "0.75rem / 12px.",
                $type: "dimension",
                key: "{space.60}"
            },
            name: "space60",
            attributes: {},
            path: [
                "space",
                "60"
            ]
        },
        70: {
            key: "{space.70}",
            $value: "0.875rem",
            $description: "0.875rem / 14px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.70}",
                $description: "0.875rem / 14px.",
                $type: "dimension",
                key: "{space.70}"
            },
            name: "space70",
            attributes: {},
            path: [
                "space",
                "70"
            ]
        },
        75: {
            key: "{space.75}",
            $value: "0.938rem",
            $description: "0.938rem / 15px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.75}",
                $description: "0.938rem / 15px.",
                $type: "dimension",
                key: "{space.75}"
            },
            name: "space75",
            attributes: {},
            path: [
                "space",
                "75"
            ]
        },
        90: {
            key: "{space.90}",
            $value: "1.25rem",
            $description: "1.25rem / 20px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.90}",
                $description: "1.25rem / 20px.",
                $type: "dimension",
                key: "{space.90}"
            },
            name: "space90",
            attributes: {},
            path: [
                "space",
                "90"
            ]
        },
        130: {
            key: "{space.130}",
            $value: "2.5rem",
            $description: "2.5rem / 40px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.130}",
                $description: "2.5rem / 40px.",
                $type: "dimension",
                key: "{space.130}"
            },
            name: "space130",
            attributes: {},
            path: [
                "space",
                "130"
            ]
        },
        150: {
            key: "{space.150}",
            $value: "3rem",
            $description: "3rem / 48px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.150}",
                $description: "3rem / 48px.",
                $type: "dimension",
                key: "{space.150}"
            },
            name: "space150",
            attributes: {},
            path: [
                "space",
                "150"
            ]
        },
        xsmall: {
            key: "{space.xsmall}",
            $value: "0.25rem",
            $description: "Extra litet avstånd. 0.25rem / 4px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.20}",
                $description: "Extra litet avstånd. 0.25rem / 4px.",
                $type: "dimension",
                key: "{space.xsmall}"
            },
            name: "spaceXsmall",
            attributes: {},
            path: [
                "space",
                "xsmall"
            ]
        },
        small: {
            key: "{space.small}",
            $value: "0.5rem",
            $description: "Litet avstånd. 0.5rem / 8px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.40}",
                $description: "Litet avstånd. 0.5rem / 8px.",
                $type: "dimension",
                key: "{space.small}"
            },
            name: "spaceSmall",
            attributes: {},
            path: [
                "space",
                "small"
            ]
        },
        medium: {
            key: "{space.medium}",
            $value: "1rem",
            $description: "Medelstort avstånd. 1rem / 16px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.80}",
                $description: "Medelstort avstånd. 1rem / 16px.",
                $type: "dimension",
                key: "{space.medium}"
            },
            name: "spaceMedium",
            attributes: {},
            path: [
                "space",
                "medium"
            ]
        },
        large: {
            key: "{space.large}",
            $value: "1.5rem",
            $description: "Stort avstånd. 1.5rem / 24px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.100}",
                $description: "Stort avstånd. 1.5rem / 24px.",
                $type: "dimension",
                key: "{space.large}"
            },
            name: "spaceLarge",
            attributes: {},
            path: [
                "space",
                "large"
            ]
        },
        xlarge: {
            key: "{space.xlarge}",
            $value: "2rem",
            $description: "Extra stort avstånd. 2rem / 32px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.120}",
                $description: "Extra stort avstånd. 2rem / 32px.",
                $type: "dimension",
                key: "{space.xlarge}"
            },
            name: "spaceXlarge",
            attributes: {},
            path: [
                "space",
                "xlarge"
            ]
        },
        "05": {
            key: "{space.05}",
            $value: "0.063rem",
            $description: "0.063rem / 1px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.05}",
                $description: "0.063rem / 1px.",
                $type: "dimension",
                key: "{space.05}"
            },
            name: "space05",
            attributes: {},
            path: [
                "space",
                "05"
            ]
        }
    },
    state: {
        focus: {
            key: "{state.focus}",
            $type: "string",
            $value: "0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",
            $description: "Focus style used when the component is focused (box-shadow).",
            filePath: "packages/theme/tokens/states.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",
                $description: "Focus style used when the component is focused (box-shadow).",
                key: "{state.focus}"
            },
            name: "stateFocus",
            attributes: {},
            path: [
                "state",
                "focus"
            ]
        },
        focusInset: {
            key: "{state.focusInset}",
            $type: "string",
            $value: "inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",
            $description: "Inset variant of the focus ring (box-shadow inset).",
            filePath: "packages/theme/tokens/states.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",
                $description: "Inset variant of the focus ring (box-shadow inset).",
                key: "{state.focusInset}"
            },
            name: "stateFocusInset",
            attributes: {},
            path: [
                "state",
                "focusInset"
            ]
        },
        focusContrastMode: {
            outline: {
                key: "{state.focusContrastMode.outline}",
                $value: "2px",
                $description: "Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.",
                filePath: "packages/theme/tokens/states.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: "2px",
                    $description: "Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.",
                    $type: "dimension",
                    key: "{state.focusContrastMode.outline}"
                },
                name: "stateFocusContrastModeOutline",
                attributes: {},
                path: [
                    "state",
                    "focusContrastMode",
                    "outline"
                ]
            },
            offset: {
                key: "{state.focusContrastMode.offset}",
                $value: "2px",
                $description: "Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active.",
                filePath: "packages/theme/tokens/states.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: "2px",
                    $description: "Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active.",
                    $type: "dimension",
                    key: "{state.focusContrastMode.offset}"
                },
                name: "stateFocusContrastModeOffset",
                attributes: {},
                path: [
                    "state",
                    "focusContrastMode",
                    "offset"
                ]
            }
        },
        invalid: {
            key: "{state.invalid}",
            $type: "string",
            $value: "inset 0 0 0 2px light-dark(#e62323, #e62323)",
            $description: "Invalid state style for form fields (box-shadow).",
            filePath: "packages/theme/tokens/states.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "inset 0 0 0 2px {support.border.warning}",
                $description: "Invalid state style for form fields (box-shadow).",
                key: "{state.invalid}"
            },
            name: "stateInvalid",
            attributes: {},
            path: [
                "state",
                "invalid"
            ]
        }
    },
    transition: {
        duration: {
            slow: {
                key: "{transition.duration.slow}",
                $value: "400ms",
                $type: "duration",
                $description: "Långsam övergång. 400ms. Används för större layoutförändringar som sidopaneler och expanderbara sektioner.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "400ms",
                    $type: "duration",
                    $description: "Långsam övergång. 400ms. Används för större layoutförändringar som sidopaneler och expanderbara sektioner.",
                    key: "{transition.duration.slow}"
                },
                name: "transitionDurationSlow",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "slow"
                ]
            },
            normal: {
                key: "{transition.duration.normal}",
                $value: "300ms",
                $type: "duration",
                $description: "Normal övergångshastighet. 300ms. Standardval för de flesta animationer.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "300ms",
                    $type: "duration",
                    $description: "Normal övergångshastighet. 300ms. Standardval för de flesta animationer.",
                    key: "{transition.duration.normal}"
                },
                name: "transitionDurationNormal",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "normal"
                ]
            },
            fast: {
                key: "{transition.duration.fast}",
                $value: "250ms",
                $type: "duration",
                $description: "Snabb övergång. 250ms. Används för kortlivade övergångar som tooltips och dropdowns — inte hover.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "250ms",
                    $type: "duration",
                    $description: "Snabb övergång. 250ms. Används för kortlivade övergångar som tooltips och dropdowns — inte hover.",
                    key: "{transition.duration.fast}"
                },
                name: "transitionDurationFast",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "fast"
                ]
            },
            quick: {
                key: "{transition.duration.quick}",
                $value: "150ms",
                $type: "duration",
                $description: "Kort mikroanimation. 150ms. Används för snabba overlay-rörelser som modaler och select-öppningar som är perceptibelt animerade men ändå snabba.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "150ms",
                    $type: "duration",
                    $description: "Kort mikroanimation. 150ms. Används för snabba overlay-rörelser som modaler och select-öppningar som är perceptibelt animerade men ändå snabba.",
                    key: "{transition.duration.quick}"
                },
                name: "transitionDurationQuick",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "quick"
                ]
            },
            instant: {
                key: "{transition.duration.instant}",
                $value: "100ms",
                $type: "duration",
                $description: "Omedelbar återkoppling. 100ms. Används för direkta tillståndsförändringar som hover-bakgrunder och färgövergångar — allt längre upplevs som tröghet.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "100ms",
                    $type: "duration",
                    $description: "Omedelbar återkoppling. 100ms. Används för direkta tillståndsförändringar som hover-bakgrunder och färgövergångar — allt längre upplevs som tröghet.",
                    key: "{transition.duration.instant}"
                },
                name: "transitionDurationInstant",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "instant"
                ]
            }
        },
        timing: {
            easeOut: {
                key: "{transition.timing.easeOut}",
                $value: [
                    0,
                    0,
                    0.58,
                    1
                ],
                $type: "cubicBezier",
                $description: "Decelererar mot slutet. Används för element som glider in i vyn.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: [
                        0,
                        0,
                        0.58,
                        1
                    ],
                    $type: "cubicBezier",
                    $description: "Decelererar mot slutet. Används för element som glider in i vyn.",
                    key: "{transition.timing.easeOut}"
                },
                name: "transitionTimingEaseOut",
                attributes: {},
                path: [
                    "transition",
                    "timing",
                    "easeOut"
                ]
            },
            easeIn: {
                key: "{transition.timing.easeIn}",
                $value: [
                    0.42,
                    0,
                    1,
                    1
                ],
                $type: "cubicBezier",
                $description: "Accelererar mot slutet. Används för element som lämnar vyn.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: [
                        0.42,
                        0,
                        1,
                        1
                    ],
                    $type: "cubicBezier",
                    $description: "Accelererar mot slutet. Används för element som lämnar vyn.",
                    key: "{transition.timing.easeIn}"
                },
                name: "transitionTimingEaseIn",
                attributes: {},
                path: [
                    "transition",
                    "timing",
                    "easeIn"
                ]
            },
            easeInOut: {
                key: "{transition.timing.easeInOut}",
                $value: [
                    0.42,
                    0,
                    0.58,
                    1
                ],
                $type: "cubicBezier",
                $description: "Accelererar sedan decelererar symmetriskt. Används för element som rör sig mellan två positioner på skärmen.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: [
                        0.42,
                        0,
                        0.58,
                        1
                    ],
                    $type: "cubicBezier",
                    $description: "Accelererar sedan decelererar symmetriskt. Används för element som rör sig mellan två positioner på skärmen.",
                    key: "{transition.timing.easeInOut}"
                },
                name: "transitionTimingEaseInOut",
                attributes: {},
                path: [
                    "transition",
                    "timing",
                    "easeInOut"
                ]
            }
        },
        panel: {
            collapse: {
                key: "{transition.panel.collapse}",
                $value: {
                    delay: "0ms",
                    duration: "300ms",
                    timingFunction: [
                        0,
                        0,
                        0.58,
                        1
                    ]
                },
                $type: "transition",
                $description: "Komprimerar en panel med easeOut-timing. Används i Accordion och expanderbara ytor.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: {
                        delay: "0ms",
                        duration: "{transition.duration.normal}",
                        timingFunction: "{transition.timing.easeOut}"
                    },
                    $type: "transition",
                    $description: "Komprimerar en panel med easeOut-timing. Används i Accordion och expanderbara ytor.",
                    key: "{transition.panel.collapse}"
                },
                name: "transitionPanelCollapse",
                attributes: {},
                path: [
                    "transition",
                    "panel",
                    "collapse"
                ]
            },
            expand: {
                key: "{transition.panel.expand}",
                $value: {
                    delay: "0ms",
                    duration: "300ms",
                    timingFunction: [
                        0.42,
                        0,
                        1,
                        1
                    ]
                },
                $type: "transition",
                $description: "Expanderar en panel med easeIn-timing. Används i Accordion och expanderbara ytor.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: {
                        delay: "0ms",
                        duration: "{transition.duration.normal}",
                        timingFunction: "{transition.timing.easeIn}"
                    },
                    $type: "transition",
                    $description: "Expanderar en panel med easeIn-timing. Används i Accordion och expanderbara ytor.",
                    key: "{transition.panel.expand}"
                },
                name: "transitionPanelExpand",
                attributes: {},
                path: [
                    "transition",
                    "panel",
                    "expand"
                ]
            }
        }
    },
    typography: {
        font: {
            family: {
                key: "{typography.font.family}",
                $type: "fontFamily",
                $value: "Inter, sans-serif",
                $description: "Primär typsnittsfamilj för hela design systemet.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                original: {
                    $type: "fontFamily",
                    $value: "Inter, sans-serif",
                    $description: "Primär typsnittsfamilj för hela design systemet.",
                    key: "{typography.font.family}"
                },
                name: "typographyFontFamily",
                attributes: {},
                path: [
                    "typography",
                    "font",
                    "family"
                ]
            },
            size: {
                10: {
                    key: "{typography.font.size.10}",
                    $value: "0.75rem",
                    $description: "0.75rem / 12px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 0.75,
                            unit: "rem"
                        },
                        $description: "0.75rem / 12px.",
                        $type: "dimension",
                        key: "{typography.font.size.10}"
                    },
                    name: "typographyFontSize10",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "10"
                    ]
                },
                20: {
                    key: "{typography.font.size.20}",
                    $value: "0.875rem",
                    $description: "0.875rem / 14px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 0.875,
                            unit: "rem"
                        },
                        $description: "0.875rem / 14px.",
                        $type: "dimension",
                        key: "{typography.font.size.20}"
                    },
                    name: "typographyFontSize20",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "20"
                    ]
                },
                30: {
                    key: "{typography.font.size.30}",
                    $value: "1rem",
                    $description: "1rem / 16px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1,
                            unit: "rem"
                        },
                        $description: "1rem / 16px.",
                        $type: "dimension",
                        key: "{typography.font.size.30}"
                    },
                    name: "typographyFontSize30",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "30"
                    ]
                },
                40: {
                    key: "{typography.font.size.40}",
                    $value: "1.125rem",
                    $description: "1.125rem / 18px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1.125,
                            unit: "rem"
                        },
                        $description: "1.125rem / 18px.",
                        $type: "dimension",
                        key: "{typography.font.size.40}"
                    },
                    name: "typographyFontSize40",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "40"
                    ]
                },
                50: {
                    key: "{typography.font.size.50}",
                    $value: "1.25rem",
                    $description: "1.25rem / 20px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1.25,
                            unit: "rem"
                        },
                        $description: "1.25rem / 20px.",
                        $type: "dimension",
                        key: "{typography.font.size.50}"
                    },
                    name: "typographyFontSize50",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "50"
                    ]
                },
                60: {
                    key: "{typography.font.size.60}",
                    $value: "1.5rem",
                    $description: "1.5rem / 24px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1.5,
                            unit: "rem"
                        },
                        $description: "1.5rem / 24px.",
                        $type: "dimension",
                        key: "{typography.font.size.60}"
                    },
                    name: "typographyFontSize60",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "60"
                    ]
                },
                70: {
                    key: "{typography.font.size.70}",
                    $value: "1.625rem",
                    $description: "1.625rem / 26px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1.625,
                            unit: "rem"
                        },
                        $description: "1.625rem / 26px.",
                        $type: "dimension",
                        key: "{typography.font.size.70}"
                    },
                    name: "typographyFontSize70",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "70"
                    ]
                },
                80: {
                    key: "{typography.font.size.80}",
                    $value: "2rem",
                    $description: "2rem / 32px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 2,
                            unit: "rem"
                        },
                        $description: "2rem / 32px.",
                        $type: "dimension",
                        key: "{typography.font.size.80}"
                    },
                    name: "typographyFontSize80",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "80"
                    ]
                },
                90: {
                    key: "{typography.font.size.90}",
                    $value: "2.25rem",
                    $description: "2.25rem / 36px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 2.25,
                            unit: "rem"
                        },
                        $description: "2.25rem / 36px.",
                        $type: "dimension",
                        key: "{typography.font.size.90}"
                    },
                    name: "typographyFontSize90",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "90"
                    ]
                },
                100: {
                    key: "{typography.font.size.100}",
                    $value: "2.625rem",
                    $description: "2.625rem / 42px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 2.625,
                            unit: "rem"
                        },
                        $description: "2.625rem / 42px.",
                        $type: "dimension",
                        key: "{typography.font.size.100}"
                    },
                    name: "typographyFontSize100",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "100"
                    ]
                }
            }
        },
        lineHeight: {
            10: {
                key: "{typography.lineHeight.10}",
                $value: "1rem",
                $description: "1rem / 16px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1,
                        unit: "rem"
                    },
                    $description: "1rem / 16px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.10}"
                },
                name: "typographyLineHeight10",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "10"
                ]
            },
            20: {
                key: "{typography.lineHeight.20}",
                $value: "1.125rem",
                $description: "1.125rem / 18px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.125,
                        unit: "rem"
                    },
                    $description: "1.125rem / 18px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.20}"
                },
                name: "typographyLineHeight20",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "20"
                ]
            },
            30: {
                key: "{typography.lineHeight.30}",
                $value: "1.25rem",
                $description: "1.25rem / 20px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.25,
                        unit: "rem"
                    },
                    $description: "1.25rem / 20px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.30}"
                },
                name: "typographyLineHeight30",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "30"
                ]
            },
            40: {
                key: "{typography.lineHeight.40}",
                $value: "1.375rem",
                $description: "1.375rem / 22px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.375,
                        unit: "rem"
                    },
                    $description: "1.375rem / 22px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.40}"
                },
                name: "typographyLineHeight40",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "40"
                ]
            },
            50: {
                key: "{typography.lineHeight.50}",
                $value: "1.5rem",
                $description: "1.5rem / 24px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.5,
                        unit: "rem"
                    },
                    $description: "1.5rem / 24px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.50}"
                },
                name: "typographyLineHeight50",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "50"
                ]
            },
            60: {
                key: "{typography.lineHeight.60}",
                $value: "1.75rem",
                $description: "1.75rem / 28px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.75,
                        unit: "rem"
                    },
                    $description: "1.75rem / 28px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.60}"
                },
                name: "typographyLineHeight60",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "60"
                ]
            },
            70: {
                key: "{typography.lineHeight.70}",
                $value: "2rem",
                $description: "2rem / 32px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 2,
                        unit: "rem"
                    },
                    $description: "2rem / 32px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.70}"
                },
                name: "typographyLineHeight70",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "70"
                ]
            },
            80: {
                key: "{typography.lineHeight.80}",
                $value: "2.25rem",
                $description: "2.25rem / 36px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 2.25,
                        unit: "rem"
                    },
                    $description: "2.25rem / 36px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.80}"
                },
                name: "typographyLineHeight80",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "80"
                ]
            },
            90: {
                key: "{typography.lineHeight.90}",
                $value: "2.5rem",
                $description: "2.5rem / 40px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 2.5,
                        unit: "rem"
                    },
                    $description: "2.5rem / 40px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.90}"
                },
                name: "typographyLineHeight90",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "90"
                ]
            },
            100: {
                key: "{typography.lineHeight.100}",
                $value: "3rem",
                $description: "3rem / 48px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 3,
                        unit: "rem"
                    },
                    $description: "3rem / 48px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.100}"
                },
                name: "typographyLineHeight100",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "100"
                ]
            }
        },
        weight: {
            thin: {
                key: "{typography.weight.thin}",
                $value: 100,
                $description: "100 – Tunnast möjliga vikt.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 100,
                    $description: "100 – Tunnast möjliga vikt.",
                    $type: "fontWeight",
                    key: "{typography.weight.thin}"
                },
                name: "typographyWeightThin",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "thin"
                ]
            },
            extraLight: {
                key: "{typography.weight.extraLight}",
                $value: 200,
                $description: "200 – Extra tunn.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 200,
                    $description: "200 – Extra tunn.",
                    $type: "fontWeight",
                    key: "{typography.weight.extraLight}"
                },
                name: "typographyWeightExtraLight",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "extraLight"
                ]
            },
            light: {
                key: "{typography.weight.light}",
                $value: 300,
                $description: "300 – Tunn.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 300,
                    $description: "300 – Tunn.",
                    $type: "fontWeight",
                    key: "{typography.weight.light}"
                },
                name: "typographyWeightLight",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "light"
                ]
            },
            regular: {
                key: "{typography.weight.regular}",
                $value: 400,
                $description: "400 – Standardvikt för brödtext.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 400,
                    $description: "400 – Standardvikt för brödtext.",
                    $type: "fontWeight",
                    key: "{typography.weight.regular}"
                },
                name: "typographyWeightRegular",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "regular"
                ]
            },
            medium: {
                key: "{typography.weight.medium}",
                $value: 500,
                $description: "500 – Mellantung, för betoning utan fet stil.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 500,
                    $description: "500 – Mellantung, för betoning utan fet stil.",
                    $type: "fontWeight",
                    key: "{typography.weight.medium}"
                },
                name: "typographyWeightMedium",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "medium"
                ]
            },
            semiBold: {
                key: "{typography.weight.semiBold}",
                $value: 600,
                $description: "600 – Halvfet, för underrubriker och etiketter.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 600,
                    $description: "600 – Halvfet, för underrubriker och etiketter.",
                    $type: "fontWeight",
                    key: "{typography.weight.semiBold}"
                },
                name: "typographyWeightSemiBold",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "semiBold"
                ]
            },
            bold: {
                key: "{typography.weight.bold}",
                $value: 700,
                $description: "700 – Fet, för rubriker och framhävning.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 700,
                    $description: "700 – Fet, för rubriker och framhävning.",
                    $type: "fontWeight",
                    key: "{typography.weight.bold}"
                },
                name: "typographyWeightBold",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "bold"
                ]
            },
            extraBold: {
                key: "{typography.weight.extraBold}",
                $value: 800,
                $description: "800 – Extra fet.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 800,
                    $description: "800 – Extra fet.",
                    $type: "fontWeight",
                    key: "{typography.weight.extraBold}"
                },
                name: "typographyWeightExtraBold",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "extraBold"
                ]
            },
            black: {
                key: "{typography.weight.black}",
                $value: 900,
                $description: "900 – Tyngsta möjliga vikt.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 900,
                    $description: "900 – Tyngsta möjliga vikt.",
                    $type: "fontWeight",
                    key: "{typography.weight.black}"
                },
                name: "typographyWeightBlack",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "black"
                ]
            }
        },
        body: {
            key: "{typography.body}",
            $type: "typography",
            $description: "Standardtypografi för brödtext. Används i löptext, listor och stycken.",
            $value: {
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: "1.25rem"
            },
            filePath: "packages/theme/tokens/typography.json",
            isSource: true,
            original: {
                $type: "typography",
                $description: "Standardtypografi för brödtext. Används i löptext, listor och stycken.",
                $value: {
                    fontFamily: "{typography.font.family}",
                    fontSize: "{typography.font.size.30}",
                    fontWeight: "{typography.weight.regular}",
                    lineHeight: "{typography.lineHeight.30}"
                },
                key: "{typography.body}"
            },
            name: "typographyBody",
            attributes: {},
            path: [
                "typography",
                "body"
            ]
        },
        "body-small": {
            key: "{typography.body-small}",
            $type: "typography",
            $description: "Liten brödtextstil. Används för kompakt text i t.ex. tabeller och listor.",
            $value: {
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 400,
                lineHeight: "1.125rem"
            },
            filePath: "packages/theme/tokens/typography.json",
            isSource: true,
            original: {
                $type: "typography",
                $description: "Liten brödtextstil. Används för kompakt text i t.ex. tabeller och listor.",
                $value: {
                    fontFamily: "{typography.font.family}",
                    fontSize: "{typography.font.size.20}",
                    fontWeight: "{typography.weight.regular}",
                    lineHeight: "{typography.lineHeight.20}"
                },
                key: "{typography.body-small}"
            },
            name: "typographyBodySmall",
            attributes: {},
            path: [
                "typography",
                "body-small"
            ]
        },
        description: {
            key: "{typography.description}",
            $type: "typography",
            $description: "Beskrivningstext, t.ex. för hjälptexter och ledtexter i formulär.",
            $value: {
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 400,
                lineHeight: "1.125rem"
            },
            filePath: "packages/theme/tokens/typography.json",
            isSource: true,
            original: {
                $type: "typography",
                $description: "Beskrivningstext, t.ex. för hjälptexter och ledtexter i formulär.",
                $value: {
                    fontFamily: "{typography.font.family}",
                    fontSize: "{typography.font.size.20}",
                    fontWeight: "{typography.weight.regular}",
                    lineHeight: "{typography.lineHeight.20}"
                },
                key: "{typography.description}"
            },
            name: "typographyDescription",
            attributes: {},
            path: [
                "typography",
                "description"
            ]
        },
        "description-small": {
            key: "{typography.description-small}",
            $type: "typography",
            $description: "Liten beskrivningstext, t.ex. för felmeddelanden och teckenräknare i formulär.",
            $value: {
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 400,
                lineHeight: "1rem"
            },
            filePath: "packages/theme/tokens/typography.json",
            isSource: true,
            original: {
                $type: "typography",
                $description: "Liten beskrivningstext, t.ex. för felmeddelanden och teckenräknare i formulär.",
                $value: {
                    fontFamily: "{typography.font.family}",
                    fontSize: "{typography.font.size.10}",
                    fontWeight: "{typography.weight.regular}",
                    lineHeight: "{typography.lineHeight.10}"
                },
                key: "{typography.description-small}"
            },
            name: "typographyDescriptionSmall",
            attributes: {},
            path: [
                "typography",
                "description-small"
            ]
        }
    },
    zIndex: {
        base: {
            key: "{zIndex.base}",
            $value: 1,
            $description: "Basnivå för normala element. z-index: 1.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 1,
                $description: "Basnivå för normala element. z-index: 1.",
                $type: "number",
                key: "{zIndex.base}"
            },
            name: "zIndexBase",
            attributes: {},
            path: [
                "zIndex",
                "base"
            ]
        },
        above: {
            key: "{zIndex.above}",
            $value: 10,
            $description: "Placerar element ovanför normala element, t.ex. tooltips i flödet. z-index: 10.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 10,
                $description: "Placerar element ovanför normala element, t.ex. tooltips i flödet. z-index: 10.",
                $type: "number",
                key: "{zIndex.above}"
            },
            name: "zIndexAbove",
            attributes: {},
            path: [
                "zIndex",
                "above"
            ]
        },
        sidebar: {
            key: "{zIndex.sidebar}",
            $value: 500,
            $description: "Z-index för sidopaneler och navigationsdrawers. z-index: 500.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 500,
                $description: "Z-index för sidopaneler och navigationsdrawers. z-index: 500.",
                $type: "number",
                key: "{zIndex.sidebar}"
            },
            name: "zIndexSidebar",
            attributes: {},
            path: [
                "zIndex",
                "sidebar"
            ]
        },
        modal: {
            key: "{zIndex.modal}",
            $value: 1000,
            $description: "Z-index för modaler och dialoger. z-index: 1000.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 1000,
                $description: "Z-index för modaler och dialoger. z-index: 1000.",
                $type: "number",
                key: "{zIndex.modal}"
            },
            name: "zIndexModal",
            attributes: {},
            path: [
                "zIndex",
                "modal"
            ]
        },
        toast: {
            key: "{zIndex.toast}",
            $value: 1100,
            $description: "Z-index för toast-notifikationer, ovanför modaler. z-index: 1100.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 1100,
                $description: "Z-index för toast-notifikationer, ovanför modaler. z-index: 1100.",
                $type: "number",
                key: "{zIndex.toast}"
            },
            name: "zIndexToast",
            attributes: {},
            path: [
                "zIndex",
                "toast"
            ]
        },
        skipToContent: {
            key: "{zIndex.skipToContent}",
            $value: 1200,
            $description: "Z-index för 'hoppa till innehåll'-länken för tillgänglighet, alltid överst. z-index: 1200.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 1200,
                $description: "Z-index för 'hoppa till innehåll'-länken för tillgänglighet, alltid överst. z-index: 1200.",
                $type: "number",
                key: "{zIndex.skipToContent}"
            },
            name: "zIndexSkipToContent",
            attributes: {},
            path: [
                "zIndex",
                "skipToContent"
            ]
        }
    }
});

;// CONCATENATED MODULE: ./packages/theme/src/lib/style-dictionary-dist/variables.js
/**
 * Do not edit directly, this file was auto-generated.
 */ const base10 = "0.125rem";
const base15 = "0.188rem";
const base20 = "0.25rem";
const base30 = "0.375rem";
const base40 = "0.5rem";
const base50 = "0.625rem";
const base60 = "0.75rem";
const base70 = "0.875rem";
const base75 = "0.938rem";
const base80 = "1rem";
const base90 = "1.25rem";
const base100 = "1.5rem";
const base110 = "1.75rem";
const base120 = "2rem";
const base130 = "2.5rem";
const base140 = "2.75rem";
const base150 = "3rem";
const base00 = "0rem";
const base05 = "0.063rem";
const windowSizesSm = "480px"; // Liten skärmstorlek. 480px.
const windowSizesMd = "768px"; // Mellanstor skärmstorlek. 768px.
const windowSizesLg = "1024px"; // Stor skärmstorlek. 1024px.
const windowSizesXl = "1280px"; // Extra stor skärmstorlek. 1280px.
const breakpointsXs = "(max-width: calc(480px - 1px))"; // Extra liten skärm. Upp till 479px (max-width).
const breakpointsSm = "(min-width: 480px)"; // Liten skärm och uppåt. Från 480px (min-width).
const breakpointsMd = "(min-width: 768px)"; // Mellanstor skärm och uppåt. Från 768px (min-width).
const breakpointsLg = "(min-width: 1024px)"; // Stor skärm och uppåt. Från 1024px (min-width).
const breakpointsXl = "(min-width: 1280px)"; // Extra stor skärm och uppåt. Från 1280px (min-width).
const buttonBackgroundPrimaryBase = "light-dark(#143c50, #2e7ca5)"; // Färg på primärknapp
const buttonBackgroundPrimaryHover = "light-dark(#25607f, #25607f)"; // Hover state på primärknapp
const buttonBackgroundPrimaryActive = "light-dark(#2e7ca5, #143c50)"; // Active state för primärknapp
const buttonBackgroundSecondaryBase = "transparent"; // Färg på sekundärknapp
const buttonBackgroundSecondaryHover = "light-dark(#0000000d, #ffffff21)"; // Hover state på sekundärknapp
const buttonBackgroundSecondaryActive = "light-dark(#0000001a, #ffffff26)"; // Active state för sekundärknapp
const buttonBackgroundTertiaryHover = "light-dark(#0000000d, #ffffff21)"; // Hover state för tertiär knapp
const buttonBackgroundTertiaryActive = "light-dark(#0000001a, #ffffff26)"; // Active state för tertiär knapp
const buttonBackgroundDangerBase = "light-dark(#e62323, #e62323)"; // Färg på danger knapp
const buttonBackgroundDangerHover = "light-dark(#bc1d1d, #bc1d1d)"; // Hover state för danger knapp
const buttonBackgroundDangerActive = "light-dark(#7d1313, #7d1313)"; // Active state för danger knapp
const buttonBackgroundDisabled = "light-dark(#0000000d,#ffffff21)"; // Disabled state för knappar
const buttonBorderSecondary = "light-dark(#143c50, #f2f2f2)"; // Kantfärg för sekundärknapp
const buttonIconHover = "light-dark(#0000000d, #ffffff21)"; // Hover state för ikonknappar
const buttonIconActive = "light-dark(#00000033, #ffffff33)"; // Active state för ikoner
const colorBlackBase = "#000"; // Black
const colorBlackHover = "#0d0d0d"; // Black hover
const colorBlackOpacity5 = "#0000000d"; // Black with 5% opacity
const colorBlackOpacity10 = "#0000001a"; // Black with 10% opacity
const colorWhiteBase = "#fff"; // White
const colorWhiteHover = "#e6e6e6"; // White hover
const colorWhiteOpacity13 = "#ffffff21"; // White with 13% opacity
const colorWhiteOpacity15 = "#ffffff26"; // White with 15% opacity
const colorGray10 = "#f2f2f2";
const colorGray20 = "#e6e6e6";
const colorGray30 = "#d9d9d9";
const colorGray40 = "#ccc";
const colorGray50 = "#bfbfbf";
const colorGray60 = "#b3b3b3";
const colorGray70 = "#a6a6a6";
const colorGray80 = "#999";
const colorGray90 = "#8c8c8c";
const colorGray100 = "#808080";
const colorGray110 = "#737373";
const colorGray120 = "#666";
const colorGray130 = "#5d5d5d";
const colorGray140 = "#525252";
const colorGray150 = "#474747";
const colorGray160 = "#383838";
const colorGray170 = "#333";
const colorGray180 = "#262626";
const colorGray190 = "#212121";
const colorGray200 = "#171717";
const colorBlue10 = "#eaf2f6";
const colorBlue20 = "#d5e5ed";
const colorBlue40 = "#abcbdb";
const colorBlue50 = "#94BCD1";
const colorBlue60 = "#82b0c9";
const colorBlue70 = "#6CA3C0";
const colorBlue80 = "#5897b8";
const colorBlue90 = "#4289ad";
const colorBlue100 = "#2e7ca5";
const colorBlue110 = "#2C7399";
const colorBlue120 = "#29698C";
const colorBlue130 = "#25607f";
const colorBlue150 = "#143c50";
const colorPurple80 = "#b46ab4";
const colorPurple110 = "#954b95";
const colorRed100 = "#b90835";
const colorOrange100 = "oklch(0.66 0.18 45)";
const colorSignalBlue10 = "#eaf2f6";
const colorSignalBlue20 = "#d5e5ed";
const colorSignalBlue100 = "#06c";
const colorSignalBlue170 = "#162b33";
const colorSignalBlue180 = "#112127";
const colorSignalGreen20 = "#d5f2d9";
const colorSignalGreen30 = "#bae5c5";
const colorSignalGreen100 = "#008d3c";
const colorSignalGreen150 = "#194B33";
const colorSignalGreen170 = "#163328";
const colorSignalGreen180 = "#112722";
const colorSignalYellow10 = "#fff8e2";
const colorSignalYellow20 = "#fff1cd";
const colorSignalYellow30 = "#ffeab8";
const colorSignalYellow40 = "#ffe3a3";
const colorSignalYellow50 = "#ffdc8b";
const colorSignalYellow60 = "#ffd47b";
const colorSignalYellow70 = "#fdcd5d";
const colorSignalYellow80 = "#fbc640";
const colorSignalYellow90 = "#fabf1b";
const colorSignalYellow100 = "#fab900";
const colorSignalYellow110 = "#daa105";
const colorSignalYellow120 = "#bd8c1e";
const colorSignalYellow130 = "#a17927";
const colorSignalYellow140 = "#88672a";
const colorSignalYellow150 = "#70562b";
const colorSignalYellow160 = "#5a4629";
const colorSignalYellow170 = "#453826";
const colorSignalYellow180 = "#322a20";
const colorSignalYellow190 = "#201c18";
const colorSignalYellow200 = "#0f0e0e";
const colorSignalRed10 = "#ffefef";
const colorSignalRed20 = "#ffdfdf";
const colorSignalRed30 = "#fcc8c8";
const colorSignalRed40 = "#f9b0b0";
const colorSignalRed50 = "#f69999";
const colorSignalRed60 = "#f38181";
const colorSignalRed70 = "#ef6a6a";
const colorSignalRed80 = "#EC5252";
const colorSignalRed90 = "#e93b3b";
const colorSignalRed100 = "#e62323";
const colorSignalRed110 = "#d12020";
const colorSignalRed120 = "#bc1d1d";
const colorSignalRed130 = "#a71919";
const colorSignalRed140 = "#921616";
const colorSignalRed150 = "#7d1313";
const colorSignalRed160 = "#691010";
const colorSignalRed170 = "#540d0d";
const colorSignalRed180 = "#3f0a0a";
const colorSignalRed190 = "#2a0606";
const colorSignalRed200 = "#150303";
const colorSky20 = "#cde6f3";
const colorSky60 = "#4a95df";
const colorSky180 = "#101037";
const colorMint20 = "#d5f2d9";
const colorMint60 = "#75b47d";
const colorMint180 = "#07270b";
const colorCream20 = "#fff5db";
const colorCream60 = "#ecbe4a";
const colorCream180 = "#2c2719";
const colorTeal20 = "#cdf2f2";
const colorTeal60 = "#43bcbc";
const colorTeal180 = "#0d2c2c";
const colorLagoon20 = "#d2daf9";
const colorLagoon60 = "#7088e0";
const colorLagoon180 = "#0a1332";
const colorLavender20 = "#f6d0f9";
const colorLavender60 = "#b77dbc";
const colorLavender180 = "#391c3b";
const colorPeach20 = "#ffe6d9";
const colorPeach60 = "#e87031";
const colorPeach180 = "#421d0a";
const colorPippin20 = "#ffe0e0";
const colorPippin60 = "#f17575";
const colorPippin180 = "#431919";
const spacing10 = "0.125rem"; // @deprecated Use space.10 (--midas-space-10) instead
const spacing20 = "0.25rem"; // @deprecated Use space.xsmall (--midas-space-xsmall) instead
const spacing30 = "0.5rem"; // @deprecated Use space.small (--midas-space-small) instead
const spacing40 = "0.75rem"; // @deprecated Use space.60 (--midas-space-60) instead
const spacing50 = "1rem"; // @deprecated Use space.medium (--midas-space-medium) instead
const spacing60 = "1.5rem"; // @deprecated Use space.large (--midas-space-large) instead
const spacing70 = "2rem"; // @deprecated Use space.xlarge (--midas-space-xlarge) instead
const spacing80 = "2.5rem"; // @deprecated Use space.130 (--midas-space-130) instead
const spacing90 = "3rem"; // @deprecated Use space.150 (--midas-space-150) instead
const spacingXsmall = "0.25rem"; // @deprecated Use space.xsmall (--midas-space-xsmall) instead
const spacingSmall = "0.5rem"; // @deprecated Use space.small (--midas-space-small) instead
const spacingMedium = "1rem"; // @deprecated Use space.medium (--midas-space-medium) instead
const spacingLarge = "1.5rem"; // @deprecated Use space.large (--midas-space-large) instead
const spacingXlarge = "2rem"; // @deprecated Use space.xlarge (--midas-space-xlarge) instead
const size10 = "0.125rem"; // @deprecated Use base.10 (--midas-base-10) instead
const size15 = "0.188rem"; // @deprecated Use base.15 (--midas-base-15) instead
const size20 = "0.25rem"; // @deprecated Use base.20 (--midas-base-20) instead
const size30 = "0.375rem"; // @deprecated Use base.30 (--midas-base-30) instead
const size40 = "0.5rem"; // @deprecated Use base.40 (--midas-base-40) instead
const size50 = "0.625rem"; // @deprecated Use base.50 (--midas-base-50) instead
const size60 = "0.75rem"; // @deprecated Use base.60 (--midas-base-60) instead
const size70 = "0.875rem"; // @deprecated Use base.70 (--midas-base-70) instead
const size75 = "0.938rem"; // @deprecated Use base.75 (--midas-base-75) instead
const size80 = "1rem"; // @deprecated Use base.80 (--midas-base-80) instead
const size90 = "1.25rem"; // @deprecated Use base.90 (--midas-base-90) instead
const size100 = "1.5rem"; // @deprecated Use base.100 (--midas-base-100) instead
const size110 = "1.75rem"; // @deprecated Use base.110 (--midas-base-110) instead
const size120 = "2rem"; // @deprecated Use base.120 (--midas-base-120) instead
const size130 = "2.5rem"; // @deprecated Use base.130 (--midas-base-130) instead
const size140 = "2.75rem"; // @deprecated Use base.140 (--midas-base-140) instead
const size150 = "3rem"; // @deprecated Use base.150 (--midas-base-150) instead
const size00 = "0rem"; // @deprecated Use base.00 (--midas-base-00) instead
const size05 = "0.063rem"; // @deprecated Use base.05 (--midas-base-05) instead
const sizeControlSm = "2.5rem"; // @deprecated Use size.control-md (--midas-size-control-md) instead
const sizeIcon = "1.25rem"; // Standardstorlek för ikoner. 1.25rem / 20px.
const sizeIconSm = "1rem"; // Liten ikonstorlek för kompakta kontexter. 1rem / 16px.
const sizeOption = "2rem"; // Höjd för alternativ i dropdown-listor, t.ex. Select och Combobox. 2rem / 32px.
const sizeControlMd = "2.5rem"; // Medelstor interaktiv kontrollhöjd. 2.5rem / 40px.
const sizeControl = "3rem"; // Standardhöjd för interaktiva kontroller, t.ex. TextField och Button. 3rem / 48px.
const backgroundBase = "light-dark(#fff, #171717)"; // Standardbakgrund för våra applikationer
const backgroundHover = "light-dark(#e6e6e6, #212121)"; // Hoverfärg för bakgrund
const backgroundInverse = "light-dark(#171717, #f2f2f2)"; // Bakgrund med inverterade färger
const layer01Base = "light-dark(#f2f2f2, #262626)"; // Färg för lager som läggs på Background.
const layer01Hover = "light-dark(#e6e6e6, #333)"; // Hover state för layer01
const layer01Selected = "light-dark(#d9d9d9, #383838)"; // Selected state för layer01
const layer01SelectedHover = "light-dark(#ccc, #474747)"; // Hover state för layerSelected01
const layer02Base = "light-dark(#fff, #383838)"; // Färg för lager som läggs på layer 01
const layer02Hover = "light-dark(#e6e6e6, #474747)"; // Hover state för layer02
const layer02Selected = "light-dark(#d9d9d9, #525252)"; // Selected state för layer02
const layer02SelectedHover = "light-dark(#ccc, #5d5d5d)"; // Hover state för layerSelected02
const layerAccent01Base = "light-dark(#d9d9d9, #383838)"; // Accentfärg som används tillsammans med layer 01
const layerAccent01Hover = "light-dark(#ccc, #474747)"; // Hover state för layerAccent01
const layerAccent01Selected = "light-dark(#bfbfbf, #525252)"; // Selected state för layerAccent01
const layerAccent02Base = "light-dark(#d9d9d9, #383838)"; // Accentfärg som används tillsammans med layer 02
const layerAccent02Hover = "light-dark(#ccc, #474747)"; // Hover state för layerAccent02
const layerAccent02Selected = "light-dark(#bfbfbf, #525252)"; // Selected state för layerAccent02
const brandPrimary = "light-dark(#b90835, #b90835)"; // Migrationsverkets primära röda färg
const borderColorPrimary = "light-dark(#171717, #f2f2f2)"; // Kantlinje med hög kontrast
const borderColorSecondary = "light-dark(#737373, #8c8c8c)"; // Kantlinje med medelhög kontrast
const borderColorSubtle = "light-dark(#bfbfbf, #525252)"; // Kantlinje med låg kontrast
const borderColorTertiary = "light-dark(#143c50, #2e7ca5)"; // Primärblå kantlinje
const borderColorDisabled = "light-dark(#bfbfbf, #525252)"; // Kantlinje för disabled state
const borderWidth = "1px";
const field01Base = "light-dark(#f2f2f2, #262626)"; // färg för fält som ligger på Background
const field01Hover = "light-dark(#e6e6e6, #333)"; // Hover state för field01
const field01Active = "light-dark(#d9d9d9, #383838)"; // Active state för field01
const field01Disabled = "light-dark(#f2f2f2, #262626)"; // Disabled state för fält som ligger på Background
const field02Base = "light-dark(#fff, #383838)"; // Färg för fält som ligger på layer 01
const field02Hover = "light-dark(#e6e6e6, #474747)"; // Hover state för field02
const field02Active = "light-dark(#d9d9d9, #525252)"; // Active state för field02
const field02Disabled = "light-dark(#fff, #383838)"; // Disabled state för fält som ligger på layer 01
const skeleton01 = "light-dark(#f2f2f2, #262626)"; // Färg som används när Skeleton ligger på Background
const skeleton02 = "light-dark(#d9d9d9, #383838)"; // Färg som används när Skeleton ligger på Layer 01
const iconPrimary = "light-dark(#171717, #f2f2f2)"; // Primär ikonfärg
const iconSecondary = "light-dark(#525252, #a6a6a6)"; // Sekundär ikonfärg
const iconTertiary = "light-dark(#143c50, #f2f2f2)"; // Tertiär ikonfärg, används för ikoner i tertiary-knappar
const iconInverse = "light-dark(#fff, #171717)"; // Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge
const iconOnColor = "light-dark(#fff, #fff)"; // Ikonfärg på färgade ytor som inte är lager
const iconDisabled = "light-dark(#bfbfbf, #525252)"; // Färg för ikoner som är disabled
const iconSuccess = "light-dark(#008d3c, #008d3c)"; // Ikonfärg för success state
const iconInfo = "light-dark(#06c, #06c)"; // Ikonfärg för informationsikoner
const iconWarning = "light-dark(#e62323, #e62323)"; // Ikonfärg för varningsikoner och invalid state
const iconImportant = "oklch(0.66 0.18 45)"; // Ikonfärg för viktig information
const iconReadOnly = "light-dark(#bfbfbf, #383838)"; // Färg för ikoner som är read-only
const linkEnabled = "light-dark(#29698C, #6CA3C0)"; // Primär länkfärg
const linkHover = "light-dark(#143c50, #94BCD1)"; // Hover state för länkar
const linkPressed = "light-dark(#171717, #abcbdb)"; // Active/pressed state för länkar
const linkVisited = "light-dark(#954b95, #b46ab4)"; // Färg för besökta länkar
const progressBarTrackBackground = "light-dark(#d9d9d9, #383838)"; // Bakgrundsfärg för progress bar track
const progressBarIndicatorBackground = "#008d3c"; // Bakgrundsfärg för progress bar indicator
const supportBorderSuccess = "light-dark(#008d3c, #008d3c)"; // Kantlinje för success-notifikationer
const supportBorderInfo = "light-dark(#06c, #06c)"; // Kantlinje för notifikationer med information
const supportBorderImportant = "oklch(0.66 0.18 45)"; // Kantlinje för notifikationer med viktig information
const supportBorderWarning = "light-dark(#e62323, #e62323)"; // Kantlinje för notifikationer med varningar
const supportBackgroundSuccess = "light-dark(#d5f2d9, #112722)"; // Bakgrund för success-notifikationer
const supportBackgroundSuccessHover = "light-dark(#bae5c5, #163328)"; // Hoverbakgrund för success-notifikationer
const supportBackgroundInfo = "light-dark(#eaf2f6, #112127)"; // Bakgrund för notifikationer med information
const supportBackgroundInfoHover = "light-dark(#d5e5ed, #162b33)"; // Hoverbakgrund för notifikationer med information
const supportBackgroundImportant = "light-dark(#fff8e2, #322a20)"; // Bakgrund för notifikationer med viktig information
const supportBackgroundImportantHover = "light-dark(#fff1cd, #453826)"; // Hoverbakgrund för notifikationer med viktig information
const supportBackgroundWarning = "light-dark(#ffdfdf, #3f0a0a)"; // Bakgrund för notifikationer med varningar
const supportBackgroundWarningHover = "light-dark(#fcc8c8, #540d0d)"; // Hoverbakgrund för notifikationer med varningar
const tagSkyBackground = "light-dark(#cde6f3, #101037)"; // Tag bakgrund blå
const tagSkyBorderColor = "#4a95df"; // Tag kantlinje blå
const tagBlueBackground = "light-dark(#cde6f3, #101037)"; // @deprecated Använd tag.sky istället.
const tagBlueBorderColor = "#4a95df"; // @deprecated Använd tag.sky istället.
const tagMintBackground = "light-dark(#d5f2d9, #07270b)"; // Tag bakgrund grön
const tagMintBorderColor = "#75b47d"; // Tag kantlinje grön
const tagGreenBackground = "light-dark(#d5f2d9, #07270b)"; // @deprecated Använd tag.mint istället.
const tagGreenBorderColor = "#75b47d"; // @deprecated Använd tag.mint istället.
const tagCreamBackground = "light-dark(#fff5db, #2c2719)"; // Tag bakgrund gul
const tagCreamBorderColor = "#ecbe4a"; // Tag kantlinje gul
const tagYellowBackground = "light-dark(#fff5db, #2c2719)"; // @deprecated Använd tag.cream istället.
const tagYellowBorderColor = "#ecbe4a"; // @deprecated Använd tag.cream istället.
const tagTealBackground = "light-dark(#cdf2f2, #0d2c2c)"; // Tag bakgrund blågrön
const tagTealBorderColor = "#43bcbc"; // Tag kantlinje blågrön
const tagLagoonBackground = "light-dark(#d2daf9, #0a1332)"; // Tag bakgrund lagunblå
const tagLagoonBorderColor = "#7088e0"; // Tag kantlinje lagunblå
const tagLagoonblueBackground = "light-dark(#d2daf9, #0a1332)"; // @deprecated Använd tag.lagoon istället.
const tagLagoonblueBorderColor = "#7088e0"; // @deprecated Använd tag.lagoon istället.
const tagLavenderBackground = "light-dark(#f6d0f9, #391c3b)"; // Tag bakgrund lila
const tagLavenderBorderColor = "#b77dbc"; // Tag kantlinje lila
const tagPurpleBackground = "light-dark(#f6d0f9, #391c3b)"; // @deprecated Använd tag.lavender istället.
const tagPurpleBorderColor = "#b77dbc"; // @deprecated Använd tag.lavender istället.
const tagPeachBackground = "light-dark(#ffe6d9, #421d0a)"; // Tag bakgrund orange
const tagPeachBorderColor = "#e87031"; // Tag kantlinje orange
const tagOrangeBackground = "light-dark(#ffe6d9, #421d0a)"; // @deprecated Använd tag.peach istället.
const tagOrangeBorderColor = "#e87031"; // @deprecated Använd tag.peach istället.
const tagPippinBackground = "light-dark(#ffe0e0, #431919)"; // Tag bakgrund röd
const tagPippinBorderColor = "#f17575"; // Tag kantlinje röd
const tagRedBackground = "light-dark(#ffe0e0, #431919)"; // @deprecated Använd tag.pippin istället.
const tagRedBorderColor = "#f17575"; // @deprecated Använd tag.pippin istället.
const textPrimary = "light-dark(#171717, #f2f2f2)"; // Primär textfärg.
const textSecondary = "light-dark(#525252, #a6a6a6)"; // Sekundär textfärg
const textTertiary = "light-dark(#143c50, #f2f2f2)"; // Textfärg på tertiär knapp
const textOnColor = "light-dark(#fff, #fff)"; // Textfärg på färgade bakgrunder som inte är lager
const textInverse = "light-dark(#f2f2f2, #171717)"; // Inverterad textfärg
const textDisabled = "light-dark(#bfbfbf, #525252)"; // Färg för disabled text
const textWarning = "light-dark(#e62323, #EC5252)"; // Färg för felmeddelanden
const textPlaceholder = "light-dark(#a6a6a6, #525252)"; // Färg för platshållare
const textReadOnly = "light-dark(#737373, #999)"; // Färg för read-only state
const badgeBackground = "light-dark(#e62323, #e62323)"; // Bakgrundsfärg för badge
const calendarDateBackgroundHover = "light-dark(#0000001a, #ffffff1a)"; // Hover-bakgrund för datumcell
const calendarDateBackgroundSelected = "light-dark(#143c50, #5897b8)"; // Bakgrund för ett valt datum
const calendarDateBackgroundStartRange = "light-dark(#143c50, #5897b8)"; // Bakgrund för det första datumet i ett intervallval
const calendarDateBackgroundInRange = "light-dark(#d5e5ed, #143c50)"; // Bakgrund för datum som ligger inom ett valt intervall
const calendarDateBackgroundEndRange = "light-dark(#143c50, #5897b8)"; // Bakgrund för det sista datumet i ett intervallval
const logoPrimary = "light-dark(#b90835, #fff)"; // Färg på logotypen
const menuItemBackgroundHover = "light-dark(#e6e6e6, #212121)"; // Bakgrundsfärg för menu vid hover
const menuItemBackgroundSelected = "light-dark(#f2f2f2, #262626)"; // Bakgrundsfärg för aktiv menu
const menuTextSectionHeader = "light-dark(#525252, #a6a6a6)"; // Textfärg för sektionsrubriker i navigationsmenyn
const navigationLinkBackgroundHover = "light-dark(#e6e6e6, #212121)"; // Bakgrundsfärg vid hover
const navigationLinkBackgroundSelected = "light-dark(#f2f2f2, #262626)"; // Bakgrundsfärg för aktiv länk
const navigationLinkBackgroundSelectedHover = "light-dark(#e6e6e6, #212121)"; // Bakgrundsfärg vid hover på aktiv länk
const overlayBackground = "rgba(0 0 0 / 30%)"; // Bakrundsfärg för overlays
const overlayBlur = "blur(2px)"; // Blur för overlays
const cardBackgroundBase = "light-dark(#fff, #262626)"; // Bakrundsfärg för Card
const cardShadow = "0 3px 5px 0 rgba(0, 0, 0, 0.30)"; // Skugga för Card
const panelShadow = "-2px 0px 12px -2px rgba(0, 0, 0, 0.10)"; // Skugga för Panel
const space10 = "0.125rem"; // 0.125rem / 2px.
const space30 = "0.375rem"; // 0.375rem / 6px.
const space50 = "0.625rem"; // 0.625rem / 10px.
const space60 = "0.75rem"; // 0.75rem / 12px.
const space70 = "0.875rem"; // 0.875rem / 14px.
const space75 = "0.938rem"; // 0.938rem / 15px.
const space90 = "1.25rem"; // 1.25rem / 20px.
const space130 = "2.5rem"; // 2.5rem / 40px.
const space150 = "3rem"; // 3rem / 48px.
const spaceXsmall = "0.25rem"; // Extra litet avstånd. 0.25rem / 4px.
const spaceSmall = "0.5rem"; // Litet avstånd. 0.5rem / 8px.
const spaceMedium = "1rem"; // Medelstort avstånd. 1rem / 16px.
const spaceLarge = "1.5rem"; // Stort avstånd. 1.5rem / 24px.
const spaceXlarge = "2rem"; // Extra stort avstånd. 2rem / 32px.
const space05 = "0.063rem"; // 0.063rem / 1px.
const stateFocus = "0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)"; // Focus style used when the component is focused (box-shadow).
const stateFocusInset = "inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)"; // Inset variant of the focus ring (box-shadow inset).
const stateFocusContrastModeOutline = "2px"; // Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.
const stateFocusContrastModeOffset = "2px"; // Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active.
const stateInvalid = "inset 0 0 0 2px light-dark(#e62323, #e62323)"; // Invalid state style for form fields (box-shadow).
const transitionDurationSlow = "400ms"; // Långsam övergång. 400ms. Används för större layoutförändringar som sidopaneler och expanderbara sektioner.
const transitionDurationNormal = "300ms"; // Normal övergångshastighet. 300ms. Standardval för de flesta animationer.
const transitionDurationFast = "250ms"; // Snabb övergång. 250ms. Används för kortlivade övergångar som tooltips och dropdowns — inte hover.
const transitionDurationQuick = "150ms"; // Kort mikroanimation. 150ms. Används för snabba overlay-rörelser som modaler och select-öppningar som är perceptibelt animerade men ändå snabba.
const transitionDurationInstant = "100ms"; // Omedelbar återkoppling. 100ms. Används för direkta tillståndsförändringar som hover-bakgrunder och färgövergångar — allt längre upplevs som tröghet.
const transitionTimingEaseOut = (/* unused pure expression or super */ null && ([
    0,
    0,
    0.58,
    1
])); // Decelererar mot slutet. Används för element som glider in i vyn.
const transitionTimingEaseIn = (/* unused pure expression or super */ null && ([
    0.42,
    0,
    1,
    1
])); // Accelererar mot slutet. Används för element som lämnar vyn.
const transitionTimingEaseInOut = (/* unused pure expression or super */ null && ([
    0.42,
    0,
    0.58,
    1
])); // Accelererar sedan decelererar symmetriskt. Används för element som rör sig mellan två positioner på skärmen.
const transitionPanelCollapse = (/* unused pure expression or super */ null && ({
    delay: "0ms",
    duration: "300ms",
    timingFunction: [
        0,
        0,
        0.58,
        1
    ]
})); // Komprimerar en panel med easeOut-timing. Används i Accordion och expanderbara ytor.
const transitionPanelExpand = (/* unused pure expression or super */ null && ({
    delay: "0ms",
    duration: "300ms",
    timingFunction: [
        0.42,
        0,
        1,
        1
    ]
})); // Expanderar en panel med easeIn-timing. Används i Accordion och expanderbara ytor.
const typographyFontFamily = "Inter, sans-serif"; // Primär typsnittsfamilj för hela design systemet.
const typographyFontSize10 = "0.75rem"; // 0.75rem / 12px.
const typographyFontSize20 = "0.875rem"; // 0.875rem / 14px.
const typographyFontSize30 = "1rem"; // 1rem / 16px.
const typographyFontSize40 = "1.125rem"; // 1.125rem / 18px.
const typographyFontSize50 = "1.25rem"; // 1.25rem / 20px.
const typographyFontSize60 = "1.5rem"; // 1.5rem / 24px.
const typographyFontSize70 = "1.625rem"; // 1.625rem / 26px.
const typographyFontSize80 = "2rem"; // 2rem / 32px.
const typographyFontSize90 = "2.25rem"; // 2.25rem / 36px.
const typographyFontSize100 = "2.625rem"; // 2.625rem / 42px.
const typographyLineHeight10 = "1rem"; // 1rem / 16px.
const typographyLineHeight20 = "1.125rem"; // 1.125rem / 18px.
const typographyLineHeight30 = "1.25rem"; // 1.25rem / 20px.
const typographyLineHeight40 = "1.375rem"; // 1.375rem / 22px.
const typographyLineHeight50 = "1.5rem"; // 1.5rem / 24px.
const typographyLineHeight60 = "1.75rem"; // 1.75rem / 28px.
const typographyLineHeight70 = "2rem"; // 2rem / 32px.
const typographyLineHeight80 = "2.25rem"; // 2.25rem / 36px.
const typographyLineHeight90 = "2.5rem"; // 2.5rem / 40px.
const typographyLineHeight100 = "3rem"; // 3rem / 48px.
const typographyWeightThin = 100; // 100 – Tunnast möjliga vikt.
const typographyWeightExtraLight = 200; // 200 – Extra tunn.
const typographyWeightLight = 300; // 300 – Tunn.
const typographyWeightRegular = 400; // 400 – Standardvikt för brödtext.
const typographyWeightMedium = 500; // 500 – Mellantung, för betoning utan fet stil.
const typographyWeightSemiBold = 600; // 600 – Halvfet, för underrubriker och etiketter.
const typographyWeightBold = 700; // 700 – Fet, för rubriker och framhävning.
const typographyWeightExtraBold = 800; // 800 – Extra fet.
const typographyWeightBlack = 900; // 900 – Tyngsta möjliga vikt.
const typographyBody = (/* unused pure expression or super */ null && ({
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "1.25rem"
})); // Standardtypografi för brödtext. Används i löptext, listor och stycken.
const typographyBodySmall = (/* unused pure expression or super */ null && ({
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.125rem"
})); // Liten brödtextstil. Används för kompakt text i t.ex. tabeller och listor.
const typographyDescription = (/* unused pure expression or super */ null && ({
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.125rem"
})); // Beskrivningstext, t.ex. för hjälptexter och ledtexter i formulär.
const typographyDescriptionSmall = (/* unused pure expression or super */ null && ({
    fontFamily: "Inter, sans-serif",
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: "1rem"
})); // Liten beskrivningstext, t.ex. för felmeddelanden och teckenräknare i formulär.
const zIndexBase = 1; // Basnivå för normala element. z-index: 1.
const zIndexAbove = 10; // Placerar element ovanför normala element, t.ex. tooltips i flödet. z-index: 10.
const zIndexSidebar = 500; // Z-index för sidopaneler och navigationsdrawers. z-index: 500.
const zIndexModal = 1000; // Z-index för modaler och dialoger. z-index: 1000.
const zIndexToast = 1100; // Z-index för toast-notifikationer, ovanför modaler. z-index: 1100.
const zIndexSkipToContent = 1200; // Z-index för 'hoppa till innehåll'-länken för tillgänglighet, alltid överst. z-index: 1200.

;// CONCATENATED MODULE: ./packages/theme/src/lib/index.ts





;// CONCATENATED MODULE: ./packages/theme/src/index.ts



},
398(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K1: () => (/* reexport */ employees)
});

// UNUSED EXPORTS: departments, mockedNow, options, optionsWithSections, findTranslationIssues, statuses, fruit

// EXTERNAL MODULE: ./node_modules/@faker-js/faker/dist/locale/en.js + 2 modules
var en = __webpack_require__(34371);
;// CONCATENATED MODULE: ./tools/test-utils/src/utils.ts
const getRandomElement = (elements)=>elements[Math.floor(Math.random() * elements.length)];

;// CONCATENATED MODULE: ./tools/test-utils/src/data.ts


const departments = [
    'Engineering',
    'Finance',
    'HR',
    'Marketing',
    'Sales'
];
const statuses = [
    'Active',
    'Inactive',
    'Pending'
];
const employees = Array.from({
    length: 32
}, (_, index)=>({
        id: index.toString(),
        firstName: en/* .faker.person.firstName */.a.person.firstName(),
        lastName: en/* .faker.person.lastName */.a.person.lastName(),
        email: en/* .faker.internet.email */.a.internet.email(),
        department: getRandomElement(departments),
        status: getRandomElement(statuses)
    }));
const fruit = [
    {
        id: 'ananas',
        name: 'Ananas',
        description: 'Tropisk frukt med taggigt skal',
        value: 'ananas',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/320px-Pineapple_and_cross_section.jpg',
        category: 'Tropiska frukter'
    },
    {
        id: 'apelsin',
        name: 'Apelsin',
        description: 'Citrusfrukt med orange skal',
        value: 'apelsin',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/320px-Orange-Fruit-Pieces.jpg',
        category: 'Citrusfrukter'
    },
    {
        id: 'aprikos',
        name: 'Aprikos',
        description: 'Stenfrukt med orange färg',
        value: 'aprikos',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apricot_and_cross_section.jpg/320px-Apricot_and_cross_section.jpg',
        category: 'Stenfrukter'
    },
    {
        id: 'avokado',
        name: 'Avokado',
        description: 'Grönsaksfrukt med krämig konsistens',
        value: 'avokado',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Avocado_IMGP1082.jpg/320px-Avocado_IMGP1082.jpg',
        category: 'Exotiska frukter'
    },
    {
        id: 'banan',
        name: 'Banan',
        description: 'Långsmal frukt med gult skal',
        value: 'banan',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/320px-Banana-Single.jpg',
        category: 'Tropiska frukter'
    },
    {
        id: 'björnbär',
        name: 'Björnbär',
        description: 'Små svarta bär',
        value: 'bjornbar',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Blackberries_%28Rubus_fruticosus%29.jpg/320px-Blackberries_%28Rubus_fruticosus%29.jpg',
        category: 'Bär'
    },
    {
        id: 'blåbär',
        name: 'Blåbär',
        description: 'Små blå bär',
        value: 'blabar',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Blueberries.jpg',
        category: 'Bär'
    },
    {
        id: 'carambola',
        name: 'Carambola',
        description: 'Stjärnformad exotisk frukt',
        value: 'carambola',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Averrhoa_carambola_ARS_k5735-7.jpg/160px-Averrhoa_carambola_ARS_k5735-7.jpg',
        category: 'Exotiska frukter'
    },
    {
        id: 'citron',
        name: 'Citron',
        description: 'Citrusfrukt med gult skal',
        value: 'citron',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lemon.jpg/320px-Lemon.jpg',
        category: 'Citrusfrukter'
    },
    {
        id: 'clementin',
        name: 'Clementin',
        description: 'Liten citrusfrukt med löst skal',
        value: 'clementin',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Oh_my_darling.jpg/320px-Oh_my_darling.jpg',
        category: 'Citrusfrukter'
    },
    {
        id: 'drakfrukt',
        name: 'Drakfrukt',
        description: 'Exotisk frukt med rött skal',
        value: 'drakfrukt',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Pitaya_cross_section_ed2.jpg/294px-Pitaya_cross_section_ed2.jpg',
        category: 'Exotiska frukter'
    },
    {
        id: 'granatäpple',
        name: 'Granatäpple',
        description: 'Frukt med många kärnor',
        value: 'granatapple',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Pomegranate_fruit_-_whole_and_piece_with_arils.jpg/320px-Pomegranate_fruit_-_whole_and_piece_with_arils.jpg',
        category: 'Exotiska frukter'
    },
    {
        id: 'grapefrukt',
        name: 'Grapefrukt',
        description: 'Stor citrusfrukt med rosa eller gult kött',
        value: 'grapefrukt',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg/320px-Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg',
        category: 'Citrusfrukter'
    },
    {
        id: 'hallon',
        name: 'Hallon',
        description: 'Röda bär som växer på buskar',
        value: 'hallon',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Raspberries_%28Rubus_idaeus%29.jpg/320px-Raspberries_%28Rubus_idaeus%29.jpg',
        category: 'Bär'
    },
    {
        id: 'jordgubbe',
        name: 'Jordgubbe',
        description: 'Röda bär med frön på utsidan',
        value: 'jordgubbe',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Strawberries.jpg/320px-Strawberries.jpg',
        category: 'Bär'
    },
    {
        id: 'kiwi',
        name: 'Kiwi',
        description: 'Frukt med hårig brun skal och grönt kött',
        value: 'kiwi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/320px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg',
        category: 'Exotiska frukter'
    },
    {
        id: 'kokosnöt',
        name: 'Kokosnöt',
        description: 'Stor nöt med hårt skal',
        value: 'kokosnot',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Coconuts_-_single_and_cracked_open.jpg/320px-Coconuts_-_single_and_cracked_open.jpg',
        category: 'Nötter'
    },
    {
        id: 'körsbär',
        name: 'Körsbär',
        description: 'Små röda stenfrukter',
        value: 'korsbar',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cherry_Stella444.jpg/320px-Cherry_Stella444.jpg',
        category: 'Stenfrukter'
    },
    {
        id: 'lime',
        name: 'Lime',
        description: 'Liten grön citrusfrukt',
        value: 'lime',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Citrus_×aurantiifolia927505341.jpg/320px-Citrus_×aurantiifolia927505341.jpg',
        category: 'Citrusfrukter'
    },
    {
        id: 'litchi',
        name: 'Litchi',
        description: 'Liten frukt med tunt rosa skal',
        value: 'litchi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lychee_fruits_and_seed.jpg/320px-Lychee_fruits_and_seed.jpg',
        category: 'Exotiska frukter'
    },
    {
        id: 'mandarin',
        name: 'Mandarin',
        description: 'Liten orange citrusfrukt',
        value: 'mandarin',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mandarin_Oranges_%28Citrus_Reticulata%29.jpg/320px-Mandarin_Oranges_%28Citrus_Reticulata%29.jpg',
        category: 'Citrusfrukter'
    },
    {
        id: 'mango',
        name: 'Mango',
        description: 'Söt exotisk frukt med stor kärna',
        value: 'mango',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mango_-_single.jpg/320px-Mango_-_single.jpg',
        category: 'Tropiska frukter'
    },
    {
        id: 'melon',
        name: 'Melon',
        description: 'Stor frukt med saftigt kött',
        value: 'melon',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Muskmelon.jpg/320px-Muskmelon.jpg',
        category: 'Meloner'
    },
    {
        id: 'nektarin',
        name: 'Nektarin',
        description: 'Slät variant av persika',
        value: 'nektarin',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Autumn_Red_peaches.jpg/320px-Autumn_Red_peaches.jpg',
        category: 'Stenfrukter'
    },
    {
        id: 'papaya',
        name: 'Papaya',
        description: 'Exotisk frukt med orange kött',
        value: 'papaya',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Papaya_cross_section_BNC.jpg/320px-Papaya_cross_section_BNC.jpg',
        category: 'Tropiska frukter'
    },
    {
        id: 'passionsfrukt',
        name: 'Passionsfrukt',
        description: 'Frukt med många kärnor och syrligt kött',
        value: 'passionsfrukt',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Passion_fruits_-_whole_and_halved.jpg/320px-Passion_fruits_-_whole_and_halved.jpg',
        category: 'Exotiska frukter'
    },
    {
        id: 'persika',
        name: 'Persika',
        description: 'Mjuk stenfrukt med ludet skal',
        value: 'persika',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Autumn_Red_peaches.jpg/320px-Autumn_Red_peaches.jpg',
        category: 'Stenfrukter'
    },
    {
        id: 'physalis',
        name: 'Physalis',
        description: 'Liten frukt som växer i pappershölje',
        value: 'physalis',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Physalis_peruviana_calix_open_close-up.jpg/300px-Physalis_peruviana_calix_open_close-up.jpg',
        category: 'Exotiska frukter'
    },
    {
        id: 'plommon',
        name: 'Plommon',
        description: 'Söt eller syrlig stenfrukt',
        value: 'plommon',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Bluebyrd_plum.jpg/167px-Bluebyrd_plum.jpg',
        category: 'Stenfrukter'
    },
    {
        id: 'päron',
        name: 'Päron',
        description: 'Avlång frukt med smal midja',
        value: 'paron',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/393px-Pears.jpg',
        category: 'Pomefrukter'
    },
    {
        id: 'rambutan',
        name: 'Rambutan',
        description: 'Exotisk frukt med hårig skal',
        value: 'rambutan',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Rambutan_Fruit.jpg',
        category: 'Exotiska frukter'
    },
    {
        id: 'röda vinbär',
        name: 'Röda vinbär',
        description: 'Små röda bär i klasar',
        value: 'roda vinbar',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Hjulsta_koloni_2010h.jpg/256px-Hjulsta_koloni_2010h.jpg',
        category: 'Bär'
    },
    {
        id: 'sharon',
        name: 'Sharon',
        description: 'Persikoliknande frukt med fast kött',
        value: 'sharon',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Diospyros_kaki_-_persimmon_at_Paro_during_LGFC_-_Bhutan_2019_%283%29.jpg',
        category: 'Stenfrukter'
    },
    {
        id: 'stjärnfrukt',
        name: 'Stjärnfrukt',
        description: 'Stjärnformad frukt med syrligt kött',
        value: 'stjarnfrukt',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Carambola_Starfruit.jpg/320px-Carambola_Starfruit.jpg',
        category: 'Exotiska frukter'
    },
    {
        id: 'svarta vinbär',
        name: 'Svarta vinbär',
        description: 'Små svarta bär i klasar',
        value: 'svarta vinbar',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Blackcurrants2.jpg',
        category: 'Bär'
    },
    {
        id: 'vattenmelon',
        name: 'Vattenmelon',
        description: 'Stor frukt med rött, saftigt kött',
        value: 'vattenmelon',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Water_melon_2015.jpg/320px-Water_melon_2015.jpg',
        category: 'Meloner'
    },
    {
        id: 'vindruvor',
        name: 'Vindruvor',
        description: 'Små gröna eller blå frukter i klasar',
        value: 'vindruvor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Thompson_seedless_grapes.JPG/320px-Thompson_seedless_grapes.JPG',
        category: 'Vindruvor'
    },
    {
        id: 'äpple',
        name: 'Äpple',
        description: 'Rund frukt med kärnhus',
        value: 'apple',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg',
        category: 'Pomefrukter'
    }
];

;// CONCATENATED MODULE: ./tools/test-utils/src/fruit.ts

const options = fruit.map((param)=>{
    let { id, name } = param;
    return {
        id,
        name
    };
});
const optionsWithSections = fruit.reduce((categories, currentFruit, index)=>{
    const foundCategory = categories.find((param)=>{
        let { name } = param;
        return name === currentFruit.category;
    });
    if (foundCategory) {
        foundCategory.children.push(currentFruit);
    }
    if (!foundCategory) {
        categories.push({
            children: [
                currentFruit
            ],
            id: index,
            name: currentFruit.category
        });
    }
    return categories;
}, []);

// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/private/string.mjs
var string = __webpack_require__(16006);
;// CONCATENATED MODULE: ./tools/test-utils/src/time.ts

const mockedNow = (0,string/* .parseDate */._U)('2025-05-29');

;// CONCATENATED MODULE: ./tools/test-utils/src/index.ts







},

}]);