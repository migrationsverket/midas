import{j as r}from"./iframe-BvtnbEWO.js";import{S as n}from"./save-COk8q0BT.js";import{c as m}from"./createLucideIcon-DLTmB58A.js";import{$ as a}from"./Dialog-SMibr7T8.js";import{P as i}from"./Popover-lyKFTbo1.js";import{B as p}from"./Button-DciKK2iU.js";import{T as s}from"./Text-B7oxr1RI.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-BDKaMgDI.js";import"./utils-Dmj49lEG.js";import"./clsx-B-dksMZM.js";import"./Hidden-B-AZDmCl.js";import"./useFocusRing-BlbKuGBA.js";import"./index-Buo16tpK.js";import"./index-A6OnxHr3.js";import"./useLabels-KBXM5tZw.js";import"./useButton-qz_TyAWl.js";import"./RSPContexts-BMp6jLpo.js";import"./OverlayArrow-CjKqQivr.js";import"./useResizeObserver-BU-ZyiTP.js";import"./useControlledState-Dzlb7uXm.js";import"./Collection-WF1BDAnd.js";import"./index-Bi-IqhAu.js";import"./Separator-DG3h-wUM.js";import"./SelectionManager-Cc2ZsgzI.js";import"./useEvent-CdLUELr7.js";import"./scrollIntoView-CptB-SyI.js";import"./SelectionIndicator-CAJEwhrw.js";import"./useDescription-3yaDVIih.js";import"./ListKeyboardDelegate-BwOp3GOw.js";import"./Text-G_ihDvZJ.js";import"./PressResponder-DQRY-Kqq.js";import"./useLocalizedStringFormatter-B6wo6qEy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DAh1nnIS.js";import"./VisuallyHidden-DqvK4Wff.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";/**
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
