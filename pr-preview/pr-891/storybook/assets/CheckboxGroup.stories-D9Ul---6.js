import{j as s}from"./iframe-crrRDQdL.js";import{C as b}from"./CheckboxGroup-XHUNGHxu.js";import{C as h}from"./Checkbox-qKzcdjPG.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-CuwA4rM6.js";import"./utils-Ys3_FUZM.js";import"./clsx-B-dksMZM.js";import"./Text-C8ZiJPVn.js";import"./useFocusRing-CKHcw9hW.js";import"./index-DYukp6dc.js";import"./index-D6zF5ab1.js";import"./clsx-Ciqy0D92.js";import"./Text-dMQFlxOQ.js";import"./Label-_sk70CKN.js";import"./Button-D2FSU2f8.js";import"./Hidden-CpiXS9Kq.js";import"./useLabels-BqmK4HVG.js";import"./useButton-OtuQrflQ.js";import"./Dialog-DbhiLgMM.js";import"./RSPContexts-EpQgLewh.js";import"./OverlayArrow-CO2GiP8Q.js";import"./useResizeObserver-DfpGnFuS.js";import"./useControlledState-BzKJy9y_.js";import"./Collection-Cry9oPG_.js";import"./index-CyA-Hgia.js";import"./Separator-Pc9VU3of.js";import"./SelectionManager-CalKvBsA.js";import"./useEvent-CjunYZov.js";import"./scrollIntoView-DH3xY7BC.js";import"./SelectionIndicator-CQR2oYTR.js";import"./useDescription-CZlSe1aY.js";import"./ListKeyboardDelegate-g-Xfvl9E.js";import"./PressResponder-BgCRbVgN.js";import"./useLocalizedStringFormatter-Bbj_fEdz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DizgQUhJ.js";import"./VisuallyHidden-CBgos6KR.js";import"./useLocalizedStringFormatter-R_nr6V6c.js";import"./Button-Bst02TFm.js";import"./Button.module-CtQ1deO8.js";import"./x-8f75MzE4.js";import"./createLucideIcon-CHU1oBRH.js";import"./Heading-BJMY2hg0.js";import"./info-BhM_jSdc.js";import"./Popover-ahUBm7lI.js";import"./useFormValidation-dzFZAXlR.js";import"./useField-BsLDZIoY.js";import"./Form-s48_oPhk.js";import"./check-CiaDdwOO.js";import"./useToggleState-B-LOx7lo.js";const{expect:o,userEvent:a}=__STORYBOOK_MODULE_TEST__,me={title:"Components/Checkbox/CheckboxGroup",component:b,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(e=>s.jsx(h,{value:e,children:e},e))},tags:["autodocs"]},i={},c={args:{showSelectAll:!0}},l={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...e})=>s.jsxs(b,{...e,children:[s.jsx(h,{value:"banana",children:"Banana"}),s.jsx(h,{value:"apple",children:"Apple"}),s.jsx("div",{children:"I'm not a checkbox"})]}),play:async({canvas:e,step:t})=>{const n=e.getByText("SELECT ALL");await t("It should show all selected as checked when all options are checked",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),await a.tab(),await a.keyboard("[Enter]"),await o(n).toHaveAttribute("data-selected","true")}),await t("It should show select all as indeterminate when 0 > check < max is selected",async()=>{const r=e.getByLabelText("Banana");await a.click(r),await o(n).toHaveAttribute("data-indeterminate","true")})}},p={args:{isDisabled:!0}},d={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},m={args:{isRequired:!0,isInvalid:void 0,label:"Invalid (by required)",description:"This is a working test",validationBehavior:"aria",errorMessage:"Du måste välja en av frukterna"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t,args:n})=>{await t("It should display correct error message when invalid",async()=>{await o(e.getByText(n.errorMessage)).toBeVisible()}),await t("All checkboxes should be required",async()=>{e.getAllByRole("checkbox").forEach(async r=>await o(r).toBeRequired())}),await t("Validation should be satisfied when checking one checkbox",async()=>{await a.click(e.getAllByRole("checkbox")[0]),e.getAllByRole("checkbox").forEach(async r=>await o(r).toBeValid())})}},u={args:{isInvalid:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...u.parameters?.docs?.source}}};const ue=["Example","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","InvalidInteraction","Invalid"];export{p as Disabled,i as Example,u as Invalid,m as InvalidInteraction,d as ReadOnly,l as SelectAllInteraction,c as ShowSelectAll,ue as __namedExportsOrder,me as default};
