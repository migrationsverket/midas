import{S as s}from"./SearchField-gbJOuBEa.js";import"./iframe-a-0QSjcf.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DQziIZ9T.js";import"./utils-B_-tSBeZ.js";import"./useLocalizedStringFormatter-JU1_R9Z5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-NOopuUc-.js";import"./useFocusRing-Czic3fia.js";import"./index-7-rgoRIg.js";import"./index-BW6KTqQa.js";import"./useFormValidation-Du4LTqk6.js";import"./useField-CGPrKXG5.js";import"./Button-C60PLABZ.js";import"./Hidden-B9ZA2jSe.js";import"./useLabels-BJ97I3JO.js";import"./useButton-CYqr7EFX.js";import"./search-BaZU2baT.js";import"./createLucideIcon-Dsg6rjRC.js";import"./ClearButton-DAuEPM6i.js";import"./Button-D2oQUHVT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D3fQfCDh.js";import"./VisuallyHidden-B518bO6H.js";import"./x-CIpaA31e.js";import"./FieldError-DsswgMzG.js";import"./Text-BKQI6ihA.js";import"./Text-B2LxCzJs.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
