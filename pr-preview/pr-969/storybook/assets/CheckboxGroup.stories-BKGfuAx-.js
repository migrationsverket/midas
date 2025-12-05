import{j as e}from"./iframe-CupcEORL.js";import{C as m}from"./CheckboxGroup-rx7FFWr5.js";import{C as p}from"./Checkbox-BZkQkhgf.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CNSUQM04.js";import"./utils-CzdJImXC.js";import"./clsx-B-dksMZM.js";import"./Text-BzTzEwa_.js";import"./useFocusRing-B933qwOx.js";import"./index-BNnNq99L.js";import"./index-CDGQedl9.js";import"./clsx-Ciqy0D92.js";import"./Text-FnTIT6A7.js";import"./Label-o_uqg4mu.js";import"./Button-BjFe8Qxa.js";import"./Hidden-f6WbCn28.js";import"./useLabels-DCXSlQiV.js";import"./useButton-BK9ob62y.js";import"./Dialog-BWXQdrkx.js";import"./RSPContexts-DlAbhQ-j.js";import"./OverlayArrow-CKV6E1G-.js";import"./useResizeObserver-B2NRcN8z.js";import"./useControlledState-BAOEk3qi.js";import"./Collection-Dc7Pvuzi.js";import"./index-c9uBbMw-.js";import"./Separator-nk_85xCt.js";import"./SelectionManager-D04MXtr7.js";import"./useEvent-BaUhd_FK.js";import"./scrollIntoView-Bovkd6w4.js";import"./SelectionIndicator-z-Q8MT7j.js";import"./useDescription-DEfOZN_U.js";import"./ListKeyboardDelegate-C_1mGTYy.js";import"./PressResponder-hXvoDWRw.js";import"./useLocalizedStringFormatter-BFlI89gI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dw-q-NMY.js";import"./VisuallyHidden-DPMP7RQx.js";import"./Button-B1rt2puZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BKuOwoBy.js";import"./createLucideIcon-CXb3IT7f.js";import"./x-BVCaSCFv.js";import"./Heading-APdHuM_S.js";import"./info-ClO66hHU.js";import"./Popover-DLa2PH1I.js";import"./useFormValidation-JfHmnvgD.js";import"./useField-CMyz0xuE.js";import"./Form-DnU3PC8T.js";import"./check-Zwf7HqkT.js";import"./useToggleState-Bi6Ar8k5.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
