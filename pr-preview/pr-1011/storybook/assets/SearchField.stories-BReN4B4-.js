import{S as s}from"./SearchField-CRkXOjgY.js";import"./iframe-CDna8jjE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ZH1c28y-.js";import"./utils-DLwzmocV.js";import"./useLocalizedStringFormatter-Ce-PtoG-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CXYIEHUd.js";import"./useFocusRing-Cui58P_W.js";import"./index-CqO8KTpm.js";import"./index-C1kBw2K3.js";import"./useFormValidation-CLHtYi4A.js";import"./useField-Clo25zs2.js";import"./Button-CasiqzJU.js";import"./Hidden-CL_R-LHP.js";import"./useLabels-DJeip4q-.js";import"./useButton-DgzyzFaT.js";import"./search-B9tTUG_2.js";import"./createLucideIcon-DXyy-duf.js";import"./ClearButton-Dh9NZQX8.js";import"./Button-BzWf_0Ce.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-T78m4mfD.js";import"./VisuallyHidden-BxQZRWoC.js";import"./x-DtvLvZQZ.js";import"./FieldError-Bwk-kYY7.js";import"./Text-DFouRg6c.js";import"./Text-CTMNSfQo.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
