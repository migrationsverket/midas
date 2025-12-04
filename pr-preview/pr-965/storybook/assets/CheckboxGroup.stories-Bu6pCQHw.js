import{j as e}from"./iframe-B1XQ_l8d.js";import{C as m}from"./CheckboxGroup-CfrHsoPF.js";import{C as p}from"./Checkbox-DyNQBR-o.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-COBE7U4N.js";import"./utils-DPtwDUAf.js";import"./clsx-B-dksMZM.js";import"./Text-D_Txx_2-.js";import"./useFocusRing-DgKSykKC.js";import"./index-BZkYwFdY.js";import"./index-DmzzjCRS.js";import"./clsx-Ciqy0D92.js";import"./Text-BFkBeHhq.js";import"./Label-DAYQDGGE.js";import"./Button-6O4twiKj.js";import"./Hidden-BU4k3NAN.js";import"./useLabels-BAmMi-sg.js";import"./useButton-BsGmSg5A.js";import"./Dialog-Da60mu5A.js";import"./RSPContexts-DGbPHIgI.js";import"./OverlayArrow-B6LsV4qs.js";import"./useResizeObserver-BsXYq4Lo.js";import"./useControlledState-B22hZPAG.js";import"./Collection-DBgBwqbG.js";import"./index-CSbxgmJq.js";import"./Separator-B061JG6P.js";import"./SelectionManager-z2imyYhP.js";import"./useEvent-DY4S-wnp.js";import"./scrollIntoView-2fhJfOJs.js";import"./SelectionIndicator-BiqBgdF5.js";import"./useDescription-C_YDLdIX.js";import"./ListKeyboardDelegate-DNKS-2eF.js";import"./PressResponder-CcZU1l8G.js";import"./useLocalizedStringFormatter-DI9f3P1n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dx3G8DHG.js";import"./VisuallyHidden-C1ErRwO4.js";import"./Button-CRoKTtLi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-0R5Nhb.js";import"./createLucideIcon-DWbs9rHd.js";import"./x-Bd3RY7iS.js";import"./Heading-DCd0e_XD.js";import"./info-B5SwJYbV.js";import"./Popover-eUSo6RUY.js";import"./useFormValidation-D5VMdpzK.js";import"./useField-CeLgK-LB.js";import"./Form-BUqvWtF7.js";import"./check-DRYx_H74.js";import"./useToggleState-Dh5h9MUP.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
