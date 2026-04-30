import{S as i}from"./SearchField-B3_WpzPZ.js";import"./iframe-CZvMPihu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cqj1DeIe.js";import"./clsx-B-dksMZM.js";import"./Form-o2rb1jhL.js";import"./useFocusRing-B8JnrIcb.js";import"./index-GihrdCeH.js";import"./index-BkbhKg_o.js";import"./Input-Mf2rTIYQ.js";import"./Hidden-DWCJo24h.js";import"./Button-cyaqw3RD.js";import"./useLabel-CaU9RgyQ.js";import"./useLabels-DwUdsAUl.js";import"./useButton-DBJlOvpF.js";import"./FieldError-BTAbwmK2.js";import"./Text-Dw0gnghQ.js";import"./clsx-Ciqy0D92.js";import"./Text-DgbEXfJ4.js";import"./RSPContexts-rKUrJdMM.js";import"./Group-DMivJjDQ.js";import"./useControlledState-FTjsg_U3.js";import"./useLocalizedStringFormatter-DcVcSICC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BaSAP6Vi.js";import"./useField-Ce8tB8jB.js";import"./TextField.module-DdivwlC8.js";import"./search-D9U1ZtLO.js";import"./createLucideIcon-w0hL8zu1.js";import"./x-COwp3eV_.js";import"./useLocalizedStringFormatter-CQr6tlIE.js";import"./Button-DHBiSvIz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CgB8hx88.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
