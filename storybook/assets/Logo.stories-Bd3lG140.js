import{L as d,s as g}from"./Logo-C95c2ibe.js";import{e as y}from"./index-CqmFxPum.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";const f={component:d,title:"Components/Logo",tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["x-small","small","medium","large"]},primary:{control:{type:"boolean"}},padding:{control:{type:"boolean"}}}},s={args:{className:"test-class","data-testid":"test"},play:async({canvas:i,step:m,args:a})=>{await m("it should preserve its classNames when being passed new ones",async()=>{const l=i.getByTestId(a["data-testid"]);y(l).toHaveClass(g.container,a.className)})}},e={args:{primary:!1}};var t,o,r;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const b=["Primary","Monochrome"];export{e as Monochrome,s as Primary,b as __namedExportsOrder,f as default};
