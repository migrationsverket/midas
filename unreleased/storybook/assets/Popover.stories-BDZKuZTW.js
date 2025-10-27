import{j as r}from"./iframe-C_IMZI11.js";import{S as l}from"./save-vJI8rcDi.js";import{c as x}from"./createLucideIcon-7Sr44F2X.js";import{$ as a}from"./Dialog-CUXEBaUo.js";import{P as i}from"./Popover-egwmqFjX.js";import{B as g}from"./Button-Cbca66eA.js";import{T as u}from"./Text-CMxv24Bh.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BHjPaGVS.js";import"./utils-BKskW800.js";import"./clsx-B-dksMZM.js";import"./Hidden-B6kSx7V2.js";import"./useFocusRing-BBEgfa6Y.js";import"./index-BUmptT68.js";import"./index-D5F6RO1H.js";import"./useLabels-DfLBK3yB.js";import"./useButton-FM3MQBDf.js";import"./RSPContexts-CqAFzDyl.js";import"./OverlayArrow-D2bZPDjF.js";import"./useResizeObserver-DXDePphZ.js";import"./useControlledState-btHGLWeC.js";import"./Collection-CYIMVfCQ.js";import"./index-CwU8Sj5D.js";import"./Separator-CYuM7X-Q.js";import"./SelectionManager-MDr_SiYl.js";import"./useEvent-BgQkDCAe.js";import"./scrollIntoView-BukwnCJF.js";import"./SelectionIndicator-CSpKl-ZZ.js";import"./useDescription-OzQGMHut.js";import"./ListKeyboardDelegate-DUO5pEwi.js";import"./Text-Ck-9rahk.js";import"./PressResponder-DBtFkn20.js";import"./useLocalizedStringFormatter-CCds6hme.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CuB8w4_J.js";import"./VisuallyHidden-Brzta013.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CcWMkJAG.js";/**
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
