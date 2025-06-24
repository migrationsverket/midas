import{j as X}from"./jsx-runtime-BYYWji4R.js";import{B as u}from"./Button-BvD3S0iE.js";import{u as p,e as t}from"./index-CqmFxPum.js";import{s as C}from"./modes-BX-MOWoB.js";import{P as M}from"./plus-lGmUxVE_.js";import{X as O}from"./x-BaIpobvV.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-AG3JZ-l4.js";import"./Button-BD6hc4wl.js";import"./utils-oc6myKvD.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-CQGqtZ9B.js";import"./Label-CpkHsAPL.js";import"./Hidden-BC9qER92.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Blgy_cRF.js";import"./context-BSqJJvai.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useButton-Cqc6u4_f.js";import"./usePress-BfxC_TyQ.js";import"./useFocusRing-DUrskli4.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useFocusable-tJD4A6lu.js";import"./createLucideIcon-DQK9Z80p.js";const br={component:u,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button"},argTypes:{children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}},render:(a,{globals:{size:r}})=>X.jsx(u,{...a,size:r}),parameters:{chromatic:{modes:C}},play:async({canvas:a,step:r,globals:{size:_}})=>{await r("it should have focus when clicked",async()=>{const e=a.getByRole("button");await p.click(e),await t(e).toBeEnabled(),e.focus(),await p.keyboard("{Enter}"),await t(e).toHaveFocus()}),await r("it should change size according to size prop",async()=>{await t(a.getByRole("button")).toHaveStyle({height:_==="large"?"48px":"40px"})})}},o={args:{children:"Button",className:"test-class"}},s={args:{variant:"secondary"}},n={args:{children:"Lägg till",variant:"tertiary",icon:M}},i={args:{variant:"primary",isDisabled:!0,children:"Lägg till"},play:async({canvas:a})=>{const r=a.getByRole("button");await p.click(r),await t(r).toBeDisabled()}},c={args:{variant:"secondary",isDisabled:!0},play:async({canvas:a})=>{const r=a.getByRole("button");await p.click(r),await t(r).toBeDisabled()}},l={args:{children:"Button",fullwidth:!0}},m={args:{children:X.jsx(O,{size:20,"aria-hidden":!0}),variant:"icon","aria-label":"Stäng"}},d={args:{children:"Button",variant:"danger"}};var g,y,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,v,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var w,D,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...(S=(D=n.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var f,x,P;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var L,F,T;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: <X size={20} aria-hidden />,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...(T=(F=m.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var H,N,W;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...(W=(N=d.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const hr=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","Icon","Danger"];export{d as Danger,m as Icon,o as Primary,i as PrimaryDisabled,l as PrimaryFullwidth,s as Secondary,c as SecondaryDisabled,n as TertiaryWithIcon,hr as __namedExportsOrder,br as default};
