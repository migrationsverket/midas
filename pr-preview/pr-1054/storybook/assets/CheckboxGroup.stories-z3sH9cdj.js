import{j as e}from"./iframe-BJoNrLOB.js";import{C as m}from"./CheckboxGroup-D-Bk6L56.js";import{C as p}from"./Checkbox-Dwn2cg9I.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BeL_eVmM.js";import"./utils-8eOeUZvs.js";import"./clsx-B-dksMZM.js";import"./Text-Nm20Pdh1.js";import"./useFocusRing-xf59S3G4.js";import"./index-TiYrZJQV.js";import"./index-BrwANR0V.js";import"./clsx-Ciqy0D92.js";import"./Text-CXbyhWc_.js";import"./Label-DC8z0e73.js";import"./Button-BoY_ExKw.js";import"./Hidden-CN18PH3U.js";import"./useLabels-Dsw7O8PH.js";import"./useButton-Dmh7lGXM.js";import"./Dialog-DHZzYmYR.js";import"./RSPContexts-CCiC92U9.js";import"./OverlayArrow-CZ19wXXV.js";import"./useResizeObserver-Cc5YSlIU.js";import"./useControlledState-DXjBUGo4.js";import"./Collection-D-wvIYwO.js";import"./index-CtHKFZnr.js";import"./Separator-CgFexpSf.js";import"./SelectionManager-C5N71AQX.js";import"./useEvent-B_iQ0eAu.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B7MHA78e.js";import"./useDescription-BwTDoIfu.js";import"./ListKeyboardDelegate-CJschMJ8.js";import"./PressResponder-BA7OUFak.js";import"./useLocalizedStringFormatter-Ck15hl-3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTTNfr-O.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bokzl-n3.js";import"./Button-C_BpUAF5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-elsdN5ae.js";import"./createLucideIcon-BX3h9Owr.js";import"./x-DSXcAS6f.js";import"./Heading-C7tT-cfJ.js";import"./info-1ZTJbKVh.js";import"./Popover-DjkV7LeP.js";import"./useFormValidation-MpE-MHxZ.js";import"./useField-BeLJlWfS.js";import"./Form-Dl7Kj9Mq.js";import"./check-Bz3oVWhx.js";import"./useToggleState-nQMApmjz.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
