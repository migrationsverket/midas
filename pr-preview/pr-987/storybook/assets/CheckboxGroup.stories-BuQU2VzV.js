import{j as e}from"./iframe-BCu1NNFI.js";import{C as m}from"./CheckboxGroup-BF6jkLqD.js";import{C as p}from"./Checkbox-ECpasRug.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D_bX0XbT.js";import"./utils-fj1shBHC.js";import"./clsx-B-dksMZM.js";import"./Text-CSC27xRH.js";import"./useFocusRing-Bi2l9BeF.js";import"./index-BORhhh-V.js";import"./index-pb47Dny1.js";import"./clsx-Ciqy0D92.js";import"./Text-DIEFoepW.js";import"./Label-Di-e5hF1.js";import"./Button-vp3BXzyW.js";import"./Hidden-CM3Yk7lA.js";import"./useLabels-Ck0jGj4V.js";import"./useButton-tpmepzyq.js";import"./Dialog-D6q0lrqi.js";import"./RSPContexts-DJXEp2S5.js";import"./OverlayArrow-odf6ZOFz.js";import"./useResizeObserver-DGcL359J.js";import"./useControlledState-Dejsun2t.js";import"./Collection-DrnD_mb9.js";import"./index-A6fGDA3Y.js";import"./Separator-CVPTInOe.js";import"./SelectionManager-NLv3mXy-.js";import"./useEvent-CklH_3Xl.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DgLJ-CM6.js";import"./useDescription-BP344jV7.js";import"./ListKeyboardDelegate-CL7x_221.js";import"./PressResponder-DOQmugY8.js";import"./useLocalizedStringFormatter-BQINCQnu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BJ2pAY63.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BUlrvxyt.js";import"./Button-D-exP_iM.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-DO5bmpoD.js";import"./createLucideIcon-B5Es93Ur.js";import"./x-C6-boS8J.js";import"./Heading-CHeMvKF_.js";import"./info-CDa19jTp.js";import"./Popover-8Cinnvn1.js";import"./useFormValidation-BEqNihOK.js";import"./useField-DIMoLOh1.js";import"./Form-Dzub4ZCL.js";import"./check-B4ey84A2.js";import"./useToggleState-BFMAy9xG.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
