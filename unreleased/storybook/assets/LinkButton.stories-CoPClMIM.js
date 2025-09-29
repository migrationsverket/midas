import{L as R}from"./LinkButton-D9cNH1_P.js";import"./iframe-kMiknBC6.js";import"./preload-helper-Dp1pzeXC.js";import"./arrow-right-DhASei7O.js";import"./utils-s8mL8uTY.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-BY5A72sR.js";import"./index-D9HDOR5h.js";import"./index-7kcFapoJ.js";import"./createLucideIcon-CC-uhS2x.js";import"./square-arrow-out-up-right-Bm238J3w.js";const{expect:j,userEvent:x}=__STORYBOOK_MODULE_TEST__,Y={component:R,title:"Components/LinkButton",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{name:"label"},variant:{options:["primary","secondary","tertiary","danger"],control:{type:"radio"},defaultValue:"primary"},isDisabled:{options:[!0,!1],control:{type:"radio"}},iconPlacement:{options:["right","left"],control:{type:"radio"},defaultValue:"left"}},args:{size:"large"}},r={args:{children:"Till E-tjänst",href:"#","data-testid":"link-button",className:"test-class"}},a={args:{...r.args,variant:"secondary"}},e={args:{...r.args,variant:"tertiary"}},t={args:{...r.args,children:"Föregående",iconPlacement:"left"}},n={args:{...r.args,isDisabled:!0},play:async({canvas:L,step:O})=>{await O("It should have cursor not allowed when disabled",async()=>{const i=L.getByRole("link");await x.hover(i),await j(i).toHaveStyle({cursor:"not-allowed"})})}},s={args:{children:"Till E-tjänst","data-testid":"link-button",onPress:()=>alert("navigation fn")}},o={args:{"data-testid":"link-button",children:"Radera",variant:"danger"}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(k=t.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var f,P,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(P=n.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var w,T,B;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    'data-testid': 'link-button',
    onPress: () => alert('navigation fn')
  }
}`,...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var E,D,_;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    'data-testid': 'link-button',
    children: 'Radera',
    variant: 'danger'
  }
}`,...(_=(D=o.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const q=["Primary","Secondary","Tertiary","Previous","Disabled","AppLink","Danger"];export{s as AppLink,o as Danger,n as Disabled,t as Previous,r as Primary,a as Secondary,e as Tertiary,q as __namedExportsOrder,Y as default};
