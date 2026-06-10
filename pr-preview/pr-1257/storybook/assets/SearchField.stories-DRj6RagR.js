import{S as i}from"./SearchField-B7T1nyQO.js";import"./iframe-DKbnbcYA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-2X7WrewA.js";import"./clsx-B-dksMZM.js";import"./Form-CpYIQC_j.js";import"./useFocusRing-BgkQ1tOe.js";import"./index-lY0kbfn5.js";import"./index-B5M4WY2m.js";import"./Input-BSVfkpjz.js";import"./Hidden-DVrzkHs4.js";import"./Button-B9rMpOVw.js";import"./useLabel-BTu-VYKR.js";import"./useLabels-4lND4b_p.js";import"./useButton-Zx4CPHJq.js";import"./FieldError-BRRl8Jd8.js";import"./Text-2zkyeVit.js";import"./clsx-Ciqy0D92.js";import"./Text-8emuzLV6.js";import"./RSPContexts-m9rKlbSF.js";import"./Group-x9eLwqj7.js";import"./useControlledState-EM6fJcGZ.js";import"./useLocalizedStringFormatter-CpOP5_I5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C-4R5JUq.js";import"./useField-Dw29PnIv.js";import"./TextField.module-DdivwlC8.js";import"./search-ClmoINNh.js";import"./createLucideIcon-CRlO1Apy.js";import"./x-BxlX_nCp.js";import"./useLocalizedStringFormatter-CoGMLhd_.js";import"./Button-CxkBGpkE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BcPnQgXd.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
