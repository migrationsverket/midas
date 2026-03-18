import{j as e}from"./iframe-Cr04uqFn.js";import{C as m}from"./CheckboxGroup-BW3rUc_U.js";import{C as p}from"./Checkbox-BpTBzruk.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CM9YGji9.js";import"./utils-CsC3xkQx.js";import"./clsx-B-dksMZM.js";import"./Text-SaXXHVxE.js";import"./useFocusRing-iGoUiyfg.js";import"./index-Ge0-Pyay.js";import"./index-BRmKR4IG.js";import"./clsx-Ciqy0D92.js";import"./Text-CMC0Dinw.js";import"./Label-DAZlO8xS.js";import"./Button-BDZhuw74.js";import"./Hidden-BqmZgZ8y.js";import"./useLabels-Jqxce70U.js";import"./useButton-DDahEz2i.js";import"./Dialog-BNVSg56y.js";import"./RSPContexts-DKIHjjdb.js";import"./OverlayArrow-niIw79cy.js";import"./useResizeObserver-9CmKBstP.js";import"./useControlledState-DjFFz4B7.js";import"./Collection-BcebPgQA.js";import"./index-C1CgnfUT.js";import"./Separator-Clo59Z82.js";import"./SelectionManager-CztMdh1x.js";import"./useEvent-B_zIZR1f.js";import"./scrollIntoView-BS5aSLnj.js";import"./SelectionIndicator-DqEHErwo.js";import"./useDescription-vtlKpR3S.js";import"./ListKeyboardDelegate-CSgnqlFj.js";import"./PressResponder-Cskls_z-.js";import"./useLocalizedStringFormatter-CTazVPN1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DbRqnrVU.js";import"./getScrollParent-DB2xYs0i.js";import"./VisuallyHidden-Bkfpb86W.js";import"./x-BMsMY2q6.js";import"./createLucideIcon-DucUkfKy.js";import"./useLocalizedStringFormatter-afGT4_9p.js";import"./Heading-8owiBgBQ.js";import"./Button-Bskr_9E8.js";import"./Button.module-BB7N-cLd.js";import"./info-DDYrPmld.js";import"./Popover-Dm01GhXm.js";import"./useFormValidation-BQv-xQD8.js";import"./useField-DlJ3vYWQ.js";import"./Form-B5xhmccI.js";import"./check-cbOX9A4K.js";import"./useToggleState-9nmEB_6B.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
