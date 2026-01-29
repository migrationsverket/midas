import{S as s}from"./SearchField-LQh0HRAA.js";import"./iframe-BvxrP4H_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D2EAi2j4.js";import"./utils-DRwSYmkY.js";import"./useLocalizedStringFormatter-D4pCyGYe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CaBalM21.js";import"./useFocusRing-CJdHKEcp.js";import"./index-DZ-u2hu8.js";import"./index-D44wzwBB.js";import"./useFormValidation-DHvoEVhR.js";import"./useField-BpVbfcEn.js";import"./Button-BEiciYfb.js";import"./Hidden-D4jsxrLb.js";import"./useLabels-BMmbJ9_b.js";import"./useButton-uALjNSWo.js";import"./search-Dkk31hPr.js";import"./createLucideIcon-B5KIjSHM.js";import"./ClearButton-CjC4V1gI.js";import"./Button-A9AEz-p5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_Mu1zyu.js";import"./VisuallyHidden-BJsqer9T.js";import"./x-DSnh6kAd.js";import"./FieldError-D1Yw6ERp.js";import"./Text-BJUv6RK-.js";import"./Text-DeMAVr2b.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
