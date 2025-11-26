import{j as e}from"./iframe-DJhNi_-f.js";import{C as m}from"./CheckboxGroup-ubLdju4b.js";import{C as p}from"./Checkbox-DTs_2rMp.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-QYZw2O7I.js";import"./utils-Do643h1j.js";import"./clsx-B-dksMZM.js";import"./Text-B4M7ccT6.js";import"./useFocusRing-CIQbBMgf.js";import"./index-DW_CeOSp.js";import"./index-BnbnG8Mx.js";import"./clsx-Ciqy0D92.js";import"./Text-CU6r8O-i.js";import"./Label-BOXZoz72.js";import"./Button-Ca0cwykn.js";import"./Hidden-qjutHgwq.js";import"./useLabels-BKEV4xVA.js";import"./useButton-Cy4auwEY.js";import"./Dialog-0SV1q2b4.js";import"./RSPContexts-BRjDF350.js";import"./OverlayArrow-Ctn2UXTW.js";import"./useResizeObserver-DSshg31Y.js";import"./useControlledState-C8VisnXZ.js";import"./Collection-CS1q8Cfc.js";import"./index-CuF8TwUo.js";import"./Separator-Bm2rReie.js";import"./SelectionManager-CcrafMcI.js";import"./useEvent-CIe0shvn.js";import"./scrollIntoView-DaAL2pSO.js";import"./SelectionIndicator-2Ntg86hS.js";import"./useDescription-Ac_ksCkA.js";import"./ListKeyboardDelegate-9FCFhy9f.js";import"./PressResponder-qN6oycR-.js";import"./useLocalizedStringFormatter-DUAmzbz5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-JJILP5BF.js";import"./VisuallyHidden-DymIWSTG.js";import"./Button-BJ539bZj.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Bk0a2hhK.js";import"./createLucideIcon--d2H5b3A.js";import"./x-BB4FDb35.js";import"./Heading-UuKjrE2g.js";import"./info-BHyE-Bs9.js";import"./Popover-Bt3s2enk.js";import"./useFormValidation-DbRJxy_Q.js";import"./useField-BfEFq4ZS.js";import"./Form-CLlO0DOv.js";import"./check-CZt8fRG4.js";import"./useToggleState-DFWUGX1j.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
