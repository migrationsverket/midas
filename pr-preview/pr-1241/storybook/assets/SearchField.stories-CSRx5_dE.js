import{S as i}from"./SearchField-B8vMHSE9.js";import"./iframe-BONLLpOF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C9VmisX4.js";import"./clsx-B-dksMZM.js";import"./Form-ITn35OXk.js";import"./useFocusRing-DKupva6E.js";import"./index-CxKo4ITi.js";import"./index-AexxYhB1.js";import"./Input-CYc6mgVO.js";import"./Hidden-DEirP3-u.js";import"./Button-2Duwp_Ic.js";import"./useLabel-Q48Rkvkt.js";import"./useLabels-Bh7NN-Ow.js";import"./useButton-hyzNfx3L.js";import"./FieldError-D2jIpheU.js";import"./Text-CYi48kKA.js";import"./clsx-Ciqy0D92.js";import"./Text-Cs-XgrOp.js";import"./RSPContexts-DjgvGlJ6.js";import"./Group-C1H1d_QY.js";import"./useControlledState-f1OgfOOU.js";import"./useLocalizedStringFormatter-Bxafu6ud.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-i55viZrJ.js";import"./useField-D7lpa4Ef.js";import"./TextField.module-DdivwlC8.js";import"./search-BkTxfdMZ.js";import"./createLucideIcon-Dg8jUY-5.js";import"./x-SVOUpjtq.js";import"./useLocalizedStringFormatter-BxhbuX7R.js";import"./Button-BxdtuMNq.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DGoVngfB.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
