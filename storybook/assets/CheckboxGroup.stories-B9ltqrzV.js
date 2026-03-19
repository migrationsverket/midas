import{j as e}from"./iframe-BPfLM7Ck.js";import{C as m}from"./CheckboxGroup-CQA5E9EM.js";import{C as p}from"./Checkbox-Zh4JyBSa.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DA7YJhow.js";import"./utils-CSi4b_Yv.js";import"./clsx-B-dksMZM.js";import"./Text-EDTELklb.js";import"./useFocusRing-CsxpvGDo.js";import"./index-rhZ-B0wi.js";import"./index-CiQawPHP.js";import"./clsx-Ciqy0D92.js";import"./Text-BuCe-OoK.js";import"./Label-RgtPmABy.js";import"./Button-BCZt_uJ2.js";import"./Hidden-_AH0dQ5R.js";import"./useLabels-BKPQIAbg.js";import"./useButton-B_Q5X_Fs.js";import"./Dialog-BMNCcI2B.js";import"./RSPContexts-D9Yw33px.js";import"./OverlayArrow-CS9HY3wG.js";import"./useResizeObserver-BrTE7e-k.js";import"./useControlledState-Bu5kp2Ub.js";import"./Collection-BQtUKtyD.js";import"./index-B2dVWoa8.js";import"./Separator-B9mn1y_N.js";import"./SelectionManager-B2JOCuch.js";import"./useEvent-DxJgb46r.js";import"./scrollIntoView-AZss3pZ2.js";import"./SelectionIndicator-C-SiOrEg.js";import"./useDescription-BfSwuuI8.js";import"./ListKeyboardDelegate-QVPoGO6w.js";import"./PressResponder-Za_og5c9.js";import"./useLocalizedStringFormatter-L6JiFowf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-LgB075F6.js";import"./getScrollParent-Ci5vFefB.js";import"./VisuallyHidden-BbgyoPj6.js";import"./x-B_Ef23XO.js";import"./createLucideIcon-DawqXxM8.js";import"./useLocalizedStringFormatter-DYlaFC6-.js";import"./Heading-pLnr3ITY.js";import"./Button-DJ8_vDZW.js";import"./Button.module-BB7N-cLd.js";import"./info-DTRw0v26.js";import"./Popover-B02wHmBo.js";import"./Form-CrktwBOH.js";import"./useField-C8qUntCT.js";import"./check-CfFA-K-u.js";import"./useToggleState-yS1wF-aE.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
