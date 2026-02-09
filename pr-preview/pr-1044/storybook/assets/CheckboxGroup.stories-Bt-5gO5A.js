import{j as e}from"./iframe-c0lnwIw4.js";import{C as m}from"./CheckboxGroup-DAv6qfeH.js";import{C as p}from"./Checkbox-DICUD4mf.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BbrhXxES.js";import"./utils-CKxPVGJv.js";import"./clsx-B-dksMZM.js";import"./Text-VyJc00c9.js";import"./useFocusRing-DJjkQoU4.js";import"./index-B1hzWEWI.js";import"./index-DjCW-TlU.js";import"./clsx-Ciqy0D92.js";import"./Text-BgxEb-sb.js";import"./Label-B49Jqfzv.js";import"./Button-DJS_LvWc.js";import"./Hidden-BDS_rwuq.js";import"./useLabels-Bl4EQLSq.js";import"./useButton-CVyNe4Wj.js";import"./Dialog-NBef7cnK.js";import"./RSPContexts-CZlKyDN8.js";import"./OverlayArrow-B5tQ5esy.js";import"./useResizeObserver-2rC7HlZU.js";import"./useControlledState-BiOg0pOd.js";import"./Collection-CTWoRlND.js";import"./index-BBJl7wpF.js";import"./Separator-FrQWq6eI.js";import"./SelectionManager-DTN516oZ.js";import"./useEvent-Dv7LfemI.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BoR3Iio9.js";import"./useDescription-DRQZrp8o.js";import"./ListKeyboardDelegate-DKKEE7Yq.js";import"./PressResponder-CCt4tGQe.js";import"./useLocalizedStringFormatter-BFGWbxP6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-G949kkRC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B6dXGLX8.js";import"./Button-C8YLXKEl.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DQGhBMx9.js";import"./createLucideIcon-X-I_ue95.js";import"./x-C52Idzcm.js";import"./Heading-CcM8YS3h.js";import"./info-DeFS6_WF.js";import"./Popover-CKv23Bg8.js";import"./useFormValidation-BTtRPMAF.js";import"./useField-rzQ8CQUh.js";import"./Form-Ct2ya3Wm.js";import"./check-EcwPEekn.js";import"./useToggleState-Cugotgny.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
