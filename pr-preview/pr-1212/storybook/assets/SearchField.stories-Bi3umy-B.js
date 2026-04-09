import{S as i}from"./SearchField-C8-YMMQT.js";import"./iframe-CKFMuO9m.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D5GKgKLw.js";import"./clsx-B-dksMZM.js";import"./Form-CIVuJeWD.js";import"./useFocusRing-yfimCeup.js";import"./index-6i8ZJQUe.js";import"./index-DDqKr8WO.js";import"./Input-D_Vce_3G.js";import"./Hidden-Dy9FDq_i.js";import"./Button-r5FEcXKA.js";import"./useLabel-Biy0vo30.js";import"./useLabels-D1n_UWc_.js";import"./useButton-CBEFeFxS.js";import"./FieldError-BxVlGG_h.js";import"./Text-D6Srqbyc.js";import"./clsx-Ciqy0D92.js";import"./Text-CA1blZ7p.js";import"./RSPContexts-DhqrhFMI.js";import"./Group-BmEjfMGD.js";import"./useControlledState-BexPn5vQ.js";import"./useLocalizedStringFormatter-BF0ENpbS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-AV2_XkOS.js";import"./useField-Do1u8hN3.js";import"./TextField.module-DdivwlC8.js";import"./search-CKBiYhdg.js";import"./createLucideIcon-C2PX8F3A.js";import"./x-BvWk0FrP.js";import"./useLocalizedStringFormatter-BlqBGSSd.js";import"./Button-DCc3RCFi.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DCQS44v1.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
