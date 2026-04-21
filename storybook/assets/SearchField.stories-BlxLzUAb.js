import{S as i}from"./SearchField-Cng3N4Mj.js";import"./iframe-Dmk7YWbP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CZU1a0io.js";import"./clsx-B-dksMZM.js";import"./Form-lxF2zL-k.js";import"./useFocusRing-DQsZ5BW0.js";import"./index-D7ra6ojE.js";import"./index-CGyxxXDN.js";import"./Input-DJ2I6k99.js";import"./Hidden-j21WNwyS.js";import"./Button-F5fRRQra.js";import"./useLabel-DM6ovL82.js";import"./useLabels-BCoT3OdJ.js";import"./useButton-C4S2lX_8.js";import"./FieldError-Blg6FnKj.js";import"./Text-C-958akl.js";import"./clsx-Ciqy0D92.js";import"./Text--asL3Zcb.js";import"./RSPContexts-BkluUXe_.js";import"./Group-Dd_e3Mvl.js";import"./useControlledState-C7rqhk2c.js";import"./useLocalizedStringFormatter-BZ6VtZ8V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D6Ij23Fi.js";import"./useField-BTvl88ll.js";import"./TextField.module-DdivwlC8.js";import"./search-CW9QntIM.js";import"./createLucideIcon-Dl46zayF.js";import"./x-CR8vb-29.js";import"./useLocalizedStringFormatter-BIZu7Yxw.js";import"./Button-BkclXew1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CW18ePiJ.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
