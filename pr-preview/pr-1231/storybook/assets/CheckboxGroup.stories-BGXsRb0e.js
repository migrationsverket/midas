import{j as e}from"./iframe-DHMeiSea.js";import{C as m}from"./CheckboxGroup-BZmUhPW4.js";import{C as p}from"./Checkbox-kagJyTLV.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-lPOYj5uT.js";import"./utils-C4sbwA05.js";import"./clsx-B-dksMZM.js";import"./Text-BM4AoGMt.js";import"./useFocusRing-BZqNlBLL.js";import"./index-DUWIsA9S.js";import"./index-CO65HGaQ.js";import"./clsx-Ciqy0D92.js";import"./Text-OJU2i65y.js";import"./Label-n0zIZ0YP.js";import"./Button-X7Yqj24b.js";import"./Hidden-BDTDIVWX.js";import"./useLabel-C9k7s1Sm.js";import"./useLabels-66mig2cx.js";import"./useButton-RAYxeWyl.js";import"./Dialog-D_XYb5Vc.js";import"./RSPContexts-BSo_BzMb.js";import"./OverlayArrow-DxS57IzR.js";import"./useResizeObserver-Ze8rZcGU.js";import"./useControlledState-CMV_FSB4.js";import"./Collection-B5CYATRa.js";import"./index-CyT7ybeZ.js";import"./Separator-oRvQrtC5.js";import"./SelectionManager-qRhNxfSP.js";import"./useEvent-lEqisOMe.js";import"./scrollIntoView-CXJd081A.js";import"./SelectionIndicator-D6PB-Vso.js";import"./useDescription-D2PosSZ6.js";import"./ListKeyboardDelegate-DrOjYDNI.js";import"./PressResponder-C89v-ZUc.js";import"./useLocalizedStringFormatter-C8QLbDFe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BShm4XID.js";import"./getScrollParent-DqcIICEx.js";import"./VisuallyHidden-V6Y_A8T3.js";import"./ModalOverlay--PxWcUJn.js";import"./x-C9bWyskH.js";import"./createLucideIcon-DHfZe-cT.js";import"./useLocalizedStringFormatter-B2muSTfc.js";import"./Heading-BSgX0T3V.js";import"./Button-DRj-uv9d.js";import"./Button.module-BB7N-cLd.js";import"./info-DNKVSWHx.js";import"./Popover-BdjDmCqu.js";import"./Form-BA5p4_Pr.js";import"./useField-DM8ENoK0.js";import"./check-DVj13SaZ.js";import"./useToggleState-C90nGXgz.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
