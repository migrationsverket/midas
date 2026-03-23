import{S as i}from"./SearchField-pJu9ex7-.js";import"./iframe-BEfu4cuV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BeR4bg4o.js";import"./clsx-B-dksMZM.js";import"./Form-CziSx__h.js";import"./useFocusRing-C6rqVt89.js";import"./index-BZsmp3Wz.js";import"./index-XFYlP6zW.js";import"./Input-CwNBuFyA.js";import"./Hidden-DbtYdw9n.js";import"./Button-DwT05Yas.js";import"./useLabels-Cc8XnrID.js";import"./useButton-DfYe28nP.js";import"./FieldError-RSI06Lef.js";import"./Text-BC7EJkoa.js";import"./clsx-Ciqy0D92.js";import"./Text-Cvg6C9XG.js";import"./RSPContexts-BAhkEONY.js";import"./Group-BgZaktBI.js";import"./useControlledState-DrRQ3ZH3.js";import"./useLocalizedStringFormatter-Bskkm3TD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DBuQInhj.js";import"./useField-PSDLB5ry.js";import"./TextField.module-DdivwlC8.js";import"./search-D0T0qXvk.js";import"./createLucideIcon-BxYC1ZwZ.js";import"./x-Dz0TYTCE.js";import"./useLocalizedStringFormatter-DJkiKMK1.js";import"./Button-CNvrI9qG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CLBjEdEZ.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
