import{j as q}from"./jsx-runtime-BYYWji4R.js";import{B as y}from"./Button-CF9pZmRr.js";import{u as n,e as r}from"./index-Q7OVwvWC.js";import{s as A}from"./modes-BX-MOWoB.js";import{P as G}from"./plus-ujXGwDQp.js";import{X as J}from"./x-Dz2R9y6b.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-BKa0cIOy.js";import"./Button-HNQZo37q.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-Fkrzm1DF.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-BLF2LAsl.js";import"./createLucideIcon-uZw3gxGR.js";const ga={component:y,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",size:void 0,children:"Button"},argTypes:{size:{control:{type:"radio"},options:["large","medium"]},children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}},render:(t,{globals:a})=>q.jsx(y,{...t,size:a.size||t.size}),parameters:{chromatic:{modes:A}},play:async({canvas:t,step:a,globals:{size:s}})=>{await a("it should have focus when clicked",async()=>{const e=t.getByRole("button");await n.click(e),await r(e).toBeEnabled(),e.focus(),await n.keyboard("{Enter}"),await r(e).toHaveFocus()}),await a("it should change size according to size prop",async()=>{await r(t.getByRole("button")).toHaveStyle({height:s==="large"?"48px":"40px"})})}},o={args:{children:"Button",className:"test-class"}},i={args:{variant:"secondary"}},c={args:{children:"Lägg till",variant:"tertiary",icon:G}},l={args:{variant:"primary",isDisabled:!0,children:"Lägg till"},play:async({canvas:t})=>{const a=t.getByRole("button");await n.click(a),await r(a).toBeDisabled()}},d={args:{variant:"secondary",isDisabled:!0},play:async({canvas:t})=>{const a=t.getByRole("button");await n.click(a),await r(a).toBeDisabled()}},p={args:{children:"Button",fullwidth:!0}},u={args:{variant:"tertiary",size:"small",children:"Small Tertiary"},argTypes:{variant:{options:["tertiary"],control:{type:"radio"}},size:{options:["small","medium","large"]}},play:async({canvas:t,step:a,args:{size:s}})=>{await a("it should have focus when clicked",async()=>{const e=t.getByRole("button");await n.click(e),await r(e).toBeEnabled(),e.focus(),await n.keyboard("{Enter}"),await r(e).toHaveFocus()}),await a("it should change size according to size prop",async()=>{const e=s==="large"?"48px":s==="small"?"24px":s==="medium"?"40px":void 0;await r(t.getByRole("button")).toHaveStyle({height:e})})}},m={args:{children:q.jsx(J,{size:20,"aria-hidden":!0}),variant:"icon","aria-label":"Stäng"}},g={args:{children:"Button",variant:"danger"}};var h,b,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var w,B,x;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(x=(B=i.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var S,z,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...(f=(z=c.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var D,k,E;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var R,H,P;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=(H=d.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var T,F,j;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...(j=(F=p.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var I,L,N;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    size: 'small',
    children: 'Small Tertiary'
  },
  argTypes: {
    variant: {
      options: ['tertiary'],
      control: {
        type: 'radio'
      }
    },
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
      const expectedHeight = size === 'large' ? '48px' : size === 'small' ? '24px' : size === 'medium' ? '40px' : undefined;
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: expectedHeight
      });
    });
  }
}`,...(N=(L=u.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var W,X,_;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: <X size={20} aria-hidden />,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...(_=(X=m.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var C,M,O;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...(O=(M=g.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const ya=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","TertiarySmall","Icon","Danger"];export{g as Danger,m as Icon,o as Primary,l as PrimaryDisabled,p as PrimaryFullwidth,i as Secondary,d as SecondaryDisabled,u as TertiarySmall,c as TertiaryWithIcon,ya as __namedExportsOrder,ga as default};
