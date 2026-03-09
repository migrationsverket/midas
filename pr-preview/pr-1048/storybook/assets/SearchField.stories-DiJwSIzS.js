import{S as s}from"./SearchField-CoCB4fgs.js";import"./iframe-CgeuBGg3.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-hrYI1rS_.js";import"./utils-D5ZiOk7c.js";import"./useLocalizedStringFormatter-DdY9z82P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CR5nipmw.js";import"./useFocusRing-CtUB-pVk.js";import"./index-C0DQMcLX.js";import"./index-Dr51d6up.js";import"./useFormValidation-B3OZSiFR.js";import"./useField-CrURjpqd.js";import"./Button-D49K8NN3.js";import"./Hidden-BuqiSPlJ.js";import"./useLabels-CcDa7eqk.js";import"./useButton-BafbxBxx.js";import"./search-BIcPsdZp.js";import"./createLucideIcon-j5uHxTIE.js";import"./ClearButton-CEuDz5KJ.js";import"./Button-B3bHm7yN.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BVH642Vw.js";import"./VisuallyHidden-nAkuDexq.js";import"./x-82ZwNPo6.js";import"./FieldError-Ck8WwPsT.js";import"./Text-BY_Jfm-B.js";import"./Text-cOijWBlA.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
