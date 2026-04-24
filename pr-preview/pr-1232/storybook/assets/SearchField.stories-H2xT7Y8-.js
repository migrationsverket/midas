import{S as i}from"./SearchField-B47sqbd8.js";import"./iframe-IJuqoOmk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B1FkGHW3.js";import"./clsx-B-dksMZM.js";import"./Form-D4TqUibt.js";import"./useFocusRing-CkLNsvno.js";import"./index-CBGauQ3U.js";import"./index-DtmQ20tD.js";import"./Input-C9csjcmV.js";import"./Hidden-DzRh-64e.js";import"./Button-E9T7cgY3.js";import"./useLabel-BDetoK4o.js";import"./useLabels-W32AwYY6.js";import"./useButton-Ckvqp9dV.js";import"./FieldError-BFehnrZy.js";import"./Text-B8nSOSOw.js";import"./clsx-Ciqy0D92.js";import"./Text-Dbv6zmdw.js";import"./RSPContexts-BaJeT4Si.js";import"./Group-Dh2KQ9lo.js";import"./useControlledState-DL7f2Wr3.js";import"./useLocalizedStringFormatter-BdCq-opg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C2-ei7Yz.js";import"./useField-C73EInUm.js";import"./TextField.module-DdivwlC8.js";import"./search-DHwIi2FT.js";import"./createLucideIcon-9OQLRRNP.js";import"./x-BhOMJrhI.js";import"./useLocalizedStringFormatter-Vjm4sErI.js";import"./Button-DQFlWi2u.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bdyvpnxr.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
