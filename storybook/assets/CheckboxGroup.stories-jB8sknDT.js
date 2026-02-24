import{j as e}from"./iframe-BgTJCWOi.js";import{C as m}from"./CheckboxGroup-D1uqVcvw.js";import{C as p}from"./Checkbox-CYwW2wA4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D1yKmAxB.js";import"./utils-bx0JNicM.js";import"./clsx-B-dksMZM.js";import"./Text-BPwtGfCt.js";import"./useFocusRing-CQGFmCQM.js";import"./index-Di0LCwPl.js";import"./index-nvK8JwcD.js";import"./clsx-Ciqy0D92.js";import"./Text-D9p-rhNz.js";import"./Label-BKtz0i7g.js";import"./Button-DFN5fdXi.js";import"./Hidden-1E0jU_sg.js";import"./useLabels-C6Pff7p0.js";import"./useButton-RwbbtEdP.js";import"./Dialog-ChCejqlU.js";import"./RSPContexts-CeugRKEP.js";import"./OverlayArrow-CS62BfpZ.js";import"./useResizeObserver-C19I1BKZ.js";import"./useControlledState-7UzvBFe4.js";import"./Collection-e6P1B0pt.js";import"./index-CZO_OfAH.js";import"./Separator-CSQpK9sj.js";import"./SelectionManager-COcNurEV.js";import"./useEvent-fLqVt5ZT.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-De-3IWB8.js";import"./useDescription-DauRvPVC.js";import"./ListKeyboardDelegate-CW6N_7fN.js";import"./PressResponder-CQi07TY3.js";import"./useLocalizedStringFormatter-DzvgYJWh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-J00qItTT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-COxax3nI.js";import"./Button-CUni_Rhy.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DmYhpSJF.js";import"./createLucideIcon-BMuWalIG.js";import"./x-seHATWdx.js";import"./Heading-CCbZjm_P.js";import"./info-q_YmVZHy.js";import"./Popover-DSVDBGmM.js";import"./useFormValidation-DdQ-XZ_w.js";import"./useField-G_6qpuwG.js";import"./Form-xMoO26Fm.js";import"./check-yOFA-G1T.js";import"./useToggleState--HOAdt9L.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
