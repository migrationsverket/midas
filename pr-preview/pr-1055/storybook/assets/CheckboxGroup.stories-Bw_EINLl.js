import{j as e}from"./iframe-kL-Bl9su.js";import{C as m}from"./CheckboxGroup-DZRH0H_2.js";import{C as p}from"./Checkbox-Btl38iGy.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CmUNHjx9.js";import"./utils-DSQv1swn.js";import"./clsx-B-dksMZM.js";import"./Text-Csjavnr3.js";import"./useFocusRing-B8gpdiRk.js";import"./index-9Z-HIz-6.js";import"./index-Dc0KIhb6.js";import"./clsx-Ciqy0D92.js";import"./Text-Brx6h1NF.js";import"./Label-CYOh3wjp.js";import"./Button-C3MzL_5z.js";import"./Hidden-fIPo0I_L.js";import"./useLabels-CH1yRhK0.js";import"./useButton-PS6G0SsP.js";import"./Dialog-4DXEqqMA.js";import"./RSPContexts-zPihLAoF.js";import"./OverlayArrow-C-_NKgJm.js";import"./useResizeObserver-JmlDC1iB.js";import"./useControlledState-CCkzC0Tp.js";import"./Collection-V9ENYK9P.js";import"./index-C6yzV3k4.js";import"./Separator-CIUFat57.js";import"./SelectionManager-ALK4G4BP.js";import"./useEvent-BRxC_QDj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B4koSPdu.js";import"./useDescription-D6WKBftS.js";import"./ListKeyboardDelegate-C_l6nDbK.js";import"./PressResponder-CtQHFhUR.js";import"./useLocalizedStringFormatter-5N1OdqKK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3IxBebN.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Ddmz6g6z.js";import"./Button-BrThkrNe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhEyUNPu.js";import"./createLucideIcon-DoVMa1bS.js";import"./x-NxB05lgA.js";import"./Heading-Cgt_XEMz.js";import"./info-Bp8dfPQ3.js";import"./Popover-CH8aGv-F.js";import"./useFormValidation-BcwglGOS.js";import"./useField-sDMwGprV.js";import"./Form-75sFirUb.js";import"./check-B_KzR74M.js";import"./useToggleState-Cp_yD_Z3.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
