import{L as R}from"./LinkButton-DJCjOrBH.js";import{u as A,e as F}from"./index-Q7OVwvWC.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./arrow-right-BEEGA4ag.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./createLucideIcon-uZw3gxGR.js";import"./square-arrow-out-up-right-D_D_4vHi.js";const U={component:R,title:"Components/LinkButton",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{name:"label"},variant:{options:["primary","secondary","tertiary","danger"],control:{type:"radio"},defaultValue:"primary"},isDisabled:{options:[!0,!1],control:{type:"radio"}},iconPlacement:{options:["right","left"],control:{type:"radio"},defaultValue:"left"}},args:{size:"large"}},r={args:{children:"Till E-tjänst",href:"#","data-testid":"link-button",className:"test-class"}},a={args:{...r.args,variant:"secondary"}},e={args:{...r.args,variant:"tertiary"}},t={args:{...r.args,children:"Föregående",iconPlacement:"left"}},n={args:{...r.args,isDisabled:!0},play:async({canvas:j,step:x})=>{await x("It should have cursor not allowed when disabled",async()=>{const i=j.getByRole("link");await A.hover(i),await F(i).toHaveStyle({cursor:"not-allowed"})})}},s={args:{children:"Till E-tjänst","data-testid":"link-button",onPress:()=>alert("navigation fn")}},o={args:{"data-testid":"link-button",children:"Radera",variant:"danger"}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    href: '#',
    'data-testid': 'link-button',
    className: 'test-class'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,y,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'tertiary'
  }
}`,...(v=(y=e.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,k,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: 'Föregående',
    iconPlacement: 'left'
  }
}`,...(b=(k=t.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var f,P,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should have cursor not allowed when disabled', async () => {
      const linkButton = canvas.getByRole('link');
      await userEvent.hover(linkButton);
      await expect(linkButton).toHaveStyle({
        cursor: 'not-allowed'
      });
    });
  }
}`,...(w=(P=n.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var S,B,D;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    'data-testid': 'link-button',
    onPress: () => alert('navigation fn')
  }
}`,...(D=(B=s.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var E,T,L;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    'data-testid': 'link-button',
    children: 'Radera',
    variant: 'danger'
  }
}`,...(L=(T=o.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const W=["Primary","Secondary","Tertiary","Previous","Disabled","AppLink","Danger"];export{s as AppLink,o as Danger,n as Disabled,t as Previous,r as Primary,a as Secondary,e as Tertiary,W as __namedExportsOrder,U as default};
