import{j as e}from"./iframe-cBPiYa1j.js";import{C as m}from"./CheckboxGroup-CEfSwtwI.js";import{C as p}from"./Checkbox-JIHrqfVJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BxRdx_yQ.js";import"./utils-BsI1IeI-.js";import"./clsx-B-dksMZM.js";import"./Text-C9cmeUrC.js";import"./useFocusRing-C3NoufTF.js";import"./index-D3tkVpzv.js";import"./index-DfcTzlFO.js";import"./clsx-Ciqy0D92.js";import"./Text-D5vIYSns.js";import"./Label-BfoWM_JL.js";import"./Button-DqAr_Q3f.js";import"./Hidden-D604MEhG.js";import"./useLabels-Ca7v6l-q.js";import"./useButton-DElLBHjA.js";import"./Dialog-Cj8ki1Hg.js";import"./RSPContexts-BVzQNN1V.js";import"./OverlayArrow-Dqlp4uUl.js";import"./useResizeObserver-B_WyBlk8.js";import"./useControlledState-CfXtp8hs.js";import"./Collection-Dn6tIavS.js";import"./index-CPvCTsGB.js";import"./Separator-DBIn7cNY.js";import"./SelectionManager-C7e3B10G.js";import"./useEvent-BPy_avrj.js";import"./scrollIntoView-B9C68jgb.js";import"./SelectionIndicator-DjVvrJs-.js";import"./useDescription-BdbzbGud.js";import"./ListKeyboardDelegate-B2duwmnq.js";import"./PressResponder-CDJA5YO8.js";import"./useLocalizedStringFormatter-DCwlqfNN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BNm3_zhV.js";import"./VisuallyHidden-YR2KbVd6.js";import"./Button-DLE1YCfG.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BmqhCjnA.js";import"./createLucideIcon-Ft43kjRZ.js";import"./x-CBM_MZZz.js";import"./Heading-DGMv4Qcq.js";import"./info-BBOV1Q_L.js";import"./Popover-vuScbU9k.js";import"./useFormValidation-CjoRhxJO.js";import"./useField-7H-zKfh5.js";import"./Form-SVjqc9Qj.js";import"./check-BFbYxWZT.js";import"./useToggleState-C7OkEJ8e.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
