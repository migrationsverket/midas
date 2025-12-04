import{j as e}from"./iframe-67fMHQcr.js";import{C as m}from"./CheckboxGroup-BW_Ehbzl.js";import{C as p}from"./Checkbox-BCCfmD34.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-e7I4HOpx.js";import"./utils-CzrochTz.js";import"./clsx-B-dksMZM.js";import"./Text-BUZyNo40.js";import"./useFocusRing-Bp8Mhd7n.js";import"./index-DfEYfE5h.js";import"./index-sfGWluQm.js";import"./clsx-Ciqy0D92.js";import"./Text-DRPPRvVG.js";import"./Label-De9GJYsi.js";import"./Button-kat9spYA.js";import"./Hidden-CgRbqzp1.js";import"./useLabels-Jj46PDyy.js";import"./useButton-BkNgGNTC.js";import"./Dialog-C6bNEOK2.js";import"./RSPContexts-Ubta1JzZ.js";import"./OverlayArrow-E3wrnXrw.js";import"./useResizeObserver-Hy--umlO.js";import"./useControlledState-DJp7nnOG.js";import"./Collection-DhelN-Nr.js";import"./index-CJk1rCJK.js";import"./Separator-DQHPTvCK.js";import"./SelectionManager-DFD9tYq5.js";import"./useEvent-Ctiau1nl.js";import"./scrollIntoView-BVZkxVMT.js";import"./SelectionIndicator-Zq4ffFUx.js";import"./useDescription-_77_jMY7.js";import"./ListKeyboardDelegate-CUWjsHit.js";import"./PressResponder-BNGvUDtY.js";import"./useLocalizedStringFormatter-B_WHaKeu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DW9ss5j_.js";import"./VisuallyHidden-kN9goOZy.js";import"./Button-SGb-jW8E.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-166t5hcs.js";import"./createLucideIcon-DPoFQgUp.js";import"./x-Cu2I43LM.js";import"./Heading-COwaGWHF.js";import"./info-Bwspe2TD.js";import"./Popover-Bhs-uEO6.js";import"./useFormValidation-C5U66RQU.js";import"./useField-D_DH0Li_.js";import"./Form-BCScZ6zf.js";import"./check-Cvex0NA4.js";import"./useToggleState-BMuLDjzp.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
