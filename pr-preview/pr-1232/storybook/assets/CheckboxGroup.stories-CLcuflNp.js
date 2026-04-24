import{j as e}from"./iframe-IJuqoOmk.js";import{C as m}from"./CheckboxGroup-inhQZmny.js";import{C as p}from"./Checkbox-CANdvbbZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BFehnrZy.js";import"./utils-B1FkGHW3.js";import"./clsx-B-dksMZM.js";import"./Text-B8nSOSOw.js";import"./useFocusRing-CkLNsvno.js";import"./index-CBGauQ3U.js";import"./index-DtmQ20tD.js";import"./clsx-Ciqy0D92.js";import"./Text-Dbv6zmdw.js";import"./Label-HhRYMSA5.js";import"./Button-E9T7cgY3.js";import"./Hidden-DzRh-64e.js";import"./useLabel-BDetoK4o.js";import"./useLabels-W32AwYY6.js";import"./useButton-Ckvqp9dV.js";import"./Dialog-D2Gdenpy.js";import"./RSPContexts-BaJeT4Si.js";import"./OverlayArrow-B05urvva.js";import"./useResizeObserver-B_Aj4v-9.js";import"./useControlledState-DL7f2Wr3.js";import"./Collection-Dbvuv6fS.js";import"./index-_UICZ5rp.js";import"./Separator-ButKc24M.js";import"./SelectionManager-DPPUnvtT.js";import"./useEvent-tP2LEsJ9.js";import"./scrollIntoView-Cek-eHKE.js";import"./SelectionIndicator-BxSO78Cy.js";import"./useDescription--7_MWUV8.js";import"./ListKeyboardDelegate-OIAI4zXm.js";import"./PressResponder-C0Ft6gtK.js";import"./useLocalizedStringFormatter-BdCq-opg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DFB-t0y7.js";import"./getScrollParent-CQ3nADdi.js";import"./VisuallyHidden-Bdyvpnxr.js";import"./ModalOverlay-CuG1KHeC.js";import"./x-BhOMJrhI.js";import"./createLucideIcon-9OQLRRNP.js";import"./useLocalizedStringFormatter-Vjm4sErI.js";import"./Heading-Crc-KCwN.js";import"./Button-DQFlWi2u.js";import"./Button.module-BB7N-cLd.js";import"./info-CW6QV4tx.js";import"./Popover-4MHobK71.js";import"./Form-D4TqUibt.js";import"./useField-C73EInUm.js";import"./check-CjqUkIyP.js";import"./useToggleState-CaCY45Zr.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
