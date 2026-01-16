import{j as e}from"./iframe-CDna8jjE.js";import{C as m}from"./CheckboxGroup-CiRTp2JG.js";import{C as p}from"./Checkbox-RbRmUEZD.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bwk-kYY7.js";import"./utils-DLwzmocV.js";import"./clsx-B-dksMZM.js";import"./Text-DFouRg6c.js";import"./useFocusRing-Cui58P_W.js";import"./index-CqO8KTpm.js";import"./index-C1kBw2K3.js";import"./clsx-Ciqy0D92.js";import"./Text-CTMNSfQo.js";import"./Label-D07Jb6Vk.js";import"./Button-CasiqzJU.js";import"./Hidden-CL_R-LHP.js";import"./useLabels-DJeip4q-.js";import"./useButton-DgzyzFaT.js";import"./Dialog-ovFgl49I.js";import"./RSPContexts-BA89GZqc.js";import"./OverlayArrow-B2RREcmi.js";import"./useResizeObserver-BQELvLCX.js";import"./useControlledState-ZH1c28y-.js";import"./Collection-di033Ejc.js";import"./index-DNb6Ybde.js";import"./Separator-BcBMNXce.js";import"./SelectionManager-AXLlcPMo.js";import"./useEvent-DNIo1dKq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cycbd7PC.js";import"./useDescription-qt3ADn-9.js";import"./ListKeyboardDelegate-BRRLhSx7.js";import"./PressResponder-B361EnvG.js";import"./useLocalizedStringFormatter-Ce-PtoG-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CvVo2JDq.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BxQZRWoC.js";import"./Button-BzWf_0Ce.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-T78m4mfD.js";import"./createLucideIcon-DXyy-duf.js";import"./x-DtvLvZQZ.js";import"./Heading-Dphh5hYW.js";import"./info-BrXqDH4v.js";import"./Popover-DzgQSo6r.js";import"./useFormValidation-CLHtYi4A.js";import"./useField-Clo25zs2.js";import"./Form-CoBzq9b-.js";import"./check-DswYKZEQ.js";import"./useToggleState-UwJGjk19.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
