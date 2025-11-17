import{j as e}from"./iframe-5OPxOFOo.js";import{C as m}from"./CheckboxGroup-Yt677mEY.js";import{C as p}from"./Checkbox-DBMowzxx.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DsFnT5cH.js";import"./utils-y7VQpXmV.js";import"./clsx-B-dksMZM.js";import"./Text-LE0QZyiT.js";import"./useFocusRing-YAhHe-vS.js";import"./index-Bl-U2zRt.js";import"./index--CP_AI-C.js";import"./clsx-Ciqy0D92.js";import"./Text-DJ8ddDqj.js";import"./Label-CPJGnTQu.js";import"./Button-DwYUQnyK.js";import"./Hidden-B8S2zPTS.js";import"./useLabels-DFrgstvf.js";import"./useButton-DEtSmmrP.js";import"./Dialog-C2kRLA1K.js";import"./RSPContexts-Bvl2qDvi.js";import"./OverlayArrow-CB3yFPwQ.js";import"./useResizeObserver-BdtodvEi.js";import"./useControlledState-C3eWgmLl.js";import"./Collection-DrYOgb_L.js";import"./index-Bhd8KZ-L.js";import"./Separator-CnjFkCy-.js";import"./SelectionManager-Byjjl2Ny.js";import"./useEvent-Dz5VVAtu.js";import"./scrollIntoView-BziE6UoW.js";import"./SelectionIndicator-org_szYd.js";import"./useDescription-BnvkbMBx.js";import"./ListKeyboardDelegate-g1kRYTEr.js";import"./PressResponder-CTBn48Ct.js";import"./useLocalizedStringFormatter-CJrXU8gl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-ClkZa6SK.js";import"./VisuallyHidden-D4M_6Oa3.js";import"./useLocalizedStringFormatter-Butfipwt.js";import"./Button-CZG4l204.js";import"./Button.module-CtQ1deO8.js";import"./x-Dh9h_nLx.js";import"./createLucideIcon-DTp8xoi7.js";import"./Heading-DysyouUu.js";import"./info-CHVIPInP.js";import"./Popover-BKLrGn4p.js";import"./useFormValidation-Bc1me9n6.js";import"./useField-B5Gn1WPy.js";import"./Form-CrU0CZmU.js";import"./check-Cp8Nn04o.js";import"./useToggleState-C5CrrzM6.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
