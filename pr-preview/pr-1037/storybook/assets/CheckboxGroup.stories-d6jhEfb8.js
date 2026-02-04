import{j as e}from"./iframe-Bf2O8mTA.js";import{C as m}from"./CheckboxGroup-I0kHu8Cp.js";import{C as p}from"./Checkbox-CGyEYq6N.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DmoCXSDp.js";import"./utils-DvWeM8bD.js";import"./clsx-B-dksMZM.js";import"./Text-Br20EZ_Y.js";import"./useFocusRing-CrmyRPT_.js";import"./index-BAN48Rrx.js";import"./index-C-cDut4b.js";import"./clsx-Ciqy0D92.js";import"./Text-C9gRZFsm.js";import"./Label-CD1d4Xmd.js";import"./Button-rJBUL80Z.js";import"./Hidden-Bayn64y7.js";import"./useLabels-CNHkh2me.js";import"./useButton-Cwz8dKkK.js";import"./Dialog-BY8A039T.js";import"./RSPContexts-hwAw1TwI.js";import"./OverlayArrow-CtPodeWM.js";import"./useResizeObserver-i-41ifPW.js";import"./useControlledState-B4kZCJVJ.js";import"./Collection-CvTBTnk3.js";import"./index-wKm3OkVX.js";import"./Separator-BrNcT25L.js";import"./SelectionManager-BtZRuM5E.js";import"./useEvent-BtnAi-yB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BuSwNt_S.js";import"./useDescription-Dq7jvEgt.js";import"./ListKeyboardDelegate-BxLtXsZO.js";import"./PressResponder-CGCF4LOu.js";import"./useLocalizedStringFormatter-DNn133Oj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ou16LPbu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BdseXYtF.js";import"./Button-DqEB6TwE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D09nFlJw.js";import"./createLucideIcon-DkEcA7M8.js";import"./x-rPy8VafX.js";import"./Heading-Dv8-19Cj.js";import"./info-D1lcR4Lw.js";import"./Popover-CS3oSh0J.js";import"./useFormValidation-BYxqhBck.js";import"./useField-BNnNMNgv.js";import"./Form-DYo8KYF6.js";import"./check-DXEbxG8U.js";import"./useToggleState-BFLGlTr7.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
