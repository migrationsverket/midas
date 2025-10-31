import{j as r}from"./iframe-CYLbMBt8.js";import{S as n}from"./save-BArCbObP.js";import{c as m}from"./createLucideIcon-C_sXulXo.js";import{$ as a}from"./Dialog-DkthveGe.js";import{P as i}from"./Popover-CZBSLFot.js";import{B as p}from"./Button-CwJUY5Uh.js";import{T as s}from"./Text-DhjMuTd4.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-CKpDaDrO.js";import"./utils-CtYggOsK.js";import"./clsx-B-dksMZM.js";import"./Hidden-CCZJVzSx.js";import"./useFocusRing-sTPNQCE4.js";import"./index-71tlDv88.js";import"./index-Brb7X42m.js";import"./useLabels-3FTzkieI.js";import"./useButton-BztmJ2aQ.js";import"./RSPContexts-D_FN0ARC.js";import"./OverlayArrow-B3H3CcIW.js";import"./useResizeObserver-BscoOqu3.js";import"./useControlledState-CH8LbPDY.js";import"./Collection-DJE8uqKG.js";import"./index-9eExQ8qy.js";import"./Separator-DPN-eo4d.js";import"./SelectionManager-CgY7Q1Vw.js";import"./useEvent-D0F19b6G.js";import"./scrollIntoView-BB2jjYaX.js";import"./SelectionIndicator-CgZ85TAI.js";import"./useDescription-BNrAS8PP.js";import"./ListKeyboardDelegate-Dtrg30Bx.js";import"./Text-DZ37ixFx.js";import"./PressResponder-JVQh2cU2.js";import"./useLocalizedStringFormatter-BCspmRwR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CQS5bk9q.js";import"./VisuallyHidden-C1dzkIOy.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";/**
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
