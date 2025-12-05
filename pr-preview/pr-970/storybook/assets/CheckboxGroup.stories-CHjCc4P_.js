import{j as e}from"./iframe-BvU5xcZ6.js";import{C as m}from"./CheckboxGroup-C6NXsywd.js";import{C as p}from"./Checkbox-5eTDTeDk.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C_jAntIO.js";import"./utils-DNv02rPu.js";import"./clsx-B-dksMZM.js";import"./Text-DFigioyQ.js";import"./useFocusRing-vZw9Dvay.js";import"./index-Bef40-aw.js";import"./index-Dc_kFy69.js";import"./clsx-Ciqy0D92.js";import"./Text-evR5nmIf.js";import"./Label-u7Hrvyub.js";import"./Button-C9_RYgB9.js";import"./Hidden-DHY5Q1Kt.js";import"./useLabels-FmS0ggiN.js";import"./useButton-B8BiSZmd.js";import"./Dialog-DI6MPESB.js";import"./RSPContexts-BulTZf7c.js";import"./OverlayArrow-BZcVsILZ.js";import"./useResizeObserver-DWjM30zM.js";import"./useControlledState-PQZLqL14.js";import"./Collection-Dl6go_YD.js";import"./index-YoBKxMt_.js";import"./Separator-B-zTWApR.js";import"./SelectionManager-DHcXwlU3.js";import"./useEvent-Bz8l31iO.js";import"./scrollIntoView-D3VgVWtP.js";import"./SelectionIndicator-Bx753wwo.js";import"./useDescription-BClDbhSX.js";import"./ListKeyboardDelegate-CWATdnNC.js";import"./PressResponder-DqvzWvwj.js";import"./useLocalizedStringFormatter-BKZa2vq4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D7Iam-X6.js";import"./VisuallyHidden-C8Yn3KEk.js";import"./Button-Cv7hnaWU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B52eqB_B.js";import"./createLucideIcon-Bd04jM4n.js";import"./x-BY4HyOQa.js";import"./Heading-BC0J-Zc1.js";import"./info-BwUPf6_J.js";import"./Popover-D4m9w2Ry.js";import"./useFormValidation-Ctrr6uo1.js";import"./useField-CZofIzOp.js";import"./Form-Cxrk7nZK.js";import"./check-BJo8QmGI.js";import"./useToggleState-Cymi7uKq.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
