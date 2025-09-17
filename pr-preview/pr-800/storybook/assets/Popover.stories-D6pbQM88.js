import{j as r}from"./iframe-dLhn8haa.js";import{P as a}from"./Dialog-BL6zlOMV.js";import{$ as i}from"./Dialog-DWxzBAUB.js";import{B as d}from"./Button-Cd_IHc8e.js";import{S as g}from"./save-BZ3S5aPT.js";import{H as x}from"./Heading-BGU6cpGe.js";import{T as u}from"./Text-CsBuM_kU.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-C-GQGErd.js";import"./utils-CdPDuU9h.js";import"./index-C5HyGUKx.js";import"./index-B4nifaJ-.js";import"./useFocusRing-DqHewW9h.js";import"./Button-R-W_TxSW.js";import"./Hidden-DrNMbQrJ.js";import"./useLabels-CougkJ5D.js";import"./useButton-CjQ1OPWT.js";import"./useResizeObserver-D2F05IRI.js";import"./useControlledState-D3aMUzl-.js";import"./useLocalizedStringFormatter-CCm72lt4.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./x-Agr58GsP.js";import"./createLucideIcon-OeyHrksp.js";import"./RSPContexts-D73g5QNo.js";import"./Collection-EsEvJ3Ye.js";import"./index-WOFO2LH4.js";import"./ListKeyboardDelegate-D_qsLFJa.js";import"./SelectionManager-BxCJYLFV.js";import"./useEvent-z46_rxaY.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C5g0w296.js";import"./useDescription-BjGy5o0E.js";import"./Separator-cmnZNN2j.js";import"./Text-BAT3NomV.js";import"./PressResponder-rxyD-H1I.js";import"./useLocalizedStringFormatter-BLuZAhtX.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BWgtWZIZ.js";import"./Button.module-DRhvPh0f.js";const er={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(x,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara",children:r.jsx(g,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(g,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
