import{j as e}from"./iframe-CfD08JHH.js";import{C as m}from"./CheckboxGroup-CkBm5-r3.js";import{C as p}from"./Checkbox-tEK-BLGt.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BgTli7tr.js";import"./utils-D9GPP0o0.js";import"./clsx-B-dksMZM.js";import"./Text-CrZg_N--.js";import"./useFocusRing-DbZlBvT3.js";import"./index-CkGKPUJ7.js";import"./index-Bb2OgbnK.js";import"./clsx-Ciqy0D92.js";import"./Text-DobS2R06.js";import"./Label-DaHUe__s.js";import"./Button-CxMmpQq_.js";import"./Hidden-_wiLvPg0.js";import"./useLabels-B8yJmO2W.js";import"./useButton-BtewcnCZ.js";import"./Dialog-BuZ5e6rP.js";import"./RSPContexts-DzlmE6Vu.js";import"./OverlayArrow-BAY2ltM6.js";import"./useResizeObserver-wbkaKojC.js";import"./useControlledState-qZuV6rTK.js";import"./Collection-CIMmwsxn.js";import"./index-cRxFTsXn.js";import"./Separator-CFJjpTXb.js";import"./SelectionManager-jZG-N2MR.js";import"./useEvent-CFcLw1G-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DFhcN9II.js";import"./useDescription-M-hiH2ur.js";import"./ListKeyboardDelegate-B6JGmauI.js";import"./PressResponder-BhAyL_vF.js";import"./useLocalizedStringFormatter-BtUZDJNi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-rvKxZqVA.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CyIL-gS9.js";import"./Button-BDhh5PYr.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DgtxZ7Zy.js";import"./createLucideIcon-DPrY6SpC.js";import"./x-BxwHOpJf.js";import"./Heading-COjECUAj.js";import"./info-DhtIJPz_.js";import"./Popover-u78J-cP8.js";import"./useFormValidation-D39AauB2.js";import"./useField-C6N5VUN_.js";import"./Form-CxynQJgr.js";import"./check-Mr0_gEbL.js";import"./useToggleState-D6eSFPU-.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
