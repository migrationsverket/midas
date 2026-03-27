import{j as e}from"./iframe-BbWt9Hzs.js";import{C as m}from"./CheckboxGroup-DXGbmWnk.js";import{C as p}from"./Checkbox-CZiIAM3F.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BzVhs6Ln.js";import"./utils-KZAH4xlx.js";import"./clsx-B-dksMZM.js";import"./Text-DSe1JSn0.js";import"./useFocusRing-B9bvRRmX.js";import"./index-DFc29hw1.js";import"./index-62xMHUAX.js";import"./clsx-Ciqy0D92.js";import"./Text-DLXHrpA7.js";import"./Label-B6p5xA93.js";import"./Button-EJIqjvoq.js";import"./Hidden-BJHG9IZy.js";import"./useLabel-Dajww4Y_.js";import"./useLabels-B8_jQ6mB.js";import"./useButton-B5rDFFBS.js";import"./Dialog-qoK3N-47.js";import"./RSPContexts-DKdTaTdn.js";import"./OverlayArrow-DcIVYDg9.js";import"./useResizeObserver-JKJl_Uvw.js";import"./useControlledState-DkbXJDJp.js";import"./Collection-C7TRCN5d.js";import"./index-Q9j86bkX.js";import"./Separator-CFIcuUKM.js";import"./SelectionManager-DCnzOW-V.js";import"./useEvent-ngzT0EBz.js";import"./scrollIntoView-CPHUDPPP.js";import"./SelectionIndicator-CvTQi0Y7.js";import"./useDescription-B5vJv64Z.js";import"./ListKeyboardDelegate-4yWuaQa1.js";import"./PressResponder-8RdqCcbY.js";import"./useLocalizedStringFormatter-Dq1sm40s.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmyT2C_U.js";import"./getScrollParent-D7jC5O_o.js";import"./VisuallyHidden-zJEwCiu7.js";import"./x-B6r1o7zQ.js";import"./createLucideIcon-BJCyfpuO.js";import"./useLocalizedStringFormatter-Cp8lRc68.js";import"./Heading-BkvoezUL.js";import"./Button-C0W8ghEp.js";import"./Button.module-BB7N-cLd.js";import"./info-CCoAnChM.js";import"./Popover-BjQFNEL9.js";import"./Form-D6MDpADX.js";import"./useField-Cv-osmis.js";import"./check-CaqSTZW2.js";import"./useToggleState-B7UuUpX8.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
