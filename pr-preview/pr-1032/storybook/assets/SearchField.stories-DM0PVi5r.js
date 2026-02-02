import{S as s}from"./SearchField-VAONe4AS.js";import"./iframe-DRirf2Ys.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CQDYwQIF.js";import"./utils-BC-9mfhg.js";import"./useLocalizedStringFormatter-Czvg_dgK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D0_G5bPN.js";import"./useFocusRing-CJQJQ7PW.js";import"./index-hP6JGvby.js";import"./index-Drx8rBd8.js";import"./useFormValidation-Dl6NIxjf.js";import"./useField-CZKO8xFK.js";import"./Button-kU1Por_z.js";import"./Hidden-lhPivziv.js";import"./useLabels-Ppos1hYn.js";import"./useButton-Dy4vSFCX.js";import"./search-YWjJfySP.js";import"./createLucideIcon-pFgQkBEQ.js";import"./ClearButton-Ck9FdSBw.js";import"./Button-Bbxz1V1l.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C7yUVNG5.js";import"./VisuallyHidden-DEc4J7Zj.js";import"./x-DfCsYV9b.js";import"./FieldError-Ciz7MEhw.js";import"./Text-haWdKGMd.js";import"./Text-Cz4JRdhg.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
