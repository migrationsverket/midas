import{S as i}from"./SearchField-8CBFrO4b.js";import"./iframe-Nwmt74ZK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C6s6aSRX.js";import"./clsx-B-dksMZM.js";import"./Form-BUdIhl_c.js";import"./useFocusRing-CWypq6Zx.js";import"./index-ch-f0Bx3.js";import"./index-BhWzPHH5.js";import"./Input-BsAQh_8z.js";import"./Hidden-BPf52IcM.js";import"./Button-BFe_Cqcu.js";import"./useLabel-NM3EoEuU.js";import"./useLabels-BWJGA9gI.js";import"./useButton-DPlFKcS8.js";import"./FieldError-Br06WdKh.js";import"./Text-C173mZfn.js";import"./clsx-Ciqy0D92.js";import"./Text-BsCHJ-9I.js";import"./RSPContexts-DNNsF2wO.js";import"./Group-CuITHOVp.js";import"./useControlledState-BkVOv_aE.js";import"./useLocalizedStringFormatter-BJ5VKpXB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C4d_BV9u.js";import"./useField-B5-kLS0F.js";import"./TextField.module-DdivwlC8.js";import"./search-C1LBrZ6m.js";import"./createLucideIcon-BM-CznMN.js";import"./x-CcBqmnVo.js";import"./useLocalizedStringFormatter-C2TFJ0GM.js";import"./Button-BFrhdIAu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CtXXaRnR.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
