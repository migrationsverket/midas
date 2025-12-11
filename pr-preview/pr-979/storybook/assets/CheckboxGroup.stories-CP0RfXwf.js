import{j as e}from"./iframe-16U0iwY4.js";import{C as m}from"./CheckboxGroup-CrlUOI-2.js";import{C as p}from"./Checkbox-pre73yvr.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-TXJxg1Qe.js";import"./utils-HzU6u-g_.js";import"./clsx-B-dksMZM.js";import"./Text-gxhRT_ue.js";import"./useFocusRing-D3YcX54s.js";import"./index-N6dO_YkP.js";import"./index-DC6p1BMI.js";import"./clsx-Ciqy0D92.js";import"./Text-CYPHINAD.js";import"./Label-CL0bcSET.js";import"./Button-DRn4Jt6C.js";import"./Hidden-DvvsvPP1.js";import"./useLabels-bKWgMNMV.js";import"./useButton-CCTZIvr7.js";import"./Dialog-B_y-RP_i.js";import"./RSPContexts-DYoqEBBs.js";import"./OverlayArrow-6VPV5x9S.js";import"./useResizeObserver-CTvfaXzs.js";import"./useControlledState-BSv6ChRq.js";import"./Collection-DJFn8yCo.js";import"./index-TSoekwih.js";import"./Separator-D2-qi8my.js";import"./SelectionManager-CDXgUY9U.js";import"./useEvent-Bm336BSb.js";import"./scrollIntoView-d806NCcg.js";import"./SelectionIndicator-BgT766U1.js";import"./useDescription-DPN5nlm8.js";import"./ListKeyboardDelegate-DSwISaKO.js";import"./PressResponder-D37m5O0U.js";import"./useLocalizedStringFormatter-GF3ngx--.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CgsvthDN.js";import"./VisuallyHidden-D6uRhZ1i.js";import"./Button-GEzK-q9q.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-Q-0QRf.js";import"./createLucideIcon-DgqIWnhM.js";import"./x-LZCMefA5.js";import"./Heading-C6Jk7UxJ.js";import"./info-7M6UIQwZ.js";import"./Popover-BZIsw1yB.js";import"./useFormValidation-DncO4Qc_.js";import"./useField-gNzwNE_P.js";import"./Form-BIPhrBx-.js";import"./check-C9isxoeH.js";import"./useToggleState-pQVKXAeE.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
