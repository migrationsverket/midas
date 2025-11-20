import{S as s}from"./SearchField-BFUUdqkR.js";import"./iframe-BCXW1_i0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B_lkycFk.js";import"./utils-BQj-xKr5.js";import"./useLocalizedStringFormatter-CNw7cMsH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DyWXBKlN.js";import"./useFocusRing-Cbg95h9l.js";import"./index-CG2AamNc.js";import"./index-CJ47wOzG.js";import"./useFormValidation-CFjYe5Gf.js";import"./useField-DpULJbLS.js";import"./Button-DY4JEqdp.js";import"./Hidden-CDiDpivh.js";import"./useLabels-BdTTmJ_V.js";import"./useButton-V3C9Q0iI.js";import"./search-CDes3iUQ.js";import"./createLucideIcon-BmOKhA97.js";import"./Button-C_naedx-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C1fxLZgu.js";import"./VisuallyHidden-Ca69gFn7.js";import"./x-D8TzOJRE.js";import"./FieldError-zUMBVfs0.js";import"./Text-BRLrffF_.js";import"./Text-DwKMZYPU.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
