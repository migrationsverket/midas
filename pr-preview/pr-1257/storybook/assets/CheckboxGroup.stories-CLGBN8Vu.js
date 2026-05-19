import{j as e}from"./iframe-BE6opBBQ.js";import{C as m}from"./CheckboxGroup-DLPEsJjz.js";import{C as p}from"./Checkbox-0UpU7gGh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-rh0vxGNi.js";import"./utils-C8ofSvVg.js";import"./clsx-B-dksMZM.js";import"./Text-DssX7oue.js";import"./useFocusRing-B2vnni9l.js";import"./index-DAQ_HM4b.js";import"./index-yi7QOzex.js";import"./clsx-Ciqy0D92.js";import"./Text-DXKcxlic.js";import"./Label-Yz5OXnCM.js";import"./Button-33q5ghqc.js";import"./Hidden-ZOBOpRNs.js";import"./useLabel-DYb1uAYa.js";import"./useLabels-CTwsRaEG.js";import"./useButton-Ds0Hb-Tu.js";import"./Dialog-DryXQOzK.js";import"./RSPContexts-D18522_R.js";import"./OverlayArrow-D_lM7QjR.js";import"./useResizeObserver-J_5HhmcL.js";import"./useControlledState-DKq-QKGp.js";import"./Collection-BDfNZ04v.js";import"./index-DBqXhfdp.js";import"./Separator-BABspNhk.js";import"./SelectionManager-DcfHF2BT.js";import"./useEvent-Df4XmH1c.js";import"./scrollIntoView-CGjnRAcf.js";import"./SelectionIndicator-DIMhBzC8.js";import"./useDescription-Cm-6_l4m.js";import"./ListKeyboardDelegate--moD0RsY.js";import"./PressResponder-DODdLQvF.js";import"./useLocalizedStringFormatter-D7yAGsCf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-GI6DuVjb.js";import"./getScrollParent-B6ANYB0N.js";import"./VisuallyHidden-TQ9t5iSG.js";import"./ModalOverlay-B7NE_JCn.js";import"./x-D6OAu6QL.js";import"./createLucideIcon-BCuYuRMM.js";import"./useLocalizedStringFormatter-CwdjWiaw.js";import"./Heading-BmRPyc3t.js";import"./Button-C8N-CVIU.js";import"./Button.module-BB7N-cLd.js";import"./info-CT26aLst.js";import"./Popover-Dvze6mIn.js";import"./Form-BxafmMzb.js";import"./useField-Dwn3J9rA.js";import"./check-YAuxHrNr.js";import"./useToggleState-DxwtfNo9.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
