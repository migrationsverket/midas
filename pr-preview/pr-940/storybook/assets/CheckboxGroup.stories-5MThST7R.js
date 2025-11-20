import{j as e}from"./iframe-BBV6b5lG.js";import{C as m}from"./CheckboxGroup-BGPYeazp.js";import{C as p}from"./Checkbox-B_aSW43r.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dn4KLTgh.js";import"./utils-Cl8pVGWb.js";import"./clsx-B-dksMZM.js";import"./Text-CxqhfGOZ.js";import"./useFocusRing-BKoWjM3h.js";import"./index-BzpXdeZq.js";import"./index-D_KHeT1o.js";import"./clsx-Ciqy0D92.js";import"./Text-BpMSL69-.js";import"./Label-h4NsAjk6.js";import"./Button-DLszx2Y7.js";import"./Hidden-Ds8YvxI_.js";import"./useLabels-pCbqYqJF.js";import"./useButton-tezIzvTx.js";import"./Dialog-BFEWe8TO.js";import"./RSPContexts-hzdcErwp.js";import"./OverlayArrow-BomDHho0.js";import"./useResizeObserver-CAjCmXVf.js";import"./useControlledState-DB16enQ5.js";import"./Collection-qoeOD1CS.js";import"./index-CYJ9XJJR.js";import"./Separator-Dh0tBHbj.js";import"./SelectionManager-Durd4biJ.js";import"./useEvent-BthYEK7x.js";import"./scrollIntoView-DPNGSIfh.js";import"./SelectionIndicator-Dny4s1sY.js";import"./useDescription-CgE8AlaE.js";import"./ListKeyboardDelegate-DnVSv-_P.js";import"./PressResponder-BNJfbrMZ.js";import"./useLocalizedStringFormatter-DxPLpvAw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CSPXvemZ.js";import"./VisuallyHidden-DebLyYO_.js";import"./Button-D_woJjNv.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-8FdOFj4F.js";import"./createLucideIcon-CQjagoR0.js";import"./x-Cq4GRLQZ.js";import"./Heading-yZSSjkRN.js";import"./info-VT6Pjcpf.js";import"./Popover-BMbwZ4Q9.js";import"./useFormValidation-DK1VssBA.js";import"./useField-CJHeRl7h.js";import"./Form-CdyuF1WR.js";import"./check-Djp71Zgg.js";import"./useToggleState-DafGnFSD.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
