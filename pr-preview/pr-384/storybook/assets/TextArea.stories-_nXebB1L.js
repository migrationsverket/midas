import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{r as F}from"./index-BbAIUH2N.js";import{$ as U}from"./utils-BYZtxgnE.js";import{a as G,$ as K}from"./TextArea-CkA1rbIb.js";import{c as Q}from"./clsx-B-dksMZM.js";import{e as o,u as n}from"./index-DtSMq7G1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusRing-BVR65GV4.js";const X='"../theme/tokens.css"',Y="_textArea_1h8xi_4",J={tokens:X,"--focus":"0 0 0 2px white, 0 0 0 4px black","--field-disabled":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--text-invalid":"light-dark(#e62323, #e62323)","--border-invalid":"light-dark(#e62323, #e62323)","--border-strong":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)",textArea:Y},i=F.forwardRef((e,t)=>([e,t]=U(e,t,K),s.jsx(G,{...e,ref:t,className:Q(J.textArea,e.className)})));try{i.displayName="TextArea",i.__docgenInfo={description:"",displayName:"TextArea",props:{onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"(isHovering: boolean) => void"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: InputRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: InputRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}}}}}catch{}const W=e=>new Array(e+1).join("x"),ie={component:i,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},r={args:{label:"Label",description:"Description",className:"test-class","data-testid":"test"},play:async({canvas:e,step:t,args:a})=>{await t("it should preserve its classNames when being passed new ones",async()=>{o(e.getByTestId(a["data-testid"])).toHaveClass(J.inputField,a.className)})}},c={args:{...r.args,isInvalid:!0,errorMessage:"Error"}},l={tags:["!dev"],args:{isRequired:!0,label:"Label",description:"Description",errorMessage:"Var god ange en text"},render:e=>s.jsxs("form",{children:[s.jsx(i,{...e}),s.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:{errorMessage:a}})=>{await t("it should give a validation error if the user entered no text",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),o(e.getByText(a)).toBeInTheDocument()})}},d={tags:["!dev"],args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>s.jsxs("form",{children:[s.jsx(i,{...e}),s.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should give a validation error if the user entered an unpermitted text",async()=>{await n.tab(),await n.keyboard("abc"),await n.tab(),await n.keyboard("[Enter]"),o(e.getByText("Only numbers are allowed")).toBeInTheDocument()})}},u={args:{...r.args,maxLength:50},play:async({canvas:e,step:t,args:a})=>{await t("it should give a validation error if the given text is too long",async()=>{const y=W(a.maxLength+1);await n.tab(),await n.keyboard(y),await n.tab(),await n.keyboard("[Enter]"),o(e.getByText(/Du har angett 1 tecken för mycket/)).toBeInTheDocument()})}},g={args:{...r.args,minLength:2},play:async({canvas:e,step:t,args:a})=>{await t("it should give a validation error if the given text is too short",async()=>{const y=W(a.minLength-1);await n.tab(),await n.keyboard(y),await n.tab(),await n.keyboard("[Enter]"),o(e.getByText(/Du har angett 1 tecken för lite/)).toBeInTheDocument()})}},m={args:{...r.args,showCounter:!0,value:"HEJ"},play:async({canvas:e,step:t,args:{value:a}})=>{await t("it should show the correct count for its initial value",async()=>{o(e.getByText(a==null?void 0:a.length)).toBeInTheDocument()})}},p={tags:["!dev"],args:{...r.args,showCounter:!0,defaultValue:"HEJ"},play:async({canvas:e,step:t,args:{defaultValue:a}})=>{await t("it should show the correct count for its initial value",async()=>{o(e.getByText(a==null?void 0:a.length)).toBeInTheDocument()})}},h={args:{...r.args,isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}};var v,b,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,x,E;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(E=(x=c.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var S,T,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(T=l.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var D,B,I;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var L,C,H;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=(C=u.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var A,N,P;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(N=g.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var _,$,M;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=($=m.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var V,j,q;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(j=p.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var O,R,z;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(z=(R=h.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const ce=["Primary","Invalid","Required","CustomValidation","MaxLength","MinLength","ShowCounter","ShowCounterWithDefaultValue","Disabled"];export{d as CustomValidation,h as Disabled,c as Invalid,u as MaxLength,g as MinLength,r as Primary,l as Required,m as ShowCounter,p as ShowCounterWithDefaultValue,ce as __namedExportsOrder,ie as default};
