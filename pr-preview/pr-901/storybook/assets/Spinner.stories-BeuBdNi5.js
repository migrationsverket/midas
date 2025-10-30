import{j as s}from"./iframe-DvLwB3Ds.js";import{S as n,s as j}from"./Spinner-D19dOUzK.js";import{B as c}from"./Button-DfQ5uVTz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-NJUB7Vn1.js";import"./VisuallyHidden-LfsMrYlM.js";import"./utils-DJG2Wzkv.js";import"./useFocusRing-NGNq_XHe.js";import"./index-BbChoBT3.js";import"./index-Cm_qyH8s.js";import"./useLocalizedStringFormatter-DKoY2wzZ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./Button.module-CcWMkJAG.js";import"./Button-DMApcMb3.js";import"./Hidden-K7mYEibi.js";import"./useLabels-v0e-sopg.js";import"./useButton-DY8Vwjfs.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,z={component:n,title:"Components/Spinner",tags:["autodocs","!snapshot"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1,className:"test-class"}},r={play:async({canvas:a,step:f,args:_})=>{await f("it should accept custom classNames",async()=>{await h(a.getByRole("status")).toHaveClass(j.container,_.className)})}},e={args:{small:!0}},t={args:{small:!0},render:a=>s.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[s.jsxs(c,{children:[s.jsx(n,{...a}),"Laddar"]}),s.jsxs(c,{variant:"secondary",children:[s.jsx(n,{...a}),"Laddar"]})]})},o={args:{color:"rebeccapurple"}};var m,p,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
