import{j as e}from"./iframe-y3RQudkV.js";import{C as m}from"./CheckboxGroup-B26YgP7y.js";import{C as p}from"./Checkbox-BjeDw5MN.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DbTKGFTi.js";import"./utils-CLUQEgK0.js";import"./clsx-B-dksMZM.js";import"./Text-Blof-eBx.js";import"./useFocusRing-D6jKEede.js";import"./index-Btmjqavz.js";import"./index-C_jNHA4R.js";import"./clsx-Ciqy0D92.js";import"./Text-BJza01K7.js";import"./Label-CEFq0DJl.js";import"./Button-CIEvAO1z.js";import"./Hidden-X5-u2uqU.js";import"./useLabels-C6A1w6dP.js";import"./useButton-DvV-S-Re.js";import"./Dialog-VGUqn1LF.js";import"./RSPContexts-CQGJwvaW.js";import"./OverlayArrow-QmqVuTqB.js";import"./useResizeObserver-DLCfIb8d.js";import"./useControlledState-BlejUV3u.js";import"./Collection-mBq74uji.js";import"./index-DVxUphre.js";import"./Separator-BDJXd-hv.js";import"./SelectionManager-BbR-yjHl.js";import"./useEvent-BspRHKlr.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CHISNaEV.js";import"./useDescription-pAch1eL8.js";import"./ListKeyboardDelegate-BC7dvwtv.js";import"./PressResponder-B002mKCy.js";import"./useLocalizedStringFormatter-02llwVfA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DabMCYse.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CodUiT0u.js";import"./Button-C6bCh7AW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CNW12ox4.js";import"./createLucideIcon-DRJFQYBk.js";import"./x-DAS3UPTm.js";import"./Heading-DviOwGmS.js";import"./info-D5rdsSr_.js";import"./Popover-BvcQrqZ5.js";import"./useFormValidation-CZmsk4ZH.js";import"./useField-hggg6uU5.js";import"./Form-dHvJf-tT.js";import"./check-DTdhvA6u.js";import"./useToggleState-SQAuoitu.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
