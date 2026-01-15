import{j as e}from"./iframe-CSIMALEo.js";import{C as m}from"./CheckboxGroup-Dm8f7TXW.js";import{C as p}from"./Checkbox-C6vxJGdX.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-QzWPofCp.js";import"./utils-BhFaZXMS.js";import"./clsx-B-dksMZM.js";import"./Text-CgjfMSMX.js";import"./useFocusRing-YF8rxIXT.js";import"./index-Bg0fwusk.js";import"./index-Cko5PELv.js";import"./clsx-Ciqy0D92.js";import"./Text-DAP7-Chs.js";import"./Label-nRchqJPS.js";import"./Button-URk4kmEe.js";import"./Hidden-Bzf4_Pb3.js";import"./useLabels-CPdLbOLr.js";import"./useButton-BV6dPOCz.js";import"./Dialog-Dc3-Xu4e.js";import"./RSPContexts-B6yeYefJ.js";import"./OverlayArrow-Bd5xf0_A.js";import"./useResizeObserver-Dl6BNA6V.js";import"./useControlledState-gQFNofvS.js";import"./Collection-D7usJqLj.js";import"./index-DETqQTae.js";import"./Separator-lAZ_4zB9.js";import"./SelectionManager-C7GMCLRn.js";import"./useEvent-B5sTb3e5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CbrJhCXm.js";import"./useDescription-PhgKx27S.js";import"./ListKeyboardDelegate-DFwfPiIs.js";import"./PressResponder-D-Lp16BO.js";import"./useLocalizedStringFormatter-B9G0gFgf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CwOsGgVW.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-De97aW8X.js";import"./Button-DVHbJF0m.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-jyLw659G.js";import"./createLucideIcon-DF3n-g_Z.js";import"./x-DyzJKXcb.js";import"./Heading-0UZEitdo.js";import"./info-BVBUXgQd.js";import"./Popover-CtzoBQ8h.js";import"./useFormValidation-DdycJShS.js";import"./useField-xRcIPMLR.js";import"./Form-B8RAAmya.js";import"./check-Cnu_VKr9.js";import"./useToggleState-BXd2JGF6.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
