import{j as e}from"./iframe-DWjCTUGS.js";import{C as m}from"./CheckboxGroup-Dqq8TCYP.js";import{C as p}from"./Checkbox-CwMI3toy.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B_RQwvpG.js";import"./utils-jft35r8I.js";import"./clsx-B-dksMZM.js";import"./Text-Dg63mXaz.js";import"./useFocusRing-By5vzM2y.js";import"./index-CTzqJ3Ik.js";import"./index-BtJ79RpX.js";import"./clsx-Ciqy0D92.js";import"./Text-eFe150r9.js";import"./Label-BOYaDa7i.js";import"./Button-C9b-TJtb.js";import"./Hidden-Crg89ChB.js";import"./useLabel-B9iBVSNe.js";import"./useLabels-DgKilVQM.js";import"./useButton-B_EIBBkv.js";import"./Dialog-DxK-ww5T.js";import"./RSPContexts-Csylolnc.js";import"./OverlayArrow-LoDtC1od.js";import"./useResizeObserver-DC3G56zM.js";import"./useControlledState-CkptqhP6.js";import"./Collection-DjJ2m9zo.js";import"./index-4pgU1s_J.js";import"./Separator-2LMpIno4.js";import"./SelectionManager-0LynmnvR.js";import"./useEvent-Dr-0pueP.js";import"./scrollIntoView-DUeHV5Vd.js";import"./SelectionIndicator-DfY4UXyG.js";import"./useDescription-Da3_CYtm.js";import"./ListKeyboardDelegate-C2orpyom.js";import"./PressResponder-DFsO8vzI.js";import"./useLocalizedStringFormatter-BHhCUzn7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BT6WLBFH.js";import"./getScrollParent-DwRJEpBB.js";import"./VisuallyHidden-DBHrI_B7.js";import"./ModalOverlay-JVd6uyAy.js";import"./x-BkZO3SMW.js";import"./createLucideIcon-B9xTeaix.js";import"./useLocalizedStringFormatter-S9MQR21O.js";import"./Heading-D83dPF1d.js";import"./Button-ClirsJfj.js";import"./Button.module-BB7N-cLd.js";import"./info-CCS-HkAt.js";import"./Popover-BiEZys4z.js";import"./Form-fTl9ZSRE.js";import"./useField-76ZmfiRI.js";import"./check-9kvzkp9q.js";import"./useToggleState-BUI9gasn.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
