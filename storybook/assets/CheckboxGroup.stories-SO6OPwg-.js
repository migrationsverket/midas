import{j as e}from"./iframe-CO-rhcep.js";import{C as m}from"./CheckboxGroup-D4X-CuG8.js";import{C as p}from"./Checkbox-B3ChRy9v.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DWjrBszR.js";import"./utils-xXHSLQwD.js";import"./clsx-B-dksMZM.js";import"./Text-DdPGOhQT.js";import"./useFocusRing-DON0ybQn.js";import"./index-BhaZxxI5.js";import"./index-BCVRneEd.js";import"./clsx-Ciqy0D92.js";import"./Text-BNQMcymU.js";import"./Label-DFlJBLsV.js";import"./Button-BEB_3r-L.js";import"./Hidden-CWNbbLzJ.js";import"./useLabel-CHsEFPNy.js";import"./useLabels-C_wmlfWA.js";import"./useButton-D7IEmpnO.js";import"./Dialog-pnIFzO4D.js";import"./RSPContexts-B-Xm9PzS.js";import"./OverlayArrow-moVMtSdv.js";import"./useResizeObserver-BzyZcqY_.js";import"./useControlledState-ByGhFCbY.js";import"./Collection--YUStxrO.js";import"./index-COspV66_.js";import"./Separator-CfRKzM-t.js";import"./SelectionManager-7j3V1-Q2.js";import"./useEvent-BTYXRaQg.js";import"./scrollIntoView-D7XGELv_.js";import"./SelectionIndicator--9j1Qi6g.js";import"./useDescription-Be4D-VmW.js";import"./ListKeyboardDelegate-CWdsneQG.js";import"./PressResponder-D72Vt04O.js";import"./useLocalizedStringFormatter-D2pDPRTj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CPoia-Ui.js";import"./getScrollParent-BKQZghjE.js";import"./VisuallyHidden-C7JdZ-qs.js";import"./Modal-D7V5nShc.js";import"./x-BAtRtlFw.js";import"./createLucideIcon-oXqbvAOH.js";import"./useLocalizedStringFormatter-C-ngEN8v.js";import"./Heading-Bw96Yzvv.js";import"./Button-ChDRE6gD.js";import"./Button.module-BB7N-cLd.js";import"./info-Cvm1ZQiJ.js";import"./Popover-CQrfQpeQ.js";import"./Form-CBLlznOt.js";import"./useField-J3SWMipS.js";import"./check-Cp1_c2dB.js";import"./useToggleState-DLq7zdt4.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
