import{j as e}from"./iframe-07RTUryM.js";import{C as m}from"./CheckboxGroup-A1zIL3wR.js";import{C as p}from"./Checkbox-DJ0Qi3UE.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BmLNCWmj.js";import"./utils-DDlZCoEX.js";import"./clsx-B-dksMZM.js";import"./Text-CFGS2jnp.js";import"./useFocusRing-COYx92Jj.js";import"./index-BcjdZjMV.js";import"./index-D6uG8lGX.js";import"./clsx-Ciqy0D92.js";import"./Text-5bsUq1RJ.js";import"./Label-C0vUzMAR.js";import"./Button-Dv0y-JoZ.js";import"./Hidden-DkxnzuZ8.js";import"./useLabels-DD2GJFDM.js";import"./useButton-B55nQo6r.js";import"./Dialog-C92XYQFG.js";import"./RSPContexts-Cz-G6zUG.js";import"./OverlayArrow-BnlShkCD.js";import"./useResizeObserver-2mY5lHnH.js";import"./useControlledState-Cs7nFh0s.js";import"./Collection-Bqjq0FKg.js";import"./index-LXNm5jM6.js";import"./Separator-EoupohYG.js";import"./SelectionManager-BUEZ8fPb.js";import"./useEvent-Bu-Z66ye.js";import"./scrollIntoView-J_HIj5YT.js";import"./SelectionIndicator-CQgF41ZE.js";import"./useDescription-B5YWaF2b.js";import"./ListKeyboardDelegate-COL_K4eM.js";import"./PressResponder-BZbfZcU6.js";import"./useLocalizedStringFormatter-C5QLgnKh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BVpU91Lz.js";import"./VisuallyHidden-Cm74pgqq.js";import"./Button-Bog976hN.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B39D6IqO.js";import"./createLucideIcon-BoFHMCBo.js";import"./x-DYmOm4A6.js";import"./Heading-DkJBZZSw.js";import"./info-CbfQfqH5.js";import"./Popover-9ucJesFL.js";import"./useFormValidation-BzmuUnZ8.js";import"./useField-xDB56E6O.js";import"./Form-Bg3oU93k.js";import"./check-D9ztjfWf.js";import"./useToggleState-DJeickMM.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
