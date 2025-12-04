import{S as s}from"./SearchField-Ct3556Vh.js";import"./iframe-B1XQ_l8d.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B22hZPAG.js";import"./utils-DPtwDUAf.js";import"./useLocalizedStringFormatter-DI9f3P1n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BQo4M90j.js";import"./useFocusRing-DgKSykKC.js";import"./index-BZkYwFdY.js";import"./index-DmzzjCRS.js";import"./useFormValidation-D5VMdpzK.js";import"./useField-CeLgK-LB.js";import"./Button-6O4twiKj.js";import"./Hidden-BU4k3NAN.js";import"./useLabels-BAmMi-sg.js";import"./useButton-BsGmSg5A.js";import"./search--nNhNqJu.js";import"./createLucideIcon-DWbs9rHd.js";import"./Button-CRoKTtLi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-0R5Nhb.js";import"./VisuallyHidden-C1ErRwO4.js";import"./x-Bd3RY7iS.js";import"./FieldError-COBE7U4N.js";import"./Text-D_Txx_2-.js";import"./Text-BFkBeHhq.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
