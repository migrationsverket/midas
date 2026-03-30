import{S as i}from"./SearchField-DmJDXIon.js";import"./iframe-DOVonus9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DhPCiJLe.js";import"./clsx-B-dksMZM.js";import"./Form-BdbgD7B8.js";import"./useFocusRing-DFqQelvs.js";import"./index-BXLzhsHf.js";import"./index-DynpYPKw.js";import"./Input-CBiXTxlk.js";import"./Hidden-DMUfuflC.js";import"./Button-Cz99NuPN.js";import"./useLabel-CFmo7f_1.js";import"./useLabels-DhmD3WfL.js";import"./useButton-DPc7CUXt.js";import"./FieldError-B2DyCZVK.js";import"./Text-DFd043ah.js";import"./clsx-Ciqy0D92.js";import"./Text-DX6xJkbU.js";import"./RSPContexts-D5KAyYge.js";import"./Group-BM_cRr_-.js";import"./useControlledState-BPaR75DG.js";import"./useLocalizedStringFormatter-MwIKQJtH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-1111KJFc.js";import"./useField-D5iM5mrG.js";import"./TextField.module-DdivwlC8.js";import"./search-CZ_ZwxPK.js";import"./createLucideIcon-CfE47YAu.js";import"./x-BOgOzpuz.js";import"./useLocalizedStringFormatter-zR7_kec3.js";import"./Button-BMOShfgc.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BveXVc2Y.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
