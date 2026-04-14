import{j as e}from"./iframe-4ooqBbUt.js";import{C as m}from"./CheckboxGroup-DqIIquyt.js";import{C as p}from"./Checkbox-1aAdF6TN.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B6PivCC-.js";import"./utils-DLRtaVYJ.js";import"./clsx-B-dksMZM.js";import"./Text-DrGdlSGk.js";import"./useFocusRing-x4N4w9bu.js";import"./index-CUG0QuFy.js";import"./index-BsCB03x8.js";import"./clsx-Ciqy0D92.js";import"./Text-2ah8hSkI.js";import"./Label-DGcYYVGI.js";import"./Button-BBwvVA_R.js";import"./Hidden-JrM4togE.js";import"./useLabel-pwrXaBmf.js";import"./useLabels-BKydU-se.js";import"./useButton-XyhjWgk6.js";import"./Dialog-CawsXbRf.js";import"./RSPContexts-CCn7iKWs.js";import"./OverlayArrow-DawdryBG.js";import"./useResizeObserver-tmlcPi4G.js";import"./useControlledState-BAx2qeOY.js";import"./Collection-Zn-QVJyy.js";import"./index-BUscyov3.js";import"./Separator-D9gAW340.js";import"./SelectionManager-NlDG7jzo.js";import"./useEvent-C_i09VmA.js";import"./scrollIntoView-BOZ86Y2T.js";import"./SelectionIndicator-BTjwT-gq.js";import"./useDescription-BHrIGgoU.js";import"./ListKeyboardDelegate-BBEpL094.js";import"./PressResponder-D9M776K-.js";import"./useLocalizedStringFormatter-CMLnWTsm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKaQoy88.js";import"./getScrollParent-CQlmigTk.js";import"./VisuallyHidden-D6FSL6iG.js";import"./Modal-C50kuIxP.js";import"./x-DhmDnCci.js";import"./createLucideIcon-BAeES33l.js";import"./useLocalizedStringFormatter-DmSeN8hT.js";import"./Heading-CDwsjuh5.js";import"./Button-BKg5QkG5.js";import"./Button.module-BB7N-cLd.js";import"./info-CWULpKck.js";import"./Popover-Cp_B30U_.js";import"./Form-DCni8rj5.js";import"./useField-CwAwdwy6.js";import"./check-CgfgCBvh.js";import"./useToggleState-lfDPMIbX.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
