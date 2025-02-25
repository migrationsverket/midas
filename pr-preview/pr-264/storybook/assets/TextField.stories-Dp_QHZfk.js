import{T as R}from"./TextField-D8vIQn1i.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Form-l2PcAF26.js";import"./useFocusable-C3Tvsz8-.js";import"./clsx-B-dksMZM.js";import"./Text-BVfnoLK6.js";import"./Input-CgmTjY8Q.js";import"./useControlledState-DGyHFLi9.js";import"./useField-Cyo9MoZl.js";import"./Hidden-t2TOsKWR.js";import"./index-i7ZvCR4f.js";import"./useLabels-CtwdP7qT.js";import"./TextField-CY9k8hi9.js";import"./TextField.module-RvTXLpy1.js";import"./Button-Bv-pCHS0.js";import"./Button-QTphRx4x.js";const Y={component:R,title:"Components/TextField",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"},type:{options:["password","text","email"],control:{type:"select"}}}},r={args:{label:"Label",description:"Description"}},e={args:{label:"Enter Password",type:"password"}},s={args:{...r.args,isInvalid:!0,errorMessage:"Fel i valideringen"}},a={args:{...r.args,isRequired:!0}},o={args:{...r.args,isDisabled:!0}},t={args:{...r.args,validationType:"ssn",label:"Personnummer",description:void 0,errorMessage:"Fel format för ett personnummer",maxLength:12}},n={args:{...r.args,maxLength:50}},i={args:{...r.args,showCounter:!0}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,g,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Enter Password',
    type: 'password'
  }
}`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var l,y,P;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var h,S,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var L,v,D;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    validationType: 'ssn',
    label: 'Personnummer',
    description: undefined,
    errorMessage: \`Fel format för ett personnummer\`,
    maxLength: 12
  }
}`,...(D=(v=t.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var F,M,T;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxLength: 50
  }
}`,...(T=(M=n.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var C,q,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(E=(q=i.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const Z=["Primary","Password","NotValid","Required","Disabled","Personnummer","MaxLength","ShowCounter"];export{o as Disabled,n as MaxLength,s as NotValid,e as Password,t as Personnummer,r as Primary,a as Required,i as ShowCounter,Z as __namedExportsOrder,Y as default};
