import{j as e}from"./iframe-DDE2q2jJ.js";import{C as m}from"./CheckboxGroup-DgrPBYjE.js";import{C as p}from"./Checkbox-DQFZ72Sv.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DCUvG-Rb.js";import"./utils-a9bcQ49A.js";import"./clsx-B-dksMZM.js";import"./Text-Cm5UVo2w.js";import"./useFocusRing-B3mA85Wg.js";import"./index-Dbi_VTwK.js";import"./index-lUxujH5K.js";import"./clsx-Ciqy0D92.js";import"./Text-BwkS_7yz.js";import"./Label-IRe6qV1l.js";import"./Button-HCOG5F4J.js";import"./Hidden-By32gRxz.js";import"./useLabels-DDbF2kwS.js";import"./useButton-fYhOhmoU.js";import"./Dialog-D_KWzj05.js";import"./RSPContexts-CFPL8A-7.js";import"./OverlayArrow-SW753CeG.js";import"./useResizeObserver-1zWkmZ97.js";import"./useControlledState-DAP_JcuQ.js";import"./Collection-DTuUNth6.js";import"./index-D1o6svUE.js";import"./Separator-CJVs4gtu.js";import"./SelectionManager-CzTgUG9I.js";import"./useEvent-tL9OW1cd.js";import"./scrollIntoView-DPCVqvBT.js";import"./SelectionIndicator-Dvh5MI45.js";import"./useDescription-DcQu_PV8.js";import"./ListKeyboardDelegate-Cty5t2Cp.js";import"./PressResponder-bnXcN065.js";import"./useLocalizedStringFormatter-Bcbgr9Cy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BsyS2ene.js";import"./VisuallyHidden-CHq8aofl.js";import"./Button-Ci_9cuGQ.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B_ZJeHWO.js";import"./createLucideIcon-Bl1-P2Iq.js";import"./x-CJDAVB57.js";import"./Heading-BagC_Uao.js";import"./info-BCizCDqL.js";import"./Popover-DhDMsT5U.js";import"./useFormValidation-D-eBHu1L.js";import"./useField-D0gwyaVq.js";import"./Form-aBGoIlkF.js";import"./check-CO7c6ck5.js";import"./useToggleState-DDx2ldBX.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
