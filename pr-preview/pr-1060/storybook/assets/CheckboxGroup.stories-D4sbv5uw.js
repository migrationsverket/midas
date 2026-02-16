import{j as e}from"./iframe-DzQsNUlN.js";import{C as m}from"./CheckboxGroup-9pLyVw60.js";import{C as p}from"./Checkbox-Cbyp8FES.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DdUwEQrU.js";import"./utils-BK4Wbdgl.js";import"./clsx-B-dksMZM.js";import"./Text-B9j4IbHz.js";import"./useFocusRing-DIV-BtF4.js";import"./index-71dlSlec.js";import"./index-BenUNj7q.js";import"./clsx-Ciqy0D92.js";import"./Text-DQ3iFp2f.js";import"./Label-1qazq_on.js";import"./Button-B-ooyoCL.js";import"./Hidden-BJckUxlD.js";import"./number-DfkVkf0F.js";import"./useLabels-Cj-mzHSD.js";import"./useButton-CefvlXlx.js";import"./Dialog-LG_3aT-X.js";import"./RSPContexts-Bo3qcagQ.js";import"./OverlayArrow-CstN0B1C.js";import"./useResizeObserver-DL5KAaCe.js";import"./useControlledState-BDeuRVdh.js";import"./Collection-DfWP-8XQ.js";import"./index-CG45YEOG.js";import"./Separator-B9l0ixbi.js";import"./SelectionManager-G1dsFni-.js";import"./useEvent-DPJfrH0C.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-KGcuLJQY.js";import"./useDescription-CghOEtAM.js";import"./ListKeyboardDelegate-C7E5D8Pm.js";import"./PressResponder-CJ1jfwsf.js";import"./useLocalizedStringFormatter-BKtb_iAs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Y2lLmc0U.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ukn47BBG.js";import"./Modal-C-1Lneyt.js";import"./Button-D9Fs-ZCK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DNjAMkiD.js";import"./createLucideIcon-BcyF_Y89.js";import"./x-euwJmRQG.js";import"./Heading-DRrzocmn.js";import"./info-mZDG11IN.js";import"./Popover-BdJuk0ES.js";import"./useFormValidation-D42naTnG.js";import"./useField-B2ZM_ZrS.js";import"./Form-BeAR6TLt.js";import"./check-C9oHi_RA.js";import"./useToggleState-a0alaVyJ.js";const mr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},t={args:{showSelectAll:!0}},a={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const cr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,a as SelectAllInteraction,t as ShowSelectAll,cr as __namedExportsOrder,mr as default};
