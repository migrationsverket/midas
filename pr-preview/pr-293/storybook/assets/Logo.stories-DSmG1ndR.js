import{L as h}from"./Logo-B9CGPzqL.js";import{e as v}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";const z={component:h,title:"Components/Logo",tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["x-small","small","medium","large"]},background:{control:{type:"boolean"}},primary:{control:{type:"boolean"}},padding:{control:{type:"boolean"}}}},a={args:{className:"test-class","data-testid":"test"},play:async({canvas:b,step:f,args:t})=>{await f("it should preserve its classNames when being passed new ones",async()=>{const x=b.getByTestId(t["data-testid"]);v(x).toHaveClass(/container/,t.className)})}},e={args:{primary:!1}},r={args:{background:!0}},s={args:{primary:!1,background:!0}};var o,n,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      expect(logotype).toHaveClass(/container/, args.className as string);
    });
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,i,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primary: false
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,g,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    background: true
  }
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,y,k;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    primary: false,
    background: true
  }
}`,...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const C=["Primary","Dark","BackgroundPrimary","BackgroundDark"];export{s as BackgroundDark,r as BackgroundPrimary,e as Dark,a as Primary,C as __namedExportsOrder,z as default};
