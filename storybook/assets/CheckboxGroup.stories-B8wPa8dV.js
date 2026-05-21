import{j as e}from"./iframe-BXzs3x0C.js";import{C as m}from"./CheckboxGroup-BNxnIbSZ.js";import{C as p}from"./Checkbox-DrV7U7_H.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ZWe9d950.js";import"./utils-B7YpdZz-.js";import"./clsx-B-dksMZM.js";import"./Text-a0ukmHPT.js";import"./useFocusRing-DAr84UVu.js";import"./index-CHQe6g0w.js";import"./index-75OxiS6O.js";import"./clsx-Ciqy0D92.js";import"./Text-DYh5wK03.js";import"./Label-BBep1N8t.js";import"./Button-_6aq1n6B.js";import"./Hidden-HpZioBNJ.js";import"./useLabel-D6E2-B37.js";import"./useLabels-w1sKaiJL.js";import"./useButton-CW3P_zOX.js";import"./Dialog-BEMaGKOQ.js";import"./RSPContexts-CQe6j-NN.js";import"./OverlayArrow-CQqIg-Jb.js";import"./useResizeObserver-CEMKu04O.js";import"./useControlledState-DXnq9ftx.js";import"./Collection-CPe6OLkZ.js";import"./index-BK7PRc4P.js";import"./Separator-B0USoDoM.js";import"./SelectionManager-BeubQEj5.js";import"./useEvent-Bna1V34X.js";import"./scrollIntoView-DmyPyYUI.js";import"./SelectionIndicator-BG5WiYa3.js";import"./useDescription-BDCx7FV_.js";import"./ListKeyboardDelegate-C5EkxWNC.js";import"./PressResponder-DIcn1mDB.js";import"./useLocalizedStringFormatter-D7Rvr_ao.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-s3i8KAlX.js";import"./getScrollParent-CeZ4u_Xo.js";import"./VisuallyHidden-C6-1r25j.js";import"./ModalOverlay-CK8WAiZ8.js";import"./x-BmIXIepj.js";import"./createLucideIcon-DAXq1X88.js";import"./useLocalizedStringFormatter-6YC4OkXA.js";import"./Heading-CccHM0rx.js";import"./Button-Bvp28ihJ.js";import"./Button.module-BB7N-cLd.js";import"./info-D2DDSkAW.js";import"./Popover-DDaDm9KL.js";import"./Form-BXZvEm0b.js";import"./useField-B3Bcv_v3.js";import"./check-CDX3eKgG.js";import"./useToggleState-BVvEJoaZ.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
