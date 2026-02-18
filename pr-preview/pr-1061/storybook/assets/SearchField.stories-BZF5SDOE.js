import{S as s}from"./SearchField-DwRRUjmJ.js";import"./iframe-PN707gYe.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-i6i54Khk.js";import"./utils-BfTV9i6h.js";import"./useLocalizedStringFormatter-CwDyz_8k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BJcyerr9.js";import"./useFocusRing-zDf2sWnR.js";import"./index-ecqOFxv8.js";import"./index-2RsljFiJ.js";import"./useFormValidation-joHmUQOI.js";import"./useField-CE5dFQKQ.js";import"./Button-DWVM9qi7.js";import"./Hidden-CDS304l1.js";import"./useLabels-BzSl-k1d.js";import"./useButton-Cx8Tw01D.js";import"./search-Dbs2cgR2.js";import"./createLucideIcon-BSnI4rQ0.js";import"./ClearButton-CuZSG6bG.js";import"./Button-2ve-agNS.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhPVws9w.js";import"./VisuallyHidden-BDvY-Erb.js";import"./x-C7LyQ1nR.js";import"./FieldError-C-jlNPwu.js";import"./Text-Dv_zo2E3.js";import"./Text-Dwlf9er-.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
