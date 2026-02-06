import{j as e}from"./iframe-X3mj68t3.js";import{C as m}from"./CheckboxGroup-B2NscZki.js";import{C as p}from"./Checkbox-B1S8k6-y.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ND8ftnbY.js";import"./utils-DTPrts_7.js";import"./clsx-B-dksMZM.js";import"./Text-dnG1hIAI.js";import"./useFocusRing-A-SYz4Bz.js";import"./index-BNiETeWH.js";import"./index-CgJQ_hcF.js";import"./clsx-Ciqy0D92.js";import"./Text-BWheoq0_.js";import"./Label-CjZWCMIy.js";import"./Button-B9l0bgEJ.js";import"./Hidden-ozg39Vr6.js";import"./useLabels-DEY-9MxO.js";import"./useButton-CupICIN9.js";import"./Dialog-DdIdAC1c.js";import"./RSPContexts-DnDgit_C.js";import"./OverlayArrow-QCwWccrI.js";import"./useResizeObserver-DE-yBLqy.js";import"./useControlledState-DGtnjhE_.js";import"./Collection-CbMVQR1w.js";import"./index-P7Fh13u4.js";import"./Separator-CBx5I7eG.js";import"./SelectionManager-9uZXtExn.js";import"./useEvent-cKzqiIgZ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ZmvL6AbJ.js";import"./useDescription-C7T8B3ZX.js";import"./ListKeyboardDelegate-Dt2iVvkm.js";import"./PressResponder-QQ1Lti6R.js";import"./useLocalizedStringFormatter-BdsuAGwL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwEe7AMO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BBlGikRY.js";import"./Button-BVJ0mzNb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DzOxC-Qk.js";import"./createLucideIcon-DXrZJMlk.js";import"./x-DPV5jirE.js";import"./Heading-ocoQFlqf.js";import"./info-DRYgVkjt.js";import"./Popover-BPWjBjm2.js";import"./useFormValidation-BhwNd55G.js";import"./useField-BqKadYEg.js";import"./Form-ZEnz4t2S.js";import"./check-BIZLSA6t.js";import"./useToggleState-2Ss1JAMY.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
