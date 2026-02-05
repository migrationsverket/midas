import{j as e}from"./iframe-BKVZlbwK.js";import{C as m}from"./CheckboxGroup-CQlTrOTc.js";import{C as p}from"./Checkbox-CStRSk00.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DDgadqx5.js";import"./utils-DPuolxVc.js";import"./clsx-B-dksMZM.js";import"./Text-B3d4ibdb.js";import"./useFocusRing-B5vFDtZh.js";import"./index-PkL0TDm3.js";import"./index-BKxFf4CA.js";import"./clsx-Ciqy0D92.js";import"./Text-B3rWnA0b.js";import"./Label-CCnwf94q.js";import"./Button-BXNg7Jsx.js";import"./Hidden-BRpSC0Ka.js";import"./useLabels-BVLaKNrB.js";import"./useButton-BvRx9rmC.js";import"./Dialog-DyLYXNfk.js";import"./RSPContexts-B4IeL1gt.js";import"./OverlayArrow-M76ULew0.js";import"./useResizeObserver-CrYaDSu2.js";import"./useControlledState-DGZkTwEL.js";import"./Collection-BX0rPR2l.js";import"./index-B_usJpQo.js";import"./Separator-FYBudPC2.js";import"./SelectionManager-D5x3q2vB.js";import"./useEvent-vLHKVDXB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CWqxxjhH.js";import"./useDescription-xVVRlRNW.js";import"./ListKeyboardDelegate-CWBS7xji.js";import"./PressResponder-ycJef-yO.js";import"./useLocalizedStringFormatter-B2KN6w1Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bmrdo5L6.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DRvu9CAK.js";import"./Button-CMuF6ttX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-hBwIhHtL.js";import"./createLucideIcon-DBPtg95-.js";import"./x-grlvjwkz.js";import"./Heading--57vxiPm.js";import"./info-BkDIh8cC.js";import"./Popover-vbRgXQBq.js";import"./useFormValidation-B2K6ECOw.js";import"./useField-_-3BWxJQ.js";import"./Form-C1pExWr0.js";import"./check-Qq4Sjrl0.js";import"./useToggleState-C9pi_6aw.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
