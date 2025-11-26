import{j as e}from"./iframe-7ZExgDLE.js";import{C as m}from"./CheckboxGroup-C20SbpgE.js";import{C as p}from"./Checkbox-BkbA0HbH.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DiCKIn2u.js";import"./utils-BoXSSKyR.js";import"./clsx-B-dksMZM.js";import"./Text-BVSLsEHx.js";import"./useFocusRing-CX-L5Kpl.js";import"./index-DwsAXc7Z.js";import"./index-eZbuALby.js";import"./clsx-Ciqy0D92.js";import"./Text-BWmmQCxQ.js";import"./Label-D-A4c0s6.js";import"./Button-DYO8g5_-.js";import"./Hidden-Ce_euZaI.js";import"./useLabels-CsqYfXZE.js";import"./useButton-DdjH6yH6.js";import"./Dialog-DI7mIQaz.js";import"./RSPContexts-P8m1kxZt.js";import"./OverlayArrow-DNU32fBP.js";import"./useResizeObserver-C3__wwbA.js";import"./useControlledState-CDwK7HKb.js";import"./Collection-CfJw5GD2.js";import"./index-DzbanXKQ.js";import"./Separator-BdoLtaY4.js";import"./SelectionManager-Ct447hjp.js";import"./useEvent-Dg2rn8v8.js";import"./scrollIntoView-BAkViWMs.js";import"./SelectionIndicator-CgcRgM0p.js";import"./useDescription-CDQNtBpg.js";import"./ListKeyboardDelegate-BIPBU9aX.js";import"./PressResponder-D1FlewEP.js";import"./useLocalizedStringFormatter-CPNOebpp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Gd1uit5C.js";import"./VisuallyHidden-DU8j1gfc.js";import"./Button-CxDis2kk.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BgxsfTck.js";import"./createLucideIcon-ECDaDi6j.js";import"./x-cLdMTT66.js";import"./Heading-CdeywLRe.js";import"./info-geoQQmH_.js";import"./Popover-pYjXSSws.js";import"./useFormValidation-DgUvMbiF.js";import"./useField-BTmanUoT.js";import"./Form-8_AHTNmS.js";import"./check-DHxvLg4_.js";import"./useToggleState-BNJeD1zf.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
