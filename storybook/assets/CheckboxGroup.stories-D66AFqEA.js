import{j as e}from"./iframe-DyxCcCyx.js";import{C as m}from"./CheckboxGroup-B1CZNTpV.js";import{C as p}from"./Checkbox--GCd8IJl.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DdTU2tDW.js";import"./utils-BW0-JoNA.js";import"./clsx-B-dksMZM.js";import"./Text-B9nGcsnc.js";import"./useFocusRing-V7JnXRkU.js";import"./index-Bg_Ixq-d.js";import"./index-mxOIoeQ7.js";import"./clsx-Ciqy0D92.js";import"./Text-CB6Z4njm.js";import"./Label-Obz4ch6Q.js";import"./Button-CGJ03pmK.js";import"./Hidden-VmbWRniU.js";import"./useLabels-SpNJAkxC.js";import"./useButton-DaIHAkHH.js";import"./Dialog-9GNryo_S.js";import"./RSPContexts-DtjzuVJm.js";import"./OverlayArrow-B2TCZkzT.js";import"./useResizeObserver-BSHhgy0g.js";import"./useControlledState-D71RWKqh.js";import"./Collection-ChlMaR9s.js";import"./index--EBG1dQ6.js";import"./Separator-CGPNFxVg.js";import"./SelectionManager-C-k-XY9u.js";import"./useEvent-C6lvkRcD.js";import"./scrollIntoView-BsJxCnbB.js";import"./SelectionIndicator-DD87XjXe.js";import"./useDescription-CKUziIh1.js";import"./ListKeyboardDelegate-CInpcvds.js";import"./PressResponder-DAMkc3FX.js";import"./useLocalizedStringFormatter-z0DNDuDP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DJdWTGBu.js";import"./VisuallyHidden-DtpJAIUo.js";import"./Button-B8YpJpXe.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-FMsSjGTt.js";import"./createLucideIcon-DUhw7aDt.js";import"./x-_PMfnmjw.js";import"./Heading-D2iUk4jc.js";import"./info-CLjmrGg6.js";import"./Popover-BQPOL7SL.js";import"./useFormValidation-Br76oWhD.js";import"./useField-DTfyaP-5.js";import"./Form-Claqeyz4.js";import"./check-BTdkq4P4.js";import"./useToggleState-CeSGv7PT.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
