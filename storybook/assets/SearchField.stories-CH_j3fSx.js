import{S as f}from"./SearchField-CGtjXkvp.js";import"./iframe-BYTW1kW-.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-D_N49W1_.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DLh9w9TR.js";import"./utils-DnUtv1H6.js";import"./useLocalizedStringFormatter-D2wq_l2t.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-BTXofsR1.js";import"./useFocusRing-BmrQzp3K.js";import"./index-CDuNY9wb.js";import"./index-C4Nq-i3U.js";import"./useFormValidation-eTrvw3Nm.js";import"./useField-CPRQ0c9u.js";import"./Button-D-R5bAU9.js";import"./Hidden-BRWuWDn6.js";import"./useLabels-CV_gwmKe.js";import"./useButton-Brx2EB8L.js";import"./search-DJgeE2jz.js";import"./createLucideIcon-B6rYYwXi.js";import"./Button-Bi_YaKur.js";import"./Button.module-CcWMkJAG.js";import"./x-3a8PYTRu.js";import"./useLocalizedStringFormatter-CAWbKX-7.js";import"./FieldError-Cw98AGXF.js";import"./Text-BiTuHqkU.js";import"./Text-BrffYF05.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
