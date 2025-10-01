import{j as C}from"./iframe-BEjKSeJF.js";import{P as K}from"./plus-D9MZ7Uqs.js";import{X as M}from"./x-DISbJv9O.js";import{B as U}from"./Button-Cu1voy75.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-BXUvi_GM.js";import"./Button.module-DRhvPh0f.js";import"./Button-X2gClN_c.js";import"./utils-CB52Z3km.js";import"./clsx-B-dksMZM.js";import"./Hidden-DDqbwcos.js";import"./useFocusRing-C7Kz9uAm.js";import"./index-D4OLSYjb.js";import"./index-BCb1Xvf7.js";import"./useLabels-CokTg17U.js";import"./useButton-CA2mjOsp.js";const{expect:p,userEvent:m}=__STORYBOOK_MODULE_TEST__,ca={component:U,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button",size:"large"},argTypes:{children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}}},e={args:{children:"Button",className:"test-class"}},n={args:{variant:"secondary"}},s={args:{children:"Lägg till",variant:"tertiary",icon:K}},o={args:{variant:"primary",isDisabled:!0,children:"Lägg till"},play:async({canvas:t})=>{const a=t.getByRole("button");await m.click(a),await p(a).toBeDisabled()}},c={args:{variant:"secondary",isDisabled:!0},play:async({canvas:t})=>{const a=t.getByRole("button");await m.click(a),await p(a).toBeDisabled()}},i={args:{children:"Button",fullwidth:!0}},l={args:{children:C.jsx(M,{size:20,"aria-hidden":!0}),variant:"icon","aria-label":"Stäng"}},d={args:{children:"Button",variant:"danger"}},u={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{children:"Button",className:"test-class"},play:async({canvas:t,step:a})=>{await a("it should have focus when clicked",async()=>{const r=t.getByRole("button");await m.click(r),await p(r).toBeEnabled(),r.focus(),await m.keyboard("{Enter}"),await p(r).toHaveFocus()})}};var g,y,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...(b=(y=e.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,v,B;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(B=(v=n.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var w,S,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...(D=(S=s.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var E,f,k;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var x,P,R;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var T,_,L;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...(L=(_=i.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var O,F,I;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: <X size={20} aria-hidden />,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...(I=(F=l.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var N,j,z;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...(z=(j=d.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var H,W,X;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(X=(W=u.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ia=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","Icon","Danger","Tests"];export{d as Danger,l as Icon,e as Primary,o as PrimaryDisabled,i as PrimaryFullwidth,n as Secondary,c as SecondaryDisabled,s as TertiaryWithIcon,u as Tests,ia as __namedExportsOrder,ca as default};
