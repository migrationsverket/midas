import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{t as r}from"./iframe-B81qnwqQ.js";import{t as i}from"./Button-qwgFoLRS.js";import{Rt as a,t as o}from"./lucide-react-BJU7mAvS.js";import{t as s}from"./src-sBAj9f12.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./panel-DpE8oJzQ.js";import{i as g,n as _,o as v,s as y,t as b}from"./layout-Bueimi1N.js";function x(){let{addPanel:e}=c();return(0,w.jsx)(y,{children:(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,padding:`1rem`},children:[(0,w.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[{id:`panel-a`,title:`Panel A`},{id:`panel-b`,title:`Panel B`},{id:`panel-c`,title:`Panel C`}].map(t=>(0,w.jsxs)(i,{variant:`secondary`,size:`medium`,onPress:()=>e(t),children:[`Open `,t.title]},t.id))}),T]})})}function S(){let{addPanel:e}=c();return(0,w.jsx)(y,{style:{padding:`1rem`},children:(0,w.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.875rem`},children:[(0,w.jsx)(`thead`,{children:(0,w.jsxs)(`tr`,{style:{textAlign:`left`,borderBottom:`1px solid #ccc`},children:[(0,w.jsx)(`th`,{style:{padding:`0.5rem`},children:`Name`}),(0,w.jsx)(`th`,{style:{padding:`0.5rem`},children:`Status`}),(0,w.jsx)(`th`,{style:{padding:`0.5rem`},children:`Date`})]})}),(0,w.jsx)(`tbody`,{children:I.map(t=>(0,w.jsxs)(`tr`,{style:{borderBottom:`1px solid #eee`,cursor:`pointer`},onClick:()=>e({id:`detail`,title:t.name,children:(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`,fontSize:`0.875rem`},children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:`Status:`}),` `,t.status]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:`Date:`}),` `,t.date]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:`Notes:`}),` `,t.notes]})]})}),children:[(0,w.jsx)(`td`,{style:{padding:`0.5rem`},children:t.name}),(0,w.jsx)(`td`,{style:{padding:`0.5rem`},children:t.status}),(0,w.jsx)(`td`,{style:{padding:`0.5rem`},children:t.date})]},t.id))})]})})}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{C=t(n(),1),s(),o(),b(),v(),h(),m(),p(),u(),w=r(),T=[`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates mollitia natus beatae libero tenetur accusantium harum rem voluptatum blanditiis.`,`Odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit. Vel ipsum veritatis quisquam amet rem aperiam error nostrum earum consequuntur.`,`Quidem fugit blanditiis odit corrupti consequatur nam culpa nesciunt. Cupiditate autem suscipit asperiores expedita excepturi hic modi tenetur maxime.`,`Dicta omnis aliquam quas doloremque cumque repellendus iure. Eveniet reprehenderit sapiente quidem culpa nam vel ipsum veritatis quisquam amet.`,`Rem aperiam error nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit.`].map((e,t)=>(0,w.jsx)(`p`,{style:{margin:`0 0 1rem`},children:e},t)),E={component:l,title:`Layout/Panel`,tags:[`autodocs`],parameters:{layout:`fullscreen`,rootElement:`div`},args:{title:`App name`},decorators:[e=>(0,w.jsx)(g,{children:(0,w.jsx)(_,{children:(0,w.jsx)(e,{})})})]},D={args:{defaultOpen:!0}},O={render:e=>{let[t,n]=(0,C.useState)(!1);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(y,{style:{display:`flex`,gap:`0.5rem`,padding:`1rem`,alignItems:`flex-start`},children:[(0,w.jsx)(i,{onPress:()=>n(!0),children:`Open panel`}),(0,w.jsx)(i,{variant:`secondary`,onPress:()=>n(!1),children:`Dismiss panel`})]}),(0,w.jsx)(l,{...e,isOpen:t,onOpenChange:n})]})}},k={args:{defaultOpen:!0,actions:(0,w.jsx)(i,{variant:`icon`,size:`medium`,"aria-label":`More options`,children:(0,w.jsx)(a,{size:20})})}},A={args:{defaultOpen:!0,children:T}},j={decorators:[e=>(0,w.jsx)(f,{panelBehavior:`replace`,children:(0,w.jsx)(g,{children:(0,w.jsxs)(_,{children:[(0,w.jsx)(x,{}),(0,w.jsx)(d,{})]})})})],render:()=>(0,w.jsx)(`span`,{})},M={decorators:[e=>(0,w.jsx)(f,{panelBehavior:`bring-to-front`,children:(0,w.jsx)(g,{children:(0,w.jsxs)(_,{children:[(0,w.jsx)(x,{}),(0,w.jsx)(d,{})]})})})],render:()=>(0,w.jsx)(`span`,{})},N={decorators:[e=>(0,w.jsx)(f,{panelBehavior:`pop-to`,children:(0,w.jsx)(g,{children:(0,w.jsxs)(_,{children:[(0,w.jsx)(x,{}),(0,w.jsx)(d,{})]})})})],render:()=>(0,w.jsx)(`span`,{})},P={decorators:[e=>(0,w.jsx)(f,{panelVariant:`overlay`,children:(0,w.jsx)(g,{children:(0,w.jsxs)(_,{children:[(0,w.jsx)(x,{}),(0,w.jsx)(d,{})]})})})],render:()=>(0,w.jsx)(`span`,{})},F={decorators:[e=>(0,w.jsx)(f,{panelVariant:`push`,children:(0,w.jsx)(g,{children:(0,w.jsxs)(_,{children:[(0,w.jsx)(x,{}),(0,w.jsx)(d,{})]})})})],render:()=>(0,w.jsx)(`span`,{})},I=[{id:`1`,name:`Application #1042`,status:`Pending`,date:`2026-03-12`,notes:`Awaiting document submission from applicant.`},{id:`2`,name:`Application #1043`,status:`Approved`,date:`2026-03-14`,notes:`All documents verified. Decision letter sent.`},{id:`3`,name:`Application #1044`,status:`Under review`,date:`2026-03-15`,notes:`Assigned to case officer. Background check in progress.`},{id:`4`,name:`Application #1045`,status:`Rejected`,date:`2026-03-18`,notes:`Missing supporting documents. Applicant notified.`}],L={decorators:[e=>(0,w.jsx)(f,{panelBehavior:`replace`,panelVariant:`push`,children:(0,w.jsx)(g,{children:(0,w.jsxs)(_,{children:[(0,w.jsx)(S,{}),(0,w.jsx)(d,{})]})})})],render:()=>(0,w.jsx)(`span`,{})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    actions: <Button variant='icon' size='medium' aria-label='More options'>
        <Ellipsis size={20} />
      </Button>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    children: loremIpsum
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='replace'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='bring-to-front'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='pop-to'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelVariant='overlay'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelVariant='push'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  decorators: [_Story => <PanelProvider panelBehavior='replace' panelVariant='push'>
        <Layout>
          <LayoutContent>
            <DetailViewControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>],
  render: () => <span />
}`,...L.parameters?.docs?.source}}},R=[`Primary`,`Controlled`,`WithActions`,`WithScrollableContent`,`BehaviorReplace`,`BehaviorBringToFront`,`BehaviorPopTo`,`VariantOverlay`,`VariantPush`,`DetailView`]}))();export{M as BehaviorBringToFront,N as BehaviorPopTo,j as BehaviorReplace,O as Controlled,L as DetailView,D as Primary,P as VariantOverlay,F as VariantPush,k as WithActions,A as WithScrollableContent,R as __namedExportsOrder,E as default};