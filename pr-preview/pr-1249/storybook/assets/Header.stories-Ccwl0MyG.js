import{j as e}from"./iframe-Di5CTR8T.js";import{c as t}from"./index-DWFSnfZf.js";import{h as c}from"./HeaderActions.stories-k-iofK_h.js";import{M as m}from"./MobileMenu.stories-B3XfqoJX.js";import{c as p}from"./clsx-B-dksMZM.js";import{a as u,L as i}from"./Logo-BDjZ4vWY.js";import{u as y}from"./useIsMobileDevice-DId6iuCV.js";const x="_header_i5439_1",f={header:x},o=({className:a,...l})=>{const d=y();return e.jsx(u.Provider,{value:{size:d?"x-small":"large"},children:e.jsx("header",{className:p(a,f.header),...l})})};try{o.displayName="Header",o.__docgenInfo={description:"",displayName:"Header",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const{Primary:n}=t(c),{Primary:h}=t(m),_={component:o,title:"Layout/Header",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"}},r={render:()=>e.jsxs(o,{children:[e.jsx(i,{}),e.jsx(n,{})]})},s={render:()=>e.jsxs(o,{children:[e.jsx(h,{}),e.jsx(i,{}),e.jsx(n,{})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Header>
      <Logo />
      <PrimaryHeaderActions />
    </Header>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Header>
      <PrimaryMobileMenu />
      <Logo />
      <PrimaryHeaderActions />
    </Header>
}`,...s.parameters?.docs?.source}}};const g=["Primary","WithMobileMenu"],v=Object.freeze(Object.defineProperty({__proto__:null,Primary:r,WithMobileMenu:s,__namedExportsOrder:g,default:_},Symbol.toStringTag,{value:"Module"}));export{v as h};
