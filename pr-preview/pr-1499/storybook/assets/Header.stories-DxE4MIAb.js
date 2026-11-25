import{n as e,r as t}from"./rolldown-runtime-BCiCTKAo.js";import{n,t as r}from"./clsx-DCdnwCma.js";import{n as i,t as ee}from"./createLucideIcon-B8cGKaCi.js";import{n as a,t as o}from"./search-BkC39ptA.js";import{n as s,t as c}from"./Logo-BqJLkKPi.js";import{n as l}from"./iframe-CkIKKzu0.js";import{n as u,t as te}from"./dist-C-uAHF4z.js";import{n as d,t as f}from"./HeaderAction-DU5l7BCL.js";import{i as p,n as m,r as ne,t as h}from"./HeaderActions.stories-D0YE56XQ.js";import{n as g,t as _}from"./MobileMenu.stories-shxYGbG_.js";var v,y;function b(){return(b=e((()=>{i(),v={name:`globe`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]},v.node,y=ee(v)})))()}var x,S,C,w,T;function E(){return(E=e((()=>{x=`_mobile_129z9_4`,S=`_desktop_129z9_5`,C=`_mobileLogo_129z9_21`,w=`_desktopLogo_129z9_27`,T={mobile:x,desktop:S,mobileLogo:C,desktopLogo:w}})))()}var D,O;function k(){return(k=e((()=>{s(),E(),D=l(),O=({primary:e})=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`div`,{className:T.mobile,children:(0,D.jsx)(c,{size:`x-small`,primary:e,padding:!1,className:T.mobileLogo})}),(0,D.jsx)(`div`,{className:T.desktop,children:(0,D.jsx)(c,{size:`small`,primary:e,padding:!1,className:T.desktopLogo})})]}),O.__docgenInfo={description:``,methods:[],displayName:`HeaderLogo`,props:{primary:{required:!1,tsType:{name:`boolean`},description:`Shows the logo in its primary colour, set to false for the monochrome
version

@default true`}}}})))()}var A,j;function M(){return(M=e((()=>{A=`_headerTitle_cw9hi_1`,j={headerTitle:A}})))()}var N,P;function F(){return(F=e((()=>{n(),M(),N=l(),P=({className:e,...t})=>(0,N.jsx)(`span`,{className:r(j.headerTitle,e),...t}),P.__docgenInfo={description:``,methods:[],displayName:`HeaderTitle`}})))()}var I,L;function R(){return(R=e((()=>{I=`_header_1eyli_1`,L={header:I}})))()}var z,B;function V(){return(V=e((()=>{n(),R(),z=l(),B=({className:e,...t})=>(0,z.jsx)(`header`,{className:r(e,L.header),...t}),B.__docgenInfo={description:``,methods:[],displayName:`Header`}})))()}var H=t({Desktop:()=>J,DesktopVerticalActions:()=>X,Mobile:()=>Y,MobileVerticalActions:()=>Z,__namedExportsOrder:()=>Q,default:()=>q}),U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{te(),b(),a(),m(),g(),V(),d(),p(),k(),F(),U=l(),{Primary:W,Vertical:G}=u(h),{Primary:K}=u(_),q={component:B,title:`Layout/Header`,tags:[`autodocs`],parameters:{layout:`fullscreen`,rootElement:`div`}},J={render:()=>(0,U.jsxs)(B,{children:[(0,U.jsx)(O,{}),(0,U.jsx)(P,{children:`System name`}),(0,U.jsx)(W,{})]})},Y={globals:{viewport:{value:`small`}},render:()=>(0,U.jsxs)(B,{children:[(0,U.jsx)(K,{}),(0,U.jsx)(O,{}),(0,U.jsx)(P,{children:`System name`}),(0,U.jsx)(W,{})]})},X={render:()=>(0,U.jsxs)(B,{children:[(0,U.jsx)(O,{}),(0,U.jsx)(P,{children:`System name`}),(0,U.jsx)(G,{})]})},Z={globals:{viewport:{value:`smallest`}},render:()=>(0,U.jsxs)(B,{children:[(0,U.jsx)(K,{}),(0,U.jsx)(O,{}),(0,U.jsxs)(ne,{orientation:`vertical`,children:[(0,U.jsx)(f,{icon:(0,U.jsx)(o,{size:20}),children:`Sök`}),(0,U.jsx)(f,{icon:(0,U.jsx)(y,{size:20}),children:`Språk`})]})]})},Q=[`Desktop`,`Mobile`,`DesktopVerticalActions`,`MobileVerticalActions`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Header>
      <HeaderLogo />
      <HeaderTitle>System name</HeaderTitle>
      <PrimaryHeaderActions />
    </Header>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'small'
    }
  },
  render: () => <Header>
      <PrimaryMobileMenu />
      <HeaderLogo />
      <HeaderTitle>System name</HeaderTitle>
      <PrimaryHeaderActions />
    </Header>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Header>
      <HeaderLogo />
      <HeaderTitle>System name</HeaderTitle>
      <VerticalHeaderActions />
    </Header>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'smallest'
    }
  },
  render: () => <Header>
      <PrimaryMobileMenu />
      <HeaderLogo />
      <HeaderActions orientation='vertical'>
        <HeaderAction icon={<Search size={20} />}>Sök</HeaderAction>
        <HeaderAction icon={<Globe size={20} />}>Språk</HeaderAction>
      </HeaderActions>
    </Header>
}`,...Z.parameters?.docs?.source},description:{story:`Vertical actions keep their labels on small screens, so only a few short ones fit`,...Z.parameters?.docs?.description}}}})))()}export{$ as n,H as t};