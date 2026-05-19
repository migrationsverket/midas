import{r as q,j as e}from"./iframe-BEKS4YDN.js";import{c as z}from"./clsx-B-dksMZM.js";import{P as R,L as d,a as m,M as w}from"./LayoutContent-DHqbz15A.js";import{c as T}from"./createLucideIcon-BWz3rFdE.js";import{B as L}from"./Button-D3aX5HrM.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlledState-BJkUh9eQ.js";import"./useFocusRing-BhpyH7yS.js";import"./utils-xO_879NF.js";import"./index-C_TP6Ur2.js";import"./index-CEolt4Rx.js";import"./animation-BVzisHFw.js";import"./PanelTitle-ZhtzRyA7.js";import"./clsx-Ciqy0D92.js";import"./Text-BfCSkgj0.js";import"./Text-BZzeA2Vt.js";import"./x-DI99KDwB.js";import"./useLocalizedStringFormatter-CYPaady4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BPvFIvh-.js";import"./Hidden-CwtVgZCk.js";import"./useLabel-CSn61wWa.js";import"./useLabels-BHkcg4nS.js";import"./useButton-BxOD9fvd.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DHkZrGra.js";const A=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],D=T("ellipsis",A),B=q.createContext({panels:[],panelVariant:"overlay",addPanel:()=>{},closePanel:()=>{},removePanel:()=>{},resetPromoting:()=>{}});try{B.displayName="PanelContext",B.__docgenInfo={description:"",displayName:"PanelContext",props:{}}}catch{}const p=({children:r,defaultPanels:o=[],panelBehavior:s="replace",panelVariant:x="overlay"})=>{const[P,u]=q.useState(o.map(t=>({...t,isOpen:!0,defaultOpen:!0}))),I=t=>{u(n=>{if(s==="replace")return[{...t,isOpen:!0}];const a=n.findIndex(i=>i.id===t.id);if(a===-1)return[...n,{...t,isOpen:!0}];if(s==="bring-to-front"){if(a===n.length-1)return n;const i=n[a];return[...n.filter(M=>M.id!==t.id),{...i,isOpen:!0,promoting:!0}]}return s==="pop-to"?n.map((i,M)=>M>a?{...i,isOpen:!1}:i):n})},V=t=>{u(n=>n.map(a=>a.id===t?{...a,isOpen:!1}:a))},b=t=>{u(n=>n.filter(a=>a.id!==t))},l=t=>{u(n=>n.map(a=>a.id===t?{...a,promoting:!1}:a))};return e.jsx(B.Provider,{value:{panels:P,panelVariant:x,addPanel:I,closePanel:V,removePanel:b,resetPromoting:l},children:r})};try{p.displayName="PanelProvider",p.__docgenInfo={description:"",displayName:"PanelProvider",props:{defaultPanels:{defaultValue:{value:"[]"},description:"",name:"defaultPanels",required:!1,type:{name:"PanelItem[]"}},panelBehavior:{defaultValue:{value:"replace"},description:"",name:"panelBehavior",required:!1,type:{name:"enum",value:[{value:'"replace"'},{value:'"bring-to-front"'},{value:'"pop-to"'}]}},panelVariant:{defaultValue:{value:"overlay"},description:"",name:"panelVariant",required:!1,type:{name:"enum",value:[{value:'"push"'},{value:'"overlay"'}]}}}}}catch{}const E=()=>q.useContext(B),W="_push_1p7tl_1",k={push:W},c=({children:r,className:o,...s})=>{const{panels:x,panelVariant:P,closePanel:u,removePanel:I,resetPromoting:V}=E(),b=x.length>0;return e.jsxs("div",{className:z(o,P==="push"&&k.push),"data-open":P==="push"&&b?!0:void 0,...s,children:[x.map(({id:l,...t},n,{length:a})=>e.jsx(R,{"aria-hidden":n<a-1||void 0,id:l,onOpenChange:i=>{i||u(l)},onExited:()=>I(l),onPromotionEnd:()=>V(l),...t},l)),r]})};try{c.displayName="PanelRegion",c.__docgenInfo={description:"",displayName:"PanelRegion",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const F=["Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates mollitia natus beatae libero tenetur accusantium harum rem voluptatum blanditiis.","Odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit. Vel ipsum veritatis quisquam amet rem aperiam error nostrum earum consequuntur.","Quidem fugit blanditiis odit corrupti consequatur nam culpa nesciunt. Cupiditate autem suscipit asperiores expedita excepturi hic modi tenetur maxime.","Dicta omnis aliquam quas doloremque cumque repellendus iure. Eveniet reprehenderit sapiente quidem culpa nam vel ipsum veritatis quisquam amet.","Rem aperiam error nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit."],N=F.map((r,o)=>e.jsx("p",{style:{marginBottom:"1rem"},children:r},o)),Pe={component:R,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[r=>e.jsx(d,{children:e.jsx(m,{children:e.jsx(r,{})})})]},h={args:{defaultOpen:!0}},g={render:r=>{const[o,s]=q.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(w,{style:{display:"flex",gap:"0.5rem",padding:"1rem",alignItems:"flex-start"},children:[e.jsx(L,{onPress:()=>s(!0),children:"Open panel"}),e.jsx(L,{variant:"secondary",onPress:()=>s(!1),children:"Dismiss panel"})]}),e.jsx(R,{...r,isOpen:o,onOpenChange:s})]})}},f={args:{defaultOpen:!0,actions:e.jsx(L,{variant:"icon",size:"medium","aria-label":"More options",children:e.jsx(D,{size:20})})}},v={args:{defaultOpen:!0,children:N}};function y(){const{addPanel:r}=E(),o=[{id:"panel-a",title:"Panel A"},{id:"panel-b",title:"Panel B"},{id:"panel-c",title:"Panel C"}];return e.jsx(w,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[e.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:o.map(s=>e.jsxs(L,{variant:"secondary",size:"medium",onPress:()=>r(s),children:["Open ",s.title]},s.id))}),N]})})}const j={decorators:[r=>e.jsx(p,{panelBehavior:"replace",children:e.jsx(d,{children:e.jsxs(m,{children:[e.jsx(y,{}),e.jsx(c,{})]})})})],render:()=>e.jsx("span",{})},_={decorators:[r=>e.jsx(p,{panelBehavior:"bring-to-front",children:e.jsx(d,{children:e.jsxs(m,{children:[e.jsx(y,{}),e.jsx(c,{})]})})})],render:()=>e.jsx("span",{})},O={decorators:[r=>e.jsx(p,{panelBehavior:"pop-to",children:e.jsx(d,{children:e.jsxs(m,{children:[e.jsx(y,{}),e.jsx(c,{})]})})})],render:()=>e.jsx("span",{})},C={decorators:[r=>e.jsx(p,{panelVariant:"overlay",children:e.jsx(d,{children:e.jsxs(m,{children:[e.jsx(y,{}),e.jsx(c,{})]})})})],render:()=>e.jsx("span",{})},S={decorators:[r=>e.jsx(p,{panelVariant:"push",children:e.jsx(d,{children:e.jsxs(m,{children:[e.jsx(y,{}),e.jsx(c,{})]})})})],render:()=>e.jsx("span",{})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='pop-to'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...O.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelVariant='overlay'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelVariant='push'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...S.parameters?.docs?.source}}};const he=["Primary","Controlled","WithActions","WithScrollableContent","BehaviorReplace","BehaviorBringToFront","BehaviorPopTo","VariantOverlay","VariantPush"];export{_ as BehaviorBringToFront,O as BehaviorPopTo,j as BehaviorReplace,g as Controlled,h as Primary,C as VariantOverlay,S as VariantPush,f as WithActions,v as WithScrollableContent,he as __namedExportsOrder,Pe as default};
