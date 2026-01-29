import{j as e}from"./iframe-CRizNrQm.js";import{C as m}from"./CheckboxGroup-EhGpqdlS.js";import{C as p}from"./Checkbox-BdUIUqR8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D2PjhZcF.js";import"./utils-K8G9J7j3.js";import"./clsx-B-dksMZM.js";import"./Text-DMcqYI8P.js";import"./useFocusRing-DbEG3syD.js";import"./index-BLxVqi3w.js";import"./index-U_5gcQv1.js";import"./clsx-Ciqy0D92.js";import"./Text-BVUreVA5.js";import"./Label-CIuYYTAs.js";import"./Button-B_2FCxCF.js";import"./Hidden-BVxPU0E9.js";import"./useLabels-DaIxsHkM.js";import"./useButton-C-avZcWZ.js";import"./Dialog-CTD66El0.js";import"./RSPContexts-CN45OwZB.js";import"./OverlayArrow-BbaNn7kM.js";import"./useResizeObserver-BWwrB_M1.js";import"./useControlledState-BE4ES4tB.js";import"./Collection-BP_hPNSj.js";import"./index-CubTc-Vn.js";import"./Separator-Cjbk9ber.js";import"./SelectionManager-DCOVGJOt.js";import"./useEvent-DR2hB797.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-RCQ_aLXk.js";import"./useDescription-Cy2gNtMJ.js";import"./ListKeyboardDelegate-C6qAstel.js";import"./PressResponder-DA8WnTpB.js";import"./useLocalizedStringFormatter-e4SpOeO9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_hT5jSd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CSY-auv0.js";import"./Button-BfSqLmBa.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BUb6pTdq.js";import"./createLucideIcon-B6uSx5I0.js";import"./x-B4wlmJ4S.js";import"./Heading-Je3Oz_eC.js";import"./info-D6kbZPrk.js";import"./Popover-uFPgnx0q.js";import"./useFormValidation-D9K4R1_5.js";import"./useField-BxlqX-oM.js";import"./Form-Bi2fHGRN.js";import"./check-DDutmDkN.js";import"./useToggleState-BIWAmMSj.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
