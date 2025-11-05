import{j as l,l as q}from"./iframe-BNPU2RD9.js";import{c as R}from"./clsx-Ciqy0D92.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";const V="_skeleton_og9n9_11",z="_circle_og9n9_25",I="_wave_og9n9_30",U="_onLayer01_og9n9_54",n={skeleton:V,circle:z,wave:I,onLayer01:U},r=({variant:e="rectangle",width:A,height:c,isAnimated:C=!0,className:L,style:N,isOnLayer01:O,...j})=>(e==="circle"&&c!==void 0&&console.warn("Height is not allowed when using circle, control size with width"),l.jsx("div",{className:R(n.skeleton,n[e],C&&n.wave,O&&n.onLayer01,L),style:{width:A,height:c,...N},...j}));try{r.displayName="Skeleton",r.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units",name:"width",required:!1,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units",name:"height",required:!1,type:{name:"Height<string | number>"}},variant:{defaultValue:{value:"rectangle"},description:"Circular or rectangular Skeleton component. When using circle, only `width` is allowed to control size.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'}]}},isAnimated:{defaultValue:{value:"true"},description:"Displays the skeleton component with a wave animation",name:"isAnimated",required:!1,type:{name:"boolean"}},isOnLayer01:{defaultValue:{value:"false"},description:"If skeleton is on a layer01 background light-dark( #f2f2f2, #262626)",name:"isOnLayer01",required:!1,type:{name:"boolean"}}}}}catch{}const H={component:r,title:"Components/Skeleton",tags:["autodocs"],args:{variant:"rectangle"},argTypes:{isAnimated:{options:[!0,!1],control:{type:"radio"}}},render:e=>l.jsx(r,{...e,"data-testid":"skeleton"})},a={args:{width:"100px",height:"40px"}},t={args:{variant:"circle",width:"50px"}},s={args:{...a.args,isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  height="40px"
  isAnimated={false}
  variant="rectangle"
  width="100px"
/>`}}}},o={args:{...a.args,isOnLayer01:!0},render:e=>l.jsx("div",{style:{backgroundColor:q,padding:"1rem"},children:l.jsx(r,{...e,"data-testid":"skeleton"})})},i={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{width:"100px",height:"40px",className:"derp",style:{verticalAlign:"bottom"}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    width: '100px',
    height: '40px'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px'
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,v,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
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
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var f,w,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    isOnLayer01: true
  },
  render: args => <div style={{
    backgroundColor: variables.layer01Base,
    padding: '1rem'
  }}>
      <Skeleton {...args} data-testid='skeleton' />
    </div>
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var _,k,b;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    width: '100px',
    height: '40px',
    className: 'derp',
    style: {
      verticalAlign: 'bottom'
    }
  }
}`,...(b=(k=i.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const T=["Rectangle","Circle","NoAnimation","IsOnLayer01","DS1191"];export{t as Circle,i as DS1191,o as IsOnLayer01,s as NoAnimation,a as Rectangle,T as __namedExportsOrder,H as default};
