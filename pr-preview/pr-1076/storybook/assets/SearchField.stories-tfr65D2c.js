import{S as s}from"./SearchField-ms4u5H3i.js";import"./iframe-C9ubgLgC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DqLuvFKD.js";import"./utils-DGXfXGIv.js";import"./useLocalizedStringFormatter-bbG7Wq0q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D64FrxUa.js";import"./useFocusRing-4O8j9jv4.js";import"./index-BNV1MXTe.js";import"./index-Bwb2HpPH.js";import"./useFormValidation-XFKbkoIj.js";import"./useField-CbMf_VdX.js";import"./Button-BlG7CmiH.js";import"./Hidden-Azh09GXQ.js";import"./useLabels-Df_ryvuT.js";import"./useButton-DfAsmtKq.js";import"./search-CzCur9Vq.js";import"./createLucideIcon-SsBWnnbL.js";import"./ClearButton-B8zMT5uG.js";import"./Button-Dt-Z81qJ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Bh2zxf8s.js";import"./VisuallyHidden-BHt-U9wp.js";import"./x-BMYCRDHP.js";import"./FieldError-CVXyG8VI.js";import"./Text-DzDyHzow.js";import"./Text-CL8RRho7.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
