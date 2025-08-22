import{j as s}from"./jsx-runtime-BYYWji4R.js";import{e as r,u as n}from"./index-Q7OVwvWC.js";import{T as i}from"./TextField-BpzR7FtT.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TextFieldBase-BGsIgVwy.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./TextField-CzLYtQys.js";import"./FieldError-BjFojtrn.js";import"./Text-CZ6zcozL.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./Text-BgvnLaBz.js";import"./Form-Lr15ufU6.js";import"./useFormValidation-DmuZGU-W.js";import"./Input-BMo7u0M7.js";import"./Hidden-BC9qER92.js";import"./Button-v_l_ujRb.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-DQcVpLGQ.js";import"./useTextField-BtgNBGWN.js";import"./useControlledState-H1tiOFpU.js";import"./useField-C9GdkJOV.js";import"./TextField.module-C33Y04O9.js";import"./Label-CU4c2Yl_.js";import"./Dialog-BAAiJcpT.js";import"./RSPContexts-HQcWPJyv.js";import"./OverlayArrow-CEJfcY2d.js";import"./useResizeObserver-D8gvjDpO.js";import"./Collection-BgAPHyOf.js";import"./index-NDK0uC61.js";import"./Separator-DQ7V9Fb3.js";import"./SelectionManager-BkX4LkPr.js";import"./useEvent-D_ha2BWP.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-p3_VE_8x.js";import"./useDescription-BqzP9r9Z.js";import"./ListKeyboardDelegate-Dz8cyiML.js";import"./PressResponder-DWi2SZR7.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BekSNXsj.js";import"./Dialog-DSVYRTtu.js";import"./useLocalizedStringFormatter-9M_dEwOo.js";import"./Button-Dfj_iPpZ.js";import"./Button.module-Bmb634uG.js";import"./x-Dz2R9y6b.js";import"./createLucideIcon-uZw3gxGR.js";import"./Heading-CV1Pcj_U.js";import"./info-CSjK64PU.js";const st={title:"Components/TextField",component:i,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"},render:e=>s.jsx(i,{...e})},o={args:{className:"test-class"},play:async({canvas:e,step:t,args:a})=>{await t("it should preserve its classNames when being passed new ones",async()=>{r(e.getByRole("textbox").classList.length).toBe(2)}),await t("it should change size according to size prop",async()=>{await r(e.getByLabelText(a.label)).toHaveStyle({height:a.size==="large"?"48px":"40px"})})}},l={args:{type:"password"},play:async({canvas:e,step:t})=>{const a="secret";await t('it should toggle the password when clicking "Show" and "Hide"',async()=>{await n.tab(),await n.keyboard("secret"),await n.tab(),await n.keyboard("[Enter]"),r(e.getByText(a)).toBeInTheDocument(),await n.keyboard("[Enter]"),r(e.queryByText(a)).toBeNull()})}},c={args:{isInvalid:!0,errorMessage:"Något blev fel"},play:async({canvas:e,step:t,args:a})=>{await t("it should be invalid",async()=>{r(e.getByLabelText(a.label)).toBeInvalid()})}},p={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:e=>s.jsxs("form",{children:[s.jsx(i,{...e}),s.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:a})=>{await t("it should give a validation error if the user entered no text",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),r(e.getByLabelText(a.label)).toBeInvalid()})}},d={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>s.jsxs("form",{children:[s.jsx(i,{...e}),s.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should give a validation error if the user entered an unpermitted text",async()=>{await n.tab(),await n.keyboard("abc"),await n.tab(),await n.keyboard("[Enter]"),r(e.getByText("Only numbers are allowed")).toBeInTheDocument()})}},u={args:{type:"number"},play:async({canvas:e,step:t,args:a})=>{await t("it should not allow any non number input",async()=>{await n.tab(),await n.keyboard("abc"),r(e.getByLabelText(a.label)).toHaveValue(null)})}},m={args:{isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},g={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:t,args:{value:a}})=>{await t("it should show the correct count for its initial value",async()=>{r(e.getByText(a.length)).toBeInTheDocument()})}},h={args:{showCounter:!0,maxLength:50}},y={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:t,args:{defaultValue:a}})=>{await t("it should show the correct count for its initial defaultValue",async()=>{r(e.getByText(a.length)).toBeInTheDocument()})}},b={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:e=>s.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[s.jsx(i,{...e,label:void 0,description:void 0,"aria-label":"test"}),s.jsx("div",{style:{height:100},children:"Dummy content"})]}),play:async({step:e,canvas:t})=>{await e("it should not require more height than neccessary",async()=>{const a=t.getByTestId("wrapper").childNodes[0],te=t.getByRole("textbox"),{height:ae}=a.getBoundingClientRect(),{height:ne}=te.getBoundingClientRect();await r(ae).toEqual(ne)})}},w={args:{...o.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};var v,x,B;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var f,T,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var E,D,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var C,L,k;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(L=p.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var H,R,j;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(j=(R=d.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var F,N,V;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var q,P,z;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(P=m.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var M,O,A;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(O=g.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var W,_,J;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(J=(_=h.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var $,G,K;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(G=y.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ot=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue","DS1243","WithHelpPopover"];export{d as CustomValidation,b as DS1243,m as Disabled,c as Invalid,h as MaxLengthAndShowCounter,u as Number,l as Password,o as Primary,p as Required,g as ShowCounter,y as ShowCounterWithDefaultValue,w as WithHelpPopover,ot as __namedExportsOrder,st as default};
