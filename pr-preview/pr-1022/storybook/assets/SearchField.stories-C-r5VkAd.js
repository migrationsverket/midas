import{S as i}from"./SearchField-BM2ZhabX.js";import"./iframe-Bs-4Q0RS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D6H3fjwf.js";import"./clsx-B-dksMZM.js";import"./Form-Blxuo4OH.js";import"./useFocusRing-BPypZ_tc.js";import"./index-6uY4yepA.js";import"./index-BgNIyxhc.js";import"./Input-DXT5PACK.js";import"./Hidden-DC5u3Uje.js";import"./Button-BRycn86x.js";import"./useLabel-BMAVjmg6.js";import"./useLabels-BCny178P.js";import"./useButton-Cy54odSV.js";import"./FieldError-B2Y4IZts.js";import"./Text-DUhY8chK.js";import"./clsx-Ciqy0D92.js";import"./Text-CODpWWcU.js";import"./RSPContexts-B9ePokfA.js";import"./Group-BGL_FGSG.js";import"./useControlledState-DOA-W8fE.js";import"./useLocalizedStringFormatter-BiyFB0Ck.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DiHi25f0.js";import"./useField-Y_v01lD_.js";import"./TextField.module-DdivwlC8.js";import"./search-CngbP3Nb.js";import"./createLucideIcon-C-ocypBz.js";import"./x-DCsDOoGU.js";import"./useLocalizedStringFormatter-aDoo-4ef.js";import"./Button-DTSBAwbm.js";import"./Button.module-BFenTVPP.js";import"./VisuallyHidden-D2ZFd25y.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
