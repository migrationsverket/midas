import{T as I}from"./TextField-tKoL8exH.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Form-BFUD2BQV.js";import"./useFocusable-l7NaYEdB.js";import"./clsx-B-dksMZM.js";import"./Text-Dyiz11Ec.js";import"./Input-BPDe37i3.js";import"./useControlledState-DGyHFLi9.js";import"./useField-Cmo2p-9r.js";import"./Hidden-CwiKxbZj.js";import"./index-i7ZvCR4f.js";import"./useLabels-CDoWwmLU.js";import"./TextField-BiaSnfe4.js";import"./TextField.module-D5Tnj0hv.js";import"./Button-CS2ZwkSb.js";import"./Button-CcMfRhGg.js";const Y={component:I,title:"Components/TextField",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"},type:{options:["password","text","email"],control:{type:"select"}}}},r={args:{label:"Label",description:"Description"}},e={args:{label:"Enter Password",type:"password"}},s={args:{...r.args,isInvalid:!0,errorMessage:"Fel i valideringen"}},a={args:{...r.args,isRequired:!0}},o={args:{...r.args,isDisabled:!0}},t={args:{...r.args,validationType:"ssn",label:"Personnummer",description:void 0,errorMessage:"Fel format för ett personnummer",maxCharacters:12}},n={args:{...r.args,maxCharacters:50}},i={args:{...r.args,showCounter:!0}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Enter Password',
    type: 'password'
  }
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,y,P;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Fel i valideringen'
  }
}`,...(P=(y=s.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var b,w,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isRequired: true
  }
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var C,h,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,v,D;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    validationType: 'ssn',
    label: 'Personnummer',
    description: undefined,
    errorMessage: \`Fel format för ett personnummer\`,
    maxCharacters: 12
  }
}`,...(D=(v=t.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var F,M,T;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxCharacters: 50
  }
}`,...(T=(M=n.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var q,E,R;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const Z=["Primary","Password","NotValid","Required","Disabled","Personnummer","MaxCharacters","ShowCounter"];export{o as Disabled,n as MaxCharacters,s as NotValid,e as Password,t as Personnummer,r as Primary,a as Required,i as ShowCounter,Z as __namedExportsOrder,Y as default};
