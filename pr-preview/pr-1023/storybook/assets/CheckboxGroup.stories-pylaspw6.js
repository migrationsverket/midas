import{j as e}from"./iframe-DLG9UKPd.js";import{C as m}from"./CheckboxGroup-BS2JfGwS.js";import{C as p}from"./Checkbox-C6quzD6P.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-crXTrtj0.js";import"./utils-DBUuZCdW.js";import"./clsx-B-dksMZM.js";import"./Text-BSfpdnWo.js";import"./useFocusRing-CPajt0l2.js";import"./index-BfkNjs9H.js";import"./index-Dhh4UqYu.js";import"./clsx-Ciqy0D92.js";import"./Text-RyRTgpJt.js";import"./Label-B3SkrlHm.js";import"./Button-TurWYA_F.js";import"./Hidden-BrEjSDmZ.js";import"./useLabels-Bt1wH29Q.js";import"./useButton-DVAUhmi8.js";import"./Dialog-HPYNLG1w.js";import"./RSPContexts-B1mSspvQ.js";import"./OverlayArrow-C7NIMeCm.js";import"./useResizeObserver-Bj0of0Zm.js";import"./useControlledState-DKvDtRay.js";import"./Collection-D7DCZQ7p.js";import"./index-BkR-K3nJ.js";import"./Separator-C51Xr8n7.js";import"./SelectionManager-Cs0Oc9Y9.js";import"./useEvent-B9M_w_TJ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-_XobMEGX.js";import"./useDescription-CNKvzn77.js";import"./ListKeyboardDelegate-CAHUNpaI.js";import"./PressResponder-sF-hqXVX.js";import"./useLocalizedStringFormatter-DIbN7jUK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2z5fIdw.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CqsIInob.js";import"./Button-BSBQeMEK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BgfRRBj_.js";import"./createLucideIcon-BPNvabKa.js";import"./x-Cu5S1DSw.js";import"./Heading-Dnzz1pkx.js";import"./info-BwUjhGZU.js";import"./Popover-Cfoyvvnu.js";import"./useFormValidation-DMkWfSjQ.js";import"./useField-BIKHvwdL.js";import"./Form-DM08mJyW.js";import"./check-DPXEDnf6.js";import"./useToggleState-rZiiUv1g.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
