import{j as e}from"./iframe-Cjj-T_WN.js";import{C as m}from"./CheckboxGroup-DwKsWujZ.js";import{C as p}from"./Checkbox-_sGQrm3h.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DCk6hMOV.js";import"./utils-CcLbDqYB.js";import"./clsx-B-dksMZM.js";import"./Text-DGl_bXVg.js";import"./useFocusRing-CwecGSw4.js";import"./index-ky7TdNXS.js";import"./index-CxmudArT.js";import"./clsx-Ciqy0D92.js";import"./Text-gU00Swsd.js";import"./Label-BDhh5IK7.js";import"./Button-DS8btNoB.js";import"./Hidden-tOizJ85m.js";import"./useLabels-DXBe3XOZ.js";import"./useButton-CHP-KyDJ.js";import"./Dialog-BlRqOkpt.js";import"./RSPContexts-CEwT9ion.js";import"./OverlayArrow-DFhFZFgc.js";import"./useResizeObserver-uQ4tqF06.js";import"./useControlledState-Cm5wADKy.js";import"./Collection-Bc46YrZb.js";import"./index-Bjzp8_a7.js";import"./Separator-sOO9Xwjo.js";import"./SelectionManager-BbkXqqxC.js";import"./useEvent-BUMkRfC-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CxcJoXpo.js";import"./useDescription-CG2NFrQv.js";import"./ListKeyboardDelegate-CHt1YSD7.js";import"./PressResponder-ChZ-4Ka6.js";import"./useLocalizedStringFormatter-GQWeNoaA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D64_Qquw.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CQopoBEp.js";import"./Button-BCd8eFMO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cqkyr2UN.js";import"./createLucideIcon-DY10d_On.js";import"./x-9sVUTFG0.js";import"./Heading-CC8Cq5su.js";import"./info-UmHw-h3B.js";import"./Popover-BS6rHAhu.js";import"./useFormValidation-CNZdG7U3.js";import"./useField-DFPpGYGR.js";import"./Form-aaRRhaPK.js";import"./check-BbdYmTYP.js";import"./useToggleState-B_YhhmIu.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
