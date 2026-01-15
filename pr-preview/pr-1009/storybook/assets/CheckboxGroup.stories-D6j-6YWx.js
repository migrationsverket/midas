import{j as e}from"./iframe-ccFBI1Zy.js";import{C as m}from"./CheckboxGroup-CwXHCrZL.js";import{C as p}from"./Checkbox-C_pZgdjy.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CVxfd_t0.js";import"./utils-BVj3-Cd3.js";import"./clsx-B-dksMZM.js";import"./Text-mV_idVq_.js";import"./useFocusRing-C9VQOrA-.js";import"./index-dN5ydD_a.js";import"./index-Dusa60jE.js";import"./clsx-Ciqy0D92.js";import"./Text-CmBwCO8i.js";import"./Label-ClQqyWtu.js";import"./Button-CEnfx92n.js";import"./Hidden-p0IfrMWZ.js";import"./useLabels-CApjWlXB.js";import"./useButton-DsE6FkYL.js";import"./Dialog-BxCdY1ii.js";import"./RSPContexts-CBH8t1Y8.js";import"./OverlayArrow-Db7EG0iI.js";import"./useResizeObserver-BdONv8_0.js";import"./useControlledState-BI6Lp7H1.js";import"./Collection-C-mL8fBH.js";import"./index-VMEIaRs3.js";import"./Separator-CsBVJhmI.js";import"./SelectionManager-CQM2oJP3.js";import"./useEvent-zMHUl8wo.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BmjnCczp.js";import"./useDescription-B1c0tiyy.js";import"./ListKeyboardDelegate-BuXfkG1l.js";import"./PressResponder-gQEJyYV3.js";import"./useLocalizedStringFormatter-ClaIkQbq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DtEjzElg.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CfF4nhmt.js";import"./Button-BJwJ6DIM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DAkizOqJ.js";import"./createLucideIcon-puHPRiC0.js";import"./x-TQxST23O.js";import"./Heading-DS1q6uAH.js";import"./info-RiSIGvH5.js";import"./Popover-w1qdXOHw.js";import"./useFormValidation-Dse-9b_j.js";import"./useField-Cz6CbKez.js";import"./Form-CSm1PNHd.js";import"./check-Xr83MG3E.js";import"./useToggleState-Dx27-afF.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
