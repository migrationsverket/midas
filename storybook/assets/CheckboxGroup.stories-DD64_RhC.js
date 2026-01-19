import{j as e}from"./iframe-CPEWJk1e.js";import{C as m}from"./CheckboxGroup-BRqihcwK.js";import{C as p}from"./Checkbox-BdwNImS9.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BBhushzd.js";import"./utils-zqFEKEPh.js";import"./clsx-B-dksMZM.js";import"./Text-C52_CQW6.js";import"./useFocusRing-ILJnPhUK.js";import"./index-CtVcx0yG.js";import"./index-CHrfy1ht.js";import"./clsx-Ciqy0D92.js";import"./Text-BzUC5NL3.js";import"./Label-Cma1eFeW.js";import"./Button-D3ppew-K.js";import"./Hidden-BTXMChVh.js";import"./useLabels-D-Hy4YuH.js";import"./useButton-DQ-7sy2B.js";import"./Dialog-DfXHAGIq.js";import"./RSPContexts-_qG5IX47.js";import"./OverlayArrow-6918mRBW.js";import"./useResizeObserver-CmDV-ULA.js";import"./useControlledState-B4oLgPdt.js";import"./Collection-CZrNbxBI.js";import"./index-B4Rt1yXi.js";import"./Separator-Bsaxviz_.js";import"./SelectionManager-CQfYVIUw.js";import"./useEvent-Bp8WcJ43.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BXRPEXa6.js";import"./useDescription-BxyIXG7-.js";import"./ListKeyboardDelegate-ADeysOq7.js";import"./PressResponder-DBMlhjfl.js";import"./useLocalizedStringFormatter-B-rP9j5m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CbsLMYyh.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cf1hSoJ3.js";import"./Button-BQy3vbUL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CifXZ-cd.js";import"./createLucideIcon-CtQUs0EG.js";import"./x-BKUO9y3k.js";import"./Heading-CsRWFTvi.js";import"./info-Cirzvkyu.js";import"./Popover-g-KzvEHi.js";import"./useFormValidation-MXNBESz-.js";import"./useField-D2evXDbG.js";import"./Form-DBPNPreF.js";import"./check-C-T2S4ok.js";import"./useToggleState-3gjlmx7q.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
