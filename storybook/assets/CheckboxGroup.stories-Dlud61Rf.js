import{j as e}from"./iframe-CIadKzdu.js";import{C as m}from"./CheckboxGroup-DLSfoetM.js";import{C as p}from"./Checkbox-DUjWct-V.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DvZEkmKh.js";import"./utils-DJPrropT.js";import"./clsx-B-dksMZM.js";import"./Text-D5AYdaUH.js";import"./useFocusRing-Cx6NGDs8.js";import"./index-eDsXbqKn.js";import"./index-lKxGNrLV.js";import"./clsx-Ciqy0D92.js";import"./Text-MV4z5RP3.js";import"./Label-D9jq9JnS.js";import"./Button-DWV-W5ps.js";import"./Hidden-kJ8IT1EO.js";import"./useLabels-EmpP_-hk.js";import"./useButton-ChIla9FM.js";import"./Dialog-vJ84OY4R.js";import"./RSPContexts-B0-J_gY5.js";import"./OverlayArrow-CVlv4gLj.js";import"./useResizeObserver-Dain9kfp.js";import"./useControlledState-DulzVG2b.js";import"./Collection-CuqHIG9l.js";import"./index-DJg3KfkY.js";import"./Separator-CcJw4JmH.js";import"./SelectionManager-CirZ2bQ2.js";import"./useEvent-CpZmOcxi.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-itVqOOaa.js";import"./useDescription-CpAdjwu7.js";import"./ListKeyboardDelegate-Bd9RyyDr.js";import"./PressResponder-COk2EHa3.js";import"./useLocalizedStringFormatter-DqJJo-SC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CSpOvMxI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D0TfLuCq.js";import"./Button-CpzbrA9E.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-AWWTtLk1.js";import"./createLucideIcon-CNkLKi9D.js";import"./x-q28ujAI-.js";import"./Heading-Cfj5vBSD.js";import"./info-DVe6ievT.js";import"./Popover-B68gghcY.js";import"./useFormValidation-CbBxKz-1.js";import"./useField-Vb42F4IT.js";import"./Form-B0qehKJ0.js";import"./check-CWBw-upL.js";import"./useToggleState-DHaSPSfh.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
