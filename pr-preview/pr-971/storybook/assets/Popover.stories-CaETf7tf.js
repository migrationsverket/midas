import{j as r}from"./iframe-DvQx2gHF.js";import{S as n}from"./save-ChvaM-Rz.js";import{c as m}from"./createLucideIcon-B90TrqxK.js";import{$ as a}from"./Dialog-C95XLiib.js";import{P as i}from"./Popover-D_Hckzz1.js";import{B as p}from"./Button-LMMkuH17.js";import{T as s}from"./Text-CeKhBkxD.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-7kzFrNDU.js";import"./utils-kfQmERKd.js";import"./clsx-B-dksMZM.js";import"./Hidden-CjIUyCHW.js";import"./useFocusRing-DA1DKtBL.js";import"./index-B92ZKY4H.js";import"./index-DZ0gSeKU.js";import"./useLabels-CZfFJAUf.js";import"./useButton-Bt6boJfA.js";import"./RSPContexts-yU5fq5U4.js";import"./OverlayArrow-DhxTPD6z.js";import"./useResizeObserver-DkJXa8WC.js";import"./useControlledState-DOrx9kOQ.js";import"./Collection-BEQ3VvZG.js";import"./index-Dx8oh3-6.js";import"./Separator-iW54WtdU.js";import"./SelectionManager-jqduvZp3.js";import"./useEvent-DMnH7e8B.js";import"./scrollIntoView-DalvlgH8.js";import"./SelectionIndicator-CVhZMUq0.js";import"./useDescription-iLPOYYta.js";import"./ListKeyboardDelegate-DDuB35RB.js";import"./Text-DEDKiYgd.js";import"./PressResponder-ChRN2HnX.js";import"./useLocalizedStringFormatter--PBbunYI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B92Iv5XW.js";import"./VisuallyHidden-25PLEdNG.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DlX39nGo.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
