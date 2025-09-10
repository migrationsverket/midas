import{j as r}from"./iframe-Bk2KsNJA.js";import{P as a}from"./Dialog-vZJM8Z92.js";import{$ as i}from"./Dialog-D7E5URnQ.js";import{B as d}from"./Button-D1HA4SSE.js";import{S as g}from"./save-9i9pIdar.js";import{H as x}from"./Heading-BIOcd4_Y.js";import{T as u}from"./Text-N8WVUpat.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-B85ocRy-.js";import"./utils-xJsY6GUO.js";import"./index-XbiuNMuw.js";import"./index-Crgbuwrk.js";import"./useFocusRing-25bChEWZ.js";import"./Button-CY9IL6lG.js";import"./Hidden-Cmn59mke.js";import"./useLabels-BvS5hw5h.js";import"./useButton-D1CAdWAV.js";import"./useResizeObserver-DCRQW-zd.js";import"./useControlledState-B5b95nhu.js";import"./useLocalizedStringFormatter-CNLlx_CF.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./x-DsuzLeru.js";import"./createLucideIcon-uNpC4-lz.js";import"./RSPContexts-CsspwCfl.js";import"./Collection-CVpRSqCL.js";import"./index-BnwW_tJ6.js";import"./ListKeyboardDelegate-CaFCawBX.js";import"./SelectionManager-DTPdOIV3.js";import"./useEvent-Db5tIthB.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B9VwDmAi.js";import"./useDescription-D5GJhh_f.js";import"./Separator-DKLy9N42.js";import"./Text-DF9zw4S0.js";import"./PressResponder-Ckqesgt-.js";import"./useLocalizedStringFormatter-DLUkfREQ.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Bvo1H-mj.js";import"./Button.module-GuOSDIYz.js";const er={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(x,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara",children:r.jsx(g,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(g,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
