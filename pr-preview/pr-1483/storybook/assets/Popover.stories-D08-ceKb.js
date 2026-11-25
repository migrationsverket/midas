import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{a as t,t as n}from"./Dialog-C3XJ9M8b.js";import{n as r,t as i}from"./Button-BORe8cMn.js";import{n as a,t as o}from"./createLucideIcon-B8cGKaCi.js";import{n as s,t as c}from"./save-BrHeRl4A.js";import{n as l,t as u}from"./Popover-C-MM9PY0.js";import{n as d,t as f}from"./Text-BtQ0SKPm.js";import{n as p}from"./iframe-Cnh_7U61.js";var m,h;function g(){return(g=e((()=>{a(),m={name:`letter-h`,size:24,node:[[`path`,{d:`M18 20V4`,key:`o2hl4u`}],[`path`,{d:`M6 12H18`,key:`1fx1vx`}],[`path`,{d:`M6 20V4`,key:`1w1bmo`}]],aliases:[`heading`]},m.node,h=o(m)})))()}var _,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{g(),s(),l(),t(),d(),r(),_=p(),v={component:u,subcomponents:{DialogTrigger:n},title:`Components/Popover`,tags:[`autodocs`],parameters:{layout:`centered`}},y=e=>({...e,decorators:[e=>(0,_.jsx)(`div`,{style:{padding:`8rem 0`,display:`flex`,justifyContent:`center`},children:(0,_.jsx)(e,{})})],render:e=>(0,_.jsxs)(n,{defaultOpen:!0,children:[(0,_.jsx)(i,{variant:`icon`,"aria-label":`Spara`,children:(0,_.jsx)(c,{})}),(0,_.jsx)(u,{...e})]})}),b={args:{children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,_.jsx)(h,{style:{marginBottom:`0.5rem`},children:`Info`}),(0,_.jsx)(f,{children:`Genom att spara detta går det ej att ta bort`})]})},render:e=>(0,_.jsxs)(n,{children:[(0,_.jsx)(i,{variant:`icon`,"aria-label":`Spara`,children:(0,_.jsx)(c,{})}),(0,_.jsx)(u,{...e})]})},x={args:{placement:`top`,children:`Spara`},render:e=>(0,_.jsxs)(n,{children:[(0,_.jsx)(i,{variant:`icon`,"aria-label":`Spara`,"data-testid":`popover-placement-trigger`,children:(0,_.jsx)(c,{})}),(0,_.jsx)(u,{"data-testid":`popover-placement`,...e})]})},S={...y(b),tags:[`!dev`,`!autodocs`]},C={...y(x),tags:[`!dev`,`!autodocs`]},w={args:{isNonModal:!0,placement:`top`,children:(0,_.jsx)(f,{children:`Det går inte att ångra.`})},tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{indexPreview:{fit:!1}},render:e=>(0,_.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,paddingTop:`3.5rem`,width:`18rem`},children:(0,_.jsxs)(n,{defaultOpen:!0,children:[(0,_.jsx)(i,{variant:`icon`,"aria-label":`Spara`,children:(0,_.jsx)(c,{})}),(0,_.jsx)(u,{...e})]})})},T=[`Primary`,`Placement`,`PrimaryOpen`,`PlacementOpen`,`Preview`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...open(Primary),
  tags: ['!dev', '!autodocs']
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...open(Placement),
  tags: ['!dev', '!autodocs']
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Shown on the components index in the docs, hidden from Storybook`,...w.parameters?.docs?.description}}}})))()}E();export{x as Placement,C as PlacementOpen,w as Preview,b as Primary,S as PrimaryOpen,T as __namedExportsOrder,v as default};