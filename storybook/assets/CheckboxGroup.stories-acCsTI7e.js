import{j as e}from"./iframe-Da7nq29g.js";import{C as m}from"./CheckboxGroup-N5XLRQ9w.js";import{C as p}from"./Checkbox-CxY7wjHN.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-N_3bhSnW.js";import"./utils-B0CyUW-5.js";import"./clsx-B-dksMZM.js";import"./Text-BYaoYc1H.js";import"./useFocusRing-BfWaxzv3.js";import"./index-Chz3wJrr.js";import"./index-BQQ1R4UO.js";import"./clsx-Ciqy0D92.js";import"./Text-BQLX2n4Y.js";import"./Label-B5hFansb.js";import"./Button-CtgdX1q6.js";import"./Hidden-DRaikK2a.js";import"./useLabels-uo9Op09U.js";import"./useButton-DItgdLXo.js";import"./Dialog-BNTDZ4sx.js";import"./RSPContexts-CA4TT0Pe.js";import"./OverlayArrow-BLgifpcW.js";import"./useResizeObserver-CwtpUuD9.js";import"./useControlledState-DqL64D7D.js";import"./Collection-C71fexbD.js";import"./index-Ck07IVt1.js";import"./Separator-BuSY1b1y.js";import"./SelectionManager-BQXF1WZ2.js";import"./useEvent-Dtm5G7ur.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-73xE8EMW.js";import"./useDescription-VrbZdKT0.js";import"./ListKeyboardDelegate-i42XoEpM.js";import"./PressResponder-BnGFuSGl.js";import"./useLocalizedStringFormatter-CdeSJGSi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DyxF6Fwu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DaXw9Zgt.js";import"./Button-BlivHiUN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B5xCdXuP.js";import"./createLucideIcon-DXCReTis.js";import"./x-BfVUye5v.js";import"./Heading-BbtFBKJu.js";import"./info-BuyWfxI0.js";import"./Popover-Cp3vv8Pj.js";import"./useFormValidation-TJjpFVH5.js";import"./useField-D5pIHEIl.js";import"./Form-D9xjglpP.js";import"./check-BjDx6IDg.js";import"./useToggleState-TEB3Vjy4.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
