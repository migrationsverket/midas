import{j as e}from"./iframe-DJnBo8qx.js";import{C as m}from"./CheckboxGroup-CNQfstu4.js";import{C as p}from"./Checkbox-CqBol1MN.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C3hrQaHN.js";import"./utils-gWiD0ns3.js";import"./clsx-B-dksMZM.js";import"./Text-C5-sBZVY.js";import"./useFocusRing-Bp7BshOu.js";import"./index-DrJKcisO.js";import"./index-BBWpXqfQ.js";import"./clsx-Ciqy0D92.js";import"./Text-CwlODUSS.js";import"./Label-BS-6xxDi.js";import"./Button-DeGMYH9f.js";import"./Hidden-DalgADPi.js";import"./useLabel-CQ_H6yZ6.js";import"./useLabels-CCJcnJYo.js";import"./useButton-CF9JOIlT.js";import"./Dialog-CkKjDja5.js";import"./RSPContexts-QhaJtN54.js";import"./OverlayArrow-CW1sQvWA.js";import"./useResizeObserver-BJda_aia.js";import"./useControlledState-DGw5Me1h.js";import"./Collection-Cyi4sj4g.js";import"./index-CDN3X01D.js";import"./Separator-B_h55PTT.js";import"./SelectionManager-Cz5XDWSZ.js";import"./useEvent-BgibXCRa.js";import"./scrollIntoView-CmRBaB-g.js";import"./SelectionIndicator-bVow53O0.js";import"./useDescription-CfwfTgOd.js";import"./ListKeyboardDelegate-BScgO_Ta.js";import"./PressResponder-DesJJGWg.js";import"./useLocalizedStringFormatter-CZN4d7Nk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-yCPDjLRE.js";import"./getScrollParent-BBgGqXJk.js";import"./VisuallyHidden-XMqtKg57.js";import"./x-DoHdhEkA.js";import"./createLucideIcon-mT6cpvLo.js";import"./useLocalizedStringFormatter-DDDranTe.js";import"./Heading-rY_Xr7Np.js";import"./Button-DxRtiFp7.js";import"./Button.module-BB7N-cLd.js";import"./info-BwG3xnJT.js";import"./Popover-Bc0rU4lY.js";import"./Form-Bm_BfevM.js";import"./useField-Qw0L00q1.js";import"./check-wJtMB9W2.js";import"./useToggleState-BCJxX3AZ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
