import{S as s}from"./SearchField-D7aOQTYM.js";import"./iframe-CyOFsxEw.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BKJPrLB_.js";import"./utils-GLgclvkH.js";import"./useLocalizedStringFormatter-CJ9ubZdj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BVveQGGs.js";import"./useFocusRing-D8aNkt7i.js";import"./index-CU2F3nqQ.js";import"./index-Cbz2sGVE.js";import"./useFormValidation-ClIr8owc.js";import"./useField-BVPNG5p2.js";import"./Button-Da0V7IB-.js";import"./Hidden-cFLLFl7x.js";import"./useLabels-FLdwxISV.js";import"./useButton-DTZgQVqL.js";import"./search-DLpg5Ier.js";import"./createLucideIcon-CgjV2Kgp.js";import"./Button-DgFwcK1w.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BB5TyvbC.js";import"./VisuallyHidden-DCfUdHTK.js";import"./x-DrdwkuGC.js";import"./FieldError-C2jTShGg.js";import"./Text-CmPsAR7I.js";import"./Text-DwafAf6m.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,q as __namedExportsOrder,j as default};
