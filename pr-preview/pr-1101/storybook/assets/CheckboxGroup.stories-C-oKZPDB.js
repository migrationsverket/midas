import{j as e}from"./iframe-CSEJNTkK.js";import{C as m}from"./CheckboxGroup-CAAeo_MS.js";import{C as p}from"./Checkbox-Cr3SU3GM.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-H0rNPMcB.js";import"./utils-DeJFKvWK.js";import"./clsx-B-dksMZM.js";import"./Text-D9jZWUtn.js";import"./useFocusRing-DrHJkNXb.js";import"./index-D143hsf1.js";import"./index-BMO83btm.js";import"./clsx-Ciqy0D92.js";import"./Text-BZVryx1n.js";import"./Label-92kQ6Ymf.js";import"./Button-C9VKeO5Q.js";import"./Hidden-UvxDhw7H.js";import"./useLabels-BgO5uamo.js";import"./useButton-BhgtOeCo.js";import"./Dialog-DqyXwleY.js";import"./RSPContexts-zt9dEm9A.js";import"./OverlayArrow-B7DoErx8.js";import"./useResizeObserver-D1WfdjA5.js";import"./useControlledState-B4wBbeGG.js";import"./Collection-DvLNFqPF.js";import"./index-DIm73aBC.js";import"./Separator-ClKeK0UH.js";import"./SelectionManager-BMfttRP9.js";import"./useEvent-DJ2zukRQ.js";import"./scrollIntoView-fZBPi3kj.js";import"./SelectionIndicator-DYhuORWP.js";import"./useDescription-FN-9a8Gv.js";import"./ListKeyboardDelegate-D5_-PZiv.js";import"./PressResponder-l8533rDQ.js";import"./useLocalizedStringFormatter-BfRcdDUG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BjMOhDnG.js";import"./getScrollParent-BjkCtlKv.js";import"./VisuallyHidden-D49iMATH.js";import"./x-DUi-rfHM.js";import"./createLucideIcon-ttv-_pDn.js";import"./useLocalizedStringFormatter-BQyjPzmq.js";import"./Heading-L0LPPdCM.js";import"./Button-BNNwT8-I.js";import"./Button.module-D_C6WeTN.js";import"./info-Arzt1sWe.js";import"./Popover-Td1HiOam.js";import"./useFormValidation-87lR2aCk.js";import"./useField-CAM1ffXR.js";import"./Form-CVVOpC8n.js";import"./check-C4EPAixs.js";import"./useToggleState-BDLT-wKB.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
