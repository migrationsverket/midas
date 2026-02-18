import{S as s}from"./SearchField-Cfseizvo.js";import"./iframe-3hz77_Bw.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DBQiRr7K.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CHC7NptC.js";import"./utils-BKaZ30Q6.js";import"./useLocalizedStringFormatter-CyhZiFiB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Db1tnbow.js";import"./useFocusRing-Bh-PYm_3.js";import"./index-552XOfHd.js";import"./index-CTmK-6Cc.js";import"./useFormValidation-CPpL_rTl.js";import"./useField-Di7jkhAl.js";import"./Button-Rs9y_WRS.js";import"./Hidden-CbefqEOU.js";import"./useLabels-_2fCXvXg.js";import"./useButton-COY7bHHb.js";import"./search-BNQuFGVQ.js";import"./createLucideIcon-CMpCdTEI.js";import"./ClearButton-DLHZ2VLu.js";import"./Button-BMU_fnRD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BKe3uMYT.js";import"./VisuallyHidden-bqRfvEGp.js";import"./x-BcOVh6Rz.js";import"./FieldError-CKc2TwCy.js";import"./Text-DHFxKFv2.js";import"./Text-BDBZNBDx.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
