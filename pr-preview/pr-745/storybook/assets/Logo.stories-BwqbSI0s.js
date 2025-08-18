import{L as d,s as g}from"./Logo-CJ5O2Bgl.js";import{e as y}from"./index-Q7OVwvWC.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-9M_dEwOo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./context-zNjZoWML.js";import"./SSRProvider-BhYbDCf7.js";const L={component:d,title:"Components/Logo",tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["x-small","small","medium","large"]},primary:{control:{type:"boolean"}},padding:{control:{type:"boolean"}}}},s={args:{className:"test-class","data-testid":"test"},play:async({canvas:i,step:m,args:t})=>{await m("it should preserve its classNames when being passed new ones",async()=>{const l=i.getByTestId(t["data-testid"]);y(l).toHaveClass(g.container,t.className)})}},e={args:{primary:!1}};var a,o,r;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(o=s.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: false
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const T=["Primary","Monochrome"];export{e as Monochrome,s as Primary,T as __namedExportsOrder,L as default};
