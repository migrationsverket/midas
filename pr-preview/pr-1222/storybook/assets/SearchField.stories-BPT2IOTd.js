import{S as i}from"./SearchField-CHbxjUQk.js";import"./iframe-t1Iclc3O.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dct5gSIh.js";import"./clsx-B-dksMZM.js";import"./Form-xhJeY9fj.js";import"./useFocusRing-BpTBuj6A.js";import"./index-CA7bmWu8.js";import"./index-BvJk8jeb.js";import"./Input-DaRMHTIT.js";import"./Hidden-CkUuXpVe.js";import"./Button-Ct7y-I4z.js";import"./useLabel-oq7jpXGJ.js";import"./useLabels-D-BGXnYn.js";import"./useButton-DGrW7rRJ.js";import"./FieldError-Dmn3kR1x.js";import"./Text-DMJCfth7.js";import"./clsx-Ciqy0D92.js";import"./Text-BsC3oc9y.js";import"./RSPContexts-UAuwQRBq.js";import"./Group-C4VAEMXP.js";import"./useControlledState-BnBZk0Xv.js";import"./useLocalizedStringFormatter-Bv8tLnmi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B-5YGW10.js";import"./useField-BEiuTqM5.js";import"./TextField.module-DdivwlC8.js";import"./search-CRJSwpH1.js";import"./createLucideIcon-BnrXW6fJ.js";import"./x-DDaTip9H.js";import"./useLocalizedStringFormatter-CiQgcaMc.js";import"./Button-BRu7Bvor.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Mig31NA5.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source},description:{story:`Default behavior in v17 — the built-in submit button is shown.
The button is not in the tab order; use Enter to submit or click the button.`,...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Without button (v18 default)',
  args: {
    placeholder: 'Sök efter en person',
    showButton: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const G=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,G as __namedExportsOrder,A as default};
