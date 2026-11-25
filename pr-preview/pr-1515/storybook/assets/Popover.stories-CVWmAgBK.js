import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{a as t,t as n}from"./Dialog-Du2oJ5x9.js";import{n as r,t as i}from"./Button-BEAPWu_s.js";import{n as a,t as o}from"./save-BrHeRl4A.js";import{n as s,t as c}from"./Heading-BJcDtT87.js";import{n as l,t as u}from"./Popover-C70kwe9l.js";import{n as d,t as f}from"./Text-DFLbG3Dt.js";import{n as p}from"./iframe-CLQWpvef.js";var m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{a(),l(),t(),s(),d(),r(),m=p(),h={component:u,subcomponents:{DialogTrigger:n},title:`Components/Popover`,tags:[`autodocs`],parameters:{layout:`centered`}},g=e=>({...e,decorators:[e=>(0,m.jsx)(`div`,{style:{padding:`8rem 0`,display:`flex`,justifyContent:`center`},children:(0,m.jsx)(e,{})})],render:e=>(0,m.jsxs)(n,{defaultOpen:!0,children:[(0,m.jsx)(i,{variant:`icon`,"aria-label":`Spara`,children:(0,m.jsx)(o,{})}),(0,m.jsx)(u,{...e})]})}),_={args:{children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,m.jsx)(c,{style:{marginBottom:`0.5rem`},children:`Info`}),(0,m.jsx)(f,{children:`Genom att spara detta går det ej att ta bort`})]})},render:e=>(0,m.jsxs)(n,{children:[(0,m.jsx)(i,{variant:`icon`,"aria-label":`Spara`,children:(0,m.jsx)(o,{})}),(0,m.jsx)(u,{...e})]})},v={args:{placement:`top`,children:`Spara`},render:e=>(0,m.jsxs)(n,{children:[(0,m.jsx)(i,{variant:`icon`,"aria-label":`Spara`,"data-testid":`popover-placement-trigger`,children:(0,m.jsx)(o,{})}),(0,m.jsx)(u,{"data-testid":`popover-placement`,...e})]})},y={...g(_),tags:[`!dev`,`!autodocs`]},b={...g(v),tags:[`!dev`,`!autodocs`]},x={args:{isNonModal:!0,placement:`top`,children:(0,m.jsx)(f,{children:`Det går inte att ångra.`})},tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{indexPreview:{fit:!1}},render:e=>(0,m.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,paddingTop:`3.5rem`,width:`18rem`},children:(0,m.jsxs)(n,{defaultOpen:!0,children:[(0,m.jsx)(i,{variant:`icon`,"aria-label":`Spara`,children:(0,m.jsx)(o,{})}),(0,m.jsx)(u,{...e})]})})},S=[`Primary`,`Placement`,`PrimaryOpen`,`PlacementOpen`,`Preview`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <Heading style={{
        marginBottom: '0.5rem'
      }}>Info</Heading>
        <Text>Genom att spara detta går det ej att ta bort</Text>
      </div>
  },
  render: args => <DialogTrigger>
      <Button variant='icon' aria-label='Spara'>
        <Save />
      </Button>
      <Popover {...args} />
    </DialogTrigger>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    children: 'Spara'
  },
  render: args => <DialogTrigger>
      <Button variant='icon' aria-label='Spara' data-testid='popover-placement-trigger'>
        <Save />
      </Button>
      <Popover data-testid='popover-placement' {...args} />
    </DialogTrigger>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...open(Primary),
  tags: ['!dev', '!autodocs']
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...open(Placement),
  tags: ['!dev', '!autodocs']
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isNonModal: true,
    placement: 'top',
    children: <Text>Det går inte att ångra.</Text>
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  // React Aria positions the popover from unscaled coordinates
  parameters: {
    indexPreview: {
      fit: false
    }
  },
  render: args =>
  // Overlays portal into the preview, so it needs room for the popover
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '3.5rem',
    width: '18rem'
  }}>
      <DialogTrigger defaultOpen>
        <Button variant='icon' aria-label='Spara'>
          <Save />
        </Button>
        <Popover {...args} />
      </DialogTrigger>
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Shown on the components index in the docs, hidden from Storybook`,...x.parameters?.docs?.description}}}})))()}C();export{v as Placement,b as PlacementOpen,x as Preview,_ as Primary,y as PrimaryOpen,S as __namedExportsOrder,h as default};