import{j as e}from"./iframe-WskM-gQy.js";import{C as m}from"./CheckboxGroup-HhkIf5qw.js";import{C as p}from"./Checkbox-D6Ql0czo.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-DJyd5OaV.js";import"./utils-PiplYHk9.js";import"./clsx-B-dksMZM.js";import"./Text-ZMEsASHW.js";import"./useFocusRing-VjDIWbHo.js";import"./index-DQ5MGmqD.js";import"./index-BUVNGicR.js";import"./clsx-Ciqy0D92.js";import"./Text-Dtog7EZC.js";import"./Label-Z7rXIYx1.js";import"./Button-D8QLfFfX.js";import"./Hidden-CGOCYihM.js";import"./useLabels-CP12Ou_e.js";import"./useButton-DKOsPuai.js";import"./Dialog-a0f2_WbA.js";import"./RSPContexts-BWosIfet.js";import"./OverlayArrow-332kmpMz.js";import"./useResizeObserver-BYhuoZww.js";import"./useControlledState-D9EpcS-3.js";import"./Collection-fCRO0Zar.js";import"./index-BbS57Ctg.js";import"./Separator-BmKr4wkA.js";import"./SelectionManager-DMfdVO-o.js";import"./useEvent-BPAOxkP6.js";import"./scrollIntoView-D1wNzGzn.js";import"./SelectionIndicator-D6F0MjDz.js";import"./useDescription-B9cpVcNh.js";import"./ListKeyboardDelegate-C4R6fMGT.js";import"./PressResponder-BkavgcA1.js";import"./useLocalizedStringFormatter-DZmX7KtP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BGKmcE_e.js";import"./VisuallyHidden-Dwq3rn_j.js";import"./useLocalizedStringFormatter-DmtdD_MQ.js";import"./Button-DPo6WJUv.js";import"./Button.module-CtQ1deO8.js";import"./x-BDUUVzbP.js";import"./createLucideIcon-VhmxKnBe.js";import"./Heading-CyF5dkrn.js";import"./info-bBzFTbum.js";import"./Popover-Cvs-U6ZT.js";import"./useFormValidation-CRpeXhTc.js";import"./useField-DeXtnrJc.js";import"./Form-BIBxJMyA.js";import"./check-BCqsWvvR.js";import"./useToggleState-CeCPnAdw.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
