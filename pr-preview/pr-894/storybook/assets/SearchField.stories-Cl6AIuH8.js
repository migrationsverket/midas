import{S as f}from"./SearchField-BCdE1PrB.js";import"./iframe-DrB9qZTI.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-Ddb2XBAw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CIzzj-r4.js";import"./utils-CInG6W3X.js";import"./useLocalizedStringFormatter-CZ3U7jKg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-CsheQ9jX.js";import"./useFocusRing-Bq-FvUHV.js";import"./index-D5KzPf6k.js";import"./index-DfIG-et7.js";import"./useFormValidation-J3VyGkUV.js";import"./useField-D5KtFbs5.js";import"./Button-CXUNspnl.js";import"./Hidden-CfizYyXd.js";import"./useLabels-soz90g56.js";import"./useButton-cF82fNVP.js";import"./search-B7aTp-7K.js";import"./createLucideIcon-BLlFR1Nx.js";import"./Button-yBTmUS_M.js";import"./Button.module-CcWMkJAG.js";import"./x-ChoxX23J.js";import"./useLocalizedStringFormatter-Dt2a-aZg.js";import"./FieldError-Dk-uAcrK.js";import"./Text-CepI4xEo.js";import"./Text-DxFbSKvE.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
