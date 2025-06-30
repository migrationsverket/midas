import{j as u}from"./jsx-runtime-BYYWji4R.js";import{u as l,e as B}from"./index-CqmFxPum.js";import{C as _,s as H}from"./Checkbox-LR1DAzSN.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./RSPContexts-HQcWPJyv.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Form-C688dPfu.js";import"./useFormValidation-DOw2d6ip.js";import"./useFocusRing-CiRxO26c.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./VisuallyHidden-Bwo2Sxwr.js";import"./useToggleState-DcHMzLVj.js";import"./useControlledState-H1tiOFpU.js";const $={component:_,title:"Components/Checkbox",tags:["autodocs"],parameters:{layout:"centered"},args:{isDisabled:!1,isIndeterminate:!1,isInvalid:!1,isReadOnly:!1,isRequired:!1,value:"unsubscribe",children:"Unsubscribe"}},a={},r={args:{isDisabled:!0}},t={args:{isInvalid:!0}},n={args:{isIndeterminate:!0}},o={args:{isSelected:!0}},c={args:{isRequired:!0},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:({...e})=>u.jsxs("form",{children:[u.jsx(_,{value:"unsubscribe",...e,children:"Unsubscribe"}),u.jsx("button",{type:"submit",children:"submit"})]}),play:async({canvas:e,step:m})=>{await m("It should be (aria) invalid if the user submitted without checking the box",async()=>{const s=e.getByLabelText("Unsubscribe");await l.click(s),await l.click(s),B(s).toBeInvalid()})}},i={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{className:"test-class"},play:async({canvasElement:e,step:m,args:s})=>{await m("it should preserve its classnames when given new ones",async()=>{await B(e.querySelector("label")).toHaveClass(H.checkbox,s.className)})}};var d,p,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,g,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,y,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var S,w,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true
  }
}`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var I,C,E;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    isSelected: true
  }
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var q,R,N;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    isRequired: true
  },
  tags: ['!dev', '!autodocs'],
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
}`,...(N=(R=c.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var j,D,U;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(U=(D=i.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};const ee=["Example","Disabled","Invalid","Indeterminate","Selected","Required","CustomClassName"];export{i as CustomClassName,r as Disabled,a as Example,n as Indeterminate,t as Invalid,c as Required,o as Selected,ee as __namedExportsOrder,$ as default};
