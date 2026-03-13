import{S as i}from"./SearchField-CBek92yn.js";import"./iframe-B5zOBWL8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-eNYL6jem.js";import"./clsx-B-dksMZM.js";import"./Form-IH-oloZ9.js";import"./useFocusRing-BLNWzzDa.js";import"./index-BUSmP6HV.js";import"./index-DCfNYjYD.js";import"./Input-BjbrFPx3.js";import"./Hidden-BfTCrLpu.js";import"./Button-Cr4v4jCk.js";import"./useLabels-BojerJy7.js";import"./useButton-BuCB7CsM.js";import"./FieldError-C872MoeY.js";import"./Text-CneoSpSV.js";import"./clsx-Ciqy0D92.js";import"./Text-2qPPhaNY.js";import"./RSPContexts-DY0llAGa.js";import"./Group-CCcIm9uk.js";import"./useControlledState-GuUpKA2D.js";import"./useLocalizedStringFormatter-Cgkn5RBi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CgzBZI_s.js";import"./useField-RVLo8JgM.js";import"./TextField.module-DdivwlC8.js";import"./search-BW3e3oip.js";import"./createLucideIcon-BVioREcM.js";import"./x-BaI04LZc.js";import"./useLocalizedStringFormatter-C9omsTZd.js";import"./Button-Ctf6p_Bv.js";import"./Button.module-D_C6WeTN.js";import"./VisuallyHidden-BwEmyPT5.js";const j={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},r={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},e={tags:["!autodocs"],args:{placeholder:"Sök efter en person",showButton:!0,buttonText:"Sök"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    placeholder: 'Sök efter en person',
    showButton: true,
    buttonText: 'Sök'
  }
}`,...e.parameters?.docs?.source},description:{story:"@deprecated Use your own Button outside SearchField instead.",...e.parameters?.docs?.description}}};const q=["Primary","CustomValidation","Invalid","Disabled","WithDeprecatedButton"];export{t as CustomValidation,s as Disabled,o as Invalid,r as Primary,e as WithDeprecatedButton,q as __namedExportsOrder,j as default};
