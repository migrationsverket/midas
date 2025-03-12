import{j as n}from"./jsx-runtime-DtgEGaVE.js";import{T as h}from"./TextField-D3HET8fE.js";import{e as o,u as s}from"./index-DtSMq7G1.js";import{s as re}from"./TextField.module-DBomeRQe.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Form-DJSr-0L7.js";import"./utils-DdXLQA3f.js";import"./clsx-B-dksMZM.js";import"./Text-CV6Bluw9.js";import"./useFocusRing-CAIiVOBX.js";import"./useFormValidation-DerMACuP.js";import"./Input-BPCyqAmH.js";import"./Hidden-0Xxd6rx0.js";import"./index-cpIEhwLo.js";import"./Label-oUcQSHlD.js";import"./TextField-CWcsO5dX.js";import"./useTextField-1zEqDY1L.js";import"./useControlledState-DGyHFLi9.js";import"./useField-_-T_Udov.js";import"./useLabels-BlWvxUw7.js";import"./useFocusable-C2jS3Qdx.js";import"./Button-Mc9z3OTv.js";import"./Button-BhwOwugC.js";import"./LiveAnnouncer-DFDjXwI8.js";const Le={component:h,title:"Components/TextField",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"},type:{options:["password","text","email"],control:{type:"select"}}}},r={args:{label:"Label",description:"Description","data-testid":"test"},play:async({canvas:e,step:t,args:a})=>{await t("it should preserve its classNames when being passed new ones",async()=>{const ae=e.getByTestId(a["data-testid"]);o(ae).toHaveClass(re.inputField,a.className)})}},i={args:{label:"Enter Password",type:"password"}},c={args:{...r.args,isInvalid:!0,errorMessage:"Fel i valideringen"}},l={args:{...r.args,isRequired:!0,errorMessage:"Var god fyll i detta fält"},render:e=>n.jsxs("form",{children:[n.jsx(h,{...e}),n.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:{errorMessage:a}})=>{await t("it should give a validation error if the user entered no text",async()=>{await s.tab(),await s.tab(),await s.keyboard("[Enter]"),o(e.getByText(a)).toBeInTheDocument()})}},p={args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>n.jsxs("form",{children:[n.jsx(h,{...e}),n.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should give a validation error if the user entered an unpermitted text",async()=>{await s.tab(),await s.keyboard("abc"),await s.tab(),await s.keyboard("[Enter]"),o(e.getByText("Only numbers are allowed")).toBeInTheDocument()})}},u={args:{label:"Label",type:"number"},play:async({canvas:e,step:t,args:{label:a}})=>{await t("it should not allow any non number input",async()=>{await s.tab(),await s.keyboard("abc"),o(e.getByLabelText(a)).toHaveValue(null)})}},m={args:{...r.args,isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},d={args:{...r.args,validationType:"ssn",label:"Personnummer",description:void 0,errorMessage:"Fel format för ett personnummer",maxLength:12}},g={args:{...r.args,validationType:"dossnr",label:"Dossiernummer",description:void 0,errorMessage:"Fel format för ett dossiernummer"}},y={args:{...r.args,maxLength:50}},b={args:{...r.args,showCounter:!0,value:"HEJ"},play:async({canvas:e,step:t,args:{value:a}})=>{await t("it should show the correct count for its initial value",async()=>{o(e.getByText(a==null?void 0:a.length)).toBeInTheDocument()})}},w={args:{...r.args,showCounter:!0,defaultValue:"HEJ"},play:async({canvas:e,step:t,args:{defaultValue:a}})=>{await t("it should show the correct count for its initial value",async()=>{o(e.getByText(a==null?void 0:a.length)).toBeInTheDocument()})}};var v,f,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description',
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
      const wrapper = canvas.getByTestId(args['data-testid'] as string);
      expect(wrapper).toHaveClass(styles.inputField, args.className as string);
    });
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var T,E,D;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Enter Password',
    type: 'password'
  }
}`,...(D=(E=i.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var B,S,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Fel i valideringen'
  }
}`,...(P=(S=c.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var L,C,F;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isRequired: true,
    errorMessage: 'Var god fyll i detta fält'
  },
  render: args => <form>
      <TextField {...args} />
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
}`,...(F=(C=l.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var I,M,k;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    validate: (value: string) => !/^\\d+$/.test(value) ? 'Only numbers are allowed' : true
  },
  render: args => <form>
      <TextField {...args} />
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
}`,...(k=(M=p.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var V,j,H;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    type: 'number'
  },
  play: async ({
    canvas,
    step,
    args: {
      label
    }
  }) => {
    await step('it should not allow any non number input', async () => {
      await userEvent.tab();
      await userEvent.keyboard('abc');
      expect(canvas.getByLabelText(label as string)).toHaveValue(null);
    });
  }
}`,...(H=(j=u.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var N,O,R;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,J,z;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    validationType: 'ssn',
    label: 'Personnummer',
    description: undefined,
    errorMessage: \`Fel format för ett personnummer\`,
    maxLength: 12
  }
}`,...(z=(J=d.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var W,_,$;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    validationType: 'dossnr',
    label: 'Dossiernummer',
    description: undefined,
    errorMessage: \`Fel format för ett dossiernummer\`
  }
}`,...($=(_=g.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var A,G,K;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxLength: 50
  }
}`,...(K=(G=y.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ce=["Primary","Password","NotValid","Required","CustomValidation","Number","Disabled","Personnummer","Dossnr","MaxLength","ShowCounter","ShowCounterWithDefaultValue"];export{p as CustomValidation,m as Disabled,g as Dossnr,y as MaxLength,c as NotValid,u as Number,i as Password,d as Personnummer,r as Primary,l as Required,b as ShowCounter,w as ShowCounterWithDefaultValue,Ce as __namedExportsOrder,Le as default};
