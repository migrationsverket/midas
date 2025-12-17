import{S as s}from"./SearchField-DfdEX5fW.js";import"./iframe-C-Lam_ng.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CKRNIuAr.js";import"./utils-W06ddP_L.js";import"./useLocalizedStringFormatter-DdCEe0_z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BKY-x7HE.js";import"./useFocusRing-BOxTCQ-z.js";import"./index-B-1MEL0a.js";import"./index-AgIsqBR_.js";import"./useFormValidation-CK88wI0l.js";import"./useField-B9038I5h.js";import"./Button-fej9ya2E.js";import"./Hidden-LjeV_3jg.js";import"./useLabels-CL-84yha.js";import"./useButton-CI7GwtHS.js";import"./search-CjY1YwK5.js";import"./createLucideIcon-44xnuqEI.js";import"./Button-P88LisFb.js";import"./Button.module-D7V8WCeR.js";import"./useLocalizedStringFormatter-h0NnrpaM.js";import"./VisuallyHidden-_cUxrJf0.js";import"./x-BhnhKHvo.js";import"./FieldError-C41CocVt.js";import"./Text-BfdfpGmz.js";import"./Text-CpVobgrZ.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
