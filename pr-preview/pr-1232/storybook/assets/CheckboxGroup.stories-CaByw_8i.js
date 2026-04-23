import{j as e}from"./iframe-BzE31zAh.js";import{C as m}from"./CheckboxGroup-CJXUIFsl.js";import{C as p}from"./Checkbox-C0Pgj78M.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bs0ZVONG.js";import"./utils-DEtUikZw.js";import"./clsx-B-dksMZM.js";import"./Text-BM4F5w0Y.js";import"./useFocusRing-CqeBj5xm.js";import"./index-DdObABro.js";import"./index-DiZkuWFN.js";import"./clsx-Ciqy0D92.js";import"./Text-DWgTuz7g.js";import"./Label-D1Qa8Q1B.js";import"./Button-DG_UrG-_.js";import"./Hidden-7JIM7zeN.js";import"./useLabel-BsvNbn_r.js";import"./useLabels-BAeRD83W.js";import"./useButton-zcjb-0dd.js";import"./Dialog-CuD4dufr.js";import"./RSPContexts-BP6VbO9Z.js";import"./OverlayArrow-Ci1-Yomt.js";import"./useResizeObserver-CiM13zj7.js";import"./useControlledState-PVT6AeJ2.js";import"./Collection-CIijpQf2.js";import"./index-CtPUYOy2.js";import"./Separator-D6GUJf06.js";import"./SelectionManager-C7mBAcgV.js";import"./useEvent-BLL5UQ6m.js";import"./scrollIntoView-De1qC2jD.js";import"./SelectionIndicator-BedaVpk3.js";import"./useDescription-Dn7H1kUN.js";import"./ListKeyboardDelegate-6zhjV-lS.js";import"./PressResponder-C02FpRAV.js";import"./useLocalizedStringFormatter-iW6IrIfx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-1YFdzJi3.js";import"./getScrollParent-B2Y1TED_.js";import"./VisuallyHidden-C6-4w0VX.js";import"./ModalOverlay-D5u7i0Mo.js";import"./x-23zMaYXZ.js";import"./createLucideIcon-Lrfi9yqC.js";import"./useLocalizedStringFormatter-BIklF50D.js";import"./Heading-CN3On5_t.js";import"./Button-D6ialrwI.js";import"./Button.module-BB7N-cLd.js";import"./info-Dc03G-UN.js";import"./Popover-FzrbKsT2.js";import"./Form-arZIN1dN.js";import"./useField-BBuU5S3O.js";import"./check-BpnwENMz.js";import"./useToggleState-DdV0NQQ6.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
