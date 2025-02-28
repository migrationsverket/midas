import{T as O}from"./TextField-Cj1V0cIX.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Form-Cq4QZx_r.js";import"./useFocusable-DTLHoeQe.js";import"./clsx-B-dksMZM.js";import"./Text-BorP-jFP.js";import"./useFormValidation-D_zB_ZT8.js";import"./Hidden-D9yAbrAR.js";import"./index-cpIEhwLo.js";import"./Label-B23VYN9V.js";import"./TextField.module-BSzw7ps9.js";import"./useControlledState-DGyHFLi9.js";import"./useField-lqkOjd2l.js";import"./useLabels-Dt0KIlgT.js";import"./Button-k3vfbwe-.js";import"./Button-DlxIrWB_.js";const er={component:O,title:"Components/TextField",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"},type:{options:["password","text","email"],control:{type:"select"}}}},r={args:{label:"Label",description:"Description"}},e={args:{label:"Enter Password",type:"password"}},s={args:{...r.args,isInvalid:!0,errorMessage:"Fel i valideringen"}},a={args:{...r.args,isRequired:!0}},o={args:{...r.args,isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},n={args:{...r.args,validationType:"ssn",label:"Personnummer",description:void 0,errorMessage:"Fel format för ett personnummer",maxLength:12}},t={args:{...r.args,validationType:"dossnr",label:"Dossiernummer",description:void 0,errorMessage:"Fel format för ett dossiernummer"}},i={args:{...r.args,maxLength:50}},m={args:{...r.args,showCounter:!0}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,u,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Enter Password',
    type: 'password'
  }
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,b,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Fel i valideringen'
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var P,h,w;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isRequired: true
  }
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var x,D,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  },
  parameters: {
    a11y: {
      element: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  }
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var v,F,L;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(T=t.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var R,q,E;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxLength: 50
  }
}`,...(E=(q=i.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var k,I,N;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const sr=["Primary","Password","NotValid","Required","Disabled","Personnummer","Dossnr","MaxLength","ShowCounter"];export{o as Disabled,t as Dossnr,i as MaxLength,s as NotValid,e as Password,n as Personnummer,r as Primary,a as Required,m as ShowCounter,sr as __namedExportsOrder,er as default};
