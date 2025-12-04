import{j as e}from"./iframe-Dy8YW1nL.js";import{C as m}from"./CheckboxGroup-kzx9GyhB.js";import{C as p}from"./Checkbox-CWoPCc4z.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DyZQ-DTm.js";import"./utils-C1iN3peK.js";import"./clsx-B-dksMZM.js";import"./Text-DWQpvMY3.js";import"./useFocusRing-CHtYKIBZ.js";import"./index-CiKqZaPy.js";import"./index-CtsF22kH.js";import"./clsx-Ciqy0D92.js";import"./Text-hvN0j1za.js";import"./Label-ZIw0cKaI.js";import"./Button-DC3XM5t6.js";import"./Hidden-CMRF2LLs.js";import"./useLabels-BfD0hyaw.js";import"./useButton-BzUs9u61.js";import"./Dialog-B0fIVHVn.js";import"./RSPContexts-CGLIBW7g.js";import"./OverlayArrow-CdekLvSf.js";import"./useResizeObserver-nI4TvI1F.js";import"./useControlledState-yTQyhLHt.js";import"./Collection-DQpYV1l7.js";import"./index-DYTqj35q.js";import"./Separator-CypzuRi1.js";import"./SelectionManager-mqjIioqG.js";import"./useEvent-CZ4JNl4C.js";import"./scrollIntoView-CvK5Pp_s.js";import"./SelectionIndicator-WMLvYsov.js";import"./useDescription-izPGNkRr.js";import"./ListKeyboardDelegate-D25woScL.js";import"./PressResponder-CeEHBSGP.js";import"./useLocalizedStringFormatter-DY5nz3IE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BDcVMAVa.js";import"./VisuallyHidden-BflTjhoa.js";import"./Button-B67iCngD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bgm_EniW.js";import"./createLucideIcon-Dm8CZmjq.js";import"./x-CLrlV6vH.js";import"./Heading-QM00-eq4.js";import"./info-Dsk6scms.js";import"./Popover-B7fnbKy0.js";import"./useFormValidation-CWizizTm.js";import"./useField-C23ze1Dh.js";import"./Form-C2Eob-dF.js";import"./check-7t67sg-3.js";import"./useToggleState-BRp3QpsW.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
