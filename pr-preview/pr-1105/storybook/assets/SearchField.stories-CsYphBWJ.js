import{S as i}from"./SearchField-h6iwy5Xg.js";import"./iframe-FsNXgqe6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CHHHSM11.js";import"./clsx-B-dksMZM.js";import"./Form-B6wupcKh.js";import"./useFocusRing-CRoVfTyE.js";import"./index-C-L_vO3C.js";import"./index-DR5yPJn1.js";import"./Input-Uwso7ecy.js";import"./Hidden-B6vp6jMs.js";import"./Button-BlUHKe-n.js";import"./useLabels-Dlx2sqNn.js";import"./useButton-Dvk9iXpB.js";import"./FieldError-p7x1oei0.js";import"./Text-CjmdaRq5.js";import"./clsx-Ciqy0D92.js";import"./Text-C8W6Aunw.js";import"./RSPContexts-L16IbbAV.js";import"./Group-Dxk1VQ4X.js";import"./useControlledState-cgOhGnIF.js";import"./useLocalizedStringFormatter-C2slbsQF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-cLoVvWUX.js";import"./useField-C0plC4Rc.js";import"./TextField.module-DdivwlC8.js";import"./search-DfMLWDch.js";import"./createLucideIcon-Dz3AmHpK.js";import"./x-B7cAzNtk.js";import"./useLocalizedStringFormatter-XwSS7WVV.js";import"./Button-YzrNlavS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CDgolLOv.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
