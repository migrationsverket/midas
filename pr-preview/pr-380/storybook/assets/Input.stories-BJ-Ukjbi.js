import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{e as n,u as a}from"./index-DtSMq7G1.js";import{I as V,s as _}from"./Input-Ba0C5D_9.js";import{F as M}from"./FieldError-Cae8s3IP.js";import{T as O}from"./TextField-DRMz_bj0.js";import{L as z}from"./Label-e6qbx1P3.js";import{T as A}from"./Text-modOyfN2.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-Cd6MiihZ.js";import"./clsx-B-dksMZM.js";import"./Input-CkPPhu4J.js";import"./Hidden-lswqw32w.js";import"./useFocusRing-HKeWiXpl.js";import"./index-cpIEhwLo.js";import"./Button-L5_DqNwB.js";import"./Button-uO1JGISi.js";import"./ProgressBar-DNnV_wJ6.js";import"./Label-CkQlERdq.js";import"./context-BSqmORe6.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./Form-BBmrm8bW.js";import"./Text-BkowhAon.js";import"./useFormValidation-BWkP5gBo.js";import"./TextField-DNg7sPgY.js";import"./useTextField-COEhU6lQ.js";import"./useControlledState-DGyHFLi9.js";import"./useField-B8c6pWIv.js";import"./TextField.module-C6k0nTGK.js";import"./useIsDisabled-BANivrO7.js";import"./useDateFormatter-D8oWd7cd.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./FocusScope-C97GJsIb.js";import"./scrollIntoView-CnTD5aJz.js";import"./getScrollParent-2-PurW9V.js";import"./useEvent-Yxrkvbn7.js";import"./useCollator-C3PRVItH.js";import"./VisuallyHidden-I9LV86QJ.js";const G="wrapper",l="input",R="error",C="test-class",F=e=>t.jsxs(O,{...e,"data-testid":G,children:[t.jsx(z,{children:"Label"}),t.jsx(A,{slot:"description",children:"Description"}),t.jsx(V,{"data-testid":l,className:C}),t.jsx(M,{"data-testid":R})]}),Se={title:"Components/Input",tags:["autodocs"],render:F,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}}},r={args:{className:"test-class"},play:async({canvas:e,step:s})=>{await s("it should preserve its classNames when being passed new ones",async()=>{n(e.getByTestId(l)).toHaveClass(_.inputField,C)})}},o={args:{type:"password"},play:async({canvas:e,step:s})=>{const u="secret";await s('it should toggle the password when clicking "Show" and "Hide"',async()=>{await a.tab(),await a.keyboard("secret"),await a.tab(),await a.keyboard("[Enter]"),n(e.getByText(u)).toBeInTheDocument(),await a.keyboard("[Enter]"),n(e.queryByText(u)).toBeNull()})}},i={args:{...r.args,isInvalid:!0},play:async({canvas:e,step:s})=>{await s("it should preserve its classNames when being passed new ones",async()=>{n(e.getByTestId(l)).toBeInvalid()})}},p={tags:["!dev","!autodocs"],args:{...r.args,isRequired:!0},render:e=>t.jsxs("form",{children:[t.jsx(F,{...e}),t.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s})=>{await s("it should give a validation error if the user entered no text",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),n(e.getByTestId(R)).toBeInTheDocument()})}},c={args:{type:"number"},play:async({canvas:e,step:s})=>{await s("it should not allow any non number input",async()=>{await a.tab(),await a.keyboard("abc"),n(e.getByTestId(l)).toHaveValue(null)})}},d={args:{...r.args,isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{...r.args,maxLength:50}};var y,g,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    className: 'test-class'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(inputTestID)).toHaveClass(styles.inputField, testClass);
    });
  }
}`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var b,v,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,T,I;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(inputTestID)).toBeInvalid();
    });
  }
}`,...(I=(T=i.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var f,E,B;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  args: {
    ...Primary.args,
    isRequired: true
  },
  render: args => <form>
      <Template {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step
  }) => {
    await step('it should give a validation error if the user entered no text', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByTestId(fieldErrorTestID)).toBeInTheDocument();
    });
  }
}`,...(B=(E=p.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var D,k,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'number'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('it should not allow any non number input', async () => {
      await userEvent.tab();
      await userEvent.keyboard('abc');
      expect(canvas.getByTestId(inputTestID)).toHaveValue(null);
    });
  }
}`,...(N=(k=c.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var S,j,P;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
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
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var L,q,H;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxLength: 50
  }
}`,...(H=(q=m.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const je=["Primary","Password","NotValid","Required","Number","Disabled","MaxLength"];export{d as Disabled,m as MaxLength,i as NotValid,c as Number,o as Password,r as Primary,p as Required,je as __namedExportsOrder,Se as default};
