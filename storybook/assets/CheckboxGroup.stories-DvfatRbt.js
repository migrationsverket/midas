import{j as e}from"./iframe-CS97_aKA.js";import{C as m}from"./CheckboxGroup-B3k5Zvtr.js";import{C as p}from"./Checkbox-DVqrVnSh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bgv3wgUX.js";import"./utils-Csn9hih_.js";import"./clsx-B-dksMZM.js";import"./Text-DllmWVRt.js";import"./useFocusRing-D6iyZNHD.js";import"./index-DiAF0rSe.js";import"./index-B-J3B99e.js";import"./clsx-Ciqy0D92.js";import"./Text-BsEp3Lpg.js";import"./Label-BDm2au-6.js";import"./Button-BEBLvHt_.js";import"./Hidden-CZHel-hh.js";import"./useLabels-BnGDleQi.js";import"./useButton-BQMSADAy.js";import"./Dialog-De7-YKVD.js";import"./RSPContexts-CFWUJItL.js";import"./OverlayArrow-UYFu1rrw.js";import"./useResizeObserver-1dwTHbMM.js";import"./useControlledState-DJ6meZbb.js";import"./Collection-BApChUOw.js";import"./index-Cu6_2N_X.js";import"./Separator-B7QslHwr.js";import"./SelectionManager-BjwXPLp2.js";import"./useEvent-D0H0aX9U.js";import"./scrollIntoView-BRhOFysU.js";import"./SelectionIndicator-CwDxAhdf.js";import"./useDescription-ChcQRQvy.js";import"./ListKeyboardDelegate-Dk3x5F9m.js";import"./PressResponder-W0HbzxSx.js";import"./useLocalizedStringFormatter-DHK9UVHX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BvqAEV7Q.js";import"./getScrollParent-BvsZnnQg.js";import"./VisuallyHidden-XYRUvUKq.js";import"./x-BZc_-WXG.js";import"./createLucideIcon-CpkX-fVF.js";import"./useLocalizedStringFormatter-Qz3N5T4H.js";import"./Heading-9Vi9Qzh3.js";import"./Button-BxQXJJlf.js";import"./Button.module-BB7N-cLd.js";import"./info-CeBQhmNt.js";import"./Popover-CTKC9Jvy.js";import"./Form-DngweuD1.js";import"./useField-nSphnUF2.js";import"./check-DsaU-ucz.js";import"./useToggleState-087u5uom.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
