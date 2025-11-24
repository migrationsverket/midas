import{j as e}from"./iframe-Cur_B9x6.js";import{C as m}from"./CheckboxGroup-CFlnzcka.js";import{C as p}from"./Checkbox-C9HIsUXZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DnpHL-2i.js";import"./utils-BHg8G-Z9.js";import"./clsx-B-dksMZM.js";import"./Text-QTfkrrvd.js";import"./useFocusRing-CRuZSqUo.js";import"./index-CTduu0cI.js";import"./index-CqyIpgV0.js";import"./clsx-Ciqy0D92.js";import"./Text-D7rZbanu.js";import"./Label-CbJYWk6_.js";import"./Button-BeG5EWPQ.js";import"./Hidden-SFeirINQ.js";import"./useLabels-iG7AllCV.js";import"./useButton-DpJaITZj.js";import"./Dialog-OJGHz4e9.js";import"./RSPContexts-Cyp8LEBH.js";import"./OverlayArrow-kdhbq-tl.js";import"./useResizeObserver-vym_1DSH.js";import"./useControlledState-DxtyO0YE.js";import"./Collection-B_d6wNNo.js";import"./index-BB6WX98C.js";import"./Separator-CWpxlPgY.js";import"./SelectionManager-wZNnkYvf.js";import"./useEvent-Clrc5ouE.js";import"./scrollIntoView-CsmGj11v.js";import"./SelectionIndicator-CcuU4sT1.js";import"./useDescription-C3Xbbjp6.js";import"./ListKeyboardDelegate-C7laatx8.js";import"./PressResponder-WwNUR1MY.js";import"./useLocalizedStringFormatter-bd-N5t6G.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C9gbFImE.js";import"./VisuallyHidden-CNgGjdlH.js";import"./Button-D0lF0KE2.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CIxK5Ezl.js";import"./createLucideIcon-PM3bnbfq.js";import"./x-Cbbv-5j9.js";import"./Heading-CcG3dCOs.js";import"./info-vBy2wOK3.js";import"./Popover-B1ONg7yX.js";import"./useFormValidation-bdXELRtu.js";import"./useField-V2skQNbm.js";import"./Form-BGQST69-.js";import"./check-CgwaTUXd.js";import"./useToggleState-B8gzWnDd.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
