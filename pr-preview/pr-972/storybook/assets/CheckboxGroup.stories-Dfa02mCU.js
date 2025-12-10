import{j as e}from"./iframe-Ix5wRpaN.js";import{C as m}from"./CheckboxGroup-Co_jRoHg.js";import{C as p}from"./Checkbox-VwyflN9A.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BZLcbguk.js";import"./utils-IjPZU40W.js";import"./clsx-B-dksMZM.js";import"./Text-C--26gLT.js";import"./useFocusRing-DQ3B9kj8.js";import"./index-BxboPkxI.js";import"./index-DhXNeZr5.js";import"./clsx-Ciqy0D92.js";import"./Text-B11VOrpZ.js";import"./Label-Dd2bwAtp.js";import"./Button-BM7g1M5L.js";import"./Hidden-CNH6e1Wd.js";import"./useLabels-Duwc-TYD.js";import"./useButton-Bj416gmr.js";import"./Dialog-BceAbOhC.js";import"./RSPContexts-Ci7SZAye.js";import"./OverlayArrow-D1gyUw3-.js";import"./useResizeObserver-CacsnmkD.js";import"./useControlledState-B8ejMBKU.js";import"./Collection-DFIlvKZ4.js";import"./index-PxkW4WaJ.js";import"./Separator-D1k2Ughs.js";import"./SelectionManager-D36DbuXR.js";import"./useEvent-CMFoSART.js";import"./scrollIntoView-Dghqke3L.js";import"./SelectionIndicator-D_ktuef1.js";import"./useDescription-TqfBx-LN.js";import"./ListKeyboardDelegate-DadYOWPa.js";import"./PressResponder-Blt_lbk5.js";import"./useLocalizedStringFormatter-D-Y0AvCi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DvjOSPHQ.js";import"./VisuallyHidden-CXRQ0hU3.js";import"./Button-DyCCzjyo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DOQfTjJs.js";import"./createLucideIcon-YU44cn6f.js";import"./x-yWcNl91_.js";import"./Heading-DOXf98rg.js";import"./info-BCe1ZKXO.js";import"./Popover-EocjC30m.js";import"./useFormValidation-BLyauN7P.js";import"./useField-B4LhRUUT.js";import"./Form-MH6ftdwr.js";import"./check-DmtMbila.js";import"./useToggleState-BxGrggBd.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
