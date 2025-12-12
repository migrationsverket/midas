import{j as e}from"./iframe-DBywrjRl.js";import{C as m}from"./CheckboxGroup-dPrO_qMZ.js";import{C as p}from"./Checkbox-DrLWQ_O8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BNQQruOL.js";import"./utils-C-8jxnFS.js";import"./clsx-B-dksMZM.js";import"./Text-D38z605_.js";import"./useFocusRing-CGlcWS9k.js";import"./index-Cpu-cEhv.js";import"./index-P3BrwvSu.js";import"./clsx-Ciqy0D92.js";import"./Text-C5neFPa3.js";import"./Label-CdBS-jC6.js";import"./Button-D_E0QrGY.js";import"./Hidden-79NJLlf0.js";import"./useLabels-DRimalMh.js";import"./useButton-B7cADDRU.js";import"./Dialog-BDl78Vuv.js";import"./RSPContexts-CZ2dorfb.js";import"./OverlayArrow-oyFXlDLr.js";import"./useResizeObserver-CkCBTxIL.js";import"./useControlledState-CHDzfq-U.js";import"./Collection-5AgW_aoK.js";import"./index-DRE7QTp1.js";import"./Separator-yjBlW27q.js";import"./SelectionManager-DiyyYEzW.js";import"./useEvent-9QG8B8xJ.js";import"./scrollIntoView-DPAZbUL2.js";import"./SelectionIndicator-kuF2SRU2.js";import"./useDescription-BkB7oLNC.js";import"./ListKeyboardDelegate-BQyLRtPA.js";import"./PressResponder-sWsumx_-.js";import"./useLocalizedStringFormatter-CSTI3d-a.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DnWvmp_C.js";import"./VisuallyHidden-jGgGT3kZ.js";import"./Button-CSQaj_XW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-x3VZR5IH.js";import"./createLucideIcon-DLAcgX9Y.js";import"./x-CMTwpFUB.js";import"./Heading-rY-wDdYP.js";import"./info-D4TVZB6L.js";import"./Popover-CvPJ9zn-.js";import"./useFormValidation-DPDjlvP6.js";import"./useField-gVPT3IMc.js";import"./Form-BGMUpMH5.js";import"./check-DUWMPDVS.js";import"./useToggleState-BAQnU5xS.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
