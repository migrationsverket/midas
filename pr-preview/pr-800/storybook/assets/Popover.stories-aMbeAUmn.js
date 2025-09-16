import{j as r}from"./iframe-DK_5C_ta.js";import{P as a}from"./Dialog-7TJQfGJd.js";import{$ as i}from"./Dialog-DJrNJhXv.js";import{B as d}from"./Button-DhBUu0Zw.js";import{S as g}from"./save-CBDj4Xg6.js";import{H as x}from"./Heading-iza5krWc.js";import{T as u}from"./Text-CCgzrJBc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-YZo9HNi0.js";import"./utils-Dq2AXRwi.js";import"./index-BSFYr4Kn.js";import"./index-DtGmqQLg.js";import"./useFocusRing-D5jk5K46.js";import"./Button-CigQbRL4.js";import"./Hidden-D1vgsL83.js";import"./useLabels-D88rkdYs.js";import"./useButton-D6fbe5pn.js";import"./useResizeObserver-C3z6vjq0.js";import"./useControlledState-BAvy61Vb.js";import"./useLocalizedStringFormatter-DUQldhHg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./x-CmIS_C-r.js";import"./createLucideIcon-D45fJSNn.js";import"./RSPContexts-C4Fpm9zC.js";import"./Collection-BV4oN34C.js";import"./index-D1gJwysV.js";import"./ListKeyboardDelegate-CjiowGtm.js";import"./SelectionManager-DtlOyqHF.js";import"./useEvent-Cenk9aXC.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-FCioJjdL.js";import"./useDescription-Dj5Lb6iJ.js";import"./Separator-DbPtD3gn.js";import"./Text-D_hmtZjD.js";import"./PressResponder-DR5AcdQU.js";import"./useLocalizedStringFormatter-BSTlPq_4.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D72TAoP9.js";import"./Button.module-DRhvPh0f.js";const er={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(x,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara",children:r.jsx(g,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(g,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <Heading style={{
        marginBottom: '0.5rem'
      }}>Info</Heading>
        <Text>Genom att spara detta går det ej att ta bort</Text>
      </div>
  },
  render: args => <DialogTrigger>
      <Button variant='icon' aria-label='Spara'>
        <Save />
      </Button>
      <Popover {...args} />
    </DialogTrigger>
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var s,c,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    children: 'Spara'
  },
  render: args => <DialogTrigger>
      <Button variant='icon' aria-label='Spara' data-testid='popover-placement-trigger'>
        <Save />
      </Button>
      <Popover data-testid='popover-placement' {...args} />
    </DialogTrigger>
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const or=["Primary","Placement"];export{e as Placement,t as Primary,or as __namedExportsOrder,er as default};
