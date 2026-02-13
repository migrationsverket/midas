import{j as e}from"./iframe-BAZk80fE.js";import{C as m}from"./CheckboxGroup-CERGAp2s.js";import{C as p}from"./Checkbox-DbZ7anWj.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DkhBXd6b.js";import"./utils-BhwQ1U93.js";import"./clsx-B-dksMZM.js";import"./Text-Y_F9Qc3q.js";import"./useFocusRing-KQoMJM9B.js";import"./index-Dt6rToeR.js";import"./index-B34iUau2.js";import"./clsx-Ciqy0D92.js";import"./Text-Bot8P-aJ.js";import"./Label-bUmXrbRz.js";import"./Button-eLqhqo_k.js";import"./Hidden-CYtm9s7u.js";import"./useLabels-CMB4fTd1.js";import"./useButton-CPWt2pMm.js";import"./Dialog-I6ArOmci.js";import"./RSPContexts-Ch508LJX.js";import"./OverlayArrow-D4E-POyn.js";import"./useResizeObserver-jKdj-9Bn.js";import"./useControlledState-Cu0nMJYp.js";import"./Collection-RYZnXscw.js";import"./index-DRW4hoi9.js";import"./Separator-B7gVewdW.js";import"./SelectionManager-DGsipqzM.js";import"./useEvent-vN0H1Ozz.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B0NoolGA.js";import"./useDescription-CPqrosz3.js";import"./ListKeyboardDelegate-DxlpbXJb.js";import"./PressResponder-btOu00TB.js";import"./useLocalizedStringFormatter-B43e0zJD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BLotUQCh.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Coy_xA-f.js";import"./Button-BOvHyuxs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-GVvU4XfJ.js";import"./createLucideIcon-DfErYrVe.js";import"./x-BN85pv_s.js";import"./Heading-Dob0vkkd.js";import"./info-CUaHiiwh.js";import"./Popover-D47IUhzN.js";import"./useFormValidation-3uDySqxb.js";import"./useField-CzfiE8Id.js";import"./Form-CLsQOS9e.js";import"./check-KS_81kg8.js";import"./useToggleState-Cco5wGHn.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
