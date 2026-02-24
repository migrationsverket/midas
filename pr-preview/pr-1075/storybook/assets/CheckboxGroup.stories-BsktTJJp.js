import{j as e}from"./iframe-DJytE9jg.js";import{C as m}from"./CheckboxGroup-CUrvLj2Z.js";import{C as p}from"./Checkbox-BDoHLLXg.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B3osPoIK.js";import"./utils-VHUq0skz.js";import"./clsx-B-dksMZM.js";import"./Text-Bdh14pRr.js";import"./useFocusRing-Vnrwenoe.js";import"./index-B-f9OSEP.js";import"./index-PioAU-tD.js";import"./clsx-Ciqy0D92.js";import"./Text-DlvIzI2Z.js";import"./Label-C4pO9QF9.js";import"./Button-CVNkhFVY.js";import"./Hidden-DKrVS7N8.js";import"./useLabels-CkATJGoJ.js";import"./useButton-CQ5agqnn.js";import"./Dialog-Y8I3ROtx.js";import"./RSPContexts-C8SqMLv_.js";import"./OverlayArrow-CN5zkL29.js";import"./useResizeObserver-C2e7Sh_i.js";import"./useControlledState-_v_byBHa.js";import"./Collection-DU_4Nury.js";import"./index-CINcpYxA.js";import"./Separator-BJk2G1nv.js";import"./SelectionManager-BfwpH8_C.js";import"./useEvent-DGji_m9a.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-YHfiMVAf.js";import"./useDescription-DI9NSFVt.js";import"./ListKeyboardDelegate-ZZ_q-Bvn.js";import"./PressResponder-B7Uzk7f9.js";import"./useLocalizedStringFormatter-CxnQTRGL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DSMEgQKX.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CffJ4x8N.js";import"./Button-C9t41CsC.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DspRbcc6.js";import"./createLucideIcon-BQp7PZIZ.js";import"./x-ClmUGKux.js";import"./Heading-D9CTNomY.js";import"./info-ySbVyaUx.js";import"./Popover-xFSM5Mcp.js";import"./useFormValidation-DfqdalkR.js";import"./useField-B0waFkY3.js";import"./Form-DHzUoCnh.js";import"./check-Bnm1192q.js";import"./useToggleState-g7NXNdtG.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
