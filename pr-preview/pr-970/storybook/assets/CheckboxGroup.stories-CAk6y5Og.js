import{j as e}from"./iframe-Bja4lqPg.js";import{C as m}from"./CheckboxGroup-CUzNf0wH.js";import{C as p}from"./Checkbox-D6G4Vcgr.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError--F33PEfY.js";import"./utils-CfGU2F4C.js";import"./clsx-B-dksMZM.js";import"./Text-DmatnyXE.js";import"./useFocusRing-nt4HuyWe.js";import"./index-ClGRDelY.js";import"./index-Cha5Qbb4.js";import"./clsx-Ciqy0D92.js";import"./Text-DrvB4AMM.js";import"./Label-DpMBw_JY.js";import"./Button-BuHlPB14.js";import"./Hidden-BoHDrhun.js";import"./useLabels-CH_BwytF.js";import"./useButton-BzfR_wja.js";import"./Dialog-CjVbz4Lh.js";import"./RSPContexts-B0c07tpm.js";import"./OverlayArrow-nrtNdYMd.js";import"./useResizeObserver-B0uDfREA.js";import"./useControlledState-BAOyWDV2.js";import"./Collection-BL6fAMD0.js";import"./index-B84vWc8j.js";import"./Separator-BWqQwA6c.js";import"./SelectionManager-C7MFZmY6.js";import"./useEvent-o5EzRx1a.js";import"./scrollIntoView-jVw5IWHo.js";import"./SelectionIndicator-wzXcrhAR.js";import"./useDescription-B8wRK8nF.js";import"./ListKeyboardDelegate-DU0eug87.js";import"./PressResponder-62AbajkD.js";import"./useLocalizedStringFormatter-cCcv7JR5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DOGvcR6n.js";import"./VisuallyHidden-CY-bY3f_.js";import"./Button-DjNVoY-4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFnTdSDM.js";import"./createLucideIcon-BrJy0_rm.js";import"./x-BVyhS2mz.js";import"./Heading-BZgtWiZ4.js";import"./info-Cfr_aDTk.js";import"./Popover-BsYceE2w.js";import"./useFormValidation-I_sbpyOb.js";import"./useField-C2ftjCnO.js";import"./Form-DrZjrarX.js";import"./check-cpiV3x32.js";import"./useToggleState-CV59gXFw.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
