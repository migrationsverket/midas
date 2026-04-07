import{S as i}from"./SearchField-CdBtkqk9.js";import"./iframe-DWnL6zvQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ZOmRnVQp.js";import"./clsx-B-dksMZM.js";import"./Form-Klc040-z.js";import"./useFocusRing-T-08Y7EQ.js";import"./index-BKrgJF-5.js";import"./index-BdkXzYOX.js";import"./Input-DO9zOzRd.js";import"./Hidden-D-JZUsjj.js";import"./Button-aAs4bXFc.js";import"./useLabel-0R8_MAd9.js";import"./useLabels-D-eiwoeG.js";import"./useButton-Da9Ah83K.js";import"./FieldError-ans3DohR.js";import"./Text-BFKc_gYr.js";import"./clsx-Ciqy0D92.js";import"./Text-BYUx4Ue_.js";import"./RSPContexts-Ce97Jw3e.js";import"./Group-QhqBsbqD.js";import"./useControlledState-BFA4HXY0.js";import"./useLocalizedStringFormatter-B7dpYpQH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C9ilSKUg.js";import"./useField-JVOxqYJx.js";import"./TextField.module-DdivwlC8.js";import"./search-C2E7zBVU.js";import"./createLucideIcon--0_c509q.js";import"./x-uyk-3eD_.js";import"./useLocalizedStringFormatter-BGNOMAGR.js";import"./Button-DLalHH7Q.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DbmKXf8Z.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
