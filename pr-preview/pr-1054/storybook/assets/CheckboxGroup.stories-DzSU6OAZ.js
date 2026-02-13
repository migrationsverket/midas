import{j as e}from"./iframe-Bzo4kowl.js";import{C as m}from"./CheckboxGroup-ChYu-9wX.js";import{C as p}from"./Checkbox-tOYXjWLw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DfYo7bjn.js";import"./utils-DXTeB8HK.js";import"./clsx-B-dksMZM.js";import"./Text-CzwqkTgC.js";import"./useFocusRing-DHhWIO2N.js";import"./index-CNJaAGk8.js";import"./index-aL6k1mzJ.js";import"./clsx-Ciqy0D92.js";import"./Text-BflvD664.js";import"./Label-D4R1Tf6Y.js";import"./Button-CgmEDWQ8.js";import"./Hidden-DHoilVKC.js";import"./useLabels-CEKsYTJS.js";import"./useButton-D9o58VID.js";import"./Dialog-76BRLU4J.js";import"./RSPContexts-De0PVEjF.js";import"./OverlayArrow-Dwf-A1IE.js";import"./useResizeObserver-ydA1K4Mt.js";import"./useControlledState-CM5VfWQj.js";import"./Collection-BW8Nuq6f.js";import"./index-CKKtxtpf.js";import"./Separator-DUn9ZmpZ.js";import"./SelectionManager-ZdUPh4YZ.js";import"./useEvent-TwMUr4g1.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-_R46UR9N.js";import"./useDescription-D0ROJkmX.js";import"./ListKeyboardDelegate-IoYbsUEH.js";import"./PressResponder-BbJVO5bi.js";import"./useLocalizedStringFormatter-D4nT0ah_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BZs6uOnk.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B6Mvmfcl.js";import"./Button-ChuJZebW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CUD2yrtg.js";import"./createLucideIcon-DA2PtDq7.js";import"./x-cYo9yJLa.js";import"./Heading-fgEp0HME.js";import"./info-CHlqRvaT.js";import"./Popover-C7tQsdG4.js";import"./useFormValidation-GncoW9Ln.js";import"./useField-vapzvJ0z.js";import"./Form-Dhxwb2cI.js";import"./check-BUmPmfFB.js";import"./useToggleState-Djq1_LZf.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
