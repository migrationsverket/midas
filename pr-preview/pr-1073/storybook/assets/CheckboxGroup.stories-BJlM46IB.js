import{j as e}from"./iframe-CeCAp685.js";import{C as m}from"./CheckboxGroup-vDmTtcNS.js";import{C as p}from"./Checkbox-FeYQTn4F.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-aZ4tQBIh.js";import"./utils-COZ-VSjk.js";import"./clsx-B-dksMZM.js";import"./Text-OHvhFpdo.js";import"./useFocusRing-Bh0QYcZA.js";import"./index-NSorO2Ba.js";import"./index-BRisY6m3.js";import"./clsx-Ciqy0D92.js";import"./Text-BD2V775c.js";import"./Label-b1aLL6HQ.js";import"./Button-0wuCXx93.js";import"./Hidden-DL0LnJvP.js";import"./useLabels-Dg5MFTni.js";import"./useButton-MOpcSjMV.js";import"./Dialog-SD2XHtbf.js";import"./RSPContexts-CyFxiidX.js";import"./OverlayArrow-BbkrtxzH.js";import"./useResizeObserver-B3cttXhP.js";import"./useControlledState-Dps_NbAf.js";import"./Collection-KDzXr54v.js";import"./index-BAAd046U.js";import"./Separator-Dd_YeU7-.js";import"./SelectionManager-0GA5VoNT.js";import"./useEvent-teEO8Cf_.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D8WnGrhr.js";import"./useDescription-B3frf935.js";import"./ListKeyboardDelegate-vJRFFTIb.js";import"./PressResponder-DLEVeqMj.js";import"./useLocalizedStringFormatter-DDDWDqSE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CFJVtK1g.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C9bjb32j.js";import"./Button-DO76dX9X.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DiwTvhuf.js";import"./createLucideIcon-DSHxLsIU.js";import"./x-D2ttmjes.js";import"./Heading-B4mtSUFj.js";import"./info-Dm45ywBv.js";import"./Popover-CxKoBaBv.js";import"./useFormValidation-C4KFIaMR.js";import"./useField-B0v1Y4ts.js";import"./Form-ClAmGACA.js";import"./check-B-YM1pmN.js";import"./useToggleState-CiCnxlXe.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
