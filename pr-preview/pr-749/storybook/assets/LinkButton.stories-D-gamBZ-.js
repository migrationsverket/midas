import{L as x}from"./LinkButton-CaHI8BWV.js";import{e as j,u as z}from"./index-Q7OVwvWC.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./arrow-right-BEEGA4ag.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./createLucideIcon-uZw3gxGR.js";import"./square-arrow-out-up-right-D_D_4vHi.js";const Q={component:x,title:"Components/LinkButton",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{name:"label"},variant:{options:["primary","secondary","tertiary","danger"],control:{type:"radio"},defaultValue:"primary"},isDisabled:{options:[!0,!1],control:{type:"radio"}},iconPlacement:{options:["right","left"],control:{type:"radio"},defaultValue:"left"}},args:{size:"large"},play:async({canvas:c,step:l,args:r})=>{await l("it should change size according to size prop",async()=>{await j(c.getByTestId("link-button").getBoundingClientRect().height).toBe(r.size==="large"?48:40)})}},a={args:{children:"Till E-tjänst",href:"#","data-testid":"link-button",className:"test-class"}},e={args:{...a.args,variant:"secondary"}},t={args:{...a.args,variant:"tertiary"}},n={args:{...a.args,children:"Föregående",iconPlacement:"left"}},s={args:{...a.args,isDisabled:!0},play:async({canvas:c,step:l})=>{await l("It should have cursor not allowed when disabled",async()=>{const r=c.getByRole("link");await z.hover(r),await j(r).toHaveStyle({cursor:"not-allowed"})})}},o={args:{children:"Till E-tjänst","data-testid":"link-button",onPress:()=>alert("navigation fn")}},i={args:{"data-testid":"link-button",children:"Radera",variant:"danger"},parameters:{a11y:{test:"todo"}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    href: '#',
    'data-testid': 'link-button',
    className: 'test-class'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,v,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'tertiary'
  }
}`,...(k=(v=t.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var b,f,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: 'Föregående',
    iconPlacement: 'left'
  }
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var P,B,S;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var T,D,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    'data-testid': 'link-button',
    onPress: () => alert('navigation fn')
  }
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var A,L,R;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(L=i.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const U=["Primary","Secondary","Tertiary","Previous","Disabled","AppLink","Danger"];export{o as AppLink,i as Danger,s as Disabled,n as Previous,a as Primary,e as Secondary,t as Tertiary,U as __namedExportsOrder,Q as default};
