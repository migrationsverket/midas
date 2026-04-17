import{j as e}from"./iframe-BspZq9tj.js";import{C as m}from"./CheckboxGroup-DzM1v80O.js";import{C as p}from"./Checkbox-C2IUrYDC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CWZFsZje.js";import"./utils-DAmpme0n.js";import"./clsx-B-dksMZM.js";import"./Text-DJFK0YJf.js";import"./useFocusRing-ZSLB6af2.js";import"./index-CNFgOk2C.js";import"./index-CYPXKPzf.js";import"./clsx-Ciqy0D92.js";import"./Text-D4utVkCo.js";import"./Label-Bx2FMeQ6.js";import"./Button-W6h6LqJQ.js";import"./Hidden-BxNHn6hu.js";import"./useLabel-SKuz0xAF.js";import"./useLabels-DTPL2hi6.js";import"./useButton-Du_s3oIP.js";import"./Dialog-DTaRZt9n.js";import"./RSPContexts-CPwEBVvI.js";import"./OverlayArrow-D-O01WwV.js";import"./useResizeObserver-iRDz0PCC.js";import"./useControlledState-BFbpEbwN.js";import"./Collection-UMJcuUuS.js";import"./index-CgOuGLE0.js";import"./Separator-rxcASnPy.js";import"./SelectionManager-Dtp9ZmKg.js";import"./useEvent-SgyYcF3m.js";import"./scrollIntoView-BoOeRgl-.js";import"./SelectionIndicator-C4bCSSqv.js";import"./useDescription-D5AIqWjS.js";import"./ListKeyboardDelegate-DWzGTbDd.js";import"./PressResponder-DxMBIfA0.js";import"./useLocalizedStringFormatter-Cea7ejb5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DqI0Oqar.js";import"./getScrollParent-DmWmoZNO.js";import"./VisuallyHidden-mXHZbk3a.js";import"./ModalOverlay-T8T40r7e.js";import"./x-B87ahrOa.js";import"./createLucideIcon-DZ4T53Ud.js";import"./useLocalizedStringFormatter-CSYYDYLy.js";import"./Heading-2memYd0M.js";import"./Button-CgVYtA8O.js";import"./Button.module-BB7N-cLd.js";import"./info-Bxsw_oHy.js";import"./Popover-C5QtIM1u.js";import"./Form-D4R1YekT.js";import"./useField-DEHFco72.js";import"./check-D1tTfe8G.js";import"./useToggleState-CHaywwKF.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
