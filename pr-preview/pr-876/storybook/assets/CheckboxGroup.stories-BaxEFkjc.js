import{j as e}from"./iframe-DK3mrAyo.js";import{C as m}from"./CheckboxGroup-DnVQWJPL.js";import{C as p}from"./Checkbox-Cy_8v4EU.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-7i4Fax51.js";import"./utils-KWB3V7Ew.js";import"./clsx-B-dksMZM.js";import"./Text-ChQBgCn7.js";import"./useFocusRing-GGCG3XqX.js";import"./index-BmaOBGQH.js";import"./index-Cy3OoqhK.js";import"./clsx-Ciqy0D92.js";import"./Text-BG4EGVIm.js";import"./Label-D_tmWt9z.js";import"./Button-Yd8CTw2L.js";import"./Hidden-B9O9f11_.js";import"./useLabel-CoP8Rogk.js";import"./useLabels-Cjb6VPbR.js";import"./useButton-Ee-WcKk0.js";import"./Dialog-D9WESYo-.js";import"./RSPContexts-CbpbC2QZ.js";import"./OverlayArrow-rKrAE_rE.js";import"./useResizeObserver-NQKT9YoR.js";import"./useControlledState-c72KLHwF.js";import"./Collection-DIXCXOkQ.js";import"./index-CepTmLHf.js";import"./Separator-BnWPNY9L.js";import"./SelectionManager-Dknd4-dt.js";import"./useEvent-q7OaXBNw.js";import"./scrollIntoView-DzztdlRp.js";import"./SelectionIndicator-tPL3-k8A.js";import"./useDescription-e3GpwAAN.js";import"./ListKeyboardDelegate-jeW_soEh.js";import"./PressResponder-8JpLfvHI.js";import"./useLocalizedStringFormatter-CXfqNWhw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DuQmEC3G.js";import"./getScrollParent-CsmfW8t8.js";import"./VisuallyHidden-CuCKnYKC.js";import"./ModalOverlay-CfdiJ_2P.js";import"./x-Cj5OGhdg.js";import"./createLucideIcon-ZHubZ-OE.js";import"./useLocalizedStringFormatter-DGfSF0iv.js";import"./Heading-D2LEgSAb.js";import"./Button-BKk1KYPK.js";import"./Button.module-BB7N-cLd.js";import"./info-KL40TE4F.js";import"./Popover-B-7tZGlC.js";import"./Form-ZU5Jc3do.js";import"./useField-BURaNJxe.js";import"./check-BiZdBlJV.js";import"./useToggleState-Bym-Bv-P.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
