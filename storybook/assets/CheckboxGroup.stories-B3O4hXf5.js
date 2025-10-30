import{j as s}from"./iframe-BZsA0soF.js";import{C as j}from"./CheckboxGroup-CHiclBL4.js";import{C as u}from"./Checkbox-BMi-BjNB.js";import"./preload-helper-Dp1pzeXC.js";import"./FieldError-BJVQHQX3.js";import"./utils-yaH0sIHp.js";import"./clsx-B-dksMZM.js";import"./Text-B5OC13PM.js";import"./useFocusRing-C-3AOOU5.js";import"./index-CJl195z9.js";import"./index-Dn3JmwLd.js";import"./clsx-Ciqy0D92.js";import"./Text-kpW-alyi.js";import"./Label-CWjXmHKQ.js";import"./Button-BcbtCV4P.js";import"./Hidden-DRuI75Gq.js";import"./useLabels-DZkIvWLr.js";import"./useButton-BJcmZpKd.js";import"./Dialog-BTLb-DtD.js";import"./RSPContexts-DEDFOMAP.js";import"./OverlayArrow-DMKKTT6h.js";import"./useResizeObserver-DZ8J1VPl.js";import"./useControlledState-CnZwQ-Dx.js";import"./Collection-Dj5DG811.js";import"./index-BeJ1BGmu.js";import"./Separator-Cnn9kiCU.js";import"./SelectionManager-EaJXfD35.js";import"./useEvent-OA17rID4.js";import"./scrollIntoView-di-6G41C.js";import"./SelectionIndicator-Bk1YR0lk.js";import"./useDescription-UwdMZCpj.js";import"./ListKeyboardDelegate-CcttGp8e.js";import"./PressResponder-Ba_DMvkQ.js";import"./useLocalizedStringFormatter-DGkX5vHt.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-KKguj2Ix.js";import"./VisuallyHidden-Dd5lGMJX.js";import"./useLocalizedStringFormatter-CCz1jvuM.js";import"./Button-BKnE454O.js";import"./Button.module-CcWMkJAG.js";import"./x-BK4KolFc.js";import"./createLucideIcon-D31N7u8q.js";import"./Heading-BuiaRDxo.js";import"./info-DigUJXCb.js";import"./Popover-dZ3_T7Tj.js";import"./useFormValidation-DDv0pUUH.js";import"./useField-RoT05E6U.js";import"./Form-DooGsQBW.js";import"./useToggleState-Be2wY-kU.js";const{expect:o,userEvent:a}=__STORYBOOK_MODULE_TEST__,fe={title:"Components/Checkbox/CheckboxGroup",component:j,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(e=>s.jsx(u,{value:e,children:e},e))},tags:["autodocs"]},i={},c={args:{showSelectAll:!0}},l={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...e})=>s.jsxs(j,{...e,children:[s.jsx(u,{value:"banana",children:"Banana"}),s.jsx(u,{value:"apple",children:"Apple"}),s.jsx("div",{children:"I'm not a checkbox"})]}),play:async({canvas:e,step:t})=>{const n=e.getByText("SELECT ALL");await t("It should show all selected as checked when all options are checked",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),await a.tab(),await a.keyboard("[Enter]"),await o(n).toHaveAttribute("data-selected","true")}),await t("It should show select all as indeterminate when 0 > check < max is selected",async()=>{const r=e.getByLabelText("Banana");await a.click(r),await o(n).toHaveAttribute("data-indeterminate","true")})}},p={args:{isDisabled:!0}},d={args:{isRequired:!0,isInvalid:void 0,label:"Invalid (by required)",description:"This is a working test",validationBehavior:"aria",errorMessage:"Du måste välja en av frukterna"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t,args:n})=>{await t("It should display correct error message when invalid",async()=>{await o(e.getByText(n.errorMessage)).toBeVisible()}),await t("All checkboxes should be required",async()=>{e.getAllByRole("checkbox").forEach(async r=>await o(r).toBeRequired())}),await t("Validation should be satisfied when checking one checkbox",async()=>{await a.click(e.getAllByRole("checkbox")[0]),e.getAllByRole("checkbox").forEach(async r=>await o(r).toBeValid())})}},m={args:{isInvalid:!0}};var h,b,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,w,g;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...(g=(w=c.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var v,y,A;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(A=(y=l.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var E,B,S;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(S=(B=p.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var I,C,f;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(f=(C=d.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var L,T,R;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...(R=(T=m.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const Le=["Example","ShowSelectAll","SelectAllInteraction","Disabled","InvalidInteraction","Invalid"];export{p as Disabled,i as Example,m as Invalid,d as InvalidInteraction,l as SelectAllInteraction,c as ShowSelectAll,Le as __namedExportsOrder,fe as default};
