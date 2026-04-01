import{S as i}from"./SearchField-Bty3fyI2.js";import"./iframe-Bp0IlJF2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CjNbFGiN.js";import"./clsx-B-dksMZM.js";import"./Form-wrPeumQm.js";import"./useFocusRing-DY1AMT3v.js";import"./index-XmjshE1X.js";import"./index-DtgVGp9d.js";import"./Input-B0mYY1Vp.js";import"./Hidden-D7-h4wXt.js";import"./Button-JPYQALf4.js";import"./useLabel-DUfJ5yQb.js";import"./useLabels-BVCe-bH1.js";import"./useButton-BNdBcGOL.js";import"./FieldError-wBwSD7iB.js";import"./Text-BZtrmicZ.js";import"./clsx-Ciqy0D92.js";import"./Text-DQDnVDGB.js";import"./RSPContexts-CYpW2htd.js";import"./Group-CFFXu7W6.js";import"./useControlledState-ClzZCqkV.js";import"./useLocalizedStringFormatter-BXFHs5VP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-uQIvQpAv.js";import"./useField-DvLvioZE.js";import"./TextField.module-DdivwlC8.js";import"./search-COB7MKe-.js";import"./createLucideIcon-DC4UrGzm.js";import"./x-C5nPMzLL.js";import"./useLocalizedStringFormatter-DkhY-lw-.js";import"./Button-CuWSXiv5.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BVXE9jAl.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
