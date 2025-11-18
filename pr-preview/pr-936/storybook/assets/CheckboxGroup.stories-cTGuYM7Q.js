import{j as e}from"./iframe-3Z2-UshW.js";import{C as m}from"./CheckboxGroup-Db7t-5RO.js";import{C as p}from"./Checkbox-D03CYToX.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DmQsB8WI.js";import"./utils-DEJEJRgi.js";import"./clsx-B-dksMZM.js";import"./Text-ByU-HJWg.js";import"./useFocusRing-MmHLX3s6.js";import"./index-CQUvP9Mk.js";import"./index-DuVB00BP.js";import"./clsx-Ciqy0D92.js";import"./Text-Df63k-we.js";import"./Label-flCSl7br.js";import"./Button-C8_JRtOx.js";import"./Hidden-B6h_oo_l.js";import"./useLabels-CV70o-W_.js";import"./useButton-DNg2H_lv.js";import"./Dialog-SPehNYWz.js";import"./RSPContexts-sdVomez5.js";import"./OverlayArrow-10n9KVZe.js";import"./useResizeObserver-CtNkq48b.js";import"./useControlledState-BqwBnLxL.js";import"./Collection-xR152A_l.js";import"./index-B__vAUfW.js";import"./Separator-B_bNR9hy.js";import"./SelectionManager-N2qnNMvi.js";import"./useEvent-B_HlG0i4.js";import"./scrollIntoView-3g7sHIC3.js";import"./SelectionIndicator-70hAQtwW.js";import"./useDescription-tzBSixbv.js";import"./ListKeyboardDelegate-BsVXku3W.js";import"./PressResponder-Cs_9oaJ5.js";import"./useLocalizedStringFormatter-DdpoOagV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C96p0Vxo.js";import"./VisuallyHidden-D1KaaG2i.js";import"./useLocalizedStringFormatter-DBDYzHUi.js";import"./Button-C4wHIXhX.js";import"./Button.module-CtQ1deO8.js";import"./x-CMZuM501.js";import"./createLucideIcon-CuTJpoE2.js";import"./Heading-AX-x11vK.js";import"./info-D4aIi2zj.js";import"./Popover-JPLRXw9o.js";import"./useFormValidation-CbbZBDTD.js";import"./useField-CB47h_B1.js";import"./Form-CiemASY7.js";import"./check-BGSyucPj.js";import"./useToggleState-DMx3x1SA.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
