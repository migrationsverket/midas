"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4146],{

/***/ 16025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--text-disabled":"light-dark(#bfbfbf, #525252)","--border-primary":"light-dark(#171717, #f2f2f2)","--border-disabled":"light-dark(#bfbfbf, #525252)","--breakpoint-sm":"(max-width: 767px)","--support-border-warning":"light-dark(#e62323, #e62323)","--icon-on-color":"light-dark(#ffffff, #ffffff)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--field-disabled":"light-dark(#f2f2f2, #262626)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--line-height-30":"1.25rem","wrap":"wrap_YzPY","checkboxInner":"checkboxInner_Nam1","checkbox":"checkbox_J2GB","checkboxGroup":"checkboxGroup_iAq9"});

/***/ }),

/***/ 19060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ FieldError_FieldError)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
;// ./packages/components/src/field-error/FieldError.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FieldError_module = ({"tokens":"\"../theme/tokens.css\"","--text-warning":"light-dark(#e62323, #eb4e4e)","--font-family":"\"Inter\", sans-serif","fieldError":"fieldError_K9VX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/field-error/FieldError.tsx
var FieldError_FieldError=/*#__PURE__*/react.forwardRef(function(props,ref){var children=props.children,isInvalid=props.isInvalid;var className=(0,clsx/* default */.A)(FieldError_module.fieldError,props.className);var context=react.useContext(FieldError/* FieldErrorContext */.C);if(!context&&isInvalid&&typeof children!=='function'){return/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{className:className,children:children});}if(!(context!=null&&context.isInvalid))return null;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,Object.assign({},props,{ref:ref,className:className}));});

/***/ }),

/***/ 19615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var dist_Text = __webpack_require__(27279);
;// ./packages/components/src/text/Text.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Text_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--font-size-20":"0.875rem","--font-size-30":"1rem","--line-height-20":"1.125rem","--line-height-30":"1.25rem","--line-height-40":"1.375rem","--line-height-50":"1.5rem","--text-disabled":"light-dark(#bfbfbf, #525252)","body-01":"body-01_whJM","body-02":"body-02_Xi1v","description":"description_XYgX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","variant","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'body-02':_ref$variant,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'body-01':Text_module['body-01'],'body-02':Text_module['body-02']};var textProps=Object.assign({className:(0,clsx/* default */.A)(rest.slot==='description'?Text_module.description:classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ }),

/***/ 30515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_forms_mdx_ac3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-forms-mdx-ac3.json
const site_docs_dev_forms_mdx_ac3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/forms","title":"Formulär","description":"Utvecklarinstruktioner för formulär","source":"@site/docs/dev/forms.mdx","sourceDirName":"dev","slug":"/dev/forms","permalink":"/pr-preview/pr-660/dev/forms","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Formulär","description":"Utvecklarinstruktioner för formulär","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regenerator.js
var regenerator = __webpack_require__(22007);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10467);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./apps/docs/src/components/examples/form/FormExamples.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FormExamples_module = ({"form":"form_Z3dD"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Form.mjs
var Form = __webpack_require__(23128);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 4 modules
var TextField = __webpack_require__(79353);
// EXTERNAL MODULE: ./packages/components/src/checkbox/CheckboxGroup.tsx
var CheckboxGroup = __webpack_require__(39220);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx
var Checkbox = __webpack_require__(38545);
// EXTERNAL MODULE: ./packages/components/src/button/ButtonGroup.tsx + 1 modules
var ButtonGroup = __webpack_require__(49764);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/spinner/Spinner.tsx + 1 modules
var Spinner = __webpack_require__(69336);
;// ./apps/docs/src/components/examples/form/FormExamples.tsx
var UncontrolledForm=function UncontrolledForm(){var _React$useState=react.useState(null),result=_React$useState[0],setResult=_React$useState[1];var handleSubmit=function handleSubmit(e){e.preventDefault();var data=Object.fromEntries(new FormData(e.currentTarget));setResult(data);};return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* Form */.l,{onSubmit:handleSubmit,className:FormExamples_module.form,validationBehavior:"native"// use 'aria' to allow submit when invalid
,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"Namn",name:"name",isRequired:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"E-post",type:"email",name:"email",isRequired:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxGroup/* CheckboxGroup */.$,{label:"Spara mina uppgifter",name:"saveData",isRequired:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"agree",children:"Jag godk\xE4nner"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ButtonGroup/* ButtonGroup */.e,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{type:"submit",children:"Skicka"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{type:"reset",variant:"secondary",children:"Rensa"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:result&&/*#__PURE__*/(0,jsx_runtime.jsx)("pre",{children:JSON.stringify(result,null,2)})})]});};var ControlledForm=function ControlledForm(){var _React$useState2=react.useState(''),name=_React$useState2[0],setName=_React$useState2[1];var onSubmit=function onSubmit(e){e.preventDefault();};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* Form */.l,{onSubmit:onSubmit,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{name:"name",label:"Namn",onChange:setName,isRequired:true}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:["Ditt namn: ",name]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{type:"submit",children:"Skicka"})]});};var RealtimeValidation=function RealtimeValidation(){var _password$match,_password$match2;var _React$useState3=react.useState(''),password=_React$useState3[0],setPassword=_React$useState3[1];var errors=[];if(password.length<8){errors.push('Lösenordet måste vara fler än 8 tecken.');}if(((_password$match=password.match(/[A-Z]/g))!=null?_password$match:[]).length<2){errors.push('Lösenordet måste innehålla minst 2 versaler.');}if(((_password$match2=password.match(/[^a-z]/gi))!=null?_password$match2:[]).length<2){errors.push('Lösenordet måste innehålla minst två symboler.');}return/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"L\xF6senord",style:{whiteSpace:'pre-line'},isInvalid:errors.length>0,value:password,onChange:setPassword,errorMessage:errors.join('\n'),errorPosition:"bottom"});};var ServerValidation=function ServerValidation(){var _React$useState4=react.useState(false),isWaiting=_React$useState4[0],setIsWaiting=_React$useState4[1];// Fake server used in this example.
var delay=function delay(ms){return new Promise(function(resolve){return setTimeout(resolve,ms);});};function callServer(_x){return _callServer.apply(this,arguments);}function _callServer(){_callServer=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee2(data){return (0,regenerator/* default */.A)().w(function(_context2){while(1)switch(_context2.n){case 0:setIsWaiting(true);_context2.n=1;return delay(1000);case 1:setIsWaiting(false);return _context2.a(2,{errors:{username:"Tyv\xE4rr, anv\xE4ndarnamnet "+data.username+" \xE4r upptaget."}});}},_callee2);}));return _callServer.apply(this,arguments);}var _React$useState5=react.useState({}),errors=_React$useState5[0],setErrors=_React$useState5[1];var onSubmit=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(e){var data,result;return (0,regenerator/* default */.A)().w(function(_context){while(1)switch(_context.n){case 0:e.preventDefault();data=Object.fromEntries(new FormData(e.currentTarget));_context.n=1;return callServer(data);case 1:result=_context.v;setErrors(result.errors);case 2:return _context.a(2);}},_callee);}));return function onSubmit(_x2){return _ref.apply(this,arguments);};}();return/*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* Form */.l,{validationErrors:errors,onSubmit:onSubmit,className:FormExamples_module.form,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"Anv\xE4ndarnamn",name:"username",isRequired:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"L\xF6senord",name:"password",type:"password",isRequired:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(ButtonGroup/* ButtonGroup */.e,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{type:"submit",children:isWaiting?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Spinner/* Spinner */.y,{isOnColor:true,small:true}),"Skickar..."]}):'Skicka'})})]});};
;// ./apps/docs/docs/dev/forms.mdx


const frontMatter = {
	title: 'Formulär',
	description: 'Utvecklarinstruktioner för formulär',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Formulär';

const assets = {

};




const toc = [{
  "value": "React Aria &lt;Form&gt;",
  "id": "react-aria-form",
  "level": 3
}, {
  "value": "Normal användning",
  "id": "normal-användning",
  "level": 2
}, {
  "value": "Uncontrolled form",
  "id": "uncontrolled-form",
  "level": 3
}, {
  "value": "Controlled form",
  "id": "controlled-form",
  "level": 3
}, {
  "value": "Validering",
  "id": "validering",
  "level": 2
}, {
  "value": "Realtime validation",
  "id": "realtime-validation",
  "level": 3
}, {
  "value": "Server validation",
  "id": "server-validation",
  "level": 3
}, {
  "value": "Tredjeparts klientformulär",
  "id": "tredjeparts-klientformulär",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "formulär",
        children: "Formulär"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas formulärskomponenter bygger på React Aria och fungerar att användas i formulär via flera olika\nalternativ. För referens och mer detaljer, se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/forms.html",
        children: "React Aria Forms"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Midas formulärskomponenter är en komposition av React Arias <Label>, <FieldError> och själva formulärskomponenten\noch därmed finns stöd för tillgänglighetsverktyg som skärmläsare inbyggt utan att pussla ihop komponenterna var för sig. Så\nlänge ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), " och ", (0,jsx_runtime.jsx)(_components.code, {
          children: "label"
        }), " är specificerat kan man förvänta sig att komponenten normalt i de flesta formulär."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Har du problem med att integrera Midas formulärskomponenter i er applikation eller har du hittat en bugg? Skapa en\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/migrationsverket/midas/issues/new/choose",
        children: "issue"
      }), " så hjälper vi dig gärna!"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "react-aria-form",
      children: "React Aria <Form>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponenterna går att integrera normalt med ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "<form>"
      }), " (native HTML) men det rekommenderas att använda\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "<Form>"
      }), " från React Aria som är en överlagring med lite extra funktioner för validering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// highlight-next-line\nimport { Form } from 'react-aria-components'\nimport { TextField } from '@midas-ds/components'\n\n//highlight-next-line\n;<Form>\n  <TextField\n    label={'Namn'}\n    name={'name'}\n  />\n  //highlight-next-line\n</Form>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "normal-användning",
      children: "Normal användning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Den enklaste varianten för att använda ett formulär är via browserns ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/FormData",
        children: "FormData API"
      }), ". Submit är inaktiverat\nnär formuläret är ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "invalid"
      }), " precis som html-form men detta beteende kan styras via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validationBehavior"
      }), ".\nProp ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " fungerar precis som native form och är referens till fältet som avses. Om något fält är ogiltigt\nfokuseras det automatiskt vid ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "submit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uncontrolled-form",
      children: "Uncontrolled form"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "export const UncontrolledForm = () => {\n  const [result, setResult] = React.useState(null)\n  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault()\n    const data = Object.fromEntries(new FormData(e.currentTarget))\n    setResult(data)\n  }\n\n  return (\n    <>\n      <Form\n        onSubmit={handleSubmit}\n        // use 'aria' to allow submit when invalid\n        validationBehavior={'native'}\n      >\n        <TextField\n          label={'Namn'}\n          name={'name'}\n          isRequired\n        />\n        <TextField\n          label={'E-post'}\n          type={'email'}\n          name={'email'}\n          isRequired\n        />\n        <CheckboxGroup\n          label={'Spara mina uppgifter'}\n          name={'saveData'}\n          isRequired\n        >\n          <Checkbox value={'agree'}>Jag godkänner</Checkbox>\n        </CheckboxGroup>\n        <ButtonGroup>\n          <Button type={'submit'}>Skicka</Button>\n          <Button\n            type={'reset'}\n            variant={'secondary'}\n          >\n            Rensa\n          </Button>\n        </ButtonGroup>\n      </Form>\n      <span>{result && <pre>{JSON.stringify(result)}</pre>}</span>\n    </>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: 'card',
      children: (0,jsx_runtime.jsx)(UncontrolledForm, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "controlled-form",
      children: "Controlled form"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För tillgång till formulärsdata även innan ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "submit"
      }), ", använd ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "controlled"
      }), " version av komponenterna\noch hantera state via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "export const ControlledForm = () => {\n  const [name, setName] = React.useState('')\n  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault()\n  }\n  return (\n    <Form onSubmit={onSubmit}>\n      <TextField\n        name={'name'}\n        label={'Name'}\n        onChange={setName}\n        isRequired\n      />\n      <div>Ditt namn: {name}</div>\n      <Button type={'submit'}>Submit</Button>\n    </Form>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: 'card',
      children: (0,jsx_runtime.jsx)(ControlledForm, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validering",
      children: "Validering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponenterna funkar enligt normal HTML ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "constraint validation"
      }), " och bygger på felmeddelanden från browser,\ndessa presenteras på det språket som är valt via inställningarna. Se dokumentation om ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/localization",
        children: "lokalisering"
      }), "\nför mer information."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "realtime-validation",
      children: "Realtime validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Validering görs som standard vid ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "blur"
      }), " eller ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "submit"
      }), ". Ibland kan det vara önskvärt att ge användaren snabbare\nfeedback, till exempel för att välja ett godkänt lösenord."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "export const RealtimeValidation = () => {\n  let [password, setPassword] = React.useState('')\n  let errors = []\n  if (password.length < 8) {\n    errors.push('Lösenordet måste vara fler än 8 tecken.')\n  }\n  if ((password.match(/[A-Z]/g) ?? []).length < 2) {\n    errors.push('Lösenordet måste innehålla minst 2 versaler.')\n  }\n  if ((password.match(/[^a-z]/gi) ?? []).length < 2) {\n    errors.push('Lösenordet måste innehålla minst två symboler.')\n  }\n\n  return (\n    <>\n      <TextField\n        label={'Lösenord'}\n        style={{ whiteSpace: 'pre-line' }}\n        isInvalid={errors.length > 0}\n        value={password}\n        onChange={setPassword}\n        errorMessage={errors.join('\\n')}\n        errorPosition={'bottom'}\n      />\n    </>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: 'card',
      children: (0,jsx_runtime.jsx)(RealtimeValidation, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Felmeddelande kan presenteras under eller över formulärskomponenten via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "errorPosition"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "server-validation",
      children: "Server validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Förutom att validera input på klienten bör ett normalt mönster vara att validera på serversidan också. En metod är att\nsätta prop ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validationErrors"
      }), " på <Form> och presentera felmeddelanden den vägen. Objektet ska då matcha\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " props på formulärsobjektet för att fungera med automatik. När inmatning ändras återställs felmeddelandet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "export const ServerValidation = () => {\n  const [isWaiting, setIsWaiting] = React.useState(false)\n  // Fake server used in this example.\n  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))\n  async function callServer(data) {\n    setIsWaiting(true)\n    await delay(1000)\n    setIsWaiting(false)\n    return { errors: { username: `Tyvärr, användarnamnet ${data.username} är upptaget.` } }\n  }\n  let [errors, setErrors] = React.useState({})\n  let onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault()\n\n    let data = Object.fromEntries(new FormData(e.currentTarget))\n    let result = await callServer(data)\n    setErrors(result.errors)\n  }\n\n  return (\n    <Form\n      validationErrors={errors}\n      onSubmit={onSubmit}\n      className={styles.form}\n    >\n      <TextField\n        label={'Användarnamn'}\n        name='username'\n        isRequired\n      />\n      <TextField\n        label={'Lösenord'}\n        name='password'\n        type='password'\n        isRequired\n      />\n      <ButtonGroup>\n        <Button type='submit'>\n          {isWaiting ? (\n            <>\n              <Spinner\n                isOnColor\n                small\n              />\n              Skickar...\n            </>\n          ) : (\n            'Skicka'\n          )}\n        </Button>\n      </ButtonGroup>\n    </Form>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: 'card',
      children: (0,jsx_runtime.jsx)(ServerValidation, {})
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Beroende på ramverk finns en uppsjö av olika tekniker för att åstadkomma serverside validation.\nPå ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://react-spectrum.adobe.com/react-aria/forms.html#server-validation",
          children: "React Arias dokumentation"
        }), "\nfinns information om hur det går att åstadkomma detta bland annat med ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "schema validation"
        }), " och\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "React Server Actions"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tredjeparts-klientformulär",
      children: "Tredjeparts klientformulär"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Det finns även olika tredjepartsbibliotek för att underlätta hantering av formulär på klienten. I princip ska det\ninte vara något hinder att använda dessa men det innebär ofta lite extra boilerplate. För till exempel\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.react-hook-form.com/",
        children: "React Hook Form"
      }), " går det att integrera Midas enligt exemplet nedan. Om du använder\nnågon annan teknik för att rendera formulär? Midas bygger i grunden på React Aria som i sin tur renderar native element\nför en förutsägbar DOM, därmed borde det oftast vara möjligt att integrera oavsett tekniken runtomkring."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["I utgångspunkt rekommenderar vi att utgå från React Aria ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "<Form>"
      }), " då det innebär minst boilerplate men vi\nhjälper gärna till att få Midas komponenter att fungera i den teknikstacken ni har valt att arbeta med."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Controller, useForm } from 'react-hook-form'\n\nexport const HookFormExample = () => {\n  let { handleSubmit, control } = useForm()\n  let onSubmit = data => {\n    // Call your API here...\n  }\n\n  return (\n    <Form onSubmit={handleSubmit(onSubmit)}>\n      <Controller\n        control={control}\n        name='name'\n        rules={{ required: 'Name is required.' }}\n        render={({ field: { name, value, onChange, onBlur, ref }, fieldState: { invalid, error } }) => (\n          <TextField\n            label={'Name'}\n            name={name}\n            value={value}\n            onChange={onChange}\n            onBlur={onBlur}\n            isRequired\n            errorMessage={error?.message}\n            // Let React Hook Form handle validation instead of the browser.\n            validationBehavior='aria'\n            isInvalid={invalid}\n            // The ref is needed to focus invalid elements\n            ref={ref}\n          ></TextField>\n        )}\n      />\n      <Button type='submit'>Submit</Button>\n    </Form>\n  )\n}\n"
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



/***/ }),

/***/ 34704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var dist_Label = __webpack_require__(21704);
;// ./packages/components/src/label/Label.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Label_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--font-size-30":"1rem","--line-height-30":"1.25rem","--text-disabled":"light-dark(#bfbfbf, #525252)","labelBase":"labelBase_BRgo"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var labelProps=Object.assign({className:(0,clsx/* default */.A)(Label_module.labelBase,className),elementType:elementType||DEFAULT_ELEMENT},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Label/* Label */.J,Object.assign({},labelProps,{children:children}));};

/***/ }),

/***/ 38545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98587);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2581);
/* harmony import */ var _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
'use client';var _excluded=["children"];var Checkbox=function Checkbox(_ref){var _children=_ref.children,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .Checkbox */ .Sc,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.checkbox,props.className)},props,{children:function children(_ref2){var isIndeterminate=_ref2.isIndeterminate;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.checkboxInner,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:16,height:16,viewBox:"0 0 18 18","aria-hidden":"true",children:isIndeterminate?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:4,y:8,width:10,height:2}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline",{points:"3,9 7,13 15,4"})})}),_children]});}}));};

/***/ }),

/***/ 39107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ TextFieldBase)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(73413);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
;// ./packages/components/src/character-counter/CharacterCounter.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CharacterCounter_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--line-height-20":"1.125rem","--font-size-20":"0.875rem","--text-warning":"light-dark(#e62323, #eb4e4e)","--text-primary":"light-dark(#171717, #f2f2f2)","characterCounter":"characterCounter_Rd9H"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/character-counter/CharacterCounter.tsx
var CharacterCounter=/*#__PURE__*/react.forwardRef(function(props,ref){var _value$toString;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Input/* InputContext */.E);props=_useContextProps[0];var _props=props,maxLength=_props.maxLength,value=_props.value,isLonely=_props.isLonely;var _ref=(_value$toString=value==null?void 0:value.toString())!=null?_value$toString:'',length=_ref.length;var isMaxLengthDefined=maxLength!==undefined;return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:CharacterCounter_module.characterCounter,"data-exceeded":isMaxLengthDefined&&length>maxLength||undefined,"data-lonely":isLonely||undefined,children:isMaxLengthDefined?length+" / "+maxLength:length});});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/textfield/TextFieldBase.tsx
var TextFieldBase=/*#__PURE__*/react.forwardRef(function(props,ref){var _clsx;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,TextField/* TextFieldContext */.H);props=_useContextProps[0];var _props=props,label=_props.label,description=_props.description,errorMessage=_props.errorMessage,showCounter=_props.showCounter,_props$errorPosition=_props.errorPosition,errorPosition=_props$errorPosition===void 0?'top':_props$errorPosition,_props$size=_props.size,size=_props$size===void 0?'large':_props$size;return/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* TextField */.A,Object.assign({},props,{className:(0,clsx/* clsx */.$)(TextField_module/* default */.A.textField,(_clsx={},_clsx[TextField_module/* default */.A.medium]=size==='medium',_clsx)),children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),showCounter&&/*#__PURE__*/(0,jsx_runtime.jsx)(CharacterCounter,{isLonely:!description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:TextField_module/* default */.A.wrap,children:props.children}),errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",className:TextField_module/* default */.A.bottomError,children:errorMessage})]}));});

/***/ }),

/***/ 39220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ CheckboxGroup)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2581);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63899);
/* harmony import */ var _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16025);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38545);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34704);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19615);
/* harmony import */ var _field_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19060);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["label","description","errorMessage","showSelectAll","children","errorPosition"];var CheckboxGroup=function CheckboxGroup(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,showSelectAll=_ref.showSelectAll,children=_ref.children,_ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(),isAllSelected=_React$useState[0],setIsAllSelected=_React$useState[1];var ToogleAll=function ToogleAll(){var state=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .CheckboxGroupStateContext */ .pf);var childValues=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement).map(function(child){return child.props.value;});var toggleAll=function toggleAll(){if(isAllSelected!=='all'){setIsAllSelected('all');return state==null?void 0:state.setValue(['toggleAll'].concat(childValues));}setIsAllSelected('none');return state==null?void 0:state.setValue([]);};react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function(){var _state$value,_state$value2;var amountOfChildren=childValues.length;var totalAmount=childValues.length+1;var currentAmount=(state==null||(_state$value=state.value)==null?void 0:_state$value.length)||0;if(currentAmount===0)setIsAllSelected('none');if(currentAmount>0&&currentAmount<amountOfChildren)setIsAllSelected('some');if(currentAmount!==totalAmount)state==null||state.removeValue('toggleAll');if(currentAmount===amountOfChildren&&!(state!=null&&(_state$value2=state.value)!=null&&_state$value2.includes('toggleAll'))){state==null||state.addValue('toggleAll');setIsAllSelected('all');}// eslint-disable-next-line react-hooks/exhaustive-deps
},[childValues.length,state==null?void 0:state.value]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_5__/* .Checkbox */ .S,{value:"toggleAll",isSelected:isAllSelected==='all',isIndeterminate:isAllSelected==='some',onChange:function onChange(){return toggleAll();},children:"V\xE4lj alla"});};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .CheckboxGroup */ .$Q,Object.assign({className:_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.checkboxGroup},props,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_label__WEBPACK_IMPORTED_MODULE_6__/* .Label */ .J,{children:label}),description&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_text__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .E,{slot:"description",children:description}),errorPosition==='top'&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_field_error__WEBPACK_IMPORTED_MODULE_8__/* .FieldError */ .b,{children:errorMessage}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_9__/* .Group */ .Y,{className:_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.wrap,children:[showSelectAll&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToogleAll,{}),children]}),errorPosition==='bottom'&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_field_error__WEBPACK_IMPORTED_MODULE_8__/* .FieldError */ .b,{children:errorMessage})]}));};

/***/ }),

/***/ 49764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ ButtonGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/button/ButtonGroup.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ButtonGroup_module = ({"tokens":"\"../theme/tokens.css\"","--breakpoint-sm":"(max-width: 767px)","buttonGroup":"buttonGroup_mVqm"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/button/ButtonGroup.tsx
var _excluded=["children","className","aria-label"];/**
 * Group several buttons together.
 *
 * @interface React.HTMLAttributes<HTMLDivElement>
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */var ButtonGroup=function ButtonGroup(_ref){var children=_ref.children,className=_ref.className,ariaLabel=_ref['aria-label'],rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({role:"group","aria-label":ariaLabel,className:(0,clsx/* default */.A)(ButtonGroup_module.buttonGroup,className)},rest,{children:children}));};

/***/ }),

/***/ 54031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86707);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65014);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["variant","fullwidth","className","iconPlacement","size","icon","iconSize"];/**
 * Button to perform various actions.
 *
 * @interface MidasButton
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */var Button=function Button(_ref){var _ref$variant=_ref.variant,variant=_ref$variant===void 0?'primary':_ref$variant,fullwidth=_ref.fullwidth,className=_ref.className,iconPlacement=_ref.iconPlacement,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,IconComponent=_ref.icon,iconSize=_ref.iconSize,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.button,variant==='primary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.primary,variant==='secondary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.secondary,variant==='tertiary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.tertiary,variant==='danger'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.danger,variant==='icon'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.iconBtn,fullwidth&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fullwidth,size==='medium'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.medium,iconPlacement==='right'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.iconRight,className)},rest,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[IconComponent&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconComponent,{"aria-hidden":true,size:iconSize!=null?iconSize:20}),rest.children]})}));};

/***/ }),

/***/ 69336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ Spinner)
});

;// ./packages/components/src/spinner/Spinner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Spinner_module = ({"tokens":"\"../theme/tokens.css\"","--icon-primary":"light-dark(#171717, #f2f2f2)","--icon-on-color":"light-dark(#ffffff, #ffffff)","container":"container_ytPE","spinner":"spinner_eR4D","rotating":"rotating_m95R","dark":"dark_YbwO","vsHidden":"vsHidden_wdPf"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(8723);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/spinner/Spinner.tsx
var Spinner=function Spinner(_ref){var small=_ref.small,_ref$isOnColor=_ref.isOnColor,isOnColor=_ref$isOnColor===void 0?false:_ref$isOnColor;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Spinner_module.container,role:"status",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(loader_circle/* default */.A,{className:(0,clsx/* default */.A)(Spinner_module.spinner,isOnColor&&Spinner_module.dark),size:small?16:32,strokeWidth:small?2:3,absoluteStrokeWidth:true}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Spinner_module.vsHidden,children:"Laddar, v\xE4nligen v\xE4nta."})]});};

/***/ }),

/***/ 73413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--border-disabled":"light-dark(#bfbfbf, #525252)","--field-disabled":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--support-border-warning":"light-dark(#e62323, #e62323)","--border-primary":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--font-family":"\"Inter\", sans-serif","--text-disabled":"light-dark(#bfbfbf, #525252)","--z-index-base":"1","--z-index-above":"10","--size-130":"2.5rem","--size-150":"3rem","textField":"textField_IarX","bottomError":"bottomError_XU77","textArea":"textArea_M6yF","wrap":"wrap_ljmz","medium":"medium_jalb","input":"input_g6A6","passwordText":"passwordText_gBIs","passwordButton":"passwordButton_kacG"});

/***/ }),

/***/ 79353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TextField)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextFieldBase.tsx + 2 modules
var TextFieldBase = __webpack_require__(39107);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(73413);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/@internationalized/string/dist/LocalizedStringDictionary.mjs
var LocalizedStringDictionary = __webpack_require__(92122);
// EXTERNAL MODULE: ./node_modules/@internationalized/string/dist/LocalizedStringFormatter.mjs
var LocalizedStringFormatter = __webpack_require__(57612);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
;// ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
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
 */var cache=new WeakMap();function getCachedDictionary(strings){var dictionary=cache.get(strings);if(!dictionary){dictionary=new LocalizedStringDictionary/* LocalizedStringDictionary */.B(strings,'sv-SE');cache.set(strings,dictionary);}return dictionary;}/**
 * Returns a cached LocalizedStringDictionary for the given strings.
 */function useLocalizedStringDictionary(strings,packageName){return packageName&&LocalizedStringDictionary/* LocalizedStringDictionary */.B.getGlobalDictionaryForPackage(packageName)||getCachedDictionary(strings);}/**
 * Provides localized string formatting for the current locale. Supports interpolating variables,
 * selecting the correct pluralization, and formatting numbers. Automatically updates when the locale changes.
 * @param strings - A mapping of languages to localized strings by key.
 */function useLocalizedStringFormatter(strings,packageName){var _useLocale=(0,context/* useLocale */.Y)(),locale=_useLocale.locale;var dictionary=useLocalizedStringDictionary(strings,packageName);return (0,react.useMemo)(function(){return new LocalizedStringFormatter/* LocalizedStringFormatter */.J(locale,dictionary);},[dictionary,locale]);}
;// ./packages/components/src/textfield/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"hide":"Hide","show":"Show"},"sv":{"hide":"Dölj","show":"Visa"},"es":{"hide":"Ocultar","show":"Mostrar"},"fr":{"hide":"Cacher","show":"Afficher"},"de":{"hide":"Verstecken","show":"Anzeigen"},"ja":{"hide":"隠す","show":"表示"},"zh":{"hide":"隐藏","show":"显示"},"ar":{"hide":"إخفاء","show":"إظهار"},"ru":{"hide":"Скрыть","show":"Показать"},"pt":{"hide":"Ocultar","show":"Mostrar"},"it":{"hide":"Nascondi","show":"Mostra"},"ko":{"hide":"숨기기","show":"보여주기"},"hi":{"hide":"छुपाएँ","show":"दिखाएँ"},"nl":{"hide":"Verbergen","show":"Tonen"},"pl":{"hide":"Ukryj","show":"Pokaż"},"tr":{"hide":"Gizle","show":"Göster"},"vi":{"hide":"Ẩn","show":"Hiện"},"th":{"hide":"ซ่อน","show":"แสดง"},"id":{"hide":"Sembunyikan","show":"Tampilkan"},"ms":{"hide":"Sembunyikan","show":"Tunjukkan"}}');
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/textfield/PasswordField.tsx
var PasswordField=function PasswordField(_ref){var value=_ref.value;var _React$useState=react.useState(false),showPassword=_React$useState[0],setShowPassword=_React$useState[1];var handlePress=function handlePress(){return setShowPassword(function(previousValue){return!previousValue;});};var stringFormatter=useLocalizedStringFormatter(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module/* default */.A.passwordText,children:value}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"tertiary",onPress:handlePress,className:TextField_module/* default */.A.passwordButton,children:showPassword?stringFormatter.format('hide'):stringFormatter.format('show')})]});};
;// ./packages/components/src/textfield/Input.tsx
var Input_Input=/*#__PURE__*/react.forwardRef(function(props,ref){;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Input/* InputContext */.E);props=_useContextProps[0];ref=_useContextProps[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module/* default */.A.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(TextField_module/* default */.A.input,props.className)})),props.type==='password'&&/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,Object.assign({},props))]});});
;// ./packages/components/src/textfield/TextField.tsx
'use client';var _excluded=["className","form","list"];var TextField=/*#__PURE__*/react.forwardRef(function(_ref,ref){var className=_ref.className,form=_ref.form,list=_ref.list,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(TextFieldBase/* TextFieldBase */.J,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_Input,{className:(0,clsx/* default */.A)(className),form:form,list:list,ref:ref})}));});

/***/ }),

/***/ 86707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--icon-primary":"light-dark(#171717, #f2f2f2)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--button-background-secondary":"light-dark(#ffffff, #171717)","--font-size-30":"1rem","--text-on-color":"light-dark(#ffffff, #ffffff)","--button-border-secondary":"light-dark(light-dark(#143c50, #2e7ca5), #f2f2f2)","--button-background-secondary-hover":"light-dark(#e6e6e6, #212121)","--button-background-disabled":"light-dark(#f2f2f2, #262626)","--white":"#ffffff","--border-disabled":"light-dark(#bfbfbf, #525252)","--button-background-secondary-active":"light-dark(#d9d9d9, #262626)","--button-background-tertiary-hover":"light-dark(#e6e6e6, #212121)","--button-background-tertiary-active":"light-dark(#d9d9d9, #262626)","--text-tertiary":"light-dark(#143c50, #f2f2f2)","--button-background-danger":"light-dark(#e62323, #e62323)","--button-background-danger-hover":"light-dark(#bc1d1d, #bc1d1d)","--text-disabled":"light-dark(#bfbfbf, #525252)","--button-background-danger-active":"light-dark(#7d1313, #7d1313)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--button-background-icon-hover":"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))","--button-background-icon-active":"light-dark(rgba(0 0 0 / 20%), rgba(255 255 255 / 20%))","--size-50":"0.625rem","--size-70":"0.875rem","--size-120":"2rem","--size-130":"2.5rem","--size-150":"3rem","button":"button_RcXK","secondary":"secondary_h5I_","tertiary":"tertiary_xq7E","iconBtn":"iconBtn__8qK","danger":"danger_iFp6","iconRight":"iconRight_iW1e","fullwidth":"fullwidth_WWNT","medium":"medium_uqO9","primary":"primary_JNNk"});

/***/ })

}]);