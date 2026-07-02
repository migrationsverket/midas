import{i as e}from"./preload-helper-CT_b8DTk.js";import{Za as t,qa as n,t as r}from"./iframe-DSNmiJ1R.js";import{n as i,t as a}from"./Skeleton-DaQpU8Wa.js";import{t as o}from"./TextField-CrMdZmUb.js";import{t as s}from"./textfield-Besgt899.js";var c,l,u,d,f,p,m,h,g;e((()=>{n(),i(),s(),c=r(),l={component:a,title:`Components/Skeleton/Form`,tags:[`autodocs`,`!snapshot`],args:{variant:`form`,width:`400px`},render:e=>(0,c.jsx)(a,{...e,"data-testid":`skeleton`})},u={args:{size:`large`}},d={args:{size:`medium`}},f={args:{size:`large`,isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},p={args:{size:`large`,isOnLayer01:!0},render:e=>(0,c.jsx)(`div`,{style:{backgroundColor:t,padding:`1rem`},children:(0,c.jsx)(a,{...e,"data-testid":`skeleton`})})},m={args:{size:`large`},render:e=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`},children:[(0,c.jsx)(a,{...e,"data-testid":`skeleton-1`}),(0,c.jsx)(a,{...e,"data-testid":`skeleton-2`}),(0,c.jsx)(a,{...e,"data-testid":`skeleton-3`})]})},h={tags:[`!autodocs`],render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`2rem`,alignItems:`flex-start`},children:[(0,c.jsxs)(`div`,{style:{flex:1},children:[(0,c.jsx)(`h3`,{style:{marginTop:0,fontSize:`1rem`,fontWeight:500},children:`Skeleton (Loading)`}),(0,c.jsx)(a,{variant:`form`,size:`large`})]}),(0,c.jsxs)(`div`,{style:{flex:1},children:[(0,c.jsx)(`h3`,{style:{marginTop:0,fontSize:`1rem`,fontWeight:500},children:`Actual TextField`}),(0,c.jsx)(o,{label:`Namn`,description:`Fyll i ditt fullständiga namn`})]})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isAnimated: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>\`
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isOnLayer01: true
  },
  render: args => <div style={{
    backgroundColor: variables.layer01Base,
    padding: '1rem'
  }}>
      <Skeleton {...args} data-testid='skeleton' />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Skeleton {...args} data-testid='skeleton-1' />
      <Skeleton {...args} data-testid='skeleton-2' />
      <Skeleton {...args} data-testid='skeleton-3' />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start'
  }}>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Skeleton (Loading)
        </h3>
        <Skeleton variant='form' size='large' />
      </div>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Actual TextField
        </h3>
        <TextField label='Namn' description='Fyll i ditt fullständiga namn' />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Large`,`Medium`,`NoAnimation`,`OnLayer01`,`Multiple`,`Comparison`]}))();export{h as Comparison,u as Large,d as Medium,m as Multiple,f as NoAnimation,p as OnLayer01,g as __namedExportsOrder,l as default};