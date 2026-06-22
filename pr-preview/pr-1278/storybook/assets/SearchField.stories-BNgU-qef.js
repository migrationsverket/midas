import{S as i}from"./SearchField-V7NZlE0z.js";import"./iframe-A34tc1ma.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-iaIw3nix.js";import"./clsx-B-dksMZM.js";import"./Form-DALnZx4j.js";import"./useFocusRing-OnJtBabX.js";import"./index-Q8iWR-k3.js";import"./index-nqYRH_fx.js";import"./Input-DUNgLaBZ.js";import"./Hidden-Bx_LiQEx.js";import"./Button-CJGwxkR8.js";import"./useLabel-B5C-WKT7.js";import"./useLabels-m8TWtq0-.js";import"./useButton-Dk5W4KfY.js";import"./FieldError-DMBLsclX.js";import"./Text-PcmClRY0.js";import"./clsx-Ciqy0D92.js";import"./Text-Bo9OR3IW.js";import"./RSPContexts-BvXmiLjq.js";import"./Group-BprcskVh.js";import"./useControlledState-dFFgK4uz.js";import"./useLocalizedStringFormatter-CAgZjAaW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Caf_9lIH.js";import"./useField-CG1X9erO.js";import"./TextField.module-DdivwlC8.js";import"./search-BfWrWdnq.js";import"./createLucideIcon-Bnflbpu4.js";import"./x-8qJuT3y7.js";import"./useLocalizedStringFormatter-6FVavbxu.js";import"./Button-CEptxBDM.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DFcjAmAE.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
