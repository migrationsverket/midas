import{S as i}from"./SearchField-Bo6SfVL1.js";import"./iframe-DNIclJcr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D_0gjjvk.js";import"./clsx-B-dksMZM.js";import"./Form-UMzwdMM5.js";import"./useFocusRing-DzLjolkJ.js";import"./index-CUHvxg5U.js";import"./index-DNZxg9il.js";import"./Input-P2QjTkbp.js";import"./Hidden-BEQ2WZ2g.js";import"./Button-BbtXrV7T.js";import"./useLabel-D60xKodB.js";import"./useLabels-BYBeQKfq.js";import"./useButton-rBFOLHck.js";import"./FieldError-C44SiAvc.js";import"./Text-Ctfv3ntz.js";import"./clsx-Ciqy0D92.js";import"./Text-CeEH6Nc6.js";import"./RSPContexts-j22KMFJy.js";import"./Group-C-2tBhNu.js";import"./useControlledState-DkjzWyRs.js";import"./useLocalizedStringFormatter-DVD6HWHu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-qCpS1bcj.js";import"./useField-DIAAtUKn.js";import"./TextField.module-DdivwlC8.js";import"./search-4n55DfEf.js";import"./createLucideIcon-DHdJRlte.js";import"./x-D-ccyFox.js";import"./useLocalizedStringFormatter-D1mfHEq_.js";import"./Button-CmNHemBb.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BM29Dd_X.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
