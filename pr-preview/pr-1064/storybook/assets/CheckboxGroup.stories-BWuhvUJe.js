import{j as e}from"./iframe-DrmPUhtX.js";import{C as m}from"./CheckboxGroup-CbOnL-Ar.js";import{C as p}from"./Checkbox-B8x5w7YU.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-obpxZCHn.js";import"./utils-Dua4TRiH.js";import"./clsx-B-dksMZM.js";import"./Text-CxmjGSV2.js";import"./useFocusRing-BNHXCoxm.js";import"./index-PAOxTS2r.js";import"./index-D-dIolA3.js";import"./clsx-Ciqy0D92.js";import"./Text-DkoI531E.js";import"./Label-CVvg9Udt.js";import"./Button-BRd7RKkm.js";import"./Hidden-BtcA-10V.js";import"./useLabels-BuRHQX82.js";import"./useButton-BeQ8yPDi.js";import"./Dialog-DiZH0gV9.js";import"./RSPContexts-ZJmi3UUb.js";import"./OverlayArrow-DfZMzxqA.js";import"./useResizeObserver-4XTvcQFt.js";import"./useControlledState-CPqfCSd5.js";import"./Collection-b6_XQqRw.js";import"./index-CQppD3ii.js";import"./Separator-BCBh5NBg.js";import"./SelectionManager-CgtbsMya.js";import"./useEvent-CawZJgI-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CrjHOO0s.js";import"./useDescription-CYDi8KlD.js";import"./ListKeyboardDelegate-DCJOIvbr.js";import"./PressResponder-B9h388Jb.js";import"./useLocalizedStringFormatter-5H_vyTJU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C6EuF8ob.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-bA_PzrHg.js";import"./Button-B2oaCNDe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CK8ulSsr.js";import"./createLucideIcon-lnTltRl9.js";import"./x-gIz19uq9.js";import"./Heading-D9rDmJb2.js";import"./info-Kgb_W6Sw.js";import"./Popover-DCw4wKE9.js";import"./useFormValidation-CXx1vBnx.js";import"./useField-BBSmKDdI.js";import"./Form-qpWFQjaS.js";import"./check-D58JMSz9.js";import"./useToggleState-C9F_KMPn.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
