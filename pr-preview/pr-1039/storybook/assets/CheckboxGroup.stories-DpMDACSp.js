import{j as e}from"./iframe-Zc8QEBEs.js";import{C as m}from"./CheckboxGroup-Bum8PhpB.js";import{C as p}from"./Checkbox-C55lLpIU.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-RKqcL0cn.js";import"./utils-B5Ft6r77.js";import"./clsx-B-dksMZM.js";import"./Text-D3gJufSD.js";import"./useFocusRing-DVsvUXQz.js";import"./index-D1lEo7Ix.js";import"./index-CTsCTBIR.js";import"./clsx-Ciqy0D92.js";import"./Text-DJvoMdLY.js";import"./Label-BMEK7aOq.js";import"./Button-CVF2QLQE.js";import"./Hidden-CwlmQhVF.js";import"./useLabels-B1tM-n7Q.js";import"./useButton-CeK3qSVj.js";import"./Dialog-DhvD1and.js";import"./RSPContexts-D6ksqvWo.js";import"./OverlayArrow-DK_Hqowl.js";import"./useResizeObserver-BHwzkzeg.js";import"./useControlledState--JkDKSQL.js";import"./Collection-DNsKHJEo.js";import"./index-BjRnP0Cx.js";import"./Separator-BawHnKHm.js";import"./SelectionManager-C89loMqR.js";import"./useEvent-sXQWxw0f.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Db61joGp.js";import"./useDescription-Bmj6vDCw.js";import"./ListKeyboardDelegate-ra7BEp36.js";import"./PressResponder-DqvWa8Dy.js";import"./useLocalizedStringFormatter-BktvRcda.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C6Zd2BsO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DAd_ytwS.js";import"./Button-Dkxo3GyP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bj4PzUKr.js";import"./createLucideIcon-BfbY4clK.js";import"./x-DLzHvAkE.js";import"./Heading-C0aUvMQS.js";import"./info-CCkJueSN.js";import"./Popover-CyWwcwZc.js";import"./useFormValidation-Bbgo3ES6.js";import"./useField-CvXnBGYy.js";import"./Form-DfY9cbLS.js";import"./check-DHxJ7m9P.js";import"./useToggleState-Z5C6-2Oh.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
