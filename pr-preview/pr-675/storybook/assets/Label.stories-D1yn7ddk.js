import{L as s}from"./Label-C8mJCmL2.js";import{e as p}from"./index-CqmFxPum.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./Label-CpkHsAPL.js";import"./utils-oc6myKvD.js";import"./Hidden-BC9qER92.js";const f={component:s,title:"Components/Typography/Label",tags:["autodocs"]},e={args:{children:"I am a label"},play:async({canvas:r,args:{children:o}})=>{p(r.getByText(o)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'I am a label'
  },
  play: async ({
    canvas,
    args: {
      children
    }
  }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '20px',
      'font-weight': 500
    });
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const b=["_Label"];export{e as _Label,b as __namedExportsOrder,f as default};
