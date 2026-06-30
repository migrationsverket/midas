import{i as e}from"./preload-helper-CT_b8DTk.js";import{$a as t,qa as n,t as r}from"./iframe-C5NpfoMW.js";import{t as i}from"./Button-CfsfUeaI.js";import{H as a,It as o,O as s,P as c,X as l,b as u,i as d,m as f,ot as p,t as m,ut as h}from"./lucide-react-BJU7mAvS.js";import{t as g}from"./button-VhdNnZ7x.js";import{n as _,r as v,t as y}from"./link-button-BthKr2En.js";import{t as b}from"./LinkButton-Dsua0ayD.js";var x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{m(),n(),v(),g(),y(),x=r(),{layer02Base:S,borderColorSubtle:C,textPrimary:w}=t,T={component:_,tags:[`autodocs`],title:`Components/Layout`,parameters:{layout:`fullscreen`,rootElement:`div`},args:{className:`test-class`}},E=[{items:[{title:`Hem`,href:`#`,icon:o,active:!0},{title:`Ansökan`,href:`#`,icon:f},{title:`Boka`,href:`#`,icon:p,hasBadge:!0},{title:`Profil`,href:`#`,icon:d},{title:`Kontakt`,href:`#`,icon:u}]},{title:`Ansökan`,items:[{title:`Skapa ansökan`,href:`#`,icon:u},{title:`Beslut`,href:`#`,icon:a}]},{title:`Kort och konto`,items:[{title:`LMA-kort`,href:`#`,icon:p},{title:`Avvikelser`,href:`#`,icon:l}]}],D=()=>(0,x.jsx)(`div`,{style:{background:S,display:`flex`,justifyContent:`center`,alignItems:`center`,height:`80vh`,border:`dotted 2px ${C}`,color:w},children:`Din applikation`}),O={args:{items:E,user:{name:`Namn Namnsson`,title:`Roll eller behörighet`},app:{name:`Namn på applikationen`},title:`Skapa ansökningar`,children:(0,x.jsx)(D,{})}},k={args:{items:E,user:{name:`Namn Namnsson`,title:`Roll eller behörighet`},app:{name:`Namn på applikationen`},title:`Skapa ansökningar`,variant:`external`,children:(0,x.jsx)(D,{}),headerChildren:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{variant:`icon`,icon:h,"aria-label":`Notiser`,size:`medium`}),(0,x.jsx)(i,{variant:`icon`,icon:c,"aria-label":`Byt språk`,size:`medium`}),(0,x.jsx)(i,{variant:`icon`,icon:s,"aria-label":`Logga ut`,size:`medium`})]})}},A={render:()=>(0,x.jsx)(_.Provider,{id:`test`,items:E,title:`Skapa ansökningar`,user:{name:`Test Testsson`,title:`Testare`},app:{name:`Namn på applikationen`},variant:`internal`,headerChildren:(0,x.jsx)(b,{variant:`tertiary`,target:`_blank`,children:`Öppna annan tjänst`}),isCollapsed:!1,setIsCollapsed:()=>null,children:(0,x.jsx)(_.Header,{})})},j={render:()=>(0,x.jsx)(_.Provider,{id:`test`,items:E,title:`Skapa ansökningar`,user:{name:`Test Testsson`,title:`Testare`},app:{name:`Namn på applikationen`},variant:`external`,headerChildren:(0,x.jsx)(b,{variant:`tertiary`,target:`_blank`,children:`Öppna annan tjänst`}),isCollapsed:!1,setIsCollapsed:()=>null,children:(0,x.jsx)(_.Navbar,{})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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