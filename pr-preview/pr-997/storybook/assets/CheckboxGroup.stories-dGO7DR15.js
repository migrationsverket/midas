import{j as e}from"./iframe--YiVc9hQ.js";import{C as m}from"./CheckboxGroup-DoKc35t2.js";import{C as p}from"./Checkbox-9fg6WGo2.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BTW40C7o.js";import"./utils-CpTnsnHV.js";import"./clsx-B-dksMZM.js";import"./Text-o29tJk3p.js";import"./useFocusRing-0ty734hP.js";import"./index-JKE8F4U8.js";import"./index-BL2jGLxX.js";import"./clsx-Ciqy0D92.js";import"./Text-CpCRGjDE.js";import"./Label-BxsASF-G.js";import"./Button-DG5CDtQI.js";import"./Hidden-BTZxWKRt.js";import"./useLabels-BJE1cm7E.js";import"./useButton-jtZkJpn4.js";import"./Dialog-BttT1W7O.js";import"./RSPContexts-Cj5AcZ5v.js";import"./OverlayArrow-DP9vaZ_M.js";import"./useResizeObserver-B29bVLOX.js";import"./useControlledState-C3lB_-hB.js";import"./Collection-xD8Y3ccY.js";import"./index-CbtIlzo-.js";import"./Separator-C4RUysbw.js";import"./SelectionManager-Bh9JhaZY.js";import"./useEvent-foWgZimj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BJs-u6TU.js";import"./useDescription-W6MpaIcO.js";import"./ListKeyboardDelegate-CqcuA2vR.js";import"./PressResponder-vGzMUI1V.js";import"./useLocalizedStringFormatter-Dw3D2Uxn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BQFHdY9W.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-oIx4p_CA.js";import"./Button-UFPEZg__.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-39Qfkypc.js";import"./createLucideIcon-MgWQY606.js";import"./x-DoZor33n.js";import"./Heading-B6Ybwa57.js";import"./info-BFgZkJXj.js";import"./Popover-CVOrbPeG.js";import"./useFormValidation-CQ7W6iFw.js";import"./useField-Bek4DV6E.js";import"./Form-DqMg5srB.js";import"./check-B0FQIl44.js";import"./useToggleState-lbaTiQXx.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
