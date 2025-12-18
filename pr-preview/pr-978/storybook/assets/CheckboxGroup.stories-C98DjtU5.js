import{j as e}from"./iframe-5gY8uiZp.js";import{C as m}from"./CheckboxGroup-DBphiDKi.js";import{C as p}from"./Checkbox-CBD4Z9x2.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Cj22ksHa.js";import"./utils-DECZjV3X.js";import"./clsx-B-dksMZM.js";import"./Text-DX1n20pB.js";import"./useFocusRing-Boel07eM.js";import"./index-TGVZlA7L.js";import"./index-CLK4xEXj.js";import"./clsx-Ciqy0D92.js";import"./Text-C5V7OBlJ.js";import"./Label-Dw9DWsMU.js";import"./Button-CTvN5iBJ.js";import"./Hidden-CJ0_VQq2.js";import"./useLabels-Di96fV3Q.js";import"./useButton-4X48dbK-.js";import"./Dialog-D_ZI3bEp.js";import"./RSPContexts-B5FLXJGX.js";import"./OverlayArrow-Br5tT-gW.js";import"./useResizeObserver-D3WtM-cD.js";import"./useControlledState-D5A6R61M.js";import"./Collection-sT0T17lb.js";import"./index-B5Ph--6G.js";import"./Separator-BifO5n1N.js";import"./SelectionManager-Dewgj96Z.js";import"./useEvent-DxUtadp_.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dwnht8Fn.js";import"./useDescription-07SEN0Vw.js";import"./ListKeyboardDelegate-DaE3jdMq.js";import"./PressResponder-U6d0dn2T.js";import"./useLocalizedStringFormatter-DZ0rZsWI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DckjZn6o.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CoBV_pcx.js";import"./Button-VUiFd7fg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-_Dnj8gb8.js";import"./createLucideIcon-B1QC88uT.js";import"./x-BqJtwxOC.js";import"./Heading-ftpgvw5S.js";import"./info-COZxM15j.js";import"./Popover-CV2sNt58.js";import"./useFormValidation-15BdVQVt.js";import"./useField-D1C0IxMP.js";import"./Form-D863ir3x.js";import"./check-BF0j-h-l.js";import"./useToggleState-DFs2CSmr.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
