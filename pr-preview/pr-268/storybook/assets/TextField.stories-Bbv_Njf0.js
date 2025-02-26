import{T as _}from"./TextField-Cjoe213B.js";import"./jsx-runtime-CBDCb4rg.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Form-3nrIbYVr.js";import"./useFocusable-B8HhqQIl.js";import"./clsx-B-dksMZM.js";import"./Text-Bxg5Zhzp.js";import"./TextField.module-DSYGJTmY.js";import"./useControlledState-BgxdDqm0.js";import"./useField-Dt29Lb0W.js";import"./Hidden-C-kiqh_I.js";import"./index-D2jEcJry.js";import"./useLabels-BiAlD12e.js";import"./Button-9KeTfxY-.js";import"./Button-ojkDv_BK.js";const $={component:_,title:"Components/TextField",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"},type:{options:["password","text","email"],control:{type:"select"}}}},r={args:{label:"Label",description:"Description"}},e={args:{label:"Enter Password",type:"password"}},s={args:{...r.args,isInvalid:!0,errorMessage:"Fel i valideringen"}},a={args:{...r.args,isRequired:!0}},o={args:{...r.args,isDisabled:!0}},n={args:{...r.args,validationType:"ssn",label:"Personnummer",description:void 0,errorMessage:"Fel format för ett personnummer",maxLength:12}},t={args:{...r.args,validationType:"dossnr",label:"Dossiernummer",description:void 0,errorMessage:"Fel format för ett dossiernummer"}},i={args:{...r.args,maxLength:50}},m={args:{...r.args,showCounter:!0}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,u,l;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Enter Password',
    type: 'password'
  }
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var y,P,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Fel i valideringen'
  }
}`,...(b=(P=s.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var f,w,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isRequired: true
  }
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var S,h,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var D,F,L;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    validationType: 'ssn',
    label: 'Personnummer',
    description: undefined,
    errorMessage: \`Fel format för ett personnummer\`,
    maxLength: 12
  }
}`,...(L=(F=n.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,T,C;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    validationType: 'dossnr',
    label: 'Dossiernummer',
    description: undefined,
    errorMessage: \`Fel format för ett dossiernummer\`
  }
}`,...(C=(T=t.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var q,E,R;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxLength: 50
  }
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var I,N,V;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const rr=["Primary","Password","NotValid","Required","Disabled","Personnummer","Dossnr","MaxLength","ShowCounter"];export{o as Disabled,t as Dossnr,i as MaxLength,s as NotValid,e as Password,n as Personnummer,r as Primary,a as Required,m as ShowCounter,rr as __namedExportsOrder,$ as default};
