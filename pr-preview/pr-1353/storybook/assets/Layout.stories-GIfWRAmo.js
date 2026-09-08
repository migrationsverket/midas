import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BW2g9V1x.js";import{n,t as r}from"./dist-Bb5Oro5G.js";import{r as i,u as a}from"./LayoutBreakpointContext-BT3pyjKq.js";import{n as o,t as s}from"./Header.stories-BP4BqAr2.js";import{n as c,t as l}from"./Sidebar.stories-CHwyhGfQ.js";import{i as u,n as d,t as f}from"./layout-DHxqxET4.js";import{n as p,t as m}from"./Navbar.stories-BCnijgIN.js";import{n as h,t as g}from"./main-wj4GvOoy.js";var _,v,y,b,x,S,C,w,T;e((()=>{r(),o(),c(),p(),g(),f(),i(),_=t(),{Desktop:v,Mobile:y}=n(s),{Primary:b}=n(l),{Primary:x}=n(m),S={component:u,title:`Layout/Layout`,tags:[`autodocs`],args:{children:`Content`},parameters:{layout:`fullscreen`,rootElement:`div`}},C={render:e=>(0,_.jsxs)(u,{...e,children:[(0,_.jsx)(y,{}),(0,_.jsxs)(d,{children:[(0,_.jsx)(b,{}),(0,_.jsx)(h,{children:`Content`}),(0,_.jsx)(a,{id:`panel`,defaultOpen:!0,title:`Panel`})]})]})},w={globals:{viewport:{value:`small`}},render:e=>(0,_.jsxs)(u,{...e,children:[(0,_.jsx)(v,{}),(0,_.jsxs)(d,{children:[(0,_.jsx)(b,{}),(0,_.jsx)(h,{children:`Content`}),(0,_.jsx)(a,{id:`panel`,defaultOpen:!0,title:`Panel`})]}),(0,_.jsx)(x,{})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <Layout {...args}>
      <HeaderWithMobileMenu />
      <LayoutContent>
        <PrimarySidebar />
        <Main>Content</Main>
        <Panel id='panel' defaultOpen title='Panel' />
      </LayoutContent>
    </Layout>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'small'
    }
  },
  render: args => <Layout {...args}>
      <PrimaryHeader />
      <LayoutContent>
        <PrimarySidebar />
        <Main>Content</Main>
        <Panel id='panel' defaultOpen title='Panel' />
      </LayoutContent>
      <PrimaryNavbar />
    </Layout>
}`,...w.parameters?.docs?.source}}},T=[`WithMobileMenu`,`WithNavbar`]}))();export{C as WithMobileMenu,w as WithNavbar,T as __namedExportsOrder,S as default};