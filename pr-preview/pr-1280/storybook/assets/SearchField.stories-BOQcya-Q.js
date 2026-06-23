import{S as i}from"./SearchField-bJ6zUERH.js";import"./iframe-BusKbIuL.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BLk-MBDB.js";import"./clsx-B-dksMZM.js";import"./Form-DVi0rKS7.js";import"./useFocusRing-Bkm-baB3.js";import"./index-CnP2yi1p.js";import"./index-DAOAnwsN.js";import"./Input-ChWvvezn.js";import"./Hidden-IsjPxMOX.js";import"./Button-D16PjYbu.js";import"./useLabel-RD_wy9US.js";import"./useLabels-Dzl_jQ3w.js";import"./useButton-BmGPf_ms.js";import"./FieldError-DYrJGow5.js";import"./Text-By1Rmolv.js";import"./clsx-Ciqy0D92.js";import"./Text-BSlgEswi.js";import"./RSPContexts-CMg-o8P6.js";import"./Group-CBE_Jb-J.js";import"./useControlledState-VeRXhIhk.js";import"./useLocalizedStringFormatter-BzO50CYY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DA7Ox9WZ.js";import"./useField-TTAqEZ-L.js";import"./TextField.module-DdivwlC8.js";import"./search-Drz4guJh.js";import"./createLucideIcon-CsIH265l.js";import"./x-BjSALVJQ.js";import"./useLocalizedStringFormatter-B0UBIKFs.js";import"./Button-CEECLnQG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DfUkCTQh.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
