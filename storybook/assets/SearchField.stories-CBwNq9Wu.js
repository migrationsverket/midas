import{S as s}from"./SearchField-Di3vXtc-.js";import"./iframe-C7t9iVAP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-yNJAK2-f.js";import"./utils-DHL4vNoB.js";import"./useLocalizedStringFormatter-CVtX0aD4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C3oOI1qI.js";import"./useFocusRing-BBkvSuUI.js";import"./index-D_TWd0tg.js";import"./index-C8AjsPH3.js";import"./useFormValidation-DY--XCK0.js";import"./useField-_wTvKlys.js";import"./Button-DR73eWoN.js";import"./Hidden-DFB5LB9u.js";import"./useLabels-DBb3W9ZQ.js";import"./useButton-CqHRV2Gu.js";import"./search-Bw2Y-THm.js";import"./createLucideIcon-CJwkvU5U.js";import"./ClearButton-BkT0l3t_.js";import"./x-PvqyWiho.js";import"./Button-DtM-QtSV.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CR-t_tu1.js";import"./VisuallyHidden-DGjmnIGg.js";import"./FieldError-D02kFtkC.js";import"./Text-DHSnms-3.js";import"./Text-DLwF4mI3.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
