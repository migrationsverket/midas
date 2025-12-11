import{j as e}from"./iframe-BMeA-RN6.js";import{C as m}from"./CheckboxGroup-CNgS8Zbq.js";import{C as p}from"./Checkbox-B9xNyByJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ounuCchV.js";import"./utils-D-POQ3d7.js";import"./clsx-B-dksMZM.js";import"./Text-D3CkMuyw.js";import"./useFocusRing-CtghauyP.js";import"./index-CknK32V_.js";import"./index-DwmAtCXr.js";import"./clsx-Ciqy0D92.js";import"./Text-BhHw_bJV.js";import"./Label-B8fEjB_Q.js";import"./Button-b7DAjz5F.js";import"./Hidden-B5LLNwAb.js";import"./useLabels-BMjdtdsU.js";import"./useButton-Dw1G8P0H.js";import"./Dialog-DKQrQLgg.js";import"./RSPContexts-DRDWvQzB.js";import"./OverlayArrow-bR0ExmyO.js";import"./useResizeObserver-DIa2nvb1.js";import"./useControlledState-B9yv0jWj.js";import"./Collection-BARn_fjG.js";import"./index-dq4IFFK9.js";import"./Separator-DH5w9bVc.js";import"./SelectionManager-DS_AlWz4.js";import"./useEvent-DgIhMCFn.js";import"./scrollIntoView-C4X0t-7E.js";import"./SelectionIndicator-DcpapN0A.js";import"./useDescription-h-uPIWF3.js";import"./ListKeyboardDelegate-CBHJPsVM.js";import"./PressResponder-CQXz0r41.js";import"./useLocalizedStringFormatter-BUX58cI-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BswwR7TE.js";import"./VisuallyHidden-3ctKZrmJ.js";import"./Button-BdoKN1aN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DVzCWO_w.js";import"./createLucideIcon-CKOT3wpY.js";import"./x-DSP3N7Y9.js";import"./Heading-Hdvcobgi.js";import"./info-DPOW8J14.js";import"./Popover-C_430p1S.js";import"./useFormValidation-9Oc5hIhp.js";import"./useField-ibKuzWFH.js";import"./Form-CBD9fmdL.js";import"./check-CCLYhLto.js";import"./useToggleState-DtR9lNTl.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
