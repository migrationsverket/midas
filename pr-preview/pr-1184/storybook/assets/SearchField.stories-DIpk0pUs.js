import{S as i}from"./SearchField-DtpeaX-C.js";import"./iframe-CmC6_uFn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DpIGtToL.js";import"./clsx-B-dksMZM.js";import"./Form-BSRHL6AU.js";import"./useFocusRing-CnXjVSj9.js";import"./index-_SptB5IF.js";import"./index-Cq0yuKyu.js";import"./Input-3zQjtKDY.js";import"./Hidden-Ci7T1bEi.js";import"./Button-BfXSwHW0.js";import"./useLabel-CZd2jY9k.js";import"./useLabels-CAk5ShxF.js";import"./useButton-Dc8urwoW.js";import"./FieldError-B-ZQXEeM.js";import"./Text-bLb0hYqG.js";import"./clsx-Ciqy0D92.js";import"./Text-ChJGU_Xm.js";import"./RSPContexts-CHkHxhdH.js";import"./Group-D6oafy4R.js";import"./useControlledState-x3Q8v9NC.js";import"./useLocalizedStringFormatter-fVU3OA8S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BbqiKWX0.js";import"./useField-DSKyBuUi.js";import"./TextField.module-DdivwlC8.js";import"./search-C_ugmLYG.js";import"./createLucideIcon-DG07A9xd.js";import"./x-BfnY6ZJn.js";import"./useLocalizedStringFormatter-CHt1E_Fl.js";import"./Button-WgLWfZml.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DhqoAnIr.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
