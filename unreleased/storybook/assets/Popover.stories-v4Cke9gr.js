import{j as r}from"./iframe-B5nFrBgy.js";import{P as a}from"./Dialog-gw8MY7d3.js";import{$ as i}from"./Dialog-BS1c4_gs.js";import{B as d}from"./Button-BUExq3GL.js";import{S as g}from"./save-X9CLL-xN.js";import{H as x}from"./Heading-DR8nh62z.js";import{T as u}from"./Text-BUsU7nmi.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BNSy4luP.js";import"./utils-7U2IrIrW.js";import"./index-DqH0GWUd.js";import"./index-CvYJluao.js";import"./useFocusRing-RYmoht4L.js";import"./Button-BNDIlaSX.js";import"./Hidden-CSmHOZFM.js";import"./useLabels-DVEdlixB.js";import"./useButton-BGOlPxAo.js";import"./useResizeObserver-mo2eoHzO.js";import"./useControlledState-ZxzjMgIe.js";import"./useLocalizedStringFormatter-D3DC5lxU.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./x-D3mJ6TWs.js";import"./createLucideIcon-D7Ccmx1V.js";import"./RSPContexts-OAe59nMu.js";import"./Collection-DFo8Q2kt.js";import"./index-D7v-SyQY.js";import"./ListKeyboardDelegate-AgZIR9ew.js";import"./SelectionManager-B2WuJlBA.js";import"./useEvent-CbBSgCSj.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CFYTYdag.js";import"./useDescription-BsOeuLRW.js";import"./Separator-C9DbVEvI.js";import"./Text-BoVQ-01I.js";import"./PressResponder-BzCDs50E.js";import"./useLocalizedStringFormatter-BAz90HiB.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B0UJv2EU.js";import"./Button.module-DRhvPh0f.js";const er={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(x,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara",children:r.jsx(g,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(g,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
