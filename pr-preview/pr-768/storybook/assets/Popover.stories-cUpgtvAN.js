import{j as r}from"./iframe-DGsNrSXT.js";import{P as a}from"./Dialog-CLxb3uvL.js";import{$ as i}from"./Dialog-DSPYJujL.js";import{B as d}from"./Button-BNhCK5b0.js";import{S as g}from"./save-DgF_DhTP.js";import{H as x}from"./Heading-kVBDJ4Zp.js";import{T as u}from"./Text-BHPp3IS0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CgIkzVld.js";import"./utils-CeRCI_IU.js";import"./index-DA2UlEzH.js";import"./index-BZLvSFXL.js";import"./useFocusRing-CmKVXNS9.js";import"./Button-DFpXN0mf.js";import"./Hidden-DzIzvD-S.js";import"./useLabels-xiTNAS69.js";import"./useButton-BEBz-IAp.js";import"./useResizeObserver-DJaaYJoD.js";import"./useControlledState-CohairkO.js";import"./useLocalizedStringFormatter-D1MTD9us.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./x-lejORAJr.js";import"./createLucideIcon-BSjeWOth.js";import"./RSPContexts-CHWwZwaW.js";import"./Collection-Ceq25dP2.js";import"./index-DnBsLzJ_.js";import"./Separator-DXQ1p13J.js";import"./SelectionManager-DMr1qLps.js";import"./useEvent-BjI7o1bb.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BXeGL62Q.js";import"./useDescription-tciT-6ur.js";import"./ListKeyboardDelegate-Bdy2Accl.js";import"./Text-BOStEqYW.js";import"./PressResponder-Dyh_hMcd.js";import"./useLocalizedStringFormatter-C8H-WqsR.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D5bdiVmD.js";import"./Button.module-DKVuWS4g.js";const er={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(x,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara",children:r.jsx(g,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(g,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
