import{j as e}from"./iframe-DAlGZfQW.js";import{C as m}from"./CheckboxGroup-CDwg6VUR.js";import{C as p}from"./Checkbox-QpN8ctcU.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CkH1bdUQ.js";import"./utils-C0mXnx3L.js";import"./clsx-B-dksMZM.js";import"./Text-LSJ9RRHV.js";import"./useFocusRing-aL1wDNV0.js";import"./index-ZTPDuQtA.js";import"./index-DeUwXnwW.js";import"./clsx-Ciqy0D92.js";import"./Text-BD2SYZAb.js";import"./Label-x7AqFGig.js";import"./Button-DEU34lA6.js";import"./Hidden-o3xiVHpT.js";import"./useLabel-Bq6n8TDb.js";import"./useLabels-oTyQAigb.js";import"./useButton-DzfauRnx.js";import"./Dialog-oZrWN6-T.js";import"./RSPContexts-ogBeYVaG.js";import"./OverlayArrow-D9PTXaeg.js";import"./useResizeObserver-BmlX3wcb.js";import"./useControlledState-CvHTtUWm.js";import"./Collection-DdampRoJ.js";import"./index-Bt3b7xy3.js";import"./Separator-BDHwiclq.js";import"./SelectionManager-DJWipqTn.js";import"./useEvent-CF3bDdPT.js";import"./scrollIntoView-DhLsBgUV.js";import"./SelectionIndicator-D-XJWEBG.js";import"./useDescription-7yGeAH-h.js";import"./ListKeyboardDelegate-2D-TSKOA.js";import"./PressResponder-BPzeGbel.js";import"./useLocalizedStringFormatter-Db4mYuAv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DykFtkea.js";import"./getScrollParent-CPI0vVZ2.js";import"./VisuallyHidden-CtB5gR65.js";import"./ModalOverlay-BGHVT9Lo.js";import"./x-4pQMUwmc.js";import"./createLucideIcon-D-D7lNm8.js";import"./useLocalizedStringFormatter-Bb6HaDEh.js";import"./Heading-7wa5xHuv.js";import"./Button-xgyBGP3u.js";import"./Button.module-BB7N-cLd.js";import"./info-CyGQFkmI.js";import"./Popover-4SaABhvX.js";import"./Form-DSNATSPd.js";import"./useField-BW3jrAKK.js";import"./check-B19l-unv.js";import"./useToggleState-BJH-wfzk.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
