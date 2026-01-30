import{S as s}from"./SearchField-CqdIpysg.js";import"./iframe-Ds-nK5jC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B9M6c-Zi.js";import"./utils-BWcc9EPK.js";import"./useLocalizedStringFormatter-CXBhyWlF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DOnrvLbp.js";import"./useFocusRing-DSAS5gOz.js";import"./index-BWszMgV4.js";import"./index-uHsAuulk.js";import"./useFormValidation-MJDJC9ZJ.js";import"./useField-CFPmWj_n.js";import"./Button-dHl8uENq.js";import"./Hidden-4dstmqQY.js";import"./useLabels-a2jSOYQl.js";import"./useButton-H43OBGIl.js";import"./search-wDR_DoLb.js";import"./createLucideIcon-xY7bNo4d.js";import"./ClearButton-CnDG95hd.js";import"./Button-CQLlpX_U.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DpSHxtYR.js";import"./VisuallyHidden-BeRc1dUa.js";import"./x-DNleDvIs.js";import"./FieldError-CDeKUF86.js";import"./Text-D4nZVrIm.js";import"./Text-cOJkqGeS.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
