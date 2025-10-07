import{j as r,e as T}from"./iframe-BtRB5jps.js";import{T as i}from"./TextField-DvkIEb0D.js";import"./preload-helper-Dp1pzeXC.js";import"./TextFieldBase-Dis1Nzec.js";import"./utils-DHvzgL_4.js";import"./clsx-B-dksMZM.js";import"./TextField-CLANI4Fz.js";import"./FieldError-D-04u4Hu.js";import"./Text-0LfPUfvD.js";import"./useFocusRing-s-PFejsL.js";import"./index-DfPUEHAJ.js";import"./index-CwIK1tEo.js";import"./clsx-Ciqy0D92.js";import"./Text-DVbJ6tjf.js";import"./context-C1TT3Lcb.js";import"./SelectionManager-CZ7fP1Mv.js";import"./useEvent-D_ofWqFZ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-JwXLvRm-.js";import"./useDescription-B8QRmYnf.js";import"./useControlledState-Dho59kSZ.js";import"./Form-CSg-UCMY.js";import"./useFormValidation-BkLQ-qzj.js";import"./Group-BIQWP_Sj.js";import"./Input-Cvuq4jYO.js";import"./Hidden-CXX9ZyDQ.js";import"./Button-Bp-Q4UwL.js";import"./useLabels-0fj9eLgf.js";import"./useButton-BciwMNeS.js";import"./useTextField-ts-2gRsU.js";import"./useField-EjDiYAmY.js";import"./TextField.module-GsDSmlca.js";import"./Label-D6ehErqg.js";import"./Dialog-DfMs6IIR.js";import"./RSPContexts-FtCQftH4.js";import"./OverlayArrow-CMtkpHwO.js";import"./useResizeObserver-CxqyX30Y.js";import"./Collection-Cv_R-dwl.js";import"./index-6WFgD_jc.js";import"./Separator-99HuaQW-.js";import"./PressResponder-DfrdE8FU.js";import"./useLocalizedStringFormatter-Dib2T_T-.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B5ZHZFLP.js";import"./useLocalizedStringFormatter-D_ZytpIa.js";import"./Button-CZxIqUiR.js";import"./Button.module-CcWMkJAG.js";import"./x-DO0g0-XC.js";import"./createLucideIcon-BdgUM15l.js";import"./Heading-BMYtF-9M.js";import"./info-DKrjNeO7.js";import"./Popover-DBIDr4Ad.js";const{expect:n,fn:I,userEvent:t}=__STORYBOOK_MODULE_TEST__,ga={title:"Components/TextField",component:i,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},o={args:{className:"test-class"},play:async({canvas:e,step:a,args:s})=>{await a("it should preserve its classNames when being passed new ones",async()=>{n(e.getByRole("textbox").classList.length).toBe(2)}),await a("it should change size according to size prop",async()=>{await n(e.getByLabelText(s.label)).toHaveStyle({height:s.size==="large"?"48px":"40px"})})}},c={args:{type:"password"},play:async({canvas:e,step:a})=>{const s="secret";await a('it should toggle the password when clicking "Show" and "Hide"',async()=>{await t.tab(),await t.keyboard("secret"),await t.tab(),await t.keyboard("[Enter]"),n(e.getByText(s)).toBeInTheDocument(),await t.keyboard("[Enter]"),n(e.queryByText(s)).toBeNull()})}},d={args:{isInvalid:!0,errorMessage:"Något blev fel"},play:async({canvas:e,step:a,args:s})=>{await a("it should be invalid",async()=>{n(e.getByLabelText(s.label)).toBeInvalid()})}},u={args:{successMessage:{isVisible:!1,message:"Validering lyckades!"}},render:e=>{var l;const[a,s]=T.useState(""),[f,S]=T.useState(!1);return r.jsx(i,{...e,pattern:"IFK Norrköping",successMessage:{message:(l=e.successMessage)==null?void 0:l.message,isVisible:f},onBlur:E=>S(E.target.ariaInvalid==="true"),onInvalidCapture:E=>console.log(E),value:a,onChange:s})},play:async()=>{await t.tab(),await t.keyboard("IFK Göteborg",{delay:200}),await t.tab(),await t.tab({shift:!0}),await t.keyboard("IFK Norrköping",{delay:200}),await t.tab()}},p={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:e=>r.jsxs("form",{children:[r.jsx(i,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a,args:s})=>{await a("it should give a validation error if the user entered no text",async()=>{await t.tab(),await t.tab(),await t.keyboard("[Enter]"),n(e.getByLabelText(s.label)).toBeInvalid()})}},m={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>r.jsxs("form",{children:[r.jsx(i,{...e,className:({isInvalid:a})=>a?"invalid":"valid"}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a})=>{await a("it should give a validation error if the user entered an unpermitted text",async()=>{await n(e.getByRole("textbox")).toHaveClass("valid"),await t.tab(),await t.keyboard("abc"),await t.tab(),await t.keyboard("[Enter]"),n(e.getByText("Only numbers are allowed")).toBeInTheDocument(),await n(e.getByRole("textbox")).toHaveClass("invalid")})}},g={args:{type:"number"},play:async({canvas:e,step:a,args:s})=>{await a("it should not allow any non number input",async()=>{await t.tab(),await t.keyboard("abc"),n(e.getByLabelText(s.label)).toHaveValue(null)})}},y={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},h={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:a,args:{value:s}})=>{await a("it should show the correct count for its initial value",async()=>{n(e.getByText(s.length)).toBeInTheDocument()})}},b={args:{showCounter:!0,maxLength:50}},v={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:a,args:{defaultValue:s}})=>{await a("it should show the correct count for its initial defaultValue",async()=>{n(e.getByText(s.length)).toBeInTheDocument()})}},w={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:e=>r.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[r.jsx(i,{...e,label:void 0,description:void 0,"aria-label":"test"}),r.jsx("div",{style:{height:100},children:"Dummy content"})]}),play:async({step:e,canvas:a})=>{await e("it should not require more height than neccessary",async()=>{const s=a.getByTestId("wrapper").childNodes[0],f=a.getByRole("textbox"),{height:S}=s.getBoundingClientRect(),{height:l}=f.getBoundingClientRect();await n(S).toEqual(l)})}},x={args:{...o.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}},B={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{onBlur:I(),onFocus:I()},play:async({args:e,step:a})=>{await a("focus textfield",async()=>{await t.tab()}),await a("it should call onFocus once",async()=>{await n(e.onFocus).toHaveBeenCalledOnce()}),await a("blur textfield",async()=>{await t.tab()}),await a("it should call onBlur once",async()=>{await n(e.onBlur).toHaveBeenCalledOnce()})}};var C,H,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(H=o.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var F,D,R;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var V,L,N;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var M,O,j;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    successMessage: {
      isVisible: false,
      message: 'Validering lyckades!'
    }
  },
  render: args => {
    const [value, setValue] = React.useState('');
    const [hasErrored, setHasErrored] = React.useState(false);
    return <TextField {...args} pattern='IFK Norrköping' successMessage={{
      message: args.successMessage?.message as string,
      isVisible: hasErrored
    }} onBlur={e => setHasErrored(e.target.ariaInvalid === 'true')} onInvalidCapture={e => console.log(e)} value={value} onChange={setValue} />;
  },
  play: async () => {
    await userEvent.tab();
    await userEvent.keyboard('IFK Göteborg', {
      delay: 200
    });
    await userEvent.tab();
    await userEvent.tab({
      shift: true
    });
    await userEvent.keyboard('IFK Norrköping', {
      delay: 200
    });
    await userEvent.tab();
  }
}`,...(j=(O=u.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,_,P;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(P=(_=p.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var z,K,A;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(A=(K=m.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var W,G,J;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var $,U,Y;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Y=(U=y.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Q,X,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,te;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ne,re;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ie,le;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,ue;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...(ue=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,ge;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(me=B.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};const ya=["Primary","Password","Invalid","SuccessMessage","Required","CustomValidation","Number","Disabled","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue","DS1243","WithHelpPopover","DS1326"];export{m as CustomValidation,w as DS1243,B as DS1326,y as Disabled,d as Invalid,b as MaxLengthAndShowCounter,g as Number,c as Password,o as Primary,p as Required,h as ShowCounter,v as ShowCounterWithDefaultValue,u as SuccessMessage,x as WithHelpPopover,ya as __namedExportsOrder,ga as default};
