import{S as i}from"./SearchField-DjrRGqYo.js";import"./iframe-Cen0ae1x.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-IBVWRADw.js";import"./clsx-B-dksMZM.js";import"./Form-CjUsSzQO.js";import"./useFocusRing-DL4UMbrb.js";import"./index--9VSKs4e.js";import"./index-CAAqL2lM.js";import"./Input-o46YmxUL.js";import"./Hidden-DeFJbGnS.js";import"./Button-CH2bisSo.js";import"./useLabel-DSnRldp0.js";import"./useLabels-D8TiPXss.js";import"./useButton-SUZhILTb.js";import"./FieldError-BmQ4jQxz.js";import"./Text-DIYKRKOx.js";import"./clsx-Ciqy0D92.js";import"./Text-CTsFsWIz.js";import"./RSPContexts-j8AP2XCE.js";import"./Group-BkN2Ikmz.js";import"./useControlledState-JSkmdR3M.js";import"./useLocalizedStringFormatter-AjdMYjpu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-1F9i-9HA.js";import"./useField-D7rcpCWI.js";import"./TextField.module-DdivwlC8.js";import"./search-Bf4B9uoT.js";import"./createLucideIcon-obLWYbEm.js";import"./x-DckwiAmz.js";import"./useLocalizedStringFormatter-4r_hlzhF.js";import"./Button-CA3EkwoT.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-AN2tdixc.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
