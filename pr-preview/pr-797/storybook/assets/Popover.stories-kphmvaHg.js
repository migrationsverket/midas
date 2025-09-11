import{j as r}from"./iframe-DRZdUIJs.js";import{P as a}from"./Dialog-DRXe-vwZ.js";import{$ as i}from"./Dialog-BNZlSzb-.js";import{B as d}from"./Button-BU0d3cnH.js";import{S as g}from"./save-Tmr6wP7g.js";import{H as x}from"./Heading-BwRBhzzF.js";import{T as u}from"./Text-BQyKd7Bj.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CCuQfigz.js";import"./utils-CKK3UDgr.js";import"./index-CbBEFnPv.js";import"./index-BtzDifcb.js";import"./useFocusRing-Hsify7_X.js";import"./Button-DIBMlKDy.js";import"./Hidden-QAoTiEsM.js";import"./useLabels-CffQ9XD5.js";import"./useButton-y4Wb2qRj.js";import"./useResizeObserver-DpVY46CZ.js";import"./useControlledState-Anq9cKeh.js";import"./useLocalizedStringFormatter-8lsqOXsg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./x-C1FYIfKJ.js";import"./createLucideIcon-CYCCyUv-.js";import"./RSPContexts-DpQSmc7I.js";import"./Collection-DngcUsHy.js";import"./index-B_uzEBfw.js";import"./ListKeyboardDelegate-Dw44kFR0.js";import"./SelectionManager-DamX-YTE.js";import"./useEvent-7J7lBuYS.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C0EJLdj3.js";import"./useDescription-DpXKBDaJ.js";import"./Separator-BIHWamwv.js";import"./Text--dAePbsz.js";import"./PressResponder-BarudaES.js";import"./useLocalizedStringFormatter-5UJ-e-Hg.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CXFQFsNC.js";import"./Button.module-K7qYOset.js";const er={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(x,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(u,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara",children:r.jsx(g,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(d,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(g,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var s,c,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const or=["Primary","Placement"];export{e as Placement,t as Primary,or as __namedExportsOrder,er as default};
