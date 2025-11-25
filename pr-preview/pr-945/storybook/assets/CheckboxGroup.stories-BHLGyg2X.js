import{j as e}from"./iframe-DbQZ1WFC.js";import{C as m}from"./CheckboxGroup-DGui-E9Z.js";import{C as p}from"./Checkbox-DzO_P9ny.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-F5fORIfF.js";import"./utils-BkzzIoAp.js";import"./clsx-B-dksMZM.js";import"./Text-B6b94t7A.js";import"./useFocusRing-CheS-c_q.js";import"./index-CROQ9br5.js";import"./index-sIqg8Qsv.js";import"./clsx-Ciqy0D92.js";import"./Text-BABzq6Ri.js";import"./Label-CqSZy7O-.js";import"./Button-Br70F59r.js";import"./Hidden-B3MQk5Ru.js";import"./useLabels-DRfk8RpQ.js";import"./useButton-CLtYZVZ3.js";import"./Dialog-BLfx1Mo3.js";import"./RSPContexts-uaVVndL-.js";import"./OverlayArrow-Cf8ob7Mo.js";import"./useResizeObserver-BhTRiqFg.js";import"./useControlledState-CSIEjkhQ.js";import"./Collection-Cw0fD4Gd.js";import"./index-rlRpQL3G.js";import"./Separator-BXwRpW8L.js";import"./SelectionManager-DTIFBbyP.js";import"./useEvent-CteodfXB.js";import"./scrollIntoView-Bbu8JQBY.js";import"./SelectionIndicator-baLTaFmW.js";import"./useDescription-B8U0ma1K.js";import"./ListKeyboardDelegate-B_exNFNu.js";import"./PressResponder-BsuJcOBg.js";import"./useLocalizedStringFormatter-w8tEygSo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CmwBXzrJ.js";import"./VisuallyHidden-CSCyYljM.js";import"./Button-B2eIdaxs.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DN-DiLNO.js";import"./createLucideIcon-C67xWClu.js";import"./x-DeC_HKTN.js";import"./Heading-CzJ3mSO-.js";import"./info-RTsCjaPr.js";import"./Popover-C9KCiWFG.js";import"./useFormValidation-BBGk5RHv.js";import"./useField-Bg_b1pr8.js";import"./Form-CjOmUg_X.js";import"./check-9PYr7jnb.js";import"./useToggleState-DKYD99xY.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
