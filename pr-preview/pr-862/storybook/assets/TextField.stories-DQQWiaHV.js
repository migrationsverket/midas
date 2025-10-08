import{j as r,e as E}from"./iframe-D6D3K-aQ.js";import{T as i}from"./TextField-qAZe7ffZ.js";import"./preload-helper-Dp1pzeXC.js";import"./TextFieldBase-DyHsMEKg.js";import"./utils-8NXnZt9D.js";import"./clsx-B-dksMZM.js";import"./TextField-BGTzXgTa.js";import"./FieldError-wZwTZDn3.js";import"./Text-CRwR8S11.js";import"./useFocusRing-BDdoqUbs.js";import"./index-B111u4e2.js";import"./index-CkH952uE.js";import"./clsx-Ciqy0D92.js";import"./Text-CyYYqzHS.js";import"./context-CeqNEQ9w.js";import"./SelectionManager-DCPdtUb2.js";import"./useEvent-BbiwRRw4.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-HtELhbvT.js";import"./useDescription-DcLxz0oY.js";import"./useControlledState-DSMKeP6m.js";import"./Form-HTA4uZLG.js";import"./useFormValidation-uiHVILup.js";import"./Group-DkRQlUkc.js";import"./Input-DYegzmkh.js";import"./Hidden-Bnv0XruJ.js";import"./Button-Dutn2UJh.js";import"./useLabels-7CJ5XO9x.js";import"./useButton-CBuzLm6I.js";import"./useTextField-tfweB5Vc.js";import"./useField-C4B2WCZE.js";import"./TextField.module-GsDSmlca.js";import"./Label-tdFlceSw.js";import"./Dialog-sWoZxtT8.js";import"./RSPContexts-DVS3MyLV.js";import"./OverlayArrow-nayYjZLk.js";import"./useResizeObserver-Cg1CWVuV.js";import"./Collection-BarC4WRT.js";import"./index-Bx8ZkdzW.js";import"./Separator-D0JYxpFR.js";import"./PressResponder-CxfOxXhY.js";import"./useLocalizedStringFormatter-B5_FKKgr.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CKZy1p9G.js";import"./useLocalizedStringFormatter-CCiN5bcW.js";import"./Button-C89H8vUo.js";import"./Button.module-CcWMkJAG.js";import"./x-R9yZnylX.js";import"./createLucideIcon-ZlwLd3nc.js";import"./Heading-XKPSM-mw.js";import"./info-BgnaGC3E.js";import"./Popover-BJEvt7Yk.js";const{expect:n,fn:T,userEvent:s}=__STORYBOOK_MODULE_TEST__,ga={title:"Components/TextField",component:i,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},o={args:{className:"test-class"},play:async({canvas:e,step:a,args:t})=>{await a("it should preserve its classNames when being passed new ones",async()=>{n(e.getByRole("textbox").classList.length).toBe(2)}),await a("it should change size according to size prop",async()=>{await n(e.getByLabelText(t.label)).toHaveStyle({height:t.size==="large"?"48px":"40px"})})}},u={args:{type:"password"},play:async({canvas:e,step:a})=>{const t="secret";await a('it should toggle the password when clicking "Show" and "Hide"',async()=>{await s.tab(),await s.keyboard("secret"),await s.tab(),await s.keyboard("[Enter]"),n(e.getByText(t)).toBeInTheDocument(),await s.keyboard("[Enter]"),n(e.queryByText(t)).toBeNull()})}},d={args:{isInvalid:!0,errorMessage:"Något blev fel"},play:async({canvas:e,step:a,args:t})=>{await a("it should be invalid",async()=>{n(e.getByLabelText(t.label)).toBeInvalid()})}},p={args:{successMessage:{isVisible:!1,message:"Validering lyckades!"}},render:e=>{var c;const[a,t]=E.useState(""),[l,S]=E.useState(!1);return r.jsx(i,{...e,successMessage:{message:(c=e.successMessage)==null?void 0:c.message,isVisible:l},onBlur:ge=>S(ge.target.value!=="IFK"),value:a,isInvalid:l&&a!=="IFK",errorMessage:"Du måste välja IFK",onChange:t})},play:async({canvas:e,args:a})=>{var t;await s.tab(),await s.keyboard("DIF",{delay:200}),await s.tab(),await s.tab({shift:!0}),await s.keyboard("IFK",{delay:200}),await n(e.getByText((t=a.successMessage)==null?void 0:t.message)).toBeVisible()}},m={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:e=>r.jsxs("form",{children:[r.jsx(i,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a,args:t})=>{await a("it should give a validation error if the user entered no text",async()=>{await s.tab(),await s.tab(),await s.keyboard("[Enter]"),n(e.getByLabelText(t.label)).toBeInvalid()})}},g={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>r.jsxs("form",{children:[r.jsx(i,{...e,className:({isInvalid:a})=>a?"invalid":"valid"}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a})=>{await a("it should give a validation error if the user entered an unpermitted text",async()=>{await n(e.getByRole("textbox")).toHaveClass("valid"),await s.tab(),await s.keyboard("abc"),await s.tab(),await s.keyboard("[Enter]"),n(e.getByText("Only numbers are allowed")).toBeInTheDocument(),await n(e.getByRole("textbox")).toHaveClass("invalid")})}},y={args:{type:"number"},play:async({canvas:e,step:a,args:t})=>{await a("it should not allow any non number input",async()=>{await s.tab(),await s.keyboard("abc"),n(e.getByLabelText(t.label)).toHaveValue(null)})}},h={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},b={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:a,args:{value:t}})=>{await a("it should show the correct count for its initial value",async()=>{n(e.getByText(t.length)).toBeInTheDocument()})}},v={args:{showCounter:!0,maxLength:50}},w={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:a,args:{defaultValue:t}})=>{await a("it should show the correct count for its initial defaultValue",async()=>{n(e.getByText(t.length)).toBeInTheDocument()})}},x={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:e=>r.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[r.jsx(i,{...e,label:void 0,description:void 0,"aria-label":"test"}),r.jsx("div",{style:{height:100},children:"Dummy content"})]}),play:async({step:e,canvas:a})=>{await e("it should not require more height than neccessary",async()=>{const t=a.getByTestId("wrapper").childNodes[0],l=a.getByRole("textbox"),{height:S}=t.getBoundingClientRect(),{height:c}=l.getBoundingClientRect();await n(S).toEqual(c)})}},B={args:{...o.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}},f={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{onBlur:T(),onFocus:T()},play:async({args:e,step:a})=>{await a("focus textfield",async()=>{await s.tab()}),await a("it should call onFocus once",async()=>{await n(e.onFocus).toHaveBeenCalledOnce()}),await a("blur textfield",async()=>{await s.tab()}),await a("it should call onBlur once",async()=>{await n(e.onBlur).toHaveBeenCalledOnce()})}};var I,C,F;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(C=o.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var H,D,k;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(k=(D=u.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var V,R,M;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(R=d.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var L,j,N;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    successMessage: {
      isVisible: false,
      message: 'Validering lyckades!'
    }
  },
  render: args => {
    const [value, setValue] = React.useState('');
    const [hasErrored, setHasErrored] = React.useState(false);
    return <TextField {...args} successMessage={{
      message: args.successMessage?.message as string,
      isVisible: hasErrored
    }} onBlur={e => setHasErrored(e.target.value !== 'IFK')} value={value} isInvalid={hasErrored && value !== 'IFK'} errorMessage='Du måste välja IFK' onChange={setValue} />;
  },
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.tab();
    await userEvent.keyboard('DIF', {
      delay: 200
    });
    await userEvent.tab();
    await userEvent.tab({
      shift: true
    });
    await userEvent.keyboard('IFK', {
      delay: 200
    });
    await expect(canvas.getByText(args.successMessage?.message as string)).toBeVisible();
  }
}`,...(N=(j=p.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var O,q,K;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(K=(q=m.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var _,P,z;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(P=g.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var A,W,J;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(J=(W=y.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var $,U,Y;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var G,Q,X;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,ne;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var re,oe,ie;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,ue;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...(ue=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const ya=["Primary","Password","Invalid","SuccessMessage","Required","CustomValidation","Number","Disabled","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue","DS1243","WithHelpPopover","DS1326"];export{g as CustomValidation,x as DS1243,f as DS1326,h as Disabled,d as Invalid,v as MaxLengthAndShowCounter,y as Number,u as Password,o as Primary,m as Required,b as ShowCounter,w as ShowCounterWithDefaultValue,p as SuccessMessage,B as WithHelpPopover,ya as __namedExportsOrder,ga as default};
