import{j as e}from"./iframe-oXsIpbMB.js";import{C as m}from"./CheckboxGroup-CvIv_N1V.js";import{C as p}from"./Checkbox-CpqJri7p.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BTJfSvTO.js";import"./utils-B-O4b79N.js";import"./clsx-B-dksMZM.js";import"./Text-D73taSIa.js";import"./useFocusRing-BW9P1ZR5.js";import"./index-BxWuJyFF.js";import"./index-CmStSKjz.js";import"./clsx-Ciqy0D92.js";import"./Text-BH5S53Oz.js";import"./Label-DPZhH02J.js";import"./Button-8cpKG8rd.js";import"./Hidden-WXuZRkqT.js";import"./useLabels-CoOIyE91.js";import"./useButton-Dsjjlw5w.js";import"./Dialog-BtOohgAq.js";import"./RSPContexts-DPtGg_n2.js";import"./OverlayArrow-D9IKXYjn.js";import"./useResizeObserver-BC4x8Eqq.js";import"./useControlledState-BKAJ8-LK.js";import"./Collection-6fmVf6JF.js";import"./index-DgznWqkk.js";import"./Separator-DHUONKab.js";import"./SelectionManager-AtUstcI6.js";import"./useEvent-DKd880lO.js";import"./scrollIntoView-q6sbjqLE.js";import"./SelectionIndicator-BbEcrIpr.js";import"./useDescription-BTh-6Bla.js";import"./ListKeyboardDelegate-T2pqNXVq.js";import"./PressResponder-BU_onAJV.js";import"./useLocalizedStringFormatter-BAW-PBtE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-L4py_Hz8.js";import"./VisuallyHidden-D-5RikPd.js";import"./Button-BuFobGoF.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-IfFIdOWG.js";import"./createLucideIcon-CifL85wv.js";import"./x-B0uyzYCV.js";import"./Heading-B756-Qse.js";import"./info-Djg2LurB.js";import"./Popover-B8h4hkIm.js";import"./useFormValidation-CniWOrWp.js";import"./useField-j07Ff-ne.js";import"./Form-CS5Z_Mxd.js";import"./check-CDkRM4iW.js";import"./useToggleState-Dw4aTDGR.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
