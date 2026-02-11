import{j as e}from"./iframe-Drr84aUp.js";import{C as m}from"./CheckboxGroup-1VOtMuWV.js";import{C as p}from"./Checkbox-Cur7lHDo.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-799sXCos.js";import"./utils-Dj0d5knJ.js";import"./clsx-B-dksMZM.js";import"./Text-Dr4vVF01.js";import"./useFocusRing-DsIGSL5O.js";import"./index-BiBbK_-6.js";import"./index-DRbaHGaR.js";import"./clsx-Ciqy0D92.js";import"./Text-v7lTDwJ8.js";import"./Label-DSZEmFRx.js";import"./Button-CwulGWpP.js";import"./Hidden-BeHVocu4.js";import"./useLabels-CW04P3B1.js";import"./useButton-ByV_k0-w.js";import"./Dialog-D-wK_8vJ.js";import"./RSPContexts-SjihynDA.js";import"./OverlayArrow-C_klXK3L.js";import"./useResizeObserver-Cl3y_7ec.js";import"./useControlledState-ORv1HaqW.js";import"./Collection-DkshQO2P.js";import"./index-Cgdv7bIq.js";import"./Separator-C4C5YkOi.js";import"./SelectionManager-DMZwZ-vi.js";import"./useEvent-DtfVww8C.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Daf2cBJU.js";import"./useDescription-DocMBm6g.js";import"./ListKeyboardDelegate-DiJbBaOx.js";import"./PressResponder-BSbggRNF.js";import"./useLocalizedStringFormatter-DKpj8BBI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-oaAe1ewT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BX3HTr1q.js";import"./Button-BXBCvuas.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DN0Qnrca.js";import"./createLucideIcon-BYlUtrd2.js";import"./x-BaHWGiCm.js";import"./Heading-DzifNSwV.js";import"./info-DhaZktHC.js";import"./Popover-DEn4VFUJ.js";import"./useFormValidation-D143NhVz.js";import"./useField-DFKc8azI.js";import"./Form-BeBEjZhh.js";import"./check-CG5JpCep.js";import"./useToggleState-CoBGO6Jx.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
