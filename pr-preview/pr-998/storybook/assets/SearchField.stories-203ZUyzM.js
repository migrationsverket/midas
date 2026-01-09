import{S as s}from"./SearchField-BLv58SKn.js";import"./iframe-DLcF_cZb.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BjUzWb5o.js";import"./utils-DopDDGwO.js";import"./useLocalizedStringFormatter-CschDt8j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BzMeu8et.js";import"./useFocusRing-Dmrd4B4C.js";import"./index-B7geH7_-.js";import"./index-DK_aNcXz.js";import"./useFormValidation-CNRHJKth.js";import"./useField-Bnx6_ry5.js";import"./Button-BirpzH-3.js";import"./Hidden-BmcCzQFm.js";import"./useLabels-BmzKzWd6.js";import"./useButton-CBJTXxEE.js";import"./search-BegASNxQ.js";import"./createLucideIcon-Bv8IvF6P.js";import"./Button-BbPLdLku.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfNFAn3n.js";import"./VisuallyHidden-SdRNs5sP.js";import"./x-YRI_uR-l.js";import"./FieldError-BM5NpMS1.js";import"./Text-B98yE2PT.js";import"./Text-Dh2DNKMg.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
