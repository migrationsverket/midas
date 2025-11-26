import{j as e}from"./iframe-XX0Vdbj7.js";import{C as m}from"./CheckboxGroup-L6E7lxvj.js";import{C as p}from"./Checkbox-Bqr_NhaV.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ChwcOMX4.js";import"./utils-CbDu8gNr.js";import"./clsx-B-dksMZM.js";import"./Text-BeRQ2kjX.js";import"./useFocusRing-DZkPrIsz.js";import"./index-DTlV7nv2.js";import"./index-BrPE2rn6.js";import"./clsx-Ciqy0D92.js";import"./Text-DyXudq4d.js";import"./Label-CbVtHmNO.js";import"./Button-DY_cHSjI.js";import"./Hidden-BPeBnAY5.js";import"./useLabels-BB7TQJZF.js";import"./useButton-afcNCAs_.js";import"./Dialog-DK1ZivD-.js";import"./RSPContexts-D4Trq4sX.js";import"./OverlayArrow-yB237vaA.js";import"./useResizeObserver-ChfK12qD.js";import"./useControlledState-CExhW45z.js";import"./Collection-chvZQn9h.js";import"./index-Do3HD5u9.js";import"./Separator-CNBjlMa5.js";import"./SelectionManager-Cnjka0SB.js";import"./useEvent-BDIgNVUL.js";import"./scrollIntoView-BOk-Zv9y.js";import"./SelectionIndicator-BcLURfzU.js";import"./useDescription-IkLXckEB.js";import"./ListKeyboardDelegate-D5bscAnH.js";import"./PressResponder-DRgiOOFI.js";import"./useLocalizedStringFormatter-BMuLFIl9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CJczyCZU.js";import"./VisuallyHidden-D9J82ZWu.js";import"./Button-CgwWNrBR.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BYLA1ivb.js";import"./createLucideIcon-cScy24ZI.js";import"./x-BJd4-ddg.js";import"./Heading-B2A5PAFc.js";import"./info-C1GCfvjH.js";import"./Popover-B6og31xQ.js";import"./useFormValidation-4Agwc_rw.js";import"./useField-DGsM5StF.js";import"./Form-B1QmrQQd.js";import"./check-CiAR6AZ4.js";import"./useToggleState-DlrQVGpL.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
