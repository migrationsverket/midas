import{j as r}from"./iframe-crrRDQdL.js";import{T as x}from"./TextField-BZd718hP.js";import"./preload-helper-Ct5FWWRu.js";import"./TextFieldBase-DIzo18HL.js";import"./utils-Ys3_FUZM.js";import"./clsx-B-dksMZM.js";import"./FieldError-CuwA4rM6.js";import"./Text-C8ZiJPVn.js";import"./useFocusRing-CKHcw9hW.js";import"./index-DYukp6dc.js";import"./index-D6zF5ab1.js";import"./clsx-Ciqy0D92.js";import"./Text-dMQFlxOQ.js";import"./RSPContexts-EpQgLewh.js";import"./Form-s48_oPhk.js";import"./useFormValidation-dzFZAXlR.js";import"./Group-Cr77MWmX.js";import"./Input-CWQ24a_D.js";import"./Hidden-CpiXS9Kq.js";import"./Button-D2FSU2f8.js";import"./useLabels-BqmK4HVG.js";import"./useButton-OtuQrflQ.js";import"./useTextField-B63ccZjf.js";import"./useControlledState-BzKJy9y_.js";import"./useField-BsLDZIoY.js";import"./TextField.module-ClJJ_Sp5.js";import"./Label-_sk70CKN.js";import"./Dialog-DbhiLgMM.js";import"./OverlayArrow-CO2GiP8Q.js";import"./useResizeObserver-DfpGnFuS.js";import"./Collection-Cry9oPG_.js";import"./index-CyA-Hgia.js";import"./Separator-Pc9VU3of.js";import"./SelectionManager-CalKvBsA.js";import"./useEvent-CjunYZov.js";import"./scrollIntoView-DH3xY7BC.js";import"./SelectionIndicator-CQR2oYTR.js";import"./useDescription-CZlSe1aY.js";import"./ListKeyboardDelegate-g-Xfvl9E.js";import"./PressResponder-BgCRbVgN.js";import"./useLocalizedStringFormatter-Bbj_fEdz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DizgQUhJ.js";import"./VisuallyHidden-CBgos6KR.js";import"./useLocalizedStringFormatter-R_nr6V6c.js";import"./Button-Bst02TFm.js";import"./Button.module-CtQ1deO8.js";import"./x-8f75MzE4.js";import"./createLucideIcon-CHU1oBRH.js";import"./Heading-BJMY2hg0.js";import"./info-BhM_jSdc.js";import"./Popover-ahUBm7lI.js";const{expect:s,fn:B,userEvent:n}=__STORYBOOK_MODULE_TEST__,Se={title:"Components/TextField",component:x,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},o={args:{className:"test-class"},play:async({canvas:e,step:a,args:t})=>{await a("it should preserve its classNames when being passed new ones",async()=>{s(e.getByRole("textbox").classList.length).toBe(2)}),await a("it should change size according to size prop",async()=>{await s(e.getByLabelText(t.label)).toHaveStyle({height:t.size==="large"?"48px":"40px"})})}},i={args:{type:"password"},play:async({canvas:e,step:a})=>{const t="secret";await a('it should toggle the password when clicking "Show" and "Hide"',async()=>{await n.tab(),await n.keyboard("secret"),await n.tab(),await n.keyboard("[Enter]"),s(e.getByText(t)).toBeInTheDocument(),await n.keyboard("[Enter]"),s(e.queryByText(t)).toBeNull()})}},l={args:{isInvalid:!0,errorMessage:"Något blev fel"},play:async({canvas:e,step:a,args:t})=>{await a("it should be invalid",async()=>{s(e.getByLabelText(t.label)).toBeInvalid()})}},c={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:e=>r.jsxs("form",{children:[r.jsx(x,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a,args:t})=>{await a("it should give a validation error if the user entered no text",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),s(e.getByLabelText(t.label)).toBeInvalid()})}},p={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>r.jsxs("form",{children:[r.jsx(x,{...e,className:({isInvalid:a})=>a?"invalid":"valid"}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a})=>{await a("it should give a validation error if the user entered an unpermitted text",async()=>{await s(e.getByRole("textbox")).toHaveClass("valid"),await n.tab(),await n.keyboard("abc"),await n.tab(),await n.keyboard("[Enter]"),s(e.getByText("Only numbers are allowed")).toBeInTheDocument(),await s(e.getByRole("textbox")).toHaveClass("invalid")})}},d={args:{type:"number"},play:async({canvas:e,step:a,args:t})=>{await a("it should not allow any non number input",async()=>{await n.tab(),await n.keyboard("abc"),s(e.getByLabelText(t.label)).toHaveValue(null)})}},u={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},g={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:a,args:{value:t}})=>{await a("it should show the correct count for its initial value",async()=>{s(e.getByText(t.length)).toBeInTheDocument()})}},h={args:{showCounter:!0,maxLength:50}},y={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:a,args:{defaultValue:t}})=>{await a("it should show the correct count for its initial defaultValue",async()=>{s(e.getByText(t.length)).toBeInTheDocument()})}},b={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:e=>r.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[r.jsx(x,{...e,label:void 0,description:void 0,"aria-label":"test"}),r.jsx("div",{style:{height:100},children:"Dummy content"})]}),play:async({step:e,canvas:a})=>{await e("it should not require more height than neccessary",async()=>{const t=a.getByTestId("wrapper").childNodes[0],f=a.getByRole("textbox"),{height:S}=t.getBoundingClientRect(),{height:T}=f.getBoundingClientRect();await s(S).toEqual(T)})}},v={args:{...o.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}},w={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{onBlur:B(),onFocus:B()},play:async({args:e,step:a})=>{await a("focus textfield",async()=>{await n.tab()}),await a("it should call onFocus once",async()=>{await s(e.onFocus).toHaveBeenCalledOnce()}),await a("blur textfield",async()=>{await n.tab()}),await a("it should call onBlur once",async()=>{await s(e.onBlur).toHaveBeenCalledOnce()})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: 'User input'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const Te=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue","DS1243","WithHelpPopover","DS1326"];export{p as CustomValidation,b as DS1243,w as DS1326,u as Disabled,l as Invalid,h as MaxLengthAndShowCounter,d as Number,i as Password,o as Primary,m as ReadOnly,c as Required,g as ShowCounter,y as ShowCounterWithDefaultValue,v as WithHelpPopover,Te as __namedExportsOrder,Se as default};
