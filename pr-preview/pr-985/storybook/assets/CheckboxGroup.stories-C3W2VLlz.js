import{j as e}from"./iframe-C-Lam_ng.js";import{C as m}from"./CheckboxGroup-CUU9tD2E.js";import{C as p}from"./Checkbox-Bcgn3Eu2.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C41CocVt.js";import"./utils-W06ddP_L.js";import"./clsx-B-dksMZM.js";import"./Text-BfdfpGmz.js";import"./useFocusRing-BOxTCQ-z.js";import"./index-B-1MEL0a.js";import"./index-AgIsqBR_.js";import"./clsx-Ciqy0D92.js";import"./Text-CpVobgrZ.js";import"./Label-DIKNXTtP.js";import"./Button-fej9ya2E.js";import"./Hidden-LjeV_3jg.js";import"./useLabels-CL-84yha.js";import"./useButton-CI7GwtHS.js";import"./Dialog-D85-23oJ.js";import"./RSPContexts-B-YXtEWf.js";import"./OverlayArrow-BkOxcu8_.js";import"./useResizeObserver-BU5R8K1e.js";import"./useControlledState-CKRNIuAr.js";import"./Collection-Bk_dwAYv.js";import"./index-DuhlN3yt.js";import"./Separator-Bn6bUxSk.js";import"./SelectionManager-DS6MAhbr.js";import"./useEvent-z1sPjE67.js";import"./scrollIntoView-D5cAmATd.js";import"./SelectionIndicator-Hy3jm3Uq.js";import"./useDescription-_kbhm_E4.js";import"./ListKeyboardDelegate-DH8AGtvn.js";import"./PressResponder-D4nt81Wh.js";import"./useLocalizedStringFormatter-DdCEe0_z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CWmAp7Wq.js";import"./VisuallyHidden-_cUxrJf0.js";import"./Button-P88LisFb.js";import"./Button.module-D7V8WCeR.js";import"./useLocalizedStringFormatter-h0NnrpaM.js";import"./createLucideIcon-44xnuqEI.js";import"./x-BhnhKHvo.js";import"./Heading-BQiPV1r3.js";import"./info-CD34R5G6.js";import"./Popover-DcUOIW9J.js";import"./useFormValidation-CK88wI0l.js";import"./useField-B9038I5h.js";import"./Form-cgQeppkl.js";import"./check-CnfRZR2H.js";import"./useToggleState-DdhEihHI.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
