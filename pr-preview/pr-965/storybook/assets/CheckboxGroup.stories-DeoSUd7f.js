import{j as e}from"./iframe-CNsxVRri.js";import{C as m}from"./CheckboxGroup-nevDsDNe.js";import{C as p}from"./Checkbox-B2WsxDBA.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CQWVGndw.js";import"./utils-Co8chztC.js";import"./clsx-B-dksMZM.js";import"./Text-BcPHhIoD.js";import"./useFocusRing-DsaNSwIK.js";import"./index-iQGs7ivC.js";import"./index-xzFc3yKu.js";import"./clsx-Ciqy0D92.js";import"./Text-B0puKBqo.js";import"./Label-Tx4_SrL5.js";import"./Button-Do7i_7km.js";import"./Hidden-DMs7iDYH.js";import"./useLabels-DqA2utri.js";import"./useButton-DcobyQYb.js";import"./Dialog-5tOVNM_2.js";import"./RSPContexts-C2NqX-xc.js";import"./OverlayArrow-DAa0_K1x.js";import"./useResizeObserver-DbTvgdDX.js";import"./useControlledState-CUxSahqU.js";import"./Collection-CPDPbXqb.js";import"./index-Cj8N2CDg.js";import"./Separator-CJNgCpNk.js";import"./SelectionManager-CFEzyJjx.js";import"./useEvent-BWpSMV0r.js";import"./scrollIntoView-ClfUnk7u.js";import"./SelectionIndicator-DbzXfTDz.js";import"./useDescription-D59E3gfa.js";import"./ListKeyboardDelegate-C9WpRKID.js";import"./PressResponder-DSQ1wpIq.js";import"./useLocalizedStringFormatter-BPCDmmQm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DME4hMuJ.js";import"./VisuallyHidden-8GTBfxVg.js";import"./Button-BVskKP47.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C5Du77Az.js";import"./createLucideIcon-RNATAqG3.js";import"./x-BTpUX4-J.js";import"./Heading-DaJq3jyB.js";import"./info-B5j5iOPY.js";import"./Popover-DuW4ikAG.js";import"./useFormValidation-BWezWJjJ.js";import"./useField-B6T0pS4P.js";import"./Form-B6CFbbwE.js";import"./check-uiCFxDRw.js";import"./useToggleState-D05nlq3Y.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
