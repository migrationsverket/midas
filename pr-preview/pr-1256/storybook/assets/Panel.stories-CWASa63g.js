import{r as b,j as e}from"./iframe-DcpPkcOs.js";import{c as N}from"./clsx-B-dksMZM.js";import{P as R,L as p,a as u,M}from"./LayoutContent-C1UeSbmt.js";import{c as z}from"./createLucideIcon-CmxgNO3A.js";import{B}from"./Button-Bt5uFCnx.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlledState-CqQWqGWO.js";import"./useFocusRing-C7oRwYv0.js";import"./utils-CXltNwJi.js";import"./index-B5JE_P2G.js";import"./index-BObIBW6r.js";import"./animation-BCoMn1WX.js";import"./PanelTitle-D547IgyX.js";import"./clsx-Ciqy0D92.js";import"./Text-BV9SFXbp.js";import"./Text-gI7geXGi.js";import"./x-CuQKBrfl.js";import"./useLocalizedStringFormatter-Dei12d-p.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Ct2gBhbQ.js";import"./Hidden-DC53IPGT.js";import"./useLabel-CzBIgrEB.js";import"./useLabels-L34wTJFT.js";import"./useButton-1kWau5nf.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-WVnnRw_3.js";const k=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],T=z("ellipsis",k),V=b.createContext({panels:[],panelVariant:"overlay",addPanel:()=>{},closePanel:()=>{},removePanel:()=>{},resetPromoting:()=>{}});try{V.displayName="PanelContext",V.__docgenInfo={description:"",displayName:"PanelContext",props:{}}}catch{}const l=({children:n,defaultPanels:r=[],panelBehavior:o="replace",panelVariant:h="overlay"})=>{const[y,m]=b.useState(r.map(s=>({...s,isOpen:!0,defaultOpen:!0}))),q=s=>{m(t=>{if(o==="replace")return[{...s,isOpen:!0}];const a=t.findIndex(i=>i.id===s.id);if(a===-1)return[...t,{...s,isOpen:!0}];if(o==="bring-to-front"){if(a===t.length-1)return t;const i=t[a];return[...t.filter(A=>A.id!==s.id),{...i,isOpen:!0,promoting:!0}]}return o==="pop-to"?t.map((i,A)=>A>a?{...i,isOpen:!1}:i):t})},w=s=>{m(t=>t.map(a=>a.id===s?{...a,isOpen:!1}:a))},I=s=>{m(t=>t.filter(a=>a.id!==s))},d=s=>{m(t=>t.map(a=>a.id===s?{...a,promoting:!1}:a))};return e.jsx(V.Provider,{value:{panels:y,panelVariant:h,addPanel:q,closePanel:w,removePanel:I,resetPromoting:d},children:n})};try{l.displayName="PanelProvider",l.__docgenInfo={description:"",displayName:"PanelProvider",props:{defaultPanels:{defaultValue:{value:"[]"},description:"",name:"defaultPanels",required:!1,type:{name:"PanelItem[]"}},panelBehavior:{defaultValue:{value:"replace"},description:"",name:"panelBehavior",required:!1,type:{name:"enum",value:[{value:'"replace"'},{value:'"bring-to-front"'},{value:'"pop-to"'}]}},panelVariant:{defaultValue:{value:"overlay"},description:"",name:"panelVariant",required:!1,type:{name:"enum",value:[{value:'"push"'},{value:'"overlay"'}]}}}}}catch{}const D=()=>b.useContext(V),W="_push_1p7tl_1",F={push:W},c=({children:n,className:r,...o})=>{const{panels:h,panelVariant:y,closePanel:m,removePanel:q,resetPromoting:w}=D(),I=h.length>0;return e.jsxs("div",{className:N(r,y==="push"&&F.push),"data-open":y==="push"&&I?!0:void 0,...o,children:[h.map(({id:d,...s},t,{length:a})=>e.jsx(R,{"aria-hidden":t<a-1||void 0,id:d,onOpenChange:i=>{i||m(d)},onExited:()=>q(d),onPromotionEnd:()=>w(d),...s},d)),n]})};try{c.displayName="PanelRegion",c.__docgenInfo={description:"",displayName:"PanelRegion",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const Q=["Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates mollitia natus beatae libero tenetur accusantium harum rem voluptatum blanditiis.","Odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit. Vel ipsum veritatis quisquam amet rem aperiam error nostrum earum consequuntur.","Quidem fugit blanditiis odit corrupti consequatur nam culpa nesciunt. Cupiditate autem suscipit asperiores expedita excepturi hic modi tenetur maxime.","Dicta omnis aliquam quas doloremque cumque repellendus iure. Eveniet reprehenderit sapiente quidem culpa nam vel ipsum veritatis quisquam amet.","Rem aperiam error nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit."],E=Q.map((n,r)=>e.jsx("p",{style:{margin:"0 0 1rem"},children:n},r)),je={component:R,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[n=>e.jsx(p,{children:e.jsx(u,{children:e.jsx(n,{})})})]},g={args:{defaultOpen:!0}},P={render:n=>{const[r,o]=b.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(M,{style:{display:"flex",gap:"0.5rem",padding:"1rem",alignItems:"flex-start"},children:[e.jsx(B,{onPress:()=>o(!0),children:"Open panel"}),e.jsx(B,{variant:"secondary",onPress:()=>o(!1),children:"Dismiss panel"})]}),e.jsx(R,{...n,isOpen:r,onOpenChange:o})]})}},j={args:{defaultOpen:!0,actions:e.jsx(B,{variant:"icon",size:"medium","aria-label":"More options",children:e.jsx(T,{size:20})})}},f={args:{defaultOpen:!0,children:E}};function x(){const{addPanel:n}=D(),r=[{id:"panel-a",title:"Panel A"},{id:"panel-b",title:"Panel B"},{id:"panel-c",title:"Panel C"}];return e.jsx(M,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[e.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:r.map(o=>e.jsxs(B,{variant:"secondary",size:"medium",onPress:()=>n(o),children:["Open ",o.title]},o.id))}),E]})})}const v={decorators:[n=>e.jsx(l,{panelBehavior:"replace",children:e.jsx(p,{children:e.jsxs(u,{children:[e.jsx(x,{}),e.jsx(c,{})]})})})],render:()=>e.jsx("span",{})},_={decorators:[n=>e.jsx(l,{panelBehavior:"bring-to-front",children:e.jsx(p,{children:e.jsxs(u,{children:[e.jsx(x,{}),e.jsx(c,{})]})})})],render:()=>e.jsx("span",{})},C={decorators:[n=>e.jsx(l,{panelBehavior:"pop-to",children:e.jsx(p,{children:e.jsxs(u,{children:[e.jsx(x,{}),e.jsx(c,{})]})})})],render:()=>e.jsx("span",{})},S={decorators:[n=>e.jsx(l,{panelVariant:"overlay",children:e.jsx(p,{children:e.jsxs(u,{children:[e.jsx(x,{}),e.jsx(c,{})]})})})],render:()=>e.jsx("span",{})},O={decorators:[n=>e.jsx(l,{panelVariant:"push",children:e.jsx(p,{children:e.jsxs(u,{children:[e.jsx(x,{}),e.jsx(c,{})]})})})],render:()=>e.jsx("span",{})},U=[{id:"1",name:"Application #1042",status:"Pending",date:"2026-03-12",notes:"Awaiting document submission from applicant."},{id:"2",name:"Application #1043",status:"Approved",date:"2026-03-14",notes:"All documents verified. Decision letter sent."},{id:"3",name:"Application #1044",status:"Under review",date:"2026-03-15",notes:"Assigned to case officer. Background check in progress."},{id:"4",name:"Application #1045",status:"Rejected",date:"2026-03-18",notes:"Missing supporting documents. Applicant notified."}];function G(){const{addPanel:n}=D();return e.jsx(M,{style:{padding:"1rem"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.875rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{textAlign:"left",borderBottom:"1px solid #ccc"},children:[e.jsx("th",{style:{padding:"0.5rem"},children:"Name"}),e.jsx("th",{style:{padding:"0.5rem"},children:"Status"}),e.jsx("th",{style:{padding:"0.5rem"},children:"Date"})]})}),e.jsx("tbody",{children:U.map(r=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee",cursor:"pointer"},onClick:()=>n({id:"detail",title:r.name,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem",fontSize:"0.875rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Status:"})," ",r.status]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Date:"})," ",r.date]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Notes:"})," ",r.notes]})]})}),children:[e.jsx("td",{style:{padding:"0.5rem"},children:r.name}),e.jsx("td",{style:{padding:"0.5rem"},children:r.status}),e.jsx("td",{style:{padding:"0.5rem"},children:r.date})]},r.id))})]})})}const L={decorators:[n=>e.jsx(l,{panelBehavior:"replace",panelVariant:"push",children:e.jsx(p,{children:e.jsxs(u,{children:[e.jsx(G,{}),e.jsx(c,{})]})})})],render:()=>e.jsx("span",{})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    actions: <Button variant='icon' size='medium' aria-label='More options'>
        <Ellipsis size={20} />
      </Button>
  }
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    children: loremIpsum
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='replace'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelVariant='overlay'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...S.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelVariant='push'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='replace' panelVariant='push'>
        <Layout>
          <LayoutContent>
            <DetailViewControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...L.parameters?.docs?.source}}};const fe=["Primary","Controlled","WithActions","WithScrollableContent","BehaviorReplace","BehaviorBringToFront","BehaviorPopTo","VariantOverlay","VariantPush","DetailView"];export{_ as BehaviorBringToFront,C as BehaviorPopTo,v as BehaviorReplace,P as Controlled,L as DetailView,g as Primary,S as VariantOverlay,O as VariantPush,j as WithActions,f as WithScrollableContent,fe as __namedExportsOrder,je as default};
