import{j as e}from"./iframe-iqG9Nh4p.js";import{C as m}from"./CheckboxGroup-BpS_zY3n.js";import{C as p}from"./Checkbox-5oTqIDkb.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BAXhhZix.js";import"./utils-CoA-xVnF.js";import"./clsx-B-dksMZM.js";import"./Text-CGCkUK8m.js";import"./useFocusRing-DlPMedN0.js";import"./index-CRxXIn2u.js";import"./index-B42Zj5NC.js";import"./clsx-Ciqy0D92.js";import"./Text-CSjoqRHi.js";import"./Label-C5mNtC66.js";import"./Button-DY22xJQl.js";import"./Hidden-CGqHEiYj.js";import"./useLabel-CaKtnxKo.js";import"./useLabels-UUcXsAwx.js";import"./useButton-Brn-yYNf.js";import"./Dialog-CW1jNIiP.js";import"./RSPContexts-DhG5bWz2.js";import"./OverlayArrow-di8VuV2e.js";import"./useResizeObserver-CbqIe_2D.js";import"./useControlledState-_AGiuRBn.js";import"./Collection-U_BfqLcj.js";import"./index-BLKoWDIL.js";import"./Separator-BWcDzKjK.js";import"./SelectionManager-mV9s15G1.js";import"./useEvent-BB-kg239.js";import"./scrollIntoView-BjOH4z_I.js";import"./SelectionIndicator-xMaCnY94.js";import"./useDescription-Cj0GwJ4J.js";import"./ListKeyboardDelegate-DdqydRaK.js";import"./PressResponder-CSABQyF4.js";import"./useLocalizedStringFormatter-Cghfuk7K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DMO9jmw5.js";import"./getScrollParent-D-DaScmO.js";import"./VisuallyHidden-DzRCdULp.js";import"./x-ItA_xlKi.js";import"./createLucideIcon-Boi8XEVW.js";import"./useLocalizedStringFormatter-QZ0YYeXI.js";import"./Heading-BP9YWUvV.js";import"./Button-DtcyQC3H.js";import"./Button.module-BB7N-cLd.js";import"./info-CObpy4VF.js";import"./Popover-BFBBT22R.js";import"./Form-CbmDO35g.js";import"./useField-BsvjlsG3.js";import"./check-_q8zxWoL.js";import"./useToggleState-K4iyFcmu.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
