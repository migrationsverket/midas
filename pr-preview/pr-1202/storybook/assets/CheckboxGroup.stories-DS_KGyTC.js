import{j as e}from"./iframe-B3vg1P6Y.js";import{C as m}from"./CheckboxGroup-BP__M8ED.js";import{C as p}from"./Checkbox-Bi82QmwM.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DFCvQgU7.js";import"./utils-n5Tj6M7m.js";import"./clsx-B-dksMZM.js";import"./Text-DUOd7G_7.js";import"./useFocusRing-C6AjoB7d.js";import"./index-C-kva3F-.js";import"./index-BwBCavJo.js";import"./clsx-Ciqy0D92.js";import"./Text-BlzVF25n.js";import"./Label-CXhX_7LG.js";import"./Button-CnxNAqy1.js";import"./Hidden-fGQAJpTQ.js";import"./useLabel-DI7fi0Ro.js";import"./useLabels-DY9VFMmE.js";import"./useButton-BK-h-LZH.js";import"./Dialog-Ck0jNi_G.js";import"./RSPContexts-CSreTt_o.js";import"./OverlayArrow-CELSYf-a.js";import"./useResizeObserver-S4QQkevW.js";import"./useControlledState-CZjhAhOw.js";import"./Collection-DT7NMnAh.js";import"./index-CIxhDy0F.js";import"./Separator-p3gMGDdc.js";import"./SelectionManager-BMpZJpvj.js";import"./useEvent-BjWnd_Rp.js";import"./scrollIntoView-BP5DeFq1.js";import"./SelectionIndicator-DUR8eU9J.js";import"./useDescription-CNqQXY_p.js";import"./ListKeyboardDelegate-Dx_tUxi5.js";import"./PressResponder-DKn9mjlx.js";import"./useLocalizedStringFormatter-m57n-2t8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BnO3CeRR.js";import"./getScrollParent-BLZYM11o.js";import"./VisuallyHidden-BtPzLQ1W.js";import"./x-BD201NTP.js";import"./createLucideIcon-CB7DrpFH.js";import"./useLocalizedStringFormatter-Cy8EaEdn.js";import"./Heading--hjz4TQ0.js";import"./Button-Bihgy3ar.js";import"./Button.module-BB7N-cLd.js";import"./info-Df-oK5zf.js";import"./Popover-BI0fpvGT.js";import"./Form-CWiiR15h.js";import"./useField-CsXnP93Z.js";import"./check-DaLldDzt.js";import"./useToggleState-kDSHl7q0.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
