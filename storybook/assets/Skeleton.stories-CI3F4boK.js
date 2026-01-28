import{j as o,l as c}from"./iframe-CiqJOzxF.js";import{S as i}from"./Skeleton-DN_Mdzfk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";const u={component:i,title:"Components/Skeleton",tags:["autodocs","!snapshot"],args:{variant:"rectangle"},argTypes:{isAnimated:{options:[!0,!1],control:{type:"radio"}}},render:n=>o.jsx(i,{...n,"data-testid":"skeleton"})},e={args:{width:"100px",height:"40px"}},a={args:{variant:"circle",width:"50px"}},r={args:{...e.args,isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  height="40px"
  isAnimated={false}
  variant="rectangle"
  width="100px"
/>`}}}},s={args:{...e.args,isOnLayer01:!0},render:n=>o.jsx("div",{style:{backgroundColor:c,padding:"1rem"},children:o.jsx(i,{...n,"data-testid":"skeleton"})})},t={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{width:"100px",height:"40px",className:"derp",style:{verticalAlign:"bottom"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    width: '100px',
    height: '40px'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const h=["Rectangle","Circle","NoAnimation","IsOnLayer01","DS1191"];export{a as Circle,t as DS1191,s as IsOnLayer01,r as NoAnimation,e as Rectangle,h as __namedExportsOrder,u as default};
