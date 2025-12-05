import{j as e}from"./iframe-CuvNnZhW.js";import{C as m}from"./CheckboxGroup-MCWnUe2_.js";import{C as p}from"./Checkbox-DyvMOgzE.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-3gQNfb17.js";import"./utils-Bm57M54E.js";import"./clsx-B-dksMZM.js";import"./Text-yK2KnKs6.js";import"./useFocusRing-D43600Fq.js";import"./index-B40owRUi.js";import"./index-BMAPmUts.js";import"./clsx-Ciqy0D92.js";import"./Text-DQruYnq-.js";import"./Label-BYi2LUkk.js";import"./Button-DOL-rno5.js";import"./Hidden-DxowtwNV.js";import"./useLabels-efXzBIHp.js";import"./useButton-Cp1eU1ae.js";import"./Dialog-Oqp-w9-d.js";import"./RSPContexts-CQpn_-P6.js";import"./OverlayArrow-3qO1Pz2Y.js";import"./useResizeObserver-Lve1GpGt.js";import"./useControlledState-CMlYEkCM.js";import"./Collection-D9tKhjzz.js";import"./index-CnemMvpk.js";import"./Separator-CyRvqttG.js";import"./SelectionManager-CtXuFHLs.js";import"./useEvent-Bpy0OARu.js";import"./scrollIntoView-1KZh3iQK.js";import"./SelectionIndicator-CkCvo8--.js";import"./useDescription-DhNPqrJw.js";import"./ListKeyboardDelegate-D1LsJ1W6.js";import"./PressResponder-B40WJfeG.js";import"./useLocalizedStringFormatter-C1w5KOSu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-LlGdJz5e.js";import"./VisuallyHidden-CwpyE811.js";import"./Button-_NSsZI2K.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-6M9RCcid.js";import"./createLucideIcon-Df2ePFAr.js";import"./x-Df8grS6J.js";import"./Heading-J7EIvy2J.js";import"./info-Bqg9AUda.js";import"./Popover-CXi3Y7h5.js";import"./useFormValidation-D-Xc3W6R.js";import"./useField-AEkN06Tw.js";import"./Form-Ov6B_FDi.js";import"./check-CrGU6xTW.js";import"./useToggleState-B4G9AM1R.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
