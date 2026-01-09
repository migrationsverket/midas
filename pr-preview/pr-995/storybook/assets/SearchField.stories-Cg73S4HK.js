import{S as s}from"./SearchField-C-lpqlcU.js";import"./iframe-CiD__Hyy.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B8jVS4zb.js";import"./utils-Q1z5OATQ.js";import"./useLocalizedStringFormatter-GCebu6ZU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bz-0psYq.js";import"./useFocusRing-BySSjodA.js";import"./index-BT7nfzmR.js";import"./index-CV7cu1dt.js";import"./useFormValidation-Ccsqp47f.js";import"./useField-BJf9s_op.js";import"./Button-B2sA97lD.js";import"./Hidden-BE6gFQQR.js";import"./useLabels-CX9hgZKe.js";import"./useButton-X_4XH9RQ.js";import"./search-DHsZ_zSq.js";import"./createLucideIcon-BkxrGWvy.js";import"./ClearButton-CkqWG16U.js";import"./Button-D24FKJ_j.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-EaUWWv-J.js";import"./VisuallyHidden-BXpQqt24.js";import"./x-BkZTMQtm.js";import"./FieldError-Dm1ekGMw.js";import"./Text-DeJgjfoW.js";import"./Text-BQRoNCWw.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
