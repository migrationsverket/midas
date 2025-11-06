import{S as f}from"./SearchField-DexTpLWP.js";import"./iframe-Cr4WfoQu.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-D_N49W1_.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CJTE2atU.js";import"./utils-DHqaSaah.js";import"./useLocalizedStringFormatter-DL8Gx4OI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-DiuIYfWW.js";import"./useFocusRing-A0Iejy3t.js";import"./index-ahcTeaoi.js";import"./index-Cl3XFRZD.js";import"./useFormValidation-C0n1puQ1.js";import"./useField-DNaD-tAF.js";import"./Button-CWNWBCLL.js";import"./Hidden-y5xVPkEo.js";import"./useLabels-D5cPIeJx.js";import"./useButton-Cn1nrHEi.js";import"./search-bnmIT2eK.js";import"./createLucideIcon-Dwgci-K1.js";import"./Button-DVboz95x.js";import"./Button.module-CcWMkJAG.js";import"./x-nKeG1E-Q.js";import"./useLocalizedStringFormatter-DM5L-bdE.js";import"./FieldError-DwFat6Pu.js";import"./Text-CLBerHO9.js";import"./Text-XRFpH-QD.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
