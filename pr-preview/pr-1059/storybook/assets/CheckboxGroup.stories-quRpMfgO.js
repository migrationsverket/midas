import{j as e}from"./iframe-DY-bI3Dg.js";import{C as m}from"./CheckboxGroup-veElJey-.js";import{C as p}from"./Checkbox-B6_gVzH5.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-q3KGq0Kn.js";import"./utils-BUdZKq-e.js";import"./clsx-B-dksMZM.js";import"./Text-BkObjjcV.js";import"./useFocusRing-CoHcHCSJ.js";import"./index-BbO7iBgM.js";import"./index-BlJnpVmq.js";import"./clsx-Ciqy0D92.js";import"./Text-Ds5qe3f-.js";import"./Label-CdOudSpf.js";import"./Button-BtfH31ZB.js";import"./Hidden-CIKdpVxl.js";import"./useLabels-BM327Hkh.js";import"./useButton-BbpHsEWl.js";import"./Dialog-DKiU6M1K.js";import"./RSPContexts-kc53uUDM.js";import"./OverlayArrow-BgP4fVxJ.js";import"./useResizeObserver-D5biT02n.js";import"./useControlledState-DqXLKbh_.js";import"./Collection-D7m5k63G.js";import"./index-lbOlXOLi.js";import"./Separator-C33z_10n.js";import"./SelectionManager-B5LK4q_Z.js";import"./useEvent-yA0ydpfu.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CDaozb0n.js";import"./useDescription-MJqaxJYE.js";import"./ListKeyboardDelegate-DA4YIuyy.js";import"./PressResponder-CkPTmaw2.js";import"./useLocalizedStringFormatter-C3XMQvqw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BkvUYII9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bco5rUHP.js";import"./Button-D_pZMGSb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C40Mbmtc.js";import"./createLucideIcon-WJDXuKIa.js";import"./x-DCOCLMzd.js";import"./Heading-eS0c-HBo.js";import"./info-D9M1w_z6.js";import"./Popover-DywFxgdd.js";import"./useFormValidation-CXVRgJGB.js";import"./useField-CytuTSNm.js";import"./Form-D66FRXmw.js";import"./check-kANKCVii.js";import"./useToggleState-1OAZJtns.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
