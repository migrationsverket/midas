import{j as e}from"./iframe-BBs4_N6h.js";import{C as m}from"./CheckboxGroup-MI6_wEop.js";import{C as p}from"./Checkbox-DOC-wkrj.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BhhOnxLS.js";import"./utils-DQWEvmcK.js";import"./clsx-B-dksMZM.js";import"./Text-Docz9roa.js";import"./useFocusRing-C2UWZwX7.js";import"./index-DSf7Rq9d.js";import"./index-DgjA7sBY.js";import"./clsx-Ciqy0D92.js";import"./Text-DQhNGrME.js";import"./Label-31m2_LGH.js";import"./Button-Xr6dJxVX.js";import"./Hidden-Vg2S_tOJ.js";import"./useLabels-2mnglK4H.js";import"./useButton-C_pkSc3R.js";import"./Dialog-CYHI6YHZ.js";import"./RSPContexts-BwJ1wfP5.js";import"./OverlayArrow-B9MzykIK.js";import"./useResizeObserver-CdUTDbmG.js";import"./useControlledState-BjCb2bRF.js";import"./Collection-CmVXJPau.js";import"./index-C_ERSOhL.js";import"./Separator-BTzpOTpH.js";import"./SelectionManager-ChFtDhyR.js";import"./useEvent-Ca5WwQl8.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CNOtdENK.js";import"./useDescription-C5nfsD6n.js";import"./ListKeyboardDelegate-DJHvgrIs.js";import"./PressResponder-pzaKr9_J.js";import"./useLocalizedStringFormatter-CAgc08WU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C0BM_TSy.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DBQc_FBH.js";import"./Button-Bf3i2B3M.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BYezl8xZ.js";import"./createLucideIcon-qvf3G-BL.js";import"./x-DCZtPpro.js";import"./Heading-CEt-X43O.js";import"./info-BuGhY9bq.js";import"./Popover-C3O2hxz3.js";import"./useFormValidation-D4vZGBVx.js";import"./useField-KR56YyQD.js";import"./Form-Cwh0R2Gl.js";import"./check-DeU2vXgh.js";import"./useToggleState-Czx7m8Pg.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
