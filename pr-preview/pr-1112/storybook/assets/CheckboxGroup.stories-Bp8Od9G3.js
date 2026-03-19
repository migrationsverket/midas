import{j as e}from"./iframe-CTc60VTv.js";import{C as m}from"./CheckboxGroup-C8Hc11ZD.js";import{C as p}from"./Checkbox-CBSz7aL3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DLICbn0F.js";import"./utils-CX_MyPJp.js";import"./clsx-B-dksMZM.js";import"./Text-BWm8EFxq.js";import"./useFocusRing-DGMfhUR8.js";import"./index-CopPqlir.js";import"./index-B5EHLrG2.js";import"./clsx-Ciqy0D92.js";import"./Text-U4cmy44W.js";import"./Label-CqCGomG1.js";import"./Button-pB47d38A.js";import"./Hidden-Bn2RbpW0.js";import"./useLabels-DSU9QQ05.js";import"./useButton-BcQwxG2_.js";import"./Dialog-D8MoIiNv.js";import"./RSPContexts-DfNYkHSv.js";import"./OverlayArrow-9kYQsc9o.js";import"./useResizeObserver-BgHl2AUh.js";import"./useControlledState-D-bgWf48.js";import"./Collection-DAGgpsDY.js";import"./index-B5bk7jfZ.js";import"./Separator-DoBcy2Xs.js";import"./SelectionManager-nnkpkyRI.js";import"./useEvent-rHHxS9Wo.js";import"./scrollIntoView-FnEgfIWQ.js";import"./SelectionIndicator-CAHQmEAu.js";import"./useDescription-DgVzXBhb.js";import"./ListKeyboardDelegate-DByJPBwI.js";import"./PressResponder-DDCmS_Vy.js";import"./useLocalizedStringFormatter-B9U1Drd-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CxFbrl_4.js";import"./getScrollParent-DlGzH9JS.js";import"./VisuallyHidden-SblkdzTe.js";import"./x-B_Vqy6_g.js";import"./createLucideIcon-C63opgfS.js";import"./useLocalizedStringFormatter-Ci3kGB7o.js";import"./Heading-CtvMQJYy.js";import"./Button-BjBl_qxz.js";import"./Button.module-BB7N-cLd.js";import"./info-nmSg-2Cx.js";import"./Popover-DXlCp9OK.js";import"./Form-D62ZHhda.js";import"./useField-DhnrRXLH.js";import"./check-C5dNhDB8.js";import"./useToggleState-CXExu_v9.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
