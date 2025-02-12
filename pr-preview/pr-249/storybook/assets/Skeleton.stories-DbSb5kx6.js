import{j as b}from"./jsx-runtime-DtgEGaVE.js";import{c as N}from"./clsx-B-dksMZM.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const j="_skeleton_1lyqd_25",C="_text_1lyqd_31",R="_circle_1lyqd_36",A="_wave_1lyqd_41",E="_pulse_1lyqd_45",s={skeleton:j,text:C,circle:R,wave:A,pulse:E},q=({variant:S="text",width:k,height:T,animation:o="wave"})=>b.jsx("div",{className:N(s.skeleton,s[S],o&&s[o]),style:{width:k,height:T}});q.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circle' | 'rectangular'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'rectangular'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | false",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"false"}]},description:"",defaultValue:{value:"'wave'",computed:!1}}}};const z={component:q,title:"Components/Skeleton",tags:["autodocs"],argTypes:{variant:{options:["text","circle","rectangular"],control:{type:"radio"}},width:{type:"string"},height:{type:"string"},animation:{options:["wave","pulse",!1],control:{type:"radio"}}}},e={args:{variant:"text",width:"100%",height:"30px"}},a={args:{variant:"circle",width:"50px",height:"50px"}},t={args:{variant:"rectangular",width:"100px",height:"40px"}},r={args:{variant:"text",animation:!1}},n={args:{variant:"text",animation:"pulse"}};var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '100%',
    height: '30px'
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px',
    height: '50px'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,g,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px'
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,h,w;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    animation: false
  }
}`,...(w=(h=r.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var _,f,y;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    animation: 'pulse'
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const B=["Text","Circle","Rectangular","NoAnimation","Pulse"];export{a as Circle,r as NoAnimation,n as Pulse,t as Rectangular,e as Text,B as __namedExportsOrder,z as default};
