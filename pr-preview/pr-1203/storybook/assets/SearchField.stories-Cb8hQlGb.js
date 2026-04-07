import{S as i}from"./SearchField-DbeUIWmc.js";import"./iframe-BObKWO8P.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-L1ZXEAM0.js";import"./clsx-B-dksMZM.js";import"./Form-DVIWY3z8.js";import"./useFocusRing-CEJP2sKk.js";import"./index-DZLGwHwk.js";import"./index-w-ZTYn4u.js";import"./Input-Sgu-PXBi.js";import"./Hidden-pBI9L9bQ.js";import"./Button-Bj1Gx374.js";import"./useLabel-CCF_4gB4.js";import"./useLabels-CPcqYQYg.js";import"./useButton-0-s8uA0b.js";import"./FieldError-C85eAV5x.js";import"./Text-B0SIJ0ar.js";import"./clsx-Ciqy0D92.js";import"./Text-BL0-OeDh.js";import"./RSPContexts--YEt9orp.js";import"./Group-DN6AoKzN.js";import"./useControlledState-2AKkTK1v.js";import"./useLocalizedStringFormatter-DdHSxoKc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BGTqg0R_.js";import"./useField-B2ENXugf.js";import"./TextField.module-DdivwlC8.js";import"./search-D6zBbICX.js";import"./createLucideIcon-Bq0_1Yjp.js";import"./x-Ci83I339.js";import"./useLocalizedStringFormatter-Bt1-Aj9O.js";import"./Button-CF3n8BCq.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C2-WAH_L.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
