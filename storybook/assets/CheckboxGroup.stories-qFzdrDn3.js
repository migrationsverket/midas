import{j as e}from"./iframe-BbpEZ5aM.js";import{C as m}from"./CheckboxGroup-CVIayXAn.js";import{C as p}from"./Checkbox-BMf4nPh-.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BW704g2y.js";import"./utils-BdrbvCyg.js";import"./clsx-B-dksMZM.js";import"./Text-8_j-63AW.js";import"./useFocusRing-Cb5PiwmC.js";import"./index-B8aZdXXD.js";import"./index-BjFCBoac.js";import"./clsx-Ciqy0D92.js";import"./Text-j1d70Osr.js";import"./Label--seSDiUJ.js";import"./Button-CtkizHV8.js";import"./Hidden-BuJG9RrC.js";import"./useLabels-BZZ1Timc.js";import"./useButton-ldcm24KF.js";import"./Dialog-DHg71ag_.js";import"./RSPContexts-x1o6smL2.js";import"./OverlayArrow-C2Yyp8CV.js";import"./useResizeObserver-BE2slcQZ.js";import"./useControlledState-D9qEZDAW.js";import"./Collection-CMtEzmjM.js";import"./index-Bt1_lDd3.js";import"./Separator-vNtjvz19.js";import"./SelectionManager-Bujgh3G0.js";import"./useEvent-6MY4vP-O.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CMlltGqv.js";import"./useDescription-CuIauOi2.js";import"./ListKeyboardDelegate-Beu6wPs6.js";import"./PressResponder-o9-VTS3S.js";import"./useLocalizedStringFormatter-blmY65Ok.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DN9E854x.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-kdaoL2HV.js";import"./Button-yWoA7-6W.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ChzbMIxf.js";import"./createLucideIcon-CPTKChIs.js";import"./x-Cn4QaZ5X.js";import"./Heading-BpERB3MI.js";import"./info-Bv5upm45.js";import"./Popover-CdlCGMko.js";import"./useFormValidation-zdZQWnsj.js";import"./useField-CD0PHX4d.js";import"./Form-DjKxBtZD.js";import"./check-v9GpQv2G.js";import"./useToggleState-DAURwIzr.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
