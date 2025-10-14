import{j as m}from"./iframe-C29QRlAU.js";import{C as U,s as B}from"./Checkbox-Bv_H6Ko8.js";import"./preload-helper-Dp1pzeXC.js";import"./RSPContexts-mfI-p8d8.js";import"./utils-Bkdp38EN.js";import"./clsx-B-dksMZM.js";import"./Form-BZ2-QZto.js";import"./useFormValidation-DnhU1wzT.js";import"./useFocusRing-BQqfOlYk.js";import"./index-8bZxAxBg.js";import"./index-DMFKSAW8.js";import"./VisuallyHidden-KFomD9l1.js";import"./useToggleState-DFoZzjAS.js";import"./useControlledState-DuFZZhBN.js";const{expect:j,userEvent:l}=__STORYBOOK_MODULE_TEST__,W={component:U,title:"Components/Checkbox",tags:["autodocs"],parameters:{layout:"centered"},args:{isDisabled:!1,isIndeterminate:!1,isInvalid:!1,isReadOnly:!1,isRequired:!1,value:"unsubscribe",children:"Unsubscribe"}},a={},r={args:{isDisabled:!0}},t={args:{isInvalid:!0}},n={args:{isIndeterminate:!0}},o={args:{isSelected:!0}},c={args:{isRequired:!0},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...e})=>m.jsxs("form",{children:[m.jsx(U,{value:"unsubscribe",...e,children:"Unsubscribe"}),m.jsx("button",{type:"submit",children:"submit"})]}),play:async({canvas:e,step:u})=>{await u("It should be (aria) invalid if the user submitted without checking the box",async()=>{const s=e.getByLabelText("Unsubscribe");await l.click(s),await l.click(s),j(s).toBeInvalid()})}},i={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{className:"test-class"},play:async({canvasElement:e,step:u,args:s})=>{await u("it should preserve its classnames when given new ones",async()=>{await j(e.querySelector("label")).toHaveClass(B.checkbox,s.className)})}};var d,p,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,g,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,y,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,w,I;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true
  }
}`,...(I=(w=n.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var f,C,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isSelected: true
  }
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var _,R,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var D,N,O;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const X=["Example","Disabled","Invalid","Indeterminate","Selected","Required","CustomClassName"];export{i as CustomClassName,r as Disabled,a as Example,n as Indeterminate,t as Invalid,c as Required,o as Selected,X as __namedExportsOrder,W as default};
