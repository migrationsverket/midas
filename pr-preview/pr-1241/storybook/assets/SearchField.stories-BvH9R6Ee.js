import{S as i}from"./SearchField-x8AC1trq.js";import"./iframe-6VRTlOeH.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-0kxM0y8Y.js";import"./clsx-B-dksMZM.js";import"./Form-3fhL1Dx2.js";import"./useFocusRing-DGxSfNEF.js";import"./index-DuM1IAo7.js";import"./index-BfAN20ZA.js";import"./Input-t6CEBuf7.js";import"./Hidden-DlTpFa-B.js";import"./Button-DLPX01E3.js";import"./useLabel-BFBWLCR-.js";import"./useLabels-DISBRw-R.js";import"./useButton-Bjmveq-R.js";import"./FieldError-BjyVB-H9.js";import"./Text-CpKvHOvq.js";import"./clsx-Ciqy0D92.js";import"./Text-BxBOqGEA.js";import"./RSPContexts-DRe_RyK6.js";import"./Group-BXWl5BNG.js";import"./useControlledState-pI_U9-IG.js";import"./useLocalizedStringFormatter-Tc4ujGE7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CxYO2c75.js";import"./useField-2NJCbeT2.js";import"./TextField.module-DdivwlC8.js";import"./search-DIUl9xPj.js";import"./createLucideIcon-LiZfCQUd.js";import"./x-CG_c6zFF.js";import"./useLocalizedStringFormatter-BuRCkwwi.js";import"./Button-CQiZspsF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BKsZ0nD0.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
