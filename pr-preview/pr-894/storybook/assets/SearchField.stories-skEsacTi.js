import{S as f}from"./SearchField-BL3aR9UC.js";import"./iframe-r0gqF4SQ.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-Ddb2XBAw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BUTkhZiu.js";import"./utils-DJbaWo92.js";import"./useLocalizedStringFormatter-kkAwSq4q.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-BC5zATCQ.js";import"./useFocusRing-Df-VPM0h.js";import"./index-aqPr6EPC.js";import"./index-aX3st589.js";import"./useFormValidation-Bh4ZG1w4.js";import"./useField-b5VWo8KH.js";import"./Button-DtL-XAG_.js";import"./Hidden-CBPjgJ0M.js";import"./useLabels-BOJYAo3Q.js";import"./useButton-BnPJwczl.js";import"./search-lIzBynuE.js";import"./createLucideIcon-BJGlkhiB.js";import"./Button-kvHvsmmz.js";import"./Button.module-CcWMkJAG.js";import"./x-Du0P0mnx.js";import"./useLocalizedStringFormatter-CDwLjk7_.js";import"./FieldError-Bl2737hg.js";import"./Text-BT1FJlh3.js";import"./Text-beiJ6BSj.js";const R={component:f,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:S=>S==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
