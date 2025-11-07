import{j as r}from"./iframe-CNb7O3fM.js";import{S as n}from"./save-DRvrTGRV.js";import{c as m}from"./createLucideIcon-DJgDtxVY.js";import{$ as a}from"./Dialog-muUzfGeC.js";import{P as i}from"./Popover-DvLehfrc.js";import{B as p}from"./Button-B4oa6PJg.js";import{T as s}from"./Text-IpU7O3G7.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-C3beaqZU.js";import"./utils-D0vAnsQi.js";import"./clsx-B-dksMZM.js";import"./Hidden-DQksNeyO.js";import"./useFocusRing-92_f-Cnn.js";import"./index-DNw74xlK.js";import"./index-TauKm_TR.js";import"./useLabels-BMdYA1hN.js";import"./useButton-BknTUIzA.js";import"./RSPContexts-D0Mi2c8F.js";import"./OverlayArrow-qDFx_ABh.js";import"./useResizeObserver-jFNzxdNw.js";import"./useControlledState-DD-yjPuv.js";import"./Collection-CaGRw_7t.js";import"./index-DchfBr0r.js";import"./Separator-C7BKQkxG.js";import"./SelectionManager-gnCdr3fe.js";import"./useEvent-BU8P7E25.js";import"./scrollIntoView-DzSt_Lig.js";import"./SelectionIndicator-DjFzH1hy.js";import"./useDescription-0S3siiXJ.js";import"./ListKeyboardDelegate-C9e238tU.js";import"./Text-bNJPpR3N.js";import"./PressResponder-CkxkvQBF.js";import"./useLocalizedStringFormatter-BEOuTl9U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-dNi3Tk6G.js";import"./VisuallyHidden-NUlijbui.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";/**
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
