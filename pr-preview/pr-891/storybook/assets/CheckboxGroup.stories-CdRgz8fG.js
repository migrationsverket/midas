import{j as s}from"./iframe-BvtnbEWO.js";import{C as b}from"./CheckboxGroup-Chk6pVSa.js";import{C as h}from"./Checkbox-BG9y2DcX.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-DmVA7zlg.js";import"./utils-Dmj49lEG.js";import"./clsx-B-dksMZM.js";import"./Text-G_ihDvZJ.js";import"./useFocusRing-BlbKuGBA.js";import"./index-Buo16tpK.js";import"./index-A6OnxHr3.js";import"./clsx-Ciqy0D92.js";import"./Text-B7oxr1RI.js";import"./Label-DtYzvuRw.js";import"./Button-BDKaMgDI.js";import"./Hidden-B-AZDmCl.js";import"./useLabels-KBXM5tZw.js";import"./useButton-qz_TyAWl.js";import"./Dialog-SMibr7T8.js";import"./RSPContexts-BMp6jLpo.js";import"./OverlayArrow-CjKqQivr.js";import"./useResizeObserver-BU-ZyiTP.js";import"./useControlledState-Dzlb7uXm.js";import"./Collection-WF1BDAnd.js";import"./index-Bi-IqhAu.js";import"./Separator-DG3h-wUM.js";import"./SelectionManager-Cc2ZsgzI.js";import"./useEvent-CdLUELr7.js";import"./scrollIntoView-CptB-SyI.js";import"./SelectionIndicator-CAJEwhrw.js";import"./useDescription-3yaDVIih.js";import"./ListKeyboardDelegate-BwOp3GOw.js";import"./PressResponder-DQRY-Kqq.js";import"./useLocalizedStringFormatter-B6wo6qEy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DAh1nnIS.js";import"./VisuallyHidden-DqvK4Wff.js";import"./useLocalizedStringFormatter-B6icmZu0.js";import"./Button-DciKK2iU.js";import"./Button.module-CtQ1deO8.js";import"./x-B4WpRfld.js";import"./createLucideIcon-DLTmB58A.js";import"./Heading-BExRDS79.js";import"./info-C4RVpOnV.js";import"./Popover-lyKFTbo1.js";import"./useFormValidation-CFPInbMA.js";import"./useField-BnzoMeMJ.js";import"./Form-DlbxRFTH.js";import"./useToggleState-CfcMXvy9.js";const{expect:o,userEvent:a}=__STORYBOOK_MODULE_TEST__,de={title:"Components/Checkbox/CheckboxGroup",component:b,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(e=>s.jsx(h,{value:e,children:e},e))},tags:["autodocs"]},i={},c={args:{showSelectAll:!0}},l={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...e})=>s.jsxs(b,{...e,children:[s.jsx(h,{value:"banana",children:"Banana"}),s.jsx(h,{value:"apple",children:"Apple"}),s.jsx("div",{children:"I'm not a checkbox"})]}),play:async({canvas:e,step:t})=>{const n=e.getByText("SELECT ALL");await t("It should show all selected as checked when all options are checked",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),await a.tab(),await a.keyboard("[Enter]"),await o(n).toHaveAttribute("data-selected","true")}),await t("It should show select all as indeterminate when 0 > check < max is selected",async()=>{const r=e.getByLabelText("Banana");await a.click(r),await o(n).toHaveAttribute("data-indeterminate","true")})}},p={args:{isDisabled:!0}},d={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},m={args:{isRequired:!0,isInvalid:void 0,label:"Invalid (by required)",description:"This is a working test",validationBehavior:"aria",errorMessage:"Du måste välja en av frukterna"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t,args:n})=>{await t("It should display correct error message when invalid",async()=>{await o(e.getByText(n.errorMessage)).toBeVisible()}),await t("All checkboxes should be required",async()=>{e.getAllByRole("checkbox").forEach(async r=>await o(r).toBeRequired())}),await t("Validation should be satisfied when checking one checkbox",async()=>{await a.click(e.getAllByRole("checkbox")[0]),e.getAllByRole("checkbox").forEach(async r=>await o(r).toBeValid())})}},u={args:{isInvalid:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const me=["Example","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","InvalidInteraction","Invalid"];export{p as Disabled,i as Example,u as Invalid,m as InvalidInteraction,d as ReadOnly,l as SelectAllInteraction,c as ShowSelectAll,me as __namedExportsOrder,de as default};
