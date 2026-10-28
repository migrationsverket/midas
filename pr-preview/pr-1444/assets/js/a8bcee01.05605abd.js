"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([["4395"], {
1561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_design_patterns_forms_mdx_a8b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-forms-mdx-a8b.json
var site_docs_design_patterns_forms_mdx_a8b_namespaceObject = JSON.parse('{"id":"design-patterns/forms","title":"Formulär","description":"Generella riktlinjer","source":"@site/docs/design-patterns/forms.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/forms","permalink":"/pr-preview/pr-1444/design-patterns/forms","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sideBar","previous":{"title":"Knappar och länkar","permalink":"/pr-preview/pr-1444/design-patterns/buttons-and-links"},"next":{"title":"Laddningsindikatorer","permalink":"/pr-preview/pr-1444/design-patterns/page-loading"}}')
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(71184);
// EXTERNAL MODULE: ../../packages/components/src/grid/Grid.tsx
var Grid = __webpack_require__(30230);
// EXTERNAL MODULE: ../../packages/components/src/grid/GridItem.tsx
var GridItem = __webpack_require__(23527);
// EXTERNAL MODULE: ../../packages/components/src/textfield/TextField.tsx + 3 modules
var TextField = __webpack_require__(38173);
;// CONCATENATED MODULE: ./docs/design-patterns/forms.mdx


const frontMatter = {};
const contentTitle = 'Formulär';

const assets = {

};




const toc = [{
  "value": "Generella riktlinjer",
  "id": "generella-riktlinjer",
  "level": 2
}, {
  "value": "Håll nere antalet distraktioner",
  "id": "håll-nere-antalet-distraktioner",
  "level": 3
}, {
  "value": "Ställ bara frågor vi måste ha svar på",
  "id": "ställ-bara-frågor-vi-måste-ha-svar-på",
  "level": 3
}, {
  "value": "Struktur",
  "id": "struktur",
  "level": 3
}, {
  "value": "Obligatorisk vs valfri",
  "id": "obligatorisk-vs-valfri",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "formulär",
        children: "Formulär"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generella-riktlinjer",
      children: "Generella riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Huvudsyftet med ett frågeformulär är att samla in den information vi behöver från användaren. Vi måste därför utforma formulären så att användarna har möjlighet att besvara frågorna på rätt sätt."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "håll-nere-antalet-distraktioner",
      children: "Håll nere antalet distraktioner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validera bara enligt våra valideringsprinciper"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undvik distraktioner, t.ex. grafik eller information, som inte har med frågan att göra."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Markera inte frågor som är obligatoriska förutsatt att större delen av frågorna är obligatoriska (se Obligatorisk vs valfri nedan)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ställ-bara-frågor-vi-måste-ha-svar-på",
      children: "Ställ bara frågor vi måste ha svar på"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be bara om information vi behöver för att ta ett korrekt och rättvist beslut."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ställ inte samma fråga flera gånger."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ställ inte frågor vi redan har svar på eller som vi kan få svar på från andra källor."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Förklara varför vi ställer specifika frågor."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "struktur",
      children: "Struktur"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gruppera frågor som är relaterade till varandra, antingen på samma sida eller över flera sidor."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Placera inmatningsfält i en vertikal kolumn."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Använd en logisk struktur för vilken ordning frågorna ställs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Använd logisk struktur hur information som användaren ska lämna skrivs in. Följ konventioner för exempelvis personnummer/datum/kreditkortsuppgifter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undvik platshållare i inmatningsfält. Instruktioner för vad som ska skrivas in ska framgå av frågan som ställs, informationstext eller etiketten."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Beskriv format eller andra inmatningsinstruktioner om det behövs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Välj längd på och typ av inmatningsfält baserat på informationen användaren förväntas skriva in."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undvik funktionalitet som tömmer ett formulär eller en formulärsida."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obligatorisk-vs-valfri",
      children: "Obligatorisk vs valfri"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Huvudregeln är att bara fråga användaren om uppgifter som är nödvändiga för att ta ett beslut eller liknande.\nFöljer vi den regeln faller det sig naturligt att de flesta fält i ett formulär är obligatoriska. Det ger oss grundregeln: Vi markerar endast eventuella valfria fält med texten ", (0,jsx_runtime.jsx)(_components.code, {
        children: "”(valfritt)”"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(Grid/* .Grid */.x, {
        children: [(0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
          size: "6",
          children: (0,jsx_runtime.jsx)(TextField/* .TextField */.A, {
            label: "Fullständigt namn",
            description: "För och efternamn",
            isRequired: true,
            errorMessage: "Detta är ett obligatoriskt fält"
          })
        }), (0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
          size: "6",
          children: (0,jsx_runtime.jsx)(TextField/* .TextField */.A, {
            label: "Favoritfrukter (Valfritt)",
            description: "Kan lämnas tomt"
          })
        })]
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

}]);