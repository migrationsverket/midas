import{j as r}from"./iframe-DSnn27g_.js";import{T as x}from"./TextField-GPQM0QO4.js";import"./preload-helper-Dp1pzeXC.js";import"./TextFieldBase-CmfUXGyd.js";import"./utils-DMRVVt0W.js";import"./clsx-B-dksMZM.js";import"./TextField-Baw4yFrO.js";import"./FieldError-DR6MOAC8.js";import"./Text-GLsatxCV.js";import"./useFocusRing-B0kGOk6b.js";import"./index-DZBSjlS6.js";import"./index-BjdDVgTd.js";import"./clsx-Ciqy0D92.js";import"./Text-RvcCloK4.js";import"./RSPContexts-C9onCh2x.js";import"./Form-B8OxDnWn.js";import"./useFormValidation-C4L9LAeU.js";import"./Group-D-uhdptX.js";import"./Input-D81ziYUL.js";import"./Hidden-D3uRTTac.js";import"./Button-o7f1f1B_.js";import"./useLabels-Ce0RUtwe.js";import"./useButton-C4obrwMi.js";import"./useTextField-DDg00FNM.js";import"./useControlledState-uxvYb-ts.js";import"./useField-CPqt_KXj.js";import"./TextField.module-8GTEwpm_.js";import"./Label-CEFU5H62.js";import"./Dialog-fUx9UXtV.js";import"./OverlayArrow-BVE-o5kx.js";import"./useResizeObserver-gr4U8P4D.js";import"./Collection-BSGo8TNc.js";import"./index-BG3CRSBQ.js";import"./Separator-yV2blzUM.js";import"./SelectionManager-BHoXafN8.js";import"./useEvent-C0v-h-xd.js";import"./scrollIntoView-Dw_LmK8o.js";import"./SelectionIndicator-BTX2l7Ny.js";import"./useDescription-Bth95dVM.js";import"./ListKeyboardDelegate-C3zexFoS.js";import"./PressResponder-Cc00asK9.js";import"./useLocalizedStringFormatter-mbK1evP8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-5ZVZ4IwV.js";import"./VisuallyHidden-D--nviQF.js";import"./useLocalizedStringFormatter-B35VshaI.js";import"./Button-DM8Q6ENn.js";import"./Button.module-CcWMkJAG.js";import"./x-Cs4_OoCJ.js";import"./createLucideIcon-Ctc5foUX.js";import"./Heading-BaqoISbv.js";import"./info-B8Fun2z2.js";import"./Popover-zWQ88JPE.js";const{expect:s,fn:B,userEvent:n}=__STORYBOOK_MODULE_TEST__,ut={title:"Components/TextField",component:x,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},o={args:{className:"test-class"},play:async({canvas:e,step:t,args:a})=>{await t("it should preserve its classNames when being passed new ones",async()=>{s(e.getByRole("textbox").classList.length).toBe(2)}),await t("it should change size according to size prop",async()=>{await s(e.getByLabelText(a.label)).toHaveStyle({height:a.size==="large"?"48px":"40px"})})}},i={args:{type:"password"},play:async({canvas:e,step:t})=>{const a="secret";await t('it should toggle the password when clicking "Show" and "Hide"',async()=>{await n.tab(),await n.keyboard("secret"),await n.tab(),await n.keyboard("[Enter]"),s(e.getByText(a)).toBeInTheDocument(),await n.keyboard("[Enter]"),s(e.queryByText(a)).toBeNull()})}},l={args:{isInvalid:!0,errorMessage:"Något blev fel"},play:async({canvas:e,step:t,args:a})=>{await t("it should be invalid",async()=>{s(e.getByLabelText(a.label)).toBeInvalid()})}},c={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:e=>r.jsxs("form",{children:[r.jsx(x,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:a})=>{await t("it should give a validation error if the user entered no text",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),s(e.getByLabelText(a.label)).toBeInvalid()})}},p={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>r.jsxs("form",{children:[r.jsx(x,{...e,className:({isInvalid:t})=>t?"invalid":"valid"}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should give a validation error if the user entered an unpermitted text",async()=>{await s(e.getByRole("textbox")).toHaveClass("valid"),await n.tab(),await n.keyboard("abc"),await n.tab(),await n.keyboard("[Enter]"),s(e.getByText("Only numbers are allowed")).toBeInTheDocument(),await s(e.getByRole("textbox")).toHaveClass("invalid")})}},d={args:{type:"number"},play:async({canvas:e,step:t,args:a})=>{await t("it should not allow any non number input",async()=>{await n.tab(),await n.keyboard("abc"),s(e.getByLabelText(a.label)).toHaveValue(null)})}},u={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},g={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:t,args:{value:a}})=>{await t("it should show the correct count for its initial value",async()=>{s(e.getByText(a.length)).toBeInTheDocument()})}},h={args:{showCounter:!0,maxLength:50}},y={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:t,args:{defaultValue:a}})=>{await t("it should show the correct count for its initial defaultValue",async()=>{s(e.getByText(a.length)).toBeInTheDocument()})}},b={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:e=>r.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[r.jsx(x,{...e,label:void 0,description:void 0,"aria-label":"test"}),r.jsx("div",{style:{height:100},children:"Dummy content"})]}),play:async({step:e,canvas:t})=>{await e("it should not require more height than neccessary",async()=>{const a=t.getByTestId("wrapper").childNodes[0],pe=t.getByRole("textbox"),{height:de}=a.getBoundingClientRect(),{height:ue}=pe.getBoundingClientRect();await s(de).toEqual(ue)})}},v={args:{...o.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}},w={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{onBlur:B(),onFocus:B()},play:async({args:e,step:t})=>{await t("focus textfield",async()=>{await n.tab()}),await t("it should call onFocus once",async()=>{await s(e.onFocus).toHaveBeenCalledOnce()}),await t("blur textfield",async()=>{await n.tab()}),await t("it should call onBlur once",async()=>{await s(e.onBlur).toHaveBeenCalledOnce()})}};var f,S,T;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var E,C,H;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(C=i.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var D,R,I;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(R=l.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var L,F,O;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
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
}`,...(O=(F=c.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var k,N,V;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
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
      <TextField {...args} className={({
      isInvalid
    }) => isInvalid ? 'invalid' : 'valid'} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step
  }) => {
    await step('it should give a validation error if the user entered an unpermitted text', async () => {
      await expect(canvas.getByRole('textbox')).toHaveClass('valid');
      await userEvent.tab();
      await userEvent.keyboard('abc');
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText('Only numbers are allowed')).toBeInTheDocument();
      await expect(canvas.getByRole('textbox')).toHaveClass('invalid');
    });
  }
}`,...(V=(N=p.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var j,q,_;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(q=d.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var M,P,z;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(P=u.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var A,W,U;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: 'User input'
  }
}`,...(U=(W=m.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var J,$,K;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=($=g.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Y,G,Q;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(Q=(G=h.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Z,ee;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
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
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
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
}`,...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,re,oe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...(oe=(re=v.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,le,ce;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    onBlur: fn(),
    onFocus: fn()
  },
  play: async ({
    args,
    step
  }) => {
    await step('focus textfield', async () => {
      await userEvent.tab();
    });
    await step('it should call onFocus once', async () => {
      await expect(args.onFocus).toHaveBeenCalledOnce();
    });
    await step('blur textfield', async () => {
      await userEvent.tab();
    });
    await step('it should call onBlur once', async () => {
      await expect(args.onBlur).toHaveBeenCalledOnce();
    });
  }
}`,...(ce=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const mt=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue","DS1243","WithHelpPopover","DS1326"];export{p as CustomValidation,b as DS1243,w as DS1326,u as Disabled,l as Invalid,h as MaxLengthAndShowCounter,d as Number,i as Password,o as Primary,m as ReadOnly,c as Required,g as ShowCounter,y as ShowCounterWithDefaultValue,v as WithHelpPopover,mt as __namedExportsOrder,ut as default};
