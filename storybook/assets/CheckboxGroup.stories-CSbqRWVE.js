import{j as e}from"./iframe-DkQ7cM23.js";import{C as m}from"./CheckboxGroup-Cl7WgMbc.js";import{C as p}from"./Checkbox-wbkWZ_2R.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BqQ6odJM.js";import"./utils-DP89l6Mv.js";import"./clsx-B-dksMZM.js";import"./Text-mqMgoxWe.js";import"./useFocusRing-J1vPyQty.js";import"./index-7VbimUOa.js";import"./index-Cm61l895.js";import"./clsx-Ciqy0D92.js";import"./Text-DsOkgq9m.js";import"./Label-CSlXMnDA.js";import"./Button-Bq2iEg50.js";import"./Hidden-CcF5EX2e.js";import"./useLabels-DSl379fi.js";import"./useButton-BmC4cDXT.js";import"./Dialog-BcSjotPK.js";import"./RSPContexts-9PmMy4Xi.js";import"./OverlayArrow-DHPm4C8s.js";import"./useResizeObserver-BSQ8BgXf.js";import"./useControlledState-nr5IMB9l.js";import"./Collection-Vv4nNf0n.js";import"./index-CloDF_gA.js";import"./Separator-BITAZruS.js";import"./SelectionManager-5ZpvjCOe.js";import"./useEvent-grDVPgOX.js";import"./scrollIntoView-DGwr96lc.js";import"./SelectionIndicator-DvMKftvJ.js";import"./useDescription-D6gfKm05.js";import"./ListKeyboardDelegate-De3HO-6t.js";import"./PressResponder-KzePx3gP.js";import"./useLocalizedStringFormatter-BMIv7Yjf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-rGqN7s8e.js";import"./getScrollParent-C8j_9fYa.js";import"./VisuallyHidden-DiP98uOJ.js";import"./x-CkWkpKml.js";import"./createLucideIcon-DkseUJ3l.js";import"./useLocalizedStringFormatter-C95F42C0.js";import"./Heading-ByI2JxVS.js";import"./Button-rAjKvaV6.js";import"./Button.module-D_C6WeTN.js";import"./info-DnvQkoqt.js";import"./Popover-D-McFHBe.js";import"./useFormValidation-Dq7frMih.js";import"./useField-m7hj4lqE.js";import"./Form-DzbNYJh9.js";import"./check-qoUAuvVR.js";import"./useToggleState-DmBXFeMt.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
