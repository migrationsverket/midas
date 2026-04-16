import{S as i}from"./SearchField-Obk4Zctr.js";import"./iframe-D3lvYj-7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B6k7vEYH.js";import"./clsx-B-dksMZM.js";import"./Form-4L_iZXM_.js";import"./useFocusRing-DIwykGm6.js";import"./index-BM1vPyr1.js";import"./index-DIXJvTpR.js";import"./Input-VS8Iv2KC.js";import"./Hidden-DPjLOd6z.js";import"./Button-DOFXZV3V.js";import"./useLabel-Pnrma__y.js";import"./useLabels-CJIv4d2A.js";import"./useButton-Dbna9MqX.js";import"./FieldError-BIzYN5TD.js";import"./Text-DdkQbCnP.js";import"./clsx-Ciqy0D92.js";import"./Text-CEj93Me_.js";import"./RSPContexts-D64MNSpQ.js";import"./Group-BBq_h1pv.js";import"./useControlledState-D5Ejjxkh.js";import"./useLocalizedStringFormatter-ZyPAj94C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CxvlnZhk.js";import"./useField-Cs7O-1i7.js";import"./TextField.module-DdivwlC8.js";import"./search-Bsf6YM5h.js";import"./createLucideIcon-C2BZ0Xjj.js";import"./x-MTUjWktr.js";import"./useLocalizedStringFormatter-Dn72RgHJ.js";import"./Button-DrsIbXth.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-a__j3MRh.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source},description:{story:`Default behavior in v17 — the built-in submit button is shown.
The button is not in the tab order; use Enter to submit or click the button.`,...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Without button (v18 default)',
  args: {
    placeholder: 'Sök efter en person',
    showButton: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const G=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,G as __namedExportsOrder,A as default};
