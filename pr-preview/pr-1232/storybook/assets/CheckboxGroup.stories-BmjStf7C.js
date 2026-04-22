import{j as e}from"./iframe-9MdBivRm.js";import{C as m}from"./CheckboxGroup-C8FrmxiO.js";import{C as p}from"./Checkbox-DQ-BVXcV.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C2tntPOB.js";import"./utils-Bn94QCjx.js";import"./clsx-B-dksMZM.js";import"./Text-DqogYLWC.js";import"./useFocusRing-r9TCofSe.js";import"./index-Cx-gCRg0.js";import"./index-CYPjKd3_.js";import"./clsx-Ciqy0D92.js";import"./Text-B_WlxrH5.js";import"./Label-Bs41Ym4u.js";import"./Button-CB5roEUk.js";import"./Hidden-mlaG9dyz.js";import"./useLabel-DJ2FRaty.js";import"./useLabels-BVQx-2qb.js";import"./useButton-9AsuX9J0.js";import"./Dialog-DaF6TB58.js";import"./RSPContexts-yk-QUR19.js";import"./OverlayArrow-CqrmYGFz.js";import"./useResizeObserver-CZjLM8fY.js";import"./useControlledState-DASGxOGH.js";import"./Collection-DOip7Or5.js";import"./index-dnLCjEtw.js";import"./Separator-TmOyzQOi.js";import"./SelectionManager-BfxyxeUx.js";import"./useEvent-CzJ1Xvo0.js";import"./scrollIntoView--qBAJMrU.js";import"./SelectionIndicator-BAejuz9T.js";import"./useDescription-u6RsoVs5.js";import"./ListKeyboardDelegate-BTGk-Kg0.js";import"./PressResponder-CblWJY4v.js";import"./useLocalizedStringFormatter-BqBDGzJt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DAWiQObg.js";import"./getScrollParent-B8busNPw.js";import"./VisuallyHidden-B5GjKkS-.js";import"./ModalOverlay-LJAR0MMG.js";import"./x-m6itTsWf.js";import"./createLucideIcon-w3wG1Pu8.js";import"./useLocalizedStringFormatter-BF9QVzFe.js";import"./Heading-CyZPaCxb.js";import"./Button-oaXlsJtI.js";import"./Button.module-BB7N-cLd.js";import"./info-B6K8NiBh.js";import"./Popover-tdWd4ACh.js";import"./Form-Crvut_kx.js";import"./useField-B-NHG1Dy.js";import"./check-Cg0GVAjN.js";import"./useToggleState-Cd_5kGms.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
