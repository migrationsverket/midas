import{S as s}from"./SearchField-DorBlxHP.js";import"./iframe-ATzl8XNu.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BW_0fp0P.js";import"./utils-Cephp3rV.js";import"./useLocalizedStringFormatter-D8Kn80zC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Jm6rKQrq.js";import"./useFocusRing-ukiZ3Ae7.js";import"./index-CaW5UWpb.js";import"./index-V5YcHX-r.js";import"./useFormValidation-BIKLk_Xn.js";import"./useField-CBkghgUG.js";import"./Button-D92ovwB_.js";import"./Hidden-BWe0F6w6.js";import"./useLabels-tIVsswAO.js";import"./useButton-BsQSv027.js";import"./search-C2AEQ7-w.js";import"./createLucideIcon-JvePCe7s.js";import"./ClearButton-BWPnEv2H.js";import"./Button-Bsz6RG7e.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-OfhFidRK.js";import"./VisuallyHidden-B7WhOGok.js";import"./x-BmEx4eXF.js";import"./FieldError-C2MY82An.js";import"./Text-aG-TJfe-.js";import"./Text-B2jI714W.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
