import{j as r}from"./iframe-BH1_R2DT.js";import{S as n}from"./save-DYhRKbWQ.js";import{c as m}from"./createLucideIcon-ii3gKTw6.js";import{$ as a}from"./Dialog-BnkmlJnO.js";import{P as i}from"./Popover-B3kX3vf4.js";import{B as p}from"./Button-BnyEfxrm.js";import{T as s}from"./Text-DLnNCVmf.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-DaJwfJY_.js";import"./utils-BVGwIGlb.js";import"./clsx-B-dksMZM.js";import"./Hidden-kAD8IT6R.js";import"./useFocusRing-D2P1AVxz.js";import"./index-DMDiVxAe.js";import"./index-C_m7skr9.js";import"./useLabels-D9Se9Q-i.js";import"./useButton-t5IL2t_E.js";import"./RSPContexts-CanWJetA.js";import"./OverlayArrow-Mj3Nc_Xo.js";import"./useResizeObserver-jng0sDXo.js";import"./useControlledState--SS9_6v3.js";import"./Collection-DtOIcu4C.js";import"./index-CTOdzTcy.js";import"./Separator-Btv4Rur5.js";import"./SelectionManager-CwndZLg0.js";import"./useEvent-DFDc_5v7.js";import"./scrollIntoView-CEB_t1nR.js";import"./SelectionIndicator-CrGJkGxu.js";import"./useDescription-U6ZvYwCQ.js";import"./ListKeyboardDelegate-DvoG7Abx.js";import"./Text-BSV7h1MS.js";import"./PressResponder-CZoTBrZB.js";import"./useLocalizedStringFormatter-BnhKqSj7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Cf46SMxm.js";import"./VisuallyHidden-CT5D58WX.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";/**
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
