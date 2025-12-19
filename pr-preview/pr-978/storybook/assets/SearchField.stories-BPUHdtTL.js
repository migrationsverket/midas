import{S as s}from"./SearchField-D6C-d6s2.js";import"./iframe-DjgIrgXx.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BGQ28pQk.js";import"./utils-D2kAasoR.js";import"./useLocalizedStringFormatter-O_Q9rGTo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-FQC1R6st.js";import"./useFocusRing-B_HSwrPF.js";import"./index-D1Un5PzA.js";import"./index-CF8FLkGf.js";import"./useFormValidation-B95EVcBX.js";import"./useField-BEk04EZe.js";import"./Button-B_QLJXSL.js";import"./Hidden-BNyl_2c1.js";import"./useLabels-B0sW_9bm.js";import"./useButton-ulDAvSC9.js";import"./search-DSPfUPdU.js";import"./createLucideIcon-B3OWVXDd.js";import"./Button-jAm1QGD3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_-NNNwN.js";import"./VisuallyHidden-BkzPV6ob.js";import"./x-Dgi5qKkD.js";import"./FieldError-B5gp4YY1.js";import"./Text-BGE_6lk2.js";import"./Text-CKRJVtbY.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
