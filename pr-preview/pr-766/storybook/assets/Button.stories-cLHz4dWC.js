import{j as O}from"./jsx-runtime-BYYWji4R.js";import{B as q}from"./Button-DlS6FYEc.js";import{u as p,e as m}from"./index-Q7OVwvWC.js";import{P as A}from"./plus-ujXGwDQp.js";import{X as G}from"./x-Dz2R9y6b.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-CF2bVDCq.js";import"./Button-v_l_ujRb.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-DQcVpLGQ.js";import"./createLucideIcon-uZw3gxGR.js";const ua={component:q,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button",size:"large"},argTypes:{children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}}},e={args:{children:"Button",className:"test-class"}},n={args:{variant:"secondary"}},s={args:{children:"Lägg till",variant:"tertiary",icon:A}},o={args:{variant:"primary",isDisabled:!0,children:"Lägg till"},play:async({canvas:t})=>{const a=t.getByRole("button");await p.click(a),await m(a).toBeDisabled()}},c={args:{variant:"secondary",isDisabled:!0},play:async({canvas:t})=>{const a=t.getByRole("button");await p.click(a),await m(a).toBeDisabled()}},i={args:{children:"Button",fullwidth:!0}},l={args:{children:O.jsx(G,{size:20,"aria-hidden":!0}),variant:"icon","aria-label":"Stäng"}},d={args:{children:"Button",variant:"danger"}},u={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{children:"Button",className:"test-class"},play:async({canvas:t,step:a})=>{await a("it should have focus when clicked",async()=>{const r=t.getByRole("button");await p.click(r),await m(r).toBeEnabled(),r.focus(),await p.keyboard("{Enter}"),await m(r).toHaveFocus()})}};var g,y,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...(b=(y=e.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,v,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var B,S,D;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...(D=(S=s.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var f,E,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(E=o.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var x,P,R;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var T,F,I;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var L,N,j;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: <X size={20} aria-hidden />,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...(j=(N=l.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var z,H,W;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...(W=(H=d.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var X,_,C;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(C=(_=u.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const pa=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","Icon","Danger","Tests"];export{d as Danger,l as Icon,e as Primary,o as PrimaryDisabled,i as PrimaryFullwidth,n as Secondary,c as SecondaryDisabled,s as TertiaryWithIcon,u as Tests,pa as __namedExportsOrder,ua as default};
