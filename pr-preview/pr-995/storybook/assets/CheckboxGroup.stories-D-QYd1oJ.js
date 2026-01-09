import{j as e}from"./iframe-Dor4ircF.js";import{C as m}from"./CheckboxGroup-DUlIotWC.js";import{C as p}from"./Checkbox-BoCJeAWo.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CwY-5fO_.js";import"./utils-DMuGTtMS.js";import"./clsx-B-dksMZM.js";import"./Text-B-FP0CmP.js";import"./useFocusRing-CI_ISeqX.js";import"./index-BRWlJPJW.js";import"./index-qWyL7EHC.js";import"./clsx-Ciqy0D92.js";import"./Text-BhYbgXGv.js";import"./Label-DoMVJZ1W.js";import"./Button-CwntTkhI.js";import"./Hidden-Dp-Crghp.js";import"./useLabels-CpLLuEK0.js";import"./useButton-CwfL82kC.js";import"./Dialog-tR6ZL6WY.js";import"./RSPContexts-CxfAfl7o.js";import"./OverlayArrow-C1tPV9MD.js";import"./useResizeObserver-DHS0iUPg.js";import"./useControlledState-DvR4e7YP.js";import"./Collection-Cl9mpUrY.js";import"./index-B6HabYp9.js";import"./Separator-BtiURR58.js";import"./SelectionManager-BbQqTeL4.js";import"./useEvent-Bb7RUZ2F.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CTEwBRy7.js";import"./useDescription-Drpzw2S9.js";import"./ListKeyboardDelegate-DdhKtesC.js";import"./PressResponder-VqOr_Qee.js";import"./useLocalizedStringFormatter-BWgIDVv3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DqKIFYFG.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CIjKH1Nn.js";import"./Button-DlFMUaPv.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Hlva-IBM.js";import"./createLucideIcon-Db-iAtDf.js";import"./x-pETj6_df.js";import"./Heading-TEjQ0Xg3.js";import"./info-75RXVdD6.js";import"./Popover-BS_gm3hV.js";import"./useFormValidation-CT2uGaah.js";import"./useField-DjgNXvlM.js";import"./Form-PC2GFGky.js";import"./check-BqQg4jAJ.js";import"./useToggleState-z7jOcBzn.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
