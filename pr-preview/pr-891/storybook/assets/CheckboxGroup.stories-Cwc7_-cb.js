import{j as s}from"./iframe-Tw41aNfS.js";import{C as M}from"./CheckboxGroup-CV_r4TXU.js";import{C as h}from"./Checkbox-CzsALgqk.js";import"./preload-helper-Dp1pzeXC.js";import"./FieldError-Djc4bkx4.js";import"./utils-BPejs0wc.js";import"./clsx-B-dksMZM.js";import"./Text-Bc0J-Jf5.js";import"./useFocusRing-mxtqiPoR.js";import"./index-CKncJRoA.js";import"./index-C3uEoWC8.js";import"./clsx-Ciqy0D92.js";import"./Text-PYLpypEq.js";import"./Label-Bvve9KCc.js";import"./Button-DNTXyKA6.js";import"./Hidden-_XUoW0aU.js";import"./useLabels-CihZ0btI.js";import"./useButton-DvHXUOBv.js";import"./Dialog-DTt9q3c0.js";import"./RSPContexts-BaqoygXm.js";import"./OverlayArrow-BXPpgKh8.js";import"./useResizeObserver-g06r66Ku.js";import"./useControlledState-B5Dm8GAh.js";import"./Collection-Damm0H4p.js";import"./index-BatNM415.js";import"./Separator-D9dqEjz7.js";import"./SelectionManager-CSo5rJqG.js";import"./useEvent-BL7ym3ft.js";import"./scrollIntoView-5IfCkSsC.js";import"./SelectionIndicator-Cf15jQQA.js";import"./useDescription-Cbff0xqB.js";import"./ListKeyboardDelegate-DqfvtVCk.js";import"./PressResponder-C5bAWyTt.js";import"./useLocalizedStringFormatter-CSGw0Clq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-C19WkcPQ.js";import"./VisuallyHidden-GQBdtwAz.js";import"./useLocalizedStringFormatter-BZRPP9zw.js";import"./Button-BHbFATyp.js";import"./Button.module-CcWMkJAG.js";import"./x-DDCprBDq.js";import"./createLucideIcon-DaJOZeq2.js";import"./Heading-DIsxoGpP.js";import"./info-DJ1zrS10.js";import"./Popover-Bg7PRpYi.js";import"./useFormValidation-DyHSd0rM.js";import"./useField-i2aIJcHd.js";import"./Form-BcyuIIHk.js";import"./useToggleState-D7eirndt.js";const{expect:o,userEvent:a}=__STORYBOOK_MODULE_TEST__,je={title:"Components/Checkbox/CheckboxGroup",component:M,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(e=>s.jsx(h,{value:e,children:e},e))},tags:["autodocs"]},i={},c={args:{showSelectAll:!0}},l={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...e})=>s.jsxs(M,{...e,children:[s.jsx(h,{value:"banana",children:"Banana"}),s.jsx(h,{value:"apple",children:"Apple"}),s.jsx("div",{children:"I'm not a checkbox"})]}),play:async({canvas:e,step:t})=>{const n=e.getByText("SELECT ALL");await t("It should show all selected as checked when all options are checked",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),await a.tab(),await a.keyboard("[Enter]"),await o(n).toHaveAttribute("data-selected","true")}),await t("It should show select all as indeterminate when 0 > check < max is selected",async()=>{const r=e.getByLabelText("Banana");await a.click(r),await o(n).toHaveAttribute("data-indeterminate","true")})}},p={args:{isDisabled:!0}},d={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},m={args:{isRequired:!0,isInvalid:void 0,label:"Invalid (by required)",description:"This is a working test",validationBehavior:"aria",errorMessage:"Du måste välja en av frukterna"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t,args:n})=>{await t("It should display correct error message when invalid",async()=>{await o(e.getByText(n.errorMessage)).toBeVisible()}),await t("All checkboxes should be required",async()=>{e.getAllByRole("checkbox").forEach(async r=>await o(r).toBeRequired())}),await t("Validation should be satisfied when checking one checkbox",async()=>{await a.click(e.getAllByRole("checkbox")[0]),e.getAllByRole("checkbox").forEach(async r=>await o(r).toBeValid())})}},u={args:{isInvalid:!0}};var b,g,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(w=(g=i.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var x,k,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var y,A,E;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    showSelectAll: true,
    selectAllLabel: 'SELECT ALL'
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
    return <CheckboxGroup {...args}>
        <Checkbox value='banana'>Banana</Checkbox>
        <Checkbox value='apple'>Apple</Checkbox>
        <div>I'm not a checkbox</div>
      </CheckboxGroup>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const selectAllCheckbox = canvas.getByText('SELECT ALL');
    await step('It should show all selected as checked when all options are checked', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      await expect(selectAllCheckbox).toHaveAttribute('data-selected', 'true');
    });
    await step('It should show select all as indeterminate when 0 > check < max is selected', async () => {
      const banana = canvas.getByLabelText('Banana');
      await userEvent.click(banana);
      await expect(selectAllCheckbox).toHaveAttribute('data-indeterminate', 'true');
    });
  }
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var S,B,I;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(I=(B=p.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var C,f,R;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...(R=(f=d.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var L,T,j;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    isInvalid: undefined,
    label: 'Invalid (by required)',
    description: 'This is a working test',
    validationBehavior: 'aria',
    errorMessage: 'Du måste välja en av frukterna'
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('It should display correct error message when invalid', async () => {
      await expect(canvas.getByText(args.errorMessage as string)).toBeVisible();
    });
    await step('All checkboxes should be required', async () => {
      canvas.getAllByRole('checkbox').forEach(async checkbox => await expect(checkbox).toBeRequired());
    });
    await step('Validation should be satisfied when checking one checkbox', async () => {
      await userEvent.click(canvas.getAllByRole('checkbox')[0]);
      canvas.getAllByRole('checkbox').forEach(async checkbox => await expect(checkbox).toBeValid());
    });
  }
}`,...(j=(T=m.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var O,q,D;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...(D=(q=u.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const Oe=["Example","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","InvalidInteraction","Invalid"];export{p as Disabled,i as Example,u as Invalid,m as InvalidInteraction,d as ReadOnly,l as SelectAllInteraction,c as ShowSelectAll,Oe as __namedExportsOrder,je as default};
