import{j as e}from"./iframe-BY9vh6z6.js";import{C as m}from"./CheckboxGroup-BI6d3auP.js";import{C as p}from"./Checkbox-C2WWPzzu.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DeHNS8yq.js";import"./utils-CvO9wRJK.js";import"./clsx-B-dksMZM.js";import"./Text-CS2W2lPB.js";import"./useFocusRing-C58Wldhw.js";import"./index-BCEmrA-k.js";import"./index-BY7PPuin.js";import"./clsx-Ciqy0D92.js";import"./Text-D2NltcsY.js";import"./Label-8ue6hqSU.js";import"./Button-BRroCyFc.js";import"./Hidden-CtZVxLKv.js";import"./useLabel-BGiQ4ILo.js";import"./useLabels-BEKF_Ui1.js";import"./useButton-C5riGvhj.js";import"./Dialog-C_ijxaqM.js";import"./RSPContexts-DvzJiI6P.js";import"./OverlayArrow-B-1Yg2BA.js";import"./useResizeObserver-CsETQTyf.js";import"./useControlledState-tRNWjYkK.js";import"./Collection-DtE19mci.js";import"./index-BzZ2BuIi.js";import"./Separator-CCpXoumi.js";import"./SelectionManager-Br_H8_zH.js";import"./useEvent-Dxv08bvf.js";import"./scrollIntoView-CCKb3jUj.js";import"./SelectionIndicator-DamMI_aq.js";import"./useDescription-Cjh6szWZ.js";import"./ListKeyboardDelegate-z0K9q_6J.js";import"./PressResponder-8saORWk8.js";import"./useLocalizedStringFormatter-DvhmXb5T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-GQeaOULT.js";import"./getScrollParent-DrF2sSND.js";import"./VisuallyHidden-D_LmADCN.js";import"./x-L5wRjwNt.js";import"./createLucideIcon-BXNm475a.js";import"./useLocalizedStringFormatter-CAo6NRgz.js";import"./Heading-CGdkvWQV.js";import"./Button-C6EXF9Um.js";import"./Button.module-BB7N-cLd.js";import"./info-D-WwwqKW.js";import"./Popover-7_2WIqnC.js";import"./Form-rQZlhbIF.js";import"./useField-tV89OT8_.js";import"./check-DymE3jol.js";import"./useToggleState-CF_Jv0f6.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
