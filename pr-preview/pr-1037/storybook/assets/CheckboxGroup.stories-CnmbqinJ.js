import{j as e}from"./iframe-avvwDBBp.js";import{C as m}from"./CheckboxGroup-4Rgsncac.js";import{C as p}from"./Checkbox-CymEixv1.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CUJ1nOb_.js";import"./utils-C6AdICJ7.js";import"./clsx-B-dksMZM.js";import"./Text-nuNh7stK.js";import"./useFocusRing-x-yt5vcP.js";import"./index-Cc2TyXf4.js";import"./index-F0yeFPaK.js";import"./clsx-Ciqy0D92.js";import"./Text-BuEQRuhi.js";import"./Label-BNmurno_.js";import"./Button-B34KA-9Z.js";import"./Hidden-Ft7ifkXt.js";import"./useLabels-BaAeHDSr.js";import"./useButton-C6RHTzzZ.js";import"./Dialog-CXi0lKvB.js";import"./RSPContexts-BJmPPlkw.js";import"./OverlayArrow-19GsMW1S.js";import"./useResizeObserver-CDLAZHnJ.js";import"./useControlledState-BQt9Xj6g.js";import"./Collection-nNhJNYKC.js";import"./index-CUhqqiIc.js";import"./Separator-D2SIzjzz.js";import"./SelectionManager-DAyBKSt5.js";import"./useEvent-DK7Zb_XO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-jzK5UQW7.js";import"./useDescription-BiPsPzZk.js";import"./ListKeyboardDelegate-CykXfXkf.js";import"./PressResponder-nCvL8pYp.js";import"./useLocalizedStringFormatter-C0xDl-WG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B5BK6QLk.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bjg7bFep.js";import"./Button-Bc5upLYd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDByPaCr.js";import"./createLucideIcon-H9RUqqbe.js";import"./x-BecIAGDD.js";import"./Heading-CcX-zHd2.js";import"./info-D-GFsriY.js";import"./Popover-CtWJu6lm.js";import"./useFormValidation-BlOMbcO_.js";import"./useField-X5Ne7bxX.js";import"./Form-Y4ksqzXf.js";import"./check-DayjbLRK.js";import"./useToggleState-cjdEQBMg.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
