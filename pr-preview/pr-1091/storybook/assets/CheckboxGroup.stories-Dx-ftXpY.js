import{j as e}from"./iframe-BiqtS-LP.js";import{C as m}from"./CheckboxGroup-BDc_w7iW.js";import{C as p}from"./Checkbox-BwHjzH-w.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-1zu70EvV.js";import"./utils-DDp3zx2O.js";import"./clsx-B-dksMZM.js";import"./Text-D-mv30w6.js";import"./useFocusRing-BBdC9X4b.js";import"./index-DTfFxrYl.js";import"./index-Bz2sGi_M.js";import"./clsx-Ciqy0D92.js";import"./Text-BTm6pr0L.js";import"./Label-DEFeb1qF.js";import"./Button-Dc8C55b6.js";import"./Hidden-DFfMyXk8.js";import"./useLabels-CVc1Ewfj.js";import"./useButton-C1JXpszC.js";import"./Dialog-PAPpSH0H.js";import"./RSPContexts-Dx5-en_D.js";import"./OverlayArrow-DQqBUqzJ.js";import"./useResizeObserver-T8diNOak.js";import"./useControlledState-D31sClCQ.js";import"./Collection-BAHLD-pp.js";import"./index-CR_cbryd.js";import"./Separator-IZUjwWjm.js";import"./SelectionManager-CFase-FQ.js";import"./useEvent-BCPLxZ21.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DfyBs16K.js";import"./useDescription-R9tt-U1b.js";import"./ListKeyboardDelegate-C4sdMyQn.js";import"./PressResponder-Cha579s1.js";import"./useLocalizedStringFormatter-BjTggtdP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-fsFtW3Vl.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-50sq9ta1.js";import"./Button-HP_18L76.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C1qYlgbG.js";import"./createLucideIcon-DKP3y2-x.js";import"./x-tfBXJ63x.js";import"./Heading-DgfbP9Bo.js";import"./info-oQ50dyPH.js";import"./Popover-BHnQef2W.js";import"./useFormValidation-CSIxhFru.js";import"./useField-CaYVL4H3.js";import"./Form-C1Ck1pmt.js";import"./check-CpVME2aF.js";import"./useToggleState-Dmsa6If5.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
