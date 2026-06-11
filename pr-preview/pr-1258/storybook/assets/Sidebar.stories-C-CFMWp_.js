import{R as w,j as e,r as A}from"./iframe-DsPZ3k2a.js";import{c as f}from"./clsx-B-dksMZM.js";import{$ as E}from"./useControlledState-Ynphlhkh.js";import{b as $}from"./useFocusRing-Cuzdmb74.js";import{S as H,N as a}from"./NavigationLink-C8OidCTz.js";import{u as V}from"./useIsMobileDevice-C6sbclAy.js";import{P as q}from"./panel-left-close-DemxQbTe.js";import{u as z}from"./useLocalizedStringFormatter-B_4X81TH.js";import{P as D,a as R,b as W,c as O}from"./PanelTitle-hbkc8h9Y.js";import{B as N}from"./Button-uXogGJvd.js";import{c as x}from"./createLucideIcon-DFP7Vl1t.js";import{B as k}from"./bell-DWjCl-n0.js";import{S as _}from"./settings-C6bueH2_.js";import{N as y,b as g,a as n}from"./NavigationSection-BQ22Kz0O.js";import{a as S,B}from"./BadgeContainer-DPkoSgUm.js";const K=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]],j=x("calendar-plus-2",K);const F=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]],X=x("calendar-x",F);const G=[["path",{d:"M10 7v10.9",key:"1gynux"}],["path",{d:"M14 6.1V17",key:"116kdf"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",key:"gpb6xx"}],["path",{d:"M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07",key:"1tsln4"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",key:"qexcha"}]],J=x("candy",G);const Q=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],U=x("car",Q);const Y=[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2",key:"13hakp"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9",key:"1crci8"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}]],Z=x("caravan",Y),ee={expandSidebar:"Expand sidebar",collapseSidebar:"Collapse sidebar"},ae={expandSidebar:"Expandera sidopanel",collapseSidebar:"Minimera sidopanel"},ne={en:ee,sv:ae},se="_sidebar_1yke5_1",ie="_collapsed_1yke5_8",te="_sidebarHeader_1yke5_20",re="_sidebarTitle_1yke5_29",oe="_collapseButton_1yke5_44",de="_sidebarContent_1yke5_52",s={sidebar:se,collapsed:ie,sidebarHeader:te,sidebarTitle:re,collapseButton:oe,sidebarContent:de},o=({children:i,className:u,title:v,...t})=>{const C=z(ne),I=V(),[r,M]=E(t.isCollapsed,t.defaultCollapsed||!1,t.onCollapseChange),[P,b]=w.useState(!1),L=()=>{b(!0),M(d=>!d)},T=d=>{d.propertyName==="width"&&d.target===d.currentTarget&&b(!1)};return I?null:e.jsx(H.Provider,{value:{isCollapsed:r},children:e.jsxs(D,{className:f(u,s.sidebar,{[s.collapsed]:r}),"data-transitioning":P||void 0,onTransitionEnd:T,...$(t),children:[e.jsxs(R,{className:f(s.sidebarHeader,{[s.collapsed]:r}),children:[e.jsx(W,{className:f(s.sidebarTitle,{[s.collapsed]:r}),title:v}),e.jsx(N,{"aria-label":r?C.format("expandSidebar"):C.format("collapseSidebar"),onPress:L,variant:"icon",size:"medium",children:e.jsx("span",{className:f(s.collapseButton,{[s.collapsed]:r}),children:e.jsx(q,{size:20})})})]}),e.jsx(O,{className:s.sidebarContent,children:i})]})})};try{o.displayName="Sidebar",o.__docgenInfo={description:"",displayName:"Sidebar",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:null,description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},onCollapseChange:{defaultValue:null,description:"",name:"onCollapseChange",required:!1,type:{name:"((isCollapsed: boolean) => void)"}},tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const le=()=>e.jsxs(y,{children:[e.jsx(g,{children:e.jsx(n,{children:e.jsx(a,{href:"/add-event",icon:e.jsx(j,{}),children:"Add event"})})}),e.jsxs(g,{title:"Dates",children:[e.jsx(n,{children:e.jsx(a,{href:"/remove-event",icon:e.jsx(X,{}),children:"Remove event"})}),e.jsx(n,{children:e.jsx(a,{href:"/vehicle",icon:e.jsx(U,{}),children:"Vehicle information"})})]}),e.jsxs(g,{title:"Travel",children:[e.jsx(n,{children:e.jsx(a,{href:"/treats",icon:e.jsx(J,{}),children:"Treats"})}),e.jsx(n,{children:e.jsx(a,{href:"/road-trip",icon:e.jsx(Z,{}),children:"Road trip"})})]})]}),ce={component:o,title:"Layout/Sidebar",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"Navigation",children:e.jsx(le,{})}},l={},c={args:{defaultCollapsed:!0}},p={render:i=>e.jsx(o,{...i,children:e.jsx(y,{children:e.jsxs(g,{children:[e.jsx(n,{children:e.jsx(a,{href:"/add-event",icon:e.jsx(j,{}),isActive:!0,children:"Add event"})}),e.jsx(n,{children:e.jsx(a,{href:"/meddelanden",icon:e.jsxs(S,{children:[e.jsx(k,{}),e.jsx(B,{children:"12"})]}),children:"Meddelanden"})}),e.jsx(n,{children:e.jsx(a,{href:"/installningar",icon:e.jsx(_,{}),children:"Inställningar"})})]})})})},m={args:{defaultCollapsed:!0},render:i=>e.jsx(o,{...i,children:e.jsx(y,{children:e.jsxs(g,{children:[e.jsx(n,{children:e.jsx(a,{href:"/add-event",icon:e.jsx(j,{}),isActive:!0,children:"Add event"})}),e.jsx(n,{children:e.jsx(a,{href:"/meddelanden",icon:e.jsxs(S,{children:[e.jsx(k,{}),e.jsx(B,{children:"12"})]}),children:"Meddelanden"})}),e.jsx(n,{children:e.jsx(a,{href:"/installningar",icon:e.jsx(_,{}),children:"Inställningar"})})]})})})},h={render:i=>{const[u,v]=A.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[e.jsxs(N,{onPress:()=>v(t=>!t),children:[u?"Expandera":"Kollapsa"," sidebar"]}),e.jsx(o,{...i,isCollapsed:u,onCollapseChange:v})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const pe=["Primary","Collapsed","WithBadge","WithBadgeCollapsed","Controlled"],Be=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:c,Controlled:h,Primary:l,WithBadge:p,WithBadgeCollapsed:m,__namedExportsOrder:pe,default:ce},Symbol.toStringTag,{value:"Module"}));export{Be as s};
