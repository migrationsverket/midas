import{j as e}from"./iframe-BfMhQjGU.js";import{C as m}from"./CheckboxGroup-BC5WJOhM.js";import{C as p}from"./Checkbox-D43XtY2i.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-xqjiIrlm.js";import"./utils-DaDNkmjx.js";import"./clsx-B-dksMZM.js";import"./Text-9jZvM0HP.js";import"./useFocusRing-C5Yjq8eB.js";import"./index-CANV50_Z.js";import"./index-DcgLR03X.js";import"./clsx-Ciqy0D92.js";import"./Text--boW3P5m.js";import"./Label-CDKy4Bz8.js";import"./Button-9bk196xZ.js";import"./Hidden-DhDQuc5B.js";import"./useLabel-DV2YbXB7.js";import"./useLabels-DmE0eIr6.js";import"./useButton-CVkS8nd6.js";import"./Dialog-Bqez9MV7.js";import"./RSPContexts-BaQPI9Wj.js";import"./OverlayArrow-BXRCRQkz.js";import"./useResizeObserver-D2UX_B6u.js";import"./useControlledState-DswV1VSh.js";import"./Collection-DYsPSnsY.js";import"./index-Bh5h3w6e.js";import"./Separator-CdLdFLDa.js";import"./SelectionManager-Gp2zBd9X.js";import"./useEvent-C5eanDI0.js";import"./scrollIntoView-ffGKw_mR.js";import"./SelectionIndicator-I0ZLZ8XL.js";import"./useDescription-DLgHt4Bt.js";import"./ListKeyboardDelegate-DDGYt9ze.js";import"./PressResponder-B9nNNJjB.js";import"./useLocalizedStringFormatter-qWRJ97i-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CMPtAkPr.js";import"./getScrollParent-D97Sq6rj.js";import"./VisuallyHidden-CrEXwPZJ.js";import"./x-CGIghyVu.js";import"./createLucideIcon-DSNzZSu6.js";import"./useLocalizedStringFormatter-7a6_xXLI.js";import"./Heading-CBhEHIYh.js";import"./Button-blC6kfyz.js";import"./Button.module-BB7N-cLd.js";import"./info-ZBir3-B6.js";import"./Popover-CkZJyiao.js";import"./Form-BqegSd4k.js";import"./useField-B97SdsPB.js";import"./check-RR3EPQ5X.js";import"./useToggleState-gWE921FC.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
