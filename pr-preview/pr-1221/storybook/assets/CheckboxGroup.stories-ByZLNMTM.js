import{j as e}from"./iframe-D1Yo_ASl.js";import{C as m}from"./CheckboxGroup-CEnkADpU.js";import{C as p}from"./Checkbox-CbP2jKQq.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BrTiJca0.js";import"./utils-CtPCKdFP.js";import"./clsx-B-dksMZM.js";import"./Text-CC_-JfUc.js";import"./useFocusRing-B1B12oVM.js";import"./index-C22-80z0.js";import"./index-DHyWBhXo.js";import"./clsx-Ciqy0D92.js";import"./Text-Cm1JxqTj.js";import"./Label-CzSxrwtj.js";import"./Button-M2F6_Qz4.js";import"./Hidden-BeKvJ1wg.js";import"./useLabel-yNR7PxFA.js";import"./useLabels-ETtHkWia.js";import"./useButton-BA9v4nYB.js";import"./Dialog-CT-IvoQF.js";import"./RSPContexts-TtF35Naa.js";import"./OverlayArrow-C08_D7Db.js";import"./useResizeObserver-CjU5NYfI.js";import"./useControlledState-DI2wiQtX.js";import"./Collection-BHwdqdom.js";import"./index-BgxIfYNz.js";import"./Separator-DkUo04Vc.js";import"./SelectionManager-Cl2qeWIC.js";import"./useEvent-CR9RVJbO.js";import"./scrollIntoView-BpMLfVQa.js";import"./SelectionIndicator-BkCDLdi0.js";import"./useDescription-DFWHaatp.js";import"./ListKeyboardDelegate-C-tPikMB.js";import"./PressResponder-DPFebpjq.js";import"./useLocalizedStringFormatter-vgTNRLY_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BLsBHLpF.js";import"./getScrollParent-CqYMlGok.js";import"./VisuallyHidden-BaAY3BDc.js";import"./Modal-BxS1hXlz.js";import"./x-Dx4ggZKu.js";import"./createLucideIcon-B2W31-43.js";import"./useLocalizedStringFormatter-CdrMB43o.js";import"./Heading-D21J0EHb.js";import"./Button-DcFviok1.js";import"./Button.module-BB7N-cLd.js";import"./info-Cam4-x-Q.js";import"./Popover-DEkZ7Lnp.js";import"./Form-BTzQwVTd.js";import"./useField--yXn37df.js";import"./check-Bw3OGSgT.js";import"./useToggleState-CI0HlWh1.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
