import{j as e}from"./iframe-BQjBM75C.js";import{C as m}from"./CheckboxGroup-CZz-z0fu.js";import{C as p}from"./Checkbox-CMwhf1Ge.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DR3ilOc-.js";import"./utils-BSV0ImVH.js";import"./clsx-B-dksMZM.js";import"./Text-ByOtvKGn.js";import"./useFocusRing-gicmbIfS.js";import"./index-DYrIRKkS.js";import"./index-Voaa81LI.js";import"./clsx-Ciqy0D92.js";import"./Text-CSQrQWbM.js";import"./Label-Do0-Ja8U.js";import"./Button-CleE5i4u.js";import"./Hidden-DsiXMF_M.js";import"./useLabel--h21IWG8.js";import"./useLabels-CtGdXDZ4.js";import"./useButton-BZFew9pY.js";import"./Dialog-Cj31FoZk.js";import"./RSPContexts-ifp6jpNf.js";import"./OverlayArrow-BvuEBOoo.js";import"./useResizeObserver-DhalR_tD.js";import"./useControlledState-C34v6o9-.js";import"./Collection-DoWsB1Mg.js";import"./index-SmeZxf3H.js";import"./Separator-DnuFABbd.js";import"./SelectionManager-vW658jsf.js";import"./useEvent-Bf_J53mB.js";import"./scrollIntoView-ClzIkG2v.js";import"./SelectionIndicator-CD-IXRpl.js";import"./useDescription-CBsnfRLo.js";import"./ListKeyboardDelegate-BK_gcn-A.js";import"./PressResponder-DqTIPCj6.js";import"./useLocalizedStringFormatter-1UgPp4Q1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BMKhccaE.js";import"./getScrollParent-DRx-xlpO.js";import"./VisuallyHidden-DUlqTjt1.js";import"./x-CzDTAgEv.js";import"./createLucideIcon-CfIBoofS.js";import"./useLocalizedStringFormatter-C1cV6AoF.js";import"./Heading-BE_ccCAS.js";import"./Button-BrUsIHUW.js";import"./Button.module-BB7N-cLd.js";import"./info-J7ERBaz8.js";import"./Popover-DB9yXvdF.js";import"./Form-BapHbVlL.js";import"./useField-zeoSjeSc.js";import"./check-CU_NWJIN.js";import"./useToggleState-BpLH4UF7.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
