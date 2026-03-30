import{S as i}from"./SearchField-Bn4A1uEL.js";import"./iframe-DZnWAGNq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Btsh_mej.js";import"./clsx-B-dksMZM.js";import"./Form-CG9hywiv.js";import"./useFocusRing-BZzOLfX3.js";import"./index--cp8vNXJ.js";import"./index-DH1eMf2P.js";import"./Input-BBO63mR7.js";import"./Hidden-Dc0Ha1vW.js";import"./Button-BTPuoZ6n.js";import"./useLabel-iphFOCA9.js";import"./useLabels-bUzroRw2.js";import"./useButton-DqeMFL8_.js";import"./FieldError-BtctqwaV.js";import"./Text-8pdzY51Q.js";import"./clsx-Ciqy0D92.js";import"./Text-Db4n8kvt.js";import"./RSPContexts-CXYZROJa.js";import"./Group-BT1uP5Tz.js";import"./useControlledState-6kQgBtxG.js";import"./useLocalizedStringFormatter-BNHvIU-7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DQnkPp5b.js";import"./useField-CizEGine.js";import"./TextField.module-DdivwlC8.js";import"./search-BH6y9JcF.js";import"./createLucideIcon-DnUFLHhp.js";import"./x-B3FTSjlW.js";import"./useLocalizedStringFormatter-GZqDfzDD.js";import"./Button-DcP_UxfK.js";import"./Button.module-BFenTVPP.js";import"./VisuallyHidden-BIds43GM.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
