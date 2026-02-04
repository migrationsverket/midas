import{j as e}from"./iframe-C_RGnjGF.js";import{C as m}from"./CheckboxGroup-BHmR7uFY.js";import{C as p}from"./Checkbox-C70cl9Bh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ChB1xIDl.js";import"./utils-CizOIJwG.js";import"./clsx-B-dksMZM.js";import"./Text-CHUsilgm.js";import"./useFocusRing-BF7aoqv-.js";import"./index-tt1S6LDy.js";import"./index-CO49tAAQ.js";import"./clsx-Ciqy0D92.js";import"./Text-BVmb7BBG.js";import"./Label-D21vUW33.js";import"./Button-DuBv3q_5.js";import"./Hidden-BRwSW5Hr.js";import"./useLabels-BfoE21n1.js";import"./useButton-CLPY3zOp.js";import"./Dialog-CobrSnm9.js";import"./RSPContexts-DrxxWwfc.js";import"./OverlayArrow-BjnI-sx1.js";import"./useResizeObserver-C7rFsAkF.js";import"./useControlledState-DtWpqbpS.js";import"./Collection-D1LloZ8c.js";import"./index-DJrS3l3t.js";import"./Separator-DIPpjpb7.js";import"./SelectionManager-BmgWiN_j.js";import"./useEvent-Dx80kgdU.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C_F0b1L_.js";import"./useDescription-BxKH-cOf.js";import"./ListKeyboardDelegate-DqDk3m8N.js";import"./PressResponder-W6vIxysL.js";import"./useLocalizedStringFormatter-Bnrb7dzs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BfwvXaXi.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DR_ZosVl.js";import"./Button-zzC5AJk8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEWE3auq.js";import"./createLucideIcon-Dw11k2K7.js";import"./x-BD8VkNC2.js";import"./Heading-pb6Nclft.js";import"./info-Cfis4Ezo.js";import"./Popover-SOrSwN44.js";import"./useFormValidation-Cl2Fp_bL.js";import"./useField-BQq33uh0.js";import"./Form-Dbvvi4Py.js";import"./check-JoIyDfEi.js";import"./useToggleState-BkDvIlgo.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
