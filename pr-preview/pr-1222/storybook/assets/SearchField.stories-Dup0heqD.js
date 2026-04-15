import{S as i}from"./SearchField-_vlXTjr6.js";import"./iframe-DyVZO6Jd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B4PADexm.js";import"./clsx-B-dksMZM.js";import"./Form-yAw-6d1b.js";import"./useFocusRing-D32E8y-A.js";import"./index-CPCUhuiH.js";import"./index-Co6SSMDt.js";import"./Input-C7xr_WRa.js";import"./Hidden-DIN7ehBk.js";import"./Button-B6InbNDy.js";import"./useLabel-BjmSwcyg.js";import"./useLabels-C-NvnRdm.js";import"./useButton-B-EgkQxS.js";import"./FieldError-BOgY85Mx.js";import"./Text-CipKPPoF.js";import"./clsx-Ciqy0D92.js";import"./Text-BNccgVJc.js";import"./RSPContexts-X7l1b1Jy.js";import"./Group-ua2ZQATg.js";import"./useControlledState-DG-0bHR_.js";import"./useLocalizedStringFormatter-BIY6CwSv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CE085p0z.js";import"./useField-CC79MtWI.js";import"./TextField.module-DdivwlC8.js";import"./search-Cu-ot_sD.js";import"./createLucideIcon-CjUPJyft.js";import"./x-bmse7woB.js";import"./useLocalizedStringFormatter-Dt4-iLHW.js";import"./Button-DFXCpOJf.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CBSXawwP.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
