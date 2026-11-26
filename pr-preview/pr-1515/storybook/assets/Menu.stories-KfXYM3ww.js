import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-BWPDF9mI.js";import{n as r,t as i}from"./clsx-Cb5F7C4j.js";import{I as ee,L as te,P as a,z as o}from"./useLoadMoreSentinel-DOsoi7-i.js";import{d as s,u as ne}from"./Collection-BTHDL66r.js";import{c as re,d as c,h as ie,m as l,o as u,u as ae}from"./Dialog-UEtT6w2A.js";import{n as oe,t as d}from"./Button-Cpiapm3J.js";import{i as se,n as ce,r as f,t as p}from"./MenuItem-DSUHPg4w.js";import{n as le,t as m}from"./Text-DTXSl25q.js";import{a as h,i as ue,n as g,o as _,r as v,t as y}from"./MenuPopover-BzysT5wf.js";import{n as b}from"./iframe-KcMNU0bj.js";import{n as de,t as x}from"./childrenSource-Hmbgjm9e.js";var S,C;function w(){return(w=e((()=>{o(),r(),_(),S=b(),C=({className:e,...t})=>(0,S.jsx)(te,{className:i(e,h.menuSectionHeader),...t}),C.__docgenInfo={description:``,methods:[],displayName:`MenuHeader`}})))()}var T,E;function D(){return(D=e((()=>{r(),c(),_(),T=b(),E=({className:e,...t})=>(0,T.jsx)(re,{className:i(e,h.menuSection),...t}),E.__docgenInfo={description:``,methods:[],displayName:`MenuSection`}})))()}var O,k;function A(){return(A=e((()=>{ee(),r(),_(),O=b(),k=({className:e,...t})=>(0,O.jsx)(a,{className:i(e,h.separator),...t}),k.__docgenInfo={description:``,methods:[],displayName:`Separator`}})))()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{s(),ie(),c(),se(),j=t(n(),1),ue(),w(),ce(),oe(),g(),le(),D(),A(),de(),M=b(),N=(e,t=!1)=>(0,M.jsxs)(u,{defaultOpen:t,children:[(0,M.jsx)(d,{"aria-label":`Menu`,variant:`icon`,size:e.size,children:(0,M.jsx)(f,{size:20})}),(0,M.jsx)(y,{children:(0,M.jsx)(v,{...e})})]}),P=e=>({...e,render:e=>(0,M.jsx)(`div`,{style:{minHeight:`25rem`},children:N(e,!0)})}),F={title:`Components/Menu`,component:v,subcomponents:{MenuItem:p},render:e=>N(e),parameters:x(`Menu`,`{item => <MenuItem {...item}>{item.name}</MenuItem>}`),args:{children:e=>(0,M.jsx)(p,{...e,children:e.name}),items:[{id:0,name:`Open`},{id:1,name:`Rename...`},{id:2,name:`Duplicate`},{id:3,name:`Share...`},{id:4,name:`Delete...`}]}},I={},L={args:{selectionMode:`single`},render:e=>{let[t,n]=j.useState(new Set([`center`]));return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(u,{children:[(0,M.jsx)(d,{"aria-label":`Menu`,variant:`icon`,size:e.size,children:(0,M.jsx)(f,{size:20})}),(0,M.jsx)(y,{children:(0,M.jsxs)(v,{...e,selectedKeys:t,onSelectionChange:n,children:[(0,M.jsx)(p,{id:`left`,children:`Left`}),(0,M.jsx)(p,{id:`center`,children:`Center`}),(0,M.jsx)(p,{id:`right`,children:`Right`})]})})]}),(0,M.jsxs)(m,{children:[`Current selection (controlled): `,[...t].join(`, `)]})]})}},R={args:{selectionMode:`multiple`},render:e=>{let[t,n]=j.useState(new Set([`sidebar`,`console`]));return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(u,{children:[(0,M.jsx)(d,{"aria-label":`Menu`,variant:`icon`,size:e.size,children:(0,M.jsx)(f,{size:20})}),(0,M.jsx)(y,{children:(0,M.jsxs)(v,{...e,selectedKeys:t,onSelectionChange:n,children:[(0,M.jsx)(p,{id:`sidebar`,children:`Sidebar`}),(0,M.jsx)(p,{id:`searchbar`,children:`Searchbar`}),(0,M.jsx)(p,{id:`tools`,children:`Tools`}),(0,M.jsx)(p,{id:`console`,children:`Console`})]})})]}),(0,M.jsxs)(m,{children:[`Current selection (controlled):`,t===`all`?`all`:[...t].join(`, `)]})]})}},z={parameters:x(`Menu`,`{section => (
  <MenuSection>
    <MenuHeader>{section.name}</MenuHeader>
    <Collection items={section.children}>
      {item => <MenuItem>{item.name}</MenuItem>}
    </Collection>
  </MenuSection>
)}`),args:{items:[{name:`Left Panel`,id:`left`,children:[{id:1,name:`Final Copy (1)`}]},{name:`Right Panel`,id:`right`,children:[{id:2,name:`index.ts`},{id:3,name:`package.json`},{id:4,name:`license.txt`}]}],children:e=>(0,M.jsxs)(E,{children:[(0,M.jsx)(C,{children:e.name}),(0,M.jsx)(ne,{items:e.children,children:e=>(0,M.jsx)(p,{children:e.name})})]})}},B={args:{children:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(p,{children:`New…`}),(0,M.jsx)(p,{children:`Open…`}),(0,M.jsx)(k,{}),(0,M.jsx)(p,{children:`Save`}),(0,M.jsx)(p,{children:`Save as…`}),(0,M.jsx)(p,{children:`Rename…`}),(0,M.jsx)(k,{}),(0,M.jsx)(p,{children:`Page setup…`}),(0,M.jsx)(p,{children:`Print…`})]})}},V={args:{children:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(p,{textValue:`Copy`,children:[(0,M.jsx)(m,{slot:`label`,children:`Copy`}),(0,M.jsx)(m,{slot:`description`,children:`Copy the selected text`}),(0,M.jsx)(l,{children:`⌘C`})]}),(0,M.jsxs)(p,{textValue:`Cut`,children:[(0,M.jsx)(m,{slot:`label`,children:`Cut`}),(0,M.jsx)(m,{slot:`description`,children:`Cut the selected text`}),(0,M.jsx)(l,{children:`⌘X`})]}),(0,M.jsxs)(p,{textValue:`Paste`,children:[(0,M.jsx)(m,{slot:`label`,children:`Paste`}),(0,M.jsx)(m,{slot:`description`,children:`Paste the copied text`}),(0,M.jsx)(l,{children:`⌘V`})]})]})}},H={args:{selectionMode:`multiple`,children:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(p,{textValue:`Copy`,children:[(0,M.jsx)(m,{slot:`label`,children:`Copy`}),(0,M.jsx)(m,{slot:`description`,children:`Copy the selected text`})]}),(0,M.jsxs)(p,{textValue:`Cut`,children:[(0,M.jsx)(m,{slot:`label`,children:`Cut`}),(0,M.jsx)(m,{slot:`description`,children:`Cut the selected text`})]}),(0,M.jsxs)(p,{textValue:`Paste`,children:[(0,M.jsx)(m,{slot:`label`,children:`Paste`}),(0,M.jsx)(m,{slot:`description`,children:`Paste the copied text`})]})]})}},U={args:{items:[{id:0,name:`Copy`},{id:1,name:`Cut`},{id:2,name:`Paste`,isDisabled:!0}]}},W={args:{items:[{id:`0`,name:`Menu item`},{id:`1`,name:`Menu item`},{id:`2`,name:`Menu item`},{id:`3`,name:`Sub menu`,children:[{id:`31`,name:`Sub menu item`},{id:`32`,name:`Sub menu item`},{id:`33`,name:`Sub menu item`}]},{id:`4`,name:`Other menu item`}],children:function e(t){return t.children?(0,M.jsxs)(ae,{children:[(0,M.jsx)(p,{children:t.name},t.name),(0,M.jsx)(y,{children:(0,M.jsx)(v,{items:t.children,children:t=>e(t)})})]}):(0,M.jsx)(p,{children:t.name},t.name)}}},G={...P(I),tags:[`!dev`,`!autodocs`]},K={...P(z),tags:[`!dev`,`!autodocs`]},q={...P(B),tags:[`!dev`,`!autodocs`]},J={...P(V),tags:[`!dev`,`!autodocs`]},Y={...P(H),tags:[`!dev`,`!autodocs`]},X={...P(U),tags:[`!dev`,`!autodocs`]},Z={...P(W),tags:[`!dev`,`!autodocs`]},Q=[`Primary`,`ControlledSingleSelection`,`ControlledMultipleSelection`,`Sections`,`Separators`,`TextSlots`,`MultiSelectWithDescriptions`,`DisabledItems`,`SubMenus`,`PrimaryOpen`,`SectionsOpen`,`SeparatorsOpen`,`TextSlotsOpen`,`MultiSelectWithDescriptionsOpen`,`DisabledItemsOpen`,`SubMenusOpen`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single'
  },
  render: args => {
    const [selected, setSelected] = React.useState<Selection>(new Set(['center']));
    return <>
        <MenuTrigger>
          <Button aria-label='Menu' variant='icon' size={args.size}>
            <EllipsisVertical size={20} />
          </Button>
          <MenuPopover>
            <Menu {...args} selectedKeys={selected} onSelectionChange={setSelected}>
              <MenuItem id='left'>Left</MenuItem>
              <MenuItem id='center'>Center</MenuItem>
              <MenuItem id='right'>Right</MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
        <Text>Current selection (controlled): {[...selected].join(', ')}</Text>
      </>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple'
  },
  render: args => {
    const [selected, setSelected] = React.useState<Selection>(new Set(['sidebar', 'console']));
    return <>
        <MenuTrigger>
          <Button aria-label='Menu' variant='icon' size={args.size}>
            <EllipsisVertical size={20} />
          </Button>
          <MenuPopover>
            <Menu {...args} selectedKeys={selected} onSelectionChange={setSelected}>
              <MenuItem id='sidebar'>Sidebar</MenuItem>
              <MenuItem id='searchbar'>Searchbar</MenuItem>
              <MenuItem id='tools'>Tools</MenuItem>
              <MenuItem id='console'>Console</MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
        <Text>
          Current selection (controlled):
          {selected === 'all' ? 'all' : [...selected].join(', ')}
        </Text>
      </>;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: childrenSource('Menu', \`{section => (
  <MenuSection>
    <MenuHeader>{section.name}</MenuHeader>
    <Collection items={section.children}>
      {item => <MenuItem>{item.name}</MenuItem>}
    </Collection>
  </MenuSection>
)}\`),
  args: {
    items: [{
      name: 'Left Panel',
      id: 'left',
      children: [{
        id: 1,
        name: 'Final Copy (1)'
      }]
    }, {
      name: 'Right Panel',
      id: 'right',
      children: [{
        id: 2,
        name: 'index.ts'
      }, {
        id: 3,
        name: 'package.json'
      }, {
        id: 4,
        name: 'license.txt'
      }]
    }],
    children: section => <MenuSection>
        <MenuHeader>{section.name}</MenuHeader>
        <Collection items={section.children}>
          {item => <MenuItem>{item.name}</MenuItem>}
        </Collection>
      </MenuSection>
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <MenuItem>New…</MenuItem>
        <MenuItem>Open…</MenuItem>
        <Separator />
        <MenuItem>Save</MenuItem>
        <MenuItem>Save as…</MenuItem>
        <MenuItem>Rename…</MenuItem>
        <Separator />
        <MenuItem>Page setup…</MenuItem>
        <MenuItem>Print…</MenuItem>
      </>
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <MenuItem textValue='Copy'>
          <Text slot='label'>Copy</Text>
          <Text slot='description'>Copy the selected text</Text>
          <Keyboard>⌘C</Keyboard>
        </MenuItem>
        <MenuItem textValue='Cut'>
          <Text slot='label'>Cut</Text>
          <Text slot='description'>Cut the selected text</Text>
          <Keyboard>⌘X</Keyboard>
        </MenuItem>
        <MenuItem textValue='Paste'>
          <Text slot='label'>Paste</Text>
          <Text slot='description'>Paste the copied text</Text>
          <Keyboard>⌘V</Keyboard>
        </MenuItem>
      </>
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    children: <>
        <MenuItem textValue='Copy'>
          <Text slot='label'>Copy</Text>
          <Text slot='description'>Copy the selected text</Text>
        </MenuItem>
        <MenuItem textValue='Cut'>
          <Text slot='label'>Cut</Text>
          <Text slot='description'>Cut the selected text</Text>
        </MenuItem>
        <MenuItem textValue='Paste'>
          <Text slot='label'>Paste</Text>
          <Text slot='description'>Paste the copied text</Text>
        </MenuItem>
      </>
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 0,
      name: 'Copy'
    }, {
      id: 1,
      name: 'Cut'
    }, {
      id: 2,
      name: 'Paste',
      isDisabled: true
    }]
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '0',
      name: 'Menu item'
    }, {
      id: '1',
      name: 'Menu item'
    }, {
      id: '2',
      name: 'Menu item'
    }, {
      id: '3',
      name: 'Sub menu',
      children: [{
        id: '31',
        name: 'Sub menu item'
      }, {
        id: '32',
        name: 'Sub menu item'
      }, {
        id: '33',
        name: 'Sub menu item'
      }]
    }, {
      id: '4',
      name: 'Other menu item'
    }],
    children: function renderSubmenu(item) {
      return item.children ? <SubmenuTrigger>
          <MenuItem key={item.name}>{item.name}</MenuItem>
          <MenuPopover>
            <Menu items={item.children}>{item => renderSubmenu(item)}</Menu>
          </MenuPopover>
        </SubmenuTrigger> : <MenuItem key={item.name}>{item.name}</MenuItem>;
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  ...open(Primary),
  tags: ['!dev', '!autodocs']
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  ...open(Sections),
  tags: ['!dev', '!autodocs']
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  ...open(Separators),
  tags: ['!dev', '!autodocs']
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  ...open(TextSlots),
  tags: ['!dev', '!autodocs']
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  ...open(MultiSelectWithDescriptions),
  tags: ['!dev', '!autodocs']
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  ...open(DisabledItems),
  tags: ['!dev', '!autodocs']
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  ...open(SubMenus),
  tags: ['!dev', '!autodocs']
}`,...Z.parameters?.docs?.source}}}})))()}$();export{R as ControlledMultipleSelection,L as ControlledSingleSelection,U as DisabledItems,X as DisabledItemsOpen,H as MultiSelectWithDescriptions,Y as MultiSelectWithDescriptionsOpen,I as Primary,G as PrimaryOpen,z as Sections,K as SectionsOpen,B as Separators,q as SeparatorsOpen,W as SubMenus,Z as SubMenusOpen,V as TextSlots,J as TextSlotsOpen,Q as __namedExportsOrder,F as default};