import{S as i}from"./SearchField-BUj_rzVR.js";import"./iframe-iIM7yFlw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DNy6buAm.js";import"./clsx-B-dksMZM.js";import"./Form-BThFu9wJ.js";import"./useFocusRing-CERt57Nt.js";import"./index-C-jrAZ8o.js";import"./index-DvWNh13S.js";import"./Input-B6Xwy6Dy.js";import"./Hidden-pJH8oqvO.js";import"./Button-XY1USx81.js";import"./useLabels-BYU3vliF.js";import"./useButton-BOKRtXXu.js";import"./FieldError-BJhyn0Bc.js";import"./Text-CpJA3Ugt.js";import"./clsx-Ciqy0D92.js";import"./Text-GrSmyAjf.js";import"./RSPContexts-83tn9EqZ.js";import"./Group--U88wz4S.js";import"./useControlledState-CjC15qhB.js";import"./useLocalizedStringFormatter-CVQ2svrB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B2mgeuZL.js";import"./useField-Df6YKAwX.js";import"./TextField.module-DdivwlC8.js";import"./search-Dnv3AO13.js";import"./createLucideIcon-BWICqhq6.js";import"./x-BJvrnR5U.js";import"./useLocalizedStringFormatter-CVsIIBgW.js";import"./Button-D34JSMMc.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BIQkIPH_.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
