import{j as e}from"./iframe-XCmPjT_D.js";import{C as m}from"./CheckboxGroup-CE9yppVj.js";import{C as p}from"./Checkbox-DW9hQChm.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Ddp3ZKWY.js";import"./utils-UE4RAygH.js";import"./clsx-B-dksMZM.js";import"./Text-BuJILbtP.js";import"./useFocusRing-Ow3seqvj.js";import"./index-BelrfpRG.js";import"./index-BOZEGAbU.js";import"./clsx-Ciqy0D92.js";import"./Text-RTx-QT4L.js";import"./Label-D93AZRaQ.js";import"./Button-CNsl3901.js";import"./Hidden-YeCUxupi.js";import"./useLabel-DhxNDKAr.js";import"./useLabels-BQnVbVBu.js";import"./useButton-DKwW11Mp.js";import"./Dialog-B1tyGkHL.js";import"./RSPContexts-BqTpYPqw.js";import"./OverlayArrow-BFvM54Jt.js";import"./useResizeObserver-vSLgG7Oa.js";import"./useControlledState-CJRuvBEJ.js";import"./Collection-DDyfzr5r.js";import"./index-yftg3tvi.js";import"./Separator-lXYIHM10.js";import"./SelectionManager-bkciLoD-.js";import"./useEvent-CkgGcE1e.js";import"./scrollIntoView-Dci8aQFD.js";import"./SelectionIndicator-DJNyyuP1.js";import"./useDescription-DSdmSZs4.js";import"./ListKeyboardDelegate-C8lf82aC.js";import"./PressResponder-B5-Ptcqo.js";import"./useLocalizedStringFormatter-CELL1ivr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BYd3A0RE.js";import"./getScrollParent-BZMbo4m2.js";import"./VisuallyHidden-DTL2Sb6w.js";import"./ModalOverlay-Ci7eJJOn.js";import"./x-DXC51em7.js";import"./createLucideIcon-dj1Mp7UM.js";import"./useLocalizedStringFormatter-BRU34m0r.js";import"./Heading-827tCZrs.js";import"./Button-BoCs2oV6.js";import"./Button.module-BB7N-cLd.js";import"./info-CIkts6Hb.js";import"./Popover-CJ-Xf8wX.js";import"./Form-ClIjAo6w.js";import"./useField-a2ZWKilV.js";import"./check-C8kXMXtn.js";import"./useToggleState-Ba6KNzYf.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
