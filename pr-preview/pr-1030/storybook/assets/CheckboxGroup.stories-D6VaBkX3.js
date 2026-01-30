import{j as e}from"./iframe-BFkYxjpi.js";import{C as m}from"./CheckboxGroup-DON2a01z.js";import{C as p}from"./Checkbox-CetkY3WQ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CieRBtPV.js";import"./utils-Cvg_SbFj.js";import"./clsx-B-dksMZM.js";import"./Text-B49sPC4A.js";import"./useFocusRing-DhM4Chk4.js";import"./index-1TDjJkgb.js";import"./index-Bfl55b4y.js";import"./clsx-Ciqy0D92.js";import"./Text-f7GuBcHW.js";import"./Label-DM1O0_Ct.js";import"./Button-CPeoJlq9.js";import"./Hidden-BxbGe5dx.js";import"./useLabels-BHCtKWaQ.js";import"./useButton-w70hhn_t.js";import"./Dialog-B9a7SUZC.js";import"./RSPContexts-CX5DCwKf.js";import"./OverlayArrow-ILsMLnhq.js";import"./useResizeObserver-D3KF8nv8.js";import"./useControlledState-Jpu9zhJ4.js";import"./Collection-BK1fJAbU.js";import"./index-B4kv5YcN.js";import"./Separator-kJ6KgcrU.js";import"./SelectionManager-BEe4ixjS.js";import"./useEvent-C1J2zTQJ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-hnY6KiAM.js";import"./useDescription-BbdIQJUv.js";import"./ListKeyboardDelegate-BhusCfZS.js";import"./PressResponder-Bc2YRcYe.js";import"./useLocalizedStringFormatter-CfQ5XL6Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YwsPYOCI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CKZ765x3.js";import"./Button-C3X5dVZs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3SxVOfHu.js";import"./createLucideIcon-Dk_ZVBqn.js";import"./x-D-DQfH5Z.js";import"./Heading-CyhYxcEs.js";import"./info-CoC7mICA.js";import"./Popover-C2aZ7GTb.js";import"./useFormValidation-CqZHtoXh.js";import"./useField-B0sWGxFk.js";import"./Form-CecPzLQH.js";import"./check-D0L5Hkv2.js";import"./useToggleState-Ba6EMyZH.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
