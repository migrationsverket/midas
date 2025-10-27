import{S as f}from"./SearchField-vxbrMs8M.js";import"./iframe-odwdLjhJ.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-Ddb2XBAw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-fx81Le39.js";import"./utils-BfXlgJWI.js";import"./useLocalizedStringFormatter-DcZOaAjj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-Xyn3yYLY.js";import"./useFocusRing-D_0n3iry.js";import"./index-gUgSV9Od.js";import"./index-Y-mQe5FE.js";import"./useFormValidation-DqnNYfez.js";import"./useField-CHm8F9NL.js";import"./Button-CHIcEKTW.js";import"./Hidden-f5i2DQHq.js";import"./useLabels-Co1S2KyV.js";import"./useButton-BxE9BcYr.js";import"./search--zk1zVAl.js";import"./createLucideIcon-DT6ESbmV.js";import"./Button-DUkfVRlk.js";import"./Button.module-CcWMkJAG.js";import"./x-ByXAbeVe.js";import"./useLocalizedStringFormatter-Czwx8J6G.js";import"./FieldError-DM2aQdrw.js";import"./Text-D1-v39j4.js";import"./Text-Bc8jy4b7.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
