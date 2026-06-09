import{S as i}from"./SearchField-CJAbrWic.js";import"./iframe-yDDvrWXA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-g-F492tU.js";import"./clsx-B-dksMZM.js";import"./Form-BRcNXWLY.js";import"./useFocusRing-B8EF4-Pv.js";import"./index-C7Z2RoQQ.js";import"./index-D5oXpZJ0.js";import"./Input-DSWEXy8D.js";import"./Hidden-DwvTSKmX.js";import"./Button-BKPyufTm.js";import"./useLabel-HsQrSNDJ.js";import"./useLabels-BAb68OIq.js";import"./useButton-C0YlumWP.js";import"./FieldError-CjrZ6id8.js";import"./Text-lgWPOHfn.js";import"./clsx-Ciqy0D92.js";import"./Text-zKZPeGrs.js";import"./RSPContexts-BHMRgdEM.js";import"./Group-su1k1c30.js";import"./useControlledState-DZNSaZzu.js";import"./useLocalizedStringFormatter-Dx4LUfLz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DmpQQ6rN.js";import"./useField-CiiIrWAP.js";import"./TextField.module-DdivwlC8.js";import"./search-D2h2-0Q7.js";import"./createLucideIcon-BAD1RTf1.js";import"./x-8p5vQLYx.js";import"./useLocalizedStringFormatter-CwuLAbHo.js";import"./Button-DrFRlYBv.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B50WqWni.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
