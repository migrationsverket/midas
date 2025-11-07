import{j as r}from"./iframe-BjoitsA_.js";import{S as n}from"./save-9DQnmifG.js";import{c as m}from"./createLucideIcon-CNrUrsyr.js";import{$ as a}from"./Dialog-BD84FJkQ.js";import{P as i}from"./Popover-DAOuvXb1.js";import{B as p}from"./Button-CcGX5Wmo.js";import{T as s}from"./Text-C1C2cp8Y.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-dCjcK3xZ.js";import"./utils-CqffejwQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dlma28aT.js";import"./useFocusRing-CcZ79Pjo.js";import"./index-DIj_Fm1N.js";import"./index-IOKqJsz7.js";import"./useLabels-BvRWHbBu.js";import"./useButton-BHN-E1Nk.js";import"./RSPContexts-BM0YpPTx.js";import"./OverlayArrow-Cf8gP1Ii.js";import"./useResizeObserver-C8jp6HQ3.js";import"./useControlledState-mjBa_ctK.js";import"./Collection-MECz3tYb.js";import"./index-BRHjuUYx.js";import"./Separator-DFJi1lOr.js";import"./SelectionManager-BhFeTdO8.js";import"./useEvent-DyYZuFIh.js";import"./scrollIntoView-Bgf_9KZM.js";import"./SelectionIndicator-DocZ94Ga.js";import"./useDescription-CZo8T5nr.js";import"./ListKeyboardDelegate-DZdFiNXQ.js";import"./Text-D2_Dqxb_.js";import"./PressResponder-8O6ZKXkc.js";import"./useLocalizedStringFormatter-VaXQjYCf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B0dWRzBe.js";import"./VisuallyHidden-NXDdaJHH.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";/**
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
