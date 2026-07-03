import{i as e}from"./preload-helper-CT_b8DTk.js";import{Za as t,qa as n,t as r}from"./iframe-wIrQpvsR.js";import{n as i,t as a}from"./Skeleton-CqwRnMFI.js";var o,s,c,l,u,d,f,p;e((()=>{n(),i(),o=r(),s={component:a,title:`Components/Skeleton`,tags:[`autodocs`,`!snapshot`],args:{variant:`rectangle`},argTypes:{isAnimated:{options:[!0,!1],control:{type:`radio`}}},render:e=>(0,o.jsx)(a,{...e,"data-testid":`skeleton`})},c={args:{width:`100px`,height:`40px`}},l={args:{variant:`circle`,width:`50px`}},u={args:{...c.args,isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  height="40px"
  isAnimated={false}
  variant="rectangle"
  width="100px"
/>`}}}},d={args:{...c.args,isOnLayer01:!0},render:e=>(0,o.jsx)(`div`,{style:{backgroundColor:t,padding:`1rem`},children:(0,o.jsx)(a,{...e,"data-testid":`skeleton`})})},f={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{width:`100px`,height:`40px`,className:`derp`,style:{verticalAlign:`bottom`}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    width: '100px',
    height: '40px'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Rectangle`,`Circle`,`NoAnimation`,`IsOnLayer01`,`DS1191`]}))();export{l as Circle,f as DS1191,d as IsOnLayer01,u as NoAnimation,c as Rectangle,p as __namedExportsOrder,s as default};