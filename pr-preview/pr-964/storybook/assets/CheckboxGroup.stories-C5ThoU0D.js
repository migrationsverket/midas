import{j as e}from"./iframe-DAWhaW2t.js";import{C as m}from"./CheckboxGroup-BfQOgeJs.js";import{C as p}from"./Checkbox-Dq-iOWKu.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Ba9bdy0b.js";import"./utils-BR5sLtXt.js";import"./clsx-B-dksMZM.js";import"./Text-D2IArQsC.js";import"./useFocusRing-BovWNloU.js";import"./index-D684xh88.js";import"./index-domxwQpS.js";import"./clsx-Ciqy0D92.js";import"./Text-CgRVAj4B.js";import"./Label-cXH1BtTt.js";import"./Button-B8FC0WHw.js";import"./Hidden-B7a6sUEi.js";import"./useLabels-CwJrZ3kb.js";import"./useButton-Df4qwn4n.js";import"./Dialog-D7IhSSCS.js";import"./RSPContexts-CAzvZUzf.js";import"./OverlayArrow-DTlGkn-r.js";import"./useResizeObserver-CRTqY8le.js";import"./useControlledState-y8wjQEhG.js";import"./Collection-C1NcBIdQ.js";import"./index-BBuRyoIs.js";import"./Separator-CJccQN9g.js";import"./SelectionManager-Ct_s9VeM.js";import"./useEvent-CayB1s0N.js";import"./scrollIntoView-BWTP8Mlk.js";import"./SelectionIndicator-DzeJSSXw.js";import"./useDescription-BQlYcHFl.js";import"./ListKeyboardDelegate-D6_gwslt.js";import"./PressResponder-tovDBpy9.js";import"./useLocalizedStringFormatter-Bud54IOx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Ciw6Mddl.js";import"./VisuallyHidden-z0IVTDH3.js";import"./Button-B_JidUJl.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DGsrEw_W.js";import"./createLucideIcon-DPsPtM0A.js";import"./x-GRNLuSgY.js";import"./Heading-0ZDi0Y6q.js";import"./info-BFF3jV6F.js";import"./Popover-DUZiWOye.js";import"./useFormValidation-DvW8pyhT.js";import"./useField-DSvnQz-g.js";import"./Form-B0ZxuZFK.js";import"./check-Bm6PQ2ja.js";import"./useToggleState-D5Ps2kOS.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
