import{j as e}from"./iframe-Cy1O8yWi.js";import{C as m}from"./CheckboxGroup-BT4lqZWA.js";import{C as p}from"./Checkbox-C8sL7oYZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CYJiMFhF.js";import"./utils-BjVRslkV.js";import"./clsx-B-dksMZM.js";import"./Text-BhW5Vg2W.js";import"./useFocusRing-Bp1jLS3U.js";import"./index-5ACCliHA.js";import"./index-Cyzr7w3M.js";import"./clsx-Ciqy0D92.js";import"./Text-BQ9CxdIy.js";import"./Label-BHC0llIC.js";import"./Button-D7uf2_z0.js";import"./Hidden-DfJC5d3o.js";import"./useLabels-BdY4SXxc.js";import"./useButton-MFlutIw_.js";import"./Dialog-CmYRx3W9.js";import"./RSPContexts-DYATOnMx.js";import"./OverlayArrow-BeQMntv7.js";import"./useResizeObserver-BVD-DuOZ.js";import"./useControlledState-CGXlN-Wm.js";import"./Collection-DE8F0J6D.js";import"./index-D0lRM3EA.js";import"./Separator-GeRgE_ub.js";import"./SelectionManager-B2hRycuL.js";import"./useEvent-BcfvInMW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DcYJlAXq.js";import"./useDescription-dqHAgAeW.js";import"./ListKeyboardDelegate-0Mg55Vki.js";import"./PressResponder-BZp455IP.js";import"./useLocalizedStringFormatter-Cv53LFTg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CD3a7BGu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BDU5-Uv6.js";import"./Button-CD-tfith.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3W37BXaG.js";import"./createLucideIcon-D6XDS7Dv.js";import"./x-DJ2qkTKw.js";import"./Heading-L0-fmDPo.js";import"./info-BBEEJM3F.js";import"./Popover-TInVXXk9.js";import"./useFormValidation-JJdJbyT_.js";import"./useField-DKhAEfz8.js";import"./Form-p9AgarO5.js";import"./check-YHeCWuqu.js";import"./useToggleState-BcE9R_VW.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
