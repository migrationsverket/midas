import{j as e}from"./iframe-DZEIteCN.js";import{C as m}from"./CheckboxGroup-B_awZtUH.js";import{C as p}from"./Checkbox-Byw02ppb.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ChK9olYH.js";import"./utils-eXp6hAHi.js";import"./clsx-B-dksMZM.js";import"./Text-Cc24C9N6.js";import"./useFocusRing-TrwNJxcu.js";import"./index-DKBVfWmd.js";import"./index-hdIbQAxi.js";import"./clsx-Ciqy0D92.js";import"./Text-DBxfC0s8.js";import"./Label-ClH6DcdC.js";import"./Button-DNUZR8YI.js";import"./Hidden-GV6GWw5Y.js";import"./useLabels-jjULFaK5.js";import"./useButton-BciHUgcd.js";import"./Dialog-C2lqbijt.js";import"./RSPContexts-BY213k3w.js";import"./OverlayArrow-B-1TW-rO.js";import"./useResizeObserver-CQg9Zy5h.js";import"./useControlledState-BuIMy712.js";import"./Collection-DX2AptDc.js";import"./index-DttypQS5.js";import"./Separator-CCtYyU8S.js";import"./SelectionManager-BONroPUw.js";import"./useEvent-UJPseaF2.js";import"./scrollIntoView-CNZ7FSWt.js";import"./SelectionIndicator-CIU88Fcj.js";import"./useDescription-sB8LMHwe.js";import"./ListKeyboardDelegate-C7-VKLYg.js";import"./PressResponder-BQ4aD7hz.js";import"./useLocalizedStringFormatter-D6LBwpE0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Cr6boEsG.js";import"./VisuallyHidden-CPxzvlXi.js";import"./useLocalizedStringFormatter-CfhNe-rq.js";import"./Button-CX_w9LKp.js";import"./Button.module-CtQ1deO8.js";import"./x-Cku9hc0_.js";import"./createLucideIcon-8k5sNgIw.js";import"./Heading-Cho1JDkX.js";import"./info-CKd3BTFv.js";import"./Popover-DhKC5VXQ.js";import"./useFormValidation-WsqUix1q.js";import"./useField-VRRBZlgt.js";import"./Form-CYimGHgO.js";import"./check-CkcPuQck.js";import"./useToggleState-BFI9IQ7d.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
