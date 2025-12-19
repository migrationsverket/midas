import{j as e}from"./iframe-Bbu1_rOe.js";import{C as m}from"./CheckboxGroup-C_isTXi7.js";import{C as p}from"./Checkbox-B5Bdm_M6.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CkqjPv4F.js";import"./utils-DzUH-LiJ.js";import"./clsx-B-dksMZM.js";import"./Text-I1JxsJhT.js";import"./useFocusRing-DktvivXH.js";import"./index-Gy34tXsq.js";import"./index-BjrDVlup.js";import"./clsx-Ciqy0D92.js";import"./Text-BWc7fTRi.js";import"./Label-DoDLnRQs.js";import"./Button-BfBJNH2a.js";import"./Hidden-DIc6BQrj.js";import"./useLabels-Dh87fkX6.js";import"./useButton-qeywHX_w.js";import"./Dialog-BvFaO__U.js";import"./RSPContexts-DpwWeNGS.js";import"./OverlayArrow-D9n0yWdO.js";import"./useResizeObserver-x1lsz8v9.js";import"./useControlledState-C-Y-9GQh.js";import"./Collection-DNXXbKi1.js";import"./index-BYqhdPck.js";import"./Separator-CMgRjzDZ.js";import"./SelectionManager-DTdXD_WL.js";import"./useEvent-b0-AAngS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-1ZSNCFY8.js";import"./useDescription-CKADf4-J.js";import"./ListKeyboardDelegate-BHKEotvc.js";import"./PressResponder-DCJkoKxb.js";import"./useLocalizedStringFormatter-B-Hd1imC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ClJN9I7W.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bmla7vNF.js";import"./Button-DiLNuEQM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-7EqjOiW5.js";import"./createLucideIcon-QX8cppGT.js";import"./x-ByJYHghm.js";import"./Heading-6aaRBt_3.js";import"./info-CvR4PK9V.js";import"./Popover-PcKybAgC.js";import"./useFormValidation-D_oZTZdh.js";import"./useField-DFlr4vf-.js";import"./Form-BNX8v5Tt.js";import"./check-D8f66hRG.js";import"./useToggleState-F9G0PCuJ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
