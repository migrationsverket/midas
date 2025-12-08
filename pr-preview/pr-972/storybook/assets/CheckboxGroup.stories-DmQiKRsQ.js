import{j as e}from"./iframe-BtnDiUeo.js";import{C as m}from"./CheckboxGroup-Cd2kWRd-.js";import{C as p}from"./Checkbox-D8tT4YDm.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BwMKPYqO.js";import"./utils-6t5S5iG-.js";import"./clsx-B-dksMZM.js";import"./Text-BHP3jDdS.js";import"./useFocusRing-CeaXn4pv.js";import"./index-DNj_r2ie.js";import"./index-CMMeM23Q.js";import"./clsx-Ciqy0D92.js";import"./Text-5ETkJBTM.js";import"./Label-C1by7kx7.js";import"./Button-C4A3JbkV.js";import"./Hidden-SeEFEyCD.js";import"./useLabels-L9u9tUn5.js";import"./useButton-Dj3Yiida.js";import"./Dialog-BlQvHMfi.js";import"./RSPContexts-DIOS6Ojx.js";import"./OverlayArrow-Dyw6ueAU.js";import"./useResizeObserver-IKiumAb0.js";import"./useControlledState-BMBk6NmG.js";import"./Collection-Bs_M3g-9.js";import"./index-D8rcrMqJ.js";import"./Separator-CJlTHlzH.js";import"./SelectionManager-BoO8dgsX.js";import"./useEvent--JaFozHk.js";import"./scrollIntoView-BzmlEbl8.js";import"./SelectionIndicator-rrxign9m.js";import"./useDescription-BYAmENSk.js";import"./ListKeyboardDelegate-ClLuk8-x.js";import"./PressResponder-CLcoXyel.js";import"./useLocalizedStringFormatter-BfXnVgGt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DJqeFeZI.js";import"./VisuallyHidden-DyHyzLz4.js";import"./Button-COsxIDgV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-6oMJ6jzu.js";import"./createLucideIcon-Cyxnybqj.js";import"./x-D8AFAqJa.js";import"./Heading-Dld2UxcG.js";import"./info-CqikwjWj.js";import"./Popover-DAHUnuwF.js";import"./useFormValidation-QJMhqtMl.js";import"./useField-Cbo48EzZ.js";import"./Form-DhyVklo3.js";import"./check-Bt5O6WbP.js";import"./useToggleState-Ayr1wJoP.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
