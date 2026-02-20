import{j as e}from"./iframe-C97-KldL.js";import{C as m}from"./CheckboxGroup-gjmwc_6R.js";import{C as p}from"./Checkbox-Cv7tJ66E.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CzHY_m0E.js";import"./utils-CT49lX3Q.js";import"./clsx-B-dksMZM.js";import"./Text-BWtrJhgb.js";import"./useFocusRing-BaDVQaIN.js";import"./index-C9-aWDE9.js";import"./index-DcQl-zHv.js";import"./clsx-Ciqy0D92.js";import"./Text-kfKvhgrO.js";import"./Label-DgxvWV7H.js";import"./Button-By32KbkP.js";import"./Hidden-Cns8g0IT.js";import"./useLabels-DbdYa4IU.js";import"./useButton-C3jqDXTt.js";import"./Dialog-DD8Nc2dh.js";import"./RSPContexts-CVaQzuT2.js";import"./OverlayArrow-BD4eRlxk.js";import"./useResizeObserver-C9RsjVbx.js";import"./useControlledState-BASohq_6.js";import"./Collection-HncGmFQp.js";import"./index-QjpHXcWP.js";import"./Separator-6HTi-cQh.js";import"./SelectionManager-CW0pq1_s.js";import"./useEvent-CjzdKbLS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CeibBvL7.js";import"./useDescription-B32pZrdJ.js";import"./ListKeyboardDelegate-DOWibJoJ.js";import"./PressResponder-BbrzfePp.js";import"./useLocalizedStringFormatter-CDO2zV2D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D8bZ8BQ0.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-cBRDBRce.js";import"./Button-TcfJGFPW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CWWYhU2v.js";import"./createLucideIcon-DyW2bSMY.js";import"./x-Cjd9f1_p.js";import"./Heading-CekMixw3.js";import"./info-Btx1Cq6B.js";import"./Popover-BqoLnGke.js";import"./useFormValidation-CPmiIrH4.js";import"./useField-VNtVV8X6.js";import"./Form-Dg1us4eS.js";import"./check-CgtpV47X.js";import"./useToggleState-CaIpr3x1.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
