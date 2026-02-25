import{j as r}from"./iframe-C9ubgLgC.js";import{P as a}from"./Popover-D7_SYJfl.js";import{$ as i}from"./Dialog-C3BieIKE.js";import{B as n}from"./Button-Dt-Z81qJ.js";import{S as p}from"./save-B2IDVaZf.js";import{c as m}from"./createLucideIcon-SsBWnnbL.js";import{T as s}from"./Text-CL8RRho7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-COpJvv1L.js";import"./useFocusRing-4O8j9jv4.js";import"./utils-DGXfXGIv.js";import"./index-BNV1MXTe.js";import"./index-Bwb2HpPH.js";import"./Button-BlG7CmiH.js";import"./Hidden-Azh09GXQ.js";import"./useLabels-Df_ryvuT.js";import"./useButton-DfAsmtKq.js";import"./useResizeObserver-o0TjWYde.js";import"./useControlledState-DqLuvFKD.js";import"./RSPContexts-Dm9gjtI5.js";import"./Collection-DTwVVniI.js";import"./index-D11ngsUp.js";import"./Separator-CcuL_uLD.js";import"./SelectionManager-D2OfJ91j.js";import"./useEvent-BMkaTr7g.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-tP0gd4qo.js";import"./useDescription-DsXkWwWK.js";import"./ListKeyboardDelegate-DEcFwDZ4.js";import"./Text-DzDyHzow.js";import"./PressResponder-DaCcp4oE.js";import"./useLocalizedStringFormatter-bbG7Wq0q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BjkY83sA.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BHt-U9wp.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Bh2zxf8s.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Z=["Primary","Placement"];export{e as Placement,t as Primary,Z as __namedExportsOrder,Y as default};
