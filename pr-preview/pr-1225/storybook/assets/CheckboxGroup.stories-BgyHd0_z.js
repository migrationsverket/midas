import{j as e}from"./iframe-BsjwZNBI.js";import{C as m}from"./CheckboxGroup-DDAre-Tb.js";import{C as p}from"./Checkbox-BaOkEfEo.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D8jlKqgQ.js";import"./utils-DYyBIiF3.js";import"./clsx-B-dksMZM.js";import"./Text-CAl4ECWA.js";import"./useFocusRing-C6pIr3Cw.js";import"./index-3FCY3Hw8.js";import"./index-mMukGJMX.js";import"./clsx-Ciqy0D92.js";import"./Text-lI4j22eJ.js";import"./Label-CHsERhGd.js";import"./Button-RMvP7Zi7.js";import"./Hidden-B7nyiEix.js";import"./useLabel-zdvU6Gzq.js";import"./useLabels-BUVWty__.js";import"./useButton-IYi6gdVO.js";import"./Dialog-n6NgD9rD.js";import"./RSPContexts-DsjC0Jzf.js";import"./OverlayArrow-CqCBe6cd.js";import"./useResizeObserver-BOr7Ttpr.js";import"./useControlledState-DSo337QI.js";import"./Collection-CgV2ccPo.js";import"./index-BsRC0pIN.js";import"./Separator-Dc7-7pSt.js";import"./SelectionManager-Cheph0Dh.js";import"./useEvent-Ce5NelAS.js";import"./scrollIntoView-Dj0SH0aW.js";import"./SelectionIndicator-dCH3KFUc.js";import"./useDescription-BBYDL9dC.js";import"./ListKeyboardDelegate-C8IRF0A7.js";import"./PressResponder-CMvnrM33.js";import"./useLocalizedStringFormatter-uzycqsy8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-xaEmAiB_.js";import"./getScrollParent-Ciimyvfo.js";import"./VisuallyHidden-BLVEBQnn.js";import"./ModalOverlay-D4kTi5LZ.js";import"./x-DNQ7ZgzB.js";import"./createLucideIcon-wuciem56.js";import"./useLocalizedStringFormatter-DjpujwKI.js";import"./Heading-CF6sSghd.js";import"./Button--2JTIhzL.js";import"./Button.module-BB7N-cLd.js";import"./info-CGJdKM5O.js";import"./Popover-GUkqRCLM.js";import"./Form-BPWLMBhz.js";import"./useField-DyZ12IOD.js";import"./check-DwQiMxk8.js";import"./useToggleState-CkW4Zbxt.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
