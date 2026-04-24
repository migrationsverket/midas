import{S as i}from"./SearchField-BgKDPWnJ.js";import"./iframe-u611P0T1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BdhmhbmB.js";import"./clsx-B-dksMZM.js";import"./Form-Ct-T4_sP.js";import"./useFocusRing-x1014Y4C.js";import"./index-DjGI_wvA.js";import"./index-bc3f0jR5.js";import"./Input-DNUxzppg.js";import"./Hidden-BwAa9Aqn.js";import"./Button-DHuMXkEV.js";import"./useLabel-UVmCtmUg.js";import"./useLabels-DdnJKdMx.js";import"./useButton-Ck0FEmlG.js";import"./FieldError-BUsLHsVx.js";import"./Text-C1ITd__M.js";import"./clsx-Ciqy0D92.js";import"./Text-BiFS0ps1.js";import"./RSPContexts-CHqXj6wS.js";import"./Group-CJpHDVfm.js";import"./useControlledState-C8WxcwQm.js";import"./useLocalizedStringFormatter-DfPMqepd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DuE_Lsr4.js";import"./useField-DM_n0gFB.js";import"./TextField.module-DdivwlC8.js";import"./search-DJdaXi48.js";import"./createLucideIcon-DZ-Vm0W7.js";import"./x-BKnl8vZI.js";import"./useLocalizedStringFormatter-B5u32oMj.js";import"./Button-D0hAEojt.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CPF-h8vx.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
