import{j as e}from"./iframe-D49zqrLc.js";import{C as m}from"./CheckboxGroup-D3Dsgtgt.js";import{C as p}from"./Checkbox-0LpK-5l1.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CNr2Wry7.js";import"./utils-DdKwVxXO.js";import"./clsx-B-dksMZM.js";import"./Text-gxnzhlQB.js";import"./useFocusRing--JbYat2w.js";import"./index-CIcuBPP4.js";import"./index-Gblu_uca.js";import"./clsx-Ciqy0D92.js";import"./Text-BHKGtyr7.js";import"./Label-CmFZQvGJ.js";import"./Button-J3Iz-Is0.js";import"./Hidden-BxWMNY2q.js";import"./useLabel-DknYPbVU.js";import"./useLabels-CkRRpiK4.js";import"./useButton-CxrKCV_E.js";import"./Dialog-DYguNK-1.js";import"./RSPContexts-BB17GfA4.js";import"./OverlayArrow-YRNDl_Wq.js";import"./useResizeObserver-64wSONLm.js";import"./useControlledState-DfjmYRRj.js";import"./Collection-CzY8nsaY.js";import"./index-Djqzw61o.js";import"./Separator-CFWN8q7z.js";import"./SelectionManager-BmBUzZWk.js";import"./useEvent-BNdUgJ17.js";import"./scrollIntoView-vmM-KOvz.js";import"./SelectionIndicator-B6VviSvn.js";import"./useDescription-2_Msdgp6.js";import"./ListKeyboardDelegate-B6Q_xrg3.js";import"./PressResponder-DaHVHwXx.js";import"./useLocalizedStringFormatter-CsaBVSjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BSR9xidZ.js";import"./getScrollParent-ailHkxD7.js";import"./VisuallyHidden-BCA1C0LI.js";import"./ModalOverlay-DUYQFCIC.js";import"./x-DZqz0o0J.js";import"./createLucideIcon-DrHl8fY3.js";import"./useLocalizedStringFormatter-D9dAP4k5.js";import"./Heading-DQ6cPxlP.js";import"./Button-CsehA-0Y.js";import"./Button.module-BB7N-cLd.js";import"./info-Dwrij3Ao.js";import"./Popover-B6RfJOw0.js";import"./Form-CGqphfov.js";import"./useField-boYe1x_I.js";import"./check-DpJGA4u9.js";import"./useToggleState-CDOOjpQY.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
