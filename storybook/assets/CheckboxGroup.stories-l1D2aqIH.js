import{j as e}from"./iframe-DWEKRq51.js";import{C as m}from"./CheckboxGroup-dH_ywE1l.js";import{C as p}from"./Checkbox-CW3To3VD.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-MXzqgYJW.js";import"./utils-CvB-FF5L.js";import"./clsx-B-dksMZM.js";import"./Text-DNCNcmFD.js";import"./useFocusRing-oyMjxI0a.js";import"./index-Du9C_P01.js";import"./index-MiMvQR0t.js";import"./clsx-Ciqy0D92.js";import"./Text-BNtmLJ5Q.js";import"./Label-CftGObrQ.js";import"./Button-Bw7IRosA.js";import"./Hidden-6-qbYCow.js";import"./useLabel-07pv796X.js";import"./useLabels-P5GsSUyo.js";import"./useButton-CoUdGt-0.js";import"./Dialog-31znzm89.js";import"./RSPContexts-Cwb07yZR.js";import"./OverlayArrow-DoyV8V5a.js";import"./useResizeObserver-BiEPZYAp.js";import"./useControlledState-BpWescyC.js";import"./Collection-DgwJjlxw.js";import"./index-ZJcgO-78.js";import"./Separator-00c_RoBF.js";import"./SelectionManager-J7bJBg_Z.js";import"./useEvent-CTaznQxk.js";import"./scrollIntoView-CPfbYeEn.js";import"./SelectionIndicator-CTz6ddff.js";import"./useDescription-FiAMJAPm.js";import"./ListKeyboardDelegate-o9CjPHxf.js";import"./PressResponder-CFhbO3pj.js";import"./useLocalizedStringFormatter-Dh-ctuYo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DWKhMLsb.js";import"./getScrollParent-C8jbhUL1.js";import"./VisuallyHidden-D7nX5YNu.js";import"./ModalOverlay-BfreD5Mb.js";import"./x-DF20yF-2.js";import"./createLucideIcon-BuZoCqNM.js";import"./useLocalizedStringFormatter-BRwZafvm.js";import"./Heading-zr1kb0sx.js";import"./Button-CpAjWvzP.js";import"./Button.module-BB7N-cLd.js";import"./info-CGR3MvR0.js";import"./Popover-aw6phdmO.js";import"./Form-DTx40CXW.js";import"./useField-BhhYiwGD.js";import"./check-rpiK2iOR.js";import"./useToggleState-BRsTRv0u.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
