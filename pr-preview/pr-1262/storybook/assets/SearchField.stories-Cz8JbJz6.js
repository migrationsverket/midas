import{S as i}from"./SearchField-D99EaiNN.js";import"./iframe-BJBIw5Cq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Do0BAiOq.js";import"./clsx-B-dksMZM.js";import"./Form-8WGnfsre.js";import"./useFocusRing-6yeL08Aa.js";import"./index-BWG0al_j.js";import"./index-C6qgraqq.js";import"./Input-CFMMVIkJ.js";import"./Hidden-CNTBl7tD.js";import"./Button-KImsPJcr.js";import"./useLabel-D1yIUKnX.js";import"./useLabels-CYs1MfMV.js";import"./useButton-DvDYy4Od.js";import"./FieldError-CrniQlrG.js";import"./Text-CMOpEkqD.js";import"./clsx-Ciqy0D92.js";import"./Text-DqMXqkzU.js";import"./RSPContexts-C-cLQ1LZ.js";import"./Group-C3VIbfPL.js";import"./useControlledState-BjWINJro.js";import"./useLocalizedStringFormatter-Di4p2xx_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-COSExJEr.js";import"./useField-CuEvS5HD.js";import"./TextField.module-DdivwlC8.js";import"./search-CGfwKqJJ.js";import"./createLucideIcon-c6giaxW9.js";import"./x-C5JlSWIl.js";import"./useLocalizedStringFormatter-Dv9eZvrq.js";import"./Button-DIUVHLbR.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DIaZA2Ke.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
