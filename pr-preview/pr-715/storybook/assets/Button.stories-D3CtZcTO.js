import{j as O}from"./jsx-runtime-BYYWji4R.js";import{B as q}from"./Button-CpzDs8Gz.js";import{u as n,e as r}from"./index-Q7OVwvWC.js";import{s as A}from"./modes-BX-MOWoB.js";import{P as G}from"./plus-ujXGwDQp.js";import{X as J}from"./x-Dz2R9y6b.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-DbxVSEkM.js";import"./Button-HNQZo37q.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-Fkrzm1DF.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-BLF2LAsl.js";import"./createLucideIcon-uZw3gxGR.js";const ga={component:q,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button"},argTypes:{size:{control:{type:"radio"},options:["large","medium"]},children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}},parameters:{chromatic:{modes:A}},play:async({canvas:e,step:a,args:{size:o}})=>{await a("it should have focus when clicked",async()=>{const t=e.getByRole("button");await n.click(t),await r(t).toBeEnabled(),t.focus(),await n.keyboard("{Enter}"),await r(t).toHaveFocus()}),await a("it should change size according to size prop",async()=>{await r(e.getByRole("button")).toHaveStyle({height:o==="large"?"47.6px":"39.6px"})})}},s={args:{children:"Button",className:"test-class"}},i={args:{variant:"secondary"}},c={args:{children:"Lägg till",variant:"tertiary",icon:G}},l={args:{variant:"primary",isDisabled:!0,children:"Lägg till"},play:async({canvas:e})=>{const a=e.getByRole("button");await n.click(a),await r(a).toBeDisabled()}},d={args:{variant:"secondary",isDisabled:!0},play:async({canvas:e})=>{const a=e.getByRole("button");await n.click(a),await r(a).toBeDisabled()}},p={args:{children:"Button",fullwidth:!0}},u={args:{variant:"tertiary",size:"small",children:"Small Tertiary"},argTypes:{variant:{options:["tertiary"],control:{type:"radio"}},size:{options:["small","medium","large"]}},play:async({canvas:e,step:a,args:{size:o}})=>{await a("it should have focus when clicked",async()=>{const t=e.getByRole("button");await n.click(t),await r(t).toBeEnabled(),t.focus(),await n.keyboard("{Enter}"),await r(t).toHaveFocus()}),await a("it should change size according to size prop",async()=>{const t=o==="large"?"47.6px":o==="small"?"21.6px":o==="medium"?"39.6px":void 0;await r(e.getByRole("button")).toHaveStyle({height:t})})}},m={args:{children:O.jsx(J,{size:20,"aria-hidden":!0}),variant:"icon","aria-label":"Stäng"}},g={args:{children:"Button",variant:"danger"}};var y,h,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,w,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var x,S,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var z,D,k;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(k=(D=l.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var E,R,H;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(R=d.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var P,T,F;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...(F=(T=p.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var I,L,j;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
      const expectedHeight = size === 'large' ? '47.6px' : size === 'small' ? '21.6px' : size === 'medium' ? '39.6px' : undefined;
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: expectedHeight
      });
    });
  }
}`,...(j=(L=u.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var N,W,X;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: <X size={20} aria-hidden />,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var _,C,M;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...(M=(C=g.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};const ya=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","TertiarySmall","Icon","Danger"];export{g as Danger,m as Icon,s as Primary,l as PrimaryDisabled,p as PrimaryFullwidth,i as Secondary,d as SecondaryDisabled,u as TertiarySmall,c as TertiaryWithIcon,ya as __namedExportsOrder,ga as default};
