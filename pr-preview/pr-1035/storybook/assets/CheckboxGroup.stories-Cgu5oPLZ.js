import{j as e}from"./iframe-BQBOUe4L.js";import{C as m}from"./CheckboxGroup-B2-WJEPk.js";import{C as p}from"./Checkbox-Chcysf29.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-U_WPsfks.js";import"./utils-CRMkcUEf.js";import"./clsx-B-dksMZM.js";import"./Text-4aw7o7le.js";import"./useFocusRing-DansQnno.js";import"./index-yiTGV0Ad.js";import"./index-B5FT88Na.js";import"./clsx-Ciqy0D92.js";import"./Text-B_t0zTpM.js";import"./Label-BMUQz-h6.js";import"./Button-CvEjFmDh.js";import"./Hidden-DlSKSdAn.js";import"./useLabels-CAK16zbU.js";import"./useButton-B_yguids.js";import"./Dialog-BVqK9tm3.js";import"./RSPContexts-CvjO9LUS.js";import"./OverlayArrow-C1PBVSGx.js";import"./useResizeObserver-BAcHADGr.js";import"./useControlledState-DM-5-Rrt.js";import"./Collection-DA9nos4X.js";import"./index-DPtY_q6d.js";import"./Separator-CvqEesBD.js";import"./SelectionManager-CnZFBJPA.js";import"./useEvent-5ECDfKWj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTndX8cd.js";import"./useDescription-C0HCyUwc.js";import"./ListKeyboardDelegate-CLrR3jmQ.js";import"./PressResponder-qNABUEhU.js";import"./useLocalizedStringFormatter-B5gaEHvL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BWDp05La.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DljAyihR.js";import"./Button-Cim8R03s.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-lzSK34iS.js";import"./createLucideIcon-DCYizV4H.js";import"./x-Cp8v8-j6.js";import"./Heading-DYmoF48W.js";import"./info-CTeb1YdU.js";import"./Popover-DUiRFiBj.js";import"./useFormValidation-DspKaQyW.js";import"./useField-CPvbugzP.js";import"./Form-mxlt6ylo.js";import"./check-DznLR02y.js";import"./useToggleState-BUiXNMTm.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
