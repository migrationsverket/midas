import{j as r}from"./jsx-runtime-BYYWji4R.js";import{P as o}from"./Dialog-BF0cIzzK.js";import{$ as i}from"./Dialog-BE4JD7C-.js";import{B as d}from"./Button-BcZkB2rZ.js";import{S as g}from"./save-BFMBpXoD.js";import{H as x}from"./Heading-DncQzqB_.js";import{T as u}from"./Text-D7RmNfn4.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-4EDQuioh.js";import"./utils-BLyg3OOq.js";import"./index-DQEgcCId.js";import"./useFocusRing-DVgdqMmF.js";import"./_class_private_field_init-BOtJyCjG.js";import"./Button-C9yg6fHw.js";import"./Hidden-BC9qER92.js";import"./context-d6PNTTSe.js";import"./useButton-DVh6qrnV.js";import"./useControlledState-H1tiOFpU.js";import"./FocusScope-Ce8r-Upm.js";import"./x-BaIpobvV.js";import"./createLucideIcon-DQK9Z80p.js";import"./RSPContexts-HQcWPJyv.js";import"./Collection-Bhy8rVTk.js";import"./index-NDK0uC61.js";import"./Separator-DqhbA8RB.js";import"./SelectionManager-BXwhMJ8O.js";import"./useEvent-B0l3XC2n.js";import"./scrollIntoView-BivqL63c.js";import"./ListKeyboardDelegate-Dwm1KN0z.js";import"./Text-BGwM_jUK.js";import"./useLocalizedStringFormatter-TrhiTCnH.js";import"./getScrollParent-FdZGTYO5.js";import"./VisuallyHidden-B-Fwaf7X.js";import"./Button.module-AG3JZ-l4.js";const Y={component:o,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(x,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:a=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara",children:r.jsx(g,{})}),r.jsx(o,{...a})]})},e={args:{placement:"top",children:"Spara"},render:a=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(g,{})}),r.jsx(o,{"data-testid":"popover-placement",...a})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const Z=["Primary","Placement"];export{e as Placement,t as Primary,Z as __namedExportsOrder,Y as default};
