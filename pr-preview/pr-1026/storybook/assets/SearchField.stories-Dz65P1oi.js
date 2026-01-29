import{S as s}from"./SearchField-DVnNwK6j.js";import"./iframe-DE94JxKi.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DaJ4jGU6.js";import"./utils-BSOOAzhj.js";import"./useLocalizedStringFormatter-Cru1T8gU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BCtL7hz6.js";import"./useFocusRing-DmvBk8aR.js";import"./index-BQx7fnJU.js";import"./index-hBdvredO.js";import"./useFormValidation-B28FtqGe.js";import"./useField-DbCKfJpx.js";import"./Button-Dg3ONjJw.js";import"./Hidden-BxoJfOoH.js";import"./useLabels-D7kdm8Gs.js";import"./useButton-BdK2-QNE.js";import"./search-eHyoBQ2m.js";import"./createLucideIcon-DBTUrtr9.js";import"./ClearButton-Dl5hOasb.js";import"./Button-DMOZPxBs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CqNL9jQY.js";import"./VisuallyHidden-B9PXbOcp.js";import"./x-Gg2oVTGU.js";import"./FieldError-BXtDsO41.js";import"./Text-DfN54vrW.js";import"./Text-DHcXS7hp.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
