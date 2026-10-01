"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4146],{

/***/ 30515
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
const site_docs_dev_forms_mdx_ac3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/forms","title":"Formulär","description":"Utvecklarinstruktioner för formulär","source":"@site/docs/dev/forms.mdx","sourceDirName":"dev","slug":"/dev/forms","permalink":"/pr-preview/pr-1377/dev/forms","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Formulär","description":"Utvecklarinstruktioner för formulär"},"sidebar":"sideBar","previous":{"title":"Mörkt läge","permalink":"/pr-preview/pr-1377/dev/dark-mode"},"next":{"title":"Lokalisering","permalink":"/pr-preview/pr-1377/dev/localization"}}');
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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Form.mjs
var Form = __webpack_require__(70420);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 3 modules
var TextField = __webpack_require__(38601);
// EXTERNAL MODULE: ./packages/components/src/checkbox/CheckboxGroup.tsx + 3 modules
var CheckboxGroup = __webpack_require__(42003);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx + 2 modules
var Checkbox = __webpack_require__(30506);
// EXTERNAL MODULE: ./packages/components/src/button/ButtonGroup.tsx + 1 modules
var ButtonGroup = __webpack_require__(49764);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/spinner/Spinner.tsx + 3 modules
var Spinner = __webpack_require__(41326);
;// ./apps/docs/src/components/examples/form/FormExamples.tsx
var UncontrolledForm=function UncontrolledForm(){var _React$useState=react.useState(null),result=_React$useState[0],setResult=_React$useState[1];var handleSubmit=function handleSubmit(e){e.preventDefault();var data=Object.fromEntries(new FormData(e.currentTarget));setResult(data);};return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* Form */.l,{onSubmit:handleSubmit,className:FormExamples_module.form,validationBehavior:"native"// use 'aria' to allow submit when invalid
,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"Namn",name:"name",isRequired:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"Mejladress",type:"email",name:"email",isRequired:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxGroup/* CheckboxGroup */.$,{label:"Spara mina uppgifter",name:"saveData",isRequired:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"agree",children:"Jag godk\xE4nner"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ButtonGroup/* ButtonGroup */.e,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{type:"submit",children:"Skicka"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{type:"reset",variant:"secondary",children:"Rensa"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:result&&/*#__PURE__*/(0,jsx_runtime.jsx)("pre",{children:JSON.stringify(result,null,2)})})]});};var ControlledForm=function ControlledForm(){var _React$useState2=react.useState(''),name=_React$useState2[0],setName=_React$useState2[1];var onSubmit=function onSubmit(e){e.preventDefault();};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* Form */.l,{onSubmit:onSubmit,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{name:"name",label:"Namn",onChange:setName,isRequired:true}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:["Ditt namn: ",name]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{type:"submit",children:"Skicka"})]});};var RealtimeValidation=function RealtimeValidation(){var _password$match,_password$match2;var _React$useState3=react.useState(''),password=_React$useState3[0],setPassword=_React$useState3[1];var errors=[];if(password.length<8){errors.push('Lösenordet måste vara fler än 8 tecken.');}if(((_password$match=password.match(/[A-Z]/g))!=null?_password$match:[]).length<2){errors.push('Lösenordet måste innehålla minst 2 versaler.');}if(((_password$match2=password.match(/[^a-z]/gi))!=null?_password$match2:[]).length<2){errors.push('Lösenordet måste innehålla minst två symboler.');}return/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"L\xF6senord",style:{whiteSpace:'pre-line'},isInvalid:errors.length>0,value:password,onChange:setPassword,errorMessage:errors.join('\n'),errorPosition:"bottom"});};var ServerValidation=function ServerValidation(){var _React$useState4=react.useState(false),isWaiting=_React$useState4[0],setIsWaiting=_React$useState4[1];// Fake server used in this example.
var delay=function delay(ms){return new Promise(function(resolve){return setTimeout(resolve,ms);});};function callServer(_x){return _callServer.apply(this,arguments);}function _callServer(){_callServer=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee2(data){return (0,regenerator/* default */.A)().w(function(_context2){while(1)switch(_context2.n){case 0:setIsWaiting(true);_context2.n=1;return delay(1000);case 1:setIsWaiting(false);return _context2.a(2,{errors:{username:"Tyv\xE4rr, anv\xE4ndarnamnet "+data.username+" \xE4r upptaget."}});}},_callee2);}));return _callServer.apply(this,arguments);}var _React$useState5=react.useState({}),errors=_React$useState5[0],setErrors=_React$useState5[1];var onSubmit=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(e){var data,result;return (0,regenerator/* default */.A)().w(function(_context){while(1)switch(_context.n){case 0:e.preventDefault();data=Object.fromEntries(new FormData(e.currentTarget));_context.n=1;return callServer(data);case 1:result=_context.v;setErrors(result.errors);case 2:return _context.a(2);}},_callee);}));return function onSubmit(_x2){return _ref.apply(this,arguments);};}();return/*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* Form */.l,{validationErrors:errors,onSubmit:onSubmit,className:FormExamples_module.form,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"Anv\xE4ndarnamn",name:"username",isRequired:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"L\xF6senord",name:"password",type:"password",isRequired:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(ButtonGroup/* ButtonGroup */.e,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{type:"submit",children:isWaiting?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Spinner/* Spinner */.y,{isOnColor:true,small:true}),"Skickar..."]}):'Skicka'})})]});};
// EXTERNAL MODULE: ./apps/docs/src/components/examples/form/TextFieldExamples.tsx
var TextFieldExamples = __webpack_require__(48574);
;// ./apps/docs/docs/dev/forms.mdx


const frontMatter = {
	title: 'Formulär',
	description: 'Utvecklarinstruktioner för formulär'
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
  "value": "Constraint-specifika felmeddelanden",
  "id": "constraint-specifika-felmeddelanden",
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
    em: "em",
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
        metastring: "{1}",
        children: "import { Form } from 'react-aria-components'\nimport { TextField } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{1,6}",
        children: "<Form>\n  <TextField\n    label='Namn'\n    name='name'\n  />\n</Form>\n"
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
        children: "export const UncontrolledForm = () => {\n  const [result, setResult] = React.useState(null)\n\n  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault()\n    const data = Object.fromEntries(new FormData(e.currentTarget))\n    setResult(data)\n  }\n\n  return (\n    <>\n      <Form\n        onSubmit={handleSubmit}\n        // use 'aria' to allow submit when invalid\n        validationBehavior='native'\n      >\n        <TextField\n          label='Namn'\n          name='name'\n          isRequired\n        />\n        <TextField\n          label='Mejladress'\n          type='email'\n          name='email'\n          isRequired\n        />\n        <CheckboxGroup\n          label='Spara mina uppgifter'\n          name='saveData'\n          isRequired\n        >\n          <Checkbox value='agree'>Jag godkänner</Checkbox>\n        </CheckboxGroup>\n        <ButtonGroup>\n          <Button type='submit'>Skicka</Button>\n          <Button\n            type='reset'\n            variant='secondary'\n          >\n            Rensa\n          </Button>\n        </ButtonGroup>\n      </Form>\n      <span>{result && <pre>{JSON.stringify(result)}</pre>}</span>\n    </>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
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
        children: "export const ControlledForm = () => {\n  const [name, setName] = React.useState('')\n  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault()\n  }\n\n  return (\n    <Form onSubmit={onSubmit}>\n      <TextField\n        name='name'\n        label='Name'\n        onChange={setName}\n        isRequired\n      />\n      <div>Ditt namn: {name}</div>\n      <Button type='submit'>Submit</Button>\n    </Form>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
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
        children: "export const RealtimeValidation = () => {\n  const [password, setPassword] = React.useState('')\n  let errors = []\n  if (password.length < 8) {\n    errors.push('Lösenordet måste vara fler än 8 tecken.')\n  }\n  if ((password.match(/[A-Z]/g) ?? []).length < 2) {\n    errors.push('Lösenordet måste innehålla minst 2 versaler.')\n  }\n  if ((password.match(/[^a-z]/gi) ?? []).length < 2) {\n    errors.push('Lösenordet måste innehålla minst två symboler.')\n  }\n\n  return (\n    <>\n      <TextField\n        label='Lösenord'\n        style={{ whiteSpace: 'pre-line' }}\n        isInvalid={errors.length > 0}\n        value={password}\n        onChange={setPassword}\n        errorMessage={errors.join('\\n')}\n        errorPosition='bottom'\n      />\n    </>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(RealtimeValidation, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Felmeddelande kan presenteras under eller över formulärskomponenten via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "errorPosition"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constraint-specifika-felmeddelanden",
      children: "Constraint-specifika felmeddelanden"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prop ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errorMessage"
      }), " accepterar antingen en sträng eller en funktion — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(validation: ValidationResult) => string"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Strängen räcker i de flesta fall. Funktionen är användbar när du kombinerar flera HTML constraint-regler och vill ge användaren ett specifikt meddelande beroende på ", (0,jsx_runtime.jsx)(_components.em, {
        children: "varför"
      }), " fältet är ogiltigt. Funktionen tar emot ett ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ValidationResult"
      }), "-objekt med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validationDetails"
      }), " som berättar exakt vilket krav som bröts:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<TextField\n  label='Användarnamn'\n  minLength={3}\n  isRequired\n  errorMessage={({ validationDetails }) => {\n    if (validationDetails.tooShort) return 'Minst 3 tecken krävs'\n    if (validationDetails.valueMissing) return 'Fältet är obligatoriskt'\n    return 'Ogiltigt värde'\n  }}\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(TextFieldExamples/* ErrorMessageExample */.k, {})
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
        children: "export const ServerValidation = () => {\n  const [isWaiting, setIsWaiting] = React.useState(false)\n  // Fake server used in this example.\n  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))\n\n  async function callServer(data) {\n    setIsWaiting(true)\n    await delay(1000)\n    setIsWaiting(false)\n    return { errors: { username: `Tyvärr, användarnamnet ${data.username} är upptaget.` } }\n  }\n\n  const [errors, setErrors] = React.useState({})\n  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault()\n\n    let data = Object.fromEntries(new FormData(e.currentTarget))\n    let result = await callServer(data)\n    setErrors(result.errors)\n  }\n\n  return (\n    <Form\n      validationErrors={errors}\n      onSubmit={onSubmit}\n      className={styles.form}\n    >\n      <TextField\n        label='Användarnamn'\n        name='username'\n        isRequired\n      />\n      <TextField\n        label='Lösenord'\n        name='password'\n        type='password'\n        isRequired\n      />\n      <ButtonGroup>\n        <Button type='submit'>\n          {isWaiting ? (\n            <>\n              <Spinner\n                isOnColor\n                small\n              />\n              Skickar...\n            </>\n          ) : (\n            'Skicka'\n          )}\n        </Button>\n      </ButtonGroup>\n    </Form>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
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
        children: "import { Controller, useForm } from 'react-hook-form'\n\nexport const HookFormExample = () => {\n  const { handleSubmit, control } = useForm()\n  const onSubmit = data => {\n    // Call your API here...\n  }\n\n  return (\n    <Form onSubmit={handleSubmit(onSubmit)}>\n      <Controller\n        control={control}\n        name='name'\n        rules={{ required: 'Name is required.' }}\n        render={({ field: { name, value, onChange, onBlur, ref }, fieldState: { invalid, error } }) => (\n          <TextField\n            label='Name'\n            name={name}\n            value={value}\n            onChange={onChange}\n            onBlur={onBlur}\n            isRequired\n            errorMessage={error?.message}\n            // Let React Hook Form handle validation instead of the browser.\n            validationBehavior='aria'\n            isInvalid={invalid}\n            // The ref is needed to focus invalid elements\n            ref={ref}\n          />\n        )}\n      />\n      <Button type='submit'>Submit</Button>\n    </Form>\n  )\n}\n"
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



/***/ },

/***/ 48574
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ ErrorMessageExample),
/* harmony export */   u: () => (/* binding */ ControlledValue)
/* harmony export */ });
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19615);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74848);
function ErrorMessageExample(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"card",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_1__/* .TextField */ .A,{label:"Anv\xE4ndarnamn",minLength:3,isRequired:true,errorMessage:function errorMessage(_ref){var validationDetails=_ref.validationDetails;if(validationDetails.tooShort)return'Minst 3 tecken krävs';if(validationDetails.valueMissing)return'Fältet är obligatoriskt';return'Ogiltigt värde';}})});}function ControlledValue(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_2__.useState(''),text=_React$useState[0],setText=_React$useState[1];return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"card",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_1__/* .TextField */ .A,{value:text,onChange:setText,label:"Controlled value"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .E,{children:["Text value: ",text]})]});}

/***/ },

/***/ 49764
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ ButtonGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/components/src/button/ButtonGroup.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ButtonGroup_module = ({"buttonGroup":"buttonGroup_mVqm"});
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

/***/ },

/***/ 30506
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ Checkbox_Checkbox)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/minus.js
var minus = __webpack_require__(86241);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./packages/theme/src/lib/style-dictionary-dist/variables.js
var variables = __webpack_require__(90904);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.module.css
var Checkbox_module = __webpack_require__(16025);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Checkbox.mjs + 6 modules
var Checkbox = __webpack_require__(13511);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/checkbox/CheckboxField.tsx
'use client';var _excluded=["className"];var CheckboxField=function CheckboxField(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* CheckboxField */.Yh,Object.assign({className:(0,clsx/* default */.A)(Checkbox_module/* default */.A.checkboxField,className)},rest));};
;// ./packages/components/src/checkbox/CheckboxButton.tsx
'use client';var CheckboxButton_excluded=["className"];var CheckboxButton=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,CheckboxButton_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* CheckboxButton */.aE,Object.assign({className:(0,clsx/* default */.A)(Checkbox_module/* default */.A.checkboxButton,className),ref:ref},rest));});
;// ./packages/components/src/checkbox/Checkbox.tsx
var Checkbox_excluded=["className","description","errorMessage","errorPosition","children"];var Checkbox_Checkbox=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var className=_ref.className,description=_ref.description,errorMessage=_ref.errorMessage,_ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,_children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Checkbox_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(CheckboxField,Object.assign({},props,{children:[description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxButton,{ref:ref,className:className,children:function children(_ref2){var isIndeterminate=_ref2.isIndeterminate;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Checkbox_module/* default */.A.indicator,children:isIndeterminate?/*#__PURE__*/(0,jsx_runtime.jsx)(minus/* default */.A,{size:14,color:variables/* iconOnColor */.w1t}):/*#__PURE__*/(0,jsx_runtime.jsx)(check/* default */.A,{size:14,color:variables/* iconOnColor */.w1t})}),_children]});}}),errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage})]}));});Checkbox_Checkbox.displayName='Checkbox';

/***/ },

/***/ 42003
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ CheckboxGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Checkbox.mjs + 6 modules
var Checkbox = __webpack_require__(13511);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.module.css
var Checkbox_module = __webpack_require__(16025);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx + 2 modules
var checkbox_Checkbox = __webpack_require__(30506);
;// ./packages/components/src/checkbox/useSelectAll.ts
var useSelectAll=function useSelectAll(children,state){var _state$value;var selectedItems=(_state$value=state==null?void 0:state.value)!=null?_state$value:[];var checkboxes=react.Children.toArray(children).filter(function(child){return/*#__PURE__*/react.isValidElement(child)&&child.type===checkbox_Checkbox/* Checkbox */.S;});// A disabled checkbox can't be toggled individually, so select-all/clear-all
// shouldn't be able to change it either — its existing selection state is
// preserved regardless of which way the header checkbox is toggled.
var checkboxValues=checkboxes.filter(function(child){return!child.props.isDisabled;}).map(function(child){return child.props.value||'';});var disabledSelectedValues=checkboxes.filter(function(child){return child.props.isDisabled;}).map(function(child){return child.props.value||'';}).filter(function(value){return selectedItems.includes(value);});var selectedCount=selectedItems.filter(function(value){return checkboxValues.includes(value);}).length;var noneSelected=selectedCount===0;var allSelected=selectedCount===checkboxValues.length;var someSelected=!noneSelected&&!allSelected;return{allSelected:allSelected,someSelected:someSelected,checkboxValues:checkboxValues,disabledSelectedValues:disabledSelectedValues};};
;// ./packages/components/src/checkbox/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"selectAll":"Select all"},"sv":{"selectAll":"Välj alla"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/checkbox/SelectAllCheckbox.tsx
var SelectAllCheckbox=function SelectAllCheckbox(_ref){var checkboxes=_ref.checkboxes,label=_ref.label;var state=(0,react.useContext)(Checkbox/* CheckboxGroupStateContext */.pf);var stringFormatter=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var _useSelectAll=useSelectAll(checkboxes,state),allSelected=_useSelectAll.allSelected,someSelected=_useSelectAll.someSelected,checkboxValues=_useSelectAll.checkboxValues,disabledSelectedValues=_useSelectAll.disabledSelectedValues;var handleChange=function handleChange(checked){state==null||state.setValue(checked?[].concat(checkboxValues,disabledSelectedValues):disabledSelectedValues);};return(/*#__PURE__*/// Select-all mirrors the group's overall state instead of tracking a
// value of its own, so it needs to opt out of the ambient
// CheckboxGroupStateContext — otherwise the CheckboxField beneath it
// would try to register/toggle itself as a valueless group item.
(0,jsx_runtime.jsx)(Checkbox/* CheckboxGroupStateContext */.pf.Provider,{value:null,children:/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_Checkbox/* Checkbox */.S,{isSelected:allSelected,isIndeterminate:someSelected,isReadOnly:state==null?void 0:state.isReadOnly,isDisabled:state==null?void 0:state.isDisabled,onChange:handleChange,children:label||stringFormatter.format('selectAll')})}));};
;// ./packages/components/src/checkbox/CheckboxGroup.tsx
'use client';var _excluded=["label","description","errorMessage","errorPosition","popover","showSelectAll","selectAllLabel","className","children"];var CheckboxGroup=function CheckboxGroup(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,_ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,popover=_ref.popover,showSelectAll=_ref.showSelectAll,selectAllLabel=_ref.selectAllLabel,className=_ref.className,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* CheckboxGroup */.$Q,Object.assign({},props,{className:(0,clsx/* default */.A)(Checkbox_module/* default */.A.checkboxGroup,className),children:(0,utils/* composeRenderProps */.HW)(children,function(children){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:popover,children:label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{children:label})}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),errorPosition==='top'&&errorMessage&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Checkbox_module/* default */.A.checkboxList,children:[showSelectAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(SelectAllCheckbox,{label:selectAllLabel,checkboxes:children}),children]}),errorPosition==='bottom'&&errorMessage&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage})]});})}));};

/***/ },

/***/ 19060
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ FieldError_FieldError)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/FieldError.mjs
var FieldError = __webpack_require__(3728);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
;// ./packages/components/src/field-error/FieldError.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FieldError_module = ({"fieldError":"fieldError_K9VX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/field-error/FieldError.tsx
var FieldError_FieldError=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var children=props.children,isInvalid=props.isInvalid;var className=(0,clsx/* default */.A)(FieldError_module.fieldError,props.className);var context=(0,react.useContext)(FieldError/* FieldErrorContext */.C);if(!context&&isInvalid&&typeof children!=='function'){return/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{className:className,children:children});}if(!(context!=null&&context.isInvalid))return null;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,Object.assign({},props,{ref:ref,className:className}));});FieldError_FieldError.displayName='FieldError';

/***/ },

/***/ 34704
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Label.mjs
var private_Label = __webpack_require__(37820);
;// ./packages/components/src/label/Label.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Label_module = ({"labelBase":"labelBase_BRgo"});
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var labelProps=Object.assign({className:(0,clsx/* default */.A)(Label_module.labelBase,className),elementType:elementType||DEFAULT_ELEMENT},rest);var ctx=react.useContext(LabelWrapper/* LabelWrapperContext */.d$);return/*#__PURE__*/(0,jsx_runtime.jsx)(private_Label/* Label */.J,Object.assign({},labelProps,{"aria-describedby":ctx==null?void 0:ctx.popoverId,children:children}));};

/***/ },

/***/ 73202
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  cR: () => (/* binding */ LabelWrapper),
  d$: () => (/* binding */ LabelWrapperContext)
});

// UNUSED EXPORTS: useLabelWrapperContext

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/label/LabelWrapper.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LabelWrapper_module = ({"labelPopover":"labelPopover_QNhJ","labelPopoverTrigger":"labelPopoverTrigger_iTpE"});
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(28777);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(97213);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(99592);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/label/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"moreInfo":"More info"},"sv":{"moreInfo":"Mer information"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/InfoPopover.tsx
/** Display an info-icon with popover next to the label to further explain what the user should enter in the field */var InfoPopover=function InfoPopover(_ref){var children=_ref.children,ariaLabel=_ref['aria-label'];var ctx=(0,react.useContext)(LabelWrapperContext);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{"aria-label":ariaLabel||strings.format('moreInfo'),className:LabelWrapper_module.labelPopoverTrigger,id:ctx==null?void 0:ctx.popoverId,size:"medium",slot:null,variant:"icon",children:/*#__PURE__*/(0,jsx_runtime.jsx)(info/* default */.A,{size:20})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:children})]});};
;// ./packages/components/src/label/LabelWrapper.tsx
/* unused harmony import specifier */ var React;
var LabelWrapperContext=/*#__PURE__*/react.createContext(undefined);var useLabelWrapperContext=function useLabelWrapperContext(){return React.useContext(LabelWrapperContext);};var LabelWrapper=function LabelWrapper(_ref){var children=_ref.children,popover=_ref.popover;var popoverId=react.useId();if(popover)return/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapperContext.Provider,{value:{popoverId:popoverId},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:LabelWrapper_module.labelPopover,children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(InfoPopover,Object.assign({},popover))]})});return children;};

/***/ },

/***/ 28777
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Popover.mjs + 1 modules
var Popover = __webpack_require__(51146);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(57653);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/components/src/popover/Popover.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Popover_module = ({"popover":"popover_qr_p","arrow":"arrow_bhQK"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/popover/Popover.tsx
var _excluded=["className","hideArrow","offset"];/**
 * @deprecated since v17.0.0 please use `PopoverProps` instead
 */var Popover_Popover=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Popover/* PopoverContext */.n),mergedProps=_useContextProps[0],mergedRef=_useContextProps[1];var className=mergedProps.className,_mergedProps$hideArro=mergedProps.hideArrow,hideArrow=_mergedProps$hideArro===void 0?false:_mergedProps$hideArro,_mergedProps$offset=mergedProps.offset,offset=_mergedProps$offset===void 0?4:_mergedProps$offset,rest=(0,objectWithoutPropertiesLoose/* default */.A)(mergedProps,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,Object.assign({className:(0,clsx/* default */.A)(Popover_module.popover,className),offset:offset,ref:mergedRef},rest,{children:(0,utils/* composeRenderProps */.HW)(mergedProps.children,function(children){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!hideArrow&&/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Popover_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{height:16,viewBox:"0 0 16 16",width:16,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L8 8 L16 0"})})}),children]});})}));});

/***/ },

/***/ 19615
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Text.mjs
var private_Text = __webpack_require__(20987);
;// ./packages/components/src/text/Text.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Text_module = ({"body":"body_Vxmv","body-small":"body-small_JwBE","description":"description_XYgX","description-small":"description-small_tno4","bold":"bold_YLmd","italic":"italic_CnUx"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","size","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var _clsx;var children=_ref.children,className=_ref.className,size=_ref.size,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var getClassName=function getClassName(){var isDescription=rest.slot==='description';if(isDescription){return size==='small'?Text_module['description-small']:Text_module['description'];}return size==='small'?Text_module['body-small']:Text_module['body'];};var textProps=Object.assign({className:(0,clsx/* default */.A)(getClassName(),(_clsx={},_clsx[Text_module.bold]=['b','strong'].includes(elementType),_clsx[Text_module.italic]=['i','em'].includes(elementType),_clsx),className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(private_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ },

/***/ 38601
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Input.mjs
var Input = __webpack_require__(36594);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(73413);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/textfield/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"hide":"Hide","show":"Show","showPassword":"Show password"},"sv":{"hide":"Dölj","show":"Visa","showPassword":"Visa lösenord"}}');
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/textfield/PasswordToggle.tsx
var PasswordToggle=function PasswordToggle(_ref){var showPassword=_ref.showPassword,onToggle=_ref.onToggle;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{"aria-label":strings.format('showPassword'),"aria-pressed":showPassword,variant:"tertiary",onPress:onToggle,className:TextField_module/* default */.A.passwordButton,children:showPassword?strings.format('hide'):strings.format('show')});};
;// ./packages/components/src/textfield/Input.tsx
var _excluded=["skipContext"];var Input_Input=/*#__PURE__*/(0,react.forwardRef)(function(_ref,localRef){var _ref$skipContext=_ref.skipContext,skipContext=_ref$skipContext===void 0?false:_ref$skipContext,localProps=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _useContextProps=(0,utils/* useContextProps */.JT)(localProps,localRef,Input/* InputContext */.E),contextProps=_useContextProps[0],contextRef=_useContextProps[1];var ref=skipContext?localRef:contextRef;var props=skipContext?localProps:contextProps;var isPassword=props.type==='password';var _useState=(0,react.useState)(false),showPassword=_useState[0],setShowPassword=_useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module/* default */.A.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,Object.assign({},props,{ref:ref,type:isPassword&&showPassword?'text':props.type,className:(0,clsx/* default */.A)(TextField_module/* default */.A.input,props.className)})),isPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordToggle,{showPassword:showPassword,onToggle:function onToggle(){return setShowPassword(function(prev){return!prev;});}})]});});Input_Input.displayName='Input';
;// ./packages/components/src/textfield/TextField.tsx
'use client';var TextField_excluded=["className","list","type","min","max","form"];var TextField=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var className=_ref.className,list=_ref.list,type=_ref.type,min=_ref.min,max=_ref.max,form=_ref.form,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,TextField_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(TextFieldBase/* TextFieldBase */.J,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_Input,{className:(0,clsx/* default */.A)(className),form:form,list:list,min:min,max:max,ref:ref,type:type,skipContext:true})}));});TextField.displayName='TextField';

/***/ },

/***/ 39107
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ TextFieldBase)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/TextField.mjs
var TextField = __webpack_require__(41493);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(73413);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Input.mjs
var Input = __webpack_require__(36594);
;// ./packages/components/src/character-counter/CharacterCounter.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CharacterCounter_module = ({"characterCounter":"characterCounter_Rd9H"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/character-counter/CharacterCounter.tsx
var CharacterCounter=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var _value$toString;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Input/* InputContext */.E);props=_useContextProps[0];var _props=props,maxLength=_props.maxLength,value=_props.value,isLonely=_props.isLonely;var _ref=(_value$toString=value==null?void 0:value.toString())!=null?_value$toString:'',length=_ref.length;var isMaxLengthDefined=maxLength!==undefined;return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:CharacterCounter_module.characterCounter,"data-exceeded":isMaxLengthDefined&&length>maxLength||undefined,"data-lonely":isLonely||undefined,children:isMaxLengthDefined?length+" / "+maxLength:length});});CharacterCounter.displayName='CharacterCounter';
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
;// ./packages/components/src/textfield/TextFieldBase.tsx
var TextFieldBase=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var _clsx;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,TextField/* TextFieldContext */.H);props=_useContextProps[0];var _props=props,label=_props.label,description=_props.description,errorMessage=_props.errorMessage,showCounter=_props.showCounter,_props$errorPosition=_props.errorPosition,errorPosition=_props$errorPosition===void 0?'top':_props$errorPosition,_props$size=_props.size,size=_props$size===void 0?'large':_props$size,popover=_props.popover,children=_props.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* TextField */.A,Object.assign({},props,{className:(0,clsx/* clsx */.$)(TextField_module/* default */.A.textField,(_clsx={},_clsx[TextField_module/* default */.A.medium]=size==='medium',_clsx)),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:popover,children:label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{children:label})}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),showCounter&&/*#__PURE__*/(0,jsx_runtime.jsx)(CharacterCounter,{isLonely:!description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",children:errorMessage}),children,errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",className:TextField_module/* default */.A.bottomError,children:errorMessage})]}));});TextFieldBase.displayName='TextFieldBase';

/***/ },

/***/ 90904
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A1M: () => (/* binding */ brandPrimary),
/* harmony export */   EWd: () => (/* binding */ stateFocus),
/* harmony export */   JI6: () => (/* binding */ layer02Base),
/* harmony export */   Q0Q: () => (/* binding */ textOnColor),
/* harmony export */   Qni: () => (/* binding */ buttonBackgroundPrimaryBase),
/* harmony export */   Sjf: () => (/* binding */ spaceMedium),
/* harmony export */   _2e: () => (/* binding */ borderColorPrimary),
/* harmony export */   ak9: () => (/* binding */ layer01Base),
/* harmony export */   eku: () => (/* binding */ textPrimary),
/* harmony export */   jc5: () => (/* binding */ colorGray200),
/* harmony export */   l9i: () => (/* binding */ borderColorSubtle),
/* harmony export */   tK4: () => (/* binding */ field01Base),
/* harmony export */   w$9: () => (/* binding */ backgroundBase),
/* harmony export */   w1t: () => (/* binding */ iconOnColor)
/* harmony export */ });
/* unused harmony exports base10, base15, base20, base30, base40, base50, base60, base70, base75, base80, base90, base100, base110, base120, base130, base140, base150, base00, base05, windowSizesSm, windowSizesMd, windowSizesLg, windowSizesXl, breakpointsXs, breakpointsSm, breakpointsMd, breakpointsLg, breakpointsXl, buttonBackgroundPrimaryHover, buttonBackgroundPrimaryActive, buttonBackgroundSecondaryBase, buttonBackgroundSecondaryHover, buttonBackgroundSecondaryActive, buttonBackgroundTertiaryHover, buttonBackgroundTertiaryActive, buttonBackgroundDangerBase, buttonBackgroundDangerHover, buttonBackgroundDangerActive, buttonBackgroundDisabled, buttonBorderSecondary, buttonIconHover, buttonIconActive, colorBlackBase, colorBlackHover, colorBlackOpacity5, colorBlackOpacity10, colorWhiteBase, colorWhiteHover, colorWhiteOpacity13, colorWhiteOpacity15, colorGray10, colorGray20, colorGray30, colorGray40, colorGray50, colorGray60, colorGray70, colorGray80, colorGray90, colorGray100, colorGray110, colorGray120, colorGray130, colorGray140, colorGray150, colorGray160, colorGray170, colorGray180, colorGray190, colorBlue10, colorBlue20, colorBlue40, colorBlue50, colorBlue60, colorBlue70, colorBlue80, colorBlue90, colorBlue100, colorBlue110, colorBlue120, colorBlue130, colorBlue150, colorPurple80, colorPurple110, colorRed100, colorOrange100, colorSignalBlue10, colorSignalBlue20, colorSignalBlue100, colorSignalBlue170, colorSignalBlue180, colorSignalGreen20, colorSignalGreen30, colorSignalGreen100, colorSignalGreen150, colorSignalGreen170, colorSignalGreen180, colorSignalYellow10, colorSignalYellow20, colorSignalYellow30, colorSignalYellow40, colorSignalYellow50, colorSignalYellow60, colorSignalYellow70, colorSignalYellow80, colorSignalYellow90, colorSignalYellow100, colorSignalYellow110, colorSignalYellow120, colorSignalYellow130, colorSignalYellow140, colorSignalYellow150, colorSignalYellow160, colorSignalYellow170, colorSignalYellow180, colorSignalYellow190, colorSignalYellow200, colorSignalRed10, colorSignalRed20, colorSignalRed30, colorSignalRed40, colorSignalRed50, colorSignalRed60, colorSignalRed70, colorSignalRed80, colorSignalRed90, colorSignalRed100, colorSignalRed110, colorSignalRed120, colorSignalRed130, colorSignalRed140, colorSignalRed150, colorSignalRed160, colorSignalRed170, colorSignalRed180, colorSignalRed190, colorSignalRed200, colorSky20, colorSky60, colorSky180, colorMint20, colorMint60, colorMint180, colorCream20, colorCream60, colorCream180, colorTeal20, colorTeal60, colorTeal180, colorLagoon20, colorLagoon60, colorLagoon180, colorLavender20, colorLavender60, colorLavender180, colorPeach20, colorPeach60, colorPeach180, colorPippin20, colorPippin60, colorPippin180, spacing10, spacing20, spacing30, spacing40, spacing50, spacing60, spacing70, spacing80, spacing90, spacingXsmall, spacingSmall, spacingMedium, spacingLarge, spacingXlarge, size10, size15, size20, size30, size40, size50, size60, size70, size75, size80, size90, size100, size110, size120, size130, size140, size150, size00, size05, sizeControlSm, sizeIcon, sizeIconSm, sizeOption, sizeControlMd, sizeControl, backgroundHover, backgroundInverse, layer01Hover, layer01Selected, layer01SelectedHover, layer02Hover, layer02Selected, layer02SelectedHover, layerAccent01Base, layerAccent01Hover, layerAccent01Selected, layerAccent02Base, layerAccent02Hover, layerAccent02Selected, borderColorSecondary, borderColorTertiary, borderColorDisabled, borderWidth, field01Hover, field01Active, field01Disabled, field02Base, field02Hover, field02Active, field02Disabled, skeleton01, skeleton02, iconPrimary, iconSecondary, iconTertiary, iconInverse, iconDisabled, iconSuccess, iconInfo, iconWarning, iconImportant, iconReadOnly, linkEnabled, linkHover, linkPressed, linkVisited, progressBarTrackBackground, progressBarIndicatorBackground, supportBorderSuccess, supportBorderInfo, supportBorderImportant, supportBorderWarning, supportBackgroundSuccess, supportBackgroundSuccessHover, supportBackgroundInfo, supportBackgroundInfoHover, supportBackgroundImportant, supportBackgroundImportantHover, supportBackgroundWarning, supportBackgroundWarningHover, tagSkyBackground, tagSkyBorderColor, tagBlueBackground, tagBlueBorderColor, tagMintBackground, tagMintBorderColor, tagGreenBackground, tagGreenBorderColor, tagCreamBackground, tagCreamBorderColor, tagYellowBackground, tagYellowBorderColor, tagTealBackground, tagTealBorderColor, tagLagoonBackground, tagLagoonBorderColor, tagLagoonblueBackground, tagLagoonblueBorderColor, tagLavenderBackground, tagLavenderBorderColor, tagPurpleBackground, tagPurpleBorderColor, tagPeachBackground, tagPeachBorderColor, tagOrangeBackground, tagOrangeBorderColor, tagPippinBackground, tagPippinBorderColor, tagRedBackground, tagRedBorderColor, textSecondary, textTertiary, textInverse, textDisabled, textWarning, textPlaceholder, textReadOnly, badgeBackground, calendarDateBackgroundHover, calendarDateBackgroundSelected, calendarDateBackgroundStartRange, calendarDateBackgroundInRange, calendarDateBackgroundEndRange, logoPrimary, menuItemBackgroundHover, menuItemBackgroundSelected, menuTextSectionHeader, navigationLinkBackgroundHover, navigationLinkBackgroundSelected, navigationLinkBackgroundSelectedHover, overlayBackground, overlayBlur, cardBackgroundBase, cardShadow, panelShadow, space10, space30, space50, space60, space70, space75, space90, space130, space150, spaceXsmall, spaceSmall, spaceLarge, spaceXlarge, space05, stateFocusInset, stateFocusContrastModeOutline, stateFocusContrastModeOffset, stateInvalid, transitionDurationSlow, transitionDurationNormal, transitionDurationFast, transitionDurationQuick, transitionDurationInstant, transitionTimingEaseOut, transitionTimingEaseIn, transitionTimingEaseInOut, transitionPanelCollapse, transitionPanelExpand, typographyFontFamily, typographyFontSize10, typographyFontSize20, typographyFontSize30, typographyFontSize40, typographyFontSize50, typographyFontSize60, typographyFontSize70, typographyFontSize80, typographyFontSize90, typographyFontSize100, typographyLineHeight10, typographyLineHeight20, typographyLineHeight30, typographyLineHeight40, typographyLineHeight50, typographyLineHeight60, typographyLineHeight70, typographyLineHeight80, typographyLineHeight90, typographyLineHeight100, typographyWeightThin, typographyWeightExtraLight, typographyWeightLight, typographyWeightRegular, typographyWeightMedium, typographyWeightSemiBold, typographyWeightBold, typographyWeightExtraBold, typographyWeightBlack, typographyBody, typographyBodySmall, typographyDescription, typographyDescriptionSmall, zIndexBase, zIndexAbove, zIndexSidebar, zIndexModal, zIndexToast, zIndexSkipToContent */
/**
 * Do not edit directly, this file was auto-generated.
 */var base10="0.125rem";var base15="0.188rem";var base20="0.25rem";var base30="0.375rem";var base40="0.5rem";var base50="0.625rem";var base60="0.75rem";var base70="0.875rem";var base75="0.938rem";var base80="1rem";var base90="1.25rem";var base100="1.5rem";var base110="1.75rem";var base120="2rem";var base130="2.5rem";var base140="2.75rem";var base150="3rem";var base00="0rem";var base05="0.063rem";var windowSizesSm="480px";// Liten skärmstorlek. 480px.
var windowSizesMd="768px";// Mellanstor skärmstorlek. 768px.
var windowSizesLg="1024px";// Stor skärmstorlek. 1024px.
var windowSizesXl="1280px";// Extra stor skärmstorlek. 1280px.
var breakpointsXs="(max-width: calc(480px - 1px))";// Extra liten skärm. Upp till 479px (max-width).
var breakpointsSm="(min-width: 480px)";// Liten skärm och uppåt. Från 480px (min-width).
var breakpointsMd="(min-width: 768px)";// Mellanstor skärm och uppåt. Från 768px (min-width).
var breakpointsLg="(min-width: 1024px)";// Stor skärm och uppåt. Från 1024px (min-width).
var breakpointsXl="(min-width: 1280px)";// Extra stor skärm och uppåt. Från 1280px (min-width).
var buttonBackgroundPrimaryBase="light-dark(#143c50, #2e7ca5)";// Färg på primärknapp
var buttonBackgroundPrimaryHover="light-dark(#25607f, #25607f)";// Hover state på primärknapp
var buttonBackgroundPrimaryActive="light-dark(#2e7ca5, #143c50)";// Active state för primärknapp
var buttonBackgroundSecondaryBase="transparent";// Färg på sekundärknapp
var buttonBackgroundSecondaryHover="light-dark(#0000000d, #ffffff21)";// Hover state på sekundärknapp
var buttonBackgroundSecondaryActive="light-dark(#0000001a, #ffffff26)";// Active state för sekundärknapp
var buttonBackgroundTertiaryHover="light-dark(#0000000d, #ffffff21)";// Hover state för tertiär knapp
var buttonBackgroundTertiaryActive="light-dark(#0000001a, #ffffff26)";// Active state för tertiär knapp
var buttonBackgroundDangerBase="light-dark(#e62323, #e62323)";// Färg på danger knapp
var buttonBackgroundDangerHover="light-dark(#bc1d1d, #bc1d1d)";// Hover state för danger knapp
var buttonBackgroundDangerActive="light-dark(#7d1313, #7d1313)";// Active state för danger knapp
var buttonBackgroundDisabled="light-dark(#0000000d,#ffffff21)";// Disabled state för knappar
var buttonBorderSecondary="light-dark(#143c50, #f2f2f2)";// Kantfärg för sekundärknapp
var buttonIconHover="light-dark(#0000000d, #ffffff21)";// Hover state för ikonknappar
var buttonIconActive="light-dark(#00000033, #ffffff33)";// Active state för ikoner
var colorBlackBase="#000";// Black
var colorBlackHover="#0d0d0d";// Black hover
var colorBlackOpacity5="#0000000d";// Black with 5% opacity
var colorBlackOpacity10="#0000001a";// Black with 10% opacity
var colorWhiteBase="#fff";// White
var colorWhiteHover="#e6e6e6";// White hover
var colorWhiteOpacity13="#ffffff21";// White with 13% opacity
var colorWhiteOpacity15="#ffffff26";// White with 15% opacity
var colorGray10="#f2f2f2";var colorGray20="#e6e6e6";var colorGray30="#d9d9d9";var colorGray40="#ccc";var colorGray50="#bfbfbf";var colorGray60="#b3b3b3";var colorGray70="#a6a6a6";var colorGray80="#999";var colorGray90="#8c8c8c";var colorGray100="#808080";var colorGray110="#737373";var colorGray120="#666";var colorGray130="#5d5d5d";var colorGray140="#525252";var colorGray150="#474747";var colorGray160="#383838";var colorGray170="#333";var colorGray180="#262626";var colorGray190="#212121";var colorGray200="#171717";var colorBlue10="#eaf2f6";var colorBlue20="#d5e5ed";var colorBlue40="#abcbdb";var colorBlue50="#94BCD1";var colorBlue60="#82b0c9";var colorBlue70="#6CA3C0";var colorBlue80="#5897b8";var colorBlue90="#4289ad";var colorBlue100="#2e7ca5";var colorBlue110="#2C7399";var colorBlue120="#29698C";var colorBlue130="#25607f";var colorBlue150="#143c50";var colorPurple80="#b46ab4";var colorPurple110="#954b95";var colorRed100="#b90835";var colorOrange100="oklch(0.66 0.18 45)";var colorSignalBlue10="#eaf2f6";var colorSignalBlue20="#d5e5ed";var colorSignalBlue100="#06c";var colorSignalBlue170="#162b33";var colorSignalBlue180="#112127";var colorSignalGreen20="#d5f2d9";var colorSignalGreen30="#bae5c5";var colorSignalGreen100="#008d3c";var colorSignalGreen150="#194B33";var colorSignalGreen170="#163328";var colorSignalGreen180="#112722";var colorSignalYellow10="#fff8e2";var colorSignalYellow20="#fff1cd";var colorSignalYellow30="#ffeab8";var colorSignalYellow40="#ffe3a3";var colorSignalYellow50="#ffdc8b";var colorSignalYellow60="#ffd47b";var colorSignalYellow70="#fdcd5d";var colorSignalYellow80="#fbc640";var colorSignalYellow90="#fabf1b";var colorSignalYellow100="#fab900";var colorSignalYellow110="#daa105";var colorSignalYellow120="#bd8c1e";var colorSignalYellow130="#a17927";var colorSignalYellow140="#88672a";var colorSignalYellow150="#70562b";var colorSignalYellow160="#5a4629";var colorSignalYellow170="#453826";var colorSignalYellow180="#322a20";var colorSignalYellow190="#201c18";var colorSignalYellow200="#0f0e0e";var colorSignalRed10="#ffefef";var colorSignalRed20="#ffdfdf";var colorSignalRed30="#fcc8c8";var colorSignalRed40="#f9b0b0";var colorSignalRed50="#f69999";var colorSignalRed60="#f38181";var colorSignalRed70="#ef6a6a";var colorSignalRed80="#EC5252";var colorSignalRed90="#e93b3b";var colorSignalRed100="#e62323";var colorSignalRed110="#d12020";var colorSignalRed120="#bc1d1d";var colorSignalRed130="#a71919";var colorSignalRed140="#921616";var colorSignalRed150="#7d1313";var colorSignalRed160="#691010";var colorSignalRed170="#540d0d";var colorSignalRed180="#3f0a0a";var colorSignalRed190="#2a0606";var colorSignalRed200="#150303";var colorSky20="#cde6f3";var colorSky60="#4a95df";var colorSky180="#101037";var colorMint20="#d5f2d9";var colorMint60="#75b47d";var colorMint180="#07270b";var colorCream20="#fff5db";var colorCream60="#ecbe4a";var colorCream180="#2c2719";var colorTeal20="#cdf2f2";var colorTeal60="#43bcbc";var colorTeal180="#0d2c2c";var colorLagoon20="#d2daf9";var colorLagoon60="#7088e0";var colorLagoon180="#0a1332";var colorLavender20="#f6d0f9";var colorLavender60="#b77dbc";var colorLavender180="#391c3b";var colorPeach20="#ffe6d9";var colorPeach60="#e87031";var colorPeach180="#421d0a";var colorPippin20="#ffe0e0";var colorPippin60="#f17575";var colorPippin180="#431919";var spacing10="0.125rem";// @deprecated Use space.10 (--midas-space-10) instead
var spacing20="0.25rem";// @deprecated Use space.xsmall (--midas-space-xsmall) instead
var spacing30="0.5rem";// @deprecated Use space.small (--midas-space-small) instead
var spacing40="0.75rem";// @deprecated Use space.60 (--midas-space-60) instead
var spacing50="1rem";// @deprecated Use space.medium (--midas-space-medium) instead
var spacing60="1.5rem";// @deprecated Use space.large (--midas-space-large) instead
var spacing70="2rem";// @deprecated Use space.xlarge (--midas-space-xlarge) instead
var spacing80="2.5rem";// @deprecated Use space.130 (--midas-space-130) instead
var spacing90="3rem";// @deprecated Use space.150 (--midas-space-150) instead
var spacingXsmall="0.25rem";// @deprecated Use space.xsmall (--midas-space-xsmall) instead
var spacingSmall="0.5rem";// @deprecated Use space.small (--midas-space-small) instead
var spacingMedium="1rem";// @deprecated Use space.medium (--midas-space-medium) instead
var spacingLarge="1.5rem";// @deprecated Use space.large (--midas-space-large) instead
var spacingXlarge="2rem";// @deprecated Use space.xlarge (--midas-space-xlarge) instead
var size10="0.125rem";// @deprecated Use base.10 (--midas-base-10) instead
var size15="0.188rem";// @deprecated Use base.15 (--midas-base-15) instead
var size20="0.25rem";// @deprecated Use base.20 (--midas-base-20) instead
var size30="0.375rem";// @deprecated Use base.30 (--midas-base-30) instead
var size40="0.5rem";// @deprecated Use base.40 (--midas-base-40) instead
var size50="0.625rem";// @deprecated Use base.50 (--midas-base-50) instead
var size60="0.75rem";// @deprecated Use base.60 (--midas-base-60) instead
var size70="0.875rem";// @deprecated Use base.70 (--midas-base-70) instead
var size75="0.938rem";// @deprecated Use base.75 (--midas-base-75) instead
var size80="1rem";// @deprecated Use base.80 (--midas-base-80) instead
var size90="1.25rem";// @deprecated Use base.90 (--midas-base-90) instead
var size100="1.5rem";// @deprecated Use base.100 (--midas-base-100) instead
var size110="1.75rem";// @deprecated Use base.110 (--midas-base-110) instead
var size120="2rem";// @deprecated Use base.120 (--midas-base-120) instead
var size130="2.5rem";// @deprecated Use base.130 (--midas-base-130) instead
var size140="2.75rem";// @deprecated Use base.140 (--midas-base-140) instead
var size150="3rem";// @deprecated Use base.150 (--midas-base-150) instead
var size00="0rem";// @deprecated Use base.00 (--midas-base-00) instead
var size05="0.063rem";// @deprecated Use base.05 (--midas-base-05) instead
var sizeControlSm="2.5rem";// @deprecated Use size.control-md (--midas-size-control-md) instead
var sizeIcon="1.25rem";// Standardstorlek för ikoner. 1.25rem / 20px.
var sizeIconSm="1rem";// Liten ikonstorlek för kompakta kontexter. 1rem / 16px.
var sizeOption="2rem";// Höjd för alternativ i dropdown-listor, t.ex. Select och Combobox. 2rem / 32px.
var sizeControlMd="2.5rem";// Medelstor interaktiv kontrollhöjd. 2.5rem / 40px.
var sizeControl="3rem";// Standardhöjd för interaktiva kontroller, t.ex. TextField och Button. 3rem / 48px.
var backgroundBase="light-dark(#fff, #171717)";// Standardbakgrund för våra applikationer
var backgroundHover="light-dark(#e6e6e6, #212121)";// Hoverfärg för bakgrund
var backgroundInverse="light-dark(#171717, #f2f2f2)";// Bakgrund med inverterade färger
var layer01Base="light-dark(#f2f2f2, #262626)";// Färg för lager som läggs på Background.
var layer01Hover="light-dark(#e6e6e6, #333)";// Hover state för layer01
var layer01Selected="light-dark(#d9d9d9, #383838)";// Selected state för layer01
var layer01SelectedHover="light-dark(#ccc, #474747)";// Hover state för layerSelected01
var layer02Base="light-dark(#fff, #383838)";// Färg för lager som läggs på layer 01
var layer02Hover="light-dark(#e6e6e6, #474747)";// Hover state för layer02
var layer02Selected="light-dark(#d9d9d9, #525252)";// Selected state för layer02
var layer02SelectedHover="light-dark(#ccc, #5d5d5d)";// Hover state för layerSelected02
var layerAccent01Base="light-dark(#d9d9d9, #383838)";// Accentfärg som används tillsammans med layer 01
var layerAccent01Hover="light-dark(#ccc, #474747)";// Hover state för layerAccent01
var layerAccent01Selected="light-dark(#bfbfbf, #525252)";// Selected state för layerAccent01
var layerAccent02Base="light-dark(#d9d9d9, #383838)";// Accentfärg som används tillsammans med layer 02
var layerAccent02Hover="light-dark(#ccc, #474747)";// Hover state för layerAccent02
var layerAccent02Selected="light-dark(#bfbfbf, #525252)";// Selected state för layerAccent02
var brandPrimary="light-dark(#b90835, #b90835)";// Migrationsverkets primära röda färg
var borderColorPrimary="light-dark(#171717, #f2f2f2)";// Kantlinje med hög kontrast
var borderColorSecondary="light-dark(#737373, #8c8c8c)";// Kantlinje med medelhög kontrast
var borderColorSubtle="light-dark(#bfbfbf, #525252)";// Kantlinje med låg kontrast
var borderColorTertiary="light-dark(#143c50, #2e7ca5)";// Primärblå kantlinje
var borderColorDisabled="light-dark(#bfbfbf, #525252)";// Kantlinje för disabled state
var borderWidth="1px";var field01Base="light-dark(#f2f2f2, #262626)";// färg för fält som ligger på Background
var field01Hover="light-dark(#e6e6e6, #333)";// Hover state för field01
var field01Active="light-dark(#d9d9d9, #383838)";// Active state för field01
var field01Disabled="light-dark(#f2f2f2, #262626)";// Disabled state för fält som ligger på Background
var field02Base="light-dark(#fff, #383838)";// Färg för fält som ligger på layer 01
var field02Hover="light-dark(#e6e6e6, #474747)";// Hover state för field02
var field02Active="light-dark(#d9d9d9, #525252)";// Active state för field02
var field02Disabled="light-dark(#fff, #383838)";// Disabled state för fält som ligger på layer 01
var skeleton01="light-dark(#f2f2f2, #262626)";// Färg som används när Skeleton ligger på Background
var skeleton02="light-dark(#d9d9d9, #383838)";// Färg som används när Skeleton ligger på Layer 01
var iconPrimary="light-dark(#171717, #f2f2f2)";// Primär ikonfärg
var iconSecondary="light-dark(#525252, #a6a6a6)";// Sekundär ikonfärg
var iconTertiary="light-dark(#143c50, #f2f2f2)";// Tertiär ikonfärg, används för ikoner i tertiary-knappar
var iconInverse="light-dark(#fff, #171717)";// Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge
var iconOnColor="light-dark(#fff, #fff)";// Ikonfärg på färgade ytor som inte är lager
var iconDisabled="light-dark(#bfbfbf, #525252)";// Färg för ikoner som är disabled
var iconSuccess="light-dark(#008d3c, #008d3c)";// Ikonfärg för success state
var iconInfo="light-dark(#06c, #06c)";// Ikonfärg för informationsikoner
var iconWarning="light-dark(#e62323, #e62323)";// Ikonfärg för varningsikoner och invalid state
var iconImportant="oklch(0.66 0.18 45)";// Ikonfärg för viktig information
var iconReadOnly="light-dark(#bfbfbf, #383838)";// Färg för ikoner som är read-only
var linkEnabled="light-dark(#29698C, #6CA3C0)";// Primär länkfärg
var linkHover="light-dark(#143c50, #94BCD1)";// Hover state för länkar
var linkPressed="light-dark(#171717, #abcbdb)";// Active/pressed state för länkar
var linkVisited="light-dark(#954b95, #b46ab4)";// Färg för besökta länkar
var progressBarTrackBackground="light-dark(#d9d9d9, #383838)";// Bakgrundsfärg för progress bar track
var progressBarIndicatorBackground="#008d3c";// Bakgrundsfärg för progress bar indicator
var supportBorderSuccess="light-dark(#008d3c, #008d3c)";// Kantlinje för success-notifikationer
var supportBorderInfo="light-dark(#06c, #06c)";// Kantlinje för notifikationer med information
var supportBorderImportant="oklch(0.66 0.18 45)";// Kantlinje för notifikationer med viktig information
var supportBorderWarning="light-dark(#e62323, #e62323)";// Kantlinje för notifikationer med varningar
var supportBackgroundSuccess="light-dark(#d5f2d9, #112722)";// Bakgrund för success-notifikationer
var supportBackgroundSuccessHover="light-dark(#bae5c5, #163328)";// Hoverbakgrund för success-notifikationer
var supportBackgroundInfo="light-dark(#eaf2f6, #112127)";// Bakgrund för notifikationer med information
var supportBackgroundInfoHover="light-dark(#d5e5ed, #162b33)";// Hoverbakgrund för notifikationer med information
var supportBackgroundImportant="light-dark(#fff8e2, #322a20)";// Bakgrund för notifikationer med viktig information
var supportBackgroundImportantHover="light-dark(#fff1cd, #453826)";// Hoverbakgrund för notifikationer med viktig information
var supportBackgroundWarning="light-dark(#ffdfdf, #3f0a0a)";// Bakgrund för notifikationer med varningar
var supportBackgroundWarningHover="light-dark(#fcc8c8, #540d0d)";// Hoverbakgrund för notifikationer med varningar
var tagSkyBackground="light-dark(#cde6f3, #101037)";// Tag bakgrund blå
var tagSkyBorderColor="#4a95df";// Tag kantlinje blå
var tagBlueBackground="light-dark(#cde6f3, #101037)";// @deprecated Använd tag.sky istället.
var tagBlueBorderColor="#4a95df";// @deprecated Använd tag.sky istället.
var tagMintBackground="light-dark(#d5f2d9, #07270b)";// Tag bakgrund grön
var tagMintBorderColor="#75b47d";// Tag kantlinje grön
var tagGreenBackground="light-dark(#d5f2d9, #07270b)";// @deprecated Använd tag.mint istället.
var tagGreenBorderColor="#75b47d";// @deprecated Använd tag.mint istället.
var tagCreamBackground="light-dark(#fff5db, #2c2719)";// Tag bakgrund gul
var tagCreamBorderColor="#ecbe4a";// Tag kantlinje gul
var tagYellowBackground="light-dark(#fff5db, #2c2719)";// @deprecated Använd tag.cream istället.
var tagYellowBorderColor="#ecbe4a";// @deprecated Använd tag.cream istället.
var tagTealBackground="light-dark(#cdf2f2, #0d2c2c)";// Tag bakgrund blågrön
var tagTealBorderColor="#43bcbc";// Tag kantlinje blågrön
var tagLagoonBackground="light-dark(#d2daf9, #0a1332)";// Tag bakgrund lagunblå
var tagLagoonBorderColor="#7088e0";// Tag kantlinje lagunblå
var tagLagoonblueBackground="light-dark(#d2daf9, #0a1332)";// @deprecated Använd tag.lagoon istället.
var tagLagoonblueBorderColor="#7088e0";// @deprecated Använd tag.lagoon istället.
var tagLavenderBackground="light-dark(#f6d0f9, #391c3b)";// Tag bakgrund lila
var tagLavenderBorderColor="#b77dbc";// Tag kantlinje lila
var tagPurpleBackground="light-dark(#f6d0f9, #391c3b)";// @deprecated Använd tag.lavender istället.
var tagPurpleBorderColor="#b77dbc";// @deprecated Använd tag.lavender istället.
var tagPeachBackground="light-dark(#ffe6d9, #421d0a)";// Tag bakgrund orange
var tagPeachBorderColor="#e87031";// Tag kantlinje orange
var tagOrangeBackground="light-dark(#ffe6d9, #421d0a)";// @deprecated Använd tag.peach istället.
var tagOrangeBorderColor="#e87031";// @deprecated Använd tag.peach istället.
var tagPippinBackground="light-dark(#ffe0e0, #431919)";// Tag bakgrund röd
var tagPippinBorderColor="#f17575";// Tag kantlinje röd
var tagRedBackground="light-dark(#ffe0e0, #431919)";// @deprecated Använd tag.pippin istället.
var tagRedBorderColor="#f17575";// @deprecated Använd tag.pippin istället.
var textPrimary="light-dark(#171717, #f2f2f2)";// Primär textfärg.
var textSecondary="light-dark(#525252, #a6a6a6)";// Sekundär textfärg
var textTertiary="light-dark(#143c50, #f2f2f2)";// Textfärg på tertiär knapp
var textOnColor="light-dark(#fff, #fff)";// Textfärg på färgade bakgrunder som inte är lager
var textInverse="light-dark(#f2f2f2, #171717)";// Inverterad textfärg
var textDisabled="light-dark(#bfbfbf, #525252)";// Färg för disabled text
var textWarning="light-dark(#e62323, #EC5252)";// Färg för felmeddelanden
var textPlaceholder="light-dark(#a6a6a6, #525252)";// Färg för platshållare
var textReadOnly="light-dark(#737373, #999)";// Färg för read-only state
var badgeBackground="light-dark(#e62323, #e62323)";// Bakgrundsfärg för badge
var calendarDateBackgroundHover="light-dark(#0000001a, #ffffff1a)";// Hover-bakgrund för datumcell
var calendarDateBackgroundSelected="light-dark(#143c50, #5897b8)";// Bakgrund för ett valt datum
var calendarDateBackgroundStartRange="light-dark(#143c50, #5897b8)";// Bakgrund för det första datumet i ett intervallval
var calendarDateBackgroundInRange="light-dark(#d5e5ed, #143c50)";// Bakgrund för datum som ligger inom ett valt intervall
var calendarDateBackgroundEndRange="light-dark(#143c50, #5897b8)";// Bakgrund för det sista datumet i ett intervallval
var logoPrimary="light-dark(#b90835, #fff)";// Färg på logotypen
var menuItemBackgroundHover="light-dark(#e6e6e6, #212121)";// Bakgrundsfärg för menu vid hover
var menuItemBackgroundSelected="light-dark(#f2f2f2, #262626)";// Bakgrundsfärg för aktiv menu
var menuTextSectionHeader="light-dark(#525252, #a6a6a6)";// Textfärg för sektionsrubriker i navigationsmenyn
var navigationLinkBackgroundHover="light-dark(#e6e6e6, #212121)";// Bakgrundsfärg vid hover
var navigationLinkBackgroundSelected="light-dark(#f2f2f2, #262626)";// Bakgrundsfärg för aktiv länk
var navigationLinkBackgroundSelectedHover="light-dark(#e6e6e6, #212121)";// Bakgrundsfärg vid hover på aktiv länk
var overlayBackground="rgba(0 0 0 / 30%)";// Bakrundsfärg för overlays
var overlayBlur="blur(2px)";// Blur för overlays
var cardBackgroundBase="light-dark(#fff, #262626)";// Bakrundsfärg för Card
var cardShadow="0 3px 5px 0 rgba(0, 0, 0, 0.30)";// Skugga för Card
var panelShadow="-2px 0px 12px -2px rgba(0, 0, 0, 0.10)";// Skugga för Panel
var space10="0.125rem";// 0.125rem / 2px.
var space30="0.375rem";// 0.375rem / 6px.
var space50="0.625rem";// 0.625rem / 10px.
var space60="0.75rem";// 0.75rem / 12px.
var space70="0.875rem";// 0.875rem / 14px.
var space75="0.938rem";// 0.938rem / 15px.
var space90="1.25rem";// 1.25rem / 20px.
var space130="2.5rem";// 2.5rem / 40px.
var space150="3rem";// 3rem / 48px.
var spaceXsmall="0.25rem";// Extra litet avstånd. 0.25rem / 4px.
var spaceSmall="0.5rem";// Litet avstånd. 0.5rem / 8px.
var spaceMedium="1rem";// Medelstort avstånd. 1rem / 16px.
var spaceLarge="1.5rem";// Stort avstånd. 1.5rem / 24px.
var spaceXlarge="2rem";// Extra stort avstånd. 2rem / 32px.
var space05="0.063rem";// 0.063rem / 1px.
var stateFocus="0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)";// Focus style used when the component is focused (box-shadow).
var stateFocusInset="inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)";// Inset variant of the focus ring (box-shadow inset).
var stateFocusContrastModeOutline="2px";// Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.
var stateFocusContrastModeOffset="2px";// Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active.
var stateInvalid="inset 0 0 0 2px light-dark(#e62323, #e62323)";// Invalid state style for form fields (box-shadow).
var transitionDurationSlow="400ms";// Långsam övergång. 400ms. Används för större layoutförändringar som sidopaneler och expanderbara sektioner.
var transitionDurationNormal="300ms";// Normal övergångshastighet. 300ms. Standardval för de flesta animationer.
var transitionDurationFast="250ms";// Snabb övergång. 250ms. Används för kortlivade övergångar som tooltips och dropdowns — inte hover.
var transitionDurationQuick="150ms";// Kort mikroanimation. 150ms. Används för snabba overlay-rörelser som modaler och select-öppningar som är perceptibelt animerade men ändå snabba.
var transitionDurationInstant="100ms";// Omedelbar återkoppling. 100ms. Används för direkta tillståndsförändringar som hover-bakgrunder och färgövergångar — allt längre upplevs som tröghet.
var transitionTimingEaseOut=(/* unused pure expression or super */ null && ([0,0,0.58,1]));// Decelererar mot slutet. Används för element som glider in i vyn.
var transitionTimingEaseIn=(/* unused pure expression or super */ null && ([0.42,0,1,1]));// Accelererar mot slutet. Används för element som lämnar vyn.
var transitionTimingEaseInOut=(/* unused pure expression or super */ null && ([0.42,0,0.58,1]));// Accelererar sedan decelererar symmetriskt. Används för element som rör sig mellan två positioner på skärmen.
var transitionPanelCollapse=(/* unused pure expression or super */ null && ({delay:"0ms",duration:"300ms",timingFunction:[0,0,0.58,1]}));// Komprimerar en panel med easeOut-timing. Används i Accordion och expanderbara ytor.
var transitionPanelExpand=(/* unused pure expression or super */ null && ({delay:"0ms",duration:"300ms",timingFunction:[0.42,0,1,1]}));// Expanderar en panel med easeIn-timing. Används i Accordion och expanderbara ytor.
var typographyFontFamily="Inter, sans-serif";// Primär typsnittsfamilj för hela design systemet.
var typographyFontSize10="0.75rem";// 0.75rem / 12px.
var typographyFontSize20="0.875rem";// 0.875rem / 14px.
var typographyFontSize30="1rem";// 1rem / 16px.
var typographyFontSize40="1.125rem";// 1.125rem / 18px.
var typographyFontSize50="1.25rem";// 1.25rem / 20px.
var typographyFontSize60="1.5rem";// 1.5rem / 24px.
var typographyFontSize70="1.625rem";// 1.625rem / 26px.
var typographyFontSize80="2rem";// 2rem / 32px.
var typographyFontSize90="2.25rem";// 2.25rem / 36px.
var typographyFontSize100="2.625rem";// 2.625rem / 42px.
var typographyLineHeight10="1rem";// 1rem / 16px.
var typographyLineHeight20="1.125rem";// 1.125rem / 18px.
var typographyLineHeight30="1.25rem";// 1.25rem / 20px.
var typographyLineHeight40="1.375rem";// 1.375rem / 22px.
var typographyLineHeight50="1.5rem";// 1.5rem / 24px.
var typographyLineHeight60="1.75rem";// 1.75rem / 28px.
var typographyLineHeight70="2rem";// 2rem / 32px.
var typographyLineHeight80="2.25rem";// 2.25rem / 36px.
var typographyLineHeight90="2.5rem";// 2.5rem / 40px.
var typographyLineHeight100="3rem";// 3rem / 48px.
var typographyWeightThin=100;// 100 – Tunnast möjliga vikt.
var typographyWeightExtraLight=200;// 200 – Extra tunn.
var typographyWeightLight=300;// 300 – Tunn.
var typographyWeightRegular=400;// 400 – Standardvikt för brödtext.
var typographyWeightMedium=500;// 500 – Mellantung, för betoning utan fet stil.
var typographyWeightSemiBold=600;// 600 – Halvfet, för underrubriker och etiketter.
var typographyWeightBold=700;// 700 – Fet, för rubriker och framhävning.
var typographyWeightExtraBold=800;// 800 – Extra fet.
var typographyWeightBlack=900;// 900 – Tyngsta möjliga vikt.
var typographyBody=(/* unused pure expression or super */ null && ({fontFamily:"Inter, sans-serif",fontSize:"1rem",fontWeight:400,lineHeight:"1.25rem"}));// Standardtypografi för brödtext. Används i löptext, listor och stycken.
var typographyBodySmall=(/* unused pure expression or super */ null && ({fontFamily:"Inter, sans-serif",fontSize:"0.875rem",fontWeight:400,lineHeight:"1.125rem"}));// Liten brödtextstil. Används för kompakt text i t.ex. tabeller och listor.
var typographyDescription=(/* unused pure expression or super */ null && ({fontFamily:"Inter, sans-serif",fontSize:"0.875rem",fontWeight:400,lineHeight:"1.125rem"}));// Beskrivningstext, t.ex. för hjälptexter och ledtexter i formulär.
var typographyDescriptionSmall=(/* unused pure expression or super */ null && ({fontFamily:"Inter, sans-serif",fontSize:"0.75rem",fontWeight:400,lineHeight:"1rem"}));// Liten beskrivningstext, t.ex. för felmeddelanden och teckenräknare i formulär.
var zIndexBase=1;// Basnivå för normala element. z-index: 1.
var zIndexAbove=10;// Placerar element ovanför normala element, t.ex. tooltips i flödet. z-index: 10.
var zIndexSidebar=500;// Z-index för sidopaneler och navigationsdrawers. z-index: 500.
var zIndexModal=1000;// Z-index för modaler och dialoger. z-index: 1000.
var zIndexToast=1100;// Z-index för toast-notifikationer, ovanför modaler. z-index: 1100.
var zIndexSkipToContent=1200;// Z-index för 'hoppa till innehåll'-länken för tillgänglighet, alltid överst. z-index: 1200.

/***/ },

/***/ 45773
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("check", __iconNode);


//# sourceMappingURL=check.js.map

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* binding */ Check
/* harmony export */ ]);


/***/ },

/***/ 97213
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
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
const Info = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("info", __iconNode);


//# sourceMappingURL=info.js.map

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* binding */ Info
/* harmony export */ ]);


/***/ },

/***/ 16025
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"indicator":"indicator_51pB","checkboxButton":"checkboxButton_URXt","does-not-exist":"does-not-exist_qXZz","checkboxField":"checkboxField_Jg75","checkboxGroup":"checkboxGroup_iAq9","checkboxList":"checkboxList_R4Jt"});
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 73413
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"textField":"textField_IarX","bottomError":"bottomError_XU77","textArea":"textArea_M6yF","input":"input_g6A6","wrap":"wrap_ljmz","medium":"medium_jalb","passwordText":"passwordText_gBIs","passwordButton":"passwordButton_kacG"});
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);