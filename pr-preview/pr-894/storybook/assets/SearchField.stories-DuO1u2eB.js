import{S as f}from"./SearchField-BGy-Bmpc.js";import"./iframe-DSbaXIhm.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-Ddb2XBAw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BWU0pHnH.js";import"./utils-BurnuwBa.js";import"./useLocalizedStringFormatter-CnNLP0Lq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-BUYTAfdg.js";import"./useFocusRing-BQgtBlWR.js";import"./index-CpY4f8st.js";import"./index-BOHlJrOM.js";import"./useFormValidation-hCYuRo2G.js";import"./useField-CASifKSd.js";import"./Button-BD-4S3jw.js";import"./Hidden-D1QEs3rJ.js";import"./useLabels-Duuh0L5K.js";import"./useButton-i6o-Pkvz.js";import"./search-CWNxSTWN.js";import"./createLucideIcon-Balk7dvp.js";import"./Button-CGqKqbIg.js";import"./Button.module-CcWMkJAG.js";import"./x-ED9ht_LO.js";import"./useLocalizedStringFormatter--GK1rXhk.js";import"./FieldError-DOOWnhN2.js";import"./Text-Cj6dtY9R.js";import"./Text-BMTeuJ1w.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
