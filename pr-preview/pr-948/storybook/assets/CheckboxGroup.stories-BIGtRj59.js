import{j as e}from"./iframe-D_RLRaO3.js";import{C as m}from"./CheckboxGroup-CYQnSN7A.js";import{C as p}from"./Checkbox-C-BVHK48.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CLCPHxAE.js";import"./utils-BlqKQH7t.js";import"./clsx-B-dksMZM.js";import"./Text-BuBdqt_E.js";import"./useFocusRing-DLvend6y.js";import"./index-BdZm9yDI.js";import"./index-CLauSptU.js";import"./clsx-Ciqy0D92.js";import"./Text-B2nU6iIt.js";import"./Label-CKfxvLZ1.js";import"./Button-u0QZa7Fn.js";import"./Hidden-DFjx3PZR.js";import"./useLabels-D_fUya2Q.js";import"./useButton-D0Ww05Nb.js";import"./Dialog-CwmWdhJm.js";import"./RSPContexts-C-7yHdm5.js";import"./OverlayArrow-DXgFn0bE.js";import"./useResizeObserver-C2dZ-Udt.js";import"./useControlledState-BFob-p1I.js";import"./Collection-BXpYpuHa.js";import"./index-Dmj2XFJ6.js";import"./Separator-B9neSB_O.js";import"./SelectionManager-BQ3woPmb.js";import"./useEvent-D1OomJ4P.js";import"./scrollIntoView-Dm-OSLLN.js";import"./SelectionIndicator-Cq7sdARx.js";import"./useDescription-MuK9kXs1.js";import"./ListKeyboardDelegate-DzNijRHj.js";import"./PressResponder-C4jhDrkT.js";import"./useLocalizedStringFormatter-DNatSRRY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DErfkRCT.js";import"./VisuallyHidden-Bv5E6YOy.js";import"./Button-CmlIBVdc.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B7X7aezu.js";import"./createLucideIcon-tmDJTb0C.js";import"./x-D4f4_rt6.js";import"./Heading-zbAesl1A.js";import"./info-B9Cq6StL.js";import"./Popover-FFmuhwtL.js";import"./useFormValidation-DdWaKx-M.js";import"./useField-BcNwyeKj.js";import"./Form-lzVeGsdG.js";import"./check-B7ARo8UR.js";import"./useToggleState-HdlOOpee.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
