import{j as r}from"./iframe-9uQMLEFM.js";import{T as v}from"./TextField-D8aRAlQf.js";import"./preload-helper-Dp1pzeXC.js";import"./TextFieldBase-DEG-9gaq.js";import"./utils-BTOY5Iih.js";import"./clsx-B-dksMZM.js";import"./TextField-DOJt6zRJ.js";import"./FieldError-WMqlgq9Z.js";import"./Text-Bkm9Piv0.js";import"./useFocusRing-DtXZYfkl.js";import"./index-DgFVapif.js";import"./index-Df1glY4P.js";import"./clsx-Ciqy0D92.js";import"./Text-utSFTMs0.js";import"./RSPContexts-CYTowsZL.js";import"./Form-BxNmpCuh.js";import"./useFormValidation-Bu6QTvJZ.js";import"./Group-C-Yg_5BV.js";import"./Input-CX3uPQuu.js";import"./Hidden-BTU3AIr-.js";import"./Button-DrXrkuug.js";import"./useLabels-DLG53fh7.js";import"./useButton-75obCxYN.js";import"./useTextField-D1cGtmsH.js";import"./useControlledState-BmSrYQ_d.js";import"./useField-Dd--JJsU.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DmW1w_cJ.js";import"./Dialog-lefs78-c.js";import"./OverlayArrow-9zaWyCwR.js";import"./useResizeObserver-BhSWJ1p5.js";import"./Collection-CZdwJHh_.js";import"./index-DspnS8tx.js";import"./Separator-QAWhojjB.js";import"./SelectionManager-BzX7Eq0U.js";import"./useEvent-q0OGT-rN.js";import"./scrollIntoView-vBuhCpjm.js";import"./SelectionIndicator-DLZeUbzB.js";import"./useDescription-DcsJqhyO.js";import"./ListKeyboardDelegate-Hl33qIAd.js";import"./PressResponder-CrUk-JXF.js";import"./useLocalizedStringFormatter-DGeAdmak.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CahOKOB-.js";import"./VisuallyHidden-DSQtv1hV.js";import"./useLocalizedStringFormatter-CByGkEpg.js";import"./Button-1uSs5kk_.js";import"./Button.module-CcWMkJAG.js";import"./x-CoAx-43h.js";import"./createLucideIcon-CRMHsM6N.js";import"./Heading-DHxxggBL.js";import"./info-CyxD6Cza.js";import"./Popover-CHvMoMhB.js";const{expect:s,fn:x,userEvent:n}=__STORYBOOK_MODULE_TEST__,lt={title:"Components/TextField",component:v,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},o={args:{className:"test-class"},play:async({canvas:e,step:t,args:a})=>{await t("it should preserve its classNames when being passed new ones",async()=>{s(e.getByRole("textbox").classList.length).toBe(2)}),await t("it should change size according to size prop",async()=>{await s(e.getByLabelText(a.label)).toHaveStyle({height:a.size==="large"?"48px":"40px"})})}},i={args:{type:"password"},play:async({canvas:e,step:t})=>{const a="secret";await t('it should toggle the password when clicking "Show" and "Hide"',async()=>{await n.tab(),await n.keyboard("secret"),await n.tab(),await n.keyboard("[Enter]"),s(e.getByText(a)).toBeInTheDocument(),await n.keyboard("[Enter]"),s(e.queryByText(a)).toBeNull()})}},l={args:{isInvalid:!0,errorMessage:"Något blev fel"},play:async({canvas:e,step:t,args:a})=>{await t("it should be invalid",async()=>{s(e.getByLabelText(a.label)).toBeInvalid()})}},c={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:e=>r.jsxs("form",{children:[r.jsx(v,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:a})=>{await t("it should give a validation error if the user entered no text",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),s(e.getByLabelText(a.label)).toBeInvalid()})}},p={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>r.jsxs("form",{children:[r.jsx(v,{...e,className:({isInvalid:t})=>t?"invalid":"valid"}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should give a validation error if the user entered an unpermitted text",async()=>{await s(e.getByRole("textbox")).toHaveClass("valid"),await n.tab(),await n.keyboard("abc"),await n.tab(),await n.keyboard("[Enter]"),s(e.getByText("Only numbers are allowed")).toBeInTheDocument(),await s(e.getByRole("textbox")).toHaveClass("invalid")})}},d={args:{type:"number"},play:async({canvas:e,step:t,args:a})=>{await t("it should not allow any non number input",async()=>{await n.tab(),await n.keyboard("abc"),s(e.getByLabelText(a.label)).toHaveValue(null)})}},u={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:t,args:{value:a}})=>{await t("it should show the correct count for its initial value",async()=>{s(e.getByText(a.length)).toBeInTheDocument()})}},g={args:{showCounter:!0,maxLength:50}},h={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:t,args:{defaultValue:a}})=>{await t("it should show the correct count for its initial defaultValue",async()=>{s(e.getByText(a.length)).toBeInTheDocument()})}},y={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:e=>r.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[r.jsx(v,{...e,label:void 0,description:void 0,"aria-label":"test"}),r.jsx("div",{style:{height:100},children:"Dummy content"})]}),play:async({step:e,canvas:t})=>{await e("it should not require more height than neccessary",async()=>{const a=t.getByTestId("wrapper").childNodes[0],oe=t.getByRole("textbox"),{height:ie}=a.getBoundingClientRect(),{height:le}=oe.getBoundingClientRect();await s(ie).toEqual(le)})}},b={args:{...o.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}},w={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{onBlur:x(),onFocus:x()},play:async({args:e,step:t})=>{await t("focus textfield",async()=>{await n.tab()}),await t("it should call onFocus once",async()=>{await s(e.onFocus).toHaveBeenCalledOnce()}),await t("blur textfield",async()=>{await n.tab()}),await t("it should call onBlur once",async()=>{await s(e.onBlur).toHaveBeenCalledOnce()})}};var B,f,S;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var T,E,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(E=i.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var H,D,I;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var L,R,F;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(R=c.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var k,N,O;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var V,j,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var _,M,P;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var z,A,W;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(A=m.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var J,$,K;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(K=($=g.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var U,Y,G;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...(ae=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,se,re;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(se=w.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const ct=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue","DS1243","WithHelpPopover","DS1326"];export{p as CustomValidation,y as DS1243,w as DS1326,u as Disabled,l as Invalid,g as MaxLengthAndShowCounter,d as Number,i as Password,o as Primary,c as Required,m as ShowCounter,h as ShowCounterWithDefaultValue,b as WithHelpPopover,ct as __namedExportsOrder,lt as default};
