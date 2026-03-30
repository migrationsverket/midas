import{S as i}from"./SearchField-DHV4CcQF.js";import"./iframe-B3vg1P6Y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-n5Tj6M7m.js";import"./clsx-B-dksMZM.js";import"./Form-CWiiR15h.js";import"./useFocusRing-C6AjoB7d.js";import"./index-C-kva3F-.js";import"./index-BwBCavJo.js";import"./Input-WtolAofY.js";import"./Hidden-fGQAJpTQ.js";import"./Button-CnxNAqy1.js";import"./useLabel-DI7fi0Ro.js";import"./useLabels-DY9VFMmE.js";import"./useButton-BK-h-LZH.js";import"./FieldError-DFCvQgU7.js";import"./Text-DUOd7G_7.js";import"./clsx-Ciqy0D92.js";import"./Text-BlzVF25n.js";import"./RSPContexts-CSreTt_o.js";import"./Group-CAI_apUh.js";import"./useControlledState-CZjhAhOw.js";import"./useLocalizedStringFormatter-m57n-2t8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BU5ONFAO.js";import"./useField-CsXnP93Z.js";import"./TextField.module-DdivwlC8.js";import"./search-CTrAeuys.js";import"./createLucideIcon-CB7DrpFH.js";import"./x-BD201NTP.js";import"./useLocalizedStringFormatter-Cy8EaEdn.js";import"./Button-Bihgy3ar.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BtPzLQ1W.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
