import{j as e}from"./iframe-BtgDep9R.js";import{C as m}from"./CheckboxGroup-ByCJBt_v.js";import{C as p}from"./Checkbox-BzScA7gR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CLjQSEjB.js";import"./utils-19pzbDMK.js";import"./clsx-B-dksMZM.js";import"./Text-d4Ws1p9D.js";import"./useFocusRing-B0raOtM3.js";import"./index-bg38S8_S.js";import"./index-p62yjGZm.js";import"./clsx-Ciqy0D92.js";import"./Text-DSDXzy_7.js";import"./Label-Dy9F7cov.js";import"./Button-Dods2sxS.js";import"./Hidden-BGFRCPE7.js";import"./useLabels-CH1U4Avs.js";import"./useButton-C3UREKjv.js";import"./Dialog-CcydxMNP.js";import"./RSPContexts-nWIXCX30.js";import"./OverlayArrow-2aNOtsjd.js";import"./useResizeObserver-DccnOt7u.js";import"./useControlledState-2-dryBsj.js";import"./Collection-BQEBVYMc.js";import"./index-I_rN9iur.js";import"./Separator-FSiXtCLD.js";import"./SelectionManager-CWx0zDhh.js";import"./useEvent-C_gAsV0I.js";import"./scrollIntoView-aqVd5jYf.js";import"./SelectionIndicator-CYQqg3xj.js";import"./useDescription-DzQWt6tt.js";import"./ListKeyboardDelegate-DCyib2EM.js";import"./PressResponder-CffHt7sb.js";import"./useLocalizedStringFormatter-DfPHOYdh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bd4AszQN.js";import"./VisuallyHidden-BCr4K6QV.js";import"./Button-DEl-3lBg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dh89wCAf.js";import"./createLucideIcon-Dbtj7BRa.js";import"./x-CAUnFyzT.js";import"./Heading-ByTu16yF.js";import"./info-C06cJeJp.js";import"./Popover-CTcMZnjL.js";import"./useFormValidation-Df0aYx2-.js";import"./useField-CnC_EF2K.js";import"./Form-DEsuWMud.js";import"./check-CMUdU2aT.js";import"./useToggleState-D6o76CC4.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
