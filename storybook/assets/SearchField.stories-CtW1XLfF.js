import{S as i}from"./SearchField-dhOKRkjF.js";import"./iframe-CxnkivWk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D9spTQed.js";import"./clsx-B-dksMZM.js";import"./Form-DkPx28L8.js";import"./useFocusRing-DuH0mTQw.js";import"./index-D6J4-gBr.js";import"./index-BAOnkMzS.js";import"./Input-D9JcCxco.js";import"./Hidden-DV_3dmeB.js";import"./Button-bNvppfaR.js";import"./useLabel-DAx5WPkE.js";import"./useLabels-Dvg-ZEsL.js";import"./useButton-C_SSCC3h.js";import"./FieldError-CXKQ23yv.js";import"./Text-C1PtMghN.js";import"./clsx-Ciqy0D92.js";import"./Text-DEFKyO3K.js";import"./RSPContexts-BoJ1S5Xk.js";import"./Group-BNGUzLFf.js";import"./useControlledState-DslVItvC.js";import"./useLocalizedStringFormatter-B8oxEIA6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BIzTlx2_.js";import"./useField-B3iEvv-2.js";import"./TextField.module-DdivwlC8.js";import"./search-vzbfH0Ob.js";import"./createLucideIcon-DTCD7Iny.js";import"./x-CesJmbak.js";import"./useLocalizedStringFormatter-Byuqcgqc.js";import"./Button-gL8l0gpP.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CHjZ0tZh.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
