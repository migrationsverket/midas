import{j as e}from"./iframe-DFa3xMtH.js";import{C as m}from"./CheckboxGroup-C9rX0afG.js";import{C as p}from"./Checkbox-CfzO9TyD.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DDcEoLvd.js";import"./utils-BcZWRu-T.js";import"./clsx-B-dksMZM.js";import"./Text-BCIdAzOc.js";import"./useFocusRing-DTF2LQQu.js";import"./index-14R2kEQz.js";import"./index-BImQHuZW.js";import"./clsx-Ciqy0D92.js";import"./Text-CLgVcmAF.js";import"./Label-B8lYr4O8.js";import"./Button-ocYHggw0.js";import"./Hidden-syp9xi-M.js";import"./useLabels-DTa4O1hk.js";import"./useButton-BkRX4biF.js";import"./Dialog-BxcM2ig8.js";import"./RSPContexts-DlObjR3U.js";import"./OverlayArrow-sxMCWPoz.js";import"./useResizeObserver-DY4A22tz.js";import"./useControlledState-DlMrxxrC.js";import"./Collection-BkC_HYu3.js";import"./index-C2EOBSzk.js";import"./Separator-DJQBe1ux.js";import"./SelectionManager-CTcSNJ1U.js";import"./useEvent-B4KRxCDO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BbaKMaGf.js";import"./useDescription-C-peboUL.js";import"./ListKeyboardDelegate--oOTktEO.js";import"./PressResponder-an9ltkUz.js";import"./useLocalizedStringFormatter-D8vesOTf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D1WugCT7.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BeIfbn57.js";import"./Button-_PEtoZlZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BcKupi0h.js";import"./createLucideIcon-CG_uvONP.js";import"./x-BuIg2Jvd.js";import"./Heading-Dr6x3va7.js";import"./info-CBLR6nAo.js";import"./Popover-BbApMzNe.js";import"./useFormValidation-CZZHKzo3.js";import"./useField-ClGbo0E5.js";import"./Form-B9zhWkYb.js";import"./check-BcKmdbna.js";import"./useToggleState-CgZg35-q.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
