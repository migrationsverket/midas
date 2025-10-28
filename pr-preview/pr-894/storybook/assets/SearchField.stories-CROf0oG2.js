import{S as f}from"./SearchField-BL38ILKy.js";import"./iframe-Cda3lYJ5.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-Ddb2XBAw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState--bhftPx-.js";import"./utils-B37MiCy-.js";import"./useLocalizedStringFormatter-7kHjTTHP.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-EZj84PTs.js";import"./useFocusRing-qxJMSdl4.js";import"./index-DR8SmJ9z.js";import"./index-Bum8_rPP.js";import"./useFormValidation-j8JLP9VQ.js";import"./useField-DZ1wB0zq.js";import"./Button-D8D8PjNo.js";import"./Hidden-Drd1oYtq.js";import"./useLabels-CF0q-n_g.js";import"./useButton-DT6XtdxM.js";import"./search-bU3CBLZQ.js";import"./createLucideIcon-BXWKhSvD.js";import"./Button-C29Mqe4M.js";import"./Button.module-CcWMkJAG.js";import"./x-Dd9ArO1o.js";import"./useLocalizedStringFormatter-Crrc13jn.js";import"./FieldError-CN0JwA9_.js";import"./Text-wVSZCUEv.js";import"./Text-CsATnSke.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
