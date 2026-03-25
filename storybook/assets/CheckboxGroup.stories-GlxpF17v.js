import{j as e}from"./iframe-CJiLO33n.js";import{C as m}from"./CheckboxGroup-CcL3xlAf.js";import{C as p}from"./Checkbox-zdevZpKY.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dd2S8Fqt.js";import"./utils-BwIbfVvT.js";import"./clsx-B-dksMZM.js";import"./Text-Cu_x9kkp.js";import"./useFocusRing-BwtfOiN2.js";import"./index-DCLVDLzL.js";import"./index-CWQvnVll.js";import"./clsx-Ciqy0D92.js";import"./Text-B20Rga9k.js";import"./Label-BjMsnx-W.js";import"./Button-BPl7GMUn.js";import"./Hidden-GX2Gt-Bh.js";import"./useLabels-CLDCP1oZ.js";import"./useButton-CDfLXD9h.js";import"./Dialog-Ifg-_Dys.js";import"./RSPContexts-T3bE05r6.js";import"./OverlayArrow-BB9H5V-4.js";import"./useResizeObserver-RtJjUC71.js";import"./useControlledState-sn3ZKmd0.js";import"./Collection-j5V17JOV.js";import"./index-B5c10GPd.js";import"./Separator-CfH_KHh1.js";import"./SelectionManager-BGpjjaC5.js";import"./useEvent-B4Mg-F-r.js";import"./scrollIntoView-CqRJ3xkb.js";import"./SelectionIndicator-DcydaaTe.js";import"./useDescription-t2KTHtwf.js";import"./ListKeyboardDelegate-D0q8X-cK.js";import"./PressResponder-C191u1IG.js";import"./useLocalizedStringFormatter-BwFxFA-j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dhf1ggeJ.js";import"./getScrollParent-CrmutzXr.js";import"./VisuallyHidden-DMMbRnDT.js";import"./x-CEEDctr_.js";import"./createLucideIcon-DApbN3tp.js";import"./useLocalizedStringFormatter-CDDiG4UU.js";import"./Heading-Bl8ISOL7.js";import"./Button-u-2V4ARC.js";import"./Button.module-BB7N-cLd.js";import"./info-CKD6Bj3O.js";import"./Popover-DH2CFCE5.js";import"./Form-CzM7f-FM.js";import"./useField-BDsDA6Qn.js";import"./check-Bu5yePmF.js";import"./useToggleState-BzrznYj0.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
