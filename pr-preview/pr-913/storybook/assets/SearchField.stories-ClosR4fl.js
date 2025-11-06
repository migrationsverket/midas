import{S as f}from"./SearchField-BN6dGwz1.js";import"./iframe-BvbRhJsG.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-D_N49W1_.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CBXFJxHg.js";import"./utils-CS14vqSf.js";import"./useLocalizedStringFormatter-DyBJTu8f.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-CNfsLWZR.js";import"./useFocusRing-BPVAUh7v.js";import"./index-B3-53qwc.js";import"./index-BnFhduz6.js";import"./useFormValidation-Co1lvxmd.js";import"./useField-CDQxQ9Nr.js";import"./Button-Bmi_wjRq.js";import"./Hidden-BHVK8w8L.js";import"./useLabels-bBfz2F1H.js";import"./useButton-Ckg5GaUx.js";import"./search-DhmioXy3.js";import"./createLucideIcon-BuTuzAY3.js";import"./Button-oLX16Zh5.js";import"./Button.module-CcWMkJAG.js";import"./x-BNTRgTjP.js";import"./useLocalizedStringFormatter-40qb0x8d.js";import"./FieldError-BxDTCqc4.js";import"./Text-lWcGrung.js";import"./Text-B2nr1LzC.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var n,l,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,k;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...(k=(g=o.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const U=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,U as __namedExportsOrder,R as default};
