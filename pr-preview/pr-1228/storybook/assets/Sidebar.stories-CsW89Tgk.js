import{j as e,r as g}from"./iframe-SiFgIgtO.js";import{c as _}from"./index-ruCFTqQ6.js";import{c}from"./clsx-B-dksMZM.js";import{$ as S}from"./useControlledState-BeznzCuJ.js";import{b as y}from"./useFocusRing-CvkTALop.js";import{S as h}from"./NavigationLink-DQSOY6GY.js";import{u as j}from"./useIsMobileDevice-DNBGSpXS.js";import{P as v,a as P}from"./panel-left-open-By7rH_A2.js";import{u as w}from"./useLocalizedStringFormatter-CsnzAfll.js";import{P as E,a as N,b as I,c as T}from"./PanelTitle-cuwsKCy2.js";import{B as u}from"./Button-DBG0-mK7.js";import{n as $}from"./Navigation.stories-BezP6cAU.js";const z={expandSidebar:"Expand sidebar",collapseSidebar:"Collapse sidebar"},B={expandSidebar:"Expandera sidopanel",collapseSidebar:"Minimera sidopanel"},H={en:z,sv:B},M="_sidebar_1tg6a_1",q="_collapsed_1tg6a_8",D="_sidebarHeader_1tg6a_17",L="_sidebarTitle_1tg6a_26",O="_sidebarContent_1tg6a_50",s={sidebar:M,collapsed:q,sidebarHeader:D,sidebarTitle:L,sidebarContent:O},p=({children:d,className:i,title:l,...r})=>{const m=w(H),b=j(),[a,f]=S(r.isCollapsed,r.defaultCollapsed||!1,r.onCollapseChange),C=()=>f(x=>!x);return b?null:e.jsx(h.Provider,{value:{isCollapsed:a},children:e.jsxs(E,{className:c(i,s.sidebar,{[s.collapsed]:a}),...y(r),children:[e.jsxs(N,{className:c(s.sidebarHeader,{[s.collapsed]:a}),children:[l?e.jsx(I,{className:c(s.sidebarTitle,{[s.collapsed]:a}),title:l}):e.jsx("div",{}),e.jsx(u,{"aria-label":a?m.format("expandSidebar"):m.format("collapseSidebar"),onPress:C,variant:"icon",size:a?"large":"medium",children:a?e.jsx(v,{size:20}):e.jsx(P,{size:20})})]}),e.jsx(T,{className:s.sidebarContent,children:d})]})})};try{p.displayName="Sidebar",p.__docgenInfo={description:"",displayName:"Sidebar",props:{isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:null,description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},onCollapseChange:{defaultValue:null,description:"",name:"onCollapseChange",required:!1,type:{name:"((isCollapsed: boolean) => void)"}},tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const{Nested:V}=_($),K={component:p,title:"Layout/Sidebar",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"My app",children:e.jsx(V,{})}},o={},t={args:{defaultCollapsed:!0}},n={render:d=>{const[i,l]=g.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[e.jsxs(u,{onPress:()=>l(r=>!r),children:[i?"Expandera":"Kollapsa"," sidebar"]}),e.jsx(p,{...d,isCollapsed:i,onCollapseChange:l})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const F=["Primary","Collapsed","Controlled"],ae=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:t,Controlled:n,Primary:o,__namedExportsOrder:F,default:K},Symbol.toStringTag,{value:"Module"}));export{ae as s};
