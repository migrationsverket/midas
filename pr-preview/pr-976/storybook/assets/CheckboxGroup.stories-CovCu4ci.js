import{j as e}from"./iframe-9RZ8qS0V.js";import{C as m}from"./CheckboxGroup-DpuGAJy5.js";import{C as p}from"./Checkbox-BfVwjxln.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CUjdzv4o.js";import"./utils-BWR78VZD.js";import"./clsx-B-dksMZM.js";import"./Text-DS83zdrx.js";import"./useFocusRing-C1UymAdv.js";import"./index-DYDrgj8o.js";import"./index-DXKOmJXy.js";import"./clsx-Ciqy0D92.js";import"./Text-C5_vA2qs.js";import"./Label-xPQy87i_.js";import"./Button-DwckI6V_.js";import"./Hidden-CoooHu5i.js";import"./useLabels-DYhyLCxD.js";import"./useButton-CvOgPonk.js";import"./Dialog-D4lCEOCj.js";import"./RSPContexts-Ds-Tiy4a.js";import"./OverlayArrow-Ni2lUNrt.js";import"./useResizeObserver-CXYUE0pF.js";import"./useControlledState-C698iD7f.js";import"./Collection-RNgU2tiR.js";import"./index-YMhcIuwd.js";import"./Separator-vziZxE4T.js";import"./SelectionManager-D7KLd8Lh.js";import"./useEvent-eIh3SUOB.js";import"./scrollIntoView-BjOYFxBk.js";import"./SelectionIndicator-BPzi2wSX.js";import"./useDescription-QGCzoEz7.js";import"./ListKeyboardDelegate-Ck1YB2jp.js";import"./PressResponder-CKCxq1I_.js";import"./useLocalizedStringFormatter-BH65DG8h.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CTT2eo6L.js";import"./VisuallyHidden-r7QMy6xC.js";import"./Button-_QzePwKA.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-BtH6C6HU.js";import"./createLucideIcon-BEqaj3-I.js";import"./x-nNTDHS8H.js";import"./Heading-Wtvegeka.js";import"./info-BJeUukka.js";import"./Popover-CrcIFw5_.js";import"./useFormValidation-C7T-NU-t.js";import"./useField-zgF83q1i.js";import"./Form-DAZ2yY7t.js";import"./check-CLw2aSu1.js";import"./useToggleState-C_WnR2hY.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
