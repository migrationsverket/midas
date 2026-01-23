import{j as e}from"./iframe-d-FQpM90.js";import{C as m}from"./CheckboxGroup-Cm_ql8wC.js";import{C as p}from"./Checkbox-kMvjCO5W.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BjEJz6Ju.js";import"./utils-CTrWZFVM.js";import"./clsx-B-dksMZM.js";import"./Text-BU1xEAD-.js";import"./useFocusRing-DI4CuVxJ.js";import"./index-Ccbx2rrI.js";import"./index-B0n8z5FV.js";import"./clsx-Ciqy0D92.js";import"./Text-CFvohxCr.js";import"./Label-BGWBVbed.js";import"./Button-CQtK7RQv.js";import"./Hidden-D7DESwR-.js";import"./useLabels-DCiGcPnN.js";import"./useButton-ONss29nc.js";import"./Dialog-CmoCzVsf.js";import"./RSPContexts-36mIdLbY.js";import"./OverlayArrow-VLifoHbe.js";import"./useResizeObserver-7Eq5Fixd.js";import"./useControlledState-DT8flL-3.js";import"./Collection-CjZd06bD.js";import"./index-D54MaNBW.js";import"./Separator-BwJQIZlo.js";import"./SelectionManager-DbVn8V7O.js";import"./useEvent-CkmhN7CQ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B_S-ppix.js";import"./useDescription-DkUt8NOh.js";import"./ListKeyboardDelegate-Dutj400W.js";import"./PressResponder-BxS9bkby.js";import"./useLocalizedStringFormatter-CKeA94dv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DkUKv9Cj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C749xTmY.js";import"./Button-XCmFSPiU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DnVlYLjp.js";import"./createLucideIcon-Bz-p2P2k.js";import"./x-C-qeqbMv.js";import"./Heading-Cqk24h5X.js";import"./info-Duz9g_te.js";import"./Popover-CH6d259w.js";import"./useFormValidation-BW7mP-sh.js";import"./useField-BNyzTKfn.js";import"./Form-OKrhR-Fj.js";import"./check-BcM2i7YL.js";import"./useToggleState-07FiMtp1.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
