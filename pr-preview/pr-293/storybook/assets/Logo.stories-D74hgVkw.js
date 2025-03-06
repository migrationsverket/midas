import{L as f}from"./Logo-B9CGPzqL.js";import{w as x,e as B}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";const C={component:f,title:"Components/Logo",tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["x-small","small","medium","large"]},background:{control:{type:"boolean"}},primary:{control:{type:"boolean"}},padding:{control:{type:"boolean"}}}},a={args:{className:"test-class","data-testid":"test"},play:async({canvasElement:b,args:t})=>{const v=x(b).getByTestId(t["data-testid"]);B(v).toHaveClass(/container/,t.className)}},r={args:{primary:!1}},e={args:{background:!0}},s={args:{primary:!1,background:!0}};var o,n,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    className: 'test-class',
    // @ts-expect-error dont recognize this property
    'data-testid': 'test'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    // @ts-expect-error dont recognize this property
    const logotype = canvas.getByTestId(args['data-testid']);
    expect(logotype).toHaveClass(/container/, args.className as string);
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,m,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primary: false
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var d,g,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    background: true
  }
}`,...(l=(g=e.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,y,k;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    primary: false,
    background: true
  }
}`,...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const E=["Primary","Dark","BackgroundPrimary","BackgroundDark"];export{s as BackgroundDark,e as BackgroundPrimary,r as Dark,a as Primary,E as __namedExportsOrder,C as default};
