import{j as e}from"./iframe-CZDKaAth.js";import{C as m}from"./CheckboxGroup-CCqsZ4qa.js";import{C as p}from"./Checkbox-DoP9Fm1y.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BRB2QFta.js";import"./utils-DN3LZENe.js";import"./clsx-B-dksMZM.js";import"./Text-DZbmG9za.js";import"./useFocusRing-DFIYpxaz.js";import"./index-Cb3fQwD_.js";import"./index-774Qpy2F.js";import"./clsx-Ciqy0D92.js";import"./Text-DWwhJwcg.js";import"./Label-ogqVrSLy.js";import"./Button-BJEoY7LO.js";import"./Hidden-CKAoQIbG.js";import"./useLabels-mgzC46gL.js";import"./useButton-BCDoEqm_.js";import"./Dialog-DWEbiW9v.js";import"./RSPContexts-CK3pP4Eo.js";import"./OverlayArrow-ECTdhdCr.js";import"./useResizeObserver-D0OGxEql.js";import"./useControlledState-B_tnY1CD.js";import"./Collection-BqVT-BRX.js";import"./index-B1y-_C0G.js";import"./Separator-DOOzjwBc.js";import"./SelectionManager-C43GYvIG.js";import"./useEvent-BfXh6nP0.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D91dUD_L.js";import"./useDescription-O6FD6N3s.js";import"./ListKeyboardDelegate-Bn_PIGBR.js";import"./PressResponder-DojsPRNI.js";import"./useLocalizedStringFormatter-BoxRGhBr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CkrrlGZD.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CoNqG1me.js";import"./Button-BK8SLlQI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DDe0URuf.js";import"./createLucideIcon-BpgRNcfO.js";import"./x-BUanT53w.js";import"./Heading-BdTMYtmv.js";import"./info-GFFFrTNt.js";import"./Popover-B3r7d8Je.js";import"./useFormValidation-BebHdBmO.js";import"./useField-j2JfYJDQ.js";import"./Form-BeBE0Ma0.js";import"./check-DaSN-CEh.js";import"./useToggleState-su1KeJoo.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
