import{j as e}from"./iframe-CuNlhVbe.js";import{C as m}from"./CheckboxGroup-CSUyO8Zw.js";import{C as p}from"./Checkbox-D6zlf8Zu.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CTY2IPpm.js";import"./utils-B8NVfSfe.js";import"./clsx-B-dksMZM.js";import"./Text-D8GREq1L.js";import"./useFocusRing-wXiAEqmT.js";import"./index-DV8HCzUV.js";import"./index-CXWed7tA.js";import"./clsx-Ciqy0D92.js";import"./Text-BvIukjwj.js";import"./Label-DYuz32Xs.js";import"./Button-DiUERCEo.js";import"./Hidden-l86ZZb_o.js";import"./useLabels-vXYiQgPh.js";import"./useButton-MVrmgZI_.js";import"./Dialog-BP9fK9Th.js";import"./RSPContexts-CXRqJ3P2.js";import"./OverlayArrow-Ck1uu4bl.js";import"./useResizeObserver-BIwXZ-he.js";import"./useControlledState-5ENUpcQW.js";import"./Collection-CvfN2Hbs.js";import"./index-BKnCBsAx.js";import"./Separator-BS3j5Nj5.js";import"./SelectionManager-DAUP0ih6.js";import"./useEvent-BrBR3UbR.js";import"./scrollIntoView-DRGTjY3J.js";import"./SelectionIndicator-tZPo14fy.js";import"./useDescription-DkbdkEhe.js";import"./ListKeyboardDelegate-C4GDJ1UQ.js";import"./PressResponder-EG-aYIps.js";import"./useLocalizedStringFormatter-DYbPbioc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BslocY4m.js";import"./VisuallyHidden-Ba3tVXVU.js";import"./useLocalizedStringFormatter-DWEhKcFp.js";import"./Button-g0PWpBa7.js";import"./Button.module-CtQ1deO8.js";import"./x-CccK87QT.js";import"./createLucideIcon-TK9FCAYu.js";import"./Heading-CZW8hNx0.js";import"./info-DNyTsDWA.js";import"./Popover-DWt2hNt5.js";import"./useFormValidation-DVvRwfTA.js";import"./useField-D6kOKrFi.js";import"./Form-DVXNxj7c.js";import"./check-BrQDXzqa.js";import"./useToggleState-BrlG8fsN.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
