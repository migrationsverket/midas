import{L as d,s as g}from"./Logo-oLRlUyHx.js";import"./iframe-BxN02fG5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Bx-I8dIo.js";import"./LocalizedStringFormatter-BB0Nk989.js";const{expect:y}=__STORYBOOK_MODULE_TEST__,T={component:d,title:"Components/Logo",tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["x-small","small","medium","large"]},primary:{control:{type:"boolean"}},padding:{control:{type:"boolean"}}}},s={args:{className:"test-class","data-testid":"test"},play:async({canvas:i,step:m,args:t})=>{await m("it should preserve its classNames when being passed new ones",async()=>{const l=i.getByTestId(t["data-testid"]);y(l).toHaveClass(g.container,t.className)})}},e={args:{primary:!1}};var a,o,r;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(o=s.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: false
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const O=["Primary","Monochrome"];export{e as Monochrome,s as Primary,O as __namedExportsOrder,T as default};
