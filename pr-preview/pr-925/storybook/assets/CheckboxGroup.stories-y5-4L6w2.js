import{j as e}from"./iframe-DYBbcOUc.js";import{C as m}from"./CheckboxGroup-DbuNQQ4l.js";import{C as p}from"./Checkbox-D-zVwCLd.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B2TJex7v.js";import"./utils-R4gvIU3G.js";import"./clsx-B-dksMZM.js";import"./Text-Tj7cHc4y.js";import"./useFocusRing-DyRUz5vb.js";import"./index-thGjz9u9.js";import"./index-D7z64vMT.js";import"./clsx-Ciqy0D92.js";import"./Text-Bqq52gB3.js";import"./Label-CddjRF3U.js";import"./Button-Cad-DxUv.js";import"./Hidden-XaTnVVir.js";import"./useLabels-Da2D9TrT.js";import"./useButton-COPW9UvJ.js";import"./Dialog-Ckf1ZhYe.js";import"./RSPContexts-B2cERvFk.js";import"./OverlayArrow-CWYcgf-M.js";import"./useResizeObserver-DcVIdTpi.js";import"./useControlledState-mdKIrMMP.js";import"./Collection-CH5Z5HcA.js";import"./index-B26BCfjV.js";import"./Separator-DDd0wnQO.js";import"./SelectionManager-Hz5nWYgr.js";import"./useEvent-uHHHA4m4.js";import"./scrollIntoView-pqv3M8RJ.js";import"./SelectionIndicator-kISU7KBz.js";import"./useDescription-C8Vy8EGp.js";import"./ListKeyboardDelegate-DNu-CIf4.js";import"./PressResponder-BleC3u6N.js";import"./useLocalizedStringFormatter-BWoXb-Lg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-_9ehPPjd.js";import"./VisuallyHidden-DNWWeoJ1.js";import"./useLocalizedStringFormatter-CB7EX41j.js";import"./Button-BOqn9nOO.js";import"./Button.module-CtQ1deO8.js";import"./x-Cbhc3GUc.js";import"./createLucideIcon-DhblIh0r.js";import"./Heading-Bd5JRCBV.js";import"./info-L0wUT4K6.js";import"./Popover-c6va3WaX.js";import"./useFormValidation-CyMOk9K1.js";import"./useField-DnAWikfx.js";import"./Form-C4bmwKk2.js";import"./check-2Gupl6sw.js";import"./useToggleState-DNdaINYt.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
