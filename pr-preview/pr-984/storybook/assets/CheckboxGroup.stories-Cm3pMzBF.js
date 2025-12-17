import{j as e}from"./iframe-BvrUArBU.js";import{C as m}from"./CheckboxGroup-PE4Uw9Dj.js";import{C as p}from"./Checkbox-yckYMfj_.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BP3wi4fG.js";import"./utils-C_lYNAOR.js";import"./clsx-B-dksMZM.js";import"./Text-DY3vNu9D.js";import"./useFocusRing-wAugWugz.js";import"./index-DcrVl_28.js";import"./index-DsaZsgX_.js";import"./clsx-Ciqy0D92.js";import"./Text-DjPIzR5K.js";import"./Label-Dz1jRugp.js";import"./Button-D7XroJJX.js";import"./Hidden-ClBR-m0d.js";import"./useLabels-BzNgkpLP.js";import"./useButton-BGbib_XA.js";import"./Dialog-UAiO6WLN.js";import"./RSPContexts-CN08SUZd.js";import"./OverlayArrow-DldZ6yOg.js";import"./useResizeObserver-BvmQKMtJ.js";import"./useControlledState-Oju3a5HH.js";import"./Collection-DldinV_q.js";import"./index-B5UowPUY.js";import"./Separator-xTgfNddk.js";import"./SelectionManager-lkH-7A41.js";import"./useEvent-mzwxisiy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CShAyJpD.js";import"./useDescription-BcB0MmhA.js";import"./ListKeyboardDelegate-6NSF_a9x.js";import"./PressResponder-7YhYw-GQ.js";import"./useLocalizedStringFormatter-D-QUy42V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-mNwIO0Io.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dgw8VeyT.js";import"./Button-opugJ3Pw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CGIaKyQn.js";import"./createLucideIcon-CC3ddONH.js";import"./x-DZ0dfeFo.js";import"./Heading-ZB9RXTIw.js";import"./info-Dy2Qn0kI.js";import"./Popover-G-IXtm8s.js";import"./useFormValidation-D9uyR9jZ.js";import"./useField-CQVxkpdB.js";import"./Form-C8yRaKQA.js";import"./check-B44Qf4hx.js";import"./useToggleState-ypOk8l7N.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
