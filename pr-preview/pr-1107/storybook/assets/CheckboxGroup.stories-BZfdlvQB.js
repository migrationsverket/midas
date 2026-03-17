import{j as e}from"./iframe-DfM6kEgP.js";import{C as m}from"./CheckboxGroup-nORJA49m.js";import{C as p}from"./Checkbox-DxkXM5S5.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D7g57v3N.js";import"./utils-D8PGfxYb.js";import"./clsx-B-dksMZM.js";import"./Text-BibBkfuq.js";import"./useFocusRing-IDQhhoIK.js";import"./index-DJ_VatpF.js";import"./index-C5hIZfwH.js";import"./clsx-Ciqy0D92.js";import"./Text-19RelmEi.js";import"./Label-if6eFtKI.js";import"./Button-Czn9lX0K.js";import"./Hidden-B-o_Z7ot.js";import"./useLabels-SIl08feW.js";import"./useButton-MJN3qUWn.js";import"./Dialog-OKjalaOk.js";import"./RSPContexts-BeTSInpY.js";import"./OverlayArrow-DiNb5Fu3.js";import"./useResizeObserver-Dhz32DFD.js";import"./useControlledState-kzArnBYE.js";import"./Collection-09IBPkRq.js";import"./index-3kktDTdc.js";import"./Separator-CRnSeFy5.js";import"./SelectionManager-Dcw7EeBz.js";import"./useEvent-gEY0uIrq.js";import"./scrollIntoView-DF5-5d4s.js";import"./SelectionIndicator-B7PNH1gU.js";import"./useDescription-CAoO2SDf.js";import"./ListKeyboardDelegate-zBpsm9mR.js";import"./PressResponder--6CUqe1-.js";import"./useLocalizedStringFormatter-DnY2UHeu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BsUrANvt.js";import"./getScrollParent-C3WNykc8.js";import"./VisuallyHidden-B1MOHF_-.js";import"./x-YUyJRI2G.js";import"./createLucideIcon-DO7HuIXt.js";import"./useLocalizedStringFormatter-BjlGfbr7.js";import"./Heading-Dh4ztEp9.js";import"./Button-6n3SyLgE.js";import"./Button.module-D_C6WeTN.js";import"./info-DjPwzfYU.js";import"./Popover--A1GvFMU.js";import"./useFormValidation-BQsgNnye.js";import"./useField-DDZqH5hv.js";import"./Form-QMfqrVHt.js";import"./check-CmJcoH6o.js";import"./useToggleState-Dg1EUDNI.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
