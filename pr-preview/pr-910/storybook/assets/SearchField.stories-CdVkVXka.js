import{S as f}from"./SearchField-BB_bC1Bm.js";import"./iframe-D6bwu_M6.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-D_N49W1_.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-rhnbTvJ5.js";import"./utils-DupMYAax.js";import"./useLocalizedStringFormatter-DiIEHiLq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-DfR2_mLj.js";import"./useFocusRing-Cq2k40Pm.js";import"./index-CBlzRzW6.js";import"./index-CRODHNit.js";import"./useFormValidation-B8wbV92U.js";import"./useField-B9JegXI1.js";import"./Button-CK9UOEzr.js";import"./Hidden-DGLzVhhq.js";import"./useLabels-BCS-IXw5.js";import"./useButton-Dox0StIc.js";import"./search-Bqu8Urlc.js";import"./createLucideIcon-C7Z6_ELW.js";import"./Button-Dy9ld2-X.js";import"./Button.module-CcWMkJAG.js";import"./x-q38K7e_3.js";import"./useLocalizedStringFormatter-C3lzylbp.js";import"./FieldError-DvkQG6pE.js";import"./Text-DYI1O7jb.js";import"./Text-CEYHWnPz.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
