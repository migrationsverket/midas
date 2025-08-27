import{j as X}from"./jsx-runtime-BYYWji4R.js";import{B as _}from"./Button-C5OTAH1Y.js";import{u as m,e as p}from"./index-Q7OVwvWC.js";import{P as C}from"./plus-ujXGwDQp.js";import{X as H}from"./x-Dz2R9y6b.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-Bmb634uG.js";import"./Button-v_l_ujRb.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-DQcVpLGQ.js";import"./createLucideIcon-uZw3gxGR.js";const ia={component:_,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button",size:"large"},argTypes:{children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}},play:async({canvas:r,step:a})=>{await a("it should have focus when clicked",async()=>{const t=r.getByRole("button");await m.click(t),await p(t).toBeEnabled(),t.focus(),await m.keyboard("{Enter}"),await p(t).toHaveFocus()})}},e={args:{children:"Button",className:"test-class"}},n={args:{variant:"secondary"}},s={args:{children:"Lägg till",variant:"tertiary",icon:C}},o={args:{variant:"primary",isDisabled:!0,children:"Lägg till"},play:async({canvas:r})=>{const a=r.getByRole("button");await m.click(a),await p(a).toBeDisabled()}},i={args:{variant:"secondary",isDisabled:!0},play:async({canvas:r})=>{const a=r.getByRole("button");await m.click(a),await p(a).toBeDisabled()}},c={args:{children:"Button",fullwidth:!0}},l={args:{children:X.jsx(H,{size:20,"aria-hidden":!0}),variant:"icon","aria-label":"Stäng"}},d={args:{children:"Button",variant:"danger"}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,h,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var B,w,D;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var S,f,P;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(f=o.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var x,k,E;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var R,I,L;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var j,z,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <X size={20} aria-hidden />,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...(F=(z=l.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var T,N,W;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...(W=(N=d.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const ca=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","Icon","Danger"];export{d as Danger,l as Icon,e as Primary,o as PrimaryDisabled,c as PrimaryFullwidth,n as Secondary,i as SecondaryDisabled,s as TertiaryWithIcon,ca as __namedExportsOrder,ia as default};
