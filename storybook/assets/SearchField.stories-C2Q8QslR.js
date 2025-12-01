import{S as s}from"./SearchField-CJpDch-7.js";import"./iframe-DDGhSUPH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DUR86Gn9.js";import"./utils-DkSk5Fpi.js";import"./useLocalizedStringFormatter-DCfAOUk8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D2bFFZST.js";import"./useFocusRing-Cp9EtA1A.js";import"./index-BxxJ1gtc.js";import"./index-LwRNPsNd.js";import"./useFormValidation-CaDXXURK.js";import"./useField-BDo5h1AO.js";import"./Button-DoGvud4r.js";import"./Hidden-CVyjnzAi.js";import"./useLabels-rropAply.js";import"./useButton-BDswbpVc.js";import"./search-B5WhgG4m.js";import"./createLucideIcon-KTBaycPF.js";import"./Button-CXmfUOo7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BChb16bJ.js";import"./VisuallyHidden-44FJARoa.js";import"./x-5VQdn16L.js";import"./FieldError-B2snDo_I.js";import"./Text-BJg9Wjq2.js";import"./Text-BWNYfE2D.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
