import{j as e}from"./iframe-nOsxirQX.js";import{C as m}from"./CheckboxGroup-DtZbfUrr.js";import{C as p}from"./Checkbox-DXBW3FlM.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BRIeksHU.js";import"./utils-Bx1o-H88.js";import"./clsx-B-dksMZM.js";import"./Text-B8fVM-qM.js";import"./useFocusRing-D89DlAJn.js";import"./index-BBtn04JY.js";import"./index-4Tg7UEMT.js";import"./clsx-Ciqy0D92.js";import"./Text-66nZ78iJ.js";import"./Label-DfL6m-wx.js";import"./Button-DcANhavY.js";import"./Hidden-BQXizKKD.js";import"./useLabels-quzXmLXQ.js";import"./useButton-Bh9NqEET.js";import"./Dialog-BDaCOdOP.js";import"./RSPContexts-qetO-Bd7.js";import"./OverlayArrow-DO2di5Gw.js";import"./useResizeObserver-CbmTSZDe.js";import"./useControlledState-DDwIrHc5.js";import"./Collection-NzMDAGr4.js";import"./index-zXchqore.js";import"./Separator-ZB0JX3cV.js";import"./SelectionManager-CyXtJ1CD.js";import"./useEvent-BSYUz00V.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CQUuNVdz.js";import"./useDescription-JIsLYad4.js";import"./ListKeyboardDelegate-ByeLr9bU.js";import"./PressResponder-J1QjmTAC.js";import"./useLocalizedStringFormatter-CEAmhm35.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D7vbmbM2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D_ts-6oX.js";import"./Button-C_6tr8VE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BrifjVpT.js";import"./createLucideIcon-BM5xacqz.js";import"./x-Co742d-j.js";import"./Heading-9EKTJ505.js";import"./info-K5PMbTGZ.js";import"./Popover-B25u0Cb5.js";import"./useFormValidation-BrKAO3SO.js";import"./useField-BV3Fx_ol.js";import"./Form-DMuDE9rp.js";import"./check-D2B4Z9Fa.js";import"./useToggleState-DHGAkj8F.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
