import{S as i}from"./SearchField-DuIYkKwL.js";import"./iframe-CuGoBoGQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-RwFFfgQr.js";import"./clsx-B-dksMZM.js";import"./Form-gAbWA84B.js";import"./useFocusRing-7bYJ39Cr.js";import"./index-BccAwutK.js";import"./index-Bov1f0DO.js";import"./Input-C5zvbX-S.js";import"./Hidden-DY115Oyb.js";import"./Button-IcW5J6Fh.js";import"./useLabels-BByCvXff.js";import"./useButton-CJN9PhJp.js";import"./FieldError-CnIE1vat.js";import"./Text-CH2OEfXa.js";import"./clsx-Ciqy0D92.js";import"./Text-CKD5St-o.js";import"./RSPContexts-CvhTtm28.js";import"./Group-CDYSY5JO.js";import"./useControlledState-SyqHFLy3.js";import"./useLocalizedStringFormatter-BG2zkY5m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ZIbstcVT.js";import"./useField-CTDbBYF-.js";import"./TextField.module-DdivwlC8.js";import"./search-DzpjUcoY.js";import"./createLucideIcon-COJKu3Gj.js";import"./x-uQRabDRs.js";import"./useLocalizedStringFormatter-Xr2nB7Pj.js";import"./Button-hgAtNtsw.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-PGxXka93.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
