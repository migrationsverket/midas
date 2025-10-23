import{j as g,v as k}from"./iframe-CcqQFNZ4.js";import{c as w}from"./clsx-Ciqy0D92.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-B-dksMZM.js";const x="_skeleton_og9n9_11",S="_circle_og9n9_25",_="_wave_og9n9_30",f="_onLayer01_og9n9_54",a={skeleton:x,circle:S,wave:_,onLayer01:f},r=({variant:e="rectangle",width:t,height:o,isAnimated:m=!0,className:y,style:v,isOnLayer01:u,...h})=>(e==="circle"&&o!==void 0&&console.warn("Height is not allowed when using circle, control size with width"),g.jsx("div",{className:w(a.skeleton,a[e],m&&a.wave,u&&a.onLayer01,y),style:{width:t,height:o,...v},...h}));try{r.displayName="Skeleton",r.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units",name:"width",required:!1,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units",name:"height",required:!1,type:{name:"Height<string | number>"}},variant:{defaultValue:{value:"rectangle"},description:"Circular or rectangular Skeleton component. When using circle, only `width` is allowed to control size.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'}]}},isAnimated:{defaultValue:{value:"true"},description:"Displays the skeleton component with a wave animation",name:"isAnimated",required:!1,type:{name:"boolean"}},isOnLayer01:{defaultValue:{value:"false"},description:"If skeleton is on a layer01 background light-dark( #f2f2f2, #262626)",name:"isOnLayer01",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:n}=__STORYBOOK_MODULE_TEST__,{layer01Base:C}=k,T={component:r,title:"Components/Skeleton",tags:["autodocs"],args:{variant:"rectangle"},argTypes:{isAnimated:{options:[!0,!1],control:{type:"radio"}}},render:e=>g.jsx(r,{...e,"data-testid":"skeleton"})},s={args:{width:"100px",height:"40px"},play:async({canvas:e})=>{const t=e.getByTestId("skeleton");await n(t).toHaveClass(a.wave,a.skeleton)}},l={args:{variant:"circle",width:"50px"},play:async({canvas:e})=>{const t=e.getByTestId("skeleton");await n(t).toHaveClass(a.wave,a.circle)}},c={args:{...s.args,isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  height="40px"
  isAnimated={false}
  variant="rectangle"
  width="100px"
/>`}}},play:async({canvas:e})=>{const t=e.getByTestId("skeleton");await n(t).not.toHaveClass(a.wave)}},i={args:{...s.args,isAnimated:!0},play:async({canvas:e})=>{const t=e.getByTestId("skeleton");await n(t).toHaveClass(a.wave)}},d={args:{...s.args,isOnLayer01:!0},render:e=>g.jsx("div",{style:{backgroundColor:C,padding:"1rem"},children:g.jsx(r,{...e,"data-testid":"skeleton"})}),play:async({canvas:e})=>{const t=e.getByTestId("skeleton");await n(t).toHaveClass(a.wave,a.onLayer01)}},p={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{width:"100px",height:"40px",className:"derp",style:{verticalAlign:"bottom"}},play:async({canvas:e,step:t})=>{await t("It should merge provided className and style props",async()=>{const o=e.getByTestId("skeleton");await n(o).toHaveClass(a.wave,a.skeleton,"derp"),await n(o).toHaveStyle({width:"100px",height:"40px",verticalAlign:"bottom"})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    isOnLayer01: true
  },
  render: args => <div style={{
    backgroundColor: layer01Base,
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const B=["Rectangle","Circle","NoAnimation","Animation","IsOnLayer01","DS1191"];export{i as Animation,l as Circle,p as DS1191,d as IsOnLayer01,c as NoAnimation,s as Rectangle,B as __namedExportsOrder,T as default};
