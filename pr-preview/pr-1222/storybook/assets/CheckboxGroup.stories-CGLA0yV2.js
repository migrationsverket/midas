import{j as e}from"./iframe-DD86HrH2.js";import{C as m}from"./CheckboxGroup-9gHPWlyn.js";import{C as p}from"./Checkbox-zdSKKN4O.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DI4cB23D.js";import"./utils-COpPBJUa.js";import"./clsx-B-dksMZM.js";import"./Text-DuibH3v7.js";import"./useFocusRing-BexPlixw.js";import"./index-BRqGpYZa.js";import"./index-c37RaAEE.js";import"./clsx-Ciqy0D92.js";import"./Text-CmsABE1n.js";import"./Label-SzfbAhNJ.js";import"./Button-Dlxsdkdy.js";import"./Hidden-DxNA2jAI.js";import"./useLabel-Bo2GeM8m.js";import"./useLabels-C7ZzmUeQ.js";import"./useButton-D2fUs3pD.js";import"./Dialog-CrlKk7BZ.js";import"./RSPContexts-OgLCyc19.js";import"./OverlayArrow-CgrBU6Ge.js";import"./useResizeObserver-B3pATvfR.js";import"./useControlledState-k07B6mZK.js";import"./Collection-CJicqcV9.js";import"./index-BMz79FiH.js";import"./Separator-B4Ge26sb.js";import"./SelectionManager-BvPH3Yxz.js";import"./useEvent-ChusgNbw.js";import"./scrollIntoView-CuCYXK6V.js";import"./SelectionIndicator-BdMqMuAi.js";import"./useDescription-CyBHIiEQ.js";import"./ListKeyboardDelegate-qA9M4eDd.js";import"./PressResponder-BhsHjNTF.js";import"./useLocalizedStringFormatter-CL-qCV33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CWGeksXq.js";import"./getScrollParent-CvIpxtIQ.js";import"./VisuallyHidden-DI8ejz9M.js";import"./ModalOverlay-C5rtQ2Yv.js";import"./x-BX_qSKOQ.js";import"./createLucideIcon-DzgrZqcN.js";import"./useLocalizedStringFormatter-rPCKOnn1.js";import"./Heading-BxI44wnh.js";import"./Button-BFvCKzsz.js";import"./Button.module-BB7N-cLd.js";import"./info-6PV5BiCf.js";import"./Popover-Dusd1fK0.js";import"./Form-CeuJdreE.js";import"./useField-K4C8pkC3.js";import"./check-DnxiYyoz.js";import"./useToggleState-B4u824Lz.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
