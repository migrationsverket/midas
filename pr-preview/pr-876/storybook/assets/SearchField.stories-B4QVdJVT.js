import{S as i}from"./SearchField-Dq395IVe.js";import"./iframe-BANbOrjL.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-54peqJ8a.js";import"./clsx-B-dksMZM.js";import"./Form-CNFyYQkx.js";import"./useFocusRing-DbV3xYYs.js";import"./index-DvmcBK1X.js";import"./index-C5-8epWM.js";import"./Input-trOtA2gB.js";import"./Hidden-B-0UQMnM.js";import"./Button-CFtjy4Ss.js";import"./useLabel-DaWSn-ZG.js";import"./useLabels-596GHSCS.js";import"./useButton-DJ76KY2c.js";import"./FieldError-Dz4Gx-Yr.js";import"./Text-1nbNgZtg.js";import"./clsx-Ciqy0D92.js";import"./Text-Ckl3Bse6.js";import"./RSPContexts-BniJiskW.js";import"./Group-bGKMXFQ3.js";import"./useControlledState-yh8y5GNM.js";import"./useLocalizedStringFormatter-CQ9MV6Yb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B5J2eHIq.js";import"./useField-BkzAvj6x.js";import"./TextField.module-DdivwlC8.js";import"./search-Cv2KrFIV.js";import"./createLucideIcon-mdFywCsT.js";import"./x-Bo7YhGfd.js";import"./useLocalizedStringFormatter-C_ZDKjDL.js";import"./Button-Dov5qDwf.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DT3xn_Oy.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
