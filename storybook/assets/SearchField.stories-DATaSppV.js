import{S as s}from"./SearchField-DZUhKiZW.js";import"./iframe-Ci13ld7O.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BPjdf_b0.js";import"./utils-Cd0LQrts.js";import"./useLocalizedStringFormatter-D47gSq9M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DcnpuNkd.js";import"./useFocusRing-DnhJhnzY.js";import"./index-yP8H7dy3.js";import"./index-7gUS6nb-.js";import"./useFormValidation-lyydmePw.js";import"./useField-CG62_5pp.js";import"./Button-YvURXki4.js";import"./Hidden-BWsE9twn.js";import"./useLabels-BR_CPQ7_.js";import"./useButton-BJUfgxuB.js";import"./search-8qTVw1sK.js";import"./createLucideIcon-Bj58XDKs.js";import"./ClearButton-Cw0kPuav.js";import"./Button-fdROVxmt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ys_jkXo3.js";import"./VisuallyHidden-C1I07cqa.js";import"./x-CkflMYc7.js";import"./FieldError-CNS2gCFK.js";import"./Text-BVmiYMQy.js";import"./Text-BPRonoR2.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...o.parameters?.docs?.source}}};const w=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,w as __namedExportsOrder,q as default};
