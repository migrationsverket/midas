import{j as e}from"./iframe-CMUT-aY9.js";import{C as m}from"./CheckboxGroup-BsbmTzFO.js";import{C as p}from"./Checkbox-DlKg8AAH.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BcWgF-Sz.js";import"./utils-x-Fz6ypf.js";import"./clsx-B-dksMZM.js";import"./Text-BjIPArye.js";import"./useFocusRing-D378a6oQ.js";import"./index-j8YavyCt.js";import"./index-CqplKhbN.js";import"./clsx-Ciqy0D92.js";import"./Text-CdDgL-we.js";import"./Label-qVtS0eav.js";import"./Button-CgVVJh0n.js";import"./Hidden-BmEcMQf3.js";import"./useLabel-D7aQ5vjs.js";import"./useLabels-DlsJNfJR.js";import"./useButton-PZHXztAT.js";import"./Dialog-BWo9KHc3.js";import"./RSPContexts-CAfUuHUZ.js";import"./OverlayArrow--ZC8Uo7u.js";import"./useResizeObserver-CEERAmrN.js";import"./useControlledState-BVAe2WbZ.js";import"./Collection-DACuoUr3.js";import"./index-BEes7jX8.js";import"./Separator-BjTPBP6R.js";import"./SelectionManager-EkeIU2ti.js";import"./useEvent-Bali3OPG.js";import"./scrollIntoView-Dk0hb8O6.js";import"./SelectionIndicator-PFHf5Vkm.js";import"./useDescription-BGt3XOT5.js";import"./ListKeyboardDelegate-FyBaGESI.js";import"./PressResponder-B1vSOFem.js";import"./useLocalizedStringFormatter-CTG8JuvI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CmuUCG3g.js";import"./getScrollParent-BxpbEdf1.js";import"./VisuallyHidden-CLkRcp8r.js";import"./ModalOverlay-CS1F3Ybv.js";import"./x-DhHcyfDV.js";import"./createLucideIcon-B4JXtaTl.js";import"./useLocalizedStringFormatter-BhfoWyv5.js";import"./Heading-ZZ174H7o.js";import"./Button-BLzEeOtL.js";import"./Button.module-BB7N-cLd.js";import"./info-CFK0X6M7.js";import"./Popover-CerYyklQ.js";import"./Form-DgYdTUS7.js";import"./useField-C0qHtOlI.js";import"./check-ByzbSqt0.js";import"./useToggleState-DTKp7Mnk.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
