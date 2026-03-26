import{S as i}from"./SearchField-DfCKNCv4.js";import"./iframe-CM25YVMI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B96ufrPs.js";import"./clsx-B-dksMZM.js";import"./Form-COfnJ4dZ.js";import"./useFocusRing-leQD3u2F.js";import"./index-DYgoHuTv.js";import"./index-Dkdrw9MX.js";import"./Input-B_XB7CeP.js";import"./Hidden-Bkjvz6Ri.js";import"./Button-vkdXqgie.js";import"./useLabel-Bns7seSC.js";import"./useLabels-61TYLMjS.js";import"./useButton-B_beWRfB.js";import"./FieldError-DrjYFklj.js";import"./Text-DDiDpkRq.js";import"./clsx-Ciqy0D92.js";import"./Text-D4mHh6eT.js";import"./RSPContexts-BEyD-TmB.js";import"./Group-X-eushgm.js";import"./useControlledState-FG_bUeqE.js";import"./useLocalizedStringFormatter-B8uPJVbi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B_mduAgG.js";import"./useField-BcLvgBhR.js";import"./TextField.module-DdivwlC8.js";import"./search-DtjGtkDE.js";import"./createLucideIcon-Br4oCZrR.js";import"./x-B7ImzBTw.js";import"./useLocalizedStringFormatter-DdE69EWU.js";import"./Button-CImuJsqD.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CwsE6PRe.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
