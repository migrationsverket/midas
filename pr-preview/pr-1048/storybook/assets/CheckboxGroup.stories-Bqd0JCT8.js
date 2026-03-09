import{j as e}from"./iframe-Bd3o2-kp.js";import{C as m}from"./CheckboxGroup-CgbbrotY.js";import{C as p}from"./Checkbox-empnHDOC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-uVOJT8DA.js";import"./utils-_rYlTRGE.js";import"./clsx-B-dksMZM.js";import"./Text-Cavz3YgX.js";import"./useFocusRing-_t-XzKAc.js";import"./index-DDX6x1th.js";import"./index-eLVcURWN.js";import"./clsx-Ciqy0D92.js";import"./Text-CXquw0of.js";import"./Label-Cnbf9fkH.js";import"./Button-OB4vCyak.js";import"./Hidden-I4t1GTdG.js";import"./useLabels-8gAUbgWu.js";import"./useButton-ckXfTI1r.js";import"./Dialog-QK030dQb.js";import"./RSPContexts-DXI9Wvdb.js";import"./OverlayArrow-CMlx2vsm.js";import"./useResizeObserver-32Qob3Xp.js";import"./useControlledState-CKr9JfDg.js";import"./Collection-C2tgBbeu.js";import"./index-DTQumf_p.js";import"./Separator-DlJA3qUb.js";import"./SelectionManager-D2-mM9qw.js";import"./useEvent-DfAY0KtM.js";import"./scrollIntoView-D_3VunV_.js";import"./SelectionIndicator-zc7AeVqB.js";import"./useDescription-Bwebj_p1.js";import"./ListKeyboardDelegate-CbnzhNFi.js";import"./PressResponder-BCagCpr_.js";import"./useLocalizedStringFormatter-CZQf7unD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B0e4j22H.js";import"./getScrollParent-x0CFFfYB.js";import"./VisuallyHidden-B2vIweuU.js";import"./Button-BQ7itNQZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CuqGYsZF.js";import"./createLucideIcon-CqPIwQix.js";import"./x-DMWTYIyv.js";import"./Heading-CzC_gkFh.js";import"./info-DFD-AHX0.js";import"./Popover-6uP7ffBU.js";import"./useFormValidation-D42WgsGp.js";import"./useField-j4rDUBO_.js";import"./Form-DMlpINIC.js";import"./check-C7inItIg.js";import"./useToggleState-DO0seavX.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
