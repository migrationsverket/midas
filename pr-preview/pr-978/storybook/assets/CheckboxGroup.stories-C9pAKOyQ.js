import{j as e}from"./iframe-CORtWEK2.js";import{C as m}from"./CheckboxGroup-xvgLw0tw.js";import{C as p}from"./Checkbox-D4r4abNG.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CbdqWLzS.js";import"./utils-CbLqdw8D.js";import"./clsx-B-dksMZM.js";import"./Text-D9pn1aDa.js";import"./useFocusRing-DAHXm3rF.js";import"./index-_3IIZhOl.js";import"./index-ghFCsy_t.js";import"./clsx-Ciqy0D92.js";import"./Text-qtQkisRI.js";import"./Label-lGEepuei.js";import"./Button-BOa3LVx9.js";import"./Hidden-DFmh2KXq.js";import"./useLabels-CrPPDWzT.js";import"./useButton-C8e2jiOG.js";import"./Dialog-CuXwUcGP.js";import"./RSPContexts-b-sJlq1-.js";import"./OverlayArrow-BZfrClPC.js";import"./useResizeObserver-BGoShnXN.js";import"./useControlledState-CODWqK6W.js";import"./Collection-BapyGBue.js";import"./index-D6Yp1oVT.js";import"./Separator-DVOOWIvI.js";import"./SelectionManager-D7Qo189l.js";import"./useEvent-Bof3Tfds.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-S37nVxrw.js";import"./useDescription-CDy7eaqv.js";import"./ListKeyboardDelegate-CGQcVm9U.js";import"./PressResponder-B5CUCkZV.js";import"./useLocalizedStringFormatter-D5B9Cm5e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CBk8eoOm.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bgzwemdr.js";import"./Button-By3RYRvn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-1dyltKPK.js";import"./createLucideIcon-BjA-WVv0.js";import"./x-DYcLBvwH.js";import"./Heading-Cm3PwG0D.js";import"./info-Cm1PqeLv.js";import"./Popover-DNHdhSfu.js";import"./useFormValidation-Al7UTscT.js";import"./useField-CdCDgYvT.js";import"./Form-9GgLpfP_.js";import"./check-DvK27O5W.js";import"./useToggleState-DBMWW6q4.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
