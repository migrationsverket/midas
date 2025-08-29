import{j as r}from"./iframe-tFm0VM-K.js";import{T as w}from"./TextField-DkFKDSIW.js";import"./preload-helper-Dp1pzeXC.js";import"./TextFieldBase-kmGSQqf1.js";import"./utils-DY70sTlo.js";import"./clsx-B-dksMZM.js";import"./TextField-B_Lw6Mm2.js";import"./FieldError-CoT_4oZo.js";import"./Text-BZ94on1H.js";import"./useFocusRing-Co8vIkJA.js";import"./index-DAusX6h5.js";import"./index-8YvOezI5.js";import"./Text-CwXAjEnH.js";import"./Form-Bo7obgEK.js";import"./useFormValidation-BZIMR0Fk.js";import"./Input-BapA8Jmu.js";import"./Hidden-D6Lld1PQ.js";import"./Button-B0epWB0S.js";import"./useLabels-CmEIHHMU.js";import"./useButton-Bu7whPwP.js";import"./useTextField-Dmm9WP5O.js";import"./useControlledState-Bw7VkNuk.js";import"./useField-BzMZExtV.js";import"./TextField.module-BrIGiDQC.js";import"./Label-BUneNsT9.js";import"./Dialog-BV5ejL5D.js";import"./RSPContexts-DV7RSB9w.js";import"./OverlayArrow-BcEB5BbZ.js";import"./useResizeObserver-uPczLp6P.js";import"./Collection-Bxi8MuSS.js";import"./index-CNBhV3B0.js";import"./Separator-D1AhTk1B.js";import"./SelectionManager-CbfCnbpf.js";import"./useEvent-CIYeRngj.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-qPwZayfD.js";import"./useDescription-BGyabHqo.js";import"./ListKeyboardDelegate-dkDtjMUC.js";import"./PressResponder-CIpG3YVo.js";import"./useLocalizedStringFormatter-LA2-Vf3Z.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-0TALIKQ6.js";import"./Dialog-C8XPRFSr.js";import"./useLocalizedStringFormatter-CNpg-Pyv.js";import"./Button-BcKba_Ra.js";import"./Button.module-CF2bVDCq.js";import"./x-2OqQdXSU.js";import"./createLucideIcon-cUJ9SYEq.js";import"./Heading-DVvF-l1T.js";import"./info-Ds39Ga8w.js";const{expect:s,userEvent:n}=__STORYBOOK_MODULE_TEST__,tt={title:"Components/TextField",component:w,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},o={args:{className:"test-class"},play:async({canvas:e,step:t,args:a})=>{await t("it should preserve its classNames when being passed new ones",async()=>{s(e.getByRole("textbox").classList.length).toBe(2)}),await t("it should change size according to size prop",async()=>{await s(e.getByLabelText(a.label)).toHaveStyle({height:a.size==="large"?"48px":"40px"})})}},i={args:{type:"password"},play:async({canvas:e,step:t})=>{const a="secret";await t('it should toggle the password when clicking "Show" and "Hide"',async()=>{await n.tab(),await n.keyboard("secret"),await n.tab(),await n.keyboard("[Enter]"),s(e.getByText(a)).toBeInTheDocument(),await n.keyboard("[Enter]"),s(e.queryByText(a)).toBeNull()})}},c={args:{isInvalid:!0,errorMessage:"Något blev fel"},play:async({canvas:e,step:t,args:a})=>{await t("it should be invalid",async()=>{s(e.getByLabelText(a.label)).toBeInvalid()})}},l={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:e=>r.jsxs("form",{children:[r.jsx(w,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:a})=>{await t("it should give a validation error if the user entered no text",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),s(e.getByLabelText(a.label)).toBeInvalid()})}},p={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>r.jsxs("form",{children:[r.jsx(w,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should give a validation error if the user entered an unpermitted text",async()=>{await n.tab(),await n.keyboard("abc"),await n.tab(),await n.keyboard("[Enter]"),s(e.getByText("Only numbers are allowed")).toBeInTheDocument()})}},d={args:{type:"number"},play:async({canvas:e,step:t,args:a})=>{await t("it should not allow any non number input",async()=>{await n.tab(),await n.keyboard("abc"),s(e.getByLabelText(a.label)).toHaveValue(null)})}},u={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:t,args:{value:a}})=>{await t("it should show the correct count for its initial value",async()=>{s(e.getByText(a.length)).toBeInTheDocument()})}},g={args:{showCounter:!0,maxLength:50}},h={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:t,args:{defaultValue:a}})=>{await t("it should show the correct count for its initial defaultValue",async()=>{s(e.getByText(a.length)).toBeInTheDocument()})}},y={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:e=>r.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[r.jsx(w,{...e,label:void 0,description:void 0,"aria-label":"test"}),r.jsx("div",{style:{height:100},children:"Dummy content"})]}),play:async({step:e,canvas:t})=>{await e("it should not require more height than neccessary",async()=>{const a=t.getByTestId("wrapper").childNodes[0],te=t.getByRole("textbox"),{height:ae}=a.getBoundingClientRect(),{height:ne}=te.getBoundingClientRect();await s(ae).toEqual(ne)})}},b={args:{...o.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};var v,x,B;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    className: 'test-class'
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByRole('textbox').classList.length).toBe(2);
    });
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByLabelText(args.label as string)).toHaveStyle({
        height: args.size === 'large' ? '48px' : '40px'
      });
    });
  }
}`,...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var f,T,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var E,D,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var C,L,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
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
}`,...(k=(L=l.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var H,R,F;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
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
}`,...(F=(R=p.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var N,V,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(V=d.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var q,O,_;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  parameters: {
    a11y: {
      context: 'body',
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
}`,...(_=(O=u.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var M,P,z;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(P=m.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var A,W,J;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(J=(W=g.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var $,K,U;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
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
}`,...(U=(K=h.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,G,Q;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => <div style={{
    height: 500
  }} data-testid='wrapper'>
      <TextField {...args} label={undefined} description={undefined} aria-label='test' />
      <div style={{
      height: 100
    }}>Dummy content</div>
    </div>,
  play: async ({
    step,
    canvas
  }) => {
    await step('it should not require more height than neccessary', async () => {
      const textField = canvas.getByTestId('wrapper').childNodes[0] as HTMLElement;
      const input = canvas.getByRole('textbox');
      const {
        height: textFieldHeight
      } = textField.getBoundingClientRect();
      const {
        height: inputHeight
      } = input.getBoundingClientRect();
      await expect(textFieldHeight).toEqual(inputHeight);
    });
  }
}`,...(Q=(G=y.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Z,ee;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const at=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue","DS1243","WithHelpPopover"];export{p as CustomValidation,y as DS1243,u as Disabled,c as Invalid,g as MaxLengthAndShowCounter,d as Number,i as Password,o as Primary,l as Required,m as ShowCounter,h as ShowCounterWithDefaultValue,b as WithHelpPopover,at as __namedExportsOrder,tt as default};
