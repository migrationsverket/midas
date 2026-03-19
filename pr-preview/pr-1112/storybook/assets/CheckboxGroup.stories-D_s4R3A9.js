import{j as e}from"./iframe-CaGxyJQ5.js";import{C as m}from"./CheckboxGroup-Cy2HI8Gq.js";import{C as p}from"./Checkbox-DsP29CQ3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BBlPKEY6.js";import"./utils-CVJqKyu4.js";import"./clsx-B-dksMZM.js";import"./Text-Dtkx7GWh.js";import"./useFocusRing-LTUTFWnB.js";import"./index-K3VTbzXg.js";import"./index-DRbza-0A.js";import"./clsx-Ciqy0D92.js";import"./Text-W3mtiTBT.js";import"./Label-CKj8R9kJ.js";import"./Button-Bn3l1eKL.js";import"./Hidden-BAAaulvK.js";import"./useLabels-BlAPVOi_.js";import"./useButton-bmkikoqa.js";import"./Dialog-DLxW7KLT.js";import"./RSPContexts-_cn7M6Ef.js";import"./OverlayArrow-CBy4nJZJ.js";import"./useResizeObserver-CpKOmDlM.js";import"./useControlledState-CNCDq7j0.js";import"./Collection-CE0nJlW6.js";import"./index-Bx7R-ad4.js";import"./Separator-D2pJZkcF.js";import"./SelectionManager-DzE4SKgf.js";import"./useEvent-CzPSy7Rs.js";import"./scrollIntoView-yBkYCpPJ.js";import"./SelectionIndicator-DM64-xB3.js";import"./useDescription-BuSKxMJt.js";import"./ListKeyboardDelegate-DNfzS-AW.js";import"./PressResponder-HiCvM10K.js";import"./useLocalizedStringFormatter-CZOLyc3D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BXHwBS7q.js";import"./getScrollParent-B1-aYvPm.js";import"./VisuallyHidden-BZzDvx5i.js";import"./x-CBNTpHd8.js";import"./createLucideIcon-yEXXgYRp.js";import"./useLocalizedStringFormatter-DdAzyJ4I.js";import"./Heading-UtCJNKfQ.js";import"./Button-SlKntRzd.js";import"./Button.module-BB7N-cLd.js";import"./info-Cl6QVS6K.js";import"./Popover-CphyAV3g.js";import"./useFormValidation-tvbfblk7.js";import"./useField-DTyiot4U.js";import"./Form-Cfd2cFqg.js";import"./check-BU161kP0.js";import"./useToggleState-TxwGpfk5.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
