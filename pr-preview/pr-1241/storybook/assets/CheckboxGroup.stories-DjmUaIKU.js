import{j as e}from"./iframe-y1u__L-8.js";import{C as m}from"./CheckboxGroup-BAKAbjfQ.js";import{C as p}from"./Checkbox-DUlQsQoZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B3ZCLrVr.js";import"./utils-Da8nMI6o.js";import"./clsx-B-dksMZM.js";import"./Text-LCGDIWeJ.js";import"./useFocusRing-DrPDMwIf.js";import"./index-sWYRQAk2.js";import"./index-BS1A8_4R.js";import"./clsx-Ciqy0D92.js";import"./Text-DI19gscT.js";import"./Label-DALoe-87.js";import"./Button-Bmc3JOkJ.js";import"./Hidden-DTarpjft.js";import"./useLabel-DdR6Ey9N.js";import"./useLabels-DIWDgD-T.js";import"./useButton-DFds5nbV.js";import"./Dialog-BiNhJBI-.js";import"./RSPContexts-BzgKoUFY.js";import"./OverlayArrow-DPD6R6ym.js";import"./useResizeObserver-DxXypk8I.js";import"./useControlledState-SL3CCMLy.js";import"./Collection-BXQTs4xV.js";import"./index-DpYlLRD4.js";import"./Separator-QJJ7D4Tg.js";import"./SelectionManager-C7uieu2B.js";import"./useEvent-BdW-8kO2.js";import"./scrollIntoView-DPjPSgYg.js";import"./SelectionIndicator-Dr5bwis_.js";import"./useDescription-C868_Zy-.js";import"./ListKeyboardDelegate-CotMEVTu.js";import"./PressResponder-Ci85RzOj.js";import"./useLocalizedStringFormatter-BaM5UMu5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C4rEa8ur.js";import"./getScrollParent-DOFnmN7L.js";import"./VisuallyHidden-vMJRuQeL.js";import"./ModalOverlay-CNEMfCp8.js";import"./x-WeprrzHp.js";import"./createLucideIcon-C_M4Trqf.js";import"./useLocalizedStringFormatter-BeHCnKuu.js";import"./Heading-C9dBce2x.js";import"./Button-DsGM-uqm.js";import"./Button.module-BB7N-cLd.js";import"./info-D_CiA-_d.js";import"./Popover-CtuY2he5.js";import"./Form-CePOgkA4.js";import"./useField-DeQcEKMo.js";import"./check-BGJ1UnCb.js";import"./useToggleState-CgzLupYO.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
