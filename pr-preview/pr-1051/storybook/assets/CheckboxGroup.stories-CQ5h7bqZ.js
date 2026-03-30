import{j as e}from"./iframe-BkUM7oEP.js";import{C as m}from"./CheckboxGroup-Nq1g7EJa.js";import{C as p}from"./Checkbox-CFhKGnnV.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-01Ml0ka5.js";import"./utils-DWoj52PP.js";import"./clsx-B-dksMZM.js";import"./Text-ClKfHAct.js";import"./useFocusRing-CU5ndcID.js";import"./index-Db2I9cuy.js";import"./index-BL6dPHEM.js";import"./clsx-Ciqy0D92.js";import"./Text-pLibJUKD.js";import"./Label-CyFp8HsH.js";import"./Button-UyuoNVOf.js";import"./Hidden-iTXT5-p2.js";import"./useLabel-Digs7FVA.js";import"./useLabels-DJtxT6T3.js";import"./useButton-y66OoghU.js";import"./Dialog-Dud82AiB.js";import"./RSPContexts--U7gqoYU.js";import"./OverlayArrow-C9yZ5W0o.js";import"./useResizeObserver-DAYmVi6I.js";import"./useControlledState-BozTthf5.js";import"./Collection-_eYgYWgZ.js";import"./index-DJIGBTlK.js";import"./Separator-DgpQfLKS.js";import"./SelectionManager-ozZHd2bM.js";import"./useEvent-BugpiwQQ.js";import"./scrollIntoView-D6PMwzyg.js";import"./SelectionIndicator-DxzNcjr0.js";import"./useDescription-DAIDaPzO.js";import"./ListKeyboardDelegate-VCFxA376.js";import"./PressResponder-unK_X4Q1.js";import"./useLocalizedStringFormatter-DeI5I3jv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1LaiR6c.js";import"./getScrollParent-DKWwh6Kx.js";import"./VisuallyHidden-eByAjNhP.js";import"./x-69nCWHEw.js";import"./createLucideIcon-tb5hO106.js";import"./useLocalizedStringFormatter-B4MD3dHV.js";import"./Heading-BPZQUmdc.js";import"./Button-aQxjv1sN.js";import"./Button.module-BB7N-cLd.js";import"./info-Q001cZ2X.js";import"./Popover-B5U5aly0.js";import"./Form-BfR1VJr9.js";import"./useField-BtMr3my9.js";import"./check-g1TkqrGf.js";import"./useToggleState-D95qaSc0.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
