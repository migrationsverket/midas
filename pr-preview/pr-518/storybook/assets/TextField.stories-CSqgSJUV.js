import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{e as n,u as t}from"./index-DtSMq7G1.js";import{T as b}from"./TextField-sSWRdHrb.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TextFieldBase-CKrK3xqK.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./TextField-DtKlQFf3.js";import"./Form-BMyPeP3B.js";import"./Text-D0cNLqf0.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-BrFQy5aA.js";import"./useFocusRing-CPQALXIu.js";import"./Input-CAfzXJk2.js";import"./Hidden-lswqw32w.js";import"./Label-Cr3pFc-x.js";import"./useTextField-zhCHv51w.js";import"./useControlledState-DGyHFLi9.js";import"./useField-BWvtu4tG.js";import"./useLabel-BAqrTMfP.js";import"./useFocusable-b_0ijIRa.js";import"./TextField.module-6wHfa_SF.js";import"./Text-BO1MQlio.js";import"./Label--BCDKGtH.js";import"./FieldError-BI5lou7e.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./context-oTIQb5ND.js";import"./Button-Ct5SsluS.js";import"./Button.module-kL9Mhzoi.js";import"./Button-K4F0BPlU.js";import"./ProgressBar-DJC3JvQN.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-BM4Mp5Au.js";import"./usePress-DljlCKCj.js";import"./index-cpIEhwLo.js";const Le={title:"Components/TextField",component:b,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top"}},o={args:{className:"test-class"},play:async({canvas:e,step:a})=>{await a("it should preserve its classNames when being passed new ones",async()=>{n(e.getByRole("textbox").classList.length).toBe(2)})}},i={args:{type:"password"},play:async({canvas:e,step:a})=>{const s="secret";await a('it should toggle the password when clicking "Show" and "Hide"',async()=>{await t.tab(),await t.keyboard("secret"),await t.tab(),await t.keyboard("[Enter]"),n(e.getByText(s)).toBeInTheDocument(),await t.keyboard("[Enter]"),n(e.queryByText(s)).toBeNull()})}},l={args:{isInvalid:!0,errorMessage:"Något blev fel"},play:async({canvas:e,step:a,args:s})=>{await a("it should be invalid",async()=>{n(e.getByLabelText(s.label)).toBeInvalid()})}},c={tags:["!dev","!autodocs"],args:{isRequired:!0},render:e=>r.jsxs("form",{children:[r.jsx(b,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a,args:s})=>{await a("it should give a validation error if the user entered no text",async()=>{await t.tab(),await t.tab(),await t.keyboard("[Enter]"),n(e.getByLabelText(s.label)).toBeInvalid()})}},u={tags:["!dev","!autodocs"],args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>r.jsxs("form",{children:[r.jsx(b,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a})=>{await a("it should give a validation error if the user entered an unpermitted text",async()=>{await t.tab(),await t.keyboard("abc"),await t.tab(),await t.keyboard("[Enter]"),n(e.getByText("Only numbers are allowed")).toBeInTheDocument()})}},p={args:{type:"number"},play:async({canvas:e,step:a,args:s})=>{await a("it should not allow any non number input",async()=>{await t.tab(),await t.keyboard("abc"),n(e.getByLabelText(s.label)).toHaveValue(null)})}},d={args:{isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:a,args:{value:s}})=>{await a("it should show the correct count for its initial value",async()=>{n(e.getByText(s.length)).toBeInTheDocument()})}},y={args:{showCounter:!0,maxLength:50}},g={tags:["!dev","!autodocs"],args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:a,args:{defaultValue:s}})=>{await a("it should show the correct count for its initial defaultValue",async()=>{n(e.getByText(s.length)).toBeInTheDocument()})}};var w,h,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    className: 'test-class'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByRole('textbox').classList.length).toBe(2);
    });
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,f,B;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'password'
  },
  play: async ({
    canvas,
    step
  }) => {
    const password = 'secret';
    await step('it should toggle the password when clicking "Show" and "Hide"', async () => {
      await userEvent.tab();
      await userEvent.keyboard('secret');
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText(password)).toBeInTheDocument();
      await userEvent.keyboard('[Enter]');
      expect(canvas.queryByText(password)).toBeNull();
    });
  }
}`,...(B=(f=i.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var T,E,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något blev fel'
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should be invalid', async () => {
      expect(canvas.getByLabelText(args.label as string)).toBeInvalid();
    });
  }
}`,...(S=(E=l.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var I,k,D;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  args: {
    isRequired: true
  },
  render: args => <form>
      <TextField {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should give a validation error if the user entered no text', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByLabelText(args.label as string)).toBeInvalid();
    });
  }
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var C,L,V;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(V=(L=u.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var N,j,R;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'number'
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should not allow any non number input', async () => {
      await userEvent.tab();
      await userEvent.keyboard('abc');
      expect(canvas.getByLabelText(args.label as string)).toHaveValue(null);
    });
  }
}`,...(R=(j=p.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var q,H,O;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
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
}`,...(O=(H=d.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var F,P,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: 'I love apples',
    showCounter: true
  },
  play: async ({
    canvas,
    step,
    args: {
      value
    }
  }) => {
    await step('it should show the correct count for its initial value', async () => {
      expect(canvas.getByText((value as string).length)).toBeInTheDocument();
    });
  }
}`,...(M=(P=m.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var _,A,J;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(J=(A=y.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var W,$,z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  args: {
    defaultValue: 'HEJ',
    showCounter: true
  },
  play: async ({
    canvas,
    step,
    args: {
      defaultValue
    }
  }) => {
    await step('it should show the correct count for its initial defaultValue', async () => {
      expect(canvas.getByText((defaultValue as string).length)).toBeInTheDocument();
    });
  }
}`,...(z=($=g.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const Ve=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue"];export{u as CustomValidation,d as Disabled,l as Invalid,y as MaxLengthAndShowCounter,p as Number,i as Password,o as Primary,c as Required,m as ShowCounter,g as ShowCounterWithDefaultValue,Ve as __namedExportsOrder,Le as default};
