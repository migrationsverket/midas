import{S as s}from"./SearchField-BqrUHZsY.js";import"./iframe-90IRllkR.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DZmUU_C7.js";import"./utils-DrgpBlOV.js";import"./useLocalizedStringFormatter-DKf9ituJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-6C2nssBk.js";import"./useFocusRing-D9xLokmm.js";import"./index-BQ655Sgl.js";import"./index-BT0vxHj_.js";import"./useFormValidation-D-cI-26o.js";import"./useField-krxXExoX.js";import"./Button-DHs9eQM0.js";import"./Hidden-DTiIbjRg.js";import"./useLabels-mqYWaiYP.js";import"./useButton-D-5xgDmf.js";import"./search-BraPKU2c.js";import"./createLucideIcon-Dz-TUHWJ.js";import"./Button-Bhqr8Mcz.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-37ueXPbA.js";import"./VisuallyHidden-v16yXfjK.js";import"./x-G-MrfCj1.js";import"./FieldError-DOJlLELe.js";import"./Text-BEFgBVJd.js";import"./Text-CPIt8eLh.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
