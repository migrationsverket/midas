import{j as e}from"./iframe-BYSujb5O.js";import{C as m}from"./CheckboxGroup-C_7B6mrQ.js";import{C as p}from"./Checkbox-B8D1fYHf.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BlAjSjix.js";import"./utils-BpYtCIZa.js";import"./clsx-B-dksMZM.js";import"./Text-DVuQNkTp.js";import"./useFocusRing-Cq6ZZkO6.js";import"./index-BTamtBiG.js";import"./index-BUtMmMz-.js";import"./clsx-Ciqy0D92.js";import"./Text-BXmZ9P-w.js";import"./Label-Baygg4zK.js";import"./Button-CyeAVMHd.js";import"./Hidden-BljVQJbf.js";import"./useLabels-DVc_tfUB.js";import"./useButton-Bf-GHWc-.js";import"./Dialog-D7Qgj7Ml.js";import"./RSPContexts-Ddiz57ni.js";import"./OverlayArrow-Cur9cqCA.js";import"./useResizeObserver-C0JuC2JF.js";import"./useControlledState-DjUFwNu-.js";import"./Collection-C-pAO9Or.js";import"./index-CYIuoBMk.js";import"./Separator-WYKkiv7S.js";import"./SelectionManager-p8jb1tmD.js";import"./useEvent-CkTHhyNW.js";import"./scrollIntoView-D9VdN5NR.js";import"./SelectionIndicator-DwOCKDHm.js";import"./useDescription-5VSBaoAa.js";import"./ListKeyboardDelegate-Exvw7xTa.js";import"./PressResponder-eRXg6zS-.js";import"./useLocalizedStringFormatter-Dpys6Wq_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Zzge8grx.js";import"./VisuallyHidden-BK_XVg_7.js";import"./Button-B5_32c3T.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-VLqr3pjp.js";import"./createLucideIcon-CFUgjHlc.js";import"./x-BTh76Rd3.js";import"./Heading-B8mAIRB8.js";import"./info-CGQyZDHS.js";import"./Popover-BixPE7LD.js";import"./useFormValidation-9p9mjJmO.js";import"./useField-BAkXw4Su.js";import"./Form-BDQqXSmS.js";import"./check-BshsavWg.js";import"./useToggleState-DxViWBfQ.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
