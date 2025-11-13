import{j as e}from"./iframe-BlNSK8M8.js";import{C as m}from"./CheckboxGroup-CKwkChsU.js";import{C as p}from"./Checkbox-D18zgVh7.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DhYzCNjI.js";import"./utils-y_Ysi-53.js";import"./clsx-B-dksMZM.js";import"./Text-Cv88p_mU.js";import"./useFocusRing-n2GNbng4.js";import"./index-BHe3mj7v.js";import"./index-B8FlXCLo.js";import"./clsx-Ciqy0D92.js";import"./Text-CsuJG2Zh.js";import"./Label-y3Iy_40Q.js";import"./Button-UL3rNHqZ.js";import"./Hidden-Df5yupSK.js";import"./useLabels-wei9JXnD.js";import"./useButton-sYL6IkJL.js";import"./Dialog-J0JuQeVX.js";import"./RSPContexts-B0gZxzCT.js";import"./OverlayArrow-Cen2yzg5.js";import"./useResizeObserver-oBFUOKOy.js";import"./useControlledState-DcrFjJH-.js";import"./Collection-Ch8k714R.js";import"./index-5_nZ1Ots.js";import"./Separator-BgEPvPwu.js";import"./SelectionManager-Cpsfaq8i.js";import"./useEvent-CIITEq7t.js";import"./scrollIntoView-ByH1J3Gu.js";import"./SelectionIndicator-awgyvjYl.js";import"./useDescription-D-eWW9MU.js";import"./ListKeyboardDelegate-BBAfu37i.js";import"./PressResponder-Pk2W4RNd.js";import"./useLocalizedStringFormatter-CeEu-nei.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-pzTc__jH.js";import"./VisuallyHidden-Bp8v6Zzz.js";import"./useLocalizedStringFormatter-n3TDJp7T.js";import"./Button-BQGitBll.js";import"./Button.module-CtQ1deO8.js";import"./x-XDtlwMQe.js";import"./createLucideIcon-wU_OqTQp.js";import"./Heading-9wwHT0st.js";import"./info-Cq3VuKLY.js";import"./Popover-CObB0rSp.js";import"./useFormValidation-BJ1Wn2vJ.js";import"./useField-CbZpfp7_.js";import"./Form-yxuyhxW4.js";import"./check-DYodHTwZ.js";import"./useToggleState-C-Lzgbmn.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
