import{S as i}from"./SearchField-DMr0diOE.js";import"./iframe-Dr7ArToC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B9wkB9jr.js";import"./clsx-B-dksMZM.js";import"./Form-C7cXtg_z.js";import"./useFocusRing-Be1E2wiN.js";import"./index-D4IeCl1O.js";import"./index-CeL9iIrJ.js";import"./Input-BeJJcU3N.js";import"./Hidden-DypslUjc.js";import"./Button-3lqUDVlM.js";import"./useLabel-138CLUtK.js";import"./useLabels-DXcJ5KZ7.js";import"./useButton-BWyNL83U.js";import"./FieldError-DgDXg6nA.js";import"./Text-z1_3LhQE.js";import"./clsx-Ciqy0D92.js";import"./Text-DCnBb7WN.js";import"./RSPContexts-CJ8QUqZN.js";import"./Group-BA6U_RSU.js";import"./useControlledState-CnU7ybFm.js";import"./useLocalizedStringFormatter-B9QZX5JK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D43v3m3F.js";import"./useField-DAkRnFmj.js";import"./TextField.module-DdivwlC8.js";import"./search-CNQ7cGxz.js";import"./createLucideIcon-bstwz77u.js";import"./x-CL4LyG_m.js";import"./useLocalizedStringFormatter-xGiRnejW.js";import"./Button-eaMP_jYx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CpUpJPrc.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
