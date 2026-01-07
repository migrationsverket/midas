import{j as e}from"./iframe-Bflhdmnn.js";import{C as m}from"./CheckboxGroup-DVgvS79a.js";import{C as p}from"./Checkbox-CbthLZbR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CN0prp1V.js";import"./utils-BPwgoz0Z.js";import"./clsx-B-dksMZM.js";import"./Text-D5Q908jx.js";import"./useFocusRing-BekWnAY5.js";import"./index-BxP1rmx1.js";import"./index-DGB9V8m6.js";import"./clsx-Ciqy0D92.js";import"./Text-In3vo28v.js";import"./Label-CoJLEthI.js";import"./Button-m3Na6kNz.js";import"./Hidden-KMCdUr8_.js";import"./useLabels-tdJ51icT.js";import"./useButton-DQzOjWYq.js";import"./Dialog-BNSBZ09q.js";import"./RSPContexts-2KhPt2NA.js";import"./OverlayArrow-DQy00nt7.js";import"./useResizeObserver-BUORJ37z.js";import"./useControlledState-De_NBKuj.js";import"./Collection-D5gAP1y3.js";import"./index-CFjvau_c.js";import"./Separator-DJBs56HN.js";import"./SelectionManager-C3aW7xip.js";import"./useEvent-BW24FHrd.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BMnZXT7d.js";import"./useDescription-IOBPAjoc.js";import"./ListKeyboardDelegate-CjeS6Q2s.js";import"./PressResponder-CPootSN1.js";import"./useLocalizedStringFormatter-EwY44Yqc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YPQBgqyJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-P8tetEQ_.js";import"./Button-CafMpAWK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D5OYcKkz.js";import"./createLucideIcon-CpeXUi9U.js";import"./x-D8w9i_29.js";import"./Heading-BMiykM9u.js";import"./info-DlFFkZA1.js";import"./Popover-Cm45pmH_.js";import"./useFormValidation-2gQShG9R.js";import"./useField-m0nH8cRy.js";import"./Form-9q16qy_C.js";import"./check-C1weC2MF.js";import"./useToggleState-CFir_noZ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
