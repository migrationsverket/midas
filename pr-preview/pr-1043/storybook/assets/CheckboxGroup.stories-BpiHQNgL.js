import{j as e}from"./iframe-D9Rzgh85.js";import{C as m}from"./CheckboxGroup-Qd5lso3C.js";import{C as p}from"./Checkbox-BxJ6kTAX.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CIzKS9xI.js";import"./utils-CcE3691I.js";import"./clsx-B-dksMZM.js";import"./Text-3qget8RN.js";import"./useFocusRing-qy6wHmp4.js";import"./index-DmQawtna.js";import"./index-BrMoY6nn.js";import"./clsx-Ciqy0D92.js";import"./Text-Dd2X_hQM.js";import"./Label-DfuIxZjb.js";import"./Button-D5VXQBoK.js";import"./Hidden-CRl_n9Jn.js";import"./useLabels-nvjoqgK_.js";import"./useButton-C4LQsEB7.js";import"./Dialog-N6V9u_U2.js";import"./RSPContexts-BGjvgK0i.js";import"./OverlayArrow-BHYGRK-D.js";import"./useResizeObserver-DoBpt9B9.js";import"./useControlledState-CJh_WJgv.js";import"./Collection-DMed_n8m.js";import"./index-HofzEjLI.js";import"./Separator-C0hgMUAF.js";import"./SelectionManager-CQQ-Z0Yf.js";import"./useEvent-Ckf4GrX8.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D5vxYoQH.js";import"./useDescription-BM34yKeA.js";import"./ListKeyboardDelegate-1FTpva9b.js";import"./PressResponder-DaL2aiQ9.js";import"./useLocalizedStringFormatter-Dq7J19BW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DAqKh2LB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DYBD2kzd.js";import"./Button-GEwt1th_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DjQyT7Ji.js";import"./createLucideIcon-Cr-DKDH9.js";import"./x-DysO00qF.js";import"./Heading-CbGso2BQ.js";import"./info-B2DyfrxR.js";import"./Popover-B_CkSEtm.js";import"./useFormValidation-COs17kb9.js";import"./useField-ERXTV_bg.js";import"./Form-CRKWl6Li.js";import"./check-BNbITDRN.js";import"./useToggleState-mu75BpDn.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
