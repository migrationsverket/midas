import{j as e}from"./iframe-iIM7yFlw.js";import{C as m}from"./CheckboxGroup-yYAecuYn.js";import{C as p}from"./Checkbox-BWMnJYkd.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BJhyn0Bc.js";import"./utils-DNy6buAm.js";import"./clsx-B-dksMZM.js";import"./Text-CpJA3Ugt.js";import"./useFocusRing-CERt57Nt.js";import"./index-C-jrAZ8o.js";import"./index-DvWNh13S.js";import"./clsx-Ciqy0D92.js";import"./Text-GrSmyAjf.js";import"./Label-PJjgvv4y.js";import"./Button-XY1USx81.js";import"./Hidden-pJH8oqvO.js";import"./useLabels-BYU3vliF.js";import"./useButton-BOKRtXXu.js";import"./Dialog-1q0xNrQk.js";import"./RSPContexts-83tn9EqZ.js";import"./OverlayArrow-Q_IgSl4E.js";import"./useResizeObserver-fmPui3nV.js";import"./useControlledState-CjC15qhB.js";import"./Collection-CyxkDkja.js";import"./index-CZ1Ul0RJ.js";import"./Separator-CQflSBMB.js";import"./SelectionManager-bMjJz1Tm.js";import"./useEvent-D1Z-PedL.js";import"./scrollIntoView-DCsIsjsr.js";import"./SelectionIndicator-BVwb6FSQ.js";import"./useDescription-CJa9wdXg.js";import"./ListKeyboardDelegate-8Cq9jrW8.js";import"./PressResponder-NKgHKbm7.js";import"./useLocalizedStringFormatter-CVQ2svrB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CGG11RQa.js";import"./getScrollParent-LhiTx7mo.js";import"./VisuallyHidden-BIQkIPH_.js";import"./x-BJvrnR5U.js";import"./createLucideIcon-BWICqhq6.js";import"./useLocalizedStringFormatter-CVsIIBgW.js";import"./Heading-CASTwqW7.js";import"./Button-D34JSMMc.js";import"./Button.module-BB7N-cLd.js";import"./info-DIhPkI6G.js";import"./Popover-BlQV_wkW.js";import"./Form-BThFu9wJ.js";import"./useField-Df6YKAwX.js";import"./check-DtMTLYJr.js";import"./useToggleState-CATFmAx4.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
