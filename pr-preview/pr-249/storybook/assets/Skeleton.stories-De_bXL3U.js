import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{c as W}from"./clsx-B-dksMZM.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const I="_skeleton_1wbdq_25",O="_text_1wbdq_30",z="_circle_1wbdq_35",B="_wave_1wbdq_39",D="_pulse_1wbdq_45",F="_h1_1wbdq_50",G="_h2_1wbdq_54",J="_h3_1wbdq_58",K="_h4_1wbdq_62",L="_h5_1wbdq_66",M="_h6_1wbdq_70",l={skeleton:I,text:O,circle:z,wave:B,pulse:D,h1:F,h2:G,h3:J,h4:K,h5:L,h6:M},a=({variant:h="text",width:E,height:P,animation:d})=>{const V=["h1","h2","h3","h4","h5","h6"].includes(h);return e.jsx("div",{className:W(l.skeleton,l[h],d?l[d]:""),style:{width:E,...V?{}:{height:P}}})};a.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'text'
| 'circle'
| 'rectangular'
| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'`,elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave'",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"}]},description:""}}};const Z={component:a,title:"Components/Skeleton",tags:["autodocs"],argTypes:{variant:{options:["text","circle","rectangular","h1","h2","h3","h4","h5","h6"],control:{type:"radio"}},width:{type:"string"},height:{type:"string"},animation:{options:[!1,"pulse","wave"],control:{type:"radio"}}}},t={args:{variant:"text",width:"100%",height:"40px"}},r={render:()=>e.jsxs("div",{children:[e.jsx(a,{variant:"h1",width:"50%"}),e.jsx(a,{variant:"h2",width:"60%"}),e.jsx(a,{variant:"h3",width:"70%"}),e.jsx(a,{variant:"h4",width:"80%"}),e.jsx(a,{variant:"h5",width:"90%"}),e.jsx(a,{variant:"h6",width:"100%"})]})},n={args:{variant:"circle",width:"50px",height:"50px"}},s={args:{variant:"rectangular",width:"100px",height:"40px"}},i={args:{variant:"text"}},o={args:{variant:"text",animation:"pulse"}},c={args:{variant:"text",animation:"wave"}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '100%',
    height: '40px'
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,g,w;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div>
      <Skeleton variant='h1' width='50%' />
      <Skeleton variant='h2' width='60%' />
      <Skeleton variant='h3' width='70%' />
      <Skeleton variant='h4' width='80%' />
      <Skeleton variant='h5' width='90%' />
      <Skeleton variant='h6' width='100%' />
    </div>
}`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var x,_,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px',
    height: '50px'
  }
}`,...(S=(_=n.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var b,q,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px'
  }
}`,...(k=(q=s.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var y,f,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'text'
  }
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var T,N,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    animation: 'pulse'
  }
}`,...(C=(N=o.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var H,R,A;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    animation: 'wave'
  }
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const $=["Text","Headings","Circle","Rectangular","NoAnimation","Pulse","Wave"];export{n as Circle,r as Headings,i as NoAnimation,o as Pulse,s as Rectangular,t as Text,c as Wave,$ as __namedExportsOrder,Z as default};
