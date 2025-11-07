import{j as e}from"./iframe-BH1_R2DT.js";import{C as m}from"./CheckboxGroup-9w6mMmjz.js";import{C as p}from"./Checkbox-TCyAUSDm.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-BmHCkNY9.js";import"./utils-BVGwIGlb.js";import"./clsx-B-dksMZM.js";import"./Text-BSV7h1MS.js";import"./useFocusRing-D2P1AVxz.js";import"./index-DMDiVxAe.js";import"./index-C_m7skr9.js";import"./clsx-Ciqy0D92.js";import"./Text-DLnNCVmf.js";import"./Label-CspW4NxE.js";import"./Button-DaJwfJY_.js";import"./Hidden-kAD8IT6R.js";import"./useLabels-D9Se9Q-i.js";import"./useButton-t5IL2t_E.js";import"./Dialog-BnkmlJnO.js";import"./RSPContexts-CanWJetA.js";import"./OverlayArrow-Mj3Nc_Xo.js";import"./useResizeObserver-jng0sDXo.js";import"./useControlledState--SS9_6v3.js";import"./Collection-DtOIcu4C.js";import"./index-CTOdzTcy.js";import"./Separator-Btv4Rur5.js";import"./SelectionManager-CwndZLg0.js";import"./useEvent-DFDc_5v7.js";import"./scrollIntoView-CEB_t1nR.js";import"./SelectionIndicator-CrGJkGxu.js";import"./useDescription-U6ZvYwCQ.js";import"./ListKeyboardDelegate-DvoG7Abx.js";import"./PressResponder-CZoTBrZB.js";import"./useLocalizedStringFormatter-BnhKqSj7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Cf46SMxm.js";import"./VisuallyHidden-CT5D58WX.js";import"./useLocalizedStringFormatter-Crr1T7Lc.js";import"./Button-BnyEfxrm.js";import"./Button.module-CtQ1deO8.js";import"./x-B4Ho-bAi.js";import"./createLucideIcon-ii3gKTw6.js";import"./Heading-DXJmqslE.js";import"./info-BCkrZYxs.js";import"./Popover-B3kX3vf4.js";import"./useFormValidation-DHG-vjBo.js";import"./useField-lOybA6ps.js";import"./Form-pzlsYeFZ.js";import"./check-BnBTtibO.js";import"./useToggleState-BHjB5ZHx.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
