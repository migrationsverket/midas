import{S as i}from"./SearchField-CR7KVBOe.js";import"./iframe-BDBC-eBH.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BF3dZFMw.js";import"./clsx-B-dksMZM.js";import"./Form-DtNN1KWP.js";import"./useFocusRing-CgfezvW6.js";import"./index-BWNKyBGD.js";import"./index-C54ey478.js";import"./Input-DtQ_nr1F.js";import"./Hidden-BOnSBQrS.js";import"./Button-C0bwvCnL.js";import"./useLabels-C2GA6JVF.js";import"./useButton-CdFak1iR.js";import"./FieldError-ATBv1U6u.js";import"./Text-DO7PXPW2.js";import"./clsx-Ciqy0D92.js";import"./Text-B8jtlyCQ.js";import"./RSPContexts-BqLHknP6.js";import"./Group-AOmzFapS.js";import"./useControlledState-BUM3bHka.js";import"./useLocalizedStringFormatter-DJ0cN-Xn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DIKuKkhg.js";import"./useField-BV9_GpNs.js";import"./TextField.module-DdivwlC8.js";import"./search-DRPpcEvj.js";import"./createLucideIcon-B9PoiMSr.js";import"./x-k_b3OfRX.js";import"./useLocalizedStringFormatter-C0PyQwpA.js";import"./Button-z3f5m6Cn.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cj48UhMD.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
