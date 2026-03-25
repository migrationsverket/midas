import{j as e}from"./iframe-CH21sBFo.js";import{C as m}from"./CheckboxGroup-Dq9QZ07i.js";import{C as p}from"./Checkbox-oCdkhzl9.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-27wmxIep.js";import"./utils-BTsYysht.js";import"./clsx-B-dksMZM.js";import"./Text-BvEBpsjb.js";import"./useFocusRing-DLE_Hwk5.js";import"./index-BSkkjiWB.js";import"./index-BSEruQCs.js";import"./clsx-Ciqy0D92.js";import"./Text-irla2VTm.js";import"./Label-B6l4E3Qb.js";import"./Button-Cyld21y_.js";import"./Hidden-BZUBqXYz.js";import"./useLabels-dAMIXjYB.js";import"./useButton-B_byaW6S.js";import"./Dialog-CQ7FpZ0p.js";import"./RSPContexts-kvxCI0gF.js";import"./OverlayArrow-DXDnGS1w.js";import"./useResizeObserver-BYnbHVpd.js";import"./useControlledState-BSIuYOQP.js";import"./Collection-Cv8r9qAi.js";import"./index-CqPeTyvA.js";import"./Separator-BknOFeGR.js";import"./SelectionManager-DqQLiQaF.js";import"./useEvent-B6n2-V8U.js";import"./scrollIntoView-By99Ab3d.js";import"./SelectionIndicator-DQXVG8Dk.js";import"./useDescription-B4sJiGX5.js";import"./ListKeyboardDelegate-DkHv3-VU.js";import"./PressResponder-Bo1gKqy7.js";import"./useLocalizedStringFormatter-DawUslhI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DMXONQ0x.js";import"./getScrollParent-DE7toX-r.js";import"./VisuallyHidden-BbJs2R-u.js";import"./x-BvM5og85.js";import"./createLucideIcon-BCbaEzrv.js";import"./useLocalizedStringFormatter-CoUJdwyc.js";import"./Heading-BUbmqlpx.js";import"./Button-DAqWGZgG.js";import"./Button.module-BB7N-cLd.js";import"./info-DBi6sA9C.js";import"./Popover-CWx6x2q9.js";import"./Form-CVljI_fE.js";import"./useField-D98AzuON.js";import"./check-DZxmfyQr.js";import"./useToggleState-DxOUI8X3.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
