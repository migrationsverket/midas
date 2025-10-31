import{S as f}from"./SearchField-qBQV-haL.js";import"./iframe-CD9lI7Lx.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-Ddb2XBAw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-hakXx6AJ.js";import"./utils-mcbSpjMM.js";import"./useLocalizedStringFormatter-3ClkwjFY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-CB9IhWFJ.js";import"./useFocusRing-Ia_tv816.js";import"./index-CTARbwJ7.js";import"./index-Bbc4kYRc.js";import"./useFormValidation-SiMxYtii.js";import"./useField-FEW6m3z8.js";import"./Button-BoQZB1gA.js";import"./Hidden-B6SecSH-.js";import"./useLabels-B2BWjGt4.js";import"./useButton-B0EYsfsT.js";import"./search-4CmXqSyt.js";import"./createLucideIcon-wdsGdP61.js";import"./Button-DB1CCvjL.js";import"./Button.module-CcWMkJAG.js";import"./x-BTKq7scX.js";import"./useLocalizedStringFormatter-vpqGkdVP.js";import"./FieldError-Bz32VrOA.js";import"./Text-i7K4zqkb.js";import"./Text-Bpbh6IXD.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
