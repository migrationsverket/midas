import{j as g}from"./iframe-CcqQFNZ4.js";import{P as y}from"./plus-erLOmef8.js";import{X as b}from"./x-CwAMwMTg.js";import{B as h}from"./Button-Bb_v90_P.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-tejd7HsP.js";import"./Button.module-CtQ1deO8.js";import"./Button-BwODYqP3.js";import"./utils-CzaLILIa.js";import"./clsx-B-dksMZM.js";import"./Hidden-_YiRnjLS.js";import"./useFocusRing-BA6Kf1-f.js";import"./index-DuhG6G0z.js";import"./index-DovVAc5x.js";import"./useLabels-BZCRLtmz.js";import"./useButton-3G_DPaEV.js";import"./clsx-Ciqy0D92.js";const{expect:p,userEvent:m}=__STORYBOOK_MODULE_TEST__,N={component:h,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button",size:"large"},argTypes:{children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}}},e={args:{children:"Button",className:"test-class"}},n={args:{variant:"secondary"}},s={args:{children:"Lägg till",variant:"tertiary",icon:y}},o={args:{variant:"primary",isDisabled:!0,children:"Lägg till"},play:async({canvas:t})=>{const a=t.getByRole("button");await m.click(a),await p(a).toBeDisabled()}},c={args:{variant:"secondary",isDisabled:!0},play:async({canvas:t})=>{const a=t.getByRole("button");await m.click(a),await p(a).toBeDisabled()}},i={args:{children:"Button",fullwidth:!0}},l={args:{children:g.jsx(b,{size:20,"aria-hidden":!0}),variant:"icon","aria-label":"Stäng"}},d={args:{children:"Button",variant:"danger"}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{children:"Button",className:"test-class"},play:async({canvas:t,step:a})=>{await a("it should have focus when clicked",async()=>{const r=t.getByRole("button");await m.click(r),await p(r).toBeEnabled(),r.focus(),await m.keyboard("{Enter}"),await p(r).toHaveFocus()})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    isDisabled: true,
    children: 'Lägg till'
  },
  play: async ({
    canvas
  }) => {
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(button).toBeDisabled();
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    isDisabled: true
  },
  play: async ({
    canvas
  }) => {
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(button).toBeDisabled();
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <X size={20} aria-hidden />,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    children: 'Button',
    className: 'test-class'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('it should have focus when clicked', async () => {
      const button = canvas.getByRole('button');
      await userEvent.click(button);
      await expect(button).toBeEnabled();
      button.focus();
      await userEvent.keyboard('{Enter}');
      await expect(button).toHaveFocus();
    });
  }
}`,...u.parameters?.docs?.source}}};const j=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","Icon","Danger","Tests"];export{d as Danger,l as Icon,e as Primary,o as PrimaryDisabled,i as PrimaryFullwidth,n as Secondary,c as SecondaryDisabled,s as TertiaryWithIcon,u as Tests,j as __namedExportsOrder,N as default};
