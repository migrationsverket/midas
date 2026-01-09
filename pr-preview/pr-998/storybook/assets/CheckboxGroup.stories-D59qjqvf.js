import{j as e}from"./iframe-DM_HNK6K.js";import{C as m}from"./CheckboxGroup-BQsqJpkn.js";import{C as p}from"./Checkbox-CyCS3xdz.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bkja58-g.js";import"./utils-BrnuSJ1-.js";import"./clsx-B-dksMZM.js";import"./Text-ClUc-h5K.js";import"./useFocusRing-Dh1RhkUQ.js";import"./index-Dn5q0CGw.js";import"./index-DbczpIcn.js";import"./clsx-Ciqy0D92.js";import"./Text-DJJ4vhAg.js";import"./Label-BszXdQtI.js";import"./Button-ExABwgM4.js";import"./Hidden-CaMcuicU.js";import"./useLabels-CvROpDKQ.js";import"./useButton-aRK5nu44.js";import"./Dialog-r9mginhE.js";import"./RSPContexts-DZ1TGWQo.js";import"./OverlayArrow-683XZ0gQ.js";import"./useResizeObserver-qqMQ1oti.js";import"./useControlledState-DKYWtKkY.js";import"./Collection-BOowsvXY.js";import"./index-D10AwL2b.js";import"./Separator-DlkC4zR8.js";import"./SelectionManager-D8tPvRiP.js";import"./useEvent-CHMmmgOy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BPhi3N2D.js";import"./useDescription-BZWTwB3o.js";import"./ListKeyboardDelegate-DWuOe_GH.js";import"./PressResponder-DNbJzU0f.js";import"./useLocalizedStringFormatter-dQ_9X6cS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BIeWPZVf.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-AtXRcW43.js";import"./Button-Hxka-VYw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfWcX_0m.js";import"./createLucideIcon-BtlDpUqt.js";import"./x-Do2AzdKO.js";import"./Heading-C596kiRQ.js";import"./info-BnCYBS_N.js";import"./Popover-CYLdM0iy.js";import"./useFormValidation-CRZRQtSn.js";import"./useField-Aw6Lq2ji.js";import"./Form-C0kUAQcP.js";import"./check-Dx-quYQf.js";import"./useToggleState-75dnsZ5x.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
