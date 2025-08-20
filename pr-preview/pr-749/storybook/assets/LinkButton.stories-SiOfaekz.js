import{j as z}from"./jsx-runtime-BYYWji4R.js";import{L as d}from"./LinkButton-CQDAAsSt.js";import{e as L,u as C}from"./index-Q7OVwvWC.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./arrow-right-BEEGA4ag.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./createLucideIcon-uZw3gxGR.js";import"./square-arrow-out-up-right-D_D_4vHi.js";const U={component:d,title:"Components/LinkButton",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{name:"label"},variant:{options:["primary","secondary","tertiary","danger"],control:{type:"radio"},defaultValue:"primary"},isDisabled:{options:[!0,!1],control:{type:"radio"}},iconPlacement:{options:["right","left"],control:{type:"radio"},defaultValue:"left"}},render:r=>z.jsx(d,{...r}),play:async({canvas:r,step:l,args:e})=>{await l("it should change size according to size prop",async()=>{await L(r.getByTestId("link-button").getBoundingClientRect().height).toBe(e.size==="large"?48:40)})}},a={args:{children:"Till E-tjänst",href:"#","data-testid":"link-button",className:"test-class"}},t={args:{...a.args,variant:"secondary"}},n={args:{...a.args,variant:"tertiary"}},s={args:{...a.args,children:"Föregående",iconPlacement:"left"}},o={args:{...a.args,isDisabled:!0},play:async({canvas:r,step:l})=>{await l("It should have cursor not allowed when disabled",async()=>{const e=r.getByRole("link");await C.hover(e),await L(e).toHaveStyle({cursor:"not-allowed"})})}},i={args:{children:"Till E-tjänst","data-testid":"link-button",onPress:()=>alert("navigation fn")}},c={args:{"data-testid":"link-button",children:"Radera",variant:"danger"},parameters:{a11y:{test:"todo"}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    href: '#',
    'data-testid': 'link-button',
    className: 'test-class'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,y,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,k,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'tertiary'
  }
}`,...(b=(k=n.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var f,w,P;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: 'Föregående',
    iconPlacement: 'left'
  }
}`,...(P=(w=s.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var B,S,T;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var E,j,x;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    'data-testid': 'link-button',
    onPress: () => alert('navigation fn')
  }
}`,...(x=(j=i.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var D,R,A;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const X=["Primary","Secondary","Tertiary","Previous","Disabled","AppLink","Danger"];export{i as AppLink,c as Danger,o as Disabled,s as Previous,a as Primary,t as Secondary,n as Tertiary,X as __namedExportsOrder,U as default};
