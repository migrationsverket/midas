import{j as r}from"./jsx-runtime-BYYWji4R.js";import{P as a}from"./Dialog-DwUh_2ma.js";import{$ as i}from"./Dialog-BQhmOU3o.js";import{B as d}from"./Button-D_rdwR6t.js";import{S as g}from"./save-DiRS-m8O.js";import{H as x}from"./Heading-BqhVQUP5.js";import{T as u}from"./Text-B94wSZIf.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-B5tMncCy.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./index-DQEgcCId.js";import"./useFocusRing-CiRxO26c.js";import"./_class_private_field_init-BOtJyCjG.js";import"./Button-Dw7lljiq.js";import"./Hidden-BC9qER92.js";import"./context-zNjZoWML.js";import"./useButton-DFlERivp.js";import"./useControlledState-H1tiOFpU.js";import"./FocusScope-DFjHfTMc.js";import"./useLocalizedStringFormatter-9M_dEwOo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./x-Dz2R9y6b.js";import"./createLucideIcon-uZw3gxGR.js";import"./RSPContexts-HQcWPJyv.js";import"./Collection-CAY-ghkk.js";import"./index-NDK0uC61.js";import"./Separator-BuNd-mI_.js";import"./SelectionManager-B7CR_Zkr.js";import"./useEvent-YbNcfHeo.js";import"./scrollIntoView-D-J2YGNX.js";import"./ListKeyboardDelegate-DdGMYXDu.js";import"./Text-BDGh9UD8.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./getScrollParent-D3zukwiL.js";import"./VisuallyHidden-Bwo2Sxwr.js";import"./Button.module-DKVuWS4g.js";const tr={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(x,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara",children:r.jsx(g,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(g,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const er=["Primary","Placement"];export{e as Placement,t as Primary,er as __namedExportsOrder,tr as default};
