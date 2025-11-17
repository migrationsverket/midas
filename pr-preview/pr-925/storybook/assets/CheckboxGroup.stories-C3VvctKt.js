import{j as e}from"./iframe-jgKyCgCs.js";import{C as m}from"./CheckboxGroup-CYfsXN0c.js";import{C as p}from"./Checkbox-DjkD4i3p.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CoMeK_07.js";import"./utils-Di2SFccO.js";import"./clsx-B-dksMZM.js";import"./Text-CyTszoD0.js";import"./useFocusRing-iYG5kAH5.js";import"./index-DG2WG7qx.js";import"./index-BFSl9xNw.js";import"./FieldError-B54BjIf5.js";import"./clsx-Ciqy0D92.js";import"./Text-B1Y_W_Ha.js";import"./Label-Bea9dcgg.js";import"./Button-qMrleB50.js";import"./Hidden-DKkXPRAB.js";import"./useLabels-mdXMBDxR.js";import"./useButton-DdA7_Pcq.js";import"./Dialog-CdAaapKg.js";import"./RSPContexts-CjB3U11V.js";import"./OverlayArrow-D_-Dtn70.js";import"./useResizeObserver-Cc2u12GN.js";import"./useControlledState-BchtzvOb.js";import"./Collection-BVD5TKUp.js";import"./index-C0l6azJG.js";import"./Separator-DufOEZii.js";import"./SelectionManager-CnO4PmcI.js";import"./useEvent-B4KHg1tu.js";import"./scrollIntoView-DpvrOgVf.js";import"./SelectionIndicator-KAAZ95Tb.js";import"./useDescription-CFNrmai2.js";import"./ListKeyboardDelegate-Cc3loV_6.js";import"./PressResponder-BzESNd9C.js";import"./useLocalizedStringFormatter-CytWURy7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CU028xxg.js";import"./VisuallyHidden-C4wfS2L1.js";import"./useLocalizedStringFormatter-CqtWfHXd.js";import"./Button-DWs9gr3F.js";import"./Button.module-CtQ1deO8.js";import"./x-DRfTRCVq.js";import"./createLucideIcon-CWyh0Gfz.js";import"./Heading-I7geM05-.js";import"./info-CO_Xb2iZ.js";import"./Popover-7OubAj3D.js";import"./useFormValidation-BSTLnn3c.js";import"./useField-CLEe5K9S.js";import"./Form-BeyNi6dy.js";import"./check-B1dvlcQp.js";import"./useToggleState-CNZ0aLss.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
