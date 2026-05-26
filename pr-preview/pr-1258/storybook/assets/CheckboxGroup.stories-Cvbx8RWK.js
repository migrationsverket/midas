import{j as e}from"./iframe-DE3udc98.js";import{C as m}from"./CheckboxGroup-9ayg5tZE.js";import{C as p}from"./Checkbox-DgWd1LkT.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-HOINxNuD.js";import"./utils-BZFqyVfK.js";import"./clsx-B-dksMZM.js";import"./Text-B_7CE5hn.js";import"./useFocusRing-Zfbb9wtm.js";import"./index-DsLsEgIC.js";import"./index-TlyN-2Ns.js";import"./clsx-Ciqy0D92.js";import"./Text-6UvYXfTp.js";import"./Label-B0yx0nEy.js";import"./Button-WyeeTejZ.js";import"./Hidden-B3N7s3Fy.js";import"./useLabel-BaazdV9R.js";import"./useLabels-CkuL1gsk.js";import"./useButton-iHShjyV-.js";import"./Dialog-BXGga2Mo.js";import"./RSPContexts-DDA8iB-A.js";import"./OverlayArrow-CjZBtWJ9.js";import"./useResizeObserver-Cli1IaX8.js";import"./useControlledState-CKJ2TdtV.js";import"./Collection-DsWBFVqV.js";import"./index-CTmFy_vj.js";import"./Separator-BOf7wMAy.js";import"./SelectionManager-BBjREWqS.js";import"./useEvent-Bsmzdkq1.js";import"./scrollIntoView-CopONKPx.js";import"./SelectionIndicator-Bn5sd7Os.js";import"./useDescription-DUhpeiqJ.js";import"./ListKeyboardDelegate-CmqxmKAk.js";import"./PressResponder-bVLOz5RB.js";import"./useLocalizedStringFormatter-C2IC4Uej.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-otoYotsg.js";import"./getScrollParent-CISTh7Q2.js";import"./VisuallyHidden-JI0zcCIW.js";import"./ModalOverlay-CSADgSwq.js";import"./x-Did9_kjk.js";import"./createLucideIcon-DBgVndRE.js";import"./useLocalizedStringFormatter-D9xfpa_H.js";import"./Heading-FDPSjiuZ.js";import"./Button-D9EvRssF.js";import"./Button.module-BB7N-cLd.js";import"./info-HVPaG_XE.js";import"./Popover-jdEPNxSF.js";import"./Form-bIhb4EIq.js";import"./useField-XJ9uRbgJ.js";import"./check-DrfBAVvD.js";import"./useToggleState-C-zSmbzE.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
