import{j as e}from"./iframe-BGmArfkm.js";import{C as m}from"./CheckboxGroup-4Mkfpwmt.js";import{C as p}from"./Checkbox-CsNp9rsM.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DWc1oqeh.js";import"./utils-De4ycVjz.js";import"./clsx-B-dksMZM.js";import"./Text-Co2FLqMe.js";import"./useFocusRing-C96cr3fv.js";import"./index-Vx53ryqG.js";import"./index-DH2xrgDV.js";import"./clsx-Ciqy0D92.js";import"./Text-B-cFjb91.js";import"./Label-B-Oa0qYx.js";import"./Button-Bt35FmAc.js";import"./Hidden-ZdYniLBZ.js";import"./useLabels-cL2sXBBB.js";import"./useButton-xm0K22zA.js";import"./Dialog-qnlt5s6o.js";import"./RSPContexts-DnW8w3g2.js";import"./OverlayArrow-Ci79LVIw.js";import"./useResizeObserver-UOPaRJCF.js";import"./useControlledState-C49VPy3O.js";import"./Collection-COsQU16t.js";import"./index-CxoXiRnj.js";import"./Separator-BvW5t8ps.js";import"./SelectionManager-BNjJJ1kE.js";import"./useEvent-I3liNdnB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D_bMrYtf.js";import"./useDescription-D2ktPnwX.js";import"./ListKeyboardDelegate--aVejvH8.js";import"./PressResponder-GANqwSyG.js";import"./useLocalizedStringFormatter-DYenXjtl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BCKrBNch.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C6Hru1_9.js";import"./Button-Cxuv1_BK.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-BOskpLKS.js";import"./createLucideIcon-gRAp1Zbc.js";import"./x-U65q5NmZ.js";import"./Heading-D4Y8bukS.js";import"./info-2_jsZBv5.js";import"./Popover-BlprJ_dr.js";import"./useFormValidation-BTe4d6Fg.js";import"./useField-C7c7y-kS.js";import"./Form-Zs0i40lL.js";import"./check-BNLaQJG8.js";import"./useToggleState-B0glaE6Z.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
