import{j as e}from"./iframe-C9g4MTX7.js";import{C as m}from"./CheckboxGroup-CvgYPw73.js";import{C as p}from"./Checkbox-CLVvUeME.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C8KRqUxl.js";import"./utils-_Jmhc4hr.js";import"./clsx-B-dksMZM.js";import"./Text-XjFf9xI5.js";import"./useFocusRing-DG43Unny.js";import"./index-C_J0lp9X.js";import"./index-DhjFuTvG.js";import"./clsx-Ciqy0D92.js";import"./Text-CbrSL-Nv.js";import"./Label-CF0pu5un.js";import"./Button-_3UTtnws.js";import"./Hidden-Blvi27yb.js";import"./useLabels-LOj0MSb9.js";import"./useButton-BIIPbxfI.js";import"./Dialog-B1VUh1MD.js";import"./RSPContexts-vx5S09HY.js";import"./OverlayArrow-CWpyETov.js";import"./useResizeObserver-Cbz0T_4Q.js";import"./useControlledState-FOZz2YKy.js";import"./Collection-YEJssIt5.js";import"./index-Dg75dvRG.js";import"./Separator-CurZBUS-.js";import"./SelectionManager-BAaQ0uR4.js";import"./useEvent-Bv7P4LMn.js";import"./scrollIntoView-DxrqCAfs.js";import"./SelectionIndicator-FjxP8PaG.js";import"./useDescription-4ih0aY-K.js";import"./ListKeyboardDelegate-C7faG6eE.js";import"./PressResponder-CmSEDKi3.js";import"./useLocalizedStringFormatter-DewJi2DS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DWsgVBc_.js";import"./VisuallyHidden-CMi3wTGx.js";import"./Button-Cd6lSrpE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D0wJzWuW.js";import"./createLucideIcon-mQbrOUxF.js";import"./x-D78XPVZO.js";import"./Heading-Q5zE7r_Q.js";import"./info-C0tQPWKm.js";import"./Popover-DhqI-H1D.js";import"./useFormValidation-COH0Z6gm.js";import"./useField-CJSZHuXU.js";import"./Form-V7cGO92z.js";import"./check-DXDPX_p-.js";import"./useToggleState--LHCt98R.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
