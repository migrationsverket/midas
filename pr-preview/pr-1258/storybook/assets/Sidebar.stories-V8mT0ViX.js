import{R as w,j as e,r as A}from"./iframe-1_iu-uVv.js";import{c as f}from"./clsx-B-dksMZM.js";import{$ as E}from"./useControlledState-DeicQIqX.js";import{b as $}from"./useFocusRing-CLMMEccq.js";import{S as H,N as a}from"./NavigationLink-D4e7CmE2.js";import{u as V}from"./useIsMobileDevice-CS0R3AaE.js";import{P as q,a as z}from"./panel-left-open-BToQoqUi.js";import{u as D}from"./useLocalizedStringFormatter-ByENZTtA.js";import{P as R,a as O,b as W,c as K}from"./PanelTitle-J2vD6v3B.js";import{B as N}from"./Button-3xGdYp6o.js";import{c as x}from"./createLucideIcon-BbCelBYg.js";import{B as k}from"./bell-SwhEmqti.js";import{S}from"./settings-J_XJNdra.js";import{N as y,b as g,a as n}from"./NavigationSection-C8YOdbWd.js";import{a as _,B as I}from"./BadgeContainer-COC7xw_8.js";const F=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]],b=x("calendar-plus-2",F);const X=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]],G=x("calendar-x",X);const J=[["path",{d:"M10 7v10.9",key:"1gynux"}],["path",{d:"M14 6.1V17",key:"116kdf"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",key:"gpb6xx"}],["path",{d:"M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07",key:"1tsln4"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",key:"qexcha"}]],Q=x("candy",J);const U=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],Y=x("car",U);const Z=[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2",key:"13hakp"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9",key:"1crci8"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}]],ee=x("caravan",Z),ae={expandSidebar:"Expand sidebar",collapseSidebar:"Collapse sidebar"},ne={expandSidebar:"Expandera sidopanel",collapseSidebar:"Minimera sidopanel"},se={en:ae,sv:ne},ie="_sidebar_y6l6b_1",re="_collapsed_y6l6b_8",te="_sidebarHeader_y6l6b_17",oe="_sidebarTitle_y6l6b_26",de="_sidebarContent_y6l6b_50",r={sidebar:ie,collapsed:re,sidebarHeader:te,sidebarTitle:oe,sidebarContent:de},o=({children:s,className:u,title:v,...t})=>{const j=D(se),M=V(),[i,B]=E(t.isCollapsed,t.defaultCollapsed||!1,t.onCollapseChange),[P,C]=w.useState(!1),L=()=>{C(!0),B(d=>!d)},T=d=>{d.propertyName==="width"&&d.target===d.currentTarget&&C(!1)};return M?null:e.jsx(H.Provider,{value:{isCollapsed:i},children:e.jsxs(R,{className:f(u,r.sidebar,{[r.collapsed]:i}),"data-transitioning":P||void 0,onTransitionEnd:T,...$(t),children:[e.jsxs(O,{className:f(r.sidebarHeader,{[r.collapsed]:i}),children:[e.jsx(W,{className:f(r.sidebarTitle,{[r.collapsed]:i}),title:v}),e.jsx(N,{"aria-label":i?j.format("expandSidebar"):j.format("collapseSidebar"),onPress:L,variant:"icon",size:i?"large":"medium",children:i?e.jsx(q,{size:20}):e.jsx(z,{size:20})})]}),e.jsx(K,{className:r.sidebarContent,children:s})]})})};try{o.displayName="Sidebar",o.__docgenInfo={description:"",displayName:"Sidebar",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:null,description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},onCollapseChange:{defaultValue:null,description:"",name:"onCollapseChange",required:!1,type:{name:"((isCollapsed: boolean) => void)"}},tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const le=()=>e.jsxs(y,{children:[e.jsx(g,{children:e.jsx(n,{children:e.jsx(a,{href:"/add-event",icon:e.jsx(b,{}),children:"Add event"})})}),e.jsxs(g,{title:"Dates",children:[e.jsx(n,{children:e.jsx(a,{href:"/remove-event",icon:e.jsx(G,{}),children:"Remove event"})}),e.jsx(n,{children:e.jsx(a,{href:"/vehicle",icon:e.jsx(Y,{}),children:"Vehicle information"})})]}),e.jsxs(g,{title:"Travel",children:[e.jsx(n,{children:e.jsx(a,{href:"/treats",icon:e.jsx(Q,{}),children:"Treats"})}),e.jsx(n,{children:e.jsx(a,{href:"/road-trip",icon:e.jsx(ee,{}),children:"Road trip"})})]})]}),ce={component:o,title:"Layout/Sidebar",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"Navigation",children:e.jsx(le,{})}},l={},c={args:{defaultCollapsed:!0}},p={render:s=>e.jsx(o,{...s,children:e.jsx(y,{children:e.jsxs(g,{children:[e.jsx(n,{children:e.jsx(a,{href:"/add-event",icon:e.jsx(b,{}),isActive:!0,children:"Add event"})}),e.jsx(n,{children:e.jsx(a,{href:"/meddelanden",icon:e.jsxs(_,{children:[e.jsx(k,{}),e.jsx(I,{children:"12"})]}),children:"Meddelanden"})}),e.jsx(n,{children:e.jsx(a,{href:"/installningar",icon:e.jsx(S,{}),children:"Inställningar"})})]})})})},m={args:{defaultCollapsed:!0},render:s=>e.jsx(o,{...s,children:e.jsx(y,{children:e.jsxs(g,{children:[e.jsx(n,{children:e.jsx(a,{href:"/add-event",icon:e.jsx(b,{}),isActive:!0,children:"Add event"})}),e.jsx(n,{children:e.jsx(a,{href:"/meddelanden",icon:e.jsxs(_,{children:[e.jsx(k,{}),e.jsx(I,{children:"12"})]}),children:"Meddelanden"})}),e.jsx(n,{children:e.jsx(a,{href:"/installningar",icon:e.jsx(S,{}),children:"Inställningar"})})]})})})},h={render:s=>{const[u,v]=A.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[e.jsxs(N,{onPress:()=>v(t=>!t),children:[u?"Expandera":"Kollapsa"," sidebar"]}),e.jsx(o,{...s,isCollapsed:u,onCollapseChange:v})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Sidebar {...args}>
      <Navigation>
        <NavigationSection>
          <NavigationItem>
            <NavigationLink href='/add-event' icon={<CalendarPlus2 />} isActive>
              Add event
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href='/meddelanden' icon={<BadgeContainer>
                  <Bell />
                  <Badge>12</Badge>
                </BadgeContainer>}>
              Meddelanden
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href='/installningar' icon={<Settings />}>
              Inställningar
            </NavigationLink>
          </NavigationItem>
        </NavigationSection>
      </Navigation>
    </Sidebar>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true
  },
  render: args => <Sidebar {...args}>
      <Navigation>
        <NavigationSection>
          <NavigationItem>
            <NavigationLink href='/add-event' icon={<CalendarPlus2 />} isActive>
              Add event
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href='/meddelanden' icon={<BadgeContainer>
                  <Bell />
                  <Badge>12</Badge>
                </BadgeContainer>}>
              Meddelanden
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href='/installningar' icon={<Settings />}>
              Inställningar
            </NavigationLink>
          </NavigationItem>
        </NavigationSection>
      </Navigation>
    </Sidebar>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem'
    }}>
        <Button onPress={() => setIsCollapsed(c => !c)}>
          {isCollapsed ? 'Expandera' : 'Kollapsa'} sidebar
        </Button>
        <Sidebar {...args} isCollapsed={isCollapsed} onCollapseChange={setIsCollapsed} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}};const pe=["Primary","Collapsed","WithBadge","WithBadgeCollapsed","Controlled"],Ie=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:c,Controlled:h,Primary:l,WithBadge:p,WithBadgeCollapsed:m,__namedExportsOrder:pe,default:ce},Symbol.toStringTag,{value:"Module"}));export{Ie as s};
