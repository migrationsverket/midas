import{S as s}from"./SearchField-DjhO355f.js";import"./iframe-CSxi486h.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DtteSLbz.js";import"./utils-BzDTrZyA.js";import"./useLocalizedStringFormatter-BOm7oqwy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D3QhN7MH.js";import"./useFocusRing-RkfB8tx5.js";import"./index-0hY5d2pY.js";import"./index-D8s8gplW.js";import"./useFormValidation-D6gouEPs.js";import"./useField-KJZxfhtX.js";import"./Button-DDo42slW.js";import"./Hidden-CGbLzxlP.js";import"./useLabels-ku0pOgJ6.js";import"./useButton-CMpob_a_.js";import"./search-CDMsGw_f.js";import"./createLucideIcon-CayTLY9E.js";import"./Button-iQDKHLWN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DY5vjUoo.js";import"./VisuallyHidden-z1hnMekp.js";import"./x-uPsz_3EK.js";import"./FieldError-CGgFGY0t.js";import"./Text-DJ3-XheA.js";import"./Text-KTapkgrB.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
