import{S as i}from"./SearchField-i9sLaQJY.js";import"./iframe-BRlibj-k.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bx0A40Hz.js";import"./clsx-B-dksMZM.js";import"./Form-CSA3u7JB.js";import"./useFocusRing-CE-jlBYc.js";import"./index-BvCpjtnM.js";import"./index-CUyw_AEg.js";import"./Input-D_W1be-q.js";import"./Hidden-BrLnFV9D.js";import"./Button-B0keB5Wy.js";import"./useLabel-PCvcVGmd.js";import"./useLabels-D3i6Mpdm.js";import"./useButton-BMOcI7o7.js";import"./FieldError-CFA3HJLW.js";import"./Text-Ck72NiTG.js";import"./clsx-Ciqy0D92.js";import"./Text-fpqzAeYU.js";import"./RSPContexts-CV3yeRAb.js";import"./Group-FTG5sa6I.js";import"./useControlledState-CerSLXPK.js";import"./useLocalizedStringFormatter-zTincOmM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CxB4Xjd_.js";import"./useField-BVUz0JML.js";import"./TextField.module-DdivwlC8.js";import"./search-CM3gs8OV.js";import"./createLucideIcon-p72J_6hu.js";import"./x-KlHF_jbs.js";import"./useLocalizedStringFormatter-nyGG6W03.js";import"./Button-BCeszJe0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DAewgK18.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
