import{S as f}from"./SearchField-xd0pgp1I.js";import"./iframe-DtxoFKwo.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-D_N49W1_.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cf9Dm7V0.js";import"./utils-DIWkIshB.js";import"./useLocalizedStringFormatter-CQ08zqg5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-DYAaOAhP.js";import"./useFocusRing-CdyWXIln.js";import"./index-CtRPRv0Z.js";import"./index-B505Biom.js";import"./useFormValidation-Do28Vedx.js";import"./useField-DT9fx3LY.js";import"./Button-BE_Do470.js";import"./Hidden-BHiOEcku.js";import"./useLabels-D54vKqlx.js";import"./useButton-mneyLtoN.js";import"./search-Dv5mzo_p.js";import"./createLucideIcon-Ba6NwseB.js";import"./Button-B7Jqdyxh.js";import"./Button.module-CcWMkJAG.js";import"./x-7fEGHR51.js";import"./useLocalizedStringFormatter-C_aITI_T.js";import"./FieldError-BDMwdtmq.js";import"./Text-D4YkJF8T.js";import"./Text-CZZKswuy.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
