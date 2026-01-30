import{j as e}from"./iframe-FULtcQ5y.js";import{C as m}from"./CheckboxGroup-DjXPE76s.js";import{C as p}from"./Checkbox-Dfv8E6To.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C797vA19.js";import"./utils-BZWW7WJA.js";import"./clsx-B-dksMZM.js";import"./Text-DnzX-OyP.js";import"./useFocusRing-Cf9gdL2X.js";import"./index-DZLJKQEi.js";import"./index-DEQebrT3.js";import"./clsx-Ciqy0D92.js";import"./Text-Ccs4qaSZ.js";import"./Label-BTNIT-XO.js";import"./Button-D0gHO-KH.js";import"./Hidden-DwNxrma0.js";import"./useLabels-0cbaIQ_Y.js";import"./useButton-Okn-2P08.js";import"./Dialog-ChnS1c7i.js";import"./RSPContexts-DakiloPX.js";import"./OverlayArrow-B4xHAU9K.js";import"./useResizeObserver-DzkMWGBj.js";import"./useControlledState-b-x_Bn66.js";import"./Collection-DhJEN3cp.js";import"./index-RRdF-DV5.js";import"./Separator-DCgd4plg.js";import"./SelectionManager-fkm3gmUA.js";import"./useEvent-zOk05Ty3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B5fKujRu.js";import"./useDescription-B6nXjKiy.js";import"./ListKeyboardDelegate-BgoZQiFu.js";import"./PressResponder-DIxYZTyT.js";import"./useLocalizedStringFormatter-CzRjru41.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-zs0ohSnu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BAXKzm-M.js";import"./Button-C3cOR8o0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DRhb472R.js";import"./createLucideIcon-rSkXk1i2.js";import"./x-Dw0QuZBZ.js";import"./Heading-BC8nbTcr.js";import"./info-cP1CelqL.js";import"./Popover-CwZ7GKO1.js";import"./useFormValidation-C9QOJ6L1.js";import"./useField-N9zIyGWG.js";import"./Form-D8Z9-zNv.js";import"./check-UBo99_A9.js";import"./useToggleState-BWdXZANR.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
