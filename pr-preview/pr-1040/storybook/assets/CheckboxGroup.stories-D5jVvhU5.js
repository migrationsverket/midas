import{j as e}from"./iframe-DdNBFEdS.js";import{C as m}from"./CheckboxGroup-DtfmtiY0.js";import{C as p}from"./Checkbox-BMqd6eFM.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dstr91Hq.js";import"./utils-DKBoBmKc.js";import"./clsx-B-dksMZM.js";import"./Text-DJzhksm2.js";import"./useFocusRing-C1ql2mMD.js";import"./index-Cy32Do-K.js";import"./index-B6M-MUl5.js";import"./clsx-Ciqy0D92.js";import"./Text-Bgy8BGDZ.js";import"./Label-DSROYP0M.js";import"./Button-BWr7_BWz.js";import"./Hidden-DdkFwnyL.js";import"./useLabels-CZmZ3erh.js";import"./useButton-CrvEZzSp.js";import"./Dialog-CWZxxwUo.js";import"./RSPContexts-CKuuNJn4.js";import"./OverlayArrow-BUGhProZ.js";import"./useResizeObserver-Fga4vkA0.js";import"./useControlledState-BJIZRVo5.js";import"./Collection-BHvAQsw5.js";import"./index-B0oHLev5.js";import"./Separator-C7Usgpsv.js";import"./SelectionManager-eDGBYmYv.js";import"./useEvent-CJ07A-z0.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BflNvleB.js";import"./useDescription-DS4J-thO.js";import"./ListKeyboardDelegate-Cy8Ry9Ez.js";import"./PressResponder-WWYUgAPI.js";import"./useLocalizedStringFormatter-tAALMyF-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-6XctGwNP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BmJ_BOK8.js";import"./Button-CStTwVWg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ym1SGOkF.js";import"./createLucideIcon-BK-2_1r2.js";import"./x-BfdKHuCu.js";import"./Heading-CUaogu-M.js";import"./info-B6e12zg3.js";import"./Popover-D8unhfhQ.js";import"./useFormValidation-DHeKAkur.js";import"./useField-5xN0_EGG.js";import"./Form-D13F7_ls.js";import"./check-BKlvlB_K.js";import"./useToggleState-CGDY6HqB.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
