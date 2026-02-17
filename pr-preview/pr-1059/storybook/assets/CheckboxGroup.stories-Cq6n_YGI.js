import{j as e}from"./iframe-CLZ7lMWL.js";import{C as m}from"./CheckboxGroup-BgP2_MiA.js";import{C as p}from"./Checkbox-DYu33BYw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C9kOHtGX.js";import"./utils-2WeD-wN4.js";import"./clsx-B-dksMZM.js";import"./Text-DRJ2hBXG.js";import"./useFocusRing-ChcbSX8A.js";import"./index-joeLWnyk.js";import"./index-BQfKMPTh.js";import"./clsx-Ciqy0D92.js";import"./Text-BMOUMG_N.js";import"./Label-BuTGvR_t.js";import"./Button-BdHKCjLS.js";import"./Hidden-To-3RG_j.js";import"./useLabels-DWLJ680t.js";import"./useButton-BRhObPaf.js";import"./Dialog-CXJMpsnJ.js";import"./RSPContexts-p4UD-iwG.js";import"./OverlayArrow-NBOTP4rD.js";import"./useResizeObserver-tdEzEOOs.js";import"./useControlledState-Ch1Apm7b.js";import"./Collection-D5JQNHBM.js";import"./index-DFhlRqD6.js";import"./Separator-BB7lIjRA.js";import"./SelectionManager-DXid-Z9i.js";import"./useEvent-A6WuRPvM.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ml-LKVKH.js";import"./useDescription-DN7NAyXj.js";import"./ListKeyboardDelegate-zdtkEJzt.js";import"./PressResponder-fHgI3hkF.js";import"./useLocalizedStringFormatter-C7tLz9-g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D9mV23my.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BKsebB3-.js";import"./Button-epCGRlhZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DKKvMQ_v.js";import"./createLucideIcon-CqL2zG8F.js";import"./x-DBKM5voW.js";import"./Heading-BSQ7kAFI.js";import"./info-u50hN6QW.js";import"./Popover-CQBSpcVE.js";import"./useFormValidation-DH2Mgg_R.js";import"./useField-DGpSlZLY.js";import"./Form-CjgBY9HH.js";import"./check-fSQVBaT0.js";import"./useToggleState-DXbf92xo.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
