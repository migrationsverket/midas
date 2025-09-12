import{j as g,s as j}from"./iframe-eYQXVo8G.js";import{c as q}from"./clsx-B-dksMZM.js";import"./preload-helper-Dp1pzeXC.js";const U="_skeleton_toauz_11",V="_circle_toauz_21",D="_wave_toauz_26",E="_onLayer01_toauz_50",a={skeleton:U,circle:V,wave:D,onLayer01:E},r=({variant:e="rectangle",width:t,height:o,isAnimated:L=!0,className:O,style:N,isOnLayer01:z,...R})=>(e==="circle"&&o!==void 0&&console.warn("Height is not allowed when using circle, control size with width"),g.jsx("div",{className:q(a.skeleton,a[e],L&&a.wave,z&&a.onLayer01,O),style:{width:t,height:o,...N},...R}));try{r.displayName="Skeleton",r.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units",name:"width",required:!1,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units",name:"height",required:!1,type:{name:"Height<string | number>"}},variant:{defaultValue:{value:"rectangle"},description:"Circular or rectangular Skeleton component. When using circle, only `width` is allowed to control size.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'}]}},isAnimated:{defaultValue:{value:"true"},description:"Displays the skeleton component with a wave animation",name:"isAnimated",required:!1,type:{name:"boolean"}},isOnLayer01:{defaultValue:{value:"false"},description:"If skeleton is on a layer01 background light-dark( #f2f2f2, #262626)",name:"isOnLayer01",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:n}=__STORYBOOK_MODULE_TEST__,Y={component:r,title:"Components/Skeleton",tags:["autodocs"],args:{variant:"rectangle"},argTypes:{isAnimated:{options:[!0,!1],control:{type:"radio"}}},render:e=>g.jsx(r,{...e,"data-testid":"skeleton"})},s={args:{width:"100px",height:"40px"},play:async({canvas:e})=>{const t=e.getByTestId("skeleton");await n(t).toHaveClass(a.wave,a.skeleton)}},l={args:{variant:"circle",width:"50px"},play:async({canvas:e})=>{const t=e.getByTestId("skeleton");await n(t).toHaveClass(a.wave,a.circle)}},c={args:{...s.args,isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  height="40px"
  isAnimated={false}
  variant="rectangle"
  width="100px"
/>`}}},play:async({canvas:e})=>{const t=e.getByTestId("skeleton");await n(t).not.toHaveClass(a.wave)}},i={args:{...s.args,isAnimated:!0},play:async({canvas:e})=>{const t=e.getByTestId("skeleton");await n(t).toHaveClass(a.wave)}},d={args:{...s.args,isOnLayer01:!0},render:e=>g.jsx("div",{style:{backgroundColor:j.layer01,padding:"1rem"},children:g.jsx(r,{...e,"data-testid":"skeleton"})}),play:async({canvas:e})=>{const t=e.getByTestId("skeleton");await n(t).toHaveClass(a.wave,a.onLayer01)}},p={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{width:"100px",height:"40px",className:"derp",style:{verticalAlign:"bottom"}},play:async({canvas:e,step:t})=>{await t("It should merge provided className and style props",async()=>{const o=e.getByTestId("skeleton");await n(o).toHaveClass(a.wave,a.skeleton,"derp"),await n(o).toHaveStyle({width:"100px",height:"40px",verticalAlign:"bottom"})})}};var m,y,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    width: '100px',
    height: '40px'
  },
  play: async ({
    canvas
  }) => {
    const skeleton = canvas.getByTestId('skeleton');
    await expect(skeleton).toHaveClass(styles.wave, styles.skeleton);
  }
}`,...(u=(y=s.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var v,k,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px'
  },
  play: async ({
    canvas
  }) => {
    const skeleton = canvas.getByTestId('skeleton');
    await expect(skeleton).toHaveClass(styles.wave, styles.circle);
  }
}`,...(h=(k=l.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var w,x,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
  play: async ({
    canvas
  }) => {
    const skeleton = canvas.getByTestId('skeleton');
    await expect(skeleton).not.toHaveClass(styles.wave);
  }
}`,...(S=(x=c.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var _,f,C;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    isAnimated: true
  },
  play: async ({
    canvas
  }) => {
    const skeleton = canvas.getByTestId('skeleton');
    await expect(skeleton).toHaveClass(styles.wave);
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var I,A,H;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    isOnLayer01: true
  },
  render: args => <div style={{
    backgroundColor: semantic.layer01,
    padding: '1rem'
  }}>
      <Skeleton {...args} data-testid='skeleton' />
    </div>,
  play: async ({
    canvas
  }) => {
    const skeleton = canvas.getByTestId('skeleton');
    await expect(skeleton).toHaveClass(styles.wave, styles.onLayer01);
  }
}`,...(H=(A=d.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var T,b,B;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should merge provided className and style props', async () => {
      const skeleton = canvas.getByTestId('skeleton');
      await expect(skeleton).toHaveClass(styles.wave, styles.skeleton, 'derp');
      await expect(skeleton).toHaveStyle({
        width: '100px',
        height: '40px',
        verticalAlign: 'bottom'
      });
    });
  }
}`,...(B=(b=p.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const F=["Rectangle","Circle","NoAnimation","Animation","IsOnLayer01","DS1191"];export{i as Animation,l as Circle,p as DS1191,d as IsOnLayer01,c as NoAnimation,s as Rectangle,F as __namedExportsOrder,Y as default};
