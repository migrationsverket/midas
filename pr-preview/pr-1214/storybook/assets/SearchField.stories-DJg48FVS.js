import{S as i}from"./SearchField-B9kUV17I.js";import"./iframe-O2McX3yB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DO-wSHzc.js";import"./clsx-B-dksMZM.js";import"./Form-CM6Fo3tM.js";import"./useFocusRing-C_4jX8C9.js";import"./index-DgGltmSJ.js";import"./index-DYmc9y-m.js";import"./Input-KNFPZfcO.js";import"./Hidden-kbzwSHo-.js";import"./Button-2hnImx6E.js";import"./useLabel-Crm93zgP.js";import"./useLabels-CAQMy46X.js";import"./useButton-DSHOccpc.js";import"./FieldError-CWyB2qd4.js";import"./Text-7Ipy1BR9.js";import"./clsx-Ciqy0D92.js";import"./Text-YZ7QSVuR.js";import"./RSPContexts-D9PIXrmH.js";import"./Group-DIMSG4ag.js";import"./useControlledState-CDscPa5k.js";import"./useLocalizedStringFormatter-DIk6ZtyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D567ds9S.js";import"./useField-CdhU-8jB.js";import"./TextField.module-DdivwlC8.js";import"./search-Bxjr7PnI.js";import"./createLucideIcon-C4xn0wXs.js";import"./x-Bexz8DwZ.js";import"./useLocalizedStringFormatter-DXhkJRky.js";import"./Button-D2h_fsiV.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CVECtPk8.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
