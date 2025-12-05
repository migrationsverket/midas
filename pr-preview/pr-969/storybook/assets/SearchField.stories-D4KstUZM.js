import{S as s}from"./SearchField-D1mGWKn7.js";import"./iframe-qDdxYEqa.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-0uhYfAk6.js";import"./utils-BM4vGe7B.js";import"./useLocalizedStringFormatter-DIrmbVtk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-J7IA3gDt.js";import"./useFocusRing-B6vuZu2_.js";import"./index-DzlCj9Y4.js";import"./index-BVyj6e23.js";import"./useFormValidation-Bfy44XK_.js";import"./useField-CJ3GOAY5.js";import"./Button-B6p9EZnf.js";import"./Hidden-DtSTyAaE.js";import"./useLabels-xEn6R_2b.js";import"./useButton-5HeDBVBJ.js";import"./search-Cmrcwxa-.js";import"./createLucideIcon-G8J66sNp.js";import"./Button-Cs7TGJjB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D8GJkiEc.js";import"./VisuallyHidden-CKY1T34r.js";import"./x-CLUEOlar.js";import"./FieldError-BwMuefB_.js";import"./Text-bywFbAb4.js";import"./Text-WW175J0Z.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,q as __namedExportsOrder,j as default};
