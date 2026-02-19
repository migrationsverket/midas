import{j as e}from"./iframe-CD9uBJjF.js";import{C as m}from"./CheckboxGroup-DWfBrul-.js";import{C as p}from"./Checkbox-DJwFiVG_.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BlUbkslV.js";import"./utils-D9nWysEF.js";import"./clsx-B-dksMZM.js";import"./Text-gTqq02dR.js";import"./useFocusRing-Bz4Ez0NQ.js";import"./index-CyAc0wfu.js";import"./index-Cfa7UGYo.js";import"./clsx-Ciqy0D92.js";import"./Text-DrZkRnZ9.js";import"./Label-yOqJH9TP.js";import"./Button-DKA4ukB1.js";import"./Hidden-MQKal_Xr.js";import"./useLabels-REhQlgaO.js";import"./useButton-C2BwIN52.js";import"./Dialog-DEEJLGhr.js";import"./RSPContexts-gGDWzVAk.js";import"./OverlayArrow-C2u9G-1j.js";import"./useResizeObserver-FGjqkz23.js";import"./useControlledState-CV5SZqjM.js";import"./Collection-BIApEFUw.js";import"./index-0-MnvgDy.js";import"./Separator-Ckec1IBA.js";import"./SelectionManager-CRVyVoV9.js";import"./useEvent-DI0CpNHe.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CAycTYPK.js";import"./useDescription-CHLccClC.js";import"./ListKeyboardDelegate-DsaZyf27.js";import"./PressResponder-CgBx_kU5.js";import"./useLocalizedStringFormatter-BfgeHIhn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BWFveiHT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Csfns3eW.js";import"./Button-BuKqwfs3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B8TYdvpB.js";import"./createLucideIcon-ukt1IiZL.js";import"./x-OCy2nfas.js";import"./Heading-B6lKxOoy.js";import"./info-RxZSQxFc.js";import"./Popover-DmTsfGAw.js";import"./useFormValidation-CMWTaPvT.js";import"./useField-NtKOYEUw.js";import"./Form-BgJ1n07C.js";import"./check-CbMRRhXp.js";import"./useToggleState-DD2arsE3.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
