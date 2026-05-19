import{r as q,j as e}from"./iframe-TmYtQgnY.js";import{c as N}from"./clsx-B-dksMZM.js";import{P as M,L as d,a as m,M as R}from"./LayoutContent-CK_82TYX.js";import{c as z}from"./createLucideIcon-DeoFDGGs.js";import{B as L}from"./Button-CPisJxWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlledState-D8j9ZCcX.js";import"./useFocusRing-DS5bIIsk.js";import"./utils-DvgYso-7.js";import"./index-DGnVoJP5.js";import"./index-OGPoH8qw.js";import"./animation-DoKEYHsK.js";import"./PanelTitle-ClAtGWbW.js";import"./clsx-Ciqy0D92.js";import"./Text-T0trnrKS.js";import"./Text-Buf9POGu.js";import"./x-WIEiNIRj.js";import"./useLocalizedStringFormatter-C2tRJrok.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-ChpfMuYO.js";import"./Hidden-Curp_cq_.js";import"./useLabel-DGzhZIfH.js";import"./useLabels-CrE4xl9O.js";import"./useButton-Lm3tezld.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bad1FF8A.js";const T=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],A=z("ellipsis",T),B=q.createContext({panels:[],panelVariant:"overlay",addPanel:()=>{},closePanel:()=>{},removePanel:()=>{},resetPromoting:()=>{}});try{B.displayName="PanelContext",B.__docgenInfo={description:"",displayName:"PanelContext",props:{}}}catch{}const c=({children:r,defaultPanels:s=[],panelBehavior:o="replace",panelVariant:x="overlay"})=>{const[P,u]=q.useState(s.map(t=>({...t,isOpen:!0,defaultOpen:!0}))),b=t=>{u(n=>{if(o==="replace")return[{...t,isOpen:!0}];const a=n.findIndex(i=>i.id===t.id);if(a===-1)return[...n,{...t,isOpen:!0}];if(o==="bring-to-front"){if(a===n.length-1)return n;const i=n[a];return[...n.filter(w=>w.id!==t.id),{...i,isOpen:!0,promoting:!0}]}return o==="pop-to"?n.map((i,w)=>w>a?{...i,isOpen:!1}:i):n})},I=t=>{u(n=>n.map(a=>a.id===t?{...a,isOpen:!1}:a))},V=t=>{u(n=>n.filter(a=>a.id!==t))},l=t=>{u(n=>n.map(a=>a.id===t?{...a,promoting:!1}:a))};return e.jsx(B.Provider,{value:{panels:P,panelVariant:x,addPanel:b,closePanel:I,removePanel:V,resetPromoting:l},children:r})};try{c.displayName="PanelProvider",c.__docgenInfo={description:"",displayName:"PanelProvider",props:{defaultPanels:{defaultValue:{value:"[]"},description:"",name:"defaultPanels",required:!1,type:{name:"PanelItem[]"}},panelBehavior:{defaultValue:{value:"replace"},description:"",name:"panelBehavior",required:!1,type:{name:"enum",value:[{value:'"replace"'},{value:'"bring-to-front"'},{value:'"pop-to"'}]}},panelVariant:{defaultValue:{value:"overlay"},description:"",name:"panelVariant",required:!1,type:{name:"enum",value:[{value:'"push"'},{value:'"overlay"'}]}}}}}catch{}const E=()=>q.useContext(B),D="_push_1btw0_1",W={push:D},p=({children:r,className:s,...o})=>{const{panels:x,panelVariant:P,closePanel:u,removePanel:b,resetPromoting:I}=E(),V=x.length>0;return e.jsxs("div",{className:N(s,P==="push"&&W.push),"data-open":P==="push"&&V?!0:void 0,...o,children:[x.map(({id:l,...t},n,{length:a})=>e.jsx(M,{"aria-hidden":n<a-1||void 0,id:l,onOpenChange:i=>{i||u(l)},onExited:()=>b(l),onPromotionEnd:()=>I(l),...t},l)),r]})};try{p.displayName="PanelRegion",p.__docgenInfo={description:"",displayName:"PanelRegion",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const k=["Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates mollitia natus beatae libero tenetur accusantium harum rem voluptatum blanditiis.","Odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit. Vel ipsum veritatis quisquam amet rem aperiam error nostrum earum consequuntur.","Quidem fugit blanditiis odit corrupti consequatur nam culpa nesciunt. Cupiditate autem suscipit asperiores expedita excepturi hic modi tenetur maxime.","Dicta omnis aliquam quas doloremque cumque repellendus iure. Eveniet reprehenderit sapiente quidem culpa nam vel ipsum veritatis quisquam amet.","Rem aperiam error nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit."],F=k.map((r,s)=>e.jsx("p",{style:{marginBottom:"1rem"},children:r},s)),Pe={component:M,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[r=>e.jsx(d,{children:e.jsx(m,{children:e.jsx(r,{})})})]},g={args:{defaultOpen:!0}},h={render:r=>{const[s,o]=q.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(R,{style:{display:"flex",gap:"0.5rem",padding:"1rem",alignItems:"flex-start"},children:[e.jsx(L,{onPress:()=>o(!0),children:"Open panel"}),e.jsx(L,{variant:"secondary",onPress:()=>o(!1),children:"Dismiss panel"})]}),e.jsx(M,{...r,isOpen:s,onOpenChange:o})]})}},f={args:{defaultOpen:!0,actions:e.jsx(L,{variant:"icon",size:"medium","aria-label":"More options",children:e.jsx(A,{size:20})})}},v={args:{defaultOpen:!0,children:F}};function y(){const{addPanel:r}=E(),s=[{id:"panel-a",title:"Panel A"},{id:"panel-b",title:"Panel B"},{id:"panel-c",title:"Panel C"}];return e.jsx(R,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[e.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:s.map(o=>e.jsxs(L,{variant:"secondary",size:"medium",onPress:()=>r(o),children:["Open ",o.title]},o.id))}),F]})})}const j={decorators:[r=>e.jsx(c,{panelBehavior:"replace",children:e.jsx(d,{children:e.jsxs(m,{children:[e.jsx(y,{}),e.jsx(p,{})]})})})],render:()=>e.jsx(e.Fragment,{})},_={decorators:[r=>e.jsx(c,{panelBehavior:"bring-to-front",children:e.jsx(d,{children:e.jsxs(m,{children:[e.jsx(y,{}),e.jsx(p,{})]})})})],render:()=>e.jsx(e.Fragment,{})},O={decorators:[r=>e.jsx(c,{panelBehavior:"pop-to",children:e.jsx(d,{children:e.jsxs(m,{children:[e.jsx(y,{}),e.jsx(p,{})]})})})],render:()=>e.jsx(e.Fragment,{})},C={decorators:[r=>e.jsx(c,{panelVariant:"overlay",children:e.jsx(d,{children:e.jsxs(m,{children:[e.jsx(y,{}),e.jsx(p,{})]})})})],render:()=>e.jsx(e.Fragment,{})},S={decorators:[r=>e.jsx(c,{panelVariant:"push",children:e.jsx(d,{children:e.jsxs(m,{children:[e.jsx(y,{}),e.jsx(p,{})]})})})],render:()=>e.jsx(e.Fragment,{})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
  render: () => <></>
}`,...j.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='bring-to-front'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <></>
}`,..._.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='pop-to'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <></>
}`,...O.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelVariant='overlay'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <></>
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelVariant='push'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <></>
}`,...S.parameters?.docs?.source}}};const ge=["Primary","Controlled","WithActions","WithScrollableContent","BehaviorReplace","BehaviorBringToFront","BehaviorPopTo","VariantOverlay","VariantPush"];export{_ as BehaviorBringToFront,O as BehaviorPopTo,j as BehaviorReplace,h as Controlled,g as Primary,C as VariantOverlay,S as VariantPush,f as WithActions,v as WithScrollableContent,ge as __namedExportsOrder,Pe as default};
