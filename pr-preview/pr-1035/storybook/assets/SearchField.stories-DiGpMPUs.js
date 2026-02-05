import{S as s}from"./SearchField-5s24fBOD.js";import"./iframe-BQBOUe4L.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DM-5-Rrt.js";import"./utils-CRMkcUEf.js";import"./useLocalizedStringFormatter-B5gaEHvL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Vk17g3pG.js";import"./useFocusRing-DansQnno.js";import"./index-yiTGV0Ad.js";import"./index-B5FT88Na.js";import"./useFormValidation-DspKaQyW.js";import"./useField-CPvbugzP.js";import"./Button-CvEjFmDh.js";import"./Hidden-DlSKSdAn.js";import"./useLabels-CAK16zbU.js";import"./useButton-B_yguids.js";import"./search-DcO30Y2T.js";import"./createLucideIcon-DCYizV4H.js";import"./ClearButton-v4Ttyd3b.js";import"./Button-Cim8R03s.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-lzSK34iS.js";import"./VisuallyHidden-DljAyihR.js";import"./x-Cp8v8-j6.js";import"./FieldError-U_WPsfks.js";import"./Text-4aw7o7le.js";import"./Text-B_t0zTpM.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
