import{S as i}from"./SearchField-SuUOiDf-.js";import"./iframe-B22LvWbW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BoCAfGQj.js";import"./clsx-B-dksMZM.js";import"./Form-loZ3Ref_.js";import"./useFocusRing-COZ-KdCj.js";import"./index-COlz_oEn.js";import"./index-Ce19_x3I.js";import"./Input-CAiTMh7r.js";import"./Hidden-BOXGnL4u.js";import"./Button-DKfTRRv_.js";import"./useLabel-BMEjxuHj.js";import"./useLabels-CG8ZEWvO.js";import"./useButton-D-9O1J5B.js";import"./FieldError-CaBPVaas.js";import"./Text-igIwftJt.js";import"./clsx-Ciqy0D92.js";import"./Text-C_6Wg08c.js";import"./RSPContexts-C7KIxgyf.js";import"./Group-BQeFUN6h.js";import"./useControlledState-IKfTJ6C0.js";import"./useLocalizedStringFormatter-Cax5_603.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CfmZtV3A.js";import"./useField-CuA4l6HP.js";import"./TextField.module-DdivwlC8.js";import"./search-D3bAawYh.js";import"./createLucideIcon-B8tzovcT.js";import"./x-Dgd0H-9L.js";import"./useLocalizedStringFormatter-Bx-OZ9xC.js";import"./Button-sJK-n8WP.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BkHBxjny.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
