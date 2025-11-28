import{j as e}from"./iframe-DTmGM0Lv.js";import{C as m}from"./CheckboxGroup-DO-mvp66.js";import{C as p}from"./Checkbox-CDsFBw3U.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D7K2RoId.js";import"./utils-C-Csm_HJ.js";import"./clsx-B-dksMZM.js";import"./Text-Crv0LT4D.js";import"./useFocusRing-_YauK2g0.js";import"./index-9zDrbBb1.js";import"./index-DKIj2TXJ.js";import"./clsx-Ciqy0D92.js";import"./Text-Tc8CVOKC.js";import"./Label-gehhzikc.js";import"./Button-DN-n-_G7.js";import"./Hidden-CaRTDRny.js";import"./useLabels-C5zC1qPP.js";import"./useButton-brZar4lw.js";import"./Dialog-Dlc_C0oT.js";import"./RSPContexts-C1nPx2yc.js";import"./OverlayArrow-B52Jfxwx.js";import"./useResizeObserver-BsFE6UdA.js";import"./useControlledState-BAsSmE__.js";import"./Collection-3Jo0cLOv.js";import"./index-B_kdZ9Te.js";import"./Separator-BWN0xGUd.js";import"./SelectionManager-BbAfZ0mT.js";import"./useEvent-DBYFGLr3.js";import"./scrollIntoView-BjH_T2Ul.js";import"./SelectionIndicator-DpxouZDt.js";import"./useDescription-99fnbxA2.js";import"./ListKeyboardDelegate-CVMEsyfC.js";import"./PressResponder-Dwt-qJQF.js";import"./useLocalizedStringFormatter-D9SQN2sw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-w8StByxs.js";import"./VisuallyHidden-BlCXdrZt.js";import"./Button-DVo1A0DB.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-D7G7Bxto.js";import"./createLucideIcon-IkfxPgvv.js";import"./x-vYF2MqhL.js";import"./Heading-CAk8AN96.js";import"./info-BqS23j0q.js";import"./Popover-KxNg_wqI.js";import"./useFormValidation-DlnAOivs.js";import"./useField-BBA-zNTz.js";import"./Form-DykSM_BA.js";import"./check-OJwDe7SH.js";import"./useToggleState-DDEHlyXJ.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
