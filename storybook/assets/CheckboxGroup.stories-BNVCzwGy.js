import{j as e}from"./iframe-8IAuJWNM.js";import{C as m}from"./CheckboxGroup-CgT7CKBb.js";import{C as p}from"./Checkbox-C69wf2c8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CadBMv3M.js";import"./utils-DyygkSlh.js";import"./clsx-B-dksMZM.js";import"./Text-BjJSlFEE.js";import"./useFocusRing-B47DL3hX.js";import"./index-CB6TLzp4.js";import"./index-BmMgCWbD.js";import"./clsx-Ciqy0D92.js";import"./Text-BPO4namz.js";import"./Label-DgBcmBnc.js";import"./Button-BA4G7Dp7.js";import"./Hidden-BPY21Mhp.js";import"./useLabels-Cjx1sCZW.js";import"./useButton-DKZseVPF.js";import"./Dialog-Cqry6Aon.js";import"./RSPContexts-SKLp7B5s.js";import"./OverlayArrow-oQTy-OmX.js";import"./useResizeObserver-Cmytyy8J.js";import"./useControlledState-B1Gkxy2y.js";import"./Collection-cCOjAfI9.js";import"./index-N0Knnvj8.js";import"./Separator-WVGlWIcl.js";import"./SelectionManager-CBXhApTy.js";import"./useEvent-Bg6Tse3j.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C5I6stQh.js";import"./useDescription-CmF9R5md.js";import"./ListKeyboardDelegate-VBWxipQV.js";import"./PressResponder-BW5YywL4.js";import"./useLocalizedStringFormatter-BLtacC3W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Be_Cfo3p.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BFkso3TE.js";import"./Button-DaIiUukL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BVRAeowb.js";import"./createLucideIcon-B5ClGLmI.js";import"./x-ChuqJttK.js";import"./Heading-Zpm27S2Z.js";import"./info-ukyOXwhb.js";import"./Popover-NfGU5fTW.js";import"./useFormValidation-BTqQXxAG.js";import"./useField-KDqZZJ02.js";import"./Form-CjpCQL1Q.js";import"./check-CJyZMTi4.js";import"./useToggleState-CUDBHvFQ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
