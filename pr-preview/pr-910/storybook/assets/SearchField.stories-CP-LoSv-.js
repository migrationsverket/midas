import{S as f}from"./SearchField-Dbib0llU.js";import"./iframe-P7vGAEPf.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-D_N49W1_.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B91FfRND.js";import"./utils-C4AsHK4M.js";import"./useLocalizedStringFormatter-DmgwXs2T.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-CxZgan6L.js";import"./useFocusRing-Z18YPlKo.js";import"./index-BkwmXWKL.js";import"./index-B_mfWF_k.js";import"./useFormValidation-De92zOd5.js";import"./useField-D-jl6Xzq.js";import"./Button-D-J3k31G.js";import"./Hidden-Dd1MY3p8.js";import"./useLabels-CRiZEYvW.js";import"./useButton-BqR4PLc1.js";import"./search-hFpoI49g.js";import"./createLucideIcon-ciePIdUU.js";import"./Button-DY1ErDAz.js";import"./Button.module-CcWMkJAG.js";import"./x-BdlJRiSM.js";import"./useLocalizedStringFormatter-C-11L9yW.js";import"./FieldError-1QrZotGi.js";import"./Text-Cr0XNUkF.js";import"./Text-ByrMKtSv.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
