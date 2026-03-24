import{j as e}from"./iframe-DZ1EsSEK.js";import{C as m}from"./CheckboxGroup-wJZ8Wkbu.js";import{C as p}from"./Checkbox-DFD3jj6R.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BzMgxN1Q.js";import"./utils-lK9T8_jl.js";import"./clsx-B-dksMZM.js";import"./Text-DZdpfwqx.js";import"./useFocusRing-D_vCbsr-.js";import"./index-71P1Szw3.js";import"./index-BQnaZYa2.js";import"./clsx-Ciqy0D92.js";import"./Text-DqGoi7_4.js";import"./Label-BxbGCYay.js";import"./Button-ZOWpVm8T.js";import"./Hidden-Ds6hIAxc.js";import"./useLabels-D4tzMtOA.js";import"./useButton-c1Yevao-.js";import"./Dialog-bAdrd9cC.js";import"./RSPContexts-BoDURVtR.js";import"./OverlayArrow-APioeWdU.js";import"./useResizeObserver-DytEHUXd.js";import"./useControlledState-CfPDeg3b.js";import"./Collection-D-oaO6og.js";import"./index-Tron79TB.js";import"./Separator-C-M-Rc9B.js";import"./SelectionManager-CIztqYLV.js";import"./useEvent-BIB_rKuR.js";import"./scrollIntoView-CULTOlwa.js";import"./SelectionIndicator-DOlDYJIj.js";import"./useDescription-XzJJ2X8U.js";import"./ListKeyboardDelegate-DZNAPElA.js";import"./PressResponder-B8Lb9S-i.js";import"./useLocalizedStringFormatter-D4af7QR2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C_PCgPyl.js";import"./getScrollParent-zITgOpZ8.js";import"./VisuallyHidden-DVsJMowt.js";import"./x-CqUvAfPO.js";import"./createLucideIcon-CHs8jxVv.js";import"./useLocalizedStringFormatter-CXoae_qU.js";import"./Heading-CE2k7wpi.js";import"./Button-BU-tH8i8.js";import"./Button.module-BB7N-cLd.js";import"./info-1DX7jtbo.js";import"./Popover-I8Us_sHn.js";import"./Form-Uz8HRtXw.js";import"./useField-BW5TjY1c.js";import"./check-BtVDuzOH.js";import"./useToggleState-CE1N3d08.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
