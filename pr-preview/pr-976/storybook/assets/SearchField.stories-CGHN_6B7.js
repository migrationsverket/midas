import{S as s}from"./SearchField-BOmMgBO0.js";import"./iframe-D3pU9J33.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DXSUtMNg.js";import"./utils-TJDpQ4Ya.js";import"./useLocalizedStringFormatter-CjBBj2AJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField--ypsBr65.js";import"./useFocusRing-D3KULZdT.js";import"./index-D0C8bgGL.js";import"./index-C0kKjsp6.js";import"./useFormValidation-D68htTuX.js";import"./useField-ClO7YVtb.js";import"./Button-mA5ilicP.js";import"./Hidden-B5r8AT61.js";import"./useLabels-81u_mr-e.js";import"./useButton-BKl2qCbd.js";import"./search-AsqedqlH.js";import"./createLucideIcon-DxLCNxll.js";import"./Button-6HrJxnEa.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-bETZumPy.js";import"./VisuallyHidden-DCygpEtP.js";import"./x-CgyT9-29.js";import"./FieldError-BoX6D44Y.js";import"./Text-CW2J10CL.js";import"./Text-EyICqv-c.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
