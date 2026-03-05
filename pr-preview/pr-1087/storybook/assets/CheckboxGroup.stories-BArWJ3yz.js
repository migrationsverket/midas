import{j as e}from"./iframe-DZcdf5IT.js";import{C as m}from"./CheckboxGroup-BfysyXLd.js";import{C as p}from"./Checkbox-BxmHrbwT.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DM82MGqL.js";import"./utils-CiNm3Qeg.js";import"./clsx-B-dksMZM.js";import"./Text-Cr9EbC1Z.js";import"./useFocusRing-D7vWP6Oc.js";import"./index-D2C9G4F0.js";import"./index-CZ7e-jOg.js";import"./clsx-Ciqy0D92.js";import"./Text-C3ytoZ0p.js";import"./Label-D-pQZBxw.js";import"./Button-CLvrgtgS.js";import"./Hidden-iA_GYfuG.js";import"./useLabels-CS1CNfia.js";import"./useButton-CzqG6NzO.js";import"./Dialog-D0qcpCsw.js";import"./RSPContexts-t528C0-R.js";import"./OverlayArrow-C54chPPt.js";import"./useResizeObserver-S9maVfBL.js";import"./useControlledState-vKZEA0Q3.js";import"./Collection-DOBVywAo.js";import"./index-OfYdkwnf.js";import"./Separator-BXFv3uYw.js";import"./SelectionManager-DP5WacrU.js";import"./useEvent-DLq_Qgr9.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BUKB6LFr.js";import"./useDescription-Cin-5YQg.js";import"./ListKeyboardDelegate-5OkbUwLz.js";import"./PressResponder-C8u0XAz_.js";import"./useLocalizedStringFormatter-BvvnikhE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DH5imeVC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BXj8zTTi.js";import"./Button-BczSxBEC.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BcqTdo_g.js";import"./createLucideIcon-DZnqfe9t.js";import"./x-kt49nsQj.js";import"./Heading-CF5i_zDs.js";import"./info-DHouu10t.js";import"./Popover-C-_vgrwU.js";import"./useFormValidation-nGNEbK2Q.js";import"./useField-DhXwoamE.js";import"./Form-C6UMk9z-.js";import"./check-D8aPjNxQ.js";import"./useToggleState-BfZW1Vel.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
