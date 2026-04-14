import{j as e}from"./iframe-BBl_wx91.js";import{C as m}from"./CheckboxGroup-DpPgK41D.js";import{C as p}from"./Checkbox-jdXdNo5i.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BhvtU_6s.js";import"./utils-D68juJtw.js";import"./clsx-B-dksMZM.js";import"./Text-D6DSOlat.js";import"./useFocusRing-BjKrvikX.js";import"./index-CTqkaM45.js";import"./index-CMA0QeJ6.js";import"./clsx-Ciqy0D92.js";import"./Text-B468MR_I.js";import"./Label-BiTv70X7.js";import"./Button-FXCxhgQI.js";import"./Hidden-D6G0FIbn.js";import"./useLabel-BOj_yASA.js";import"./useLabels-D9SZevKG.js";import"./useButton-EvSX0Y-8.js";import"./Dialog-DqaCpo8I.js";import"./RSPContexts-bPv5UHdE.js";import"./OverlayArrow-DJjDfgrZ.js";import"./useResizeObserver-DKCS7TjC.js";import"./useControlledState-D0NTyUH5.js";import"./Collection-CU5inBmJ.js";import"./index-BD391r5V.js";import"./Separator-ByY0jnmU.js";import"./SelectionManager-BGPOJJil.js";import"./useEvent-BIKoKN_5.js";import"./scrollIntoView-dyHX5qbm.js";import"./SelectionIndicator-CUdOswRI.js";import"./useDescription-0arSrRQM.js";import"./ListKeyboardDelegate-Btbe9yI3.js";import"./PressResponder-CuB0_zBy.js";import"./useLocalizedStringFormatter-RNUbG8Ti.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BRnqSuLj.js";import"./getScrollParent-y3ebv2is.js";import"./VisuallyHidden-DEPyp4m6.js";import"./Modal-Cl5O3PFr.js";import"./x-BiTKY_Ox.js";import"./createLucideIcon-ie2vk2qe.js";import"./useLocalizedStringFormatter-2_5hwCHH.js";import"./Heading-DDSTrqIv.js";import"./Button-PgTnRDDW.js";import"./Button.module-BB7N-cLd.js";import"./info-N68afkB-.js";import"./Popover-BarHgFC3.js";import"./Form-CNs6Bg3-.js";import"./useField-BFtz0bj4.js";import"./check-CS_JGrF7.js";import"./useToggleState-BE-xLllf.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
