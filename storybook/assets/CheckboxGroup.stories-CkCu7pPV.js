import{j as e}from"./iframe-Hg8hxll6.js";import{C as m}from"./CheckboxGroup-RDiKsWgN.js";import{C as p}from"./Checkbox-CjP2Hyx0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BnM-2-2F.js";import"./utils-DkBAlQaP.js";import"./clsx-B-dksMZM.js";import"./Text-g8ihhCC7.js";import"./useFocusRing-BHhaWYLO.js";import"./index-C9pUtnOL.js";import"./index-QbllegrG.js";import"./clsx-Ciqy0D92.js";import"./Text-CbJwjeA3.js";import"./Label-By6vt0_4.js";import"./Button-D6s1rIHb.js";import"./Hidden-CW8eyMJF.js";import"./useLabels-Dhhk-JlN.js";import"./useButton-C_20Yccn.js";import"./Dialog-Bt01w8AN.js";import"./RSPContexts-CUKDrdkA.js";import"./OverlayArrow-C3YpQDvv.js";import"./useResizeObserver-B4anKBbX.js";import"./useControlledState-B9N8h_ty.js";import"./Collection-C-gv1rI3.js";import"./index-x-LGDK9V.js";import"./Separator-DJhUtRxR.js";import"./SelectionManager-BdusSTK8.js";import"./useEvent-DcZb6QTG.js";import"./scrollIntoView-QWj_UH7z.js";import"./SelectionIndicator-BUZofeGN.js";import"./useDescription-DDUPD-SO.js";import"./ListKeyboardDelegate-C9e4k2u4.js";import"./PressResponder-CI1P2mdv.js";import"./useLocalizedStringFormatter-BuwzLtaA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D5TELs7H.js";import"./VisuallyHidden-DEAPyNKO.js";import"./Button-BHcDCTkB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Kb9GHVVg.js";import"./createLucideIcon-CorD8qZx.js";import"./x-BaNtwQF2.js";import"./Heading-BLhkKBPG.js";import"./info-DDfYDP-7.js";import"./Popover-BEWd7qbM.js";import"./useFormValidation-DrG2oSap.js";import"./useField-B7WoHvpW.js";import"./Form-D11P-vpE.js";import"./check-8CQQ3fjA.js";import"./useToggleState-BSH2RSgV.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
