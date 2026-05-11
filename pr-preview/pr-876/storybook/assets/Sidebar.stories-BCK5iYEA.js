import{j as e,r as g}from"./iframe-CWKpWNkk.js";import{c as _}from"./index-Bu-GUuQn.js";import{c}from"./clsx-B-dksMZM.js";import{$ as S}from"./useControlledState-DvoS3sKo.js";import{b as y}from"./useFocusRing-CpL5jV2W.js";import{S as h}from"./NavigationLink-CMBPxGTE.js";import{u as j}from"./useIsMobileDevice-mNHIAmsv.js";import{P as v,a as P}from"./panel-left-open-Cs9UevxJ.js";import{u as w}from"./useLocalizedStringFormatter-JVYCQbQZ.js";import{P as E,a as N,b as I,c as T}from"./PanelTitle-PBnp8QVE.js";import{B as u}from"./Button-WdsjujPh.js";import{n as $}from"./Navigation.stories-CnI5dFYy.js";const z={expandSidebar:"Expand sidebar",collapseSidebar:"Collapse sidebar"},B={expandSidebar:"Expandera sidopanel",collapseSidebar:"Minimera sidopanel"},H={en:z,sv:B},M="_sidebar_c9frf_1",q="_collapsed_c9frf_8",D="_sidebarHeader_c9frf_17",L="_sidebarTitle_c9frf_26",O="_sidebarContent_c9frf_49",a={sidebar:M,collapsed:q,sidebarHeader:D,sidebarTitle:L,sidebarContent:O},p=({children:d,className:i,title:l,...r})=>{const m=w(H),f=j(),[s,b]=S(r.isCollapsed,r.defaultCollapsed||!1,r.onCollapseChange),C=()=>b(x=>!x);return f?null:e.jsx(h.Provider,{value:{isCollapsed:s},children:e.jsxs(E,{className:c(i,a.sidebar,{[a.collapsed]:s}),...y(r),children:[e.jsxs(N,{className:c(a.sidebarHeader,{[a.collapsed]:s}),children:[l?e.jsx(I,{className:c(a.sidebarTitle,{[a.collapsed]:s}),title:l}):e.jsx("div",{}),e.jsx(u,{"aria-label":s?m.format("expandSidebar"):m.format("collapseSidebar"),onPress:C,variant:"icon",size:s?"large":"medium",children:s?e.jsx(v,{size:20}):e.jsx(P,{size:20})})]}),e.jsx(T,{className:a.sidebarContent,children:d})]})})};try{p.displayName="Sidebar",p.__docgenInfo={description:"",displayName:"Sidebar",props:{isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:null,description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},onCollapseChange:{defaultValue:null,description:"",name:"onCollapseChange",required:!1,type:{name:"((isCollapsed: boolean) => void)"}},tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const{Nested:V}=_($),K={component:p,title:"Layout/Sidebar",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"My app",children:e.jsx(V,{})}},o={},t={args:{defaultCollapsed:!0}},n={render:d=>{const[i,l]=g.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[e.jsxs(u,{onPress:()=>l(r=>!r),children:[i?"Expandera":"Kollapsa"," sidebar"]}),e.jsx(p,{...d,isCollapsed:i,onCollapseChange:l})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const F=["Primary","Collapsed","Controlled"],se=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:t,Controlled:n,Primary:o,__namedExportsOrder:F,default:K},Symbol.toStringTag,{value:"Module"}));export{se as s};
