import{j as e}from"./iframe-BAopCnld.js";import{C as m}from"./CheckboxGroup-D73dvXNc.js";import{C as p}from"./Checkbox-BuxfpDUO.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CkW_duZ2.js";import"./utils-TYM9m5l-.js";import"./clsx-B-dksMZM.js";import"./Text-CDzIZS0i.js";import"./useFocusRing-Cj-Dx8Kj.js";import"./index-CdNRYS6s.js";import"./index-DlrHJv33.js";import"./clsx-Ciqy0D92.js";import"./Text-BfWzCbJi.js";import"./Label-D9T8WZZH.js";import"./Button-Dru9a9zr.js";import"./Hidden-DY-k-QkJ.js";import"./useLabels-C7py-VLT.js";import"./useButton-Bi-jV0pn.js";import"./Dialog-B9DlX-ft.js";import"./RSPContexts-D4u5AE_u.js";import"./OverlayArrow-D7TMnEFi.js";import"./useResizeObserver-CC-iSxbA.js";import"./useControlledState-BtrDhWy8.js";import"./Collection-BoGR0YWJ.js";import"./index-CW9ggjBK.js";import"./Separator-CZ5LEiPC.js";import"./SelectionManager-DQ3alK7K.js";import"./useEvent-CX3pPkMV.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B-o6hBnH.js";import"./useDescription-BLJw6CQp.js";import"./ListKeyboardDelegate-BTbds_TW.js";import"./PressResponder-Bg36ScGZ.js";import"./useLocalizedStringFormatter-CbSKOlm6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-9_9nCKze.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C-nRUGXf.js";import"./Button-DUq5Osur.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-D8BA2qO_.js";import"./createLucideIcon-CIlyQxOt.js";import"./x-e8tzunbl.js";import"./Heading-DsKKyaDB.js";import"./info-CYC8I8tw.js";import"./Popover-CjHQR1-6.js";import"./useFormValidation-BzG8sa6-.js";import"./useField-9pxSoNHy.js";import"./Form-bOnRh8z6.js";import"./check-3tPvsBvc.js";import"./useToggleState-DPkMCuhi.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
