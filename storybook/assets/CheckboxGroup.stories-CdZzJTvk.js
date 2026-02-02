import{j as e}from"./iframe-D8kScJOW.js";import{C as m}from"./CheckboxGroup-DVfDocc-.js";import{C as p}from"./Checkbox-CzKaCAqq.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BGTGmZtQ.js";import"./utils-DOIpWP0z.js";import"./clsx-B-dksMZM.js";import"./Text-C9haNyBE.js";import"./useFocusRing-DX0NOpMY.js";import"./index-BwG7EFX-.js";import"./index-DoG9K020.js";import"./clsx-Ciqy0D92.js";import"./Text-dfzJJw2x.js";import"./Label-DFlKuMHx.js";import"./Button-Calv3qt8.js";import"./Hidden-DrIa5vju.js";import"./useLabels-CiWc5UlF.js";import"./useButton-CsXDdlLu.js";import"./Dialog-ER62G7Ju.js";import"./RSPContexts-gcY93-hk.js";import"./OverlayArrow-BeX7n3Lo.js";import"./useResizeObserver-CseDl3G8.js";import"./useControlledState-CfPp4VwR.js";import"./Collection-BRKsVRuR.js";import"./index-BTX46W9Q.js";import"./Separator-Dp8YfdW3.js";import"./SelectionManager-cqgo4LjN.js";import"./useEvent-CoP0H9dt.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Fg0uBFlh.js";import"./useDescription-B5GMnvdp.js";import"./ListKeyboardDelegate-h55wbdAx.js";import"./PressResponder-C5evyjsn.js";import"./useLocalizedStringFormatter-yHRbMNWv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-iBO0widl.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CmWP6aGN.js";import"./Button-yGMt3EcI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CnhkruPy.js";import"./createLucideIcon-D86DfHIr.js";import"./x-gesZXF53.js";import"./Heading-BOZMaqVo.js";import"./info-iomRrCVB.js";import"./Popover-B8G8AAdq.js";import"./useFormValidation-mZ0GSkOf.js";import"./useField-DdbhNNnT.js";import"./Form-SqAUoaNm.js";import"./check-CM05xaVE.js";import"./useToggleState-Bs_egr50.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
