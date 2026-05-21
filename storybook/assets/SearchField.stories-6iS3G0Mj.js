import{S as i}from"./SearchField-CPtYHsFA.js";import"./iframe-DWEKRq51.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CvB-FF5L.js";import"./clsx-B-dksMZM.js";import"./Form-DTx40CXW.js";import"./useFocusRing-oyMjxI0a.js";import"./index-Du9C_P01.js";import"./index-MiMvQR0t.js";import"./Input-DdOuc8_g.js";import"./Hidden-6-qbYCow.js";import"./Button-Bw7IRosA.js";import"./useLabel-07pv796X.js";import"./useLabels-P5GsSUyo.js";import"./useButton-CoUdGt-0.js";import"./FieldError-MXzqgYJW.js";import"./Text-DNCNcmFD.js";import"./clsx-Ciqy0D92.js";import"./Text-BNtmLJ5Q.js";import"./RSPContexts-Cwb07yZR.js";import"./Group-GsD_OCkz.js";import"./useControlledState-BpWescyC.js";import"./useLocalizedStringFormatter-Dh-ctuYo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-MbP2dyiG.js";import"./useField-BhhYiwGD.js";import"./TextField.module-DdivwlC8.js";import"./search-VWoozmsh.js";import"./createLucideIcon-BuZoCqNM.js";import"./x-DF20yF-2.js";import"./useLocalizedStringFormatter-BRwZafvm.js";import"./Button-CpAjWvzP.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D7nX5YNu.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
