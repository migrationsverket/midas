import{S as f}from"./SearchField-BjLBx_X5.js";import"./iframe-C1xkKcfZ.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-Ddb2XBAw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B5NDMWqh.js";import"./utils-CIwcQmyM.js";import"./useLocalizedStringFormatter-zf0PXjQ3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-CmJHQncH.js";import"./useFocusRing-BisJsM0Y.js";import"./index-m-lDxEOy.js";import"./index-DbI_VynI.js";import"./useFormValidation-BQfyT2h7.js";import"./useField-Gl5FKzeb.js";import"./Button-3GQO97zm.js";import"./Hidden-CP0qe3cu.js";import"./useLabels-DecHiXST.js";import"./useButton-Dsc1RD5R.js";import"./search-D56X_AEB.js";import"./createLucideIcon-a3ujvLJc.js";import"./Button-BbFNfB1b.js";import"./Button.module-CcWMkJAG.js";import"./x-B8qCCVdF.js";import"./useLocalizedStringFormatter-rAvam-oH.js";import"./FieldError-Cl8Vhntk.js";import"./Text-CMQFVGEq.js";import"./Text-CPFq_c7k.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
