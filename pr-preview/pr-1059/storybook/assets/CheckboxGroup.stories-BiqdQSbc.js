import{j as e}from"./iframe-CgVDPXCW.js";import{C as m}from"./CheckboxGroup-Cn_96q5w.js";import{C as p}from"./Checkbox-mubJKtSv.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BON66wFU.js";import"./utils-DcVVHZ67.js";import"./clsx-B-dksMZM.js";import"./Text-By5oRQCE.js";import"./useFocusRing-DNBotD7g.js";import"./index-DvqiEU7D.js";import"./index-KB8h2jjm.js";import"./clsx-Ciqy0D92.js";import"./Text-C_oGJ_xm.js";import"./Label-3HbgeRSE.js";import"./Button-CQnF2GG8.js";import"./Hidden-CXNfA9DQ.js";import"./useLabels-BHxP37I4.js";import"./useButton-BWlYYLVQ.js";import"./Dialog-Ca64OFxi.js";import"./RSPContexts-4u-QqjZM.js";import"./OverlayArrow-Cm8tZIC_.js";import"./useResizeObserver-CZxhDXA0.js";import"./useControlledState-CaasPkxS.js";import"./Collection-BhV9AUYd.js";import"./index-B9AEiTqw.js";import"./Separator-CSLPClBC.js";import"./SelectionManager-BH57UAK3.js";import"./useEvent-D87hVJVV.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Her58Z3x.js";import"./useDescription-gbmfQOlg.js";import"./ListKeyboardDelegate-BBIA4umz.js";import"./PressResponder-Bmle_dll.js";import"./useLocalizedStringFormatter-D49bO5T8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmXbO9r2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Ded5YgLE.js";import"./Button-D1lh8tZn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-als5sVnS.js";import"./createLucideIcon-xwY9ORJx.js";import"./x-4d7UDHPb.js";import"./Heading-BaeXS2ez.js";import"./info-CIcIyD_Y.js";import"./Popover-LQ7rUTaz.js";import"./useFormValidation-B0q062rA.js";import"./useField-BOKIbcIE.js";import"./Form-DaNhyeML.js";import"./check-BgCdnUge.js";import"./useToggleState-B7duYbbO.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
