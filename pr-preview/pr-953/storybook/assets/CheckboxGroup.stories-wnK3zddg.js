import{j as e}from"./iframe-BVVtlJUS.js";import{C as m}from"./CheckboxGroup-CZk1kbgH.js";import{C as p}from"./Checkbox-DsnXqyJp.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CuKNWz7a.js";import"./utils-CgRkp8Dv.js";import"./clsx-B-dksMZM.js";import"./Text-BizgQ59x.js";import"./useFocusRing-2PI7p2oX.js";import"./index-B4gk8gxR.js";import"./index-DAR-rwum.js";import"./clsx-Ciqy0D92.js";import"./Text-2vkSLQm7.js";import"./Label-VPQA1-wP.js";import"./Button-Z5Xlbqol.js";import"./Hidden-BzUm3PMd.js";import"./useLabels-C9j3vCOF.js";import"./useButton-C4VZnzw0.js";import"./Dialog-XOfh_bir.js";import"./RSPContexts-B9iMytNE.js";import"./OverlayArrow-0QpXwgcP.js";import"./useResizeObserver-CNO3EL8D.js";import"./useControlledState-7re4kOBW.js";import"./Collection-DhgSDgxH.js";import"./index-B6aPPNol.js";import"./Separator-k198miS3.js";import"./SelectionManager-CRXYWMik.js";import"./useEvent-CTMQtBwI.js";import"./scrollIntoView-pHdkyFS1.js";import"./SelectionIndicator-ZzP435to.js";import"./useDescription-DvAMy-Is.js";import"./ListKeyboardDelegate-BFOwqObD.js";import"./PressResponder-Ng01hvOq.js";import"./useLocalizedStringFormatter-CY4FriNq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DggmcIHg.js";import"./VisuallyHidden-DXc6XDNY.js";import"./Button-DhG_Cd2F.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DqjGsQpT.js";import"./createLucideIcon-C3maNRZb.js";import"./x-BSw8RQ3b.js";import"./Heading-wekCqjXp.js";import"./info-C8mE3297.js";import"./Popover-DQ-iiWrZ.js";import"./useFormValidation-Bb3h5Nuh.js";import"./useField-BkHJutMe.js";import"./Form-CeH3jLLO.js";import"./check-u4DPFyl7.js";import"./useToggleState-PHzXpPJY.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
