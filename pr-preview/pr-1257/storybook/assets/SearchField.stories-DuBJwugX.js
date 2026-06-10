import{S as i}from"./SearchField-TQC0fvyW.js";import"./iframe-BEEFzEsx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BVGeTo1z.js";import"./clsx-B-dksMZM.js";import"./Form-BGu38tuQ.js";import"./useFocusRing-DayYpa6h.js";import"./index-8CayshPQ.js";import"./index-icYaoe9T.js";import"./Input-DVbGj_jy.js";import"./Hidden-C5MrPpGY.js";import"./Button-DEUQgxtQ.js";import"./useLabel-BuYW4wvI.js";import"./useLabels-B32s2Ncd.js";import"./useButton-lpD_KbJB.js";import"./FieldError-HGo-eDX1.js";import"./Text-C3TPO5Ck.js";import"./clsx-Ciqy0D92.js";import"./Text-UbV7blhr.js";import"./RSPContexts-BmjfNHwO.js";import"./Group-4XxyF67-.js";import"./useControlledState-DWXRJogA.js";import"./useLocalizedStringFormatter-CLVweFRJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSz5zs0C.js";import"./useField-BfF4G1fX.js";import"./TextField.module-DdivwlC8.js";import"./search-Mlwmisgi.js";import"./createLucideIcon-DyvpJvxd.js";import"./x-BRbO8G8P.js";import"./useLocalizedStringFormatter-BOrzEOxe.js";import"./Button-BTzHjp2C.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CkEbrnwS.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
