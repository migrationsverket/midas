import{j as r}from"./iframe-C1qr5fJG.js";import{S as n}from"./save-9sdDBz0q.js";import{c as m}from"./createLucideIcon-BC-6srKg.js";import{$ as a}from"./Dialog-BohRXdAD.js";import{P as i}from"./Popover-DPB5a-Bc.js";import{B as p}from"./Button-DH_gl17G.js";import{T as s}from"./Text-_yTTBlbq.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-DQJfHdFy.js";import"./utils-L5F-E5oa.js";import"./clsx-B-dksMZM.js";import"./Hidden-C3GbSa9q.js";import"./useFocusRing-28aIZAqG.js";import"./index-Bx_ZZiUf.js";import"./index-D-qeXkn4.js";import"./useLabels-DysWQsGc.js";import"./useButton-C5lUgphC.js";import"./RSPContexts-Bj5Jx20Q.js";import"./OverlayArrow-DcaNHGHQ.js";import"./useResizeObserver-DE8NXtKE.js";import"./useControlledState-BInoKRkZ.js";import"./Collection-DChIski_.js";import"./index-CN4jt8oJ.js";import"./Separator-DeWBtMz-.js";import"./SelectionManager-DwIbmitB.js";import"./useEvent-E43Nzm_j.js";import"./scrollIntoView-Dd3Mp8Mp.js";import"./SelectionIndicator-BkYHe58b.js";import"./useDescription-CjUI-cVY.js";import"./ListKeyboardDelegate-CxihMaHJ.js";import"./Text-PiImN2rq.js";import"./PressResponder-DQywiW-9.js";import"./useLocalizedStringFormatter-CZNoWOT_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-uqqKq15_.js";import"./VisuallyHidden--9QY6UIZ.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),W={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const X=["Primary","Placement"];export{e as Placement,t as Primary,X as __namedExportsOrder,W as default};
