import{S as i}from"./SearchField-Bdu7DO16.js";import"./iframe-CKynqbsT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cz4s-P07.js";import"./clsx-B-dksMZM.js";import"./Form-P19_AeiU.js";import"./useFocusRing-DW03qt76.js";import"./index-MKc-RSGl.js";import"./index-DbmjAuuR.js";import"./Input-C-G8Md4f.js";import"./Hidden-CxwF48Ci.js";import"./Button-odKdBChn.js";import"./useLabel-BScGGoXy.js";import"./useLabels-CasMb-p3.js";import"./useButton-K4roNkpf.js";import"./FieldError-D5ePyvQL.js";import"./Text-CFqReYPn.js";import"./clsx-Ciqy0D92.js";import"./Text-CV3rC3lw.js";import"./RSPContexts-1kvrZnW_.js";import"./Group-00TIn4gD.js";import"./useControlledState-CkRmHnNo.js";import"./useLocalizedStringFormatter-1siNxGD0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CnAibDQ-.js";import"./useField-d_mLWNBx.js";import"./TextField.module-DdivwlC8.js";import"./search-D3frWcUw.js";import"./createLucideIcon-B7xcXnKD.js";import"./x-CO1sdvqd.js";import"./useLocalizedStringFormatter-BJaowkmQ.js";import"./Button-DQDk8v-k.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BxWxnvxB.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
