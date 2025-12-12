import{j as e}from"./iframe-Cu5hLgBG.js";import{C as m}from"./CheckboxGroup-BVcAzag_.js";import{C as p}from"./Checkbox-CLPH8B71.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D5AbsiAI.js";import"./utils-CW9D4Lv5.js";import"./clsx-B-dksMZM.js";import"./Text-DP2X-ccp.js";import"./useFocusRing-bpKh6ibc.js";import"./index-DUcOwDca.js";import"./index-DvgRwaKu.js";import"./clsx-Ciqy0D92.js";import"./Text-xlVuuP9J.js";import"./Label-Cah3aE3e.js";import"./Button-DhXAJjoH.js";import"./Hidden-B24fzWWq.js";import"./useLabels-3yOZ9Ivw.js";import"./useButton-DbviMFTP.js";import"./Dialog-C9xxRjNC.js";import"./RSPContexts-C3rBS2VC.js";import"./OverlayArrow-C3xVDF-P.js";import"./useResizeObserver-DvJVvnmG.js";import"./useControlledState-C7_3uWc9.js";import"./Collection-cThH_D4l.js";import"./index-BmH71ASy.js";import"./Separator-B-lL_CDQ.js";import"./SelectionManager-jncmGFRN.js";import"./useEvent-Ddh_cSBe.js";import"./scrollIntoView-BLwcbaDf.js";import"./SelectionIndicator-n_gsSn3K.js";import"./useDescription-C3gitIed.js";import"./ListKeyboardDelegate-CudDCdpR.js";import"./PressResponder-BbBgMSpr.js";import"./useLocalizedStringFormatter-CqfjLmNe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DFn_IfTI.js";import"./VisuallyHidden-Cj9dIF3c.js";import"./Button-BOIdh-Wh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B204hAxd.js";import"./createLucideIcon-CASls7dt.js";import"./x-fM7wQSz2.js";import"./Heading-CaGiJy-7.js";import"./info-BqLtrF51.js";import"./Popover-BvUUcE21.js";import"./useFormValidation-DJKo3yYL.js";import"./useField-COQITc8t.js";import"./Form-BkbI1GNi.js";import"./check-DJL69NHe.js";import"./useToggleState-CT5RbGoV.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
