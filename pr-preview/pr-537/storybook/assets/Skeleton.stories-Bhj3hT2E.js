import{j as x}from"./jsx-runtime-DtgEGaVE.js";import{c as S}from"./clsx-B-dksMZM.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const N='"../theme/tokens.css"',R="_skeleton_1fh0h_14",V="_circle_1fh0h_24",q="_wave_1fh0h_29",s={tokens:N,"--field-skeleton":"light-dark(#f2f2f2, #262626)","--background-inverse":"light-dark(#171717, #f2f2f2)",skeleton:R,circle:V,wave:q},o=({variant:n="rectangle",width:k,height:i,animation:y="wave"})=>(n==="circle"&&i!==void 0&&console.warn("Height is not allowed when using circle, control size with width"),x.jsx("div",{className:S(s.skeleton,s[n],y&&s.wave),style:{width:k,height:i}}));try{o.displayName="Skeleton",o.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"Height<string | number>"}},variant:{defaultValue:{value:"rectangle"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'},{value:'"rectangular"'}]}},animation:{defaultValue:{value:"wave"},description:"",name:"animation",required:!1,type:{name:'false | "wave"'}}}}}catch{}const A={component:o,title:"Components/Skeleton",tags:["autodocs"],args:{variant:"rectangular"},argTypes:{variant:{options:["rectangular","circle","rectangle"],control:{type:"radio"}},width:{type:"string"},height:{type:"string"},animation:{options:["wave",!1],control:{type:"radio"},defaultValue:!1}}},e={args:{variant:"rectangular",width:"100px",height:"40px"}},a={args:{variant:"circle",width:"50px"}},r={args:{...e.args,animation:!1}},t={args:{...e.args,animation:"wave"}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,h,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Rectangular.args,
    animation: false
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,w,_;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Rectangular.args,
    animation: 'wave'
  }
}`,...(_=(w=t.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const E=["Rectangular","Circle","NoAnimation","Wave"];export{a as Circle,r as NoAnimation,e as Rectangular,t as Wave,E as __namedExportsOrder,A as default};
