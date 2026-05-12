import{j as e}from"./iframe-Bc-UjTRz.js";import{C as m}from"./CheckboxGroup-CMb4FT0L.js";import{C as p}from"./Checkbox-3GA-Gy7P.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-pc1xIYti.js";import"./utils-CIlBOTwB.js";import"./clsx-B-dksMZM.js";import"./Text-FaStHPve.js";import"./useFocusRing-DmMd8vo8.js";import"./index-Dv-GYJsK.js";import"./index-qwqwtO2K.js";import"./clsx-Ciqy0D92.js";import"./Text-EmoXsUsF.js";import"./Label-C-pg10x0.js";import"./Button-BBbybcMx.js";import"./Hidden-Bobixe9k.js";import"./useLabel-BT5HgTPM.js";import"./useLabels-DPsB-EZ0.js";import"./useButton-CiKofbei.js";import"./Dialog-BSkPAq_n.js";import"./RSPContexts-BrVLX_Kr.js";import"./OverlayArrow-DfHYbDXs.js";import"./useResizeObserver-BMARLXxD.js";import"./useControlledState-Dz98cjw-.js";import"./Collection-DChyS9dt.js";import"./index-B-79tFRT.js";import"./Separator-PFdfuk3j.js";import"./SelectionManager-D8tK0CCZ.js";import"./useEvent-CjNBBIKs.js";import"./scrollIntoView-CTyn5EWZ.js";import"./SelectionIndicator-gZnD50wI.js";import"./useDescription-axt_AZYR.js";import"./ListKeyboardDelegate-Ch3xdJaU.js";import"./PressResponder-Bd0tk48r.js";import"./useLocalizedStringFormatter-CjnzGiN8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D7sGwqcv.js";import"./getScrollParent-DeC6xe2r.js";import"./VisuallyHidden-De98nctX.js";import"./ModalOverlay-BHNnLZVe.js";import"./x-BlqzX1Dg.js";import"./createLucideIcon-Cvy5MTlk.js";import"./useLocalizedStringFormatter-CK7mP7jw.js";import"./Heading-riE0Xj9K.js";import"./Button-Ddjv6hkf.js";import"./Button.module-BB7N-cLd.js";import"./info-Cqa2lKV1.js";import"./Popover-BkUvNTOR.js";import"./Form-MxAWzd2x.js";import"./useField-CMU55_2k.js";import"./check-CV39bvdl.js";import"./useToggleState-iSpTA0kN.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
