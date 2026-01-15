import{j as e}from"./iframe-DnuCDSUx.js";import{C as m}from"./CheckboxGroup-GBrL186B.js";import{C as p}from"./Checkbox-Dz1n6zca.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BbMD8n1O.js";import"./utils-BCJeDJBm.js";import"./clsx-B-dksMZM.js";import"./Text-C7HsrZUC.js";import"./useFocusRing-CBqhz9c5.js";import"./index-BbskeeQH.js";import"./index-B7Z8Eyxh.js";import"./clsx-Ciqy0D92.js";import"./Text-B2abyLCt.js";import"./Label-BHWiYazT.js";import"./Button-DlLq5SIo.js";import"./Hidden-WrzVtlNW.js";import"./useLabels-vpNmVZYd.js";import"./useButton-rZTjLr54.js";import"./Dialog-CPh1_-84.js";import"./RSPContexts-DFV1IoMw.js";import"./OverlayArrow-DblK16e6.js";import"./useResizeObserver-Bo3ReS7k.js";import"./useControlledState-BTGs3Wlx.js";import"./Collection-Ae8TderM.js";import"./index-BXqSFUSP.js";import"./Separator-DplFeifn.js";import"./SelectionManager-DO-zfREl.js";import"./useEvent-ErL6pKub.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BN0Qylsh.js";import"./useDescription-CmeyrCHK.js";import"./ListKeyboardDelegate-BY9B8zni.js";import"./PressResponder-BgQopFxD.js";import"./useLocalizedStringFormatter-hTpHsBhz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3xKCcSC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-mqlBAgrk.js";import"./Button-dYVCYVgo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D6ETHzho.js";import"./createLucideIcon-DLtu9yR0.js";import"./x-CumWaLE8.js";import"./Heading-w25QJ7GD.js";import"./info-DLj81B5_.js";import"./Popover-CxYgoTUG.js";import"./useFormValidation-DHcJOJz_.js";import"./useField-txGP6Hv2.js";import"./Form-Cr6ZjpNe.js";import"./check-tojK1YQU.js";import"./useToggleState-BPQ7iI7E.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
