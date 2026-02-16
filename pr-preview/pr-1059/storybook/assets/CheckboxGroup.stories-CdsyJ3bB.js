import{j as e}from"./iframe-CnLjYyDe.js";import{C as m}from"./CheckboxGroup-SqI7mDPp.js";import{C as p}from"./Checkbox-DBTaZ3Aa.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dse4I99A.js";import"./utils-PY6vNW2t.js";import"./clsx-B-dksMZM.js";import"./Text-lxQvVvph.js";import"./useFocusRing-C1Kccm1N.js";import"./index-BZe8XCs4.js";import"./index-Bwgl-PlP.js";import"./clsx-Ciqy0D92.js";import"./Text-fnyNn8_R.js";import"./Label-B69aw8i5.js";import"./Button-CDIxZDro.js";import"./Hidden-CeVZqhsZ.js";import"./useLabels-BGVam2Lm.js";import"./useButton-BI5y_GVj.js";import"./Dialog-B0ZdwbGm.js";import"./RSPContexts-D780ii40.js";import"./OverlayArrow-CsTaPArh.js";import"./useResizeObserver-CSU3MdTQ.js";import"./useControlledState-CDg9gtZR.js";import"./Collection-Bwov6hkO.js";import"./index-B8bUntZI.js";import"./Separator-Chc__u0z.js";import"./SelectionManager-DEpk9IGH.js";import"./useEvent-YRvbwzIz.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B38C2YlB.js";import"./useDescription-Bvw6I-Tk.js";import"./ListKeyboardDelegate-BMhvgd6_.js";import"./PressResponder-DdX93HrZ.js";import"./useLocalizedStringFormatter-DncuCv5i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-2Mlfyur2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DsHhkbAP.js";import"./Button-BssF-2IR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C41SEwV4.js";import"./createLucideIcon-CEFUCq1N.js";import"./x-BHy0cb0H.js";import"./Heading-CspeW5vm.js";import"./info-CPMZLgPj.js";import"./Popover-DeG2kA7V.js";import"./useFormValidation-06JlsHvr.js";import"./useField-tmII_gfS.js";import"./Form-BAHMXRIr.js";import"./check-BenD5apO.js";import"./useToggleState-BrYnlr1r.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
