import{j as e}from"./iframe-8LQjSoV-.js";import{C as m}from"./CheckboxGroup-qJ7KbwLj.js";import{C as p}from"./Checkbox-Dc7WO4QR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ZO43sKQE.js";import"./utils-D4ezzWJc.js";import"./clsx-B-dksMZM.js";import"./Text-Ba5DRcdW.js";import"./useFocusRing-eCeeo32D.js";import"./index-CSLiAA3d.js";import"./index-Bp415QC6.js";import"./clsx-Ciqy0D92.js";import"./Text-B7DoZjLQ.js";import"./Label-Dmk_nyub.js";import"./Button-B1ovmxx6.js";import"./Hidden-DMawGuP2.js";import"./useLabels-D4_n4kmh.js";import"./useButton-V0hMWo2E.js";import"./Dialog-D_ik0V2q.js";import"./RSPContexts-C9qIP2XU.js";import"./OverlayArrow-CFLAg81B.js";import"./useResizeObserver-BDH1aAVt.js";import"./useControlledState-BRRCr0-V.js";import"./Collection-CKtooNbR.js";import"./index-CvYpyXd6.js";import"./Separator-BgXH_ZB5.js";import"./SelectionManager-zJgynfyK.js";import"./useEvent-Ba0ZD0JM.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B4ysFdBZ.js";import"./useDescription-DXvHmld6.js";import"./ListKeyboardDelegate-BJ1_VC6C.js";import"./PressResponder-B4KwkXPh.js";import"./useLocalizedStringFormatter-C8C_oBkV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BhPqfReP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CKIzJ5lj.js";import"./Button-BHfZAxDJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEJaTWWg.js";import"./createLucideIcon-DK8ikGDs.js";import"./x-Cllv4JrD.js";import"./Heading-BEuxFqUj.js";import"./info-DKO4MRV3.js";import"./Popover-B8UBIi6G.js";import"./useFormValidation-CZUIQIsK.js";import"./useField-Bj5nGtmw.js";import"./Form-DD9j93NI.js";import"./check-DV3Qs5v4.js";import"./useToggleState-CgOs4O_l.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
