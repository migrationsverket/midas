import{S as i}from"./SearchField-DLJG_AYj.js";import"./iframe-BB-tPRzQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BktV0bPW.js";import"./clsx-B-dksMZM.js";import"./Form-DFI39c1h.js";import"./useFocusRing-Ddeo6vcg.js";import"./index-BUPWnhQ_.js";import"./index-DlKD8ct_.js";import"./Input-BtNtGeCO.js";import"./Hidden-DvrkBpIw.js";import"./Button-BE24gnSa.js";import"./useLabel-DIhHpIun.js";import"./useLabels-C4NHgo-V.js";import"./useButton-DatsifZv.js";import"./FieldError-BmvkTOqd.js";import"./Text-Bl05kWUq.js";import"./clsx-Ciqy0D92.js";import"./Text-DbHLBiJa.js";import"./RSPContexts-BmgBGX_c.js";import"./Group-BApqKGSd.js";import"./useControlledState-C03m2Mt3.js";import"./useLocalizedStringFormatter-BzEzuq1k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BasZ0W8H.js";import"./useField-DTyHvujF.js";import"./TextField.module-DdivwlC8.js";import"./search-Dzhj3Fr4.js";import"./createLucideIcon-BAkvEDNb.js";import"./x-FcVwT7Bo.js";import"./useLocalizedStringFormatter-Btt7l4WJ.js";import"./Button-C-wbQlf4.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B0KgTif7.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
