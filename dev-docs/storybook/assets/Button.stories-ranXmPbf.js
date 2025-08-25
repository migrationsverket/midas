import{j as X}from"./jsx-runtime-BYYWji4R.js";import{B as _}from"./Button-Dfj_iPpZ.js";import{u,e as t}from"./index-Q7OVwvWC.js";import{P as C}from"./plus-ujXGwDQp.js";import{X as O}from"./x-Dz2R9y6b.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-Bmb634uG.js";import"./Button-v_l_ujRb.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-DQcVpLGQ.js";import"./createLucideIcon-uZw3gxGR.js";const ca={component:_,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button",size:"large"},argTypes:{children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}},play:async({canvas:r,step:a,args:W})=>{await a("it should have focus when clicked",async()=>{const e=r.getByRole("button");await u.click(e),await t(e).toBeEnabled(),e.focus(),await u.keyboard("{Enter}"),await t(e).toHaveFocus()}),await a("it should change size according to size prop",async()=>{await t(r.getByRole("button")).toHaveStyle({height:W.size==="large"?"48px":"40px"})})}},n={args:{children:"Button",className:"test-class"}},s={args:{variant:"secondary"}},o={args:{children:"Lägg till",variant:"tertiary",icon:C}},i={args:{variant:"primary",isDisabled:!0,children:"Lägg till"},play:async({canvas:r})=>{const a=r.getByRole("button");await u.click(a),await t(a).toBeDisabled()}},c={args:{variant:"secondary",isDisabled:!0},play:async({canvas:r})=>{const a=r.getByRole("button");await u.click(a),await t(a).toBeDisabled()}},l={args:{children:"Button",fullwidth:!0}},d={args:{children:X.jsx(O,{size:20,"aria-hidden":!0}),variant:"icon","aria-label":"Stäng"}},p={args:{children:"Button",variant:"danger"}};var m,g,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,h,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var B,w,D;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var S,f,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var P,k,E;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var R,z,I;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...(I=(z=l.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var L,j,F;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: <X size={20} aria-hidden />,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...(F=(j=d.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var T,H,N;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...(N=(H=p.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const la=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","Icon","Danger"];export{p as Danger,d as Icon,n as Primary,i as PrimaryDisabled,l as PrimaryFullwidth,s as Secondary,c as SecondaryDisabled,o as TertiaryWithIcon,la as __namedExportsOrder,ca as default};
