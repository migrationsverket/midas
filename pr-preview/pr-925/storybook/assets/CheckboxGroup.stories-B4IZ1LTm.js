import{j as e}from"./iframe-CbbBAmzj.js";import{C as m}from"./CheckboxGroup-C6BM6olR.js";import{C as p}from"./Checkbox-CNsRcRw0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DbUlAqb9.js";import"./utils-BhRPGHPf.js";import"./clsx-B-dksMZM.js";import"./Text-CsK72l07.js";import"./useFocusRing-0mAROpRM.js";import"./index-DHUIB7sV.js";import"./index-D-NGygsf.js";import"./clsx-Ciqy0D92.js";import"./Text-n09TZFQz.js";import"./Label-BIYSPuZD.js";import"./Button-QZ9MaBJ0.js";import"./Hidden-c3MDr7Jx.js";import"./useLabels-Cazyn2uu.js";import"./useButton-D2eklsDg.js";import"./Dialog-xgk7Quy_.js";import"./RSPContexts-BPA00K2J.js";import"./OverlayArrow-BIwFTVIx.js";import"./useResizeObserver-jhLK4rky.js";import"./useControlledState-BiEt7xRU.js";import"./Collection-DDh4M0ar.js";import"./index-DHKyPGSh.js";import"./Separator-CCXlXQ8s.js";import"./SelectionManager-BTz-o__f.js";import"./useEvent-CCkUFzKP.js";import"./scrollIntoView-CR5VKzw8.js";import"./SelectionIndicator-DaI3oYsN.js";import"./useDescription-B-ccyjfI.js";import"./ListKeyboardDelegate-C40ne4YI.js";import"./PressResponder-DRSxt3i7.js";import"./useLocalizedStringFormatter-BdrD0Kyz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-_ZlqpQjL.js";import"./VisuallyHidden-ClvY-xxs.js";import"./useLocalizedStringFormatter-Cgyg9bBm.js";import"./Button-xJdt2F7s.js";import"./Button.module-CtQ1deO8.js";import"./x-Bb0Jqa61.js";import"./createLucideIcon-CroHsTCf.js";import"./Heading-DvBuq4JF.js";import"./info-Cr4xwn4u.js";import"./Popover-DETG9_yb.js";import"./useFormValidation-CQFjrY1c.js";import"./useField-DrRy_FAN.js";import"./Form-BSOfWwjY.js";import"./check-D_oAjZXU.js";import"./useToggleState-VSDptohI.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
