import{L as n,s as c}from"./Logo-jcQ4uQu3.js";import"./iframe-D22RnrI5.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-C3cFmwKu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";const{expect:p}=__STORYBOOK_MODULE_TEST__,h={component:n,title:"Components/Logo",tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["x-small","small","medium","large"]},primary:{control:{type:"boolean"}},padding:{control:{type:"boolean"}}}},s={args:{className:"test-class","data-testid":"test"},play:async({canvas:a,step:o,args:t})=>{await o("it should preserve its classNames when being passed new ones",async()=>{const r=a.getByTestId(t["data-testid"]);p(r).toHaveClass(c.container,t.className)})}},e={args:{primary:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    primary: false
  }
}`,...e.parameters?.docs?.source}}};const _=["Primary","Monochrome"];export{e as Monochrome,s as Primary,_ as __namedExportsOrder,h as default};
