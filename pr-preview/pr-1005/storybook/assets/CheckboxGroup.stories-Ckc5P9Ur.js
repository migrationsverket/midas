import{j as e}from"./iframe-BFGJdV-R.js";import{C as m}from"./CheckboxGroup-BgF2MszP.js";import{C as p}from"./Checkbox-BNAsbqXq.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CQJGsK4z.js";import"./utils-kIk1YPQB.js";import"./clsx-B-dksMZM.js";import"./Text-BTml81CB.js";import"./useFocusRing-DJbT0PkJ.js";import"./index-q0PAT9Q8.js";import"./index-Bgs2Im9U.js";import"./clsx-Ciqy0D92.js";import"./Text-CkbWQQrW.js";import"./Label-C7zIDuhz.js";import"./Button-a7m7Ei1w.js";import"./Hidden-B0o1kVdW.js";import"./useLabels-ENg7mHVd.js";import"./useButton-DDbtau5_.js";import"./Dialog-D_OZhhNV.js";import"./RSPContexts-CqmQDw7G.js";import"./OverlayArrow-DEmWP7KY.js";import"./useResizeObserver-D1MRWwbK.js";import"./useControlledState-BkGWyaov.js";import"./Collection-CiDKSw_z.js";import"./index-enciD4hB.js";import"./Separator-DriMwrCJ.js";import"./SelectionManager-oZcmF2nO.js";import"./useEvent-DQ79yaUH.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D1ZBuTHZ.js";import"./useDescription-Bg2UYj8o.js";import"./ListKeyboardDelegate-4WXjROQx.js";import"./PressResponder-CR5O4XJJ.js";import"./useLocalizedStringFormatter-CssQMkou.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXzkv8jy.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C8v0qjRB.js";import"./Button-CC7hJvPh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C_5YXSYz.js";import"./createLucideIcon-C3uE9ls3.js";import"./x-B48QovPv.js";import"./Heading-BO-wR8OH.js";import"./info-D5YW8ZDe.js";import"./Popover-CSbQ_ZIu.js";import"./useFormValidation-CfMbP7bF.js";import"./useField-BaW-osIe.js";import"./Form-kf_9l73i.js";import"./check-BxszO9_4.js";import"./useToggleState-ZfLL5xdz.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
