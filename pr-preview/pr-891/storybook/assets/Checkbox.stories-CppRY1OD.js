import{j as l}from"./iframe-DVfi3_SF.js";import{C as p,s as h}from"./Checkbox-DxGEGjJc.js";import"./preload-helper-Ct5FWWRu.js";import"./RSPContexts-CQyNRPa7.js";import"./utils-DSuW7o8J.js";import"./clsx-B-dksMZM.js";import"./Form-DMlQXaYW.js";import"./useFormValidation-D2Yjjluf.js";import"./useFocusRing-B4faYJtf.js";import"./index-8vKeZmgO.js";import"./index-C7DQzPvW.js";import"./createLucideIcon-BXAfGPAx.js";import"./check-Bcr145Ub.js";import"./VisuallyHidden-DZ9owaqZ.js";import"./useToggleState-C89A7D_2.js";import"./useControlledState-CIbbCaYD.js";const{expect:b,userEvent:d}=__STORYBOOK_MODULE_TEST__,N={component:p,title:"Components/Checkbox",tags:["autodocs"],parameters:{layout:"centered"},args:{isDisabled:!1,isIndeterminate:!1,isInvalid:!1,isReadOnly:!1,isRequired:!1,value:"unsubscribe",children:"Unsubscribe"}},a={},r={args:{isDisabled:!0}},t={args:{isReadOnly:!0,isSelected:!0}},n={args:{isInvalid:!0}},o={args:{isIndeterminate:!0}},c={args:{isSelected:!0}},i={args:{isRequired:!0},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...e})=>l.jsxs("form",{children:[l.jsx(p,{value:"unsubscribe",...e,children:"Unsubscribe"}),l.jsx("button",{type:"submit",children:"submit"})]}),play:async({canvas:e,step:m})=>{await m("It should be (aria) invalid if the user submitted without checking the box",async()=>{const s=e.getByLabelText("Unsubscribe");await d.click(s),await d.click(s),b(s).toBeInvalid()})}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{className:"test-class"},play:async({canvasElement:e,step:m,args:s})=>{await m("it should preserve its classnames when given new ones",async()=>{await b(e.querySelector("label")).toHaveClass(h.checkbox,s.className)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    isSelected: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isSelected: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const U=["Example","Disabled","ReadOnly","Invalid","Indeterminate","Selected","Required","CustomClassName"];export{u as CustomClassName,r as Disabled,a as Example,o as Indeterminate,n as Invalid,t as ReadOnly,i as Required,c as Selected,U as __namedExportsOrder,N as default};
