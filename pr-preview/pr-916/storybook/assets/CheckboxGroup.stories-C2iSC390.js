import{j as e}from"./iframe-ylZf3Rzh.js";import{C as m}from"./CheckboxGroup-BPEwtAMW.js";import{C as p}from"./Checkbox-WiFdCs6q.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-DTCUMNT4.js";import"./utils-D06pAXX_.js";import"./clsx-B-dksMZM.js";import"./Text-Db7o3Fbo.js";import"./useFocusRing-Bo93gYby.js";import"./index-Bq-vAhim.js";import"./index-Crjclm7s.js";import"./clsx-Ciqy0D92.js";import"./Text-8r5M_h2W.js";import"./Label-Cg1jBNTX.js";import"./Button-DhYk_hW2.js";import"./Hidden-CalmMv23.js";import"./useLabels-Bxulg4qY.js";import"./useButton-C5dBSQLo.js";import"./Dialog-Bz179aOh.js";import"./RSPContexts-DqWiROll.js";import"./OverlayArrow-DS1bsXeC.js";import"./useResizeObserver-CRzO9m8h.js";import"./useControlledState-Cl9-8Wdt.js";import"./Collection-CeI_Glya.js";import"./index-BVihLk1c.js";import"./Separator-DHI9XevK.js";import"./SelectionManager-klvasUvW.js";import"./useEvent-D3oA8MGZ.js";import"./scrollIntoView-B8UBJdD2.js";import"./SelectionIndicator-B3koVQNF.js";import"./useDescription-CvDzlQQ_.js";import"./ListKeyboardDelegate-wUvmdga7.js";import"./PressResponder-Dcp8WsCT.js";import"./useLocalizedStringFormatter-CDM70I-6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D2Fpe8q7.js";import"./VisuallyHidden-DcsDn9V3.js";import"./useLocalizedStringFormatter-snId5igW.js";import"./Button-DIVvbVZE.js";import"./Button.module-CtQ1deO8.js";import"./x-8CDfFUmn.js";import"./createLucideIcon-9MEtXIpu.js";import"./Heading-DE2hCXd6.js";import"./info-Bf-AWb7w.js";import"./Popover-CCjiIGEY.js";import"./useFormValidation-DQYvxRz3.js";import"./useField-BvB7zQrO.js";import"./Form-DGmsYjmu.js";import"./check-BnCqk9wT.js";import"./useToggleState-BLcQBFTL.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
