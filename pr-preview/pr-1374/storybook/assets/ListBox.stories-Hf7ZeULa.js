import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{d as t,u as n}from"./Collection-BOv91l3w.js";import{d as r,f as i,n as a,o}from"./iframe-7nvLZrFE.js";import{i as s,n as c,r as l,t as u}from"./ListBoxItem-D0BzPMm3.js";import{i as d,n as f,r as p,t as m}from"./ListBoxHeader-Cdi0sRMo.js";var h,g,_,v,y,b;function x(){return(x=e((()=>{o(),s(),c(),d(),f(),t(),h=a(),g={component:l,subcomponents:{ListBoxItem:u},tags:[`autodocs`],title:`Internal/ListBox`,parameters:{layout:`fullscreen`},args:{"aria-label":`fruit`,children:e=>(0,h.jsx)(u,{id:e.id,children:e.name}),items:i}},_={args:{selectionMode:`single`}},v={args:{items:r,children:e=>(0,h.jsxs)(p,{id:e.name,children:[(0,h.jsx)(m,{children:e.name+` and a long string for testing purposes`}),(0,h.jsx)(n,{items:e.children,children:e=>(0,h.jsx)(u,{id:e.id,children:e.name})})]})}},y={tags:[`!autodocs`,`!snapshot`],args:{virtualized:!1},render:e=>(0,h.jsx)(l,{...e,items:void 0,children:(0,h.jsxs)(p,{children:[(0,h.jsx)(m,{children:`Sektion 1`}),(0,h.jsx)(u,{id:`item-1`,children:`Item 1`}),(0,h.jsx)(u,{id:`item-2`,children:`Item 2`})]})})},b=[`SelectionModeSingle`,`Sectioned`,`NotVirtualized`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as NotVirtualized,v as Sectioned,_ as SelectionModeSingle,b as __namedExportsOrder,g as default};