import{j as e}from"./iframe-CzkIVWu3.js";import{C as m}from"./CheckboxGroup-D_TN4KoC.js";import{C as p}from"./Checkbox-Bz-RWR1B.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BfaONkuD.js";import"./utils-DZrNC9W-.js";import"./clsx-B-dksMZM.js";import"./Text-SOVw6BD9.js";import"./useFocusRing-m88TTZQ1.js";import"./index-B4Y469Zs.js";import"./index-CS5avNyc.js";import"./clsx-Ciqy0D92.js";import"./Text-DYfagpWy.js";import"./Label-zYI1t4se.js";import"./Button-DhtFINKQ.js";import"./Hidden-D7FrmOoe.js";import"./useLabels-Dsf3Sz-Y.js";import"./useButton-Bky5JxvW.js";import"./Dialog-CmVHG6Nt.js";import"./RSPContexts-BCM-zQK8.js";import"./OverlayArrow-BqFsu7F7.js";import"./useResizeObserver-BfmVivxN.js";import"./useControlledState-Cna3kncS.js";import"./Collection-BL35lM_F.js";import"./index-DT3i1LOp.js";import"./Separator-BIS6Gc1n.js";import"./SelectionManager-Dq4NnlAM.js";import"./useEvent-BUHVKPgO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CyeKwJf3.js";import"./useDescription-WzmBOmwR.js";import"./ListKeyboardDelegate-DoMDUw9w.js";import"./PressResponder-C3UJPuJX.js";import"./useLocalizedStringFormatter-Bj-fK2b0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDmgZWW5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C9fSBHBW.js";import"./Button-DaFIfdKd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-YJ9MX6im.js";import"./createLucideIcon-DxsLAk9T.js";import"./x-Dvr9Mgrq.js";import"./Heading-5uV_oDOE.js";import"./info-D-iyIp5E.js";import"./Popover-CP3cpvpy.js";import"./useFormValidation-PxMK62x-.js";import"./useField-Ds0Z1Igf.js";import"./Form-DSqWRRTm.js";import"./check-D-m1WARu.js";import"./useToggleState-Coqgl6z4.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
