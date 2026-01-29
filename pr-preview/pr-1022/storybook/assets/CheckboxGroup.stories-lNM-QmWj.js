import{j as e}from"./iframe-3vXkeaXf.js";import{C as m}from"./CheckboxGroup-BxvplIRE.js";import{C as p}from"./Checkbox-CnU1m10H.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CUFcw2Bx.js";import"./utils-Ci2rW9QR.js";import"./clsx-B-dksMZM.js";import"./Text-BHe6HkmH.js";import"./useFocusRing-DNafsx48.js";import"./index-CZo5RHNF.js";import"./index-DodIUsUi.js";import"./clsx-Ciqy0D92.js";import"./Text-faRT9Ypk.js";import"./Label-zVr14RRP.js";import"./Button-Dhwcp2Tj.js";import"./Hidden-If5Crsfr.js";import"./useLabels-D1__96MT.js";import"./useButton-CIQe5U3d.js";import"./Dialog-BWtB4LfF.js";import"./RSPContexts-CALLQvPo.js";import"./OverlayArrow-C-8N7e_j.js";import"./useResizeObserver-BPMKRs-7.js";import"./useControlledState-BqfUWkUs.js";import"./Collection-CroRJ_z_.js";import"./index-BIpjrxpZ.js";import"./Separator-Cx5RQKDE.js";import"./SelectionManager-B9H37USF.js";import"./useEvent-Dtk_oGRL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BmK6g95b.js";import"./useDescription-SJAzHkl8.js";import"./ListKeyboardDelegate-DjXlbXio.js";import"./PressResponder-eAX4CWAr.js";import"./useLocalizedStringFormatter-Lx5W0ILu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-cZLEa70V.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dmqfs6c2.js";import"./Button-CqTfhLBS.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bnn512eF.js";import"./createLucideIcon-Dr81SgBw.js";import"./x-YaSecB4y.js";import"./Heading-BdK0eQ3G.js";import"./info-5HPkFg7s.js";import"./Popover-CaM020lY.js";import"./useFormValidation-zcqsPAxn.js";import"./useField-D9Vx8qL5.js";import"./Form-Cn_bxQUe.js";import"./check-BbgmuBYL.js";import"./useToggleState-CLlJvVPk.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
