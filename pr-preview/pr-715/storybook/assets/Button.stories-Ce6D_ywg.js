import{j as h}from"./jsx-runtime-BYYWji4R.js";import{B as y}from"./Button-BJLtSlE2.js";import{u as n,e as r}from"./index-Q7OVwvWC.js";import{s as A}from"./modes-BX-MOWoB.js";import{P as G}from"./plus-ujXGwDQp.js";import{X as J}from"./x-Dz2R9y6b.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-BKa0cIOy.js";import"./Button-HNQZo37q.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-Fkrzm1DF.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-BLF2LAsl.js";import"./createLucideIcon-uZw3gxGR.js";const ga={component:y,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button"},argTypes:{children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}},size:{options:["large","medium"],control:{type:"radio"}}},render:(t,{globals:{size:a}})=>h.jsx(y,{...t,size:a}),parameters:{chromatic:{modes:A}},play:async({canvas:t,step:a,globals:{size:g}})=>{await a("it should have focus when clicked",async()=>{const e=t.getByRole("button");await n.click(e),await r(e).toBeEnabled(),e.focus(),await n.keyboard("{Enter}"),await r(e).toHaveFocus()}),await a("it should change size according to size prop",async()=>{await r(t.getByRole("button")).toHaveStyle({height:g==="large"?"48px":"40px"})})}},s={args:{children:"Button",className:"test-class"}},o={args:{variant:"secondary"}},i={args:{children:"Lägg till",variant:"tertiary",icon:G}},c={args:{variant:"primary",isDisabled:!0,children:"Lägg till"},play:async({canvas:t})=>{const a=t.getByRole("button");await n.click(a),await r(a).toBeDisabled()}},l={args:{variant:"secondary",isDisabled:!0},play:async({canvas:t})=>{const a=t.getByRole("button");await n.click(a),await r(a).toBeDisabled()}},d={args:{children:"Button",fullwidth:!0}},p={args:{variant:"tertiary",size:"small",children:"Small Tertiary"},argTypes:{variant:{options:["tertiary"],control:{type:"radio"}},size:{options:["small"]}},render:(t,{args:{size:a}})=>h.jsx(y,{...t,size:a}),play:async({canvas:t,step:a,args:{size:g}})=>{await a("it should have focus when clicked",async()=>{const e=t.getByRole("button");await n.click(e),await r(e).toBeEnabled(),e.focus(),await n.keyboard("{Enter}"),await r(e).toHaveFocus()}),await a("it should change size according to size prop",async()=>{const e=g==="small"?"24px":void 0;await r(t.getByRole("button")).toHaveStyle({height:e})})}},u={args:{children:h.jsx(J,{size:20,"aria-hidden":!0}),variant:"icon","aria-label":"Stäng"}},m={args:{children:"Button",variant:"danger"}};var b,v,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var B,S,x;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var z,f,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...(D=(f=i.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var k,E,R;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var H,P,T;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(T=(P=l.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var j,F,I;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var L,N,W;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      options: ['small']
    }
  },
  render: (args, {
    args: {
      size
    }
  }) => {
    return <Button {...args} size={size} />;
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
      const expectedHeight = size === 'small' ? '24px' : undefined;
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: expectedHeight
      });
    });
  }
}`,...(W=(N=p.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var X,_,C;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    children: <X size={20} aria-hidden />,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...(C=(_=u.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var M,O,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...(q=(O=m.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const ya=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","TertiarySmall","Icon","Danger"];export{m as Danger,u as Icon,s as Primary,c as PrimaryDisabled,d as PrimaryFullwidth,o as Secondary,l as SecondaryDisabled,p as TertiarySmall,i as TertiaryWithIcon,ya as __namedExportsOrder,ga as default};
