import{j as e}from"./iframe-CWlixrW_.js";import{C as m}from"./CheckboxGroup-D0PkRDM3.js";import{C as p}from"./Checkbox-voyyUWTv.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BKAyDRlQ.js";import"./utils-CRaSuqNF.js";import"./clsx-B-dksMZM.js";import"./Text-oz4ou16d.js";import"./useFocusRing-DDmLMMaV.js";import"./index-9FhWo1dj.js";import"./index-_BXH5tR9.js";import"./clsx-Ciqy0D92.js";import"./Text-CaYrS64L.js";import"./Label-BjPy4VpL.js";import"./Button-kA2ued5f.js";import"./Hidden-C139jkL0.js";import"./useLabel-DkzOQx4t.js";import"./useLabels-C00UR8Eo.js";import"./useButton-DQDkLrpI.js";import"./Dialog-DjmcXnG0.js";import"./RSPContexts-D4D98plB.js";import"./OverlayArrow-DKZA2JNv.js";import"./useResizeObserver-C-ftW52s.js";import"./useControlledState-CzRWfzat.js";import"./Collection-EO1AcQfg.js";import"./index-CFLy-5bI.js";import"./Separator-ClT2p5T2.js";import"./SelectionManager-Be9sokqv.js";import"./useEvent-Ditv3QO5.js";import"./scrollIntoView-AfG37jOw.js";import"./SelectionIndicator-DtNX-UQ2.js";import"./useDescription-DXpo-reC.js";import"./ListKeyboardDelegate-C63MTa-n.js";import"./PressResponder-DFbfA2hF.js";import"./useLocalizedStringFormatter-ViKOiGge.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DzLA8zs-.js";import"./getScrollParent-DWEouMlM.js";import"./VisuallyHidden-BQ6ylskT.js";import"./ModalOverlay-DsNJ_V0U.js";import"./x-BLTOENDc.js";import"./createLucideIcon-Ay7p0EQv.js";import"./useLocalizedStringFormatter-BtK1NWhh.js";import"./Heading-DvmFnc6f.js";import"./Button-DHj3NF2u.js";import"./Button.module-BB7N-cLd.js";import"./info-CYiYJFKm.js";import"./Popover-BEkEb1Y6.js";import"./Form-DiqHwhIn.js";import"./useField-Do_CZFfm.js";import"./check-BRtQddKv.js";import"./useToggleState-DqBscsn4.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
