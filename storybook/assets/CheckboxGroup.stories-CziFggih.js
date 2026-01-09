import{j as e}from"./iframe-DBhQ8ZfE.js";import{C as m}from"./CheckboxGroup-Cm3Ysouq.js";import{C as p}from"./Checkbox-Bnk4NbY5.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CBIHh_VV.js";import"./utils-CV2hteiq.js";import"./clsx-B-dksMZM.js";import"./Text-B7pj2ymj.js";import"./useFocusRing-2NmEPi_N.js";import"./index-CY38OC3k.js";import"./index-Dn-wkp9J.js";import"./clsx-Ciqy0D92.js";import"./Text-ByOBhr0y.js";import"./Label-CC7TLxk-.js";import"./Button-BkJQBN-z.js";import"./Hidden-BD34b6Sf.js";import"./useLabels-C-hTBXSR.js";import"./useButton-6CFw4W9G.js";import"./Dialog-qttM7F0n.js";import"./RSPContexts-CiHCTwCW.js";import"./OverlayArrow-CfDzyuH5.js";import"./useResizeObserver-B6lvwgtI.js";import"./useControlledState-DTSOZ1sm.js";import"./Collection-WipRWROd.js";import"./index-BjpqmIXJ.js";import"./Separator-dWfWGgWB.js";import"./SelectionManager-DIxKGDaq.js";import"./useEvent--vbCSqK6.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DY8WkhgT.js";import"./useDescription-BdlPH_Ut.js";import"./ListKeyboardDelegate-CnB4GnLU.js";import"./PressResponder-VnRiehAJ.js";import"./useLocalizedStringFormatter-DMxV2bdQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bfq_HOSC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B0hr9uCQ.js";import"./Button-aFOEdS9y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BnEeM0Eu.js";import"./createLucideIcon-DPyGDXBW.js";import"./x--mWXCQyN.js";import"./Heading--CMmhAbi.js";import"./info-DRO2txNo.js";import"./Popover-BVmWUEvu.js";import"./useFormValidation-B0Ezuj_R.js";import"./useField-Dqufr6FC.js";import"./Form-COD5heDD.js";import"./check-CCVjdgEX.js";import"./useToggleState-XH9AIQtV.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
