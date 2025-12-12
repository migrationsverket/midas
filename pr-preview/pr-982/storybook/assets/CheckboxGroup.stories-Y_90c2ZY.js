import{j as e}from"./iframe-B9CbKHGE.js";import{C as m}from"./CheckboxGroup-hJcI7ztr.js";import{C as p}from"./Checkbox-5nx056uA.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-tIBg00I2.js";import"./utils-K9L8fRbA.js";import"./clsx-B-dksMZM.js";import"./Text-1lqNbJaj.js";import"./useFocusRing-CBu2b3uq.js";import"./index-D5s799IP.js";import"./index-3OBlmlSu.js";import"./clsx-Ciqy0D92.js";import"./Text-BZziZ39V.js";import"./Label-B2TeSV_p.js";import"./Button-tz7DeUoI.js";import"./Hidden-ClX2UHum.js";import"./useLabels-WgVeJXWf.js";import"./useButton-VOsfFyV1.js";import"./Dialog-CtkfSJgz.js";import"./RSPContexts-C_bYlfwA.js";import"./OverlayArrow-DnhpOxYk.js";import"./useResizeObserver-CRIj59KN.js";import"./useControlledState-ByniTdhP.js";import"./Collection-CKlSOxAk.js";import"./index-BXnj0pZ5.js";import"./Separator-C9R6bF17.js";import"./SelectionManager-CqkhLmHM.js";import"./useEvent-Cj0fD01V.js";import"./scrollIntoView-BJ8zIGQv.js";import"./SelectionIndicator-k-SlACUX.js";import"./useDescription-luHQMLQs.js";import"./ListKeyboardDelegate-D5tzRl9o.js";import"./PressResponder-i6iRJ9C6.js";import"./useLocalizedStringFormatter-BWhJ6dKt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-yUahS7B2.js";import"./VisuallyHidden-aiSUNim6.js";import"./Button-Duhp4qTZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C2z6zT5P.js";import"./createLucideIcon-u9SLDbD-.js";import"./x-BS3x57LM.js";import"./Heading-r_lpbDZf.js";import"./info-C2p69GbS.js";import"./Popover-Buz17FI6.js";import"./useFormValidation-zEqpMN5l.js";import"./useField-BgOS_xhN.js";import"./Form-D59BYR8L.js";import"./check-D0jaqNYZ.js";import"./useToggleState-HwRmnfTO.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
