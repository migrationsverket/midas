import{j as e}from"./iframe-DZnWAGNq.js";import{C as m}from"./CheckboxGroup-CiBtAmVd.js";import{C as p}from"./Checkbox-zoAgnL1I.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BtctqwaV.js";import"./utils-Btsh_mej.js";import"./clsx-B-dksMZM.js";import"./Text-8pdzY51Q.js";import"./useFocusRing-BZzOLfX3.js";import"./index--cp8vNXJ.js";import"./index-DH1eMf2P.js";import"./clsx-Ciqy0D92.js";import"./Text-Db4n8kvt.js";import"./Label-DZGli3B2.js";import"./Button-BTPuoZ6n.js";import"./Hidden-Dc0Ha1vW.js";import"./useLabel-iphFOCA9.js";import"./useLabels-bUzroRw2.js";import"./useButton-DqeMFL8_.js";import"./Dialog-DqDYti0o.js";import"./RSPContexts-CXYZROJa.js";import"./OverlayArrow-BVJeE4kz.js";import"./useResizeObserver-BkJg5wU7.js";import"./useControlledState-6kQgBtxG.js";import"./Collection-C5d1-j9T.js";import"./index-CEga0pt2.js";import"./Separator-BXSYDV5i.js";import"./SelectionManager-BxFJ5IQA.js";import"./useEvent-BKkN6iVY.js";import"./scrollIntoView-BEWtuar9.js";import"./SelectionIndicator-W5u8necK.js";import"./useDescription-BbNu-u1f.js";import"./ListKeyboardDelegate-CWkiXoVF.js";import"./PressResponder-CEJI167T.js";import"./useLocalizedStringFormatter-BNHvIU-7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CcV7oYXW.js";import"./getScrollParent-5LQJ6MUd.js";import"./VisuallyHidden-BIds43GM.js";import"./x-B3FTSjlW.js";import"./createLucideIcon-DnUFLHhp.js";import"./useLocalizedStringFormatter-GZqDfzDD.js";import"./Heading-D57DtYH1.js";import"./Button-DcP_UxfK.js";import"./Button.module-BFenTVPP.js";import"./info-Cn6tw5WX.js";import"./Popover-D0vFyNDw.js";import"./Form-CG9hywiv.js";import"./useField-CizEGine.js";import"./check-K_YjScVp.js";import"./useToggleState-ZASCkYre.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
