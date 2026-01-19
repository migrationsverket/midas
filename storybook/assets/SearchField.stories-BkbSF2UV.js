import{S as s}from"./SearchField-DzDNmYcf.js";import"./iframe-CIadKzdu.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DulzVG2b.js";import"./utils-DJPrropT.js";import"./useLocalizedStringFormatter-DqJJo-SC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-MKDy3haf.js";import"./useFocusRing-Cx6NGDs8.js";import"./index-eDsXbqKn.js";import"./index-lKxGNrLV.js";import"./useFormValidation-CbBxKz-1.js";import"./useField-Vb42F4IT.js";import"./Button-DWV-W5ps.js";import"./Hidden-kJ8IT1EO.js";import"./useLabels-EmpP_-hk.js";import"./useButton-ChIla9FM.js";import"./search-BE7-COqh.js";import"./createLucideIcon-CNkLKi9D.js";import"./ClearButton-B_oOiWbl.js";import"./Button-CpzbrA9E.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-AWWTtLk1.js";import"./VisuallyHidden-D0TfLuCq.js";import"./x-q28ujAI-.js";import"./FieldError-DvZEkmKh.js";import"./Text-D5AYdaUH.js";import"./Text-MV4z5RP3.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
