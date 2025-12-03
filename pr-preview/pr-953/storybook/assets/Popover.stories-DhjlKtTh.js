import{j as r}from"./iframe-BVVtlJUS.js";import{S as n}from"./save-BFvpzbCX.js";import{c as m}from"./createLucideIcon-C3maNRZb.js";import{$ as a}from"./Dialog-XOfh_bir.js";import{P as i}from"./Popover-DQ-iiWrZ.js";import{B as p}from"./Button-DhG_Cd2F.js";import{T as s}from"./Text-2vkSLQm7.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Z5Xlbqol.js";import"./utils-CgRkp8Dv.js";import"./clsx-B-dksMZM.js";import"./Hidden-BzUm3PMd.js";import"./useFocusRing-2PI7p2oX.js";import"./index-B4gk8gxR.js";import"./index-DAR-rwum.js";import"./useLabels-C9j3vCOF.js";import"./useButton-C4VZnzw0.js";import"./RSPContexts-B9iMytNE.js";import"./OverlayArrow-0QpXwgcP.js";import"./useResizeObserver-CNO3EL8D.js";import"./useControlledState-7re4kOBW.js";import"./Collection-DhgSDgxH.js";import"./index-B6aPPNol.js";import"./Separator-k198miS3.js";import"./SelectionManager-CRXYWMik.js";import"./useEvent-CTMQtBwI.js";import"./scrollIntoView-pHdkyFS1.js";import"./SelectionIndicator-ZzP435to.js";import"./useDescription-DvAMy-Is.js";import"./ListKeyboardDelegate-BFOwqObD.js";import"./Text-BizgQ59x.js";import"./PressResponder-Ng01hvOq.js";import"./useLocalizedStringFormatter-CY4FriNq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DggmcIHg.js";import"./VisuallyHidden-DXc6XDNY.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DqjGsQpT.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Y=["Primary","Placement"];export{e as Placement,t as Primary,Y as __namedExportsOrder,X as default};
