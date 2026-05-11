import{j as e}from"./iframe-B--hDPXb.js";import{C as m}from"./CheckboxGroup-Djw4D0ni.js";import{C as p}from"./Checkbox-D6nqcJwJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B0I-izd3.js";import"./utils-DaPQhgmu.js";import"./clsx-B-dksMZM.js";import"./Text-eQWaQXgM.js";import"./useFocusRing-DBQnIZ7Q.js";import"./index-CVdnj8Ui.js";import"./index-Be4ICNeG.js";import"./clsx-Ciqy0D92.js";import"./Text-BKE4mpEc.js";import"./Label-DA4He307.js";import"./Button-C9U5DdED.js";import"./Hidden-CMfVl8d1.js";import"./useLabel-BX5mcItr.js";import"./useLabels-DcRK7D8e.js";import"./useButton-CAycgAqx.js";import"./Dialog-BRZImhOo.js";import"./RSPContexts-DkE08RbH.js";import"./OverlayArrow-DclCvrFE.js";import"./useResizeObserver-CxNKLpVu.js";import"./useControlledState-DZkg54SI.js";import"./Collection-CUFtkeWs.js";import"./index-DHsR75bP.js";import"./Separator-XJaVReYL.js";import"./SelectionManager-oY1epqDt.js";import"./useEvent-DlQ_v0NJ.js";import"./scrollIntoView-Cdvuqxjj.js";import"./SelectionIndicator-C09sddeF.js";import"./useDescription-BIxNiA0o.js";import"./ListKeyboardDelegate-B2SKkgzs.js";import"./PressResponder-D0pzj7fY.js";import"./useLocalizedStringFormatter-ZP-DQ3dI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DOlZqxuA.js";import"./getScrollParent-DYArvUGl.js";import"./VisuallyHidden-8_Tg-jOG.js";import"./ModalOverlay-CpaKEMAf.js";import"./x-D9iWQ3e4.js";import"./createLucideIcon-BSPs0YiP.js";import"./useLocalizedStringFormatter-gOdJRbCD.js";import"./Heading-CZ2LHrqz.js";import"./Button-Bz3nOl8L.js";import"./Button.module-BB7N-cLd.js";import"./info-CDs8PH6H.js";import"./Popover-t_Swnzg_.js";import"./Form-U2PISRcB.js";import"./useField-B8UugQx6.js";import"./check-DgcRJV7f.js";import"./useToggleState-BMf-aMpQ.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
