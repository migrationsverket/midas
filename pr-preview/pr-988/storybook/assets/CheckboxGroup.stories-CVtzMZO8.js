import{j as e}from"./iframe-SsTP6rfd.js";import{C as m}from"./CheckboxGroup-CvFuZTz6.js";import{C as p}from"./Checkbox-B0ud7Rj3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-aNZ3_Z4n.js";import"./utils-xovjPneb.js";import"./clsx-B-dksMZM.js";import"./Text-BUE0kzAW.js";import"./useFocusRing-CLCXPOxW.js";import"./index-Bcr6E3JC.js";import"./index-LQvR83KO.js";import"./clsx-Ciqy0D92.js";import"./Text-BYhtQlzN.js";import"./Label-DlyznXzy.js";import"./Button-eerNJBVZ.js";import"./Hidden-CFG7p1De.js";import"./useLabels-CRKcuuZE.js";import"./useButton-BoBFAXLN.js";import"./Dialog-COZNtIzJ.js";import"./RSPContexts-2kwram0O.js";import"./OverlayArrow-Dxekro-s.js";import"./useResizeObserver-Gf-k7ja1.js";import"./useControlledState-BXOXeEl0.js";import"./Collection-DeinId22.js";import"./index-DPDwApPx.js";import"./Separator-CBiq70mz.js";import"./SelectionManager-Cvvws_4w.js";import"./useEvent-BTT-Ciqv.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B2ubSQgL.js";import"./useDescription-Cc-NjIDj.js";import"./ListKeyboardDelegate-QMc0p2wE.js";import"./PressResponder-CGyAUkDY.js";import"./useLocalizedStringFormatter-DeNsFJ4P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CCa2oAKd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CwQb82jS.js";import"./Button-Bb1EL28B.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B9q4ftJk.js";import"./createLucideIcon-B4PKFn84.js";import"./x-CbXdnvOX.js";import"./Heading-Bb6ZtnB2.js";import"./info-BQ1pR6Z2.js";import"./Popover-C1AUHTTf.js";import"./useFormValidation-BfwjaNDO.js";import"./useField-BXKsv6Nk.js";import"./Form-D1X6lCD7.js";import"./check-BOFYGN1a.js";import"./useToggleState-DFuIi0Ax.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
