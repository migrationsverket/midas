import{j as e}from"./iframe-C5qknig8.js";import{C as m}from"./CheckboxGroup-qbtRfm6R.js";import{C as p}from"./Checkbox-BO-mnwNo.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BDCaPSBM.js";import"./utils-DKdcqyb7.js";import"./clsx-B-dksMZM.js";import"./Text-BittgrxB.js";import"./useFocusRing-CXDO28rF.js";import"./index-DQIQ0FrH.js";import"./index-DiIH_Ibi.js";import"./clsx-Ciqy0D92.js";import"./Text-BKPtXaGU.js";import"./Label-CMSFNhe2.js";import"./Button-D58d_jbz.js";import"./Hidden-eDXD45wQ.js";import"./useLabels-COhO-YfG.js";import"./useButton-BSV9csQJ.js";import"./Dialog-OEfzleEe.js";import"./RSPContexts-C0FXYt0s.js";import"./OverlayArrow-IsBdCkco.js";import"./useResizeObserver-CJ2zvJf1.js";import"./useControlledState-DinrOT-z.js";import"./Collection-Cl6ZApDi.js";import"./index-Cefw6TiR.js";import"./Separator-B3-EMypz.js";import"./SelectionManager-JWWrUE46.js";import"./useEvent-BGLQsjMc.js";import"./scrollIntoView-BtORbJyS.js";import"./SelectionIndicator-BJ0zuo1G.js";import"./useDescription-jFsYt6-l.js";import"./ListKeyboardDelegate-D34rUNJj.js";import"./PressResponder-eX1aEu-_.js";import"./useLocalizedStringFormatter-CDMy5frs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-KoXv4JrH.js";import"./VisuallyHidden-Cdnh5iDE.js";import"./Button-DU43-mcq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CxThFscc.js";import"./createLucideIcon-Cxw0HGiz.js";import"./x-C7TGMSzB.js";import"./Heading-BhYc6m-u.js";import"./info-ClsjBgt5.js";import"./Popover-lMy3K5Bk.js";import"./useFormValidation-noWX4_Dc.js";import"./useField-CjBYQtS8.js";import"./Form-8_vshjSV.js";import"./check-vqyjhm4m.js";import"./useToggleState-T5p8dDQh.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
