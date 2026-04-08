import{j as e}from"./iframe-DeJZYfs6.js";import{C as m}from"./CheckboxGroup-DAhH0wWu.js";import{C as p}from"./Checkbox-BegcHKeZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bu4wLSzH.js";import"./utils-CVaTJ4pr.js";import"./clsx-B-dksMZM.js";import"./Text-DiI9AjCa.js";import"./useFocusRing-EUZ5WM39.js";import"./index-DUC36L3p.js";import"./index-Dld1jC9-.js";import"./clsx-Ciqy0D92.js";import"./Text-BDvIHgKo.js";import"./Label-DGHbBSoZ.js";import"./Button-TyrtoBf7.js";import"./Hidden-CpOEnTcU.js";import"./useLabel-BTghzENV.js";import"./useLabels-DAGFp_YT.js";import"./useButton-B3BOjKYq.js";import"./Dialog-BKKPlMRz.js";import"./RSPContexts-BW4hyt92.js";import"./OverlayArrow-BX-XAuow.js";import"./useResizeObserver-BcdcrqhO.js";import"./useControlledState-e4htfzmn.js";import"./Collection-BPBdLDAU.js";import"./index-X7ll_aVF.js";import"./Separator-DP8XjcFV.js";import"./SelectionManager-C1t4FTfK.js";import"./useEvent-Prn2T694.js";import"./scrollIntoView-CmHT6ElZ.js";import"./SelectionIndicator-CfLsX9sj.js";import"./useDescription-DM4YbjnM.js";import"./ListKeyboardDelegate-C4mFB7JL.js";import"./PressResponder-81Dm5uHE.js";import"./useLocalizedStringFormatter-D8Vo3ZTR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Drxg6nEc.js";import"./getScrollParent-cyrVl-ro.js";import"./VisuallyHidden-C7trIB5i.js";import"./Dialog-DImgXYM0.js";import"./x-QMdCwQzi.js";import"./createLucideIcon-BN41fbAL.js";import"./useLocalizedStringFormatter-Dswz4gW1.js";import"./Heading-OxyOCkj5.js";import"./Button-7AU2H28z.js";import"./Button.module-BB7N-cLd.js";import"./info-Bctd-Gpa.js";import"./Popover-BFExrSuc.js";import"./Form-C-IA29jh.js";import"./useField-DP3RVU73.js";import"./check-DLQm5x4V.js";import"./useToggleState-BrFsELFk.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
