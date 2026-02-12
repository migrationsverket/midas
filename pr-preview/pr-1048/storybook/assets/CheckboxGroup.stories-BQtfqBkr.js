import{j as e}from"./iframe-Chekwr6M.js";import{C as m}from"./CheckboxGroup-9DmneM7H.js";import{C as p}from"./Checkbox-DamWw9J5.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DCB-eHPb.js";import"./utils-Dj64B4Ck.js";import"./clsx-B-dksMZM.js";import"./Text-d5-92hiR.js";import"./useFocusRing-CYwfk9cE.js";import"./index-D2-ul2QH.js";import"./index-BiGwtwNm.js";import"./clsx-Ciqy0D92.js";import"./Text-CNbIZlGx.js";import"./Label-CIhWk8XG.js";import"./Button-Z4awFVTj.js";import"./Hidden-Dy--Tx0W.js";import"./number-DfkVkf0F.js";import"./useLabels-DDXNXFW7.js";import"./useButton-D4rnmHPz.js";import"./Dialog-BkMCqRU4.js";import"./RSPContexts-B-5HPXFu.js";import"./OverlayArrow-C_kKr4TA.js";import"./useResizeObserver-Dp5qH922.js";import"./useControlledState-CLkXqHsM.js";import"./Collection-C8suguH5.js";import"./index-DBBfNPs6.js";import"./Separator-BsKQl79r.js";import"./SelectionManager-CCLf1y3R.js";import"./useEvent-Du-C-SwK.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B5UMCGiW.js";import"./useDescription-BaU05DyX.js";import"./ListKeyboardDelegate-C97Cy8pc.js";import"./PressResponder-jE3E7TsH.js";import"./useLocalizedStringFormatter-PB5CwfUm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-mznppo_U.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CfeHWJtp.js";import"./Modal-B37h07YR.js";import"./Button-D5FNdohA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BFGhiOXi.js";import"./createLucideIcon-CPHdlOig.js";import"./x-DVt_hLRk.js";import"./Heading-CaO4mVhn.js";import"./info-DnwbVtMC.js";import"./Popover-BCPIG4gw.js";import"./useFormValidation-DohLj8tG.js";import"./useField-CXgMMZV1.js";import"./Form-C1k2uELU.js";import"./check-DKw1rHLP.js";import"./useToggleState-BmQLkzXi.js";const mr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},t={args:{showSelectAll:!0}},a={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const cr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,a as SelectAllInteraction,t as ShowSelectAll,cr as __namedExportsOrder,mr as default};
