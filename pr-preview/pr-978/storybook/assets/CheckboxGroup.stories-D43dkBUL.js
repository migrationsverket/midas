import{j as e}from"./iframe-CyOFsxEw.js";import{C as m}from"./CheckboxGroup-Ba_WcgX3.js";import{C as p}from"./Checkbox-CuwIvN1R.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C2jTShGg.js";import"./utils-GLgclvkH.js";import"./clsx-B-dksMZM.js";import"./Text-CmPsAR7I.js";import"./useFocusRing-D8aNkt7i.js";import"./index-CU2F3nqQ.js";import"./index-Cbz2sGVE.js";import"./clsx-Ciqy0D92.js";import"./Text-DwafAf6m.js";import"./Label-DI6kJdUh.js";import"./Button-Da0V7IB-.js";import"./Hidden-cFLLFl7x.js";import"./useLabels-FLdwxISV.js";import"./useButton-DTZgQVqL.js";import"./Dialog-BHwed2ut.js";import"./RSPContexts-VrOQvCF9.js";import"./OverlayArrow-BZRjbVIo.js";import"./useResizeObserver-Di6ymx9K.js";import"./useControlledState-BKJPrLB_.js";import"./Collection-D_daHII4.js";import"./index-C2G_04sS.js";import"./Separator-Du1NvCMN.js";import"./SelectionManager-BR4g4F9k.js";import"./useEvent-YyVnDDf-.js";import"./scrollIntoView-Eu14nWFE.js";import"./SelectionIndicator-DrWGbLYS.js";import"./useDescription-Dtypy5AE.js";import"./ListKeyboardDelegate-Dg1S5bcK.js";import"./PressResponder-CimXxjpH.js";import"./useLocalizedStringFormatter-CJ9ubZdj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B_Ain5hv.js";import"./VisuallyHidden-DCfUdHTK.js";import"./Button-DgFwcK1w.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BB5TyvbC.js";import"./createLucideIcon-CgjV2Kgp.js";import"./x-DrdwkuGC.js";import"./Heading-BE1H7Sh7.js";import"./info-C9yHlQr-.js";import"./Popover-Da_6dnxH.js";import"./useFormValidation-ClIr8owc.js";import"./useField-BVPNG5p2.js";import"./Form-BggWoa1O.js";import"./check-D4HxnEUf.js";import"./useToggleState-E1g-UcKA.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
