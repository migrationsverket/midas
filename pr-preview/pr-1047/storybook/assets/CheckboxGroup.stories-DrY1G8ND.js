import{j as e}from"./iframe-DVQ0lchi.js";import{C as m}from"./CheckboxGroup-BVHvbiJB.js";import{C as p}from"./Checkbox-j3INMaTw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BZ5WZxgy.js";import"./utils-D9gSMjNq.js";import"./clsx-B-dksMZM.js";import"./Text-BT_jL1TS.js";import"./useFocusRing-BK_0R4Cd.js";import"./index-Cj7CZlN3.js";import"./index-BwU4zFag.js";import"./clsx-Ciqy0D92.js";import"./Text-CG8-q4rG.js";import"./Label-C1nMF9tl.js";import"./Button-wRPSXeW1.js";import"./Hidden-CFa_YiSP.js";import"./useLabels-DHWU2EjP.js";import"./useButton-7QHFLhkI.js";import"./Dialog-Dns8O4wX.js";import"./RSPContexts-qfClobBw.js";import"./OverlayArrow-wxDJs7DW.js";import"./useResizeObserver-CNC-T4O9.js";import"./useControlledState-CVbkXYHz.js";import"./Collection-BeXItj4l.js";import"./index-9ps3Ho_D.js";import"./Separator-Y48f79s-.js";import"./SelectionManager-DlhalhRG.js";import"./useEvent-B4aA5pHy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B--YyAaZ.js";import"./useDescription-BIgViSQ9.js";import"./ListKeyboardDelegate-DgB76bGG.js";import"./PressResponder-Dc_9NIP-.js";import"./useLocalizedStringFormatter-BgI6hB3-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CTzSbRK9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D9m3MBoK.js";import"./Button-UCEzLs7l.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DL9CCeFC.js";import"./createLucideIcon-C72qyWqC.js";import"./x-BawT75ci.js";import"./Heading-F4cTSlGL.js";import"./info-C6bYHcwb.js";import"./Popover-CswrE1Dt.js";import"./useFormValidation-DsVKrsU7.js";import"./useField-CAm7Tj1f.js";import"./Form-D2lawrpE.js";import"./check-BbVqbNbV.js";import"./useToggleState-B4M6JbKR.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
