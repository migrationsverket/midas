import{S as s}from"./SearchField-rvmmVE_f.js";import"./iframe-BHqTUq8s.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-VO85oOjD.js";import"./utils-Bj3EyYaW.js";import"./useLocalizedStringFormatter-Bp2mibmh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B8TIChcC.js";import"./useFocusRing-BmhCrYVv.js";import"./index-Sstif_cL.js";import"./index-cPauk73w.js";import"./useFormValidation-bHmqxDjI.js";import"./useField-DcudRm_h.js";import"./Button-CE94D4y2.js";import"./Hidden-N1ucyMbU.js";import"./useLabels-D7M8cQNq.js";import"./useButton-DYUODf-M.js";import"./search-BcXRF7N3.js";import"./createLucideIcon-ClnAiwMi.js";import"./Button-B5hBY_tv.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-Djq8wsFX.js";import"./VisuallyHidden-BluHmF1Q.js";import"./x-D1nhCFMc.js";import"./FieldError-DRRjbRt6.js";import"./Text-l0B9lw7d.js";import"./Text-BNa5DR9o.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
