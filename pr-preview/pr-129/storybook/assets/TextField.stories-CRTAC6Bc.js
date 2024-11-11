import{T}from"./TextField-CGuP3PZF.js";import"./jsx-runtime-CfatFE5O.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Form-BsnM7wIB.js";import"./useFocusable-B5I9Mbqb.js";import"./index-ZuzByk-F.js";import"./clsx-B-dksMZM.js";import"./Text-DQL_qUAc.js";import"./useControlledState-D4qbXjzs.js";import"./Hidden-Gy3GO5dR.js";import"./Button-BxwB_ABT.js";import"./Button-DXFpw2KU.js";import"./triangle-alert-BtsNBhJc.js";import"./createLucideIcon-DQK9Z80p.js";const z={component:T,title:"Components/TextField",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"},type:{options:["password","text","email"],control:{type:"select"}}}},r={args:{label:"Label",description:"Description"}},e={args:{label:"Enter Password",type:"password"}},s={args:{...r.args,isInvalid:!0,errorMessage:"Fel i valideringen"}},a={args:{...r.args,isRequired:!0}},o={args:{...r.args,isDisabled:!0}},t={args:{...r.args,validationType:"ssn",label:"Personnummer",description:void 0,errorMessage:"Fel format för ett personnummer"}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Enter Password',
    type: 'password'
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Fel i valideringen'
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,P,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isRequired: true
  }
}`,...(b=(P=a.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var f,v,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var D,F,S;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    validationType: 'ssn',
    label: 'Personnummer',
    description: undefined,
    errorMessage: \`Fel format för ett personnummer\`
  }
}`,...(S=(F=t.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const A=["Primary","Password","NotValid","Required","Disabled","Personnummer"];export{o as Disabled,s as NotValid,e as Password,t as Personnummer,r as Primary,a as Required,A as __namedExportsOrder,z as default};
