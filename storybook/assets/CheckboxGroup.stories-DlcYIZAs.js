import{j as e}from"./iframe-DXDVea5_.js";import{C as m}from"./CheckboxGroup-DO6R1EHx.js";import{C as p}from"./Checkbox-DTfbiXJr.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D7SZhjyZ.js";import"./utils-DmTgTNnL.js";import"./clsx-B-dksMZM.js";import"./Text-0AXlCnaa.js";import"./useFocusRing-CEQXzaY3.js";import"./index-BnRq08uH.js";import"./index-5yLJteXC.js";import"./clsx-Ciqy0D92.js";import"./Text-gvZnrrW0.js";import"./Label-DBFtbpIU.js";import"./Button-B96QzwM1.js";import"./Hidden-Fdu7osLZ.js";import"./useLabels-CE1k4rx3.js";import"./useButton-fPBc3Yts.js";import"./Dialog-nINmKPJf.js";import"./RSPContexts-BS0M9Uv7.js";import"./OverlayArrow-CRP3dZdS.js";import"./useResizeObserver-BNZgHg0J.js";import"./useControlledState-CbOkSAeB.js";import"./Collection-DngwyB9A.js";import"./index-mTCCUShB.js";import"./Separator-D6T5eon5.js";import"./SelectionManager-D_4gDcnl.js";import"./useEvent-JQpqaSX3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CUHlcaIO.js";import"./useDescription-Cg7YGuRz.js";import"./ListKeyboardDelegate-80wPV2vO.js";import"./PressResponder-CQUrdmzO.js";import"./useLocalizedStringFormatter-CUxy-dqS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-UV0FKMox.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cz2sP0_V.js";import"./Button-gdOhQx8I.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BRUhSZ3u.js";import"./createLucideIcon-De5c0UOR.js";import"./x-Dn2vW3HL.js";import"./Heading-C9UszV_P.js";import"./info--WkdfYOi.js";import"./Popover-C8U0P2YZ.js";import"./useFormValidation-CD1pPQHY.js";import"./useField-Dfhs4VTn.js";import"./Form-B5273415.js";import"./check-Cq2Fi8Q5.js";import"./useToggleState-Dh93-PiU.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
