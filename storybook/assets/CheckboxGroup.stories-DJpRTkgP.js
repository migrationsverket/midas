import{j as e}from"./iframe-CKFV4t_1.js";import{C as m}from"./CheckboxGroup-RXpAqgCg.js";import{C as p}from"./Checkbox-DfOSFSIt.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CfIn2uhl.js";import"./utils-DI9iWWNt.js";import"./clsx-B-dksMZM.js";import"./Text-DzSDPQzh.js";import"./useFocusRing-BZ_PqxVl.js";import"./index-BW6JxsHj.js";import"./index-BqBdriJQ.js";import"./clsx-Ciqy0D92.js";import"./Text-Dv3jZ_aV.js";import"./Label-XKoSEVsC.js";import"./Button-DI-ffzDX.js";import"./Hidden-DihczV1P.js";import"./useLabels-C6LUrwjA.js";import"./useButton-CShiPmlY.js";import"./Dialog-BQ_mqNXy.js";import"./RSPContexts-BzweYrWZ.js";import"./OverlayArrow-gZMjfUNs.js";import"./useResizeObserver-HMX32PgH.js";import"./useControlledState-BDpF19zF.js";import"./Collection-DZeW03SE.js";import"./index-vTCi_tu9.js";import"./Separator-hYZTGZos.js";import"./SelectionManager-Dv3dFLkJ.js";import"./useEvent-CAPMhfOK.js";import"./scrollIntoView-s5FNUvm8.js";import"./SelectionIndicator-CblqZDMx.js";import"./useDescription-XRc2AN6L.js";import"./ListKeyboardDelegate-tcadBjjn.js";import"./PressResponder-CuU5Vb0J.js";import"./useLocalizedStringFormatter-CKBqLoBy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DClmF7Sb.js";import"./VisuallyHidden-POfTLuvh.js";import"./Button-CX41FOI9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DIR_98tQ.js";import"./createLucideIcon-sgDlsuts.js";import"./x-tZVRH0aO.js";import"./Heading-B6vunHA3.js";import"./info-67DKVwtn.js";import"./Popover-i2s2TNUi.js";import"./useFormValidation-B6Fe8WXE.js";import"./useField-BS1r04HM.js";import"./Form-D0HW_j4G.js";import"./check-BcHvUnb9.js";import"./useToggleState-BZ9jEmy2.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
