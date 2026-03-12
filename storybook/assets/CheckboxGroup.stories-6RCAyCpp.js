import{j as e}from"./iframe-8kNNjGPs.js";import{C as m}from"./CheckboxGroup--GAWrhUY.js";import{C as p}from"./Checkbox-Ba4oIwom.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DFfowcOQ.js";import"./utils-BUzQLJoB.js";import"./clsx-B-dksMZM.js";import"./Text-DzkFi4rT.js";import"./useFocusRing-DOlZhwGN.js";import"./index-vpPlhTCt.js";import"./index-CY9KIRXZ.js";import"./clsx-Ciqy0D92.js";import"./Text-CS5lJlaQ.js";import"./Label-D7zDCpTo.js";import"./Button-BMyY3aLP.js";import"./Hidden-jzFhZXSA.js";import"./useLabels-C_3EwP0f.js";import"./useButton-D_bc-eEZ.js";import"./Dialog-CvVRrTvt.js";import"./RSPContexts-D6QBp_i-.js";import"./OverlayArrow-DXevLP2U.js";import"./useResizeObserver-CHonXuNm.js";import"./useControlledState-Cu0NDb2D.js";import"./Collection-B94qNX-L.js";import"./index-N81UcEwH.js";import"./Separator-BA4IsB4g.js";import"./SelectionManager-B6niOt_f.js";import"./useEvent-D90UEmSc.js";import"./scrollIntoView-Dp__3D12.js";import"./SelectionIndicator-BH01pR8s.js";import"./useDescription-CitCh8vm.js";import"./ListKeyboardDelegate-DYBXhtk7.js";import"./PressResponder-uYPDuqaU.js";import"./useLocalizedStringFormatter-gfDb4gw1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-GOKmljJx.js";import"./getScrollParent-C9iJgPHi.js";import"./VisuallyHidden-BY2ZOU88.js";import"./x-DUSFswnG.js";import"./createLucideIcon-D0Msiesm.js";import"./useLocalizedStringFormatter-c_MYqT_W.js";import"./Heading-dGaAJRW4.js";import"./Button-BdMqRHYH.js";import"./Button.module-D_C6WeTN.js";import"./info-COOD2C5N.js";import"./Popover-B65mUo0d.js";import"./useFormValidation-C8-qwhmM.js";import"./useField-B_eNRLp8.js";import"./Form-CzcHO5Ii.js";import"./check-CQSibtrN.js";import"./useToggleState-CF21HXa8.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
