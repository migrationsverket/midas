import{j as e}from"./iframe-CXw6yEtL.js";import{C as m}from"./CheckboxGroup-DUBCuTur.js";import{C as p}from"./Checkbox-CtQHdpMr.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DxjbVN8c.js";import"./utils-TMTFLosf.js";import"./clsx-B-dksMZM.js";import"./Text-B-ez7dVi.js";import"./useFocusRing-BUJw-zNR.js";import"./index-CPSfvkie.js";import"./index-DlzVmrOj.js";import"./clsx-Ciqy0D92.js";import"./Text-DfSBpgc9.js";import"./Label-GQUT7ZEJ.js";import"./Button-C2Moqf7z.js";import"./Hidden-D7hcqzmB.js";import"./useLabel-B_dwgCb3.js";import"./useLabels-Bmz9yT3c.js";import"./useButton-DFd8dIUb.js";import"./Dialog-BDtLRBZX.js";import"./RSPContexts-CRecp9AH.js";import"./OverlayArrow-CYsKMuHd.js";import"./useResizeObserver-BgbTD5F9.js";import"./useControlledState-uGX0UHSY.js";import"./Collection-DRs08V62.js";import"./index-D_bJjS7Z.js";import"./Separator-CiHVhPYJ.js";import"./SelectionManager-DF7_C-wd.js";import"./useEvent-CLzgpnys.js";import"./scrollIntoView-J9HcqoeY.js";import"./SelectionIndicator-CRVyJK_1.js";import"./useDescription-5GU4b1w7.js";import"./ListKeyboardDelegate-C0AuU4n7.js";import"./PressResponder-BdAtoMPY.js";import"./useLocalizedStringFormatter-GNvNdhCY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmiDGQ5a.js";import"./getScrollParent-DI5JJTrt.js";import"./VisuallyHidden-DZf8hqs4.js";import"./ModalOverlay-Bj4CBpHh.js";import"./x-Cy8UX61V.js";import"./createLucideIcon-DWQv9Ysr.js";import"./useLocalizedStringFormatter-sjnuzL-M.js";import"./Heading-E2UPktky.js";import"./Button-DEhxKNaB.js";import"./Button.module-BB7N-cLd.js";import"./info-95qLpLfK.js";import"./Popover-DnXwvssA.js";import"./Form-dUtoNK2v.js";import"./useField-CgwfKGqG.js";import"./check-C8mC6rxp.js";import"./useToggleState-DCBrl0NZ.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
