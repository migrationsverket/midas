import{j as e}from"./iframe-BEec9xws.js";import{C as m}from"./CheckboxGroup-CxdSz3O3.js";import{C as p}from"./Checkbox-6c_iCCMC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-2T8QeYCV.js";import"./utils-tmadhNLO.js";import"./clsx-B-dksMZM.js";import"./Text-CEDi3dsy.js";import"./useFocusRing-CHLWvWfU.js";import"./index-jsa7VRLI.js";import"./index-BPo6dsF7.js";import"./clsx-Ciqy0D92.js";import"./Text-Cqp2sCpU.js";import"./Label-D1PWWmqN.js";import"./Button-DWX0vVyl.js";import"./Hidden-uHrwE7I5.js";import"./useLabels-B9n4tFRy.js";import"./useButton-G3mO1U0h.js";import"./Dialog-gGRr6dJL.js";import"./RSPContexts-COK32NAs.js";import"./OverlayArrow-Bma7uS4_.js";import"./useResizeObserver-D5LXj7ca.js";import"./useControlledState-BAzuR8Jv.js";import"./Collection-D3spvIRq.js";import"./index-C2h17Hkd.js";import"./Separator-m66wPUn4.js";import"./SelectionManager-Bp8NDSgY.js";import"./useEvent-e5sb6lYY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-COZ8q6cB.js";import"./useDescription-CLIom5bP.js";import"./ListKeyboardDelegate-BNbwgrMg.js";import"./PressResponder-DN4lRlRa.js";import"./useLocalizedStringFormatter-DPYn3iJZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCnHayjS.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B_EbF9d8.js";import"./Button-ZBZN_eZh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-piak_TFz.js";import"./createLucideIcon-BEU2T1Tc.js";import"./x-DNVtugLs.js";import"./Heading-C3sBlwM8.js";import"./info-B3Ed_GmD.js";import"./Popover-BtG-GTgy.js";import"./useFormValidation-Bw69zpyk.js";import"./useField-7d8i6LLe.js";import"./Form-BJTstxyD.js";import"./check-BVZC8sAP.js";import"./useToggleState-IlNucxpu.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
