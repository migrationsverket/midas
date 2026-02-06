import{j as e}from"./iframe-uZkJ1fJG.js";import{C as m}from"./CheckboxGroup-BwwHzknF.js";import{C as p}from"./Checkbox-CSkRDfz4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CNz8C0Mw.js";import"./utils-Bql2fpyW.js";import"./clsx-B-dksMZM.js";import"./Text-ClpReuqT.js";import"./useFocusRing-DaTXuR1t.js";import"./index-n8hdgtys.js";import"./index-B9xkxF8M.js";import"./clsx-Ciqy0D92.js";import"./Text-D4eTnBnq.js";import"./Label-j0JcQGBk.js";import"./Button-wtboOTdT.js";import"./Hidden-D9iAREQW.js";import"./useLabels-C8qvnydK.js";import"./useButton-B1lGnkCE.js";import"./Dialog-CgGwA0YS.js";import"./RSPContexts-DFcqcjFx.js";import"./OverlayArrow-C-RLbmOu.js";import"./useResizeObserver-D-kAN7jW.js";import"./useControlledState-Cr8mehV-.js";import"./Collection-Cc352SrR.js";import"./index-iUw-gvy4.js";import"./Separator-COBfszN5.js";import"./SelectionManager-aHBXooaK.js";import"./useEvent-BrJvnBOp.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CWeNhkgP.js";import"./useDescription-BpjeHAcD.js";import"./ListKeyboardDelegate-CJBMhtBR.js";import"./PressResponder-DrB52dBR.js";import"./useLocalizedStringFormatter-BmHqoQ62.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-IaxLghhU.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CZMMqkul.js";import"./Button-DXAvfZt_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CxCN2hvr.js";import"./createLucideIcon-DACNTlAl.js";import"./x-7qMG5WbC.js";import"./Heading-JN5bR88e.js";import"./info-BylgOWnt.js";import"./Popover-BccHq3q6.js";import"./useFormValidation-D37evYkq.js";import"./useField-NLOOn1cb.js";import"./Form-BNWWFyYj.js";import"./check-C9yMFlvN.js";import"./useToggleState-BCbGSezm.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
