import{j as e}from"./iframe-BFAT86ge.js";import{C as m}from"./CheckboxGroup-DfL4ge2O.js";import{C as p}from"./Checkbox-l3wjhXJo.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D620tWPG.js";import"./utils-Ba9aKAk3.js";import"./clsx-B-dksMZM.js";import"./Text-ZCo5zKuv.js";import"./useFocusRing-DMrOFPKB.js";import"./index-BFncSmEm.js";import"./index-frs3Q4tr.js";import"./clsx-Ciqy0D92.js";import"./Text-DuhPYjo1.js";import"./Label-kdwunqNb.js";import"./Button-DLAy5IOQ.js";import"./Hidden-eduYOiEE.js";import"./useLabels-C6lMhNDy.js";import"./useButton-B3TVvISn.js";import"./Dialog-PUDk5BYI.js";import"./RSPContexts-BYWA1x4J.js";import"./OverlayArrow-BGApCK5D.js";import"./useResizeObserver-B7UpDBay.js";import"./useControlledState-CkPmYDR8.js";import"./Collection-BiYgrWvW.js";import"./index-B1FZUAB2.js";import"./Separator-Dhh2VqBs.js";import"./SelectionManager-DlsLVDHq.js";import"./useEvent-CnO47SCe.js";import"./scrollIntoView-BSaH7Nmd.js";import"./SelectionIndicator-D0NQfIHj.js";import"./useDescription-Cc9k7uL8.js";import"./ListKeyboardDelegate-CvV3oALN.js";import"./PressResponder-C6_AVyjI.js";import"./useLocalizedStringFormatter-EcwRZ9Dr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CsKOuMBX.js";import"./VisuallyHidden-CyAMcSTC.js";import"./Button-D7VV456q.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-D_c5jWec.js";import"./createLucideIcon-DcKvq49U.js";import"./x-Chk2rlLw.js";import"./Heading-BPJd7_5o.js";import"./info-BGysnS2p.js";import"./Popover-CUejfpX7.js";import"./useFormValidation-C2NZitLO.js";import"./useField-BiZ-hB8h.js";import"./Form-D2r3omc4.js";import"./check-DjuxLdJt.js";import"./useToggleState-peYSJKOV.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
