import{j as e}from"./iframe-CiD__Hyy.js";import{C as m}from"./CheckboxGroup-l80gNsWh.js";import{C as p}from"./Checkbox-DJlkMuSu.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dm1ekGMw.js";import"./utils-Q1z5OATQ.js";import"./clsx-B-dksMZM.js";import"./Text-DeJgjfoW.js";import"./useFocusRing-BySSjodA.js";import"./index-BT7nfzmR.js";import"./index-CV7cu1dt.js";import"./clsx-Ciqy0D92.js";import"./Text-BQRoNCWw.js";import"./Label-CTzQhgPn.js";import"./Button-B2sA97lD.js";import"./Hidden-BE6gFQQR.js";import"./useLabels-CX9hgZKe.js";import"./useButton-X_4XH9RQ.js";import"./Dialog-XK2tbbyX.js";import"./RSPContexts-D7xeFMEU.js";import"./OverlayArrow-quJYtZJD.js";import"./useResizeObserver-DJeJdTvO.js";import"./useControlledState-B8jVS4zb.js";import"./Collection-DqSIwb3e.js";import"./index-D2IFlk2J.js";import"./Separator-C76xaioL.js";import"./SelectionManager-D-z9OdLk.js";import"./useEvent-CdJ8U0oy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D4dp0ZQd.js";import"./useDescription-iasQP9PS.js";import"./ListKeyboardDelegate-BJs1W7dk.js";import"./PressResponder-DsyqempF.js";import"./useLocalizedStringFormatter-GCebu6ZU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CP1kT0Bu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BXpQqt24.js";import"./Button-D24FKJ_j.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-EaUWWv-J.js";import"./createLucideIcon-BkxrGWvy.js";import"./x-BkZTMQtm.js";import"./Heading-DwR6zONe.js";import"./info-XB7eNwtX.js";import"./Popover-Cnn_KCNJ.js";import"./useFormValidation-Ccsqp47f.js";import"./useField-BJf9s_op.js";import"./Form-CTNtdEqU.js";import"./check-CDwlczNW.js";import"./useToggleState-dTJXhxbR.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
