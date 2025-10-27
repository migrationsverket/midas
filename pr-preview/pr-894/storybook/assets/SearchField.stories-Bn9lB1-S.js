import{S as f}from"./SearchField-B9alhvv2.js";import"./iframe-DHe7O3YB.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-Ddb2XBAw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cr1hZmrx.js";import"./utils-uG4DrbYs.js";import"./useLocalizedStringFormatter-s0APVaC7.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-ClorvVl6.js";import"./useFocusRing-DNdg1RO0.js";import"./index-BpDGib3c.js";import"./index-BzXfAI-e.js";import"./useFormValidation-D5dvEuW7.js";import"./useField-D9UztZcR.js";import"./Button-BQbFjbVy.js";import"./Hidden-BwKN-Ct7.js";import"./useLabels-ByK8mPta.js";import"./useButton-CTl0n0ca.js";import"./search-CeoLU7qE.js";import"./createLucideIcon-BLSjYB_Y.js";import"./Button-zyoNupAk.js";import"./Button.module-CcWMkJAG.js";import"./x-DcZTwviR.js";import"./useLocalizedStringFormatter-DhR4sC5N.js";import"./FieldError-DxPlW7kP.js";import"./Text-fzIvjG6X.js";import"./Text-BWJyzLHL.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
