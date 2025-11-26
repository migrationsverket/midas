import{j as e}from"./iframe-DZnzPlIp.js";import{C as m}from"./CheckboxGroup-DsT38FzD.js";import{C as p}from"./Checkbox-BNxqqg8c.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DOwOzQa8.js";import"./utils-CNFHwh-q.js";import"./clsx-B-dksMZM.js";import"./Text-D4f0kWpn.js";import"./useFocusRing-Nu8QV6qN.js";import"./index-08boVIM8.js";import"./index-BK2sDAog.js";import"./clsx-Ciqy0D92.js";import"./Text-B1aKKyjJ.js";import"./Label-DgJoek35.js";import"./Button-Dtht3JLw.js";import"./Hidden-BHBA8I1E.js";import"./useLabels-Bn0lABK-.js";import"./useButton-CARWH--T.js";import"./Dialog-CkgzdDIo.js";import"./RSPContexts-iwyWCt_c.js";import"./OverlayArrow-B9zMfTsY.js";import"./useResizeObserver-D_U72n22.js";import"./useControlledState-CrkPfz38.js";import"./Collection-6eU8VEUR.js";import"./index-DpWj-1TC.js";import"./Separator-C0uNNuwr.js";import"./SelectionManager-BHjS2xQl.js";import"./useEvent-ChHWq_03.js";import"./scrollIntoView-X-mFgLrZ.js";import"./SelectionIndicator-0CXjV7zh.js";import"./useDescription-CATiUuAQ.js";import"./ListKeyboardDelegate-qlktSOjg.js";import"./PressResponder-BEKAxGBZ.js";import"./useLocalizedStringFormatter-BQqTysii.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Ba2DoF1m.js";import"./VisuallyHidden-DEEJ503M.js";import"./Button-Q8NbkpbT.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B9kfZZmT.js";import"./createLucideIcon-D1ffg5uX.js";import"./x-CCN9s2Tf.js";import"./Heading-BMs_vKOP.js";import"./info-DdgUB37-.js";import"./Popover-DKEhs-aD.js";import"./useFormValidation-CdpB-86Q.js";import"./useField-BXP1GnjY.js";import"./Form-Fx6UW9Qo.js";import"./check-BLrwqrl9.js";import"./useToggleState-DDPsp0Iy.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
