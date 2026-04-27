import{S as i}from"./SearchField-CeBStQg7.js";import"./iframe-C8x-msxk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-x6RmcanB.js";import"./clsx-B-dksMZM.js";import"./Form-6ANOcz_Q.js";import"./useFocusRing-pYs-dxV_.js";import"./index-esthriUJ.js";import"./index-Bvs38Ve9.js";import"./Input-rrVHQn5Q.js";import"./Hidden-BrrSlW-M.js";import"./Button-CUxxVM2V.js";import"./useLabel-fGMhI5RW.js";import"./useLabels-CTHQc_bx.js";import"./useButton-DEMiZMSi.js";import"./FieldError-rBwuM1xB.js";import"./Text-DgcFjB2j.js";import"./clsx-Ciqy0D92.js";import"./Text-DQO-SfK1.js";import"./RSPContexts-Bq-VVGt_.js";import"./Group-BNWg5GtT.js";import"./useControlledState-DCAgeBJw.js";import"./useLocalizedStringFormatter-DijUnHEf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B57wQfza.js";import"./useField-BqcO6B35.js";import"./TextField.module-DdivwlC8.js";import"./search-BYQQ8xZe.js";import"./createLucideIcon-yUmnm7ht.js";import"./x-DXHCMQVs.js";import"./useLocalizedStringFormatter-DbnioywX.js";import"./Button-vkpw1trS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CQd7HXEj.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
