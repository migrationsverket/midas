import{j as e,r as C}from"./iframe-CYSKzr0I.js";import{c as g}from"./index-C0m_6WZM.js";import{c as y}from"./clsx-B-dksMZM.js";import{$ as S}from"./useControlledState-YbLesBTN.js";import{b as _}from"./useFocusRing-BOmMevWO.js";import{S as h}from"./NavigationLink-5on19b2J.js";import{u as j}from"./useIsMobileDevice-CTxmxPrl.js";import{P as v,a as P}from"./panel-left-open-LDKWUha6.js";import{u as w}from"./useLocalizedStringFormatter-D5bMO4Zi.js";import{P as E,a as I,b as N}from"./PanelTitle-Ba6fbDy-.js";import{B as m}from"./Button-BBfM7fHR.js";import{n as $}from"./Navigation.stories-gnC-Lm4G.js";const z={expandSidebar:"Expand sidebar",collapseSidebar:"Collapse sidebar"},B={expandSidebar:"Expandera sidopanel",collapseSidebar:"Minimera sidopanel"},M={en:z,sv:B},T="_sidebar_z7c8y_1",q="_collapsed_z7c8y_5",p={sidebar:T,collapsed:q},d=({children:n,className:i,title:a,...s})=>{const c=w(M),u=j(),[r,f]=S(s.isCollapsed,s.defaultCollapsed||!1,s.onCollapseChange),b=()=>f(x=>!x);return u?null:e.jsx(h.Provider,{value:{isCollapsed:r},children:e.jsx(E,{className:y(i,p.sidebar,{[p.collapsed]:r}),..._(s),children:e.jsxs("aside",{children:[e.jsxs(I,{children:[e.jsx("div",{children:!r&&a&&e.jsx(N,{className:p.panelTitle,title:a})}),e.jsx(m,{variant:"icon","aria-label":r?c.format("expandSidebar"):c.format("collapseSidebar"),onPress:b,children:r?e.jsx(v,{size:20}):e.jsx(P,{size:20})})]}),n]})})})};try{d.displayName="Sidebar",d.__docgenInfo={description:"",displayName:"Sidebar",props:{isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:null,description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},onCollapseChange:{defaultValue:null,description:"",name:"onCollapseChange",required:!1,type:{name:"((isCollapsed: boolean) => void)"}},tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const{Nested:D}=g($),L={component:d,title:"Layout/Sidebar",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"My app",children:e.jsx(D,{})}},l={},o={args:{defaultCollapsed:!0}},t={render:n=>{const[i,a]=C.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[e.jsxs(m,{onPress:()=>a(s=>!s),children:[i?"Expandera":"Kollapsa"," sidebar"]}),e.jsx(d,{...n,isCollapsed:i,onCollapseChange:a})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const O=["Primary","Collapsed","Controlled"],X=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:o,Controlled:t,Primary:l,__namedExportsOrder:O,default:L},Symbol.toStringTag,{value:"Module"}));export{X as s};
