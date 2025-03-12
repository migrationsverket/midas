import{L as h,s as v}from"./Logo-Cpq4HoDX.js";import{e as w}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";const C={component:h,title:"Components/Logo",tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["x-small","small","medium","large"]},background:{control:{type:"boolean"}},primary:{control:{type:"boolean"}},padding:{control:{type:"boolean"}}}},a={args:{className:"test-class","data-testid":"test"},play:async({canvas:b,step:f,args:t})=>{await f("it should preserve its classNames when being passed new ones",async()=>{const x=b.getByTestId(t["data-testid"]);w(x).toHaveClass(v.container,t.className)})}},s={args:{primary:!1}},e={args:{background:!0}},r={args:{primary:!1,background:!0}};var o,n,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    className: 'test-class',
    // @ts-expect-error dont recognize this property
    'data-testid': 'test'
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      // @ts-expect-error dont recognize this property
      const logotype = canvas.getByTestId(args['data-testid']);
      expect(logotype).toHaveClass(styles.container, args.className as string);
    });
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,i,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primary: false
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,l,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    background: true
  }
}`,...(g=(l=e.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,y,k;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    primary: false,
    background: true
  }
}`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const L=["Primary","Dark","BackgroundPrimary","BackgroundDark"];export{r as BackgroundDark,e as BackgroundPrimary,s as Dark,a as Primary,L as __namedExportsOrder,C as default};
