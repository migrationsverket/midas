import{j as e}from"./iframe-Dy3Rw66z.js";import{C as m}from"./CheckboxGroup-ClOjVjgJ.js";import{C as p}from"./Checkbox-DEfX6SC9.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CRQYtwdw.js";import"./utils-DtZwbp1W.js";import"./clsx-B-dksMZM.js";import"./Text-CjiLEpJA.js";import"./useFocusRing-OfUNuA-J.js";import"./index-BL9qN4Dl.js";import"./index-C7Y6vcpr.js";import"./clsx-Ciqy0D92.js";import"./Text-BOYOdsAw.js";import"./Label-B4GuKtlR.js";import"./Button-DWNrJ0qN.js";import"./Hidden-BiAiu52X.js";import"./useLabel-B2Izx8ga.js";import"./useLabels-CiX5UPE6.js";import"./useButton-DzKW80i7.js";import"./Dialog-bkeEYBpC.js";import"./RSPContexts-C0IvGsnI.js";import"./OverlayArrow-JVmpp-8a.js";import"./useResizeObserver-C9I6YQo1.js";import"./useControlledState-CujSUpWY.js";import"./Collection-B5ifOA6k.js";import"./index-B66NDRAz.js";import"./Separator-CBYmdaTi.js";import"./SelectionManager-CfByhG1g.js";import"./useEvent-DcOaT4Vn.js";import"./scrollIntoView-DNWLzZw6.js";import"./SelectionIndicator-D2Bve7Mk.js";import"./useDescription-BNi02mG9.js";import"./ListKeyboardDelegate-BafHrM3o.js";import"./PressResponder-CmoNFUc_.js";import"./useLocalizedStringFormatter-CUaO5Dey.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D6VEx1B6.js";import"./getScrollParent-sGEfSoh4.js";import"./VisuallyHidden-ke2bwlqF.js";import"./ModalOverlay-BHj0afcc.js";import"./x-BY2wOibv.js";import"./createLucideIcon-CGcaihwO.js";import"./useLocalizedStringFormatter-BdDGNVQC.js";import"./Heading-CVTdlCZ7.js";import"./Button-Cl_Vf5i1.js";import"./Button.module-BB7N-cLd.js";import"./info-CP5B5L4I.js";import"./Popover-M-vUiPMz.js";import"./Form-wengfQtM.js";import"./useField-CNgzpJU1.js";import"./check-D_PuwPYh.js";import"./useToggleState-8NVzvk0V.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
