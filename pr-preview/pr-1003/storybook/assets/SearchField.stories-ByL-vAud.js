import{S as s}from"./SearchField-Cfwidlcx.js";import"./iframe-Dbmu9fQF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CmG9wGoV.js";import"./utils-DvpP6P0w.js";import"./useLocalizedStringFormatter-CeyCqeFg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DypCuICY.js";import"./useFocusRing-CxypgzF-.js";import"./index-DOth_hBv.js";import"./index-DNeWUiBb.js";import"./useFormValidation-DXjiUV0c.js";import"./useField-D1WZTjYD.js";import"./Button-HeqI9L9v.js";import"./Hidden-jLqMwcJy.js";import"./useLabels-DvAdwbpY.js";import"./useButton-C8CFqxxX.js";import"./search-jbu3_HHg.js";import"./createLucideIcon-BxHhQEIW.js";import"./Button-Be60Miju.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-x613kqLW.js";import"./VisuallyHidden-7fle8IoT.js";import"./x-Dfr2yIoA.js";import"./FieldError-DwvroohN.js";import"./Text-lshR0mcp.js";import"./Text-DpPENBeK.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
