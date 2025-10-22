import{j as r}from"./iframe-D7qSfnUE.js";import{S as l}from"./save-CqV3iAjJ.js";import{c as x}from"./createLucideIcon-z_R_CK7D.js";import{$ as a}from"./Dialog-DIQr20BN.js";import{P as i}from"./Popover-oVpgMbvC.js";import{B as g}from"./Button-CjV73bUl.js";import{T as u}from"./Text-BFsJlwRH.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D26x-hX0.js";import"./utils-CeNm5Tih.js";import"./clsx-B-dksMZM.js";import"./Hidden-Jowmf4f0.js";import"./useFocusRing-qSh-9R1P.js";import"./index-BMQPrinf.js";import"./index-DTrZGXsA.js";import"./useLabels-BKQNgdG2.js";import"./useButton-DVaHBh8l.js";import"./RSPContexts-Bv8uCkvn.js";import"./OverlayArrow-BK3mYjGC.js";import"./useResizeObserver-svwGBifc.js";import"./useControlledState-Bz1sBQKS.js";import"./Collection-DHLWoQ48.js";import"./index-X-gr_rP2.js";import"./Separator-DTvYfEn-.js";import"./SelectionManager--E9pRHoE.js";import"./useEvent-CbWTIfAc.js";import"./scrollIntoView-Bs2AzVDZ.js";import"./SelectionIndicator-r7h1dqT9.js";import"./useDescription-CwhIqzOE.js";import"./ListKeyboardDelegate-Bhu3w5IK.js";import"./Text-BMCR77k8.js";import"./PressResponder-BPwWnmsS.js";import"./useLocalizedStringFormatter-bG5WwUlH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-jITrOnkM.js";import"./VisuallyHidden-DRKj4sPQ.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CcWMkJAG.js";/**
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
