import{S as f}from"./SearchField-B-AkFweW.js";import"./iframe-BxABzvsr.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-D_N49W1_.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cm49iVED.js";import"./utils-BhUqFzNj.js";import"./useLocalizedStringFormatter-CXKuKS0e.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-DbhAvTsK.js";import"./useFocusRing-COIxRXK5.js";import"./index-C3YMpM8e.js";import"./index-DtAlXBW-.js";import"./useFormValidation-BAdH1cET.js";import"./useField-Cq9EwsRV.js";import"./Button-CQqQcPYq.js";import"./Hidden-CuvaBcVJ.js";import"./useLabels-Dm2JA2a8.js";import"./useButton-7P-vX4FP.js";import"./search-DfDUOZZq.js";import"./createLucideIcon-DJpot9Rw.js";import"./Button-ba5vxjeM.js";import"./Button.module-CcWMkJAG.js";import"./x-B7CHOQv-.js";import"./useLocalizedStringFormatter-AJ1_Hi3I.js";import"./FieldError-m9ZGUe0y.js";import"./Text-CnoN3EMi.js";import"./Text-aSELrP8c.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
