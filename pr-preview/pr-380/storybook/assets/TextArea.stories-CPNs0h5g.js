import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{r as E}from"./index-BbAIUH2N.js";import{$ as te}from"./utils-B5vVULSi.js";import{a as ae,$ as ne}from"./TextArea-BYeeNa5Y.js";import{c as S}from"./clsx-B-dksMZM.js";import{e as i,u as n}from"./index-DtSMq7G1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusRing-7U1UHDTh.js";const re='"../theme/tokens.css"',se="_textArea_168mq_4",oe="_count_168mq_50",ie="_countExceeded_168mq_58",l={tokens:re,"--focus":"0 0 0 2px white, 0 0 0 4px black","--field-disabled":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--text-invalid":"light-dark(#e62323, #e62323)","--border-invalid":"light-dark(#e62323, #e62323)","--border-strong":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)",textArea:se,count:oe,countExceeded:ie},d=E.forwardRef(({showCounter:t,...e},a)=>{var x,w;[e,a]=te(e,a,ne);const[o,f]=E.useState(((x=e.defaultValue)==null?void 0:x.toString())??((w=e.value)==null?void 0:w.toString())??""),Y=c=>{f(c.target.value),e.onFocus&&e.onFocus(c)},Z=c=>{f(c.target.value),e.onChange&&e.onChange(c)},ee=()=>e.maxLength!==void 0?r.jsxs("span",{className:S(l.count,o.length>e.maxLength&&l.countExceeded),children:[o.length," / ",e.maxLength]}):t?r.jsx("span",{className:l.count,children:o.length}):null;return r.jsxs(r.Fragment,{children:[r.jsx(ee,{}),r.jsx(ae,{...e,value:o,ref:a,className:S(l.textArea,e.className),onFocus:Y,onChange:Z})]})});try{d.displayName="TextArea",d.__docgenInfo={description:"",displayName:"TextArea",props:{showCounter:{defaultValue:{value:"false"},description:"Whether to show the character counter or not",name:"showCounter",required:!1,type:{name:"boolean"}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"(isHovering: boolean) => void"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: InputRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: InputRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}}}}}catch{}const X=t=>new Array(t+1).join("x"),ye={component:d,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},s={args:{label:"Label",description:"Description",className:"test-class","data-testid":"test"},play:async({canvas:t,step:e,args:a})=>{await e("it should preserve its classNames when being passed new ones",async()=>{i(t.getByTestId(a["data-testid"])).toHaveClass(l.inputField,a.className)})}},u={args:{...s.args,isInvalid:!0,errorMessage:"Error"}},g={tags:["!dev"],args:{isRequired:!0,label:"Label",description:"Description",errorMessage:"Var god ange en text"},render:t=>r.jsxs("form",{children:[r.jsx(d,{...t}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:t,step:e,args:{errorMessage:a}})=>{await e("it should give a validation error if the user entered no text",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),i(t.getByText(a)).toBeInTheDocument()})}},m={tags:["!dev"],args:{label:"Label",validate:t=>/^\d+$/.test(t)?!0:"Only numbers are allowed"},render:t=>r.jsxs("form",{children:[r.jsx(d,{...t}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:t,step:e})=>{await e("it should give a validation error if the user entered an unpermitted text",async()=>{await n.tab(),await n.keyboard("abc"),await n.tab(),await n.keyboard("[Enter]"),i(t.getByText("Only numbers are allowed")).toBeInTheDocument()})}},p={args:{...s.args,maxLength:50},play:async({canvas:t,step:e,args:a})=>{await e("it should give a validation error if the given text is too long",async()=>{const o=X(a.maxLength+1);await n.tab(),await n.keyboard(o),await n.tab(),await n.keyboard("[Enter]"),i(t.getByText(/Du har angett 1 tecken för mycket/)).toBeInTheDocument()})}},h={args:{...s.args,minLength:2},play:async({canvas:t,step:e,args:a})=>{await e("it should give a validation error if the given text is too short",async()=>{const o=X(a.minLength-1);await n.tab(),await n.keyboard(o),await n.tab(),await n.keyboard("[Enter]"),i(t.getByText(/Du har angett 1 tecken för lite/)).toBeInTheDocument()})}},y={args:{...s.args,showCounter:!0,value:"HEJ"},play:async({canvas:t,step:e,args:{value:a}})=>{await e("it should show the correct count for its initial value",async()=>{i(t.getByText(a==null?void 0:a.length)).toBeInTheDocument()})}},v={tags:["!dev"],args:{...s.args,showCounter:!0,defaultValue:"HEJ"},play:async({canvas:t,step:e,args:{defaultValue:a}})=>{await e("it should show the correct count for its initial value",async()=>{i(t.getByText(a==null?void 0:a.length)).toBeInTheDocument()})}},b={args:{...s.args,isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}};var T,k,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description',
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
      expect(canvas.getByTestId(args['data-testid'])).toHaveClass(styles.inputField, args.className as string);
    });
  }
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var D,B,L;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(L=(B=u.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var I,H,_;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    isRequired: true,
    label: 'Label',
    description: 'Description',
    errorMessage: 'Var god ange en text'
  },
  render: args => <form>
      <TextArea {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step,
    args: {
      errorMessage
    }
  }) => {
    await step('it should give a validation error if the user entered no text', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText(errorMessage as string)).toBeInTheDocument();
    });
  }
}`,...(_=(H=g.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var N,A,P;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Label',
    validate: (value: string) => !/^\\d+$/.test(value) ? 'Only numbers are allowed' : true
  },
  render: args => <form>
      <TextArea {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step
  }) => {
    await step('it should give a validation error if the user entered an unpermitted text', async () => {
      await userEvent.tab();
      await userEvent.keyboard('abc');
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText('Only numbers are allowed')).toBeInTheDocument();
    });
  }
}`,...(P=(A=m.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var j,V,q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxLength: 50
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should give a validation error if the given text is too long', async () => {
      const randomString = stringOfLength((args.maxLength as number) + 1);
      await userEvent.tab();
      await userEvent.keyboard(randomString);
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText(/Du har angett 1 tecken för mycket/)).toBeInTheDocument();
    });
  }
}`,...(q=(V=p.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var $,M,O;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minLength: 2
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should give a validation error if the given text is too short', async () => {
      const randomString = stringOfLength((args.minLength as number) - 1);
      await userEvent.tab();
      await userEvent.keyboard(randomString);
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText(/Du har angett 1 tecken för lite/)).toBeInTheDocument();
    });
  }
}`,...(O=(M=h.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,F,W;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true,
    value: 'HEJ'
  },
  play: async ({
    canvas,
    step,
    args: {
      value
    }
  }) => {
    await step('it should show the correct count for its initial value', async () => {
      expect(canvas.getByText(value?.length as number)).toBeInTheDocument();
    });
  }
}`,...(W=(F=y.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var z,J,U;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...Primary.args,
    showCounter: true,
    defaultValue: 'HEJ'
  },
  play: async ({
    canvas,
    step,
    args: {
      defaultValue
    }
  }) => {
    await step('it should show the correct count for its initial value', async () => {
      expect(canvas.getByText(defaultValue?.length as number)).toBeInTheDocument();
    });
  }
}`,...(U=(J=v.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var G,K,Q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  },
  parameters: {
    a11y: {
      element: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ve=["Primary","Invalid","Required","CustomValidation","MaxLength","MinLength","ShowCounter","ShowCounterWithDefaultValue","Disabled"];export{m as CustomValidation,b as Disabled,u as Invalid,p as MaxLength,h as MinLength,s as Primary,g as Required,y as ShowCounter,v as ShowCounterWithDefaultValue,ve as __namedExportsOrder,ye as default};
