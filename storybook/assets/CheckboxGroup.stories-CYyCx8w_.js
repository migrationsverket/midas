import{j as e}from"./iframe-DOBgJI-y.js";import{C as m}from"./CheckboxGroup-DLLZ4ebH.js";import{C as p}from"./Checkbox-B_N9-l7y.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BPSmjDw6.js";import"./utils-DiaRguFq.js";import"./clsx-B-dksMZM.js";import"./Text-CGuvF1HY.js";import"./useFocusRing-BQr5-3Np.js";import"./index-X29No980.js";import"./index-mBWPsfNs.js";import"./clsx-Ciqy0D92.js";import"./Text-DFLO7oRJ.js";import"./Label-Cb2VwvBl.js";import"./Button-iOZwwJt-.js";import"./Hidden-DRJRklAH.js";import"./useLabel-CwHTcLwx.js";import"./useLabels-DQJyw6TD.js";import"./useButton-q5vZ9ZE2.js";import"./Dialog-3fHPTowi.js";import"./RSPContexts-D1vu3Vuz.js";import"./OverlayArrow-zzAqmKbl.js";import"./useResizeObserver-CpHe5CSo.js";import"./useControlledState-DuJeSPKv.js";import"./Collection-CQCqI1zo.js";import"./index-_K1HwoT7.js";import"./Separator-Bjcgp8Dp.js";import"./SelectionManager-BOMbf9lp.js";import"./useEvent-B26EYKij.js";import"./scrollIntoView-D0LuDjH5.js";import"./SelectionIndicator-CiEVc6IP.js";import"./useDescription-BorXdBcC.js";import"./ListKeyboardDelegate-DEvkxBuI.js";import"./PressResponder-VOsET5cv.js";import"./useLocalizedStringFormatter-DKxraR3H.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CeVmZFjW.js";import"./getScrollParent-l3TZr912.js";import"./VisuallyHidden-mcCQW-OH.js";import"./ModalOverlay-IshjVRTX.js";import"./x-BRuwBP3I.js";import"./createLucideIcon-DcZtHlnh.js";import"./useLocalizedStringFormatter-B7OxMwVs.js";import"./Heading-D9mndLSG.js";import"./Button-u1ZblIyK.js";import"./Button.module-BB7N-cLd.js";import"./info-BqKlEoQp.js";import"./Popover-CJb4S6mH.js";import"./Form-DQ-r7Yap.js";import"./useField-22FoNi1Z.js";import"./check-CHSRmvUz.js";import"./useToggleState-BvRdfMMU.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
