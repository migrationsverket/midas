import{j as e}from"./iframe-NjzEciz2.js";import{C as m}from"./CheckboxGroup-DSqGzX2F.js";import{C as p}from"./Checkbox-BnfKowuU.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C8GxvgK1.js";import"./utils-BO22LAuU.js";import"./clsx-B-dksMZM.js";import"./Text-BMhjNDEU.js";import"./useFocusRing-pzFTAHVD.js";import"./index-JjVsGnxi.js";import"./index-BPnXoL28.js";import"./clsx-Ciqy0D92.js";import"./Text-DKwC3A1F.js";import"./Label-BEL1V2Zs.js";import"./Button-CtzhNdTl.js";import"./Hidden-C0J6_IGJ.js";import"./useLabels-zRKHb-LF.js";import"./useButton-Ca2UVS6J.js";import"./Dialog-BjLqyjRK.js";import"./RSPContexts-Ct4MhcNR.js";import"./OverlayArrow-BmDQ44gs.js";import"./useResizeObserver-CAx_rZrz.js";import"./useControlledState-DnclevfP.js";import"./Collection-CqkIhza4.js";import"./index-CTdlL6Pn.js";import"./Separator-B8MsEARJ.js";import"./SelectionManager-BxPU3mw2.js";import"./useEvent-GifwgeES.js";import"./scrollIntoView-CcG1gBOc.js";import"./SelectionIndicator-CIl18lf7.js";import"./useDescription-CunDP7hR.js";import"./ListKeyboardDelegate-B8LmX6q-.js";import"./PressResponder-TYf01ZVu.js";import"./useLocalizedStringFormatter-axeaHqCF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DS_CqlsL.js";import"./VisuallyHidden-0o86jBm3.js";import"./Button-BGeEKZH3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D0TL2D3I.js";import"./createLucideIcon-CQYq2UEE.js";import"./x-DJaQw8Gn.js";import"./Heading-CBj0diMM.js";import"./info-GyqFWXkf.js";import"./Popover-CWRwlPoj.js";import"./useFormValidation-Lb1IQGde.js";import"./useField-CJ6x7qGV.js";import"./Form-BX_pqHln.js";import"./check-1tn0yNrF.js";import"./useToggleState-DLIFoXR-.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
