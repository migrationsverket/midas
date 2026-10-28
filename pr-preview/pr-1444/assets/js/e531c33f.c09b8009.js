"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([["325"], {
56519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_design_patterns_read_only_mdx_e53_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-read-only-mdx-e53.json
var site_docs_design_patterns_read_only_mdx_e53_namespaceObject = JSON.parse('{"id":"design-patterns/read-only","title":"Read-only","description":"Normalfallet i ett gränssnitt är att alla kontroller, till exempel textfält eller kryssrutor, går att interagera med. Om det uppstår ett läge där en specifik kontroll och dess information inte är relevant är huvudregeln att inte visa kontrollen för användaren. Men, i de fall där informationen i kontrollen är relevant men användaren inte ska kunna interagera med kontrollen kan vi sätta komponenterna i read-only-läge. I detta läge har kontrollen ett annorlunda utseende för att indikera att den inte går att interagera med.","source":"@site/docs/design-patterns/read-only.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/read-only","permalink":"/pr-preview/pr-1444/design-patterns/read-only","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sideBar","previous":{"title":"Laddningsindikatorer","permalink":"/pr-preview/pr-1444/design-patterns/page-loading"},"next":{"title":"Sökning och filtrering","permalink":"/pr-preview/pr-1444/design-patterns/search-and-filter"}}')
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(71184);
// EXTERNAL MODULE: ../../packages/components/src/info-banner/InfoBanner.tsx + 2 modules
var InfoBanner = __webpack_require__(18188);
// EXTERNAL MODULE: ../../packages/components/src/textfield/TextField.tsx + 3 modules
var textfield_TextField = __webpack_require__(38173);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
;// CONCATENATED MODULE: ./src/components/examples/read-only/ReadOnlyExamples.tsx



const AccessLevelExample = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "card",
        style: {
            gap: '16px'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoBanner/* .InfoBanner */.z, {
                type: "info",
                message: "Du har endast beh\xf6righet att redigera vissa f\xe4lt. Kontakta din administrat\xf6r om f\xf6r beh\xf6righetsfr\xe5gor."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(textfield_TextField/* .TextField */.A, {
                label: "Kortnummer",
                value: "12345678",
                isReadOnly: true
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(textfield_TextField/* .TextField */.A, {
                label: "Anv\xe4ndarnamn"
            })
        ]
    });
};
const EditFormExample = ()=>{
    const [isReadOnly, setReadonly] = useState(true);
    const [formData, setFormData] = useState({
        kortnummer: '12345678',
        anvandarnamn: 'Midas'
    });
    const handleChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleToggle = ()=>{
        setReadonly((prev)=>!prev);
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: "card",
        style: {
            gap: '16px'
        },
        children: [
            /*#__PURE__*/ _jsx(TextField, {
                label: "Kortnummer",
                value: formData.kortnummer,
                onChange: (value)=>handleChange('kortnummer', value),
                isReadOnly: isReadOnly
            }),
            /*#__PURE__*/ _jsx(TextField, {
                label: "Anv\xe4ndarnamn",
                value: formData.anvandarnamn,
                onChange: (value)=>handleChange('anvandarnamn', value),
                isReadOnly: isReadOnly
            }),
            /*#__PURE__*/ _jsx(Button, {
                onPress: handleToggle,
                children: isReadOnly ? 'Redigera' : 'Spara'
            })
        ]
    });
};

;// CONCATENATED MODULE: ./docs/design-patterns/read-only.mdx


const frontMatter = {};
const contentTitle = 'Read-only';

const assets = {

};




const toc = [{
  "value": "När använder vi read-only",
  "id": "när-använder-vi-read-only",
  "level": 2
}, {
  "value": "När använder vi inte read-only",
  "id": "när-använder-vi-inte-read-only",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "read-only",
        children: "Read-only"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Normalfallet i ett gränssnitt är att alla kontroller, till exempel textfält eller kryssrutor, går att interagera med. Om det uppstår ett läge där en specifik kontroll och dess information inte är relevant är huvudregeln att inte visa kontrollen för användaren. Men, i de fall där informationen i kontrollen är relevant men användaren inte ska kunna interagera med kontrollen kan vi sätta komponenterna i read-only-läge. I detta läge har kontrollen ett annorlunda utseende för att indikera att den inte går att interagera med."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Read-only finns till ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/calendar",
        children: "Calendar"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/checkbox",
        children: "Checkbox"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/combobox",
        children: "Combobox"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/datefield",
        children: "DateField"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/date-picker",
        children: "DatePicker"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/radio",
        children: "Radio"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/textarea",
        children: "TextArea"
      }), " och ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/textfield",
        children: "Textfield"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Read-only finns inte till Select",
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Vi har bara read-only till de komponenter där React Aria har property isReadOnly. Deras Select, som vår Select bygger på, har inte det i dagsläget. Om du har en Select som du vill göra read-only rekommenderar vi att använda Textfield och fylla den med informationen från Select."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "när-använder-vi-read-only",
      children: "När använder vi read-only"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typexemplet på när det är lämpligt att använda read-only är när en användare har begränsad behörighet. Den kan inte ändra vissa kontroller men behöver kunna se informationen i fälten. Vi bör alltid komplettera med information till användaren om varför vissa av kontrollerna är read-only."
    }), "\n", (0,jsx_runtime.jsx)(AccessLevelExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "när-använder-vi-inte-read-only",
      children: "När använder vi inte read-only"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi använder inte read-only som ett alternativ till Disabled eller vice versa. Disabled och read-only har två helt olika syften."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi använder inte read-only för att presentera information. När vi ska presentera information eller data så är huvudregeln att vi visar det som text."
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

}]);