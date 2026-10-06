import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{n,t as r}from"./clsx-Qb-WgvrD.js";import{n as i}from"./iframe-CTMXzXR5.js";import{n as a,t as o}from"./Button-BoGadPcN.js";import{n as s,t as c}from"./createLucideIcon-BrsN-CPt.js";import{a as l,c as u,i as ee,n as d,o as te,r as f,s as p,t as m}from"./LayoutContent-BHb6Wq9V.js";var h,g;function _(){return(_=e((()=>{s(),h=[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`19`,cy:`12`,r:`1`,key:`1wjl8i`}],[`circle`,{cx:`5`,cy:`12`,r:`1`,key:`1pcz8c`}]],g=c(`ellipsis`,h)})))()}var v,y,b;function x(){return(x=e((()=>{v=t(),y=e=>null,y.displayName=`usePanels`,b=(0,v.createContext)({panels:[],panelVariant:`overlay`,addPanel:()=>{},closePanel:()=>{},removePanel:()=>{},resetPromoting:()=>{}})})))()}var S,C,w;function T(){return(T=e((()=>{S=t(),x(),C=i(),w=({children:e,defaultPanels:t=[],panelBehavior:n=`replace`,panelVariant:r=`overlay`})=>{let[i,a]=(0,S.useState)(t.map(e=>({...e,isOpen:!0,defaultOpen:!0})));return(0,C.jsx)(b.Provider,{value:{panels:i,panelVariant:r,addPanel:e=>{a(t=>{if(n===`replace`)return[{...e,isOpen:!0}];let r=t.findIndex(t=>t.id===e.id);if(r===-1)return[...t,{...e,isOpen:!0}];if(n===`bring-to-front`){if(r===t.length-1)return t;let n=t[r];return[...t.filter(t=>t.id!==e.id),{...n,isOpen:!0,promoting:!0}]}return n===`pop-to`?t.map((e,t)=>t>r?{...e,isOpen:!1}:e):t})},closePanel:e=>{a(t=>t.map(t=>t.id===e?{...t,isOpen:!1}:t))},removePanel:e=>{a(t=>t.filter(t=>t.id!==e))},resetPromoting:e=>{a(t=>t.map(t=>t.id===e?{...t,promoting:!1}:t))}},children:e})},w.__docgenInfo={description:``,methods:[],displayName:`PanelProvider`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},defaultPanels:{required:!1,tsType:{name:`Array`,elements:[{name:`PanelItem`}],raw:`PanelItem[]`},description:`Panels to open on mount.`,defaultValue:{value:`[]`,computed:!1}},panelBehavior:{required:!1,tsType:{name:`union`,raw:`'replace' | 'bring-to-front' | 'pop-to'`,elements:[{name:`literal`,value:`'replace'`},{name:`literal`,value:`'bring-to-front'`},{name:`literal`,value:`'pop-to'`}]},description:"Behaviour when opening a panel that is already open.\n\n- `replace` — Replaces all existing panels. Recommended for most use cases.\n- `bring-to-front` — Panels stack; opening an existing panel moves it to the front.\n- `pop-to` — Opening an existing panel closes all panels above it.\n\nShowing one panel at a time is recommended. `replace` reflects this as the default.\nUse `bring-to-front` or `pop-to` only when multiple simultaneous panels are justified.\n\n@default 'replace'",defaultValue:{value:`'replace'`,computed:!1}},panelVariant:{required:!1,tsType:{name:`union`,raw:`'overlay' | 'push'`,elements:[{name:`literal`,value:`'overlay'`},{name:`literal`,value:`'push'`}]},description:`How the panel is displayed relative to the main content.

- \`overlay\` — Panel overlays the main content without affecting its width.
- \`push\` — Panel pushes the main content aside, reducing its available width.

@default 'overlay'`,defaultValue:{value:`'overlay'`,computed:!1}}}}})))()}var E,D;function O(){return(O=e((()=>{E=t(),x(),D=()=>(0,E.useContext)(b)})))()}var k,A;function j(){return(j=e((()=>{k=`_push_xcbfl_1`,A={push:k}})))()}var M,N;function P(){return(P=e((()=>{n(),u(),O(),j(),M=i(),N=({children:e,className:t,...n})=>{let{panels:i,panelVariant:a,closePanel:o,removePanel:s,resetPromoting:c}=D(),l=i.length>0;return(0,M.jsxs)(`div`,{className:r(t,a===`push`&&A.push),"data-open":a===`push`&&l?!0:void 0,...n,children:[i.map(({id:e,...t},n,{length:r})=>(0,M.jsx)(p,{"aria-hidden":n<r-1||void 0,id:e,onOpenChange:t=>{t||o(e)},onExited:()=>s(e),onPromotionEnd:()=>c(e),...t},e)),e]})},N.__docgenInfo={description:``,methods:[],displayName:`PanelRegion`}})))()}function F(){let{addPanel:e}=D();return(0,R.jsx)(l,{children:(0,R.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,padding:`1rem`},children:[(0,R.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[{id:`panel-a`,title:`Panel A`},{id:`panel-b`,title:`Panel B`},{id:`panel-c`,title:`Panel C`}].map(t=>(0,R.jsxs)(o,{variant:`secondary`,size:`medium`,onPress:()=>e(t),children:[`Open `,t.title]},t.id))}),z]})})}function I(){let{addPanel:e}=D();return(0,R.jsx)(l,{style:{padding:`1rem`},children:(0,R.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.875rem`},children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{style:{textAlign:`left`,borderBottom:`1px solid #ccc`},children:[(0,R.jsx)(`th`,{style:{padding:`0.5rem`},children:`Name`}),(0,R.jsx)(`th`,{style:{padding:`0.5rem`},children:`Status`}),(0,R.jsx)(`th`,{style:{padding:`0.5rem`},children:`Date`})]})}),(0,R.jsx)(`tbody`,{children:X.map(t=>(0,R.jsxs)(`tr`,{style:{borderBottom:`1px solid #eee`,cursor:`pointer`},onClick:()=>e({id:`detail`,title:t.name,children:(0,R.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`,fontSize:`0.875rem`},children:[(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`strong`,{children:`Status:`}),` `,t.status]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`strong`,{children:`Date:`}),` `,t.date]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`strong`,{children:`Notes:`}),` `,t.notes]})]})}),children:[(0,R.jsx)(`td`,{style:{padding:`0.5rem`},children:t.name}),(0,R.jsx)(`td`,{style:{padding:`0.5rem`},children:t.status}),(0,R.jsx)(`td`,{style:{padding:`0.5rem`},children:t.date})]},t.id))})]})})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{L=t(),a(),_(),ee(),d(),te(),u(),T(),P(),O(),R=i(),z=[`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates mollitia natus beatae libero tenetur accusantium harum rem voluptatum blanditiis.`,`Odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit. Vel ipsum veritatis quisquam amet rem aperiam error nostrum earum consequuntur.`,`Quidem fugit blanditiis odit corrupti consequatur nam culpa nesciunt. Cupiditate autem suscipit asperiores expedita excepturi hic modi tenetur maxime.`,`Dicta omnis aliquam quas doloremque cumque repellendus iure. Eveniet reprehenderit sapiente quidem culpa nam vel ipsum veritatis quisquam amet.`,`Rem aperiam error nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit.`].map((e,t)=>(0,R.jsx)(`p`,{style:{margin:`0 0 1rem`},children:e},t)),B={component:p,title:`Layout/Panel`,tags:[`autodocs`],parameters:{layout:`fullscreen`,rootElement:`div`},args:{title:`App name`},decorators:[e=>(0,R.jsx)(f,{children:(0,R.jsx)(m,{children:(0,R.jsx)(e,{})})})]},V={args:{defaultOpen:!0}},H={render:e=>{let[t,n]=(0,L.useState)(!1);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(l,{style:{display:`flex`,gap:`0.5rem`,padding:`1rem`,alignItems:`flex-start`},children:[(0,R.jsx)(o,{onPress:()=>n(!0),children:`Open panel`}),(0,R.jsx)(o,{variant:`secondary`,onPress:()=>n(!1),children:`Dismiss panel`})]}),(0,R.jsx)(p,{...e,isOpen:t,onOpenChange:n})]})}},U={args:{defaultOpen:!0,actions:(0,R.jsx)(o,{variant:`icon`,size:`medium`,"aria-label":`More options`,children:(0,R.jsx)(g,{size:20})})}},W={args:{defaultOpen:!0,children:z}},G={decorators:[e=>(0,R.jsx)(w,{panelBehavior:`replace`,children:(0,R.jsx)(f,{children:(0,R.jsxs)(m,{children:[(0,R.jsx)(F,{}),(0,R.jsx)(N,{})]})})})],render:()=>(0,R.jsx)(`span`,{})},K={decorators:[e=>(0,R.jsx)(w,{panelBehavior:`bring-to-front`,children:(0,R.jsx)(f,{children:(0,R.jsxs)(m,{children:[(0,R.jsx)(F,{}),(0,R.jsx)(N,{})]})})})],render:()=>(0,R.jsx)(`span`,{})},q={decorators:[e=>(0,R.jsx)(w,{panelBehavior:`pop-to`,children:(0,R.jsx)(f,{children:(0,R.jsxs)(m,{children:[(0,R.jsx)(F,{}),(0,R.jsx)(N,{})]})})})],render:()=>(0,R.jsx)(`span`,{})},J={decorators:[e=>(0,R.jsx)(w,{panelVariant:`overlay`,children:(0,R.jsx)(f,{children:(0,R.jsxs)(m,{children:[(0,R.jsx)(F,{}),(0,R.jsx)(N,{})]})})})],render:()=>(0,R.jsx)(`span`,{})},Y={decorators:[e=>(0,R.jsx)(w,{panelVariant:`push`,children:(0,R.jsx)(f,{children:(0,R.jsxs)(m,{children:[(0,R.jsx)(F,{}),(0,R.jsx)(N,{})]})})})],render:()=>(0,R.jsx)(`span`,{})},X=[{id:`1`,name:`Application #1042`,status:`Pending`,date:`2026-03-12`,notes:`Awaiting document submission from applicant.`},{id:`2`,name:`Application #1043`,status:`Approved`,date:`2026-03-14`,notes:`All documents verified. Decision letter sent.`},{id:`3`,name:`Application #1044`,status:`Under review`,date:`2026-03-15`,notes:`Assigned to case officer. Background check in progress.`},{id:`4`,name:`Application #1045`,status:`Rejected`,date:`2026-03-18`,notes:`Missing supporting documents. Applicant notified.`}],Z={decorators:[e=>(0,R.jsx)(w,{panelBehavior:`replace`,panelVariant:`push`,children:(0,R.jsx)(f,{children:(0,R.jsxs)(m,{children:[(0,R.jsx)(I,{}),(0,R.jsx)(N,{})]})})})],render:()=>(0,R.jsx)(`span`,{})},Q=[`Primary`,`Controlled`,`WithActions`,`WithScrollableContent`,`BehaviorReplace`,`BehaviorBringToFront`,`BehaviorPopTo`,`VariantOverlay`,`VariantPush`,`DetailView`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    actions: <Button variant='icon' size='medium' aria-label='More options'>
        <Ellipsis size={20} />
      </Button>
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    children: loremIpsum
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='replace'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='bring-to-front'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='pop-to'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelVariant='overlay'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelVariant='push'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='replace' panelVariant='push'>
        <Layout>
          <LayoutContent>
            <DetailViewControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...Z.parameters?.docs?.source}}}})))()}$();export{K as BehaviorBringToFront,q as BehaviorPopTo,G as BehaviorReplace,H as Controlled,Z as DetailView,V as Primary,J as VariantOverlay,Y as VariantPush,U as WithActions,W as WithScrollableContent,Q as __namedExportsOrder,B as default};