import{j as e}from"./iframe-BgNoMb1-.js";import{C as m}from"./CheckboxGroup-D5EeZ-Y5.js";import{C as p}from"./Checkbox-PKJqdo5C.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-HTMfHJDa.js";import"./utils-Cf4EtztR.js";import"./clsx-B-dksMZM.js";import"./Text-DTrIh8Ah.js";import"./useFocusRing-CdEgrIPc.js";import"./index-C0ZyhkQq.js";import"./index-BH1r8cCI.js";import"./clsx-Ciqy0D92.js";import"./Text-CfXADzCS.js";import"./Label-5r2Q4brF.js";import"./Button-DuzmOBcr.js";import"./Hidden-Oz1FCPRp.js";import"./useLabel-BFLzfKfJ.js";import"./useLabels-D5sc6rkA.js";import"./useButton-BqxH6UIc.js";import"./Dialog-BsaiJvLQ.js";import"./RSPContexts-CioY2Bmm.js";import"./OverlayArrow-0t_KCSjU.js";import"./useResizeObserver-D4WxLTWU.js";import"./useControlledState-ITUua2kv.js";import"./Collection-C1oaDXsa.js";import"./index-DUHUFWaU.js";import"./Separator-BjzXQ-Go.js";import"./SelectionManager-DfWEJ--x.js";import"./useEvent-Cba8ocAv.js";import"./scrollIntoView-ByOssAro.js";import"./SelectionIndicator-AOCFd4Ui.js";import"./useDescription-Cy6BYOpX.js";import"./ListKeyboardDelegate-BBxKfJpx.js";import"./PressResponder-CbjZ2AX5.js";import"./useLocalizedStringFormatter-pefhPmo1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BW_nyKCM.js";import"./getScrollParent-B4yHCD0_.js";import"./VisuallyHidden-CAQ7uxZn.js";import"./x-BxCihT4A.js";import"./createLucideIcon-DvRkoRzG.js";import"./useLocalizedStringFormatter-D0yQtf2N.js";import"./Heading-CLjp5uV-.js";import"./Button-gs8bFcYH.js";import"./Button.module-BB7N-cLd.js";import"./info-DNb1IX_V.js";import"./Popover-BaRxeYfe.js";import"./Form-g0lbGPQc.js";import"./useField-CNaw7VL2.js";import"./check-BRUcxrpc.js";import"./useToggleState-DgQ1n61v.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
