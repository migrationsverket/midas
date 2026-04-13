import{S as i}from"./SearchField-gN-68iTv.js";import"./iframe-BHERtVNf.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CTHX7231.js";import"./clsx-B-dksMZM.js";import"./Form-DIUWLB30.js";import"./useFocusRing-BHPpscSH.js";import"./index-DZ_I24z0.js";import"./index-BtFyGPoM.js";import"./Input-KqWw1B45.js";import"./Hidden-Bbawj_lw.js";import"./Button-CWn0VMRl.js";import"./useLabel-BYlWZT7f.js";import"./useLabels-C7V4whMC.js";import"./useButton-DKTwQcCs.js";import"./FieldError-vYppElHh.js";import"./Text-CRbS9uup.js";import"./clsx-Ciqy0D92.js";import"./Text-DnQ_ETrR.js";import"./RSPContexts-CoVebu3O.js";import"./Group-BJap8_sO.js";import"./useControlledState-7jxNesIu.js";import"./useLocalizedStringFormatter-3lDJzaW9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CoZDJyuF.js";import"./useField-Dlh-JQOe.js";import"./TextField.module-DdivwlC8.js";import"./search-BvIJ5fbt.js";import"./createLucideIcon-DvoPQrFJ.js";import"./x-BjG60dSq.js";import"./useLocalizedStringFormatter-MqTPcr_q.js";import"./Button-sL8xP2zY.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CotPfbgC.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
