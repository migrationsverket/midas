import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./iframe-B7W1qhwj.js";import{b as r,t as i}from"./lucide-react-Czq9it2u.js";import{n as a,t as o}from"./dist-RvIytDmj.js";import{c as s,o as c,t as l}from"./navigation-CyHJFGsc.js";import{a as u,i as d,n as f}from"./navigation-link-yHPFDY5w.js";import{n as p,t as m}from"./Navigation.stories-Bz9AijKw.js";import{i as h,t as g}from"./layout-BO5GmYTJ.js";var _=e({FiveItems:()=>C,OverriddenBreakpoint:()=>S,Primary:()=>x,__namedExportsOrder:()=>w,default:()=>b}),v,y,b,x,S,C,w,T=t((()=>{o(),p(),u(),l(),i(),g(),v=n(),{Flat:y}=a(m),b={component:d,title:`Layout/Navbar`,tags:[`autodocs`],parameters:{layout:`fullscreen`,rootElement:`div`},globals:{viewport:{value:`small`}},args:{children:(0,v.jsx)(y,{})}},x={},S={parameters:{docs:{description:{story:"Wrapping Navbar in `<Layout breakpoint={900}>` moves the mobile/desktop split from the default 640px to 900px. Resize the viewport to see the Navbar stay visible up to 900px instead of 640px."}}},render:e=>(0,v.jsx)(h,{breakpoint:900,children:(0,v.jsx)(d,{...e})})},C={args:{children:(0,v.jsx)(s,{children:[`Första`,`Andra`,`Tredje`,`Fjärde`,`Femte`].map((e,t)=>(0,v.jsx)(c,{children:(0,v.jsx)(f,{href:`#`,icon:(0,v.jsx)(r,{}),isActive:t===0,children:e})},e))})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Wrapping Navbar in \`<Layout breakpoint={900}>\` moves the mobile/desktop split from the default 640px to 900px. Resize the viewport to see the Navbar stay visible up to 900px instead of 640px.'
      }
    }
  },
  render: args => <Layout breakpoint={900}>
      <Navbar {...args} />
    </Layout>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Navigation>
        {['Första', 'Andra', 'Tredje', 'Fjärde', 'Femte'].map((title, i) => <NavigationItem key={title}>
            <NavigationLink href='#' icon={<Plus />} isActive={i === 0}>
              {title}
            </NavigationLink>
          </NavigationItem>)}
      </Navigation>
  }
}`,...C.parameters?.docs?.source}}},w=[`Primary`,`OverriddenBreakpoint`,`FiveItems`]}));T();export{C as FiveItems,S as OverriddenBreakpoint,x as Primary,w as __namedExportsOrder,b as default,T as n,_ as t};