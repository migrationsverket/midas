"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([["1283"], {
13755(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_design_patterns_validation_mdx_f40_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-validation-mdx-f40.json
var site_docs_design_patterns_validation_mdx_f40_namespaceObject = JSON.parse('{"id":"design-patterns/validation","title":"Validering i formulär","description":"Validering ska hjälpa våra användare att fylla i formulär rätt. Syftet är att ge tydlig återkoppling vid fel och samtidigt underlätta för användaren att rätta till dessa.","source":"@site/docs/design-patterns/validation.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/validation","permalink":"/pr-preview/pr-1444/design-patterns/validation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sideBar","previous":{"title":"Tabeller","permalink":"/pr-preview/pr-1444/design-patterns/tables"},"next":{"title":"Routing på klientnivå","permalink":"/pr-preview/pr-1444/dev/client-side-routing"}}')
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(71184);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../packages/components/src/toast/Toast.tsx + 1 modules
var Toast = __webpack_require__(68379);
// EXTERNAL MODULE: ../../packages/components/src/grid/Grid.tsx
var Grid = __webpack_require__(30230);
// EXTERNAL MODULE: ../../packages/components/src/grid/GridItem.tsx
var GridItem = __webpack_require__(23527);
// EXTERNAL MODULE: ../../packages/components/src/textfield/TextField.tsx + 3 modules
var TextField = __webpack_require__(38173);
// EXTERNAL MODULE: ../../packages/components/src/button/Button.tsx
var Button = __webpack_require__(26282);
// EXTERNAL MODULE: ../../packages/components/src/info-banner/InfoBanner.tsx + 2 modules
var info_banner_InfoBanner = __webpack_require__(18188);
// EXTERNAL MODULE: ../../packages/components/src/link/Link.tsx + 2 modules
var link_Link = __webpack_require__(25960);
// EXTERNAL MODULE: ../../packages/components/src/spinner/Spinner.tsx + 3 modules
var Spinner = __webpack_require__(44060);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Form.mjs
var Form = __webpack_require__(57263);
;// CONCATENATED MODULE: ./src/components/examples/validation/ValidationExamples.tsx




const ToastRegion = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Toast/* .GlobalToastRegion */.r$, {});
const ErrorMessagePositionExample = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* .Grid */.x, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
                    size: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* .TextField */.A, {
                        label: "Ange f\xf6rnamn",
                        errorMessage: "Du m\xe5ste ange ett f\xf6rnamn",
                        isInvalid: true,
                        errorPosition: "top"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
                    size: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* .TextField */.A, {
                        label: "Ange f\xf6rnamn",
                        errorMessage: "Du m\xe5ste ange ett f\xf6rnamn",
                        isInvalid: true,
                        errorPosition: "bottom"
                    })
                })
            ]
        })
    });
};
const ValidateAfterSubmitExample = ()=>{
    const [name, setName] = (0,react.useState)('');
    const [isInvalid, setIsInvalid] = (0,react.useState)(false);
    const handleChange = (value)=>{
        setName(value);
        if (value.trim() !== '') {
            setIsInvalid(false);
        }
    };
    const handlePress = ()=>{
        setIsInvalid(name.trim() === '');
        if (name.trim() !== '') {
            Toast/* .toastQueue.add */.ni.add({
                message: 'Formuläret skickades!',
                type: 'success'
            }, {
                timeout: 5000
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* .Grid */.x, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
                    size: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* .TextField */.A, {
                        label: "Ange f\xf6rnamn",
                        value: name,
                        onChange: handleChange,
                        errorMessage: isInvalid ? 'Du måste ange ett förnamn' : undefined,
                        isInvalid: isInvalid
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
                    size: "auto",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                        onPress: handlePress,
                        children: "Skicka"
                    })
                })
            ]
        })
    });
};
const DirectValidationExample = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* .TextField */.A, {
            type: "email",
            label: "Ange din mejladress",
            description: "Ange en giltig mejladress, t.ex. namn@exempel.se",
            errorMessage: "Du m\xe5ste ha @ och dom\xe4n med i din mejladress",
            errorPosition: "top"
        })
    });
};
const ErrorMessageListExample = ()=>{
    const [values, setValues] = (0,react.useState)({
        name: '',
        email: ''
    });
    const [validationErrors, setValidationErrors] = (0,react.useState)({});
    const validators = {
        name: (v)=>v.trim() === '' ? 'Du måste ange ett namn' : null,
        email: (v)=>v.trim() === '' ? 'Du måste ange en mejladress' : null
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Form/* .Form */.l, {
            validationErrors: validationErrors,
            onSubmit: (e)=>{
                e.preventDefault();
                const errs = Object.fromEntries(Object.keys(validators).map((key)=>[
                        key,
                        validators[key](values[key])
                    ]).filter((param)=>{
                    let [, msg] = param;
                    return msg;
                }));
                setValidationErrors(errs);
                if (Object.keys(errs).length === 0) // Show success toast
                Toast/* .toastQueue.add */.ni.add({
                    message: 'Formuläret skickades!',
                    type: 'success'
                }, {
                    timeout: 5000
                });
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* .Grid */.x, {
                children: [
                    Object.keys(validationErrors).length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
                        size: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(info_banner_InfoBanner/* .InfoBanner */.z, {
                            type: "warning",
                            title: "Justera dessa f\xe4lt",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                children: Object.entries(validationErrors).map((param)=>{
                                    let [field, msg] = param;
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(link_Link/* .Link */.N, {
                                            href: `#${field}`,
                                            children: msg
                                        })
                                    }, field);
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
                        size: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* .TextField */.A, {
                            id: "name",
                            name: "name",
                            label: "Namn",
                            value: values.name,
                            onChange: (v)=>setValues((prev)=>({
                                        ...prev,
                                        name: v
                                    }))
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
                        size: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* .TextField */.A, {
                            id: "email",
                            name: "email",
                            label: "Mejladress",
                            value: values.email,
                            onChange: (v)=>setValues((prev)=>({
                                        ...prev,
                                        email: v
                                    }))
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
                        size: "auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                            type: "submit",
                            children: "Skicka"
                        })
                    })
                ]
            })
        })
    });
};
const DatabaseValidationExample = ()=>{
    const [isChecking, setIsChecking] = (0,react.useState)(false);
    const [value, setValue] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    async function handleBlur() {
        if (!error && value.trim() !== '') {
            setIsChecking(true);
            // Simulate an async database check
            await new Promise((resolve)=>setTimeout(resolve, 2500));
            setIsChecking(false);
            if (value.trim() !== '12345') {
                setError('Kortnumret kunde inte hittas i databasen. Testa med 12345');
            } else {
                setError('');
            }
        }
    }
    async function handleSubmit() {
        if (value.trim() === '') {
            setError('Du måste fylla i ditt kortnummer för att kunna gå vidare');
            return;
        } else if (error) {
            return;
        }
        setError('');
        Toast/* .toastQueue.add */.ni.add({
            message: 'Formuläret skickades!',
            type: 'success'
        }, {
            timeout: 5000
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* .Grid */.x, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
                    size: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "field-and-spinner",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* .TextField */.A, {
                                label: "Ange ditt kortnummer",
                                description: "Ditt kortnummer kommer kontrolleras mot databasen. Det kan ta en liten stund",
                                value: value,
                                onChange: (newValue)=>{
                                    setValue(newValue);
                                    if (error) setError('');
                                },
                                onBlur: handleBlur,
                                isInvalid: !!error,
                                errorMessage: error
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "spinner-box",
                                children: isChecking && /*#__PURE__*/ (0,jsx_runtime.jsx)(Spinner/* .Spinner */.y, {
                                    small: true
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
                    size: "auto",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                        isDisabled: isChecking,
                        onPress: handleSubmit,
                        children: "Skicka"
                    })
                })
            ]
        })
    });
};
const ErrorMessageList = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "card",
        children: /*#__PURE__*/ _jsx(InfoBanner, {
            type: "warning",
            title: "Justera dessa f\xe4lt",
            children: /*#__PURE__*/ _jsxs("ul", {
                children: [
                    /*#__PURE__*/ _jsx("li", {
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "#felmeddelandelista",
                            children: "Felmeddelande fr\xe5n f\xe4lt A"
                        })
                    }),
                    /*#__PURE__*/ _jsx("li", {
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "#felmeddelandelista",
                            children: "Felmeddelande fr\xe5n f\xe4lt B"
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./docs/design-patterns/validation.mdx


const frontMatter = {};
const contentTitle = 'Validering i formulär';

const assets = {

};




const toc = [{
  "value": "När och hur ska vi validera?",
  "id": "när-och-hur-ska-vi-validera",
  "level": 2
}, {
  "value": "Fält som är obligatoriska men inte kan valideras mot format",
  "id": "fält-som-är-obligatoriska-men-inte-kan-valideras-mot-format",
  "level": 3
}, {
  "value": "Fält med validerbart format eller regel",
  "id": "fält-med-validerbart-format-eller-regel",
  "level": 3
}, {
  "value": "Fält som kräver kontroll mot databas eller extern källa",
  "id": "fält-som-kräver-kontroll-mot-databas-eller-extern-källa",
  "level": 3
}, {
  "value": "Återkoppling",
  "id": "återkoppling",
  "level": 2
}, {
  "value": "Felmeddelande",
  "id": "felmeddelande",
  "level": 3
}, {
  "value": "Riktlinjer för felmeddelandet",
  "id": "riktlinjer-för-felmeddelandet",
  "level": 3
}, {
  "value": "Felmeddelandelista",
  "id": "felmeddelandelista",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "validering-i-formulär",
        children: "Validering i formulär"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(ToastRegion, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validering ska hjälpa våra användare att fylla i formulär rätt. Syftet är att ge tydlig återkoppling vid fel och samtidigt underlätta för användaren att rätta till dessa."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "när-och-hur-ska-vi-validera",
      children: "När och hur ska vi validera?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att undvika att användaren blir överväldigad av felmeddelanden krävs att vi har en balans mellan att ge snabb återkoppling och att låta användaren jobba ostört. Vissa fält ska ge omedelbar återkoppling när användaren lämnar dem, medan andra bara ska valideras efter att formuläret skickats."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fält-som-är-obligatoriska-men-inte-kan-valideras-mot-format",
      children: "Fält som är obligatoriska men inte kan valideras mot format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fält som användaren måste fylla i men inte har ett bestämt format eller regel valideras efter att användaren försökt skicka in formuläret. Att validera dessa fält när användaren lämnar dem här riskerar att ge onödig stress och distraktion."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exempel: Namn, fritextfält"
    }), "\n", (0,jsx_runtime.jsx)(ValidateAfterSubmitExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fält-med-validerbart-format-eller-regel",
      children: "Fält med validerbart format eller regel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fält där vi har ett bestämt format eller regel valideras när användaren lämnat fältet. Eftersom det går att avgöra direkt om värdet är ogiltigt kan snabb återkoppling ges, vilket sparar tid för\nanvändaren och förhindrar fel längre fram. När användaren har rättat felet så återgår fältet till ursprungsläget och har inte längre något felmeddelande."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exempel: e-postadress, telefonnummer, organisationsnummer/personnummer och postnummer"
    }), "\n", (0,jsx_runtime.jsx)(DirectValidationExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fält-som-kräver-kontroll-mot-databas-eller-extern-källa",
      children: "Fält som kräver kontroll mot databas eller extern källa"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fält som kontrolleras mot databas eller extern källa valideras efter att användaren lämnat fältet. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pr-preview/pr-1444/design-patterns/page-loading#spinner-bredvid-ett-f%C3%A4lt",
        children: "Visa en spinner om systemet behöver ladda."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exempel: Kontrollera om kortnummer är giltigt"
    }), "\n", (0,jsx_runtime.jsx)(DatabaseValidationExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "återkoppling",
      children: "Återkoppling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "felmeddelande",
      children: "Felmeddelande"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alla inmatningskomponenter har ett felmeddelande som kan visas vid valideringsfel. Felmeddelandet kan visas antingen ovanför eller under inmatningsfältet. Som standard visas felmeddelandet ovanför fältet, vilket också är det som rekommenderas eftersom det ger en logisk läsordning."
    }), "\n", (0,jsx_runtime.jsx)(ErrorMessagePositionExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "riktlinjer-för-felmeddelandet",
      children: "Riktlinjer för felmeddelandet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Försök så långt det är möjligt att beskriva vad användaren ska göra för att det ska bli rätt. Undvik att skriva generella felmeddelanden som ”fel format”."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undvik teknisk jargong och använd ett språk som användare förstår och känner igen."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Använd en positiv och en inte dömande ton, undvik att skylla på eller antyda att användaren har gjort fel. Undvik till exempel ord som ogiltigt, otillåtet eller felaktigt."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Använd samma ord i felmeddelandet som i övriga användargränssnittet."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "felmeddelandelista",
      children: "Felmeddelandelista"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["I tjänster som primärt består av formulär som användaren ska fylla i, t.ex. e-ansökningar, ska det utöver felmeddelande på varje kontroll även visas en Felmeddelandelista ovanför formuläret. Felmeddelandelistan är inte någon egen komponent utan består av en ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/info-banner",
        children: "Infobanner"
      }), " med ankarlänkar till de komponenter som behöver rättas till."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I exemplet är båda fälten obligatoriska men valideras först när användaren försöker skicka in formuläret. När det finns valideringsfel visas Felmeddelandelistan."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Metoden för att hålla koll på vilka fält som är ogiltiga beror på vilket formulärbibliotek som används. Med t.ex. ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://react-hook-form.com/",
          children: "React Hook Form"
        }), " eller ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://zod.dev/",
          children: "Zod"
        }), " sköter biblioteket validering och felhantering, men principen för felmeddelandelistan är densamma oavsett. Det viktiga är att ", (0,jsx_runtime.jsx)(_components.code, {
          children: "href"
        }), " i listan matchar ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " på det fält det länkar till för att hjälpmedel ska kunna navigera direkt till fältet."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "const [validationErrors, setValidationErrors] = useState({})\n\n<Form\n  validationErrors={validationErrors}\n  onSubmit={e => {\n    e.preventDefault()\n    // Beräkna fel och uppdatera state — hur detta görs beror på formulärbibliotek\n    setValidationErrors(errs)\n    if (Object.keys(errs).length === 0) {\n      // Hantera lyckad inskickning\n    }\n  }}\n>\n  {/* href måste matcha id på respektive fält */}\n  {Object.keys(validationErrors).length > 0 && (\n    <InfoBanner type='warning' title='Justera dessa fält'>\n      <ul>\n        {Object.entries(validationErrors).map(([field, msg]) => (\n          <li key={field}><Link href={`#${field}`}>{msg}</Link></li>\n        ))}\n      </ul>\n    </InfoBanner>\n  )}\n  <TextField id='name' name='name' label='Namn' />\n  <TextField id='email' name='email' label='Mejladress' />\n  <Button type='submit'>Skicka</Button>\n</Form>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(ErrorMessageListExample, {})]
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
27158(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"container":"container__96w","removeMargins":"removeMargins_pyqd","contained":"contained_vpHR","flex":"flex_QvQ5","fluid":"fluid_DXor","col":"col_y_9f","col-1":"col-1_XXxn","col-2":"col-2_moGr","col-3":"col-3_F2cd","col-quarter":"col-quarter_mUa9","col-4":"col-4__Ww3","col-third":"col-third_X71J","col-5":"col-5_ND3q","col-6":"col-6_H5Vp","col-half":"col-half_H56r","col-7":"col-7_RH3X","col-8":"col-8_hMp3","col-9":"col-9_OLoe","col-10":"col-10_cQ6C","col-11":"col-11_yjbP","col-12":"col-12_effh","col-full":"col-full_h70L","col-auto":"col-auto_gE4S","col-grow":"col-grow_acso","col-xs-1":"col-xs-1_Hh8U","col-xs-2":"col-xs-2_ZMrQ","col-xs-3":"col-xs-3_LOso","col-xs-quarter":"col-xs-quarter_l4rV","col-xs-4":"col-xs-4_kwz5","col-xs-third":"col-xs-third_yuln","col-xs-5":"col-xs-5_BLF1","col-xs-6":"col-xs-6_NaqK","col-xs-half":"col-xs-half_HC78","col-xs-7":"col-xs-7_h30J","col-xs-8":"col-xs-8_Fg_C","col-xs-9":"col-xs-9_wEbq","col-xs-10":"col-xs-10_NLbj","col-xs-11":"col-xs-11_kH0N","col-xs-12":"col-xs-12_Ydr2","col-xs-full":"col-xs-full_uWok","col-xs-auto":"col-xs-auto_lQ7o","col-xs-grow":"col-xs-grow_GUrq","col-sm-1":"col-sm-1_DYrQ","col-sm-2":"col-sm-2_R_jy","col-sm-3":"col-sm-3_f8lb","col-sm-quarter":"col-sm-quarter_Ur0q","col-sm-4":"col-sm-4_fxSP","col-sm-third":"col-sm-third_bFKM","col-sm-5":"col-sm-5_ZOWL","col-sm-6":"col-sm-6_SNZr","col-sm-half":"col-sm-half_j2M4","col-sm-7":"col-sm-7_ZL2b","col-sm-8":"col-sm-8_eOm5","col-sm-9":"col-sm-9_VPRS","col-sm-10":"col-sm-10_pj8F","col-sm-11":"col-sm-11_pO1i","col-sm-12":"col-sm-12_VlOc","col-sm-full":"col-sm-full_tlkf","col-sm-auto":"col-sm-auto_h3rQ","col-sm-grow":"col-sm-grow_r8Ij","col-md-1":"col-md-1_d_HG","col-md-2":"col-md-2_wh0s","col-md-3":"col-md-3_HNiY","col-md-quarter":"col-md-quarter_KGqv","col-md-4":"col-md-4_pP9O","col-md-third":"col-md-third_dpVt","col-md-5":"col-md-5_GQ4a","col-md-6":"col-md-6_R2MU","col-md-half":"col-md-half_dbor","col-md-7":"col-md-7_MwXS","col-md-8":"col-md-8_SEAf","col-md-9":"col-md-9_fDDy","col-md-10":"col-md-10_XcQu","col-md-11":"col-md-11_fwSK","col-md-12":"col-md-12_EjPC","col-md-full":"col-md-full_fqGQ","col-md-auto":"col-md-auto_IPi7","col-md-grow":"col-md-grow_sN1d","col-lg-1":"col-lg-1_XKAR","col-lg-2":"col-lg-2_CGg5","col-lg-3":"col-lg-3_IG8i","col-lg-quarter":"col-lg-quarter_ZP49","col-lg-4":"col-lg-4_lB2o","col-lg-third":"col-lg-third_l5Ik","col-lg-5":"col-lg-5_kwIR","col-lg-6":"col-lg-6_jFE6","col-lg-half":"col-lg-half_mHG6","col-lg-7":"col-lg-7_VKpt","col-lg-8":"col-lg-8_ppE2","col-lg-9":"col-lg-9_SPGU","col-lg-10":"col-lg-10_v6yO","col-lg-11":"col-lg-11_JCEp","col-lg-12":"col-lg-12_Qeri","col-lg-full":"col-lg-full_sIzl","col-lg-auto":"col-lg-auto_fQzB","col-lg-grow":"col-lg-grow_sFC4","col-xl-1":"col-xl-1_syh4","col-xl-2":"col-xl-2_R5eL","col-xl-3":"col-xl-3_tCGI","col-xl-quarter":"col-xl-quarter_Y5jm","col-xl-4":"col-xl-4_gZXZ","col-xl-third":"col-xl-third_p0LY","col-xl-5":"col-xl-5_sQxk","col-xl-6":"col-xl-6_C0Uv","col-xl-half":"col-xl-half_BD1M","col-xl-7":"col-xl-7_zRjA","col-xl-8":"col-xl-8_PAua","col-xl-9":"col-xl-9_vseQ","col-xl-10":"col-xl-10_ogWN","col-xl-11":"col-xl-11_SCcL","col-xl-12":"col-xl-12_iZFt","col-xl-full":"col-xl-full_akF9","col-xl-auto":"col-xl-auto_CKEz","col-xl-grow":"col-xl-grow_f8Vo","offset-1":"offset-1_cB0o","offset-2":"offset-2_YMBL","offset-3":"offset-3_UAyK","offset-quarter":"offset-quarter_MsqC","offset-4":"offset-4_MJ13","offset-third":"offset-third_LUur","offset-5":"offset-5_Joje","offset-6":"offset-6_JO1q","offset-half":"offset-half_Cxdq","offset-7":"offset-7_CLg_","offset-8":"offset-8_Lwfd","offset-9":"offset-9_X8qo","offset-10":"offset-10_n5Gz","offset-11":"offset-11_BGVy","offset-auto":"offset-auto_icoL","offset-xs-1":"offset-xs-1_Bqie","offset-xs-2":"offset-xs-2_sUUC","offset-xs-3":"offset-xs-3_QJ3N","offset-xs-quarter":"offset-xs-quarter_iQ8U","offset-xs-4":"offset-xs-4_KieU","offset-xs-third":"offset-xs-third_BvfR","offset-xs-5":"offset-xs-5_bU4d","offset-xs-6":"offset-xs-6_GQ4X","offset-xs-half":"offset-xs-half_cwbz","offset-xs-7":"offset-xs-7_SqQ2","offset-xs-8":"offset-xs-8_EAHs","offset-xs-9":"offset-xs-9_nY0z","offset-xs-10":"offset-xs-10_tOzF","offset-xs-11":"offset-xs-11_oYjr","offset-xs-auto":"offset-xs-auto_C1mp","offset-sm-1":"offset-sm-1_tX74","offset-sm-2":"offset-sm-2_aLgk","offset-sm-3":"offset-sm-3_H3UX","offset-sm-quarter":"offset-sm-quarter_JVaE","offset-sm-4":"offset-sm-4_aOLo","offset-sm-third":"offset-sm-third__7rb","offset-sm-5":"offset-sm-5_mTag","offset-sm-6":"offset-sm-6_EiCN","offset-sm-half":"offset-sm-half_NCRf","offset-sm-7":"offset-sm-7_AW4i","offset-sm-8":"offset-sm-8_LoVr","offset-sm-9":"offset-sm-9_m2yF","offset-sm-10":"offset-sm-10_KXZn","offset-sm-11":"offset-sm-11_o8EN","offset-sm-auto":"offset-sm-auto_OFdP","offset-md-1":"offset-md-1_xNnA","offset-md-2":"offset-md-2_M2wp","offset-md-3":"offset-md-3_hbhk","offset-md-quarter":"offset-md-quarter_nF_3","offset-md-4":"offset-md-4_TUDA","offset-md-third":"offset-md-third_tS3o","offset-md-5":"offset-md-5_ZsoI","offset-md-6":"offset-md-6_Fstc","offset-md-half":"offset-md-half_HEG0","offset-md-7":"offset-md-7_MYkw","offset-md-8":"offset-md-8_z0b9","offset-md-9":"offset-md-9_X_wB","offset-md-10":"offset-md-10_w6XG","offset-md-11":"offset-md-11_FEFD","offset-md-auto":"offset-md-auto_Umu5","offset-lg-1":"offset-lg-1_rUx8","offset-lg-2":"offset-lg-2_AX6n","offset-lg-3":"offset-lg-3_y_M0","offset-lg-quarter":"offset-lg-quarter_gUzC","offset-lg-4":"offset-lg-4_qcT5","offset-lg-third":"offset-lg-third_ifVe","offset-lg-5":"offset-lg-5_Hw2b","offset-lg-6":"offset-lg-6_Ckf9","offset-lg-half":"offset-lg-half_aHqJ","offset-lg-7":"offset-lg-7_C9bd","offset-lg-8":"offset-lg-8_z1iD","offset-lg-9":"offset-lg-9_jIoq","offset-lg-10":"offset-lg-10_NJJM","offset-lg-11":"offset-lg-11_rj3G","offset-lg-auto":"offset-lg-auto_t6yE","offset-xl-1":"offset-xl-1_NBlq","offset-xl-2":"offset-xl-2_xnbw","offset-xl-3":"offset-xl-3_x1fR","offset-xl-quarter":"offset-xl-quarter_rKWW","offset-xl-4":"offset-xl-4_E3Pl","offset-xl-third":"offset-xl-third_ZHMr","offset-xl-5":"offset-xl-5_KR3o","offset-xl-6":"offset-xl-6_hR9Z","offset-xl-half":"offset-xl-half_hDaK","offset-xl-7":"offset-xl-7_k6Zu","offset-xl-8":"offset-xl-8_JEm7","offset-xl-9":"offset-xl-9_z9xR","offset-xl-10":"offset-xl-10_HT4q","offset-xl-11":"offset-xl-11_Cd9z","offset-xl-auto":"offset-xl-auto_XRsv"});

},
36416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"textField":"textField_YCwP","bottomError":"bottomError_MzE5","textArea":"textArea_LMa_","input":"input_NYbH","wrap":"wrap_P8FJ","medium":"medium_iCWZ","passwordText":"passwordText_P6Gs","passwordButton":"passwordButton_PXzP"});

},
35349(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ FeedbackStatusIcon)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/check.mjs
var check = __webpack_require__(25298);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/info.mjs
var info = __webpack_require__(47782);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/flag.mjs
var flag = __webpack_require__(81876);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs
var triangle_alert = __webpack_require__(43919);
// EXTERNAL MODULE: ../../packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(18232);
;// CONCATENATED MODULE: ../../packages/components/src/common/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"ok":"okay","information":"information","importantInformation":"important information","warning":"warning"},"sv":{"ok":"okej","information":"information","importantInformation":"viktig information","warning":"varning"}}')
;// CONCATENATED MODULE: ../../packages/components/src/common/FeedbackStatusIcon.tsx




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
48102(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ FieldError_FieldError)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/FieldError.mjs
var FieldError = __webpack_require__(41783);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
// EXTERNAL MODULE: ../../packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(48673);
;// CONCATENATED MODULE: ../../packages/components/src/field-error/FieldError.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const FieldError_module = ({"fieldError":"fieldError_IWdR"});
;// CONCATENATED MODULE: ../../packages/components/src/field-error/FieldError.tsx






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
30230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  x: () => (Grid)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(31085);
/* import */ var react__rspack_import_1 = __webpack_require__(14041);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(27158);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(74677);




/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/grid}
 */ const Grid = (param)=>{
    let { children, isContained = false, removeMargins = false, ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        ...rest,
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(_Grid_module_css__rspack_import_2/* ["default"].container */.A.container, isContained && _Grid_module_css__rspack_import_2/* ["default"].contained */.A.contained, removeMargins && _Grid_module_css__rspack_import_2/* ["default"].removeMargins */.A.removeMargins, rest.className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: _Grid_module_css__rspack_import_2/* ["default"].flex */.A.flex,
            children: children
        })
    });
};


},
23527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  E: () => (GridItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(31085);
/* import */ var react__rspack_import_1 = __webpack_require__(14041);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(27158);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(74677);




/**
 * Columns based on display: flex;
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */ const GridItem = (param)=>{
    let { children, size, offset, ...props } = param;
    const offsetClass = offset ? `offset-${offset}` : '';
    const sizeClasses = getSizeClasses(size);
    const offsetClasses = getOffsetClasses(offset);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        ...props,
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(_Grid_module_css__rspack_import_2/* ["default"].col */.A.col, _Grid_module_css__rspack_import_2/* ["default"] */.A[offsetClass], sizeClasses.map((cls)=>_Grid_module_css__rspack_import_2/* ["default"] */.A[cls]), offsetClasses.map((cls)=>_Grid_module_css__rspack_import_2/* ["default"] */.A[cls]), props.className),
        children: children
    });
};
const getSizeClasses = (size)=>{
    if (!size) return [];
    if (typeof size === 'object') {
        return Object.entries(size).map((param)=>{
            let [breakpoint, value] = param;
            return breakpoint === 'xs' ? `col-${value}` : `col-${breakpoint}-${value}`;
        });
    }
    return [
        `col-${size}`
    ];
};
const getOffsetClasses = (offset)=>{
    if (!offset) return [];
    if (typeof offset === 'object') {
        return Object.entries(offset).map((param)=>{
            let [breakpoint, value] = param;
            return breakpoint === 'xs' ? `offset-${value}` : `offset-${breakpoint}-${value}`;
        });
    }
    return [
        `offset-${offset}`
    ];
};


},
18188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ InfoBanner)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/x.mjs
var x = __webpack_require__(64922);
;// CONCATENATED MODULE: ../../packages/components/src/info-banner/InfoBanner.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const InfoBanner_module = ({"infoBanner":"infoBanner_OHvb","success":"success_WOtK","info":"info_zsDp","important":"important_cUwq","warning":"warning_SBFh","content":"content_KTjm","heading":"heading_A2St","text":"text_Dvvo","icon":"icon_IzUI","dismissable":"dismissable_NN43"});
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
// EXTERNAL MODULE: ../../packages/components/src/button/Button.tsx
var Button = __webpack_require__(26282);
// EXTERNAL MODULE: ../../packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(18232);
;// CONCATENATED MODULE: ../../packages/components/src/info-banner/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"close":"Close"},"sv":{"close":"Stäng"}}')
// EXTERNAL MODULE: ../../packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(35349);
// EXTERNAL MODULE: ../../node_modules/react-stately/dist/private/utils/useControlledState.mjs
var useControlledState = __webpack_require__(59155);
;// CONCATENATED MODULE: ../../packages/components/src/info-banner/InfoBanner.tsx










/**
 * Displays a static message as an inline banner
 */ const InfoBanner = (param)=>{
    let { title, message, type, children, isDismissable = false, defaultOpen = true, isOpen: controlledIsOpen, onOpenChange, ...rest } = param;
    const [isOpen, setIsOpen] = (0,useControlledState/* .useControlledState */.P)(controlledIsOpen, defaultOpen, onOpenChange);
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const handleClose = ()=>{
        setIsOpen(false);
    };
    if (!isOpen) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("aside", {
        ...rest,
        className: (0,clsx/* ["default"] */.A)(InfoBanner_module.infoBanner, InfoBanner_module[type], rest.className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedbackStatusIcon/* .FeedbackStatusIcon */.$, {
                "aria-hidden": true,
                className: InfoBanner_module.icon,
                status: type
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: InfoBanner_module.content,
                children: [
                    title && /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        className: InfoBanner_module.heading,
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: InfoBanner_module.text,
                        children: [
                            message,
                            children
                        ]
                    })
                ]
            }),
            isDismissable && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: InfoBanner_module.dismissable,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                    variant: "icon",
                    "aria-label": strings.format('close'),
                    onPress: handleClose,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {
                        size: 20
                    })
                })
            })
        ]
    });
};


},
60732(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label_Label)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Label.mjs
var Label = __webpack_require__(41181);
;// CONCATENATED MODULE: ../../packages/components/src/label/Label.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Label_module = ({"labelBase":"labelBase_acWD"});
// EXTERNAL MODULE: ../../packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(88564);
;// CONCATENATED MODULE: ../../packages/components/src/label/Label.tsx






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
88564(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d$: () => (/* binding */ LabelWrapperContext),
  cR: () => (/* binding */ LabelWrapper)
});

// UNUSED EXPORTS: useLabelWrapperContext

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
;// CONCATENATED MODULE: ../../packages/components/src/label/LabelWrapper.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const LabelWrapper_module = ({"labelPopover":"labelPopover_CHQv","labelPopoverTrigger":"labelPopoverTrigger_TLpX"});
// EXTERNAL MODULE: ../../packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(81536);
// EXTERNAL MODULE: ../../packages/components/src/button/Button.tsx
var Button = __webpack_require__(26282);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/info.mjs
var info = __webpack_require__(47782);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(72026);
// EXTERNAL MODULE: ../../packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(18232);
;// CONCATENATED MODULE: ../../packages/components/src/label/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"moreInfo":"More info"},"sv":{"moreInfo":"Mer information"}}')
;// CONCATENATED MODULE: ../../packages/components/src/label/InfoPopover.tsx










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

;// CONCATENATED MODULE: ../../packages/components/src/label/LabelWrapper.tsx




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
25960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ Link_Link)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
;// CONCATENATED MODULE: ../../packages/components/src/link/Link.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Link_module = ({"link":"link_PdzF","icon":"icon_n1NJ","standalone":"standalone_KSvI","stretched":"stretched_ZU5s"});
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var Link = __webpack_require__(77153);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(32120);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.mjs
var arrow_down_to_line = __webpack_require__(50671);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.mjs
var square_arrow_out_up_right = __webpack_require__(51951);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/arrow-right.mjs
var arrow_right = __webpack_require__(70840);
// EXTERNAL MODULE: ../../packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(18232);
;// CONCATENATED MODULE: ../../packages/components/src/link/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"opensInNewTab":"Opens in new tab","downloadsFile":"Downloads file"},"sv":{"opensInNewTab":"Öppnas i ny flik","downloadsFile":"Hämtar fil"}}')
;// CONCATENATED MODULE: ../../packages/components/src/link/Link.tsx
'use client';








const Link_Link = (param)=>{
    let { children, standalone, target, stretched, download, icon: customIcon, className, as, ...rest } = param;
    const Component = as || Link/* .Link */.N;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const getIcon = ()=>{
        if (customIcon) return {
            icon: customIcon
        };
        if (download) return {
            icon: arrow_down_to_line/* ["default"] */.A,
            label: strings.format('downloadsFile')
        };
        if (target === '_blank') return {
            icon: square_arrow_out_up_right/* ["default"] */.A,
            label: strings.format('opensInNewTab')
        };
        if (standalone) return {
            icon: arrow_right/* ["default"] */.A
        };
        return null;
    };
    const iconConfig = getIcon();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Component, {
        className: (0,clsx/* ["default"] */.A)(Link_module.link, standalone && Link_module.standalone, stretched && Link_module.stretched, className),
        ...rest,
        target: target,
        download: download,
        children: [
            children,
            iconConfig ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                        className: Link_module.icon,
                        icon: iconConfig.icon,
                        size: 16,
                        "aria-hidden": true
                    }),
                    iconConfig.label && /*#__PURE__*/ (0,jsx_runtime.jsx)(VisuallyHidden/* .VisuallyHidden */.s, {
                        children: iconConfig.label
                    })
                ]
            }) : null
        ]
    });
};
const Icon = (param)=>{
    let { icon: IconComponent, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
        ...rest
    });
};



},
81536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95288);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Popover.mjs + 1 modules
var Popover = __webpack_require__(44616);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(19706);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
;// CONCATENATED MODULE: ../../packages/components/src/popover/Popover.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Popover_module = ({"popover":"popover_VTsQ","arrow":"arrow_Hrch"});
;// CONCATENATED MODULE: ../../packages/components/src/popover/Popover.tsx





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
48673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text_Text)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Text.mjs
var Text = __webpack_require__(94816);
;// CONCATENATED MODULE: ../../packages/components/src/text/Text.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Text_module = ({"body":"body_dkVk","body-small":"body-small_O2ec","description":"description_mxXI","description-small":"description-small_aNtq","bold":"bold_C5U8","italic":"italic_CNG5"});
;// CONCATENATED MODULE: ../../packages/components/src/text/Text.tsx





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
38173(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TextField)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../packages/components/src/textfield/TextFieldBase.tsx + 2 modules
var TextFieldBase = __webpack_require__(30287);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95288);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Input.mjs
var Input = __webpack_require__(57011);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
// EXTERNAL MODULE: ../../packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(36416);
// EXTERNAL MODULE: ../../packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(18232);
;// CONCATENATED MODULE: ../../packages/components/src/textfield/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"hide":"Hide","show":"Show","showPassword":"Show password"},"sv":{"hide":"Dölj","show":"Visa","showPassword":"Visa lösenord"}}')
// EXTERNAL MODULE: ../../packages/components/src/button/Button.tsx
var Button = __webpack_require__(26282);
;// CONCATENATED MODULE: ../../packages/components/src/textfield/PasswordToggle.tsx





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

;// CONCATENATED MODULE: ../../packages/components/src/textfield/Input.tsx






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

;// CONCATENATED MODULE: ../../packages/components/src/textfield/TextField.tsx
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
30287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ TextFieldBase)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95288);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/TextField.mjs
var TextField = __webpack_require__(10412);
// EXTERNAL MODULE: ../../packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(36416);
// EXTERNAL MODULE: ../../packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(48673);
// EXTERNAL MODULE: ../../packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(48102);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Input.mjs
var Input = __webpack_require__(57011);
;// CONCATENATED MODULE: ../../packages/components/src/character-counter/CharacterCounter.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const CharacterCounter_module = ({"characterCounter":"characterCounter_mv0U"});
;// CONCATENATED MODULE: ../../packages/components/src/character-counter/CharacterCounter.tsx




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

// EXTERNAL MODULE: ../../node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(54357);
// EXTERNAL MODULE: ../../packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(60732);
// EXTERNAL MODULE: ../../packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(88564);
;// CONCATENATED MODULE: ../../packages/components/src/textfield/TextFieldBase.tsx










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
68379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r$: () => (/* binding */ GlobalToastRegion),
  ni: () => (/* binding */ toastQueue)
});

// UNUSED EXPORTS: ToastRegion, Toast, useToastState, ToastProvider

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../packages/components/src/button/Button.tsx
var Button = __webpack_require__(26282);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/toast/useToastRegion.mjs + 1 modules
var useToastRegion = __webpack_require__(43403);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/toast/useToast.mjs
var useToast = __webpack_require__(11630);
// EXTERNAL MODULE: ../../node_modules/react-stately/dist/private/toast/useToastState.mjs
var toast_useToastState = __webpack_require__(59344);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/react-dom/index.js
var react_dom = __webpack_require__(43144);
;// CONCATENATED MODULE: ../../packages/components/src/toast/Toast.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Toast_module = ({"toastRegion":"toastRegion_qT4T","toast":"toast_fS3w","success":"success_xzAn","info":"info_b9n9","important":"important_Ujdl","warning":"warning_Kv7x","icon":"icon_jrmy","toastContent":"toastContent_STUG","toastMessage":"toastMessage_Ekty","viewTransition":"viewTransition_xM0h","slideInTop":"slideInTop_banh","slideInEnd":"slideInEnd_kM5e","slideOutTop":"slideOutTop_nGl4","slideOutEnd":"slideOutEnd_yn8p"});
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/x.mjs
var x = __webpack_require__(64922);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
// EXTERNAL MODULE: ../../packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(35349);
;// CONCATENATED MODULE: ../../packages/components/src/toast/Toast.tsx
'use client';










const toastStateProps = {
    wrapUpdate (fn) {
        if ('startViewTransition' in document) {
            document.startViewTransition(()=>{
                (0,react_dom.flushSync)(fn);
            });
        } else {
            fn();
        }
    },
    maxVisibleToasts: 5
};

const toastQueue = new toast_useToastState/* .ToastQueue */.Vv(toastStateProps);
const GlobalToastRegion = (props)=>{
    const state = (0,toast_useToastState/* .useToastQueue */.oS)(toastQueue);
    return state.visibleToasts.length > 0 ? /*#__PURE__*/ (0,react_dom.createPortal)(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToastRegion, {
        ...props,
        state: state
    }), document.body) : null;
};
const ToastProvider = (param)=>{
    let { children, ...props } = param;
    const state = useToastState(toastStateProps);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            typeof children === 'function' ? children(state) : children,
            state.visibleToasts.length > 0 && /*#__PURE__*/ _jsx(ToastRegion, {
                ...props,
                state: state
            })
        ]
    });
};
function ToastRegion(param) {
    let { state, className, ...props } = param;
    const ref = react.useRef(null);
    const { regionProps } = (0,useToastRegion/* .useToastRegion */.J)(props, state, ref);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ...regionProps,
        ref: ref,
        className: (0,clsx/* ["default"] */.A)(Toast_module.toastRegion, className),
        children: state.visibleToasts.map((toast)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Toast, {
                toast: toast,
                state: state
            }, toast.key))
    });
}
function Toast(param) {
    let { state, className, ...props } = param;
    const ref = react.useRef(null);
    const { toastProps, contentProps, titleProps, closeButtonProps } = (0,useToast/* .useToast */.d)(props, state, ref);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ...toastProps,
        ref: ref,
        className: (0,clsx/* ["default"] */.A)(Toast_module.toast, Toast_module[props.toast.content.type], className),
        style: {
            viewTransitionName: props.toast.key,
            viewTransitionClass: Toast_module.viewTransition
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                ...contentProps,
                className: (0,clsx/* ["default"] */.A)(Toast_module.toastContent, contentProps.className),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedbackStatusIcon/* .FeedbackStatusIcon */.$, {
                        "aria-hidden": true,
                        className: Toast_module.icon,
                        status: props.toast.content.type
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: Toast_module.toastMessage,
                                ...titleProps,
                                children: props.toast.content.message
                            }),
                            props.toast.content.children
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                variant: "icon",
                ...closeButtonProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {
                    size: 20,
                    "aria-hidden": true
                })
            })
        ]
    });
}


},
50671(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (ArrowDownToLine)
});
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(94202);
/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "arrow-down-to-line",
  size: 24,
  node: [
    ["path", { d: "M12 17V3", key: "1cwfxf" }],
    ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
    ["path", { d: "M19 21H5", key: "150jfl" }]
  ]
};
__iconData.node;
const ArrowDownToLine = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)(__iconData);


//# sourceMappingURL=arrow-down-to-line.mjs.map


},
70840(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (ArrowRight)
});
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(94202);
/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
__iconData.node;
const ArrowRight = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)(__iconData);


//# sourceMappingURL=arrow-right.mjs.map


},
25298(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (Check)
});
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(94202);
/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
__iconData.node;
const Check = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)(__iconData);


//# sourceMappingURL=check.mjs.map


},
81876(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (Flag)
});
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(94202);
/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "flag",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
        key: "1jaruq"
      }
    ]
  ]
};
__iconData.node;
const Flag = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)(__iconData);


//# sourceMappingURL=flag.mjs.map


},
47782(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (Info)
});
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(94202);
/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "info",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }]
  ]
};
__iconData.node;
const Info = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)(__iconData);


//# sourceMappingURL=info.mjs.map


},
51951(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (SquareArrowOutUpRight)
});
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(94202);
/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "square-arrow-out-up-right",
  size: 24,
  node: [
    ["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6", key: "y09zxi" }],
    ["path", { d: "m21 3-9 9", key: "mpx6sq" }],
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }]
  ],
  aliases: ["arrow-up-right-from-square"]
};
__iconData.node;
const SquareArrowOutUpRight = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)(__iconData);


//# sourceMappingURL=square-arrow-out-up-right.mjs.map


},
43919(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (TriangleAlert)
});
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(94202);
/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "triangle-alert",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ],
  aliases: ["alert-triangle"]
};
__iconData.node;
const TriangleAlert = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)(__iconData);


//# sourceMappingURL=triangle-alert.mjs.map


},
64922(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (X)
});
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(94202);
/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
__iconData.node;
const X = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)(__iconData);


//# sourceMappingURL=x.mjs.map


},
77153(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ $984a1fc08f87e4f3$export$e2509388b49734e7),
  N: () => (/* binding */ $984a1fc08f87e4f3$export$a6c7ac8248d6e38a)
});

// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95288);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(59878);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/utils/openLink.mjs
var openLink = __webpack_require__(90970);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(28052);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var useFocusable = __webpack_require__(73817);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/interactions/usePress.mjs + 1 modules
var usePress = __webpack_require__(99278);
;// CONCATENATED MODULE: ../../node_modules/react-aria/dist/private/link/useLink.mjs






/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $40d752843fab8930$export$dcf14c9974fe2767(props, ref) {
    let { elementType: elementType = 'a', onPress: onPress, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressChange: onPressChange, onClick: onClick, isDisabled: isDisabled, ...otherProps } = props;
    let linkProps = {};
    if (elementType !== 'a') linkProps = {
        role: 'link',
        tabIndex: !isDisabled ? 0 : undefined
    };
    let { focusableProps: focusableProps } = (0, useFocusable/* .useFocusable */.Wc)(props, ref);
    let { pressProps: pressProps, isPressed: isPressed } = (0, usePress/* .usePress */.d)({
        onPress: onPress,
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onClick: onClick,
        isDisabled: isDisabled,
        ref: ref
    });
    let domProps = (0, filterDOMProps/* .filterDOMProps */.$)(otherProps, {
        labelable: true
    });
    let interactionHandlers = (0, mergeProps/* .mergeProps */.v)(focusableProps, pressProps);
    let router = (0, openLink/* .useRouter */.rd)();
    let routerLinkProps = (0, openLink/* .useLinkProps */._h)(props);
    return {
        isPressed: isPressed,
        linkProps: (0, mergeProps/* .mergeProps */.v)(domProps, routerLinkProps, {
            ...interactionHandlers,
            ...linkProps,
            'aria-disabled': isDisabled || undefined,
            'aria-current': props['aria-current'],
            onClick: (e)=>{
                pressProps.onClick?.(e);
                (0, openLink/* .handleLinkClick */.PJ)(e, router, props.href, props.routerOptions);
            }
        })
    };
}



//# sourceMappingURL=useLink.mjs.map

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/focus/useFocusRing.mjs
var useFocusRing = __webpack_require__(86414);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/interactions/useHover.mjs
var useHover = __webpack_require__(44031);
;// CONCATENATED MODULE: ../../node_modules/react-aria-components/dist/private/Link.mjs








/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






const $984a1fc08f87e4f3$export$e2509388b49734e7 = /*#__PURE__*/ (0, react.createContext)(null);
const $984a1fc08f87e4f3$export$a6c7ac8248d6e38a = /*#__PURE__*/ (0, react.forwardRef)(function Link(props, ref) {
    [props, ref] = (0, utils/* .useContextProps */.JT)(props, ref, $984a1fc08f87e4f3$export$e2509388b49734e7);
    let elementType = props.href && !props.isDisabled ? 'a' : 'span';
    let { linkProps: linkProps, isPressed: isPressed } = (0, $40d752843fab8930$export$dcf14c9974fe2767)({
        ...props,
        elementType: elementType
    }, ref);
    let ElementType = (0, utils/* .dom */.tT)[elementType];
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* .useHover */.M)(props);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* .useFocusRing */.o)();
    let renderProps = (0, utils/* .useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-Link',
        values: {
            isCurrent: !!props['aria-current'],
            isDisabled: props.isDisabled || false,
            isPressed: isPressed,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible
        }
    });
    let DOMProps = (0, filterDOMProps/* .filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react).createElement(ElementType, {
        ref: ref,
        slot: props.slot || undefined,
        ...(0, mergeProps/* .mergeProps */.v)(DOMProps, renderProps, linkProps, hoverProps, focusProps),
        "data-focused": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-pressed": isPressed || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-current": !!props['aria-current'] || undefined,
        "data-disabled": props.isDisabled || undefined
    }, renderProps.children);
});



//# sourceMappingURL=Link.mjs.map


},

}]);