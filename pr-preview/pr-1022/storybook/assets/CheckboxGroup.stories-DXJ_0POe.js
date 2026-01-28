import{j as e}from"./iframe-B4Bxc31-.js";import{C as m}from"./CheckboxGroup-BQFF7lft.js";import{C as p}from"./Checkbox-DkQ_AWlW.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CihcasJE.js";import"./utils-CeZcgYm6.js";import"./clsx-B-dksMZM.js";import"./Text-r5dJNPiY.js";import"./useFocusRing-BfKHzdgs.js";import"./index-C4J05Lc5.js";import"./index-DgJUXc_n.js";import"./clsx-Ciqy0D92.js";import"./Text-JHx8n9q1.js";import"./Label-5cptDu9k.js";import"./Button-CDG3o-tS.js";import"./Hidden-C62-4jmO.js";import"./useLabels-wF9e--1W.js";import"./useButton-CcZzD6iW.js";import"./Dialog-BeqQGcVr.js";import"./RSPContexts-D2qBqFC6.js";import"./OverlayArrow-CoRXoM7X.js";import"./useResizeObserver-CiGakr_c.js";import"./useControlledState-Cg9KEN5b.js";import"./Collection-B9xM4Pal.js";import"./index-mbFFKS_D.js";import"./Separator-CMsTmUbN.js";import"./SelectionManager-L_Duk7qi.js";import"./useEvent-D5R27whq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CEVTJOdn.js";import"./useDescription-CSCKMn8T.js";import"./ListKeyboardDelegate-D96mliyZ.js";import"./PressResponder-RGGxpaN4.js";import"./useLocalizedStringFormatter-D5WpXGBK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CPpUi3cs.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DlEhGwXr.js";import"./Button-CN8pseCj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFzkaQ8-.js";import"./createLucideIcon-DGUSaHO7.js";import"./x-CCZLGaNC.js";import"./Heading-BI4qkTim.js";import"./info-C5tm93Rd.js";import"./Popover-DAn-SSfJ.js";import"./useFormValidation-BQSgNpFd.js";import"./useField-CUKRhRws.js";import"./Form-Ds8b_gZJ.js";import"./check-CFLl1Tqx.js";import"./useToggleState-CH3c1uO2.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
