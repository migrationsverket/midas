import{j as e}from"./iframe-BhyhdtXP.js";import{C as m}from"./CheckboxGroup-w1GBnKrx.js";import{C as p}from"./Checkbox-CW0uTy6F.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DCeVhp7S.js";import"./utils-CGWlpFgY.js";import"./clsx-B-dksMZM.js";import"./Text-B-Mbjzpq.js";import"./useFocusRing-CLgq8lqG.js";import"./index-B89a7HzS.js";import"./index-BOsuVa2L.js";import"./clsx-Ciqy0D92.js";import"./Text-jDKA3oAD.js";import"./Label-BqI3nq1y.js";import"./Button-C9H7bBoo.js";import"./Hidden-BdJ24Yzp.js";import"./useLabels-5ZaQnqMS.js";import"./useButton-BdEoA23r.js";import"./Dialog-CV6iNIfu.js";import"./RSPContexts-pAilTGuB.js";import"./OverlayArrow-CMwHKIIc.js";import"./useResizeObserver-DuZstJT9.js";import"./useControlledState-Dx8jPu5Z.js";import"./Collection-etEs1dki.js";import"./index-BWr0QrxI.js";import"./Separator-B-IRNIGq.js";import"./SelectionManager-cqG52ld-.js";import"./useEvent-lYhLdKrQ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CQlPeLkE.js";import"./useDescription-Dr1wl7PX.js";import"./ListKeyboardDelegate-BuCzJAIh.js";import"./PressResponder-TXqZCWpy.js";import"./useLocalizedStringFormatter-DfMqiQIc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUEPhhmF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C-jWiPOY.js";import"./Button-RHoYggw3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D44WV7Rd.js";import"./createLucideIcon-Cz3c_aCr.js";import"./x-D8pCTRyw.js";import"./Heading-aEQ5rkp1.js";import"./info-C3XlKCQB.js";import"./Popover-iQGdPM8P.js";import"./useFormValidation-DmOBSjg0.js";import"./useField-CaiZwujr.js";import"./Form-it9E688f.js";import"./check-xqIrTCLK.js";import"./useToggleState-CGYuykgO.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
