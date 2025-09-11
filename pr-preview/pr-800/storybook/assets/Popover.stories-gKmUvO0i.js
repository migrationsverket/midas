import{j as r}from"./iframe-CAvVc_IC.js";import{P as a}from"./Dialog-0uwfIA_m.js";import{$ as i}from"./Dialog-BxZbGz76.js";import{B as d}from"./Button-BCUZwIJm.js";import{S as g}from"./save-D-lQnsGg.js";import{H as x}from"./Heading-BRJfu8Wx.js";import{T as u}from"./Text-D6q7BSoi.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-99ASjtyD.js";import"./utils-CWFeFJ0_.js";import"./index-DH357gdo.js";import"./index-CfAwoNHB.js";import"./useFocusRing-DUaqGxPK.js";import"./Button-Cxq2HaPj.js";import"./Hidden-B_kS6b7l.js";import"./useLabels-CMfJIBTF.js";import"./useButton-DFks96e5.js";import"./useResizeObserver-BSIy6MMg.js";import"./useControlledState-Um831eMi.js";import"./useLocalizedStringFormatter-3m8X8O_W.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./x-BS8jF5UB.js";import"./createLucideIcon-BhNK69GC.js";import"./RSPContexts-CKu6_IrT.js";import"./Collection-CGWDLeM-.js";import"./index-CIiAYzwt.js";import"./ListKeyboardDelegate-kpPlHEM9.js";import"./SelectionManager-DM-kliGL.js";import"./useEvent-BxH0nKIT.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C8KaGDIn.js";import"./useDescription-DGokbRMp.js";import"./Separator-C7lQxreN.js";import"./Text-CRxShYXI.js";import"./PressResponder-BeuBQbOC.js";import"./useLocalizedStringFormatter-O0Pt4NhT.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BI0usIgX.js";import"./Button.module-DRhvPh0f.js";const er={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(x,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara",children:r.jsx(g,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(g,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
