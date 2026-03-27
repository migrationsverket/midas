import{j as e}from"./iframe-DDkxC9AE.js";import{C as m}from"./CheckboxGroup-BaxCi2IA.js";import{C as p}from"./Checkbox-C3hgBi4u.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B9fj7azt.js";import"./utils-Bv-3ie4X.js";import"./clsx-B-dksMZM.js";import"./Text-BtXc1lRV.js";import"./useFocusRing-C43-8fCQ.js";import"./index-BLH1qvEF.js";import"./index-C98fnEDe.js";import"./clsx-Ciqy0D92.js";import"./Text-1G0eP0RO.js";import"./Label-WgVKNVE6.js";import"./Button-CUTFiFAp.js";import"./Hidden-BdbLRp3U.js";import"./useLabel-LlSNGQxT.js";import"./useLabels-ClPbn0aQ.js";import"./useButton-B95KM6rf.js";import"./Dialog-BNgGAs-b.js";import"./RSPContexts-C5FShT2F.js";import"./OverlayArrow-Cb2dLaVx.js";import"./useResizeObserver-DgRhHGeT.js";import"./useControlledState-DDBKKIZJ.js";import"./Collection-CMDg-C_S.js";import"./index-B-3MKQwG.js";import"./Separator-BGQS8scE.js";import"./SelectionManager-CbRDXdwz.js";import"./useEvent-DM9NFQXa.js";import"./scrollIntoView-BuO0Q3pl.js";import"./SelectionIndicator-D-EQnl1p.js";import"./useDescription-B6KDpjFY.js";import"./ListKeyboardDelegate-BtZE-5Nj.js";import"./PressResponder-BoK0S5_s.js";import"./useLocalizedStringFormatter-em54CWSv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BcDCZZOC.js";import"./getScrollParent-XviTZluJ.js";import"./VisuallyHidden-ZtpMBoq6.js";import"./x-zjzglfs-.js";import"./createLucideIcon-tquE4JOn.js";import"./useLocalizedStringFormatter-DdWGKtAM.js";import"./Heading-Bh678V32.js";import"./Button-nixYBadL.js";import"./Button.module-BB7N-cLd.js";import"./info-Cn5IroR_.js";import"./Popover-ukrCm8JI.js";import"./Form-CGJqMPHB.js";import"./useField-DdUlwoVZ.js";import"./check-BZS5NC6P.js";import"./useToggleState-CckjuNoe.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
