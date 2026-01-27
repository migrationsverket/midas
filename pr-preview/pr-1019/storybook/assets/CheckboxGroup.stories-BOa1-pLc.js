import{j as e}from"./iframe-BBOYsnjU.js";import{C as m}from"./CheckboxGroup-DmjfJv9L.js";import{C as p}from"./Checkbox-DTzEyyaj.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DVSJgZFJ.js";import"./utils-j2mhf0J5.js";import"./clsx-B-dksMZM.js";import"./Text-CZBI6ZSH.js";import"./useFocusRing-DZUzyHgy.js";import"./index-rPoChojA.js";import"./index-Cf35xK9l.js";import"./clsx-Ciqy0D92.js";import"./Text-DzOdr-51.js";import"./Label-BedyMYE6.js";import"./Button-DDjB2733.js";import"./Hidden-aOpMhQep.js";import"./useLabels-DQMV1_Yc.js";import"./useButton-Ftv_ctu3.js";import"./Dialog-PT94pOVS.js";import"./RSPContexts-D5OeRAAV.js";import"./OverlayArrow-DjxgQCPQ.js";import"./useResizeObserver-Crl3p5Sa.js";import"./useControlledState-CQ0df-ju.js";import"./Collection-CEBzJ_lA.js";import"./index-Dvfsc1lc.js";import"./Separator-B3e-1a45.js";import"./SelectionManager-BlVi-ftI.js";import"./useEvent-BilFL-U7.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CusS6hE5.js";import"./useDescription-C0eI7hlZ.js";import"./ListKeyboardDelegate-BMqGOvXO.js";import"./PressResponder-D610_ohd.js";import"./useLocalizedStringFormatter-CDq5Lh88.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BllTI8pn.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CPK8rn6e.js";import"./Button-CyQgtJ3P.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D1Kiw22P.js";import"./createLucideIcon-Ce2Qhn1H.js";import"./x-Dqyc0lO4.js";import"./Heading-BGkTIoGQ.js";import"./info-BSgR4tHE.js";import"./Popover-Dl-LbO-l.js";import"./useFormValidation-D48nmeiZ.js";import"./useField-LYyOQXPm.js";import"./Form-CHLazgRg.js";import"./check-COwCm7m4.js";import"./useToggleState-D0fgWUNk.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
