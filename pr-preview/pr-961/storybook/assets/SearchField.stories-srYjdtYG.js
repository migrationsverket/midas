import{S as s}from"./SearchField-jqu84--6.js";import"./iframe-CxtXgaif.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-va708PFm.js";import"./utils-BHaXAsAf.js";import"./useLocalizedStringFormatter-CiYxBryn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-SxjIWiZn.js";import"./useFocusRing-C31KCpBg.js";import"./index-LOJiVQyp.js";import"./index-McGX5QjV.js";import"./useFormValidation-BiSVu55b.js";import"./useField-fI3yCLSZ.js";import"./Button-QJx86_Xy.js";import"./Hidden-BtogIfXa.js";import"./useLabels-Cied99SI.js";import"./useButton-Cv4m8R1u.js";import"./search-fpBBUeRa.js";import"./createLucideIcon-CsCGHR6v.js";import"./Button-CZkEUMhX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DVPw1CAM.js";import"./VisuallyHidden-CVvKj0Xg.js";import"./x-CBvx6r4u.js";import"./FieldError-DOlGeurh.js";import"./Text-hsuWdQJy.js";import"./Text-BZPjmLfW.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
