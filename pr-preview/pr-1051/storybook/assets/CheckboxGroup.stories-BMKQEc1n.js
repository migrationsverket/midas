import{j as e}from"./iframe-xM6GPlxZ.js";import{C as m}from"./CheckboxGroup-d8hHjkkP.js";import{C as p}from"./Checkbox-C1c9CqcC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CI525PUG.js";import"./utils-BWmJmXij.js";import"./clsx-B-dksMZM.js";import"./Text-eaDz3eV1.js";import"./useFocusRing-QfzGUTUK.js";import"./index-Cg05t2G5.js";import"./index-DC2xKSlP.js";import"./clsx-Ciqy0D92.js";import"./Text-CHMvJdTr.js";import"./Label-C0BfwsP2.js";import"./Button-D0EwoScf.js";import"./Hidden-CNNVQzIs.js";import"./useLabels-C6Mi33Cz.js";import"./useButton-CI69bHTl.js";import"./Dialog-DTsORP6i.js";import"./RSPContexts-CBBqJTPm.js";import"./OverlayArrow-C6VILOrM.js";import"./useResizeObserver-D2ClN3Ot.js";import"./useControlledState-C_N3S3lP.js";import"./Collection-DUrw-iXY.js";import"./index-q8a9In3r.js";import"./Separator-D6ficfAW.js";import"./SelectionManager-e2Kt43cd.js";import"./useEvent-D1PWkF_3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DUE9LE0r.js";import"./useDescription-DRbU8aXx.js";import"./ListKeyboardDelegate-BC8BrP6H.js";import"./PressResponder-BSgxSSHD.js";import"./useLocalizedStringFormatter-CX9bacHe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CbX6MLUB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Ck-DDgGV.js";import"./Button-CKxI1r1_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfPLxaXy.js";import"./createLucideIcon-D-PEwym-.js";import"./x-Bs38igXL.js";import"./Heading-wS7RUvpX.js";import"./info-Cb79Xs7I.js";import"./Popover-CgGrnuR1.js";import"./useFormValidation-6nG_QMyJ.js";import"./useField-DhjOGZIF.js";import"./Form-D-7e8gY8.js";import"./check-CwsgTExN.js";import"./useToggleState--oZM_I2S.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
