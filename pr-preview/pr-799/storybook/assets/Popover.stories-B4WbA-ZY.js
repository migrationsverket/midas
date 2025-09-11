import{j as r}from"./iframe-BdgLdgYE.js";import{P as a}from"./Dialog-B7Y2zPU9.js";import{$ as i}from"./Dialog-DgWq9cLy.js";import{B as d}from"./Button-DoG7b90P.js";import{S as g}from"./save-SABCQLFR.js";import{H as x}from"./Heading-Dpx6Lkvg.js";import{T as u}from"./Text-Cn-ae3_x.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BtUkbWER.js";import"./utils-BvcxwFyW.js";import"./index-bdnO63b_.js";import"./index-BK0Ncq4b.js";import"./useFocusRing-CTNShohj.js";import"./Button-WyhW3_uk.js";import"./Hidden-CBixdTTx.js";import"./useLabels-CvTKfdWu.js";import"./useButton-D5My0K8O.js";import"./useResizeObserver-YhNeHsC-.js";import"./useControlledState-CnQUdn_q.js";import"./useLocalizedStringFormatter-e74m6xoj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./x-BRdayo4W.js";import"./createLucideIcon-C7t1_r_C.js";import"./RSPContexts-Dc_gSHep.js";import"./Collection-BL_MIQ9r.js";import"./index-CkIM88CH.js";import"./ListKeyboardDelegate-CPp65dVC.js";import"./SelectionManager-Ny1Sem7f.js";import"./useEvent-CC6p_nb1.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-7ZFiyo7C.js";import"./useDescription-BLhSGx0Q.js";import"./Separator-C2Cu4Kwo.js";import"./Text-l-A5Z5Hz.js";import"./PressResponder-C9ap61WA.js";import"./useLocalizedStringFormatter-ILYc6jSb.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CbJqQ_pY.js";import"./Button.module-DRhvPh0f.js";const er={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(x,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara",children:r.jsx(g,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(g,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
