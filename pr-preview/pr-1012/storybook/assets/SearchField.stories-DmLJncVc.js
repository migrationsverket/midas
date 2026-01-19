import{S as s}from"./SearchField-Dytv-glt.js";import"./iframe-BEJN6Kxj.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CwdPjKis.js";import"./utils-CrGBDRkS.js";import"./useLocalizedStringFormatter-fztwDLIc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DGTvX6Si.js";import"./useFocusRing-eqCY1XUY.js";import"./index-D62Nhkqi.js";import"./index-h8IQGtJP.js";import"./useFormValidation-CzpRDG9-.js";import"./useField-DuaCTKKw.js";import"./Button-w6H2Sg3d.js";import"./Hidden-fVuPKruJ.js";import"./useLabels-NwX4Qgl6.js";import"./useButton-9wB6vFCI.js";import"./search-8_W5Jr3C.js";import"./createLucideIcon-DlFkL0lK.js";import"./ClearButton-BcxkrOVW.js";import"./Button-CStAPZI-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DmUmyjCk.js";import"./VisuallyHidden-du_qoG-V.js";import"./x-VDRCJe-m.js";import"./FieldError-DgfjuVzW.js";import"./Text-DxjUFe6b.js";import"./Text-Cz34VrmV.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
