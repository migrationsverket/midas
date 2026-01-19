import{S as s}from"./SearchField-DwfbVJIq.js";import"./iframe-CutDFk5n.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cn8LkIR3.js";import"./utils-CTW1dxkN.js";import"./useLocalizedStringFormatter-b3cE-jas.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cfya9ks1.js";import"./useFocusRing-4WXHNlg7.js";import"./index-Vo5448Qj.js";import"./index-DJz0Sx_u.js";import"./useFormValidation-CdQWy_dH.js";import"./useField-8cvfXJwd.js";import"./Button-Dp5-D5M-.js";import"./Hidden-CUK-mE4f.js";import"./useLabels-DY93YiY3.js";import"./useButton-Co8nMjNx.js";import"./search-D04ljaIr.js";import"./createLucideIcon-B80-lQ4U.js";import"./ClearButton-B4coJjYX.js";import"./Button-DdqPt2Xq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ttEBQjzn.js";import"./VisuallyHidden-BPIRqvhu.js";import"./x-DzdF7VVd.js";import"./FieldError-DctkBoCn.js";import"./Text-DcyAgiDX.js";import"./Text-CgQQrWKF.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
