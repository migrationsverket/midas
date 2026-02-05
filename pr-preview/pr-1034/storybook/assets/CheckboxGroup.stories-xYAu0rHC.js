import{j as e}from"./iframe-DgMSVBJj.js";import{C as m}from"./CheckboxGroup-RgblK68c.js";import{C as p}from"./Checkbox-CZClZBxi.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DhkdCeIN.js";import"./utils-BUVZQFkZ.js";import"./clsx-B-dksMZM.js";import"./Text-C3v5M0X6.js";import"./useFocusRing-CSYGle8_.js";import"./index-Ch5SRSet.js";import"./index-Cm4xQ_Xl.js";import"./clsx-Ciqy0D92.js";import"./Text-D4BWFKQS.js";import"./Label-CXDdM-31.js";import"./Button-D-J1jvHp.js";import"./Hidden-B0_wOBGj.js";import"./useLabels-elaTIo4h.js";import"./useButton-XlQwCmfH.js";import"./Dialog-Cn8fkIH5.js";import"./RSPContexts-GwS0uMKq.js";import"./OverlayArrow-CrCYMJYS.js";import"./useResizeObserver-BueDMYXk.js";import"./useControlledState-BKuwHYa2.js";import"./Collection-Dx95RUAw.js";import"./index-ByCdYvx5.js";import"./Separator-DNiFECer.js";import"./SelectionManager-D8ya2Y1V.js";import"./useEvent-CKIQixox.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bv7832s7.js";import"./useDescription-C3jZSQWL.js";import"./ListKeyboardDelegate-Besye-xt.js";import"./PressResponder-CUUY1kpS.js";import"./useLocalizedStringFormatter-CKARZmxO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Crea59K9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-MCla8tVA.js";import"./Button-Cx_rtnFw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CHl2-VBK.js";import"./createLucideIcon-xbipfE59.js";import"./x-PtDtzKM-.js";import"./Heading-Dn0wZytP.js";import"./info-BC3W2YHM.js";import"./Popover-CoFS7WWY.js";import"./useFormValidation-k09FZdMi.js";import"./useField-B4BmtOyh.js";import"./Form-B7h5JGfO.js";import"./check-Dyi7NhJJ.js";import"./useToggleState-DH3QGZJ6.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
