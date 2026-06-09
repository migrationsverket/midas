import{S as i}from"./SearchField-DS6KJ3GC.js";import"./iframe-DGitGBwd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DlxgMN-X.js";import"./clsx-B-dksMZM.js";import"./Form-D5bu5HNp.js";import"./useFocusRing-BSQFeV26.js";import"./index-CgyYAO-T.js";import"./index-C2aEhFku.js";import"./Input-CH8YKgUw.js";import"./Hidden-BTbvwN5u.js";import"./Button-CFc7ZkBU.js";import"./useLabel-DxdQgbMB.js";import"./useLabels-Obe7Lwct.js";import"./useButton-CJsEP6bk.js";import"./FieldError-BLFTeUPi.js";import"./Text-BBS_R9Lb.js";import"./clsx-Ciqy0D92.js";import"./Text-BHRP82y-.js";import"./RSPContexts-BNal8wWj.js";import"./Group-D-AHlaPK.js";import"./useControlledState-Dj3Q8cMg.js";import"./useLocalizedStringFormatter-IrjHOpw7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-IBB62wLm.js";import"./useField-dgIiq1Nz.js";import"./TextField.module-DdivwlC8.js";import"./search-DbFZ11h-.js";import"./createLucideIcon-CcqKhbRQ.js";import"./x-B5AWcWMp.js";import"./useLocalizedStringFormatter-CveS3y_K.js";import"./Button-CJ16F3mz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BUTi2bAi.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
