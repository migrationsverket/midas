import{j as r}from"./iframe-_lRz8YFu.js";import{P as a}from"./Dialog-CNjfg3eD.js";import{$ as i}from"./Dialog-CQnFMDId.js";import{B as d}from"./Button-CSo9cgjK.js";import{S as g}from"./save-CVYDrGeh.js";import{H as x}from"./Heading-BaXAvx0X.js";import{T as u}from"./Text-KTWhHybg.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-C6OvgbSB.js";import"./utils-BUmaUPeH.js";import"./index-xW6Vd_PP.js";import"./index-CyglFFdH.js";import"./useFocusRing-sAwqsfDC.js";import"./Button-W_ikXVQB.js";import"./Hidden-Ds4lnupb.js";import"./useLabels-BcYo1CVh.js";import"./useButton-CpO7hjdn.js";import"./useResizeObserver-BeKoq8EI.js";import"./useControlledState-CyXMqpQO.js";import"./useLocalizedStringFormatter-D3D8J9gt.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./x-C-m0IpWp.js";import"./createLucideIcon-DcItXkQX.js";import"./RSPContexts-DTsj3GGB.js";import"./Collection-C19nHrW7.js";import"./index-B0RpjRRR.js";import"./ListKeyboardDelegate-WVUEsQ_r.js";import"./SelectionManager-DaiRSpOb.js";import"./useEvent-zPAT1qr-.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CcqDJ-LX.js";import"./useDescription-BQuP6H2R.js";import"./Separator-BDXklYB8.js";import"./Text-w35hOI-7.js";import"./PressResponder-CALrPqh8.js";import"./useLocalizedStringFormatter-BpggfE7y.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-flOKmZI2.js";import"./Button.module-DRhvPh0f.js";const er={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(x,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara",children:r.jsx(g,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(g,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
