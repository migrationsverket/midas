import{j as e}from"./iframe-XiCiIf0n.js";import{C as m}from"./CheckboxGroup-DUluAclO.js";import{C as p}from"./Checkbox-BBTo2bZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BphdTUoK.js";import"./utils-DN6l_A4f.js";import"./clsx-B-dksMZM.js";import"./Text-BgntJj64.js";import"./useFocusRing-Du04ckjJ.js";import"./index-5eW94gXQ.js";import"./index-DUzzqUE5.js";import"./clsx-Ciqy0D92.js";import"./Text-BB__0TpL.js";import"./Label-DGFBbDo_.js";import"./Button-GBAKwEXf.js";import"./Hidden-B0NT9U_h.js";import"./useLabel-CX8LzJ5q.js";import"./useLabels-yWB8_p4-.js";import"./useButton-DdGLHplO.js";import"./Dialog-vO0AIOir.js";import"./RSPContexts-DA4QYsro.js";import"./OverlayArrow-Bc8m4xfE.js";import"./useResizeObserver-jOGmv4td.js";import"./useControlledState-CUbneG8a.js";import"./Collection-BXkkuLNi.js";import"./index-ChQWbGkq.js";import"./Separator-UcUuddN2.js";import"./SelectionManager-DJe5Oihj.js";import"./useEvent-Byt7kt62.js";import"./scrollIntoView-CPg7R5H1.js";import"./SelectionIndicator-zplcTWxq.js";import"./useDescription-D3XmSikn.js";import"./ListKeyboardDelegate-DwhOIuZ9.js";import"./PressResponder-3MamZval.js";import"./useLocalizedStringFormatter-D4lkYHou.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DS5_9QGV.js";import"./getScrollParent-Bk9-lSDZ.js";import"./VisuallyHidden-D8kosd8O.js";import"./ModalOverlay-BdBiBzCh.js";import"./x-AkXMb_P6.js";import"./createLucideIcon-Bi0GkdZT.js";import"./useLocalizedStringFormatter-COrKBGOW.js";import"./Heading-CrR6P3Ih.js";import"./Button-34yPA4wA.js";import"./Button.module-BB7N-cLd.js";import"./info-ChSmfyLx.js";import"./Popover-DpMwRH-x.js";import"./Form-C0m5f7h4.js";import"./useField-COsFSqdw.js";import"./check-DFUg_1Yn.js";import"./useToggleState-CMN4XFli.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
