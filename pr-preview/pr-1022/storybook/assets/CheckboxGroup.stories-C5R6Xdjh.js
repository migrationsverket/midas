import{j as e}from"./iframe-Bs-4Q0RS.js";import{C as m}from"./CheckboxGroup-zhj67M_7.js";import{C as p}from"./Checkbox-DM3pRUaa.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B2Y4IZts.js";import"./utils-D6H3fjwf.js";import"./clsx-B-dksMZM.js";import"./Text-DUhY8chK.js";import"./useFocusRing-BPypZ_tc.js";import"./index-6uY4yepA.js";import"./index-BgNIyxhc.js";import"./clsx-Ciqy0D92.js";import"./Text-CODpWWcU.js";import"./Label-CMPHbmbT.js";import"./Button-BRycn86x.js";import"./Hidden-DC5u3Uje.js";import"./useLabel-BMAVjmg6.js";import"./useLabels-BCny178P.js";import"./useButton-Cy54odSV.js";import"./Dialog-CiL_REM4.js";import"./RSPContexts-B9ePokfA.js";import"./OverlayArrow-9hlSjkZZ.js";import"./useResizeObserver-DGNRViMH.js";import"./useControlledState-DOA-W8fE.js";import"./Collection-Dq8lZjSa.js";import"./index-D7PC-cg1.js";import"./Separator-BoeZy9yM.js";import"./SelectionManager-P9mBPQZb.js";import"./useEvent-DlRuF4SX.js";import"./scrollIntoView-Dyrx4XX-.js";import"./SelectionIndicator-CJFP_0sY.js";import"./useDescription-uNFQQz6p.js";import"./ListKeyboardDelegate-Ts7Qfl9m.js";import"./PressResponder-BsD4klsq.js";import"./useLocalizedStringFormatter-BiyFB0Ck.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BKwuCbyw.js";import"./getScrollParent-DKOj2UCK.js";import"./VisuallyHidden-D2ZFd25y.js";import"./ModalOverlay-BypXRZox.js";import"./x-DCsDOoGU.js";import"./createLucideIcon-C-ocypBz.js";import"./useLocalizedStringFormatter-aDoo-4ef.js";import"./Heading-kjBpztUM.js";import"./Button-DTSBAwbm.js";import"./Button.module-BFenTVPP.js";import"./info-DjV0ZvUH.js";import"./Popover-arBciGLG.js";import"./Form-Blxuo4OH.js";import"./useField-Y_v01lD_.js";import"./check-BJXAq9IQ.js";import"./useToggleState-EA3i6Z2-.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
