import{j as e}from"./iframe-76Zbcpfm.js";import{C as m}from"./CheckboxGroup-CV01upn0.js";import{C as p}from"./Checkbox-DxECPF2j.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B3CXz0a8.js";import"./utils-DKhtQhER.js";import"./clsx-B-dksMZM.js";import"./Text-BtsDHilU.js";import"./useFocusRing--jUHa30l.js";import"./index-CYYDks4G.js";import"./index-Bikl_74K.js";import"./clsx-Ciqy0D92.js";import"./Text-BvHKVa0m.js";import"./Label-BglLfJ-b.js";import"./Button-CGIWV9qi.js";import"./Hidden-CtdbjR1M.js";import"./useLabel-Dyg0KZIl.js";import"./useLabels-DGXzYi66.js";import"./useButton-FpSsaIPg.js";import"./Dialog-B6W4fmxL.js";import"./RSPContexts-CAiLW-Ic.js";import"./OverlayArrow-of6YWWCS.js";import"./useResizeObserver-CgzeIHJs.js";import"./useControlledState-DdSN72zB.js";import"./Collection-Su8Sna0o.js";import"./index-BvVm8IC3.js";import"./Separator-Dhpk1ikZ.js";import"./SelectionManager-qL0EJH9N.js";import"./useEvent-DXqjRKfs.js";import"./scrollIntoView-B9jKnzlj.js";import"./SelectionIndicator-BrzQIpPF.js";import"./useDescription-Cz09nlnz.js";import"./ListKeyboardDelegate-B5lh8Oqz.js";import"./PressResponder-nmg0t9hH.js";import"./useLocalizedStringFormatter-CaBWWaJn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cvg5n42G.js";import"./getScrollParent-CNZhp6tM.js";import"./VisuallyHidden-r55FRtGJ.js";import"./x-Cpfzd3NA.js";import"./createLucideIcon-C-Fi2tn8.js";import"./useLocalizedStringFormatter-CyEIBYX2.js";import"./Heading-CFPreU3P.js";import"./Button-DDxQAl6w.js";import"./Button.module-BB7N-cLd.js";import"./info-CE74sDPO.js";import"./Popover-B6HqEk8P.js";import"./Form-CdmBZCXo.js";import"./useField-BshCWbMs.js";import"./check-jcTrynaA.js";import"./useToggleState-HQ6xiKdT.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
