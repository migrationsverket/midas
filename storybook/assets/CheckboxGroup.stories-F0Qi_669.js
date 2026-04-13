import{j as e}from"./iframe-XBMlEgFB.js";import{C as m}from"./CheckboxGroup-BE8-c94i.js";import{C as p}from"./Checkbox-ZkA_1OMK.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-qc1sXTm5.js";import"./utils-Cc5G8ViG.js";import"./clsx-B-dksMZM.js";import"./Text-86sbONsT.js";import"./useFocusRing-DuQiYGUN.js";import"./index-fc9UsKt1.js";import"./index-DcS3vXtE.js";import"./clsx-Ciqy0D92.js";import"./Text-BZ6aPD5a.js";import"./Label-BDFL5AT1.js";import"./Button-BzKQzIb5.js";import"./Hidden-DmPMVnI9.js";import"./useLabel-CDvp7ZEq.js";import"./useLabels-BRX5yLgs.js";import"./useButton-Cl00IDBI.js";import"./Dialog-Ddzey_y7.js";import"./RSPContexts-CjMPhbqA.js";import"./OverlayArrow-DBj52cG9.js";import"./useResizeObserver-Du6-Az5U.js";import"./useControlledState-DEjZXUVu.js";import"./Collection-DcqgxSB4.js";import"./index-BPoFj_vg.js";import"./Separator-DeV10lVq.js";import"./SelectionManager-DqOOi4Gi.js";import"./useEvent-BKpTOEzW.js";import"./scrollIntoView-BbcvzxoF.js";import"./SelectionIndicator-DiIFfW39.js";import"./useDescription-BL_Y3ATo.js";import"./ListKeyboardDelegate-oxEhV0y3.js";import"./PressResponder-BNRNLcJD.js";import"./useLocalizedStringFormatter-Bu_qbSQ2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CuVT7vSv.js";import"./getScrollParent-D5DjdUZx.js";import"./VisuallyHidden-C4noZ6lE.js";import"./Modal-qm884p6D.js";import"./x-BNnKlOhJ.js";import"./createLucideIcon-CPar-zam.js";import"./useLocalizedStringFormatter-B3T1U-R5.js";import"./Heading-ekHWI8iy.js";import"./Button-CkmlK4go.js";import"./Button.module-BB7N-cLd.js";import"./info-Do_gKMJl.js";import"./Popover-DL6fDMmy.js";import"./Form-BpH7O1vT.js";import"./useField-BMLfgxz1.js";import"./check-B2pw-0P_.js";import"./useToggleState-CDw3Cs3M.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
