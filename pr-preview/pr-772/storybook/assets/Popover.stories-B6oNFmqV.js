import{j as r}from"./iframe-CpIPHAIU.js";import{P as a}from"./Dialog-DbQXu36G.js";import{$ as i}from"./Dialog-DXcygsJ7.js";import{B as d}from"./Button-DDGGPoHE.js";import{S as g}from"./save-CJjy9IoN.js";import{H as x}from"./Heading-JPu6Fgnx.js";import{T as u}from"./Text-D7pQKzM8.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Bk3EhqgJ.js";import"./utils-DFBwCEiC.js";import"./index-3Og8xjZK.js";import"./index-DwTuLalI.js";import"./useFocusRing-DjrtWtxV.js";import"./Button-XdyfkBS7.js";import"./Hidden-Dc8H1AK1.js";import"./useLabels-DbOoN3Q2.js";import"./useButton-goGDD37W.js";import"./useResizeObserver-BXP5cDiT.js";import"./useControlledState-hBz71Nvk.js";import"./useLocalizedStringFormatter-DJ81jsn5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./x-Blure7K5.js";import"./createLucideIcon-CecMBFaF.js";import"./RSPContexts-Dc32jnfN.js";import"./Collection-C_aaHZJ-.js";import"./index-CeHXzLYG.js";import"./Separator-DqfZl2f1.js";import"./SelectionManager-BTWht6u6.js";import"./useEvent-BgyDv3DN.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D5494rFI.js";import"./useDescription-CBTeeArW.js";import"./ListKeyboardDelegate-CPMLkeYa.js";import"./Text-BTlNKB2Q.js";import"./PressResponder-BNuuJGSq.js";import"./useLocalizedStringFormatter-DIT8mwtd.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BB7ESbXy.js";import"./Button.module-CF2bVDCq.js";const er={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(x,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara",children:r.jsx(g,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(g,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
