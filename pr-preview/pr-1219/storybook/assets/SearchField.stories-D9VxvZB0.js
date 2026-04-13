import{S as i}from"./SearchField-CxxXzdiX.js";import"./iframe-Db_qDyjb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B1ump1uN.js";import"./clsx-B-dksMZM.js";import"./Form-qvxF-3xc.js";import"./useFocusRing-CvFtjn9f.js";import"./index-BrCAN2R3.js";import"./index-rXvRCXG4.js";import"./Input-BU2rvLfi.js";import"./Hidden-Ck1I1Pl6.js";import"./Button-DmcShG5W.js";import"./useLabel-79lcnvNd.js";import"./useLabels-DU_Qs8Z-.js";import"./useButton-DzefyB67.js";import"./FieldError-3n-vV-Ng.js";import"./Text-DysxiSoS.js";import"./clsx-Ciqy0D92.js";import"./Text-CV2l2NwE.js";import"./RSPContexts-vbQVcb1z.js";import"./Group-Cr5jZpuK.js";import"./useControlledState-CW90Ui0G.js";import"./useLocalizedStringFormatter-DgJKEd-_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DZHRixjc.js";import"./useField-C9_g4vAO.js";import"./TextField.module-DdivwlC8.js";import"./search-BbpvgoWl.js";import"./createLucideIcon-Dj8isrVr.js";import"./x-DpepR7rv.js";import"./useLocalizedStringFormatter-TCo9J1WR.js";import"./Button-B6sBamwP.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DI0T0a8c.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
