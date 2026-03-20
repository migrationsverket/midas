import{S as i}from"./SearchField-CLFblhHu.js";import"./iframe-CNCfLPs3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-e7FQN5yO.js";import"./clsx-B-dksMZM.js";import"./Form-9gVNWF04.js";import"./useFocusRing-CUoBtFMe.js";import"./index-BHVmJuNO.js";import"./index-CnTOG63q.js";import"./Input-DDbN1Lhg.js";import"./Hidden-CtoRdWlv.js";import"./Button-BEZ5_JXL.js";import"./useLabels-dz24dBNN.js";import"./useButton-Bz3E-ByR.js";import"./FieldError-R8U9vf-q.js";import"./Text-CBvTFJIS.js";import"./clsx-Ciqy0D92.js";import"./Text-o_j_xe-L.js";import"./RSPContexts-BnqYv-3I.js";import"./Group-C1_TooTY.js";import"./useControlledState-D13ccspj.js";import"./useLocalizedStringFormatter-CmzWN2-U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B765ZhEH.js";import"./useField-Bqm8EBTl.js";import"./TextField.module-DdivwlC8.js";import"./search-CBnt3Ikb.js";import"./createLucideIcon-Fn0POOLU.js";import"./x-BvtqgiYK.js";import"./useLocalizedStringFormatter-BTk8Kzh-.js";import"./Button-OnAqZWBY.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cq4Z2n0K.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
