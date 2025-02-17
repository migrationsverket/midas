import{j as k}from"./jsx-runtime-DtgEGaVE.js";import{c as S}from"./clsx-B-dksMZM.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const R="_skeleton_1ddo2_11",T="_circle_1ddo2_21",b="_wave_1ddo2_26",t={skeleton:R,circle:T,wave:b},h=({variant:x="rectangular",width:_,height:y,animation:s="wave"})=>k.jsx("div",{className:S(t.skeleton,t[x],s&&t[s]),style:{width:_,height:y}});h.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'circle' | 'rectangular'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'rectangular'"}]},description:"",defaultValue:{value:"'rectangular'",computed:!1}},animation:{required:!1,tsType:{name:"union",raw:"'wave' | false",elements:[{name:"literal",value:"'wave'"},{name:"literal",value:"false"}]},description:"",defaultValue:{value:"'wave'",computed:!1}}}};const V={component:h,title:"Components/Skeleton",tags:["autodocs"],args:{variant:"rectangular"},argTypes:{variant:{options:["rectangular","circle"],control:{type:"radio"}},width:{type:"string"},height:{type:"string"},animation:{options:["wave",!1],control:{type:"radio"},defaultValue:!1}}},e={args:{variant:"rectangular",width:"100px",height:"40px"}},a={args:{variant:"circle",width:"50px",height:"50px"}},r={args:{...e.args,animation:!1}},n={args:{...e.args,animation:"wave"}};var o,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,d,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Rectangular.args,
    animation: false
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var v,w,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Rectangular.args,
    animation: 'wave'
  }
}`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const A=["Rectangular","Circle","NoAnimation","Wave"];export{a as Circle,r as NoAnimation,e as Rectangular,n as Wave,A as __namedExportsOrder,V as default};
