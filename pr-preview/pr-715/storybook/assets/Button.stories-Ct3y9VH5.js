import{j as O}from"./jsx-runtime-BYYWji4R.js";import{B as q}from"./Button-DsSrYdf7.js";import{u,e}from"./index-CqmFxPum.js";import{s as A}from"./modes-BX-MOWoB.js";import{P as G}from"./plus-ujXGwDQp.js";import{X as J}from"./x-Dz2R9y6b.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-DOo3SpJX.js";import"./Button-Dw7lljiq.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-CiRxO26c.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./context-zNjZoWML.js";import"./useButton-DFlERivp.js";import"./createLucideIcon-uZw3gxGR.js";const ua={component:q,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button"},argTypes:{size:{control:{type:"radio"},options:["large","medium"]},children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}},parameters:{chromatic:{modes:A}},play:async({canvas:r,step:a,globals:{size:M}})=>{await a("it should have focus when clicked",async()=>{const t=r.getByRole("button");await u.click(t),await e(t).toBeEnabled(),t.focus(),await u.keyboard("{Enter}"),await e(t).toHaveFocus()}),await a("it should change size according to size prop",async()=>{await e(r.getByRole("button")).toHaveStyle({height:M==="large"?"48px":"40px"})})}},s={args:{children:"Button",className:"test-class"}},n={args:{variant:"secondary"}},o={args:{children:"Lägg till",variant:"tertiary",icon:G}},i={args:{variant:"primary",isDisabled:!0,children:"Lägg till"},play:async({canvas:r})=>{const a=r.getByRole("button");await u.click(a),await e(a).toBeDisabled()}},c={args:{variant:"secondary",isDisabled:!0},play:async({canvas:r})=>{const a=r.getByRole("button");await u.click(a),await e(a).toBeDisabled()}},l={args:{children:"Button",fullwidth:!0}},m={args:{variant:"tertiary",size:"small",children:"Small Tertiary"},argTypes:{size:{options:["small","medium","large"]}}},d={args:{children:O.jsx(J,{size:20,"aria-hidden":!0}),variant:"icon","aria-label":"Stäng"}},p={args:{children:"Button",variant:"danger"}};var g,y,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,v,B;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(B=(v=n.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var w,S,D;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var f,x,z;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(z=(x=i.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var P,T,k;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var E,R,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...(I=(R=l.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var L,j,F;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    size: 'small',
    children: 'Small Tertiary'
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large']
    }
  }
}`,...(F=(j=m.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var H,N,W;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: <X size={20} aria-hidden />,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...(W=(N=d.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var X,_,C;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...(C=(_=p.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const ga=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","TertiarySmall","Icon","Danger"];export{p as Danger,d as Icon,s as Primary,i as PrimaryDisabled,l as PrimaryFullwidth,n as Secondary,c as SecondaryDisabled,m as TertiarySmall,o as TertiaryWithIcon,ga as __namedExportsOrder,ua as default};
