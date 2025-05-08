import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{c as q}from"./clsx-B-dksMZM.js";import{e as p}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const N='"../theme/tokens.css"',W="_skeleton_1fh0h_14",E="_circle_1fh0h_24",U="_wave_1fh0h_29",t={tokens:N,"--field-skeleton":"light-dark(#f2f2f2, #262626)","--background-inverse":"light-dark(#171717, #f2f2f2)",skeleton:W,circle:E,wave:U},n=({variant:e="rectangle",width:a,height:g,animation:b="wave",isAnimated:j=!0,...V})=>(e==="circle"&&g!==void 0&&console.warn("Height is not allowed when using circle, control size with width"),e==="rectangular"&&console.warn("Rectangular will be deprecated since v8.4.0 - Use Rectangle instead. This will be removed in future versions"),r.jsx("div",{...V,className:q(t.skeleton,t[e],j&&b&&t.wave),style:{width:a,height:g}}));try{n.displayName="Skeleton",n.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"Height<string | number>"}},variant:{defaultValue:{value:"rectangle"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'},{value:'"rectangular"'}]}},animation:{defaultValue:{value:"wave"},description:"@deprecated since v8.4.0 - Use 'isAnimated' instead. This will be removed in future versions.",name:"animation",required:!1,type:{name:'false | "wave"'}},isAnimated:{defaultValue:{value:"true"},description:"",name:"isAnimated",required:!1,type:{name:"boolean"}}}}}catch{}const J={component:n,title:"Components/Skeleton",tags:["autodocs"],args:{variant:"rectangle"},argTypes:{variant:{options:["circle","rectangle","rectangular"],control:{type:"radio"}},width:{type:"string"},height:{type:"string"},animation:{options:["wave",!1],control:{type:"radio"},defaultValue:"wave"},isAnimated:{options:[!0,!1],control:{type:"radio"},defaultValue:!0}}},s={args:{variant:"rectangle",width:"100px",height:"40px"},render:e=>r.jsx(n,{...e,"data-testid":"skeleton"}),play:async({canvas:e})=>{const a=e.getByTestId("skeleton");await p(a).toHaveClass(t.wave,t.skeleton)}},o={args:{variant:"circle",width:"50px"},render:e=>r.jsx(n,{...e,"data-testid":"skeleton"}),play:async({canvas:e})=>{const a=e.getByTestId("skeleton");await p(a).toHaveClass(t.wave,t.circle)}},i={args:{variant:"rectangular",width:"100px",height:"40px"}},l={args:{...s.args,isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton 
  height="40px" 
  isAnimated={false} 
  variant="rectangle" 
  width="100px"
/>`}}},render:e=>r.jsx(n,{...e,"data-testid":"skeleton"}),play:async({canvas:e})=>{const a=e.getByTestId("skeleton");await p(a).not.toHaveClass(t.wave)}},c={args:{...s.args,isAnimated:!0},render:e=>r.jsx(n,{...e,"data-testid":"skeleton"}),play:async({canvas:e})=>{const a=e.getByTestId("skeleton");await p(a).toHaveClass(t.wave)}},d={args:{...s.args,animation:"wave"}};var m,u,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'rectangle',
    width: '100px',
    height: '40px'
  },
  render: args => <Skeleton {...args} data-testid='skeleton' />,
  play: async ({
    canvas
  }) => {
    const skeleton = canvas.getByTestId('skeleton');
    await expect(skeleton).toHaveClass(styles.wave, styles.skeleton);
  }
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var k,w,y;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px'
  },
  render: args => <Skeleton {...args} data-testid='skeleton' />,
  play: async ({
    canvas
  }) => {
    const skeleton = canvas.getByTestId('skeleton');
    await expect(skeleton).toHaveClass(styles.wave, styles.circle);
  }
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var h,f,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px'
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var _,S,A;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
  },
  render: args => <Skeleton {...args} data-testid='skeleton' />,
  play: async ({
    canvas
  }) => {
    const skeleton = canvas.getByTestId('skeleton');
    await expect(skeleton).not.toHaveClass(styles.wave);
  }
}`,...(A=(S=l.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var C,T,H;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    isAnimated: true
  },
  render: args => <Skeleton {...args} data-testid='skeleton' />,
  play: async ({
    canvas
  }) => {
    const skeleton = canvas.getByTestId('skeleton');
    await expect(skeleton).toHaveClass(styles.wave);
  }
}`,...(H=(T=c.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var R,I,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    animation: 'wave'
  }
}`,...(B=(I=d.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const K=["Rectangle","Circle","Rectangular","NoAnimation","Animation","Wave"];export{c as Animation,o as Circle,l as NoAnimation,s as Rectangle,i as Rectangular,d as Wave,K as __namedExportsOrder,J as default};
