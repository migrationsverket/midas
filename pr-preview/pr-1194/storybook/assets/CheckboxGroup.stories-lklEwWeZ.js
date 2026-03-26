import{j as e}from"./iframe-O6mcP7w5.js";import{C as m}from"./CheckboxGroup-CsSTIyzZ.js";import{C as p}from"./Checkbox-B1X25U7e.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CxFm68nF.js";import"./utils-msXr86i8.js";import"./clsx-B-dksMZM.js";import"./Text-D-DusRzY.js";import"./useFocusRing-DFc_QmgH.js";import"./index-5zPEcam6.js";import"./index-DhMeVXuk.js";import"./clsx-Ciqy0D92.js";import"./Text-CWuBzebG.js";import"./Label-Cv8gCz4b.js";import"./Button-BzVOX2eA.js";import"./Hidden-BulmN4hD.js";import"./useLabel-mg3lGotN.js";import"./useLabels-CbW6k4sf.js";import"./useButton-B_n0RrdL.js";import"./Dialog-DRDY7rRZ.js";import"./RSPContexts-BOI8AU7_.js";import"./OverlayArrow-DitZJ59j.js";import"./useResizeObserver-D71yohu0.js";import"./useControlledState-BRRn0qym.js";import"./Collection-Dq87Sf6r.js";import"./index-xXeG0lh1.js";import"./Separator-DzwOrCEy.js";import"./SelectionManager-CeCDp6on.js";import"./useEvent-CVey6hCu.js";import"./scrollIntoView-MyDz4t7d.js";import"./SelectionIndicator-DS87ewSZ.js";import"./useDescription-Brvp-X9_.js";import"./ListKeyboardDelegate-D0ioaPo6.js";import"./PressResponder-BFJ5UQ3f.js";import"./useLocalizedStringFormatter-7LpUttql.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DnUad7nt.js";import"./getScrollParent-Ccg0N06N.js";import"./VisuallyHidden-CVj_UoLV.js";import"./x-76M_aj2E.js";import"./createLucideIcon-rh706yg9.js";import"./useLocalizedStringFormatter-Bp0OJ5-n.js";import"./Heading-Dpc1j2ct.js";import"./Button-I2L11CLA.js";import"./Button.module-BB7N-cLd.js";import"./info-Dd6jOY5C.js";import"./Popover-Hc5hc8uQ.js";import"./Form-DFAJxP4u.js";import"./useField-Cm9c8J8E.js";import"./check-DR3IAIDn.js";import"./useToggleState-a8DM34nB.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
