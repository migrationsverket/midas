import{j as r}from"./iframe-0I9oPXfY.js";import{S as l}from"./save-DDLgh_Ui.js";import{c as x}from"./createLucideIcon-CfRIoqqz.js";import{$ as a}from"./Dialog-6ZFgDZWX.js";import{P as i}from"./Popover-Bufyj1w6.js";import{B as g}from"./Button-CQsc2DTh.js";import{T as u}from"./Text-BL6veNvX.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CCG3sKZk.js";import"./utils-DmSxheDP.js";import"./clsx-B-dksMZM.js";import"./Hidden-CODB6zs1.js";import"./useFocusRing-CBLrXsNj.js";import"./index-B-q-mAMe.js";import"./index-sTsLkbYn.js";import"./useLabels-BslkYrg2.js";import"./useButton-n4Ci3OAt.js";import"./RSPContexts-NRNKf1pH.js";import"./OverlayArrow-myyJfYdV.js";import"./useResizeObserver-DOmzlw5j.js";import"./useControlledState-CeevRCQn.js";import"./Collection-B_aXmOP9.js";import"./index-xTsgDzj4.js";import"./context-B2hDnSVi.js";import"./SelectionManager-4hZ3ph8J.js";import"./useEvent-CDeJjJLj.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CIjHOgj4.js";import"./useDescription-Dn6QFowz.js";import"./Separator-BU4jlUdP.js";import"./Text-CbsDDqbR.js";import"./PressResponder-DSw4yGCb.js";import"./useLocalizedStringFormatter-CuMXPYIj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DNlSwqAI.js";import"./clsx-Ciqy0D92.js";import"./Button.module-DRhvPh0f.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],h=x("heading",v),er={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(h,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(g,{variant:"icon","aria-label":"Spara",children:r.jsx(l,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(g,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(l,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var s,c,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const or=["Primary","Placement"];export{e as Placement,t as Primary,or as __namedExportsOrder,er as default};
