import{j as r}from"./iframe-_C5mtn_B.js";import{P as a}from"./Dialog-CQETpCbs.js";import{$ as i}from"./Dialog-yiQ_alYV.js";import{B as d}from"./Button-DFb6hUG5.js";import{S as g}from"./save-Qjg_2N9n.js";import{H as x}from"./Heading-DP7gG1Dh.js";import{T as u}from"./Text-NklHz7kW.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Difp7bAq.js";import"./utils-CemDbj2u.js";import"./index-DZ2jXjMj.js";import"./index-C2ZAJ-KA.js";import"./useFocusRing-y8LH5XnG.js";import"./Button-CZtGymVk.js";import"./Hidden-60QhfUjM.js";import"./useLabels-DFW6s2N1.js";import"./useButton-GNLvSyGg.js";import"./useResizeObserver-Ddo6GmUz.js";import"./useControlledState-D0EeULnQ.js";import"./useLocalizedStringFormatter-xjvEJrGp.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./x-CTb1Kjw0.js";import"./createLucideIcon-2KdRlZd8.js";import"./RSPContexts-CnSD3pwC.js";import"./Collection-DQTFtC7L.js";import"./index-C3Vj5Mfn.js";import"./ListKeyboardDelegate-DCbyitmJ.js";import"./SelectionManager-kCtMK532.js";import"./useEvent-DiMDdy0k.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-V40nXmab.js";import"./useDescription-HkWfklZX.js";import"./Separator-BvZshpy3.js";import"./Text-DWqgm5Cx.js";import"./PressResponder-C-ODYIjH.js";import"./useLocalizedStringFormatter-CuFiZHL8.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CNl5slu3.js";import"./Button.module-DRhvPh0f.js";const er={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(x,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara",children:r.jsx(g,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(g,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
