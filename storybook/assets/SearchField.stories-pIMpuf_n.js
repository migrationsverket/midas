import{S as i}from"./SearchField-BLSruD-M.js";import"./iframe-Ft30p-9G.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-9foVijX8.js";import"./clsx-B-dksMZM.js";import"./Form-Bj-ULx6B.js";import"./useFocusRing-Daa2jsSP.js";import"./index-xpQNWkGI.js";import"./index-Cc81j565.js";import"./Input-BGurIZni.js";import"./Hidden-BvmG-LpB.js";import"./Button-C-EJ5lIE.js";import"./useLabel-BF5tAiqY.js";import"./useLabels-Dd0Yyu-4.js";import"./useButton-jc4sCZEH.js";import"./FieldError-DXrI8o23.js";import"./Text-FkyfMeaB.js";import"./clsx-Ciqy0D92.js";import"./Text-C3E5lXGF.js";import"./RSPContexts-c5guVd-d.js";import"./Group-w47T-z_V.js";import"./useControlledState-BoeB8-LH.js";import"./useLocalizedStringFormatter-Bn-aGXyh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BN-yaNMF.js";import"./useField-DK19wDNW.js";import"./TextField.module-DdivwlC8.js";import"./search-Ch3x1l0Z.js";import"./createLucideIcon-D4F6iW4h.js";import"./x-DG1ChVHS.js";import"./useLocalizedStringFormatter-BWzTIlWv.js";import"./Button-CEZ1lvwe.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BmzQFOM6.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
