import{S as s}from"./SearchField-Miy-4XQE.js";import"./iframe-DXDVea5_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CbOkSAeB.js";import"./utils-DmTgTNnL.js";import"./useLocalizedStringFormatter-CUxy-dqS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DozbA8P4.js";import"./useFocusRing-CEQXzaY3.js";import"./index-BnRq08uH.js";import"./index-5yLJteXC.js";import"./useFormValidation-CD1pPQHY.js";import"./useField-Dfhs4VTn.js";import"./Button-B96QzwM1.js";import"./Hidden-Fdu7osLZ.js";import"./useLabels-CE1k4rx3.js";import"./useButton-fPBc3Yts.js";import"./search-XBXjPP1d.js";import"./createLucideIcon-De5c0UOR.js";import"./ClearButton-Z4BD_iJ6.js";import"./Button-gdOhQx8I.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BRUhSZ3u.js";import"./VisuallyHidden-Cz2sP0_V.js";import"./x-Dn2vW3HL.js";import"./FieldError-D7SZhjyZ.js";import"./Text-0AXlCnaa.js";import"./Text-gvZnrrW0.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
