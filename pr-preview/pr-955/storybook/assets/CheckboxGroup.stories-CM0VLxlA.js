import{j as e}from"./iframe-DOTz5vLQ.js";import{C as m}from"./CheckboxGroup-BmyB231L.js";import{C as p}from"./Checkbox-CNWqDLfT.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ja_Ote2y.js";import"./utils-DXAj4U2V.js";import"./clsx-B-dksMZM.js";import"./Text-CjdyZ5QW.js";import"./useFocusRing-q_YwuAcy.js";import"./index-nlddG7ZQ.js";import"./index-owQEYkmE.js";import"./clsx-Ciqy0D92.js";import"./Text-DrWNBvy9.js";import"./Label-Cog6QTTi.js";import"./Button-DIeU5GkG.js";import"./Hidden-BGFB1vfR.js";import"./useLabels-884FkDRT.js";import"./useButton-DTRH3a68.js";import"./Dialog-C78GsjfW.js";import"./RSPContexts-yjaANf4K.js";import"./OverlayArrow-DkSvYScg.js";import"./useResizeObserver-e8Z3Dgzx.js";import"./useControlledState-_AKX2YUw.js";import"./Collection-CtXmJOQn.js";import"./index-DiTbGSG6.js";import"./Separator-C_ECwe9c.js";import"./SelectionManager-CUeLG0jH.js";import"./useEvent-CPymZ_91.js";import"./scrollIntoView-DX3Zfy83.js";import"./SelectionIndicator-B2UAVmil.js";import"./useDescription-CIj0AxHV.js";import"./ListKeyboardDelegate-Cg1KrN-g.js";import"./PressResponder-Dl2zQSi2.js";import"./useLocalizedStringFormatter-Bhl8mpnd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C__SYK6q.js";import"./VisuallyHidden-CKFFXczS.js";import"./Button-BI9bImZc.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DemG_s2c.js";import"./createLucideIcon-0SbUiGqR.js";import"./x-DEYmj3es.js";import"./Heading-NV9ut5Xx.js";import"./info-DyVhyr_S.js";import"./Popover-DRG_lf-T.js";import"./useFormValidation-DHmiRRIw.js";import"./useField-UT8FVghx.js";import"./Form-7pjFp-vR.js";import"./check-CykrXHln.js";import"./useToggleState-VnKBVkvq.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
