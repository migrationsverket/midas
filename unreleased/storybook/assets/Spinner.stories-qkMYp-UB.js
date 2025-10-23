import{j as s}from"./iframe-BkRCtzLE.js";import{S as n,s as j}from"./Spinner-DnDqToso.js";import{B as c}from"./Button-2crTYjPf.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-D-Yxj5dk.js";import"./VisuallyHidden-BZRHFj8p.js";import"./utils-BorA7_aK.js";import"./useFocusRing-C2ELTq5K.js";import"./index-CCNL-m0Y.js";import"./index-DCx-fHrh.js";import"./useLocalizedStringFormatter-D6Hsy38S.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./Button.module-CcWMkJAG.js";import"./Button-8uKKZ7fL.js";import"./Hidden-ByT-BA9Q.js";import"./useLabels-CJs_6swF.js";import"./useButton-BZ1Bpjt0.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,z={component:n,title:"Components/Spinner",tags:["autodocs","!snapshot"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1,className:"test-class"}},r={play:async({canvas:a,step:f,args:_})=>{await f("it should accept custom classNames",async()=>{await h(a.getByRole("status")).toHaveClass(j.container,_.className)})}},e={args:{small:!0}},t={args:{small:!0},render:a=>s.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[s.jsxs(c,{children:[s.jsx(n,{...a}),"Laddar"]}),s.jsxs(c,{variant:"secondary",children:[s.jsx(n,{...a}),"Laddar"]})]})},o={args:{color:"rebeccapurple"}};var m,p,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should accept custom classNames', async () => {
      await expect(canvas.getByRole('status')).toHaveClass(styles.container, args.className as string);
    });
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,d,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,y,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    small: true
  },
  render: args => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Button>
        <Spinner {...args} />
        Laddar
      </Button>
      <Button variant="secondary">
        <Spinner {...args} />
        Laddar
      </Button>
    </div>
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,B,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: 'rebeccapurple'
  }
}`,...(v=(B=o.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};const A=["Primary","Small","InButton","UserSelectColor"];export{t as InButton,r as Primary,e as Small,o as UserSelectColor,A as __namedExportsOrder,z as default};
