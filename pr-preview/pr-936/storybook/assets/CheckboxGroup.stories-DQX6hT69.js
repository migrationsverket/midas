import{j as e}from"./iframe-Cm-nFXgj.js";import{C as m}from"./CheckboxGroup-Bbn_6gfr.js";import{C as p}from"./Checkbox-BpZC4s4m.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D74Ix_ol.js";import"./utils-DzXT04ji.js";import"./clsx-B-dksMZM.js";import"./Text-COY0mYa2.js";import"./useFocusRing-B1ph6_YX.js";import"./index-COonVY99.js";import"./index-Cgz1zuFt.js";import"./clsx-Ciqy0D92.js";import"./Text-BPyIK2Xp.js";import"./Label-CVGX7SZA.js";import"./Button-BqjtFLeK.js";import"./Hidden-C2cWBi-M.js";import"./useLabels-k6HUJMVn.js";import"./useButton-WCkm0bok.js";import"./Dialog-BOiIsQ9M.js";import"./RSPContexts-B-hrydvR.js";import"./OverlayArrow-CujCbKhD.js";import"./useResizeObserver-D_vgl-2I.js";import"./useControlledState-BAnQ-hqM.js";import"./Collection-DLj4MZQo.js";import"./index-DbjVBF2v.js";import"./Separator-CoDfGBLQ.js";import"./SelectionManager-CWdS5U_b.js";import"./useEvent-BSNIYPFi.js";import"./scrollIntoView-GK21G1Qr.js";import"./SelectionIndicator-5fNuxuas.js";import"./useDescription-CQizvqev.js";import"./ListKeyboardDelegate-Bq4Cv7eP.js";import"./PressResponder-65CT3wxF.js";import"./useLocalizedStringFormatter-Q8gIMwH7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D_A0WQI2.js";import"./VisuallyHidden-B9taaflH.js";import"./useLocalizedStringFormatter-5utfLQwv.js";import"./Button-DoGJ8kEh.js";import"./Button.module-CtQ1deO8.js";import"./x-Dl4JhGUD.js";import"./createLucideIcon-Cv6XV0Hb.js";import"./Heading-CDG1N05B.js";import"./info-D0Z1H11u.js";import"./Popover-FiI-epKw.js";import"./useFormValidation-CHfpCGS0.js";import"./useField-DJZk_iyu.js";import"./Form-DA-PxQ89.js";import"./check-2titbG1b.js";import"./useToggleState-DJAivVcf.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
