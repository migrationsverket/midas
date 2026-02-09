import{j as e}from"./iframe-BWdkMAjO.js";import{C as m}from"./CheckboxGroup-D8FMP-rT.js";import{C as p}from"./Checkbox-D2KLpML_.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DicB1PMu.js";import"./utils-C4rGLdQa.js";import"./clsx-B-dksMZM.js";import"./Text-88YPWSN7.js";import"./useFocusRing-Dz8KRmRs.js";import"./index-PBQ0q_wK.js";import"./index-B_yrj6ZN.js";import"./clsx-Ciqy0D92.js";import"./Text-CClrU0hd.js";import"./Label-CHmwxDz8.js";import"./Button-DbXwylTQ.js";import"./Hidden-DoytNLvt.js";import"./useLabels-f4Sfov9b.js";import"./useButton-CRIQl1ZU.js";import"./Dialog-OCL514eq.js";import"./RSPContexts-rbDLAAYz.js";import"./OverlayArrow-DpaYYN-P.js";import"./useResizeObserver-CLZDrBJA.js";import"./useControlledState-tNlRhvlF.js";import"./Collection-DjBZDB4X.js";import"./index-BsnagmWt.js";import"./Separator-5PROB67v.js";import"./SelectionManager-CHhr9Ilq.js";import"./useEvent--2GNkBiv.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-yaVjFPo8.js";import"./useDescription-BWeYbpkJ.js";import"./ListKeyboardDelegate-CI7UBn65.js";import"./PressResponder-DkaAzEVT.js";import"./useLocalizedStringFormatter-CsTrlIxe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2tyA-q6.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DDe5r2jE.js";import"./Button-VYBWmn37.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B72kiSfm.js";import"./createLucideIcon-UbHQFer_.js";import"./x-CUMw8g3s.js";import"./Heading-D2h7lSET.js";import"./info-CCiOt4VD.js";import"./Popover-LWN-mvtK.js";import"./useFormValidation-BrlE7vQL.js";import"./useField-e6tcAxN2.js";import"./Form-kXl2BCfV.js";import"./check-CNRuk5pp.js";import"./useToggleState-B9gJvQm8.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
