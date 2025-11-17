import{j as e}from"./iframe-CjjIIKGs.js";import{C as m}from"./CheckboxGroup-CF5Z4ABc.js";import{C as p}from"./Checkbox-CTMNtTob.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CY8akRGr.js";import"./utils-8ZbXS6f6.js";import"./clsx-B-dksMZM.js";import"./Text-CkV4NByh.js";import"./useFocusRing-BUBN2goW.js";import"./index-D20K6lUI.js";import"./index-DEI9jor0.js";import"./clsx-Ciqy0D92.js";import"./Text-BpYGQE2I.js";import"./Label-BxFcUv4C.js";import"./Button-DNpQXrrI.js";import"./Hidden-BaoTcLvl.js";import"./useLabels-Ia4Z8tbb.js";import"./useButton-DixBK3IU.js";import"./Dialog-DZarwmD-.js";import"./RSPContexts-D6XtKLzn.js";import"./OverlayArrow-m_pLNNwx.js";import"./useResizeObserver-CMkccX_0.js";import"./useControlledState-wS3aoh2y.js";import"./Collection-DZxSDMwk.js";import"./index-Df5QruFQ.js";import"./Separator-5NLA1VX_.js";import"./SelectionManager-DYnootbn.js";import"./useEvent-D1k2-Iuc.js";import"./scrollIntoView-Bwwiqusc.js";import"./SelectionIndicator-C9Ru5Yu5.js";import"./useDescription-DKk6Hg5e.js";import"./ListKeyboardDelegate-l_0QYaKt.js";import"./PressResponder-B7Auj76h.js";import"./useLocalizedStringFormatter-TVROMl_H.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DL70V3fn.js";import"./VisuallyHidden-BVLylhk2.js";import"./Button-BNEmvK4K.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dff0qiua.js";import"./createLucideIcon-BKOGWx3H.js";import"./x-BgH5q9o3.js";import"./Heading-D4Qj-Amo.js";import"./info-BsRV0UqE.js";import"./Popover-BnXdAC8p.js";import"./useFormValidation-jiC4Apdl.js";import"./useField-aMWySJSX.js";import"./Form-CSprWr7k.js";import"./check-B4EX51A7.js";import"./useToggleState-Bxir1WMV.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
