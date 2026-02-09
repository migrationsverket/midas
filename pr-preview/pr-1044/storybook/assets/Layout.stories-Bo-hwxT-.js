import{j as e}from"./iframe-c0lnwIw4.js";import{c as m}from"./clsx-Ciqy0D92.js";import{$ as y}from"./Link-CKArECJ_.js";import{H as p}from"./house-D41Thx4x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./utils-CKxPVGJv.js";import"./useFocusRing-DJjkQoU4.js";import"./index-B1hzWEWI.js";import"./index-DjCW-TlU.js";import"./createLucideIcon-X-I_ue95.js";const _="_layout_15ygh_1",h={layout:_},l=({children:a})=>e.jsx("div",{className:h.layout,children:a});try{l.displayName="Layout",l.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}const f="_header_13yz9_1",v={header:f},o=({children:a})=>e.jsx("header",{className:v.header,children:a});try{o.displayName="Header",o.__docgenInfo={description:"",displayName:"Header",props:{}}}catch{}const x="_panel_yuu1f_1",N={panel:x},t=({children:a,className:i,...r})=>e.jsx("aside",{className:m(i,N.panel),...r,children:a});try{t.displayName="Panel",t.__docgenInfo={description:"",displayName:"Panel",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const j="_navbar_19n5y_1",b={navbar:j},c=({children:a})=>e.jsx("nav",{className:b.navbar,children:a});try{c.displayName="Navbar",c.__docgenInfo={description:"",displayName:"Navbar",props:{}}}catch{}const L="_navigation_1ca6c_1",k={navigation:L},d=({children:a,className:i,...r})=>e.jsx("nav",{className:m(i,k.navigation),...r,children:a});try{d.displayName="Navigation",d.__docgenInfo={description:"",displayName:"Navigation",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const n=({as:a,className:i,isActive:r,...u})=>{const g=a||y;return e.jsx(g,{"aria-current":r&&"page",className:i,"data-active":r||void 0,...u})};try{n.displayName="NavigationLink",n.__docgenInfo={description:"",displayName:"NavigationLink",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:`Replace base component with any Client Side Routing link instead.
@see {@link https://designsystem.migrationsverket.se/dev/client-side-routing/ Client side routing}`,name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const R={component:l,subcomponents:{Header:o,Navbar:c,Navigation:d,NavigationLink:n,Panel:t},title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},s={render:({children:a,...i})=>e.jsxs(l,{...i,children:[e.jsx(o,{children:"Header"}),e.jsx(t,{"aria-label":"left panel",children:e.jsx(d,{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(n,{href:"/",isActive:!0,children:[e.jsx(p,{}),"Hem"]})}),e.jsxs("li",{children:[e.jsx(n,{href:"/categories",children:"Kategorier"}),e.jsxs("ul",{"aria-label":"Sidor",children:[e.jsx("li",{children:e.jsx(n,{href:"/categories/products",children:"Produkter"})}),e.jsx("li",{children:e.jsx(n,{href:"/categories/services",children:"Tjänster"})})]})]})]})})}),e.jsx("main",{style:{height:"5rem",padding:"1rem"},children:a}),e.jsx(t,{"aria-label":"right panel",style:{gridArea:"panelRight"},children:"Panel"}),e.jsx(c,{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(n,{href:"/",isActive:!0,children:[e.jsx(p,{}),"Hem"]})}),e.jsx("li",{children:e.jsx(n,{href:"/categories",children:"Kategorier"})})]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <NavigationLink href='/' isActive>
              <House />
              Hem
            </NavigationLink>
          </li>
          <li>
            <NavigationLink href='/categories'>Kategorier</NavigationLink>
          </li>
        </ul>
      </Navbar>
    </Layout>
}`,...s.parameters?.docs?.source}}};const V=["Primary"];export{s as Primary,V as __namedExportsOrder,R as default};
