import{j as e}from"./iframe-BXL4RoxG.js";import{C as m}from"./CheckboxGroup-ESVobvbM.js";import{C as p}from"./Checkbox-QpCLGm7s.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-7f6dpKUo.js";import"./utils-Bf3izy9L.js";import"./clsx-B-dksMZM.js";import"./Text-D5IutxNH.js";import"./useFocusRing-CFKLadQc.js";import"./index-ChlQ7hUJ.js";import"./index-CVQMxt-B.js";import"./clsx-Ciqy0D92.js";import"./Text-CdHl8okE.js";import"./Label-D514R1L3.js";import"./Button-D88wRmT9.js";import"./Hidden-Budc0me5.js";import"./useLabels-ZcBmnljP.js";import"./useButton-Q5MxpZ0c.js";import"./Dialog-Ck7-K_SF.js";import"./RSPContexts-D1_gZHxa.js";import"./OverlayArrow-o8gnRtuh.js";import"./useResizeObserver-DsICbANN.js";import"./useControlledState-ChSuwDfw.js";import"./Collection-BUCl8sbC.js";import"./index-CbT-VxX9.js";import"./Separator-DHi8WGG9.js";import"./SelectionManager-CN4RD3Ps.js";import"./useEvent-C9ZgQidS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DdQwwOmx.js";import"./useDescription-B2r5uC_Z.js";import"./ListKeyboardDelegate-DVDCpycQ.js";import"./PressResponder-CFH_SsOD.js";import"./useLocalizedStringFormatter-DY1IbHJs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DIbsFmH6.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BNHdTIn0.js";import"./Button-BPaLzN_1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CLNeHttS.js";import"./createLucideIcon-Bt1FuSTk.js";import"./x-CVk2stH6.js";import"./Heading-lSwE_jTY.js";import"./info-BdXsf-yF.js";import"./Popover-D6La6CTZ.js";import"./useFormValidation-FE3EiiUh.js";import"./useField-BUvuIleD.js";import"./Form-CQLrd3dC.js";import"./check-CFJsN1sH.js";import"./useToggleState-B2TCDW_G.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
