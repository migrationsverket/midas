import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{e as n,u as t}from"./index-DtSMq7G1.js";import{T as w}from"./TextField-BACsnu_Z.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TextFieldBase-CbpYDdSQ.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./TextField-DtKlQFf3.js";import"./Form-BMyPeP3B.js";import"./Text-D0cNLqf0.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-BrFQy5aA.js";import"./useFocusRing-CPQALXIu.js";import"./Input-CAfzXJk2.js";import"./Hidden-lswqw32w.js";import"./Label-Cr3pFc-x.js";import"./useTextField-zhCHv51w.js";import"./useControlledState-DGyHFLi9.js";import"./useField-BWvtu4tG.js";import"./useLabel-BAqrTMfP.js";import"./useFocusable-b_0ijIRa.js";import"./TextField.module-DwhLQhDt.js";import"./Text-DJ2zVqb4.js";import"./Label-BdAnV8MH.js";import"./FieldError-Bx1mO94l.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./context-oTIQb5ND.js";import"./Button-CHQ8LquW.js";import"./Button.module-BEIdyv-e.js";import"./Button-C6eeUJZ7.js";import"./ProgressBar-DJC3JvQN.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-BH_mgHDo.js";import"./usePress-COtC8Zcb.js";import"./index-cpIEhwLo.js";const Ne={title:"Components/TextField",component:w,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top"}},o={args:{className:"test-class"},play:async({canvas:e,step:a})=>{await a("it should preserve its classNames when being passed new ones",async()=>{n(e.getByRole("textbox").classList.length).toBe(2)})}},i={args:{type:"password"},play:async({canvas:e,step:a})=>{const s="secret";await a('it should toggle the password when clicking "Show" and "Hide"',async()=>{await t.tab(),await t.keyboard("secret"),await t.tab(),await t.keyboard("[Enter]"),n(e.getByText(s)).toBeInTheDocument(),await t.keyboard("[Enter]"),n(e.queryByText(s)).toBeNull()})}},l={args:{isInvalid:!0,errorMessage:"Något blev fel"},play:async({canvas:e,step:a,args:s})=>{await a("it should be invalid",async()=>{n(e.getByLabelText(s.label)).toBeInvalid()})}},c={tags:["!dev","!autodocs"],args:{isRequired:!0},render:e=>r.jsxs("form",{children:[r.jsx(w,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a,args:s})=>{await a("it should give a validation error if the user entered no text",async()=>{await t.tab(),await t.tab(),await t.keyboard("[Enter]"),n(e.getByLabelText(s.label)).toBeInvalid()})}},u={tags:["!dev","!autodocs"],args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>r.jsxs("form",{children:[r.jsx(w,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a})=>{await a("it should give a validation error if the user entered an unpermitted text",async()=>{await t.tab(),await t.keyboard("abc"),await t.tab(),await t.keyboard("[Enter]"),n(e.getByText("Only numbers are allowed")).toBeInTheDocument()})}},d={args:{type:"number"},play:async({canvas:e,step:a,args:s})=>{await a("it should not allow any non number input",async()=>{await t.tab(),await t.keyboard("abc"),n(e.getByLabelText(s.label)).toHaveValue(null)})}},p={args:{isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:a,args:{value:s}})=>{await a("it should show the correct count for its initial value",async()=>{n(e.getByText(s.length)).toBeInTheDocument()})}},g={args:{showCounter:!0,maxLength:50}},y={tags:["!dev","!autodocs"],args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:a,args:{defaultValue:s}})=>{await a("it should show the correct count for its initial defaultValue",async()=>{n(e.getByText(s.length)).toBeInTheDocument()})}},b={tags:["!autodocs"],args:{defaultValue:"Medium size input",size:"medium",label:"Medium size textfield"},play:async({canvas:e,step:a})=>{await a("it should have an input field with top/bottom padding of 10px",async()=>{n(e.getByLabelText("Medium size textfield")).toHaveStyle("padding-bottom: 10px; padding-top: 10px")})}};var h,v,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,B,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var E,S,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(S=l.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var k,L,D;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(L=c.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var C,V,M;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(V=u.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var z,N,j;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var H,R,q;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(R=p.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var O,F,P;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(F=m.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var _,A,J;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(J=(A=g.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var W,$,G;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=($=y.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    defaultValue: 'Medium size input',
    size: 'medium',
    label: 'Medium size textfield'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('it should have an input field with top/bottom padding of 10px', async () => {
      expect(canvas.getByLabelText('Medium size textfield')).toHaveStyle('padding-bottom: 10px; padding-top: 10px');
    });
  }
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const je=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue","MediumSizeInput"];export{u as CustomValidation,p as Disabled,l as Invalid,g as MaxLengthAndShowCounter,b as MediumSizeInput,d as Number,i as Password,o as Primary,c as Required,m as ShowCounter,y as ShowCounterWithDefaultValue,je as __namedExportsOrder,Ne as default};
