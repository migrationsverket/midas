import{j as e}from"./iframe-_Hk9HBhX.js";import{C as m}from"./CheckboxGroup-DrHacWu4.js";import{C as p}from"./Checkbox-C0KZoCr8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BnqaSw3Q.js";import"./utils-Tr1wzETD.js";import"./clsx-B-dksMZM.js";import"./Text-CFXOaGuN.js";import"./useFocusRing-CUpBT6GV.js";import"./index-fEZrWfc8.js";import"./index-Cjzv3PRo.js";import"./clsx-Ciqy0D92.js";import"./Text-4AExYRWh.js";import"./Label-CPIJO4oY.js";import"./Button-BcVwX6wB.js";import"./Hidden-vPthIoGd.js";import"./useLabel-CG8Xm4bD.js";import"./useLabels-XRHHudnr.js";import"./useButton-CZkGYXOZ.js";import"./Dialog-gbJqnVCn.js";import"./RSPContexts-BkY4NJgN.js";import"./OverlayArrow-C8dc221V.js";import"./useResizeObserver-Dob1-ek4.js";import"./useControlledState-CXVEjKuF.js";import"./Collection-38fQTHAm.js";import"./index-D0DH_Og7.js";import"./Separator-mZ0uLOGM.js";import"./SelectionManager-CHKeKSA7.js";import"./useEvent-BoXIj02p.js";import"./scrollIntoView-DeSIzk3n.js";import"./SelectionIndicator-BOwLDBzR.js";import"./useDescription-Br1cNKJN.js";import"./ListKeyboardDelegate-CTPIAQRz.js";import"./PressResponder-DSjXrWnb.js";import"./useLocalizedStringFormatter-xIKmWIeo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BrdO1Epl.js";import"./getScrollParent-arYGATXV.js";import"./VisuallyHidden-CE55BuvM.js";import"./ModalOverlay-C_u5Ore6.js";import"./x-3memj5xE.js";import"./createLucideIcon-qIP4byR5.js";import"./useLocalizedStringFormatter-DUwGsNzO.js";import"./Heading-CVFjfB5H.js";import"./Button-BPI35lWH.js";import"./Button.module-BB7N-cLd.js";import"./info-CxjPhrtp.js";import"./Popover-BFw3zMr4.js";import"./Form-CJTM5oJs.js";import"./useField-JEZIk8ke.js";import"./check-D8LrGIdX.js";import"./useToggleState-CMh-QzHR.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
