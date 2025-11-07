import{j as e}from"./iframe-vLU3ZPRp.js";import{C as m}from"./CheckboxGroup-BIaqzqwT.js";import{C as p}from"./Checkbox-NKrdEVm7.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-CZDoRijc.js";import"./utils-DhZrwm_O.js";import"./clsx-B-dksMZM.js";import"./Text-DgAlTZx7.js";import"./useFocusRing-Bdvv7-N7.js";import"./index-CXkLaqV8.js";import"./index-C_9Z2w_o.js";import"./clsx-Ciqy0D92.js";import"./Text-UPxG90YY.js";import"./Label-R2pEW1LM.js";import"./Button-BF62bU3H.js";import"./Hidden-C166yhsD.js";import"./useLabels-B_0ZYLKk.js";import"./useButton-CfBERvKC.js";import"./Dialog-BuZhltq5.js";import"./RSPContexts-BS1cdOyd.js";import"./OverlayArrow-C-yL7sPo.js";import"./useResizeObserver-DmXYvbaS.js";import"./useControlledState-ByKlwbeC.js";import"./Collection-DO8TRGiW.js";import"./index-D58s7j-H.js";import"./Separator-B2YyqXQa.js";import"./SelectionManager-CTWRohwL.js";import"./useEvent-ZlU3Op1V.js";import"./scrollIntoView-UL_UlPGj.js";import"./SelectionIndicator-VE6ykz3Z.js";import"./useDescription-B4pCu2h-.js";import"./ListKeyboardDelegate-DCHQ648Q.js";import"./PressResponder-DWXdSolz.js";import"./useLocalizedStringFormatter-ClxqUl6z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dxr_1uQG.js";import"./VisuallyHidden-CvXWxHoJ.js";import"./useLocalizedStringFormatter-BSTjQpQD.js";import"./Button-CXmMlpXW.js";import"./Button.module-CtQ1deO8.js";import"./x-QToY_gZ3.js";import"./createLucideIcon-B9fGN9f3.js";import"./Heading-DeYZrO0r.js";import"./info-US0D_dQ2.js";import"./Popover-DWcbD6Vl.js";import"./useFormValidation-Ce41O5Wr.js";import"./useField-BkORJVKr.js";import"./Form-D6RSHhfX.js";import"./check-HeECI0Id.js";import"./useToggleState-BtClvwNX.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
