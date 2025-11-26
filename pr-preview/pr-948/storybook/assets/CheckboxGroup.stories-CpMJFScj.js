import{j as e}from"./iframe-RVXDGCzj.js";import{C as m}from"./CheckboxGroup-Cd_uwvu1.js";import{C as p}from"./Checkbox-Dqa69WVk.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B3uFZtah.js";import"./utils-iN7SzKyx.js";import"./clsx-B-dksMZM.js";import"./Text-oVUe24-Y.js";import"./useFocusRing-sIIsP_Ie.js";import"./index-DsyKD1zx.js";import"./index-BAD9ZDfl.js";import"./clsx-Ciqy0D92.js";import"./Text-D1N65mcs.js";import"./Label-CbDYaEQH.js";import"./Button-Cz75Jen_.js";import"./Hidden-Db8RCo9R.js";import"./useLabels-DJJVN5GP.js";import"./useButton-1XCOziGF.js";import"./Dialog-DK8R8GkW.js";import"./RSPContexts-etk9STJM.js";import"./OverlayArrow-BEq9RZQ3.js";import"./useResizeObserver-DyiWWdf7.js";import"./useControlledState-vlSlkaDy.js";import"./Collection-C6-3ofzd.js";import"./index-DOYYOpLU.js";import"./Separator-B2hbxYso.js";import"./SelectionManager-BBGUJ53z.js";import"./useEvent-Db1fO8KO.js";import"./scrollIntoView-CdSTv21u.js";import"./SelectionIndicator-4cNvUMKy.js";import"./useDescription-BCQ1k-43.js";import"./ListKeyboardDelegate-CQ9YG_C8.js";import"./PressResponder-CkndSrgy.js";import"./useLocalizedStringFormatter-BTQA-h52.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DamLJe1F.js";import"./VisuallyHidden-DItlx4KW.js";import"./Button-c186Iq00.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-HLcBV4V1.js";import"./createLucideIcon-BjtbSbwb.js";import"./x-DEX-rAzy.js";import"./Heading-HJFjTeVj.js";import"./info-Dvn-Fkiz.js";import"./Popover-D9vL0gRm.js";import"./useFormValidation-Boz_3mY-.js";import"./useField-CKy2iSil.js";import"./Form-BkuXHfCJ.js";import"./check-D1SyvPii.js";import"./useToggleState-CxlISJYg.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
