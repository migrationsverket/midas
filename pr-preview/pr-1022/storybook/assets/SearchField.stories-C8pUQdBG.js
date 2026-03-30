import{S as i}from"./SearchField-CafuMO-v.js";import"./iframe-BCVsy88N.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C-OmHNLm.js";import"./clsx-B-dksMZM.js";import"./Form-Dy6Ga4aj.js";import"./useFocusRing-eWhXbche.js";import"./index-BwfJQ9F8.js";import"./index-cJVZ5RXC.js";import"./Input-CMX_k8Dp.js";import"./Hidden-CN3dXu03.js";import"./Button-Kvyi1RRX.js";import"./useLabel-BbZWMYwa.js";import"./useLabels-COZKzSvp.js";import"./useButton-DfNnGNTV.js";import"./FieldError-DIexkAgJ.js";import"./Text-CJD2elUx.js";import"./clsx-Ciqy0D92.js";import"./Text-C7Bb6ebF.js";import"./RSPContexts-BeHTEqOC.js";import"./Group-DP4wot9I.js";import"./useControlledState-jD-tqQdO.js";import"./useLocalizedStringFormatter-atdiyxXD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-rssmsnsn.js";import"./useField-ClRCUqkF.js";import"./TextField.module-DdivwlC8.js";import"./search-BuHHvv_1.js";import"./createLucideIcon-D1oE0F07.js";import"./x-CDS6gFVI.js";import"./useLocalizedStringFormatter-mDxu21Fd.js";import"./Button-VV8KlKzK.js";import"./Button.module-BFenTVPP.js";import"./VisuallyHidden-D6HKc_n0.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
