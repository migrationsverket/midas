import{S as i}from"./SearchField-WpfDrDvz.js";import"./iframe-ClXeNp7Y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Om4eb18p.js";import"./clsx-B-dksMZM.js";import"./Form-qcwhxik-.js";import"./useFocusRing-POYc96FQ.js";import"./index-B5A_pknU.js";import"./index-DKpewxE4.js";import"./Input-CF0F6MRL.js";import"./Hidden-CTszc8DE.js";import"./Button-CgOPhMO-.js";import"./useLabel-LLB3lTIC.js";import"./useLabels-0ROcCaA0.js";import"./useButton-CU4eTwNH.js";import"./FieldError-Crhqu9ff.js";import"./Text-Cbz9Nooi.js";import"./clsx-Ciqy0D92.js";import"./Text-Cmueb6gv.js";import"./RSPContexts-BJtrT3-R.js";import"./Group-D-xiGmRt.js";import"./useControlledState-ByDkBY5z.js";import"./useLocalizedStringFormatter-CQx72wD7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-NBqz0STb.js";import"./useField-NTYDoh05.js";import"./TextField.module-DdivwlC8.js";import"./search-BQisV46l.js";import"./createLucideIcon-BfIBNwb-.js";import"./x-CsrInTiu.js";import"./useLocalizedStringFormatter-B6IkZiLP.js";import"./Button-Ck36yxFc.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Zm76wuSE.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
