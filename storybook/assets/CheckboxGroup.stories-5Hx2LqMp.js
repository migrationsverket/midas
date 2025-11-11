import{j as e}from"./iframe-B_1n2Nxm.js";import{C as m}from"./CheckboxGroup-IjaT3yXX.js";import{C as p}from"./Checkbox-CM0otluI.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CoAd2X9d.js";import"./utils-BGVl99QC.js";import"./clsx-B-dksMZM.js";import"./Text-CP5SbyTl.js";import"./useFocusRing-ly4EYUSp.js";import"./index-AffYZTwq.js";import"./index-CGcbwgsB.js";import"./clsx-Ciqy0D92.js";import"./Text-BUabn6XH.js";import"./Label-Buu8V41B.js";import"./Button-D_D3PUIa.js";import"./Hidden-C4OnXBk2.js";import"./useLabels-BunAkoIy.js";import"./useButton-7lsv9hhb.js";import"./Dialog-BKIAli2n.js";import"./RSPContexts-DMFgdgPO.js";import"./OverlayArrow-BDSN7bMo.js";import"./useResizeObserver-KU2TrzGi.js";import"./useControlledState-M8jeR7p8.js";import"./Collection-AhQcWYkE.js";import"./index-DgmDuB4Q.js";import"./Separator-BSZdOdOm.js";import"./SelectionManager-D8YjSwlH.js";import"./useEvent-DkK5gVBP.js";import"./scrollIntoView-CL3SITQA.js";import"./SelectionIndicator-C3Lzwb3e.js";import"./useDescription-w_NqhBP9.js";import"./ListKeyboardDelegate-B5X-yUxC.js";import"./PressResponder-ClA8QRfM.js";import"./useLocalizedStringFormatter-MjSuGgLd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CbCPvUd0.js";import"./VisuallyHidden-DfwErrXa.js";import"./useLocalizedStringFormatter-Dr5HAVwW.js";import"./Button-Ckj24ESM.js";import"./Button.module-CtQ1deO8.js";import"./x-q4jLG_xE.js";import"./createLucideIcon-Dd24Cy3Z.js";import"./Heading-ByblWDM0.js";import"./info-DL42WmLN.js";import"./Popover-kNlhFBuH.js";import"./useFormValidation-pGa6PMZf.js";import"./useField-BC3VvOM1.js";import"./Form-Dlg4M-hi.js";import"./check-VKZX42Wt.js";import"./useToggleState-CtH0ctn3.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
