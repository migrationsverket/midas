import{j as e}from"./iframe-B91-x9Zu.js";import{C as m}from"./CheckboxGroup-BUgYpw-A.js";import{C as p}from"./Checkbox-C5kj1QPd.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CWETj3Vl.js";import"./utils-BDq5TyEB.js";import"./clsx-B-dksMZM.js";import"./Text-BfJqqx0j.js";import"./useFocusRing-CVRmAsyH.js";import"./index-BXX4d8bD.js";import"./index-DN9ppUS7.js";import"./clsx-Ciqy0D92.js";import"./Text-Dax5tWzo.js";import"./Label-XXYib5Pf.js";import"./Button-DX88RyMP.js";import"./Hidden-BYWp7QJL.js";import"./useLabels-Dwk7hNIX.js";import"./useButton-DST6NVbU.js";import"./Dialog-BHcXoJaA.js";import"./RSPContexts-B5qBvukQ.js";import"./OverlayArrow-B3LgCbWf.js";import"./useResizeObserver-BzC1JvQl.js";import"./useControlledState-BrOLRbiU.js";import"./Collection-Db-WTB6b.js";import"./index-Dh1J3Jws.js";import"./Separator-B1ywj6iL.js";import"./SelectionManager-BuCjJjD3.js";import"./useEvent-CZcdSbJd.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C7VGJBNi.js";import"./useDescription-C659JRkX.js";import"./ListKeyboardDelegate-wp5rssSn.js";import"./PressResponder-BUy7-lee.js";import"./useLocalizedStringFormatter-tMYY7oTH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BSd-_azi.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-rbN5cvZ7.js";import"./Button-BHZ4Xr_y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C0-nSA3b.js";import"./createLucideIcon-BFyGBevv.js";import"./x-CKESvSm0.js";import"./Heading-B_bc6UXm.js";import"./info-DVS-AOjB.js";import"./Popover-DQtrO59A.js";import"./useFormValidation-B6kHCZJ0.js";import"./useField-DuGzXB7t.js";import"./Form-BZn8tv4U.js";import"./check-B7cU0C6y.js";import"./useToggleState-CyzMbEPn.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const pr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,pr as __namedExportsOrder,nr as default};
