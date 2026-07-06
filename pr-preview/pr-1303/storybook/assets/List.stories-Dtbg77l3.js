import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{Vi as r,qi as i,t as a}from"./iframe-B7UyiEkL.js";import{t as o}from"./Button-k8MkXgfs.js";import{t as s,u as c}from"./lucide-react-D0taXNel.js";import{t as l}from"./button-f44xzpzO.js";import{a as u,i as d,n as f,s as p,t as m}from"./tag-group-B1AKPaTH.js";import{t as h}from"./tag-FgFp6hNc.js";import{i as g,n as _,r as v,t as y}from"./ListItem-G93kUCO4.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{b=t(n(),1),r(),s(),l(),h(),m(),d(),g(),_(),x=a(),S=i.slice(0,6),C={component:v,subcomponents:{ListItem:y},title:`Components/List`,tags:[`autodocs`],args:{"aria-label":`Frukter`},render:e=>(0,x.jsx)(v,{...e,children:S.map(e=>(0,x.jsx)(y,{id:e.id,children:e.name},e.id))})},w={},T={args:{striped:!0,label:`Frukter`}},E={args:{selectionMode:`single`,label:`Välj frukt`}},D={args:{selectionMode:`multiple`,label:`Välj frukter`}},O={render:e=>{let[t,n]=(0,b.useState)(new Set);return(0,x.jsx)(v,{...e,selectionMode:`multiple`,label:`Välj frukter`,showSelectAll:!0,headerSlot:({selectedCount:e,totalCount:t})=>(0,x.jsxs)(`span`,{children:[e,` av `,t,` valda`]}),selectedKeys:t,onSelectionChange:n,children:S.map(e=>(0,x.jsx)(y,{id:e.id,children:e.name},e.id))})}},k={render:e=>(0,x.jsx)(v,{...e,label:`Frukter`,striped:!0,children:S.map(e=>(0,x.jsxs)(y,{id:e.id,textValue:e.name,children:[e.name,(0,x.jsx)(y.Trailing,{children:(0,x.jsx)(f,{"aria-label":`Kategori`,children:(0,x.jsx)(u,{children:(0,x.jsx)(p,{id:`category`,children:e.category})})})})]},e.id))})},A={args:{selectionMode:`multiple`,label:`Välj frukter`,disabledKeys:[S[1].id,S[3].id]}},j={render:e=>{let[t,n]=(0,b.useState)(null);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v,{...e,label:`Sökresultat`,onAction:e=>n(String(e)),children:S.map(e=>(0,x.jsx)(y,{id:e.id,children:e.name},e.id))}),t&&(0,x.jsxs)(`p`,{style:{marginTop:`1rem`},children:[`Aktiverad: `,t]})]})}},M={render:e=>{let[t,n]=(0,b.useState)(new Set),[r,i]=(0,b.useState)(null),[a,s]=(0,b.useState)(null);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v,{...e,label:`Frukter`,selectionMode:`single`,selectedKeys:t,onSelectionChange:n,onAction:e=>i(String(e)),striped:!0,children:S.map(e=>(0,x.jsxs)(y,{id:e.id,textValue:e.name,children:[e.name,(0,x.jsx)(y.Trailing,{children:(0,x.jsx)(o,{variant:`icon`,"aria-label":`Åtgärd för ${e.name}`,onPress:()=>s(e.name),children:(0,x.jsx)(c,{size:16})})})]},e.id))}),(0,x.jsxs)(`ul`,{style:{marginTop:`1rem`,listStyle:`none`,padding:0,display:`flex`,flexDirection:`column`,gap:`0.25rem`},children:[(0,x.jsxs)(`li`,{children:[`Vald rad: `,t===`all`?`alla`:Array.from(t).join(`, `)||`–`]}),(0,x.jsxs)(`li`,{children:[`Radaction (dubbelklick): `,r??`–`]}),(0,x.jsxs)(`li`,{children:[`Knappaction: `,a??`–`]})]})]})}},N={render:e=>(0,x.jsx)(v,{...e,label:`Frukter`,headerSlot:(0,x.jsxs)(`span`,{children:[S.length,` poster`]}),striped:!0,children:S.map(e=>(0,x.jsx)(y,{id:e.id,children:e.name},e.id))})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    striped: true,
    label: 'Frukter'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single',
    label: 'Välj frukt'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    label: 'Välj frukter'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set());
    return <List {...args} selectionMode="multiple" label="Välj frukter" showSelectAll headerSlot={({
      selectedCount,
      totalCount
    }) => <span>{selectedCount} av {totalCount} valda</span>} selectedKeys={selected} onSelectionChange={setSelected}>
        {items.map(item => <ListItem key={item.id} id={item.id}>{item.name}</ListItem>)}
      </List>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <List {...args} label="Frukter" striped>
      {items.map(item => <ListItem key={item.id} id={item.id} textValue={item.name}>
          {item.name}
          <ListItem.Trailing>
            <TagGroup aria-label="Kategori">
              <TagList>
                <Tag id="category">{item.category}</Tag>
              </TagList>
            </TagGroup>
          </ListItem.Trailing>
        </ListItem>)}
    </List>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    label: 'Välj frukter',
    disabledKeys: [items[1].id, items[3].id] as string[]
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activated, setActivated] = useState<string | null>(null);
    return <>
        <List {...args} label="Sökresultat" onAction={key => setActivated(String(key))}>
          {items.map(item => <ListItem key={item.id} id={item.id}>{item.name}</ListItem>)}
        </List>
        {activated && <p style={{
        marginTop: '1rem'
      }}>Aktiverad: {activated}</p>}
      </>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set());
    const [rowAction, setRowAction] = useState<string | null>(null);
    const [buttonAction, setButtonAction] = useState<string | null>(null);
    return <>
        <List {...args} label="Frukter" selectionMode="single" selectedKeys={selected} onSelectionChange={setSelected} onAction={key => setRowAction(String(key))} striped>
          {items.map(item => <ListItem key={item.id} id={item.id} textValue={item.name}>
              {item.name}
              <ListItem.Trailing>
                <Button variant="icon" aria-label={\`Åtgärd för \${item.name}\`} onPress={() => setButtonAction(item.name)}>
                  <Star size={16} />
                </Button>
              </ListItem.Trailing>
            </ListItem>)}
        </List>
        <ul style={{
        marginTop: '1rem',
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem'
      }}>
          <li>Vald rad: {selected === 'all' ? 'alla' : Array.from(selected).join(', ') || '–'}</li>
          <li>Radaction (dubbelklick): {rowAction ?? '–'}</li>
          <li>Knappaction: {buttonAction ?? '–'}</li>
        </ul>
      </>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <List {...args} label="Frukter" headerSlot={<span>{items.length} poster</span>} striped>
      {items.map(item => <ListItem key={item.id} id={item.id}>{item.name}</ListItem>)}
    </List>
}`,...N.parameters?.docs?.source}}},P=[`Default`,`ZebraStripes`,`SingleSelect`,`MultiSelect`,`MultiSelectWithSelectAll`,`WithTrailingContent`,`WithDisabledItems`,`WithRowAction`,`WithActionButton`,`WithItemCount`]}))();export{w as Default,D as MultiSelect,O as MultiSelectWithSelectAll,E as SingleSelect,M as WithActionButton,A as WithDisabledItems,N as WithItemCount,j as WithRowAction,k as WithTrailingContent,T as ZebraStripes,P as __namedExportsOrder,C as default};