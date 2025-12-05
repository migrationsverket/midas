import{j as e}from"./iframe-DvQx2gHF.js";import{C as m}from"./CheckboxGroup-DP2ctGA_.js";import{C as p}from"./Checkbox-DjZW6ZXd.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DS02Wc0O.js";import"./utils-kfQmERKd.js";import"./clsx-B-dksMZM.js";import"./Text-DEDKiYgd.js";import"./useFocusRing-DA1DKtBL.js";import"./index-B92ZKY4H.js";import"./index-DZ0gSeKU.js";import"./clsx-Ciqy0D92.js";import"./Text-CeKhBkxD.js";import"./Label-69gCBUy1.js";import"./Button-7kzFrNDU.js";import"./Hidden-CjIUyCHW.js";import"./useLabels-CZfFJAUf.js";import"./useButton-Bt6boJfA.js";import"./Dialog-C95XLiib.js";import"./RSPContexts-yU5fq5U4.js";import"./OverlayArrow-DhxTPD6z.js";import"./useResizeObserver-DkJXa8WC.js";import"./useControlledState-DOrx9kOQ.js";import"./Collection-BEQ3VvZG.js";import"./index-Dx8oh3-6.js";import"./Separator-iW54WtdU.js";import"./SelectionManager-jqduvZp3.js";import"./useEvent-DMnH7e8B.js";import"./scrollIntoView-DalvlgH8.js";import"./SelectionIndicator-CVhZMUq0.js";import"./useDescription-iLPOYYta.js";import"./ListKeyboardDelegate-DDuB35RB.js";import"./PressResponder-ChRN2HnX.js";import"./useLocalizedStringFormatter--PBbunYI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B92Iv5XW.js";import"./VisuallyHidden-25PLEdNG.js";import"./Button-LMMkuH17.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DlX39nGo.js";import"./createLucideIcon-B90TrqxK.js";import"./x-C-u_grC0.js";import"./Heading-DBAarICY.js";import"./info-vYmAjJRi.js";import"./Popover-D_Hckzz1.js";import"./useFormValidation-Dif47p0R.js";import"./useField-BhZGmss7.js";import"./Form-Ce8HaIjg.js";import"./check-D1PEjbyu.js";import"./useToggleState-QDuGXMmk.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
