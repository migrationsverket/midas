import{j as r}from"./jsx-runtime-BYYWji4R.js";import{e as s,u as n}from"./index-CqmFxPum.js";import{s as ee}from"./modes-BX-MOWoB.js";import{T as o}from"./TextField-DYgg161L.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TextFieldBase-Bv48D-ah.js";import"./utils-oc6myKvD.js";import"./clsx-B-dksMZM.js";import"./TextField-DHkjYeex.js";import"./FieldError-C31dJ6Xr.js";import"./Text-C8tPE3tt.js";import"./filterDOMProps-CeZl_uWj.js";import"./Text-Dpx6Gex-.js";import"./Form-CXoNEyM_.js";import"./useFormValidation-Cv-fFL6t.js";import"./useFocusRing-DUrskli4.js";import"./Input-mxO2G9Hh.js";import"./Hidden-BC9qER92.js";import"./Label-CpkHsAPL.js";import"./useTextField-CPl6LdnF.js";import"./useControlledState-H1tiOFpU.js";import"./useField-aNJ8ypzk.js";import"./useLabel-Blgy_cRF.js";import"./useFocusable-tJD4A6lu.js";import"./TextField.module-C33Y04O9.js";import"./Label-C8mJCmL2.js";import"./Button-DP_pM_q5.js";import"./Button.module-AG3JZ-l4.js";import"./Button-BD6hc4wl.js";import"./ProgressBar-CQGqtZ9B.js";import"./context-BSqJJvai.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useButton-Cqc6u4_f.js";import"./usePress-BfxC_TyQ.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLocalizedStringFormatter-mCZhIpKm.js";import"./LocalizedStringFormatter-BB0Nk989.js";const Pe={title:"Components/TextField",component:o,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top"},parameters:{chromatic:{modes:ee}},render:(e,{globals:{size:t}})=>r.jsx(o,{...e,size:t})},i={args:{className:"test-class"},play:async({canvas:e,step:t,args:{label:a},globals:{size:w}})=>{await t("it should preserve its classNames when being passed new ones",async()=>{s(e.getByRole("textbox").classList.length).toBe(2)}),await t("it should change size according to size prop",async()=>{await s(e.getByLabelText(a)).toHaveStyle({height:w==="large"?"48px":"40px"})})}},l={args:{type:"password"},play:async({canvas:e,step:t})=>{const a="secret";await t('it should toggle the password when clicking "Show" and "Hide"',async()=>{await n.tab(),await n.keyboard("secret"),await n.tab(),await n.keyboard("[Enter]"),s(e.getByText(a)).toBeInTheDocument(),await n.keyboard("[Enter]"),s(e.queryByText(a)).toBeNull()})}},c={args:{isInvalid:!0,errorMessage:"Något blev fel"},play:async({canvas:e,step:t,args:a})=>{await t("it should be invalid",async()=>{s(e.getByLabelText(a.label)).toBeInvalid()})}},d={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:e=>r.jsxs("form",{children:[r.jsx(o,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:a})=>{await t("it should give a validation error if the user entered no text",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),s(e.getByLabelText(a.label)).toBeInvalid()})}},p={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>r.jsxs("form",{children:[r.jsx(o,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should give a validation error if the user entered an unpermitted text",async()=>{await n.tab(),await n.keyboard("abc"),await n.tab(),await n.keyboard("[Enter]"),s(e.getByText("Only numbers are allowed")).toBeInTheDocument()})}},u={args:{type:"number"},play:async({canvas:e,step:t,args:a})=>{await t("it should not allow any non number input",async()=>{await n.tab(),await n.keyboard("abc"),s(e.getByLabelText(a.label)).toHaveValue(null)})}},m={args:{isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},g={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:t,args:{value:a}})=>{await t("it should show the correct count for its initial value",async()=>{s(e.getByText(a.length)).toBeInTheDocument()})}},h={args:{showCounter:!0,maxLength:50}},y={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:t,args:{defaultValue:a}})=>{await t("it should show the correct count for its initial defaultValue",async()=>{s(e.getByText(a.length)).toBeInTheDocument()})}},b={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:(e,{globals:{size:t}})=>r.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[r.jsx(o,{...e,label:void 0,description:void 0,"aria-label":"test",size:t}),r.jsx("div",{style:{height:100},children:"Dummy content"})]}),play:async({step:e,canvas:t})=>{await e("it should not require more height than neccessary",async()=>{const a=t.getByTestId("wrapper").childNodes[0],w=t.getByRole("textbox"),{height:Y}=a.getBoundingClientRect(),{height:Z}=w.getBoundingClientRect();await s(Y).toEqual(Z)})}};var v,x,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    className: 'test-class'
  },
  play: async ({
    canvas,
    step,
    args: {
      label
    },
    globals: {
      size
    }
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByRole('textbox').classList.length).toBe(2);
    });
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByLabelText(label as string)).toHaveStyle({
        height: size === 'large' ? '48px' : '40px'
      });
    });
  }
}`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var f,T,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var C,L,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(L=d.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var H,R,j;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(j=(R=p.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var F,N,V;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var q,z,M;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(M=(z=m.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var O,P,_;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(P=g.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var A,J,W;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(W=(J=h.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var $,G,K;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
  render: (args, {
    globals: {
      size
    }
  }) => <div style={{
    height: 500
  }} data-testid='wrapper'>
      <TextField {...args} label={undefined} description={undefined} aria-label='test' size={size} />
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
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const _e=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue","DS1243"];export{p as CustomValidation,b as DS1243,m as Disabled,c as Invalid,h as MaxLengthAndShowCounter,u as Number,l as Password,i as Primary,d as Required,g as ShowCounter,y as ShowCounterWithDefaultValue,_e as __namedExportsOrder,Pe as default};
