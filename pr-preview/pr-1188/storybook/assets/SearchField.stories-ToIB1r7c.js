import{S as i}from"./SearchField-ByfdBI7U.js";import"./iframe-Dr8Tkvah.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DOuA3kXF.js";import"./clsx-B-dksMZM.js";import"./Form-CVwLgz52.js";import"./useFocusRing-poi8r4OJ.js";import"./index-DM6sY-46.js";import"./index-CtVp1upA.js";import"./Input-Bo18jdB3.js";import"./Hidden-BjSG53-T.js";import"./Button-C610-Rnq.js";import"./useLabel-C7_L8_CN.js";import"./useLabels-DxkPONzl.js";import"./useButton-BViocPn_.js";import"./FieldError-K3l2DsmW.js";import"./Text-Dbwxk-C7.js";import"./clsx-Ciqy0D92.js";import"./Text-CQjzvGyg.js";import"./RSPContexts-DIaWsy7a.js";import"./Group-ChzXJMKR.js";import"./useControlledState-DzvWO88h.js";import"./useLocalizedStringFormatter-CR5zAqVa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cl7V3AhN.js";import"./useField-JpMYATHc.js";import"./TextField.module-DdivwlC8.js";import"./search-BTQSsk8H.js";import"./createLucideIcon-Boz8MrIZ.js";import"./x-UdkypbZC.js";import"./useLocalizedStringFormatter-Cn25UGjx.js";import"./Button-B4jxTFim.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CqOJHiwP.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
