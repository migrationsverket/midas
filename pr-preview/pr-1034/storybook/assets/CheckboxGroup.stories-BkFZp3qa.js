import{j as e}from"./iframe-HG_Z2pg-.js";import{C as m}from"./CheckboxGroup-CQIxvIt3.js";import{C as p}from"./Checkbox-B7mm0fkC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CD7fxHOi.js";import"./utils-CdY9616D.js";import"./clsx-B-dksMZM.js";import"./Text-CPFj8IEW.js";import"./useFocusRing-C2pNSdUj.js";import"./index-CMaq89o6.js";import"./index-iNkvpkXc.js";import"./clsx-Ciqy0D92.js";import"./Text-CKZFwH_2.js";import"./Label-BkDEipyG.js";import"./Button-DAM_PuZi.js";import"./Hidden-BkYvshkQ.js";import"./useLabels-CYZjihjK.js";import"./useButton-gu6J6a7T.js";import"./Dialog-DyG2P5dM.js";import"./RSPContexts-rEVBiSVI.js";import"./OverlayArrow-CxQkpfnq.js";import"./useResizeObserver-CeCEK1FF.js";import"./useControlledState-sKIB1QYe.js";import"./Collection-BSaBUkOh.js";import"./index-CBto2vLy.js";import"./Separator-C6RpXoRb.js";import"./SelectionManager-DBA4BPE3.js";import"./useEvent-BB0Ydt5c.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CYCN6V3S.js";import"./useDescription-BzOv_EiU.js";import"./ListKeyboardDelegate-BvXzhQRP.js";import"./PressResponder-DWz2bTvF.js";import"./useLocalizedStringFormatter-C17LFZpf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-83r22ReL.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-L0YDRZd4.js";import"./Button-C-MBQNdi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DYUm24Kr.js";import"./createLucideIcon-CkaE1DwA.js";import"./x-DjjH4U3w.js";import"./Heading-DuJqlEYV.js";import"./info-B50N3db5.js";import"./Popover-CO9pW_0n.js";import"./useFormValidation-ATFip75W.js";import"./useField-CLeAY4am.js";import"./Form-BEkKZTA7.js";import"./check-DFJE8aty.js";import"./useToggleState-C1N0M4hm.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
