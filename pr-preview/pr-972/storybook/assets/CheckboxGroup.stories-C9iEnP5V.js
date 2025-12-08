import{j as e}from"./iframe-h7DJPtOw.js";import{C as m}from"./CheckboxGroup-R_SeVWw3.js";import{C as p}from"./Checkbox-BIj58FdS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DSs28XHB.js";import"./utils-B7-Bl9CW.js";import"./clsx-B-dksMZM.js";import"./Text-zGp9it5Y.js";import"./useFocusRing-C0B_q-wz.js";import"./index-gfjDpAp0.js";import"./index-B7hCCELA.js";import"./clsx-Ciqy0D92.js";import"./Text-pnui6lio.js";import"./Label-BDhooHWI.js";import"./Button-Bz7LmfPv.js";import"./Hidden-PJsUPrnx.js";import"./useLabels-CUHQrXEe.js";import"./useButton-D0LQ7Q37.js";import"./Dialog-C7IIzuYp.js";import"./RSPContexts-CHFDj9zC.js";import"./OverlayArrow-BgIc1esP.js";import"./useResizeObserver-Dj2MVZVc.js";import"./useControlledState-CHLpwHvy.js";import"./Collection-dPIksrtz.js";import"./index-B6Wg72uJ.js";import"./Separator-tDLzujqY.js";import"./SelectionManager-Blqy6USp.js";import"./useEvent-F0VW7Ro7.js";import"./scrollIntoView-CTHtuwhy.js";import"./SelectionIndicator-Bd1YUc_h.js";import"./useDescription-CjXQS0Cs.js";import"./ListKeyboardDelegate-P0Ijk9LY.js";import"./PressResponder-CtxkqonA.js";import"./useLocalizedStringFormatter-BcxKr6tQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DwNXqpWq.js";import"./VisuallyHidden-CWdOAX5N.js";import"./Button-CJ449eRf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CUL5z0zQ.js";import"./createLucideIcon-CfnHEixt.js";import"./x-BbFSvcrs.js";import"./Heading-3fa6_PGE.js";import"./info-i6cdOdrR.js";import"./Popover-_VbJ2NJm.js";import"./useFormValidation-DVnx7CoV.js";import"./useField-BwCSMjcm.js";import"./Form-c2mv9S55.js";import"./check-CL_plnTd.js";import"./useToggleState-7rlRFvKc.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
