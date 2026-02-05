import{j as e}from"./iframe-DQprq_kP.js";import{C as m}from"./CheckboxGroup-gI_du4-2.js";import{C as p}from"./Checkbox-C0XRNjK5.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dp6D5HDL.js";import"./utils-CzYL7WyR.js";import"./clsx-B-dksMZM.js";import"./Text-DvwepU_B.js";import"./useFocusRing-BVbjxz3f.js";import"./index-Zi6SpqS6.js";import"./index-BkSkOuU3.js";import"./clsx-Ciqy0D92.js";import"./Text-BezPGlQS.js";import"./Label-_nhONEG_.js";import"./Button-DWUsuc72.js";import"./Hidden-BWrSuujl.js";import"./useLabels-ZvQNUnV5.js";import"./useButton-BnQ8yP1B.js";import"./Dialog-CT34nMoo.js";import"./RSPContexts-BiHEw_SQ.js";import"./OverlayArrow-Cn3H2BnM.js";import"./useResizeObserver-Cv2PDqBS.js";import"./useControlledState-cwJwYt4X.js";import"./Collection-CcekytqK.js";import"./index-Cts5wTmE.js";import"./Separator-IRg4fm7P.js";import"./SelectionManager-B1dinrhP.js";import"./useEvent-ZYXRQoQI.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-h3b0GmHJ.js";import"./useDescription-Biv56RfI.js";import"./ListKeyboardDelegate-CY-jE1ru.js";import"./PressResponder-D5jy6-4e.js";import"./useLocalizedStringFormatter-BzU75U7z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RNoxVknm.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-p948zCvh.js";import"./Button-BqlETkBs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BUsvZMK4.js";import"./createLucideIcon-DrbblNCp.js";import"./x-DU8z3NoO.js";import"./Heading-ncacdurI.js";import"./info-Cr3QR3Jm.js";import"./Popover-C83hkT5Q.js";import"./useFormValidation-Dn6RDdQ2.js";import"./useField-CfLWi5yw.js";import"./Form-Dq0mzgBq.js";import"./check-DCkO_6z5.js";import"./useToggleState-BW3rGxKj.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
