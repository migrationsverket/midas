import{j as e}from"./iframe-Dw-35drA.js";import{c as u}from"./clsx-Ciqy0D92.js";import{$ as v}from"./Link-DjWEMUDv.js";import{H as m}from"./house-DHudYoDO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./utils-CUGO82B6.js";import"./useFocusRing-BNamEjDv.js";import"./index-CtEHNpSJ.js";import"./index-DiZcibWP.js";import"./createLucideIcon-Ct15IBRs.js";const h="_layout_15ygh_1",f={layout:h},l=({children:a})=>e.jsx("div",{className:f.layout,children:a});try{l.displayName="Layout",l.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}const x="_header_13yz9_1",N={header:x},o=({children:a})=>e.jsx("header",{className:N.header,children:a});try{o.displayName="Header",o.__docgenInfo={description:"",displayName:"Header",props:{}}}catch{}const b="_panel_yuu1f_1",j={panel:b},t=({children:a,className:i,...r})=>e.jsx("aside",{className:u(i,j.panel),...r,children:a});try{t.displayName="Panel",t.__docgenInfo={description:"",displayName:"Panel",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const k="_navbar_zxsyj_1",L={navbar:k},c=({children:a})=>e.jsx("nav",{className:L.navbar,children:a});try{c.displayName="Navbar",c.__docgenInfo={description:"",displayName:"Navbar",props:{}}}catch{}const w="_navigation_10g44_1",H={navigation:w},d=({children:a,className:i,...r})=>e.jsx("nav",{className:u(i,H.navigation),...r,children:a});try{d.displayName="Navigation",d.__docgenInfo={description:"",displayName:"Navigation",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const P="_navigationLink_5kgh3_1",S="_sidebar_5kgh3_12",$="_navbar_5kgh3_18",p={navigationLink:P,sidebar:S,navbar:$},n=({as:a,className:i,isActive:r,variant:g="sidebar",..._})=>{const y=a||v;return e.jsx(y,{"aria-current":r&&"page",className:u(i,p.navigationLink,{[p.sidebar]:g==="sidebar",[p.navbar]:g==="navbar"}),"data-active":r||void 0,..._})};try{n.displayName="NavigationLink",n.__docgenInfo={description:"",displayName:"NavigationLink",props:{variant:{defaultValue:{value:"sidebar"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"sidebar"'},{value:'"navbar"'}]}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:`Replace base component with any Client Side Routing link instead.
@see {@link https://designsystem.migrationsverket.se/dev/client-side-routing/ Client side routing}`,name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const B={component:l,subcomponents:{Header:o,Navbar:c,Navigation:d,NavigationLink:n,Panel:t},title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},s={render:({children:a,...i})=>e.jsxs(l,{...i,children:[e.jsx(o,{children:"Header"}),e.jsx(t,{"aria-label":"left panel",children:e.jsx(d,{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(n,{href:"/",isActive:!0,children:[e.jsx(m,{}),"Hem"]})}),e.jsxs("li",{children:[e.jsx(n,{href:"/categories",children:"Kategorier"}),e.jsxs("ul",{"aria-label":"Sidor",children:[e.jsx("li",{children:e.jsx(n,{href:"/categories/products",children:"Produkter"})}),e.jsx("li",{children:e.jsx(n,{href:"/categories/services",children:"Tjänster"})})]})]})]})})}),e.jsx("main",{style:{height:"5rem",padding:"1rem"},children:a}),e.jsx(t,{"aria-label":"right panel",style:{gridArea:"panelRight"},children:"Panel"}),e.jsx(c,{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(n,{href:"/",isActive:!0,variant:"navbar",children:[e.jsx(m,{}),"Hem"]})}),e.jsx("li",{children:e.jsx(n,{href:"/categories",variant:"navbar",children:"Kategorier"})})]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => <Layout {...rest}>
      <Header>Header</Header>
      <Panel aria-label='left panel'>
        <Navigation>
          <ul>
            <li>
              <NavigationLink href='/' isActive>
                <House />
                Hem
              </NavigationLink>
            </li>
            <li>
              <NavigationLink href='/categories'>Kategorier</NavigationLink>
              <ul aria-label='Sidor'>
                <li>
                  <NavigationLink href='/categories/products'>
                    Produkter
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink href='/categories/services'>
                    Tjänster
                  </NavigationLink>
                </li>
              </ul>
            </li>
          </ul>
        </Navigation>
      </Panel>
      <main style={{
      height: '5rem',
      padding: '1rem'
    }}>{children}</main>
      <Panel aria-label='right panel' style={{
      gridArea: 'panelRight'
    }}>
        Panel
      </Panel>
      <Navbar>
        <ul>
          <li>
            <NavigationLink href='/' isActive variant='navbar'>
              <House />
              Hem
            </NavigationLink>
          </li>
          <li>
            <NavigationLink href='/categories' variant='navbar'>
              Kategorier
            </NavigationLink>
          </li>
        </ul>
      </Navbar>
    </Layout>
}`,...s.parameters?.docs?.source}}};const D=["Primary"];export{s as Primary,D as __namedExportsOrder,B as default};
