import{j as e}from"./iframe-DMN73KB2.js";import{C as m}from"./CheckboxGroup-BeS7anMJ.js";import{C as p}from"./Checkbox-CQ13MQke.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DphimPrq.js";import"./utils-ytX4X4hU.js";import"./clsx-B-dksMZM.js";import"./Text-DjG6q6Y1.js";import"./useFocusRing-BhcplY33.js";import"./index-Qnw9UhGM.js";import"./index-DrmiERuM.js";import"./clsx-Ciqy0D92.js";import"./Text-B0z8pO1R.js";import"./Label-DCZNBYwR.js";import"./Button-CGbtmoIr.js";import"./Hidden-BA-gHfWt.js";import"./useLabels-CRP67w2C.js";import"./useButton-CkF7Pwvg.js";import"./Dialog-DcZbMXkv.js";import"./RSPContexts-Be8xIyRm.js";import"./OverlayArrow-BU1AkI_T.js";import"./useResizeObserver-lUohFryK.js";import"./useControlledState-DtotprCd.js";import"./Collection-BVCQUf8U.js";import"./index-ZVlvUlGw.js";import"./Separator-Dxb0YODw.js";import"./SelectionManager-Cox4bVbR.js";import"./useEvent-I49ndoPs.js";import"./scrollIntoView-BoaQO-l5.js";import"./SelectionIndicator-CNseZYUo.js";import"./useDescription-lqHqz3yA.js";import"./ListKeyboardDelegate-BnhUGRCm.js";import"./PressResponder-BL8bUdIr.js";import"./useLocalizedStringFormatter-B6PiDztw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C0x70afu.js";import"./getScrollParent-tlP_VOWl.js";import"./VisuallyHidden-CJkttl4h.js";import"./Button-Ck576HV9.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-CiDW_veP.js";import"./createLucideIcon-C88Lc7aZ.js";import"./x-BTagpejN.js";import"./Heading-kRC-xwAu.js";import"./info-Cp9QsFT_.js";import"./Popover-CklDT1fD.js";import"./useFormValidation-Cyn12n0z.js";import"./useField-Cym9KaJn.js";import"./Form-Bx3-hLS_.js";import"./check-CtTYe2bu.js";import"./useToggleState-BwvnEG4h.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
