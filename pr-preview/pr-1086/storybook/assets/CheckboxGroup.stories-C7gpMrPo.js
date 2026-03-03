import{j as e}from"./iframe-Cr1emYMW.js";import{C as m}from"./CheckboxGroup-Ddqnm60O.js";import{C as p}from"./Checkbox-D0WCaCLY.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B0n-brmG.js";import"./utils-BYhslQdw.js";import"./clsx-B-dksMZM.js";import"./Text-DDXxWSnO.js";import"./useFocusRing-DwGfHlXU.js";import"./index-CiTapa96.js";import"./index-Cl1_f9xd.js";import"./clsx-Ciqy0D92.js";import"./Text-CnKjHHeh.js";import"./Label-YR-X7IQJ.js";import"./Button-CEW_shex.js";import"./Hidden-BsA5K8lw.js";import"./useLabels-Db4gCzxq.js";import"./useButton-p5P1a05m.js";import"./Dialog-UeydkS3L.js";import"./RSPContexts-B-a6Suia.js";import"./OverlayArrow-dMygOw2S.js";import"./useResizeObserver-D9hey7So.js";import"./useControlledState-B64MCg1r.js";import"./Collection-CjiqYly9.js";import"./index-Bh9qVIDQ.js";import"./Separator-BnI024oJ.js";import"./SelectionManager-CEP2HlMb.js";import"./useEvent-CQ30ytXp.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTV7kd3r.js";import"./useDescription-CkLwrZ6Q.js";import"./ListKeyboardDelegate-DwqMwEwM.js";import"./PressResponder-UUr-3_GE.js";import"./useLocalizedStringFormatter-D5l-TwjB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-WlxCYmXk.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CrqhJx50.js";import"./Button-BPrHdrSQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DuJA0Avn.js";import"./createLucideIcon-GgkdFjqM.js";import"./x-Bw4oGsQc.js";import"./Heading-DZXk2wov.js";import"./info-CTHGNhYd.js";import"./Popover-B4kDvICb.js";import"./useFormValidation-Nhhgb2EE.js";import"./useField-BTs-PD6t.js";import"./Form-PPaHTaru.js";import"./check-CWS-4W0B.js";import"./useToggleState-eBpL6zIs.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
