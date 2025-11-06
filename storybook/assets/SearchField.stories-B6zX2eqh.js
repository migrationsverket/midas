import{S as f}from"./SearchField-BMgFwGkC.js";import"./iframe-DNhJcKOc.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-D_N49W1_.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D0y5cQqF.js";import"./utils-DitHaya_.js";import"./useLocalizedStringFormatter-D0VL0RZM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-BaTidnAf.js";import"./useFocusRing-jIyEUab9.js";import"./index-uE8jHaBb.js";import"./index-DqiuFa4V.js";import"./useFormValidation-D3efBGHS.js";import"./useField-4G7cpEBd.js";import"./Button-B6wJ7DBH.js";import"./Hidden-C7LJEloq.js";import"./useLabels-DTr_W66W.js";import"./useButton-Dab2YggW.js";import"./search-BfgL2AiF.js";import"./createLucideIcon-BWOE9bS1.js";import"./Button-9v9ZA1Mg.js";import"./Button.module-CcWMkJAG.js";import"./x--To9OQRO.js";import"./useLocalizedStringFormatter-BIKhWhhZ.js";import"./FieldError-DtvuMCyb.js";import"./Text-CVNupFde.js";import"./Text-Dm8XbzGN.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
