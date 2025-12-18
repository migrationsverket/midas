import{j as e}from"./iframe-_Z42HqI2.js";import{C as m}from"./CheckboxGroup-kXMInQiH.js";import{C as p}from"./Checkbox-D2208aOq.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BZ5o1p5r.js";import"./utils-CrFX56hd.js";import"./clsx-B-dksMZM.js";import"./Text-BpRe27H2.js";import"./useFocusRing-BVlddUKs.js";import"./index-BjqvvYkr.js";import"./index-BufdmmQ5.js";import"./clsx-Ciqy0D92.js";import"./Text-B2Ny6SaZ.js";import"./Label-BRbMDvFD.js";import"./Button-CK5CfXUr.js";import"./Hidden-BhDJNGVH.js";import"./useLabels-CPlvQ2_t.js";import"./useButton-BBRfPduy.js";import"./Dialog-CjESVl3F.js";import"./RSPContexts-CHAQW4_v.js";import"./OverlayArrow-D2w3lhSc.js";import"./useResizeObserver-Ls85LRA8.js";import"./useControlledState-C42bKwUu.js";import"./Collection-BP9le3z0.js";import"./index-6otkVSUG.js";import"./Separator-_W4MQ8Kt.js";import"./SelectionManager-BHdh6SkD.js";import"./useEvent-vDDYHoIn.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BAoKk-bv.js";import"./useDescription-5yHK5kQM.js";import"./ListKeyboardDelegate-DO9-fFrt.js";import"./PressResponder-BGrpQpZY.js";import"./useLocalizedStringFormatter-CWBL-q72.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CN8Uxxik.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BUe-0CEM.js";import"./Button-CJtuwFwb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DAmkoZvN.js";import"./createLucideIcon-DxsQvIVq.js";import"./x-CVRS_r9A.js";import"./Heading-BMJh1aBf.js";import"./info-C98lbZFz.js";import"./Popover-DzcCBfCJ.js";import"./useFormValidation-sacXgetL.js";import"./useField-CQWg_p4S.js";import"./Form-DeFwMNib.js";import"./check-Dko4o8CM.js";import"./useToggleState-PGirf_Xw.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
