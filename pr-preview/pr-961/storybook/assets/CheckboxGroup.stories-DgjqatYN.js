import{j as e}from"./iframe-CxtXgaif.js";import{C as m}from"./CheckboxGroup-Bh7FM-Pj.js";import{C as p}from"./Checkbox-BBX5vnt8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DOlGeurh.js";import"./utils-BHaXAsAf.js";import"./clsx-B-dksMZM.js";import"./Text-hsuWdQJy.js";import"./useFocusRing-C31KCpBg.js";import"./index-LOJiVQyp.js";import"./index-McGX5QjV.js";import"./clsx-Ciqy0D92.js";import"./Text-BZPjmLfW.js";import"./Label-B3d6t7ov.js";import"./Button-QJx86_Xy.js";import"./Hidden-BtogIfXa.js";import"./useLabels-Cied99SI.js";import"./useButton-Cv4m8R1u.js";import"./Dialog-CgqKWoFh.js";import"./RSPContexts-Bpq_c5A9.js";import"./OverlayArrow-BKY1QcVg.js";import"./useResizeObserver-mh8bib83.js";import"./useControlledState-va708PFm.js";import"./Collection-CdnIVEB-.js";import"./index-BSkO2kw7.js";import"./Separator-8R5I02kA.js";import"./SelectionManager-BIHQBZZj.js";import"./useEvent-BLEaEyxT.js";import"./scrollIntoView-DVjFN4rN.js";import"./SelectionIndicator-GniDyRJ4.js";import"./useDescription-BJDx3EcI.js";import"./ListKeyboardDelegate-CRqh4x3V.js";import"./PressResponder-DtdN1iJv.js";import"./useLocalizedStringFormatter-CiYxBryn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B9reZdFx.js";import"./VisuallyHidden-CVvKj0Xg.js";import"./Button-CZkEUMhX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DVPw1CAM.js";import"./createLucideIcon-CsCGHR6v.js";import"./x-CBvx6r4u.js";import"./Heading-BKwB8iEY.js";import"./info-BPl_s5-n.js";import"./Popover-B2f3b-vi.js";import"./useFormValidation-BiSVu55b.js";import"./useField-fI3yCLSZ.js";import"./Form-Bl8bNA0o.js";import"./check-BFTR8_ix.js";import"./useToggleState-C4kP5DiM.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
