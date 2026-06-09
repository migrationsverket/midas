import{j as e}from"./iframe-BONLLpOF.js";import{C as m}from"./CheckboxGroup-DFpKpHcm.js";import{C as p}from"./Checkbox-Bb6d6J24.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D2jIpheU.js";import"./utils-C9VmisX4.js";import"./clsx-B-dksMZM.js";import"./Text-CYi48kKA.js";import"./useFocusRing-DKupva6E.js";import"./index-CxKo4ITi.js";import"./index-AexxYhB1.js";import"./clsx-Ciqy0D92.js";import"./Text-Cs-XgrOp.js";import"./Label-CJ8rhz5G.js";import"./Button-2Duwp_Ic.js";import"./Hidden-DEirP3-u.js";import"./useLabel-Q48Rkvkt.js";import"./useLabels-Bh7NN-Ow.js";import"./useButton-hyzNfx3L.js";import"./Dialog-BZzLBxOh.js";import"./RSPContexts-DjgvGlJ6.js";import"./OverlayArrow-DSBWh69a.js";import"./useResizeObserver-4MMtw46c.js";import"./useControlledState-f1OgfOOU.js";import"./Collection-CyJQtxg_.js";import"./index-B047Z5Cb.js";import"./Separator-M5_WXlgZ.js";import"./SelectionManager-BFJf1PXq.js";import"./useEvent-BT5XuWp7.js";import"./scrollIntoView-BwrYAJjM.js";import"./SelectionIndicator-BstBVfA8.js";import"./useDescription-xh0FTpCi.js";import"./ListKeyboardDelegate-CIuiaVcB.js";import"./PressResponder-wZdbtsyo.js";import"./useLocalizedStringFormatter-Bxafu6ud.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CYswFIpa.js";import"./getScrollParent-BgLE-lAx.js";import"./VisuallyHidden-DGoVngfB.js";import"./ModalOverlay-D9rAW2Vi.js";import"./x-SVOUpjtq.js";import"./createLucideIcon-Dg8jUY-5.js";import"./useLocalizedStringFormatter-BxhbuX7R.js";import"./Heading-DVfrHjdW.js";import"./Button-BxdtuMNq.js";import"./Button.module-BB7N-cLd.js";import"./info-DA_9knQq.js";import"./Popover-CyEU9pzm.js";import"./Form-ITn35OXk.js";import"./useField-D7lpa4Ef.js";import"./check-DukayblC.js";import"./useToggleState-ByAKyZAC.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
