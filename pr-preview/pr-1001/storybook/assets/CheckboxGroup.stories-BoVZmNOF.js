import{j as e}from"./iframe-DkekDUmt.js";import{C as m}from"./CheckboxGroup-FdyUooFU.js";import{C as p}from"./Checkbox-BKqGSIX3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CEappIaf.js";import"./utils-BXReLSzV.js";import"./clsx-B-dksMZM.js";import"./Text-HRZszqtu.js";import"./useFocusRing-cFhFEPkT.js";import"./index-BWGp6XmU.js";import"./index-Dl4xFDvX.js";import"./clsx-Ciqy0D92.js";import"./Text-D-M7BBlz.js";import"./Label-DVuM6C5j.js";import"./Button-CPMuKErG.js";import"./Hidden-C3DRpHWW.js";import"./useLabels-RwNRRVV1.js";import"./useButton-DGHMXKPK.js";import"./Dialog-BuwsrLx_.js";import"./RSPContexts-CpoGppFQ.js";import"./OverlayArrow-BdpXS5xM.js";import"./useResizeObserver-CKvJ8Afq.js";import"./useControlledState-CpjACMp2.js";import"./Collection-ClwlsW-k.js";import"./index-mwX1nWxh.js";import"./Separator-C0rqKJ69.js";import"./SelectionManager-4hWAiqPe.js";import"./useEvent-hPCrmc6p.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-QewNDPGC.js";import"./useDescription-DL-v02pN.js";import"./ListKeyboardDelegate-CdPGoYoU.js";import"./PressResponder-Cl82H1wV.js";import"./useLocalizedStringFormatter-2FeDuEc7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CCUvnScD.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D4lBxf5D.js";import"./Button-ByTmb1iy.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cb4oEEvA.js";import"./createLucideIcon-y8-UPzuM.js";import"./x-DOULuHb2.js";import"./Heading-BWFYz-Kg.js";import"./info-DjxsNLx0.js";import"./Popover-CdXzXy5J.js";import"./useFormValidation-CkgdwYyU.js";import"./useField-BMA0_Hdl.js";import"./Form-DLIviGGL.js";import"./check-BFqxfENi.js";import"./useToggleState-Cd_p2kXT.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
