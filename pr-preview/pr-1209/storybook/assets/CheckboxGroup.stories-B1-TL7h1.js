import{j as e}from"./iframe-CEYCzj7u.js";import{C as m}from"./CheckboxGroup-COgQBArE.js";import{C as p}from"./Checkbox-DfzB48nQ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BW7B152f.js";import"./utils-AQIE0kDv.js";import"./clsx-B-dksMZM.js";import"./Text-BtotI6hp.js";import"./useFocusRing-Dp-W9h8R.js";import"./index-BT04Vy5P.js";import"./index-BaKsLBWM.js";import"./clsx-Ciqy0D92.js";import"./Text-BKjU8N6L.js";import"./Label-CWkCAxQ5.js";import"./Button-C7JuJvDF.js";import"./Hidden-BwxAj0d8.js";import"./useLabel-BMWHmK7D.js";import"./useLabels-BdGOjTVQ.js";import"./useButton-15OKOO7P.js";import"./Dialog-__ogyhBQ.js";import"./RSPContexts-vK1IDStc.js";import"./OverlayArrow-CryUpgVZ.js";import"./useResizeObserver-ByR6jXTM.js";import"./useControlledState-BgNKedVs.js";import"./Collection-C16s-VZy.js";import"./index-BY5MwQGH.js";import"./Separator-iR4yv8Ww.js";import"./SelectionManager-G6B6xgaW.js";import"./useEvent-B9xcl8_k.js";import"./scrollIntoView-BCOX-ymx.js";import"./SelectionIndicator-6aWYUD_t.js";import"./useDescription-7tiDq9ws.js";import"./ListKeyboardDelegate-BNrqLeaN.js";import"./PressResponder-Daz5dWoT.js";import"./useLocalizedStringFormatter-DsBO9UZN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-rud58Vjt.js";import"./getScrollParent-DNFkay4Z.js";import"./VisuallyHidden-B3AOW4Om.js";import"./Dialog-9iEeQYdN.js";import"./x-ubboyZZG.js";import"./createLucideIcon-Djfjk74V.js";import"./useLocalizedStringFormatter-B6vMXcu5.js";import"./Heading-BRZF6O29.js";import"./Button-DjNzlNeH.js";import"./Button.module-BB7N-cLd.js";import"./info-C8moI5QB.js";import"./Popover-CSxEPm7k.js";import"./Form-C-hDIK2G.js";import"./useField-hWGv7I8v.js";import"./check-BUrzU88v.js";import"./useToggleState-Dj2ZB4Qc.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
