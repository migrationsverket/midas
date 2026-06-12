import{S as i}from"./SearchField-BDBC8mr0.js";import"./iframe-CZr0KooT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C5atDzqm.js";import"./clsx-B-dksMZM.js";import"./Form-C0THYwkm.js";import"./useFocusRing-B8L-HrJZ.js";import"./index-By5QsIbW.js";import"./index-BLMOfdQA.js";import"./Input-GHmM1NN2.js";import"./Hidden-DSnmYJrK.js";import"./Button-BW2eFo1r.js";import"./useLabel-BC4w3s3i.js";import"./useLabels-DBo1sJWI.js";import"./useButton-DL-yMXOz.js";import"./FieldError-CZucTPlY.js";import"./Text-DasSw5Lo.js";import"./clsx-Ciqy0D92.js";import"./Text-BIiEvqpP.js";import"./RSPContexts-BdxpiS-s.js";import"./Group-CWWaXOIl.js";import"./useControlledState-BYpa5spl.js";import"./useLocalizedStringFormatter-BJKNLBfJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BpMBGabS.js";import"./useField-GqIJPyEy.js";import"./TextField.module-DdivwlC8.js";import"./search-DEOuxsG4.js";import"./createLucideIcon-DctSE2KV.js";import"./x-DO3x21yI.js";import"./useLocalizedStringFormatter-BF6CSovG.js";import"./Button-Cg4eDy57.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-f7pY2arW.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
