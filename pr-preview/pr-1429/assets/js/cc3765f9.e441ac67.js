"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["8924"], {
63523(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_components_file_upload_index_mdx_cc3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-file-upload-index-mdx-cc3.json
var site_docs_components_file_upload_index_mdx_cc3_namespaceObject = JSON.parse('{"id":"components/file-upload/index","title":"Filuppladdning","description":"Filuppladdning med FileField, FileTrigger, DropZone och FileList.","source":"@site/docs/components/file-upload/index.mdx","sourceDirName":"components/file-upload","slug":"/components/file-upload/","permalink":"/pr-preview/pr-1429/components/file-upload/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Filuppladdning","description":"Filuppladdning med FileField, FileTrigger, DropZone och FileList."},"sidebar":"sideBar","previous":{"title":"DateField","permalink":"/pr-preview/pr-1429/components/datefield"},"next":{"title":"DropZone","permalink":"/pr-preview/pr-1429/components/file-upload/dropzone"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/examples/file-upload/FileUploadExamples.tsx + 2 modules
var FileUploadExamples = __webpack_require__(24064);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(28247);
;// CONCATENATED MODULE: ./dist/api/components/FileField.json
var FileField_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"FileField","description":"Wraps a file upload pattern — `FileTrigger`, `DropZone` and `FileList` —\\nwith a label, description and error message.","sourceFile":"packages/components/src/file-field/FileField.tsx","props":{"label":{"defaultValue":null,"description":"The label shown above the upload controls","name":"label","required":true,"parent":{"fileName":"midas/packages/components/src/file-field/FileField.tsx","name":"FileFieldProps"},"declarations":[{"fileName":"midas/packages/components/src/file-field/FileField.tsx","name":"FileFieldProps"}],"type":{"name":"string"}},"description":{"defaultValue":null,"description":"A description shown below the label","name":"description","required":false,"parent":{"fileName":"midas/packages/components/src/file-field/FileField.tsx","name":"FileFieldProps"},"declarations":[{"fileName":"midas/packages/components/src/file-field/FileField.tsx","name":"FileFieldProps"}],"type":{"name":"string","raw":"string"}},"errorMessage":{"defaultValue":null,"description":"Error message shown when `isInvalid` is true","name":"errorMessage","required":false,"parent":{"fileName":"midas/packages/components/src/file-field/FileField.tsx","name":"FileFieldProps"},"declarations":[{"fileName":"midas/packages/components/src/file-field/FileField.tsx","name":"FileFieldProps"}],"type":{"name":"string","raw":"string"}},"isInvalid":{"defaultValue":{"value":"false"},"description":"Marks the field as invalid and shows `errorMessage` below the controls.\\nA composed `DropZone` is marked as invalid too.","name":"isInvalid","required":false,"parent":{"fileName":"midas/packages/components/src/file-field/FileField.tsx","name":"FileFieldProps"},"declarations":[{"fileName":"midas/packages/components/src/file-field/FileField.tsx","name":"FileFieldProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"popover":{"defaultValue":null,"description":"","name":"popover","required":false,"parent":{"fileName":"midas/packages/components/src/file-field/FileField.tsx","name":"FileFieldProps"},"declarations":[{"fileName":"midas/packages/components/src/file-field/FileField.tsx","name":"FileFieldProps"}],"type":{"name":"InfoPopoverProps","raw":"InfoPopoverProps","membersRef":"e8b614cfb149"}}},"types":{"e8b614cfb149":[{"name":"children","type":"ReactNode","description":"An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.","required":true},{"name":"aria-label","type":"string | undefined","description":"An aria-label for the info icon button trigger","required":false}]}}')
;// CONCATENATED MODULE: ./apps/docs/docs/components/file-upload/index.mdx


const frontMatter = {
	title: 'Filuppladdning',
	description: 'Filuppladdning med FileField, FileTrigger, DropZone och FileList.'
};
const contentTitle = undefined;

const assets = {

};






const toc = [{
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Standard",
  "id": "standard",
  "level": 3
}, {
  "value": "Med drag &amp; drop",
  "id": "med-drag--drop",
  "level": 3
}, {
  "value": "Felmeddelande",
  "id": "felmeddelande",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "FileField",
  "id": "filefield",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Filuppladdning skapas genom att kombinera ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/file-upload/file-trigger",
        children: "FileTrigger"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/file-upload/dropzone",
        children: "DropZone"
      }), " och ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/file-upload/file-list",
        children: "FileList"
      }), " inuti en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FileField"
      }), ". Nedan beskrivs mönstret för filuppladdning med dessa komponenter. Se respektive komponent för API-dokumentation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "FileField"
      }), " ger mönstret en etikett, en beskrivning och ett felmeddelande. En ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FileTrigger"
      }), " inuti beskrivs automatiskt av dessa via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aria-describedby"
      }), ", så du behöver inte koppla ihop dem själv. De valda filerna hanterar du själv i ditt eget state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "standard",
      children: "Standard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standardmönstret kombinerar FileTrigger och FileList med en etikett och beskrivning. Knappen i FileTrigger blir automatiskt en sekundärknapp."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Button, FileField, FileList, FileListItem, FileTrigger } from '@midas-ds/components'\nimport { Upload } from 'lucide-react'\nimport React from 'react'\n\nexport const FileListExample = () => {\n  const [files, setFiles] = React.useState<File[]>([])\n\n  const handleSelect = (fileList: FileList | null) => {\n    const selected = fileList ? Array.from(fileList) : []\n    setFiles(prev => {\n      const existingNames = new Set(prev.map(f => f.name))\n      return [...prev, ...selected.filter(f => !existingNames.has(f.name))]\n    })\n  }\n\n  const handleDelete = (name: string) => {\n    setFiles(prev => prev.filter(f => f.name !== name))\n  }\n\n  return (\n    <FileField\n      label='Ladda upp en bild på din favoritfrukt'\n      description='Du kan välja flera om du har många favoritfrukter'\n    >\n      <FileTrigger\n        allowsMultiple\n        onSelect={handleSelect}\n      >\n        <Button icon={Upload}>Välj fil(er)</Button>\n      </FileTrigger>\n      {files.length > 0 && (\n        <FileList aria-label='Valda filer'>\n          {files.map(file => (\n            <FileListItem\n              key={file.name}\n              fileName={file.name}\n              fileSize={`${(file.size / 1024).toFixed(1)} KB`}\n              onDelete={() => handleDelete(file.name)}\n            />\n          ))}\n        </FileList>\n      )}\n    </FileField>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(FileUploadExamples/* .FileListExample */.fQ, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "med-drag--drop",
      children: "Med drag & drop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Genom att kombinera DropZone med FileTrigger och FileList kan användaren dra och släppa filer i en definierad yta."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Button, DropZone, FileField, FileList, FileListItem, FileTrigger, Text } from '@midas-ds/components'\nimport { Upload } from 'lucide-react'\nimport React from 'react'\nimport { DropEvent, isFileDropItem } from 'react-aria'\n\nexport const DropZoneExample = () => {\n  const [files, setFiles] = React.useState<File[]>([])\n\n  const addFiles = (newFiles: File[]) => {\n    setFiles(prev => {\n      const existingNames = new Set(prev.map(f => f.name))\n      return [...prev, ...newFiles.filter(f => !existingNames.has(f.name))]\n    })\n  }\n\n  const handleDrop = async (e: DropEvent) => {\n    const fileItems = e.items.filter(isFileDropItem)\n    addFiles(await Promise.all(fileItems.map(item => item.getFile())))\n  }\n\n  const handleSelect = (fileList: FileList | null) => {\n    if (fileList) addFiles(Array.from(fileList))\n  }\n\n  const handleDelete = (name: string) => {\n    setFiles(prev => prev.filter(f => f.name !== name))\n  }\n\n  return (\n    <FileField\n      label='Ladda upp en bild på din favoritfrukt'\n      description='Du kan välja flera om du har många favoritfrukter'\n    >\n      <DropZone\n        onDrop={handleDrop}\n        aria-label='Välj filer eller dra och släpp filer här'\n      >\n        <Text slot='label'>Välj filer eller dra och släpp filer här</Text>\n        <FileTrigger\n          allowsMultiple\n          onSelect={handleSelect}\n        >\n          <Button icon={Upload}>Välj fil(er)</Button>\n        </FileTrigger>\n      </DropZone>\n      {files.length > 0 && (\n        <FileList aria-label='Valda filer'>\n          {files.map(file => (\n            <FileListItem\n              key={file.name}\n              fileName={file.name}\n              fileSize={`${(file.size / 1024).toFixed(1)} KB`}\n              onDelete={() => handleDelete(file.name)}\n            />\n          ))}\n        </FileList>\n      )}\n    </FileField>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(FileUploadExamples/* .DropZoneExample */.qk, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "felmeddelande",
      children: "Felmeddelande"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sätt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isInvalid"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errorMessage"
      }), " på ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FileField"
      }), " för att visa ett fel, till exempel om användaren väljer fel filtyp. Felmeddelandet visas alltid under kontrollerna och läggs automatiskt till i knappens beskrivning. En ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DropZone"
      }), " inuti markeras också som ogiltig."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<FileField\n  label='Ladda upp en bild på din favoritfrukt'\n  isInvalid={isInvalid}\n  errorMessage='Endast .jpg- och .png-filer tillåts'\n>\n  <DropZone\n    onDrop={handleDrop}\n    aria-label='Välj filer eller dra och släpp filer här'\n  >\n    ...\n  </DropZone>\n</FileField>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Lägg felmeddelandet på ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FileField"
        }), ", inte som en egen ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FieldError"
        }), " inuti ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DropZone"
        }), ". Annars visas det två gånger."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filefield",
      children: "FileField"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: FileField_namespaceObject
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
83497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"fileList":"fileList_v7Yz","fileListItem":"fileListItem_rpF7","row":"row_gaDP","iconSlot":"iconSlot_oazn","progressIcon":"progressIcon_EK3u","ring":"ring_rNJK","successRing":"successRing_Z40C","checkmark":"checkmark_EsEH","successCheckmark":"successCheckmark_oSoO","successIcon":"successIcon_pjAF","errorReveal":"errorReveal_YRb0","fileInfo":"fileInfo_mtqe","fileName":"fileName_qyUR","fileSize":"fileSize_ds3p","deleteButton":"deleteButton_ulZ8"});

},
28247(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// UNUSED EXPORTS: DisplayCompositeTypes

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(5245);
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(11728);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx + 1 modules
var Accordion = __webpack_require__(18003);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx + 1 modules
var AccordionItem = __webpack_require__(69130);
;// CONCATENATED MODULE: ./apps/docs/src/css/propstable.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const propstable_module = ({"accordion":"accordion_M8EQ","propsGridTable":"propsGridTable_luj3","membersTable":"membersTable_K5oi","popover":"popover_gEf7","arrow":"arrow_kUCF"});
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/index.js + 137 modules
var lib = __webpack_require__(24649);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/Lowlight.js + 2 modules
var Lowlight = __webpack_require__(2268);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/common.js + 38 modules
var common = __webpack_require__(14788);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/Pressable.mjs
var Pressable = __webpack_require__(45210);
;// CONCATENATED MODULE: ./apps/docs/src/utils/jsdocLinkToMarkdown.ts
const jsdocLinkToMarkdown = (comment)=>// {@link URL|Text} or {@link URL Text} format (JSDoc style)
    comment.replace(/\{@link\s+([^|\s}]+)\s*\|?\s*([^}]+)\}/g, (match, url, text)=>`[${text.trim()}](${url})`)// Replace @see with "See " at the beginning of lines
    .replace(/^\s*@see\s+/gm, 'See ')// Remove @link tags from the beginning of lines (but keep the markdown link)
    .replace(/^\s*@link\s+/gm, '')// Remove any extra @link tags that might be inline
    .replace(/\s*@link\s+/g, ' ');

;// CONCATENATED MODULE: ./apps/docs/src/components/PropsTable.tsx









/**
 * Generated docs store drill-down members once per file in `doc.types` and
 * refer to them by key. Resolves those references into nested `members`.
 */ function resolveProps(doc) {
    const tables = new Map();
    const resolve = (ref)=>{
        if (!ref) return undefined;
        if (!tables.has(ref)) {
            tables.set(ref, doc.types[ref].map((param)=>{
                let { membersRef, ...member } = param;
                return {
                    ...member,
                    members: resolve(membersRef)
                };
            }));
        }
        return tables.get(ref);
    };
    return Object.fromEntries(Object.entries(doc.props).map((param)=>{
        let [key, prop] = param;
        const { membersRef, value, ...type } = prop.type;
        return [
            key,
            {
                ...prop,
                type: {
                    ...type,
                    value: value?.map((param)=>{
                        let { membersRef, ...entry } = param;
                        return {
                            ...entry,
                            members: resolve(membersRef)
                        };
                    }),
                    members: resolve(membersRef)
                }
            }
        ];
    }));
}
function hasMembers(type) {
    return Array.isArray(type.members) && type.members.length > 0;
}
/** Renders a type name — clickable with drill-down popover if it has members */ const DrillableType = (param)=>{
    let { typeStr, members } = param;
    if (members && members.length > 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* .DialogTrigger */.zM, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Pressable/* .Pressable */.o, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        role: "button",
                        style: {
                            cursor: 'pointer'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                            value: typeStr,
                            inline: true,
                            language: "typescript",
                            markers: []
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
                    style: {
                        maxWidth: 'min(90vw, 800px)'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MembersTable, {
                        members: members
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
        value: typeStr,
        inline: true,
        language: "typescript",
        markers: []
    });
};
const MembersTable = (param)=>{
    let { members } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: propstable_module.membersTable,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Name"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Type"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Description"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                    children: members.map((member)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                        value: `${member.name}${member.required ? '' : '?'}`,
                                        inline: true,
                                        language: "typescript",
                                        markers: []
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DrillableType, {
                                        typeStr: member.type,
                                        members: member.members
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: member.description || '-'
                                })
                            ]
                        }, member.name))
                })
            ]
        })
    });
};
const DisplayCompositeTypes = (param)=>{
    let { props } = param;
    if (hasMembers(props.type)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(DrillableType, {
            typeStr: props.type.name,
            members: props.type.members
        });
    }
    switch(props.type.name){
        case 'enum':
            {
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* .DialogTrigger */.zM, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Pressable/* .Pressable */.o, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                role: "button",
                                style: {
                                    cursor: 'pointer'
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                    value: props.type.raw,
                                    inline: true,
                                    language: "typescript",
                                    markers: []
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "hljs-code",
                                children: props.type.value?.map((r, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            i === 0 ? ' ' : ' | ',
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(DrillableType, {
                                                typeStr: r.value.replace(/"/g, "'"),
                                                members: r.members
                                            })
                                        ]
                                    }, `${r.value}${i}`);
                                })
                            })
                        })
                    ]
                });
            }
        default:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                value: props.type.name,
                inline: true,
                language: "typescript",
                markers: []
            });
    }
};
/**
 * Props table for a component. Import the component's generated API doc in
 * the MDX file and pass it as `doc`:
 *
 * ```mdx
 * import ButtonApi from '@midas-ds/api/components/Button.json'
 *
 * <PropTable doc={ButtonApi} />
 * ```
 */ const PropTable = (param)=>{
    let { doc, defaultOpen = true } = param;
    const props = (0,react.useMemo)(()=>resolveProps(doc), [
        doc
    ]);
    const { events, accessibility, rest } = Object.entries(props).reduce((acc, param)=>{
        let [key, value] = param;
        if (key.startsWith('on')) {
            acc.events[key] = value;
        } else if (key.startsWith('aria-')) {
            acc.accessibility[key] = value;
        } else {
            acc.rest[key] = value;
        }
        return acc;
    }, {
        events: {},
        accessibility: {},
        rest: {}
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* .Accordion */.n, {
        className: propstable_module.accordion,
        allowsMultipleExpanded: true,
        defaultExpandedKeys: defaultOpen ? [
            'props'
        ] : [],
        children: [
            Object.getOwnPropertyNames(rest).length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionItem/* .AccordionItem */.A, {
                id: "props",
                title: "Props",
                className: propstable_module.accordionItem,
                contentBackground: "inherit",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid, {
                    propGroup: rest,
                    props: props
                })
            }),
            Object.getOwnPropertyNames(events).length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionItem/* .AccordionItem */.A, {
                id: "events",
                title: "Events",
                className: propstable_module.accordionItem,
                contentBackground: "inherit",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid, {
                    propGroup: events,
                    props: props,
                    showDefault: false
                })
            }),
            Object.getOwnPropertyNames(accessibility).length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionItem/* .AccordionItem */.A, {
                id: "accessibility",
                title: "Tillg\xe4nglighet",
                className: propstable_module.accordionItem,
                contentBackground: "inherit",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid, {
                    propGroup: accessibility,
                    props: props,
                    showDefault: false
                })
            })
        ]
    });
};
const Grid = (param)=>{
    let { propGroup, props, showDefault = true } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: propstable_module.propsGridTable,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Name"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Type"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: showDefault && 'Default'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Description"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                    children: Object.keys(propGroup).map((key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                    "data-title": "Name",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                            value: key,
                                            inline: true,
                                            language: "typescript",
                                            markers: []
                                        }),
                                        props[key].required && ' *'
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    "data-title": "Type",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DisplayCompositeTypes, {
                                        props: props[key]
                                    })
                                }),
                                showDefault ? /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    "data-title": "Default",
                                    children: props[key].defaultValue ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                        value: props[key].defaultValue.value,
                                        inline: true,
                                        language: "typescript",
                                        markers: []
                                    }) : '-'
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    "data-title": "Description",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* .Markdown */.oz, {
                                        children: jsdocLinkToMarkdown(props[key].description)
                                    })
                                })
                            ]
                        }, key))
                })
            ]
        })
    });
};


},
24064(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fQ: () => (/* binding */ FileListExample),
  ao: () => (/* binding */ ValidatedDropZoneExample),
  qk: () => (/* binding */ DropZoneExample)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./packages/components/src/file-list/FileList.tsx
var FileList = __webpack_require__(54933);
// EXTERNAL MODULE: ./packages/components/src/file-list/FileListItem.tsx + 1 modules
var FileListItem = __webpack_require__(7984);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(79440);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(81582);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(47135);
// EXTERNAL MODULE: ./packages/components/src/file-field/FileFieldContext.ts
var FileFieldContext = __webpack_require__(79589);
;// CONCATENATED MODULE: ./packages/components/src/file-field/FileField.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const FileField_module = ({"fileField":"fileField_TlfS","content":"content_tMTV"});
;// CONCATENATED MODULE: ./packages/components/src/file-field/FileField.tsx
'use client';









/**
 * Wraps a file upload pattern — `FileTrigger`, `DropZone` and `FileList` —
 * with a label, description and error message.
 */ const FileField = (param)=>{
    let { label, description, errorMessage, isInvalid = false, popover, className, children, ...rest } = param;
    const labelId = (0,react.useId)();
    const descriptionId = (0,react.useId)();
    const errorId = (0,react.useId)();
    const showError = isInvalid && !!errorMessage;
    const describedBy = [
        labelId,
        description && descriptionId,
        showError && errorId
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ...rest,
        "data-invalid": isInvalid || undefined,
        className: (0,clsx/* ["default"] */.A)(FileField_module.fileField, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LabelWrapper/* .LabelWrapper */.cR, {
                popover: popover,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label/* .Label */.J, {
                    id: labelId,
                    children: label
                })
            }),
            description && /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                slot: "description",
                id: descriptionId,
                children: description
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FileFieldContext/* .FileFieldContext.Provider */.O.Provider, {
                value: {
                    'aria-describedby': describedBy,
                    isInvalid
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: FileField_module.content,
                    children: children
                })
            }),
            showError && /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                id: errorId,
                isInvalid: true,
                children: errorMessage
            })
        ]
    });
};

// EXTERNAL MODULE: ./packages/components/src/file-trigger/FileTrigger.tsx
var FileTrigger = __webpack_require__(44100);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./packages/components/src/drop-zone/DropZone.tsx + 1 modules
var DropZone = __webpack_require__(39557);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/upload.mjs
var upload = __webpack_require__(21676);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/dnd/utils.mjs
var utils = __webpack_require__(211);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/file-upload/FileUploadExamples.tsx





const useUniqueFiles = ()=>{
    const [files, setFiles] = react.useState([]);
    const addFiles = (newFiles)=>{
        setFiles((oldFiles)=>{
            const existingNames = new Set(oldFiles.map((f)=>f.name));
            return [
                ...oldFiles,
                ...newFiles.filter((f)=>!existingNames.has(f.name))
            ];
        });
    };
    const removeFile = (name)=>{
        setFiles((oldFiles)=>oldFiles.filter((f)=>f.name !== name));
    };
    return {
        files,
        addFiles,
        removeFile
    };
};
const UploadedFiles = (param)=>{
    let { files, onDelete } = param;
    return files.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(FileList/* .FileList */.$, {
        "aria-label": "Valda filer",
        children: files.map((file)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FileListItem/* .FileListItem */.I, {
                fileName: file.name,
                fileSize: `${(file.size / 1024).toFixed(1)} KB`,
                onDelete: ()=>onDelete(file.name)
            }, file.name))
    });
};
const FileListExample = ()=>{
    const { files, addFiles, removeFile } = useUniqueFiles();
    const handleSelect = (fileList)=>{
        if (fileList) addFiles(Array.from(fileList));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(FileField, {
        label: "Ladda upp en bild p\xe5 din favoritfrukt",
        description: "Du kan v\xe4lja flera om du har m\xe5nga favoritfrukter",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FileTrigger/* .FileTrigger */.F, {
                allowsMultiple: true,
                onSelect: handleSelect,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                    icon: upload/* ["default"] */.A,
                    children: "V\xe4lj fil(er)"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadedFiles, {
                files: files,
                onDelete: removeFile
            })
        ]
    });
};
const DropZoneExample = ()=>{
    const { files, addFiles, removeFile } = useUniqueFiles();
    const handleDrop = async (e)=>{
        const fileItems = e.items.filter(utils/* .isFileDropItem */.nH);
        const droppedFiles = await Promise.all(fileItems.map((item)=>item.getFile()));
        addFiles(droppedFiles);
    };
    const handleSelect = (fileList)=>{
        if (fileList) addFiles(Array.from(fileList));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(FileField, {
        label: "Ladda upp en bild p\xe5 din favoritfrukt",
        description: "Du kan v\xe4lja flera om du har m\xe5nga favoritfrukter",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DropZone/* .DropZone */.w, {
                onDrop: handleDrop,
                "aria-label": "V\xe4lj filer eller dra och sl\xe4pp filer h\xe4r",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                        slot: "label",
                        children: "V\xe4lj filer eller dra och sl\xe4pp filer h\xe4r"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FileTrigger/* .FileTrigger */.F, {
                        allowsMultiple: true,
                        onSelect: handleSelect,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                            icon: upload/* ["default"] */.A,
                            children: "V\xe4lj fil(er)"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadedFiles, {
                files: files,
                onDelete: removeFile
            })
        ]
    });
};
const ACCEPTED_FILE_TYPES = [
    'image/jpeg',
    'image/png'
];
const ValidatedDropZoneExample = ()=>{
    const [isInvalid, setIsInvalid] = react.useState(false);
    const validate = (files)=>{
        setIsInvalid(files.some((file)=>!ACCEPTED_FILE_TYPES.includes(file.type)));
    };
    const handleSelect = (fileList)=>{
        if (fileList) validate(Array.from(fileList));
    };
    const handleDrop = async (e)=>{
        const fileItems = e.items.filter(utils/* .isFileDropItem */.nH);
        const droppedFiles = await Promise.all(fileItems.map((item)=>item.getFile()));
        validate(droppedFiles);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: 480
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DropZone/* .DropZone */.w, {
                onDrop: handleDrop,
                isInvalid: isInvalid,
                "aria-label": "Sl\xe4pp filer h\xe4r",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                        slot: "label",
                        children: "Sl\xe4pp filer h\xe4r"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FileTrigger/* .FileTrigger */.F, {
                        acceptedFileTypes: ACCEPTED_FILE_TYPES,
                        onSelect: handleSelect,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* .Button */.$, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(upload/* ["default"] */.A, {
                                    "aria-hidden": true,
                                    size: 20
                                }),
                                "V\xe4lj .jpg- eller .png-filer"
                            ]
                        })
                    })
                ]
            }),
            isInvalid && /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                isInvalid: true,
                children: "Endast .jpg- och .png-filer till\xe5ts"
            })
        ]
    });
};


},
18003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ Accordion)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// CONCATENATED MODULE: ./packages/components/src/accordion/Accordion.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Accordion_module = ({"root":"root_dwc1","contained":"contained_snuo","triggerButton":"triggerButton_v7ly"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(13827);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(52436);
;// CONCATENATED MODULE: ./packages/components/src/accordion/Accordion.tsx
'use client';






/**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */ const Accordion = (param)=>{
    let { children, className, isContained, size = 'large', ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionContext/* .AccordionContext.Provider */.C.Provider, {
        value: {
            isContained,
            size
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Disclosure/* .DisclosureGroup */.Tw, {
            className: (0,clsx/* ["default"] */.A)(Accordion_module.root, isContained ? Accordion_module.contained : Accordion_module.uncontained, className),
            ...props,
            children: children
        })
    });
};


},
52436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  C: () => (AccordionContext)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);

const AccordionContext = (0,react__rspack_import_0.createContext)(undefined);


},
69130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(13827);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
var chevron_down = __webpack_require__(16749);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/accordion/AccordionItem.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const AccordionItem_module = ({"item":"item_VttG","contained":"contained_ub98","medium":"medium_WM8r","success":"success_cpFV","warning":"warning_NxFE","info":"info_suK1","important":"important_n_K6","triggerButton":"triggerButton_En7k","triggerText":"triggerText_VvwO","trigger":"trigger_dCCq","triggerMainContent":"triggerMainContent_WoSV","\t":"\t_YXX_","chevronIcon":"chevronIcon_kSND","statusIcon":"statusIcon_DtWQ","panel":"panel_RCRU","content":"content_EuZw","neutralBackground":"neutralBackground_NTCu","header":"header_kp5y"});
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(72201);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(52436);
// EXTERNAL MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(19573);
;// CONCATENATED MODULE: ./packages/components/src/accordion/AccordionItem.tsx











const AccordionItem = (param)=>{
    let { title, children, className, headingLevel = 'h2', type, contentBackground: contentBackgroundFromProp, hasBackground, size = 'large', isContained: isContainedFromProp, iconAriaLabel, ...props } = param;
    const context = (0,react.useContext)(AccordionContext/* .AccordionContext */.C);
    const isContained = isContainedFromProp ?? context?.isContained ?? false;
    const titleIsReactNode = typeof title === 'object';
    const contentBackground = contentBackgroundFromProp ?? (hasBackground === false ? 'inherit' : 'neutral');
    (0,react.useEffect)(()=>{
        if (type && !isContained) {
            console.warn(`AccordionItem: When 'type' is set, it is recommended to also set 'isContained' to true for visual consistency.`);
        }
    }, [
        type,
        isContained
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Disclosure/* .Disclosure */.EN, {
        ...props,
        className: (0,clsx/* ["default"] */.A)(AccordionItem_module.item, type && isContained && AccordionItem_module[type], (size === 'medium' || context?.size === 'medium') && AccordionItem_module.medium, isContained && AccordionItem_module.contained, className),
        children: (0,utils/* .composeRenderProps */.HW)(children, (children)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: AccordionItem_module.trigger,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* .Button */.$, {
                            className: AccordionItem_module.triggerButton,
                            slot: "trigger",
                            variant: "icon",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* ["default"] */.A, {
                                    size: 20,
                                    className: AccordionItem_module.chevronIcon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: AccordionItem_module.triggerMainContent,
                                    children: titleIsReactNode ? title : /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* .Heading */.D, {
                                        level: 3,
                                        elementType: headingLevel,
                                        className: AccordionItem_module.triggerText,
                                        children: title
                                    })
                                }),
                                type && isContained && /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedbackStatusIcon/* .FeedbackStatusIcon */.$, {
                                    "aria-label": iconAriaLabel,
                                    className: AccordionItem_module.statusIcon,
                                    status: type
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Disclosure/* .DisclosurePanel */.kS, {
                        className: AccordionItem_module.panel,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (0,clsx/* ["default"] */.A)(AccordionItem_module.content, contentBackground === 'neutral' && AccordionItem_module.neutralBackground),
                            children: children
                        })
                    })
                ]
            }))
    });
};


},
19573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ FeedbackStatusIcon)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.mjs
var check = __webpack_require__(53729);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.mjs
var info = __webpack_require__(50643);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/flag.mjs
var flag = __webpack_require__(4329);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs
var triangle_alert = __webpack_require__(63626);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/common/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"ok":"okay","information":"information","importantInformation":"important information","warning":"warning"},"sv":{"ok":"okej","information":"information","importantInformation":"viktig information","warning":"varning"}}')
;// CONCATENATED MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx




const icons = {
    success: check/* ["default"] */.A,
    info: info/* ["default"] */.A,
    important: flag/* ["default"] */.A,
    warning: triangle_alert/* ["default"] */.A
};
const labels = {
    success: 'ok',
    info: 'information',
    important: 'importantInformation',
    warning: 'warning'
};
const FeedbackStatusIcon = (param)=>{
    let { status, 'aria-label': ariaLabel, size = 20, ...rest } = param;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const Icon = icons[status];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
        "aria-label": ariaLabel || strings.format(labels[status]),
        size: size,
        ...rest
    });
};


},
39557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ DropZone_DropZone)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/DropZone.mjs + 39 modules
var DropZone = __webpack_require__(31820);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/FieldError.mjs
var FieldError = __webpack_require__(3728);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./packages/components/src/file-field/FileFieldContext.ts
var FileFieldContext = __webpack_require__(79589);
;// CONCATENATED MODULE: ./packages/components/src/drop-zone/DropZone.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const DropZone_module = ({"dropZone":"dropZone_Rdey"});
;// CONCATENATED MODULE: ./packages/components/src/drop-zone/DropZone.tsx
'use client';






/**
 * A drop zone is an area into which one or multiple objects can be dragged
 * and dropped. Content is fully composable — pair it with `FileTrigger` for
 * file uploads, or use it for any other drag-and-drop interaction.
 *
 * @interface DropZoneProps
 *
 * @see {@link https://react-spectrum.adobe.com/react-aria/DropZone.html|React Aria DropZone}
 */ const DropZone_DropZone = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { className, isInvalid: isInvalidProp, children, ...rest } = param;
    const fileField = (0,FileFieldContext/* .useFileFieldContext */.v)();
    const isInvalid = isInvalidProp ?? fileField?.isInvalid ?? false;
    const validation = isInvalid ? {
        isInvalid: true,
        validationErrors: [],
        validationDetails: {}
    } : null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DropZone/* .DropZone */.w, {
        ...rest,
        ref: ref,
        "data-invalid": isInvalid || undefined,
        className: (0,clsx/* ["default"] */.A)(DropZone_module.dropZone, className),
        children: (0,utils/* .composeRenderProps */.HW)(children, (children)=>// DropZone has no concept of form validation on its own — provide
            // FieldErrorContext so a composed `FieldError` renders through its
            // context-aware path instead of its plain-`Text` fallback, which
            // would otherwise collide with the `slot="label"` id DropZone
            // assigns to any `Text` child for its accessible name.
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldErrorContext.Provider */.C.Provider, {
                value: validation,
                children: children
            }))
    });
});
DropZone_DropZone.displayName = 'DropZone';


},
47135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

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
            id: props.id,
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
79589(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  O: () => (FileFieldContext),
  v: () => (useFileFieldContext)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);

const FileFieldContext = (0,react__rspack_import_0.createContext)(null);
const useFileFieldContext = ()=>(0,react__rspack_import_0.useContext)(FileFieldContext);


},
54933(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  $: () => (FileList)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react_aria__rspack_import_3 = __webpack_require__(46686);
/* import */ var _utils_clsx__rspack_import_4 = __webpack_require__(18496);
/* import */ var _FileList_module_css__rspack_import_2 = __webpack_require__(83497);
'use client';





const FileList = (param)=>{
    let { className, children, ...props } = param;
    const listRef = (0,react__rspack_import_1.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria__rspack_import_3/* .FocusScope */.n1, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
            ...props,
            ref: listRef,
            tabIndex: -1,
            className: (0,_utils_clsx__rspack_import_4/* ["default"] */.A)(_FileList_module_css__rspack_import_2/* ["default"].fileList */.A.fileList, className),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FocusGuard, {
                    containerRef: listRef
                }),
                children
            ]
        })
    });
};
/**
 * Renderless. Watches the DOM directly (not React's render cycle, which
 * batches unpredictably) for a row disappearing while it held focus, and
 * moves focus to a sibling's action button instead of letting it fall
 * through to `<body>` — only once a removal has actually happened, so it
 * never second-guesses focus a consumer already set (e.g. after a delete
 * that failed and left the row in place, focus just stays where it was).
 * Falls back to the list itself if the removed row was the last one.
 */ const FocusGuard = (param)=>{
    let { containerRef } = param;
    const focusManager = (0,react_aria__rspack_import_3/* .useFocusManager */.H8)();
    const focusManagerRef = (0,react__rspack_import_1.useRef)(focusManager);
    (0,react__rspack_import_1.useEffect)(()=>{
        focusManagerRef.current = focusManager;
    });
    (0,react__rspack_import_1.useEffect)(()=>{
        const container = containerRef.current;
        if (!container) return;
        const observer = new MutationObserver((mutations)=>{
            const hadRemoval = mutations.some((m)=>m.removedNodes.length > 0);
            if (!hadRemoval) return;
            if (document.activeElement !== document.body) return;
            if (!focusManagerRef.current?.focusFirst({
                tabbable: true
            })) {
                container.focus();
            }
        });
        observer.observe(container, {
            childList: true
        });
        return ()=>observer.disconnect();
    }, [
        containerRef
    ]);
    return null;
};


},
7984(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* binding */ FileListItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.mjs
var x = __webpack_require__(69237);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trash.mjs
var trash = __webpack_require__(81595);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(81013);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./packages/components/src/progress-bar/ProgressBar.tsx + 1 modules
var ProgressBar = __webpack_require__(14103);
// EXTERNAL MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(19573);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(47135);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./packages/components/src/file-list/FileList.module.css
var FileList_module = __webpack_require__(83497);
;// CONCATENATED MODULE: ./packages/components/src/file-list/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"removeFile":"Remove","cancelUpload":"Cancel","uploading":"Uploading","uploadComplete":"Upload complete","uploadFailed":"Upload failed"},"sv":{"removeFile":"Ta bort","cancelUpload":"Avbryt","uploading":"Laddar upp","uploadComplete":"Uppladdning klar","uploadFailed":"Uppladdning misslyckades"}}')
;// CONCATENATED MODULE: ./packages/components/src/file-list/FileListItem.tsx
'use client';












const FileListItem = (param)=>{
    let { fileName, fileSize, status = 'idle', progress, errorMessage, onCancel, onDelete, className } = param;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const isUploading = status === 'uploading';
    const isSuccess = status === 'success';
    const isError = status === 'error';
    const hasError = isError && !!errorMessage;
    const errorId = (0,react.useId)();
    const stateId = (0,react.useId)();
    // Read first in the row, before the file name and the button, the same
    // place the progress bar has while uploading
    const stateText = isSuccess ? strings.format('uploadComplete') : isError ? strings.format('uploadFailed') : undefined;
    const buttonDescription = [
        stateText && stateId,
        hasError && errorId
    ].filter(Boolean).join(' ') || undefined;
    const onPress = isUploading ? onCancel ?? onDelete : onDelete;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        className: (0,clsx/* ["default"] */.A)(FileList_module/* ["default"].fileListItem */.A.fileListItem, className),
        "data-status": status,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: FileList_module/* ["default"].row */.A.row,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: FileList_module/* ["default"].iconSlot */.A.iconSlot,
                        children: [
                            isUploading && /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressBar/* .ProgressBar */.z, {
                                shape: "circular",
                                small: true,
                                value: progress,
                                isIndeterminate: progress === undefined,
                                "aria-label": `${strings.format('uploading')} ${fileName}`,
                                className: FileList_module/* ["default"].progressIcon */.A.progressIcon
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: FileList_module/* ["default"].ring */.A.ring,
                                "aria-hidden": true
                            }),
                            isSuccess && /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedbackStatusIcon/* .FeedbackStatusIcon */.$, {
                                status: "success",
                                "aria-hidden": true,
                                size: 16,
                                className: (0,clsx/* ["default"] */.A)(FileList_module/* ["default"].checkmark */.A.checkmark, FileList_module/* ["default"].successIcon */.A.successIcon)
                            })
                        ]
                    }),
                    stateText && /*#__PURE__*/ (0,jsx_runtime.jsx)(VisuallyHidden/* .VisuallyHidden */.s, {
                        id: stateId,
                        children: stateText
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: FileList_module/* ["default"].fileInfo */.A.fileInfo,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: FileList_module/* ["default"].fileName */.A.fileName,
                                children: fileName
                            }),
                            fileSize && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(VisuallyHidden/* .VisuallyHidden */.s, {
                                        children: ", "
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: FileList_module/* ["default"].fileSize */.A.fileSize,
                                        children: fileSize
                                    })
                                ]
                            })
                        ]
                    }),
                    onPress && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                        variant: "icon",
                        onPress: onPress,
                        "aria-label": `${strings.format(isUploading ? 'cancelUpload' : 'removeFile')} ${fileName}`,
                        "aria-describedby": buttonDescription,
                        className: FileList_module/* ["default"].deleteButton */.A.deleteButton,
                        children: isUploading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {
                            size: 20,
                            "aria-hidden": true
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(trash/* ["default"] */.A, {
                            size: 20,
                            "aria-hidden": true
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                id: errorId,
                className: FileList_module/* ["default"].errorReveal */.A.errorReveal,
                children: errorMessage && /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                    isInvalid: true,
                    children: errorMessage
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(VisuallyHidden/* .VisuallyHidden */.s, {
                role: "status",
                children: [
                    isSuccess && `${strings.format('uploadComplete')}: ${fileName}`,
                    hasError && `${fileName}: ${errorMessage}`
                ]
            })
        ]
    });
};


},
44100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  F: () => (FileTrigger)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react_aria_components__rspack_import_2 = __webpack_require__(524);
/* import */ var react_aria_components__rspack_import_3 = __webpack_require__(93426);
/* import */ var _file_field_FileFieldContext__rspack_import_1 = __webpack_require__(79589);
'use client';



const FileTrigger = (param)=>{
    let { children, ...props } = param;
    const fileField = (0,_file_field_FileFieldContext__rspack_import_1/* .useFileFieldContext */.v)();
    // Scoped to the trigger's own button, so other buttons inside a FileField
    // (e.g. FileList's delete buttons) aren't affected. Props set directly on
    // the Button still win.
    const buttonProps = {
        variant: 'secondary',
        'aria-describedby': fileField?.['aria-describedby']
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_2/* .FileTrigger */.F, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_3/* .ButtonContext.Provider */.k.Provider, {
            value: buttonProps,
            children: children
        })
    });
};


},
72201(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ Heading_Heading)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Heading.mjs
var Heading = __webpack_require__(91820);
;// CONCATENATED MODULE: ./packages/components/src/heading/Heading.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Heading_module = ({"h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
;// CONCATENATED MODULE: ./packages/components/src/heading/Heading.tsx





const Heading_Heading = (param)=>{
    let { children, className, enableMargins = false, isExpressive = false, level = 3, elementType, ...rest } = param;
    const semanticLevel = elementType && parseInt(elementType.split('h')[1]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* .Heading */.D, {
        level: semanticLevel || level,
        className: (0,clsx/* ["default"] */.A)([
            Heading_module.h1,
            Heading_module.h2,
            Heading_module.h3,
            Heading_module.h4,
            Heading_module.h5,
            Heading_module.h6
        ][level - 1], className),
        ...isExpressive && {
            'data-expressive': true
        },
        ...enableMargins && {
            'data-margin': true
        },
        ...rest,
        children: children
    });
};


},
79440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.mjs
var info = __webpack_require__(50643);
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
11728(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

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
14103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ ProgressBar_ProgressBar)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/ProgressBar.mjs + 2 modules
var ProgressBar = __webpack_require__(89243);
;// CONCATENATED MODULE: ./packages/components/src/progress-bar/ProgressBar.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const ProgressBar_module = ({"progressBar":"progressBar_fYul","label":"label_qT2F","value":"value_KQQb","track":"track_jYLd","indicator":"indicator_DUJ3","indeterminate":"indeterminate_xtlO","circular":"circular_LX4u","circularSmall":"circularSmall_v0rD","circularTrack":"circularTrack_oChK","circularIndicator":"circularIndicator_GfV4","circularIndeterminate":"circularIndeterminate_P9XW","circularRotate":"circularRotate__9mS"});
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(79440);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/progress-bar/ProgressBar.tsx






const CIRCLE_RADIUS = 8;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
const INDETERMINATE_ARC = CIRCUMFERENCE * 0.25;
const ProgressBar_ProgressBar = (param)=>{
    let { label, labelProps, showValueLabel = false, shape = 'linear', small = false, ...progressBarProps } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressBar/* .ProgressBar */.z, {
        ...progressBarProps,
        className: (0,clsx/* ["default"] */.A)(ProgressBar_module.progressBar, progressBarProps.className),
        children: (param)=>{
            let { percentage, valueText: valueLabel, isIndeterminate } = param;
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    label && /*#__PURE__*/ (0,jsx_runtime.jsx)(Label/* .Label */.J, {
                        elementType: "span",
                        ...labelProps,
                        className: (0,clsx/* ["default"] */.A)(labelProps?.className, ProgressBar_module.label),
                        children: label
                    }),
                    showValueLabel && /*#__PURE__*/ (0,jsx_runtime.jsx)(Label/* .Label */.J, {
                        elementType: "span",
                        ...labelProps,
                        // Override the label id to prevent duplicates
                        id: label ? '' : labelProps?.id,
                        className: (0,clsx/* ["default"] */.A)(labelProps?.className, ProgressBar_module.value),
                        children: valueLabel
                    }),
                    shape === 'circular' ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                        className: (0,clsx/* ["default"] */.A)(ProgressBar_module.circular, small && ProgressBar_module.circularSmall),
                        viewBox: "0 0 20 20",
                        "aria-hidden": true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                className: ProgressBar_module.circularTrack,
                                cx: 10,
                                cy: 10,
                                r: CIRCLE_RADIUS
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                className: (0,clsx/* ["default"] */.A)(ProgressBar_module.circularIndicator, isIndeterminate && ProgressBar_module.circularIndeterminate),
                                cx: 10,
                                cy: 10,
                                r: CIRCLE_RADIUS,
                                style: isIndeterminate ? {
                                    strokeDasharray: `${INDETERMINATE_ARC} ${CIRCUMFERENCE}`
                                } : {
                                    strokeDasharray: CIRCUMFERENCE,
                                    strokeDashoffset: CIRCUMFERENCE * (1 - (percentage ?? 0) / 100)
                                }
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: ProgressBar_module.track,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: ProgressBar_module.indicator,
                            style: {
                                width: `${isIndeterminate ? 50 : percentage}%`
                            }
                        })
                    })
                ]
            });
        }
    });
};


},
20883(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

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

}]);