import{j as e}from"./iframe-BOu6r4-L.js";import{C as m}from"./CheckboxGroup-DFghmKZF.js";import{C as p}from"./Checkbox-BwNi_5h3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D7y_D_tp.js";import"./utils-Of-4zx3T.js";import"./clsx-B-dksMZM.js";import"./Text-zopR0-zB.js";import"./useFocusRing-CFbRrjJi.js";import"./index-DqaHjeC4.js";import"./index-CMXhJPlL.js";import"./clsx-Ciqy0D92.js";import"./Text-BqeEVLWH.js";import"./Label-pg1HfSN-.js";import"./Button-B0Z6PH11.js";import"./Hidden-2Cq_win6.js";import"./useLabels-BrgyP2gh.js";import"./useButton-BT4cJEqS.js";import"./Dialog-B-xupTzu.js";import"./RSPContexts-D6jwhaRj.js";import"./OverlayArrow-C0VI_-Sm.js";import"./useResizeObserver-DcktYRWG.js";import"./useControlledState--hsMgjoo.js";import"./Collection-B3EFxjLo.js";import"./index-7nKSgttP.js";import"./Separator-PubfREDO.js";import"./SelectionManager-BaNakBcO.js";import"./useEvent-CoQgBDF8.js";import"./scrollIntoView-7tZxxRg-.js";import"./SelectionIndicator-DvVwYFjT.js";import"./useDescription-DJ-wqbC6.js";import"./ListKeyboardDelegate-umKl9bK6.js";import"./PressResponder-DOsDTSNB.js";import"./useLocalizedStringFormatter-BW64KWwC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BlFk2VvU.js";import"./VisuallyHidden-Dj8ZJDI7.js";import"./Button-ndCSfgaE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CTxkkben.js";import"./createLucideIcon-D3MExOcj.js";import"./x-DLkIoQKB.js";import"./Heading-BD9bvnEY.js";import"./info-DJVf1DvT.js";import"./Popover-BDAXrfJJ.js";import"./useFormValidation-BvCWzLf5.js";import"./useField-WPA3bolz.js";import"./Form-CJoTusSy.js";import"./check-CbzO2g-i.js";import"./useToggleState-C3jhULGO.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
