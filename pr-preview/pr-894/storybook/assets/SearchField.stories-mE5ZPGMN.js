import{S as f}from"./SearchField-g5rqN_Qz.js";import"./iframe-nNM2zXEP.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-Ddb2XBAw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-UqYS5nUc.js";import"./utils-CofUL2gS.js";import"./useLocalizedStringFormatter-GZsnVnJn.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-CI3A6ibR.js";import"./useFocusRing-l6Yplvhj.js";import"./index-BOQeLQop.js";import"./index-BGt-FRei.js";import"./useFormValidation-DAM7P2ni.js";import"./useField-Df_n3bvV.js";import"./Button-Deh_MhmS.js";import"./Hidden-CdvTVZFK.js";import"./useLabels-zQ-ioPUi.js";import"./useButton-BxeB6HSS.js";import"./search-BTgbnj1l.js";import"./createLucideIcon-C8elrRh4.js";import"./Button-DatXIA1i.js";import"./Button.module-CcWMkJAG.js";import"./x-NoiibOgS.js";import"./useLocalizedStringFormatter-DbqnmgMj.js";import"./FieldError-QnkOU3Hp.js";import"./Text-CAaaXfLw.js";import"./Text-Bhbxhu-m.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
