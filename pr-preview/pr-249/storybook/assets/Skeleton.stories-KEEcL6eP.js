import{j as R}from"./jsx-runtime-DtgEGaVE.js";import{c as A}from"./clsx-B-dksMZM.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E="_skeleton_15ggw_25",P="_text_15ggw_30",W="_circle_15ggw_35",I="_wave_15ggw_39",O="_pulse_15ggw_45",o={skeleton:E,text:P,circle:W,wave:I,pulse:O},q=({variant:N="text",width:j,height:C,animation:i})=>R.jsx("div",{className:A(o.skeleton,o[N],i?o[i]:""),style:{width:j,height:C}});q.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circle' | 'rectangular'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'rectangular'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave'",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"}]},description:""}}};const F={component:q,title:"Components/Skeleton",tags:["autodocs"],argTypes:{variant:{options:["text","circle","rectangular"],control:{type:"radio"}},width:{type:"string"},height:{type:"string"},animation:{options:[!1,"pulse","wave"],control:{type:"radio"}}}},e={args:{variant:"text",width:"100%",height:"40px"}},a={args:{variant:"circle",width:"50px",height:"50px"}},t={args:{variant:"rectangular",width:"100px",height:"40px"}},r={args:{variant:"text"}},n={args:{variant:"text",animation:"pulse"}},s={args:{variant:"text",animation:"wave"}};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '100%',
    height: '40px'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px',
    height: '50px'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var d,x,v;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px'
  }
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,w,_;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'text'
  }
}`,...(_=(w=r.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var y,f,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    animation: 'pulse'
  }
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var k,T,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    animation: 'wave'
  }
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const G=["Text","Circle","Rectangular","NoAnimation","Pulse","Wave"];export{a as Circle,r as NoAnimation,n as Pulse,t as Rectangular,e as Text,s as Wave,G as __namedExportsOrder,F as default};
