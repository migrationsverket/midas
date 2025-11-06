import{S as f}from"./SearchField-CTX9DuiH.js";import"./iframe-Crmw0i2R.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-D_N49W1_.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DR8bVkx4.js";import"./utils-D5GCa4v0.js";import"./useLocalizedStringFormatter-D66cuJKB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-COzIAzoA.js";import"./useFocusRing-CufPa_ia.js";import"./index-eeEc0rA-.js";import"./index-XJiICI-O.js";import"./useFormValidation-GWv1BUwB.js";import"./useField-B-ADhaDL.js";import"./Button-B7mrt-RF.js";import"./Hidden-Dq_Oeqgo.js";import"./useLabels-CHYHYSLh.js";import"./useButton-pXVmfm4c.js";import"./search-BxsVS5bE.js";import"./createLucideIcon-BeU89d5s.js";import"./Button-B5i5HqCD.js";import"./Button.module-CcWMkJAG.js";import"./x-XFPQEIkP.js";import"./useLocalizedStringFormatter-Dfk2seuw.js";import"./FieldError-DBJxWroZ.js";import"./Text-lw_cTHJD.js";import"./Text-B1OVS-_0.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
