import{S as f}from"./SearchField-Dx4v40YT.js";import"./iframe-BNPU2RD9.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-Ddb2XBAw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Jm4zSMMC.js";import"./utils-Bbv0K-E4.js";import"./useLocalizedStringFormatter-BLJVHQVo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-DW6IhTYu.js";import"./useFocusRing-DWY18r7i.js";import"./index-ncgLMVEm.js";import"./index-LADeIPUW.js";import"./useFormValidation-KvK9QAJw.js";import"./useField-ChwKrBRQ.js";import"./Button-DAw_R2Cq.js";import"./Hidden-BD2434_s.js";import"./useLabels-CnVI-j1s.js";import"./useButton-mh303P8m.js";import"./search-CX_HaLCt.js";import"./createLucideIcon-CHelv_kA.js";import"./Button-C_nJVgGE.js";import"./Button.module-CcWMkJAG.js";import"./x-Dar7tTg9.js";import"./useLocalizedStringFormatter-DrMezzRA.js";import"./FieldError-RRNeuoep.js";import"./Text-C6bkZg3Q.js";import"./Text-CUr2vUBT.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
