import{j as n}from"./jsx-runtime-DtgEGaVE.js";import{T as w}from"./TextField-CWM14izA.js";import{e as y,u as a}from"./index-Bn1z2x26.js";import{s as Y}from"./TextField.module-CXNtxnDk.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Form-Cq4QZx_r.js";import"./useFocusable-DTLHoeQe.js";import"./clsx-B-dksMZM.js";import"./Text-BorP-jFP.js";import"./useFormValidation-D_zB_ZT8.js";import"./Hidden-D9yAbrAR.js";import"./index-cpIEhwLo.js";import"./Label-B23VYN9V.js";import"./Button-DaFhfzDE.js";import"./Button-DlxIrWB_.js";import"./useControlledState-DGyHFLi9.js";import"./useField-lqkOjd2l.js";import"./useLabels-Dt0KIlgT.js";const ve={component:w,title:"Components/TextField",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"},type:{options:["password","text","email"],control:{type:"select"}}}},r={args:{label:"Label",description:"Description","data-testid":"test"},play:async({canvas:e,step:s,args:t})=>{await s("it should preserve its classNames when being passed new ones",async()=>{const X=e.getByTestId(t["data-testid"]);y(X).toHaveClass(Y.inputField,t.className)})}},o={args:{label:"Enter Password",type:"password"}},i={args:{...r.args,isInvalid:!0,errorMessage:"Fel i valideringen"}},l={args:{...r.args,isRequired:!0,errorMessage:"Var god fyll i detta fält"},render:e=>n.jsxs("form",{children:[n.jsx(w,{...e}),n.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s,args:{errorMessage:t}})=>{await s("it should give a validation error if the user entered no text",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),y(e.getByText(t)).toBeInTheDocument()})}},d={args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>n.jsxs("form",{children:[n.jsx(w,{...e}),n.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s})=>{await s("it should give a validation error if the user entered an unpermitted text",async()=>{await a.tab(),await a.keyboard("abc"),await a.tab(),await a.keyboard("[Enter]"),y(e.getByText("Only numbers are allowed")).toBeInTheDocument()})}},c={args:{label:"Label",type:"number"},play:async({canvas:e,step:s,args:{label:t}})=>{await s("it should not allow any non number input",async()=>{await a.tab(),await a.keyboard("abc"),y(e.getByLabelText(t)).toHaveValue(null)})}},m={args:{...r.args,isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},p={args:{...r.args,validationType:"ssn",label:"Personnummer",description:void 0,errorMessage:"Fel format för ett personnummer",maxLength:12}},u={args:{...r.args,validationType:"dossnr",label:"Dossiernummer",description:void 0,errorMessage:"Fel format för ett dossiernummer"}},g={args:{...r.args,maxLength:50}},b={args:{...r.args,showCounter:!0}};var v,f,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,T,E;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Enter Password',
    type: 'password'
  }
}`,...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var P,S,D;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Fel i valideringen'
  }
}`,...(D=(S=i.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var L,B,F;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var M,k,C;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var j,I,N;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(I=c.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var V,O,R;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,H,z;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    validationType: 'ssn',
    label: 'Personnummer',
    description: undefined,
    errorMessage: \`Fel format för ett personnummer\`,
    maxLength: 12
  }
}`,...(z=(H=p.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var _,$,A;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    validationType: 'dossnr',
    label: 'Dossiernummer',
    description: undefined,
    errorMessage: \`Fel format för ett dossiernummer\`
  }
}`,...(A=($=u.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxLength: 50
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(W=(U=b.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const fe=["Primary","Password","NotValid","Required","CustomValidation","Number","Disabled","Personnummer","Dossnr","MaxLength","ShowCounter"];export{d as CustomValidation,m as Disabled,u as Dossnr,g as MaxLength,i as NotValid,c as Number,o as Password,p as Personnummer,r as Primary,l as Required,b as ShowCounter,fe as __namedExportsOrder,ve as default};
