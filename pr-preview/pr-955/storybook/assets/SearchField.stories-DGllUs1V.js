import{S as s}from"./SearchField-BdZo3wDb.js";import"./iframe-DnZu7tjU.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-6_8Dx77R.js";import"./utils-DvsDfxiZ.js";import"./useLocalizedStringFormatter-C_uLFRgN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-qkYZTzcL.js";import"./useFocusRing-BVLxtrwi.js";import"./index-pukpAhsd.js";import"./index-DuANshEl.js";import"./useFormValidation-DBeaMwp3.js";import"./useField-HB13P4sO.js";import"./Button-hkOip--R.js";import"./Hidden-MVD45dNy.js";import"./useLabels-DTmMdRQq.js";import"./useButton-DmjUv8W1.js";import"./search-ccJsKzPr.js";import"./createLucideIcon-3-UHYTi-.js";import"./Button-062FUKpn.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BX9jEi07.js";import"./VisuallyHidden-C4Nx-Lep.js";import"./x-BRIO2b_Q.js";import"./FieldError-DdNBbPKU.js";import"./Text-DDckt_LF.js";import"./Text-ByAr067h.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
