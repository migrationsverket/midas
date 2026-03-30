import{j as e}from"./iframe-mq0SU6Z9.js";import{C as m}from"./CheckboxGroup-E1ciQe9_.js";import{C as p}from"./Checkbox-CLgJkG0r.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-f-MdB8SD.js";import"./utils-BJUm3EKx.js";import"./clsx-B-dksMZM.js";import"./Text-BbVeu3X7.js";import"./useFocusRing-D78q_c7L.js";import"./index-CiCCX6wU.js";import"./index-Cnhx9KUB.js";import"./clsx-Ciqy0D92.js";import"./Text-QATMG5Uj.js";import"./Label-DLDyGZW-.js";import"./Button-D5Wvq1Pl.js";import"./Hidden-CNCyzMOi.js";import"./useLabel-B5pFd3Xm.js";import"./useLabels-CIFPEs6o.js";import"./useButton-KkDhW6MW.js";import"./Dialog-Dc2cl8kT.js";import"./RSPContexts-4AWQzH5S.js";import"./OverlayArrow-Dol7egh2.js";import"./useResizeObserver-CL3f_0H_.js";import"./useControlledState-CIPDjvWu.js";import"./Collection-CE2c4eRW.js";import"./index-TT9iBVBB.js";import"./Separator-4RsCReRD.js";import"./SelectionManager-DX8MhBW4.js";import"./useEvent-D25AVNy_.js";import"./scrollIntoView-B1GlEmmZ.js";import"./SelectionIndicator-D__HQavp.js";import"./useDescription-BIdqTDt5.js";import"./ListKeyboardDelegate-juKUR1xz.js";import"./PressResponder-DInmybET.js";import"./useLocalizedStringFormatter-6SvQMdyl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Pd6N4DBb.js";import"./getScrollParent-CQdctl5w.js";import"./VisuallyHidden-BbUhQySq.js";import"./x-yCiVd0iJ.js";import"./createLucideIcon-D9XqkqtN.js";import"./useLocalizedStringFormatter-Deu_fvUu.js";import"./Heading-Dxt_SHlA.js";import"./Button-Cvp14hiG.js";import"./Button.module-BB7N-cLd.js";import"./info-BSYptpDB.js";import"./Popover-Ce2GfJ2H.js";import"./Form-bcWZFPnj.js";import"./useField-C7vU-KUe.js";import"./check-DPEvqVNV.js";import"./useToggleState-BeCJPfBJ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
