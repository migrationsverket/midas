import{j as e}from"./iframe-BkRwSuoF.js";import{C as m}from"./CheckboxGroup-CkJCDxLj.js";import{C as p}from"./Checkbox-HGBUWKbL.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-dJdm6PvZ.js";import"./utils-BdDw6N01.js";import"./clsx-B-dksMZM.js";import"./Text-jotSgVSv.js";import"./useFocusRing-B3CGeMvZ.js";import"./index-CCvpWvoT.js";import"./index-Dldu1ldC.js";import"./clsx-Ciqy0D92.js";import"./Text-gdxh6ZQb.js";import"./Label-D0k0Szph.js";import"./Button-CO79J77U.js";import"./Hidden-C-1m_lMC.js";import"./useLabels--gJ5LkCh.js";import"./useButton-CswrRlr6.js";import"./Dialog-gbv4WXg5.js";import"./RSPContexts-B3MVorUA.js";import"./OverlayArrow-Cp57ejBN.js";import"./useResizeObserver-yTt8U_gJ.js";import"./useControlledState-v9DI2Sbw.js";import"./Collection-BDg-oKXI.js";import"./index-DXImVbQC.js";import"./Separator-Y3kzNyzs.js";import"./SelectionManager-CmDhkmt5.js";import"./useEvent-FTwQNHvp.js";import"./scrollIntoView-O2aOyMO3.js";import"./SelectionIndicator-B_q3NmJe.js";import"./useDescription-EQv126BS.js";import"./ListKeyboardDelegate-B9onWOf6.js";import"./PressResponder-CxcA2ZlI.js";import"./useLocalizedStringFormatter-Cwp5Qrc1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DA13BLUh.js";import"./VisuallyHidden-Dh5oNNi1.js";import"./useLocalizedStringFormatter-CsTWeR-2.js";import"./Button-Og-jXPv3.js";import"./Button.module-CtQ1deO8.js";import"./x-CvWV-YFY.js";import"./createLucideIcon-CDTY4y58.js";import"./Heading-C09GpJqN.js";import"./info-9I298WH0.js";import"./Popover-7GaU8Vrs.js";import"./useFormValidation-CyIPY_c0.js";import"./useField-B5j2ehat.js";import"./Form-DOOHuSw0.js";import"./check-jFoQUBBD.js";import"./useToggleState-CrG7TLLq.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
