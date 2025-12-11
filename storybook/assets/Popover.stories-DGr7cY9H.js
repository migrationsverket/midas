import{j as r}from"./iframe-y6AvU9pV.js";import{S as n}from"./save-DzcIQWCK.js";import{c as m}from"./createLucideIcon-D29kT7vp.js";import{$ as a}from"./Dialog-BoKqdo0f.js";import{P as i}from"./Popover-L_Bg4L94.js";import{B as p}from"./Button-4Ng5Qb5n.js";import{T as s}from"./Text-B3Lob103.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-4DuSgfee.js";import"./utils-VIxaLxO-.js";import"./clsx-B-dksMZM.js";import"./Hidden-CSfoPJVM.js";import"./useFocusRing-B9DSdUhj.js";import"./index-BwPUsMU4.js";import"./index-DrBZwNpv.js";import"./useLabels-Bnd5CjV_.js";import"./useButton-DriAMg0B.js";import"./RSPContexts-CI4AlZqi.js";import"./OverlayArrow-CSG2zuFf.js";import"./useResizeObserver-BWkC-VMD.js";import"./useControlledState-DShqKV-K.js";import"./Collection-CKzIMKbb.js";import"./index-DQOx1nQi.js";import"./Separator-BWaXgvHa.js";import"./SelectionManager-DZRPETSX.js";import"./useEvent-DulQh_3F.js";import"./scrollIntoView-C9aEwsLu.js";import"./SelectionIndicator-DX20ZWKG.js";import"./useDescription-BWXgWP7M.js";import"./ListKeyboardDelegate-CQJsI6L7.js";import"./Text-DlhfRLNK.js";import"./PressResponder-YEHEJoVU.js";import"./useLocalizedStringFormatter-DqeEh2aJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CtO4xKrK.js";import"./VisuallyHidden-DF1AJIqt.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BhHfTxwL.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
