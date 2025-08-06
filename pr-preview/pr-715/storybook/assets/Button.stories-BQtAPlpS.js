import{j as O}from"./jsx-runtime-BYYWji4R.js";import{B as q}from"./Button-CUNPGbcq.js";import{u as n,e as r}from"./index-Q7OVwvWC.js";import{s as A}from"./modes-BX-MOWoB.js";import{P as G}from"./plus-ujXGwDQp.js";import{X as J}from"./x-Dz2R9y6b.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-DbxVSEkM.js";import"./Button-HNQZo37q.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-Fkrzm1DF.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-BLF2LAsl.js";import"./createLucideIcon-uZw3gxGR.js";const ga={component:q,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button"},argTypes:{size:{control:{type:"radio"},options:["large","medium"]},children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}},parameters:{chromatic:{modes:A}},play:async({canvas:t,step:a,globals:{size:g}})=>{await a("it should have focus when clicked",async()=>{const e=t.getByRole("button");await n.click(e),await r(e).toBeEnabled(),e.focus(),await n.keyboard("{Enter}"),await r(e).toHaveFocus()}),await a("it should change size according to size prop",async()=>{await r(t.getByRole("button")).toHaveStyle({height:g==="large"?"47.6px":"40px"})})}},s={args:{children:"Button",className:"test-class"}},o={args:{variant:"secondary"}},i={args:{children:"Lägg till",variant:"tertiary",icon:G}},c={args:{variant:"primary",isDisabled:!0,children:"Lägg till"},play:async({canvas:t})=>{const a=t.getByRole("button");await n.click(a),await r(a).toBeDisabled()}},l={args:{variant:"secondary",isDisabled:!0},play:async({canvas:t})=>{const a=t.getByRole("button");await n.click(a),await r(a).toBeDisabled()}},d={args:{children:"Button",fullwidth:!0}},p={args:{variant:"tertiary",size:"small",children:"Small Tertiary"},argTypes:{size:{options:["small","medium","large"]}},play:async({canvas:t,step:a,args:{size:g}})=>{await a("it should have focus when clicked",async()=>{const e=t.getByRole("button");await n.click(e),await r(e).toBeEnabled(),e.focus(),await n.keyboard("{Enter}"),await r(e).toHaveFocus()}),await a("it should change size according to size prop",async()=>{await r(t.getByRole("button")).toHaveStyle({height:g==="small"?"21.6px":"40px"})})}},u={args:{children:O.jsx(J,{size:20,"aria-hidden":!0}),variant:"icon","aria-label":"Stäng"}},m={args:{children:"Button",variant:"danger"}};var y,b,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var w,v,B;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(B=(v=o.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var S,x,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var z,D,k;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(k=(D=c.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var E,R,P;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(R=l.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var T,H,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...(F=(H=d.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var I,L,j;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    size: 'small',
    children: 'Small Tertiary'
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large']
    }
  },
  play: async ({
    canvas,
    step,
    args: {
      size
    }
  }) => {
    await step('it should have focus when clicked', async () => {
      const button = canvas.getByRole('button');
      await userEvent.click(button);
      await expect(button).toBeEnabled();
      button.focus();
      await userEvent.keyboard('{Enter}');
      await expect(button).toHaveFocus();
    });
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: size === 'small' ? '21.6px' : '40px'
      });
    });
  }
}`,...(j=(L=p.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var N,W,X;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: <X size={20} aria-hidden />,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...(X=(W=u.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var _,C,M;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...(M=(C=m.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};const ya=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","TertiarySmall","Icon","Danger"];export{m as Danger,u as Icon,s as Primary,c as PrimaryDisabled,d as PrimaryFullwidth,o as Secondary,l as SecondaryDisabled,p as TertiarySmall,i as TertiaryWithIcon,ya as __namedExportsOrder,ga as default};
