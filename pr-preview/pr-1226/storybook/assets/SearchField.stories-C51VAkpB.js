import{S as i}from"./SearchField-BGY4I2Xd.js";import"./iframe-DAlGZfQW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C0mXnx3L.js";import"./clsx-B-dksMZM.js";import"./Form-DSNATSPd.js";import"./useFocusRing-aL1wDNV0.js";import"./index-ZTPDuQtA.js";import"./index-DeUwXnwW.js";import"./Input--HBA1EQM.js";import"./Hidden-o3xiVHpT.js";import"./Button-DEU34lA6.js";import"./useLabel-Bq6n8TDb.js";import"./useLabels-oTyQAigb.js";import"./useButton-DzfauRnx.js";import"./FieldError-CkH1bdUQ.js";import"./Text-LSJ9RRHV.js";import"./clsx-Ciqy0D92.js";import"./Text-BD2SYZAb.js";import"./RSPContexts-ogBeYVaG.js";import"./Group-BzULb40h.js";import"./useControlledState-CvHTtUWm.js";import"./useLocalizedStringFormatter-Db4mYuAv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BdwaRRev.js";import"./useField-BW3jrAKK.js";import"./TextField.module-DdivwlC8.js";import"./search-Bp_vSZ3A.js";import"./createLucideIcon-D-D7lNm8.js";import"./x-4pQMUwmc.js";import"./useLocalizedStringFormatter-Bb6HaDEh.js";import"./Button-xgyBGP3u.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CtB5gR65.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
