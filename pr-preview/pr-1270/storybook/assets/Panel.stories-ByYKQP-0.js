import{r as b,j as e}from"./iframe-D6gs3wS5.js";import{c as E}from"./clsx-B-dksMZM.js";import{P as A,L as c,a as u,M}from"./LayoutContent-BFaHJlZx.js";import{c as z}from"./createLucideIcon-Cx44WpFS.js";import{B}from"./Button-BVEXhnip.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlledState-CUa1KmDW.js";import"./useFocusRing-CFifySwi.js";import"./utils-DJQYVgmX.js";import"./index-eJbc0aTW.js";import"./index-Ce1ePnt0.js";import"./animation-CdlQofa4.js";import"./PanelTitle-5m-6yXUC.js";import"./clsx-Ciqy0D92.js";import"./Text-DqH78Bzr.js";import"./Text-BlJm85ZR.js";import"./x-JmNjUnkH.js";import"./useLocalizedStringFormatter-CkggrktT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CbEqyxyu.js";import"./Hidden-Chxa0iBH.js";import"./useLabel-cgRMBKD-.js";import"./useLabels-5rE94Eky.js";import"./useButton--ll78HR1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DqFWHqpC.js";const T=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],k=z("ellipsis",T),L=b.createContext({panels:[],panelVariant:"overlay",addPanel:()=>{},closePanel:()=>{},removePanel:()=>{},resetPromoting:()=>{}});try{usePanels.displayName="usePanels",usePanels.__docgenInfo={description:"",displayName:"usePanels",props:{panels:{defaultValue:null,description:"The current list of panels.",name:"panels",required:!0,type:{name:"PanelItem[]"}},panelVariant:{defaultValue:null,description:"The active panel variant inherited from `PanelProvider`.",name:"panelVariant",required:!0,type:{name:"enum",value:[{value:'"push"'},{value:'"overlay"'}]}},addPanel:{defaultValue:null,description:"Opens or activates a panel. If a panel with the same id exists, it is updated in place.",name:"addPanel",required:!0,type:{name:'(panel: Omit<PanelItem, "isOpen" | "defaultOpen">) => void'}},closePanel:{defaultValue:null,description:"Closes a panel, triggering the exit animation.",name:"closePanel",required:!0,type:{name:"(id: string) => void"}},removePanel:{defaultValue:null,description:"Permanently removes a panel from state.",name:"removePanel",required:!0,type:{name:"(id: string) => void"}},resetPromoting:{defaultValue:null,description:"",name:"resetPromoting",required:!0,type:{name:"(id: string) => void"}}}}}catch{}try{L.displayName="PanelContext",L.__docgenInfo={description:"",displayName:"PanelContext",props:{}}}catch{}const l=({children:n,defaultPanels:a=[],panelBehavior:o="replace",panelVariant:y="overlay"})=>{const[x,m]=b.useState(a.map(s=>({...s,isOpen:!0,defaultOpen:!0}))),w=s=>{m(r=>{if(o==="replace")return[{...s,isOpen:!0}];const t=r.findIndex(i=>i.id===s.id);if(t===-1)return[...r,{...s,isOpen:!0}];if(o==="bring-to-front"){if(t===r.length-1)return r;const i=r[t];return[...r.filter(R=>R.id!==s.id),{...i,isOpen:!0,promoting:!0}]}return o==="pop-to"?r.map((i,R)=>R>t?{...i,isOpen:!1}:i):r})},q=s=>{m(r=>r.map(t=>t.id===s?{...t,isOpen:!1}:t))},I=s=>{m(r=>r.filter(t=>t.id!==s))},d=s=>{m(r=>r.map(t=>t.id===s?{...t,promoting:!1}:t))};return e.jsx(L.Provider,{value:{panels:x,panelVariant:y,addPanel:w,closePanel:q,removePanel:I,resetPromoting:d},children:n})};try{l.displayName="PanelProvider",l.__docgenInfo={description:"",displayName:"PanelProvider",props:{defaultPanels:{defaultValue:{value:"[]"},description:"Panels to open on mount.",name:"defaultPanels",required:!1,type:{name:"PanelItem[]"}},panelBehavior:{defaultValue:{value:"replace"},description:"Behaviour when opening a panel that is already open.\n\n- `replace` — Replaces all existing panels. Recommended for most use cases.\n- `bring-to-front` — Panels stack; opening an existing panel moves it to the front.\n- `pop-to` — Opening an existing panel closes all panels above it.\n\nShowing one panel at a time is recommended. `replace` reflects this as the default.\nUse `bring-to-front` or `pop-to` only when multiple simultaneous panels are justified.",name:"panelBehavior",required:!1,type:{name:"enum",value:[{value:'"replace"'},{value:'"bring-to-front"'},{value:'"pop-to"'}]}},panelVariant:{defaultValue:{value:"overlay"},description:"How the panel is displayed relative to the main content.\n\n- `overlay` — Panel overlays the main content without affecting its width.\n- `push` — Panel pushes the main content aside, reducing its available width.",name:"panelVariant",required:!1,type:{name:"enum",value:[{value:'"push"'},{value:'"overlay"'}]}}}}}catch{}const D=()=>b.useContext(L),W="_push_a83oo_1",F={push:W},p=({children:n,className:a,...o})=>{const{panels:y,panelVariant:x,closePanel:m,removePanel:w,resetPromoting:q}=D(),I=y.length>0;return e.jsxs("div",{className:E(a,x==="push"&&F.push),"data-open":x==="push"&&I?!0:void 0,...o,children:[y.map(({id:d,...s},r,{length:t})=>e.jsx(A,{"aria-hidden":r<t-1||void 0,id:d,onOpenChange:i=>{i||m(d)},onExited:()=>w(d),onPromotionEnd:()=>q(d),...s},d)),n]})};try{p.displayName="PanelRegion",p.__docgenInfo={description:"",displayName:"PanelRegion",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const U=["Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates mollitia natus beatae libero tenetur accusantium harum rem voluptatum blanditiis.","Odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit. Vel ipsum veritatis quisquam amet rem aperiam error nostrum earum consequuntur.","Quidem fugit blanditiis odit corrupti consequatur nam culpa nesciunt. Cupiditate autem suscipit asperiores expedita excepturi hic modi tenetur maxime.","Dicta omnis aliquam quas doloremque cumque repellendus iure. Eveniet reprehenderit sapiente quidem culpa nam vel ipsum veritatis quisquam amet.","Rem aperiam error nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit."],N=U.map((n,a)=>e.jsx("p",{style:{margin:"0 0 1rem"},children:n},a)),fe={component:A,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[n=>e.jsx(c,{children:e.jsx(u,{children:e.jsx(n,{})})})]},g={args:{defaultOpen:!0}},P={render:n=>{const[a,o]=b.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(M,{style:{display:"flex",gap:"0.5rem",padding:"1rem",alignItems:"flex-start"},children:[e.jsx(B,{onPress:()=>o(!0),children:"Open panel"}),e.jsx(B,{variant:"secondary",onPress:()=>o(!1),children:"Dismiss panel"})]}),e.jsx(A,{...n,isOpen:a,onOpenChange:o})]})}},f={args:{defaultOpen:!0,actions:e.jsx(B,{variant:"icon",size:"medium","aria-label":"More options",children:e.jsx(k,{size:20})})}},v={args:{defaultOpen:!0,children:N}};function h(){const{addPanel:n}=D(),a=[{id:"panel-a",title:"Panel A"},{id:"panel-b",title:"Panel B"},{id:"panel-c",title:"Panel C"}];return e.jsx(M,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[e.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:a.map(o=>e.jsxs(B,{variant:"secondary",size:"medium",onPress:()=>n(o),children:["Open ",o.title]},o.id))}),N]})})}const j={decorators:[n=>e.jsx(l,{panelBehavior:"replace",children:e.jsx(c,{children:e.jsxs(u,{children:[e.jsx(h,{}),e.jsx(p,{})]})})})],render:()=>e.jsx("span",{})},_={decorators:[n=>e.jsx(l,{panelBehavior:"bring-to-front",children:e.jsx(c,{children:e.jsxs(u,{children:[e.jsx(h,{}),e.jsx(p,{})]})})})],render:()=>e.jsx("span",{})},C={decorators:[n=>e.jsx(l,{panelBehavior:"pop-to",children:e.jsx(c,{children:e.jsxs(u,{children:[e.jsx(h,{}),e.jsx(p,{})]})})})],render:()=>e.jsx("span",{})},O={decorators:[n=>e.jsx(l,{panelVariant:"overlay",children:e.jsx(c,{children:e.jsxs(u,{children:[e.jsx(h,{}),e.jsx(p,{})]})})})],render:()=>e.jsx("span",{})},S={decorators:[n=>e.jsx(l,{panelVariant:"push",children:e.jsx(c,{children:e.jsxs(u,{children:[e.jsx(h,{}),e.jsx(p,{})]})})})],render:()=>e.jsx("span",{})},H=[{id:"1",name:"Application #1042",status:"Pending",date:"2026-03-12",notes:"Awaiting document submission from applicant."},{id:"2",name:"Application #1043",status:"Approved",date:"2026-03-14",notes:"All documents verified. Decision letter sent."},{id:"3",name:"Application #1044",status:"Under review",date:"2026-03-15",notes:"Assigned to case officer. Background check in progress."},{id:"4",name:"Application #1045",status:"Rejected",date:"2026-03-18",notes:"Missing supporting documents. Applicant notified."}];function Q(){const{addPanel:n}=D();return e.jsx(M,{style:{padding:"1rem"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.875rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{textAlign:"left",borderBottom:"1px solid #ccc"},children:[e.jsx("th",{style:{padding:"0.5rem"},children:"Name"}),e.jsx("th",{style:{padding:"0.5rem"},children:"Status"}),e.jsx("th",{style:{padding:"0.5rem"},children:"Date"})]})}),e.jsx("tbody",{children:H.map(a=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee",cursor:"pointer"},onClick:()=>n({id:"detail",title:a.name,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem",fontSize:"0.875rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Status:"})," ",a.status]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Date:"})," ",a.date]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Notes:"})," ",a.notes]})]})}),children:[e.jsx("td",{style:{padding:"0.5rem"},children:a.name}),e.jsx("td",{style:{padding:"0.5rem"},children:a.status}),e.jsx("td",{style:{padding:"0.5rem"},children:a.date})]},a.id))})]})})}const V={decorators:[n=>e.jsx(l,{panelBehavior:"replace",panelVariant:"push",children:e.jsx(c,{children:e.jsxs(u,{children:[e.jsx(Q,{}),e.jsx(p,{})]})})})],render:()=>e.jsx("span",{})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...g.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Main style={{
        display: 'flex',
        gap: '0.5rem',
        padding: '1rem',
        alignItems: 'flex-start'
      }}>
          <Button onPress={() => setIsOpen(true)}>Open panel</Button>
          <Button variant='secondary' onPress={() => setIsOpen(false)}>
            Dismiss panel
          </Button>
        </Main>
        <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
      </>;
  }
}`,...P.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    actions: <Button variant='icon' size='medium' aria-label='More options'>
        <Ellipsis size={20} />
      </Button>
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    children: loremIpsum
  }
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='replace'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...j.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='bring-to-front'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,..._.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='pop-to'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...C.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelVariant='overlay'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...O.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelVariant='push'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='replace' panelVariant='push'>
        <Layout>
          <LayoutContent>
            <DetailViewControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...V.parameters?.docs?.source}}};const ve=["Primary","Controlled","WithActions","WithScrollableContent","BehaviorReplace","BehaviorBringToFront","BehaviorPopTo","VariantOverlay","VariantPush","DetailView"];export{_ as BehaviorBringToFront,C as BehaviorPopTo,j as BehaviorReplace,P as Controlled,V as DetailView,g as Primary,O as VariantOverlay,S as VariantPush,f as WithActions,v as WithScrollableContent,ve as __namedExportsOrder,fe as default};
