import{S as i}from"./SearchField-CHFiubIf.js";import"./iframe-BgN3T3xs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cy9VbIrx.js";import"./clsx-B-dksMZM.js";import"./Form-D63x0QWC.js";import"./useFocusRing-s6LcsVmw.js";import"./index-C8VIyOAM.js";import"./index-DDvZmCCm.js";import"./Input-ZoQ5ytTk.js";import"./Hidden-BUpoh45I.js";import"./Button-BtxXkeGG.js";import"./useLabel-C7Safkp7.js";import"./useLabels-CtvG29M_.js";import"./useButton-CYBdLk3p.js";import"./FieldError-Cg97d-Xo.js";import"./Text-Cws1TLos.js";import"./clsx-Ciqy0D92.js";import"./Text-Bm_qFAHe.js";import"./RSPContexts-Bpqk6zEL.js";import"./Group-FYdA3O0R.js";import"./useControlledState-DuMP6pst.js";import"./useLocalizedStringFormatter-B0LCJo7R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DMHLIgZ7.js";import"./useField-oBOSJSDH.js";import"./TextField.module-DdivwlC8.js";import"./search-agZ23BiA.js";import"./createLucideIcon-BePQROhA.js";import"./x-U-sIlJJn.js";import"./useLocalizedStringFormatter-B8VZY1gF.js";import"./Button-zGEEwAU5.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DwUK2ATG.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
