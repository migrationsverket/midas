import{j as r}from"./iframe-DzJ58csS.js";import{S as n}from"./save-C1MuXcjy.js";import{c as m}from"./createLucideIcon-DY2CvNkn.js";import{$ as a}from"./Dialog-BwvwdNwE.js";import{P as i}from"./Popover-CiIQfHyY.js";import{B as p}from"./Button-DBLrduIN.js";import{T as s}from"./Text-CF12HrJc.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-XpnQOI7L.js";import"./utils-kFG7V26A.js";import"./clsx-B-dksMZM.js";import"./Hidden-DixvikVn.js";import"./useFocusRing-s8d5RV5A.js";import"./index-CXUZjOMB.js";import"./index-8g-wmO3w.js";import"./useLabels-CqViVGd8.js";import"./useButton-Bq7QVwIk.js";import"./RSPContexts-Bw7A04gx.js";import"./OverlayArrow-BpzZqzT2.js";import"./useResizeObserver-DOZ5a32s.js";import"./useControlledState-BddBMCaY.js";import"./Collection-BqTlgEej.js";import"./index-CXWhLhHy.js";import"./Separator-DSaNaPFI.js";import"./SelectionManager-D0Fz5nNs.js";import"./useEvent-Bp2Ufb0u.js";import"./scrollIntoView-y1tmZMLC.js";import"./SelectionIndicator-Chf0WN9P.js";import"./useDescription-CFNj517p.js";import"./ListKeyboardDelegate-BN17OQSZ.js";import"./Text-CcO9WK_c.js";import"./PressResponder-napPBZaN.js";import"./useLocalizedStringFormatter-LbY2s3T4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DyLAwff4.js";import"./VisuallyHidden-bMdwBiLV.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";/**
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
