import{j as e}from"./iframe-I-T_H5J_.js";import{C as m}from"./CheckboxGroup-DmdyO0-I.js";import{C as p}from"./Checkbox-BQ924rah.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BblABd-b.js";import"./utils-JproU_nw.js";import"./clsx-B-dksMZM.js";import"./Text-BJ8cMGkE.js";import"./useFocusRing-B9IqJ9Mt.js";import"./index-CYZt27Wv.js";import"./index-B8pVpPqH.js";import"./clsx-Ciqy0D92.js";import"./Text-DpvJioBU.js";import"./Label-Bv4D4UFH.js";import"./Button-C5239-Pe.js";import"./Hidden-BMWDbIRC.js";import"./useLabel-QpkB0RGM.js";import"./useLabels-DPpJmx2A.js";import"./useButton-Bv3qVFH-.js";import"./Dialog-DO31L9V4.js";import"./RSPContexts-CMvVC2hR.js";import"./OverlayArrow-MKdai0bb.js";import"./useResizeObserver-_aDiCQBF.js";import"./useControlledState-B5eahPl_.js";import"./Collection-CTpshU-_.js";import"./index-DZE7NYqg.js";import"./Separator-BV0HI8nD.js";import"./SelectionManager-CrbLoHvI.js";import"./useEvent-DneLHAtr.js";import"./scrollIntoView-BTHLtI1M.js";import"./SelectionIndicator-6XoyzhMl.js";import"./useDescription-BbwaY706.js";import"./ListKeyboardDelegate-BHf0MnFT.js";import"./PressResponder-CnAyI_ea.js";import"./useLocalizedStringFormatter-BsAjlIoO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CsRXW8Qt.js";import"./getScrollParent-9iE4PQDL.js";import"./VisuallyHidden-ImRnGBY4.js";import"./x-DtRGZRlW.js";import"./createLucideIcon-BVI9IRTp.js";import"./useLocalizedStringFormatter-B0a8KkB4.js";import"./Heading-9Wui4UDu.js";import"./Button-B83Ld0RX.js";import"./Button.module-BB7N-cLd.js";import"./info-D19U6Lvt.js";import"./Popover-CsZMBTpq.js";import"./Form-DVDLEN1p.js";import"./useField-BWv-prfB.js";import"./check-BPYBK1Yk.js";import"./useToggleState-ChBvgvkO.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
