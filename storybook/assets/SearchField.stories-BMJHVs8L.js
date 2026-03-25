import{S as i}from"./SearchField-BGud0tnM.js";import"./iframe-BGuMGxmc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ca8G7ZGu.js";import"./clsx-B-dksMZM.js";import"./Form-BbF92qNF.js";import"./useFocusRing-DJApir6W.js";import"./index-B9qsJJ_r.js";import"./index-CvgehkYp.js";import"./Input-B__HRY_B.js";import"./Hidden-Blt3qGK-.js";import"./Button-C3vJklaf.js";import"./useLabels-CUg_cq6I.js";import"./useButton-BJrbop6V.js";import"./FieldError-CrkbqQXw.js";import"./Text-D1Wivcto.js";import"./clsx-Ciqy0D92.js";import"./Text-X11QTVVP.js";import"./RSPContexts-CnYkPQTV.js";import"./Group-DZWeYlEJ.js";import"./useControlledState-7HU2cwdp.js";import"./useLocalizedStringFormatter-CJMbHzz3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DaevbFQ7.js";import"./useField-DD2NBLXV.js";import"./TextField.module-DdivwlC8.js";import"./search-upZkBXFE.js";import"./createLucideIcon-YpCIaABn.js";import"./x-DjU_SE9r.js";import"./useLocalizedStringFormatter-Bx3yadO6.js";import"./Button-ClNKt42i.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D0q9pbf-.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
