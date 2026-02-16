import{j as e}from"./iframe-BJQY1bvJ.js";import{C as m}from"./CheckboxGroup-C5OVVrgu.js";import{C as p}from"./Checkbox-BxICYtoY.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B56sTIqy.js";import"./utils-lif94hNf.js";import"./clsx-B-dksMZM.js";import"./Text-BNAvgz7D.js";import"./useFocusRing-BLqAyq6i.js";import"./index-tP79n4Xh.js";import"./index-IY5nP7ez.js";import"./clsx-Ciqy0D92.js";import"./Text-DS3gleYA.js";import"./Label-CR_CrvCp.js";import"./Button-tbssrMuS.js";import"./Hidden-DoOxpBOx.js";import"./useLabels-WB4c8N4J.js";import"./useButton-CsuJz0cJ.js";import"./Dialog-Db7P49EB.js";import"./RSPContexts-CdLg8ZQ-.js";import"./OverlayArrow-3PnDCdtx.js";import"./useResizeObserver-DGBnzj2_.js";import"./useControlledState-C_pcrP7U.js";import"./Collection-DdWaMwwY.js";import"./index-AO2QVlWM.js";import"./Separator-CUwgFn1F.js";import"./SelectionManager-Dkp955FZ.js";import"./useEvent-CwuHowAX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C_Pwu52k.js";import"./useDescription-CCnP-Uo3.js";import"./ListKeyboardDelegate-BYmQaOVb.js";import"./PressResponder-Bxs7y7VP.js";import"./useLocalizedStringFormatter-BDBiLNys.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-XkxXAZjC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DVVhBCOd.js";import"./Button-BJZHHaN3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CsRXfCs5.js";import"./createLucideIcon-BjfGBRzU.js";import"./x-md0iaidC.js";import"./Heading-BaBUFL96.js";import"./info-CioFJ2A0.js";import"./Popover-DNH_fOYv.js";import"./useFormValidation-BsxZg-gF.js";import"./useField-DU--EPtB.js";import"./Form-CAdVlO2f.js";import"./check-Dopf3zVG.js";import"./useToggleState-CRuVgnLf.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
