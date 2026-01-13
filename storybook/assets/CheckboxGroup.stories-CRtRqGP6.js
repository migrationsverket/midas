import{j as e}from"./iframe-CZTdAuLL.js";import{C as m}from"./CheckboxGroup-DYtNBEFt.js";import{C as p}from"./Checkbox-DFacIMvN.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BY6a5paY.js";import"./utils-GGwn7RiQ.js";import"./clsx-B-dksMZM.js";import"./Text-Dvj4eqEd.js";import"./useFocusRing-BSU_jsuo.js";import"./index-CbuYzQrS.js";import"./index-Dy_KSJtF.js";import"./clsx-Ciqy0D92.js";import"./Text-DZZVuCM0.js";import"./Label-C1JQhNMS.js";import"./Button-DKjLxueu.js";import"./Hidden-BdpD47Oa.js";import"./useLabels-BNcETZqg.js";import"./useButton-DXw3P5Be.js";import"./Dialog-D5GJeGKf.js";import"./RSPContexts-oB4wdkDb.js";import"./OverlayArrow-BbZuFQb3.js";import"./useResizeObserver-BC8TBZMD.js";import"./useControlledState-CG6WOxF-.js";import"./Collection-CBIq2LLr.js";import"./index-sdVB9DoJ.js";import"./Separator-Cg_qLKvh.js";import"./SelectionManager-DFcqLyoF.js";import"./useEvent-BFknnVL3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-L5J_akna.js";import"./useDescription-DpLhcWK7.js";import"./ListKeyboardDelegate-CPIvui1d.js";import"./PressResponder-8Wrce3iX.js";import"./useLocalizedStringFormatter-CcV7KYjT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3S_ZR8pv.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-O6FFlbhO.js";import"./Button--pbAGE4c.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-uEk36w.js";import"./createLucideIcon-BlxvcGuc.js";import"./x-CEAUK25F.js";import"./Heading-DZGMY1f3.js";import"./info-Dlx9Supt.js";import"./Popover-NCjz8AHy.js";import"./useFormValidation-JbXxfkzx.js";import"./useField-NQyyqEGl.js";import"./Form-Bl1MSaTZ.js";import"./check-CY09Yzzr.js";import"./useToggleState-5IwhMBtr.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
