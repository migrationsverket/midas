import{S as i}from"./SearchField-DnH9ISID.js";import"./iframe-Bc-UjTRz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CIlBOTwB.js";import"./clsx-B-dksMZM.js";import"./Form-MxAWzd2x.js";import"./useFocusRing-DmMd8vo8.js";import"./index-Dv-GYJsK.js";import"./index-qwqwtO2K.js";import"./Input-BZYYU2yt.js";import"./Hidden-Bobixe9k.js";import"./Button-BBbybcMx.js";import"./useLabel-BT5HgTPM.js";import"./useLabels-DPsB-EZ0.js";import"./useButton-CiKofbei.js";import"./FieldError-pc1xIYti.js";import"./Text-FaStHPve.js";import"./clsx-Ciqy0D92.js";import"./Text-EmoXsUsF.js";import"./RSPContexts-BrVLX_Kr.js";import"./Group-Bzniv0F2.js";import"./useControlledState-Dz98cjw-.js";import"./useLocalizedStringFormatter-CjnzGiN8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-eIYPxOb0.js";import"./useField-CMU55_2k.js";import"./TextField.module-DdivwlC8.js";import"./search-fbbPi4nf.js";import"./createLucideIcon-Cvy5MTlk.js";import"./x-BlqzX1Dg.js";import"./useLocalizedStringFormatter-CK7mP7jw.js";import"./Button-Ddjv6hkf.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-De98nctX.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
