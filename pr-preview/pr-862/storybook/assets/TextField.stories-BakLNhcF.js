import{j as r}from"./iframe-DIlLPJuD.js";import{T as x}from"./TextField-DDsFCY_3.js";import"./preload-helper-Dp1pzeXC.js";import"./TextFieldBase-MNojtMWB.js";import"./utils-C90O06i_.js";import"./clsx-B-dksMZM.js";import"./TextField-LGISeu83.js";import"./FieldError-yYowvNxI.js";import"./Text-Ca9LQ_Le.js";import"./useFocusRing-HvaoKnuH.js";import"./index-D6xE_ouI.js";import"./index-DXjFZdVh.js";import"./clsx-Ciqy0D92.js";import"./Text-BnjX5QqY.js";import"./context-DFNMyfvf.js";import"./SelectionManager-rGN1JuGs.js";import"./useEvent-BVgGdDuj.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-fhbqbeqx.js";import"./useDescription-BwxdG25D.js";import"./useControlledState-DLDMOgvm.js";import"./Form-cgN-uJYq.js";import"./useFormValidation-CJ2Tu6eD.js";import"./Group-DfgPJQRN.js";import"./Input-CQA2BtBa.js";import"./Hidden-gB0YaM-W.js";import"./Button-Be6fkpnr.js";import"./useLabels-FG-IUQ4H.js";import"./useButton-ROD84DLe.js";import"./useTextField-HD_0Cqze.js";import"./useField-CaAEAmMb.js";import"./TextField.module-GsDSmlca.js";import"./Label-CjHm9NxG.js";import"./Dialog-B-tixaJx.js";import"./RSPContexts-jAxixkHv.js";import"./OverlayArrow-D3Q0j9vD.js";import"./useResizeObserver-B5FoUSv4.js";import"./Collection-BQPY8kOR.js";import"./index-CISkeOs2.js";import"./Separator-C_lsgR-6.js";import"./PressResponder-CFYSGZx2.js";import"./useLocalizedStringFormatter-QTj1EJcJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DBHtl0pM.js";import"./useLocalizedStringFormatter-CGZv6YNB.js";import"./Button-CT5mOxVb.js";import"./Button.module-CcWMkJAG.js";import"./x-C9TDGC81.js";import"./createLucideIcon-ClTEz4lj.js";import"./Heading-B0O6_1kv.js";import"./info-Q-ue1wld.js";import"./Popover-RuWLarzZ.js";const{expect:s,fn:B,userEvent:n}=__STORYBOOK_MODULE_TEST__,ua={title:"Components/TextField",component:x,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},o={args:{className:"test-class"},play:async({canvas:e,step:a,args:t})=>{await a("it should preserve its classNames when being passed new ones",async()=>{s(e.getByRole("textbox").classList.length).toBe(2)}),await a("it should change size according to size prop",async()=>{await s(e.getByLabelText(t.label)).toHaveStyle({height:t.size==="large"?"48px":"40px"})})}},i={args:{type:"password"},play:async({canvas:e,step:a})=>{const t="secret";await a('it should toggle the password when clicking "Show" and "Hide"',async()=>{await n.tab(),await n.keyboard("secret"),await n.tab(),await n.keyboard("[Enter]"),s(e.getByText(t)).toBeInTheDocument(),await n.keyboard("[Enter]"),s(e.queryByText(t)).toBeNull()})}},c={args:{isInvalid:!0,errorMessage:"Något blev fel"},play:async({canvas:e,step:a,args:t})=>{await a("it should be invalid",async()=>{s(e.getByLabelText(t.label)).toBeInvalid()})}},l={args:{successMessage:{isVisible:!0,message:"Validering lyckades!"}}},d={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:e=>r.jsxs("form",{children:[r.jsx(x,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a,args:t})=>{await a("it should give a validation error if the user entered no text",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),s(e.getByLabelText(t.label)).toBeInvalid()})}},p={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>r.jsxs("form",{children:[r.jsx(x,{...e,className:({isInvalid:a})=>a?"invalid":"valid"}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a})=>{await a("it should give a validation error if the user entered an unpermitted text",async()=>{await s(e.getByRole("textbox")).toHaveClass("valid"),await n.tab(),await n.keyboard("abc"),await n.tab(),await n.keyboard("[Enter]"),s(e.getByText("Only numbers are allowed")).toBeInTheDocument(),await s(e.getByRole("textbox")).toHaveClass("invalid")})}},u={args:{type:"number"},play:async({canvas:e,step:a,args:t})=>{await a("it should not allow any non number input",async()=>{await n.tab(),await n.keyboard("abc"),s(e.getByLabelText(t.label)).toHaveValue(null)})}},m={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},g={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:a,args:{value:t}})=>{await a("it should show the correct count for its initial value",async()=>{s(e.getByText(t.length)).toBeInTheDocument()})}},h={args:{showCounter:!0,maxLength:50}},y={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:a,args:{defaultValue:t}})=>{await a("it should show the correct count for its initial defaultValue",async()=>{s(e.getByText(t.length)).toBeInTheDocument()})}},b={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:e=>r.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[r.jsx(x,{...e,label:void 0,description:void 0,"aria-label":"test"}),r.jsx("div",{style:{height:100},children:"Dummy content"})]}),play:async({step:e,canvas:a})=>{await e("it should not require more height than neccessary",async()=>{const t=a.getByTestId("wrapper").childNodes[0],de=a.getByRole("textbox"),{height:pe}=t.getBoundingClientRect(),{height:ue}=de.getBoundingClientRect();await s(pe).toEqual(ue)})}},w={args:{...o.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}},v={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{onBlur:B(),onFocus:B()},play:async({args:e,step:a})=>{await a("focus textfield",async()=>{await n.tab()}),await a("it should call onFocus once",async()=>{await s(e.onFocus).toHaveBeenCalledOnce()}),await a("blur textfield",async()=>{await n.tab()}),await a("it should call onBlur once",async()=>{await s(e.onBlur).toHaveBeenCalledOnce()})}};var f,S,T;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(H=(C=i.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var D,I,k;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var L,R,F;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    successMessage: {
      isVisible: true,
      message: 'Validering lyckades!'
    }
  }
}`,...(F=(R=l.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var V,N,O;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var M,j,q;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(j=p.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var _,P,z;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(P=u.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var A,W,J;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(J=(W=m.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var $,K,U;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(U=(K=g.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,G,Q;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(Q=(G=h.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Z,ee;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,re,oe;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...(oe=(re=w.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,ce,le;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(le=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const ma=["Primary","Password","Invalid","SuccessMessage","Required","CustomValidation","Number","Disabled","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue","DS1243","WithHelpPopover","DS1326"];export{p as CustomValidation,b as DS1243,v as DS1326,m as Disabled,c as Invalid,h as MaxLengthAndShowCounter,u as Number,i as Password,o as Primary,d as Required,g as ShowCounter,y as ShowCounterWithDefaultValue,l as SuccessMessage,w as WithHelpPopover,ma as __namedExportsOrder,ua as default};
