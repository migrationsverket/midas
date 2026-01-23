import{j as e}from"./iframe-B5mKUI4c.js";import{C as m}from"./CheckboxGroup-PjPU0O0P.js";import{C as p}from"./Checkbox-D-02jh5o.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CWRNW1G1.js";import"./utils-DeW7LaO1.js";import"./clsx-B-dksMZM.js";import"./Text-BYCbsMCs.js";import"./useFocusRing-CgbRETJq.js";import"./index-BhZP_iQU.js";import"./index-4ahidsI-.js";import"./clsx-Ciqy0D92.js";import"./Text-B1l_WlEL.js";import"./Label--rM9mR8h.js";import"./Button-BrTPVwzK.js";import"./Hidden-CSsTijhC.js";import"./useLabels-B2xIaWSz.js";import"./useButton-BO8k0dou.js";import"./Dialog-GsIV9oY6.js";import"./RSPContexts-hkEluX4Q.js";import"./OverlayArrow-D2-mpB-W.js";import"./useResizeObserver-C41Yibf-.js";import"./useControlledState-xvk7L9VL.js";import"./Collection-BWT2TfPW.js";import"./index-DU05F0qm.js";import"./Separator-CZyYGJp1.js";import"./SelectionManager-BQ7PwXNj.js";import"./useEvent-Bfj_pgkR.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DkbBQGb2.js";import"./useDescription-DtjJIqI8.js";import"./ListKeyboardDelegate-rL_uqiBQ.js";import"./PressResponder-PkRvg21X.js";import"./useLocalizedStringFormatter-9u2UdEi1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKzpCpBP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Xt4BPEfK.js";import"./Button-DdQrsI7w.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgKQ4iI2.js";import"./createLucideIcon-ByiINced.js";import"./x-CzqSHOZc.js";import"./Heading-BnvherGp.js";import"./info-z8YWGbZA.js";import"./Popover-Bmqihs8u.js";import"./useFormValidation-D5XvDLkr.js";import"./useField-B5R57QYN.js";import"./Form-fo64gJbw.js";import"./check-CZ-ZEEY-.js";import"./useToggleState-Ccpw37c7.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
