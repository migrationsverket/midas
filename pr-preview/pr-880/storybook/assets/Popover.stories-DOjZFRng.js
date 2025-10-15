import{j as r}from"./iframe-BibMuvFm.js";import{S as l}from"./save-CgWRAnIW.js";import{c as x}from"./createLucideIcon-B92ZqvIG.js";import{$ as a}from"./Dialog-Cgw-5Pdv.js";import{P as i}from"./Popover-CWaHcdkT.js";import{B as g}from"./Button-CrKghycV.js";import{T as u}from"./Text-BL1ylaeJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C6g_87bM.js";import"./utils-D0FYAsX_.js";import"./clsx-B-dksMZM.js";import"./Hidden-D9t64xwL.js";import"./useFocusRing-D4NMzKjB.js";import"./index-CArXZKde.js";import"./index-DEPEp2yz.js";import"./useLabels-CEsK1vPc.js";import"./useButton-CjyQqok8.js";import"./RSPContexts-BpUje6hW.js";import"./OverlayArrow-iRGaak9u.js";import"./useResizeObserver-DtCAYmze.js";import"./useControlledState-DgAVov5j.js";import"./Collection-CVrJ8bFO.js";import"./index-0p1g812f.js";import"./Separator-BqVZvuP8.js";import"./SelectionManager-DIWtdwIa.js";import"./useEvent-C4RAVbHK.js";import"./scrollIntoView-B2NU2G6G.js";import"./SelectionIndicator-D8aqIo31.js";import"./useDescription-Db_9C6nw.js";import"./ListKeyboardDelegate-DtH5OiyX.js";import"./Text-DejWD-WX.js";import"./PressResponder-CjIEFRnC.js";import"./useLocalizedStringFormatter-CkePlb5F.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-jDAsvGbZ.js";import"./VisuallyHidden-DafaYZFB.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CcWMkJAG.js";/**
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
