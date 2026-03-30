import{S as i}from"./SearchField-isRsFkcp.js";import"./iframe-BWPy1RBq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-K3-6RYqB.js";import"./clsx-B-dksMZM.js";import"./Form-DbQxgntm.js";import"./useFocusRing-RbbtUgdg.js";import"./index-r2wyVjUx.js";import"./index-cuXqdBSv.js";import"./Input-HeYl3kzw.js";import"./Hidden-Tw89Zkrb.js";import"./Button-CpSzsQmu.js";import"./useLabel-DJc0EjwM.js";import"./useLabels-ByrSZnHm.js";import"./useButton-Be0Brtpy.js";import"./FieldError-Cz5zi-ZF.js";import"./Text-Cia4oSWl.js";import"./clsx-Ciqy0D92.js";import"./Text-NU9ujCYW.js";import"./RSPContexts-nAVSp4dG.js";import"./Group-FvQbGEnE.js";import"./useControlledState-D92tKPK_.js";import"./useLocalizedStringFormatter-1oCiTqWf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dls8T7AD.js";import"./useField-CUHsbM6E.js";import"./TextField.module-DdivwlC8.js";import"./search-DdFyV2zy.js";import"./createLucideIcon-B4kCR5jG.js";import"./x-28n2c5kv.js";import"./useLocalizedStringFormatter-C9Npvx33.js";import"./Button-DrPZXGaG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bglg35TW.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
