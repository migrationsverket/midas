import{S as s}from"./SearchField-DrBwhyzV.js";import"./iframe-CQ_fy_EY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CnAeDNgw.js";import"./utils-C7l7LqzK.js";import"./useLocalizedStringFormatter-C29QY5VX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DXBBu2fJ.js";import"./useFocusRing-CBjwNCjA.js";import"./index-BJJvraYt.js";import"./index-DXn3pDe8.js";import"./useFormValidation-BjmZbY_Y.js";import"./useField-D5CRbrEp.js";import"./Button-B89jYYjE.js";import"./Hidden-CzYLxqKr.js";import"./useLabels-DWjvmaBB.js";import"./useButton-BeUorQOe.js";import"./search-Bx2KuvP9.js";import"./createLucideIcon-mqgaB7OL.js";import"./Button-DtIQcLuH.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BTlSi4nT.js";import"./VisuallyHidden-DxPMhaND.js";import"./x-2XBO8L6F.js";import"./FieldError-DMdpyDE1.js";import"./Text-CW8LcNQ6.js";import"./Text-hjykNwCE.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
