import{S as s}from"./SearchField-BYl8VI4I.js";import"./iframe-BDLZKJUa.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CBybevG0.js";import"./utils-BN5a6ONf.js";import"./useLocalizedStringFormatter-grQ0fku2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-V_xpj0z0.js";import"./useFocusRing-B5FtCOQQ.js";import"./index-BCWLJOvr.js";import"./index-DfTmM_Vy.js";import"./useFormValidation-DTB8faqq.js";import"./useField-CuQudl8J.js";import"./Button-C9Vdx1Sb.js";import"./Hidden-U_iFDsIn.js";import"./useLabels-BQwmeXXN.js";import"./useButton-BOuekyb0.js";import"./search-Bab494cP.js";import"./createLucideIcon-1UHjhtvK.js";import"./ClearButton-BaZc3b8h.js";import"./Button-BBKL1eD8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-00J5Ylgv.js";import"./VisuallyHidden-C2Ytvwha.js";import"./x--FAB3bcS.js";import"./FieldError-CQnsXSuf.js";import"./Text-6K4677wX.js";import"./Text-DDCBPVqL.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...o.parameters?.docs?.source}}};const w=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,w as __namedExportsOrder,q as default};
