import{j as e}from"./iframe-BU6kIGzE.js";import{C as m}from"./CheckboxGroup-Cyw_zqx2.js";import{C as p}from"./Checkbox-DrWPhbFG.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CUk6ZN6c.js";import"./utils-DwBB38ip.js";import"./clsx-B-dksMZM.js";import"./Text-JypUyMeF.js";import"./useFocusRing-Dvp7gJRw.js";import"./index-Dv6U3VwT.js";import"./index-DyZImytF.js";import"./clsx-Ciqy0D92.js";import"./Text-CQspy15V.js";import"./Label-BPdaWe9B.js";import"./Button-DOwpnfPC.js";import"./Hidden-CGqS0Jzf.js";import"./useLabels-DikblKAC.js";import"./useButton-DOAxkkBc.js";import"./Dialog-xlRMg6iz.js";import"./RSPContexts-BRqazcIV.js";import"./OverlayArrow-Bl3KLXNF.js";import"./useResizeObserver-B94eBDEG.js";import"./useControlledState-CCRLFJ5Q.js";import"./Collection-BF4xCepe.js";import"./index-DnHLYRqW.js";import"./Separator-XoRWK5dX.js";import"./SelectionManager-C271GyWd.js";import"./useEvent-Bzt2Vkll.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-eeJzDz1Z.js";import"./useDescription-B-6CLxOX.js";import"./ListKeyboardDelegate-2S5HS31x.js";import"./PressResponder-Ds6sB9YM.js";import"./useLocalizedStringFormatter-E1-lnqHI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BvjedF0u.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BjLN-Bea.js";import"./Button-DUCzx4_4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dkmyjsow.js";import"./createLucideIcon-BFaI5vBG.js";import"./x-DLGK6h12.js";import"./Heading-Z4JZUrow.js";import"./info-8oCdIKAu.js";import"./Popover-Ds96ofCc.js";import"./useFormValidation-DTxNX5vp.js";import"./useField-Dy2in3Zn.js";import"./Form-D_2Tzhhs.js";import"./check-BpQvJOQF.js";import"./useToggleState-v5XgKDtT.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
