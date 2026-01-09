import{j as e}from"./iframe-BRBGZIqz.js";import{C as m}from"./CheckboxGroup-5HRi5gC1.js";import{C as p}from"./Checkbox-D-foY6h9.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bvp_2QjQ.js";import"./utils-OvVzRtGp.js";import"./clsx-B-dksMZM.js";import"./Text-Bm57nBYX.js";import"./useFocusRing-TRszBoqc.js";import"./index-BZiahUN9.js";import"./index-D1MdiIlN.js";import"./clsx-Ciqy0D92.js";import"./Text-D30cak4p.js";import"./Label-CVzSYO2Q.js";import"./Button-Di6ycfiR.js";import"./Hidden-Bjo-j34-.js";import"./useLabels-BD_4aIe0.js";import"./useButton-DDvnlXFn.js";import"./Dialog-BBT71EaD.js";import"./RSPContexts-jYMRsKlw.js";import"./OverlayArrow-CWhbywkE.js";import"./useResizeObserver-DTfxS9ZH.js";import"./useControlledState-i1Jya0wd.js";import"./Collection-CrIq6a7A.js";import"./index-C07XiCjk.js";import"./Separator-DcSU3lUJ.js";import"./SelectionManager-VWRCNfOh.js";import"./useEvent-MfuLXWyH.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DIKMQf_F.js";import"./useDescription-CYAHXzDK.js";import"./ListKeyboardDelegate-ZZJL6dIw.js";import"./PressResponder-C75R_0pF.js";import"./useLocalizedStringFormatter-GxtkbDMC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-IEUCMlX4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-V6qs-Wg7.js";import"./Button-CNcByJgx.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DdmTdBPq.js";import"./createLucideIcon-9r_u-ur5.js";import"./x-CEJ4YpOa.js";import"./Heading-Cv-exkUw.js";import"./info-DgZB1Tjv.js";import"./Popover-BESSQ_fc.js";import"./useFormValidation-Blap2HkA.js";import"./useField-BAxc47Rd.js";import"./Form-B81Z4ziU.js";import"./check-BMENk_tH.js";import"./useToggleState-MV4MVltF.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...n.parameters?.docs?.source}}};const pr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,pr as __namedExportsOrder,nr as default};
