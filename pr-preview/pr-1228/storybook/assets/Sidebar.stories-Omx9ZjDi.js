import{j as e,r as g}from"./iframe-Xm_9cv73.js";import{c as S}from"./index-AhtoxsWJ.js";import{c as m}from"./clsx-B-dksMZM.js";import{$ as _}from"./useControlledState-B_fJsoKU.js";import{b as y}from"./useFocusRing-B1Kohi3p.js";import{S as h}from"./NavigationLink-Dua44JoZ.js";import{u as j}from"./useIsMobileDevice-DK-SlOcf.js";import{P as v,a as P}from"./panel-left-open-gE-RxDlC.js";import{u as w}from"./useLocalizedStringFormatter-DWIBY6KU.js";import{P as E,a as N,b as I,c as $}from"./PanelTitle-C7n5KO-l.js";import{B as u}from"./Button-Da8bQidF.js";import{n as z}from"./Navigation.stories-9KkPgC3-.js";const B={expandSidebar:"Expand sidebar",collapseSidebar:"Collapse sidebar"},H={expandSidebar:"Expandera sidopanel",collapseSidebar:"Minimera sidopanel"},M={en:B,sv:H},T="_sidebar_1pctl_1",q="_collapsed_1pctl_8",D="_sidebarHeader_1pctl_17",L="_sidebarContent_1pctl_31",r={sidebar:T,collapsed:q,sidebarHeader:D,sidebarContent:L},p=({children:d,className:i,title:l,...a})=>{const c=w(M),f=j(),[s,b]=_(a.isCollapsed,a.defaultCollapsed||!1,a.onCollapseChange),C=()=>b(x=>!x);return f?null:e.jsx(h.Provider,{value:{isCollapsed:s},children:e.jsxs(E,{className:m(i,r.sidebar,{[r.collapsed]:s}),...y(a),children:[e.jsxs(N,{className:m(r.sidebarHeader,{[r.collapsed]:s}),children:[!s&&l?e.jsx(I,{className:r.panelTitle,title:l}):e.jsx("div",{}),e.jsx(u,{"aria-label":s?c.format("expandSidebar"):c.format("collapseSidebar"),onPress:C,variant:"icon",size:s?"large":"medium",children:s?e.jsx(v,{size:20}):e.jsx(P,{size:20})})]}),e.jsx($,{className:r.sidebarContent,children:d})]})})};try{p.displayName="Sidebar",p.__docgenInfo={description:"",displayName:"Sidebar",props:{isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:null,description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},onCollapseChange:{defaultValue:null,description:"",name:"onCollapseChange",required:!1,type:{name:"((isCollapsed: boolean) => void)"}},tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const{Nested:O}=S(z),V={component:p,title:"Layout/Sidebar",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"My app",children:e.jsx(O,{})}},o={},t={args:{defaultCollapsed:!0}},n={render:d=>{const[i,l]=g.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[e.jsxs(u,{onPress:()=>l(a=>!a),children:[i?"Expandera":"Kollapsa"," sidebar"]}),e.jsx(p,{...d,isCollapsed:i,onCollapseChange:l})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const K=["Primary","Collapsed","Controlled"],ee=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:t,Controlled:n,Primary:o,__namedExportsOrder:K,default:V},Symbol.toStringTag,{value:"Module"}));export{ee as s};
