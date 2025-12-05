import{j as e}from"./iframe-DeX6EpxL.js";import{C as m}from"./CheckboxGroup-DLNmXNdu.js";import{C as p}from"./Checkbox-bZqzDRIL.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B8KPN--E.js";import"./utils-B8qVFtuz.js";import"./clsx-B-dksMZM.js";import"./Text-Cetjf3U1.js";import"./useFocusRing-DH9ib-kf.js";import"./index-D5ZgaJWR.js";import"./index-C6QFGyuX.js";import"./clsx-Ciqy0D92.js";import"./Text-C5yfOZoW.js";import"./Label-BmIepdQG.js";import"./Button-BNKSAgP5.js";import"./Hidden-aeqbWkpz.js";import"./useLabels-A2tn5MES.js";import"./useButton-DTuJAJ_o.js";import"./Dialog-D-6VLmIy.js";import"./RSPContexts-MsoIR9Qh.js";import"./OverlayArrow-DNqMZEqv.js";import"./useResizeObserver-BVcgbq7b.js";import"./useControlledState-DAFdnZtt.js";import"./Collection-C30HQDm4.js";import"./index-DFs4xHMU.js";import"./Separator-CA98yMHN.js";import"./SelectionManager-Dxc3F0U1.js";import"./useEvent-FAYQcFJB.js";import"./scrollIntoView-Cq0ZTZdI.js";import"./SelectionIndicator-DIDX2aEP.js";import"./useDescription-9WOSIwpZ.js";import"./ListKeyboardDelegate-D8r9iQMB.js";import"./PressResponder-Dw7wTIKm.js";import"./useLocalizedStringFormatter-EhR0ZRPf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-1BrtN0dn.js";import"./VisuallyHidden-B9DbwpXk.js";import"./Button-r9WGhIT_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Db_YVwzW.js";import"./createLucideIcon-CxcECL83.js";import"./x-C2jezQOt.js";import"./Heading-ClRgf0Ow.js";import"./info-CLPiYV-p.js";import"./Popover-DgQTHhWJ.js";import"./useFormValidation-Cx4G6YEU.js";import"./useField-CC1Eh5CN.js";import"./Form-B0WOKj-9.js";import"./check-BJ_JKPv0.js";import"./useToggleState-S7AAL5x_.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
