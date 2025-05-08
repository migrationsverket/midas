import{j as C}from"./jsx-runtime-DtgEGaVE.js";import{c as T}from"./clsx-B-dksMZM.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const W='"../theme/tokens.css"',E="_skeleton_1fh0h_14",H="_circle_1fh0h_24",U="_wave_1fh0h_29",o={tokens:W,"--field-skeleton":"light-dark(#f2f2f2, #262626)","--background-inverse":"light-dark(#171717, #f2f2f2)",skeleton:E,circle:H,wave:U},c=({variant:a="rectangle",width:q,height:l,animation:N="wave",isAnimated:j})=>(a==="circle"&&l!==void 0&&console.warn("Height is not allowed when using circle, control size with width"),a==="rectangular"&&console.warn("Rectangular will be deprecated since v8.4.0 - Use Rectangle instead. This will be removed in future versions"),C.jsx("div",{className:T(o.skeleton,o[a],(j??N==="wave")&&o.wave),style:{width:q,height:l}}));try{c.displayName="Skeleton",c.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"Height<string | number>"}},variant:{defaultValue:{value:"rectangle"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'},{value:'"rectangular"'}]}},animation:{defaultValue:{value:"wave"},description:"@deprecated since v8.4.0 - Use 'isAnimated' instead. This will be removed in future versions.",name:"animation",required:!1,type:{name:'false | "wave"'}},isAnimated:{defaultValue:{value:"true"},description:"",name:"isAnimated",required:!1,type:{name:"boolean"}}}}}catch{}const D={component:c,title:"Components/Skeleton",tags:["autodocs"],args:{variant:"rectangle"},argTypes:{variant:{options:["circle","rectangle","rectangular"],control:{type:"radio"}},width:{type:"string"},height:{type:"string"},animation:{options:["wave",!1],control:{type:"radio"},defaultValue:"wave"},isAnimated:{options:[!0,!1],control:{type:"radio"},defaultValue:!0}}},e={args:{variant:"rectangle",width:"100px",height:"40px"}},r={args:{variant:"circle",width:"50px"}},n={args:{variant:"rectangular",width:"100px",height:"40px"}},t={args:{...e.args,animation:!1,isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton 
  height="40px" 
  isAnimated={false} 
  variant="rectangle" 
  width="100px"
/>`}}}},s={args:{...e.args,isAnimated:!0}},i={args:{...e.args,animation:"wave"}};var d,m,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'rectangle',
    width: '100px',
    height: '40px'
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px'
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,v,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px'
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,_,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    animation: false,
    isAnimated: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Skeleton 
  height="40px" 
  isAnimated={false} 
  variant="rectangle" 
  width="100px"
/>\`
      }
    }
  }
}`,...(k=(_=t.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var y,A,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    isAnimated: true
  }
}`,...(S=(A=s.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var R,b,V;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    animation: 'wave'
  }
}`,...(V=(b=i.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};const F=["Rectangle","Circle","Rectangular","NoAnimation","Animation","Wave"];export{s as Animation,r as Circle,t as NoAnimation,e as Rectangle,n as Rectangular,i as Wave,F as __namedExportsOrder,D as default};
