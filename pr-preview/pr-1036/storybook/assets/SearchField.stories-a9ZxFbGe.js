import{S as s}from"./SearchField-CSzdbyNe.js";import"./iframe-CidOCZHB.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D0gzrqio.js";import"./utils-8aJjhqNc.js";import"./useLocalizedStringFormatter-DaU6bXbA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DWeJsMa4.js";import"./useFocusRing-B8BRQkLp.js";import"./index-BBVZX2NF.js";import"./index--plQHcpZ.js";import"./useFormValidation-ndTLYSbE.js";import"./useField-BWNPjLgU.js";import"./Button-DuriNJcC.js";import"./Hidden-CVjT_yJa.js";import"./useLabels-CL1SuhzR.js";import"./useButton-Bq1zX9NI.js";import"./search-Czrzo_vh.js";import"./createLucideIcon-bGF3Re28.js";import"./ClearButton-ddZTXUYu.js";import"./Button-DvQa6ahi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B0fC8SpF.js";import"./VisuallyHidden-jV2krERt.js";import"./x-CszgniqU.js";import"./FieldError-DXanqLob.js";import"./Text-FUR3GSSr.js";import"./Text-DVNzE23j.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
