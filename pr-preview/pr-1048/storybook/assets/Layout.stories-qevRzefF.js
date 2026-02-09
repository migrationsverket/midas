import{j as e,r as f}from"./iframe-BOj75HPM.js";import{c as p}from"./clsx-Ciqy0D92.js";import{$ as N}from"./Link-DfABnjy_.js";import{n as w}from"./utils-DiwTvY5r.js";import{o as j}from"./Dialog-Bzd92NLg.js";import{$ as O,a as k}from"./Modal-B86JywTt.js";import{B as L}from"./Button-CG3q9yng.js";import{M as I}from"./menu-awSWZvzK.js";import{H as v}from"./house-CyrztwWz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-BvD21wMG.js";import"./index-tbjRw6nF.js";import"./index-DauoXUb-.js";import"./Button-D1stJH9t.js";import"./Hidden-DX_ysAyq.js";import"./useLabels-BszWTWtA.js";import"./useButton-rMDDSnSZ.js";import"./RSPContexts-Dd30z721.js";import"./OverlayArrow-CdSn3l12.js";import"./useResizeObserver-B0Vk_8hR.js";import"./useControlledState-7gBIOf2A.js";import"./Collection-C9umSaxr.js";import"./index-CPEUDevc.js";import"./Separator-Bo63Wbjo.js";import"./SelectionManager-DKvFADB7.js";import"./useEvent-CEhlIHx6.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BJEhgAnj.js";import"./useDescription-CWm0ggy2.js";import"./ListKeyboardDelegate-BswjCwMk.js";import"./Text-KcBRsMfX.js";import"./PressResponder-Il8IXh95.js";import"./useLocalizedStringFormatter-C6wF7Mfo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-aYlr6XzC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DRoRIbBJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-iBqt7kI1.js";import"./createLucideIcon-BmLW6X-c.js";const $="_layout_15ygh_1",q={layout:$},c=({children:a})=>e.jsx("div",{className:q.layout,children:a});try{c.displayName="Layout",c.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}const C="_header_13yz9_1",P={header:C},m=({children:a})=>e.jsx("header",{className:P.header,children:a});try{m.displayName="Header",m.__docgenInfo={description:"",displayName:"Header",props:{}}}catch{}const V="_panel_yuu1f_1",S={panel:V},l=({children:a,className:t,...n})=>e.jsx("aside",{className:p(t,S.panel),...n,children:a});try{l.displayName="Panel",l.__docgenInfo={description:"",displayName:"Panel",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const E="_navbar_zxsyj_1",A={navbar:E},u=({children:a})=>e.jsx("nav",{className:A.navbar,children:a});try{u.displayName="Navbar",u.__docgenInfo={description:"",displayName:"Navbar",props:{}}}catch{}const H="_navigation_10g44_1",_={navigation:H},T="_overlay_dmbs8_1",D="_drawer_dmbs8_20",b={overlay:T,drawer:D},g=({children:a,id:t,...n})=>e.jsx(O,{className:b.overlay,isDismissable:!0,...n,children:w(a,i=>e.jsx(k,{className:b.drawer,children:e.jsx(j,{id:t,children:i})}))});try{g.displayName="Drawer",g.__docgenInfo={description:"",displayName:"Drawer",props:{className:{defaultValue:{value:"'react-aria-ModalOverlay'"},description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<ModalRenderProps>"}},isEntering:{defaultValue:null,description:"Whether the modal is currently performing an entry animation.",name:"isEntering",required:!1,type:{name:"boolean"}},isExiting:{defaultValue:null,description:"Whether the modal is currently performing an exit animation.",name:"isExiting",required:!1,type:{name:"boolean"}},UNSTABLE_portalContainer:{defaultValue:{value:"document.body"},description:`The container element in which the overlay portal will be placed. This may have unknown behavior depending on where it is portalled to.
@deprecated - Use a parent UNSAFE_PortalProvider to set your portal container instead.`,name:"UNSTABLE_portalContainer",required:!1,type:{name:"Element"}},isDismissable:{defaultValue:{value:"false"},description:"Whether to close the modal when the user interacts outside it.",name:"isDismissable",required:!1,type:{name:"boolean"}},isKeyboardDismissDisabled:{defaultValue:{value:"false"},description:"Whether pressing the escape key to close the modal should be disabled.",name:"isKeyboardDismissDisabled",required:!1,type:{name:"boolean"}},shouldCloseOnInteractOutside:{defaultValue:null,description:`When user interacts with the argument element outside of the overlay ref,
return true if onClose should be called.  This gives you a chance to filter
out interaction with elements that should not dismiss the overlay.
By default, onClose will always be called on interaction outside the overlay ref.`,name:"shouldCloseOnInteractOutside",required:!1,type:{name:"((element: Element) => boolean)"}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ChildrenOrFunction<ModalRenderProps>"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<ModalRenderProps>"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}}}}}catch{}const h=({children:a,className:t,id:n,isOpen:i,onOpenChange:o,...s})=>e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:p(t,_.navigation),...s,children:a}),e.jsx(g,{id:n,isOpen:i,onOpenChange:o,children:e.jsx("nav",{id:n,className:p(t,_.navigation),...s,children:a})})]});try{h.displayName="Navigation",h.__docgenInfo={description:"",displayName:"Navigation",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}}}}}catch{}const W="_navigationLink_5kgh3_1",M="_sidebar_5kgh3_12",R="_navbar_5kgh3_18",y={navigationLink:W,sidebar:M,navbar:R},r=({as:a,className:t,isActive:n,variant:i="sidebar",...o})=>{const s=a||N;return e.jsx(s,{"aria-current":n&&"page",className:p(t,y.navigationLink,{[y.sidebar]:i==="sidebar",[y.navbar]:i==="navbar"}),"data-active":n||void 0,...o})};try{r.displayName="NavigationLink",r.__docgenInfo={description:"",displayName:"NavigationLink",props:{variant:{defaultValue:{value:"sidebar"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"sidebar"'},{value:'"navbar"'}]}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:`Replace base component with any Client Side Routing link instead.
@see {@link https://designsystem.migrationsverket.se/dev/client-side-routing/ Client side routing}`,name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const qe={component:c,subcomponents:{Header:m,Navbar:u,Navigation:h,NavigationLink:r,Panel:l},title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},d={render:({children:a,...t})=>{const n=f.useId(),[i,o]=f.useState(!1),s=()=>o(x=>!x);return e.jsxs(c,{...t,children:[e.jsx(m,{children:e.jsx(L,{"aria-controls":n,"aria-expanded":i,"aria-haspopup":"dialog",icon:I,onPress:s,variant:"icon"})}),e.jsx(l,{"aria-label":"left panel",children:e.jsx(h,{id:n,isOpen:i,onOpenChange:o,children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(r,{href:"/",isActive:!0,children:[e.jsx(v,{}),"Hem"]})}),e.jsxs("li",{children:[e.jsx(r,{href:"/categories",children:"Kategorier"}),e.jsxs("ul",{"aria-label":"Sidor",children:[e.jsx("li",{children:e.jsx(r,{href:"/categories/products",children:"Produkter"})}),e.jsx("li",{children:e.jsx(r,{href:"/categories/services",children:"Tjänster"})})]})]})]})})}),e.jsx("main",{style:{height:"5rem",padding:"1rem"},children:a}),e.jsx(l,{"aria-label":"right panel",style:{gridArea:"panelRight"},children:"Panel"}),e.jsx(u,{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(r,{href:"/",isActive:!0,variant:"navbar",children:[e.jsx(v,{}),"Hem"]})}),e.jsx("li",{children:e.jsx(r,{href:"/categories",variant:"navbar",children:"Kategorier"})})]})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    const drawerId = useId();
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const toggleIsNavigationOpen = () => setIsNavigationOpen(x => !x);
    return <Layout {...rest}>
        <Header>
          <Button aria-controls={drawerId} aria-expanded={isNavigationOpen} aria-haspopup='dialog' icon={Menu} onPress={toggleIsNavigationOpen} variant='icon' />
        </Header>
        <Panel aria-label='left panel'>
          <Navigation id={drawerId} isOpen={isNavigationOpen} onOpenChange={setIsNavigationOpen}>
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
      </Layout>;
  }
}`,...d.parameters?.docs?.source}}};const Ce=["Primary"];export{d as Primary,Ce as __namedExportsOrder,qe as default};
