import{S as i}from"./SearchField-By3dPBOW.js";import"./iframe-D7aktJQV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DNmLi0Ns.js";import"./clsx-B-dksMZM.js";import"./Form-C922N3ok.js";import"./useFocusRing-BIeXmF9F.js";import"./index-D1nxkkFw.js";import"./index-BhjnNFRZ.js";import"./Input-CAywiR04.js";import"./Hidden-B0OViUit.js";import"./Button-2JoqP8wJ.js";import"./useLabel-yzdCyS6F.js";import"./useLabels-DjGMth6f.js";import"./useButton-D9uxvQZx.js";import"./FieldError-CgOE4cX4.js";import"./Text-DYj0Y-WB.js";import"./clsx-Ciqy0D92.js";import"./Text-DVQHaLD4.js";import"./RSPContexts-BW1FMwMd.js";import"./Group-D6C5clZk.js";import"./useControlledState-1uGcLhZ_.js";import"./useLocalizedStringFormatter-DRhhdLG7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BeAzynaV.js";import"./useField-B0Fny93Q.js";import"./TextField.module-DdivwlC8.js";import"./search-Cs6Yub75.js";import"./createLucideIcon-Bis6T-wM.js";import"./x-z9l8IXo0.js";import"./useLocalizedStringFormatter-V3f1g4sa.js";import"./Button-D5CfzWf4.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ClpBCcmK.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
