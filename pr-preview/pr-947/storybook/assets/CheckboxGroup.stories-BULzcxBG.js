import{j as e}from"./iframe-fq9A6FK9.js";import{C as m}from"./CheckboxGroup-BiT4KM5b.js";import{C as p}from"./Checkbox-WzwdqWGv.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B7eqknUY.js";import"./utils-B2shJBpj.js";import"./clsx-B-dksMZM.js";import"./Text-DMJYBmih.js";import"./useFocusRing-NaSrpACO.js";import"./index-DC3OJijG.js";import"./index-DBTT0pcE.js";import"./clsx-Ciqy0D92.js";import"./Text-DT84MTLn.js";import"./Label-Dd1dxjVQ.js";import"./Button-W9ho1VFG.js";import"./Hidden-DjVuHnC7.js";import"./useLabels-B4JEmX2w.js";import"./useButton-BbvEdJxo.js";import"./Dialog-5L2Z7kvu.js";import"./RSPContexts-BkNJEeni.js";import"./OverlayArrow-SUAA6HKi.js";import"./useResizeObserver-tgvUSWir.js";import"./useControlledState-qB5AvSM2.js";import"./Collection-Cy_uzs11.js";import"./index-Cj6eYHz2.js";import"./Separator-BxfdqC88.js";import"./SelectionManager-CvjCb04E.js";import"./useEvent-BxWGM8jN.js";import"./scrollIntoView-D-Ul4rw1.js";import"./SelectionIndicator-C843uyYa.js";import"./useDescription-IpFgs4zH.js";import"./ListKeyboardDelegate-D3IgwcoF.js";import"./PressResponder-BKKh45xx.js";import"./useLocalizedStringFormatter-CK759rVD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CAI0Lw5F.js";import"./VisuallyHidden-CnCvc7Jt.js";import"./Button-BHnqVWV3.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Ddt---zu.js";import"./createLucideIcon-CP4QsOlK.js";import"./x-DGGtshoA.js";import"./Heading-f4rdEv-p.js";import"./info-BcYgnBrT.js";import"./Popover-B1riCOLO.js";import"./useFormValidation-cD1hDx--.js";import"./useField-mWqaLvOj.js";import"./Form-_y9nNEQD.js";import"./check-DMdRnGgv.js";import"./useToggleState-DrTU61TW.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
