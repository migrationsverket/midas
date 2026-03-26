import{j as e}from"./iframe-CmC6_uFn.js";import{C as m}from"./CheckboxGroup-BQZbfO0m.js";import{C as p}from"./Checkbox-m73NCz3U.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B-ZQXEeM.js";import"./utils-DpIGtToL.js";import"./clsx-B-dksMZM.js";import"./Text-bLb0hYqG.js";import"./useFocusRing-CnXjVSj9.js";import"./index-_SptB5IF.js";import"./index-Cq0yuKyu.js";import"./clsx-Ciqy0D92.js";import"./Text-ChJGU_Xm.js";import"./Label-B4OX4ojE.js";import"./Button-BfXSwHW0.js";import"./Hidden-Ci7T1bEi.js";import"./useLabel-CZd2jY9k.js";import"./useLabels-CAk5ShxF.js";import"./useButton-Dc8urwoW.js";import"./Dialog-D3ALXbDh.js";import"./RSPContexts-CHkHxhdH.js";import"./OverlayArrow-B_8GOhMN.js";import"./useResizeObserver-5PwYRlCJ.js";import"./useControlledState-x3Q8v9NC.js";import"./Collection-BGZfaZNZ.js";import"./index-FxwiPwmA.js";import"./Separator-j7qf1phg.js";import"./SelectionManager-0Zrx2NaO.js";import"./useEvent-lwkuKQG3.js";import"./scrollIntoView-AobHmSLH.js";import"./SelectionIndicator-C_ejA7zF.js";import"./useDescription-BV7Lh5gS.js";import"./ListKeyboardDelegate-C47es2n9.js";import"./PressResponder-CgjGrZSG.js";import"./useLocalizedStringFormatter-fVU3OA8S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ccbo1JNi.js";import"./getScrollParent-TKe_y_ar.js";import"./VisuallyHidden-DhqoAnIr.js";import"./x-BfnY6ZJn.js";import"./createLucideIcon-DG07A9xd.js";import"./useLocalizedStringFormatter-CHt1E_Fl.js";import"./Heading-CWx7pa9X.js";import"./Button-WgLWfZml.js";import"./Button.module-BB7N-cLd.js";import"./info-BSvY6DXA.js";import"./Popover-DhIRyh1t.js";import"./Form-BSRHL6AU.js";import"./useField-DSKyBuUi.js";import"./check-C66u3zqq.js";import"./useToggleState-BivGYoU9.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
