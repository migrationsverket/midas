import{j as e}from"./iframe-BgN3T3xs.js";import{C as m}from"./CheckboxGroup-CUOsDMDG.js";import{C as p}from"./Checkbox-ux6-w8Op.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Cg97d-Xo.js";import"./utils-Cy9VbIrx.js";import"./clsx-B-dksMZM.js";import"./Text-Cws1TLos.js";import"./useFocusRing-s6LcsVmw.js";import"./index-C8VIyOAM.js";import"./index-DDvZmCCm.js";import"./clsx-Ciqy0D92.js";import"./Text-Bm_qFAHe.js";import"./Label-D1gG2SbZ.js";import"./Button-BtxXkeGG.js";import"./Hidden-BUpoh45I.js";import"./useLabel-C7Safkp7.js";import"./useLabels-CtvG29M_.js";import"./useButton-CYBdLk3p.js";import"./Dialog-VV4Th7nF.js";import"./RSPContexts-Bpqk6zEL.js";import"./OverlayArrow-YC9l2RCr.js";import"./useResizeObserver-D3y4OrMP.js";import"./useControlledState-DuMP6pst.js";import"./Collection-B-iXDbz1.js";import"./index-DFoRH5SL.js";import"./Separator-7plsTytO.js";import"./SelectionManager-eGbG9yBw.js";import"./useEvent-Ca5NannD.js";import"./scrollIntoView-AzFj4YLb.js";import"./SelectionIndicator-BLCuA8ps.js";import"./useDescription-5FEPrfMM.js";import"./ListKeyboardDelegate-ClVPUkv2.js";import"./PressResponder-C1rE0JYs.js";import"./useLocalizedStringFormatter-B0LCJo7R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKbwhPfX.js";import"./getScrollParent-tQwdPnh6.js";import"./VisuallyHidden-DwUK2ATG.js";import"./Modal-ChminT0Z.js";import"./x-U-sIlJJn.js";import"./createLucideIcon-BePQROhA.js";import"./useLocalizedStringFormatter-B8VZY1gF.js";import"./Heading-zTI0ET9q.js";import"./Button-zGEEwAU5.js";import"./Button.module-BB7N-cLd.js";import"./info-BP6xMiLF.js";import"./Popover-BQH6Ulan.js";import"./Form-D63x0QWC.js";import"./useField-oBOSJSDH.js";import"./check-Bcp44gjk.js";import"./useToggleState-CMcV5OR9.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
