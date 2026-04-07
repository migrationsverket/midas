import{S as i}from"./SearchField-ViUO96Me.js";import"./iframe-hABApRlT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BkABga95.js";import"./clsx-B-dksMZM.js";import"./Form-C8O9btlQ.js";import"./useFocusRing-BP25i5uK.js";import"./index-77qwmgqY.js";import"./index-BVfSwpPB.js";import"./Input-BJ65okwJ.js";import"./Hidden-B-K0lNZo.js";import"./Button-BzGvPTBW.js";import"./useLabel-qHqMeu2r.js";import"./useLabels-BIKxEJiN.js";import"./useButton-BuyQblWp.js";import"./FieldError-DKFm7MzG.js";import"./Text-Cb1qObZS.js";import"./clsx-Ciqy0D92.js";import"./Text-DztaIr_D.js";import"./RSPContexts-BLO7xP9m.js";import"./Group-BWi7evdX.js";import"./useControlledState-vYw9-Cid.js";import"./useLocalizedStringFormatter-Cl3bAFJS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Z25TGOZo.js";import"./useField-DSfD8PGx.js";import"./TextField.module-DdivwlC8.js";import"./search-B0rkGVUA.js";import"./createLucideIcon-jn3NctNW.js";import"./x-viUQDrjv.js";import"./useLocalizedStringFormatter-Cc9pC_do.js";import"./Button-D27stedr.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DvfbpkLp.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
