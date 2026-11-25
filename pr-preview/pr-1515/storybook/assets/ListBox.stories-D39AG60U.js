import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{d as t,u as n}from"./Collection-BTHDL66r.js";import{i as r,n as i,r as a,t as o}from"./ListBoxItem-2c8QgAUl.js";import{i as s,n as c,r as l,t as u}from"./ListBoxHeader-C9PnrTP6.js";import{d,f,n as p,o as m}from"./iframe-CLQWpvef.js";import{n as h,t as g}from"./childrenSource-Hmbgjm9e.js";var _,v,y,b,x,S;function C(){return(C=e((()=>{m(),r(),i(),s(),c(),t(),h(),_=p(),v={component:a,subcomponents:{ListBoxItem:o},tags:[`autodocs`],title:`Internal/ListBox`,parameters:{layout:`fullscreen`,...g(`ListBox`,`{item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}`)},args:{"aria-label":`fruit`,children:e=>(0,_.jsx)(o,{id:e.id,children:e.name}),items:f}},y={args:{selectionMode:`single`}},b={parameters:g(`ListBox`,`{section => (
  <ListBoxSection id={section.name}>
    <ListBoxHeader>
      {section.name + ' and a long string for testing purposes'}
    </ListBoxHeader>
    <Collection items={section.children}>
      {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
    </Collection>
  </ListBoxSection>
)}`),args:{items:d,children:e=>(0,_.jsxs)(l,{id:e.name,children:[(0,_.jsx)(u,{children:e.name+` and a long string for testing purposes`}),(0,_.jsx)(n,{items:e.children,children:e=>(0,_.jsx)(o,{id:e.id,children:e.name})})]})}},x={tags:[`!autodocs`,`!snapshot`],args:{virtualized:!1},render:e=>(0,_.jsx)(a,{...e,items:void 0,children:(0,_.jsxs)(l,{children:[(0,_.jsx)(u,{children:`Sektion 1`}),(0,_.jsx)(o,{id:`item-1`,children:`Item 1`}),(0,_.jsx)(o,{id:`item-2`,children:`Item 2`})]})})},S=[`SelectionModeSingle`,`Sectioned`,`NotVirtualized`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: childrenSource('ListBox', \`{section => (
  <ListBoxSection id={section.name}>
    <ListBoxHeader>
      {section.name + ' and a long string for testing purposes'}
    </ListBoxHeader>
    <Collection items={section.children}>
      {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
    </Collection>
  </ListBoxSection>
)}\`),
  args: {
    items: optionsWithSections,
    children: section => <ListBoxSection id={section.name}>
        <ListBoxHeader>
          {section.name + ' and a long string for testing purposes'}
        </ListBoxHeader>
        <Collection items={section.children}>
          {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
        </Collection>
      </ListBoxSection>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs', '!snapshot'],
  args: {
    virtualized: false
  },
  render: args => <ListBox<Fruit> {...args} items={undefined}>
      <ListBoxSection>
        <ListBoxHeader>Sektion 1</ListBoxHeader>
        <ListBoxItem id='item-1'>Item 1</ListBoxItem>
        <ListBoxItem id='item-2'>Item 2</ListBoxItem>
      </ListBoxSection>
    </ListBox>
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as NotVirtualized,b as Sectioned,y as SelectionModeSingle,S as __namedExportsOrder,v as default};