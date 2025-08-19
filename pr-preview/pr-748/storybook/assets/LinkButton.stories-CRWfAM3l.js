import{j as C}from"./jsx-runtime-BYYWji4R.js";import{L as d}from"./LinkButton-CQDAAsSt.js";import{e as L,u as I}from"./index-Q7OVwvWC.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./arrow-right-BEEGA4ag.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./createLucideIcon-uZw3gxGR.js";import"./square-arrow-out-up-right-D_D_4vHi.js";const U={component:d,title:"Components/LinkButton",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{name:"label"},variant:{options:["primary","secondary","tertiary","danger"],control:{type:"radio"},defaultValue:"primary"},isDisabled:{options:[!0,!1],control:{type:"radio"}},iconPlacement:{options:["right","left"],control:{type:"radio"},defaultValue:"left"}},render:(r,{globals:{size:e}})=>C.jsx(d,{...r,size:e}),play:async({canvas:r,step:e,globals:{size:t}})=>{await e("it should change size according to size prop",async()=>{await L(r.getByTestId("link-button").getBoundingClientRect().height).toBe(t==="large"?48:40)})}},a={args:{children:"Till E-tjänst",href:"#","data-testid":"link-button",className:"test-class"}},n={args:{...a.args,variant:"secondary"}},s={args:{...a.args,variant:"tertiary"}},o={args:{...a.args,children:"Föregående",iconPlacement:"left"}},i={args:{...a.args,isDisabled:!0},play:async({canvas:r,step:e})=>{await e("It should have cursor not allowed when disabled",async()=>{const t=r.getByRole("link");await I.hover(t),await L(t).toHaveStyle({cursor:"not-allowed"})})}},c={args:{children:"Till E-tjänst","data-testid":"link-button",onPress:()=>alert("navigation fn")}},l={args:{"data-testid":"link-button",children:"Radera",variant:"danger"},parameters:{a11y:{test:"todo"}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    href: '#',
    'data-testid': 'link-button',
    className: 'test-class'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,y,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,b,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'tertiary'
  }
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var f,w,P;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: 'Föregående',
    iconPlacement: 'left'
  }
}`,...(P=(w=o.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var B,S,T;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var E,j,x;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    'data-testid': 'link-button',
    onPress: () => alert('navigation fn')
  }
}`,...(x=(j=c.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var D,R,A;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    'data-testid': 'link-button',
    children: 'Radera',
    variant: 'danger'
  },
  parameters: {
    a11y: {
      // This color combo violates WCAG 2 AA contrast ratio threshold in dark mode
      test: 'todo'
    }
  }
}`,...(A=(R=l.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const X=["Primary","Secondary","Tertiary","Previous","Disabled","AppLink","Danger"];export{c as AppLink,l as Danger,i as Disabled,o as Previous,a as Primary,n as Secondary,s as Tertiary,X as __namedExportsOrder,U as default};
