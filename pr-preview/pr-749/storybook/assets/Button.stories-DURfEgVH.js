import{j as X}from"./jsx-runtime-BYYWji4R.js";import{B as m}from"./Button-COw3tWUA.js";import{u,e as t}from"./index-Q7OVwvWC.js";import{P as C}from"./plus-ujXGwDQp.js";import{X as O}from"./x-Dz2R9y6b.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-Bmb634uG.js";import"./Button-v_l_ujRb.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-DQcVpLGQ.js";import"./createLucideIcon-uZw3gxGR.js";const ca={component:m,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button"},argTypes:{children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}},render:a=>X.jsx(m,{...a}),play:async({canvas:a,step:r,args:_})=>{await r("it should have focus when clicked",async()=>{const e=a.getByRole("button");await u.click(e),await t(e).toBeEnabled(),e.focus(),await u.keyboard("{Enter}"),await t(e).toHaveFocus()}),await r("it should change size according to size prop",async()=>{await t(a.getByRole("button")).toHaveStyle({height:_.size==="large"?"48px":"40px"})})}},n={args:{children:"Button",className:"test-class"}},s={args:{variant:"secondary"}},o={args:{children:"Lägg till",variant:"tertiary",icon:C}},i={args:{variant:"primary",isDisabled:!0,children:"Lägg till"},play:async({canvas:a})=>{const r=a.getByRole("button");await u.click(r),await t(r).toBeDisabled()}},c={args:{variant:"secondary",isDisabled:!0},play:async({canvas:a})=>{const r=a.getByRole("button");await u.click(r),await t(r).toBeDisabled()}},l={args:{children:"Button",fullwidth:!0}},d={args:{children:X.jsx(O,{size:20,"aria-hidden":!0}),variant:"icon","aria-label":"Stäng"}},p={args:{children:"Button",variant:"danger"}};var g,y,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,v,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var w,D,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var f,x,P;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(P=(x=i.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var k,E,R;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var z,j,I;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var L,F,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: <X size={20} aria-hidden />,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...(T=(F=d.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var H,N,W;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...(W=(N=p.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const la=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","Icon","Danger"];export{p as Danger,d as Icon,n as Primary,i as PrimaryDisabled,l as PrimaryFullwidth,s as Secondary,c as SecondaryDisabled,o as TertiaryWithIcon,la as __namedExportsOrder,ca as default};
