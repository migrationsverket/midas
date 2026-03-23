import{j as e}from"./iframe-DamRJThF.js";import{C as m}from"./CheckboxGroup-hA3cbqb4.js";import{C as p}from"./Checkbox-z8cmHHDx.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DbzbM9K4.js";import"./utils-DgcDlDIC.js";import"./clsx-B-dksMZM.js";import"./Text-DJngJYPB.js";import"./useFocusRing-bURA5Avq.js";import"./index-DlvZii8t.js";import"./index-BIVPacnA.js";import"./clsx-Ciqy0D92.js";import"./Text-DL78e22r.js";import"./Label-DicBUfv7.js";import"./Button-uaN-QkBJ.js";import"./Hidden-BuQbP2-q.js";import"./useLabels-DuyfGClc.js";import"./useButton-COqJVObs.js";import"./Dialog-DEgR2qnS.js";import"./RSPContexts-Dggcgd1E.js";import"./OverlayArrow-DYWN_5ER.js";import"./useResizeObserver-eK_zIgwr.js";import"./useControlledState-XD3RgfmU.js";import"./Collection-tkyA9Vv4.js";import"./index-C30nhWEM.js";import"./Separator-CYZPONwa.js";import"./SelectionManager-C2qvcpfW.js";import"./useEvent-CvQwGKSH.js";import"./scrollIntoView-BpYJI3yu.js";import"./SelectionIndicator-Czi5_gzH.js";import"./useDescription-Bsqqymym.js";import"./ListKeyboardDelegate-DyKCuwLA.js";import"./PressResponder-DPDWKR9m.js";import"./useLocalizedStringFormatter-CCiP9Lwa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CbPnchON.js";import"./getScrollParent-DgPjGSeo.js";import"./VisuallyHidden-BwmvdnrK.js";import"./x-C5nClHWi.js";import"./createLucideIcon-XwoK3Gs0.js";import"./useLocalizedStringFormatter-9w7CTOq4.js";import"./Heading-JFX8v4G2.js";import"./Button-Cp7EKUE4.js";import"./Button.module-BB7N-cLd.js";import"./info-AGBaNTQ0.js";import"./Popover-DwSLTJis.js";import"./Form-BLTkFQuM.js";import"./useField-B2FXZjju.js";import"./check-DoGI2lMu.js";import"./useToggleState-BaBL_cqz.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
