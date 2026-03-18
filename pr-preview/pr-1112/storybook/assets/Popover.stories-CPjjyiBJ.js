import{j as r}from"./iframe-Bj8DUbD9.js";import{P as a}from"./Popover-BweEmV_e.js";import{$ as i}from"./Dialog-D8awK9VJ.js";import{S as n}from"./save-BDTFX9GL.js";import{c as m}from"./createLucideIcon-D8pz04BM.js";import{B as p}from"./Button-Cmlv3L41.js";import{T as s}from"./Text-BT7-HsIw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ZO4yOhXK.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-D0j7aBB6.js";import"./useFocusRing-JSDzquTf.js";import"./index-z9FA-6qc.js";import"./index-BheBXkbs.js";import"./Button-BF7jf_Ur.js";import"./Hidden-D5KISXrR.js";import"./useLabels-MzyfVlFc.js";import"./useButton-DViiPWBR.js";import"./useResizeObserver-Bd6XHY1K.js";import"./useControlledState-o6yOdn5X.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-DDd4UCxF.js";import"./Collection-BPF05rQA.js";import"./index-CtLrQJlI.js";import"./Separator-3daChmw5.js";import"./SelectionManager-Csm6B-vw.js";import"./useEvent-CXLssXy0.js";import"./scrollIntoView-Cyg4d7Wf.js";import"./SelectionIndicator-C0jNY1hm.js";import"./useDescription-BprtaOQi.js";import"./ListKeyboardDelegate-G0c0-2Di.js";import"./Text-sbFHWdQM.js";import"./PressResponder-CW-OlPRb.js";import"./useLocalizedStringFormatter-BYlnSABI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bs64OQR9.js";import"./getScrollParent-DD_GG-02.js";import"./VisuallyHidden-CHpwvWxj.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DH047og8.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Z=["Primary","Placement"];export{e as Placement,t as Primary,Z as __namedExportsOrder,Y as default};
