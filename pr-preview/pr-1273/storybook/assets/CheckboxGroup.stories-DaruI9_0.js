import{j as e}from"./iframe-Cf0gSBlV.js";import{C as m}from"./CheckboxGroup-BBTU-G7y.js";import{C as p}from"./Checkbox-CaqiK0wo.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-qRtSRcyk.js";import"./utils-D5wiuCjg.js";import"./clsx-B-dksMZM.js";import"./Text-DVsPk7Go.js";import"./useFocusRing-CU4h4oO2.js";import"./index-Cq4gtJu1.js";import"./index-BGK7RvPC.js";import"./clsx-Ciqy0D92.js";import"./Text-BVKObbzr.js";import"./Label--5PRA-NL.js";import"./Button-lgeK8kME.js";import"./Hidden-BBPU8yn5.js";import"./useLabel-tj1Q-TRL.js";import"./useLabels-CtzpOF36.js";import"./useButton-BvfyWom1.js";import"./Dialog-DQ75by7R.js";import"./RSPContexts-hWKFxDS1.js";import"./OverlayArrow-DAGMAflH.js";import"./useResizeObserver-3YecxwtY.js";import"./useControlledState-CCD2Jo-X.js";import"./Collection-B0lLxu9D.js";import"./index-DS3qhvBb.js";import"./Separator-LzjLQQNX.js";import"./SelectionManager-BuxsMIzv.js";import"./useEvent-y-qPMRaI.js";import"./scrollIntoView-C0W73uc3.js";import"./SelectionIndicator-C0NvYuKl.js";import"./useDescription-M0SxojFs.js";import"./ListKeyboardDelegate-B0W0pQHS.js";import"./PressResponder-jXCX15sr.js";import"./useLocalizedStringFormatter-jI7Oi0kB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CylMbfLW.js";import"./getScrollParent-DJJhTJvR.js";import"./VisuallyHidden-Qxum1xZt.js";import"./ModalOverlay-RjzuqHWe.js";import"./x-gM8dBxSk.js";import"./createLucideIcon-CuxZToxj.js";import"./useLocalizedStringFormatter-BePTNged.js";import"./Heading-_Rw9Dbn-.js";import"./Button-t2ToDX_o.js";import"./Button.module-BB7N-cLd.js";import"./info-DTU0m-8R.js";import"./Popover-BLukUqq0.js";import"./Form-DCo445Pj.js";import"./useField-BL9qEMGH.js";import"./check-Cv1Osn94.js";import"./useToggleState-BaxRdh6q.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
