import{j as e}from"./iframe-B6v7SNgB.js";import{C as m}from"./CheckboxGroup-ClzntBhk.js";import{C as p}from"./Checkbox-DwbE26-_.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-lkabuhB0.js";import"./utils-DvQnzAUx.js";import"./clsx-B-dksMZM.js";import"./Text-BIYy6_GG.js";import"./useFocusRing-BmrkPpfG.js";import"./index-CKeRqnm_.js";import"./index-D5Cv7XFv.js";import"./clsx-Ciqy0D92.js";import"./Text-IRrkNmmn.js";import"./Label-DF_bI9RR.js";import"./Button-R8L0fisR.js";import"./Hidden-DVRxRWYq.js";import"./useLabel-CZ56tTPg.js";import"./useLabels-BrspC8rV.js";import"./useButton-k8VWywdi.js";import"./Dialog-Dp9bGLpv.js";import"./RSPContexts-xsTqzyol.js";import"./OverlayArrow-BX0fJ1ms.js";import"./useResizeObserver-BxIih74O.js";import"./useControlledState-BWAzPrBc.js";import"./Collection-BlrbCw0M.js";import"./index-BNtVYo6Q.js";import"./Separator-CdOFmzmr.js";import"./SelectionManager-BEdA5cgA.js";import"./useEvent-DDlHCXaB.js";import"./scrollIntoView-4Kj4GFr4.js";import"./SelectionIndicator-CSYpu25s.js";import"./useDescription-CGrNZaxo.js";import"./ListKeyboardDelegate-CP7RNJLy.js";import"./PressResponder-BGSY_gbR.js";import"./useLocalizedStringFormatter-DoD5PX0W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DoWW0umo.js";import"./getScrollParent-TDrNm2Qd.js";import"./VisuallyHidden-s-TUYsoQ.js";import"./x-DEpZC0gz.js";import"./createLucideIcon-DJSw6RDm.js";import"./useLocalizedStringFormatter-d_TsE8p1.js";import"./Heading-GqHKyTua.js";import"./Button-DFw2NzPi.js";import"./Button.module-BB7N-cLd.js";import"./info-DBHRwVyt.js";import"./Popover-C_aDSXU0.js";import"./Form-CFc7lGpW.js";import"./useField-CQP4R4b6.js";import"./check-BkCrmXb3.js";import"./useToggleState-B65vyX8v.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
