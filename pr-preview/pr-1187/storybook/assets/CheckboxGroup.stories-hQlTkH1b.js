import{j as e}from"./iframe-B04rcWcX.js";import{C as m}from"./CheckboxGroup-CGV1iyld.js";import{C as p}from"./Checkbox-4KJNu4aJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-sVMV4FJK.js";import"./utils-5SWrrdiI.js";import"./clsx-B-dksMZM.js";import"./Text-b-jINt27.js";import"./useFocusRing-DOTrmHAk.js";import"./index-DR4XYI1U.js";import"./index-Co-GRlRp.js";import"./clsx-Ciqy0D92.js";import"./Text-CLa1xROh.js";import"./Label-CJq39tjp.js";import"./Button-BsMpdhm5.js";import"./Hidden-CsiOlUYT.js";import"./useLabel-CuMqu2Vz.js";import"./useLabels-gSO7jKxM.js";import"./useButton-CqaBofGl.js";import"./Dialog-DHTxuggn.js";import"./RSPContexts-vJw7lJG0.js";import"./OverlayArrow-DJ22-BOT.js";import"./useResizeObserver-BSb8Szfs.js";import"./useControlledState-C9VnzheA.js";import"./Collection-CrsfpYCF.js";import"./index-CVsQAfIo.js";import"./Separator-C_SJbcIr.js";import"./SelectionManager-DdJ7u2hC.js";import"./useEvent-0NoNGJv_.js";import"./scrollIntoView-BAmPtIRu.js";import"./SelectionIndicator-WM-tAzaM.js";import"./useDescription-CIjr0h8X.js";import"./ListKeyboardDelegate-R7NtbQO_.js";import"./PressResponder-yvF--Wmz.js";import"./useLocalizedStringFormatter-D6BZiHkU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BmiF16cr.js";import"./getScrollParent-JaIoxddM.js";import"./VisuallyHidden-wR3lvsEV.js";import"./x-BCKhYY4g.js";import"./createLucideIcon-VXkpW6uL.js";import"./useLocalizedStringFormatter-C68HHjER.js";import"./Heading-Eb1FE2dJ.js";import"./Button-9yaBleaj.js";import"./Button.module-BB7N-cLd.js";import"./info-BFzXO6ej.js";import"./Popover-C0Q7WM39.js";import"./Form-CZN0lRlC.js";import"./useField-M3tSI_SU.js";import"./check-HCbLmeKq.js";import"./useToggleState-fufmkgO9.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
