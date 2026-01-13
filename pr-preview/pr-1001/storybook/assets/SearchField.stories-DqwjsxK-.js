import{S as s}from"./SearchField-CkqWCwfL.js";import"./iframe-DkekDUmt.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CpjACMp2.js";import"./utils-BXReLSzV.js";import"./useLocalizedStringFormatter-2FeDuEc7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bz31S-zo.js";import"./useFocusRing-cFhFEPkT.js";import"./index-BWGp6XmU.js";import"./index-Dl4xFDvX.js";import"./useFormValidation-CkgdwYyU.js";import"./useField-BMA0_Hdl.js";import"./Button-CPMuKErG.js";import"./Hidden-C3DRpHWW.js";import"./useLabels-RwNRRVV1.js";import"./useButton-DGHMXKPK.js";import"./search-D4eSfUuK.js";import"./createLucideIcon-y8-UPzuM.js";import"./Button-ByTmb1iy.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cb4oEEvA.js";import"./VisuallyHidden-D4lBxf5D.js";import"./x-DOULuHb2.js";import"./FieldError-CEappIaf.js";import"./Text-HRZszqtu.js";import"./Text-D-M7BBlz.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
