import{j as e}from"./iframe-Dl_ZEAw_.js";import{C as m}from"./CheckboxGroup-EJT7gUzv.js";import{C as p}from"./Checkbox-BUr_oqk-.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-UQabDpKY.js";import"./utils-qArlt3QR.js";import"./clsx-B-dksMZM.js";import"./Text-CFgDWcau.js";import"./useFocusRing-BadRLYOI.js";import"./index-BBK-ahHU.js";import"./index-9pBu4mcS.js";import"./clsx-Ciqy0D92.js";import"./Text-LOlP3muv.js";import"./Label-C1MZzlub.js";import"./Button-Bhf2TykO.js";import"./Hidden-I_e1q7UG.js";import"./useLabels-CH32VCLn.js";import"./useButton-CgsE8t_H.js";import"./Dialog-CZxCBWib.js";import"./RSPContexts-H1zv-_Zf.js";import"./OverlayArrow-CcD4Fo11.js";import"./useResizeObserver-DA_A696h.js";import"./useControlledState-BBjZ-p-J.js";import"./Collection-DH0CocWE.js";import"./index-CLGNexvb.js";import"./Separator-C0uzKyW4.js";import"./SelectionManager-kDqWfjBV.js";import"./useEvent-BKVERzXX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BqabxLAl.js";import"./useDescription-_k4XNsw_.js";import"./ListKeyboardDelegate-DxE_0iuR.js";import"./PressResponder-D7N53MSk.js";import"./useLocalizedStringFormatter-CZjhQNpd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CxIx03pf.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-kMLlKce4.js";import"./Button-COrJAjql.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DU3dXRGP.js";import"./createLucideIcon-xHw9Gsln.js";import"./x-BXfpE1Va.js";import"./Heading-1v9YPZX2.js";import"./info-CC-RdadS.js";import"./Popover-Df9ufV0W.js";import"./useFormValidation-vxZMHFxu.js";import"./useField-DyugcTbx.js";import"./Form-Pc85qXYh.js";import"./check-CDzIu9a4.js";import"./useToggleState-CT8KEKji.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
