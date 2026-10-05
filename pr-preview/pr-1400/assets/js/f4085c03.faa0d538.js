"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["1283"], {
14287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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

;// CONCATENATED MODULE: ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-validation-mdx-f40.json
var site_docs_design_patterns_validation_mdx_f40_namespaceObject = JSON.parse('{"id":"design-patterns/validation","title":"validation","description":"Validering ska hjälpa våra användare att fylla i formulär rätt. Syftet är att ge tydlig återkoppling vid fel och samtidigt underlätta för användaren att rätta till dessa.","source":"@site/docs/design-patterns/validation.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/validation","permalink":"/pr-preview/pr-1400/design-patterns/validation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sideBar","previous":{"title":"Tabeller","permalink":"/pr-preview/pr-1400/design-patterns/tables"},"next":{"title":"Routing på klientnivå","permalink":"/pr-preview/pr-1400/dev/client-side-routing"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/toast/Toast.tsx + 1 modules
var Toast = __webpack_require__(59600);
// EXTERNAL MODULE: ./packages/components/src/grid/Grid.tsx
var Grid = __webpack_require__(25879);
// EXTERNAL MODULE: ./packages/components/src/grid/GridItem.tsx
var GridItem = __webpack_require__(80782);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 3 modules
var TextField = __webpack_require__(48494);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./packages/components/src/info-banner/InfoBanner.tsx + 2 modules
var info_banner_InfoBanner = __webpack_require__(32436);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 2 modules
var link_Link = __webpack_require__(61121);
// EXTERNAL MODULE: ./packages/components/src/spinner/Spinner.tsx + 3 modules
var Spinner = __webpack_require__(99562);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Form.mjs
var Form = __webpack_require__(70420);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/validation/ValidationExamples.tsx




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

;// CONCATENATED MODULE: ./apps/docs/docs/design-patterns/validation.mdx


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
    children: [(0,jsx_runtime.jsx)(ToastRegion, {}), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "validering-i-formulär",
        children: "Validering i formulär"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
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
        href: "/pr-preview/pr-1400/design-patterns/page-loading#spinner-bredvid-ett-f%C3%A4lt",
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
52072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"container":"container_uCKZ","removeMargins":"removeMargins_rQ9U","contained":"contained_R9lB","flex":"flex_LQ20","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-quarter":"col-quarter_eUut","col-4":"col-4_Ovxr","col-third":"col-third_FUaF","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-half":"col-half_GzSn","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","col-full":"col-full_K_XT","col-auto":"col-auto_nMhH","col-grow":"col-grow_TBON","col-xs-1":"col-xs-1_Bg_O","col-xs-2":"col-xs-2_UhmL","col-xs-3":"col-xs-3_mEvh","col-xs-quarter":"col-xs-quarter_mtoI","col-xs-4":"col-xs-4_Uv5i","col-xs-third":"col-xs-third_AHrM","col-xs-5":"col-xs-5_Gdnm","col-xs-6":"col-xs-6_z366","col-xs-half":"col-xs-half_vH6m","col-xs-7":"col-xs-7_HNwO","col-xs-8":"col-xs-8_Vwih","col-xs-9":"col-xs-9_vfTc","col-xs-10":"col-xs-10_wJWt","col-xs-11":"col-xs-11_KTEA","col-xs-12":"col-xs-12_TaE_","col-xs-full":"col-xs-full_enWi","col-xs-auto":"col-xs-auto_G2jj","col-xs-grow":"col-xs-grow_kY1W","col-sm-1":"col-sm-1_YvIs","col-sm-2":"col-sm-2_NSCq","col-sm-3":"col-sm-3_cJ0H","col-sm-quarter":"col-sm-quarter_WWBJ","col-sm-4":"col-sm-4_dtZx","col-sm-third":"col-sm-third_g3dG","col-sm-5":"col-sm-5_C87q","col-sm-6":"col-sm-6_SkMd","col-sm-half":"col-sm-half_QX4f","col-sm-7":"col-sm-7_wa6s","col-sm-8":"col-sm-8_zH5I","col-sm-9":"col-sm-9_ym4Z","col-sm-10":"col-sm-10_jE4j","col-sm-11":"col-sm-11_Va2g","col-sm-12":"col-sm-12_BgjD","col-sm-full":"col-sm-full_Nb6O","col-sm-auto":"col-sm-auto_Qj4m","col-sm-grow":"col-sm-grow_mAH5","col-md-1":"col-md-1_Zeqd","col-md-2":"col-md-2_DR6K","col-md-3":"col-md-3_OZK7","col-md-quarter":"col-md-quarter_AmxM","col-md-4":"col-md-4_NxEu","col-md-third":"col-md-third_J4Ja","col-md-5":"col-md-5_cBkY","col-md-6":"col-md-6_it5t","col-md-half":"col-md-half_aEv_","col-md-7":"col-md-7__sAT","col-md-8":"col-md-8_WfW7","col-md-9":"col-md-9_orzQ","col-md-10":"col-md-10_wh5t","col-md-11":"col-md-11_Wsgq","col-md-12":"col-md-12_gZQg","col-md-full":"col-md-full_Ow4Z","col-md-auto":"col-md-auto_e67j","col-md-grow":"col-md-grow_quHq","col-lg-1":"col-lg-1_e1au","col-lg-2":"col-lg-2_fUsj","col-lg-3":"col-lg-3_EhhM","col-lg-quarter":"col-lg-quarter_SI9I","col-lg-4":"col-lg-4_VuKz","col-lg-third":"col-lg-third_Lf2A","col-lg-5":"col-lg-5_TF5r","col-lg-6":"col-lg-6_E93v","col-lg-half":"col-lg-half_ZdoE","col-lg-7":"col-lg-7_L5CO","col-lg-8":"col-lg-8_ZBHN","col-lg-9":"col-lg-9_TbUu","col-lg-10":"col-lg-10_Tsqu","col-lg-11":"col-lg-11_Eg8x","col-lg-12":"col-lg-12_eNvi","col-lg-full":"col-lg-full_SaRE","col-lg-auto":"col-lg-auto_fNRO","col-lg-grow":"col-lg-grow_XTrt","col-xl-1":"col-xl-1_BRna","col-xl-2":"col-xl-2_eGSK","col-xl-3":"col-xl-3_RrW2","col-xl-quarter":"col-xl-quarter_V_Yw","col-xl-4":"col-xl-4_R4AZ","col-xl-third":"col-xl-third_W3hT","col-xl-5":"col-xl-5_k7Gx","col-xl-6":"col-xl-6_xZyb","col-xl-half":"col-xl-half_V9xE","col-xl-7":"col-xl-7_lJfg","col-xl-8":"col-xl-8_zErQ","col-xl-9":"col-xl-9_oYwQ","col-xl-10":"col-xl-10_cLTa","col-xl-11":"col-xl-11_xqWK","col-xl-12":"col-xl-12_Vrsf","col-xl-full":"col-xl-full_vVSm","col-xl-auto":"col-xl-auto_YBap","col-xl-grow":"col-xl-grow_YMBn","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-quarter":"offset-quarter_ho5e","offset-4":"offset-4_L0XB","offset-third":"offset-third_dE8e","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-half":"offset-half_nGtc","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv","offset-auto":"offset-auto_ZBrI","offset-xs-1":"offset-xs-1__ZrT","offset-xs-2":"offset-xs-2_WySR","offset-xs-3":"offset-xs-3_u9Tb","offset-xs-quarter":"offset-xs-quarter_Pd1o","offset-xs-4":"offset-xs-4_Bibg","offset-xs-third":"offset-xs-third_CeeW","offset-xs-5":"offset-xs-5_OgED","offset-xs-6":"offset-xs-6_ihSu","offset-xs-half":"offset-xs-half_Vrdz","offset-xs-7":"offset-xs-7_TtZQ","offset-xs-8":"offset-xs-8_Ftc2","offset-xs-9":"offset-xs-9_HptZ","offset-xs-10":"offset-xs-10_umjb","offset-xs-11":"offset-xs-11_Suix","offset-xs-auto":"offset-xs-auto_fxe8","offset-sm-1":"offset-sm-1_knSM","offset-sm-2":"offset-sm-2_zWxo","offset-sm-3":"offset-sm-3_oqp6","offset-sm-quarter":"offset-sm-quarter_Nav1","offset-sm-4":"offset-sm-4_EvUX","offset-sm-third":"offset-sm-third_tGgh","offset-sm-5":"offset-sm-5_raNi","offset-sm-6":"offset-sm-6_KTA8","offset-sm-half":"offset-sm-half_ab81","offset-sm-7":"offset-sm-7_duQl","offset-sm-8":"offset-sm-8_uRxp","offset-sm-9":"offset-sm-9_AqYl","offset-sm-10":"offset-sm-10_Wt6J","offset-sm-11":"offset-sm-11_yAYq","offset-sm-auto":"offset-sm-auto_FAp6","offset-md-1":"offset-md-1_OpgB","offset-md-2":"offset-md-2_U24n","offset-md-3":"offset-md-3_YxnQ","offset-md-quarter":"offset-md-quarter_y53T","offset-md-4":"offset-md-4_ZaOC","offset-md-third":"offset-md-third_HZWP","offset-md-5":"offset-md-5_KVFL","offset-md-6":"offset-md-6_bZvL","offset-md-half":"offset-md-half_yilA","offset-md-7":"offset-md-7_fs04","offset-md-8":"offset-md-8_QmYF","offset-md-9":"offset-md-9_QoVc","offset-md-10":"offset-md-10_OrE0","offset-md-11":"offset-md-11_reKz","offset-md-auto":"offset-md-auto_ETdh","offset-lg-1":"offset-lg-1_zi3j","offset-lg-2":"offset-lg-2_YgjU","offset-lg-3":"offset-lg-3_CHdw","offset-lg-quarter":"offset-lg-quarter_Chor","offset-lg-4":"offset-lg-4_NOCF","offset-lg-third":"offset-lg-third_LTbL","offset-lg-5":"offset-lg-5_dGzM","offset-lg-6":"offset-lg-6_kXXi","offset-lg-half":"offset-lg-half_vFHN","offset-lg-7":"offset-lg-7_jIth","offset-lg-8":"offset-lg-8_T0Jx","offset-lg-9":"offset-lg-9_mYmL","offset-lg-10":"offset-lg-10_clJ6","offset-lg-11":"offset-lg-11_zFW2","offset-lg-auto":"offset-lg-auto_W3q4","offset-xl-1":"offset-xl-1_pRWH","offset-xl-2":"offset-xl-2_FX3q","offset-xl-3":"offset-xl-3_P8xx","offset-xl-quarter":"offset-xl-quarter_RLTy","offset-xl-4":"offset-xl-4_n7Vy","offset-xl-third":"offset-xl-third_w0fc","offset-xl-5":"offset-xl-5_vC_8","offset-xl-6":"offset-xl-6_BvQ2","offset-xl-half":"offset-xl-half_HQ16","offset-xl-7":"offset-xl-7_m1bv","offset-xl-8":"offset-xl-8_FJ1u","offset-xl-9":"offset-xl-9_oAbC","offset-xl-10":"offset-xl-10_wwaH","offset-xl-11":"offset-xl-11_HpDF","offset-xl-auto":"offset-xl-auto_Dv5P"});

},
52658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"textField":"textField_IarX","bottomError":"bottomError_XU77","textArea":"textArea_M6yF","input":"input_g6A6","wrap":"wrap_ljmz","medium":"medium_jalb","passwordText":"passwordText_gBIs","passwordButton":"passwordButton_kacG"});

},
69750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (ArrowDownToLine)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
];
const ArrowDownToLine = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("arrow-down-to-line", __iconNode);


//# sourceMappingURL=arrow-down-to-line.js.map


},
48635(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (ArrowRight)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("arrow-right", __iconNode);


//# sourceMappingURL=arrow-right.js.map


},
45773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (Check)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("check", __iconNode);


//# sourceMappingURL=check.js.map


},
59155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (Flag)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
];
const Flag = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("flag", __iconNode);


//# sourceMappingURL=flag.js.map


},
97213(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (Info)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("info", __iconNode);


//# sourceMappingURL=info.js.map


},
8866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (SquareArrowOutUpRight)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6", key: "y09zxi" }],
  ["path", { d: "m21 3-9 9", key: "mpx6sq" }],
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }]
];
const SquareArrowOutUpRight = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("square-arrow-out-up-right", __iconNode);


//# sourceMappingURL=square-arrow-out-up-right.js.map


},
418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (TriangleAlert)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("triangle-alert", __iconNode);


//# sourceMappingURL=triangle-alert.js.map


},
48697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (X)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("x", __iconNode);


//# sourceMappingURL=x.js.map


},
19573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ FeedbackStatusIcon)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(97213);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/flag.js
var flag = __webpack_require__(59155);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(418);
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
25879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  x: () => (Grid)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(52072);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);




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
80782(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  E: () => (GridItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(52072);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);




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
32436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ InfoBanner)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
;// CONCATENATED MODULE: ./packages/components/src/info-banner/InfoBanner.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const InfoBanner_module = ({"infoBanner":"infoBanner_SGaB","success":"success_tp2_","info":"info_M4dU","important":"important_LJBl","warning":"warning_El6H","content":"content_DhUR","heading":"heading_iaBZ","text":"text_FCS8","icon":"icon_F71c","dismissable":"dismissable_tG9p"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/info-banner/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"close":"Close"},"sv":{"close":"Stäng"}}')
// EXTERNAL MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(19573);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/utils/useControlledState.mjs
var useControlledState = __webpack_require__(32240);
;// CONCATENATED MODULE: ./packages/components/src/info-banner/InfoBanner.tsx










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
61121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ Link_Link)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// CONCATENATED MODULE: ./packages/components/src/link/Link.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Link_module = ({"link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var Link = __webpack_require__(10068);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(81013);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js
var arrow_down_to_line = __webpack_require__(69750);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/link/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"opensInNewTab":"Opens in new tab","downloadsFile":"Downloads file"},"sv":{"opensInNewTab":"Öppnas i ny flik","downloadsFile":"Hämtar fil"}}')
;// CONCATENATED MODULE: ./packages/components/src/link/Link.tsx
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
48494(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

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
59600(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r$: () => (/* binding */ GlobalToastRegion),
  ni: () => (/* binding */ toastQueue)
});

// UNUSED EXPORTS: ToastRegion, Toast, useToastState, ToastProvider

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/toast/useToastRegion.mjs + 1 modules
var useToastRegion = __webpack_require__(37080);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/toast/useToast.mjs
var useToast = __webpack_require__(32935);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/toast/useToastState.mjs
var toast_useToastState = __webpack_require__(91573);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
;// CONCATENATED MODULE: ./packages/components/src/toast/Toast.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Toast_module = ({"toastRegion":"toastRegion_KbVp","toast":"toast_gxso","success":"success_KyPa","info":"info_RCx7","important":"important_YYqr","warning":"warning_Rmak","icon":"icon_ZuqY","toastContent":"toastContent_LoSC","toastMessage":"toastMessage_HVa6","viewTransition":"viewTransition_CwQS","slideInTop":"slideInTop_NcfI","slideInEnd":"slideInEnd_Alfu","slideOutTop":"slideOutTop_Hd_W","slideOutEnd":"slideOutEnd_O0VY"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(19573);
;// CONCATENATED MODULE: ./packages/components/src/toast/Toast.tsx
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
10068(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ $984a1fc08f87e4f3$export$e2509388b49734e7),
  N: () => (/* binding */ $984a1fc08f87e4f3$export$a6c7ac8248d6e38a)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/openLink.mjs
var openLink = __webpack_require__(46271);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var useFocusable = __webpack_require__(55602);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/usePress.mjs + 1 modules
var usePress = __webpack_require__(59437);
;// CONCATENATED MODULE: ./node_modules/react-aria/dist/private/link/useLink.mjs






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

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/useFocusRing.mjs
var useFocusRing = __webpack_require__(66683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useHover.mjs
var useHover = __webpack_require__(68068);
;// CONCATENATED MODULE: ./node_modules/react-aria-components/dist/private/Link.mjs








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