import{j as e}from"./iframe-hABApRlT.js";import{C as m}from"./CheckboxGroup-CCXcsXw6.js";import{C as p}from"./Checkbox-DqLRp2ZS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DKFm7MzG.js";import"./utils-BkABga95.js";import"./clsx-B-dksMZM.js";import"./Text-Cb1qObZS.js";import"./useFocusRing-BP25i5uK.js";import"./index-77qwmgqY.js";import"./index-BVfSwpPB.js";import"./clsx-Ciqy0D92.js";import"./Text-DztaIr_D.js";import"./Label-KKbhMX69.js";import"./Button-BzGvPTBW.js";import"./Hidden-B-K0lNZo.js";import"./useLabel-qHqMeu2r.js";import"./useLabels-BIKxEJiN.js";import"./useButton-BuyQblWp.js";import"./Dialog-mxFJLg1-.js";import"./RSPContexts-BLO7xP9m.js";import"./OverlayArrow-DtlATN_N.js";import"./useResizeObserver-CX6InukU.js";import"./useControlledState-vYw9-Cid.js";import"./Collection-ClwFbHb_.js";import"./index-BTAgFzs6.js";import"./Separator-wG9MaQYe.js";import"./SelectionManager-mYXwMkoh.js";import"./useEvent-C0BDDOqz.js";import"./scrollIntoView-CT_O_81j.js";import"./SelectionIndicator-C0va8j7y.js";import"./useDescription-SP7YFPBn.js";import"./ListKeyboardDelegate-Tqfl4kl6.js";import"./PressResponder-BGbIn2sT.js";import"./useLocalizedStringFormatter-Cl3bAFJS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BQVMG8z-.js";import"./getScrollParent-dFLOazss.js";import"./VisuallyHidden-DvfbpkLp.js";import"./x-viUQDrjv.js";import"./createLucideIcon-jn3NctNW.js";import"./useLocalizedStringFormatter-Cc9pC_do.js";import"./Heading-UK42x3As.js";import"./Button-D27stedr.js";import"./Button.module-BB7N-cLd.js";import"./info-CMfT7Fne.js";import"./Popover-CUuQBQR_.js";import"./Form-C8O9btlQ.js";import"./useField-DSfD8PGx.js";import"./check-k1jOMSBO.js";import"./useToggleState-CUj7c-BE.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
