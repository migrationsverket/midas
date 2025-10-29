import{j as r}from"./iframe-B4R9RM3U.js";import{S as l}from"./save-BGBiX755.js";import{c as x}from"./createLucideIcon-BiY-WT03.js";import{$ as a}from"./Dialog-DKxEVyM0.js";import{P as i}from"./Popover-CeKL2H92.js";import{B as g}from"./Button-CDex9gaC.js";import{T as u}from"./Text-Bc1-rWpE.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CkCKbdE2.js";import"./utils-CXkK5552.js";import"./clsx-B-dksMZM.js";import"./Hidden-BaYOLoJ0.js";import"./useFocusRing-CxMZqG97.js";import"./index-C99t-prV.js";import"./index-VQ1Ok-M-.js";import"./useLabels-D3X9Q-WA.js";import"./useButton-CXwr66SS.js";import"./RSPContexts-zEXts3c2.js";import"./OverlayArrow-DvUOBvH3.js";import"./useResizeObserver-BkiNoFn2.js";import"./useControlledState-BFFPuRcf.js";import"./Collection-BbhErTSC.js";import"./index-De-vf1W1.js";import"./Separator-YXCPT6DX.js";import"./SelectionManager-CjjVemzE.js";import"./useEvent-C9inzQTo.js";import"./scrollIntoView-DjzMltdM.js";import"./SelectionIndicator-ms2btMSA.js";import"./useDescription-D5xpt2ne.js";import"./ListKeyboardDelegate-DbMew6r2.js";import"./Text-BbHTMgzj.js";import"./PressResponder-jTz9lo4M.js";import"./useLocalizedStringFormatter-4y9Oc-2L.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CWwl0RBi.js";import"./VisuallyHidden-BKBqImIU.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CcWMkJAG.js";/**
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
