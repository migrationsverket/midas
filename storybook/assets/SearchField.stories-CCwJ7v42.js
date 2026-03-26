import{S as i}from"./SearchField-jgGQQifc.js";import"./iframe-CRmifMxk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dhemezbc.js";import"./clsx-B-dksMZM.js";import"./Form-BdfTmg9K.js";import"./useFocusRing-C63zC52P.js";import"./index-DsJY3sZz.js";import"./index-C2oL4zj2.js";import"./Input-PRe3Ij8l.js";import"./Hidden-D_jN673M.js";import"./Button-Xq9T9zNn.js";import"./useLabel-CMUsO_ec.js";import"./useLabels-DRk006Lw.js";import"./useButton-BpHW9Z05.js";import"./FieldError-4mX3m-58.js";import"./Text-7kJBKZyv.js";import"./clsx-Ciqy0D92.js";import"./Text-Cw5AWujN.js";import"./RSPContexts-Ch-opsTz.js";import"./Group-BEi-QEnV.js";import"./useControlledState-DeYyUgKl.js";import"./useLocalizedStringFormatter-D-hwM5Wx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CQSHC6Ee.js";import"./useField-CAyp5oSJ.js";import"./TextField.module-DdivwlC8.js";import"./search-ARO-LRpr.js";import"./createLucideIcon-DkATSQ6x.js";import"./x-COiF7Ld4.js";import"./useLocalizedStringFormatter-CHY6Cxq_.js";import"./Button-C1SdrETN.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C9jbNlKJ.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
