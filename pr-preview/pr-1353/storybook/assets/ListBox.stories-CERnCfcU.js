import{i as e}from"./preload-helper-CT_b8DTk.js";import{Hn as t,Jn as n,qn as r,t as i}from"./iframe-BW2g9V1x.js";import{An as a,t as o}from"./exports-CpXH4Z2P.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./ListBoxHeader-Ca0o_eNg.js";var h,g,_,v,y,b;e((()=>{t(),c(),d(),l(),u(),o(),h=i(),g={component:p,subcomponents:{ListBoxItem:s},tags:[`autodocs`],title:`Internal/ListBox`,parameters:{layout:`fullscreen`},args:{"aria-label":`fruit`,children:e=>(0,h.jsx)(s,{id:e.id,children:e.name}),items:n}},_={args:{selectionMode:`single`}},v={args:{items:r,children:e=>(0,h.jsxs)(f,{id:e.name,children:[(0,h.jsx)(m,{children:e.name+` and a long string for testing purposes`}),(0,h.jsx)(a,{items:e.children,children:e=>(0,h.jsx)(s,{id:e.id,children:e.name})})]})}},y={tags:[`!autodocs`,`!snapshot`],args:{virtualized:!1},render:e=>(0,h.jsx)(p,{...e,items:void 0,children:(0,h.jsxs)(f,{children:[(0,h.jsx)(m,{children:`Sektion 1`}),(0,h.jsx)(s,{id:`item-1`,children:`Item 1`}),(0,h.jsx)(s,{id:`item-2`,children:`Item 2`})]})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`SelectionModeSingle`,`Sectioned`,`NotVirtualized`]}))();export{y as NotVirtualized,v as Sectioned,_ as SelectionModeSingle,b as __namedExportsOrder,g as default};