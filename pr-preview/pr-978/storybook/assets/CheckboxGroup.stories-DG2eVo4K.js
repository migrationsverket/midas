import{j as e}from"./iframe-COQoy-tb.js";import{C as m}from"./CheckboxGroup-u1lITo4W.js";import{C as p}from"./Checkbox-BnuT0fY_.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-lHGiCpDB.js";import"./utils-dUj1FPII.js";import"./clsx-B-dksMZM.js";import"./Text-B03ZqDJP.js";import"./useFocusRing-KEMdm9OC.js";import"./index-D-LNSu5d.js";import"./index-Cy0cFfBq.js";import"./clsx-Ciqy0D92.js";import"./Text-C_IsDOQl.js";import"./Label-BAeCiMAa.js";import"./Button-6ISKDJI6.js";import"./Hidden-CNwHy1Fg.js";import"./useLabels-Dul859Iz.js";import"./useButton-C5PyE_o4.js";import"./Dialog-BoMfLrpd.js";import"./RSPContexts-DCzfJS37.js";import"./OverlayArrow-D-16Msc0.js";import"./useResizeObserver-CINr2uq2.js";import"./useControlledState-BLJZbN0w.js";import"./Collection-DeELs6uo.js";import"./index-Ds4njVEF.js";import"./Separator-DsnV07Uk.js";import"./SelectionManager--QHTMY6o.js";import"./useEvent-CZ9ssVuG.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-U84AkFGF.js";import"./useDescription-QKLqNAEk.js";import"./ListKeyboardDelegate-zd14mAth.js";import"./PressResponder-aykRGwze.js";import"./useLocalizedStringFormatter-CW4fmwCZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bmp8MD13.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cxp4MCQV.js";import"./Button-COWVz2rh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-ESf0SP.js";import"./createLucideIcon-uFOmHGhK.js";import"./x-BN0kx0eU.js";import"./Heading-DKzcd0sJ.js";import"./info-DYjCWrRJ.js";import"./Popover-C0tA_zXq.js";import"./useFormValidation-Dac5P0TX.js";import"./useField-CuZTH_zG.js";import"./Form-CmrvpxjU.js";import"./check-CBUmqHSH.js";import"./useToggleState-CGl8uSYJ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
