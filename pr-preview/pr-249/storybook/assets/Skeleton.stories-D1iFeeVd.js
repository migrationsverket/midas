import{j as k}from"./jsx-runtime-DtgEGaVE.js";import{c as S}from"./clsx-B-dksMZM.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const R="_skeleton_1ywvl_11",T="_text_1ywvl_16",b="_circle_1ywvl_21",q="_wave_1ywvl_25",n={skeleton:R,text:T,circle:b,wave:q},x=({variant:f="rectangular",width:y,height:_,animation:s})=>k.jsx("div",{className:S(n.skeleton,n[f],s&&n[s]),style:{width:y,height:_}});x.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'circle' | 'rectangular'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'rectangular'"}]},description:"",defaultValue:{value:"'rectangular'",computed:!1}},animation:{required:!0,tsType:{name:"union",raw:"'wave' | false",elements:[{name:"literal",value:"'wave'"},{name:"literal",value:"false"}]},description:""}}};const E={component:x,title:"Components/Skeleton",tags:["autodocs"],args:{variant:"rectangular"},argTypes:{variant:{options:["rectangular","circle"],control:{type:"radio"}},width:{type:"string"},height:{type:"string"},animation:{options:[!1,"wave"],control:{type:"radio"},defaultValue:!1}}},e={args:{variant:"rectangular",width:"100px",height:"40px"}},a={args:{variant:"circle",width:"50px",height:"50px"}},r={args:{...e.args,animation:!1}},t={args:{...e.args,animation:"wave"}};var o,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px'
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px',
    height: '50px'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Rectangular.args,
    animation: false
  }
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var v,w,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Rectangular.args,
    animation: 'wave'
  }
}`,...(h=(w=t.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const V=["Rectangular","Circle","NoAnimation","Wave"];export{a as Circle,r as NoAnimation,e as Rectangular,t as Wave,V as __namedExportsOrder,E as default};
