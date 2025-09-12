import{j as e}from"./iframe-C4zOpDmo.js";import{S as g,s as B}from"./Spinner-BVYwwt_C.js";import{B as x}from"./Button-B5XXxa4j.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-CVso7Nq-.js";import"./VisuallyHidden-BfGsMz1Q.js";import"./utils-CM3FGMCU.js";import"./useFocusRing-CYYkn1ko.js";import"./index-SZeSXddZ.js";import"./index-ghJQV6Us.js";import"./useLocalizedStringFormatter-CAruyKW3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./Button.module-DRhvPh0f.js";import"./Button-CCOwQLb-.js";import"./Hidden-9IIPIzpX.js";import"./useLabels-CCgTKvzn.js";import"./useButton-DDBQS4d5.js";const{expect:O}=__STORYBOOK_MODULE_TEST__,U={component:g,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1,className:"test-class"}},s={play:async({canvas:t,step:y,args:S})=>{await y("it should accept custom classNames",async()=>{await O(t.getByRole("status")).toHaveClass(B.container,S.className)})}},a={args:{small:!0}},r={args:{small:!0,isOnColor:!0},render:t=>e.jsxs(x,{children:[e.jsx(g,{...t}),"Laddar"]})};var o,n,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Y=["Primary","Small","InButton"];export{r as InButton,s as Primary,a as Small,Y as __namedExportsOrder,U as default};
