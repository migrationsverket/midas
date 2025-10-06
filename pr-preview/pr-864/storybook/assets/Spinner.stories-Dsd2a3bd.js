import{j as e}from"./iframe-CTCvLAHN.js";import{S as g,s as B}from"./Spinner-BA-tCap4.js";import{B as x}from"./Button-4907tBE5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-DjrEwtZZ.js";import"./VisuallyHidden-D9QYtjg4.js";import"./utils-BNspE_6v.js";import"./useFocusRing-CkBCnc9a.js";import"./index-dY9rVSd3.js";import"./index-BwXGGGQc.js";import"./useLocalizedStringFormatter-BNjbYGCF.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./Button.module-DRhvPh0f.js";import"./Button-Va1LJXm9.js";import"./Hidden-CMnIYPvO.js";import"./useLabels-D7s4i3H0.js";import"./useButton-kiH6VW9G.js";const{expect:O}=__STORYBOOK_MODULE_TEST__,Y={component:g,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1,className:"test-class"}},s={play:async({canvas:t,step:y,args:S})=>{await y("it should accept custom classNames",async()=>{await O(t.getByRole("status")).toHaveClass(B.container,S.className)})}},a={args:{small:!0}},r={args:{small:!0,isOnColor:!0},render:t=>e.jsxs(x,{children:[e.jsx(g,{...t}),"Laddar"]})};var o,n,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should accept custom classNames', async () => {
      await expect(canvas.getByRole('status')).toHaveClass(styles.container, args.className as string);
    });
  }
}`,...(m=(n=s.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var c,p,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var l,u,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    small: true,
    isOnColor: true
  },
  render: args => <Button>
      <Spinner {...args} />
      Laddar
    </Button>
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const b=["Primary","Small","InButton"];export{r as InButton,s as Primary,a as Small,b as __namedExportsOrder,Y as default};
