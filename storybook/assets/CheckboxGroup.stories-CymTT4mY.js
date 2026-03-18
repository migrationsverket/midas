import{j as e}from"./iframe-GrObhQyq.js";import{C as m}from"./CheckboxGroup-Dzfu91gl.js";import{C as p}from"./Checkbox-EEkqL1DT.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BbmV2Vd2.js";import"./utils-BcHOgQs3.js";import"./clsx-B-dksMZM.js";import"./Text-DFdfdwaW.js";import"./useFocusRing-BFS8TNaT.js";import"./index-DEBi2S7D.js";import"./index-BYwjw4Yq.js";import"./clsx-Ciqy0D92.js";import"./Text-1Ne8nj-Z.js";import"./Label-BrKQFiVE.js";import"./Button-DeYdHRuW.js";import"./Hidden-dbsNdN1V.js";import"./useLabels-D8BolPkJ.js";import"./useButton-DFs2mCFz.js";import"./Dialog-CqJXuV41.js";import"./RSPContexts-DVG4WgYz.js";import"./OverlayArrow-DyGxqWGt.js";import"./useResizeObserver-C-37RCsu.js";import"./useControlledState-Dha0NZNW.js";import"./Collection-DtaPM21-.js";import"./index-BaVYZYKy.js";import"./Separator-BSbtXd3g.js";import"./SelectionManager-y2J_myWn.js";import"./useEvent-Cv_3xPK7.js";import"./scrollIntoView-CtxTz0vA.js";import"./SelectionIndicator-vByACUzS.js";import"./useDescription--BWWeftJ.js";import"./ListKeyboardDelegate-DLkccLYE.js";import"./PressResponder-CExxgSGa.js";import"./useLocalizedStringFormatter-Bn9Pd0zB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CsR8Hp83.js";import"./getScrollParent-aN5df5mj.js";import"./VisuallyHidden-CLjBotbO.js";import"./x-DctIqP8u.js";import"./createLucideIcon-CmYd0_U9.js";import"./useLocalizedStringFormatter-Cn3i1neC.js";import"./Heading-CzDS6V1R.js";import"./Button-Cc5OvUjG.js";import"./Button.module-BB7N-cLd.js";import"./info-CXct2d6o.js";import"./Popover-DIuRm1ch.js";import"./useFormValidation-BNKR3t-o.js";import"./useField-Bjtci_Fy.js";import"./Form-CQVTLubV.js";import"./check-Db3YmwSp.js";import"./useToggleState-BndUGm7c.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
