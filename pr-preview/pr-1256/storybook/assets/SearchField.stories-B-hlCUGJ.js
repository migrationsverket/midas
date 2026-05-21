import{S as i}from"./SearchField-CFglLwj7.js";import"./iframe-CdIQ5N7i.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BvbfqFty.js";import"./clsx-B-dksMZM.js";import"./Form-B0G4WvdU.js";import"./useFocusRing-CAL8UmMI.js";import"./index-QXcgcGVQ.js";import"./index-azuTNlQK.js";import"./Input-CYu6oXCT.js";import"./Hidden-BNc7AwrM.js";import"./Button-UiktFLbJ.js";import"./useLabel-BNWj_Gss.js";import"./useLabels-BEQABj6w.js";import"./useButton-iVPzxrJK.js";import"./FieldError-DJ-HR3RU.js";import"./Text-s2Qhe30V.js";import"./clsx-Ciqy0D92.js";import"./Text-uW2g-Rij.js";import"./RSPContexts-CLmzGhES.js";import"./Group-GT3GuVWM.js";import"./useControlledState-BRvuk5rm.js";import"./useLocalizedStringFormatter-Thbc0p-z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BVCH004n.js";import"./useField-FRI832V4.js";import"./TextField.module-DdivwlC8.js";import"./search-DYeUipBH.js";import"./createLucideIcon-D9zj-qmC.js";import"./x-CLOMyykU.js";import"./useLocalizedStringFormatter-YNJ9gtMz.js";import"./Button-kx69_fzD.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BhdIXlKy.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
