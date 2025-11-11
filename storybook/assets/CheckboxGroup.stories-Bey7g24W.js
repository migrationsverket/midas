import{j as e}from"./iframe-BeJPD2Jp.js";import{C as m}from"./CheckboxGroup-BQhLsxAL.js";import{C as p}from"./Checkbox-DUVwav2S.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-YrbO0l8y.js";import"./utils-BpIJhypm.js";import"./clsx-B-dksMZM.js";import"./Text-BYzE9U21.js";import"./useFocusRing-CLGhCKjv.js";import"./index-JqGGRrpw.js";import"./index-CXJhLQb9.js";import"./clsx-Ciqy0D92.js";import"./Text-CzOdhV2l.js";import"./Label-BlOnVmRU.js";import"./Button-CGyLqL0c.js";import"./Hidden-CGcuCzCB.js";import"./useLabels-CNJMsTyt.js";import"./useButton-DDAnbrF0.js";import"./Dialog-C5lrjWud.js";import"./RSPContexts-BQACcMNG.js";import"./OverlayArrow-B0Cwz_C1.js";import"./useResizeObserver-z7WQm-bs.js";import"./useControlledState-CZvvuTz-.js";import"./Collection-Bm9GIxrD.js";import"./index-D3sUT7po.js";import"./Separator-q4FHFTAw.js";import"./SelectionManager-uh2_al14.js";import"./useEvent-DXCRvYOw.js";import"./scrollIntoView-Br6bGyRC.js";import"./SelectionIndicator-jDZMd08X.js";import"./useDescription-BvNfDyAy.js";import"./ListKeyboardDelegate-DS3-Z4Bb.js";import"./PressResponder-DoF-kvfr.js";import"./useLocalizedStringFormatter-DuRn0SfR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CJRlfCAb.js";import"./VisuallyHidden-CYA0eN8-.js";import"./useLocalizedStringFormatter-mZt4FMih.js";import"./Button-D-cnYlNa.js";import"./Button.module-CtQ1deO8.js";import"./x-ZGlTQmlt.js";import"./createLucideIcon-Dmy1Sgq2.js";import"./Heading-CQLsgRTo.js";import"./info-DeYfYU1Q.js";import"./Popover-BphSW64N.js";import"./useFormValidation-B2xTmI-k.js";import"./useField-N9IMh1qZ.js";import"./Form-DLbd3gXz.js";import"./check-CBdIO5hz.js";import"./useToggleState-Bt5fo4Lb.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
