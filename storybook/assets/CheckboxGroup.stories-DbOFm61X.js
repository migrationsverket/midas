import{j as e}from"./iframe-Cbh3F7pN.js";import{C as m}from"./CheckboxGroup-Rx9YeIv7.js";import{C as p}from"./Checkbox-B_3uCnBt.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CYIfSeeW.js";import"./utils-B6nDWoar.js";import"./clsx-B-dksMZM.js";import"./Text-CjLYei0G.js";import"./useFocusRing-B0tiiTm0.js";import"./index-DKv0hklz.js";import"./index-PVDloiUR.js";import"./clsx-Ciqy0D92.js";import"./Text-CQjCgd7X.js";import"./Label-D_EveOED.js";import"./Button-DEZpBGis.js";import"./Hidden-TWGzSEdN.js";import"./useLabels-CQRwDIC4.js";import"./useButton-XVEb300a.js";import"./Dialog-2VL6JPnH.js";import"./RSPContexts-O6tGUrPW.js";import"./OverlayArrow-BLUB6nJu.js";import"./useResizeObserver-BfN2kMVn.js";import"./useControlledState-uXXYD64-.js";import"./Collection-DpkgL1my.js";import"./index-DwzPVi1E.js";import"./Separator-j98yxQpw.js";import"./SelectionManager-H9GNwxSP.js";import"./useEvent-D9_S7x3K.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DdxHF7Bz.js";import"./useDescription-zk1PbWHN.js";import"./ListKeyboardDelegate-D9VA6qHb.js";import"./PressResponder-skCSr_0W.js";import"./useLocalizedStringFormatter-BVvUHgZV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DXr-1Qnc.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BEwci_em.js";import"./Button-C16sAu0x.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CZ4FMEFa.js";import"./createLucideIcon-CTZlH8w0.js";import"./x-8XS1xjRr.js";import"./Heading-B1X6rn1i.js";import"./info-DmWR8L1N.js";import"./Popover-CGkDdqLx.js";import"./useFormValidation-ywxX9cB6.js";import"./useField-Y78HnPPL.js";import"./Form-Byqdk1s5.js";import"./check-DMgQl8IR.js";import"./useToggleState-Dqms9YZl.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
