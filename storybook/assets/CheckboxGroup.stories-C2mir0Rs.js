import{j as e}from"./iframe-CHgot2X7.js";import{C as m}from"./CheckboxGroup-DzWkzUX_.js";import{C as p}from"./Checkbox-CDLrnTFR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BKJs5LOX.js";import"./utils-DQgfFqY2.js";import"./clsx-B-dksMZM.js";import"./Text-DCyFtYSi.js";import"./useFocusRing-DV-BAEmR.js";import"./index-CmxdV0gr.js";import"./index-BY5gyNOq.js";import"./clsx-Ciqy0D92.js";import"./Text-CLrr9WjV.js";import"./Label-Nq3QbODP.js";import"./Button-0zMY2rUc.js";import"./Hidden-CqaFLcD3.js";import"./useLabels-XlyeLMQd.js";import"./useButton-DTMPsQ98.js";import"./Dialog-CUraIqbN.js";import"./RSPContexts-BcdrHj2t.js";import"./OverlayArrow-BlvWBSeh.js";import"./useResizeObserver-BE1LSoK8.js";import"./useControlledState-CTq5bkOP.js";import"./Collection-De4nOpoc.js";import"./index-DGKLvn2p.js";import"./Separator-BF05vp7g.js";import"./SelectionManager-BXnldiX1.js";import"./useEvent-Bgs3fgM1.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BRFiO61M.js";import"./useDescription-Cv6ZH6Jp.js";import"./ListKeyboardDelegate-6qlMLgr0.js";import"./PressResponder-3OYVW6WF.js";import"./useLocalizedStringFormatter-BwcUD0xm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BnQn-91c.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D0onDKtY.js";import"./Button-CgoLRGMY.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DCHR-uXl.js";import"./createLucideIcon-Bs877ZR1.js";import"./x-C_oBXl7X.js";import"./Heading-DzhgT2C8.js";import"./info-D9MU_BCS.js";import"./Popover-DVDzK7gp.js";import"./useFormValidation-v3AvI7jc.js";import"./useField-BZRMc2W1.js";import"./Form-Dni3IVjn.js";import"./check-D7SmkhHv.js";import"./useToggleState-XRbwlK2I.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
