import{j as m}from"./iframe-C1OjVKLQ.js";import{C as L,s as K}from"./Checkbox-RhwvqtT6.js";import"./preload-helper-Dp1pzeXC.js";import"./RSPContexts-Dqv4fxN1.js";import"./utils-BqJ8lzMo.js";import"./clsx-B-dksMZM.js";import"./Form-CLeGCjIu.js";import"./useFormValidation-CuTeBXtI.js";import"./useFocusRing-DDPJ_J0E.js";import"./index-rMroQDpJ.js";import"./index-B_7_j7oG.js";import"./VisuallyHidden-DPH9mEsF.js";import"./useToggleState-BHcBhZYR.js";import"./useControlledState-DymAS9IR.js";const{expect:H,userEvent:d}=__STORYBOOK_MODULE_TEST__,ee={component:L,title:"Components/Checkbox",tags:["autodocs"],parameters:{layout:"centered"},args:{isDisabled:!1,isIndeterminate:!1,isInvalid:!1,isReadOnly:!1,isRequired:!1,value:"unsubscribe",children:"Unsubscribe"}},a={},r={args:{isDisabled:!0}},t={args:{isReadOnly:!0,isSelected:!0}},n={args:{isInvalid:!0}},o={args:{isIndeterminate:!0}},c={args:{isSelected:!0}},i={args:{isRequired:!0},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...e})=>m.jsxs("form",{children:[m.jsx(L,{value:"unsubscribe",...e,children:"Unsubscribe"}),m.jsx("button",{type:"submit",children:"submit"})]}),play:async({canvas:e,step:l})=>{await l("It should be (aria) invalid if the user submitted without checking the box",async()=>{const s=e.getByLabelText("Unsubscribe");await d.click(s),await d.click(s),H(s).toBeInvalid()})}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{className:"test-class"},play:async({canvasElement:e,step:l,args:s})=>{await l("it should preserve its classnames when given new ones",async()=>{await H(e.querySelector("label")).toHaveClass(K.checkbox,s.className)})}};var p,b,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,v,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,S,k;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    isSelected: true
  }
}`,...(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,I,f;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...(f=(I=n.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var C,R,E;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true
  }
}`,...(E=(R=o.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var O,_,q;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isSelected: true
  }
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var D,N,U;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isRequired: true
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: ({
    ...args
  }) => {
    return <form>
        <Checkbox value='unsubscribe' {...args}>
          Unsubscribe
        </Checkbox>
        <button type='submit'>submit</button>
      </form>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should be (aria) invalid if the user submitted without checking the box', async () => {
      const checkbox = canvas.getByLabelText('Unsubscribe');
      await userEvent.click(checkbox);
      await userEvent.click(checkbox);
      expect(checkbox).toBeInvalid();
    });
  }
}`,...(U=(N=i.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var j,B,T;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    className: 'test-class'
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    await step('it should preserve its classnames when given new ones', async () => {
      await expect(canvasElement.querySelector('label')).toHaveClass(styles.checkbox, args.className as string);
    });
  }
}`,...(T=(B=u.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const se=["Example","Disabled","ReadOnly","Invalid","Indeterminate","Selected","Required","CustomClassName"];export{u as CustomClassName,r as Disabled,a as Example,o as Indeterminate,n as Invalid,t as ReadOnly,i as Required,c as Selected,se as __namedExportsOrder,ee as default};
