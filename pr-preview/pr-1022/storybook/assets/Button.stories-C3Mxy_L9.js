import{j as l}from"./iframe-Bs-4Q0RS.js";import{B as m}from"./Button-DTSBAwbm.js";import{X as p}from"./x-DCsDOoGU.js";import{P as u}from"./plus-Cs54CDyV.js";import{T as g,a as h}from"./Tooltip-C-f1zeuq.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BRycn86x.js";import"./utils-D6H3fjwf.js";import"./clsx-B-dksMZM.js";import"./Hidden-DC5u3Uje.js";import"./useFocusRing-BPypZ_tc.js";import"./index-6uY4yepA.js";import"./index-BgNIyxhc.js";import"./useLabel-BMAVjmg6.js";import"./useLabels-BCny178P.js";import"./useButton-Cy54odSV.js";import"./clsx-Ciqy0D92.js";import"./Button.module-BFenTVPP.js";import"./useLocalizedStringFormatter-aDoo-4ef.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./createLucideIcon-C-ocypBz.js";import"./VisuallyHidden-D2ZFd25y.js";import"./OverlayArrow-9hlSjkZZ.js";import"./useResizeObserver-DGNRViMH.js";import"./useControlledState-DOA-W8fE.js";import"./animation-BKwuCbyw.js";const A={component:m,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button",size:"large",isPending:!1},argTypes:{children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}}},r={args:{children:"Button",className:"test-class"}},e={args:{variant:"secondary"}},a={args:{children:"Lägg till",variant:"tertiary",icon:u}},s={args:{variant:"primary",isDisabled:!0,children:"Lägg till"}},t={args:{variant:"secondary",isDisabled:!0}},o={args:{children:"Button",fullwidth:!0}},n={args:{children:void 0,icon:p,variant:"icon","aria-label":"Stäng"}},i={args:{children:"Button",variant:"danger"}},c={parameters:{layout:"centered"},args:{children:"Lägg till",isInactive:!0},render:d=>l.jsxs(g,{shouldCloseOnPress:!1,children:[l.jsx(m,{...d}),l.jsx(h,{children:"Det saknas ett beslut"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    isDisabled: true,
    children: 'Lägg till'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: undefined,
    icon: X,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Lägg till',
    isInactive: true
  },
  render: args => <TooltipTrigger shouldCloseOnPress={false}>
      <Button {...args} />
      <Tooltip>Det saknas ett beslut</Tooltip>
    </TooltipTrigger>
}`,...c.parameters?.docs?.source}}};const G=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","Icon","Danger","Inactive"];export{i as Danger,n as Icon,c as Inactive,r as Primary,s as PrimaryDisabled,o as PrimaryFullwidth,e as Secondary,t as SecondaryDisabled,a as TertiaryWithIcon,G as __namedExportsOrder,A as default};
