import{S as s}from"./SearchField-5YxksIzN.js";import"./iframe-Gk5MEbtf.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D6DRt1-U.js";import"./utils-FYzLBBKM.js";import"./useLocalizedStringFormatter-CJFI85ze.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DBqyAHfj.js";import"./useFocusRing-WCMdeDPk.js";import"./index-BR8-lUkO.js";import"./index-D_XTGtZn.js";import"./useFormValidation-DHhvC1R-.js";import"./useField-Dxt7Dh66.js";import"./Button-BwdIuzcz.js";import"./Hidden-DGa8KKgC.js";import"./useLabels-C555CKHB.js";import"./useButton-Df05FaMj.js";import"./search-D0Nm_YTF.js";import"./createLucideIcon-BsHpl2bp.js";import"./ClearButton-qvDNwSbB.js";import"./Button-B5zSSp1x.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BIW-Yh1F.js";import"./VisuallyHidden-BZBSJD1a.js";import"./x-DLbbIzYm.js";import"./FieldError-Baa_Kzdb.js";import"./Text-IP7yd6GC.js";import"./Text-B-qEqFBc.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
