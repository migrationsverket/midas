import{j as e}from"./iframe-Gk5MEbtf.js";import{C as m}from"./CheckboxGroup-DX3qRXci.js";import{C as p}from"./Checkbox-9F1vqAjb.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Baa_Kzdb.js";import"./utils-FYzLBBKM.js";import"./clsx-B-dksMZM.js";import"./Text-IP7yd6GC.js";import"./useFocusRing-WCMdeDPk.js";import"./index-BR8-lUkO.js";import"./index-D_XTGtZn.js";import"./clsx-Ciqy0D92.js";import"./Text-B-qEqFBc.js";import"./Label-Clq3Brpr.js";import"./Button-BwdIuzcz.js";import"./Hidden-DGa8KKgC.js";import"./useLabels-C555CKHB.js";import"./useButton-Df05FaMj.js";import"./Dialog-DccWkxj-.js";import"./RSPContexts-D7f3u4-c.js";import"./OverlayArrow-ChTybOlo.js";import"./useResizeObserver-B5v0NhcV.js";import"./useControlledState-D6DRt1-U.js";import"./Collection-CTg3a-LF.js";import"./index-C5D58yZq.js";import"./Separator-Buy2ykEb.js";import"./SelectionManager-D4T18dtQ.js";import"./useEvent-kxVIpsfo.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DE0dXJyi.js";import"./useDescription-C6ibjGIG.js";import"./ListKeyboardDelegate-sTv_qp8F.js";import"./PressResponder-DBCFch6O.js";import"./useLocalizedStringFormatter-CJFI85ze.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DK3Qf2Z4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BZBSJD1a.js";import"./Button-B5zSSp1x.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BIW-Yh1F.js";import"./createLucideIcon-BsHpl2bp.js";import"./x-DLbbIzYm.js";import"./Heading-4zMnqe9X.js";import"./info-CdwyBqaO.js";import"./Popover-DDGcUx6m.js";import"./useFormValidation-DHhvC1R-.js";import"./useField-Dxt7Dh66.js";import"./Form-AuxABJFX.js";import"./check-US-AfPLA.js";import"./useToggleState-c4WOe3kf.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
