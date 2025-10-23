import{L as d}from"./LinkButton-0bIxTSdX.js";import"./iframe-fDXOsywa.js";import"./preload-helper-Ct5FWWRu.js";import"./arrow-right-TGaOw1SF.js";import"./utils-jl4nVMmS.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-gU4XRzOS.js";import"./index-wA_lPabs.js";import"./index-NMMldFA3.js";import"./createLucideIcon-T-T0oES3.js";import"./clsx-Ciqy0D92.js";import"./square-arrow-out-up-right-ZAVreFIw.js";const{expect:p,userEvent:m}=__STORYBOOK_MODULE_TEST__,B={component:d,title:"Components/LinkButton",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{name:"label"},variant:{options:["primary","secondary","tertiary","danger"],control:{type:"radio"},defaultValue:"primary"},isDisabled:{options:[!0,!1],control:{type:"radio"}},iconPlacement:{options:["right","left"],control:{type:"radio"},defaultValue:"left"}},args:{size:"large"}},r={args:{children:"Till E-tjänst",href:"#","data-testid":"link-button",className:"test-class"}},a={args:{...r.args,variant:"secondary"}},e={args:{...r.args,variant:"tertiary"}},t={args:{...r.args,children:"Föregående",iconPlacement:"left"}},n={args:{...r.args,isDisabled:!0},play:async({canvas:c,step:l})=>{await l("It should have cursor not allowed when disabled",async()=>{const i=c.getByRole("link");await m.hover(i),await p(i).toHaveStyle({cursor:"not-allowed"})})}},s={args:{children:"Till E-tjänst","data-testid":"link-button",onPress:()=>alert("navigation fn")}},o={args:{"data-testid":"link-button",children:"Radera",variant:"danger"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    href: '#',
    'data-testid': 'link-button',
    className: 'test-class'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'tertiary'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: 'Föregående',
    iconPlacement: 'left'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should have cursor not allowed when disabled', async () => {
      const linkButton = canvas.getByRole('link');
      await userEvent.hover(linkButton);
      await expect(linkButton).toHaveStyle({
        cursor: 'not-allowed'
      });
    });
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    'data-testid': 'link-button',
    onPress: () => alert('navigation fn')
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    'data-testid': 'link-button',
    children: 'Radera',
    variant: 'danger'
  }
}`,...o.parameters?.docs?.source}}};const E=["Primary","Secondary","Tertiary","Previous","Disabled","AppLink","Danger"];export{s as AppLink,o as Danger,n as Disabled,t as Previous,r as Primary,a as Secondary,e as Tertiary,E as __namedExportsOrder,B as default};
