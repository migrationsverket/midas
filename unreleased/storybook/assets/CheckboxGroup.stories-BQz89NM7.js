import{j as s}from"./iframe-DuGV-nJg.js";import{C as u}from"./Checkbox-zGezADIq.js";import{C as j}from"./CheckboxGroup-IOX9AGjn.js";import"./preload-helper-Dp1pzeXC.js";import"./RSPContexts-xz5oQOBR.js";import"./utils-DMXpxxWM.js";import"./clsx-B-dksMZM.js";import"./Form-BsSlJ9Cc.js";import"./useFormValidation-BzzUHR-d.js";import"./useFocusRing-DZevXC5x.js";import"./index-BYp4SrVV.js";import"./index-B5eSfPIC.js";import"./VisuallyHidden-GNoLuOT2.js";import"./useToggleState-Dul-6Otg.js";import"./useControlledState-BlnoIrZu.js";import"./FieldError-D8dDqKEr.js";import"./Text-DKyaOHyp.js";import"./Text-tTr5tgay.js";import"./Label-xbRssyTt.js";import"./Button-CN5BzAGz.js";import"./Hidden-CDWt_Hqe.js";import"./useLabels-B9oi6BvG.js";import"./useButton-BZcqx5pu.js";import"./Dialog-C1EF_Civ.js";import"./OverlayArrow-BXlck3PZ.js";import"./useResizeObserver-CYLaDcIE.js";import"./Collection-Dhd6463K.js";import"./index-C6NxZSmk.js";import"./ListKeyboardDelegate-DkChHUWM.js";import"./SelectionManager-etTHRufU.js";import"./useEvent-oeERdTLZ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CAvUDr1F.js";import"./useDescription-BBE-zXAf.js";import"./Separator-Cl80GkkI.js";import"./PressResponder-BAyl3bG5.js";import"./useLocalizedStringFormatter-9U_wd7Wi.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./Dialog-DIVLDi2u.js";import"./useLocalizedStringFormatter-D9zl-CR7.js";import"./Button-jZCC3-mm.js";import"./Button.module-DRhvPh0f.js";import"./x-Dbrz1_YK.js";import"./createLucideIcon-B7F13ZBn.js";import"./Heading-0PdAu9bL.js";import"./info-BKRZSSfW.js";import"./useField-DZmfhGAw.js";const{expect:o,userEvent:a}=__STORYBOOK_MODULE_TEST__,Ce={title:"Components/Checkbox/CheckboxGroup",component:j,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(e=>s.jsx(u,{value:e,children:e},e))},tags:["autodocs"]},i={},c={args:{showSelectAll:!0}},l={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:({...e})=>s.jsxs(j,{...e,children:[s.jsx(u,{value:"banana",children:"Banana"}),s.jsx(u,{value:"apple",children:"Apple"}),s.jsx("div",{children:"I'm not a checkbox"})]}),play:async({canvas:e,step:t})=>{const n=e.getByText("SELECT ALL");await t("It should show all selected as checked when all options are checked",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),await a.tab(),await a.keyboard("[Enter]"),await o(n).toHaveAttribute("data-selected","true")}),await t("It should show select all as indeterminate when 0 > check < max is selected",async()=>{const r=e.getByLabelText("Banana");await a.click(r),await o(n).toHaveAttribute("data-indeterminate","true")})}},p={args:{isDisabled:!0}},d={args:{isRequired:!0,isInvalid:void 0,label:"Invalid (by required)",description:"This is a working test",validationBehavior:"aria",errorMessage:"Du måste välja en av frukterna"},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t,args:n})=>{await t("It should display correct error message when invalid",async()=>{await o(e.getByText(n.errorMessage)).toBeVisible()}),await t("All checkboxes should be required",async()=>{e.getAllByRole("checkbox").forEach(async r=>await o(r).toBeRequired())}),await t("Validation should be satisfied when checking one checkbox",async()=>{await a.click(e.getAllByRole("checkbox")[0]),e.getAllByRole("checkbox").forEach(async r=>await o(r).toBeValid())})}},m={args:{isInvalid:!0}};var h,b,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,w,g;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...(g=(w=c.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var v,y,A;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showSelectAll: true,
    selectAllLabel: 'SELECT ALL'
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
  tags: ['!dev', '!autodocs'],
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
}`,...(R=(T=m.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const fe=["Example","ShowSelectAll","SelectAllInteraction","Disabled","InvalidInteraction","Invalid"];export{p as Disabled,i as Example,m as Invalid,d as InvalidInteraction,l as SelectAllInteraction,c as ShowSelectAll,fe as __namedExportsOrder,Ce as default};
