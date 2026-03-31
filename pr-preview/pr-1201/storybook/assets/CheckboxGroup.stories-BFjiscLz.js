import{j as e}from"./iframe-CXDxfhKB.js";import{C as m}from"./CheckboxGroup-DxB8pMG0.js";import{C as p}from"./Checkbox-C201Sb3D.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CRkZofSG.js";import"./utils-BlE_s_bB.js";import"./clsx-B-dksMZM.js";import"./Text-w7WBT89W.js";import"./useFocusRing-V1VB5dDl.js";import"./index-C3fyWD75.js";import"./index-0GWGer8Z.js";import"./clsx-Ciqy0D92.js";import"./Text-NatKauD4.js";import"./Label-C4_le61q.js";import"./Button-rApmyro7.js";import"./Hidden-DFs8xn-0.js";import"./useLabel-BQWuOrga.js";import"./useLabels-CzD1PIZv.js";import"./useButton-CHfNFaSS.js";import"./Dialog-myaI4Vl6.js";import"./RSPContexts-Nbqg0I0B.js";import"./OverlayArrow-CP7L6kx6.js";import"./useResizeObserver-DxjY8Qtl.js";import"./useControlledState-C3yTnT2d.js";import"./Collection-C03GyHMY.js";import"./index-B283YcJ4.js";import"./Separator-DWCUmXh_.js";import"./SelectionManager-Dej9q5IQ.js";import"./useEvent-BMdy9ETw.js";import"./scrollIntoView-CrmCmhFj.js";import"./SelectionIndicator-BeTSBWNA.js";import"./useDescription-DvZUghvu.js";import"./ListKeyboardDelegate-U_DFw0WQ.js";import"./PressResponder-DIGAZNi_.js";import"./useLocalizedStringFormatter-DFZeYHJD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BYO-5mxD.js";import"./getScrollParent-DpF68pAX.js";import"./VisuallyHidden-D1jOK9_R.js";import"./x-8JNHbqX6.js";import"./createLucideIcon-DfHQJbWK.js";import"./useLocalizedStringFormatter-BSYNBMcv.js";import"./Heading-BGATdE4Y.js";import"./Button-BZAdL-F6.js";import"./Button.module-BB7N-cLd.js";import"./info-zT8FnlVl.js";import"./Popover-CWGWHrZU.js";import"./Form-Dq6C18ap.js";import"./useField-ljYOypBN.js";import"./check-BMZcnX9v.js";import"./useToggleState-BvpiVkSe.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
