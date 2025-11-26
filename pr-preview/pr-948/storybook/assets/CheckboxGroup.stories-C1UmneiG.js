import{j as e}from"./iframe-CJ5mLT_4.js";import{C as m}from"./CheckboxGroup-BanwqejJ.js";import{C as p}from"./Checkbox-CYOGHFgZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Pur5IESW.js";import"./utils-B-yNA_dJ.js";import"./clsx-B-dksMZM.js";import"./Text-DC_rgrUQ.js";import"./useFocusRing-BeTk7EYI.js";import"./index-B1paFtI4.js";import"./index-jV957jJU.js";import"./clsx-Ciqy0D92.js";import"./Text-BcqPXIpA.js";import"./Label-B_cOv635.js";import"./Button-BISKQvSM.js";import"./Hidden-BJ3c_w-7.js";import"./useLabels-BYugiRh3.js";import"./useButton-B1fXf975.js";import"./Dialog-tmZTbzBH.js";import"./RSPContexts-BcgASvdu.js";import"./OverlayArrow-bEa_FM5Y.js";import"./useResizeObserver-C2Pqv_SB.js";import"./useControlledState-D_djqcyI.js";import"./Collection-BBOdKeXb.js";import"./index-C4NVPHpO.js";import"./Separator-CtNoQT6o.js";import"./SelectionManager-CjO_PMS8.js";import"./useEvent-DFz4QqKo.js";import"./scrollIntoView-Dn_JjNEb.js";import"./SelectionIndicator-BA6wkJQI.js";import"./useDescription-oVI_xXa4.js";import"./ListKeyboardDelegate-BY7ZbQWW.js";import"./PressResponder-Bx-xVsTy.js";import"./useLocalizedStringFormatter-CmqbnUCj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BV-IzjNs.js";import"./VisuallyHidden-BdNOaLNL.js";import"./Button-B916xGn-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DPJWVto_.js";import"./createLucideIcon-BmH-SYUv.js";import"./x-CAtwVwPx.js";import"./Heading-9IadZiuE.js";import"./info-BnHDUwBr.js";import"./Popover-C4J3UhEc.js";import"./useFormValidation-BHVEwjh3.js";import"./useField-B6zdWbJf.js";import"./Form-34uNTGf2.js";import"./check-Csr-fvdo.js";import"./useToggleState-B2g08PfR.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
