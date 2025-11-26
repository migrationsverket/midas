import{j as e}from"./iframe-g7NEJkuC.js";import{C as m}from"./CheckboxGroup-CRK4PpXH.js";import{C as p}from"./Checkbox-BpjAUdfw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BxotCqXX.js";import"./utils-0G2rZpWX.js";import"./clsx-B-dksMZM.js";import"./Text-2wl8S3yv.js";import"./useFocusRing-umR6fa2b.js";import"./index-CHObnUG4.js";import"./index-D3ZTBEsf.js";import"./clsx-Ciqy0D92.js";import"./Text-COXbJ1k6.js";import"./Label-DsL0jyv0.js";import"./Button-DLz7qxXY.js";import"./Hidden-D0w2WJXS.js";import"./useLabels-CaMMn4xN.js";import"./useButton-DLlC1wR-.js";import"./Dialog-UNwVDvyc.js";import"./RSPContexts-DnvA1an_.js";import"./OverlayArrow-C3diIVx5.js";import"./useResizeObserver-BzoJpgxS.js";import"./useControlledState-BfrgZwaU.js";import"./Collection-D6GjZd23.js";import"./index-fx8RI-wG.js";import"./Separator-DMTf5PvF.js";import"./SelectionManager-BRgBdon6.js";import"./useEvent-B-pgGpBm.js";import"./scrollIntoView-BhdzKXRp.js";import"./SelectionIndicator-nYxq64Nb.js";import"./useDescription-Q7smjSa7.js";import"./ListKeyboardDelegate-Bwr0wyqx.js";import"./PressResponder-NQTQ9Dq3.js";import"./useLocalizedStringFormatter-Ck5RdZog.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DPVMq2vt.js";import"./VisuallyHidden-DsC2d4kL.js";import"./Button-wkNo0dzg.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BH3Jo7uS.js";import"./createLucideIcon-968lwoO8.js";import"./x-BwjZIwdP.js";import"./Heading-Cuo-BxH3.js";import"./info-6B8gOvS_.js";import"./Popover-b7Xkp_a6.js";import"./useFormValidation-pQBCJ-I-.js";import"./useField-TSEdftWR.js";import"./Form-DORkrEre.js";import"./check-DtowHjN5.js";import"./useToggleState-DiQROsZg.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
