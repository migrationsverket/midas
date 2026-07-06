import{i as e}from"./preload-helper-CT_b8DTk.js";import{$a as t,qa as n,t as r}from"./iframe-CFcu8seH.js";import{t as i}from"./Button-BDu2PYaj.js";import{B as a,J as o,M as s,O as c,Wt as l,b as u,i as d,m as f,t as p,ut as m,vt as h}from"./lucide-react-COhgruO7.js";import{t as g}from"./button-U4YtrZnQ.js";import{n as _,r as v,t as y}from"./link-button-B7uTkgt2.js";import{t as b}from"./LinkButton-Bmn7uWpG.js";var x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{p(),n(),v(),g(),y(),x=r(),{layer02Base:S,borderColorSubtle:C,textPrimary:w}=t,T={component:_,tags:[`autodocs`],title:`Components/Layout`,parameters:{layout:`fullscreen`,rootElement:`div`},args:{className:`test-class`}},E=[{items:[{title:`Hem`,href:`#`,icon:l,active:!0},{title:`Ansökan`,href:`#`,icon:f},{title:`Boka`,href:`#`,icon:m,hasBadge:!0},{title:`Profil`,href:`#`,icon:d},{title:`Kontakt`,href:`#`,icon:u}]},{title:`Ansökan`,items:[{title:`Skapa ansökan`,href:`#`,icon:u},{title:`Beslut`,href:`#`,icon:a}]},{title:`Kort och konto`,items:[{title:`LMA-kort`,href:`#`,icon:m},{title:`Avvikelser`,href:`#`,icon:o}]}],D=()=>(0,x.jsx)(`div`,{style:{background:S,display:`flex`,justifyContent:`center`,alignItems:`center`,height:`80vh`,border:`dotted 2px ${C}`,color:w},children:`Din applikation`}),O={args:{items:E,user:{name:`Namn Namnsson`,title:`Roll eller behörighet`},app:{name:`Namn på applikationen`},title:`Skapa ansökningar`,children:(0,x.jsx)(D,{})}},k={args:{items:E,user:{name:`Namn Namnsson`,title:`Roll eller behörighet`},app:{name:`Namn på applikationen`},title:`Skapa ansökningar`,variant:`external`,children:(0,x.jsx)(D,{}),headerChildren:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{variant:`icon`,icon:h,"aria-label":`Notiser`,size:`medium`}),(0,x.jsx)(i,{variant:`icon`,icon:s,"aria-label":`Byt språk`,size:`medium`}),(0,x.jsx)(i,{variant:`icon`,icon:c,"aria-label":`Logga ut`,size:`medium`})]})}},A={render:()=>(0,x.jsx)(_.Provider,{id:`test`,items:E,title:`Skapa ansökningar`,user:{name:`Test Testsson`,title:`Testare`},app:{name:`Namn på applikationen`},variant:`internal`,headerChildren:(0,x.jsx)(b,{variant:`tertiary`,target:`_blank`,children:`Öppna annan tjänst`}),isCollapsed:!1,setIsCollapsed:()=>null,children:(0,x.jsx)(_.Header,{})})},j={render:()=>(0,x.jsx)(_.Provider,{id:`test`,items:E,title:`Skapa ansökningar`,user:{name:`Test Testsson`,title:`Testare`},app:{name:`Namn på applikationen`},variant:`external`,headerChildren:(0,x.jsx)(b,{variant:`tertiary`,target:`_blank`,children:`Öppna annan tjänst`}),isCollapsed:!1,setIsCollapsed:()=>null,children:(0,x.jsx)(_.Navbar,{})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    items: items,
    user: {
      name: 'Namn Namnsson',
      title: 'Roll eller behörighet'
    },
    app: {
      name: 'Namn på applikationen'
    },
    title: 'Skapa ansökningar',
    children: <AppExample />
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    items: items,
    user: {
      name: 'Namn Namnsson',
      title: 'Roll eller behörighet'
    },
    app: {
      name: 'Namn på applikationen'
    },
    title: 'Skapa ansökningar',
    variant: 'external',
    children: <AppExample />,
    headerChildren: <>
        <Button variant='icon' icon={Bell} aria-label='Notiser' size='medium' />
        <Button variant='icon' icon={Languages} aria-label='Byt språk' size='medium' />
        <Button variant='icon' icon={LogOut} aria-label='Logga ut' size='medium' />
      </>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Layout.Provider id='test' items={items} title='Skapa ansökningar' user={{
    name: 'Test Testsson',
    title: 'Testare'
  }} app={{
    name: 'Namn på applikationen'
  }} variant='internal' headerChildren={<LinkButton variant='tertiary' target='_blank'>
          Öppna annan tjänst
        </LinkButton>} isCollapsed={false} setIsCollapsed={() => null}>
      <Layout.Header />
    </Layout.Provider>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Layout.Provider id='test' items={items} title='Skapa ansökningar' user={{
    name: 'Test Testsson',
    title: 'Testare'
  }} app={{
    name: 'Namn på applikationen'
  }} variant='external' headerChildren={<LinkButton variant='tertiary' target='_blank'>
          Öppna annan tjänst
        </LinkButton>} isCollapsed={false} setIsCollapsed={() => null}>
      <Layout.Navbar />
    </Layout.Provider>
}`,...j.parameters?.docs?.source}}},M=[`Primary`,`External`,`OnlyHeader`,`Navbar`]}))();export{k as External,j as Navbar,A as OnlyHeader,O as Primary,M as __namedExportsOrder,T as default};