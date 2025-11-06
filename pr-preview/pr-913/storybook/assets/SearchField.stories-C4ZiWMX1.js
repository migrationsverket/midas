import{S as f}from"./SearchField-BFPoQHGR.js";import"./iframe-BK4BwmKq.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-D_N49W1_.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CMke2wqe.js";import"./utils-BP7BScAh.js";import"./useLocalizedStringFormatter-CmK81N45.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-CcZmT3WB.js";import"./useFocusRing-ozrB5mgy.js";import"./index-CO8NcyIM.js";import"./index-D5OE4sho.js";import"./useFormValidation-D2Ahs5V9.js";import"./useField-B4CEvdol.js";import"./Button-DGeDhjgN.js";import"./Hidden-AX6UhX2n.js";import"./useLabels-Rxot5ufl.js";import"./useButton-LpXCSEu1.js";import"./search-CsOv5bhu.js";import"./createLucideIcon-uVjZM-p7.js";import"./Button-GkidKpkY.js";import"./Button.module-CcWMkJAG.js";import"./x-BYtBCtn3.js";import"./useLocalizedStringFormatter-TH88mbD1.js";import"./FieldError-8BQoXSKI.js";import"./Text-CcAUJWh3.js";import"./Text-Cd8SAJrp.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
