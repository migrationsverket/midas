import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{t as r}from"./iframe-WlAtqoSC.js";import{In as i,Tt as a,jt as o,kt as s,qt as c,t as l}from"./import-CmiUljse.js";import{t as u}from"./Button-CuvYyML4.js";import{E as d,t as f}from"./lucide-react-B1jMDZbz.js";import{t as p}from"./button-BzenkRpQ.js";import{t as m}from"./Text-ArtjH9d7.js";import{t as h}from"./text-Dkwm3loa.js";import{a as g,c as _,i as v,l as y,n as b,o as x,r as S,s as C,t as w,u as T}from"./Separator-Dwkfn8gM.js";var E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{l(),f(),E=t(n(),1),T(),_(),p(),x(),h(),v(),b(),D=r(),O={title:`Components/Menu`,component:y,subcomponents:{MenuItem:C},render:e=>(0,D.jsxs)(a,{children:[(0,D.jsx)(u,{"aria-label":`Menu`,variant:`icon`,size:e.size,children:(0,D.jsx)(d,{size:20})}),(0,D.jsx)(g,{children:(0,D.jsx)(y,{...e})})]}),args:{children:e=>(0,D.jsx)(C,{...e,children:e.name}),items:[{id:0,name:`Open`},{id:1,name:`Rename...`},{id:2,name:`Duplicate`},{id:3,name:`Share...`},{id:4,name:`Delete...`}]}},k={},A={args:{selectionMode:`single`},render:e=>{let[t,n]=E.useState(new Set([`center`]));return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(a,{children:[(0,D.jsx)(u,{"aria-label":`Menu`,variant:`icon`,size:e.size,children:(0,D.jsx)(d,{size:20})}),(0,D.jsx)(g,{children:(0,D.jsxs)(y,{...e,selectedKeys:t,onSelectionChange:n,children:[(0,D.jsx)(C,{id:`left`,children:`Left`}),(0,D.jsx)(C,{id:`center`,children:`Center`}),(0,D.jsx)(C,{id:`right`,children:`Right`})]})})]}),(0,D.jsxs)(m,{children:[`Current selection (controlled): `,[...t].join(`, `)]})]})}},j={args:{selectionMode:`multiple`},render:e=>{let[t,n]=E.useState(new Set([`sidebar`,`console`]));return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(a,{children:[(0,D.jsx)(u,{"aria-label":`Menu`,variant:`icon`,size:e.size,children:(0,D.jsx)(d,{size:20})}),(0,D.jsx)(g,{children:(0,D.jsxs)(y,{...e,selectedKeys:t,onSelectionChange:n,children:[(0,D.jsx)(C,{id:`sidebar`,children:`Sidebar`}),(0,D.jsx)(C,{id:`searchbar`,children:`Searchbar`}),(0,D.jsx)(C,{id:`tools`,children:`Tools`}),(0,D.jsx)(C,{id:`console`,children:`Console`})]})})]}),(0,D.jsxs)(m,{children:[`Current selection (controlled):`,t===`all`?`all`:[...t].join(`, `)]})]})}},M={args:{items:[{name:`Left Panel`,id:`left`,children:[{id:1,name:`Final Copy (1)`}]},{name:`Right Panel`,id:`right`,children:[{id:2,name:`index.ts`},{id:3,name:`package.json`},{id:4,name:`license.txt`}]}],children:e=>(0,D.jsxs)(S,{children:[(0,D.jsx)(c,{children:e.name}),(0,D.jsx)(i,{items:e.children,children:e=>(0,D.jsx)(C,{children:e.name})})]})}},N={args:{children:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(C,{children:`New…`}),(0,D.jsx)(C,{children:`Open…`}),(0,D.jsx)(w,{}),(0,D.jsx)(C,{children:`Save`}),(0,D.jsx)(C,{children:`Save as…`}),(0,D.jsx)(C,{children:`Rename…`}),(0,D.jsx)(w,{}),(0,D.jsx)(C,{children:`Page setup…`}),(0,D.jsx)(C,{children:`Print…`})]})}},P={args:{children:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(C,{textValue:`Copy`,children:[(0,D.jsx)(m,{slot:`label`,children:`Copy`}),(0,D.jsx)(m,{slot:`description`,children:`Copy the selected text`}),(0,D.jsx)(o,{children:`⌘C`})]}),(0,D.jsxs)(C,{textValue:`Cut`,children:[(0,D.jsx)(m,{slot:`label`,children:`Cut`}),(0,D.jsx)(m,{slot:`description`,children:`Cut the selected text`}),(0,D.jsx)(o,{children:`⌘X`})]}),(0,D.jsxs)(C,{textValue:`Paste`,children:[(0,D.jsx)(m,{slot:`label`,children:`Paste`}),(0,D.jsx)(m,{slot:`description`,children:`Paste the copied text`}),(0,D.jsx)(o,{children:`⌘V`})]})]})}},F={args:{selectionMode:`multiple`,children:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(C,{textValue:`Copy`,children:[(0,D.jsx)(m,{slot:`label`,children:`Copy`}),(0,D.jsx)(m,{slot:`description`,children:`Copy the selected text`})]}),(0,D.jsxs)(C,{textValue:`Cut`,children:[(0,D.jsx)(m,{slot:`label`,children:`Cut`}),(0,D.jsx)(m,{slot:`description`,children:`Cut the selected text`})]}),(0,D.jsxs)(C,{textValue:`Paste`,children:[(0,D.jsx)(m,{slot:`label`,children:`Paste`}),(0,D.jsx)(m,{slot:`description`,children:`Paste the copied text`})]})]})}},I={args:{items:[{id:0,name:`Copy`},{id:1,name:`Cut`},{id:2,name:`Paste`,isDisabled:!0}]}},L={args:{items:[{id:`0`,name:`Menu item`},{id:`1`,name:`Menu item`},{id:`2`,name:`Menu item`},{id:`3`,name:`Sub menu`,children:[{id:`31`,name:`Sub menu item`},{id:`32`,name:`Sub menu item`},{id:`33`,name:`Sub menu item`}]},{id:`4`,name:`Other menu item`}],children:function e(t){return t.children?(0,D.jsxs)(s,{children:[(0,D.jsx)(C,{children:t.name},t.name),(0,D.jsx)(g,{children:(0,D.jsx)(y,{items:t.children,children:t=>e(t)})})]}):(0,D.jsx)(C,{children:t.name},t.name)}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single'
  },
  render: args => {
    const [selected, setSelected] = React.useState<Selection>(new Set(['center']));
    return <>
        <MenuTrigger>
          <Button aria-label='Menu' variant='icon' size={args.size}>
            <MenuIcon size={20} />
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple'
  },
  render: args => {
    const [selected, setSelected] = React.useState<Selection>(new Set(['sidebar', 'console']));
    return <>
        <MenuTrigger>
          <Button aria-label='Menu' variant='icon' size={args.size}>
            <MenuIcon size={20} />
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
        <Header>{section.name}</Header>
        <Collection items={section.children}>
          {item => <MenuItem>{item.name}</MenuItem>}
        </Collection>
      </MenuSection>
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`Primary`,`ControlledSingleSelection`,`ControlledMultipleSelection`,`Sections`,`Separators`,`TextSlots`,`MultiSelectWithDescriptions`,`DisabledItems`,`SubMenus`]}))();export{j as ControlledMultipleSelection,A as ControlledSingleSelection,I as DisabledItems,F as MultiSelectWithDescriptions,k as Primary,M as Sections,N as Separators,L as SubMenus,P as TextSlots,R as __namedExportsOrder,O as default};